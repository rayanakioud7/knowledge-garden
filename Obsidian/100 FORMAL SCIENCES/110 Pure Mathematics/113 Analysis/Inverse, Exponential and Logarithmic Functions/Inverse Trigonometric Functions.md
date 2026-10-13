Date: 2026-08-19
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Derivatives]], [[Limits]], [[Trigonometry]], [[Integral]]

---

## 6.6 Inverse Trigonometric Functions

### 1. Derivatives of Inverse Trigonometric Functions

> [!info] Table of Derivatives of Inverse Trigonometric Functions
> $$ \frac{d}{dx} (\sin^{-1} x) = \frac{1}{\sqrt{1 - x^2}} $$
> $$ \frac{d}{dx} (\cos^{-1} x) = -\frac{1}{\sqrt{1 - x^2}} $$
> $$ \frac{d}{dx} (\tan^{-1} x) = \frac{1}{1 + x^2} $$
> $$ \frac{d}{dx} (\csc^{-1} x) = -\frac{1}{x\sqrt{x^2 - 1}} $$
> $$ \frac{d}{dx} (\sec^{-1} x) = \frac{1}{x\sqrt{x^2 - 1}} $$
> $$ \frac{d}{dx} (\cot^{-1} x) = -\frac{1}{1 + x^2} $$

> [!info] Proof: Derivative of Inverse Sine
> Let $y = \sin^{-1} x$. Then $\sin y = x$ and $-\pi/2 \le y \le \pi/2$.
> Differentiating implicitly with respect to $x$:
> $$ \begin{aligned} \cos y \frac{dy}{dx} &= 1 \\ \frac{dy}{dx} &= \frac{1}{\cos y} \end{aligned} $$
> Since $-\pi/2 \le y \le \pi/2$, we know $\cos y \ge 0$.
> Thus, $\cos y = \sqrt{1 - \sin^2 y} = \sqrt{1 - x^2}$.
> $$ \frac{d}{dx} (\sin^{-1} x) = \frac{1}{\sqrt{1 - x^2}} \quad \text{for } -1 < x < 1 $$

> [!info] Proof: Derivative of Inverse Tangent
> Let $y = \tan^{-1} x$. Then $\tan y = x$.
> Differentiating implicitly with respect to $x$:
> $$ \begin{aligned} \sec^2 y \frac{dy}{dx} &= 1 \\ \frac{dy}{dx} &= \frac{1}{\sec^2 y} \\ &= \frac{1}{1 + \tan^2 y} \\ &= \frac{1}{1 + x^2} \end{aligned} $$
> $$ \frac{d}{dx} (\tan^{-1} x) = \frac{1}{1 + x^2} $$


> [!tip] Identities
> 
> $$\arccos(x)+\arcsin(x)=\frac{\pi}{2}$$
> $$\arctan(x)+\cot^{-1}(x)=\frac{\pi}{2}$$
> 

---

### Examples: Differentiation

> [!example] Example 2: Domain and Derivative involving $\sin^{-1}$
> **Problem:** If $f(x) = \sin^{-1}(x^2 - 1)$, find (a) the domain of $f$, (b) $f'(x)$, and (c) the domain of $f'$.
> 
> **Solution:**
> (a) Domain of $\sin^{-1}$ is $[-1, 1]$.
> $$ \begin{aligned} \{x \mid -1 \le x^2 - 1 \le 1\} &= \{x \mid 0 \le x^2 \le 2\} \\ &= \{x \mid |x| \le \sqrt{2}\} = [-\sqrt{2}, \sqrt{2}] \end{aligned} $$
> 
> (b) Using the Chain Rule:
> $$ \begin{aligned} f'(x) &= \frac{1}{\sqrt{1 - (x^2 - 1)^2}} \frac{d}{dx}(x^2 - 1) \\ &= \frac{1}{\sqrt{1 - (x^4 - 2x^2 + 1)}} (2x) \\ &= \frac{2x}{\sqrt{2x^2 - x^4}} \end{aligned} $$
> 
> (c) Domain of $f'$ requires $2x^2 - x^4 > 0$.
> $$ \begin{aligned} \{x \mid -1 < x^2 - 1 < 1\} &= \{x \mid 0 < x^2 < 2\} \\ &= \{x \mid 0 < |x| < \sqrt{2}\} = (-\sqrt{2}, 0) \cup (0, \sqrt{2}) \end{aligned} $$

