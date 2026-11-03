"""Portfolio API: About, CV, and live-enriched Projects."""

from __future__ import annotations

import time
import json
from pathlib import Path
from typing import Dict, List

import requests
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

from . import data

# Small in-process cache so we don't hammer the GitHub API on every request.
_snapshot = json.loads(Path(__file__).with_name("github_snapshot.json").read_text(encoding="utf-8"))
_repo_cache: Dict[str, dict] = {r["name"].lower(): r for r in _snapshot["repositories"]}
_repo_cache_ts: float = 0.0
_CACHE_TTL = 900  # 15 minutes


def _fetch_repos() -> Dict[str, dict]:
    """Return a map of repo-name -> github metadata (cached)."""
    global _repo_cache, _repo_cache_ts
    now = time.time()
    if _repo_cache and (now - _repo_cache_ts) < _CACHE_TTL:
        return _repo_cache

    url = f"https://api.github.com/users/{data.GITHUB_USERNAME}/repos?per_page=100&sort=updated"
    headers = {"Accept": "application/vnd.github+json"}
    token = data.github_token()
    if token:
        headers["Authorization"] = f"Bearer {token}"
    _repo_cache_ts = now  # throttle failed requests as well as successful ones
    try:
        resp = requests.get(url, headers=headers, timeout=2.5)
        if resp.status_code == 200:
            repos = {}
            for r in resp.json():
                if r.get("fork"):
                    continue
                repos[r["name"].lower()] = {
                    "name": r["name"],
                    "url": r["html_url"],
                    "description": r.get("description"),
                    "language": r.get("language"),
                    "stars": r.get("stargazers_count", 0),
                    "topics": r.get("topics", []),
                    "fork": r.get("fork", False),
                    "homepage": r.get("homepage"),
                    "updatedAt": r.get("pushed_at"),
                    "archived": r.get("archived", False),
                }
            _repo_cache = repos
            _repo_cache_ts = now
    except requests.RequestException:
        pass  # fall back to static data
    return _repo_cache


@api_view(["GET"])
def about(request):
    """About-me payload: profile + education + expertise + experience + certs."""
    return Response(
        {
            "profile": data.PROFILE,
            "education": data.EDUCATION,
            "expertise": data.EXPERTISE,
            "experience": data.EXPERIENCE,
            "certifications": data.CERTIFICATIONS,
            "languages": data.LANGUAGES,
        }
    )


@api_view(["GET"])
def cv(request):
    """Structured CV + a link to the raw LaTeX for PDF download."""
    tex_url = request.build_absolute_uri("/api/portfolio/cv.tex")
    return Response(
        {
            "profile": data.PROFILE,
            "education": data.EDUCATION,
            "expertise": data.EXPERTISE,
            "experience": data.EXPERIENCE,
            "certifications": data.CERTIFICATIONS,
            "languages": data.LANGUAGES,
            "texUrl": tex_url,
        }
    )


@api_view(["GET"])
def projects(request):
    """Curated work plus remaining public repositories, with an offline snapshot."""
    repos = _fetch_repos()
    cards = []
    seen = set()
    for project in data.PROJECTS:
        card = dict(project)
        key = project["repo"].lower()
        seen.add(key)
        card["github"] = repos.get(key)
        cards.append(card)
    for key, repo in repos.items():
        if key in seen or repo.get("fork"):
            continue
        cards.append({
            "slug": key, "repo": repo["name"], "title": repo["name"],
            "summary": repo.get("description") or "Explore the source and documentation on GitHub.",
            "category": "More repositories", "featured": False,
            "tags": [repo["language"]] if repo.get("language") else [],
            "bullets": [], "github": repo,
        })
    return Response({
        "featured": [c for c in cards if c.get("featured")],
        "other": [c for c in cards if not c.get("featured")],
        "independent": data.INDEPENDENT_PROJECTS,
        "repositoryCount": len(repos),
        "reviewedAt": _snapshot["checkedAt"],
        "profileUrl": f"https://github.com/{data.GITHUB_USERNAME}",
    })
