# Day 2 — Infrastructure Services & Development Environment

---

## First — Your Teammate's Access Question

```text
You made the right call. Here is the explanation
you can give him so he understands why:

Organization Roles Explained:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Member (Maintainer on repo):
→ Can push branches
→ Can open and merge Pull Requests
→ Can manage issues and labels
→ Cannot change organization settings
→ Cannot delete the repository
→ Cannot manage billing or security settings

Owner (Full Admin):
→ Can do everything above PLUS
→ Can delete the repository permanently
→ Can change organization name
→ Can manage payment methods
→ Can remove other owners
→ Can change security policies

Why Maintainer is correct RIGHT NOW:
→ You are in the foundation phase
→ One person controls critical settings
→ This is standard practice in every startup
→ Trust is built through demonstrated work
→ Full access is given when:
   - The project has real infrastructure
   - Both of you have established workflow habits
   - There is something valuable to protect

When to upgrade him to Owner:
→ After the first working prototype is deployed
→ After you have both demonstrated disciplined
  Git workflow for at least 4-6 weeks
→ This is not about trust between friends
   It is about organizational discipline
```

---

## Day 2 Overview

```text
What we build today:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Morning Block:
└── The lifeagent_dev micromamba environment
    (The Python environment both of you will use)

Afternoon Block:
└── Docker Compose infrastructure stack
    ├── PostgreSQL 16 with extensions
    │   ├── pgvector (AI embeddings)
    │   └── TimescaleDB (time-series health data)
    ├── Redis 7
    └── pgAdmin 4 (database management UI)

End of Day Verification:
└── Every service starts, responds, and is accessible
└── environment.yml committed to repository
└── Your friend can replicate everything
```

---

## BLOCK 1 — The lifeagent_dev Environment

### Why a New Environment and Not ai_env

```python
ai_env is your personal laboratory.
You experiment there freely.
Packages are installed ad-hoc as you explore.

lifeagent_dev is the project environment.
Every package has a reason to be there.
The environment is defined by a file in the repository.
Your teammate runs one command and gets the identical setup.
Six months from now you can recreate it on a new machine
in under three minutes.

This separation is what makes a project maintainable
versus a project that only works on one specific machine.
```

### Step 1 — Create the Environment

```bash
Open your terminal and run:

micromamba create -n lifeagent_dev python=3.12 -c conda-forge -y
```

```text
Why Python 3.12 specifically?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3.12 is the current stable production version.
FastAPI, LangGraph, and all major ML libraries
officially support and test against 3.12.
It has significant performance improvements over 3.11.
It is what your ai_env already uses.
Consistency across environments avoids subtle bugs.
```

Activate it:

```bash
micromamba activate lifeagent_dev
```

Your prompt should now show:

```text
(lifeagent_dev)
~ via 🅒 lifeagent_dev
❯
```

### Step 2 — Install Packages in Logical Groups

We install in groups so if something fails you know exactly which category caused the problem.

**Group 1 — Core System Libraries via conda-forge:**

```bash
micromamba install -c conda-forge \
  git \
  curl \
  make \
  -y
```

**Group 2 — PyTorch with ROCm (from PyPI, same as your ai_env):**

```bash
pip install torch==2.9.1+rocm6.3 \
            torchaudio==2.9.1+rocm6.3 \
            torchvision==0.24.1+rocm6.3 \
            --index-url https://download.pytorch.org/whl/rocm6.3
```

```python
Why install PyTorch manually instead of conda?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The ROCm builds of PyTorch come from PyTorch's own
index server, not conda-forge.
We pin the exact version you already validated.
This guarantees identical behavior to your ai_env.
```

**Group 3 — ML and Training Stack:**

```bash
pip install \
  transformers==5.12.1 \
  accelerate==1.14.0 \
  peft==0.19.1 \
  trl==1.6.0 \
  datasets==5.0.0 \
  evaluate==0.4.6 \
  safetensors==0.8.0 \
  huggingface_hub==1.20.1 \
  tokenizers==0.22.2 \
  sentence-transformers==3.3.1 \
  wandb==0.27.2
```

**Group 4 — Agent Framework (installing both for evaluation):**

```bash
pip install \
  langchain-core==0.3.29 \
  langchain-community==0.3.17 \
  langchain-ollama==0.2.3 \
  langgraph==0.2.69 \
  crewai==0.86.0
```

