"""Render Obsidian Markdown into HTML for the front-end.

We use :mod:`markdown_it` for base CommonMark rendering and pre-process the
Obsidian-only syntax that CommonMark does not understand:

* ``[[Wikilinks]]`` / ``[[Target|Alias]]`` -> internal router links
* ``![[image.png|size]]`` embeds -> ``<img>`` served by the backend
* ``> [!TYPE] Title`` callouts -> styled ``<blockquote>`` blocks
* ``$...$`` and ``$$...$$`` math -> preserved verbatim for KaTeX on the client
* ``==highlight==`` -> ``<mark>``
* ``~={colour}text=~`` (fast-text-color plugin) -> ``<span style=...>``

Because we render with ``html=True`` and the input is the user's own (trusted)
vault, we emit raw HTML anchors/images directly during pre-processing rather
than round-tripping through Markdown link syntax. Math is left untouched so the
React client can hand the note to KaTeX's auto-render.
"""

from __future__ import annotations

import html
import re
import unicodedata
from typing import Callable, Dict, Optional, Tuple

from markdown_it import MarkdownIt
from mdit_py_plugins.anchors import anchors_plugin
from mdit_py_plugins.footnote import footnote_plugin

LinkResolver = Callable[[str, str], Tuple[str, bool]]
AttachmentResolver = Callable[[str], str]


class NoteRenderError(Exception):
    """Raised when a note cannot be rendered."""


# ---------------------------------------------------------------------------
# Regexes for Obsidian-only syntax
# ---------------------------------------------------------------------------

# Coloured text: ~={red}text=~  (fast-text-color plugin).
_COLOR_RE = re.compile(r"~=\{(#[0-9a-fA-F]{3,6}|\w+)\}(.+?)=~", re.DOTALL)
# Obsidian highlight: ==text==
_HIGHLIGHT_RE = re.compile(r"(?<!=)==(?!=)([^=\n]+?)==")
# Block reference: ^blockid at end of a line.
_BLOCKREF_RE = re.compile(r"[ \t]*\^([A-Za-z0-9-]+)[ \t]*$", re.MULTILINE)
# Image embed: ![[file.png|300]] or ![[file.png|center|300]].
_EMBED_RE = re.compile(r"!\[\[([^\]\|#]+)((?:\|[^\]]*)?)\]\]")
# Wikilink: [[Target]] / [[Target|Alias]] / [[Target#Heading]].
# Negative lookbehind on ``!`` so embeds are not matched here.
_WIKILINK_FULL = re.compile(r"(?<!!)\[\[([^\]\|#]+)(#[^\]\|]*)?(\|[^\]]*)?\]\]")
# Obsidian comment: %% ... %%
_COMMENT_RE = re.compile(r"%%.*?%%", re.DOTALL)
# Inline or block math.
_MATH_RE = re.compile(r"(\$\$.+?\$\$|\$[^$\n]+?\$)", re.DOTALL)
# Callout opening line: > [!TYPE] optional title
_CALLOUT_OPEN = re.compile(r"^\s*>\s*\[!(\w+)\]\s*(.*)$")

_COLOR_MAP = {
    "red": "#e5484d", "blue": "#0091ff", "green": "#30a46c",
    "yellow": "#ffb224", "orange": "#f76b15", "purple": "#8e4ec6",
    "pink": "#d6409f", "gray": "#8b8d98", "grey": "#8b8d98",
    "cyan": "#00a2c7", "white": "#ffffff", "black": "#000000",
}


def _slugify(text: str) -> str:
    """ASCII-safe slug used for heading anchors and fallback routes."""
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^\w\s-]", "", text.lower())
    text = re.sub(r"[\s]+", "-", text.strip())
    return text


def _resolve_color(token: str) -> str:
    token = token.strip()
    if token.startswith("#"):
        return token
    return _COLOR_MAP.get(token.lower(), token)


def _stash_math(text: str) -> Tuple[str, Dict[str, str]]:
    """Replace math spans with placeholders; return (text, store)."""
    store: Dict[str, str] = {}

    def repl(m: re.Match) -> str:
        token = f"xmathx{len(store)}xmathx"
        store[token] = m.group(1)
        return token

    return _MATH_RE.sub(repl, text), store


def _restore_math(html_text: str, store: Dict[str, str]) -> str:
    for token, original in store.items():
        html_text = html_text.replace(token, html.escape(original))
    return html_text


