"""Portfolio API routes (mounted under ``/api/portfolio/``)."""

from django.http import FileResponse, Http404
from django.urls import path
from pathlib import Path

from . import views

# Location of the LaTeX CV shipped with the project.
_CV_TEX = Path(__file__).resolve().parent.parent / "assets" / "cv.tex"


def cv_tex(request):
    if not _CV_TEX.exists():
        raise Http404("cv.tex not found.")
    return FileResponse(_CV_TEX.open("rb"), content_type="text/x-tex")


urlpatterns = [
    path("about/", views.about, name="portfolio-about"),
    path("cv/", views.cv, name="portfolio-cv"),
    path("cv.tex", cv_tex, name="portfolio-cv-tex"),
    path("projects/", views.projects, name="portfolio-projects"),
]
