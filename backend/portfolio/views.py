"""Portfolio API: About, CV, and live-enriched Projects."""

from __future__ import annotations

import time
from typing import Dict, List

import requests
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

from . import data

# Small in-process cache so we don't hammer the GitHub API on every request.
_repo_cache: Dict[str, dict] = {}
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
    try:
        resp = requests.get(url, headers=headers, timeout=2.5)
        if resp.status_code == 200:
            repos = {}
            for r in resp.json():
                repos[r["name"].lower()] = {
                    "name": r["name"],
                    "url": r["html_url"],
                    "description": r.get("description"),
                    "language": r.get("language"),
                    "stars": r.get("stargazers_count", 0),
                    "topics": r.get("topics", []),
                    "fork": r.get("fork", False),
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
    """Project cards enriched with live GitHub metadata when available."""
    repos = _fetch_repos()
    cards: List[dict] = []
    for p in data.PROJECTS:
        card = dict(p)
        card["github"] = None
        repo_key = (p.get("repo") or "").lower()
        if repo_key and repo_key in repos:
            card["github"] = repos[repo_key]
        elif p.get("repo"):
            card["github"] = {
                "name": p["repo"],
                "url": f"https://github.com/{data.GITHUB_USERNAME}/{p['repo']}",
                "description": None,
                "language": None,
                "stars": 0,
                "topics": [],
                "fork": False,
            }
        cards.append(card)
    featured = [c for c in cards if c.get("featured")]
    rest = [c for c in cards if not c.get("featured")]
    featured.sort(key=lambda c: str(c.get("year", "")), reverse=True)
    rest.sort(key=lambda c: str(c.get("year", "")), reverse=True)
    return Response({"featured": featured, "other": rest})
