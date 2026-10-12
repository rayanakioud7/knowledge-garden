Date: 2026-06-10
Tags: [[Mathematics]], [[Algebra]], [[Equations]]

---

## Systems of Nonlinear Equations

> [!info] Overview
> A **system of nonlinear equations** contains at least one equation that is not linear (e.g., involves $x^2$, $y^2$, $xy$, etc.).
> The methods learned for linear systems—**Substitution** and **Elimination**—are still the primary tools for solving them.

---

### Method 1: Substitution Method

This method is particularly useful when one equation is linear and the other is nonlinear.

> [!example] Example 1: Substitution Method
> Find all solutions of the system:
> $$
> \begin{cases}
> x^2 + y^2 = 100 & (\text{Equation 1: Circle}) \\
> 3x - y = 10 & (\text{Equation 2: Line})
> \end{cases}
> $$
>
> **Solution**
>
> 1.  **Solve for one variable**:
>     Solve the linear equation (Eq 2) for $y$:
>     $$ y = 3x - 10 $$
>
> 2.  **Substitute**:
>     Substitute $y = 3x - 10$ into Equation 1:
>     $$ x^2 + (3x - 10)^2 = 100 $$
>
> 3.  **Solve for $x$**:
>     Expand and simplify:
>     $$
>     \begin{aligned}
>     x^2 + (9x^2 - 60x + 100) &= 100 \\
>     10x^2 - 60x &= 0 \\
>     10x(x - 6) &= 0
>     \end{aligned}
>     $$
>     So, $x = 0$ or $x = 6$.
>
> 4.  **Back-substitute**:
>     Find the corresponding $y$ values using $y = 3x - 10$:
>     -   If $x = 0$: $y = 3(0) - 10 = -10$. Point: $(0, -10)$.
>     -   If $x = 6$: $y = 3(6) - 10 = 8$. Point: $(6, 8)$.
>
> **Solutions**: $(0, -10)$ and $(6, 8)$.
>
> ![[Pasted image 20260610152856.png|center]]

---

### Method 2: Elimination Method

This method is useful when both equations have similar nonlinear terms (like $x^2$) that can be cancelled out.

> [!example] Example 2: Elimination Method
> Find all solutions of the system:
> $$
> \begin{cases}
> 3x^2 + 2y = 26 & (\text{Equation 1}) \\
> 5x^2 + 7y = 3 & (\text{Equation 2})
> \end{cases}
> $$
>
> **Solution**
>
> 1.  **Adjust coefficients**:
>     To eliminate $x^2$, multiply Equation 1 by $5$ and Equation 2 by $-3$:
>     $$
>     \begin{aligned}
>     5(3x^2 + 2y) &= 5(26) \implies 15x^2 + 10y = 130 \\
>     -3(5x^2 + 7y) &= -3(3) \implies -15x^2 - 21y = -9
>     \end{aligned}
>     $$
>
> 2.  **Eliminate a variable**:
>     Add the two new equations:
>     $$
>     \begin{array}{r@{\quad}l}
>     15x^2 + 10y = 130 \\
>     -15x^2 - 21y = -9 \\
>     \hline
>     -11y = 121
>     \end{array}
>     $$
>     Solve for $y$:
>     $$ y = -11 $$
>
> 3.  **Back-substitute**:
>     Substitute $y = -11$ into Equation 1:
>     $$
>     \begin{aligned}
>     3x^2 + 2(-11) &= 26 \\
>     3x^2 - 22 &= 26 \\
>     3x^2 &= 48 \\
>     x^2 &= 16 \\
>     x &= \pm 4
>     \end{aligned}
>     $$
>
> **Solutions**: $(-4, -11)$ and $(4, -11)$.
>
> ![[Pasted image 20260610152917.png|center]]

---
## Graphical Method

The graphical method is particularly useful for solving systems of nonlinear equations, especially when algebraic methods are difficult or when approximate solutions are sufficient.

> [!example] Example 3: Graphical Method
> Find all solutions of the system:
> $$
> \begin{cases}
> x^2 - y = 2 \\
> 2x - y = -1
> \end{cases}
> $$
>
> **Solution**
>
> 1.  **Graph each equation**: Solve for $y$ to make graphing easier.
>     $$
>     \begin{cases}
>     y = x^2 - 2 \quad (\text{Parabola}) \\
>     y = 2x + 1 \quad (\text{Line})
>     \end{cases}
>     $$
>     
![[Pasted image 20260610170909.png|center]]
> 1.  **Find intersection points**:
>     Looking at the graph, the curves intersect at two points.
>     -   Point 1: $(-1, -1)$
>     -   Point 2: $(3, 7)$
>
> **Check Your Answers**:
> -   For $(-1, -1)$: $(-1)^2 - (-1) = 1+1=2$ (True); $2(-1) - (-1) = -2+1=-1$ (True).
> -   For $(3, 7)$: $3^2 - 7 = 9-7=2$ (True); $2(3) - 7 = 6-7=-1$ (True).

---

> [!example] Example 4: Solving a System of Equations Graphically
> Find all solutions of the system, rounded to one decimal place:
> $$
> \begin{cases}
> x^2 + y^2 = 12 \quad (\text{Equation 1: Circle}) \\
> y = 2x^2 - 5x \quad (\text{Equation 2: Parabola})
> \end{cases}
> $$
>
> **Solution**
>
> 1.  **Graph each equation**:
>     -   Equation 1 is a circle.
>     -   Equation 2 is a parabola.
>     Using a graphing device, plot both on the same screen (Figure 4).
>
> 2.  **Find intersection points**:
>     -   The graphs clearly intersect in Quadrants I and II.
>     -   Zooming in on the intersections gives approximate coordinates: $(-0.559, 3.419)$ and $(2.847, 1.974)$.
>     -   There appears to be a near-intersection in Quadrant IV. However, zooming in (Figure 5) reveals the curves come very close but do not actually touch.
>
> **Final Solutions** (rounded to nearest tenth):
> $$ (-0.6, 3.4) \quad \text{and} \quad (2.8, 2.0) $$

![[Pasted image 20260610171048.png]]

> [!note] Graphing Circles on Devices
> Most graphing devices require equations in the form $y = f(x)$. To graph a circle like $x^2 + y^2 = 12$:
> 1.  Isolate $y^2$: $y^2 = 12 - x^2$.
> 2.  Take square roots: $y = \pm\sqrt{12 - x^2}$.
> 3.  Graph two separate functions:
>     -   $y = \sqrt{12 - x^2}$ (Top semicircle)
>     -   $y = -\sqrt{12 - x^2}$ (Bottom semicircle)


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 729)