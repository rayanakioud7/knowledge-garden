#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# hourly_sync.sh — the "deferred real-time sync" scheduled path.
#
# Runs on a cron/systemd timer (e.g. every hour). It pulls the latest vault
# from its Git remote (kept up to date by the Obsidian Git plugin) and rebuilds
# the Knowledge Garden index. This is the fallback that guarantees the site is
# at most one hour stale even if the Git webhook is missed.
#
# Crontab example (every hour on the hour):
#   0 * * * * /c/Projects/knowledge\ garden/scripts/hourly_sync.sh >> /c/Projects/knowledge\ garden/scripts/hourly_sync.log 2>&1
# ---------------------------------------------------------------------------
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VAULT_DIR="${GARDEN_VAULT_PATH:-$REPO_ROOT/Obsidian}"
PYTHON="${GARDEN_PYTHON:-python}"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] hourly sync starting…"

# 1. Pull the latest vault from Git (no-op if not a git repo).
if [ -d "$VAULT_DIR/.git" ]; then
  echo "Pulling vault from git…"
  git -C "$VAULT_DIR" pull --rebase --autostash || echo "git pull failed; using local state"
else
  echo "Vault is not a git repo; skipping pull."
fi

# 2. Rebuild the index (incremental — reuses cached HTML for unchanged notes).
cd "$REPO_ROOT/backend"
"$PYTHON" manage.py build_index

echo "[$(date '+%Y-%m-%d %H:%M:%S')] hourly sync done."
