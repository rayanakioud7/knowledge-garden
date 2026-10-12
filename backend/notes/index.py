"""In-memory vault index service.

The index is a singleton loaded from ``garden-index.json`` when fresh, or built
by scanning the vault. Rebuilds are triggered by:

* the ``build_index`` management command,
* the filesystem watcher (local, near-instant),
* the sync webhook + hourly scheduled pull (production, "deferred real-time").

Rendering of individual notes happens on demand with resolvers bound to the
currently loaded index, so wikilinks always point at real note ids.
"""

from __future__ import annotations

import json
import re
import threading
import time
import unicodedata
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from django.conf import settings

from parser.vault import scan_vault, Note
from parser.renderer import render_note


def _slug(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^\w\s-]", "", text.lower())
    text = re.sub(r"[\s]+", "-", text.strip())
    return text


class GardenIndex:
    """Thread-safe holder for the parsed vault + its rendered cache."""

    def __init__(self) -> None:
        self._lock = threading.RLock()
        self._notes: Dict[str, Note] = {}
        self._notes_by_id: Dict[str, Dict] = {}
        self._graph: Dict[str, object] = {"nodes": [], "edges": []}
        self._tag_counts: Dict[str, int] = {}
        self._last_build: float = 0.0
        self._last_stale_check: float = 0.0
        self._stale_interval: float = 30.0  # check disk at most once every 30s
        self._note_count: int = 0
        self._cache: Optional[Dict] = None

    # -- loading / building ------------------------------------------------

    def load_or_build(self, force_rebuild: bool = False) -> None:
        with self._lock:
            if force_rebuild:
                self.rebuild(force=True)
                return
            cached = self._load_cache()
            if cached and not self._cache_is_stale():
                self._apply_payload(cached)
                return
            self.rebuild()

    def rebuild(self, force: bool = False) -> None:
        """Scan the vault and (re)build the in-memory index + cache file."""
        vault_path = settings.GARDEN_VAULT_PATH
        index_path = Path(settings.GARDEN_INDEX_PATH)
        with self._lock:
            previous = None if force else self._load_cache()
            notes = scan_vault(vault_path, previous_index=previous)
            resolver = self._make_link_resolver(notes)
            attach = self._make_attachment_resolver()
            for note in notes.values():
                if not note.html or force:
                    note.html = render_note(note.body_md, resolver, attach)
            from parser.vault import index_to_payload, scan_attachments

            attachments = scan_attachments(vault_path)
            payload = index_to_payload(notes, attachments=attachments)
            try:
                index_path.parent.mkdir(parents=True, exist_ok=True)
                index_path.write_text(
                    json.dumps(payload, ensure_ascii=False), encoding="utf-8"
                )
            except OSError:
                pass
            self._notes = notes
            self._cache = payload
            self._apply_payload(payload)

    def _load_cache(self) -> Optional[Dict]:
        index_path = Path(settings.GARDEN_INDEX_PATH)
        if self._cache is not None:
            return self._cache
        if not index_path.exists():
            return None
        try:
            self._cache = json.loads(index_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            return None
        return self._cache

    def _cache_is_stale(self) -> bool:
        """Stale if any vault note is newer than the cache file (+1s slack). Throttled."""
        now = time.time()
        if (now - self._last_stale_check) < self._stale_interval:
            return False
        self._last_stale_check = now
        try:
            vault_path = Path(settings.GARDEN_VAULT_PATH)
            newest = max(
                (p.stat().st_mtime for p in vault_path.rglob("*.md")
                 if ".obsidian" not in p.parts and ".trash" not in p.parts and "z.raw notes" not in p.as_posix().lower()),
                default=0,
            )
            cache_mtime = Path(settings.GARDEN_INDEX_PATH).stat().st_mtime
            return newest > cache_mtime + 1
        except OSError:
            return False

    def _apply_payload(self, payload: Dict) -> None:
        notes = payload.get("notes", [])
        self._note_count = len(notes)
        self._notes_by_id = {n["id"]: n for n in notes}
        self._graph = payload.get("graph") or {"nodes": [], "edges": []}
        tag_counter: Dict[str, int] = {}
        for n in notes:
            for tag in n.get("tags", []):
                tag_counter[tag] = tag_counter.get(tag, 0) + 1
        self._tag_counts = tag_counter
        self._last_build = time.time()

    # -- resolvers ---------------------------------------------------------

    @staticmethod
    def _make_link_resolver(notes: Dict[str, Note]):
        by_title: Dict[str, str] = {}
        for n in notes.values():
            by_title[n.title.lower()] = n.id
            by_title.setdefault(Path(n.path).stem.lower(), n.id)

        def resolve(target: str, heading: str) -> Tuple[str, bool]:
            tid = by_title.get(target.lower())
            if tid:
                href = f"/garden/note/{tid}"
                if heading:
                    href += f"#{_slug(heading)}"
                return href, True
            return f"/garden/note/{_slug(target)}", False

        return resolve

    @staticmethod
    def _make_attachment_resolver():
        from urllib.parse import quote

        base = settings.GARDEN_ATTACHMENT_URL

        def resolve(filename: str) -> str:
            return base + quote(filename)

        return resolve

    # -- accessors ---------------------------------------------------------

    def all_notes(self) -> List[Dict]:
        cached = self._load_cache() or {}
        return [
            {k: v for k, v in n.items() if k not in ("html", "body_md")}
            for n in cached.get("notes", [])
        ]

    def get_note(self, note_id: str) -> Optional[Dict]:
        if self._notes_by_id and note_id in self._notes_by_id:
            return self._notes_by_id[note_id]
        cached = self._load_cache() or {}
        for n in cached.get("notes", []):
            if n["id"] == note_id:
                return n
        return None

    def graph(self) -> Dict[str, object]:
        if not self._graph.get("nodes"):
            cached = self._load_cache() or {}
            self._graph = cached.get("graph") or self._graph
        return self._graph

    def tags(self) -> List[Dict[str, object]]:
        return [
            {"tag": tag, "count": count}
            for tag, count in sorted(
                self._tag_counts.items(), key=lambda kv: (-kv[1], kv[0])
            )
        ]

    def status(self) -> Dict[str, object]:
        return {
            "noteCount": self._note_count,
            "edgeCount": len(self._graph.get("edges", [])),
            "tagCount": len(self._tag_counts),
            "lastBuild": self._last_build,
            "vaultPath": settings.GARDEN_VAULT_PATH,
        }


# ---------------------------------------------------------------------------
# Module-level singleton
# ---------------------------------------------------------------------------

_INDEX: Optional[GardenIndex] = None
_INDEX_LOCK = threading.Lock()


def get_index(refresh: bool = True) -> GardenIndex:
    global _INDEX
    with _INDEX_LOCK:
        if _INDEX is None:
            _INDEX = GardenIndex()
        if refresh:
            _INDEX.load_or_build()
        return _INDEX


def rebuild_index(force: bool = False) -> GardenIndex:
    index = get_index(refresh=False)
    index.rebuild(force=force)
    return index

