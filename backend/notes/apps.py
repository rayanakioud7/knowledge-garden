from django.apps import AppConfig


class NotesConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "notes"

    def ready(self) -> None:
        # Warm the in-memory index on startup (cheap, and avoids a cold first
        # request). Failures here are non-fatal; the index can be built lazily.
        from .index import get_index

        try:
            get_index(refresh=False)
        except Exception:  # pragma: no cover - startup must never crash
            pass
