---
type: note
date: '2026-10-19'
tags:
- linear-algebra
- strang
- mathematics
- linear-independence
- basis
- dimension
topics:
- '[[Linear Algebra]]'
- '[[Strang]]'
- '[[Mathematics]]'
- '[[Linear Independence]]'
- '[[Basis]]'
- '[[Dimension]]'
---


Date: 2026-10-19
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Linear Independence]], [[Basis]], [[Dimension]]

---

## Linear Independence

> [!info] Definition: Linear Independence
> * **Vector Form:** A sequence of vectors $v_1, \dots, v_n$ is **linearly independent** if the only linear combination that produces the zero vector is the trivial combination:
>   $$ x_1v_1 + x_2v_2 + \dots + x_nv_n = 0 \iff x_1 = x_2 = \dots = x_n = 0 $$
> * **Matrix Form:** The columns of $A$ are linearly independent when the only solution to $Ax = 0$ is $x = 0$ (the nullspace $N(A)$ contains only the zero vector).

If a combination produces $0$ when the scalars $x_i$ are not all zero, the vectors are **linearly dependent** (one vector is a combination of the others).

> ![[Pasted image 20261019220927.png]]
> *(Independent vectors $v_1, v_2, v_3$ do not lie in the same plane. Dependent vectors $w_1, w_2, w_3$ lie in a single plane.)*

### Conditions for Independence and Dependence

| Condition | Mathematical Property | Result |
| :--- | :--- | :--- |
| **Full Column Rank** | Rank $r = n$ ($n$ pivots, $0$ free variables) | Columns of $A$ are **independent** |
| **Deficient Column Rank** | Rank $r < n$ (at least $n - r$ free variables) | Columns of $A$ are **dependent** |
| **More Vectors than Components** | $n$ vectors in $\mathbb{R}^m$ with $n > m$ | Vectors **must be dependent** |
| **Contains Zero Vector** | Any set containing $v_i = 0$ | Vectors are **automatically dependent** |

---

## Spanning a Subspace

> [!info] Definition: Spanning Set & Row Space
> * **Span:** A set of vectors $v_1, \dots, v_k$ **spans** a space $S$ if their linear combinations fill the entire space $S$.
> * **Column Space $C(A)$:** Spanned by the columns of $A$ (subspace of $\mathbb{R}^m$).
> * **Row Space $C(A^T)$:** Spanned by the rows of $A$, which are the columns of $A^T$ (subspace of $\mathbb{R}^n$).

---

## Basis for a Vector Space

Spanning vectors might have redundant (dependent) vectors, while independent vectors might not fill the whole space. A **basis** has the exact right number of vectors.

> [!info] Definition: Basis
> A **basis** for a vector space is a sequence of vectors with two properties:
> 1. They are **linearly independent** (no extra vectors).
> 2. They **span the space** (enough vectors to produce the rest).

> [!abstract] Core Principle: Unique Representation
> Every vector $v$ in the space can be written as a linear combination of the basis vectors in **one and only one way**.
> 
> **Proof:** Suppose $v = a_1v_1 + \dots + a_nv_n$ and $v = b_1v_1 + \dots + b_nv_n$. Subtracting gives:
> $$ (a_1 - b_1)v_1 + \dots + (a_n - b_n)v_n = 0 $$
> Because $v_1, \dots, v_n$ are independent, every coefficient must be zero ($a_i - b_i = 0 \implies a_i = b_i$).

### Standard and Matrix Bases

* **Standard Basis for $\mathbb{R}^n$:** The columns of the $n \times n$ identity matrix $I$.
* **Invertible Matrix Basis:** The vectors $v_1, \dots, v_n$ form a basis for $\mathbb{R}^n$ if and only if they are the columns of an $n \times n$ invertible matrix.
* **Column Space Basis:** The $r$ **pivot columns of $A$** (not $R$) form a basis for $C(A)$.
* **Row Space Basis:** The $r$ **nonzero rows of $R$** (pivot rows) form a basis for $C(A^T)$.

> [!warning] Pitfall: Column Space of $A$ vs. $R$
> Row operations change the column space ($C(A) \neq C(R)$), so you must take the pivot columns from the **original matrix $A$** to form a basis for $C(A)$. Row operations do *not* change the row space ($C(A^T) = C(R^T)$), so you can take the nonzero rows directly from $R$.

---

## Dimension of a Vector Space

> [!info] Theorem & Definition: Dimension
> **Theorem:** If $v_1, \dots, v_m$ and $w_1, \dots, w_n$ are both bases for the same vector space, then $m = n$.
> 
> **Definition:** The **dimension** of a space is the number of vectors in every basis for that space.

**Proof of Theorem ($m = n$):**
Assume $n > m$. Since $v_1, \dots, v_m$ span the space, each vector $w_j$ is a linear combination of the $v$'s. In matrix form:
$$ W = \begin{bmatrix} w_1 & \dots & w_n \end{bmatrix} = \begin{bmatrix} v_1 & \dots & v_m \end{bmatrix} A = VA $$
Here $A$ is a short, wide $m \times n$ matrix ($n > m$), so $Ax = 0$ has a nonzero solution $x$. Consequently, $VAx = Wx = 0$ has a nonzero solution, meaning the $w$'s are linearly dependent and cannot be a basis. By symmetry, $m > n$ is also impossible, so $m = n$.

