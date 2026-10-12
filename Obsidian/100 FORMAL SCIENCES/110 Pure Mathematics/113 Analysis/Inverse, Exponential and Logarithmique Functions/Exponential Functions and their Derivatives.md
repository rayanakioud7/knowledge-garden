Date: 2026-08-18
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Derivatives]], [[Limits]], [[Exponential Functions]]

---

## 6.2 Exponential Functions and Their Derivatives

### 1. Derivatives of Exponential Functions


> [!info] Derivative of $a^x$
> The rate of change of any exponential function is proportional to the function itself.
> $$ f(x) = a^x \implies f'(x) = f'(0)a^x $$
> Where $f'(0) = \lim_{h \to 0} \frac{a^h - 1}{h}$.

> [!info] Proof: Derivative of $f(x) = a^x$
> Using the limit definition of a derivative:
> $$ \begin{aligned} f'(x) &= \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} \\ &= \lim_{h \to 0} \frac{a^{x+h} - a^x}{h} \\ &= \lim_{h \to 0} \frac{a^xa^h - a^x}{h} \\ &= \lim_{h \to 0} \frac{a^x(a^h - 1)}{h} \end{aligned} $$
> Since $a^x$ does not depend on $h$, it can be factored out of the limit:
> $$ f'(x) = a^x \lim_{h \to 0} \frac{a^h - 1}{h} $$
> Notice that the limit is the value of the derivative of $f$ at $0$:
> $$ \lim_{h \to 0} \frac{a^h - 1}{h} = f'(0) $$
> Therefore, if $f(x) = a^x$ is differentiable at $0$, it is differentiable everywhere and:
> $$ f'(x) = f'(0)a^x $$


> [!info] Definition of the Number $e$
> $e$ is the unique number such that:
> $$ \lim_{h \to 0} \frac{e^h - 1}{h} = 1 $$
> Geometrically, $f(x) = e^x$ is the function whose tangent line at $(0, 1)$ has a slope of exactly $1$.

> [!info] Derivative of the Natural Exponential Function
> $$ \frac{d}{dx} (e^x) = e^x $$
> Combining this with the Chain Rule:
> $$ \frac{d}{dx} (e^u) = e^u \frac{du}{dx} $$

![[Pasted image 20260818232822.png]]


---

### Numerical Estimation of $e$

> [!info] Derivation: Estimating the Value of $e$
> Let $f(x) = 2^x$. From the derivative proof, $f'(x) = k2^x$, where $k = f'(0) \approx 0.693147$.
> Let $e = 2^c \implies e^x = 2^{cx}$.
> Since $\frac{d}{dx}(e^x) = e^x$, applying the Chain Rule yields:
> $$ \begin{aligned} e^x &= \frac{d}{dx} (e^x) \\ &= \frac{d}{dx} (2^{cx}) \\ &= k2^{cx} \frac{d}{dx} (cx) \\ &= ck2^{cx} \end{aligned} $$
> Evaluating at $x = 0$:
> $$ 1 = ck \implies c = \frac{1}{k} $$
> Substituting $c$ back to find $e$:
> $$ e = 2^{1/k} \approx 2^{1/0.693147} \approx 2.71828 $$
> (The approximate value to 20 decimal places is $e \approx 2.71828182845904523536$, an irrational number).

---

### 2. Properties of the Natural Exponential Function

> [!info] Properties of the Natural Exponential Function
> The exponential function $f(x) = e^x$ is an increasing continuous function with domain $\mathbb{R}$ and range $(0, \infty)$.
> Thus $e^x > 0$ for all $x$. Also:
> $$ \lim_{x \to -\infty} e^x = 0 \quad \text{and} \quad \lim_{x \to \infty} e^x = \infty $$
> So the $x$-axis is a horizontal asymptote of $f(x) = e^x$.

![[Pasted image 20260818232902.png|640]]

---

### 3. Integration of Exponential Functions

> [!info] Integral of the Natural Exponential Function
> Because the exponential function $y = e^x$ is its own derivative, its integral is also simple:
> $$ \int e^x \, dx = e^x + C $$

---

### Examples

> [!example] Example 2: Differentiating with Chain Rule
> **Problem:** Differentiate the function $y = e^{\tan x}$.
> 
> **Solution:**
> Let $u = \tan x \implies y = e^u$.
> $$ \begin{aligned} \frac{dy}{dx} &= \frac{dy}{du} \frac{du}{dx} \\ &= e^u \frac{du}{dx} \\ &= e^{\tan x} \sec^2 x \end{aligned} $$

