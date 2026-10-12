Date: 2026-06-09
Tags: [[Mathematics]], [[Algebra]], [[Equations]], [[Carl Friedrich Gauss]]

---

## Systems of Linear Equations in Several Variables

> [!info] Linear Equation in $n$ Variables
> An equation of the form:
> $$ a_1x_1 + a_2x_2 + \dots + a_nx_n = c $$
> where $a_i$ and $c$ are real numbers.
> - For 3 or 4 variables, we typically use $x, y, z, w$.
> - **Linear**: Variables are to the first power, no products of variables, no roots of variables.

---

> [!info] Triangular Form
> A system is in **triangular form** if it has a "stair-step" pattern where variables are eliminated sequentially.
> Example (3 variables):
> $$
> \begin{cases}
> x - 2y - z = 1 \\
> \quad \quad y + 2z = 5 \\
> \quad \quad \quad \quad \quad z = 3
> \end{cases}
> $$

### Solving by Back-Substitution

Used when the system is already in triangular form. Solve the last equation, then substitute that value into the previous equation, working upward.

> [!example] Example 1: Solving a Triangular System
> Solve:
> $$
> \begin{cases}
> x - 2y - z = 1 \quad &(\text{Eq 1}) \\
> \quad \quad y + 2z = 5 \quad &(\text{Eq 2}) \\
> \quad \quad \quad \quad \quad z = 3 \quad &(\text{Eq 3})
> \end{cases}
> $$
>
> **Solution**:
> 1.  From Eq 3: **$z = 3$**.
> 2.  Back-substitute $z=3$ into Eq 2:
>     $$ y + 2(3) = 5 \implies y = -1 $$
> 3.  Back-substitute $y=-1, z=3$ into Eq 1:
>     $$ x - 2(-1) - 3 = 1 \implies x + 2 - 3 = 1 \implies x = 2 $$
> **Solution**: $(2, -1, 3)$.

---

### Gaussian Elimination

If a system is *not* in *triangular form*, we use **Gaussian Elimination** to transform it into an equivalent *triangular system*.

> [!info] Operations That Yield an Equivalent System
> 1.  **Add**: Add a nonzero multiple of one equation to another.
> 2.  **Multiply**: Multiply an equation by a nonzero constant.
> 3.  **Interchange**: Swap the positions of two equations.

> [!example] Example 2: Solving a System of Three Equations
> Solve:
> $$
> \begin{cases}
> x - 2y + 3z = 1 \quad &(\text{Eq 1}) \\
> x + 2y - z = 13 \quad &(\text{Eq 2}) \\
> 3x + 2y - 5z = 3 \quad &(\text{Eq 3})
> \end{cases}
> $$
>
> **Step 1: Eliminate $x$ from Eq 2 and Eq 3.**
> - New Eq 2 = Eq 2 + $(-1) \times$ Eq 1:
>   $$ (x-x) + (2y - (-2y)) + (-z - 3z) = 13 - 1 \implies 4y - 4z = 12 $$
> - New Eq 3 = Eq 3 + $(-3) \times$ Eq 1:
>   $$ (3x-3x) + (2y - (-6y)) + (-5z - 9z) = 3 - 3 \implies 8y - 14z = 0 $$
>
> Current System:
> $$
> \begin{cases}
> x - 2y + 3z = 1 \\
>  \qquad 4y - 4z = 12 \\
>  \qquad 8y - 14z = 0
> \end{cases}
> $$
>
> **Step 2: Eliminate $y$ from the new Eq 3.**
> - New Eq 3 = Eq 3 + $(-2) \times$ Eq 2:
>   $$ (8y - 8y) + (-14z - (-8z)) = 0 - 24 \implies -6z = -24 $$
>
> **Step 3: Simplify and Back-Substitute.**
> Simplify the equations (divide Eq 2 by 4, solve Eq 3 for $z$):
> $$
> \begin{cases}
> x - 2y + 3z = 1 \\
> y - z = 3 \\
> z = 4
> \end{cases}
> $$
> - From Eq 3: **$z = 4$**.
> - Sub into Eq 2: $y - 4 = 3 \implies$ **$y = 7$**.
> - Sub into Eq 1: $x - 2(7) + 3(4) = 1 \implies x - 14 + 12 = 1 \implies$ **$x = 3$**.
>
> **Solution**: $(3, 7, 4)$.