> [!example] Example 5: Chain Rule Applications
> **Problem:** Differentiate (a) $y = \frac{1}{\sin^{-1} x}$ and (b) $f(x) = x \arctan\sqrt{x}$.
> 
> **Solution:**
> (a) Let $y = (\sin^{-1} x)^{-1}$.
> $$ \begin{aligned} \frac{dy}{dx} &= \frac{d}{dx} (\sin^{-1} x)^{-1} \\ &= -(\sin^{-1} x)^{-2} \frac{d}{dx} (\sin^{-1} x) \\ &= -\frac{1}{(\sin^{-1} x)^2 \sqrt{1 - x^2}} \end{aligned} $$
> 
> (b) Using the Product Rule and Chain Rule:
> $$ \begin{aligned} f'(x) &= x \frac{1}{1 + (\sqrt{x})^2} \left( \frac{1}{2}x^{-1/2} \right) + \arctan\sqrt{x} \\ &= \frac{\sqrt{x}}{2(1 + x)} + \arctan\sqrt{x} \end{aligned} $$

> [!example] Example 6: Proving an Identity using Calculus
> **Problem:** Prove the identity $\tan^{-1} x + \cot^{-1} x = \pi/2$.
> 
> **Solution:**
> Let $f(x) = \tan^{-1} x + \cot^{-1} x$.
> $$ f'(x) = \frac{1}{1 + x^2} - \frac{1}{1 + x^2} = 0 \quad \forall x $$
> Therefore, $f(x) = C$ (a constant).
> Let $x = 1$ to find $C$:
> $$ C = f(1) = \tan^{-1} 1 + \cot^{-1} 1 = \frac{\pi}{4} + \frac{\pi}{4} = \frac{\pi}{2} $$
> Thus, $\tan^{-1} x + \cot^{-1} x = \pi/2$.

---

### 2. Integrals Involving Inverse Trigonometric Functions

> [!info] Standard Integration Formulas
> $$ \int \frac{1}{\sqrt{1 - x^2}} \, dx = \sin^{-1} x + C $$
> $$ \int \frac{1}{x^2 + 1} \, dx = \tan^{-1} x + C $$

> [!info] Generalized Arctangent Integral
> By substituting $u = x/a$:
> $$ \int \frac{1}{x^2 + a^2} \, dx = \frac{1}{a} \tan^{-1} \left( \frac{x}{a} \right) + C $$

---

### Examples: Integration

> [!example] Example 7: Definite Integral yielding $\sin^{-1}$
> **Problem:** Find $\int_0^{1/4} \frac{1}{\sqrt{1 - 4x^2}} \, dx$.
> 
> **Solution:**
> Let $u = 2x \implies du = 2 \, dx \implies dx = du/2$.
> Limits: $x = 0 \implies u = 0$; $x = 1/4 \implies u = 1/2$.
> $$ \begin{aligned} \int_0^{1/4} \frac{1}{\sqrt{1 - 4x^2}} \, dx &= \int_0^{1/4} \frac{1}{\sqrt{1 - (2x)^2}} \, dx \\ &= \frac{1}{2} \int_0^{1/2} \frac{du}{\sqrt{1 - u^2}} \\ &= \frac{1}{2} [\sin^{-1} u]_0^{1/2} \\ &= \frac{1}{2} \left[ \sin^{-1} \left(\frac{1}{2}\right) - \sin^{-1} 0 \right] \\ &= \frac{1}{2} \cdot \frac{\pi}{6} = \frac{\pi}{12} \end{aligned} $$

> [!example] Example 9: Integration by Substitution yielding $\tan^{-1}$
> **Problem:** Find $\int \frac{x}{x^4 + 9} \, dx$.
> 
> **Solution:**
> We want the denominator to resemble $u^2 + a^2$.
> Let $u = x^2 \implies du = 2x \, dx \implies x \, dx = du/2$.
> We use the generalized formula with $a = 3$:
> $$ \begin{aligned} \int \frac{x}{x^4 + 9} \, dx &= \frac{1}{2} \int \frac{du}{u^2 + 9} \\ &= \frac{1}{2} \cdot \frac{1}{3} \tan^{-1} \left( \frac{u}{3} \right) + C \\ &= \frac{1}{6} \tan^{-1} \left( \frac{x^2}{3} \right) + C \end{aligned} $$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 453)