Date: 2026-05-09
Tags: [[Mathematics]], [[Geometry]], [[Algebra]]

---

# Rectangular Coordinates

To locate points in a two-dimensional plane, we use a **rectangular** (or **Cartesian**) coordinate system formed by two perpendicular number lines:
- **x-axis**: Horizontal line.
- **y-axis**: Vertical line.
- **Origin ($O$)**: The intersection point $(0, 0)$.

> [!abstract] Ordered Pairs $(x, y)$
> Any point $P$ is located by an ordered pair $(x, y)$:
> - **$x$ (abscissa)**: Signed distance from the y-axis (positive to the right, negative to the left).
> - **$y$ (ordinate)**: Signed distance from the x-axis (positive up, negative down).

![[Pasted image 20260515013341.png|left|276]] Plotting points like (−3,1), (3,2), etc...![[Pasted image 20260515013403.png||307]]

## Quadrants

The axes divide the plane into four sections called **quadrants**. Points on the axes belong to **no quadrant**.

![[Pasted image 20260515013519.png|center]]

![[Pasted image 20260521004619.png]]

| Quadrant | x-coordinate | y-coordinate | Signs |
| :--- | :--- | :--- | :--- |
| **Quadrant I** | Positive | Positive | $(+, +)$ |
| **Quadrant II** | Negative | Positive | $(-, +)$ |
| **Quadrant III** | Negative | Negative | $(-, -)$ |
| **Quadrant IV** | Positive | Negative | $(+, -)$ |

**Special Points:**
- Points on the x-axis have the form $(x, 0)$.
- Points on the y-axis have the form $(0, y)$.
- The origin is $(0, 0)$.

---

## 1 Use the Distance Formula

If the x-axis and y-axis use the same units of measurement (e.g., inches, centimeters), we can measure distances in the xy-plane using the **Distance Formula**.

### Derivation: The Pythagorean Theorem
To find the distance $d$ between two points, imagine a right triangle where $d$ is the hypotenuse.

![[Pasted image 20260515152033.png|center|434]]

1.  **Horizontal leg:** Difference in x-coordinates: $|5 - 1| = 4$.
2.  **Vertical leg:** Difference in y-coordinates: $|6 - 3| = 3$.
3.  **Hypotenuse:** $d^2 = 4^2 + 3^2 = 25 \implies d = 5$.

> [!info] Theorem: Distance Formula
> The distance $d$ between two points $P_1 = (x_1, y_1)$ and $P_2 = (x_2, y_2)$ is:
> $$ d(P_1, P_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$
>
> **In Words:**
> 1. Find the difference of the x-coordinates and square it.
> 2. Find the difference of the y-coordinates and square it.
> 3. Add the squares and take the square root.

General proof showing $P_1, P_2, P_3$ forming a right triangle with legs $|x_2 - x_1|$ and $|y_2 - y_1|$:

![[Pasted image 20260515152123.png]]

Special cases where the line is horizontal or vertical. The formula still holds :

![[Pasted image 20260515152152.png]]

### Properties of Distance
*   **Non-negative:** $d(P_1, P_2) \ge 0$.
*   **Zero Distance:** $d(P_1, P_2) = 0$ if and only if $P_1 = P_2$.
*   **Symmetric:** $d(P_1, P_2) = d(P_2, P_1)$ (order doesn't matter).

---

### EXAMPLE 2 Using the Distance Formula

Find the distance $d$ between $(-4, 5)$ and $(3, 2)$.

$$
\begin{aligned}
d &= \sqrt{[3 - (-4)]^2 + (2 - 5)^2} \\
&= \sqrt{(7)^2 + (-3)^2} \\
&= \sqrt{49 + 9} \\
&= \sqrt{58} \approx 7.62
\end{aligned}
$$

---

### EXAMPLE 3 Using Algebra to Solve Geometry Problems

Given points $A = (-2, 1)$, $B = (2, 3)$, and $C = (3, 1)$.

**(a) Plot the points.**

![[Pasted image 20260515152231.png]]

**(b) Find the length of each side.**
$$
\begin{aligned}
d(A, B) &= \sqrt{[2 - (-2)]^2 + (3 - 1)^2} = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5} \\
d(B, C) &= \sqrt{(3 - 2)^2 + (1 - 3)^2} = \sqrt{1 + 4} = \sqrt{5} \\
d(A, C) &= \sqrt{[3 - (-2)]^2 + (1 - 1)^2} = \sqrt{25 + 0} = 5
\end{aligned}
$$

**(c) Verify it is a right triangle.**
Check the Pythagorean Theorem: $a^2 + b^2 = c^2$.
$$ [d(A, B)]^2 + [d(B, C)]^2 = (\sqrt{20})^2 + (\sqrt{5})^2 = 20 + 5 = 25 $$
$$ [d(A, C)]^2 = 5^2 = 25 $$
Since $20 + 5 = 25$, triangle $ABC$ is a right triangle with the right angle at vertex $B$.

**(d) Find the area.**
Since it's a right triangle, sides $AB$ and $BC$ are the base and height.
$$ \text{Area} = \frac{1}{2}(\text{Base})(\text{Height}) = \frac{1}{2}(2\sqrt{5})(\sqrt{5}) = \frac{1}{2}(2)(5) = 5 \text{ square units} $$

---

## 2 Use the Midpoint Formula

To find the exact center of a line segment connecting two points, we use the **Midpoint Formula**. This formula is derived from the geometric property that the midpoint is equidistant from both endpoints.

> [!abstract] Geometric Derivation
> Consider endpoints $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$, and a midpoint $M(x, y)$.
> Because $M$ is the center, the horizontal distance from $P_1$ to $M$ equals the horizontal distance from $M$ to $P_2$.
>
> $$ x - x_1 = x_2 - x $$
> $$ 2x = x_1 + x_2 \implies x = \frac{x_1 + x_2}{2} $$
>
> The same logic applies vertically: $y = \frac{y_1 + y_2}{2}$.

Diagram showing the derivation using congruent triangles $P_1AM$ and $MBP_2$. Horizontal and vertical legs are shown to be equal length:

![[Pasted image 20260515152907.png|center|310]]

> [!info] Theorem: Midpoint Formula
> The midpoint $M = (x, y)$ of the line segment from $P_1 = (x_1, y_1)$ to $P_2 = (x_2, y_2)$ is:
> $$ M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right) $$
>
> **Key Concept:** The coordinates of the midpoint are simply the **average** of the coordinates of the endpoints.

### EXAMPLE 4 Finding the Midpoint of a Line Segment

Find the midpoint of the line segment from $P_1 = (-5, 5)$ to $P_2 = (3, 1)$.

**Solution**

Apply the formula by averaging the x-coordinates and the y-coordinates.

1.  **Average x:**
    $$ x = \frac{-5 + 3}{2} = \frac{-2}{2} = -1 $$

2.  **Average y:**
    $$ y = \frac{5 + 1}{2} = \frac{6}{2} = 3 $$

The midpoint is **$M = (-1, 3)$**.

Graph plotting points $P_1(-5, 5)$, $P_2(3, 1)$, and their midpoint $M(-1, 3)$ on the line connecting them:

![[Pasted image 20260515153026.png]]

---
## ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. 3 - 5)