```text
Why install both LangGraph and CrewAI?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Day 4-5 is the evaluation sprint where you and
your teammate each prototype with one framework.
Both need to be available in the same environment
so the comparison is fair.
After the decision is made, we remove the loser.
```

**Group 5 — Backend API and Database:**

```bash
pip install \
  fastapi==0.115.6 \
  uvicorn[standard]==0.32.1 \
  pydantic==2.10.4 \
  pydantic-settings==2.7.0 \
  sqlalchemy==2.0.36 \
  alembic==1.14.0 \
  asyncpg==0.30.0 \
  psycopg2-binary==2.9.10 \
  pgvector==0.3.6 \
  redis==5.2.1 \
  celery==5.4.0
```

**Group 6 — Voice Pipeline:**

```bash
pip install \
  faster-whisper==1.1.0 \
  sounddevice==0.5.1 \
  soundfile==0.12.1 \
  webrtcvad==2.0.10 \
  websockets==14.1 \
  httpx==0.28.1
```

```python
Note on Piper TTS:
━━━━━━━━━━━━━━━━━
Piper TTS is installed separately from its GitHub releases
as a binary, not via pip.
We handle this in the voice pipeline sprint (Sprint 2).
For now the above covers the input side of voice.
```

**Group 7 — Development Quality Tools:**

```bash
pip install \
  ruff==0.8.4 \
  pyright==1.1.391 \
  pytest==8.3.4 \
  pytest-asyncio==0.24.0 \
  pytest-cov==6.0.0 \
  httpx==0.28.1 \
  pre-commit==4.0.1 \
  ipykernel==7.3.0 \
  jupyterlab==4.3.4
```

### Step 3 — Verify Critical Packages

Run these checks one by one:

```python
# Verify PyTorch sees your GPU
python -c "
import torch
print(f'PyTorch version: {torch.__version__}')
print(f'ROCm available: {torch.cuda.is_available()}')
print(f'GPU name: {torch.cuda.get_device_name(0)}')
print(f'VRAM: {torch.cuda.get_device_properties(0).total_memory / 1024**3:.1f} GB')
"
```

```text
Expected output:
PyTorch version: 2.9.1+rocm6.3
ROCm available: True
GPU name: AMD Radeon RX 7900 XT
VRAM: 20.0 GB
```

```python
# Verify FastAPI is importable
python -c "import fastapi; print(f'FastAPI: {fastapi.__version__}')"

# Verify LangGraph is importable
python -c "import langgraph; print(f'LangGraph: {langgraph.__version__}')"

# Verify database drivers work
python -c "import asyncpg; import psycopg2; print('Database drivers: OK')"

# Verify Redis client works
python -c "import redis; print(f'Redis client: {redis.__version__}')"
```

```text
If any of these fail:
━━━━━━━━━━━━━━━━━━━━
Note the exact error message.
Do not move forward until all pass.
Each one represents a critical system dependency.
```

### Step 4 — Export the Environment File

This is the most important step of Block 1. This file is what your teammate uses to replicate your environment exactly:

```bash
Navigate to your project directory first:
cd ~/projects/lifeagent

Export the environment:
micromamba env export -n lifeagent_dev > environment.yml
```

Now open and review the file:

```text
code environment.yml
```

The file will be very long. Verify at the top it shows:

```yaml
name: lifeagent_dev
channels:
  - conda-forge
  - defaults
dependencies:
  - python=3.12.x
  ... many packages ...
  - pip:
    - torch==2.9.1+rocm6.3
    ... all pip packages ...
```

```text
One important edit to make:
━━━━━━━━━━━━━━━━━━━━━━━━━━

At the very bottom of the file you will see:
prefix: /home/akioudrayan/micromamba/envs/lifeagent_dev

Delete that line entirely.

Why?
The prefix line contains YOUR specific home directory path.
Your teammate's path will be different.
If this line exists, the env create command fails on his machine.
Remove it and the file becomes portable.
```

Also create a human-readable requirements file for reference:

```bash
pip list --format=freeze > docs/requirements-reference.txt
```

### Step 5 — Commit the Environment File

```bash
git add environment.yml
git add docs/requirements-reference.txt
git commit -m "chore: add lifeagent_dev environment definition

- Python 3.12 with ROCm PyTorch 2.9.1
- Full ML stack: transformers, peft, trl, accelerate
- Agent frameworks: LangGraph, CrewAI (evaluation pending)
- Backend: FastAPI, SQLAlchemy, asyncpg, Redis
- Voice: faster-whisper, sounddevice, webrtcvad
- Dev tools: ruff, pyright, pytest, pre-commit"

git push origin main
```

