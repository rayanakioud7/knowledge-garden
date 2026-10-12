Date: 2026-06-09
Tags: [[Algebra]], [[Mathematics]], [[Linear Algebra]], [[Equations]], [[Matrix Algebra]]

---

# Determinants and Cramer's Rule

> [!info] Determinant of a $2 \times 2$ Matrix
> For a matrix $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the determinant is:
> $$ \det(A) = |A| = ad - bc $$
> *Mnemonic: (Product of main diagonal) - (Product of anti-diagonal).*

> [!example] Example 1
> Evaluate $\begin{vmatrix} 6 & -3 \\ 2 & 3 \end{vmatrix}$.
> $$ 6(3) - (-3)(2) = 18 - (-6) = 24 $$

---

### Minors and Cofactors

To find the determinant of larger matrices, we use **minors** and **cofactors**.

> [!info] Definitions
> Let $A$ be an $n \times n$ matrix.
> 1.  **Minor ($M_{ij}$)**: The determinant of the submatrix obtained by deleting the $i$-th row and $j$-th column of $A$.
> 2.  **Cofactor ($A_{ij}$)**: The minor multiplied by a sign factor.
>     $$ A_{ij} = (-1)^{i+j} M_{ij} $$

**Checkerboard Sign Pattern**:
The sign $(-1)^{i+j}$ creates a checkerboard pattern of $+$ and $-$ starting with $+$ in the top-left:
$$
\begin{bmatrix} + & - & + & \dots \\ - & + & - & \dots \\ + & - & + & \dots \\ \vdots & \vdots & \vdots & \ddots \end{bmatrix}
$$

---

### Determinant of an $n \times n$ Matrix

> [!info] Cofactor Expansion
> The determinant of $A$ is the sum of the entries of any row (or column) multiplied by their respective cofactors.
>
> **Expanding by the First Row**:
> $$ \det(A) = a_{11}A_{11} + a_{12}A_{12} + \dots + a_{1n}A_{1n} $$

> [!example] Example 2: Determinant of a $3 \times 3$ Matrix
> Evaluate $\det(A)$ for $A = \begin{bmatrix} 2 & 3 & -1 \\ 0 & 2 & 4 \\ -2 & 5 & 6 \end{bmatrix}$.
>
> **Solution**: Expand along the first row (signs: $+ - +$).
> $$
> \begin{aligned}
> \det(A) &= 2 \begin{vmatrix} 2 & 4 \\ 5 & 6 \end{vmatrix} - 3 \begin{vmatrix} 0 & 4 \\ -2 & 6 \end{vmatrix} + (-1) \begin{vmatrix} 0 & 2 \\ -2 & 5 \end{vmatrix} \\
> &= 2(12 - 20) - 3(0 - (-8)) - 1(0 - (-4)) \\
> &= 2(-8) - 3(8) - 4 \\
> &= -16 - 24 - 4 \\
> &= -44
> \end{aligned}
> $$

> [!note] Expansion by Any Row or Column
> You can expand along **any** row or column to get the same result. This is useful if a row or column contains zeros.
>
> **Example 3**: Expanding the matrix from Example 2 along the **second row** (signs: $- + -$).
> $$
> \begin{aligned}
> \det(A) &= -0 \begin{vmatrix} 3 & -1 \\ 5 & 6 \end{vmatrix} + 2 \begin{vmatrix} 2 & -1 \\ -2 & 6 \end{vmatrix} - 4 \begin{vmatrix} 2 & 3 \\ -2 & 5 \end{vmatrix} \\
> &= 0 + 2(12 - 2) - 4(10 - (-6)) \\
> &= 2(10) - 4(16) \\
> &= 20 - 64 \\
> &= -44
> \end{aligned}
> $$

---

## Invertibility Criterion and Transformations

> [!info] Invertibility Criterion
> A square matrix $A$ has an inverse if and only if its determinant is non-zero.
> $$ A \text{ is invertible} \iff \det(A) \neq 0 $$