def _rewrite_wikilinks(text: str, link_resolver) -> str:
    """Turn ``[[...]]`` into raw HTML anchors (rendered verbatim by html=True)."""

    def repl(match):
        target = match.group(1).strip()
        heading = (match.group(2) or "").lstrip("#").strip()
        alias = (match.group(3) or "").lstrip("|").strip()
        label = alias or target
        if link_resolver is not None:
            href, resolved = link_resolver(target, heading)
        else:
            href, resolved = f"/garden/note/{_slugify(target)}", True
        cls = "wikilink" if resolved else "wikilink wikilink-unresolved"
        safe_label = html.escape(label)
        safe_href = html.escape(href, quote=True)
        if heading and "#" not in href:
            safe_href = f"{safe_href}#{html.escape(_slugify(heading))}"
        return (
            f'<a class="{cls}" href="{safe_href}" '
            f'data-target="{html.escape(target)}">{safe_label}</a>'
        )

    return _WIKILINK_FULL.sub(repl, text)


def _rewrite_embeds(text: str, attachment_resolver) -> str:
    """Turn ``![[file]]`` into ``<img>`` tags resolved by the backend."""

    def repl(match):
        filename = match.group(1).strip()
        options = match.group(2) or ""
        src = attachment_resolver(filename) if attachment_resolver else f"/api/attachments/{filename}"
        size_match = re.search(r"(\d{2,4})", options)
        width = size_match.group(1) if size_match else ""
        width_attr = f' width="{width}"' if width else ""
        centered = " embed-center" if "center" in options else ""
        safe_src = html.escape(src, quote=True)
        return (
            f'<img class="embed{centered}" src="{safe_src}" '
            f'alt="{html.escape(filename)}" loading="lazy"{width_attr} />'
        )

    return _EMBED_RE.sub(repl, text)


def _rewrite_callouts(text: str, link_resolver=None, attachment_resolver=None) -> str:
    """Convert Obsidian callouts into styled blockquotes with nested markdown."""

    lines = text.split("\n")
    out = []
    i = 0
    while i < len(lines):
        m = _CALLOUT_OPEN.match(lines[i])
        if not m:
            out.append(lines[i])
            i += 1
            continue

        ctype = m.group(1).lower()
        title = m.group(2).strip()
        body_lines = []
        j = i + 1
        while j < len(lines) and lines[j].lstrip().startswith(">"):
            body_lines.append(re.sub(r"^\s*>\s?", "", lines[j]))
            j += 1

        title_html = html.escape(title) if title else ctype.capitalize()
        body_text = "\n".join(body_lines)
        inner_html = _render_inner(body_text, link_resolver, attachment_resolver)
        block = (
            f'<blockquote class="callout callout-{html.escape(ctype)}" '
            f'data-callout="{html.escape(ctype)}">'
            f'<div class="callout-title">{title_html}</div>'
            f'<div class="callout-body">{inner_html}</div></blockquote>'
        )
        out.append(block)
        i = j

    return "\n".join(out)


def _rewrite_misc(text: str) -> str:
    """Inline transforms: comments, colour, highlight, block refs."""
    text = _COMMENT_RE.sub("", text)
    text = _COLOR_RE.sub(
        lambda m: f'<span style="color:{_resolve_color(m.group(1))}">{m.group(2)}</span>',
        text,
    )
    text = _HIGHLIGHT_RE.sub(lambda m: f"<mark>{m.group(1)}</mark>", text)
    text = _BLOCKREF_RE.sub(
        lambda m: f'<span class="block-ref" id="{html.escape(m.group(1))}"></span>', text
    )
    return text


def _render_inner(text: str, link_resolver=None, attachment_resolver=None) -> str:
    """Render callout inner content (callout ``>`` prefix already stripped)."""
    text = _rewrite_embeds(text, attachment_resolver)
    text = _rewrite_wikilinks(text, link_resolver)
    text = _rewrite_misc(text)
    md = MarkdownIt("commonmark", {"html": True, "linkify": True})
    md.enable("table")
    return md.render(text).strip()


def _base_markdowner() -> MarkdownIt:
    md = MarkdownIt("commonmark", {"html": True, "linkify": True, "breaks": False})
    md.enable("table")
    anchors_plugin(md, min_level=1, max_level=6, slug_func=_slugify, permalink=False)
    footnote_plugin(md)
    return md


def render_note(
    text: str,
    link_resolver=None,
    attachment_resolver=None,
    protect_math: bool = True,
) -> str:
    """Render a full note body to HTML.

    ``text`` should have front-matter already stripped. Math is preserved and
    HTML-escaped so the client-side KaTeX renderer can process it verbatim.
    """
    if protect_math:
        text, math_store = _stash_math(text)

    text = _rewrite_callouts(text, link_resolver, attachment_resolver)
    text = _rewrite_embeds(text, attachment_resolver)
    text = _rewrite_wikilinks(text, link_resolver)
    text = _rewrite_misc(text)

    html_out = _base_markdowner().render(text)

    if protect_math:
        html_out = _restore_math(html_out, math_store)
    return html_out

