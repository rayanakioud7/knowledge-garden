Date: 2026-06-10
Tags: [[Mathematics]], [[Geometry]]

---

## Parabolas

### Geometric Definition of a Parabola

A **parabola** is defined geometrically as the set of all points in the plane that are equidistant from:
1.  A fixed point $F$ (called the **focus**).
2.  A fixed line $l$ (called the **directrix**).

**Key Features:**
*   **Vertex ($V$):** The point on the parabola that lies halfway between the focus and the directrix.
*   **Axis of Symmetry:** The line that runs through the focus and is perpendicular to the directrix.

![[000/000.Source Material/math/pictures/Pasted image 20260620154314.png|center]]

---

### Deriving the Equation of a Parabola

We consider a parabola with its vertex at the origin $(0,0)$ and a vertical axis of symmetry.
*   Let the focus be $F(0, p)$.
*   Let the directrix be the line $y = -p$.

For any point $P(x, y)$ on the parabola, the distance from $P$ to the focus must equal the distance from $P$ to the directrix.

1.  **Distance to Focus:** Using the distance formula between $P(x,y)$ and $F(0,p)$:
    $$ d_1 = \sqrt{(x - 0)^2 + (y - p)^2} = \sqrt{x^2 + (y - p)^2} $$

2.  **Distance to Directrix:** The vertical distance from $P(x,y)$ to the line $y = -p$:
    $$ d_2 = |y - (-p)| = |y + p| $$

3.  **Equate and Simplify:**
    $$ \sqrt{x^2 + (y - p)^2} = |y + p| $$
    Square both sides:
    $$ x^2 + (y - p)^2 = (y + p)^2 $$
    Expand the squared terms:
    $$ x^2 + y^2 - 2py + p^2 = y^2 + 2py + p^2 $$
    Subtract $y^2 + p^2$ from both sides:
    $$ x^2 - 2py = 2py $$
    Add $2py$ to both sides:
    $$ x^2 = 4py $$

---

### Standard Equations of Parabolas

> [!info] Parabola with Vertical Axis
> The graph of the equation **$x^2 = 4py$** is a parabola with the following properties:
> *   **Vertex:** $V(0, 0)$
> *   **Focus:** $F(0, p)$
> *   **Directrix:** $y = -p$
> *   **Orientation:**
>     *   Opens **upward** if $p > 0$.
>     *   Opens **downward** if $p < 0$.
> *   **Symmetry:** Symmetric about the y-axis.
> 
> ![[000/000.Source Material/math/pictures/Pasted image 20260620154423.png|center]]

> [!example] Example 1: Finding the Equation
> Find the standard equation for the parabola with vertex $V(0,0)$ and focus $F(0, 2)$.
>
> **Solution:**
> Since the focus is $F(0, 2)$, we have $p = 2$.
> Substitute $p$ into the standard form $x^2 = 4py$:
> $$ x^2 = 4(2)y \implies x^2 = 8y $$
> Since $p > 0$, the parabola opens upward.
> 
> ![[000/000.Source Material/math/pictures/Pasted image 20260620154618.png|center]]

> [!example] Example 2: Finding Focus and Directrix
> Find the focus and directrix of the parabola $y = -x^2$.
>
> **Solution:**
> Rewrite the equation in standard form ($x^2 = 4py$):
> $$ x^2 = -y $$
> Compare coefficients: $4p = -1 \implies p = -\frac{1}{4}$.
> *   **Focus:** $F(0, p) \implies F\left(0, -\frac{1}{4}\right)$
> *   **Directrix:** $y = -p \implies y = \frac{1}{4}$
> Since $p < 0$, the parabola opens downward.

---

> [!info] Parabola with Horizontal Axis
> Reflecting the vertical parabola across the line $y=x$ swaps the roles of $x$ and $y$. The graph of the equation **$y^2 = 4px$** is a parabola with:
> *   **Vertex:** $V(0, 0)$
> *   **Focus:** $F(p, 0)$
> *   **Directrix:** $x = -p$
> *   **Orientation:**
>     *   Opens to the **right** if $p > 0$.
>     *   Opens to the **left** if $p < 0$.
> *   **Symmetry:** Symmetric about the x-axis.
>   
>   ![[000/000.Source Material/math/pictures/Pasted image 20260620154551.png|center]]

---

### Focal Diameter

The **focal diameter** (also known as the length of the latus rectum) is the length of the line segment through the focus, perpendicular to the axis, with endpoints on the parabola.
*   The length of the focal diameter is **$|4p|$**.

> [!example] Example 4: Focal Diameter
> Find the focus, directrix, and focal diameter of the parabola $y = \frac{1}{2}x^2$.
>
> **Solution:**
> Rewrite in standard form $x^2 = 4py$:
> $$ 2y = x^2 \implies x^2 = 2y $$
> Identify $4p$:
> $$ 4p = 2 \implies p = \frac{1}{2} $$
> *   **Focus:** $F(0, p) \implies \left(0, \frac{1}{2}\right)$
> *   **Directrix:** $y = -p \implies y = -\frac{1}{2}$
> *   **Focal Diameter:** $|4p| = 2$.
>   
>![[000/000.Source Material/math/pictures/Pasted image 20260620154712.png|center]]
>
> This means the parabola passes through points 1 unit to the left and 1 unit to the right of the focus (since the total width is 2).

---

### Family of Parabolas

The value of $p$ (the distance from vertex to focus) determines the "width" or "steepness" of the parabola.

> [!example] Example 5: A Family of Parabolas
> Consider parabolas with vertex at the origin and foci at $F_1(0, \frac{1}{8})$, $F_2(0, \frac{1}{2})$, $F_3(0, 1)$, and $F_4(0, 4)$.
>
> **Equations:**
> *   $p = 1/8 \implies x^2 = 4(1/8)y \implies x^2 = 0.5y \implies y = 2x^2$ (Narrow)
> *   $p = 1/2 \implies x^2 = 4(1/2)y \implies x^2 = 2y \implies y = 0.5x^2$
> *   $p = 1 \implies x^2 = 4(1)y \implies x^2 = 4y \implies y = 0.25x^2$
> *   $p = 4 \implies x^2 = 4(4)y \implies x^2 = 16y \implies y = 0.0625x^2$ (Wide)
>
> **Conclusion:** The closer the focus is to the vertex (smaller $p$), the **narrower** the parabola. The further the focus is from the vertex (larger $p$), the **wider** the parabola.
> 
> ![[000/000.Source Material/math/pictures/Pasted image 20260620154744.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 766)