---

## BLOCK 2 — Infrastructure Services with Podman Compose

### The Mental Model Before We Start

```python
What we are building:

Your Machine (Fedora)
├── Podman (container runtime) — already installed
│
└── Containers managed by podman compose:
    │
    ├── postgres (port 5432)
    │   ├── pgvector extension loaded
    │   └── TimescaleDB extension loaded
    │
    ├── redis (port 6379)
    │   └── Persistent data storage enabled
    │
    └── pgadmin (port 5050)
        └── Web UI to inspect your database
            accessible at http://localhost:5050

These containers:
→ Start with one command
→ Stop with one command
→ Data persists between restarts (volumes)
→ Are isolated from your host system
→ Are identical on your machine and your teammate's
```

### Step 6 — Create the Infrastructure Directory Structure

```bash
cd ~/projects/lifeagent

mkdir -p infra/docker/postgres
mkdir -p infra/docker/redis
mkdir -p infra/scripts
```

### Step 7 — PostgreSQL Initialization Script

This script runs automatically the first time PostgreSQL starts. It creates our database extensions:

```text
code infra/docker/postgres/init.sql
```

```sql
-- =============================================================================
-- LifeAgent — PostgreSQL Initialization
-- Runs once on first container startup
-- =============================================================================

-- Enable pgvector for AI embedding storage
CREATE EXTENSION IF NOT EXISTS vector;

-- Enable TimescaleDB for time-series health data
CREATE EXTENSION IF NOT EXISTS timescaledb;

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable case-insensitive text
CREATE EXTENSION IF NOT EXISTS citext;

-- Verify extensions loaded correctly
SELECT extname, extversion
FROM pg_extension
WHERE extname IN ('vector', 'timescaledb', 'uuid-ossp', 'citext');
```

### Step 8 — Redis Configuration

```text
code infra/docker/redis/redis.conf
```

```conf
# =============================================================================
# LifeAgent — Redis Configuration
# =============================================================================

# Persistence — save data to disk so it survives restarts
save 900 1
save 300 10
save 60 10000

# Memory management
maxmemory 2gb
maxmemory-policy allkeys-lru

# Security — password protected
requirepass lifeagent_redis_dev

# Performance
tcp-keepalive 300
timeout 0

# Logging
loglevel notice

# Allow connections from all interfaces within the container network
bind 0.0.0.0
protected-mode no
```

```python
Why a password even for local development?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two reasons:

1. Habit building.
   You write connection code that uses passwords.
   When you move to production, the code does not change.
   Only the password value changes via environment variables.

2. When Tailscale connects your machines,
   Redis becomes reachable from your teammate's machine.
   A password prevents accidental connections.
```

### Step 9 — The Environment Variables File

```text
code .env.development
```

```bash
# =============================================================================
# LifeAgent — Development Environment Variables
# =============================================================================
# THIS FILE IS FOR LOCAL DEVELOPMENT ONLY
# It is listed in .gitignore and will NEVER be committed
# Each developer has their own copy of this file
#
# For production: these values come from a secrets manager
# =============================================================================

# -----------------------------------------------------------------------------
# PostgreSQL
# -----------------------------------------------------------------------------
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=lifeagent_dev
POSTGRES_USER=lifeagent
POSTGRES_PASSWORD=lifeagent_postgres_dev
POSTGRES_URL=postgresql://lifeagent:lifeagent_postgres_dev@localhost:5432/lifeagent_dev
POSTGRES_ASYNC_URL=postgresql+asyncpg://lifeagent:lifeagent_postgres_dev@localhost:5432/lifeagent_dev

# -----------------------------------------------------------------------------
# Redis
# -----------------------------------------------------------------------------
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=lifeagent_redis_dev
REDIS_URL=redis://:lifeagent_redis_dev@localhost:6379/0

# -----------------------------------------------------------------------------
# pgAdmin
# -----------------------------------------------------------------------------
PGADMIN_EMAIL=admin@lifeagent.dev
PGADMIN_PASSWORD=pgadmin_dev

# -----------------------------------------------------------------------------
# Ollama
# -----------------------------------------------------------------------------
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5:7b

# -----------------------------------------------------------------------------
# Application
# -----------------------------------------------------------------------------
APP_ENV=development
APP_DEBUG=true
APP_SECRET_KEY=dev-secret-key-change-in-production
APP_HOST=0.0.0.0
APP_PORT=8000

# -----------------------------------------------------------------------------
# WandB (Experiment Tracking)
# -----------------------------------------------------------------------------
WANDB_PROJECT=lifeagent
WANDB_MODE=online
```

