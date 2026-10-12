"""Management command: build/refresh the vault index and write the cache file.

Usage::

    python manage.py build_index            # incremental (reuses cached HTML)
    python manage.py build_index --force    # full re-render of every note

This is the entry point used by the filesystem watcher, the hourly scheduled
job, and the Git sync webhook, so the "deferred real-time sync" story has a
single, well-defined rebuild path.
"""

from django.core.management.base import BaseCommand

from notes.index import rebuild_index


class Command(BaseCommand):
    help = "Scan the Obsidian vault and (re)build the Knowledge Garden index."

    def add_arguments(self, parser):
        parser.add_argument(
            "--force",
            action="store_true",
            help="Force a full re-render, ignoring the cached HTML.",
        )

    def handle(self, *args, **options):
        force = options.get("force", False)
        if force:
            self.stdout.write("Force rebuilding Knowledge Garden index (full re-render)…")
        else:
            self.stdout.write("Building Knowledge Garden index…")
        index = rebuild_index(force=force)
        status = index.status()
        self.stdout.write(
            self.style.SUCCESS(
                "Indexed {noteCount} notes · {edgeCount} links · {tagCount} tags".format(
                    **status
                )
            )
        )
