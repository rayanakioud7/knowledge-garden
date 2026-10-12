"""Walk an Obsidian vault and produce a normalized index of every note.

The vault is organized with a Dewey-decimal numbering scheme (``000`` .. ``800``
with sub-folders like ``310``). We preserve that taxonomy: each note records its
top-level *domain* (the ``NNN NAME`` folder) and *section* (the ``NNN`` folder),
so the front-end can group and colour the graph and sidebar.
"""

from __future__ import annotations

import hashlib
import os
import re
import unicodedata
from dataclasses import dataclass, field, asdict
from pathlib import Path
from typing import Dict, List, Optional

from .extract import (
    extract_frontmatter,
    extract_wikilinks,
    extract_tags,
    extract_callouts,
)

# Folders that are Obsidian/Sync plumbing or private notes that are excluded.
_IGNORED_DIRS = {".obsidian", ".trash", ".stfolder", "Excalidraw", ".git", "z.RAW NOTES", "z.raw notes"}
_IGNORED_PREFIXES = (".stfolder.removed",)
_IGNORED_SUBSTRINGS = ("z.raw notes", ".obsidian", ".trash")

# ``NNN NAME`` top-level domain folder, e.g. "300 TECHNOLOGY & COMPUTING".
_DOMAIN_RE = re.compile(r"^(\d{3})\s+(.*)$")
# ``NNN`` section folder, e.g. "310".
_SECTION_RE = re.compile(r"^(\d{3})")

# Front-matter header block we strip before rendering the body.
_HEADER_STRIP = re.compile(
    r"^(?:\s*\r?\n)*"
    r"(?:\s*(?:Date|Tags|title|aliases)\s*:.*(?:\r?\n))*",
    re.IGNORECASE,
)


@dataclass
class Note:
    id: str
    title: str
    path: str  # relative to vault root, forward slashes
    slug: str
    domain_code: Optional[str]
    domain_name: Optional[str]
    section_code: Optional[str]
    section_name: Optional[str]
    date: Optional[str]
    tags: List[str] = field(default_factory=list)
    outgoing_links: List[str] = field(default_factory=list)  # note ids
    raw_outgoing: List[str] = field(default_factory=list)  # raw targets
    backlinks: List[str] = field(default_factory=list)  # note ids
    callouts: List[Dict[str, str]] = field(default_factory=list)
    folders: List[str] = field(default_factory=list)  # full chain root->note
    has_latex: bool = False
    has_embeds: bool = False
    word_count: int = 0
    excerpt: str = ""
    body_md: str = ""  # markdown with front-matter stripped
    html: str = ""
    mtime: float = 0.0
    content_hash: str = ""

    def to_index(self) -> Dict[str, object]:
        """Serializable payload for the API / index file (without heavy fields)."""
        data = asdict(self)
        data.pop("body_md", None)
        return data


def _slugify(text: str) -> str:
    """ASCII-safe slug: fold accents (é->e), drop punctuation, hyphenate.

    URLs must stay ASCII so ids are stable and routable in the front-end.
    """
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^\w\s-]", "", text.lower())
    text = re.sub(r"[\s]+", "-", text.strip())
    return text or "note"


def _is_ignored(path: Path) -> bool:
    for part in path.parts:
        part_lower = part.lower()
        if part in _IGNORED_DIRS or part_lower in _IGNORED_DIRS:
            return True
        for pref in _IGNORED_PREFIXES:
            if part.startswith(pref):
                return True
        for sub in _IGNORED_SUBSTRINGS:
            if sub in part_lower:
                return True
    return False


def _classify(vault_root: Path, note_path: Path):
    """Return (domain_code, domain_name, section_code, section_name, folders).

    ``folders`` is the full folder chain from the vault root down to (but not
    including) the note file, e.g.::

        ["100 FORMAL SCIENCES", "110 Pure Mathematics", "112 Algebra",
         "Linear Algebra", "Gilbert Strang", "1. Introduction to Vectors"]

    ``domain``/``section`` are kept for backward compatibility (graph colors,
    filters) and are derived from the first two entries of that chain.
    """
    rel = note_path.relative_to(vault_root)
    parts = list(rel.parts[:-1])  # folder chain, excluding filename
    folders = [p for p in parts]
    domain_code = domain_name = section_code = section_name = None
    if parts:
        dm = _DOMAIN_RE.match(parts[0])
        if dm:
            domain_code, domain_name = dm.group(1), dm.group(2).strip()
        if len(parts) >= 2:
            sm = _SECTION_RE.match(parts[1])
            if sm:
                section_code = sm.group(1)
                section_name = parts[1][3:].strip() or parts[1]
    return domain_code, domain_name, section_code, section_name, folders


