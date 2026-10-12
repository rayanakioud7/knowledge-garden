from pathlib import Path
from django.contrib import admin
from django.urls import path, re_path, include
from django.http import FileResponse, HttpResponse
from django.conf import settings

_DIST_DIR = settings.BASE_DIR.parent / "frontend" / "dist"

def spa_fallback(request):
    index = _DIST_DIR / "index.html"
    if index.exists():
        return FileResponse(index.open("rb"), content_type="text/html")
    return HttpResponse("Knowledge Garden API is online.", content_type="text/plain")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("notes.urls")),
    path("api/portfolio/", include("portfolio.urls")),
    re_path(r"^(?!api/|admin/|static/).*$", spa_fallback),
]
