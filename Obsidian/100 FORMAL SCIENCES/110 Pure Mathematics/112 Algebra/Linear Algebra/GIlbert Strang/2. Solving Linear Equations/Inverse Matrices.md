
---

Date: 2026-10-05
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Inverse Matrices]], [[Gauss-Jordan Elimination]]

---

## Inverse Matrices

The fundamental idea of an inverse matrix is that it completely reverses or "undoes" the transformation applied by the original matrix.

> [!info] Definition: Inverse Matrix
> A square matrix $A$ is invertible if there exists a matrix $A^{-1}$ of the same size such that:
$$A^{-1}A = I \quad \text{and} \quad AA^{-1} = I$$
> Where $I$ is the identity matrix. If $A^{-1}$ exists, it is called a "two-sided inverse."

If a matrix has an inverse, we can algebraically solve the linear system $Ax = b$ by multiplying both sides by $A^{-1}$, yielding the single, unique solution $x = A^{-1}b$.

### Properties of Invertibility

Not all matrices have inverses. A matrix without an inverse is called **singular**.

| Condition | Description |
| --- | --- |
| **Pivot Test** | An inverse exists if and only if elimination produces a full set of $n$ non-zero pivots. |
| **Uniqueness** | A matrix cannot have two different inverses. If $BA = I$ and $AC = I$, then $B = C$. |
| **Determinant Test** | For a $2 \times 2$ matrix, the determinant $ad - bc$ must not be zero. |
| **Diagonal Matrices** | A diagonal matrix is invertible provided no diagonal entries are zero. The inverse simply contains $1/d_i$ along the diagonal. |

> [!warning] Pitfall: The $Ax = 0$ Test
> If there is a *nonzero* vector $x$ such that $Ax = 0$, then $A$ cannot have an inverse. No matrix can bring the zero vector back to a nonzero vector $x$. If $A$ is invertible, $Ax = 0$ can *only* have the zero solution ($x = 0$).

### The $2 \times 2$ Inverse Formula

For a $2 \times 2$ matrix, the inverse can be computed directly using its determinant:

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

## The Inverse of a Product

When multiplying two invertible matrices $A$ and $B$, their product $AB$ is also invertible. However, the inverse of the product is the product of the inverses in **reverse order**.

> [!abstract] Core Principle: Reverse Order Law
$$(AB)^{-1} = B^{-1}A^{-1}$$
> **Intuition:** Think of operations in real life. If you put on your socks ($B$) and then your shoes ($A$), to reverse the process, you must first take off your shoes ($A^{-1}$) and then take off your socks ($B^{-1}$).

This rule extends to three or more matrices: $(ABC)^{-1} = C^{-1}B^{-1}A^{-1}$.

### Inverses of Elimination Matrices

The inverse of an elementary elimination matrix $E$ is remarkably simple. If $E$ subtracts $5$ times row 1 from row 2, its inverse $E^{-1}$ simply adds $5$ times row 1 back to row 2. You only need to flip the sign of the multiplier.

$$E = \begin{bmatrix} 1 & 0 & 0 \\ -5 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \implies E^{-1} = \begin{bmatrix} 1 & 0 & 0 \\ 5 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

## Calculating $A^{-1}$ by Gauss-Jordan Elimination

While we can solve $Ax = b$ without explicitly finding $A^{-1}$, computing the inverse itself requires solving $AA^{-1} = I$. This means we are solving $n$ systems of equations simultaneously, one for each column of the identity matrix $I$.

> [!abstract] Core Principle: Gauss-Jordan Method
> To find $A^{-1}$, we augment the matrix $A$ with the identity matrix $I$ to form the block matrix $\begin{bmatrix} A & I \end{bmatrix}$. We then perform row operations to reduce $A$ to $I$. Those same row operations automatically transform $I$ into $A^{-1}$.
$$\begin{bmatrix} A & I \end{bmatrix} \xrightarrow{\text{row operations}} \begin{bmatrix} I & A^{-1} \end{bmatrix}$$

### Step-by-Step Gauss-Jordan

Let's find the inverse of $A = \begin{bmatrix} 2 & 3 \\ 4 & 7 \end{bmatrix}$.

1. **Set up the augmented matrix $\begin{bmatrix} A & I \end{bmatrix}$:**
$$\begin{bmatrix} 2 & 3 & | & 1 & 0 \\ 4 & 7 & | & 0 & 1 \end{bmatrix}$$


2. **Forward Elimination (Create zeros below pivots):**
Subtract 2 times row 1 from row 2 to eliminate the 4.
$$\begin{bmatrix} 2 & 3 & | & 1 & 0 \\ 0 & 1 & | & -2 & 1 \end{bmatrix} \quad \text{(This is } \begin{bmatrix} U & L^{-1} \end{bmatrix})$$


3. **Upward Elimination (Create zeros above pivots):**
Subtract 3 times row 2 from row 1 to eliminate the 3.
$$\begin{bmatrix} 2 & 0 & | & 7 & -3 \\ 0 & 1 & | & -2 & 1 \end{bmatrix}$$


4. **Normalize Pivots (Divide rows by their pivots):**
Divide row 1 by 2 to get $1$s on the diagonal.
$$\begin{bmatrix} 1 & 0 & | & 3.5 & -1.5 \\ 0 & 1 & | & -2 & 1 \end{bmatrix} \quad \text{(This is } \begin{bmatrix} I & A^{-1} \end{bmatrix})$$



The right half is the inverse matrix $A^{-1}$.

*(Note: Gauss-Jordan is computationally expensive for large systems, requiring $n^3$ operations. If you only need to solve $Ax = b$, standard elimination is much faster).*

## Recognizing Invertible Matrices

Usually, deciding if a matrix is invertible requires doing the work to find a full set of pivots. However, some matrices can be immediately recognized as invertible by inspection.

**Diagonally Dominant Matrices:**
A matrix is diagonally dominant if the absolute value of each diagonal entry $a_{ii}$ is strictly greater than the sum of the absolute values of all other entries in that row.

$$|a_{ii}| > \sum_{j \neq i} |a_{ij}|$$

> [!info] Theorem: Diagonal Dominance
> Every diagonally dominant matrix is invertible.

![[Pasted image 20261005234020.png]]

**Proof Intuition:** If $A$ is diagonally dominant and we assume $Ax = 0$ for a nonzero vector $x$, look at the largest component of $x$, say $x_i$. The row equation would require the diagonal term $a_{ii}x_i$ to be perfectly balanced by the sum of the off-diagonal terms. But because $a_{ii}$ is so strictly large (dominant), the off-diagonal terms physically cannot add up to cancel it out. Therefore, $Ax = 0$ is impossible for a nonzero $x$, meaning $A$ must be invertible.

---

# ~={red}References=~

*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 71-77)