def _hash(content: str) -> str:
    return hashlib.sha1(content.encode("utf-8")).hexdigest()


def strip_frontmatter(text: str) -> str:
    return _HEADER_STRIP.sub("", text, count=1)


def scan_vault(vault_root: str | Path, previous_index: Optional[Dict] = None) -> Dict[str, Note]:
    """Scan the vault and return a mapping of ``note_id -> Note``.

    ``previous_index`` is a serialized index (see :meth:`Note.to_index`) used for
    incremental rebuilds: notes whose ``content_hash`` and path are unchanged
    reuse their previously rendered HTML instead of being re-rendered. This
    keeps the hourly/on-change rebuild fast even with 465+ notes.

    Link resolution happens in a second pass (``_resolve_links``) because a
    wikilink may point to a note discovered later in the walk.
    """
    root = Path(vault_root).resolve()
    if not root.exists():
        raise FileNotFoundError(f"Vault path does not exist: {root}")

    prev_notes: Dict[str, Dict] = {}
    if previous_index:
        prev_notes = {n["id"]: n for n in previous_index.get("notes", [])}

    notes: Dict[str, Note] = {}
    title_to_id: Dict[str, str] = {}  # case-insensitive filename -> id

    for md_path in sorted(root.rglob("*.md")):
        if _is_ignored(md_path.relative_to(root)):
            continue
        try:
            # utf-8-sig transparently strips a leading BOM if one is present.
            content = md_path.read_text(encoding="utf-8-sig")
        except (UnicodeDecodeError, OSError):
            # Some vault files may be non-utf8; skip gracefully.
            continue

        rel = md_path.relative_to(root).as_posix()
        note_id = _slugify(rel[:-3])  # strip .md
        title = md_path.stem
        chash = _hash(content)

        # Reuse previous render if unchanged (incremental).
        prev = prev_notes.get(note_id)
        body_md = strip_frontmatter(content)
        fm = extract_frontmatter(content)
        raw_links = extract_wikilinks(content)
        tags = extract_tags(content)
        callouts = extract_callouts(content)
        word_count = len(re.findall(r"\b\w+\b", body_md))

        excerpt = _make_excerpt(body_md)
        domain_code, domain_name, section_code, section_name, folders = _classify(
            root, md_path
        )

        note = Note(
            id=note_id,
            title=fm.title or title,
            path=rel,
            slug=note_id,
            domain_code=domain_code,
            domain_name=domain_name,
            section_code=section_code,
            section_name=section_name,
            folders=folders,
            date=fm.date,
            tags=tags,
            outgoing_links=[],  # filled in _resolve_links
            raw_outgoing=raw_links,
            backlinks=[],
            callouts=callouts,
            has_latex=bool(re.search(r"\$\$[\s\S]+?\$\$|\$[^$\n]+\$", body_md)),
            has_embeds="![[" in body_md,
            word_count=word_count,
            excerpt=excerpt,
            body_md=body_md,
            mtime=md_path.stat().st_mtime,
            content_hash=chash,
        )

        # Reuse cached HTML if content is identical.
        if prev and prev.get("content_hash") == chash and prev.get("html"):
            note.html = prev["html"]
            note.backlinks = list(prev.get("backlinks", []))

        notes[note_id] = note
        title_to_id.setdefault(title.lower(), note_id)

    _resolve_links(notes, title_to_id)
    _compute_backlinks(notes)
    return notes


def _resolve_links(notes: Dict[str, Note], title_to_id: Dict[str, str]) -> None:
    """Map raw wikilink targets to concrete note ids.

    Obsidian resolves by note *name* regardless of folder. We try exact then
    case-insensitive match. Unresolved targets are dropped from edges but the
    front-end can still show them as ghost links if needed.
    """
    for note in notes.values():
        resolved: List[str] = []
        for target in note.raw_outgoing:
            # Strip heading/anchor for the lookup.
            base = target.split("#", 1)[0].strip()
            tid = title_to_id.get(base.lower())
            if tid and tid != note.id and tid not in resolved:
                resolved.append(tid)
        note.outgoing_links = resolved


def _compute_backlinks(notes: Dict[str, Note]) -> None:
    for note in notes.values():
        note.backlinks = []
    for source in notes.values():
        for target_id in source.outgoing_links:
            target = notes.get(target_id)
            if target and source.id not in target.backlinks:
                target.backlinks.append(source.id)


