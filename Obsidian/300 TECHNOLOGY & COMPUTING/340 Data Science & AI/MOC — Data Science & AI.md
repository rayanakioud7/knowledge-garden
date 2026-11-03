---
type: moc
tags:
- moc
---

# 🤖 MOC — Data Science & AI

> [!INFO] Navigation Hub
> This Map of Content indexes **340 Data Science & AI** (52 notes) — the largest and most active area of the vault. It covers Machine Learning (341), Deep Learning (342), NLP (343), Business Intelligence, Data Analysis, the PFE project, and personal AI projects.
>
> Hub note: [[Data Science.md|Data Science]].

> [!WARNING] Redundancy Notice
> Three parallel tracks cover neural network concepts:
> 1. **English Course Notes** (342 Deep Learning/Neural Network) — theory-first, concise
> 2. **PFE Architecture Series** (01–15, [[MOC — PFE Architecture]]) — project-specific, deep explanations for the sign language project
> 3. **Pr. Azouagh's Notes** (FR) — university coursework
>
> They complement each other. Use the cross-links below to navigate between them.

---

## 341 Machine Learning

### Overview

- 🚧 [[Machine Learning]] — *(Stub — 0 bytes; ML paradigms hub to be written)*

### Supervised Learning

- 🚧 [[Supervised Learning]] — *(Stub — 0 bytes; overview to be written)*
- 📝 [[Linear Regression]] — Simple/multiple regression fundamentals

**Pr. Azzouagh's Supervised Learning Course (FR):**
- 📝 [[Régression Linéaire — Cheat Sheet]] ⭐ **(FR)** — Linear regression with R examples
- 📝 [[K-Nearest Neighbors (KNN)]] **(FR)** — Distance metrics, k-selection, pros/cons
- 📝 [[Support Vector Machines (SVM)]] ⭐ **(FR)** — Hyperplane separation, kernel trick, margin optimization
- 📝 [[Classification Naïve Bayésienne — Cheat Sheet]] **(FR)** — Bayes theorem, conditional independence
- 📝 [[CART - Classification And Regression Trees]] **(FR)** — Regression & classification trees, Gini impurity, pruning
- 📝 [[Arbres de décision – Méthode CHAID]] **(FR)** — Chi-squared automatic interaction detection

> [!TIP] Cross-Domain Links
> - [[Linear Regression]] and [[Régression Linéaire — Cheat Sheet]] cover the same topic (EN/FR). Cross-reference for bilingual study.
> - [[Support Vector Machines (SVM)]] uses optimization concepts from [[Conditions KKT - Karush-Kuhn-Tucker]].
> - [[Classification Naïve Bayésienne — Cheat Sheet]] connects to [[Resume Proba Avance]] (probability).
> - Decision trees ([[CART - Classification And Regression Trees|CART]] and [[Arbres de décision – Méthode CHAID|CHAID]]) should be studied together.

### Unsupervised Learning

**Pr. Azzouagh's Unsupervised Learning Course (FR):**
- 📝 [[K-Means (Méthode de Partitionnement)]] **(FR)** — Centroid clustering, elbow method, silhouette
- 📝 [[Classification Hiérarchique Ascendante (CAH)]] **(FR)** — Agglomerative clustering, dendrograms, linkage criteria

> [!TIP] Cross-Domain Links
> - Clustering methods relate to [[ACP]] (dimensionality reduction).
> - K-Means is used in [[R & Machine Learning Cheat Sheet|R]] workflows.

## 342 Deep Learning

### Neural Networks — English Course Track

A three-part series covering neural networks from theory to code:

1. 📝 [[Neural Networks - Foundations]] — Architecture, activation functions, forward pass, softmax
2. 📝 [[Neural Networks — Training]] — Loss functions, backpropagation, gradient descent, regularization
3. 📝 [[Neural Networks — Implementation]] — TensorFlow/Keras implementation, code examples

> [!TIP] Redundancy Map
> | Topic | English Track | PFE Architecture | Pr. Azouagh (FR) |
> |-------|:---:|:---:|:---:|
> | Perceptron | Foundations §2.1 | [[01. The Perceptron — The Atom of Neural Networks]] | [[Reseaux de Neuron]] |
> | MLP/Linear Layer | Foundations §3 | [[02. The Linear Layer (MLP) — Many Perceptrons Working Together]] | [[Reseaux de Neuron]] |
> | Backpropagation | Training | [[03. What Learning Means — Backpropagation Without the Jargon]] | [[Rétropropagation (Backpropagation) & Descente de Gradient]] |
> | Activation Functions | Foundations §4 | [[05. Activation Functions — ReLU and GELU]] | [[Reseaux de Neuron]] |
> | Convolution | — | [[08. The 1D Convolution — What Kernel Size 3 Actually Sees]] | [[Convolution (1D & 2D)]] |
> | NLP/Attention | — | [[11. Self-Attention — The Heart of the Transformer]] | [[Traitement du Langage Naturel (NLP)]] |

