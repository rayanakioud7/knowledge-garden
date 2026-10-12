Date: 2026-08-19
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Derivatives]], [[Limits]], [[Logarithmic Functions]]

---

## 6.4 Derivatives of Logarithmic Functions

### 1. Derivatives of Logarithmic Functions

> [!info] Derivative of the Natural Logarithm
> $$ \frac{d}{dx} (\ln x) = \frac{1}{x} $$
> 
> **Proof:**
> Let $y = \ln x \implies e^y = x$.
> Differentiating implicitly with respect to $x$:
> $$ \begin{aligned} e^y \frac{dy}{dx} &= 1 \\ \frac{dy}{dx} &= \frac{1}{e^y} = \frac{1}{x} \end{aligned} $$

> [!info] Chain Rule for Natural Logarithms
> Combining the derivative of $\ln x$ with the Chain Rule:
> $$ \frac{d}{dx} (\ln u) = \frac{1}{u} \frac{du}{dx} \quad \text{or} \quad \frac{d}{dx} [\ln g(x)] = \frac{g'(x)}{g(x)} $$

---

### Examples

> [!example] Example 1
> **Problem:** Differentiate $y = \ln(x^3 + 1)$.
> 
> **Solution:**
> Let $u = x^3 + 1$. Then $y = \ln u$, so:
> $$ \begin{aligned} \frac{dy}{dx} &= \frac{1}{u} \frac{du}{dx} \\ &= \frac{1}{x^3 + 1} (3x^2) = \frac{3x^2}{x^3 + 1} \end{aligned} $$

> [!example] Example 2
> **Problem:** Find $\frac{d}{dx} \ln(\sin x)$.
> 
> **Solution:**
> $$ \frac{d}{dx} \ln(\sin x) = \frac{1}{\sin x} \frac{d}{dx} (\sin x) = \frac{1}{\sin x} \cos x = \cot x $$

> [!example] Example 3
> **Problem:** Differentiate $f(x) = \sqrt{\ln x}$.
> 
> **Solution:**
> $$ \begin{aligned} f'(x) &= \frac{1}{2}(\ln x)^{-1/2} \frac{d}{dx} (\ln x) \\ &= \frac{1}{2\sqrt{\ln x}} \cdot \frac{1}{x} = \frac{1}{2x\sqrt{\ln x}} \end{aligned} $$

> [!example] Example 4
> **Problem:** Find $\frac{d}{dx} \ln \frac{x + 1}{\sqrt{x - 2}}$.
> 
> **Solution 1:**
> Direct differentiation using quotient and chain rules:
> $$ \begin{aligned} \frac{d}{dx} \ln \frac{x + 1}{\sqrt{x - 2}} &= \frac{1}{\frac{x + 1}{\sqrt{x - 2}}} \frac{d}{dx} \left( \frac{x + 1}{\sqrt{x - 2}} \right) \\ &= \frac{\sqrt{x - 2}}{x + 1} \frac{\sqrt{x - 2} \cdot 1 - (x + 1)(\frac{1}{2})(x - 2)^{-1/2}}{x - 2} \\ &= \frac{x - 2 - \frac{1}{2}(x + 1)}{(x + 1)(x - 2)} = \frac{x - 5}{2(x + 1)(x - 2)} \end{aligned} $$
> 
> **Solution 2 (Preferred):**
> Simplify using logarithmic laws before differentiating:
> $$ \begin{aligned} \frac{d}{dx} \ln \frac{x + 1}{\sqrt{x - 2}} &= \frac{d}{dx} \left[ \ln(x + 1) - \frac{1}{2}\ln(x - 2) \right] \\ &= \frac{1}{x + 1} - \frac{1}{2} \left( \frac{1}{x - 2} \right) \end{aligned} $$
> 
> ![[Pasted image 20260819024521.png|center]]

> [!example] Example 5
> **Problem:** Find the absolute minimum value of $f(x) = x^2 \ln x$.
> 
> **Solution:**
> Domain: $(0, \infty)$.
> $$ \begin{aligned} f'(x) &= x^2 \cdot \frac{1}{x} + 2x \ln x = x(1 + 2\ln x) \end{aligned} $$
> $f'(x) = 0 \implies 2\ln x = -1 \implies \ln x = -1/2 \implies x = e^{-1/2}$.
> $f'(x) > 0 \ \forall x > e^{-1/2}$ and $f'(x) < 0 \ \forall x \in (0, e^{-1/2})$.
> Absolute minimum value: $f(e^{-1/2}) = (e^{-1/2})^2 \ln(e^{-1/2}) = e^{-1}(-1/2) = -\frac{1}{2e}$.

> [!example] Example 6
> **Problem:** Discuss the curve $y = \ln(4 - x^2)$.
> 
> **Solution:**
> **Domain:** $4 - x^2 > 0 \implies x^2 < 4 \implies x \in (-2, 2)$.
> **Intercepts:** $y$-intercept is $f(0) = \ln 4$. $x$-intercept where $\ln(4 - x^2) = 0 \implies 4 - x^2 = 1 \implies x = \pm\sqrt{3}$.
> **Symmetry:** $f(-x) = f(x) \implies$ even function (symmetric about $y$-axis).
> **Asymptotes:** $\lim_{x \to 2^-} \ln(4 - x^2) = -\infty$ and $\lim_{x \to -2^+} \ln(4 - x^2) = -\infty$. Vertical asymptotes at $x = \pm 2$.
> **Derivatives:** $f'(x) = \frac{-2x}{4 - x^2}$. Local maximum at $x=0$.
> $f''(x) = \frac{(4 - x^2)(-2) - (-2x)(-2x)}{(4 - x^2)^2} = \frac{-8 - 2x^2}{(4 - x^2)^2} < 0 \ \forall x$. Curve is concave downward on $(-2, 2)$.
> 
> ![[Pasted image 20260819024618.png|center]]

> [!example] Example 7
> **Problem:** Find $f'(x)$ if $f(x) = \ln |x|$.
> 
> **Solution:**
> $$ f(x) = \begin{cases} \ln x & \text{if } x > 0 \\ \ln(-x) & \text{if } x < 0 \end{cases} $$
> $$ f'(x) = \begin{cases} \frac{1}{x} & \text{if } x > 0 \\ \frac{1}{-x}(-1) = \frac{1}{x} & \text{if } x < 0 \end{cases} $$
> Thus, $f'(x) = 1/x$ for all $x \neq 0$.

---

### 2. Integration Involving Logarithms

> [!info] Derivative and Integral of $\ln |x|$
> $$ \frac{d}{dx} (\ln |x|) = \frac{1}{x} $$
> This establishes the integration formula for the missing case $n = -1$ in the Power Rule:
> $$ \int \frac{1}{x} \, dx = \ln |x| + C $$

> [!example] Example 8
> **Problem:** Find the area of the region under the hyperbola $xy = 1$ from $x = 1$ to $x = 2$.
> 
> **Solution:**
> $$ \begin{aligned} A &= \int_1^2 \frac{1}{x} \, dx = \ln |x| \Big]_1^2 \\ &= \ln 2 - \ln 1 = \ln 2 \approx 0.693 \end{aligned} $$
> 
> ![[Pasted image 20260819024728.png|center]]

