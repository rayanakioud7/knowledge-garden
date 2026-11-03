---
type: note
date: '2026-10-26'
tags:
- linear-algebra
- strang
- mathematics
- orthogonality
- four-fundamental-subspaces
- orthogonal-complements
topics:
- '[[Linear Algebra]]'
- '[[Strang]]'
- '[[Mathematics]]'
- '[[Orthogonality]]'
- '[[Four Fundamental Subspaces]]'
- '[[Orthogonal Complements]]'
---


---
Date: 2026-10-26
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Orthogonality]], [[Four Fundamental Subspaces]], [[Orthogonal Complements]]

---

## Orthogonal Vectors and Subspaces

> [!info] Definition: Orthogonal Vectors & Pythagorean Law
> Two vectors $v$ and $w$ are **orthogonal** (perpendicular) when their dot product is zero:
> $$v^T w = 0$$
> For orthogonal vectors, the Pythagorean theorem holds in $\mathbb{R}^n$:
> $$\Vert{}v\Vert{}^2 + \Vert{}w\Vert{}^2 = \Vert{}v + w\Vert{}^2 = \Vert{}v - w\Vert{}^2$$

**Proof:**
$$\begin{aligned} \Vert{}v + w\Vert{}^2 &= (v + w)^T(v + w) \\ &= v^T v + v^T w + w^T v + w^T w \\ &= \Vert{}v\Vert{}^2 + 0 + 0 + \Vert{}w\Vert{}^2 = \Vert{}v\Vert{}^2 + \Vert{}w\Vert{}^2 \end{aligned}$$

---

### Orthogonal Subspaces

> [!info] Definition: Orthogonal Subspaces ($V \perp W$)
> Two subspaces $V$ and $W$ of the same vector space are **orthogonal** if every vector $v \in V$ is perpendicular to every vector $w \in W$:
> $$v^T w = 0 \quad \text{for all } v \in V \text{ and all } w \in W$$

* **Zero Intersection:** If $V$ and $W$ are orthogonal subspaces, their only common vector is the zero vector ($V \cap W = \{0\}$). If $v$ lies in both $V$ and $W$, then $v^T v = 0 \implies v = 0$.
* **Dimension Bound:** Two subspaces in $\mathbb{R}^n$ cannot be orthogonal if $\dim(V) + \dim(W) > n$.

> [!warning] Pitfall: Perpendicular Planes in $\mathbb{R}^3$
> Two walls meeting at a $90^\circ$ angle in $\mathbb{R}^3$ (two planes of dimension $2$) are **not** orthogonal subspaces. Any nonzero vector $v$ along the meeting line lies in both planes and is not perpendicular to itself ($v^T v \neq 0$). Also, $\dim(V) + \dim(W) = 2 + 2 = 4 > 3$.

> ![[Pasted image 20261027000429.png]]
> *(An orthogonal plane $V$ and line $W$ in $\mathbb{R}^3$ ($\dim 2 + \dim 1 = 3$) vs. two non-orthogonal planes sharing a meeting line.)*

---

## Orthogonality of the Four Fundamental Subspaces

### 1. Row Space $\perp$ Nullspace (in $\mathbb{R}^n$)

Every vector $x \in N(A)$ is perpendicular to every row of $A$, and therefore to the entire row space $C(A^T)$.

**Proof 1 (Row-by-Row Dot Products):**
$$Ax = \begin{bmatrix} (\text{row } 1) \\ \vdots \\ (\text{row } m) \end{bmatrix} \begin{bmatrix} x \end{bmatrix} = \begin{bmatrix} (\text{row } 1) \cdot x \\ \vdots \\ (\text{row } m) \cdot x \end{bmatrix} = \begin{bmatrix} 0 \\ \vdots \\ 0 \end{bmatrix}$$
Since $x$ has a zero dot product with every row of $A$, $x$ is orthogonal to every linear combination of the rows.

**Proof 2 (Matrix Shorthand):**
Any vector in the row space has the form $A^T y$. Taking its dot product with $x \in N(A)$ gives:
$$x^T(A^T y) = (Ax)^T y = 0^T y = 0$$