def _make_excerpt(body_md: str, limit: int = 200) -> str:
    """A plain-text excerpt for search results and cards."""
    text = body_md
    text = re.sub(r"!\[\[[^\]]*\]\]", "", text)  # embeds
    text = re.sub(r"\[\[([^\]\|]*\|)?([^\]]*)\]\]", r"\2", text)  # wikilinks
    text = re.sub(r"[#*`>~=]", "", text)  # markdown noise
    text = re.sub(r"\s+", " ", text).strip()
    return text[:limit]


def build_graph(notes: Dict[str, Note]) -> Dict[str, object]:
    """Build a nodes/edges payload for the D3 force graph."""
    nodes = []
    for note in notes.values():
        nodes.append(
            {
                "id": note.id,
                "title": note.title,
                "slug": note.slug,
                "domain": note.domain_code,
                "domainName": note.domain_name,
                "section": note.section_code,
                "sectionName": note.section_name,
                "tags": note.tags,
                "degree": len(note.outgoing_links) + len(note.backlinks),
            }
        )
    edges = []
    for note in notes.values():
        for target in note.outgoing_links:
            edges.append({"source": note.id, "target": target})
    return {"nodes": nodes, "edges": edges}


def scan_attachments(vault_root: str | Path) -> Dict[str, str]:
    """Index all vault media attachments into a map: filename -> relative vault path."""
    root = Path(vault_root).resolve()
    if not root.exists():
        return {}
    att_exts = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".pdf"}
    attachments: Dict[str, str] = {}
    for p in root.rglob("*"):
        if p.is_file() and p.suffix.lower() in att_exts:
            if _is_ignored(p.relative_to(root)):
                continue
            attachments[p.name] = p.relative_to(root).as_posix()
    return attachments


def index_to_payload(notes: Dict[str, Note], attachments: Optional[Dict[str, str]] = None) -> Dict[str, object]:
    """Serialize the full index for writing to ``garden-index.json``."""
    payload = {
        "version": 1,
        "noteCount": len(notes),
        "notes": [n.to_index() for n in notes.values()],
        "graph": build_graph(notes),
        "tree": build_tree(notes),
    }
    if attachments is not None:
        payload["attachments"] = attachments
    return payload


def _natural_key(name: str):
    """Sort key so '110' < '112' and '1.' < '2.' < '10.' naturally."""
    parts = re.split(r"(\d+)", name)
    return [int(p) if p.isdigit() else p.lower() for p in parts]


def _folder_code(name: str) -> Optional[str]:
    """Extract a leading numeric Dewey code ('112 Algebra' -> '112')."""
    m = re.match(r"^(\d{3})\b", name)
    return m.group(1) if m else None


def build_tree(notes: Dict[str, Note]) -> Dict[str, object]:
    """Build a nested folder tree from every note's ``folders`` chain.

    Returns a single virtual root whose ``children`` are the top-level folders
    (the Dewey domains). Each node has::

        {
          "name": str,            # folder display name
          "path": str,            # "A/B/C" chain for stable expand/collapse
          "code": str | None,     # leading Dewey code if present
          "noteCount": int,       # notes in this folder + all descendants
          "children": [node...],  # sub-folders (naturally sorted)
          "notes": [ {id,title} ] # notes directly in this folder (sorted)
        }
    """
    # Tree of nested dicts keyed by folder path.
    root: Dict[str, object] = {"children": {}, "notes": []}

    for note in notes.values():
        chain = note.folders if note.folders else []
        node = root
        running = []
        for folder in chain:
            running.append(folder)
            key = "/".join(running)
            children = node["children"]
            if key not in children:
                children[key] = {
                    "name": folder,
                    "path": key,
                    "code": _folder_code(folder),
                    "children": {},
                    "notes": [],
                }
            node = children[key]
        node["notes"].append({"id": note.id, "title": note.title})

    def _count(n) -> int:
        return len(n["notes"]) + sum(_count(c) for c in n["children"].values())

    def _finalize(n) -> Dict[str, object]:
        children = sorted(
            (_finalize(c) for c in n["children"].values()),
            key=lambda c: _natural_key(c["name"]),
        )
        notes_list = sorted(n["notes"], key=lambda x: _natural_key(x["title"]))
        return {
            "name": n["name"],
            "path": n["path"],
            "code": n.get("code"),
            "noteCount": _count(n),
            "children": children,
            "notes": notes_list,
        }

    top_children = sorted(
        (_finalize(c) for c in root["children"].values()),
        key=lambda c: _natural_key(c["name"]),
    )
    top_notes = sorted(root["notes"], key=lambda x: _natural_key(x["title"]))
    return {
        "name": "Vault",
        "path": "",
        "code": None,
        "noteCount": len(notes),
        "children": top_children,
        "notes": top_notes,
    }

