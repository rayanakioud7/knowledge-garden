"""Django settings for the Knowledge Garden backend.

The app is a thin JSON API that serves the pre-built vault index and renders
individual notes on demand. Configuration is driven by environment variables
(see ``.env.example``) so the same code runs locally and in production.
"""

from __future__ import annotations

import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


def _env(name: str, default: str | None = None) -> str | None:
    value = os.environ.get(name)
    return value if value not in (None, "") else default


def _env_bool(name: str, default: bool = False) -> bool:
    return _env(name, str(default)).lower() in ("1", "true", "yes", "on")


# ---------------------------------------------------------------------------
# Core
# ---------------------------------------------------------------------------

SECRET_KEY = _env("DJANGO_SECRET_KEY", "dev-insecure-secret-change-me")
DEBUG = _env_bool("DJANGO_DEBUG", True)
ALLOWED_HOSTS = _env("DJANGO_ALLOWED_HOSTS", "localhost,127.0.0.1,testserver,.onrender.com,.koyeb.app,.hf.space").split(",")

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "corsheaders",
    "notes",
    "portfolio",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "garden_api.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "garden_api.wsgi.application"

# SQLite is plenty for an API that mostly serves a static index. It also keeps
# the project zero-ops for a class deployment.
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / _env("GARDEN_DB_NAME", "garden.sqlite3"),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

LANGUAGE_CODE = "en-us"
TIME_ZONE = "Africa/Casablanca"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "staticfiles"
WHITENOISE_ROOT = BASE_DIR.parent / "frontend" / "dist"
WHITENOISE_INDEX_FILE = True
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# ---------------------------------------------------------------------------
# CORS (dev: allow the Vite dev server; tighten in prod)
# ---------------------------------------------------------------------------

CORS_ALLOWED_ORIGINS = _env(
    "GARDEN_CORS_ORIGINS",
    "http://localhost:5173,http://127.0.0.1:5173,http://localhost:5174,http://127.0.0.1:5174,http://localhost:3000",
).split(",")
CORS_ALLOW_ALL_ORIGINS = _env_bool("CORS_ALLOW_ALL_ORIGINS", False)
CORS_ALLOWED_ORIGIN_REGEXES = [
    r"^https:\/\/.*\.vercel\.app$",
    r"^https:\/\/.*\.netlify\.app$",
    r"^https:\/\/.*\.onrender\.com$",
    r"^https:\/\/.*\.hf\.space$",
]

# ---------------------------------------------------------------------------
# Knowledge Garden specific
# ---------------------------------------------------------------------------

# Absolute path to the Obsidian vault. Falls back to a sibling ``Obsidian`` dir.
GARDEN_VAULT_PATH = _env("GARDEN_VAULT_PATH", str(BASE_DIR.parent / "Obsidian"))
# The *source* vault the mirror watcher reads from (your native OneDrive vault).
# The app never reads this directly; ``sync.mirror`` copies changes from here
# into ``GARDEN_VAULT_PATH`` and reindexes. Only used by ``manage.py runmirror``.
GARDEN_SOURCE_VAULT = _env(
    "GARDEN_SOURCE_VAULT",
    r"C:\Users\rayan\OneDrive\Documents\Obsidian",
)
# Where the serialized index is cached.
GARDEN_INDEX_PATH = _env("GARDEN_INDEX_PATH", str(BASE_DIR / "garden-index.json"))
# Attachment (image) base URL used by the markdown renderer.
GARDEN_ATTACHMENT_URL = _env("GARDEN_ATTACHMENT_URL", "/api/attachments/")
# Meilisearch connection (optional; search falls back to in-memory if unset).
MEILISEARCH_URL = _env("MEILISEARCH_URL", "")
MEILISEARCH_KEY = _env("MEILISEARCH_KEY", "")
MEILISEARCH_INDEX = _env("MEILISEARCH_INDEX", "garden")
# Shared secret required on the sync webhook endpoint.
GARDEN_WEBHOOK_SECRET = _env("GARDEN_WEBHOOK_SECRET", "")

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {"console": {"class": "logging.StreamHandler"}},
    "root": {"handlers": ["console"], "level": "INFO"},
}
