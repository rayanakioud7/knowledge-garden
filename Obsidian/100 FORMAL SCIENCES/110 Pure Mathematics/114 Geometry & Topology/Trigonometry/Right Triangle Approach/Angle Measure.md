Date: 2026-05-26
Tags: [[Mathematics]], [[Geometry]]

---

## Angle Measure & Radian Definition

> [!info] Angle Basics
> - **Angle**: Rotation of ray $R_1$ (initial side) onto $R_2$ (terminal side) about vertex $O$.
> - **Sign**: Counterclockwise → positive; Clockwise → negative.
> - **Notation**: Greek letters ($\alpha, \beta, \theta$) or uppercase ($A, B, C$).

![[Pasted image 20260526005734.png|center]]

---

> [!info] Radian Measure (Definition)
> For a circle of radius 1 centered at the angle’s vertex:  
> **The radian measure of $\theta$ is the length of the arc it subtends.**

![[Pasted image 20260526005718.png|center]]

Key benchmarks (unit circle circumference = $2\pi$):
- Full revolution: $2\pi$ rad
- Straight angle: $\pi$ rad
- Right angle: $\frac{\pi}{2}$ rad
- Arc length 2 on unit circle → angle = 2 rad

![[Pasted image 20260526005756.png]]

---
## Degrees ↔ Radians Conversion

> [!info] Core Relationship
> $$
> 180^\circ = \pi \text{ rad}
> \quad \Rightarrow \quad
> 1^\circ = \frac{\pi}{180} \text{ rad}, \quad
> 1 \text{ rad} = \left(\frac{180}{\pi}\right)^\circ \approx 57.296^\circ
> $$

**Conversion Rules**:
- **Degrees → Radians**: Multiply by $\dfrac{\pi}{180}$
- **Radians → Degrees**: Multiply by $\dfrac{180}{\pi}$

![[Pasted image 20260526011646.png|center|385]]

---

> [!example] Example 1: Converting Between Radians and Degrees
> **(a)** $60^\circ = 60 \cdot \dfrac{\pi}{180} = \dfrac{\pi}{3} \text{ rad}$  
> **(b)** $\dfrac{\pi}{6} \text{ rad} = \dfrac{\pi}{6} \cdot \dfrac{180}{\pi} = 30^\circ$


---

## Angles in Standard Position & Coterminal Angles

> [!info] Standard Position
> An angle is in **standard position** if:
> - Vertex at origin $(0,0)$
> - Initial side along positive $x$-axis
> - Terminal side determined by rotation (CCW = positive, CW = negative)

![[Pasted image 20260526012319.png]]

---

> [!info] Coterminal Angles
> Two angles are **coterminal** if their terminal sides coincide.

To find coterminal angles:
- **Degrees**: Add/subtract multiples of $360^\circ$
- **Radians**: Add/subtract multiples of $2\pi$

---

> [!example] Example 2: Coterminal Angles
> **(a)** $\theta = 30^\circ$  
> Positive: $30^\circ + 360^\circ = 390^\circ$, $30^\circ + 720^\circ = 750^\circ$  
> Negative: $30^\circ - 360^\circ = -330^\circ$, $30^\circ - 720^\circ = -690^\circ$
> 
> **(b)** $\theta = \frac{\pi}{3}$  
> Positive: $\frac{\pi}{3} + 2\pi = \frac{7\pi}{3}$, $\frac{\pi}{3} + 4\pi = \frac{13\pi}{3}$  
> Negative: $\frac{\pi}{3} - 2\pi = -\frac{5\pi}{3}$, $\frac{\pi}{3} - 4\pi = -\frac{11\pi}{3}$

![[Pasted image 20260526012546.png|center]]

![[Pasted image 20260526012556.png|center|555]]

---

> [!note] General Form
> All angles coterminal with $\theta$:
> - Degrees: $\theta + 360^\circ \cdot n$,$n \in \mathbb{Z}$
> - Radians: $\theta + 2\pi \cdot n$, $n \in \mathbb{Z}$

Coterminal angles have identical trig function values.

---

## Length of a Circular Arc

> [!info] Arc Length Formula
> For a circle of radius $r$, central angle $\theta$ (in **radians**), arc length $s$:
> $$
> s = r\theta
> $$
> 
> Solve for angle:  
> $$
> \theta = \frac{s}{r}
> $$

![[Pasted image 20260526014129.png|center|245]]

---

> [!warning] Radians Required
> The formula $s = r\theta$ **only holds when $\theta$ is in radians**. Convert degrees first if needed.

---

> [!example] Example 4: Arc Length and Angle Measure
> **(a)** Radius $10$ m, angle $30^\circ = \frac{\pi}{6}$ rad →  
> $s = 10 \cdot \frac{\pi}{6} = \frac{5\pi}{3}$ m
> 
> **(b)** Radius $4$ m, arc $6$ m →  
> $\theta = \frac{6}{4} = \frac{3}{2}$ rad

---

> [!note] Intuition
> Radian measure = how many radii fit along the arc.  
> So $\theta = \frac{s}{r}$ is literally “arc length divided by radius”.

Always check units: $s$ and $r$ must be same unit; $\theta$ dimensionless (radians).

---

## Area of a Circular Sector

> [!info] Sector Area Formula
> For a circle of radius $r$, central angle $\theta$ (in **radians**), sector area $A$:
> $$
> A = \frac{1}{2} r^2 \theta
> $$

![[Pasted image 20260526014905.png|center|283]]

---

> [!warning] Radians Required
> The formula $A = \frac{1}{2} r^2 \theta$ **only holds when $\theta$ is in radians**. Convert degrees first if needed.

---

> [!example] Example 5: Area of a Sector
> Radius $3$ m, angle $60^\circ = \frac{\pi}{3}$ rad →  
> $$
> A = \frac{1}{2}(3)^2\left(\frac{\pi}{3}\right) = \frac{9}{2} \cdot \frac{\pi}{3} = \frac{3\pi}{2} \text{ m}^2
> $$

---

> [!note] Derivation Insight
> Sector area = fraction of full circle:  
> $\frac{\theta}{2\pi} \cdot \pi r^2 = \frac{1}{2} r^2 \theta$

Always verify units: $r$ in length → $A$ in square length; $\theta$ dimensionless (radians).

---
## Circular Motion: Linear & Angular Speed

> [!info] Definitions
> For a point moving on circle of radius $r$, traversing angle $\theta$ (rad) in time $t$:
> - **Angular speed**: $\omega = \dfrac{\theta}{t}$  (rad per unit time)
> - **Linear speed**: $v = \dfrac{s}{t} = \dfrac{r\theta}{t} = r\omega$  (distance per unit time)

![[Pasted image 20260526015221.png|center]]

---

> [!example] Example 6: Finding Linear and Angular Speed
> Stone on 3-ft sling, 15 rev / 10 s.

**Angular speed**:  
$\theta = 15 \cdot 2\pi = 30\pi$ rad →  
$\omega = \dfrac{30\pi}{10} = 3\pi$ rad/s

**Linear speed**:  
$s = 15 \cdot 2\pi \cdot 3 = 90\pi$ ft →  
$v = \dfrac{90\pi}{10} = 9\pi$ ft/s  
*(or use $v = r\omega = 3 \cdot 3\pi = 9\pi$)*

---

> [!note] Key Relation
> $$
> v = r\omega
> $$
> Always ensure $\theta$ is in **radians** for these formulas.

Units:  
- $\omega$: rad/s, rad/min, etc.  
- $v$: ft/s, m/s, etc. (same as distance/time)


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 486)