Date: 2026-06-20
Tags: [[Mathematics]], [[Geometry]]

---
## 10.3 Hyperbolas

### Geometric Definition of a Hyperbola

While ellipses are defined by the *sum* of distances from two foci, a **hyperbola** is defined by the *difference* of distances.

> [!info] Geometric Definition
> A hyperbola is the set of all points in the plane, the **difference** of whose distances from two fixed points $F_1$ and $F_2$ (the foci) is a constant.
>
> If $P(x,y)$ is on the hyperbola:
> $$ |d(P, F_1) - d(P, F_2)| = 2a $$

![[000/000.Source Material/math/pictures/Pasted image 20260620175813.png|center|304]]

### Deriving the Equation

By placing the foci on the x-axis at $(\pm c, 0)$ and setting the constant difference to $2a$, we can derive the standard equation. Through algebraic simplification (similar to the ellipse derivation but involving subtraction), we define a new constant $b$ such that $b^2 = c^2 - a^2$ (or equivalently, **$c^2 = a^2 + b^2$**).

This leads to the standard equation for a hyperbola with a horizontal transverse axis:
$$ \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 $$

**Key Properties:**
*   **Vertices:** The x-intercepts are $\pm a$. The points $(a, 0)$ and $(-a, 0)$ are the vertices.
*   **Transverse Axis:** The segment joining the vertices. Its length is $2a$.
*   **Symmetry:** The graph is symmetric about both the x-axis, y-axis, and the origin.
*   **No y-intercepts:** Setting $x=0$ leads to $-y^2/b^2 = 1$, which has no real solution. The graph does not cross the y-axis.

---

### Equations and Graphs of Hyperbolas

> [!info]
> 
> The following table summarizes the properties of hyperbolas centered at the origin. Note the crucial difference in the relationship between $a, b,$ and $c$ compared to ellipses.
> 
> | Feature | Horizontal Transverse Axis | Vertical Transverse Axis |
> | :--- | :--- | :--- |
> | **Equation** | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ | $\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1$ |
> | **Vertices** | $(\pm a, 0)$ | $(0, \pm a)$ |
> | **Foci** | $(\pm c, 0)$ | $(0, \pm c)$ |
> | **Transverse Axis** | Horizontal, length $2a$ | Vertical, length $2a$ |
> | **Asymptotes** | $y = \pm \frac{b}{a}x$ | $y = \pm \frac{a}{b}x$ |
> | **Relationship** | $c^2 = a^2 + b^2$ | $c^2 = a^2 + b^2$ |
> 
> ![[000/000.Source Material/math/pictures/Pasted image 20260620180006.png|center]]
> 

> [!warning] Important Distinction
> For hyperbolas, **$c^2 = a^2 + b^2$**.
> Unlike ellipses, $c$ (distance to foci) is always larger than $a$ (distance to vertices). The foci are always "outside" the vertices relative to the center.

---

### How to Sketch a Hyperbola

Sketching a hyperbola accurately relies on finding the **asymptotes**.

1.  **Sketch the Central Box:** Draw a rectangle centered at the origin passing through $\pm a$ on the transverse axis and $\pm b$ on the conjugate axis.
2.  **Sketch the Asymptotes:** Draw the diagonals of the central box. These lines are the asymptotes ($y = \pm \frac{b}{a}x$ or $y = \pm \frac{a}{b}x$).
3.  **Plot the Vertices:** Mark the intercepts $(\pm a, 0)$ or $(0, \pm a)$.
4.  **Sketch the Hyperbola:** Start at a vertex and draw a curve that approaches the asymptotes as $x$ (or $y$) gets larger. Sketch the other branch symmetrically.

![[000/000.Source Material/math/pictures/Pasted image 20260620180031.png]]

### Asymptotes Explained

Asymptotes are lines that the hyperbola approaches for large values of $x$ and $y$.
For the horizontal hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, solving for $y$ gives:
$$ y = \pm \frac{b}{a}x \sqrt{1 - \frac{a^2}{x^2}} $$
As $x \to \infty$, the term $\frac{a^2}{x^2} \to 0$, so $y \approx \pm \frac{b}{a}x$. This confirms that the diagonals of the central box are indeed the asymptotes.

---
## Examples of Hyperbolas

### Example 1: Horizontal Transverse Axis
**Equation:** $9x^2 - 16y^2 = 144$

**1. Standard Form:**
Divide by 144:
$$ \frac{x^2}{16} - \frac{y^2}{9} = 1 $$

**2. Properties:**
*   **Orientation:** Horizontal ($x^2$ is positive)
*   **Parameters:** $a=4, b=3, c=\sqrt{16+9}=5$
*   **Vertices:** $(\pm 4, 0)$
*   **Foci:** $(\pm 5, 0)$
*   **Asymptotes:** $y = \pm \frac{3}{4}x$

**3. Graphing:**
*   **Calculator:** Graph $y = \pm 3\sqrt{\frac{x^2}{16} - 1}$

![[000/000.Source Material/math/pictures/Pasted image 20260620182438.png|center]]

---

### Example 2: Vertical Transverse Axis
**Equation:** $x^2 - 9y^2 + 9 = 0$

**1. Standard Form:**
Rearrange and divide by $-9$:
$$ \frac{y^2}{1} - \frac{x^2}{9} = 1 $$

**2. Properties:**
*   **Orientation:** Vertical ($y^2$ is positive)
*   **Parameters:** $a=1, b=3, c=\sqrt{1+9}=\sqrt{10}$
*   **Vertices:** $(0, \pm 1)$
*   **Foci:** $(0, \pm \sqrt{10})$
*   **Asymptotes:** $y = \pm \frac{1}{3}x$

**3. Graphing:**
*   **Calculator:** Graph $y = \pm \sqrt{1 + \frac{x^2}{9}}$

![[000/000.Source Material/math/pictures/Pasted image 20260620182509.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 784)