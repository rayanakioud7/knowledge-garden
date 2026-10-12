"""Obsidian-flavoured Markdown parsing utilities for the Knowledge Garden.

This package turns raw ``.md`` notes from an Obsidian vault into structured
data (metadata, outgoing links, tags, callouts) plus rendered HTML that the
React front-end can display. It uses :mod:`markdown_it` under the hood.
"""

from .renderer import render_note, NoteRenderError  # noqa: F401
from .extract import extract_frontmatter, extract_wikilinks, extract_tags  # noqa: F401