> [!example] Example 9
> **Problem:** Evaluate $\int \frac{x}{x^2 + 1} \, dx$.
> 
> **Solution:**
> Let $u = x^2 + 1 \implies du = 2x \, dx \implies x \, dx = \frac{1}{2} du$.
> $$ \begin{aligned} \int \frac{x}{x^2 + 1} \, dx &= \frac{1}{2} \int \frac{du}{u} = \frac{1}{2} \ln |u| + C \\ &= \frac{1}{2} \ln(x^2 + 1) + C \quad (\text{since } x^2 + 1 > 0) \end{aligned} $$

> [!example] Example 10
> **Problem:** Calculate $\int_1^e \frac{\ln x}{x} \, dx$.
> 
> **Solution:**
> Let $u = \ln x \implies du = \frac{dx}{x}$.
> Limits: $x = 1 \implies u = 0$; $x = e \implies u = 1$.
> $$ \begin{aligned} \int_1^e \frac{\ln x}{x} \, dx &= \int_0^1 u \, du = \left[ \frac{u^2}{2} \right]_0^1 = \frac{1}{2} \end{aligned} $$
> 
> ![[Pasted image 20260819024800.png|center]]

> [!example] Example 11
> **Problem:** Calculate $\int \tan x \, dx$.
> 
> **Solution:**
> $$ \int \tan x \, dx = \int \frac{\sin x}{\cos x} \, dx $$
> Let $u = \cos x \implies du = -\sin x \, dx \implies \sin x \, dx = -du$.
> $$ \begin{aligned} \int \tan x \, dx &= \int -\frac{du}{u} = -\ln |u| + C \\ &= -\ln |\cos x| + C = \ln |\sec x| + C \end{aligned} $$

