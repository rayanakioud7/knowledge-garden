Date: 2026-06-10
Tags: [[Mathematics]], [[Algebra]], [[Polynomial Inequalities]]

---

## 9.9 Systems of Inequalities

This section covers how to graphically represent and solve inequalities and systems of inequalities in two variables.

### Graphing a Single Inequality

The graph of an inequality consists of a boundary curve and a shaded region representing the solution set.

**General Steps:**
1.  **Graph the Equation:** Replace the inequality sign with an equals sign ($=$).
    *   Use a **solid curve** for $\le$ or $\ge$ (inclusive).
    *   Use a **dashed curve** for $<$ or $>$ (strict).
2.  **Determine the Region:** Use **test points** on either side of the curve.
    *   If a test point satisfies the inequality, shade the region containing that point.
    *   If it does not satisfy the inequality, shade the opposite side.

> [!example] Example 1: Graphs of Inequalities
>
> **(a) Graph $x^2 + y^2 < 25$**
> *   **Boundary:** The equation $x^2 + y^2 = 25$ is a circle with radius 5 centered at the origin. Since the inequality is strict ($<$), draw a **dashed circle**.
> * ![[000/000.Source Material/math/pictures/Pasted image 20260610173417.png|center]]
> *   **Test Points:**
>     *   Inside point $(0,0)$: $0^2 + 0^2 < 25$ is **True**.
>     *   Outside point $(6,0)$: $6^2 + 0^2 < 25$ ($36 < 25$) is **False**.
> *   **Conclusion:** Shade the region **inside** the circle.
>
> **(b) Graph $x + 2y \ge 5$**
> *   **Boundary:** The equation $x + 2y = 5$ is a line. Since the inequality is inclusive ($\ge$), draw a **solid line**.
> * ![[000/000.Source Material/math/pictures/Pasted image 20260610173431.png|center]]
> *   **Test Points:**
>     *   Point $(0,0)$: $0 + 2(0) \ge 5$ ($0 \ge 5$) is **False**.
>     *   Point $(5,5)$: $5 + 2(5) \ge 5$ ($15 \ge 5$) is **True**.
> *   **Conclusion:** Shade the region **above** the line (the side containing $(5,5)$).

---

### Systems of Inequalities

The solution to a system of inequalities is the set of all points that satisfy **every** inequality in the system simultaneously. Graphically, this is the **intersection** (overlap) of the individual shaded regions.

**Steps to Solve a System:**
1.  **Graph Each Inequality:** Plot all inequalities on the same coordinate plane.
2.  **Find the Intersection:** Identify the region where the shadings overlap. This is the solution set.
3.  **Find the Vertices:** Determine the coordinates of the corner points (vertices) of the solution region by solving the systems of boundary equations.

> [!example] Example 2: A System of Two Inequalities
> Graph the solution of the system and find its vertices:
> $$
> \begin{cases}
> x^2 + y^2 < 25 \\
> x + 2y \ge 5
> \end{cases}
> $$
>
> **Solution:**
> *   **Graphing:** Graph the circle (dashed, shaded inside) and the line (solid, shaded above) from Example 1 on the same axes. The solution is the overlapping region bounded by the line segment and the circular arc.
> * 
>- ![[000/000.Source Material/math/pictures/Pasted image 20260610173508.png|center]]
> **Finding Vertices:**
> To find the "corners" of the region, solve the system of equations for the boundaries:
> $$
> \begin{cases}
> x^2 + y^2 = 25 \\
> x + 2y = 5 \implies x = 5 - 2y
> \end{cases}
> $$
> Substitute $x$ into the circle equation:
> $$ (5 - 2y)^2 + y^2 = 25 $$
> $$ 25 - 20y + 4y^2 + y^2 = 25 $$
> $$ 5y^2 - 20y = 0 $$
> $$ 5y(y - 4) = 0 $$
> So $y = 0$ or $y = 4$.
> *   If $y = 0$, then $x = 5 - 2(0) = 5$. Point: **$(5, 0)$**.
> *   If $y = 4$, then $x = 5 - 2(4) = -3$. Point: **$(-3, 4)$**.
>
> *Note: Since the circle inequality is strict ($<$), the vertices on the circle boundary are technically not part of the solution set (open circles), but they define the corners of the region.*

---

### Systems of Linear Inequalities

A linear inequality is of the form $ax + by \ge c$ (or $\le, >, <$). The solution region is typically a polygon.

> [!example] Example 3: A System of Four Linear Inequalities
> Graph the solution set and label vertices:
> $$
> \begin{cases}
> x + 3y \le 12 \\
> x + y \le 8 \\
> x \ge 0 \\
> y \ge 0
> \end{cases}
> $$
>
> **Solution:**
> *   **Graphing:**
>     *   $x \ge 0, y \ge 0$ restricts the solution to the **first quadrant**.
>     *   Test point $(0,0)$ satisfies $x + 3y \le 12$ ($0 \le 12$) and $x + y \le 8$ ($0 \le 8$). So, shade the region below/left of both lines.
> * ![[000/000.Source Material/math/pictures/Pasted image 20260610173623.png|center]]
> *   **Intersection:** The solution is the quadrilateral region in the first quadrant bounded by the axes and the two lines.
> *   **Vertices:**
>     1.  **Origin:** $(0,0)$.
>     2.  **y-intercept:** The line $x + 3y = 12$ hits the y-axis at **$(0, 4)$**. (Check: is it below $x+y=8$? $0+4 \le 8$, yes).
>     3.  **x-intercept:** The line $x + y = 8$ hits the x-axis at **$(8, 0)$**. (Check: is it below $x+3y=12$? $8+0 \le 12$, yes).
>     4.  **Intersection of lines:**
>         $$ \begin{cases} x + 3y = 12 \\ x + y = 8 \end{cases} $$
>         Subtract the second equation from the first:
>         $$ 2y = 4 \implies y = 2 $$
>         Substitute $y=2$ into $x+y=8$:
>         $$ x + 2 = 8 \implies x = 6 $$
>         Vertex: **$(6, 2)$**.
>  - ![[000/000.Source Material/math/pictures/Pasted image 20260610173639.png|center]]

---

### Bounded vs. Unbounded Regions

*   **Bounded Region:** A region that can be enclosed in a sufficiently large circle (e.g., a triangle or polygon).
*   **Unbounded Region:** A region that extends infinitely and cannot be enclosed in a circle.

> [!example] Example 4: Bounded vs. Unbounded
>
> **(a) Unbounded System:**
> $$
> \begin{cases}
> 10x + 20y \ge 60 \\
> 30x + 20y \ge 100 \\
> 10x + 40y \ge 80 \\
> x \ge 0, \quad y \ge 0
> \end{cases}
> $$
> The solution region is the area **above** all three lines in the first quadrant. It extends infinitely upwards and to the right.
>![[000/000.Source Material/math/pictures/Pasted image 20260610173755.png|center]]
>
> **(b) Bounded System:**
> $$
> \begin{cases}
> 10x + 20y \le 60 \\
> 30x + 20y \ge 100 \\
> 10x + 40y \ge 80 \\
> x \ge 0, \quad y \ge 0
> \end{cases}
> $$
> Changing the first inequality to $\le$ creates a "cap" on the region (the area below the first line but above the others). This forms a small polygon that is **bounded**.
> ![[000/000.Source Material/math/pictures/Pasted image 20260610173809.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 740)