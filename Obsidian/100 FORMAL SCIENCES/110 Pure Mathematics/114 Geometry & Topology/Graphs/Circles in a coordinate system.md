Date: 2026-05-16
Tags: [[Mathematics]], [[Geometry]]

---
## 1 Write the Standard Form of the Equation of a Circle

A coordinate system allows us to translate geometric statements into algebraic equations. A circle is defined geometrically as a set of points equidistant from a center.

> [!definition] Geometric Definition of a Circle
> A **circle** is the set of all points in the $xy$-plane that are a fixed distance $r$ (the **radius**) from a fixed point $(h, k)$ (the **center**).

### Derivation: From Geometry to Algebra
To find the equation, we use the **Distance Formula**. The distance between any point on the circle $(x, y)$ and the center $(h, k)$ must equal the radius $r$.

$$ \sqrt{(x - h)^2 + (y - k)^2} = r $$

Squaring both sides gives us the standard equation.

> [!info] Standard Form of a Circle
> The equation of a circle with radius $r$ and center $(h, k)$ is:
> $$ (x - h)^2 + (y - k)^2 = r^2 \tag{1} $$

*Diagram showing a circle with center $(h,k)$, a point $(x,y)$ on the rim, and the radius $r$ connecting them.*
![[Pasted image 20260516144014.png]]

---

## Special Cases

### 1. Center at the Origin
If the center is at $(0, 0)$, then $h=0$ and $k=0$.

> [!abstract] Theorem: Circle at Origin
> $$ x^2 + y^2 = r^2 $$

### 2. The Unit Circle
A specific circle with radius $r = 1$ and center at the origin $(0, 0)$.

> [!definition] The Unit Circle
> $$ x^2 + y^2 = 1 $$
>
> **Properties:**
> *   Radius: $1$
> *   Center: $(0,0)$
> *   **Symmetry:** Symmetric with respect to the x-axis, y-axis, and origin.

![[Pasted image 20260516144125.png|center|312]]

---

## Examples

> [!example] EXAMPLE 1: Writing the Standard Equation
> **Problem:** Write the standard form of the equation of the circle with radius $5$ and center $(-3, 6)$.
>
> **Solution:**
> Identify the parameters:
> *   $r = 5$
> *   $h = -3$
> *   $k = 6$
>
> Substitute into the standard form $(x - h)^2 + (y - k)^2 = r^2$:
> $$ (x - (-3))^2 + (y - 6)^2 = 5^2 $$
>
> **Final Equation:**
> $$ (x + 3)^2 + (y - 6)^2 = 25 $$

---
## 2 Graph a Circle

To graph a circle from its equation, you need to identify the **Center** and the **Radius**, then use them to plot key points.

> [!example] EXAMPLE 2: Graphing a Circle
> **Equation:** $(x + 3)^2 + (y - 2)^2 = 16$
>
> **Step 1: Identify Center and Radius**
> Compare to standard form $(x - h)^2 + (y - k)^2 = r^2$:
> $$ (x - (-3))^2 + (y - 2)^2 = 4^2 $$
> *   **Center:** $(-3, 2)$
> *   **Radius:** $r = 4$
>
> **Step 2: Plot 4 Key Points**
> Start at the center $(-3, 2)$ and move $r=4$ units in four directions:
> *   **Up:** $(-3, 2+4) \rightarrow (-3, 6)$
> *   **Down:** $(-3, 2-4) \rightarrow (-3, -2)$
> *   **Left:** $(-3-4, 2) \rightarrow (-7, 2)$
> *   **Right:** $(-3+4, 2) \rightarrow (1, 2)$
>
> ![[Pasted image 20260516144554.png|center]]
>
> **Step 3: Draw the Circle**
> Connect these points with a smooth curve.


---

## Finding the Intercepts of a Circle

To find where a circle crosses the axes, set the other variable to zero and solve.

