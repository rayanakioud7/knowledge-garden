Date: 2026-07-06
Tags: [[Mathematics]], [[Analysis]], [[Functions]], [[Derivatives]], [[The Graph of a Function]]

---
## How Derivatives Affect the Shape of a Graph

Applications of calculus depend on deducing facts about a function $f$ from information concerning its derivatives. Information about $f'(x)$ provides information about $f(x)$ by indicating the direction in which the curve proceeds.

### 1. What Does $f'$ Say About $f$?
The sign of the first derivative determines where a function is increasing or decreasing.

![[Pasted image 20260706192851.png|center|450]]

> [!info] Increasing/Decreasing (I/D) Test
> (a) If $f'(x) > 0$ on an interval, then $f$ is increasing on that interval.
> (b) If $f'(x) < 0$ on an interval, then $f$ is decreasing on that interval.

**Proof of (a):**
Let $x_1$ and $x_2$ be any two numbers in the interval with $x_1 < x_2$. To show $f$ is increasing, we must show $f(x_1) < f(x_2)$.
Because $f'(x) > 0$, $f$ is differentiable on $[x_1, x_2]$. By the Mean Value Theorem, there is a number $c$ between $x_1$ and $x_2$ such that:
$$
\begin{aligned}
f(x_2) - f(x_1) &= f'(c)(x_2 - x_1)
\end{aligned}
$$
Since $f'(c) > 0$ (by assumption) and $x_2 - x_1 > 0$ (because $x_1 < x_2$), the right side is positive:
$$
\begin{aligned}
f(x_2) - f(x_1) &> 0 \quad \text{or} \quad f(x_1) < f(x_2)
\end{aligned}
$$
This shows that $f$ is increasing. Part (b) is proved similarly.

![[Pasted image 20260706193043.png|center]]

> [!info] The First Derivative Test
> Suppose that $c$ is a critical number of a continuous function $f$.
> (a) If $f'$ changes from positive to negative at $c$, then $f$ has a local maximum at $c$.
> (b) If $f'$ changes from negative to positive at $c$, then $f$ has a local minimum at $c$.
> (c) If $f'$ does not change sign at $c$ (for example, if $f'$ is positive on both sides of $c$ or negative on both sides), then $f$ has no local maximum or minimum at $c$.

### 2. What Does $f''$ Say About $f$?
The second derivative determines the concavity of the graph.

![[Pasted image 20260706193121.png|center]]

> [!info] Definition: Concavity
> If the graph of $f$ lies above all of its tangents on an interval $I$, then it is called **concave upward** on $I$. If the graph of $f$ lies below all of its tangents on $I$, it is called **concave downward** on $I$.

![[Pasted image 20260706193137.png|center]]

> [!info] Concavity Test
> (a) If $f''(x) > 0$ for all $x$ in $I$, then the graph of $f$ is concave upward on $I$.
> (b) If $f''(x) < 0$ for all $x$ in $I$, then the graph of $f$ is concave downward on $I$.

> [!info] Definition: Inflection Point
> A point $P$ on a curve $y = f(x)$ is called an **inflection point** if $f$ is continuous there and the curve changes from concave upward to concave downward or from concave downward to concave upward at $P$.
#### Example:
inflection point at $b, c$ and $p$
![[Pasted image 20260706193256.png|center]]


> [!info] The Second Derivative Test
> Suppose $f''$ is continuous near $c$.
> (a) If $f'(c) = 0$ and $f''(c) > 0$, then $f$ has a local minimum at $c$.
> (b) If $f'(c) = 0$ and $f''(c) < 0$, then $f$ has a local maximum at $c$.
> 
> *Note:* The test is inconclusive when $f''(c) = 0$ or does not exist.

---

### Examples

