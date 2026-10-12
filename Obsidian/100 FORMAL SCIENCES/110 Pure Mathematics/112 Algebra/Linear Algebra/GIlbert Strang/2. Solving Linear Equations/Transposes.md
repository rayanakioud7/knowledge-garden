
Date: 2026-10-05
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Transposes]], [[Symmetric Matrices]], [[Permutations]]

---

> [!info] Definition: Transpose ($A^T$)
> The transpose of an $m \times n$ matrix $A$ is an $n \times m$ matrix $A^T$ where the columns of $A^T$ are the rows of $A$.
> 
> 

$$(A^T)_{ij} = A_{ji}$$

### Properties of Transposes

| Operation | Rule |
| --- | --- |
| **Sum** | $(A + B)^T = A^T + B^T$<br> |
| **Product** | $(AB)^T = B^T A^T$<br> |
| **Inverse** | $(A^{-1})^T = (A^T)^{-1}$<br> |

* The transpose of a product comes in **reverse order** (similar to the inverse of a product).



### Inner and Outer Products

Using matrix transpose notation replaces the standard dot product notation:

* **Inner Product (Dot Product):** $x^T y$ yields a $1 \times 1$ scalar.


* **Outer Product:** $x y^T$ yields an $n \times n$ matrix.



> [!abstract] Core Principle: Dot Product Identity
> The inner product of $Ax$ with $y$ equals the inner product of $x$ with $A^T y$.
> 
> 

$$(Ax)^T y = x^T (A^T y)$$

## Symmetric Matrices

> [!info] Definition: Symmetric Matrix ($S$)
> A symmetric matrix is a square matrix that equals its own transpose.
> 
> 
$$S^T = S \implies s_{ji} = s_{ij}$$

* **Symmetric Inverses:** The inverse of a symmetric matrix is also symmetric: $(S^{-1})^T = S^{-1}$.


* **Symmetric Products:** For *any* matrix $A$, the products $A^T A$ and $A A^T$ are always square, symmetric matrices.



### The $LDL^T$ Factorization

When a matrix $S$ is symmetric, the standard $A = LDU$ factorization is simplified. The upper triangular matrix $U$ becomes the exact transpose of the lower triangular matrix $L$.

$$S = LDL^T$$

## Permutation Matrices ($P$)

> [!info] Definition: Permutation Matrix ($P$)
> A permutation matrix $P$ has the rows of the identity matrix $I$ in any order. It is used to execute row exchanges.
> 
> 

* There are exactly $n!$ permutation matrices of order $n$.


* **Inverse equals Transpose:** For any permutation matrix, its inverse is its transpose.



$$P^{-1} = P^T \implies P^T P = I$$

## The $PA = LU$ Factorization

When standard Gaussian elimination encounters a zero in the pivot position, row exchanges are required.

> [!abstract] Core Principle: $PA = LU$
> If $A$ is invertible, a permutation matrix $P$ can reorder its rows in advance so that standard elimination succeeds without any further exchanges.
> 
> 
$$PA = LU$$

* $P$: Permutation matrix (reorders the rows of $A$).


* $L$: Lower triangular matrix (contains the multipliers).


* $U$: Upper triangular matrix (contains the pivots on the diagonal).



**Process:**

1. Collect all necessary row exchanges into a single permutation matrix $P$.


2. Multiply $PA$ to place the rows in the correct order.


3. Factor $PA$ normally into $LU$.



---

# ~={red}References=~

*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 109-115)