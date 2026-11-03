"""Static + live data for the portfolio section (About / CV / Projects).

Profile facts are kept in code (mirrors ``cv.tex``) so the site is self-contained
and never depends on a database for the landing experience. Project cards are
enriched at request time with live GitHub metadata (stars, language, url) via
the unauthenticated GitHub REST API, with graceful fallback to the static data.
"""

from __future__ import annotations

import os
from typing import Dict, List, Optional

GITHUB_USERNAME = "rayanakioud7"

PROFILE: Dict[str, object] = {
    "name": "Rayan Akioud",
    "headline": "Machine Learning Systems Engineering student",
    "location": "Casablanca, Morocco",
    "email": "rayanakioud8@gmail.com",
    "phone": "+212 684 996 265",
    "github": "https://github.com/rayanakioud7",
    "summary": (
        "Machine Learning Systems Engineering student with a rigorous, "
        "self-directed curriculum in pure mathematics and low-level software "
        "architecture. Experienced in building end-to-end AI systems—from "
        "custom neural network pipelines and hardware-accelerated inference to "
        "decoupled full-stack deployments. Focused on bridging the gap between "
        "theoretical ML research and production-grade, hardware-optimized "
        "infrastructure."
    ),
}

EDUCATION: List[Dict[str, object]] = [
    {
        "degree": "Diplôme d'Ingénieur d'État — AI & Computer Engineering (IAGI)",
        "school": "École Nationale Supérieure d'Arts et Métiers (ENSAM)",
        "location": "Casablanca, Morocco",
        "period": "2026 – Present (expected 2029)",
        "details": [
            "Core Engineering: Cloud Computing, Big Data & DevOps, Distributed Systems, Advanced Algorithms, Enterprise Architecture.",
            "AI & Systems: Deep Learning, Computer Vision, Generative AI, ML Systems Architecture, GPU Optimization, Custom Autograd Engines.",
        ],
    },
    {
        "degree": "Bachelor's — Data Science & Business Intelligence (SDID)",
        "school": "Faculty of Sciences and Technology (FST)",
        "location": "Mohammedia, Morocco",
        "period": "2026",
        "details": [],
    },
    {
        "degree": "DEUST — Mathematics, Computer Science & Physics (MIP)",
        "school": "Faculty of Sciences and Technology (FST)",
        "location": "Mohammedia, Morocco",
        "period": "2023 – 2025",
        "details": [
            "Foundational studies in Linear Algebra, Calculus, Probability, and Classical Mechanics.",
        ],
    },
]

EXPERTISE: List[Dict[str, object]] = [
    {"category": "Machine Learning & Systems", "items": "PyTorch, Custom Autograd Engines, Transformers, HuggingFace, AMD ROCm / NVIDIA CUDA, Mixed Precision Training."},
    {"category": "Languages", "items": "Python (NumPy, Pandas), C/C++, Java (Spring Boot), SQL, Bash."},
    {"category": "Infrastructure & DevOps", "items": "Docker, Linux/POSIX, Git, UML Modeling, Relational Databases (PostgreSQL, Oracle)."},
    {"category": "Mathematics", "items": "Linear Algebra, Multivariable Calculus, Inferential Statistics, Optimization Theory."},
]

EXPERIENCE: List[Dict[str, object]] = [
    {
        "role": "Content Moderator",
        "company": "Teleperformance",
        "location": "Casablanca, Morocco",
        "period": "July 2024 – June 2025",
        "bullets": [
            "Moderated high-volume digital environments under strict operational parameters with a 100% compliance record.",
            "Sustained high academic standing while working consistent night-shift operations over 12 months.",
        ],
    },
    {
        "role": "Customer Relations Advisor",
        "company": "IOSsolutions",
        "location": "Casablanca, Morocco",
        "period": "July 2025 – September 2025",
        "bullets": [
            "Managed fast-paced bilingual (French/English) inbound communications, resolving issues within target windows.",
        ],
    },
]

CERTIFICATIONS: List[Dict[str, str]] = [
    {"name": "Supervised Machine Learning: Regression and Classification", "issuer": "DeepLearning.AI & Stanford", "year": "2026"},
    {"name": "Introduction to SQL", "issuer": "Simplilearn SkillUp", "year": "2025"},
]

LANGUAGES: List[Dict[str, str]] = [
    {"name": "Arabic", "level": "Native"},
    {"name": "French", "level": "Full Professional Proficiency"},
    {"name": "English", "level": "Full Professional Proficiency"},
]


def github_token() -> Optional[str]:
    return os.environ.get("GITHUB_TOKEN") or None

# Curated summaries reviewed against public repository READMEs on 2026-10-31.
import json
from pathlib import Path

PROJECTS = json.loads((Path(__file__).with_name("projects.json")).read_text(encoding="utf-8"))
INDEPENDENT_PROJECTS = [
    {"slug": "smart-eval", "title": "Smart-Eval", "category": "Independent work", "summary": "Multimodal educational assessment using document layout analysis, OCR and text classification.", "tags": ["YOLO", "VLM OCR", "CamemBERT"], "repo": None, "featured": False, "year": "2026", "bullets": []},
    {"slug": "adam-optimizer", "title": "Interactive Adam Optimizer", "category": "Independent work", "summary": "An optimizer implementation with an interactive convergence visualization in React and Plotly.", "tags": ["Python", "MATLAB", "Plotly"], "repo": None, "featured": False, "year": "2025", "bullets": []},
]
