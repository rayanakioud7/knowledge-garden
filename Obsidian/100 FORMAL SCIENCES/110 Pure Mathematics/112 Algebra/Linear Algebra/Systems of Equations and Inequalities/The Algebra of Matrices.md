Date: 2026-06-09
Tags: [[Algebra]], [[Mathematics]], [[Linear Algebra]], [[Equations]], [[Matrix Algebra]]

---

## 9.4 The Algebra of Matrices

> [!info] Equality of Matrices
> Two matrices $A = [a_{ij}]$ and $B = [b_{ij}]$ are equal if and only if:
> 1.  They have the same dimension ($m \times n$).
> 2.  Corresponding entries are equal ($a_{ij} = b_{ij}$ for all $i, j$).

> [!example] Example 1: Equal Matrices
> Find $a, b, c, d$ if $\begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 5 & 2 \end{bmatrix}$.
> **Solution**: By equality definition, $a=1, b=3, c=5, d=2$.

---

> [!info] Addition, Subtraction, and Scalar Multiplication
> Let $A = [a_{ij}]$ and $B = [b_{ij}]$ be matrices of the same dimension $m \times n$, and $c$ be a scalar.
>
> 1.  **Sum**: $A + B = [a_{ij} + b_{ij}]$ (Add corresponding entries).
> 2.  **Difference**: $A - B = [a_{ij} - b_{ij}]$ (Subtract corresponding entries).
> 3.  **Scalar Product**: $cA = [ca_{ij}]$ (Multiply every entry by $c$).
>
> *Note: Addition/Subtraction is undefined if dimensions differ.*

> [!example] Example 2: Performing Algebraic Operations
> Given $A = \begin{bmatrix} 2 & -3 \\ 0 & 5 \\ 7 & -1/2 \end{bmatrix}$, $B = \begin{bmatrix} 1 & 0 \\ -3 & 1 \\ 2 & 2 \end{bmatrix}$, $C = \begin{bmatrix} 7 & -3 & 0 \\ 0 & 1 & 5 \end{bmatrix}$, $D = \begin{bmatrix} 6 & 0 & -6 \\ 8 & 1 & 9 \end{bmatrix}$.
>
> **(a)** $A + B = \begin{bmatrix} 3 & -3 \\ -3 & 6 \\ 9 & 3/2 \end{bmatrix}$
> **(b)** $C - D = \begin{bmatrix} 1 & -3 & 6 \\ -8 & 0 & -4 \end{bmatrix}$
> **(c)** $C + A$ is **undefined** (dimensions $2 \times 3$ vs $3 \times 2$).
> **(d)** $5A = \begin{bmatrix} 10 & -15 \\ 0 & 25 \\ 35 & -5/2 \end{bmatrix}$

---

> [!info] Properties of Addition and Scalar Multiplication
> Let $A, B, C$ be $m \times n$ matrices and $c, d$ be scalars.
> -   **Commutative**: $A + B = B + A$
> -   **Associative**: $(A + B) + C = A + (B + C)$
> -   **Scalar Associative**: $c(dA) = (cd)A$
> -   **Distributive**: $(c + d)A = cA + dA$ and $c(A + B) = cA + cB$

> [!example] Example 3: Solving a Matrix Equation
> Solve $2X - A = B$ for $X$, where $A = \begin{bmatrix} 2 & 3 \\ -5 & 1 \end{bmatrix}$ and $B = \begin{bmatrix} 4 & -1 \\ 1 & 3 \end{bmatrix}$.
>
> **Solution**:
> $$
> \begin{aligned}
> 2X &= B + A \quad \leftarrow \text{Add } A \text{ to both sides} \\
> X &= \frac{1}{2}(B + A) \quad \leftarrow \text{Multiply by scalar } 1/2 \\
> X &= \frac{1}{2} \left( \begin{bmatrix} 4 & -1 \\ 1 & 3 \end{bmatrix} + \begin{bmatrix} 2 & 3 \\ -5 & 1 \end{bmatrix} \right) \\
> X &= \frac{1}{2} \begin{bmatrix} 6 & 2 \\ -4 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 1 \\ -2 & 2 \end{bmatrix}
> \end{aligned}
> $$

---
## Multiplication of Matrices