Now verify this file is properly gitignored:

```bash
git check-ignore -v .env.development
```

```text
Expected output:
.gitignore:XX:.env    .env.development

If you see this output, the file is ignored correctly.
If you see nothing, the file is NOT ignored.

If not ignored, open .gitignore and verify
this line exists:
.env.development

Add it manually if missing.
This is critical — passwords must never reach GitHub.
```

Create a safe template that IS committed:

```text
code .env.example
```

```bash
# =============================================================================
# LifeAgent — Environment Variables Template
# =============================================================================
# Copy this file to .env.development and fill in your values
# cp .env.example .env.development
#
# NEVER commit .env.development
# ALWAYS keep .env.example updated when adding new variables
# =============================================================================

# PostgreSQL
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=lifeagent_dev
POSTGRES_USER=lifeagent
POSTGRES_PASSWORD=your_password_here
POSTGRES_URL=postgresql://lifeagent:your_password_here@localhost:5432/lifeagent_dev
POSTGRES_ASYNC_URL=postgresql+asyncpg://lifeagent:your_password_here@localhost:5432/lifeagent_dev

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your_redis_password_here
REDIS_URL=redis://:your_redis_password_here@localhost:6379/0

# pgAdmin
PGADMIN_EMAIL=admin@lifeagent.dev
PGADMIN_PASSWORD=your_pgadmin_password_here

# Ollama
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5:7b

# Application
APP_ENV=development
APP_DEBUG=true
APP_SECRET_KEY=generate-a-secure-random-key
APP_HOST=0.0.0.0
APP_PORT=8000

# WandB
WANDB_PROJECT=lifeagent
WANDB_MODE=online
```

### Step 10 — The Docker Compose File

This is the central infrastructure definition:

```text
code docker-compose.yml
```

```yaml
# =============================================================================
# LifeAgent — Infrastructure Services
# Run with: podman compose up -d
# Stop with: podman compose down
# Logs: podman compose logs -f [service-name]
# =============================================================================

name: lifeagent

services:

  # ---------------------------------------------------------------------------
  # PostgreSQL 16 with AI and time-series extensions
  # ---------------------------------------------------------------------------
  postgres:
    image: timescale/timescaledb-ha:pg16-latest
    container_name: lifeagent-postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: ${POSTGRES_DB:-lifeagent_dev}
      POSTGRES_USER: ${POSTGRES_USER:-lifeagent}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-lifeagent_postgres_dev}
      POSTGRES_HOST_AUTH_METHOD: scram-sha-256
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./infra/docker/postgres/init.sql:/docker-entrypoint-initdb.d/init.sql:ro
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER:-lifeagent} -d ${POSTGRES_DB:-lifeagent_dev}"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 30s
    networks:
      - lifeagent-network

  # ---------------------------------------------------------------------------
  # Redis 7 — Cache and Message Broker
  # ---------------------------------------------------------------------------
  redis:
    image: redis:7-alpine
    container_name: lifeagent-redis
    restart: unless-stopped
    command: redis-server /usr/local/etc/redis/redis.conf
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
      - ./infra/docker/redis/redis.conf:/usr/local/etc/redis/redis.conf:ro
    healthcheck:
      test: ["CMD", "redis-cli", "-a", "${REDIS_PASSWORD:-lifeagent_redis_dev}", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 10s
    networks:
      - lifeagent-network

  # ---------------------------------------------------------------------------
  # pgAdmin 4 — Database Management UI
  # Access at http://localhost:5050
  # ---------------------------------------------------------------------------
  pgadmin:
    image: dpage/pgadmin4:latest
    container_name: lifeagent-pgadmin
    restart: unless-stopped
    environment:
      PGADMIN_DEFAULT_EMAIL: ${PGADMIN_EMAIL:-admin@lifeagent.dev}
      PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_PASSWORD:-pgadmin_dev}
      PGADMIN_CONFIG_SERVER_MODE: "False"
      PGADMIN_CONFIG_MASTER_PASSWORD_REQUIRED: "False"
    ports:
      - "5050:80"
    volumes:
      - pgadmin_data:/var/lib/pgadmin
    depends_on:
      postgres:
        condition: service_healthy
    networks:
      - lifeagent-network

# =============================================================================
# Volumes — persistent data storage
# Data survives container restarts and removals
# =============================================================================
volumes:
  postgres_data:
    name: lifeagent-postgres-data
  redis_data:
    name: lifeagent-redis-data
  pgadmin_data:
    name: lifeagent-pgadmin-data

# =============================================================================
# Networks — isolated container communication
# =============================================================================
networks:
  lifeagent-network:
    name: lifeagent-network
    driver: bridge
```

