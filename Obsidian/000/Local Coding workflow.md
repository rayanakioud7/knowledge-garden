# 🚀 Local AI Coding Workflow: The Ultimate Cheat Sheet

**Hardware Profile:** Ryzen 7 7700 | 32GB DDR5 | RX 7900XT (20GB VRAM)
**Core Brain:** `qwen3.5-35b-a3b` (MoE Architecture)

---

## 🧠 Step 1: Ignite the Brain (Always do this first)
No matter what project or environment is being used, the GPU must be spun up first.
1. Open **LM Studio**.
2. Load **Qwen 3.5 35B A3B** (Q4_K_M).
3. Ensure **Context Length** is set to `32768`.
4. Ensure **GPU Offload** is set to `Max`.
5. Go to the Local Server tab and click **Start Server** (Port `1234`).

---

## 🛤️ Step 2: Choose the Workflow

### Path A: The Daily Driver (VS Code + Cline)
*Best for: Rapid full-stack development, reading the workspace, and zero-latency file editing.*

1. Open **VS Code** (Windows or WSL).
2. Open the **Cline** extension.
3. Start prompting.
> **Note:** Cline talks directly to LM Studio on port `1234` and uses a highly optimized "Compact Prompt." The proxy is **not** needed for this workflow.

### Path B: The Terminal Boss (Claude Code CLI + Proxy)
*Best for: Autonomous terminal commands, running scripts, and utilizing the NVIDIA NIM cloud fallback for hyper-complex architecture planning.*

1. Open a standard Windows **PowerShell**.
2. Run `free-claude-code` and **minimize the window** (Keep it running!).
3. Open VS Code or a standalone terminal (Windows or WSL) and type `claude`.
> **Note:** The proxy listens on port `8082` and tricks the official Anthropic CLI into using the local Qwen model.

---

## 📁 Where to Code? (Project Routing)

* **Web Development (Java Spring Boot, React):** Run natively on **Windows**. Just open the folder in VS Code.
* **Data Science (Python, Jupyter, ML Pipelines):** Run in **WSL (Ubuntu)**. Open the WSL folder in VS Code via the Remote-WSL extension.
> *Because the network is mirrored via `.wslconfig` and global variables are set, the AI will perfectly connect in both environments.*

---

## ⚠️ Troubleshooting Guide

* **Error:** `Unable to connect to API (ECONNREFUSED)` inside the Claude Code terminal.
    * **Fix:** The Windows proxy is closed. Open PowerShell, run `free-claude-code`, and leave it open in the background.
* **Error:** `Anthropic streaming error... n_keep >= n_ctx` inside LM Studio.
    * **Fix:** The context window is too small for the massive agentic system prompt. Eject the model, increase Context Length to `32768`, and reload.