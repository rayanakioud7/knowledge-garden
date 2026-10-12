- an ai agent that can track your whole life
- each sub agent is finetuned to a specific task
- for example one sub agent can be your health advisor tracking your blood pressure your diet your muscle mass you gym improvement using IOt as a data gatherer
- it should be fully on voice chat no typing needed no messages interactions unless for the dashboard
- we will start small the first small infrastructure will be about health and gym suggesting meals based on food on your fridge, gym program for each muscle and how to train and improve each one, what to follow and what to prevent.
- the project will be shared between me and my colleague so everything should be shared live mode the same code in both computers and if someone made a change it shouldn't affect the real project but just fork or a temporary version until it is confirmed to be working and pushing it to the main repository everything should be transparent and worked as a team
- after this small infrastructure and this sub agent is completely finished we will move to the next one, until we will be having multiple sub agents with the same idea where each one is an expert of some field 
---
---



# Project Advisory: "LifeAgent" — Full Lifecycle AI Agent Platform

---

## PHASE 0: THE BIG PICTURE — What You're Actually Building

Let me reframe what you're describing, because it's bigger than you think:

You're building a **modular, voice-first personal AI operating system** where each "sub-agent" is a domain expert, and an **orchestrator agent** routes conversations and data between them. This is essentially a **multi-agent system with shared memory, voice interface, and IoT integration**.

This is a legitimate product category. Think of it as a self-hosted, privacy-first alternative to what Apple, Google, and Samsung are all trying to build — but you own the data, you own the models, and you control the agents.

The startup moat is: **privacy + modularity + fine-tuned domain expertise + self-hosted option**.

---

## PHASE 1: ARCHITECTURE — The System Design

Here's how I'd architect this from day one so it scales cleanly:

```
┌─────────────────────────────────────────────────────────────┐
│                      VOICE INTERFACE                         │
│              (Wake word → STT → Agent → TTS)                 │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    ORCHESTRATOR AGENT                         │
│         (Routes intent to correct sub-agent)                 │
│         (Manages context, memory, user profile)              │
└────┬──────────┬──────────┬──────────┬───────────────────────┘
     │          │          │          │
     ▼          ▼          ▼          ▼
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│ Health │ │  Gym   │ │ Nutri- │ │ Future │
│ Agent  │ │ Agent  │ │ tion   │ │ Agent  │
│        │ │        │ │ Agent  │ │  ...   │
└───┬────┘ └───┬────┘ └───┬────┘ └────────┘
    │          │          │
    ▼          ▼          ▼
┌─────────────────────────────────────────────────────────────┐
│                    SHARED MEMORY LAYER                        │
│            (User profile, health data, history,              │
│             preferences, IoT readings)                       │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    IoT DATA INGESTION                         │
│        (Blood pressure monitor, smart scale,                 │
│         fitness tracker, smart fridge camera)                 │
└─────────────────────────────────────────────────────────────┘
```

### Critical Architecture Decisions to Make NOW

**1. Agent Communication Pattern**
- Use an **event-driven architecture** with a message broker
- Each sub-agent is an independent service that subscribes to relevant events
- The orchestrator doesn't call agents directly — it publishes intents, agents respond

