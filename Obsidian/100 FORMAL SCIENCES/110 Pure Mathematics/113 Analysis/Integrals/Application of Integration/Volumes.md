Date: 2026-08-04
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Antiderivatives]], [[Volume]]

---

## 5.2 Volumes

To find the volume of a solid, we cut it into infinitesimally thin slices (cross-sections) and integrate their areas over a given interval.

### 1. General Definition of Volume

> [!info] Definition of Volume
> Let $S$ be a solid that lies between $x = a$ and $x = b$. If the cross-sectional area of $S$ in the plane $P_x$, through $x$ and perpendicular to the $x$-axis, is $A(x)$, where $A$ is a continuous function, then the **volume** of $S$ is:
> $$ 
> \begin{aligned} 
> V &= \lim_{n \to \infty} \sum_{i=1}^n A(x_i^*) \Delta x = \int_a^b A(x) \, dx 
> \end{aligned} 
> $$

![[Pasted image 20260804083642.png|center]]

![[Pasted image 20260804083656.png|center]]


> [!example] Example 1: Volume of a Sphere
> **Problem:** Show that the volume of a sphere of radius $r$ is $V = \frac{4}{3}\pi r^3$.
> 
> **Solution:**
> Place the sphere at the origin. A cross-section perpendicular to the $x$-axis at a distance $x$ is a circle with radius $y = \sqrt{r^2 - x^2}$.
> The cross-sectional area is:
> $$ A(x) = \pi y^2 = \pi(r^2 - x^2) $$
> Integrating from $-r$ to $r$:
> $$
> \begin{aligned}
> V &= \int_{-r}^r \pi(r^2 - x^2) \, dx \\
> &= 2\pi \int_0^r (r^2 - x^2) \, dx \quad \text{(Since the integrand is even)} \\
> &= 2\pi \left[ r^2x - \frac{x^3}{3} \right]_0^r \\
> &= 2\pi \left( r^3 - \frac{r^3}{3} \right) = \frac{4}{3}\pi r^3
> \end{aligned}
> $$
> 
> ![[Pasted image 20260804083915.png|center]]
> 


---

### 2. Solids of Revolution: The Disk and Washer Methods

When a region is revolved around an axis, the resulting solid is a **solid of revolution**. The cross-sections perpendicular to the axis of rotation are circular.

*   **Disk Method:** If the region is adjacent to the axis of rotation, the cross-section is a solid disk.
    $$ A = \pi (\text{radius})^2 $$
*   **Washer Method:** If the region is detached from the axis of rotation, the cross-section has a hole in the center, forming a washer (annulus).
    $$ A = \pi (\text{outer radius})^2 - \pi (\text{inner radius})^2 $$

> [!example] Example 2: Solid of Revolution (Disk Method, x-axis)
> **Problem:** Find the volume of the solid obtained by rotating about the $x$-axis the region under the curve $y = \sqrt{x}$ from $0$ to $1$.
> 
> **Solution:**
> The cross-section is a disk with radius $r = \sqrt{x}$.
> $$ A(x) = \pi (\sqrt{x})^2 = \pi x $$
> Integrating from $0$ to $1$:
> $$
> \begin{aligned}
> V &= \int_0^1 A(x) \, dx = \int_0^1 \pi x \, dx \\
> &= \pi \left[ \frac{x^2}{2} \right]_0^1 = \frac{\pi}{2}
> \end{aligned}
> $$
> 
> ![[Pasted image 20260804084007.png|center]]

> [!example] Example 3: Solid of Revolution (Disk Method, y-axis)
> **Problem:** Find the volume of the solid obtained by rotating the region bounded by $y = x^3$, $y = 8$, and $x = 0$ about the $y$-axis.
> 
> **Solution:**
> Since we rotate around the $y$-axis, we integrate with respect to $y$. The radius is $x = \sqrt[3]{y}$.
> $$ A(y) = \pi x^2 = \pi (\sqrt[3]{y})^2 = \pi y^{2/3} $$
> Integrating from $y = 0$ to $y = 8$:
> $$
> \begin{aligned}
> V &= \int_0^8 A(y) \, dy = \int_0^8 \pi y^{2/3} \, dy \\
> &= \pi \left[ \frac{3}{5}y^{5/3} \right]_0^8 = \frac{96\pi}{5}
> \end{aligned}
> $$
> 
> ![[Pasted image 20260804084041.png|center]]

> [!example] Example 4: Solid of Revolution (Washer Method)
> **Problem:** The region enclosed by the curves $y = x$ and $y = x^2$ is rotated about the $x$-axis. Find the volume.
> 
> **Solution:**
> The curves intersect at $(0,0)$ and $(1,1)$. The cross-section is a washer.
> Outer radius $= x$
> Inner radius $= x^2$
> $$ A(x) = \pi(x)^2 - \pi(x^2)^2 = \pi(x^2 - x^4) $$
> Integrating from $0$ to $1$:
> $$
> \begin{aligned}
> V &= \int_0^1 A(x) \, dx = \int_0^1 \pi(x^2 - x^4) \, dx \\
> &= \pi \left[ \frac{x^3}{3} - \frac{x^5}{5} \right]_0^1 = \frac{2\pi}{15}
> \end{aligned}
> $$
> 
> ![[Pasted image 20260804084144.png|center]]

> [!example] Example 5: Washer Method (Axis $y = 2$)
> **Problem:** Find the volume of the solid obtained by rotating the region in Example 4 about the line $y = 2$.
> 
> **Solution:**
> Outer radius $= 2 - x^2$ (distance from $y=2$ to lower curve $y=x^2$)
> Inner radius $= 2 - x$ (distance from $y=2$ to upper curve $y=x$)
> $$ A(x) = \pi(2 - x^2)^2 - \pi(2 - x)^2 = \pi(x^4 - 5x^2 + 4x) $$
> Integrating from $0$ to $1$:
> $$
> \begin{aligned}
> V &= \int_0^1 \pi(x^4 - 5x^2 + 4x) \, dx \\
> &= \pi \left[ \frac{x^5}{5} - \frac{5x^3}{3} + \frac{4x^2}{2} \right]_0^1 = \frac{8\pi}{15}
> \end{aligned}
> $$
> 
> ![[Pasted image 20260804084214.png|center]]

---

### 3. Volumes of Solids Not Formed by Revolution

When a solid is not a solid of revolution, we must determine the geometric formula for its cross-sectional area $A(x)$ based on the description of the shape.

> [!example] Example 7: Equilateral Triangle Cross-Sections
> **Problem:** A solid has a circular base of radius $1$. Parallel cross-sections perpendicular to the base are equilateral triangles. Find the volume.
> 
> **Solution:**
> The base is the circle $x^2 + y^2 = 1$. The width of the triangle base is $2y = 2\sqrt{1 - x^2}$.
> The area of an equilateral triangle with side $s$ is $\frac{\sqrt{3}}{4}s^2$. Here, $s = 2\sqrt{1 - x^2}$:
> $$ A(x) = \frac{\sqrt{3}}{4}(2\sqrt{1 - x^2})^2 = \sqrt{3}(1 - x^2) $$
> Integrating from $-1$ to $1$:
> $$
> \begin{aligned}
> V &= \int_{-1}^1 \sqrt{3}(1 - x^2) \, dx = 2\sqrt{3} \int_0^1 (1 - x^2) \, dx \\
> &= 2\sqrt{3} \left[ x - \frac{x^3}{3} \right]_0^1 = \frac{4\sqrt{3}}{3}
> \end{aligned}
> $$
> 
> ![[Pasted image 20260804084441.png|center]]

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 356)