Date: 2026-05-29
Tags: [[Mathematics]],[[Geometry]], [[Trigonometry]], [[Graphes]], [[Cheat sheet]]


---

## Chapter 6 Review: Trigonometric Functions of Angles

> [!info] Angle Basics & Standard Position
> - **Angle**: Rotation from initial side to terminal side about vertex $O$. CCW = positive, CW = negative.
> - **Standard Position**: Vertex at origin, initial side on positive $x$-axis.
> - **Coterminal Angles**: Share same terminal side → differ by multiples of $360^\circ$ or $2\pi$ rad.

![[Pasted image 20260601191601.png|center|377]]

---

> [!info] Radian Measure & Conversion
> **Radian definition**: For unit circle, radian measure = arc length subtended.
> 
> **Conversion**:
> $$
> \text{deg} \to \text{rad}: \times \frac{\pi}{180} \quad ; \quad \text{rad} \to \text{deg}: \times \frac{180}{\pi}
> $$

![[Pasted image 20260601191635.png|center|306]]

---

> [!info] Circular Arc & Sector Formulas ($\theta$ in radians!)
> - **Arc Length**: $s = r\theta$
> - **Sector Area**: $A = \frac{1}{2} r^2 \theta$

![[Pasted image 20260601191715.png|center|332]]

---

> [!info] Circular Motion
> For point moving on circle radius $r$, traversing $\theta$ rad in time $t$:
> - **Angular speed**: $\omega = \dfrac{\theta}{t}$
> - **Linear speed**: $v = \dfrac{s}{t} = r\omega$

---

### Trigonometric Ratios (Right Triangle)

For acute angle $\theta$ in right triangle:

$$
\begin{aligned}
\sin \theta &= \frac{\text{opp}}{\text{hyp}} & \cos \theta &= \frac{\text{adj}}{\text{hyp}} & \tan \theta &= \frac{\text{opp}}{\text{adj}} \\
\csc \theta &= \frac{\text{hyp}}{\text{opp}} & \sec \theta &= \frac{\text{hyp}}{\text{adj}} & \cot \theta &= \frac{\text{adj}}{\text{opp}}
\end{aligned}
$$

![[Pasted image 20260601191831.png|center|391]]

---

### Trigonometric Functions (Unit Circle / General Angle)

Let $P(x,y)$ be point on terminal side of angle $\theta$ in standard position, $r = \sqrt{x^2 + y^2} > 0$:

$$
\begin{aligned}
\sin \theta &= \frac{y}{r} & \cos \theta &= \frac{x}{r} & \tan \theta &= \frac{y}{x} \\
\csc \theta &= \frac{r}{y} & \sec \theta &= \frac{r}{x} & \cot \theta &= \frac{x}{y}
\end{aligned}
$$

![[Pasted image 20260601200343.png|center|495]]

---

### Special Values Table

| $\theta$ | deg     | rad       | $\sin \theta$ | $\cos \theta$ | $\tan \theta$ | $\csc \theta$ | $\sec \theta$ | $\cot \theta$ |
|----------|---------|-----------|---------------|---------------|---------------|---------------|---------------|---------------|
|          | $0^\circ$   | $0$         | $0$             | $1$             | $0$             | —             | $1$             | —             |
|          | $30^\circ$  | $\frac{\pi}{6}$  | $\frac{1}{2}$      | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ | $2$             | $\frac{2\sqrt{3}}{3}$ | $\sqrt{3}$      |
|          | $45^\circ$  | $\frac{\pi}{4}$  | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$             | $\sqrt{2}$      | $\sqrt{2}$      | $1$             |
|          | $60^\circ$  | $\frac{\pi}{3}$  | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$      | $\sqrt{3}$      | $\frac{2\sqrt{3}}{3}$ | $2$             | $\frac{\sqrt{3}}{3}$ |
|          | $90^\circ$  | $\frac{\pi}{2}$  | $1$             | $0$             | —             | $1$             | —             | $0$             |
|          | $180^\circ$ | $\pi$        | $0$             | $-1$            | $0$             | —             | $-1$            | —             |
|          | $270^\circ$ | $\frac{3\pi}{2}$ | $-1$            | $0$             | —             | $-1$            | —             | $0$             |

---

> [!info] Basic Identities
> **Reciprocal**:
> $$
> \csc \theta = \frac{1}{\sin \theta}, \quad \sec \theta = \frac{1}{\cos \theta}, \quad \cot \theta = \frac{1}{\tan \theta}
> $$
>
> **Pythagorean**:
> $$
> \sin^2 \theta + \cos^2 \theta = 1, \quad \tan^2 \theta + 1 = \sec^2 \theta, \quad 1 + \cot^2 \theta = \csc^2 \theta
> $$

---

### Area of a Triangle

Given sides $a,b$ and included angle $\theta$:
$$
\mathcal{A} = \frac{1}{2} ab \sin \theta
$$

![[Pasted image 20260529193651.png|center|346]]

---

### Law of Sines & Cosines

For triangle $ABC$ with sides $a,b,c$ opposite angles $A,B,C$:

**Law of Sines**:
$$
\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}
$$

**Law of Cosines**:
$$
\begin{aligned}
a^2 &= b^2 + c^2 - 2bc \cos A \\
b^2 &= a^2 + c^2 - 2ac \cos B \\
c^2 &= a^2 + b^2 - 2ab \cos C
\end{aligned}
$$

![[Pasted image 20260601200553.png|center|417]]

---

### Heron’s Formula

For triangle with sides $a,b,c$, *semiperimeter* $s = \frac{1}{2}(a+b+c)$:

$$
\mathcal{A} = \sqrt{s(s-a)(s-b)(s-c)}
$$

![[Pasted image 20260601200630.png|center]]

---

> [!info] Inverse Trigonometric Functions
> Defined by restricting domains for invertibility.

| Function | Domain        | Range               |
|----------|---------------|---------------------|
| $\sin^{-1}$ | $[-1, 1]$     | $[-\frac{\pi}{2}, \frac{\pi}{2}]$ |
| $\cos^{-1}$ | $[-1, 1]$     | $[0, \pi]$           |
| $\tan^{-1}$ | $(-\infty, \infty)$ | $(-\frac{\pi}{2}, \frac{\pi}{2})$ |

Defined by:
$$
\sin^{-1} x = y \iff \sin y = x, \quad \cos^{-1} x = y \iff \cos y = x, \quad \tan^{-1} x = y \iff \tan y = x
$$

![[Pasted image 20260601200749.png]]

---

> [!warning] Critical Reminders
> - All arc/sector/circular motion formulas require **radians**.
> - Inverse trig functions return values only in their principal ranges.
> - Coterminal angles have identical trig function values.
> - Always check quadrant signs when evaluating trig functions for general angles.

This review consolidates all key definitions, formulas, and graphical behaviors from Chapter 6 for rapid recall and application.

---
# ~={red}References=~
