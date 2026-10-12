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

# Curated, ordered project cards. ``repo`` keys are matched against the live
# GitHub API to pull stars/language/url; entries without a match keep the
# static description only.
PROJECTS: List[Dict[str, object]] = [
    {
        "slug": "signlang",
        "repo": "signlang",
        "title": "Real-Time American Sign Language Recognition",
        "year": "2026",
        "featured": True,
        "tags": ["PyTorch", "Transformers", "MediaPipe", "ROCm", "PySide6"],
        "summary": "1D-CNN + Transformer encoder (~21M params) for 250-way sign classification.",
        "bullets": [
            "Designed and trained a 1D-CNN + Transformer Encoder (~21M parameters) from scratch for 250-way sign classification.",
            "Spatial feature pipeline using 115 MediaPipe landmarks, computing position/velocity vectors relative to shoulder baselines (690 features/frame).",
            "13 structured training experiments across 4 datasets: 86.89% Top-1 accuracy on unseen signers, 100% user-specific accuracy.",
            "Native desktop monitor (PySide6) using local AMD RX 7900 XT ROCm compute for live 30 FPS inference.",
        ],
    },
    {
        "slug": "smart-eval",
        "repo": None,
        "title": "Smart-Eval: Multimodal Educational Assessment",
        "year": "2026",
        "featured": True,
        "tags": ["YOLO", "Roboflow", "VLM OCR", "CamemBERT"],
        "summary": "Automated engine to scan, categorize, and evaluate unstructured exam documents.",
        "bullets": [
            "Automated processing engine to scan, categorize, and evaluate unstructured exam documents.",
            "Integrated YOLO via Roboflow for document layout analysis and boundary parsing.",
            "Vision-Language Model (VLM OCR) pipeline for text extraction from handwritten responses.",
            "PyTorch CamemBERT-large classifier contextualizing raw text into curricula nodes.",
        ],
    },
    {
        "slug": "sdid-portal",
        "repo": "SDID-portal-fullstack",
        "title": "SDID Portal: Academic Management Architecture",
        "year": "2025",
        "featured": True,
        "tags": ["Spring Boot", "React", "MySQL", "RBAC"],
        "summary": "Decoupled full-stack portal for SDID students to access courses, submit projects, check grades.",
        "bullets": [
            "Decoupled framework: secure Java Spring Boot API backend + responsive React.js UI.",
            "Controller-Service-Repository pattern for safe transactional database operations.",
            "Role-Based Access Control (RBAC) over a MySQL backend for persistent state security.",
        ],
    },
    {
        "slug": "adam-optimizer",
        "repo": "adam-optimizer-masterpiece",
        "title": "Interactive 3D Optimization Engine (Adam)",
        "year": "2025",
        "featured": False,
        "tags": ["Python", "MATLAB", "React", "Plotly.js"],
        "summary": "Hand-implemented Adam optimizer visualized on an interactive React + Plotly canvas.",
        "bullets": [
            "Implemented Adam optimizer calculus and weight-update mechanics explicitly in Python and MATLAB.",
            "Bound the math backend to a React.js + Plotly.js canvas to observe convergence in real time.",
        ],
    },
    {
        "slug": "python-avance",
        "repo": "Python-Avance",
        "title": "Python Avancé — IAGI Coursework",
        "year": "2026",
        "featured": False,
        "tags": ["Python"],
        "summary": "Ateliers et travaux pratiques for the IAGI Advanced Python module.",
        "bullets": [
            "Course labs and practical work completed for the Advanced Python module at ENSAM.",
        ],
    },
]

