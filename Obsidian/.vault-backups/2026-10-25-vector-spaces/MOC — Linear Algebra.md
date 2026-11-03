# 🔷 MOC — Linear Algebra

> [!INFO] Navigation Hub
> This Map of Content indexes the **Linear Algebra** cluster inside `112 Algebra` — 23 notes from three tracks: **Gilbert Strang** (MIT-style conceptual course), **Stewart** (introductory vectors & dot product), and **Systems of Equations & Inequalities** (computational matrix methods).

---

## Overview

- 📝 [[Linear Algebra]] — History, core objects, subfields, canonical references (hub note)

## Gilbert Strang — Conceptual Course

### 1. Introduction to Vectors
- 📝 [[Vectors and Core Operations]] — Vector addition, scalar multiplication, linear combinations
- 📝 [[The Dot Product and Vector Length]] — Dot product, angles, unit vectors, inequalities
- 📝 [[Matrices]] — Column view of $Ax$, inverse problem, singular matrices, independence

### 2. Solving Linear Equations
- 📝 [[Vectors and Linear Equations]] — Row vs column picture, $Ax=b$ notation
- 📝 [[The idea of Elimination]] — Gaussian elimination, breakdown cases, back substitution
- 📝 [[Elimination Using Matrices]] — Elimination matrices $E_{ij}$, permutation matrices, $Ax$ rules
- 📝 [[Rules for Matrix Operations]] — Four multiplication views, laws, block matrices
- 📝 [[Inverse Matrices]] — Invertibility, $2\times2$ formula, Gauss-Jordan
- 📝 [[Elimination = Factorization - A = LU]] — $A=LU$, $LDU$, operation cost
- 📝 [[Transposes]] — Transpose properties, symmetric matrices, $PA=LU$

### 3. Vector Spaces and Subspaces
- 📝 [[Spaces of Vectors]] ⭐ — $\mathbb{R}^n$ axioms, subspaces, column space (2.4k words)
- 📝 [[The Nullspace of A Solving Ax=0 and Rx=0]] — Nullspace, pivot/free variables, special solutions

## Introductory Linear Algebra (Stewart)

- 📝 [[Introductory Vectors]] — Geometric vectors, components, velocity/force models
- 📝 [[Introductory The Dot Product Note]] — Dot product, projections, work

## Systems of Equations & Inequalities

### Linear Systems
- 📝 [[Systems of Linear Equations in Two Variables]] — Substitution/elimination, solution counts
- 📝 [[Systems of Linear Equations in Several Variables]] — Back-substitution, Gaussian elimination
- 📝 [[Systems of Nonlinear Equations]] — Substitution & elimination for conics
- 📝 [[Systems of Inequalities]] — Graphing, bounded/unbounded regions

### Matrices
- 📝 [[Matrices and Systems of Linear Equations]] — Augmented matrices, row ops, Gauss-Jordan
- 📝 [[The Algebra of Matrices]] — Matrix arithmetic, multiplication applications
- 📝 [[Inverses of Matrices and Matrix Equations]] — Inverse formulas, matrix equations
- 📝 [[Determinants and Cramer’s Rule]] — Cofactors, invertibility, Cramer, triangle areas

---

> [!TIP] Cross-Domain Links
> - Gaussian elimination reappears as the simplex tableau in [[Méthode Simplexe]] (optimization).
> - Vector spaces, dot products and nullspaces are prerequisites for [[MOC — Data Science & AI]] (PCA in [[ACP]], embeddings, attention).
> - [[Determinants and Cramer’s Rule]] connects to [[Distance and Midpoint Formulas|coordinate geometry]] and conic identification in [[Rotation of Axes]].
> - Matrix multiplication underlies [[04. Linear Projection — The Matrix Multiplication in Detail|the PFE architecture's linear layers]].

## 🗺️ Related MOCs

- [[MOC — Vault Index]] · [[MOC — Formal Sciences]] · [[MOC — Pure Mathematics]]
- [[MOC — Data Science & AI]] — machine learning is applied linear algebra
- [[MOC — Applied Mathematics]] — optimization on linear systems
