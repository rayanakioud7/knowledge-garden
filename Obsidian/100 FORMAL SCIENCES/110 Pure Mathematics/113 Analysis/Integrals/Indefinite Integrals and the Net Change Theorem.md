Date: 2026-08-04
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Antiderivatives]], [[Derivatives]]

---
## 4.4 Indefinite Integrals and the Net Change Theorem

### 1. Indefinite Integrals

> [!info] Definition: Indefinite Integral
> $$ \int f(x) \, dx = F(x) \iff F'(x) = f(x) $$

$\int f(x) \, dx$ represents a family of functions parameterized by constant $C$.

> [!warning] Definite vs. Indefinite Integrals
> *   $\int_a^b f(x) \, dx \in \mathbb{R}$ (a specific number).
> *   $\int f(x) \, dx$ is a function (or family of functions).
> *   Connection via FTC2: $\int_a^b f(x) \, dx = \left[ \int f(x) \, dx \right]_a^b$.

---

### Table of Indefinite Integrals


| $f(x)$ | $\int f(x) \, dx$ | $f(x)$ | $\int f(x) \, dx$ |
| :--- | :--- | :--- | :--- |
| $cf(x)$ | $c \int f(x) \, dx$ | $f(x) \pm g(x)$ | $\int f(x) \, dx \pm \int g(x) \, dx$ |
| $k$ | $kx + C$ | $x^n \ (n \neq -1)$ | $\frac{x^{n+1}}{n+1} + C$ |
| $\sin x$ | $-\cos x + C$ | $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ | $\csc^2 x$ | $-\cot x + C$ |
| $\sec x \tan x$ | $\sec x + C$ | $\csc x \cot x$ | $-\csc x + C$ |

Formulas are valid only on intervals where defined.

---

### 2. The Net Change Theorem

> [!info] Net Change Theorem
> $$ \int_a^b F'(x) \, dx = F(b) - F(a) $$
> $\int \text{rate of change} \, dx = \text{net change}$.

**Applications:**
*   **Volume:** $V'(t) \implies \int_{t_1}^{t_2} V'(t) \, dt = V(t_2) - V(t_1)$.
*   **Concentration:** $[C]'(t) \implies \int_{t_1}^{t_2} \frac{d[C]}{dt} \, dt = [C](t_2) - [C](t_1)$.
*   **Mass/Density:** $\rho(x) = m'(x) \implies \int_a^b \rho(x) \, dx = m(b) - m(a)$.
*   **Population:** $n'(t) \implies \int_{t_1}^{t_2} \frac{dn}{dt} \, dt = n(t_2) - n(t_1)$.
*   **Cost:** $C'(x) \implies \int_{x_1}^{x_2} C'(x) \, dx = C(x_2) - C(x_1)$.

---

### Examples

> [!example] Example 1: General Indefinite Integral
> **Problem:** $\int (10x^4 - 2\sec^2 x) \, dx$
> **Solution:**
> $$
> \begin{aligned}
> \int (10x^4 - 2\sec^2 x) \, dx &= 10 \int x^4 \, dx - 2 \int \sec^2 x \, dx \\
> &= 10 \left( \frac{x^5}{5} \right) - 2 \tan x + C \\
> &= 2x^5 - 2\tan x + C
> \end{aligned}
> $$
> 
> ![[Pasted image 20260804063222.png|center]]

> [!example] Example 2: Rewriting Before Integrating
> **Problem:** $\int \frac{\cos \theta}{\sin^2 \theta} \, d\theta$
> **Solution:**
> $$
> \begin{aligned}
> \int \frac{\cos \theta}{\sin^2 \theta} \, d\theta &= \int \left( \frac{1}{\sin \theta} \right) \left( \frac{\cos \theta}{\sin \theta} \right) d\theta \\
> &= \int \csc \theta \cot \theta \, d\theta \\
> &= -\csc \theta + C
> \end{aligned}
> $$

> [!example] Example 3: Evaluating a Definite Integral
> **Problem:** $\int_0^3 (x^3 - 6x) \, dx$
> **Solution:**
> $$
> \begin{aligned}
> \int_0^3 (x^3 - 6x) \, dx &= \left[ \frac{x^4}{4} - 6\frac{x^2}{2} \right]_0^3 \\
> &= \left( \frac{1}{4} \cdot 3^4 - 3 \cdot 3^2 \right) - \left( \frac{1}{4} \cdot 0^4 - 3 \cdot 0^2 \right) \\
> &= \frac{81}{4} - 27 - 0 + 0 = -6.75
> \end{aligned}
> $$

> [!example] Example 4: Evaluating with Trigonometry
> **Problem:** $\int_0^{12} (x - 12\sin x) \, dx$
> **Solution:**
> $$
> \begin{aligned}
> \int_0^{12} (x - 12\sin x) \, dx &= \left[ \frac{x^2}{2} - 12(-\cos x) \right]_0^{12} \\
> &= \frac{1}{2}(12)^2 + 12(\cos 12 - \cos 0) \\
> &= 72 + 12\cos 12 - 12 \\
> &= 60 + 12\cos 12 \approx 70.1262
> \end{aligned}
> $$
> 
> ![[Pasted image 20260804063246.png|center]]

> [!example] Example 5: Simplifying Integrands
> **Problem:** $\int_1^9 \frac{2t^2 + t^2\sqrt{t} - 1}{t^2} \, dt$
> **Solution:**
> $$
> \begin{aligned}
> \int_1^9 \frac{2t^2 + t^2\sqrt{t} - 1}{t^2} \, dt &= \int_1^9 (2 + t^{1/2} - t^{-2}) \, dt \\
> &= \left[ 2t + \frac{t^{3/2}}{3/2} - \frac{t^{-1}}{-1} \right]_1^9 \\
> &= \left[ 2t + \frac{2}{3}t^{3/2} + \frac{1}{t} \right]_1^9 \\
> &= \left( 2 \cdot 9 + \frac{2}{3} \cdot 9^{3/2} + \frac{1}{9} \right) - \left( 2 \cdot 1 + \frac{2}{3} \cdot 1^{3/2} + \frac{1}{1} \right) \\
> &= 18 + 18 + \frac{1}{9} - 2 - \frac{2}{3} - 1 = 32\frac{4}{9}
> \end{aligned}
> $$


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 321)