```python
Understanding the key concepts in this file:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

image: timescale/timescaledb-ha:pg16-latest
→ This single image includes PostgreSQL 16,
  TimescaleDB, AND pgvector already installed.
→ We do not need separate images for each extension.
→ The -ha suffix means High Availability build,
  which is the most feature-complete version.

restart: unless-stopped
→ If the container crashes, it restarts automatically.
→ If YOU stop it manually, it stays stopped.
→ Perfect for development services.

healthcheck:
→ Podman checks if the service is actually ready
  not just running.
→ pgAdmin depends_on postgres with condition: service_healthy
→ This means pgAdmin only starts AFTER PostgreSQL
  is fully ready to accept connections.
→ Without this, pgAdmin starts and immediately fails
  because PostgreSQL is not ready yet.

${POSTGRES_PASSWORD:-lifeagent_postgres_dev}
→ This reads from your .env.development file.
→ The :-lifeagent_postgres_dev part is a fallback
  if the variable is not set.
→ Your actual passwords stay in .env.development
  which is never committed.

volumes:
→ postgres_data is a named volume managed by Podman.
→ Your database data lives here permanently.
→ Even if you run podman compose down, data persists.
→ Only podman compose down -v deletes volumes.
→ Never run down -v unless you want to start fresh.
```

### Step 11 — The Makefile

A Makefile gives you short memorable commands instead of long podman compose strings. This is standard professional practice:

```text
code Makefile
```

```makefile
# =============================================================================
# LifeAgent — Project Commands
# Usage: make <command>
# =============================================================================

.PHONY: help up down restart logs ps clean db-shell redis-shell

# Default target — show available commands
help:
	@echo ""
	@echo "LifeAgent — Available Commands"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo ""
	@echo "Infrastructure:"
	@echo "  make up          Start all services (detached)"
	@echo "  make down        Stop all services"
	@echo "  make restart     Restart all services"
	@echo "  make logs        Follow logs for all services"
	@echo "  make ps          Show running containers"
	@echo ""
	@echo "Database:"
	@echo "  make db-shell    Open PostgreSQL interactive shell"
	@echo "  make db-reset    Drop and recreate database (DESTRUCTIVE)"
	@echo ""
	@echo "Cache:"
	@echo "  make redis-shell Open Redis interactive shell"
	@echo "  make redis-flush Flush all Redis data (DESTRUCTIVE)"
	@echo ""
	@echo "Development:"
	@echo "  make api         Start FastAPI development server"
	@echo "  make test        Run test suite"
	@echo "  make lint        Run ruff linter"
	@echo "  make typecheck   Run pyright type checker"
	@echo "  make clean       Remove all containers and volumes (DESTRUCTIVE)"
	@echo ""

# -----------------------------------------------------------------------------
# Infrastructure Commands
# -----------------------------------------------------------------------------
up:
	@echo "Starting LifeAgent infrastructure..."
	podman compose --env-file .env.development up -d
	@echo "Services started. Access:"
	@echo "  PostgreSQL : localhost:5432"
	@echo "  Redis      : localhost:6379"
	@echo "  pgAdmin    : http://localhost:5050"

down:
	@echo "Stopping LifeAgent infrastructure..."
	podman compose down

restart:
	podman compose down
	podman compose --env-file .env.development up -d

logs:
	podman compose logs -f

logs-postgres:
	podman compose logs -f postgres

logs-redis:
	podman compose logs -f redis

ps:
	podman compose ps

# -----------------------------------------------------------------------------
# Database Commands
# -----------------------------------------------------------------------------
db-shell:
	podman exec -it lifeagent-postgres psql -U lifeagent -d lifeagent_dev

db-reset:
	@echo "WARNING: This will destroy all data. Press Ctrl+C to cancel."
	@sleep 3
	podman compose down -v
	podman compose --env-file .env.development up -d

# -----------------------------------------------------------------------------
# Redis Commands
# -----------------------------------------------------------------------------
redis-shell:
	podman exec -it lifeagent-redis redis-cli -a lifeagent_redis_dev

redis-flush:
	@echo "WARNING: This will flush all Redis data."
	podman exec -it lifeagent-redis redis-cli -a lifeagent_redis_dev FLUSHALL

# -----------------------------------------------------------------------------
# Development Commands
# -----------------------------------------------------------------------------
api:
	cd packages/api && uvicorn src.main:app --reload --host 0.0.0.0 --port 8000

test:
	pytest packages/ -v --cov=packages --cov-report=term-missing

lint:
	ruff check .
	ruff format --check .

lint-fix:
	ruff check --fix .
	ruff format .

typecheck:
	pyright packages/

# -----------------------------------------------------------------------------
# Cleanup (DESTRUCTIVE)
# -----------------------------------------------------------------------------
clean:
	@echo "WARNING: This removes ALL containers and volumes."
	@echo "All database data will be lost. Press Ctrl+C to cancel."
	@sleep 5
	podman compose down -v
	podman system prune -f
```

