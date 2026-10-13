
Date: 2026-10-12
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Nullspace]], [[Row Echelon Form]], [[Rank]]

---

## The Nullspace of $A$

> [!info] Definition: Nullspace $N(A)$
> The nullspace $N(A)$ of an $m \times n$ matrix $A$ consists of all solutions $x$ to the homogeneous equation $Ax = 0$.
> $$ N(A) = \{x \in \mathbb{R}^n \mid Ax = 0\} $$

### Subspace Verification
The nullspace is always a vector subspace of $\mathbb{R}^n$:
1. **Contains Zero:** $A(0) = 0$, so $0 \in N(A)$.
2. **Closed under Addition:** If $x, y \in N(A)$, then $A(x + y) = Ax + Ay = 0 + 0 = 0$.
3. **Closed under Scalar Multiplication:** If $x \in N(A)$ and $c \in \mathbb{R}$, then $A(cx) = c(Ax) = c(0) = 0$.

> [!warning] Pitfall: Subspace Ambient Spaces
> For an $m \times n$ matrix $A$:
> * The **Nullspace** $N(A)$ is a subspace of $\mathbb{R}^n$ ($x$ has $n$ components).
> * The **Column Space** $C(A)$ is a subspace of $\mathbb{R}^m$ ($Ax$ has $m$ components).

---

## Computing the Nullspace: Elimination to $R$

Elementary row operations change the rows and column space of a matrix, but they **never change the solutions to $Ax = 0$**.

$$ N(A) = N(U) = N(R) $$

> [!info] Definition: Reduced Row Echelon Form (RREF)
> The reduced row echelon form $R = \text{rref}(A)$ is reached by continuing elimination past $U$:
> 1. Use pivot rows to eliminate upward, creating zeros above every pivot.
> 2. Divide each pivot row by its pivot to make all pivots equal to $1$.
> 3. Zero rows are collected at the bottom.

---

## Pivot Variables, Free Variables, and Special Solutions

The columns of $A$ and $R$ split into two distinct categories:

| Column Type | Pivot Status | Corresponding Variables | Role in Elimination |
| :--- | :--- | :--- | :--- |
| **Pivot Columns** | Contains a leading $1$ in $R$ | Pivot variables | Determined uniquely by back-substitution |
| **Free Columns** | No pivot | Free variables | Assigned arbitrary scalar values (parameters) |

* **Rank ($r$):** The number of pivots (number of nonzero rows in $R$).
* **Number of Pivot Variables:** $r$.
* **Number of Free Variables:** $n - r$.

> [!abstract] Core Principle: Special Solutions
> To find the basis for $N(A)$, compute the $n - r$ **special solutions**:
> 1. Set one free variable to $1$ and all other free variables to $0$.
> 2. Solve $Rx = 0$ for the pivot variables.
> 3. Repeat for each free variable.
> 
> The nullspace $N(A)$ is the set of all linear combinations of these special solutions:
> $$ x = c_1 s_1 + c_2 s_2 + \dots + c_{n-r} s_{n-r} $$

### The Fundamental Existence Theorem
If a matrix has more columns than rows ($n > m$), the rank satisfies $r \le m < n$. 
There are at least $n - m > 0$ free variables, which guarantees that **$Ax = 0$ has nonzero solutions in its nullspace**.

---

## The Block Form of $R$ and the Nullspace Matrix $N$

When pivot columns appear first, $R$ partitions cleanly into the $r \times r$ identity block $I$ and an $r \times (n - r)$ free block $F$:

$$
R = \begin{bmatrix} I & F \\ 0 & 0 \end{bmatrix}
$$

The special solutions assemble into the columns of an $n \times (n - r)$ **nullspace matrix** $N$:

$$
N = \begin{bmatrix} -F \\ I \end{bmatrix}
$$

**Proof of Orthogonality/Kernel Condition:**
$$
RN = \begin{bmatrix} I & F \\ 0 & 0 \end{bmatrix} \begin{bmatrix} -F \\ I \end{bmatrix} = -F + F = 0
$$

