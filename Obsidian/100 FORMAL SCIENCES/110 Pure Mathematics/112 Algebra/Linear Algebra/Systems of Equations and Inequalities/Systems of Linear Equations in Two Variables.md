Date: 2026-06-09
Tags: [[Mathematics]], [[Algebra]], [[Equations]]

---
## Systems of Linear Equations in Two Variables

> [!info] Definition
> A **system of linear equations** is a set of linear equations involving the same variables.
> A **solution** is an ordered pair $(x, y)$ that satisfies *every* equation in the system.
> **Graphically**: The solution is the point of intersection of the lines.

---

### Methods for Solving Linear Systems

> [!method] Substitution Method
> 1.  **Solve for One Variable**: Choose an equation and isolate one variable (e.g., $y = \dots$).
> 2.  **Substitute**: Plug that expression into the *other* equation.
> 3.  **Solve**: Find the value of the remaining variable.
> 4.  **Back-Substitute**: Plug the found value back into the expression from Step 1 to find the first variable.

> [!example] Example 1
> Solve $\begin{cases} 2x + y = 1 \\ 3x + 4y = 14 \end{cases}$
>
> 1.  Solve Eq 1 for $y$: $y = 1 - 2x$.
> 2.  Substitute into Eq 2: $3x + 4(1 - 2x) = 14$.
> 3.  Solve: $3x + 4 - 8x = 14 \implies -5x = 10 \implies x = -2$.
> 4.  Back-substitute: $y = 1 - 2(-2) = 5$.
> **Solution**: $(-2, 5)$.

---

> [!method] Elimination Method
> 1.  **Adjust Coefficients**: Multiply equations by constants so that the coefficients of one variable are opposites (e.g., $5y$ and $-5y$).
> 2.  **Eliminate**: Add the equations together to cancel that variable.
> 3.  **Solve**: Solve for the remaining variable.
> 4.  **Back-Substitute**: Plug the value into an original equation to find the other variable.

> [!example] Example 2
> Solve $\begin{cases} 3x + 5y = 11 \\ 2x - y = 3 \end{cases}$
>
> 1.  Multiply Eq 2 by 5: $10x - 5y = 15$.
> 2.  Add to Eq 1: $(3x + 10x) + (5y - 5y) = 11 + 15 \implies 13x = 26$.
> 3.  Solve: $x = 2$.
> 4.  Back-substitute into Eq 2: $2(2) - y = 3 \implies 4 - y = 3 \implies y = 1$.
> **Solution**: $(2, 1)$.

---

> [!method] Graphical Method
> 1.  **Graph**: Plot both equations on the same coordinate plane (usually requires solving for $y$ first).
> 2.  **Intersect**: Identify the coordinates of the intersection point.
> *Note: This method provides approximate solutions unless the intersection is on exact grid lines.*

![[Pasted image 20260609181128.png|center|344]]

---

### Number of Solutions

A system of two linear equations in two variables has exactly one of the following outcomes:

| Case                             | Graphical Interpretation              | Algebraic Result                            | Terminology              |
| :------------------------------- | :------------------------------------ | :------------------------------------------ | :----------------------- |
| **a. One Solution**              | Lines intersect at a single point.    | You find a unique $(x, y)$.                 | Consistent & Independent |
| **b. No Solution**               | Lines are parallel (never intersect). | You get a false statement (e.g., $0 = 29$). | Inconsistent             |
| **c. Infinitely Many Solutions** | Lines coincide (are the same line).   | You get a true identity (e.g., $0 = 0$).    | Dependent                |
![[Pasted image 20260609181200.png]]

> [!example] Example 5: No Solution
> $\begin{cases} 8x - 2y = 5 \\ -12x + 3y = 7 \end{cases}$
> Multiply Eq 1 by 3 and Eq 2 by 2:
> $\begin{cases} 24x - 6y = 15 \\ -24x + 6y = 14 \end{cases}$
> Add them: $0 = 29$. This is false.
> **Conclusion**: The system is inconsistent; lines are parallel.

> [!example] Example 6: Infinitely Many Solutions
> $\begin{cases} 3x - 6y = 12 \\ 4x - 8y = 16 \end{cases}$
> Both equations simplify to $x - 2y = 4$ (or $y = \frac{1}{2}x - 2$).
> **Conclusion**: The lines coincide.
> **Solution Set**: $(t, \frac{1}{2}t - 2)$ for any real number $t$.


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 666)