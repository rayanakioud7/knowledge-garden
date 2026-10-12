Date: 2026-06-08
Tags: [[Mathematics]], [[Coordinates]], [[Equations]]

---
## 8.2 Graphs of Polar Equations

> [!info] Graphing Polar Equations
> The graph of $r = f(\theta)$ consists of all points $P(r, \theta)$ satisfying the equation.
> - Use a **polar grid** (concentric circles and rays from the pole) for plotting.
> - Basic shapes have simple polar equations:
>   - $r = a$: Circle of radius $|a|$ centered at origin ($x^2 + y^2 = a^2$).
>   - $\theta = c$: Line through origin with slope $\tan c$ ($y = (\tan c)x$).

![[Pasted image 20260608165752.png]]

---

> [!example] Example 1: Sketching $r = 3$
> Graph is a circle of radius 3 centered at origin.
> Rectangular form: $x^2 + y^2 = 9$.

![[Pasted image 20260608165815.png|center]]

---

> [!example] Example 2: Sketching $\theta = \pi/3$
> Graph is a line through origin making angle $\pi/3$ with polar axis.
> Rectangular form: $y = \sqrt{3}x$.

![[Pasted image 20260608165831.png|center]]

---

> [!example] Example 3: Sketching $r = 2 \sin \theta$
> Plot points for $\theta \in [0, \pi]$. The graph is a circle.
> Rectangular form: $x^2 + (y-1)^2 = 1$ (Circle of radius 1 centered at $(0,1)$).

![[Pasted image 20260608165849.png|center]]

> [!info] General Circle Forms
> Equations of the form:
> $$ r = 2a \sin \theta \quad \text{or} \quad r = 2a \cos \theta $$
> represent circles with radius $|a|$ centered at $(a, \pi/2)$ and $(a, 0)$ respectively.

---

### Sketching Complex Curves

To sketch curves like cardioids or roses, first graph $r = f(\theta)$ in **rectangular coordinates** (r on y-axis, $\theta$ on x-axis). This acts as a "table of values" to guide the polar sketch.

> [!example] Example 4: Sketching a Cardioid ($r = 2 + 2 \cos \theta$)
> 1. Graph $r = 2 + 2 \cos \theta$ in rectangular coordinates (Figure 5).
> 2. Trace polar graph as $\theta$ increases:
>    - $\theta: 0 \to \pi/2$: $r$ decreases $4 \to 2$.
>    - $\theta: \pi/2 \to \pi$: $r$ decreases $2 \to 0$.
>    - $\theta: \pi \to 3\pi/2$: $r$ increases $0 \to 2$ (negative r values plot in opposite quadrant).
>    - $\theta: 3\pi/2 \to 2\pi$: $r$ increases $2 \to 4$.

![[Pasted image 20260608170026.png|center]]

![[Pasted image 20260608170106.png]]

> [!info] Cardioids
> Equations of the form:
> $$ r = a(1 \pm \cos \theta) \quad \text{or} \quad r = a(1 \pm \sin \theta) $$
> produce heart-shaped curves called **cardioids**.

---

> [!example] Example 5: Sketching a Four-Leaved Rose ($r = \cos 2\theta$)
> Graph $r = \cos 2\theta$ in rectangular coordinates to see sign changes.
> - As $\theta$ goes $0 \to \pi/4$, $r$ goes $1 \to 0$ (Leaf 1 in QI).
> - As $\theta$ goes $\pi/4 \to \pi/2$, $r$ goes $0 \to -1$ (Leaf 2 in QIV, because r is negative).

![[Pasted image 20260608170146.png]]

> [!info] Rose Curves
> Equations of the form:
> $$ r = a \cos n\theta \quad \text{or} \quad r = a \sin n\theta $$
> - If $n$ is **odd**: **n-leaved** rose.
> - If $n$ is **even**: **2n-leaved** rose.

---

### Symmetry Tests

Symmetry simplifies graphing. If a test holds, the graph has that symmetry.

> [!info] Types of Symmetry
> | Symmetry | Test | Property |
> | :--- | :--- | :--- |
> | **Polar Axis** (x-axis) | Replace $\theta$ by $-\theta$. Equation unchanged. | Graph unchanged when reflected about polar axis. |
> | **Pole** (origin) | Replace $r$ by $-r$ OR $\theta$ by $\theta + \pi$. Equation unchanged. | Graph unchanged when rotated $\pi$ about pole. |
> | **Line $\theta = \pi/2$** (y-axis) | Replace $\theta$ by $\pi - \theta$. Equation unchanged. | Graph unchanged when reflected about vertical line $\theta = \pi/2$. |


> ![[Pasted image 20260608170451.png||center]]


---

> [!example] Example 6: Using Symmetry to Sketch a Limaçon ($r = 1 + 2 \cos \theta$)
> 1. **Symmetry**: Replacing $\theta$ with $-\theta$ gives $1 + 2\cos(-\theta) = 1 + 2\cos\theta$. Symmetric about polar axis.
> 2. **Zeros**: Solve $1 + 2\cos\theta = 0 \implies \cos\theta = -1/2 \implies \theta = 2\pi/3, 4\pi/3$. These are where graph crosses the pole.
> 3. **Table**: Sketch rectangular graph of $r$ vs $\theta$ to guide polar plotting for $\theta \in [0, \pi]$, then reflect.

.![[Pasted image 20260608170547.png|center]]

> [!info] Limaçons
> Equations of the form:
> $$ r = a \pm b \cos \theta \quad \text{or} \quad r = a \pm b \sin \theta $$
> Shape depends on ratio $a/b$ (dimpled, convex, or with inner loop).

---

### Graphing with Devices (Periodicity)

To graph $r = f(\theta)$ on a calculator, determine the domain $[0, P]$ required for one complete trace.

> [!example] Example 7: Domain for $r = \cos(2\theta/3)$
> Find smallest integer $n$ such that the period repeats:
> $$ \cos\left(\frac{2(\theta + 2n\pi)}{3}\right) = \cos\left(\frac{2\theta}{3}\right) $$
> This requires $\frac{4n\pi}{3}$ to be a multiple of $2\pi$. Smallest integer $n=3$.
> Domain: $\theta \in [0, 6\pi]$.

![[Pasted image 20260608170622.png|center]]

---
## Families of Polar Equations and Common Curves

> [!example] Example 8: A Family of Polar Equations
> Graph $r = 1 + c \sin \theta$ for $c = 3, 2.5, 2, 1.5, 1$.
>
> **Observation**:
> - **$c > 1$**: Graph is a **limaçon with an inner loop**. As $c$ decreases toward 1, the loop shrinks.
> - **$c = 1$**: The loop disappears, and the graph becomes a **cardioid**.

![[Pasted image 20260608170824.png]]

---

> [!info] Some Common Polar Curves
> A summary of standard polar graphs used in calculus.
> 
![[Pasted image 20260608171041.png]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 610)