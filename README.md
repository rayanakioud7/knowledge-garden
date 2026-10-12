# Knowledge Garden

A monochrome, self-updating web reader for a personal **Obsidian** vault — built
as both an engineering portfolio and a live knowledge graph. Edit a note in
Obsidian and it appears on the site within minutes, automatically.

```
Obsidian vault ──(git push ~15min)──▶ GitHub ──webhook──▶ Django rebuild ─▶ React SPA
      │                                                             ▲
      └──(local filesystem watcher, near-instant)───────────────────┘
                              ▲
                hourly scheduled pull (fallback, ≤1h stale)
```

---

## What it does

- **Reads `.md` notes** straight from your vault directory (no copy, no CMS).
- **Parses Obsidian syntax**: `[[wikilinks]]`, `Tags:` headers, callouts
  (`> [!INFO]`), `$...$` LaTeX, `==highlights==`, `~={colour}=~`, and `![[image]]`
  embeds.
- **Builds a knowledge graph** of notes + wikilinks (interactive, filterable).
- **Full-text search** over every note.
- **Serves as a portfolio**: About, CV (print-to-PDF), and live GitHub projects.
- **Stays fresh automatically** — the flagship *deferred real-time sync*.

---

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | **React 18 + Vite + Tailwind CSS + React Router** |
| Markdown | **markdown-it** (server render) + **KaTeX** (client math) |
| Graph | **react-force-graph-2d** (d3-force) |
| Backend | **Django 5 + Django REST Framework** |
| Search | **Meilisearch** (optional) or in-memory fallback |
| Sync | **watchdog** (local) + **Git webhook** + **hourly pull** |

---

## The flagship feature: deferred real-time sync

Sync is **event-driven and eventual**, not a live websocket — this is the
intentional design story for the course project.

The web app **never reads your live vault directly**. It only ever reads the
in-project copy at `GARDEN_VAULT_PATH`. Two complementary mechanisms keep that
copy fresh, and both funnel into one rebuild command (`python manage.py
build_index`):

### 1. One-way mirror watcher (the live mechanism — what you use day-to-day)

`python manage.py runmirror` starts a `watchdog` process that watches your
**native vault** (`GARDEN_SOURCE_VAULT`, e.g. your OneDrive folder) and mirrors
changed notes/attachments into the project copy, then reindexes:

```
native vault (Obsidian)  --watchdog mirror-->  project copy  --reindex-->  site
```

* Debounced (~1.5s) so it never copies a file mid-write by OneDrive.
* Copies only `.md` + attachment files; ignores `.obsidian`/`.trash`/`Excalidraw`.
* Handles edits, new notes, and deletions; runs a one-time full sync on start.
* Result: edit a note in Obsidian → it appears on the site within seconds.

```bash
# terminal 1
cd backend && python manage.py runserver
# terminal 2
cd backend && python manage.py runmirror
```

### 2. Git webhook + hourly pull (the production path — documented architecture)

For a deployed server you can't watch with a local process, the vault is kept in
Git and pushed by the **Obsidian Git** plugin. This is the classic "deferred
real-time" pipeline:

1. **Local watcher / Obsidian Git** — Obsidian auto-commits & pushes the vault
   (~15 min).
2. **Git webhook** — GitHub POSTs to `/api/sync/webhook/`, which triggers a
   rebuild (protected by `GARDEN_WEBHOOK_SECRET`).
3. **Hourly scheduled pull** (`scripts/hourly_sync.sh`) — a safety net so the
   site is at most one hour stale even if the webhook is missed.

All rebuilds are **incremental**: unchanged notes reuse their cached rendered
HTML (content-hash based), so a rebuild over 400+ notes takes well under a
second.

The front-end shows a **sync-status badge** (note count + "indexed N ago") that
polls `/api/status/` each minute.

---

## Project layout

```
knowledge garden/
├── Obsidian/               # your vault (read-only input)
├── backend/                # Django + DRF
│   ├── garden_api/         # project settings, urls, wsgi
│   ├── notes/              # garden API + in-memory index service
│   ├── parser/             # the .md -> HTML + structured-data engine
│   │   ├── extract.py      #   frontmatter, wikilinks, tags, callouts
│   │   ├── renderer.py     #   Obsidian markdown -> sanitized HTML
│   │   └── vault.py        #   walk vault, resolve links, build graph
│   ├── portfolio/          # About / CV / Projects (live GitHub) API
│   ├── sync/               # filesystem watcher
│   └── assets/cv.tex       # source CV for download
├── frontend/               # React + Vite + Tailwind SPA
│   └── src/
│       ├── pages/          # About, CV, Projects, Garden, Note, Graph, Search
│       └── components/     # Layout, Sidebar, Markdown, SyncBadge, ...
├── scripts/
│   ├── test_parser.py      # parser smoke test
│   └── hourly_sync.sh      # scheduled git-pull + rebuild
└── docker-compose.yml      # optional Meilisearch
```

