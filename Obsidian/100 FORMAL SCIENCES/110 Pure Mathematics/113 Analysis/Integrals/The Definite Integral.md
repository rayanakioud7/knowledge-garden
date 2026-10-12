Date: 2026-07-24
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Sequences and Summation Notation|Summation]], [[Integral]]

---
## 4.2 The Definite Integral

### 1. Definition and Riemann Sums

> [!info] Definition 2: Definite Integral
> Let $f: [a,b] \to \mathbb{R}$.
> Partition $[a, b]$ into $n$ subintervals of equal width $\Delta x = \frac{b - a}{n}$.
> Endpoints: $x_0 = a, x_1, \dots, x_n = b$.
> Sample points: $x_i^* \in [x_{i-1}, x_i]$.
> The **definite integral** of $f$ from $a$ to $b$ is:
> $$ \int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*) \Delta x $$
> If the limit exists $\forall x_i^*$, $f$ is **integrable** on $[a, b]$.
> $\sum_{i=1}^n f(x_i^*) \Delta x \equiv$ **Riemann sum**.
> 
> 
![[Pasted image 20260724012704.png|center]]


**Geometric Interpretation (Net Area):**
*   $f(x) \ge 0 \implies \int_a^b f(x) \, dx = \text{Area}$
*   $f(x) \in \mathbb{R} \implies \int_a^b f(x) \, dx = A_{\text{above}} - A_{\text{below}} = A_1 - A_2$

![[Pasted image 20260724012826.png|center]]

---

### 2. Integrability and Evaluation

> [!info] Theorem 3 (Integrability)
> $f \text{ continuous on } [a, b] \lor f \text{ has finite jump discontinuities} \implies f \text{ is integrable on } [a, b]$.

> [!info] Theorem 4 (Evaluation via Right Endpoints)
> If $f$ is integrable on $[a, b]$:
> $$ \int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i) \Delta x $$
> where $\Delta x = \frac{b - a}{n}$ and $x_i = a + i \Delta x$.

**Summation Formulas:**
$$ 1. \sum_{i=1}^n i = \frac{n(n + 1)}{2} \quad -\quad 2.\sum_{i=1}^n i^2 = \frac{n(n + 1)(2n + 1)}{6} \quad- \quad 3.\sum_{i=1}^n i^3 = \left[ \frac{n(n + 1)}{2} \right]^2 $$
$$ 1.\sum_{i=1}^n c = nc \quad- \quad 2.\sum_{i=1}^n ca_i = c \sum_{i=1}^n a_i \quad- \quad 3.\sum_{i=1}^n (a_i \pm b_i) = \sum_{i=1}^n a_i \pm \sum_{i=1}^n b_i $$

---

### 3. The Midpoint Rule

> [!info] Midpoint Rule
> Let $x_i^* = \bar{x}_i = \frac{x_{i-1} + x_i}{2}$ (Midpoint of $[x_{i-1}, x_i]$).
> $$ \int_a^b f(x) \, dx \approx \sum_{i=1}^n f(\bar{x}_i) \Delta x $$
> 
> ![[Pasted image 20260724013216.png|center]]

---

### 4. Properties of the Definite Integral

**Basic Definitions:**
*   $\int_b^a f(x) \, dx = - \int_a^b f(x) \, dx$
*   $\int_a^a f(x) \, dx = 0$

> [!info] Algebraic & Interval Properties
> Assume $f, g$ continuous on $[a,b]$:
> - 1. $\int_a^b c \, dx = c(b - a), \quad c \in \mathbb{R}$
> - 2. $\int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$
> - 3. $\int_a^b cf(x) \, dx = c \int_a^b f(x) \, dx$
> - 4. $\int_a^c f(x) \, dx + \int_c^b f(x) \, dx = \int_a^b f(x) \, dx$

