Date: 2026-06-09
Tags: [[Mathematics]], [[Equations]], [[Algebra]]

---

## Plane Curves and Parametric Equations

> [!info] Definition: Plane Curves and Parametric Equations
> If $f$ and $g$ are functions defined on an interval $I$, the set of points $(f(t), g(t))$ is a **plane curve**.
> The equations:
> $$ x = f(t) \quad y = g(t) \quad (t \in I) $$
> are **parametric equations** for the curve, with parameter $t$.
>
> *Note*: Parametric equations describe not just the shape, but the **orientation** (direction of motion as $t$ increases) and **speed** of tracing.

---

### Sketching and Eliminating the Parameter

To sketch, plot points $(x,y)$ for values of $t$. To identify the curve shape, **eliminate the parameter** to find a rectangular equation relating $x$ and $y$.

> [!example] Example 1: Sketching a Plane Curve
> Sketch $x = t^2 - 3t, \quad y = t - 1$.
>
> **Solution**: Plot points for $t = -2, -1, 0, \dots, 5$.
> - At $t=0, (0, -1)$. At $t=1, (-2, 0)$. At $t=3, (0, 2)$.
> - As $t$ increases, the particle moves along the curve in the direction of the arrows (down then up/right).

![[Pasted image 20260609003120.png|center]]

> [!example] Example 2: Eliminating the Parameter
> Eliminate $t$ from Example 1.
>
> **Solution**: Solve the simpler equation ($y$) for $t$:
> $$ y = t - 1 \implies t = y + 1 $$
> Substitute into the $x$ equation:
> $$
> \begin{aligned}
> x &= (y+1)^2 - 3(y+1) \\
> x &= y^2 + 2y + 1 - 3y - 3 \\
> x &= y^2 - y - 2
> \end{aligned}
> $$
> The curve is a parabola.

---

> [!example] Example 3: Modeling Circular Motion
> Describe path of $x = \cos t, \quad y = \sin t, \quad t \ge 0$.
>
> **Solution**: Use Pythagorean identity $\cos^2 t + \sin^2 t = 1$.
> $$ x^2 + y^2 = (\cos t)^2 + (\sin t)^2 = 1 $$
> The graph is the **unit circle**. As $t$ increases from $0$ to $2\pi$, the point starts at $(1,0)$ and moves counterclockwise.

![[Pasted image 20260609003155.png|center]]

---

> [!warning] Domain Restrictions when Eliminating Parameter
> When eliminating $t$, check the range of the parametric functions. The rectangular equation might represent a larger curve than the parametric one.

> [!example] Example 4: Sketching with Restrictions
> Eliminate parameter for $x = \sin t, \quad y = 2 - \cos^2 t$.
>
> **Solution**:
> Use identity $\cos^2 t = 1 - \sin^2 t$:
> $$ y = 2 - (1 - \sin^2 t) = 1 + \sin^2 t $$
> Since $x = \sin t$, substitute $x^2$ for $\sin^2 t$:
> $$ y = 1 + x^2 $$
> This is a parabola. However, since $x = \sin t$, we must have **$-1 \le x \le 1$**.
> The graph is only the segment of the parabola $y = 1+x^2$ between $x=-1$ and $x=1$. The point moves back and forth along this segment.

![[Pasted image 20260609003241.png|center]]

---

### Finding Parametric Equations

> [!example] Example 5: Parametric Equations for a Line
> Find equations for line with slope 3 passing through $(2, 6)$.
>
> **Solution**:
> Slope $m = \frac{\Delta y}{\Delta x} = 3$. If $x$ increases by $t$, $y$ increases by $3t$.
> $$ x = 2 + t, \quad y = 6 + 3t $$
> Check: $t = x-2 \implies y = 6 + 3(x-2) = 3x$. Correct.

> [!example] Example 6: Parametric Equations for the Cycloid
> Curve traced by point $P$ on circle radius $a$ rolling along x-axis.
>
> **Solution**:
> Let $\theta$ be angle of rotation. Center of circle is $C(a\theta, a)$.
> Using geometry (subtracting horizontal/vertical components from center):
> $$ x = a(\theta - \sin \theta) \quad y = a(1 - \cos \theta) $$

![[Pasted image 20260609003325.png]]

---

### Polar Equations in Parametric Form

To graph a polar equation $r = f(\theta)$ using parametric mode (or to analyze it), substitute $r$ into the conversion formulas $x = r \cos \theta, y = r \sin \theta$.

> [!info] Polar to Parametric Conversion
> The graph of polar equation $r = f(\theta)$ is equivalent to parametric equations:
> $$ x = f(t) \cos t \quad y = f(t) \sin t $$
> (using $t$ as the parameter for $\theta$).

> [!example] Example 8: Parametric Form of a Polar Equation
> Consider $r = \theta, 1 \le \theta \le 10\pi$.
>
> **(a)** Parametric form:
> $$ x = t \cos t, \quad y = t \sin t $$
> **(b)** Graph: This is a **spiral** (Archimedean spiral) starting near origin and expanding outward as $t$ increases.

![[Pasted image 20260609003759.png|center]]

---

### Lissajous Figures
Curves of the form $x = A \sin \omega_1 t, y = B \cos \omega_2 t$.
- Graph lies inside rectangle $[-A, A] \times [-B, B]$.
- Shape depends on ratio $\omega_1 / \omega_2$.
- Example: $x = \sin 2t, y = 2 \cos t$ creates a figure-eight shape (Lissajous figure).

![[Pasted image 20260609003813.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 628)