> [!info] Matrix Multiplication Definition
> The product $AB$ is defined **only if** the number of **columns in $A$** equals the number of **rows in $B$**.
>
> If $A$ is $m \times n$ and $B$ is $n \times k$:
> -   **Inner dimensions match** ($n = n$) $\rightarrow$ Product is defined.
> -   **Resulting dimension**: $m \times k$ (outer dimensions).
>
> **Calculation Rule**:
> The entry $c_{ij}$ in the product matrix $C = AB$ is the **inner product** of the $i$-th row of $A$ and the $j$-th column of $B$:
> $$ c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{in}b_{nj} $$

---

> [!example] Example 4: Multiplying Matrices
> Let $A = \begin{bmatrix} 1 & 3 \\ -1 & 0 \end{bmatrix}$ ($2 \times 2$) and $B = \begin{bmatrix} -1 & 5 & 2 \\ 0 & 4 & 7 \end{bmatrix}$ ($2 \times 3$).
>
> **1. Check Dimensions**:
> -   $AB$: $(2 \times \mathbf{2}) \cdot (\mathbf{2} \times 3) \rightarrow$ Inner match. Result is $2 \times 3$.
> -   $BA$: $(2 \times \mathbf{3}) \cdot (\mathbf{2} \times 2) \rightarrow$ Inner mismatch. **Undefined**.
>
> **2. Calculate $AB$**:
> $$ AB = \begin{bmatrix} 1 & 3 \\ -1 & 0 \end{bmatrix} \begin{bmatrix} -1 & 5 & 2 \\ 0 & 4 & 7 \end{bmatrix} = \begin{bmatrix} c_{11} & c_{12} & c_{13} \\ c_{21} & c_{22} & c_{23} \end{bmatrix} $$
>
> -   $c_{11} = (1)(-1) + (3)(0) = -1$
> -   $c_{12} = (1)(5) + (3)(4) = 17$
> -   $c_{13} = (1)(2) + (3)(7) = 23$
> -   $c_{21} = (-1)(-1) + (0)(0) = 1$
> -   $c_{22} = (-1)(5) + (0)(4) = -5$
> -   $c_{23} = (-1)(2) + (0)(7) = -2$
>
> **Result**:
> $$ AB = \begin{bmatrix} -1 & 17 & 23 \\ 1 & -5 & -2 \end{bmatrix} $$

---

> [!info] Properties of Matrix Multiplication
> Let $A, B, C$ be matrices where products are defined.
> -   **Associative**: $A(BC) = (AB)C$
> -   **Distributive**: $A(B + C) = AB + AC$ and $(B + C)A = BA + CA$
>
> > [!warning] Matrix Multiplication is NOT Commutative
> > In general, **$AB \neq BA$**. Even if both products are defined, they may yield different results or different dimensions.

> [!example] Example 5: Matrix Multiplication Is Not Commutative
> Let $A = \begin{bmatrix} 5 & 7 \\ -3 & 0 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 2 \\ 9 & -1 \end{bmatrix}$.
>
> **Calculate $AB$**:
> $$ AB = \begin{bmatrix} 5(1)+7(9) & 5(2)+7(-1) \\ -3(1)+0(9) & -3(2)+0(-1) \end{bmatrix} = \begin{bmatrix} 68 & 3 \\ -3 & -6 \end{bmatrix} $$
>
> **Calculate $BA$**:
> $$ BA = \begin{bmatrix} 1(5)+2(-3) & 1(7)+2(0) \\ 9(5)+(-1)(-3) & 9(7)+(-1)(0) \end{bmatrix} = \begin{bmatrix} -1 & 7 \\ 48 & 63 \end{bmatrix} $$
>
> **Conclusion**: $AB \neq BA$. They don't even share a single entry.

---

### Applications of Matrix Multiplication

> [!example] Example 6: Writing a Linear System as a Matrix Equation
> A system of linear equations can be written as a single matrix equation $AX = B$.
>
> System:
> $$
> \begin{cases}
> x - y + 3z = 4 \\
> x + 2y - 2z = 10 \\
> 3x - y + 5z = 14
> \end{cases}
> $$
>
> Matrix Form:
> $$
> \underbrace{\begin{bmatrix} 1 & -1 & 3 \\ 1 & 2 & -2 \\ 3 & -1 & 5 \end{bmatrix}}_{A}
> \underbrace{\begin{bmatrix} x \\ y \\ z \end{bmatrix}}_{X}
> =
> \underbrace{\begin{bmatrix} 4 \\ 10 \\ 14 \end{bmatrix}}_{B}
> $$
>
> Multiplying $A$ and $X$ recovers the original system equations.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 698)