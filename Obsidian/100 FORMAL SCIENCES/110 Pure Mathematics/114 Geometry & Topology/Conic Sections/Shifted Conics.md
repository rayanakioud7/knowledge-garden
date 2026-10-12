Date: 2026-06-20
Tags: [[Mathematics]], [[Geometry]]

---
## 10.4 Shifted Conics

This section extends the study of conic sections (ellipses, parabolas, hyperbolas) from having centers/vertices at the origin $(0,0)$ to being shifted to a point $(h, k)$.

### Shifting Graphs of Equations

To shift the graph of an equation, we replace $x$ and $y$ with shifted terms.

| Replacement | Effect on Graph |
| :--- | :--- |
| $x$ replaced by $x - h$ | Shift **Right** $h$ units |
| $x$ replaced by $x + h$ | Shift **Left** $h$ units |
| $y$ replaced by $y - k$ | Shift **Upward** $k$ units |
| $y$ replaced by $y + k$ | Shift **Downward** $k$ units |

---

### Shifted Ellipses

The standard equation for an ellipse centered at the origin $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ becomes:

$$ \frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1 $$

![[000/000.Source Material/math/pictures/Pasted image 20260620184954.png|center]]

**Center:** $(h, k)$

> [!example] Example 1: Sketching a Shifted Ellipse
> **Equation:** $\frac{(x+1)^2}{4} + \frac{(y-2)^2}{9} = 1$
>
> **1. Identify Center and Shift:**
> *   Center $(h, k) = (-1, 2)$.
> *   This is a shift of the origin ellipse **Left 1, Up 2**.
>
> **2. Identify Axes:**
> *   $a^2 = 9 \implies a = 3$ (Major axis is vertical because 9 is under $y$).
> *   $b^2 = 4 \implies b = 2$.
>
> **3. Find Foci:**
> *   First, find $c$ for the unshifted ellipse: $c^2 = a^2 - b^2 = 9 - 4 = 5 \implies c = \sqrt{5}$.
> *   Foci for origin ellipse are on the y-axis: $(0, \pm\sqrt{5})$.
> *   Apply the shift $(-1, 2)$ to these points:
>     $$ F_1(-1, 2 + \sqrt{5}) \quad \text{and} \quad F_2(-1, 2 - \sqrt{5}) $$
>     
>     
>  ![[000/000.Source Material/math/pictures/Pasted image 20260620185806.png|center]]

---

### Shifted Parabolas

The standard equations for parabolas with vertex at $(h, k)$ are:

![[000/000.Source Material/math/pictures/Pasted image 20260620185019.png|center]]

*   **Vertical Axis:** $(x - h)^2 = 4p(y - k)$
*   **Horizontal Axis:** $(y - k)^2 = 4p(x - h)$

> [!example] Example 3: Graphing a Shifted Parabola
> **Equation:** $x^2 - 4x = 8y - 28$
>
> **1. Complete the Square:**
> To find the standard form, complete the square for the $x$ terms.
> $$ x^2 - 4x + \mathbf{4} = 8y - 28 + \mathbf{4} $$
> $$ (x - 2)^2 = 8y - 24 $$
> $$ (x - 2)^2 = 8(y - 3) $$
>
> **2. Identify Properties:**
> *   **Vertex $(h, k)$:** $(2, 3)$.
> *   **Orientation:** Since $x$ is squared and $p$ is positive, it opens **upward**.
> *   **Find $p$:** $4p = 8 \implies p = 2$.
>
> **3. Key Features:**
> *   **Focus:** $p$ units above the vertex $\implies (2, 3 + 2) = (2, 5)$.
> *   **Directrix:** $p$ units below the vertex $\implies y = 3 - 2 \implies y = 1$.
>   
>   ![[000/000.Source Material/math/pictures/Pasted image 20260620185845.png|center]]

---
### Shifted Hyperbolas

Applying shifts to hyperbolas results in the following standard equations centered at $(h, k)$:

![[000/000.Source Material/math/pictures/Pasted image 20260620185329.png|center]]

*   **Horizontal Transverse Axis:** $\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1$
*   **Vertical Transverse Axis:** $\frac{(x-h)^2}{b^2} - \frac{(y-k)^2}{a^2} = 1$

#### Example 4: Graphing a Shifted Hyperbola

**Equation:** $9x^2 - 72x - 16y^2 - 32y = 16$