> [!example] Example 4: Using the Determinant to Show That a Matrix Is Not Invertible
> Show that $A = \begin{bmatrix} 1 & 2 & 0 & 4 \\ 0 & 0 & 0 & 3 \\ 5 & 6 & 2 & 6 \\ 2 & 4 & 0 & 9 \end{bmatrix}$ has no inverse.
>
> **Solution**: Calculate $\det(A)$.
> Expand by the **second row** (since it has three zeros). The only non-zero entry is $a_{24} = 3$.
> The sign for position $(2,4)$ is $(-1)^{2+4} = +1$.
> $$
> \begin{aligned}
> \det(A) &= 3 \cdot \begin{vmatrix} 1 & 2 & 0 \\ 5 & 6 & 2 \\ 2 & 4 & 0 \end{vmatrix}
> \end{aligned}
> $$
> Now expand this $3 \times 3$ minor by the **third column** (two zeros). The entry is 2 at position $(2,3)$. Sign is $(-1)^{2+3} = -1$.
> $$
> \begin{aligned}
> \det(A) &= 3 \left[ -2 \begin{vmatrix} 1 & 2 \\ 2 & 4 \end{vmatrix} \right] \\
> &= 3(-2)(1(4) - 2(2)) \\
> &= -6(0) = 0
> \end{aligned}
> $$
> Since $\det(A) = 0$, $A$ has no inverse.

---

### Row and Column Transformations

> [!info] Property of Determinants
> If matrix $B$ is obtained from $A$ by adding a multiple of one row (or column) to another row (or column), then:
> $$ \det(A) = \det(B) $$
> *This allows us to introduce zeros into a row or column to simplify the expansion.*

> [!example] Example 5: Using Transformations to Calculate a Determinant
> Find $\det(A)$ for $A = \begin{bmatrix} 8 & 2 & -1 & -4 \\ 3 & 5 & -3 & 11 \\ 24 & 6 & 1 & -12 \\ 2 & 2 & 7 & -1 \end{bmatrix}$.
>
> **Solution**:
> **Step 1**: Create zeros in Row 3. Notice Row 3 is almost 3 times Row 1 ($24 \approx 3 \times 8$, $6 \approx 3 \times 2$, $-12 \approx 3 \times -4$).
> Operation: $R_3 - 3R_1 \to R_3$.
> $$
> \det(A) = \begin{vmatrix} 8 & 2 & -1 & -4 \\ 3 & 5 & -3 & 11 \\ 0 & 0 & 4 & 0 \\ 2 & 2 & 7 & -1 \end{vmatrix}
> $$
> Expand by Row 3. The only non-zero term is 4 at $(3,3)$. Sign is $+$.
> $$ \det(A) = 4 \begin{vmatrix} 8 & 2 & -4 \\ 3 & 5 & 11 \\ 2 & 2 & -1 \end{vmatrix} $$
>
> **Step 2**: Simplify the $3 \times 3$ determinant. Add 2 times Column 3 to Column 1 to create zeros.
> Operation: $C_1 + 2C_3 \to C_1$.
> $$
> \det(A) = 4 \begin{vmatrix} 0 & 2 & -4 \\ 25 & 5 & 11 \\ 0 & 2 & -1 \end{vmatrix}
> $$
> Expand by Column 1. The only non-zero term is 25 at $(2,1)$. Sign is $-$.
> $$
> \begin{aligned}
> \det(A) &= 4 \left[ -25 \begin{vmatrix} 2 & -4 \\ 2 & -1 \end{vmatrix} \right] \\
> &= -100 [ (2)(-1) - (-4)(2) ] \\
> &= -100 [ -2 + 8 ] \\
> &= -100(6) = -600
> \end{aligned}
> $$
> Since $\det(A) \neq 0$, the matrix has an inverse.

---
## Cramer's Rule

> [!info] Derivation for Two Variables
> Consider the system:
> $$
> \begin{cases}
> ax + by = r \\
> cx + dy = s
> \end{cases}
> $$
> Solving for $x$ and $y$ by elimination yields:
> $$ x = \frac{rd - bs}{ad - bc}, \quad y = \frac{as - cr}{ad - bc} $$
> The numerators and denominators are determinants of $2 \times 2$ matrices.

---

> [!info] Cramer's Rule for Systems in Two Variables
> The system $\begin{cases} ax + by = r \\ cx + dy = s \end{cases}$ has the solution:
> $$ x = \frac{\begin{vmatrix} r & b \\ s & d \end{vmatrix}}{\begin{vmatrix} a & b \\ c & d \end{vmatrix}}, \quad y = \frac{\begin{vmatrix} a & r \\ c & s \end{vmatrix}}{\begin{vmatrix} a & b \\ c & d \end{vmatrix}} $$
> **Provided that** $D = \begin{vmatrix} a & b \\ c & d \end{vmatrix} \neq 0$.

**Notation**:
-   $D$: Determinant of the **coefficient matrix**.
-   $D_x$: Determinant formed by replacing the **first column** ($x$-coefficients) of $D$ with the constants ($r, s$).
-   $D_y$: Determinant formed by replacing the **second column** ($y$-coefficients) of $D$ with the constants ($r, s$).

$$ x = \frac{|D_x|}{|D|}, \quad y = \frac{|D_y|}{|D|} $$

