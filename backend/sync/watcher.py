"""Local filesystem watcher for near-instant reindexing.

Watches the Obsidian vault with :mod:`watchdog` and triggers an incremental
rebuild shortly after the last change (debounced). This powers the "edit a note
in Obsidian → see it on the site within seconds" experience in local/dev mode.

It runs as a background thread so it can be started alongside the Django dev
server via ``python manage.py runserver --watch`` or the ``runwatcher`` command.
"""

from __future__ import annotations

import threading
import time
from typing import Optional

from django.conf import settings


class VaultWatcher:
    """Debounced watchdog that rebuilds the index on vault changes."""

    def __init__(self, debounce_seconds: float = 2.0):
        self._debounce = debounce_seconds
        self._dirty = threading.Event()
        self._stop = threading.Event()
        self._thread: Optional[threading.Thread] = None

    def _on_change(self, event):
        # Ignore directory events and Obsidian internal noise.
        src = getattr(event, "src_path", "") or ""
        if ".obsidian" in src or ".trash" in src:
            return
        if src.endswith(".md") or src.endswith(".png") or not hasattr(event, "is_directory") or event.is_directory is False:
            self._dirty.set()

    def start(self):
        try:
            from watchdog.events import FileSystemEventHandler
            from watchdog.observers import Observer
        except ImportError:
            print("[watcher] watchdog not installed; skipping local watcher.")
            return

        watcher = self

        class Handler(FileSystemEventHandler):
            def on_any_event(self, event):
                watcher._on_change(event)

        observer = Observer()
        observer.schedule(Handler(), settings.GARDEN_VAULT_PATH, recursive=True)
        observer.start()

        def _loop():
            while not watcher._stop.is_set():
                if watcher._dirty.wait(timeout=1.0):
                    # Debounce: wait for a quiet period before rebuilding.
                    time.sleep(watcher._debounce)
                    watcher._dirty.clear()
                    try:
                        from notes.index import rebuild_index

                        idx = rebuild_index()
                        st = idx.status()
                        print(f"[watcher] reindexed {st['noteCount']} notes.")
                    except Exception as exc:  # pragma: no cover
                        print(f"[watcher] rebuild failed: {exc}")

        self._thread = threading.Thread(target=_loop, daemon=True)
        self._thread.start()
        self._observer = observer
        print(f"[watcher] watching {settings.GARDEN_VAULT_PATH}")

    def stop(self):
        self._stop.set()
        if getattr(self, "_observer", None):
            self._observer.stop()
            self._observer.join()