> [!example] EXAMPLE 3: Finding Intercepts
> **Circle:** $(x + 3)^2 + (y - 2)^2 = 16$
>
> **1. Find x-intercepts (Set $y = 0$)**
> $$
> \begin{aligned}
> (x + 3)^2 + (0 - 2)^2 &= 16 \\
> (x + 3)^2 + 4 &= 16 \\
> (x + 3)^2 &= 12 \\
> x + 3 &= \pm\sqrt{12} = \pm 2\sqrt{3} \\
> x &= -3 \pm 2\sqrt{3}
> \end{aligned}
> $$
> **x-intercepts:** $-3 - 2\sqrt{3} \approx -6.46$ and $-3 + 2\sqrt{3} \approx 0.46$.
>
> **2. Find y-intercepts (Set $x = 0$)**
> $$
> \begin{aligned}
> (0 + 3)^2 + (y - 2)^2 &= 16 \\
> 9 + (y - 2)^2 &= 16 \\
> (y - 2)^2 &= 7 \\
> y - 2 &= \pm\sqrt{7} \\
> y &= 2 \pm \sqrt{7}
> \end{aligned}
> $$
> **y-intercepts:** $2 - \sqrt{7} \approx -0.65$ and $2 + \sqrt{7} \approx 4.65$.

> [!tip] Check the work
> Look back at Figure 51 to verify that the intercepts match the graph visually.

---
## 3 Work with the General Form of the Equation of a Circle

While **Standard Form** $(x-h)^2 + (y-k)^2 = r^2$ is great for graphing, equations are often given in **General Form**. To move between them, we simply expand or factor the equation.

### From Standard to General
If we expand the parentheses of a standard circle equation, we get a polynomial equal to zero.

**Example Expansion:**
$$
\begin{aligned}
(x + 3)^2 + (y - 2)^2 &= 16 \\
(x^2 + 6x + 9) + (y^2 - 4y + 4) &= 16 \\
x^2 + y^2 + 6x - 4y + 13 - 16 &= 0 \\
x^2 + y^2 + 6x - 4y - 3 &= 0
\end{aligned}
$$

> [!info] Definition: General Form
> When the graph is a circle, the equation is in **general form** if written as:
> $$ x^2 + y^2 + ax + by + c = 0 $$

> [!warning] Degenerate Cases
> Not every equation of the form $x^2 + y^2 + ax + by + c = 0$ is a circle!
> *   **Single Point:** $x^2 + y^2 = 0$ is just the point $(0,0)$.
> *   **No Graph:** $x^2 + y^2 = -5$ has no solution (sum of squares cannot be negative).

---

### From General to Standard: Completing the Square
To graph an equation given in General Form, you **must** convert it back to Standard Form. We do this by **completing the square** for both $x$ and $y$.

> [!example] EXAMPLE 4: Graphing a Circle in General Form
> **Equation:** $x^2 + y^2 + 4x - 6y + 12 = 0$
>
> **Step 1: Group and Rearrange**
> Group $x$ terms and $y$ terms. Move the constant to the right side.
> $$ (x^2 + 4x) + (y^2 - 6y) = -12 $$
>
> **Step 2: Complete the Square**
> Add $(\frac{b}{2})^2$ for each variable. **Remember to add these to the right side too!**
> *   For $x$: $(\frac{4}{2})^2 = 4$
> *   For $y$: $(\frac{-6}{2})^2 = 9$
>
> $$ (x^2 + 4x + \mathbf{4}) + (y^2 - 6y + \mathbf{9}) = -12 + \mathbf{4} + \mathbf{9} $$
>
> **Step 3: Factor and Simplify**
> $$ (x + 2)^2 + (y - 3)^2 = 1 $$
>
> **Step 4: Identify Features**
> *   **Center:** $(-2, 3)$
> *   **Radius:** $r = 1$
>
> ![[Pasted image 20260516145224.png]]
>



---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. 34 - 36)