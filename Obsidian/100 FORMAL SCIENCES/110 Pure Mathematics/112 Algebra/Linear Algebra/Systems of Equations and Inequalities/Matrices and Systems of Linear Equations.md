Date: 2026-06-09
Tags: [[Algebra]], [[Mathematics]], [[Linear Algebra]], [[Equations]], [[Matrix Algebra]], [[Carl Friedrich Gauss|Gauss]]

---

## Matrices and Systems of Linear Equations

> [!info] Definition of a Matrix
> An **$m \times n$ matrix** is a rectangular array of numbers with $m$ rows and $n$ columns.
> - **Dimension**: Written as $m \times n$.
> - **Entry $a_{ij}$**: The number in the $i$-th row and $j$-th column.

![[Pasted image 20260609194414.png|center]]
### The Augmented Matrix
A linear system can be represented compactly by an **augmented matrix**, which contains only the coefficients and constants.
- Missing variables correspond to a **0** entry.

**Example**:
System:
$$
\begin{cases}
3x - 2y + z = 5 \\
x + 3y - z = 0 \\
-x + 0y + 4z = 11
\end{cases}
\quad \longrightarrow \quad
\text{Augmented Matrix:} \quad
\left[ \begin{array}{rrr|r}
3 & -2 & 1 & 5 \\
1 & 3 & -1 & 0 \\
-1 & 0 & 4 & 11
\end{array} \right]
$$

---

### Elementary Row Operations
Operations on the augmented matrix that correspond to operations on the linear system (yielding an equivalent system).

| Operation | Notation | Description |
| :--- | :--- | :--- |
| **Add** | $R_i + kR_j \to R_i$ | Add $k$ times row $j$ to row $i$. |
| **Multiply** | $kR_i$ | Multiply row $i$ by nonzero constant $k$. |
| **Interchange** | $R_i \leftrightarrow R_j$ | Swap row $i$ and row $j$. |

---

### Gaussian Elimination
A systematic method to solve a linear system by transforming its augmented matrix into **Row-Echelon Form**.

> [!info] Row-Echelon Form (REF)
> A matrix is in REF if:
> 1.  **Leading Entry**: The first nonzero number in each row is a **1**.
> 2.  **Staircase Pattern**: Each leading 1 is to the **right** of the leading 1 in the row above it.
> 3.  **Zero Rows**: Rows consisting entirely of zeros are at the bottom.

> [!info] Reduced Row-Echelon Form (RREF)
> A matrix is in RREF if it is in REF **and**:
> 4.  **Column Zeros**: Every number above and below each leading 1 is a **0**.

![[Pasted image 20260609194730.png]]

**Process**:
1.  Start with the top-left entry. Use row operations to get a leading 1.
2.  Use that leading 1 to create zeros below it in the same column.
3.  Move to the next row and column, create a leading 1, and create zeros below it.
4.  Repeat until the matrix is in REF.
5.  Use **back-substitution** to find the solution.

---

> [!example] Example 2: Solving a System using Row Operations
> System:
> $$
> \begin{cases}
> x - y + 3z = 4 \\
> x + 2y - 2z = 10 \\
> 3x - y + 5z = 14
> \end{cases}
> $$
>
> **Augmented Matrix Steps**:
> 1.  **Eliminate $x$ from R2 and R3**:
>     - $R_2 - R_1 \to R_2$
>     - $R_3 - 3R_1 \to R_3$
>     $$ \left[ \begin{array}{rrr|r} 1 & -1 & 3 & 4 \\ 0 & 3 & -5 & 6 \\ 0 & 2 & -4 & 2 \end{array} \right] $$
>
> 2.  **Simplify R3** (optional but helpful):
>     - $\frac{1}{2}R_3 \to R_3$
>     $$ \left[ \begin{array}{rrr|r} 1 & -1 & 3 & 4 \\ 0 & 3 & -5 & 6 \\ 0 & 1 & -2 & 1 \end{array} \right] $$
>
> 3.  **Eliminate $y$ from R2** (using new R3):
>     - $R_2 - 3R_3 \to R_2$
>     $$ \left[ \begin{array}{rrr|r} 1 & -1 & 3 & 4 \\ 0 & 0 & 1 & 3 \\ 0 & 1 & -2 & 1 \end{array} \right] $$
>
> 4.  **Interchange R2 and R3** to get staircase pattern:
>     - $R_2 \leftrightarrow R_3$
>     - *Row-Echelon Form:*
>     $$ \left[ \begin{array}{rrr|r} 1 & -1 & 3 & 4 \\ 0 & 1 & -2 & 1 \\ 0 & 0 & 1 & 3 \end{array} \right] $$
>
> **Back-Substitution**:
> - From R3: $z = 3$.
> - From R2: $y - 2(3) = 1 \implies y = 7$.
> - From R1: $x - 7 + 3(3) = 4 \implies x = 2$.
> **Solution**: $(2, 7, 3)$.

