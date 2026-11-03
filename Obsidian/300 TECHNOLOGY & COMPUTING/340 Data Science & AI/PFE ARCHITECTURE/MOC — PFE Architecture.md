---
type: moc
tags:
- moc
---

# 🧠 MOC — PFE Architecture

> [!INFO] Navigation Hub
> This Map of Content indexes the **PFE ARCHITECTURE** project folder — a complete, illustrated deep-dive into the neural architecture of the sign-language recognition end-of-studies project (PFE). The core is a **15-part series** that walks from a single perceptron to a full transformer forward pass, written for total beginners.

---

## The 15-Part Series

- 📝 [[01. The Perceptron — The Atom of Neural Networks]] — One neuron: weights, bias, activation, the umbrella analogy
- 📝 [[02. The Linear Layer (MLP) — Many Perceptrons Working Together]] — Stacking neurons, matrix form
- 📝 [[03. What Learning Means — Backpropagation Without the Jargon]] — Loss landscapes and gradient intuition, no calculus
- 📝 [[04. Linear Projection — The Matrix Multiplication in Detail]] — What `nn.Linear` really does, shape mechanics
- 📝 [[05. Activation Functions — ReLU and GELU]] — Why nonlinearity, curves and derivatives
- 📝 [[06 — Layer Normalisation]] — Mean/variance normalization, learnable scale and shift
- 📝 [[07. Dropout — How Random Disabling Makes the Model Stronger]] — Regularization, train vs. eval behavior
- 📝 [[08. The 1D Convolution — What Kernel Size 3 Actually Sees]] — Sliding window over the 64-frame sequence, PyTorch transpose convention
- 📝 [[09. Residual Connection — Why We Add the Input Back]] — Degradation problem, identity shortcut, gradient highway
- 📝 [[10. Positional Encoding — How Sine Waves Tell the Transformer Where You Are]] — Sin/cos position signals
- 📝 [[11. Self-Attention — The Heart of the Transformer]] — Queries, keys, values; scaled dot-product attention
- 📝 [[12. Multi-Head Attention]] — Parallel heads, concatenation, why multiple views
- 📝 [[13.  The Feed-Forward Block]] — 4× expansion, GELU, residual + norm wrapper
- 📝 [[14. Global Average Pooling]] — Collapsing the time dimension for classification
- 📝 [[15. CrossEntropyLoss]] — Logits, softmax, the training objective

## Compilations & Meta

- 📝 [[00. preliminary]] ⭐ — The full series compiled in one document (27.5k words) — the master reference
- 📝 [[the math of a full forward]] — Step-by-step numerical walk-through of an entire forward pass
- 📝 [[MASTER PROMPT]] — The generation prompt that produced the series (methodology note)

## Project Material

- 📝 [[Sign Language Recognition — Data Understanding & ETL Plan]] — Dataset exploration and ETL pipeline plan for the PFE
- 📝 [[Script.md]] — Presentation/defense script for the architecture walkthrough (5k words)

---

> [!WARNING] Housekeeping
> - `Script.sync-conflict-20260616-212627-YEAPRK5.md` is a OneDrive sync-conflict copy of [[Script.md]] — safe to delete after verifying. See [[Vault Consistency Audit]].
> - The earlier references to `_MOC - PFE Architecture` in the two existing MOCs were broken; this file is the real MOC (linked with the em-dash convention).

> [!TIP] Cross-Domain Links
> - Compare the beginner-friendly series with the reference deep-dive [[GPT-2 Architecture - The Transformer pipeline]] (343) — same architecture, different pedagogy.
> - Foundations live in [[MOC — Linear Algebra]] (matrix multiplication, projections) and [[Neural Networks — Training]] (342).
> - Attention builds on dot products and cosine similarity — see [[The Dot Product and Vector Length]].
> - Data side of the project: [[Sign Language Recognition — Data Understanding & ETL Plan]] connects to [[ACP|dimensionality reduction]] and [[Data Warehouse - Basics|pipeline thinking]].

## 🗺️ Related MOCs

- [[MOC — Vault Index]] · [[MOC — Computer Science & Programming]]
- [[MOC — Data Science & AI]] — parent division