**(a) Standard Form (Completing the Square)**
Group terms and complete the square for both $x$ and $y$:
$$ 9(x^2 - 8x + 16) - 16(y^2 + 2y + 1) = 16 + 9(16) - 16(1) $$
$$ 9(x - 4)^2 - 16(y + 1)^2 = 144 $$
Divide by 144 to get standard form:
$$ \frac{(x-4)^2}{16} - \frac{(y+1)^2}{9} = 1 $$

**(b) Key Features**
*   **Center:** $(4, -1)$
*   **Orientation:** Horizontal (since the $x$-term is positive)
*   **Parameters:** $a^2=16 \implies a=4$, $b^2=9 \implies b=3$, $c=\sqrt{16+9}=5$
*   **Vertices:** $(4 \pm 4, -1) \implies (0, -1)$ and $(8, -1)$
*   **Foci:** $(4 \pm 5, -1) \implies (-1, -1)$ and $(9, -1)$
*   **Asymptotes:** $y - k = \pm \frac{b}{a}(x - h)$
    $$ y + 1 = \pm \frac{3}{4}(x - 4) $$
    Simplifying gives: $y = \frac{3}{4}x - 4$ and $y = -\frac{3}{4}x + 2$

**(c) Graphing Calculator**
To graph on a calculator, solve for $y$ using the Quadratic Formula on the original equation ($16y^2 + 32y + (-9x^2 + 72x + 16) = 0$):
$$ y = -1 \pm \frac{3}{4}\sqrt{x^2 - 8x} $$
Graph the two resulting functions:
$$ y = -1 + 0.75\sqrt{x^2 - 8x} \quad \text{and} \quad y = -1 - 0.75\sqrt{x^2 - 8x} $$

![[000/000.Source Material/math/pictures/Pasted image 20260620185955.png|center]]

---
## The General Equation of a Shifted Conic

When the standard equations of shifted conics are expanded, they take the general form:
$$ Ax^2 + Cy^2 + Dx + Ey + F = 0 $$
(where $A$ and $C$ are not both zero).

### Identifying the Conic
By examining the coefficients $A$ and $C$, you can determine the type of conic section (assuming the equation is not degenerate):

| Conic Type | Condition on Coefficients $A$ and $C$ |
| :--- | :--- |
| **Parabola** | $A = 0$ **or** $C = 0$ (exactly one is zero) |
| **Ellipse** | $A$ and $C$ have the **same sign** (Circle if $A = C$) |
| **Hyperbola** | $A$ and $C$ have **opposite signs** |

---

### Degenerate Conics
Sometimes, completing the square reveals that the equation does not represent a standard curve. These are called **degenerate conics**. They can result in:
*   A single point
*   A line or pair of intersecting lines
*   No graph at all (empty set)

> [!example] Example 5: An Equation Leading to a Degenerate Conic
> **Equation:** $9x^2 - y^2 + 18x + 6y = 0$
>
> **Analysis:**
> At first glance, this looks like a **hyperbola** because $x^2$ and $y^2$ have opposite signs ($9$ and $-1$).
>
> **Completing the Square:**
> $$ 9(x^2 + 2x + 1) - (y^2 - 6y + 9) = 0 + 9(1) - 9 $$
> $$ 9(x + 1)^2 - (y - 3)^2 = 0 $$
> $$ (x + 1)^2 - \frac{(y - 3)^2}{9} = 0 $$
>
> **Result:**
> Since the right side is 0, this is not a standard hyperbola. It is a difference of squares:
> $$ (y - 3)^2 = 9(x + 1)^2 $$
> Taking the square root of both sides gives two linear equations:
> $$ y - 3 = \pm 3(x + 1) $$
> 1.  $y = 3(x + 1) + 3 \implies y = 3x + 6$
> 2.  $y = -3(x + 1) + 3 \implies y = -3x$
>
> **Conclusion:** The graph is a **pair of intersecting lines** (a degenerate hyperbola).
> 
> ![[000/000.Source Material/math/pictures/Pasted image 20260620190315.png|center]]

**Note on other degenerates:**
If you complete the square for an equation that looks like an ellipse (e.g., $4x^2 + y^2 - 8x + 2y + 6 = 0$) and end up with something like $(x-1)^2 + \frac{(y+1)^2}{4} = -\frac{1}{4}$, there is **no solution** because the sum of squares cannot be negative. This is also a degenerate conic.


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 792)