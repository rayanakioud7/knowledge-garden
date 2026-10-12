
---

Date: 2026-09-28
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Matrices]], [[Gaussian Elimination]]

---

## Matrices times Vectors

A linear system is written compactly as $Ax = b$. The matrix $A$ acts on the vector $x$ to produce $b$.

There are two primary ways to compute $Ax$:

* **Row Form (Dot Products):** The $i$-th component of $Ax$ is the dot product of row $i$ of $A$ with $x$.

$$(Ax)_i = (\text{row } i) \cdot x = \sum_{j=1}^n a_{ij}x_j$$

* **Column Form (Linear Combinations):** $Ax$ is a linear combination of the columns of $A$, weighted by the components of $x$.

## Elimination Matrices ($E_{ij}$)

Elimination steps are executed using matrix multiplication. We multiply the system by an **elimination matrix** $E$ to subtract multiples of one equation from another.

> [!info] Definition: Elimination Matrix $E_{ij}$
> The matrix $E_{ij}$ subtracts a multiple $\ell$ of row $j$ from row $i$.
> Form it by taking the identity matrix $I$ and replacing the zero in the $(i, j)$ position with $-\ell$.

**Example:** To subtract $2$ times row 1 from row 2 (multiplier $\ell = 2$), $E_{21}$ has a $-2$ in the $(2, 1)$ position:

$$E_{21} = \begin{bmatrix} 1 & 0 & 0 \\ -2 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Multiplying $E_{21}A$ applies this operation to the entire matrix.

## Permutation Matrices ($P_{ij}$)

When a zero appears in a pivot position, we execute a row exchange using a permutation matrix.

> [!info] Definition: Permutation Matrix $P_{ij}$
> The matrix $P_{ij}$ exchanges row $i$ and row $j$.
> Form it by exchanging row $i$ and row $j$ of the identity matrix $I$.

**Example:** To exchange row 2 and row 3, use $P_{23}$:

$$P_{23} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$$

## The Augmented Matrix

To solve $Ax = b$, row operations applied to $A$ must also apply to $b$.

> [!abstract] Core Principle: The Augmented Matrix
> Enlarge $A$ by attaching $b$ as an extra column: $[A \ b]$.

Elimination matrices act on whole rows of this augmented matrix simultaneously:

$$E [A \ b] = [EA \ Eb]$$

The forward elimination from $A$ to the upper triangular matrix $U$ is a sequence of multiplications:

$$E_{32}E_{31}E_{21}A = U$$

## Rules of Matrix Multiplication

Matrix multiplication dictates how operations can be grouped.

| Property | Rule | Status | Explanation |
| --- | --- | --- | --- |
| **Associative Law** | $A(BC) = (AB)C$ | **True** | You can group multiplications differently: $E(Ax) = (EA)x$. |
| **Commutative Law** | $AB \neq BA$ | **False** | Order matters. Left multiplication acts on rows, right acts on columns. |
| **Column-by-Column** | $AB = A[b_1 \ b_2]$ | **True** | $A$ multiplies each column of $B$ separately: $AB = [Ab_1 \ Ab_2]$. |

> [!warning] Pitfall: Left vs. Right Multiplication
> * Multiplying on the **left** ($EA$) acts on the **rows** of $A$.
> * Multiplying on the **right** ($AE$) acts on the **columns** of $A$.
> 
> 

---

# ~={red}References=~

*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 58-64)