> [!info] Comparison Properties
> $\forall x \in [a,b]$:
> - 6. $f(x) \ge 0 \implies \int_a^b f(x) \, dx \ge 0$
> - 7. $f(x) \ge g(x) \implies \int_a^b f(x) \, dx \ge \int_a^b g(x) \, dx$
> - 8. $m \le f(x) \le M \implies m(b - a) \le \int_a^b f(x) \, dx \le M(b - a)$

---

### Examples

> [!example] Example 1: Expressing Limit as Integral
> **Problem:** Express $\lim_{n \to \infty} \sum_{i=1}^n (x_i^3 + x_i \sin x_i) \Delta x$ as an integral on $[0, \pi]$.
> 
> **Solution:** 
> By Theorem 4: $f(x) = x^3 + x \sin x, \quad [a,b] = [0,\pi]$.
> $$ \lim_{n \to \infty} \sum_{i=1}^n (x_i^3 + x_i \sin x_i) \Delta x = \int_0^\pi (x^3 + x \sin x) \, dx $$

> [!example] Example 2: Evaluating a Definite Integral
> **Problem:** Evaluate $\int_0^3 (x^3 - 6x) \, dx$.
> 
> **Solution:** 
> $[a,b] = [0,3] \implies \Delta x = \frac{3}{n}$. 
> Right endpoints: $x_i = \frac{3i}{n}$. 
> By Theorem 4:
> $$ \begin{aligned} \int_0^3 (x^3 - 6x) \, dx &= \lim_{n \to \infty} \sum_{i=1}^n \left[ \left(\frac{3i}{n}\right)^3 - 6\left(\frac{3i}{n}\right) \right] \frac{3}{n} \\ &= \lim_{n \to \infty} \frac{3}{n} \left[ \frac{27}{n^3} \sum_{i=1}^n i^3 - \frac{18}{n} \sum_{i=1}^n i \right] \\ &= \lim_{n \to \infty} \left\{ \frac{81}{n^4} \left[ \frac{n(n + 1)}{2} \right]^2 - \frac{54}{n^2} \frac{n(n + 1)}{2} \right\} \\ &= \lim_{n \to \infty} \left[ \frac{81}{4} \left(1 + \frac{1}{n}\right)^2 - 27\left(1 + \frac{1}{n}\right) \right] \\ &= \frac{81}{4} - 27 = -6.75 \end{aligned} $$
> 
> 
> ![[Pasted image 20260724013425.png|center]]



> [!example] Example 5: Midpoint Rule Approximation
> **Problem:** Approximate $\int_1^2 \frac{1}{x} \, dx$ using $n = 5$.
> 
> **Solution:**
> $[a,b] = [1,2], n=5 \implies \Delta x = 0.2$.
> Subintervals: $[1, 1.2], [1.2, 1.4], [1.4, 1.6], [1.6, 1.8], [1.8, 2.0]$.
> Midpoints $\bar{x}_i \in \{1.1, 1.3, 1.5, 1.7, 1.9\}$.
> $$ \begin{aligned} \int_1^2 \frac{1}{x} \, dx &\approx 0.2 \sum_{i=1}^5 \frac{1}{\bar{x}_i} \\ &= 0.2 \left( \frac{1}{1.1} + \frac{1}{1.3} + \frac{1}{1.5} + \frac{1}{1.7} + \frac{1}{1.9} \right) \approx 0.691908 \end{aligned} $$
> 
> ![[Pasted image 20260724013528.png|center]]

> [!example] Example 8: Integral Bounding (Property 8)
> **Problem:** Estimate bounds for $\int_1^4 \sqrt{x} \, dx$.
> 
> **Solution:**
> $f(x) = \sqrt{x}$ strictly increasing on $[1, 4]$.
> $m = f(1) = 1$
> $M = f(4) = 2$
> By Property 8: $m(b-a) \le \int_a^b f(x) \, dx \le M(b-a)$
> $$ 1(3) \le \int_1^4 \sqrt{x} \, dx \le 2(3) \implies 3 \le \int_1^4 \sqrt{x} \, dx \le 6 $$
> 
> ![[Pasted image 20260724013610.png|center]]


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 296)