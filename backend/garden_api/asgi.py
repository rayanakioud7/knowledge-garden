"""ASGI config for the Knowledge Garden backend."""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "garden_api.settings")

application = get_asgi_application()
