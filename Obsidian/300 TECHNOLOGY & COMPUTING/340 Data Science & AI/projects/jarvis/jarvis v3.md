## The Revised Complete Setup Plan

Now that I know everything, here is your precise action plan:

### This Week — Exact Sequence

```python
DAY 1 — YOU (30-60 minutes):
━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Create GitHub Organization: "lifeagent-io" or "lifeagent-ai"
□ Create private repository: "lifeagent"
□ Set branch protection on main (settings described earlier)
□ Create the folder structure (empty folders with .gitkeep files)
□ Create initial files:
   ├── README.md (project description)
   ├── .gitignore (Python + Node + environment files)
   └── HARDWARE_VALIDATION.md (document your ROCm success)
□ Push first commit to main
□ Invite your friend as collaborator

DAY 1 — YOUR FRIEND (Parallel, 2-4 hours):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Back up important Windows files
□ Download Ubuntu 24.04 LTS ISO
□ Create bootable USB (using Rufus or Balena Etcher on Windows)
□ Install Ubuntu alongside Windows (dual boot)
□ Boot into Ubuntu
□ Run: sudo ubuntu-drivers autoinstall (NVIDIA drivers)
□ Reboot and verify: nvidia-smi shows RTX 4070
□ Install micromamba
□ Install VS Code
□ Clone the lifeagent repository
□ Claim GitHub Education benefits

DAY 2 — YOU:
━━━━━━━━━━━━
□ Create lifeagent_dev micromamba environment
□ Create environment.yml file documenting it
□ Push environment.yml to repository
□ Set up Docker Compose with PostgreSQL + TimescaleDB + Redis
□ Verify all services start correctly
□ Document the setup process in docs/setup.md

DAY 2 — YOUR FRIEND:
━━━━━━━━━━━━━━━━━━━━
□ Install EnvyControl for GPU switching
□ Verify CUDA works: python -c "import torch; print(torch.cuda.is_available())"
□ Install micromamba
□ Run your environment.yml to recreate lifeagent_dev
□ Start Docker Compose stack
□ Verify PostgreSQL and Redis are running

DAY 3 — TOGETHER:
━━━━━━━━━━━━━━━━
□ Install Tailscale on both machines
□ Verify SSH connection works
□ Both practice the Git workflow together:
   → He creates a branch
   → Makes a small change (add his name to README contributors)
   → Creates Pull Request
   → You review and approve
   → He merges
   → You pull the change
   → Celebrate — the workflow is alive
□ Set up pre-commit hooks on both machines
□ Create first GitHub Actions CI workflow

DAY 4-5 — RESEARCH SPRINT:
━━━━━━━━━━━━━━━━━━━━━━━━━━
□ You prototype: LangGraph with two simple agents
□ Friend prototypes: CrewAI with two simple agents
□ Both test on your own machines
□ End of day 5: Compare results, pick one framework
□ Document the decision in docs/decisions/ADR-001-agent-framework.md

WEEKEND:
━━━━━━━━
□ Your friend makes final Linux decision (full switch or keep dual boot)
□ Both review the project architecture document together
□ Agree on Sprint 1 scope in writing (GitHub Projects or Linear)
□ Sprint 1 begins Monday
```

---

## The One File That Ties Everything Together

The most important file you create this week is `environment.yml`. This single file means your friend can recreate your exact Python environment with one command. It also means in 6 months when you hire someone or get a new machine, setup takes minutes not days.


```bash
Concept of what this file contains:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

name: lifeagent_dev
channels:
  - conda-forge
  - pytorch (for ROCm wheels)
  - pypi

dependencies:
  - python=3.12
  - All conda packages (system libraries)
  - pip packages (everything else)

One command to create the environment:
  micromamba env create -f environment.yml

One command to update it when someone adds a package:
  micromamba env update -f environment.yml

This file lives in the repository root.
It is version controlled.
Every package addition goes through a Pull Request.
No more "what version did you install?"
```

---

## Summary of Decisions Made


```text
✓ Your machine = central host (already decided)
✓ YOU create the GitHub Organization and repository
✓ Project name = lifeagent
✓ micromamba = environment manager for both
✓ New environment (lifeagent_dev) for the project
✓ Your friend switches to Linux (Ubuntu 24.04 LTS dual boot first)
✓ Your friend claims GitHub Education benefits immediately
✓ ai_env stays as your personal ML playground
✓ math_env stays for personal mathematics work
✓ Docker Compose for all infrastructure services
✓ Tailscale for secure machine networking

Still to decide (Day 4-5):
□ Agent framework: LangGraph vs CrewAI
□ Division of labor between you and your friend
□ Sprint 1 exact scope
```

The foundation is clearer now than it has ever been. Your hardware is validated, your environments are understood, and the path forward is specific and sequenced.