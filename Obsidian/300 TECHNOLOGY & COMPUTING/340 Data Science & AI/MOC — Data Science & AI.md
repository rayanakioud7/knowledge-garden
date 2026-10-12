

> [!INFO] Navigation Hub
> This Map of Content indexes all notes under **340 Data Science & AI** — the largest and most active area of the vault. It covers Machine Learning, Deep Learning, NLP, Business Intelligence, and the PFE (Projet de Fin d'Études) Architecture series.

  

> [!WARNING] Redundancy Notice
> Three parallel tracks cover neural network concepts:
> 1. **English Course Notes** (342 Deep Learning/Neural Network) — Theory-first, concise
> 2. **PFE Architecture Series** (01–11) — Project-specific, deep explanations for your sign language project
> 3. **Pr. Azouagh's Notes** (French) — University coursework
>
> They complement each other. Use cross-links below to navigate between them.

  

---

  

## 341 Machine Learning

  

### Overview

- 📝 [[Machine Learning]] — ML paradigms overview, taxonomy

  

### Supervised Learning

- 📝 [[Supervised Learning]] — Supervised learning concepts overview

- 📝 [[Linear Regression]] — Simple/multiple regression fundamentals

  

**Pr. Azzouagh's Supervised Learning Course (French):**

- 📝 [[Régression Linéaire — Cheat Sheet]] — Linear regression with R examples

- 📝 [[K-Nearest Neighbors (KNN)]] — Distance metrics, k-selection, pros/cons

- 📝 [[Support Vector Machines (SVM)]] — Hyperplane separation, kernel trick, margin optimization

- 📝 [[Classification Naïve Bayésienne — Cheat Sheet]] — Bayes theorem, conditional independence

- 📝 [[CART - Classification And Regression Trees]] — Gini impurity, information gain, pruning

- 📝 [[Arbres de décision – Méthode CHAID]] — Chi-squared automatic interaction detection

  

> [!TIP] Cross-Domain Links
> - [[Linear Regression]] and [[Régression Linéaire — Cheat Sheet]] cover the same topic (EN/FR). Cross-reference for bilingual study.
> - [[Support Vector Machines (SVM)]] uses optimization concepts from [[Conditions KKT - Karush-Kuhn-Tucker]]
> - [[Classification Naïve Bayésienne — Cheat Sheet]] connects to [[Resume Proba Avance]] (probability)
> - Decision trees ([[CART - Classification And Regression Trees|CART]] and [[Arbres de décision – Méthode CHAID|CHAID]]) should be studied together

  

### Unsupervised Learning

  

**Pr. Azzouagh's Unsupervised Learning Course (French):**

- 📝 [[K-Means (Méthode de Partitionnement)]] — Centroid clustering, elbow method, silhouette

- 📝 [[Classification Hiérarchique Ascendante (CAH)]] — Agglomerative clustering, dendrograms, linkage criteria

  

> [!TIP] Cross-Domain Links
> - Clustering methods relate to [[ACP]] (dimensionality reduction)
> - K-Means is used in [[R & Machine Learning Cheat Sheet|R]] workflows

  

---

  

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
> | Backpropagation | Training | [[03. What Learning Means — Backpropagation Without the Jargon]] | [[Rétropropagation (Backpropagation) & Descente de Gradient\|Rétropropagation]] |
> | Activation Functions | Foundations §4 | [[05. Activation Functions — ReLU and GELU]] | [[Reseaux de Neuron]] |
> | Convolution | — | [[08. The 1D Convolution — What Kernel Size 3 Actually Sees]] | [[Convolution (1D & 2D)]] |
> | NLP/Attention | — | [[11. Self-Attention — The Heart of the Transformer]] | [[Traitement du Langage Naturel (NLP)]] |

  

### Pr. Azouagh's Deep Learning Course (French)

- 📝 [[Reseaux de Neuron]] — ⭐ **Comprehensive** (55 links): Perceptron, MLP, activation, architectures

- 📝 [[Rétropropagation (Backpropagation) & Descente de Gradient]] — Backprop algorithm, gradient descent variants

- 📝 [[Convolution (1D & 2D)]] — Convolution operations, filters, feature maps

- 📝 [[Traitement du Langage Naturel (NLP)]] — NLP pipeline, tokenization, embeddings

  

### PFE Architecture — Transformer Deep Dive

→ See dedicated [[_MOC - PFE Architecture]] for the complete 11-part series

  

---

  

## 343 Natural Language Processing

  

### Transformers

- 📝 [[GPT-2 Architecture - The Transformer pipeline]] — ⭐ **48KB comprehensive note**: Full GPT-2 architecture breakdown

  

> [!TIP] Cross-Domain Links

> - [[GPT-2 Architecture - The Transformer pipeline|GPT-2 Architecture]] is the theoretical companion to the PFE Architecture series

> - Self-attention in GPT-2 connects to [[11. Self-Attention - The Heart of the Transformer|PFE 11. Self-Attention]]

> - Positional encoding connects to [[10. Positional Encoding - How Sine Waves Tell the Transformer Where You Are|PFE 10. Positional Encoding]]

  

### 344 Computer Vision

- 🚧 *Empty — related content in* [[Convolution (1D & 2D)]]

  

### 345 Data Engineering & Pipelines

- 🚧 *Empty*

  

---

  

## Data Analysis

- 📝 [[ACP]] — Analyse en Composantes Principales (PCA)

  

> [!TIP] Cross-Domain Links

> - PCA is a dimensionality reduction technique used before clustering ([[K-Means (Méthode de Partitionnement)|K-Means]], [[Classification Hiérarchique Ascendante (CAH)|CAH]])

  

---

  

## Business Intelligence

  

- 📝 [[Big Data - Chekhtouna]] — Big Data concepts, V's model

  

### Data Warehousing

- 📝 [[Business Intelligence et Data warehouse - FR]] — ⭐ **Comprehensive** (46 links): Full BI lifecycle, ETL, OLAP vs OLTP

- 📝 [[Data Warehouse - Basics]] — Core DW concepts introduction

- 📝 [[Data Warehouse Architecture]] — Kimball vs Inmon, staging areas, ODS

- 📝 [[Dimensional modeling]] — Star schema, snowflake, fact/dimension tables

  

> [!WARNING] Redundancy Notice

> [[Business Intelligence et Data warehouse - FR]] and [[Data Warehouse Architecture]] overlap on ETL and schema design. The FR note is more comprehensive; the EN note adds architectural depth. Cross-reference both.

  

> [!TIP] Cross-Domain Links

> - Data warehousing uses [[SQL & Database Fundamentals|SQL]] extensively

> - [[Langage DAX]] (Power BI) is a downstream tool for BI analysis

  

---

  

## 🗺️ Related MOCs

- [[_MOC - Computer Science & Programming]] — Programming languages, SQL, tools

- [[_MOC - Formal Sciences]] — Math foundations (statistics, linear algebra, optimization)

- [[_MOC - PFE Architecture]] — The 11-part transformer architecture series