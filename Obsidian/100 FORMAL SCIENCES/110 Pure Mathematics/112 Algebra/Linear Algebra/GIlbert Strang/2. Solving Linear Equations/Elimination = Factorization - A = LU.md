
---

Date: 2026-10-05
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[LU Factorization]], [[Computational Cost]]

---

## Elimination = Factorization: $A = LU$

Many key ideas in linear algebra, when examined closely, are actually factorizations of a matrix. The most important factorization in practice comes directly from Gaussian elimination: the original matrix $A$ becomes the product of two triangular matrices, $L$ and $U$.

> [!abstract] Core Principle: LU Factorization
> The forward elimination process that reduces a matrix $A$ to an upper triangular matrix $U$ can be reversed. The matrix that reverses these steps is a lower triangular matrix $L$.
> 
> 
$$A = LU$$
> Where $L$ is lower triangular and $U$ is upper triangular.
> 
> 

### The Mechanics of $L$

In a $3 \times 3$ system without row exchanges, forward elimination multiplies $A$ by elementary matrices $E_{ij}$ to produce $U$:

$$E_{32}E_{31}E_{21}A = U$$

To recover $A$ from $U$, we move the $E$ matrices to the other side by multiplying by their inverses:

$$A = (E_{21}^{-1}E_{31}^{-1}E_{32}^{-1})U = LU$$

> [!info] Theorem: The Structure of $L$
> Every inverse matrix $E_{ij}^{-1}$ is lower triangular, with $1$s on the main diagonal and the exact multiplier $\ell_{ij}$ in its off-diagonal position.
> The product of these inverses, $L$, simply collects all the multipliers $\ell_{ij}$ directly into their respective $(i, j)$ positions without mixing them up.
> 
> 

This is the primary reason for working with $L$ instead of the overall elimination matrix $E$. While multiplying forward elimination matrices mixes up the numbers, multiplying their inverses in reverse order keeps the multipliers perfectly separated and unchanged.

### Better Balance: The $LDU$ Factorization

The factorization $A = LU$ is slightly "unsymmetric" because $U$ has the pivots on its diagonal, whereas $L$ has $1$s on its diagonal.

To balance this, we can divide $U$ by a diagonal matrix $D$ that contains the pivots. This leaves a new upper triangular matrix (still conventionally called $U$) that also has $1$s on its diagonal.

$$A = LDU$$

In this triangular factorization, $L$ is lower triangular with $1$s on the diagonal, $D$ is the diagonal matrix of pivots, and $U$ is upper triangular with $1$s on the diagonal.

## Solving Systems Using $LU$

When a computer solves $Ax = b$, it separates the process into two stages. The factors $L$ and $U$ are completely decided by the left side matrix $A$. Once $A$ is factored, the right side $b$ is processed using two triangular systems.

> [!abstract] Core Principle: Two Triangular Systems
> The original system $Ax = b$ can be rewritten as $LUx = b$. This is solved in two fast steps:
> 
> 
> 1. **Forward Substitution:** Solve $Lc = b$ for the intermediate vector $c$.
> 
> 
> 2. **Back Substitution:** Solve $Ux = c$ for the final solution vector $x$.
> 
> 
> 
> 

By saving $L$ and $U$, the memory of the elimination process is preserved, allowing the system to rapidly solve for any new right-side vector $b$ without re-eliminating $A$.

## The Cost of Elimination

A critical practical question in scientific computing is the computation time required for large systems (e.g., $n = 100,000$). The cost is measured in terms of multiplications and subtractions.

| Operation | Mathematical Task | Operation Count (Dense Matrix) | Operation Count (Band Matrix, width $w$) |
| --- | --- | --- | --- |
| **Factor** | Reduce $A$ to $L$ and $U$ | $\approx \frac{1}{3}n^3$<br> | $\approx nw^2$<br> |
| **Solve** | Solve $Lc = b$ and $Ux = c$ | exactly $n^2$<br> | $\approx 2nw$<br> |

> [!warning] Pitfall: Dense vs. Sparse Matrices
> The $\frac{1}{3}n^3$ rule means that a system with $100,000$ variables would take a million seconds (over 11 days) on a standard PC if the matrix is completely dense (full of non-zero entries). However, most massive matrices in practice are **sparse** or **band matrices**.
> For a band matrix with a small bandwidth $w$ (like a tridiagonal matrix where $w=1$), the factorization cost plummets from $\frac{1}{3}n^3$ to just $n$, allowing lightning-fast computations.

---
# ~={red}References=~

*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 107-112)