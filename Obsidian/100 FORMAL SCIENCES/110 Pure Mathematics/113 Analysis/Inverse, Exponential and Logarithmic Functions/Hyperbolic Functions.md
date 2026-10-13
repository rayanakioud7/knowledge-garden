Date: 2026-08-19
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Derivatives]], [[Limits]], [[Integral]]

---

## 6.7 Hyperbolic Functions

### 1. Definitions and Identities

> [!info] Definition of the Hyperbolic Functions
> The hyperbolic functions are defined as combinations of $e^x$ and $e^{-x}$:
> $$ \sinh x = \frac{e^x - e^{-x}}{2} \qquad \text{csch} x = \frac{1}{\sinh x} $$
> $$ \cosh x = \frac{e^x + e^{-x}}{2} \qquad \text{sech} x = \frac{1}{\cosh x} $$
> $$ \tanh x = \frac{\sinh x}{\cosh x} \qquad \text{coth} x = \frac{\cosh x}{\sinh x} $$
> ![[Pasted image 20260819220157.png|center]]

> [!info] Hyperbolic Identities
> The hyperbolic functions satisfy the following identities:
> $$ \sinh(-x) = -\sinh x \qquad \cosh(-x) = \cosh x $$
> $$ \cosh^2 x - \sinh^2 x = 1 \qquad 1 - \tanh^2 x = \text{sech}^2 x $$
> $$ \sinh(x + y) = \sinh x \cosh y + \cosh x \sinh y $$
> $$ \cosh(x + y) = \cosh x \cosh y + \sinh x \sinh y $$
> ![[Pasted image 20260819220243.png|center]]

> [!example] Example 1: Proving Hyperbolic Identities
> **Problem:** Prove (a) $\cosh^2 x - \sinh^2 x = 1$ and (b) $1 - \tanh^2 x = \text{sech}^2 x$.
> 
> **Proof (a):**
> $$ \begin{aligned} \cosh^2 x - \sinh^2 x &= \left( \frac{e^x + e^{-x}}{2} \right)^2 - \left( \frac{e^x - e^{-x}}{2} \right)^2 \\ &= \frac{e^{2x} + 2 + e^{-2x}}{4} - \frac{e^{2x} - 2 + e^{-2x}}{4} \\ &= \frac{4}{4} = 1 \end{aligned} $$
> 
> **Proof (b):**
> Divide the identity from (a) by $\cosh^2 x$:
> $$ \begin{aligned} \frac{\cosh^2 x}{\cosh^2 x} - \frac{\sinh^2 x}{\cosh^2 x} &= \frac{1}{\cosh^2 x} \\ 1 - \tanh^2 x &= \text{sech}^2 x \end{aligned} $$

---

### 2. Derivatives of Hyperbolic Functions

> [!info] Derivatives of Hyperbolic Functions
> The differentiation formulas for the hyperbolic functions are:
> $$ \frac{d}{dx} (\sinh x) = \cosh x \qquad \frac{d}{dx} (\text{csch} x) = -\text{csch} x \coth x $$
> $$ \frac{d}{dx} (\cosh x) = \sinh x \qquad \frac{d}{dx} (\text{sech} x) = -\text{sech} x \tanh x $$
> $$ \frac{d}{dx} (\tanh x) = \text{sech}^2 x \qquad \frac{d}{dx} (\coth x) = -\text{csch}^2 x $$
> 
> **Proof of $\frac{d}{dx}(\sinh x)$:** 
> $$ \frac{d}{dx} (\sinh x) = \frac{d}{dx} \left( \frac{e^x - e^{-x}}{2} \right) = \frac{e^x + e^{-x}}{2} = \cosh x $$

> [!example] Example 2: Chain Rule Application
> **Problem:** Differentiate $y = \cosh \sqrt{x}$.
> 
> **Solution:**
> $$ \frac{d}{dx} (\cosh \sqrt{x}) = \sinh \sqrt{x} \cdot \frac{d}{dx} \sqrt{x} = \frac{\sinh \sqrt{x}}{2\sqrt{x}} $$

---

### 3. Inverse Hyperbolic Functions

> [!info] Inverse Hyperbolic Functions
> The inverse hyperbolic functions are defined as:
> $$ y = \sinh^{-1} x \iff \sinh y = x $$
> $$ y = \cosh^{-1} x \iff \cosh y = x \quad \text{and} \quad y \ge 0 $$
> $$ y = \tanh^{-1} x \iff \tanh y = x $$
> ![[Pasted image 20260819220325.png|center]]

> [!info] Logarithmic Expressions of Inverse Hyperbolic Functions
> The inverse hyperbolic functions can be expressed in terms of natural logarithms:
> $$ \sinh^{-1} x = \ln(x + \sqrt{x^2 + 1}) \qquad x \in \mathbb{R} $$
> $$ \cosh^{-1} x = \ln(x + \sqrt{x^2 - 1}) \qquad x \ge 1 $$
> $$ \tanh^{-1} x = \frac{1}{2} \ln \left( \frac{1 + x}{1 - x} \right) \qquad -1 < x < 1 $$

