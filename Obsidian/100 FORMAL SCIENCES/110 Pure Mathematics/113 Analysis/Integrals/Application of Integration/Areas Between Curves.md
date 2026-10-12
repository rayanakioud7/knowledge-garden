Date: 2026-08-04
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Antiderivatives]], [[Area]]

---
## 5.1 Areas Between Curves

To find the area of a region bounded by multiple curves, we utilize definite integrals to sum the infinitesimal area strips between them.

> [!info] Area Between Curves (Integration w.r.t $x$)
> Let $f, g \in C^0([a,b])$ such that $f(x) \ge g(x) \ \forall x \in [a,b]$.
> The area $A$ of the region bounded by $y = f(x)$, $y = g(x)$, $x = a$, and $x = b$ is:
> $$ A = \int_a^b [f(x) - g(x)] \, dx $$

![[Pasted image 20260804075554.png|center]]

---

> [!info] Area Between Intersecting Curves
> If curves cross such that $f(x) \ge g(x)$ for some $x \in [a,b]$ and $g(x) \ge f(x)$ for others:
> $$ A = \int_a^b |f(x) - g(x)| \, dx $$
> Evaluating this requires splitting the integral at intersection points into regions $A_1, A_2, \dots$

![[Pasted image 20260804080504.png|center]]

---

> [!info] Area Between Curves (Integration w.r.t $y$)
> Let $x = f(y)$ and $x = g(y)$ be continuous curves with $f(y) \ge g(y) \ \forall y \in [c,d]$.
> $$ A = \int_c^d [f(y) - g(y)] \, dy = \int_c^d (x_R - x_L) \, dy $$

![[Pasted image 20260804080541.png|center]]

---

### Examples

> [!example] Example 1: Fixed Vertical Boundaries
> **Problem:** Find the area bounded by $y = x^2 + 1$, $y = x$, $x = 0$, and $x = 1$.
> 
> ![[Pasted image 20260804080629.png|center]]
> 
> **Solution:**
> Upper curve $y_T = x^2 + 1$ and lower curve $y_B = x$.
> $$ 
> \begin{aligned}
> A &= \int_0^1 [(x^2 + 1) - x] \, dx \\
> &= \left[ \frac{x^3}{3} - \frac{x^2}{2} + x \right]_0^1 \\
> &= \frac{1}{3} - \frac{1}{2} + 1 = \frac{5}{6} 
> \end{aligned} 
> $$

> [!example] Example 2: Region Enclosed by Intersecting Curves
> **Problem:** Find the area of the region enclosed by $y = x^2$ and $y = 2x - x^2$.
> 
> **Solution:**
> Find intersections: $x^2 = 2x - x^2 \implies 2x^2 - 2x = 0 \implies x \in \{0, 1\}$.
> Upper curve $y_T = 2x - x^2$ and lower curve $y_B = x^2$.
> $$ 
> \begin{aligned}
> A &= \int_0^1 [(2x - x^2) - x^2] \, dx \\
> &= 2 \int_0^1 (x - x^2) \, dx \\
> &= 2 \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1 = 2 \left( \frac{1}{2} - \frac{1}{3} \right) = \frac{1}{3}
> \end{aligned} 
> $$
> 
> ![[Pasted image 20260804080648.png|center]]

> [!example] Example 5: Absolute Value Integral for Crossing Curves
> **Problem:** Find the area bounded by $y = \sin x$, $y = \cos x$, $x = 0$, and $x = \pi/2$.
> 
> ![[Pasted image 20260804080733.png|center]]
> 
> **Solution:**
> Intersections: $\sin x = \cos x \implies x = \pi/4$ (for $x \in [0, \pi/2]$).
> $\cos x \ge \sin x$ on $[0, \pi/4]$, and $\sin x \ge \cos x$ on $[\pi/4, \pi/2]$.
> $$ 
> \begin{aligned}
> A &= \int_0^{\pi/2} |\cos x - \sin x| \, dx \\
> &= \int_0^{\pi/4} (\cos x - \sin x) \, dx + \int_{\pi/4}^{\pi/2} (\sin x - \cos x) \, dx \\
> &= [\sin x + \cos x]_0^{\pi/4} + [-\cos x - \sin x]_{\pi/4}^{\pi/2} \\
> &= \left( \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}} - 1 \right) + \left( -1 + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}} \right) = 2\sqrt{2} - 2
> \end{aligned} 
> $$

> [!example] Example 6: Integrating with respect to $y$
> **Problem:** Find the area enclosed by the line $y = x - 1$ and the parabola $y^2 = 2x + 6$.
> 
> **Solution:**
> Convert equations to $x(y)$: $x_R = y + 1$ and $x_L = \frac{1}{2}y^2 - 3$.
> Intersections: $\frac{1}{2}y^2 - 3 = y + 1 \implies y^2 - 2y - 8 = 0 \implies y \in \{-2, 4\}$.
> $$ 
> \begin{aligned}
> A &= \int_{-2}^4 (x_R - x_L) \, dy \\
> &= \int_{-2}^4 \left[ (y + 1) - \left(\frac{1}{2}y^2 - 3\right) \right] \, dy \\
> &= \int_{-2}^4 \left( -\frac{1}{2}y^2 + y + 4 \right) \, dy \\
> &= \left[ -\frac{1}{6}y^3 + \frac{1}{2}y^2 + 4y \right]_{-2}^4 = 18
> \end{aligned} 
> $$
> 
> ![[Pasted image 20260804080807.png|center]]


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 344)