---

> [!example] Example 6: Using Cramer's Rule (Two Variables)
> Solve $\begin{cases} 2x + 6y = -1 \\ x + 8y = 2 \end{cases}$.
>
> **Solution**:
> 1.  **Find $|D|$**:
>     $$ |D| = \begin{vmatrix} 2 & 6 \\ 1 & 8 \end{vmatrix} = 2(8) - 6(1) = 10 $$
> 2.  **Find $|D_x|$** (replace col 1 with constants):
>     $$ |D_x| = \begin{vmatrix} -1 & 6 \\ 2 & 8 \end{vmatrix} = (-1)(8) - 6(2) = -20 $$
> 3.  **Find $|D_y|$** (replace col 2 with constants):
>     $$ |D_y| = \begin{vmatrix} 2 & -1 \\ 1 & 2 \end{vmatrix} = 2(2) - (-1)(1) = 5 $$
> 4.  **Solve**:
>     $$ x = \frac{-20}{10} = -2, \quad y = \frac{5}{10} = \frac{1}{2} $$

---

> [!info] Cramer's Rule (General Case)
> For a system of $n$ linear equations in $n$ variables $DX = B$:
> $$ x_1 = \frac{|D_{x_1}|}{|D|}, \quad x_2 = \frac{|D_{x_2}|}{|D|}, \quad \dots, \quad x_n = \frac{|D_{x_n}|}{|D|} $$
> where $D_{x_i}$ is the matrix obtained by replacing the **$i$-th column** of the coefficient matrix $D$ with the constant matrix $B$.
> *Condition*: $|D| \neq 0$.

---

> [!example] Example 7: Using Cramer's Rule (Three Variables)
> Solve $\begin{cases} 2x - 3y + 4z = 1 \\ x + 0y + 6z = 0 \\ 3x - 2y + 0z = 5 \end{cases}$.
>
> **Solution**:
> Calculate determinants (note the 0 coefficients for missing variables):
>
> -   **$|D|$**: $\begin{vmatrix} 2 & -3 & 4 \\ 1 & 0 & 6 \\ 3 & -2 & 0 \end{vmatrix} = -38$
> -   **$|D_x|$** (replace col 1 with $1, 0, 5$): $\begin{vmatrix} 1 & -3 & 4 \\ 0 & 0 & 6 \\ 5 & -2 & 0 \end{vmatrix} = -78$
> -   **$|D_y|$** (replace col 2 with $1, 0, 5$): $\begin{vmatrix} 2 & 1 & 4 \\ 1 & 0 & 6 \\ 3 & 5 & 0 \end{vmatrix} = -22$
> -   **$|D_z|$** (replace col 3 with $1, 0, 5$): $\begin{vmatrix} 2 & -3 & 1 \\ 1 & 0 & 0 \\ 3 & -2 & 5 \end{vmatrix} = 13$
>
> **Final Values**:
> $$ x = \frac{-78}{-38} = \frac{39}{19}, \quad y = \frac{-22}{-38} = \frac{11}{19}, \quad z = \frac{13}{-38} = -\frac{13}{38} $$

---
## Areas of Triangles Using Determinants

> [!info] Area of a Triangle Formula
> If a triangle has vertices $(a_1, b_1)$, $(a_2, b_2)$, and $(a_3, b_3)$ in the coordinate plane, its area $\mathcal{A}$ is:
> $$
> \mathcal{A} = \pm \frac{1}{2} \begin{vmatrix} a_1 & b_1 & 1 \\ a_2 & b_2 & 1 \\ a_3 & b_3 & 1 \end{vmatrix}
> $$
> *Note: Choose the sign ($+$ or $-$) that results in a positive area.*

---

> [!example] Example 8: Area of a Triangle
> Find the area of the triangle with vertices $(-1, 4)$, $(3, 6)$, and $(1, 2)$.
>
> **Solution**
> Set up the determinant:
> $$
> \mathcal{A} = \pm \frac{1}{2} \begin{vmatrix} -1 & 4 & 1 \\ 3 & 6 & 1 \\ 1 & 2 & 1 \end{vmatrix}
> $$
> Calculate the determinant (expanding along the first row):
> $$
> \begin{aligned}
> \det &= -1(6 - 2) - 4(3 - 1) + 1(6 - 6) \\
> &= -1(4) - 4(2) + 0 \\
> &= -12
> \end{aligned}
> $$
> Apply the formula:
> $$ \mathcal{A} = \pm \frac{1}{2}(-12) $$
> To make the area positive, choose the negative sign:
> $$ \mathcal{A} = -\frac{1}{2}(-12) = 6 $$
---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 708)