---

### 3. General Logarithmic and Exponential Functions

> [!info] Derivatives of General Bases
> Change of Base Formula: $\log_a x = \frac{\ln x}{\ln a}$. Since $\ln a$ is a constant:
> $$ \frac{d}{dx} (\log_a x) = \frac{1}{x \ln a} $$
> 
> **Proof of Exponential Derivative:**
> $$ e^{\ln a} = a \implies a^x = e^{\ln a^x} = e^{x \ln a} $$
> $$ \begin{aligned} \frac{d}{dx} (a^x) &= \frac{d}{dx} (e^{x \ln a}) = e^{x \ln a} \frac{d}{dx}(x \ln a) \\ &= (e^{\ln a})^x (\ln a) = a^x \ln a \end{aligned} $$
> $$ \frac{d}{dx} (a^x) = a^x \ln a $$

> [!info] Integral of $a^x$
> $$ \int a^x \, dx = \frac{a^x}{\ln a} + C \quad (a \neq 1) $$

> [!example] Example 12
> **Problem:** Differentiate $y = \log_{10}(2 + \sin x)$.
> 
> **Solution:**
> $$ \frac{d}{dx} \log_{10}(2 + \sin x) = \frac{1}{(2 + \sin x)\ln 10} \frac{d}{dx}(2 + \sin x) = \frac{\cos x}{(2 + \sin x)\ln 10} $$

> [!example] Example 13
> **Problem:** Differentiate $y = 10^{x^2}$.
> 
> **Solution:**
> $$ \frac{d}{dx} (10^{x^2}) = 10^{x^2} (\ln 10) \frac{d}{dx}(x^2) = (2\ln 10)x 10^{x^2} $$

> [!example] Example 14
> **Problem:** Evaluate $\int_0^5 2^x \, dx$.
> 
> **Solution:**
> $$ \int_0^5 2^x \, dx = \left[ \frac{2^x}{\ln 2} \right]_0^5 = \frac{2^5}{\ln 2} - \frac{2^0}{\ln 2} = \frac{31}{\ln 2} $$

---

### 4. Logarithmic Differentiation

> [!info] Steps in Logarithmic Differentiation
> 1. Take natural logarithms of both sides of an equation $y = f(x)$ and use the properties of logarithms to simplify.
> 2. Differentiate implicitly with respect to $x$.
> 3. Solve the resulting equation for $y'$.

