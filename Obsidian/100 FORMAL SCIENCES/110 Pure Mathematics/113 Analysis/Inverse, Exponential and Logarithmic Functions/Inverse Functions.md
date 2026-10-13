Date: 2026-08-04
Tags:  [[Mathematics]], [[Functions]], [[Analysis]], [[Derivatives]], [[Limits]]

---

## 6.1 The Calculus of Inverse Functions

### 1. Continuity and Differentiability

> [!info] Theorem 6 (Continuity of Inverse Functions)
> Let $f$ be a one-to-one continuous function defined on an interval.
> $\implies f^{-1}$ is continuous.

> [!info] Theorem 7 (Derivative of an Inverse Function)
> Let $f$ be a one-to-one differentiable function with inverse $f^{-1}$.
> $f'(f^{-1}(a)) \neq 0 \implies f^{-1}$ is differentiable at $a$, and:
> $$ (f^{-1})'(a) = \frac{1}{f'(f^{-1}(a))} $$
> 
> **Proof:**
> Let $f(b) = a \implies f^{-1}(a) = b$. 
> Let $y = f^{-1}(x) \implies f(y) = x$.
> $f$ is differentiable $\implies f$ is continuous $\implies f^{-1}$ is continuous (by Theorem 6).
> Thus, $x \to a \implies f^{-1}(x) \to f^{-1}(a) \implies y \to b$.
> Using the limit definition of the derivative:
> $$ \begin{aligned} (f^{-1})'(a) &= \lim_{x \to a} \frac{f^{-1}(x) - f^{-1}(a)}{x - a} \\ &= \lim_{y \to b} \frac{y - b}{f(y) - f(b)} \\ &= \lim_{y \to b} \frac{1}{\frac{f(y) - f(b)}{y - b}} \\ &= \frac{1}{\lim_{y \to b} \frac{f(y) - f(b)}{y - b}} \\ &= \frac{1}{f'(b)} \\ &= \frac{1}{f'(f^{-1}(a))} \end{aligned} $$

![[Pasted image 20260818215412.png|543]]

---

### 2. General Derivative Formulas

Replacing $a$ with $x$ yields the general derivative formula for an inverse function:
$$ 1. \quad (f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))} $$

Let $y = f^{-1}(x) \implies f(y) = x$. Expressed in Leibniz notation:
$$ 2. \quad \frac{dy}{dx} = \frac{1}{\frac{dx}{dy}} $$

Implicit differentiation derivation:
$$ \begin{aligned} f(y) &= x \\ f'(y) \frac{dy}{dx} &= 1 \\ \frac{dy}{dx} &= \frac{1}{f'(y)} = \frac{1}{\frac{dx}{dy}} \end{aligned} $$

---

### Examples

> [!example] Example 6: Calculating $(f^{-1})'(a)$ without explicit $f^{-1}$
> **Problem:** Let $f(x) = x^2, \ 0 \le x \le 2$. Find $(f^{-1})'(1)$.
> 
> **Solution:** 
> $f(1) = 1 \implies f^{-1}(1) = 1$.
> $f'(x) = 2x$.
> By Theorem 7:
> $$ \begin{aligned} (f^{-1})'(1) &= \frac{1}{f'(f^{-1}(1))} \\ &= \frac{1}{f'(1)} \\ &= \frac{1}{2} \end{aligned} $$
> 
> ![[Pasted image 20260818215459.png|center]]

> [!example] Example 7: Derivative of an Inverse by Inspection
> **Problem:** Let $f(x) = 2x + \cos x$. Find $(f^{-1})'(1)$.
> 
> **Solution:** 
> $f'(x) = 2 - \sin x > 0 \implies f$ is strictly increasing (one-to-one).
> By inspection, $f(0) = 2(0) + \cos(0) = 1 \implies f^{-1}(1) = 0$.
> By Theorem 7:
> $$ \begin{aligned} (f^{-1})'(1) &= \frac{1}{f'(f^{-1}(1))} \\ &= \frac{1}{f'(0)} \\ &= \frac{1}{2 - \sin 0} = \frac{1}{2} \end{aligned} $$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 384)