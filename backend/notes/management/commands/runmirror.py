"""Management command: run the one-way vault mirror + live reindex.

Usage::

    python manage.py runmirror            # start watching and mirroring
    python manage.py runmirror --no-sync  # skip the initial full sync

Watches ``GARDEN_SOURCE_VAULT`` (your native vault) and mirrors changed notes /
attachments into ``GARDEN_VAULT_PATH`` (the copy the app reads), then rebuilds
the index. Run this alongside ``runserver`` for the live "edit -> see it" loop.
Press Ctrl+C to stop.
"""

import time

from django.core.management.base import BaseCommand

from sync.mirror import VaultMirror


class Command(BaseCommand):
    help = "Mirror the native Obsidian vault into the project copy and reindex on change."

    def add_arguments(self, parser):
        parser.add_argument(
            "--no-sync",
            action="store_true",
            help="Skip the initial full mirror (assume copy is already current).",
        )

    def handle(self, *args, **options):
        do_sync = not options.get("no_sync", False)
        mirror = VaultMirror()
        self.stdout.write(
            self.style.WARNING(
                "Mirror watching (Ctrl+C to stop). Editing a note in your native "
                "vault will update the copy and reindex within seconds."
            )
        )
        mirror.start(initial_sync=do_sync)
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            self.stdout.write("")
            self.stdout.write(self.style.SUCCESS("Stopping mirror…"))
            mirror.stop()