> [!info] Proof: The Power Rule for Real Exponents
> Let $n \in \mathbb{R}$ and $f(x) = x^n$. We prove $f'(x) = nx^{n-1}$.
> Let $y = x^n$. Using logarithmic differentiation:
> $$ \begin{aligned} \ln |y| &= \ln |x^n| = n \ln |x| \quad (x \neq 0) \\ \frac{d}{dx} (\ln |y|) &= \frac{d}{dx} (n \ln |x|) \\ \frac{y'}{y} &= \frac{n}{x} \\ y' &= n \frac{y}{x} = n \frac{x^n}{x} = nx^{n-1} \end{aligned} $$

> [!example] Example 15
> **Problem:** Differentiate $y = \frac{x^{3/4}\sqrt{x^2 + 1}}{(3x + 2)^5}$.
> 
> **Solution:**
> $$ \begin{aligned} \ln y &= \frac{3}{4} \ln x + \frac{1}{2} \ln(x^2 + 1) - 5 \ln(3x + 2) \\ \frac{1}{y} \frac{dy}{dx} &= \frac{3}{4} \cdot \frac{1}{x} + \frac{1}{2} \cdot \frac{2x}{x^2 + 1} - 5 \cdot \frac{3}{3x + 2} \\ \frac{dy}{dx} &= y \left( \frac{3}{4x} + \frac{x}{x^2 + 1} - \frac{15}{3x + 2} \right) \\ &= \frac{x^{3/4}\sqrt{x^2 + 1}}{(3x + 2)^5} \left( \frac{3}{4x} + \frac{x}{x^2 + 1} - \frac{15}{3x + 2} \right) \end{aligned} $$

> [!example] Example 16: Variable Base and Exponent
> **Problem:** Differentiate $y = x^{\sqrt{x}}$.
> 
> **Solution 1:**
> $$ \begin{aligned} \ln y &= \ln x^{\sqrt{x}} = \sqrt{x} \ln x \\ \frac{y'}{y} &= \sqrt{x} \cdot \frac{1}{x} + (\ln x) \frac{1}{2\sqrt{x}} = \frac{2 + \ln x}{2\sqrt{x}} \\ y' &= y \left( \frac{2 + \ln x}{2\sqrt{x}} \right) = x^{\sqrt{x}} \left( \frac{2 + \ln x}{2\sqrt{x}} \right) \end{aligned} $$
> 
> **Solution 2:**
> Let $x^{\sqrt{x}} = (e^{\ln x})^{\sqrt{x}} = e^{\sqrt{x}\ln x}$.
> $$ \begin{aligned} \frac{d}{dx} (x^{\sqrt{x}}) &= \frac{d}{dx} (e^{\sqrt{x}\ln x}) = e^{\sqrt{x}\ln x} \frac{d}{dx}(\sqrt{x}\ln x) \\ &= x^{\sqrt{x}} \left( \frac{2 + \ln x}{2\sqrt{x}} \right) \end{aligned} $$
> 
> ![[Pasted image 20260819025040.png|center]]

---

### 5. The Number $e$ as a Limit

> [!info] Proof: $e$ as a Limit
> Let $f(x) = \ln x \implies f'(x) = 1/x \implies f'(1) = 1$.
> Using the limit definition of the derivative at $x = 1$:
> $$ \begin{aligned} f'(1) &= \lim_{h \to 0} \frac{f(1 + h) - f(1)}{h} = \lim_{x \to 0} \frac{f(1 + x) - f(1)}{x} \\ &= \lim_{x \to 0} \frac{\ln(1 + x) - \ln 1}{x} = \lim_{x \to 0} \frac{1}{x} \ln(1 + x) \\ &= \lim_{x \to 0} \ln(1 + x)^{1/x} = 1 \end{aligned} $$
> Because the exponential function is continuous, apply $e^{(\dots)}$ to both sides:
> $$ \begin{aligned} e^1 &= e^{\lim_{x \to 0} \ln(1 + x)^{1/x}} = \lim_{x \to 0} e^{\ln(1 + x)^{1/x}} \\ e &= \lim_{x \to 0} (1 + x)^{1/x} \end{aligned} $$
> Substituting $n = 1/x \implies n \to \infty$ as $x \to 0^+$, an alternative expression is:
> $$ e = \lim_{n \to \infty} \left( 1 + \frac{1}{n} \right)^n $$
> 
> ![[Pasted image 20260819025105.png|center]]

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 416)