"""One-way mirror: native Obsidian vault -> the project's vault copy.

The app never reads the live OneDrive vault directly. Instead this module keeps
the in-project copy (``GARDEN_VAULT_PATH``) in sync with the source vault
(``GARDEN_SOURCE_VAULT``) and then triggers an index rebuild. This gives an
automated "edit in Obsidian -> see it on the site" loop without requiring git,
GitHub, or manual copying.

Design notes
------------
* Only Markdown + attachment files are mirrored (``.md``, ``.png``, ``.jpg``,
  ``.jpeg``, ``.gif``, ``.webp``, ``.svg``, ``.pdf``).
* Obsidian internals (``.obsidian``, ``.trash``, ``Excalidraw``) are skipped.
* A short debounce avoids copying a file while OneDrive is still writing it.
* An initial full mirror runs once on start so the copy is guaranteed current.
"""

from __future__ import annotations

import shutil
import threading
import time
from pathlib import Path
from typing import Optional

from django.conf import settings

# File types we mirror from the source vault into the copy.
_MIRROR_SUFFIXES = {
    ".md", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".pdf",
}
# Path fragments that are never mirrored.
_IGNORED_FRAGMENTS = (".obsidian", ".trash", "Excalidraw", ".stfolder", "z.raw notes")


def _is_ignored(path: Path) -> bool:
    return any(frag in p.lower() for p in path.parts for frag in _IGNORED_FRAGMENTS)


def _mirror_suffix_ok(path: Path) -> bool:
    return path.suffix.lower() in _MIRROR_SUFFIXES


class VaultMirror:
    """Watch the source vault and mirror changed files into the copy."""

    def __init__(self, debounce_seconds: float = 1.5):
        self.source = Path(settings.GARDEN_SOURCE_VAULT)
        self.dest = Path(settings.GARDEN_VAULT_PATH)
        self._debounce = debounce_seconds
        self._dirty = threading.Event()
        self._pending: set[str] = set()
        self._pending_lock = threading.Lock()
        self._stop = threading.Event()
        self._thread: Optional[threading.Thread] = None
        self._observer = None

    # -- file copying ---------------------------------------------------

    def copy_file(self, src_path: Path) -> bool:
        """Copy a single source file into the copy, preserving subfolders.

        Writes to a temp file then atomically replaces, so the indexer/reader
        never observes a half-written file.
        """
        try:
            rel = src_path.relative_to(self.source)
        except ValueError:
            return False
        target = self.dest / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        tmp = target.with_name(target.name + ".tmp")
        shutil.copy2(src_path, tmp)
        tmp.replace(target)
        return True

    def initial_sync(self) -> int:
        """Full one-time mirror of every eligible file from source -> copy."""
        if not self.source.exists():
            print(f"[mirror] source vault not found: {self.source}")
            return 0
        copied = 0
        for path in self.source.rglob("*"):
            if not path.is_file():
                continue
            rel = path.relative_to(self.source)
            if _is_ignored(rel) or not _mirror_suffix_ok(path):
                continue
            target = self.dest / rel
            try:
                if target.exists() and target.stat().st_size == path.stat().st_size:
                    continue  # unchanged
            except OSError:
                pass
            if self.copy_file(path):
                copied += 1
        print(f"[mirror] initial sync: {copied} file(s) mirrored.")
        return copied

    # -- event handling -------------------------------------------------

    def _on_change(self, event) -> None:
        src = getattr(event, "src_path", "") or ""
        if not src:
            return
        path = Path(src)
        try:
            rel = path.relative_to(self.source)
        except ValueError:
            return
        if _is_ignored(rel) or not _mirror_suffix_ok(path):
            return
        # Deletions: remove from the copy too.
        if getattr(event, "event_type", "") == "deleted":
            target = self.dest / rel
            if target.exists():
                try:
                    target.unlink()
                    print(f"[mirror] deleted {rel}")
                except OSError:
                    pass
            self._dirty.set()
            return
        with self._pending_lock:
            self._pending.add(str(path))
        self._dirty.set()

    # -- lifecycle ------------------------------------------------------

    def start(self, initial_sync: bool = True) -> None:
        try:
            from watchdog.events import FileSystemEventHandler
            from watchdog.observers import Observer
        except ImportError:
            print("[mirror] watchdog not installed; cannot start mirror.")
            return

        if initial_sync:
            self.initial_sync()

        mirror = self

        class Handler(FileSystemEventHandler):
            def on_any_event(self, event):
                mirror._on_change(event)

        self._observer = Observer()
        self._observer.schedule(Handler(), str(self.source), recursive=True)
        self._observer.start()

        def _loop():
            while not mirror._stop.is_set():
                if mirror._dirty.wait(timeout=1.0):
                    # Debounce: let OneDrive finish writing before we copy.
                    time.sleep(mirror._debounce)
                    with mirror._pending_lock:
                        batch = list(mirror._pending)
                        mirror._pending.clear()
                    mirror._dirty.clear()
                    copied = 0
                    for src in batch:
                        p = Path(src)
                        if p.exists() and mirror.copy_file(p):
                            copied += 1
                    if copied:
                        print(f"[mirror] synced {copied} file(s) -> reindexing…")
                    self._reindex()

        self._thread = threading.Thread(target=_loop, daemon=True)
        self._thread.start()
        print(f"[mirror] watching {self.source} -> {self.dest}")

    @staticmethod
    def _reindex() -> None:
        try:
            from notes.index import rebuild_index

            idx = rebuild_index()
            st = idx.status()
            print(f"[mirror] reindexed {st['noteCount']} notes.")
        except Exception as exc:  # pragma: no cover
            print(f"[mirror] rebuild failed: {exc}")

    def stop(self) -> None:
        self._stop.set()
        if self._observer:
            self._observer.stop()
            self._observer.join()