> [!example] Example 3: Proof of Logarithmic Form
> **Problem:** Show that $\sinh^{-1} x = \ln(x + \sqrt{x^2 + 1})$.
> 
> **Proof:**
> Let $y = \sinh^{-1} x \implies x = \sinh y = \frac{e^y - e^{-y}}{2}$.
> Multiply by $2e^y$ to form a quadratic equation in $e^y$:
> $$ \begin{aligned} 2x &= e^y - e^{-y} \\ 2xe^y &= e^{2y} - 1 \\ (e^y)^2 - 2x(e^y) - 1 &= 0 \end{aligned} $$
> Solving for $e^y$ using the quadratic formula:
> $$ e^y = \frac{2x \pm \sqrt{4x^2 + 4}}{2} = x \pm \sqrt{x^2 + 1} $$
> Since $e^y > 0 \ \forall y \in \mathbb{R}$, and $x - \sqrt{x^2 + 1} < 0$, we must reject the minus sign.
> $$ \begin{aligned} e^y &= x + \sqrt{x^2 + 1} \\ y &= \ln(x + \sqrt{x^2 + 1}) \end{aligned} $$

---

### 4. Derivatives of Inverse Hyperbolic Functions

> [!info] Derivatives of Inverse Hyperbolic Functions
> The differentiation formulas for the inverse hyperbolic functions are:
> $$ \frac{d}{dx} (\sinh^{-1} x) = \frac{1}{\sqrt{1 + x^2}} \qquad \frac{d}{dx} (\text{csch}^{-1} x) = -\frac{1}{|x|\sqrt{x^2 + 1}} $$
> $$ \frac{d}{dx} (\cosh^{-1} x) = \frac{1}{\sqrt{x^2 - 1}} \qquad \frac{d}{dx} (\text{sech}^{-1} x) = -\frac{1}{x\sqrt{1 - x^2}} $$
> $$ \frac{d}{dx} (\tanh^{-1} x) = \frac{1}{1 - x^2} \qquad \frac{d}{dx} (\coth^{-1} x) = \frac{1}{1 - x^2} $$

> [!example] Example 4: Proof of Inverse Derivative
> **Problem:** Prove that $\frac{d}{dx} (\sinh^{-1} x) = \frac{1}{\sqrt{1 + x^2}}$.
> 
> **Proof 1 (Implicit Differentiation):**
> Let $y = \sinh^{-1} x \implies \sinh y = x$.
> Differentiating implicitly with respect to $x$:
> $$ \begin{aligned} \cosh y \frac{dy}{dx} &= 1 \\ \frac{dy}{dx} &= \frac{1}{\cosh y} \end{aligned} $$
> Since $\cosh^2 y - \sinh^2 y = 1$ and $\cosh y \ge 0 \implies \cosh y = \sqrt{1 + \sinh^2 y} = \sqrt{1 + x^2}$.
> $$ \frac{dy}{dx} = \frac{1}{\sqrt{1 + x^2}} $$
> 
> **Proof 2 (Logarithmic Form):**
> Using $\sinh^{-1} x = \ln(x + \sqrt{x^2 + 1})$:
> $$ \begin{aligned} \frac{d}{dx} (\sinh^{-1} x) &= \frac{d}{dx} \ln(x + \sqrt{x^2 + 1}) \\ &= \frac{1}{x + \sqrt{x^2 + 1}} \frac{d}{dx} (x + \sqrt{x^2 + 1}) \\ &= \frac{1}{x + \sqrt{x^2 + 1}} \left( 1 + \frac{x}{\sqrt{x^2 + 1}} \right) \\ &= \frac{1}{x + \sqrt{x^2 + 1}} \left( \frac{\sqrt{x^2 + 1} + x}{\sqrt{x^2 + 1}} \right) \\ &= \frac{1}{\sqrt{x^2 + 1}} \end{aligned} $$

> [!example] Example 5: Differentiating a Composite Function
> **Problem:** Find $\frac{d}{dx} [\tanh^{-1}(\sin x)]$.
> 
> **Solution:**
> Using the Chain Rule:
> $$ \begin{aligned} \frac{d}{dx} [\tanh^{-1}(\sin x)] &= \frac{1}{1 - (\sin x)^2} \frac{d}{dx} (\sin x) \\ &= \frac{1}{1 - \sin^2 x} \cos x \\ &= \frac{\cos x}{\cos^2 x} = \sec x \end{aligned} $$

---

### 5. Integration

> [!example] Example 6: Integral yielding Inverse Hyperbolic
> **Problem:** Evaluate $\int_0^1 \frac{dx}{\sqrt{1 + x^2}}$.
> 
> **Solution:**
> An antiderivative of $\frac{1}{\sqrt{1 + x^2}}$ is $\sinh^{-1} x$.
> $$ \begin{aligned} \int_0^1 \frac{dx}{\sqrt{1 + x^2}} &= \sinh^{-1} x \Big]_0^1 \\ &= \sinh^{-1} 1 \\ &= \ln(1 + \sqrt{2}) \end{aligned} $$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 462)