---

## Rank One Matrices ($r = 1$)

A matrix has rank $r = 1$ when every row is a scalar multiple of a single pivot row.

* **Outer Product Form:** Every rank-one matrix can be factored as a column times a row:
  $$ A = u v^T $$
* **Column Space:** The 1-dimensional line along $u$.
* **Nullspace:** The $(n - 1)$-dimensional hyperplane perpendicular to the vector $v$:
  $$ Ax = 0 \iff u(v^T x) = 0 \iff v^T x = 0 $$

---

## Worked Examples

### Example 1: Finding Special Solutions for a $2 \times 4$ Matrix
Find the reduced echelon form $R$, the rank $r$, and the special solutions for:
$$
A = \begin{bmatrix} 1 & 2 & 2 & 4 \\ 3 & 8 & 6 & 16 \end{bmatrix}
$$

**1. Elimination to Upper Triangular Form $U$:**
Subtract $3 \times (\text{row } 1)$ from row 2:
$$
U = \begin{bmatrix} 1 & 2 & 2 & 4 \\ 0 & 2 & 0 & 4 \end{bmatrix}
$$
Pivots are in column 1 ($a_{11} = 1$) and column 2 ($u_{22} = 2$). Columns 3 and 4 are free.

**2. Elimination to Reduced Form $R$:**
* Divide row 2 by $2$:
  $$ \begin{bmatrix} 1 & 2 & 2 & 4 \\ 0 & 1 & 0 & 2 \end{bmatrix} $$
* Subtract $2 \times (\text{row } 2)$ from row 1:
  $$
  R = \begin{bmatrix} 1 & 0 & 2 & 0 \\ 0 & 1 & 0 & 2 \end{bmatrix}
  $$
  Rank $r = 2$. Pivot variables: $x_1, x_2$. Free variables: $x_3, x_4$.

**3. Construct Special Solutions:**
* **For $x_3 = 1, x_4 = 0$:**
  $$
  \begin{aligned}
  x_1 + 2(1) + 0(0) &= 0 \implies x_1 = -2 \\
  x_2 + 0(1) + 2(0) &= 0 \implies x_2 = 0
  \end{aligned}
  \implies s_1 = \begin{bmatrix} -2 \\ 0 \\ 1 \\ 0 \end{bmatrix}
  $$

* **For $x_3 = 0, x_4 = 1$:**
  $$
  \begin{aligned}
  x_1 + 2(0) + 0(1) &= 0 \implies x_1 = 0 \\
  x_2 + 0(0) + 2(1) &= 0 \implies x_2 = -2
  \end{aligned}
  \implies s_2 = \begin{bmatrix} 0 \\ -2 \\ 0 \\ 1 \end{bmatrix}
  $$

**Complete Nullspace Solution:**
$$
x = c_1 \begin{bmatrix} -2 \\ 0 \\ 1 \\ 0 \end{bmatrix} + c_2 \begin{bmatrix} 0 \\ -2 \\ 0 \\ 1 \end{bmatrix}
$$

---

### Example 2: Inverting from Special Solutions to $R$
Construct the reduced row echelon matrix $R$ whose special solutions to $Rx = 0$ are:
$$
s_1 = \begin{bmatrix} -3 \\ 1 \\ 0 \\ 0 \end{bmatrix}, \quad s_2 = \begin{bmatrix} -2 \\ 0 \\ -6 \\ 1 \end{bmatrix}
$$

**Derivation:**
* The free variables correspond to entries where $s_i$ contains $1$: variables $x_2$ and $x_4$.
* The pivot variables are $x_1$ and $x_3$.
* The components of $s_1$ and $s_2$ give the coefficients of the free columns with flipped signs:
  $$
  R = \begin{bmatrix} 1 & 3 & 0 & 2 \\ 0 & 0 & 1 & 6 \\ 0 & 0 & 0 & 0 \end{bmatrix}
  $$

---
# ~={red}References=~
*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 135-141)