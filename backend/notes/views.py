"""REST API views for the Knowledge Garden.

All data comes from the in-memory :class:`~notes.index.GardenIndex` singleton so
endpoints are fast and side-effect free. The only mutating endpoints are the
sync webhook (triggers a rebuild) and attachment serving.
"""

from __future__ import annotations

import os
import re
from pathlib import Path
from typing import Optional

from urllib.parse import quote

from django.conf import settings
from django.http import FileResponse, Http404, HttpResponseRedirect, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .index import get_index, rebuild_index


def _api(request):
    return request


@api_view(["GET"])
def note_list(request):
    """List all notes (lightweight) with optional ``domain``/``tag`` filters."""
    index = get_index()
    notes = index.all_notes()
    domain = request.query_params.get("domain")
    tag = request.query_params.get("tag")
    q = request.query_params.get("q", "").strip().lower()

    if domain:
        notes = [n for n in notes if n.get("domain") == domain]
    if tag:
        notes = [n for n in notes if tag in n.get("tags", [])]
    if q:
        notes = [
            n
            for n in notes
            if q in n.get("title", "").lower() or q in (n.get("excerpt") or "").lower()
        ]

    notes = sorted(notes, key=lambda n: (n.get("domain") or "999", n.get("title", "")))
    return Response({"count": len(notes), "notes": notes})


@api_view(["GET"])
def note_detail(request, note_id: str):
    """Return a single note including rendered HTML, links and backlinks."""
    index = get_index()
    note = index.get_note(note_id)
    if not note:
        return Response({"detail": "Note not found."}, status=404)
    # Enrich backlinks with titles for display.
    backlink_ids = note.get("backlinks", [])
    backlinks = []
    for bid in backlink_ids:
        b = index.get_note(bid)
        if b:
            backlinks.append({"id": b["id"], "title": b["title"]})
    # Enrich outgoing_links with titles for display.
    outgoing_ids = note.get("outgoing_links", [])
    outgoing_links = []
    for oid in outgoing_ids:
        o = index.get_note(oid)
        if o:
            outgoing_links.append({"id": o["id"], "title": o["title"]})
        else:
            outgoing_links.append({"id": oid, "title": oid.replace("-", " ").title()})
    note = dict(note)
    note["backlinks"] = backlinks
    note["outgoing_links_detail"] = outgoing_links
    return Response(note)


@api_view(["GET"])
def graph(request):
    """Nodes + edges for the D3 force graph, optionally filtered by domain."""
    index = get_index()
    g = index.graph()
    domain = request.query_params.get("domain")
    if domain:
        keep = {n["id"] for n in g["nodes"] if n.get("domain") == domain}
        nodes = [n for n in g["nodes"] if n["id"] in keep]
        edges = [e for e in g["edges"] if e["source"] in keep and e["target"] in keep]
        return Response({"nodes": nodes, "edges": edges})
    return Response(g)


@api_view(["GET"])
def tag_list(request):
    """All tags with counts, most-used first."""
    return Response({"tags": get_index().tags()})


@api_view(["GET"])
def domains(request):
    """The Dewey-decimal taxonomy with per-domain note counts."""
    notes = get_index().all_notes()
    agg: dict[str, dict] = {}
    for n in notes:
        code = n.get("domain") or "000"
        name = n.get("domainName") or "Ungrouped"
        entry = agg.setdefault(code, {"code": code, "name": name, "count": 0})
        entry["count"] += 1
    return Response({"domains": sorted(agg.values(), key=lambda d: d["code"])})


@api_view(["GET"])
def tree(request):
    """The full nested folder tree (root -> domains -> ... -> folders -> notes).

    Powers the interactive sidebar navigation. Each node carries a stable
    ``path`` so the client can track which branches are expanded.
    """
    cached = get_index()._load_cache() or {}
    return Response(cached.get("tree") or {
        "name": "Vault", "path": "", "code": None,
        "noteCount": 0, "children": [], "notes": [],
    })


@api_view(["GET"])
def status(request):
    """Sync status: counts + last build time (drives the front-end banner)."""
    return Response(get_index().status())


@api_view(["POST"])
def sync_webhook(request):
    """Trigger an index rebuild (called by a Git webhook / manual refresh).

    When ``GARDEN_WEBHOOK_SECRET`` is set, requests must present it either as an
    ``X-Webhook-Secret`` header or ``?secret=`` query param.
    """
    secret = settings.GARDEN_WEBHOOK_SECRET
    if secret:
        provided = request.headers.get("X-Webhook-Secret") or request.query_params.get("secret")
        if provided != secret:
            return Response({"detail": "Forbidden"}, status=403)
    index = rebuild_index()
    return Response({"ok": True, **index.status()})


def serve_attachment(request, filename: str):
    """Serve a vault attachment (image/pdf) by filename, searching the vault.

    Falls back to GitHub raw CDN when the server is deployed in constrained
    environments (such as PythonAnywhere free tier) where large attachments
    are not stored on the local disk.
    """
    vault = Path(settings.GARDEN_VAULT_PATH)
    safe_name = os.path.basename(filename)
    if not safe_name or safe_name != filename.replace("\\", "/").split("/")[-1]:
        raise Http404("Invalid attachment path.")

    # 1. Search the local vault if it exists.
    if vault.exists():
        for candidate in vault.rglob(safe_name):
            if ".obsidian" in candidate.parts or ".trash" in candidate.parts:
                continue
            if candidate.is_file():
                content_type = _guess_type(candidate.suffix)
                return FileResponse(candidate.open("rb"), content_type=content_type)

    # 2. Fallback: Lookup in pre-indexed attachments map and redirect to GitHub Raw CDN.
    cached = get_index()._load_cache() or {}
    att_map = cached.get("attachments", {})
    rel_path = att_map.get(safe_name)
    if rel_path:
        quoted_rel = quote(rel_path, safe="/")
        github_url = (
            f"https://raw.githubusercontent.com/rayanakioud7/knowledge-garden/main/Obsidian/{quoted_rel}"
        )
        return HttpResponseRedirect(github_url)

    raise Http404("Attachment not found.")


def _guess_type(suffix: str) -> str:
    return {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".webp": "image/webp",
        ".svg": "image/svg+xml",
        ".pdf": "application/pdf",
    }.get(suffix.lower(), "application/octet-stream")
