# ASL Sign Language Recognition System

> **Real-time American Sign Language recognition from webcam to English text.**
> Final Year Engineering Project (PFE) — FSTM, 2025–2026

[![Python](https://img.shields.io/badge/Python-3.10%2F3.12-blue)](https://www.python.org/)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.4%2B-orange)](https://pytorch.org/)
[![PySide6](https://img.shields.io/badge/UI-PySide6-green)](https://doc.qt.io/qtforpython/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)

---

## What This Project Does

This system converts isolated ASL signs performed in front of a webcam into natural English sentences in real time. A deaf person signs, the system recognises the sign, accumulates a phrase, and translates it into English. A hearing person can type a response. Both messages appear in a conversation panel.

**No cloud. No internet. No external API. Everything runs locally on consumer hardware.**

---

## Results

| Evaluation | Top-1 | Top-5 |
|------------|-------|-------|
| PopSign test (6 unseen signers, 250 signs) | **86.89%** | **96.06%** |
| ISLR test (3 unseen signers, 67-sign subset) | **73.52%** | — |
| Personal test (target user) | **100.00%** | **100.00%** |
| Deployment vocabulary (237 signs, mean) | **87.2%** | — |

All evaluations are **signer-independent** — test signers were never seen during training.

---

## Architecture

```
Webcam (30 FPS)
    → MediaPipe Holistic (115 landmarks)
    → Shoulder-relative normalisation
    → Position + Velocity features  (64, 690)
    → 1D-CNN + Transformer Encoder  (~21M params)
    → Two-tier confidence state machine
    → Gloss accumulation (3s boundary)
    → Dictionary translation
    → Conversation panel (PySide6)
```

The model is a scaled Transformer:
- `d_model = 512`, 6 layers, 8 attention heads
- Input: 690 features per frame (345 position + 345 velocity)
- Output: 250 ASL sign classes
- Deployment: 237-sign vocabulary after error-analysis pruning

---

## Training Pipeline

13 experiments across 4 datasets and ~120 unique signers:

| Experiment | Key Change | ISLR Top-1 |
|------------|------------|------------|
| v1 — Baseline | First model | 48.68% val |
| v4 — Bug fixes | 4 implementation fixes | 46.14% |
| v5 — Velocity | Position + velocity input | 47.47% |
| 6a — Subset filter | 67-sign vocabulary | 68.66% |
| 7 — ASL Citizen | +52 signers | 69.55% |
| 8 — Personal data | Target user adaptation | 70.22% |
| 9 — PopSign (67) | +47 signers, 49K samples | 72.16% |
| 10 — Scaled model | ~21M params | 73.14% |
| **11 — Full 250** | All sources, 250 signs | **73.52%** |

**Key scientific finding:** Signer diversity is the dominant accuracy ceiling — not model capacity or sequence length.

---

## Datasets Used

| Dataset | Signers | Samples | Format |
|---------|---------|---------|--------|
| [Google ISLR](https://www.kaggle.com/competitions/asl-signs) | 21 | 94,477 | Parquet (pre-extracted landmarks) |
| [ASL Citizen](https://huggingface.co/datasets/SorensenAI/asl-citizen-poses) | 52 | 2,335 | Binary `.pose` |
| Personal recordings | 1 | 1,006 | Raw MediaPipe tensors |
| [PopSign v1.0](https://signdata.cc.gatech.edu) | 47 | 174,221 | MP4 video |

Datasets are **not included** in this repository due to size.
See `download_asl_citizen.py` for the ASL Citizen download script.

---

## Project Structure

```
signlang/
├── notebooks/
│   ├── 01_data_exploration.ipynb
│   ├── 02_etl_pipeline.ipynb
│   ├── 03_training.ipynb          ← all 13 experiments
│   └── 04_error_analysis.ipynb
├── src/
│   ├── config.py                  ← all constants
│   ├── model.py                   ← ASLTransformerV5 / V11
│   ├── inference.py               ← real-time pipeline
│   ├── etl.py                     ← baseline ETL (v1-v4)
│   ├── etl_production.py          ← production ETL (v5, 690 features)
│   ├── etl_asl_citizen.py         ← ASL Citizen ETL
│   └── etl_popsign_250.py         ← PopSign streaming ETL
├── signlang_app/                  ← PySide6 desktop application
│   ├── main.py
│   └── app/
│       ├── core/                  ← inference, state machine, translator
│       └── ui/                    ← views, widgets, theme
├── templates/                     ← Flask prototype (development only)
├── static/
├── app.py                         ← Flask prototype (development only)
├── download_asl_citizen.py
├── requirements.txt
└── README.md
```

---

## Hardware

**Training (desktop):**
- CPU: AMD Ryzen 7 7700
- GPU: AMD Radeon RX 7900 XT — 20 GB VRAM
- RAM: 32 GB DDR5
- OS: Windows 11 + WSL2 Ubuntu 22.04
- Stack: PyTorch 2.4.1+rocm6.0

**Inference / Demo (laptop):**
- GPU: NVIDIA GeForce GTX 1650 — 4 GB VRAM
- RAM: 16 GB DDR4
- OS: Windows 11 native
- Stack: PyTorch 2.5.1+cu121, PySide6 6.11.1

---

## Installation (Inference / Demo)

> Requires Python 3.12 and a CUDA-capable GPU.

```bash
# 1. Clone the repository
git clone https://github.com/rayanakioud7/signlang.git
cd signlang/signlang_app

# 2. Create virtual environment
python -m venv venv
venv\Scripts\activate      # Windows
# source venv/bin/activate  # Linux/Mac

# 3. Install dependencies
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install PySide6 mediapipe==0.10.21 opencv-python numpy

# 4. Add the model checkpoint
# Place best_model_exp11.pt in signlang_app/checkpoints/
# Place train_mean_v5.npy and train_std_v5.npy in signlang_app/logs/
# Place sign_to_prediction_index_map.json in signlang_app/data/

# 5. Run
python main.py
```

> **Note:** The model checkpoint and standardisation statistics are not
> included in this repository due to file size. Contact the authors if
> you need them for reproduction.

---

## Installation (Training — AMD ROCm)

```bash
cd signlang

python -m venv venv
source venv/bin/activate

pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.0
pip install mediapipe==0.10.9 opencv-python numpy pandas polars joblib \
            scikit-learn matplotlib tqdm pose-format

# Required for AMD RDNA3 (RX 7900 XT)
export HSA_OVERRIDE_GFX_VERSION=11.0.0
```

---

## Running the Notebooks

```bash
cd signlang
source venv/bin/activate
jupyter notebook

# Open in order:
# 01_data_exploration.ipynb  ← understand the dataset
# 02_etl_pipeline.ipynb      ← build the training arrays
# 03_training.ipynb          ← all 13 experiments
# 04_error_analysis.ipynb    ← understand what the model gets wrong
```

---

## The Desktop Application

The `signlang_app/` folder contains a native PySide6 desktop application with three views:

| View | Description |
|------|-------------|
| **Translate** | Live webcam → sign recognition → English conversation |
| **Recorder** | Collect personal training data (250 signs, progress tracking) |
| **Settings** | Tune confidence threshold, pause time, cooldown in real time |

The app uses a **two-tier confidence state machine:**
- `≥ 70%` confidence → emit sign immediately on peak detection
- `55–70%` confidence → require 3 stable windows before emitting
- `< 55%` → suppress (rest pose suppression)

---

## Authors

| Name | Role |
|------|------|
| **Rayan Akioud** | Model architecture, training pipeline, ETL, inference, desktop app |

**Supervisor:** Azouagh Nabil
**Institution:** FSTM
**Academic Year:** 2025–2026

---

## Citation

If you use this work, please cite:

```bibtex
@misc{akioud2026asl,
  title   = {ASL Sign Language Recognition and Translation System},
  author  = {Akioud, Rayan},
  year    = {2026},
  school  = {FSTM},
  note    = {Projet de Fin d'\'Etudes (PFE)}
}
```

---

## License

This project is released under the MIT License.
The datasets used are subject to their own respective licenses.
