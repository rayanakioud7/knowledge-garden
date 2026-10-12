Date: 2026-06-20
Tags: [[Mathematics]], [[Geometry]], [[Polar Coordinates]]

---
## 10.6 Polar Equations of Conics

### Unified Geometric Definition
A conic section is defined by a fixed point $F$ (focus), a fixed line $l$ (directrix), and a positive constant $e$ (eccentricity).
The conic is the set of all points $P$ such that:
$$ \frac{d(P, F)}{d(P, l)} = e $$

*   **Parabola:** $e = 1$
*   **Ellipse:** $0 < e < 1$
*   **Hyperbola:** $e > 1$

![[000/000.Source Material/math/pictures/Pasted image 20260620232634.png|center]]

---

### Polar Equations of Conics
If the focus is at the origin (pole), the polar equation takes one of the following forms depending on the directrix location:

| Directrix Location | Equation Form |
| :--- | :--- |
| **Vertical** ($x = d$) | $r = \frac{ed}{1 + e \cos \theta}$ |
| **Vertical** ($x = -d$) | $r = \frac{ed}{1 - e \cos \theta}$ |
| **Horizontal** ($y = d$) | $r = \frac{ed}{1 + e \sin \theta}$ |
| **Horizontal** ($y = -d$) | $r = \frac{ed}{1 - e \sin \theta}$ |

**Note:** To identify the conic, ensure the constant term in the denominator is **1**.

---

> [!example] Example 1: Finding a Polar Equation
> **Given:** Parabola ($e=1$), focus at origin, directrix $y = -6$ ($d=6$).
> **Form:** Directrix is $y = -d$, so use $1 - e \sin \theta$.
> $$ r = \frac{1 \cdot 6}{1 - 1 \sin \theta} = \frac{6}{1 - \sin \theta} $$

---

> [!example] Example 2: Identifying and Sketching an Ellipse
> **Equation:** $r = \frac{10}{3 - 2 \cos \theta}$
>
> **1. Standardize:** Divide numerator and denominator by 3.
> $$ r = \frac{10/3}{1 - \frac{2}{3} \cos \theta} $$
> *   $e = 2/3 < 1 \implies$ **Ellipse**.
> *   Directrix is vertical ($x = -d$) because of $-\cos \theta$.
>
> **2. Find Vertices:** Evaluate at $\theta = 0, \pi$.
> *   $\theta = 0: r = \frac{10/3}{1 - 2/3} = \frac{10/3}{1/3} = 10 \implies V_1(10, 0)$
> *   $\theta = \pi: r = \frac{10/3}{1 + 2/3} = \frac{10/3}{5/3} = 2 \implies V_2(2, \pi)$
>
> **3. Key Parameters:**
> *   Major axis length $2a = 10 + 2 = 12 \implies a = 6$.
> *   Center is midpoint of vertices. In Cartesian: $V_1(10,0), V_2(-2,0) \implies$ Center $(4,0)$.
> *   $c = ae = 6(2/3) = 4$. (Distance from center to focus).
> *   $b^2 = a^2 - c^2 = 36 - 16 = 20 \implies b = 2\sqrt{5} \approx 4.47$.
> *   Minor axis length $2b \approx 8.94$.

![[000/000.Source Material/math/pictures/Pasted image 20260620232651.png|center]]

---

> [!example] Example 3: Identifying and Sketching a Hyperbola
> **Equation:** $r = \frac{12}{2 + 4 \sin \theta}$
>
> **1. Standardize:** Divide by 2.
> $$ r = \frac{6}{1 + 2 \sin \theta} $$
> *   $e = 2 > 1 \implies$ **Hyperbola**.
> *   Directrix is horizontal ($y = d$) because of $+\sin \theta$.
>
> **2. Find Vertices:** Evaluate at $\theta = \pi/2, 3\pi/2$.
> *   $\theta = \pi/2: r = \frac{6}{1+2} = 2 \implies V_1(2, \pi/2)$
> *   $\theta = 3\pi/2: r = \frac{6}{1-2} = -6 \implies V_2(-6, 3\pi/2)$
>
> **3. Key Parameters:**
> *   Transverse axis is vertical (along $\theta = \pi/2$).
> *   Vertices in Cartesian: $V_1(0, 2)$ and $V_2(0, 6)$ (since $(-6, 270^\circ)$ reflects to positive y-axis).
> *   Center: Midpoint of $(0,2)$ and $(0,6)$ is $(0,4)$. Polar: $(4, \pi/2)$.
> *   Transverse axis length $2a = |6 - 2| = 4 \implies a = 2$.
> *   $c = ae = 2(2) = 4$. (Distance from center $(0,4)$ to focus $(0,0)$ is 4).
> *   $b^2 = c^2 - a^2 = 16 - 4 = 12 \implies b = \sqrt{12} \approx 3.46$.
> *   Asymptotes: Use central box with $a=2, b=\sqrt{12}$.

![[000/000.Source Material/math/pictures/Pasted image 20260620232706.png|center]]

---

### Rotation of Conics
To rotate a conic counterclockwise by an angle $\alpha$ about the origin, replace $\theta$ with $(\theta - \alpha)$.

> [!example] Example 4: Rotating an Ellipse
> **Original:** $r = \frac{10}{3 - 2 \cos \theta}$ (from Example 2)
> **Rotation:** $\alpha = \pi/4$.
> **New Equation:**
> $$ r = \frac{10}{3 - 2 \cos(\theta - \pi/4)} $$

![[000/000.Source Material/math/pictures/Pasted image 20260620232720.png|center]]

#### Series of conics showing shapes for $e=0.5$ (ellipse), $e=0.86$ (ellipse), $e=1$ (parabola), $e=1.4$ (hyperbola), $e=4$ (hyperbola).

![[000/000.Source Material/math/pictures/Pasted image 20260620232757.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 810)