> [!example] Example 3: Differentiating with Product Rule
> **Problem:** Find $y'$ if $y = e^{-4x} \sin 5x$.
> 
> **Solution:**
> $$ \begin{aligned} y' &= e^{-4x}(\cos 5x)(5) + (\sin 5x)e^{-4x}(-4) \\ &= e^{-4x}(5 \cos 5x - 4 \sin 5x) \end{aligned} $$

> [!example] Example 5: Finding Absolute Extrema
> **Problem:** Find the absolute maximum value of the function $f(x) = xe^{-x}$.
> 
> **Solution:**
> Differentiate to find critical numbers:
> $$ \begin{aligned} f'(x) &= xe^{-x}(-1) + e^{-x}(1) \\ &= e^{-x}(1 - x) \end{aligned} $$
> Since $e^{-x} > 0 \ \forall x$, $f'(x) > 0$ when $1 - x > 0 \implies x < 1$.
> Similarly, $f'(x) < 0$ when $x > 1$.
> By the First Derivative Test for Absolute Extreme Values, $f$ has an absolute maximum when $x = 1$.
> $$ f(1) = (1)e^{-1} = \frac{1}{e} \approx 0.37 $$

> [!example] Example 6: Limits involving Exponentials
> **Problem:** Find $\lim_{x \to \infty} \frac{e^{2x}}{e^{2x} + 1}$.
> 
> **Solution:**
> Divide numerator and denominator by $e^{2x}$:
> $$ \begin{aligned} \lim_{x \to \infty} \frac{e^{2x}}{e^{2x} + 1} &= \lim_{x \to \infty} \frac{1}{1 + e^{-2x}} \\ &= \frac{1}{1 + 0} = 1 \end{aligned} $$

> [!example] Example 7: Curve Sketching with Exponentials
> **Problem:** Sketch the graph of $f(x) = e^{1/x}$.
> 
> **Solution:**
> Domain: $\{x \mid x \neq 0\}$.
> Vertical asymptotes ($x \to 0$):
> $$ \lim_{x \to 0^+} e^{1/x} = \lim_{t \to \infty} e^t = \infty \quad \text{(vertical asymptote at } x=0\text{)} $$
> $$ \lim_{x \to 0^-} e^{1/x} = \lim_{t \to -\infty} e^t = 0 $$
> Horizontal asymptotes ($x \to \pm\infty$):
> $$ \lim_{x \to \pm\infty} e^{1/x} = e^0 = 1 \quad \text{(horizontal asymptote } y=1\text{)} $$
> Derivatives:
> $$ f'(x) = -\frac{e^{1/x}}{x^2} \implies f'(x) < 0 \ \forall x \neq 0 \quad \text{(decreasing, no extrema)} $$
> $$ f''(x) = -\frac{x^2e^{1/x}(-1/x^2) - e^{1/x}(2x)}{x^4} = \frac{e^{1/x}(2x + 1)}{x^4} $$
> $f''(x) > 0 \implies x > -1/2 \quad (x \neq 0)$.
> $f''(x) < 0 \implies x < -1/2$.
> Inflection point at $(-1/2, e^{-2})$.
> 
> ![[Pasted image 20260818233529.png|center]]

> [!example] Example 8: Integration by Substitution
> **Problem:** Evaluate $\int x^2 e^{x^3} \, dx$.
> 
> **Solution:**
> Let $u = x^3 \implies du = 3x^2 \, dx \implies x^2 \, dx = \frac{1}{3} du$.
> $$ \begin{aligned} \int x^2 e^{x^3} \, dx &= \frac{1}{3} \int e^u \, du \\ &= \frac{1}{3} e^u + C \\ &= \frac{1}{3} e^{x^3} + C \end{aligned} $$

> [!example] Example 9: Area under an Exponential Curve
> **Problem:** Find the area under the curve $y = e^{-3x}$ from $0$ to $1$.
> 
> **Solution:**
> $$ \begin{aligned} A &= \int_0^1 e^{-3x} \, dx \\ &= \left[ -\frac{1}{3}e^{-3x} \right]_0^1 \\ &= \frac{1}{3}(1 - e^{-3}) \end{aligned} $$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 384)