| Subspace | Basis | Dimension |
| :--- | :--- | :--- |
| **Column Space $C(A)$** | Pivot columns of $A$ | $r$ (Rank) |
| **Row Space $C(A^T)$** | Nonzero rows of $R$ | $r$ (Rank) |
| **Nullspace $N(A)$** | Special solutions $s_1, \dots, s_{n-r}$ | $n - r$ (Number of free variables) |
| **Zero Space $\mathbf{Z} = \{0\}$** | Empty set $\emptyset$ | $0$ |

> [!warning] Pitfall: Terminology
> Never say "rank of a space", "dimension of a basis", or "basis of a matrix". A **matrix** has a rank $r$; a **subspace** has a basis and a dimension.

---

## Matrix Spaces and Function Spaces

The concepts of independence, basis, and dimension apply to any vector space, including spaces of matrices and differential equation solutions.

### Matrix Spaces ($M$)
For the space of all $n \times n$ matrices, the standard basis consists of matrices with a single $1$ and zeros elsewhere.

| Matrix Space ($n \times n$) | Dimension | $2 \times 2$ Example |
| :--- | :--- | :--- |
| **All $n \times n$ Matrices** | $n^2$ | $\dim = 4$ |
| **Upper Triangular Matrices** | $\frac{1}{2}n^2 + \frac{1}{2}n$ | $\dim = 3$ |
| **Symmetric Matrices** | $\frac{1}{2}n^2 + \frac{1}{2}n$ | $\dim = 3$ |
| **Diagonal Matrices** | $n$ | $\dim = 2$ |

### Function Spaces (2nd-Order Linear ODEs)
The solution space (nullspace of the differential operator) for a second-order linear homogeneous ODE always has **dimension $2$**:

* $y'' = 0 \implies y(x) = cx + d \implies \text{Basis: } \{x, 1\}$
* $y'' = -y \implies y(x) = c\sin x + d\cos x \implies \text{Basis: } \{\sin x, \cos x\}$
* $y'' = y \implies y(x) = ce^x + de^{-x} \implies \text{Basis: } \{e^x, e^{-x}\}$

---

## Worked Examples

### Example 1: Testing Dependence and Finding the Nullspace
Show that the columns of $A$ are dependent and find the combination that produces zero:
$$
A = \begin{bmatrix} 1 & 0 & 3 \\ 2 & 1 & 5 \\ 1 & 0 & 3 \end{bmatrix}
$$

**Derivation:**
Row reduce $A$ to $R$:
$$
\begin{bmatrix} 1 & 0 & 3 \\ 2 & 1 & 5 \\ 1 & 0 & 3 \end{bmatrix} \xrightarrow{\substack{R_2 - 2R_1 \\ R_3 - R_1}} \begin{bmatrix} 1 & 0 & 3 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix} = R
$$
* **Rank:** $r = 2 < 3$, so columns are **dependent**.
* **Basis for $C(A)$:** Columns 1 and 2 of $A$: $\begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$.
* **Special Solution ($x_3 = 1$):**
  $$
  \begin{aligned}
  x_1 + 3(1) &= 0 \implies x_1 = -3 \\
  x_2 - 1(1) &= 0 \implies x_2 = 1
  \end{aligned}
  \implies x = \begin{bmatrix} -3 \\ 1 \\ 1 \end{bmatrix}
  $$
  Column 3 is $3(\text{column } 1) - 1(\text{column } 2)$.

---

### Example 2: Subspace Properties from Spanning Vectors (3.4 A)
Given $v_1 = (1, 2, 0)$ and $v_2 = (2, 3, 0)$ in $\mathbb{R}^3$:

1. **Independence:** Independent, because $c_1v_1 + c_2v_2 = 0 \implies c_1 = c_2 = 0$.
2. **Spanned Space $\mathbf{V}$:** All vectors of the form $(x, y, 0)$ (the $xy$-plane inside $\mathbb{R}^3$).
3. **Basis & Dimension:** $\{v_1, v_2\}$ is a basis for $\mathbf{V}$, so $\dim(\mathbf{V}) = 2$.
4. **As a Column Space:** $\mathbf{V} = C(A)$ for any $3 \times n$ matrix $A$ of rank $2$ whose columns are combinations of $v_1, v_2$, such as:
   $$ A = \begin{bmatrix} 1 & 2 \\ 2 & 3 \\ 0 & 0 \end{bmatrix} $$
5. **As a Nullspace:** $\mathbf{V} = N(B)$ for any $m \times 3$ matrix $B$ of rank $1$ whose rows are multiples of $(0, 0, 1)$, such as:
   $$ B = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \implies Bv_1 = 0, \quad Bv_2 = 0 $$
6. **Completing a Basis for $\mathbb{R}^3$:** Any vector $v_3 = (a, b, c)$ with $c \neq 0$ lies outside the $xy$-plane and completes a basis $\{v_1, v_2, v_3\}$ for $\mathbb{R}^3$.

---
# ~={red}References=~
*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 164-173)