> [!example] Example 1: Increasing and Decreasing Intervals
> **Problem Statement:** Find where the function $f(x) = 3x^4 - 4x^3 - 12x^2 + 5$ is increasing and where it is decreasing.
> 
> **Solution:**
> $$
> \begin{aligned}
> f'(x) &= 12x^3 - 12x^2 - 24x \\
> &= 12x(x^2 - x - 2) \\
> &= 12x(x - 2)(x + 1)
> \end{aligned}
> $$
> We determine the signs of the factors $12x$, $x-2$, and $x+1$ over the intervals defined by critical numbers $-1, 0, 2$.
> 
> | Interval | $12x$ | $x-2$ | $x+1$ | $f'(x)$ | $f$ |
> | :--- | :---: | :---: | :---: | :---: | :--- |
> | $x < -1$ | $-$ | $-$ | $-$ | $-$ | decreasing on $(-\infty, -1)$ |
> | $-1 < x < 0$ | $-$ | $-$ | $+$ | $+$ | increasing on $(-1, 0)$ |
> | $0 < x < 2$ | $+$ | $-$ | $+$ | $-$ | decreasing on $(0, 2)$ |
> | $x > 2$ | $+$ | $+$ | $+$ | $+$ | increasing on $(2, \infty)$ |
> 
> ![[Pasted image 20260706193451.png|center]]

> [!example] Example 2: Finding Extrema via First Derivative Test
> **Problem Statement:** Find the local minimum and maximum values of the function $f$ in Example 1.
> 
> **Solution:**
> From the chart in Example 1, $f'(x)$ changes from negative to positive at $-1$, so $f(-1) = 0$ is a local minimum.
> $f'$ changes from negative to positive at $2$, so $f(2) = -27$ is a local minimum.
> $f'$ changes from positive to negative at $0$, so $f(0) = 5$ is a local maximum.

> [!example] Example 3: Extrema Involving Trigonometry
> **Problem Statement:** Find the local maximum and minimum values of the function $g(x) = x + 2\sin x, \quad 0 \le x \le 2\pi$.
> 
> **Solution:**
> $$
> \begin{aligned}
> g'(x) &= 1 + 2\cos x
> \end{aligned}
> $$
> Set $g'(x) = 0 \implies \cos x = -\frac{1}{2}$. Solutions in domain are $2\pi/3$ and $4\pi/3$.
> 
> | Interval | $g'(x) = 1 + 2\cos x$ | $g$ |
> | :--- | :---: | :--- |
> | $0 < x < 2\pi/3$ | $+$ | increasing on $(0, 2\pi/3)$ |
> | $2\pi/3 < x < 4\pi/3$ | $-$ | decreasing on $(2\pi/3, 4\pi/3)$ |
> | $4\pi/3 < x < 2\pi$ | $+$ | increasing on $(4\pi/3, 2\pi)$ |
> 
> $g'(x)$ changes positive to negative at $2\pi/3$ (local max):
> $$
> \begin{aligned}
> g(2\pi/3) &= \frac{2\pi}{3} + 2\sin\frac{2\pi}{3} = \frac{2\pi}{3} + 2\left(\frac{\sqrt{3}}{2}\right) = \frac{2\pi}{3} + \sqrt{3} \approx 3.83
> \end{aligned}
> $$
> $g'(x)$ changes negative to positive at $4\pi/3$ (local min):
> $$
> \begin{aligned}
> g(4\pi/3) &= \frac{4\pi}{3} + 2\sin\frac{4\pi}{3} = \frac{4\pi}{3} + 2\left(-\frac{\sqrt{3}}{2}\right) = \frac{4\pi}{3} - \sqrt{3} \approx 2.46
> \end{aligned}
> $$
> 
> ![[Pasted image 20260706193549.png|center]]