### 2. Column Space $\perp$ Left Nullspace (in $\mathbb{R}^m$)

Every vector $y \in N(A^T)$ is perpendicular to every column of $A$, and therefore to the entire column space $C(A)$:
$$A^T y = \begin{bmatrix} (\text{column } 1)^T \\ \vdots \\ (\text{column } n)^T \end{bmatrix} \begin{bmatrix} y \end{bmatrix} = \begin{bmatrix} 0 \\ \vdots \\ 0 \end{bmatrix} \implies (Ax)^T y = x^T(A^T y) = 0$$

---

## Orthogonal Complements & The Fundamental Theorem

> [!info] Definition: Orthogonal Complement ($V^\perp$)
> The **orthogonal complement** of a subspace $V$, denoted $V^\perp$ ("$V$ perp"), is the subspace containing *all* vectors perpendicular to $V$:
> $$V^\perp = \{w \mid w^T v = 0 \text{ for all } v \in V\}$$
> Inside $\mathbb{R}^n$, the dimensions of orthogonal complements always sum to the full space:
> $$\dim(V) + \dim(V^\perp) = n$$

> [!abstract] Theorem: Fundamental Theorem of Linear Algebra (Part 2)
> * $N(A)$ is the **orthogonal complement** of the row space $C(A^T)$ in $\mathbb{R}^n$:
>   $$N(A) = C(A^T)^\perp \quad \text{and} \quad C(A^T) = N(A)^\perp$$
> * $N(A^T)$ is the **orthogonal complement** of the column space $C(A)$ in $\mathbb{R}^m$:
>   $$N(A^T) = C(A)^\perp \quad \text{and} \quad C(A) = N(A^T)^\perp$$

| Ambient Space | Orthogonal Complement Pair | Dimensions | Orthogonality Condition |
| :--- | :--- | :--- | :--- |
| **$\mathbb{R}^n$** | Row Space $C(A^T) \perp$ Nullspace $N(A)$ | $r + (n - r) = n$ | $(A^T y)^T x = y^T(Ax) = 0$ |
| **$\mathbb{R}^m$** | Column Space $C(A) \perp$ Left Nullspace $N(A^T)$ | $r + (m - r) = m$ | $(Ax)^T y = x^T(A^T y) = 0$ |

---

## Splitting Vectors: The True Action of $A$

Because $C(A^T)$ and $N(A)$ are orthogonal complements in $\mathbb{R}^n$, their combined bases ($r + (n - r) = n$ independent vectors) form a basis for all of $\mathbb{R}^n$.

> [!abstract] Core Principle: Orthogonal Decomposition of $x \in \mathbb{R}^n$
> Every vector $x \in \mathbb{R}^n$ splits uniquely into a row space component $x_r$ and an orthogonal nullspace component $x_n$:
> $$x = x_r + x_n \quad \text{where } x_r \in C(A^T), \ x_n \in N(A), \ \text{and } x_r^T x_n = 0$$
> When multiplied by $A$:
> 1. **Nullspace component goes to zero:** $Ax_n = 0$.
> 2. **Row space component goes to the column space:** $Ax = Ax_r + Ax_n = Ax_r = b$.
> 3. **One-to-One Invertibility ($C(A^T) \leftrightarrow C(A)$):** Every vector $b \in C(A)$ comes from **one and only one** vector $x_r \in C(A^T)$.

