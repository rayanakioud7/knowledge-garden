"""Structured extraction from Obsidian Markdown notes.

The vault does *not* use standard YAML front-matter. Instead each note starts
with a small plain-text header, e.g.::

    Date: 2026-02-15
    Tags: [[Mathematics]], [[Foundations]]

followed by the body. Tags are written as wikilinks ``[[...]]`` rather than the
usual ``#hashtag`` form, so we parse them specially. This module is tolerant of
both conventions.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import List, Dict, Optional

# ---------------------------------------------------------------------------
# Front-matter
# ---------------------------------------------------------------------------

# Matches ``Date: 2026-02-15`` / ``Tags: ...`` lines at the very top of a note.
_HEADER_LINE = re.compile(r"^(Date|Tags|title|aliases)\s*:\s*(.*)$", re.IGNORECASE)
# A ``[[Name]]`` or ``[[Name|Alias]]`` wikilink (negative lookbehind on ! so embeds are ignored).
_WIKILINK = re.compile(r"(?<!\!)\[\[([^\]\|#]+)(?:#[^\]\|]*)?(?:\|[^\]]*)?\]\]")
_ATTACHMENT_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".pdf"}
# A bare ``#tag`` (lower/upper case, digits, ``-`` and ``/`` for nesting).
_HASHTAG = re.compile(r"(?<![\w/])#([A-Za-z][\w/-]*)")


@dataclass
class NoteFrontmatter:
    """Parsed header of a note."""

    date: Optional[str] = None
    title: Optional[str] = None
    aliases: List[str] = field(default_factory=list)
    raw: Dict[str, str] = field(default_factory=dict)

    def to_dict(self) -> Dict[str, object]:
        return {
            "date": self.date,
            "title": self.title,
            "aliases": self.aliases,
            "raw": self.raw,
        }


def extract_frontmatter(text: str) -> NoteFrontmatter:
    """Extract the loose ``Date:`` / ``Tags:`` / ``title:`` header block.

    We only treat consecutive header lines at the start of the document (after
    optional blank lines) as front-matter so we never misread body content.
    """

    fm = NoteFrontmatter()
    lines = text.splitlines()
    index = 0
    # Skip leading blank lines.
    while index < len(lines) and not lines[index].strip():
        index += 1

    while index < len(lines):
        match = _HEADER_LINE.match(lines[index].strip())
        if not match:
            break
        key = match.group(1).lower()
        value = match.group(2).strip()
        fm.raw[key] = value
        if key == "date":
            fm.date = value
        elif key == "title":
            fm.title = value
        elif key == "aliases":
            fm.aliases = [v.strip() for v in value.split(",") if v.strip()]
        index += 1

    return fm


# ---------------------------------------------------------------------------
# Wikilinks
# ---------------------------------------------------------------------------


def extract_wikilinks(text: str) -> List[str]:
    """Return the *target* of every wikilink, in document order.

    Handles ``[[Target]]``, ``[[Target|Alias]]`` and ``[[Target#Heading]]``.
    Embeds (``![[...]]``) are ignored here; they are handled by the renderer.
    Duplicates are removed while preserving first-seen order.
    """

    seen: set[str] = set()
    targets: List[str] = []
    for raw in _WIKILINK.findall(text):
        target = raw.strip()
        # Skip attachments if any were formatted as plain wikilinks
        ext = "." + target.rsplit(".", 1)[-1].lower() if "." in target else ""
        if ext in _ATTACHMENT_EXTS:
            continue
        if target and target not in seen:
            seen.add(target)
            targets.append(target)
    return targets


# ---------------------------------------------------------------------------
# Tags
# ---------------------------------------------------------------------------


def extract_tags(text: str) -> List[str]:
    """Collect tags from both the vault's conventions.

    1. ``Tags: [[A]], [[B]]`` header line (primary convention in this vault).
    2. Inline ``#hashtag`` occurrences (rare here but supported).
    """

    tags: List[str] = []
    seen: set[str] = set()

    def _add(tag: str) -> None:
        tag = tag.strip().lstrip("#").strip()
        if tag and tag not in seen:
            seen.add(tag)
            tags.append(tag)

    # Header-style tags.
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.lower().startswith("tags:"):
            payload = stripped.split(":", 1)[1]
            # Wikilink tags are atomic: [[Scribes & Knowledge Transmission]].
            for m in _WIKILINK.findall(payload):
                _add(m)
            # Remove the wikilink spans, then split the remainder on commas so
            # multi-word *plain* tags (rare) are preserved.
            remainder = _WIKILINK.sub(" ", payload)
            for part in remainder.split(","):
                cleaned = part.strip().lstrip("#").strip()
                if cleaned:
                    _add(cleaned)

    # Inline hashtags.
    for m in _HASHTAG.findall(text):
        # Skip things that look like colour codes or markdown headings artefacts.
        _add(m)

    return tags


# ---------------------------------------------------------------------------
# Callouts
# ---------------------------------------------------------------------------

_CALLOUT_RE = re.compile(r"^>\s*\[!(\w+)\]\s*(.*)$")


def extract_callouts(text: str) -> List[Dict[str, str]]:
    """Return a list of callouts (type + title) found in the note.

    Obsidian callouts look like ``> [!INFO] Title`` followed by ``> `` lines.
    Only the opening line matters for indexing / sidebar display.
    """

    callouts: List[Dict[str, str]] = []
    for line in text.splitlines():
        m = _CALLOUT_RE.match(line.rstrip())
        if m:
            callouts.append({"type": m.group(1).upper(), "title": m.group(2).strip()})
    return callouts