```text
Important: Makefiles require TABS not spaces.
When you paste this into VS Code, verify the
indentation under each target uses actual Tab characters.
If you see spaces, the Makefile will not work.

In VS Code you can check:
View → Render Whitespace
Tabs appear as arrows →
Spaces appear as dots ·
```

### Step 12 — Start the Services

Now start everything:

```bash
cd ~/projects/lifeagent

make up
```

Watch the output carefully. You should see containers being pulled and started. First run takes longer because images are downloading.

---

## BLOCK 3 — Verification

### Step 13 — Verify All Services Are Running

```text
make ps
```

```text
Expected output:
━━━━━━━━━━━━━━━
NAME                    IMAGE                           STATUS
lifeagent-postgres      timescale/timescaledb-ha:...   Up (healthy)
lifeagent-redis         redis:7-alpine                 Up (healthy)
lifeagent-pgadmin       dpage/pgadmin4:latest          Up

All three must show "Up" status.
postgres and redis must show "(healthy)" specifically.
If any show "starting" wait 30 seconds and run make ps again.
If any show "unhealthy" or "exited" run make logs-postgres
to see what went wrong.
```

### Step 14 — Verify PostgreSQL and Extensions

```text
make db-shell
```

You are now inside the PostgreSQL shell. Run:

```sql
-- Check extensions loaded correctly
SELECT extname, extversion
FROM pg_extension
ORDER BY extname;
```

```text
Expected output includes:
━━━━━━━━━━━━━━━━━━━━━━━━
  extname    | extversion
─────────────────────────
 citext      | 1.6
 timescaledb | 2.x.x
 uuid-ossp   | 1.1
 vector      | 0.x.x

If vector and timescaledb appear, your database
is correctly configured for AI embeddings
and time-series health data.

Exit the shell:
\q
```

### Step 15 — Verify Redis

```text
make redis-shell
```

Inside the Redis shell:

```text
PING
```

```text
Expected output: PONG

SET test_key "lifeagent works"
GET test_key

Expected output: "lifeagent works"

DEL test_key
EXIT
```

### Step 16 — Verify pgAdmin

Open your browser:

```text
http://localhost:5050
```

```text
Login with:
Email:    admin@lifeagent.dev
Password: pgadmin_dev

Once logged in:
→ Right-click "Servers" in left panel
→ Click "Register" → "Server"
→ General tab:
    Name: LifeAgent Dev
→ Connection tab:
    Host: lifeagent-postgres
         (use container name, not localhost,
          because pgAdmin is inside the container network)
    Port: 5432
    Database: lifeagent_dev
    Username: lifeagent
    Password: lifeagent_postgres_dev
→ Click Save

You should see the database appear in the left panel.
Expand it to verify tables (empty for now) and extensions.
```

### Step 17 — Verify Python Connects to Services

Back in your terminal with lifeagent_dev activated:

```python
python -c "
import asyncio
import asyncpg
import redis

async def test_postgres():
    conn = await asyncpg.connect(
        'postgresql://lifeagent:lifeagent_postgres_dev@localhost:5432/lifeagent_dev'
    )
    result = await conn.fetchval('SELECT version()')
    await conn.close()
    return result

async def main():
    # Test PostgreSQL
    pg_version = await test_postgres()
    print(f'PostgreSQL: Connected')
    print(f'Version: {pg_version[:50]}')
    
    # Test Redis
    r = redis.Redis(
        host='localhost',
        port=6379,
        password='lifeagent_redis_dev',
        decode_responses=True
    )
    pong = r.ping()
    print(f'Redis: {\"Connected\" if pong else \"Failed\"}')
    
    print()
    print('All infrastructure services verified.')

asyncio.run(main())
"
```

```text
Expected output:
━━━━━━━━━━━━━━━
PostgreSQL: Connected
Version: PostgreSQL 16.x on x86_64-pc-linux-gnu...
Redis: Connected

All infrastructure services verified.
```

---

## BLOCK 4 — Commit and Document

### Step 18 — Update Hardware Validation Log

```text
code HARDWARE_VALIDATION.md
```

Update the Infrastructure Services section:

```markdown
## Infrastructure Services

### PostgreSQL 16 + TimescaleDB + pgvector
- **Status:** ✅ Validated
- **Image:** timescale/timescaledb-ha:pg16-latest
- **Extensions confirmed:** vector, timescaledb, uuid-ossp, citext
- **Python connection:** asyncpg confirmed working
- **Date Validated:** [today's date]

### Redis 7
- **Status:** ✅ Validated
- **Image:** redis:7-alpine
- **Python connection:** redis-py confirmed working
- **Date Validated:** [today's date]

### pgAdmin 4
- **Status:** ✅ Validated
- **Access:** http://localhost:5050
- **Date Validated:** [today's date]
```

### Step 19 — Final Commit

```bash
git add docker-compose.yml
git add Makefile
git add .env.example
git add infra/
git add HARDWARE_VALIDATION.md
git add environment.yml
git add docs/requirements-reference.txt

# Verify .env.development is NOT in the list
git status

# You should NOT see .env.development listed
# If you do, stop and fix the .gitignore before committing

git commit -m "feat: add infrastructure stack and development environment

- Add docker-compose.yml with PostgreSQL 16, Redis 7, pgAdmin 4
- PostgreSQL configured with pgvector, TimescaleDB, uuid-ossp
- Redis configured with persistence and password protection
- Add Makefile with developer commands (make up, make down, etc.)
- Add .env.example as safe template for environment variables
- Add lifeagent_dev micromamba environment definition
- Add infra/docker configuration files
- Validate all services: PostgreSQL, Redis, Python connections confirmed"

git push origin main
```

---

## End of Day 2 — What You Have Built

```bash
Completed Today:
━━━━━━━━━━━━━━━

Environment:
✓ lifeagent_dev micromamba environment
✓ PyTorch ROCm verified in new environment
✓ All project dependencies installed
✓ environment.yml committed (teammate replicates with one command)

Infrastructure:
✓ PostgreSQL 16 running with pgvector + TimescaleDB
✓ Redis 7 running with persistence
✓ pgAdmin running with database connection
✓ All three verified healthy via healthchecks

Developer Experience:
✓ Makefile with intuitive commands
✓ .env.example so teammate knows what variables to set
✓ .env.development properly gitignored (no secrets leaked)
✓ Python verified connecting to both database and cache

What your teammate can now do:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
git clone git@github.com:lifeagent-ai/lifeagent.git
cd lifeagent
cp .env.example .env.development
# Edit .env.development with matching passwords
micromamba env create -f environment.yml
micromamba activate lifeagent_dev
make up
→ Identical environment running on his machine
```

---

## Your Teammate's Day 2 Tasks (Send Him This)

```bash
After Linux is installed and NVIDIA verified:

1. Install micromamba:
   curl -L micro.mamba.pm/install.sh | bash

2. Clone the repository:
   git clone git@github.com:lifeagent-ai/lifeagent.git
   cd lifeagent

3. Create environment from file:
   micromamba env create -f environment.yml
   micromamba activate lifeagent_dev

4. Verify PyTorch sees RTX 4070:
   python -c "import torch; print(torch.cuda.is_available())"
   → Should print: True

5. Copy environment file:
   cp .env.example .env.development
   → Edit the passwords to match what you tell him

6. Install podman (Ubuntu):
   sudo apt install podman podman-compose

7. Start services:
   make up

8. Run verification:
   make ps
   → All three containers should show Up (healthy)
```

When Day 2 is confirmed complete on your end, we move to Day 3 — Tailscale networking between your machines and the CI/CD pipeline setup.