**Proof of Uniqueness of $x_r$:**
Suppose $Ax_r = Ax_r'$ for $x_r, x_r' \in C(A^T)$.
1. Subtracting gives $A(x_r - x_r') = 0$, so $x_r - x_r' \in N(A)$.
2. Since $C(A^T)$ is a subspace, $x_r - x_r'$ is also in $C(A^T)$.
3. Because $C(A^T) \perp N(A)$, their intersection is $\{0\}$, forcing $x_r - x_r' = 0 \implies x_r = x_r'$.

> ![[Pasted image 20261027000535.png]]
> *(The Big Picture: Every $x \in \mathbb{R}^n$ splits into $x_r + x_n$. Matrix $A$ maps $x_r \in C(A^T)$ invertibly to $b = Ax_r \in C(A)$ and maps $x_n \in N(A)$ to $0$.)*

---

## Basis Shortcuts When the Count is Right

For a subspace $S$ of known dimension $d$ (or for $\mathbb{R}^n$ where $d = n$), checking one basis property automatically guarantees the other:

| Given Condition (Count $= n$ in $\mathbb{R}^n$) | Implied Property | Consequence for $n \times n$ Matrix $A$ |
| :--- | :--- | :--- |
| $n$ vectors are **linearly independent** | They automatically **span $\mathbb{R}^n$** (form a basis) | Uniqueness ($Ax=0 \implies x=0$) implies Existence ($Ax=b$ is solvable for all $b$) |
| $n$ vectors **span $\mathbb{R}^n$** | They are automatically **linearly independent** (form a basis) | Existence ($Ax=b$ solvable for all $b$) implies Uniqueness ($A$ is invertible) |

---

## Worked Examples

### Example 1: Splitting a Vector into $x_r + x_n$
For $A = \begin{bmatrix} 1 & 2 \\ 3 & 6 \end{bmatrix}$, split $x = \begin{bmatrix} 4 \\ 3 \end{bmatrix}$ into $x_r \in C(A^T)$ and $x_n \in N(A)$.

**Derivation:**
1. **Identify Subspaces:**
   * Row space $C(A^T)$: Line spanned by $r_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$.
   * Nullspace $N(A)$: Line spanned by special solution $s_1 = \begin{bmatrix} -2 \\ 1 \end{bmatrix}$ (or $\begin{bmatrix} 2 \\ -1 \end{bmatrix}$).
2. **Decompose $x = x_r + x_n$:**
   $$\begin{bmatrix} 4 \\ 3 \end{bmatrix} = 2\begin{bmatrix} 1 \\ 2 \end{bmatrix} + 1\begin{bmatrix} 2 \\ -1 \end{bmatrix} = \underbrace{\begin{bmatrix} 2 \\ 4 \end{bmatrix}}_{x_r} + \underbrace{\begin{bmatrix} 2 \\ -1 \end{bmatrix}}_{x_n}$$
3. **Verify Orthogonality and Action of $A$:**
   * $x_r^T x_n = (2)(2) + (4)(-1) = 0$.
   * $Ax = A(x_r + x_n) = \begin{bmatrix} 1 & 2 \\ 3 & 6 \end{bmatrix}\begin{bmatrix} 2 \\ 4 \end{bmatrix} + \begin{bmatrix} 0 \\ 0 \end{bmatrix} = \begin{bmatrix} 10 \\ 30 \end{bmatrix}$.

---

### Example 3: Plane and Perpendicular Line in $\mathbb{R}^3$ (4.1 B)
The equation $x - 3y - 4z = 0$ describes a plane $P$ in $\mathbb{R}^3$.

1. **Matrix Representation:** $P$ is the nullspace $N(A)$ of the $1 \times 3$ matrix:
   $$ A = \begin{bmatrix} 1 & -3 & -4 \end{bmatrix} $$
2. **Basis for Plane $P = N(A)$ (Special Solutions):**
   Set free variables $(y, z) = (1, 0)$ and $(0, 1)$:
   $$
   s_1 = \begin{bmatrix} 3 \\ 1 \\ 0 \end{bmatrix}, \quad s_2 = \begin{bmatrix} 4 \\ 0 \\ 1 \end{bmatrix}
   $$
3. **Basis for Orthogonal Line $P^\perp$:**
   Since $P = N(A)$, its orthogonal complement is the row space $P^\perp = C(A^T)$:
   $$
   \text{Basis for } P^\perp: \quad \begin{bmatrix} 1 \\ -3 \\ -4 \end{bmatrix}
   $$

---
# ~={red}References=~
*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 194-201)