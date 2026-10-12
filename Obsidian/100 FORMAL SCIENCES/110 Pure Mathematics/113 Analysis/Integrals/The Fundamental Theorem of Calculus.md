Date: 2026-07-24
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Antiderivatives]], [[Derivatives]]

---
## 4.3 The Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) establishes the precise inverse relationship between differentiation and integration.

### 1. The Area Function

Let $f \in C^0([a,b])$. Define $g: [a,b] \to \mathbb{R}$ by:
$$
\begin{aligned}
g(x) &= \int_a^x f(t) \, dt
\end{aligned}
$$
*   $g(x) \equiv$ net area under curve $f$ from $a$ to $x$.
*   $x \equiv$ variable upper limit.

![[Pasted image 20260724120124.png|center|486]]

---

### 2. The Fundamental Theorem of Calculus, Part 1 (FTC1)

> [!info] FTC, Part 1
> Let $f \in C^0([a,b])$. Then $g(x) = \int_a^x f(t) \, dt \quad (a \le x \le b)$ is:
> 1. Continuous on $[a,b]$
> 2. Differentiable on $(a,b)$
> 3. $g'(x) = f(x)$

**Leibniz Notation:**
$$
\begin{aligned}
\frac{d}{dx} \int_a^x f(t) \, dt &= f(x)
\end{aligned}
$$

![[Pasted image 20260724120403.png|center|355]]
![[Pasted image 20260724120515.png|center|364]]

---

### 3. The Fundamental Theorem of Calculus, Part 2 (FTC2)

> [!info] FTC, Part 2
> Let $f \in C^0([a,b])$. Then:
> $$
> \begin{aligned}
> \int_a^b f(x) \, dx &= F(b) - F(a)
> \end{aligned}
> $$
> where $\exists F \text{ s.t. } F' = f$ ($F$ is any antiderivative of $f$).

**Evaluation Notation:**
$$
\begin{aligned}
F(x) \Big]_a^b &= F(b) - F(a) \\
\implies \int_a^b f(x) \, dx &= F(x) \Big]_a^b
\end{aligned}
$$

---

### 4. Summary of Inverse Processes

> [!info] The Fundamental Theorem of Calculus
> Let $f \in C^0([a,b])$.
> 1. $g(x) = \int_a^x f(t) \, dt \implies g'(x) = f(x)$
> 2. $\int_a^b f(x) \, dx = F(b) - F(a) \quad \text{where } F' = f$
> 
> **Conclusion:** Differentiation and integration are inverse operations. $\frac{d}{dx} \int_a^x f(t) dt = f(x)$ and $\int_a^b F'(x) dx = F(b) - F(a)$.

---

### Examples

> [!example] Example 1: Evaluating $g(x)$ Graphically
> **Problem:** $f$ given by graph. $g(x) = \int_0^x f(t) \, dt$. Find $g(0) \dots g(5)$ and sketch $g$.
> 
> ![[Pasted image 20260724120547.png|center]]
> 
> **Solution:**
> $$
> \begin{aligned}
> g(0) &= \int_0^0 f(t) \, dt = 0 \\
> g(1) &= \int_0^1 f(t) \, dt = \frac{1}{2}(1 \cdot 2) = 1 \\
> g(2) &= g(1) + \int_1^2 f(t) \, dt = 1 + (1 \cdot 2) = 3 \\
> g(3) &\approx g(2) + 1.3 = 4.3 \\
> g(4) &\approx 4.3 + (-1.3) = 3.0 \\
> g(5) &\approx 3.0 + (-1.3) = 1.7
> \end{aligned}
> $$
> 
> ![[Pasted image 20260724120604.png|center]]
> *Note:* $g'(x) = f(x)$. $g_{max}$ at $x=3$ ($f(x)$ transition $+ \to -$).
> 
> ![[Pasted image 20260724120656.png|center]]

> [!example] Example 2: Applying FTC1
> **Problem:** Evaluate $\frac{d}{dx} \int_0^x \sqrt{1 + t^2} \, dt$.
> **Solution:**
> Let $f(t) = \sqrt{1 + t^2} \in C^0(\mathbb{R})$.
> By FTC1: 
> $$
> \begin{aligned}
> g'(x) &= f(x) = \sqrt{1 + x^2}
> \end{aligned}
> $$

> [!example] Example 3 & 4: FTC1 with Chain Rule
> **Problem:** Evaluate $\frac{d}{dx} \int_1^{x^4} \sec t \, dt$.
> **Solution:**
> Let $u = x^4 \implies \frac{du}{dx} = 4x^3$.
> $$
> \begin{aligned}
> \frac{d}{dx} \int_1^{x^4} \sec t \, dt &= \frac{d}{dx} \int_1^u \sec t \, dt \\
> &= \left( \frac{d}{du} \int_1^u \sec t \, dt \right) \frac{du}{dx} \quad \text{(Chain Rule)} \\
> &= (\sec u) \frac{du}{dx} \quad \text{(FTC1)} \\
> &= \sec(x^4) \cdot 4x^3
> \end{aligned}
> $$

> [!example] Example 5: Applying FTC2
> **Problem:** Evaluate $\int_{-2}^1 x^3 \, dx$.
> **Solution:**
> $f(x) = x^3 \in C^0([-2,1])$.
> Let $F(x) = \frac{1}{4}x^4 \implies F'(x) = f(x)$.
> $$
> \begin{aligned}
> \int_{-2}^1 x^3 \, dx &= \left[ \frac{1}{4}x^4 \right]_{-2}^1 = F(1) - F(-2) \\
> &= \frac{1}{4}(1)^4 - \frac{1}{4}(-2)^4 = \frac{1}{4} - \frac{16}{4} = -\frac{15}{4}
> \end{aligned}
> $$

> [!example] Example 6 & 7: Area via FTC2
> **Problem 1:** Area under $y = x^2$ on $[0,1]$.
> **Solution 1:** 
> $$
> \begin{aligned}
> A &= \int_0^1 x^2 \, dx = \left[ \frac{x^3}{3} \right]_0^1 = \frac{1}{3} - 0 = \frac{1}{3}
> \end{aligned}
> $$
> 
> **Problem 2:** Area under $y = \cos x$ on $[0,b]$ for $b \in [0, \pi/2]$.
> **Solution 2:** 
> $$
> \begin{aligned}
> A &= \int_0^b \cos x \, dx = [\sin x]_0^b = \sin b - \sin 0 = \sin b
> \end{aligned}
> $$
> 
> ![[Pasted image 20260724120903.png|center]]

> [!example] Example 8: FTC2 Discontinuity Violation
> **Problem:** Evaluate $\int_{-1}^3 \frac{1}{x^2} \, dx$.
> **Flawed Solution:** 
> $$
> \begin{aligned}
> \int_{-1}^3 \frac{1}{x^2} \, dx &= \left[ -\frac{1}{x} \right]_{-1}^3 = -\frac{1}{3} - 1 = -\frac{4}{3}
> \end{aligned}
> $$
> **Correction:** $f(x) = 1/x^2 \ge 0 \implies \int \ge 0$. Negative result implies mathematical error.
> $f(x) \notin C^0([-1,3])$ (Infinite discontinuity at $x=0$).
> FTC2 is inapplicable. Integral does not exist.


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 310)