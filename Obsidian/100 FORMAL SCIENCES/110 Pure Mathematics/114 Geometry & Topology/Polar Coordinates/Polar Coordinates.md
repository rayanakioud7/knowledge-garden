Date: 2026-06-08
Tags: [[Mathematics]], [[Coordinates]]

---
## 8.1 Polar Coordinates

> [!info] Definition of Polar Coordinates
> The **polar coordinate system** specifies a point $P$ in the plane by:
> - **Pole**: Fixed point $O$ (origin).
> - **Polar axis**: Ray from $O$ (usually positive x-axis).
> - **Coordinates**: $P(r, \theta)$ where:
>   - $r$ is the directed distance from $O$ to $P$.
>   - $\theta$ is the directed angle from the polar axis to segment $\overline{OP}$.
>
> **Sign Conventions**:
> - $\theta > 0$: Counterclockwise rotation.
> - $\theta < 0$: Clockwise rotation.
> - $r < 0$: Point lies $|r|$ units from the pole in the direction **opposite** to the terminal side of $\theta$.

![[Pasted image 20260608160224.png|center]]

---

> [!info] Multiple Representations
> A single point has infinitely many polar representations. For any integer $n$:
> $$ (r, \theta) \equiv (r, \theta + 2n\pi) $$
> $$ (r, \theta) \equiv (-r, \theta + (2n+1)\pi) $$
>
> *Note: $(r, \theta)$ and $(-r, \theta + \pi)$ represent the same point.*

![[Pasted image 20260608160328.png|center|454]]

---

> [!example] Example 1: Plotting Points
> Plot points: (a) $(1, 3\pi/4)$, (b) $(3, -\pi/6)$, (c) $(3, 3\pi)$, (d) $(-4, \pi/4)$.
>
> **Solution**:
> - (d) For $r=-4$, move 4 units in the direction opposite to $\pi/4$ (which is $5\pi/4$).

![[Pasted image 20260608160404.png|center]]

---

> [!example] Example 2: Different Polar Coordinates for the Same Point
> Given $P(2, \pi/3)$. Find other representations with $r > 0$ and $r < 0$.
>
> **Solution**:
> - **$r > 0$**: Add multiples of $2\pi$ to $\theta$.
>   $$ \left(2, \frac{\pi}{3} + 2\pi\right) = \left(2, \frac{7\pi}{3}\right) $$
>   $$ \left(2, \frac{\pi}{3} - 2\pi\right) = \left(2, -\frac{5\pi}{3}\right) $$
> - **$r < 0$**: Replace $r$ with $-r$ and add/subtract $\pi$ to $\theta$.
>   $$ \left(-2, \frac{\pi}{3} + \pi\right) = \left(-2, \frac{4\pi}{3}\right) $$
>   $$ \left(-2, \frac{\pi}{3} - \pi\right) = \left(-2, -\frac{2\pi}{3}\right) $$

![[Pasted image 20260608160513.png]]

---

> [!info] Relationship Between Polar and Rectangular Coordinates
> Assume the polar axis coincides with the positive x-axis.
>
> **Polar to Rectangular**:
> $$ x = r \cos \theta \quad \text{and} \quad y = r \sin \theta $$
>
> **Rectangular to Polar**:
> $$ r^2 = x^2 + y^2 \quad \text{and} \quad \tan \theta = \frac{y}{x} \quad (x \neq 0) $$

![[Pasted image 20260608160641.png|center|303]]

---

> [!example] Example 3: Converting Polar to Rectangular
> Convert $(4, 2\pi/3)$ to rectangular coordinates.
>
> **Solution**:
> Given $r=4, \theta=2\pi/3$:
> $$ x = 4 \cos\left(\frac{2\pi}{3}\right) = 4\left(-\frac{1}{2}\right) = -2 $$
> $$ y = 4 \sin\left(\frac{2\pi}{3}\right) = 4\left(\frac{\sqrt{3}}{2}\right) = 2\sqrt{3} $$
> Rectangular coordinates: $(-2, 2\sqrt{3})$.

---

> [!example] Example 4: Converting Rectangular to Polar
> Convert $(2, -2)$ to polar coordinates.
>
> **Solution**:
> Given $x=2, y=-2$:
> $$ r^2 = 2^2 + (-2)^2 = 8 \implies r = \pm 2\sqrt{2} $$
> $$ \tan \theta = \frac{-2}{2} = -1 $$
> Since the point $(2, -2)$ is in Quadrant IV:
> - If $r > 0$, $\theta = -\pi/4$ (or $7\pi/4$).
> - If $r < 0$, $\theta = 3\pi/4$.
>
> Polar coordinates: $(2\sqrt{2}, -\pi/4)$ or $(-2\sqrt{2}, 3\pi/4)$.

![[Pasted image 20260608160805.png|center]]

---
### Polar Equations

**Polar Equation**: Equation in $r$ and $\theta$.
**Rectangular Equation**: Equation in $x$ and $y$.

> [!example] Example 5: Rectangular to Polar Equation
> Express $x^2 = 4y$ in polar coordinates.
>
> **Solution**:
> Substitute $x = r \cos \theta, y = r \sin \theta$:
> $$
> \begin{aligned}
> (r \cos \theta)^2 &= 4(r \sin \theta) \\
> r^2 \cos^2 \theta &= 4r \sin \theta \\
> r &= \frac{4 \sin \theta}{\cos^2 \theta} \\
> r &= 4 \sec \theta \tan \theta
> \end{aligned}
> $$

---

> [!example] Example 6: Polar to Rectangular Equations
> Express in rectangular coordinates.
>
> **(a)** $r = 5 \sec \theta$
> Multiply by $\cos \theta$:
> $$ r \cos \theta = 5 \implies x = 5 $$
> (Vertical line)
>![[Pasted image 20260608162517.png|center]]
> **(b)** $r = 2 \sin \theta$
> Multiply by $r$:
> $$
> \begin{aligned}
> r^2 &= 2r \sin \theta \\
> x^2 + y^2 &= 2y \\
> x^2 + (y-1)^2 &= 1
> \end{aligned}
> $$
> (Circle of radius 1 centered at $(0,1)$)
>![[Pasted image 20260608162546.png|center]]
> **(c)** $r = 2 + 2 \cos \theta$
> Multiply by $r$:
> $$
> \begin{aligned}
> r^2 &= 2r + 2r \cos \theta \\
> x^2 + y^2 &= 2r + 2x \\
> x^2 + y^2 - 2x &= 2r \\
> (x^2 + y^2 - 2x)^2 &= 4r^2 \\
> (x^2 + y^2 - 2x)^2 &= 4(x^2 + y^2)
> \end{aligned}
> $$
> (Rectangular form is more complex; graphing in polar is preferred.)




---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 592)