---

## Gauss-Jordan Elimination

> [!info] Gauss-Jordan Elimination
> A method to solve a linear system by transforming the augmented matrix into **reduced row-echelon form** (RREF).
> - **Advantage**: No back-substitution is required. The solution is read directly from the final matrix.
>
> **Steps**:
> 1. Use elementary row operations to reach **row-echelon form** (REF).
> 2. Starting from the last leading 1, work **upward** to create zeros **above** each leading entry.

**Visualizing the Process** (for a $3 \times 4$ matrix):
$$
\begin{bmatrix} 1 & \blacksquare & \blacksquare & \blacksquare \\ 0 & 1 & \blacksquare & \blacksquare \\ 0 & 0 & 1 & \blacksquare \end{bmatrix}
\xrightarrow{\text{zeros above last 1}}
\begin{bmatrix} 1 & \blacksquare & 0 & \blacksquare \\ 0 & 1 & 0 & \blacksquare \\ 0 & 0 & 1 & \blacksquare \end{bmatrix}
\xrightarrow{\text{zeros above middle 1}}
\begin{bmatrix} 1 & 0 & 0 & \blacksquare \\ 0 & 1 & 0 & \blacksquare \\ 0 & 0 & 1 & \blacksquare \end{bmatrix}
$$

---

> [!example] Example 4: Solving a System Using Reduced Row-Echelon Form
> Solve:
> $$
> \begin{cases}
> 4x + 8y - 4z = 4 \\
> 3x + 8y + 5z = -11 \\
> -2x + y + 12z = -17
> \end{cases}
> $$
>
> **Solution**
> Start with the matrix in row-echelon form (established in previous steps):
> $$
> \left[ \begin{array}{rrr|r}
> 1 & 2 & -1 & 1 \\
> 0 & 1 & 4 & -7 \\
> 0 & 0 & 1 & -2
> \end{array} \right]
> $$
>
> **Step 1: Create zeros above the leading 1 in Row 3.**
> - $R_2 - 4R_3 \to R_2$ (Eliminates the 4)
> - $R_1 + R_3 \to R_1$ (Eliminates the -1)
> $$
> \left[ \begin{array}{rrr|r}
> 1 & 2 & 0 & -1 \\
> 0 & 1 & 0 & 1 \\
> 0 & 0 & 1 & -2
> \end{array} \right]
> $$
>
> **Step 2: Create zero above the leading 1 in Row 2.**
> - $R_1 - 2R_2 \to R_1$ (Eliminates the 2)
> $$
> \left[ \begin{array}{rrr|r}
> 1 & 0 & 0 & -3 \\
> 0 & 1 & 0 & 1 \\
> 0 & 0 & 1 & -2
> \end{array} \right]
> $$
>
> **Result**: The matrix is now in reduced row-echelon form.
> $$ x = -3, \quad y = 1, \quad z = -2 $$

---
## Inconsistent and Dependent Systems

When a system is transformed into row-echelon form, the structure of the matrix reveals the number of solutions.