**2. Memory Architecture (this is where most projects fail)**
- **Short-term memory**: Current conversation context
- **Long-term memory**: User profile, historical data, preferences
- **Episodic memory**: Past interactions and what worked/didn't
- **Shared memory**: Data that all agents can access (user's weight, blood pressure history, etc.)
- **Private memory**: Data only one agent cares about (gym PR history stays with gym agent)

**3. The Orchestrator is the hardest part**
- It needs to understand intent, route to the right agent, and sometimes coordinate BETWEEN agents (e.g., nutrition agent and gym agent need to talk to each other about protein intake vs. training load)

---

## PHASE 2: TECHNOLOGY STACK — Tool Selection

I'm selecting every tool based on three criteria: **(1) runs on your hardware, (2) open source or self-hostable, (3) production-scalable later**

### 2.1 — Core Language & Framework

| Layer | Tool | Why |
|-------|------|-----|
| **Primary Language** | **Python 3.12+** | ML ecosystem, agent frameworks, fastest iteration |
| **Performance-critical services** | **Rust** (later) | For IoT ingestion, voice pipeline hot paths when you scale |
| **API Framework** | **FastAPI** | Async, fast, auto-docs, websocket support for live voice |
| **Task Queue** | **Celery + Redis** | Background processing (meal planning, workout generation) |

### 2.2 — AI/LLM Layer

| Component | Tool | Why |
|-----------|------|-----|
| **Base LLM (local)** | **Ollama** serving **Llama 3.1 8B or Mistral 7B** | Fits in your 20GB VRAM with room for other models |
| **Fine-tuning framework** | **Unsloth** | 2x faster fine-tuning, works on AMD GPUs via ROCm, QLoRA support |
| **Agent framework** | **LangGraph** | Stateful multi-agent workflows, better than raw LangChain for agent orchestration |
| **Alternative to evaluate** | **CrewAI** or **AutoGen** | Test both against LangGraph for your multi-agent routing pattern |
| **Embeddings model (local)** | **nomic-embed-text** or **BGE-large** via Ollama | For RAG over health documents, food databases |
| **GPU Compute Stack** | **ROCm 6.x** | AMD GPU support — this is critical, verify ROCm compatibility with every ML tool |
| **Model format** | **GGUF (via llama.cpp)** | Best quantized inference on your hardware |

> **⚠️ CRITICAL AMD WARNING**: Your RX 7900XT uses RDNA3. ROCm support for RDNA3 has improved significantly but is not as seamless as NVIDIA CUDA. You MUST validate:
> - ROCm 6.1+ is installed and working on Fedora 44
> - Ollama with ROCm backend works
> - Unsloth with ROCm works (may need their ROCm branch)
> - PyTorch 2.4+ with ROCm
>
> If ROCm gives you trouble, your fallback is **llama.cpp with Vulkan backend** which has excellent RDNA3 support.

### 2.3 — Voice Pipeline

This is the most technically demanding part. Here's the full pipeline:

```
User speaks → Wake Word Detection → Speech-to-Text → Agent processes → Text-to-Speech → User hears response
```

| Component | Tool | Why |
|-----------|------|-----|
| **Wake word detection** | **OpenWakeWord** or **Porcupine (free tier)** | Always-on, low CPU, custom wake word |
| **Speech-to-Text (STT)** | **Faster-Whisper** (CTranslate2 backend) | Runs locally, near real-time on your GPU, best accuracy |
| **Text-to-Speech (TTS)** | **Piper TTS** or **Coqui XTTS v2** | Piper for speed, XTTS for natural voice cloning |
| **Voice Activity Detection** | **Silero VAD** | Knows when user stopped talking |
| **Voice conversation manager** | Custom with **WebSockets** | Full-duplex audio streaming |

> **The voice UX is make-or-break.** Latency budget for a natural conversation:
> - Wake word: <100ms
> - STT: <500ms
> - Agent thinking: <1s
> - TTS first byte: <300ms
> - **Total target: under 2 seconds end-to-end**
>
> Your hardware can hit this. But you need to pipeline it — start TTS while the agent is still generating tokens (streaming).

### 2.4 — Data Layer

| Component | Tool | Why |
|-----------|------|-----|
| **Primary Database** | **PostgreSQL 16** | Structured health data, user profiles, relational data |
| **Vector Database** | **pgvector** (extension for PostgreSQL) | Keep it simple — vectors in the same DB, no extra service |
| **Time-series data** | **TimescaleDB** (PostgreSQL extension) | Blood pressure over time, weight trends, gym progress |
| **Cache + Message Broker** | **Redis 7** | Session state, pub/sub for agent communication, caching |
| **Object Storage** | **MinIO** | Self-hosted S3-compatible, for meal images, voice recordings |

> Why PostgreSQL with extensions instead of separate databases? **Operational simplicity.** You're two people. Every extra service is a maintenance burden. pgvector + TimescaleDB in one PostgreSQL instance covers 90% of your needs.

### 2.5 — IoT Integration

| Component | Tool | Why |
|-----------|------|-----|
| **IoT Protocol** | **MQTT** | Industry standard for IoT devices, lightweight |
| **MQTT Broker** | **Mosquitto** | Rock solid, tiny footprint |
| **IoT Device Framework** | **ESPHome** or **Home Assistant** as bridge | If using ESP32-based sensors |
| **Data ingestion** | **Custom MQTT subscriber → PostgreSQL** | Simple Python service |

Supported IoT devices to start with:
- **Blood pressure**: Omron devices with Bluetooth → phone app → API/MQTT bridge
- **Smart scale**: Xiaomi Mi Scale / Withings → same pattern
- **Fitness tracker**: Garmin/Fitbit API integration (they have developer APIs)
- **Fridge inventory**: Start with **manual entry via voice** ("I just bought chicken, eggs, and rice"), graduate to camera-based detection later

> **Important**: Don't build custom IoT hardware in v1. Use consumer devices and bridge their data. Hardware is a different startup.

### 2.6 — Dashboard & Frontend

| Component | Tool | Why |
|-----------|------|-----|
| **Dashboard framework** | **Next.js 14+ (App Router)** | React ecosystem, SSR, great for data dashboards |
| **UI Component Library** | **shadcn/ui** | Beautiful, customizable, not a dependency |
| **Charts & Visualization** | **Recharts** or **Tremor** | Health data visualization |
| **Real-time updates** | **WebSockets** or **Server-Sent Events** | Live IoT data on dashboard |
| **Mobile (later)** | **React Native** or **PWA** | PWA first to avoid app store complexity |

---

## PHASE 3: DEVELOPMENT WORKFLOW — Team Collaboration

This is where most two-person startups fail. Here's a professional setup:

### 3.1 — Version Control & Collaboration

| Need | Tool | Setup |
|------|------|-------|
| **Repository** | **GitHub** or **GitLab** (self-hosted option) | Private repo, free tier is sufficient |
| **Branching strategy** | **GitHub Flow** (simplified) | `main` is always deployable. Work on feature branches. PR to merge. |
| **Code review** | **Pull Requests with required review** | Neither of you merges your own PR without the other approving |
| **Live collaboration** | **VS Code + Live Share** | Real-time pair programming when needed |
| **IDE** | **VS Code** or **Cursor** | Cursor has AI assistance built in which accelerates development |

### 3.2 — Branch & Merge Rules

Here's exactly how your workflow should operate:

```
main (protected — nobody pushes directly)
  │
  ├── feat/health-agent-blood-pressure    (your branch)
  ├── feat/voice-pipeline-stt             (colleague's branch)
  ├── fix/meal-suggestion-bug             (hotfix branch)
  │
  └── dev (integration branch — optional)
        Both feature branches merge here first for testing
        Then dev → main via PR when stable
```

**Rules to enforce from DAY ONE:**
1. `main` branch is **protected** — no direct pushes
2. Every change goes through a **Pull Request**
3. PRs require **at least 1 approval** from the other person
4. **CI must pass** before merge (automated tests, linting)
5. Use **conventional commits**: `feat:`, `fix:`, `docs:`, `refactor:`
6. Each PR should be **small and focused** — one feature, one fix
7. **Never** work on the same file simultaneously without communication

### 3.3 — CI/CD Pipeline

| Component | Tool | Why |
|-----------|------|-----|
| **CI/CD** | **GitHub Actions** | Free for private repos (2000 min/month), integrated |
| **Linting** | **Ruff** (Python) | Blazingly fast, replaces flake8+isort+black |
| **Type checking** | **mypy** or **Pyright** | Catch bugs before runtime |
| **Testing** | **pytest** | Standard, powerful |
| **Pre-commit hooks** | **pre-commit** framework | Catches issues before they reach CI |
| **Container builds** | **Docker** + **Podman** (Fedora native) | Podman is daemonless, rootless, Fedora-native |

### 3.4 — Communication & Project Management

| Need | Tool |
|------|------|
| **Task tracking** | **Linear** (free for small teams) or **GitHub Projects** |
| **Documentation** | **Notion** or **Obsidian** (shared vault via Git) |
| **Communication** | **Discord** (private server) — voice channels for pair programming |
| **Design & Architecture** | **Excalidraw** (collaborative whiteboarding) |
| **API Documentation** | **Auto-generated by FastAPI** (Swagger/OpenAPI) |

---

## PHASE 4: PROJECT STRUCTURE — Monorepo Design

Use a **monorepo** for everything. At your scale, microservices in separate repos is over-engineering.

```
lifeagent/
├── README.md
├── docker-compose.yml              # Local development stack
├── docker-compose.prod.yml         # Production stack
├── Makefile                        # Common commands
├── .github/
│   └── workflows/
│       ├── ci.yml                  # Lint, test, type-check
│       └── deploy.yml              # Build and deploy
│
├── packages/
│   ├── orchestrator/               # Main routing agent
│   │   ├── pyproject.toml
│   │   ├── src/
│   │   └── tests/
│   │
│   ├── agents/
│   │   ├── health/                 # Health sub-agent
│   │   │   ├── pyproject.toml
│   │   │   ├── src/
│   │   │   ├── training/           # Fine-tuning scripts & data
│   │   │   └── tests/
│   │   │
│   │   ├── gym/                    # Gym sub-agent
│   │   │   └── ...
│   │   │
│   │   ├── nutrition/              # Nutrition sub-agent
│   │   │   └── ...
│   │   │
│   │   └── _base/                  # Shared agent interface/base class
│   │       └── ...
│   │
│   ├── voice/                      # Voice pipeline (STT, TTS, VAD)
│   │   ├── pyproject.toml
│   │   ├── src/
│   │   └── tests/
│   │
│   ├── iot/                        # IoT data ingestion
│   │   ├── pyproject.toml
│   │   ├── src/
│   │   └── tests/
│   │
│   ├── memory/                     # Shared memory layer
│   │   ├── pyproject.toml
│   │   ├── src/
│   │   └── tests/
│   │
│   └── api/                        # FastAPI backend
│       ├── pyproject.toml
│       ├── src/
│       └── tests/
│
├── frontend/                       # Next.js dashboard
│   ├── package.json
│   ├── src/
│   └── ...
│
├── infra/                          # Infrastructure configs
│   ├── docker/
│   ├── nginx/
│   └── scripts/
│
├── data/                           # Training data, datasets
│   ├── health/
│   ├── nutrition/
│   └── gym/
│
├── models/                         # Fine-tuned model configs
│   ├── health-advisor-v1/
│   └── ...
│
└── docs/                           # Project documentation
    ├── architecture.md
    ├── agent-spec.md
    └── api-spec.md
```

**Package manager**: Use **uv** (from Astral, makers of Ruff) — it's the fastest Python package manager and handles workspaces/monorepos well.

---

## PHASE 5: FINE-TUNING STRATEGY

This is where your hardware shines. 20GB VRAM on the 7900XT is substantial.

### What to Fine-tune vs. What to Prompt

| Approach | When to Use |
|----------|-------------|
| **Prompt engineering + RAG** | General knowledge, answering questions about exercises, food info |
| **Fine-tuning (LoRA/QLoRA)** | Consistent persona, specific output formats, domain-specific reasoning |
| **Full fine-tune** | Almost never at your scale — too expensive, too much data needed |

### Fine-tuning Stack

| Component | Tool |
|-----------|------|
| **Framework** | **Unsloth** (verify ROCm support) or **Axolotl** |
| **Technique** | **QLoRA** (4-bit quantization + LoRA adapters) |
| **Base model** | **Llama 3.1 8B Instruct** or **Mistral 7B Instruct v0.3** |
| **Dataset format** | **ChatML** or **ShareGPT** format |
| **Dataset creation** | Manually curated conversations + synthetic data from larger models |

### Per-Agent Fine-tuning Plan

**Health Agent:**
- Train on: Medical Q&A datasets (filtered for safety), blood pressure interpretation guidelines, health metric analysis
- Personality: Cautious, always recommends consulting a doctor for serious concerns
- **CRITICAL: Add safety guardrails — this agent must NEVER replace medical advice**

**Gym Agent:**
- Train on: Exercise science literature, progressive overload principles, form cues, program design
- Personality: Motivating coach, adapts to user's level
- Data sources: ExRx.net exercise database, NSCA guidelines, curated fitness content

**Nutrition Agent:**
- Train on: USDA food database, meal planning patterns, macro/micro nutrient calculations
- Personality: Practical, works with what's available in the fridge
- Special capability: Takes a list of ingredients → generates meals that hit macro targets

### How to Build Training Datasets

1. **Start with synthetic data**: Use a larger model (Claude/GPT-4) to generate example conversations that represent ideal agent behavior
2. **Human refinement**: You and your colleague review and correct every example
3. **Target**: 500-2000 high-quality examples per agent for QLoRA fine-tuning
4. **Iterate**: Deploy, collect real conversations (with user consent), use them to improve

---

## PHASE 6: MVP SCOPE — What to Build First

### Sprint 1 (Weeks 1-2): Foundation
- [ ] Repository setup with full CI/CD pipeline
- [ ] Docker Compose for local development (PostgreSQL, Redis, Ollama)
- [x] ROCm validation — get Ollama running on your 7900XT
- [ ] Basic FastAPI skeleton with health check endpoints
- [ ] Database schema for user profiles and health data

### Sprint 2 (Weeks 3-4): Voice Pipeline
- [ ] Faster-Whisper STT running locally on GPU
- [ ] Piper TTS running locally
- [ ] Silero VAD for speech endpoint detection
- [ ] WebSocket-based voice streaming prototype
- [ ] End-to-end: speak → transcribe → echo back via TTS

### Sprint 3 (Weeks 5-6): First Agent — Nutrition
- [ ] Ollama serving Llama 3.1 8B
- [ ] LangGraph orchestrator with single agent routing
- [ ] Nutrition agent with RAG over USDA food database
- [ ] Voice conversation: "What can I make with chicken and rice?" → meal suggestion
- [ ] Manual fridge inventory management via voice

### Sprint 4 (Weeks 7-8): Gym Agent
- [ ] Exercise database integration (seed PostgreSQL)
- [ ] Gym agent: generate workout programs based on goals
- [ ] Track workout history (via voice: "I did 3 sets of 10 bench press at 80kg")
- [ ] Progressive overload suggestions

### Sprint 5 (Weeks 9-10): Health Agent + IoT
- [ ] Blood pressure manual logging via voice
- [ ] Trend analysis and visualization on dashboard
- [ ] Basic health metrics dashboard (Next.js)
- [ ] MQTT setup for future IoT device integration

### Sprint 6 (Weeks 11-12): Integration & Polish
- [ ] Multi-agent routing (orchestrator handles all three agents)
- [ ] Cross-agent intelligence (nutrition agent knows about gym schedule)
- [ ] Conversation memory (agent remembers past interactions)
- [ ] Fine-tune first model with collected data
- [ ] User onboarding flow

---

## PHASE 7: THINGS YOU FORGOT OR UNDERESTIMATED

### 1. **Data Privacy & Security** — NON-NEGOTIABLE
- All health data is **PII and PHI** (Protected Health Information)
- Even for an MVP, encrypt data at rest and in transit
- If you ever handle real users: HIPAA (US), GDPR (EU) compliance
- This is actually a **selling point** — "your health data never leaves your device"

### 2. **Safety Guardrails for Health Agent**
- The health agent MUST have hard-coded disclaimers
- Never diagnose conditions
- Never suggest stopping medication
- Always recommend professional consultation for abnormal readings
- This isn't just ethics — it's **legal liability**

### 3. **Offline-First Architecture**
- Your competitive advantage over cloud AI: **works without internet**
- Design every component to work fully offline
- Sync to cloud only when user explicitly chooses to

### 4. **User Data Portability**
- Let users export ALL their data at any time (JSON/CSV)
- This builds trust and is required by GDPR anyway

### 5. **Testing with Real Conversations**
- Set up a **conversation logging pipeline** (with consent toggle)
- Every real voice interaction is a potential training example
- Build a review tool to annotate conversations as good/bad

### 6. **Latency Monitoring**
- Instrument EVERY stage of the voice pipeline
- If total latency exceeds 2 seconds, users will hate it
- Build a dashboard just for latency tracking

### 7. **Model Versioning**
- Use **MLflow** or **Weights & Biases** (free tier) to track experiments
- Every fine-tuned model needs: version, training data hash, eval metrics
- You need to be able to rollback to a previous model instantly

### 8. **Business Model Thinking** (Start now, not later)
- **Self-hosted (privacy users)**: One-time purchase or yearly license
- **Cloud-hosted (convenience users)**: Monthly subscription
- **IoT device partnerships**: Revenue share or certified device program
- **API marketplace**: Let third parties build agents for your platform

### 9. **Competitive Analysis**
Research these before you build:
- **Apple Health + Siri** (your main mainstream competitor)
- **Samsung Health + Bixby**
- **Open-source**: Home Assistant (smart home, not health-focused)
- **Startups**: Whoop, Oura, MyFitnessPal (vertical, not agent-based)
- Your differentiation: **multi-agent, voice-first, privacy-first, self-hosted, modular**

---

## PHASE 8: SCALING ROADMAP — Future Agents

Once Health/Gym/Nutrition is solid, here's the natural expansion:

| Agent | Description | Data Sources |
|-------|-------------|--------------|
| **Finance Agent** | Budget tracking, expense categorization, savings goals | Bank API integration, voice expense logging |
| **Productivity Agent** | Task management, calendar, focus tracking | Calendar APIs, Pomodoro integration |
| **Sleep Agent** | Sleep quality analysis, bedtime routines | Wearable data, phone usage patterns |
| **Mental Health Agent** | Mood tracking, journaling prompts, breathing exercises | Voice journaling, mood check-ins |
| **Learning Agent** | Study plans, spaced repetition, skill tracking | Custom curricula, progress tracking |
| **Home Agent** | Smart home control, energy optimization | Home Assistant integration, IoT devices |

Each agent follows the **same architecture pattern**: fine-tuned model + domain-specific RAG + shared memory access + voice interface.

---

## PHASE 9: RISK ASSESSMENT

| Risk | Severity | Mitigation |
|------|----------|------------|
| **ROCm compatibility issues** | HIGH | Validate in week 1. Fallback: llama.cpp with Vulkan |
| **Voice latency too high** | HIGH | Pipeline streaming, optimize at each stage, measure constantly |
| **Fine-tuned models hallucinate health info** | CRITICAL | RAG with verified sources, safety guardrails, disclaimer layer |
| **Scope creep** | HIGH | Strict MVP scope, don't start agent #2 until agent #1 is solid |
| **Team disagreements on architecture** | MEDIUM | Document all decisions in ADRs (Architecture Decision Records) |
| **User adoption** | HIGH | Build for yourselves first — be your own power users |
| **Data loss** | HIGH | Automated PostgreSQL backups from day 1 |

---

## IMMEDIATE NEXT STEPS (This Week)

1. **DAY 1-2**: Validate ROCm + Ollama + Faster-Whisper on your Fedora 44 machine. This is the single biggest technical risk. If this doesn't work, everything else is blocked.

2. **DAY 2-3**: Set up the GitHub repo with branch protection, CI pipeline (Ruff + pytest + mypy), and Docker Compose skeleton.

3. **DAY 3-4**: Both of you independently research and test: LangGraph vs CrewAI vs AutoGen. Build a trivial two-agent routing example with each. Compare and pick one.

4. **DAY 5-7**: Write the Architecture Decision Records (ADRs) for: database choice, agent framework, voice pipeline components, LLM choice. These are your project's constitution.

5. **ONGOING**: Start collecting training data for the nutrition agent. Every time you think "what should I cook with what's in my fridge?" — write down the ideal conversation.

---

This is a genuinely compelling startup idea with a clear technical path. The key is **disciplined scoping** — the graveyard of AI startups is full of teams that tried to build everything at once. Nail the health vertical. Make it so good that YOU use it every day. Then expand.

What aspect do you want to dive deeper into first?