---
## Number of Solutions of a Linear System

In three variables, the graph of a linear equation is a **plane**. Solving a system of three equations corresponds to finding the intersection of three planes.

> [!info] Possible Outcomes
> For any linear system, exactly one of the following is true:
> 1.  **Exactly one solution**: The planes intersect at a single point.
> 2.  **Infinitely many solutions**: The planes intersect along a line, or all three planes coincide. (System is **dependent**).
> 3.  **No solution**: The planes have no point in common (e.g., parallel planes). (System is **inconsistent**).

![[Pasted image 20260609184002.png|center]]

---

> [!example] Example 3: A System with No Solution (Inconsistent)
> Solve:
> $$
> \begin{cases}
> x + 2y - 2z = 1 \quad &(\text{Eq 1}) \\
> 2x + 2y - z = 6 \quad &(\text{Eq 2}) \\
> 3x + 4y - 3z = 5 \quad &(\text{Eq 3})
> \end{cases}
> $$
>
> **Solution**
> Use Gaussian elimination to reach triangular form.
>
> 1.  **Eliminate $x$ from Eq 2 and Eq 3**:
>     - New Eq 2 = Eq 2 + $(-2) \times$ Eq 1 $\implies -2y + 3z = 4$
>     - New Eq 3 = Eq 3 + $(-3) \times$ Eq 1 $\implies -2y + 3z = 2$
>
> 2.  **Eliminate $y$ from new Eq 3**:
>     - New Eq 3 = Eq 3 + $(-1) \times$ Eq 2
>     - $(-2y - (-2y)) + (3z - 3z) = 2 - 4$
>     - $0 = -2$
>
> **Conclusion**: The statement $0 = -2$ is **false**. No values of $x, y, z$ can satisfy this. The system is inconsistent and has **no solution**.

---

> [!example] Example 4: A System with Infinitely Many Solutions (Dependent)
> Solve:
> $$
> \begin{cases}
> x - y + 5z = -2 \quad &(\text{Eq 1}) \\
> 2x + y + 4z = 2 \quad &(\text{Eq 2}) \\
> 2x + 4y - 2z = 8 \quad &(\text{Eq 3})
> \end{cases}
> $$
>
> **Solution**
> 1.  **Eliminate $x$ from Eq 2 and Eq 3**:
>     - New Eq 2 = Eq 2 + $(-2) \times$ Eq 1 $\implies 3y - 6z = 6$
>     - New Eq 3 = Eq 3 + $(-2) \times$ Eq 1 $\implies 6y - 12z = 12$
>
> 2.  **Eliminate $y$ from new Eq 3**:
>     - New Eq 3 = Eq 3 + $(-2) \times$ Eq 2
>     - $(6y - 6y) + (-12z - (-12z)) = 12 - 12$
>     - $0 = 0$
>
> **Analysis**: The statement $0 = 0$ is **true**. This means the third equation provided no new information (it was a combination of the others). We are left with two equations and three variables.
>
> **Parametric Solution**:
> Solve for $x$ and $y$ in terms of $z$.
> - From simplified Eq 2 ($3y - 6z = 6 \implies y - 2z = 2$):
>   $$ y = 2z + 2 $$
> - Substitute $y$ into Eq 1:
>   $$ x - (2z + 2) + 5z = -2 \implies x + 3z - 2 = -2 \implies x = -3z $$
>
> Let $z = t$ (where $t$ is any real number, called a **parameter**).
> The complete solution is:
> $$
> \begin{aligned}
> x &= -3t \\
> y &= 2t + 2 \\
> z &= t
> \end{aligned}
> $$
> Or as an ordered triple: **$(-3t, 2t + 2, t)$**.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 677)