> [!info] Solutions of a Linear System in Row-Echelon Form
> Let the augmented matrix be in row-echelon form.
>
> 1.  **No Solution (Inconsistent)**:
>     If a row represents the equation $0 = c$ (where $c \neq 0$), the system has no solution.
>     *Matrix form*: $[0 \quad 0 \quad \dots \quad 0 \quad | \quad c]$
>
> 2.  **One Solution**:
>     If every variable corresponds to a leading entry (leading 1), the system has a unique solution found by back-substitution.
>
> 3.  **Infinitely Many Solutions (Dependent)**:
>     If the system is consistent (no $0=c$ row) but not every variable is a leading variable, there are infinitely many solutions.
>     -   **Leading variables**: Correspond to columns with leading 1s.
>     -   **Nonleading variables**: Free to take any value (parameters).
>     -   **Method**: Solve for leading variables in terms of nonleading variables.

![[Pasted image 20260609211346.png]]

---

> [!example] Example 5: A System with No Solution
> Solve:
> $$
> \begin{cases}
> x - 3y + 2z = 12 \\
> 2x - 5y + 5z = 14 \\
> x - 2y + 3z = 20
> \end{cases}
> $$
>
> **Solution**
> Transform to row-echelon form:
> $$
> \left[ \begin{array}{rrr|r}
> 1 & -3 & 2 & 12 \\
> 2 & -5 & 5 & 14 \\
> 1 & -2 & 3 & 20
> \end{array} \right]
> \xrightarrow{R_2 - 2R_1, R_3 - R_1}
> \left[ \begin{array}{rrr|r}
> 1 & -3 & 2 & 12 \\
> 0 & 1 & 1 & -10 \\
> 0 & 1 & 1 & 8
> \end{array} \right]
> $$
> $$
> \xrightarrow{R_3 - R_2}
> \left[ \begin{array}{rrr|r}
> 1 & -3 & 2 & 12 \\
> 0 & 1 & 1 & -10 \\
> 0 & 0 & 0 & 18
> \end{array} \right]
> $$
> The last row corresponds to $0x + 0y + 0z = 18$, or $0 = 18$. This is false.
> **Conclusion**: The system is inconsistent; **no solution**.

---

> [!example] Example 6: A System with Infinitely Many Solutions
> Solve:
> $$
> \begin{cases}
> -3x - 5y + 36z = 10 \\
> -x + 7z = 5 \\
> x + y - 10z = -4
> \end{cases}
> $$
>
> **Solution**
> Transform to reduced row-echelon form (RREF):
> $$
> \left[ \begin{array}{rrr|r}
> 1 & 0 & -7 & -5 \\
> 0 & 1 & -3 & 1 \\
> 0 & 0 & 0 & 0
> \end{array} \right]
> $$
> The last row ($0=0$) adds no information and is dropped.
>
> **Identify Variables**:
> -   Leading variables (columns with 1s): $x, y$.
> -   Nonleading variable: $z$.
>
> **Solve for Leading Variables**:
> $$
> \begin{aligned}
> x - 7z &= -5 \implies x = 7z - 5 \\
> y - 3z &= 1 \implies y = 3z + 1
> \end{aligned}
> $$
> Let $z = t$ (parameter).
> **Complete Solution**:
> $$ x = 7t - 5, \quad y = 3t + 1, \quad z = t $$
> Or as ordered triple: $(7t - 5, 3t + 1, t)$.

---

> [!example] Example 7: A System with Infinitely Many Solutions (4 Variables)
> Solve:
> $$
> \begin{cases}
> x + 2y - 3z - 4w = 10 \\
> x + 3y - 3z - 4w = 15 \\
> 2x + 2y - 6z - 8w = 10
> \end{cases}
> $$
>
> **Solution**
> Transform to RREF:
> $$
> \left[ \begin{array}{rrrr|r}
> 1 & 0 & -3 & -4 & 0 \\
> 0 & 1 & 0 & 0 & 5 \\
> 0 & 0 & 0 & 0 & 0
> \end{array} \right]
> $$
>
> **Identify Variables**:
> -   Leading variables: $x, y$.
> -   Nonleading variables: $z, w$.
>
> **Solve for Leading Variables**:
> $$
> \begin{aligned}
> x - 3z - 4w &= 0 \implies x = 3z + 4w \\
> y &= 5
> \end{aligned}
> $$
> Let $z = s$ and $w = t$ (parameters).
> **Complete Solution**:
> $$ x = 3s + 4t, \quad y = 5, \quad z = s, \quad w = t $$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 685)