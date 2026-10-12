---
tags: [mathematics, linear-algebra, formal-sciences]
source: https://en.wikipedia.org/wiki/Linear_algebra
---


> [!abstract] Definition
> The branch of mathematics concerned with **linear equations**, **linear maps**, and their representation in **vector spaces** via **matrices**. It underlies nearly every other branch of mathematics and most of quantitative science.

---

## 1. History

| Period | Development | Key Figures |
|---|---|---|
| Ancient China | Rod calculus method for solving simultaneous linear equations (*The Nine Chapters on the Mathematical Art*, Ch. 8) — precursor to Gaussian elimination | — |
| 1637 | Introduction of coordinates into geometry → systems of linear equations arise naturally from intersecting lines/planes | René Descartes |
| 1693 | First systematic method for solving linear systems, via determinants | Gottfried Leibniz |
| 1750 | Explicit closed-form solution of linear systems using determinants (Cramer's rule) | Gabriel Cramer |
| ~1800s | Systematic elimination method (linked to geodesy) | Carl Friedrich Gauss |
| 1843 | Discovery of quaternions — a 4D system generalizing complex numbers | William R. Hamilton |
| 1844 | *Theory of Extension* — foundational concepts of what became linear algebra | Hermann Grassmann |
| 1848 | Coined the term **matrix** (Latin for "womb") | James Joseph Sylvester |
| 1856 | Matrix multiplication and the inverse matrix defined → enabled the general linear group | Arthur Cayley |
| 1872 | *Linear Associative Algebra* | Benjamin Peirce (extended by his son C.S. Peirce) |
| 1888 | First modern, precise definition of a vector space | Giuseppe Peano |
| Early 1900s | Linear algebra generalized into abstract algebra; theory of linear transformations of finite-dim. vector spaces matures | — |
| Mid-1900s onward | Rise of computers → efficient algorithms for Gaussian elimination and matrix decomposition become central to computing | — |

**Framing shift:** until the 19th century, linear algebra was taught through systems of equations and matrices. Modern treatments prefer the **vector space** framing — more general, more synthetic, conceptually cleaner (though more abstract).

---

## 2. Core Objects

| Object | Informal Meaning |
|---|---|
| **Vector space** $V$ over field $F$ | Set closed under vector addition and scalar multiplication, satisfying 8 axioms (associativity, commutativity, identity, inverses, distributivity, compatibility) |
| **Linear map** $T: V \to W$ | Function preserving vector addition and scalar multiplication: $T(au+bv) = aT(u)+bT(v)$ |
| **Linear subspace** | Subset of $V$ closed under the same two operations |
| **Span** | Smallest subspace containing a given set of vectors (all their linear combinations) |
| **Linear independence** | No vector in the set is a combination of the others |
| **Basis** | Linearly independent spanning set — minimal generating, maximal independent |
| **Dimension** | Cardinality of any basis (invariant — Dimension Theorem) |
| **Matrix** | Concrete finite-dimensional representation of a linear map, once bases are chosen |
| **Eigenvector / eigenvalue** | $f(v) = av$ — direction preserved (up to scaling) by the map |
| **Determinant** | Scalar encoding invertibility & volume-scaling of a linear map |
| **Dual space** $V^*$ | Space of linear forms $V \to F$ |
| **Inner product** | Bilinear form giving $V$ geometric structure: length, angle, orthogonality |

**Key structural fact:** two finite-dim. vector spaces over the same field are isomorphic **iff** they have the same dimension — matrices and abstract vector spaces are "two languages for the same concepts."

---

## 3. Subfields & Extensions

| Area | What It Adds |
|---|---|
| **Matrix theory** | Explicit computation: elimination, decomposition, normal forms (Jordan, Frobenius) |
| **Multilinear algebra** | Maps linear in several variables at once; tensor products |
| **Module theory** | Vector spaces generalized to a ring $R$ instead of a field — no guaranteed basis |
| **Functional analysis** | Linear algebra + analysis on infinite-dim. function spaces (Banach, Hilbert spaces) |
| **Numerical linear algebra** | Algorithmic/computational side — BLAS, LAPACK, complexity of solving large systems |
| **Linear algebra & geometry** | Lines, planes, rotations, projective/affine space as linear-algebraic objects |

---

## 4. How Central Is It?

Linear algebra sits near the root of the math dependency tree:

- **Geometry** is now usually built *from* linear algebra (points/lines/planes/rotations as linear objects), inverting the classical (synthetic) order.
- **Functional analysis** = linear algebra applied to (infinite-dimensional) function spaces.
- **Nonlinear systems**, when not directly solvable, are handled by **linearizing** — the differential of a function at a point *is* the best linear approximation there. This is why linear algebra is the gateway to almost all applied math (optimization, ML, PDEs).
- It's one of the few math subjects that is simultaneously deeply theoretical (abstract algebra, module theory) **and** maximally computational (it *is* what GPUs and supercomputers are optimized to do).

> [!tip] For your AI/ML track specifically
> Linear algebra is the substrate under nearly everything downstream in your roadmap — least squares, PCA, backprop-as-Jacobian-chains, attention (all matrix multiplications), convex optimization, and probability-as-linear-operators (Markov chains) all reduce to objects on this page.

---

## 5. Where It's Used

| Domain | Application |
|---|---|
| **Physics** | Quantum mechanics (wave functions as vectors in Hilbert space), electromagnetism (Lorentz transformations), classical mechanics |
| **Engineering** | Fluid dynamics & CFD (linearizing Navier–Stokes), power systems (eigenvalue analysis for grid stability), robotics (rigid body transforms) |
| **Computer science** | Computer graphics (rotations/projections as matrices), computer vision, graph algorithms |
| **Machine learning / AI** | Every layer of a neural net is a linear map + nonlinearity; PCA, SVD, embeddings, attention mechanisms |
| **Statistics** | Regression (least squares), multivariate analysis, covariance structure |
| **Earth science** | Weather forecasting — atmosphere discretized into cells, evolved via large linear (or linearized) systems |
| **Hardware** | GPUs are architected around matrix operations; specialized vector/array processors exist since the 1960s (Cray, ILLIAC IV) specifically for linear algebra throughput |
| **Signal processing** | Fourier analysis = choice of orthogonal basis in a function space |

---

## 6. Canonical References
*(cross-referencing your existing roadmap)*

- Axler, *Linear Algebra Done Right* — abstract, basis-free approach (your queue)
- Strang, *Introduction to Linear Algebra* — applied/computational, MIT 18.06 companion
- Roman, *Advanced Linear Algebra* — graduate-level, module-theoretic framing

---

## See Also
- [[Vector Spaces]]
- [[Matrix Decompositions]]
- [[Eigenvalues and Eigenvectors]]
- [[Convex Optimization]]