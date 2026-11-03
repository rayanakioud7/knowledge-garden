"""REST API views for the Knowledge Garden.

All data comes from the in-memory :class:`~notes.index.GardenIndex` singleton so
endpoints are fast and side-effect free. The only mutating endpoints are the
sync webhook (triggers a rebuild) and attachment serving.
"""

from __future__ import annotations

import os
import hashlib
import hmac
import re
from pathlib import Path
from typing import Optional

from urllib.parse import quote

from django.conf import settings
from django.http import FileResponse, Http404, HttpResponseRedirect
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .index import get_index, rebuild_index

# Raw index notes use snake_case; the front-end (and the tree/graph payloads)
# speak camelCase. One mapping keeps every payload consistent.
_KEY_MAP = {
    "domain_code": "domain",
    "domain_name": "domainName",
    "section_code": "section",
    "section_name": "sectionName",
    "word_count": "wordCount",
    "has_latex": "hasLatex",
    "has_embeds": "hasEmbeds",
    "outgoing_links": "outgoingLinks",
    "raw_outgoing": "rawOutgoing",
}


def _publish(note: dict) -> dict:
    """Rename a raw index note to the camelCase shape the front-end expects."""
    return {_KEY_MAP.get(k, k): v for k, v in note.items()}


@api_view(["GET"])
def note_list(request):
    """List all notes (lightweight) with optional ``domain``/``tag`` filters."""
    index = get_index()
    notes = [_publish(n) for n in index.all_notes()]
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
    raw = index.get_note(note_id)
    if not raw:
        return Response({"detail": "Note not found."}, status=404)
    note = _publish(raw)

    def _link(target_id: str) -> dict:
        other = index.get_note(target_id)
        if other:
            return {
                "id": other["id"],
                "title": other["title"],
                "domain": other.get("domain_code"),
                "isMoc": bool(other.get("isMoc")),
            }
        # Ghost link (target no longer in the vault): keep it displayable.
        return {
            "id": target_id,
            "title": target_id.replace("-", " ").title(),
            "domain": None,
            "isMoc": False,
        }

    # Enrich links with titles + domains for display and the MOC constellation.
    note["backlinks"] = [_link(bid) for bid in note.get("backlinks", [])]
    note["outgoingLinksDetail"] = [_link(oid) for oid in note.get("outgoingLinks", [])]
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
    notes = [_publish(n) for n in get_index().all_notes()]
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
def mocs(request):
    """Atlas plates: one catalog entry per Map-of-Content hub.

    Supplies the ``/garden`` atlas landing with each MOC's metadata plus the
    domains of every note it links to (plate geometry is laid out client-side,
    deterministically).
    """
    notes = [_publish(n) for n in get_index().all_notes()]
    by_id = {n["id"]: n for n in notes}
    plates = []
    for n in notes:
        if not n.get("isMoc"):
            continue
        linked = [
            {
                "id": lid,
                "t": (by_id.get(lid) or {}).get("title"),
                "d": (by_id.get(lid) or {}).get("domain"),
            }
            for lid in n.get("outgoingLinks", [])
        ]
        plates.append(
            {
                "id": n["id"],
                "title": n["title"],
                "code": n.get("section"),
                "domain": n.get("domain"),
                "domainName": n.get("domainName"),
                "sectionName": n.get("sectionName"),
                "folders": n.get("folders", []),
                "wordCount": n.get("wordCount", 0),
                "date": n.get("date"),
                "mtime": n.get("mtime"),
                "linkCount": len(linked),
                "backlinkCount": len(n.get("backlinks", [])),
                "domainCount": len({l["d"] for l in linked if l["d"]}),
                "linked": linked,
            }
        )
    plates.sort(key=lambda p: (p["domain"] or "999", p["title"].lower()))
    return Response({"count": len(plates), "mocs": plates})


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
    if not secret and not settings.DEBUG:
        return Response({"detail": "Sync webhook is not configured."}, status=503)
    if secret:
        expected = "sha256=" + hmac.new(secret.encode(), request.body, hashlib.sha256).hexdigest()
        signature = request.headers.get("X-Hub-Signature-256", "")
        provided = request.headers.get("X-Webhook-Secret") or request.query_params.get("secret")
        if not (hmac.compare_digest(signature, expected) or hmac.compare_digest(provided or "", secret)):
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
    if "/" in filename or "\\" in filename or Path(filename).suffix.lower() not in {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".pdf"}:
        raise Http404("Invalid attachment path.")
    safe_name = os.path.basename(filename)
    if not safe_name or safe_name != filename.replace("\\", "/").split("/")[-1]:
        raise Http404("Invalid attachment path.")

    # 1. Search the local vault if it exists.
    if vault.exists():
        for candidate in vault.rglob(safe_name):
            if ".obsidian" in candidate.parts or ".trash" in candidate.parts:
                continue
            if candidate.is_file() and candidate.resolve().is_relative_to(vault.resolve()):
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