### Pr. Azouagh's Deep Learning Course (FR)

- 📝 [[Reseaux de Neuron]] ⭐ **(FR)** — Perceptron, MLP, activation functions, architectures (hub note)
- 📝 [[Rétropropagation (Backpropagation) & Descente de Gradient]] **(FR)** — Backprop algorithm, gradient descent variants
- 📝 [[Convolution (1D & 2D)]] **(FR)** — Convolution operations, filters, feature maps
- 📝 [[Traitement du Langage Naturel (NLP)]] **(FR)** — NLP pipeline, tokenization, embeddings

### PFE Architecture — Transformer Deep Dive

→ See dedicated [[MOC — PFE Architecture]] for the complete 15-part series + project material.

## 343 Natural Language Processing

### Transformers

- 📝 [[GPT-2 Architecture - The Transformer pipeline]] ⭐ — Full GPT-2 architecture breakdown, chapter by chapter (6.8k words)

> [!TIP] Cross-Domain Links
> - [[GPT-2 Architecture - The Transformer pipeline|GPT-2 Architecture]] is the theoretical companion to the PFE Architecture series.
> - Self-attention in GPT-2 connects to [[11. Self-Attention — The Heart of the Transformer|PFE 11. Self-Attention]].
> - Positional encoding connects to [[10. Positional Encoding — How Sine Waves Tell the Transformer Where You Are|PFE 10. Positional Encoding]].

### 344 Computer Vision

- 🚧 *Empty — related content in* [[Convolution (1D & 2D)]]

### 345 Data Engineering & Pipelines

- 🚧 *Empty — related content in* [[Sign Language Recognition — Data Understanding & ETL Plan]] and [[Big Data - Chekhtouna]]

---

## Data Analysis

- 📝 [[ACP]] ⭐ **(FR)** — Analyse en Composantes Principales (PCA)

> [!TIP] Cross-Domain Links
> - PCA is a dimensionality reduction technique used before clustering ([[K-Means (Méthode de Partitionnement)|K-Means]], [[Classification Hiérarchique Ascendante (CAH)|CAH]]).
> - ACP builds on [[MOC — Linear Algebra]] (eigenvalues) and feeds the PFE data pipeline.

---

## Business Intelligence

- 📝 [[Big Data - Chekhtouna]] ⭐ **(FR)** — Big Data concepts, V's model (3.7k words)

### Data Warehousing

- 📝 [[Business Intelligence et Data warehouse - FR]] ⭐ **(FR)** — Full BI lifecycle, ETL, OLAP vs OLTP
- 📝 [[Data Warehouse - Basics]] — Core DW concepts introduction
- 📝 [[Data Warehouse Architecture]] — Kimball vs Inmon, staging areas, ODS
- 📝 [[Dimensional modeling]] — Star schema, snowflake, fact/dimension tables

> [!WARNING] Overlap Notice
> [[Business Intelligence et Data warehouse - FR]] and [[Data Warehouse Architecture]] overlap on ETL and schema design. The FR note is more comprehensive; the EN note adds architectural depth. Cross-reference both when consolidating.

> [!TIP] Cross-Domain Links
> - Data warehousing uses [[SQL & Database Fundamentals|SQL]] extensively.
> - [[Langage DAX]] (Power BI) is a downstream tool for BI analysis.

---

## Projects

### Jarvis (personal assistant)

- 📝 [[Jarvis protoype]] — Initial prototype design notes
- 📝 [[day 2 tasks]] — Development task log
- 📝 [[jarvis v3]] — v3 architecture and plans

### Numpy NN (from-scratch neural network)

- 📝 [[numpy_autograd]] — Automatic differentiation engine in NumPy

> [!TIP] Cross-Domain Links
> - [[numpy_autograd]] connects to [[Python’s Built-In Classes|NumPy foundations]] and the PFE series' forward/backward math.
> - Jarvis development continues the software practices from [[MOC — Software Engineering]].

---

## 🗺️ Related MOCs

- [[MOC — Vault Index]] · [[MOC — Computer Science & Programming]]
- [[MOC — PFE Architecture]] — the project deep-dive
- [[MOC — Formal Sciences]] — math foundations (statistics, linear algebra, optimization)
- [[MOC — Python]] — primary tooling for this section