> [!example] Example 5: Sketching a Graph from Conditions
> **Problem Statement:** Sketch a possible graph of a function $f$ that satisfies:
> (i) $f(0)=0, f(2)=3, f(4)=6, f'(0)=f'(4)=0$
> (ii) $f'(x) > 0$ for $0 < x < 4$, $f'(x) < 0$ for $x < 0$ and $x > 4$
> (iii) $f''(x) > 0$ for $x < 2$, $f''(x) < 0$ for $x > 2$
> 
> **Solution:**
> Condition (i): Horizontal tangents at $(0,0)$ and $(4,6)$.
> Condition (ii): $f$ increases on $(0, 4)$ and decreases on $(-\infty, 0)$ and $(4, \infty)$. Local min at $(0,0)$, local max at $(4,6)$.
> Condition (iii): Concave upward on $(-\infty, 2)$, concave downward on $(2, \infty)$. Inflection point at $(2,3)$.
> 
> ![[Pasted image 20260706193633.png|center]]

> [!example] Example 6: Analyzing Concavity and Extrema
> **Problem Statement:** Discuss the curve $y = x^4 - 4x^3$ with respect to concavity, points of inflection, and local maxima and minima. Sketch the curve.
> 
> **Solution:**
> $$
> \begin{aligned}
> f(x) &= x^4 - 4x^3 \\
> f'(x) &= 4x^3 - 12x^2 = 4x^2(x - 3) \\
> f''(x) &= 12x^2 - 24x = 12x(x - 2)
> \end{aligned}
> $$
> Critical numbers from $f'(x) = 0$ are $x=0, x=3$.
> Apply Second Derivative Test:
> $$
> \begin{aligned}
> f''(0) &= 0 \\
> f''(3) &= 36 > 0
> \end{aligned}
> $$
> $f(3) = -27$ is a local minimum. Test is inconclusive at $x=0$.
> Using First Derivative Test, $f'(x) < 0$ for $x < 0$ and $0 < x < 3$. No extremum at $x=0$.
> 
> | Interval | $f''(x) = 12x(x - 2)$ | Concavity |
> | :--- | :---: | :--- |
> | $(-\infty, 0)$ | $+$ | upward |
> | $(0, 2)$ | $-$ | downward |
> | $(2, \infty)$ | $+$ | upward |
> 
> Inflection points at $(0,0)$ and $(2,-16)$ where concavity changes.
> 
> ![[Pasted image 20260706193817.png|center]]

> [!example] Example 7: Handling Points Where Derivatives Do Not Exist
> **Problem Statement:** Sketch the graph of $f(x) = x^{2/3}(6 - x)^{1/3}$.
> 
> **Solution:**
> $$
> \begin{aligned}
> f'(x) &= \frac{4 - x}{x^{1/3}(6 - x)^{2/3}} \\
> f''(x) &= \frac{-8}{x^{4/3}(6 - x)^{5/3}}
> \end{aligned}
> $$
> Critical numbers: $f'(x)=0$ at $x=4$; $f'(x)$ DNE at $x=0, 6$.
> 
> | Interval | $4-x$ | $x^{1/3}$ | $(6-x)^{2/3}$ | $f'(x)$ | $f$ |
> | :--- | :---: | :---: | :---: | :---: | :--- |
> | $x < 0$ | $+$ | $-$ | $+$ | $-$ | decreasing on $(-\infty, 0)$ |
> | $0 < x < 4$ | $+$ | $+$ | $+$ | $+$ | increasing on $(0, 4)$ |
> | $4 < x < 6$ | $-$ | $+$ | $+$ | $-$ | decreasing on $(4, 6)$ |
> | $x > 6$ | $-$ | $+$ | $+$ | $-$ | decreasing on $(6, \infty)$ |
> 
> Local min at $0$: $f(0) = 0$. Local max at $4$: $f(4) = 2^{5/3}$. No extremum at $6$ because $f'$ does not change sign.
> Concavity: $f''(x) < 0$ for $x < 0$ and $0 < x < 6$ (Concave Down). $f''(x) > 0$ for $x > 6$ (Concave Up). Inflection point at $(6,0)$.
> 
> ![[Pasted image 20260706193855.png|center]]


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 217)