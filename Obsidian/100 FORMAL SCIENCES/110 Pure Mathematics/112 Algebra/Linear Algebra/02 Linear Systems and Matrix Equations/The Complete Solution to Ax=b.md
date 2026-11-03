---
type: note
date: '2026-10-19'
tags:
- linear-algebra
- strang
- mathematics
- complete-solution
- rank
topics:
- '[[Linear Algebra]]'
- '[[Strang]]'
- '[[Mathematics]]'
- '[[Complete Solution]]'
- '[[Rank]]'
---


---
Date: 2026-10-19
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Complete Solution]], [[Rank]]

---

## Solving $Ax = b$: Augmented Matrix Reduction

To solve $Ax = b$ when $b \neq 0$, row operations applied to $A$ must also act on $b$. Augment $A$ with $b$ and reduce to reduced row echelon form:

$$
\begin{bmatrix} A & b \end{bmatrix} \xrightarrow{\text{elimination}} \begin{bmatrix} R & d \end{bmatrix}
$$

The original system $Ax = b$ is equivalent to the reduced system $Rx = d$.

> [!abstract] Core Principle: Solvability Condition
> $Ax = b$ (and $Rx = d$) is solvable if and only if **every zero row of $R$ corresponds to a zero entry in $d$** (producing $0 = 0$).

---

## The Complete Solution ($x = x_p + x_n$)

The complete solution to $Ax = b$ is the sum of one **particular solution** $x_p$ and any **nullspace solution** $x_n$:

$$
x = x_p + x_n
$$

* **Particular Solution ($x_p$):** Solves $Ax_p = b$ (and $Rx_p = d$).
* **Nullspace Solution ($x_n$):** Solves $Ax_n = 0$ (linear combination of the $n - r$ special solutions).

$$\begin{aligned} A(x_p + x_n) &= Ax_p + Ax_n \\ &= b + 0 = b \end{aligned}$$

> [!info] Algorithm: Finding $x_p$
> 1. Reduce $\begin{bmatrix} A & b \end{bmatrix}$ to $\begin{bmatrix} R & d \end{bmatrix}$ and verify that all zero rows match $0$ in $d$.
> 2. Set all **free variables equal to $0$**.
> 3. Read the **pivot variables directly from $d$** (since the pivot columns of $R$ form an identity matrix $I$).

> [!warning] Pitfall: Scaling $x_p$
> Never multiply the particular solution $x_p$ by an arbitrary constant $c$. If $c \neq 1$, then $A(cx_p) = cb \neq b$. Only the nullspace part $x_n$ contains arbitrary constants.

> ![[Pasted image 20261019205649.png]]
> *(Complete solution $x = x_p + x_n$: the particular solution $x_p$ shifts the nullspace $N(A)$ away from the origin into a parallel affine subspace.)*
 
---

## Rank and the Four Possibilities

For an $m \times n$ matrix $A$ of rank $r$, the structure of $R$ and the number of solutions to $Ax = b$ fall into four cases (assuming pivot columns come first):

| Case | Rank Condition | Shape & Name | Block Form of $R$ | Nullspace $N(A)$ | Number of Solutions to $Ax = b$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Full Rank** | $r = m = n$ | Square and invertible | $\begin{bmatrix} I \end{bmatrix}$ | $\{0\}$ | **Exactly $1$** ($x = A^{-1}b$) |
| **2. Full Row Rank** | $r = m < n$ | Short and wide (Underdetermined) | $\begin{bmatrix} I & F \end{bmatrix}$ | $n - m$ free variables | **$\infty$ solutions** (for every $b$) |
| **3. Full Column Rank** | $r = n < m$ | Tall and thin (Overdetermined) | $\begin{bmatrix} I \\ 0 \end{bmatrix}$ | $\{0\}$ (no free variables) | **$0$ or $1$ solution** |
| **4. Not Full Rank** | $r < m$ and $r < n$ | Rank deficient | $\begin{bmatrix} I & F \\ 0 & 0 \end{bmatrix}$ | $n - r$ free variables | **$0$ or $\infty$ solutions** |

### Properties of Full Column Rank ($r = n$)
1. All columns of $A$ are pivot columns (linearly independent columns).
2. No free variables or special solutions exist ($N(A) = \{0\}$).
3. If $Ax = b$ has a solution, it is **unique** ($x = x_p$).
4. There are $m - n$ zero rows in $R$, imposing $m - n$ conditions on $b$ for solvability.

### Properties of Full Row Rank ($r = m$)
1. All rows have pivots; $R$ has no zero rows (linearly independent rows).
2. $Ax = b$ is solvable for **every** right-hand side $b$ ($C(A) = \mathbb{R}^m$).
3. There are $n - m$ special solutions in $N(A)$.

---

## Worked Examples

### Example 1: Complete Solution for a $3 \times 4$ System
Find the solvability condition on $b = (b_1, b_2, b_3)$ and the complete solution for $b = (1, 6, 7)$:

$$
A = \begin{bmatrix} 1 & 3 & 0 & 2 \\ 0 & 0 & 1 & 4 \\ 1 & 3 & 1 & 6 \end{bmatrix}
$$