---

## Quick start

### 1. Backend (Django)

```bash
# Uses the dedicated `garden` micromamba env (created for this project)
micromamba activate garden
cd backend
python manage.py migrate
python manage.py build_index          # scan the vault, build the index
python manage.py runserver            # http://127.0.0.1:8000
```

Optional — local watcher for near-instant sync while developing:

```bash
python -c "import django,os; os.environ.setdefault('DJANGO_SETTINGS_MODULE','garden_api.settings'); django.setup(); from sync.watcher import VaultWatcher; VaultWatcher().start(); import time; time.sleep(10**9)"
```

### 1b. Mirror your native vault into the copy (live sync)

If your real vault lives elsewhere (e.g. OneDrive), mirror it into the project
copy and watch for changes:

```bash
# set GARDEN_SOURCE_VAULT to your native vault (see backend/.env.example)
cd backend && python manage.py runmirror
```

This watches the native vault and copies changed notes/attachments into
`Obsidian/`, then reindexes. Run it alongside `runserver`.

### 2. Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev                            # http://localhost:5173 (proxies /api -> :8000)
```

Production build:

```bash
npm run build      # outputs frontend/dist/
```

### 3. Optional: Meilisearch

```bash
docker compose up -d
# then set MEILISEARCH_URL/MEILISEARCH_KEY in backend/.env
```

---

## Configuration

Copy `backend/.env.example` to `backend/.env` and set:

- `GARDEN_VAULT_PATH` — the in-project vault copy the app reads.
- `GARDEN_SOURCE_VAULT` — your native vault (source for `runmirror`).
- `GARDEN_WEBHOOK_SECRET` — shared secret for the sync webhook (prod).
- `MEILISEARCH_URL` / `MEILISEARCH_KEY` — enable Meilisearch search.
- `GITHUB_TOKEN` — raise GitHub API limits for live project metadata.

---

## API reference

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/notes/` | List/filter notes (`?domain=`, `?tag=`, `?q=`) |
| GET | `/api/notes/<id>/` | One note (rendered HTML, links, backlinks) |
| GET | `/api/graph/` | Nodes + edges (`?domain=` to filter) |
| GET | `/api/tree/` | Full nested folder tree (sidebar navigation) |
| GET | `/api/tags/` | All tags with counts |
| GET | `/api/domains/` | Dewey taxonomy + per-domain counts |
| GET | `/api/status/` | Sync status (counts, last build) |
| POST | `/api/sync/webhook/` | Trigger a rebuild |
| GET | `/api/attachments/<file>` | Serve vault images/PDFs |
| GET | `/api/portfolio/about/` | About payload |
| GET | `/api/portfolio/cv/` | Structured CV + LaTeX URL |
| GET | `/api/portfolio/projects/` | Projects (live GitHub metadata) |

---

## Setting up the Git sync (production path)

1. In Obsidian, install the **Obsidian Git** plugin; set it to auto-commit &
   push every ~15 minutes to a private repo.
2. On the server, add a GitHub **webhook** (push events) pointing to
   `https://<your-host>/api/sync/webhook/`.
3. Set `GARDEN_WEBHOOK_SECRET` on the server and as the webhook secret.
4. Install `scripts/hourly_sync.sh` on a cron timer as the fallback:

   ```cron
   0 * * * * /c/Projects/knowledge\ garden/scripts/hourly_sync.sh >> sync.log 2>&1
   ```

---

## Design language

Monochrome editorial: **black / white / greys**, no gradients. Hairline rules
and mono metadata chips give it an "administrative / institutional" feel; serif
note bodies + grotesk headings reference `stanford.edu/~shervine/teaching` and
`aman.ai`. The single restrained accent (`#002d62`, echoing the CV) is used only
for links and interactive elements.

### Navigation

The garden sidebar is an **interactive folder tree** that mirrors your vault's
real structure, as deep as it goes (up to 6 levels). Click a branch (e.g.
*Formal Sciences → Pure Mathematics → Algebra → Linear Algebra → …*) to expand
it down to the leaf `.md` notes. The chain to the note you're viewing
auto-expands. Powered by `GET /api/tree/`.

### Dark mode

A monochrome dark theme (same palette, inverted) toggled from the sidebar. The
choice is persisted in `localStorage` and respects your OS preference on first
visit. Theming is driven by CSS custom properties in `frontend/src/index.css`
(`:root` / `.dark`), so every surface, border, and the knowledge graph all
adapt automatically with a single class swap on `<html>`.
