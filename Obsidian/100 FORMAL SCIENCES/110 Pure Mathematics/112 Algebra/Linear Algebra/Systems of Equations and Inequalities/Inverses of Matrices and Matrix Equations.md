Date: 2026-06-09
Tags: [[Algebra]], [[Mathematics]], [[Linear Algebra]], [[Equations]], [[Matrix Algebra]]

---

## Inverses of Matrices and Matrix Equations

> [!info] Identity Matrix
> The **identity matrix** $I_n$ is the $n \times n$ matrix with 1s on the main diagonal and 0s elsewhere. It acts as the multiplicative identity (like the number 1).
> $$ A \cdot I_n = A \quad \text{and} \quad I_n \cdot B = B $$
>
> **Examples**:
> $$ I_2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} $$

---

### Inverse of a $2 \times 2$ Matrix

> [!info] Formula for $2 \times 2$ Inverse
> If $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, then the inverse $A^{-1}$ is:
> $$ A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix} $$
>
> **Determinant**: The quantity $ad - bc$ is the **determinant**.
> - If $ad - bc = 0$, the matrix has **no inverse** (it is singular).

> [!example] Example 3: Finding the Inverse of a $2 \times 2$ Matrix
> Let $A = \begin{bmatrix} 4 & 5 \\ 2 & 3 \end{bmatrix}$.
>
> **Solution**:
> Determinant $= (4)(3) - (5)(2) = 12 - 10 = 2$.
> $$ A^{-1} = \frac{1}{2} \begin{bmatrix} 3 & -5 \\ -2 & 4 \end{bmatrix} = \begin{bmatrix} 3/2 & -5/2 \\ -1 & 2 \end{bmatrix} $$
>
> **Verification**: Calculate $AA^{-1}$ and $A^{-1}A$ to ensure both equal $I_2$.

---

### Inverse of an $n \times n$ Matrix

For larger matrices, use **Gaussian Elimination**.

> [!method] Algorithm for Finding $A^{-1}$
> 1.  Form the augmented matrix $[A \mid I_n]$.
> 2.  Use elementary row operations to transform the left side ($A$) into the identity matrix $I_n$.
> 3.  The right side will automatically transform into $A^{-1}$.
>     $$ [A \mid I_n] \xrightarrow{\text{row ops}} [I_n \mid A^{-1}] $$

> [!example] Example 4: Finding the Inverse of a $3 \times 3$ Matrix
> Let $A = \begin{bmatrix} 1 & -2 & -4 \\ 2 & -3 & -6 \\ -3 & 6 & 15 \end{bmatrix}$.
>
> **Solution**:
> Start with augmented matrix $[A \mid I_3]$:
> $$ \left[ \begin{array}{rrr|rrr} 1 & -2 & -4 & 1 & 0 & 0 \\ 2 & -3 & -6 & 0 & 1 & 0 \\ -3 & 6 & 15 & 0 & 0 & 1 \end{array} \right] $$
>
> Perform row operations to reach reduced row-echelon form on the left:
> 4.  $R_2 - 2R_1 \to R_2$ and $R_3 + 3R_1 \to R_3$
> 5.  Scale $R_3$ by $1/3$
> 6.  Eliminate entries above pivots ($R_1 + 2R_2$, $R_2 - 2R_3$)
>
> Final Matrix:
> $$ \left[ \begin{array}{rrr|rrr} 1 & 0 & 0 & -3 & 2 & 0 \\ 0 & 1 & 0 & -4 & 1 & -2/3 \\ 0 & 0 & 1 & 1 & 0 & 1/3 \end{array} \right] $$
>
> The right side is $A^{-1}$:
> $$ A^{-1} = \begin{bmatrix} -3 & 2 & 0 \\ -4 & 1 & -2/3 \\ 1 & 0 & 1/3 \end{bmatrix} $$
>
> **Verification**: Check that $AA^{-1} = I_3$ and $A^{-1}A = I_3$.

## Matrix Equations

> [!info] Solving a Matrix Equation
> A system of linear equations can be written as a single matrix equation **$AX = B$**, where:
> -   **$A$** is the coefficient matrix.
> -   **$X$** is the variable matrix.
> -   **$B$** is the constant matrix.
>
> If $A$ is a square $n \times n$ matrix with an inverse $A^{-1}$, the solution is found by multiplying both sides by $A^{-1}$ on the **left**:
> $$ X = A^{-1}B $$

**Proof**:
$$
\begin{aligned}
AX &= B \\
A^{-1}(AX) &= A^{-1}B \quad \leftarrow \text{Multiply on left by } A^{-1} \\
(A^{-1}A)X &= A^{-1}B \quad \leftarrow \text{Associative Property} \\
I_n X &= A^{-1}B \quad \leftarrow \text{Property of Inverses} \\
X &= A^{-1}B \quad \leftarrow \text{Property of Identity Matrix}
\end{aligned}
$$

---

> [!example] Example 6: Solving a System Using a Matrix Inverse
> Solve the system:
> $$
> \begin{cases}
> 2x - 5y = 15 \\
> 3x - 6y = 36
> \end{cases}
> $$
>
> **(a) Write as Matrix Equation $AX=B$**:
> $$
> \begin{bmatrix} 2 & -5 \\ 3 & -6 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 15 \\ 36 \end{bmatrix}
> $$
>
> **(b) Solve using $X = A^{-1}B$**:
> First, find $A^{-1}$ using the $2 \times 2$ formula. Determinant $= (2)(-6) - (-5)(3) = -12 + 15 = 3$.
> $$
> A^{-1} = \frac{1}{3} \begin{bmatrix} -6 & 5 \\ -3 & 2 \end{bmatrix}
> $$
> Multiply $A^{-1}$ by $B$:
> $$
> \begin{aligned}
> X &= A^{-1}B \\
> \begin{bmatrix} x \\ y \end{bmatrix} &= \frac{1}{3} \begin{bmatrix} -6 & 5 \\ -3 & 2 \end{bmatrix} \begin{bmatrix} 15 \\ 36 \end{bmatrix} \\
> &= \frac{1}{3} \begin{bmatrix} (-6)(15) + (5)(36) \\ (-3)(15) + (2)(36) \end{bmatrix} \\
> &= \frac{1}{3} \begin{bmatrix} -90 + 180 \\ -45 + 72 \end{bmatrix} \\
> &= \frac{1}{3} \begin{bmatrix} 90 \\ 27 \end{bmatrix} = \begin{bmatrix} 30 \\ 9 \end{bmatrix}
> \end{aligned}
> $$
> **Solution**: $x = 30, y = 9$.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 708)