**1. Augment and Reduce to $\begin{bmatrix} R & d \end{bmatrix}$:**
Subtract row 1 from row 3, then subtract row 2 from row 3:

$$
\left[\begin{array}{cccc|c} 1 & 3 & 0 & 2 & b_1 \\ 0 & 0 & 1 & 4 & b_2 \\ 1 & 3 & 1 & 6 & b_3 \end{array}\right] \longrightarrow \left[\begin{array}{cccc|c} 1 & 3 & 0 & 2 & b_1 \\ 0 & 0 & 1 & 4 & b_2 \\ 0 & 0 & 0 & 0 & b_3 - b_1 - b_2 \end{array}\right] = \begin{bmatrix} R & d \end{bmatrix}
$$

* **Solvability Condition:** $b_3 - b_1 - b_2 = 0 \implies b_1 + b_2 = b_3$. For $b = (1, 6, 7)$, $1 + 6 = 7$, so $d = (1, 6, 0)$.
* **Variables:** Pivot variables are $x_1, x_3$ ($r = 2$). Free variables are $x_2, x_4$ ($n - r = 2$).

**2. Particular Solution ($x_p$):**
Set free variables $x_2 = 0, x_4 = 0$. Read pivot variables from $d = (1, 6, 0)$:

$$
x_1 = 1, \quad x_3 = 6 \implies x_p = \begin{bmatrix} 1 \\ 0 \\ 6 \\ 0 \end{bmatrix}
$$

**3. Nullspace Solutions ($x_n$):**
From the free columns of $R$, construct special solutions $s_1$ ($x_2 = 1, x_4 = 0$) and $s_2$ ($x_2 = 0, x_4 = 1$):

$$
s_1 = \begin{bmatrix} -3 \\ 1 \\ 0 \\ 0 \end{bmatrix}, \quad s_2 = \begin{bmatrix} -2 \\ 0 \\ -4 \\ 1 \end{bmatrix}
$$

**4. Complete Solution:**

$$
x = x_p + x_n = \begin{bmatrix} 1 \\ 0 \\ 6 \\ 0 \end{bmatrix} + x_2 \begin{bmatrix} -3 \\ 1 \\ 0 \\ 0 \end{bmatrix} + x_4 \begin{bmatrix} -2 \\ 0 \\ -4 \\ 1 \end{bmatrix}
$$

---

### Example 2: Full Column Rank ($r = n = 2$)
Find the solvability condition and complete solution for:

$$
\left[\begin{array}{cc|c} 1 & 1 & b_1 \\ 1 & 2 & b_2 \\ -2 & -3 & b_3 \end{array}\right]
$$

**1. Elimination to $\begin{bmatrix} R & d \end{bmatrix}$:**

$$
\left[\begin{array}{cc|c} 1 & 1 & b_1 \\ 1 & 2 & b_2 \\ -2 & -3 & b_3 \end{array}\right] \longrightarrow \left[\begin{array}{cc|c} 1 & 1 & b_1 \\ 0 & 1 & b_2 - b_1 \\ 0 & -1 & b_3 + 2b_1 \end{array}\right] \longrightarrow \left[\begin{array}{cc|c} 1 & 0 & 2b_1 - b_2 \\ 0 & 1 & b_2 - b_1 \\ 0 & 0 & b_3 + b_1 + b_2 \end{array}\right]
$$

**2. Solution:**
* **Condition:** $b_1 + b_2 + b_3 = 0$.
* **Nullspace:** $n - r = 2 - 2 = 0$ free variables $\implies x_n = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$.
* **Unique Solution:**

$$
x = x_p = \begin{bmatrix} 2b_1 - b_2 \\ b_2 - b_1 \end{bmatrix}
$$

---

### Example 3: Full Row Rank ($r = m = 2$)
Find the complete solution to:

$$
\begin{aligned}
x + y + z &= 3 \\
x + 2y - z &= 4
\end{aligned}
$$

**1. Elimination to $\begin{bmatrix} R & d \end{bmatrix}$:**

$$
\left[\begin{array}{ccc|c} 1 & 1 & 1 & 3 \\ 1 & 2 & -1 & 4 \end{array}\right] \longrightarrow \left[\begin{array}{ccc|c} 1 & 1 & 1 & 3 \\ 0 & 1 & -2 & 1 \end{array}\right] \longrightarrow \left[\begin{array}{ccc|c} 1 & 0 & 3 & 2 \\ 0 & 1 & -2 & 1 \end{array}\right]
$$

**2. Solution:**
* Pivot variables: $x_1, x_2$. Free variable: $x_3$.
* **Particular solution ($x_3 = 0$):** $x_p = \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix}$.
* **Special solution ($x_3 = 1$):** $s = \begin{bmatrix} -3 \\ 2 \\ 1 \end{bmatrix}$.
* **Complete solution:**

$$
x = x_p + x_n = \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix} + x_3 \begin{bmatrix} -3 \\ 2 \\ 1 \end{bmatrix}
$$

---
# ~={red}References=~
*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 150-158)

