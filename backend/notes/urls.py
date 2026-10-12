"""URL routes for the Knowledge Garden API (mounted under ``/api/``)."""

from django.urls import path

from . import views

urlpatterns = [
    path("notes/", views.note_list, name="note-list"),
    path("notes/<str:note_id>/", views.note_detail, name="note-detail"),
    path("graph/", views.graph, name="graph"),
    path("tree/", views.tree, name="tree"),
    path("tags/", views.tag_list, name="tag-list"),
    path("domains/", views.domains, name="domains"),
    path("status/", views.status, name="status"),
    path("sync/webhook/", views.sync_webhook, name="sync-webhook"),
    path("attachments/<path:filename>", views.serve_attachment, name="attachment"),
]
