Date: 2026-08-19
Tags:  [[Mathematics]], [[Functions]], [[Analysis]], [[Derivatives]], [[Limits]], [[Integral]]

---

## 6.8 Indeterminate Forms and l'Hospital's Rule

### 1. l'Hospital's Rule

> [!info] Indeterminate Forms
> If $\lim_{x \to a} f(x) = 0$ and $\lim_{x \to a} g(x) = 0$, then $\lim_{x \to a} \frac{f(x)}{g(x)}$ is an **indeterminate form of type $0/0$**.
> If $\lim_{x \to a} f(x) = \pm\infty$ and $\lim_{x \to a} g(x) = \pm\infty$, then $\lim_{x \to a} \frac{f(x)}{g(x)}$ is an **indeterminate form of type $\infty/\infty$**.

> [!info] l'Hospital's Rule
> Suppose $f$ and $g$ are differentiable and $g'(x) \neq 0$ on an open interval $I$ that contains $a$ (except possibly at $a$). 
> Suppose that:
> $$\lim_{x \to a} f(x) = 0 \quad \text{and} \quad \lim_{x \to a} g(x) = 0$$
> or that:
> $$\lim_{x \to a} f(x) = \pm\infty \quad \text{and} \quad \lim_{x \to a} g(x) = \pm\infty$$
> Then:
> $$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$
> if the limit on the right side exists (or is $\infty$ or $-\infty$).
> 
> **Note:** l'Hospital's Rule is also valid for one-sided limits and for limits at infinity or negative infinity (i.e., "$x \to a$" can be replaced by $x \to a^+, x \to a^-, x \to \infty,$ or $x \to -\infty$).

---

### 2. Proofs of l'Hospital's Rule

> [!info] Proof: Special Case of l'Hospital's Rule
> For the special case where $f(a) = g(a) = 0$, $f'$ and $g'$ are continuous, and $g'(a) \neq 0$.
> Using the alternative form of the definition of a derivative:
> $$\begin{aligned} \lim_{x \to a} \frac{f'(x)}{g'(x)} &= \frac{f'(a)}{g'(a)} = \frac{\lim_{x \to a} \frac{f(x) - f(a)}{x - a}}{\lim_{x \to a} \frac{g(x) - g(a)}{x - a}} \\ &= \lim_{x \to a} \frac{\frac{f(x) - f(a)}{x - a}}{\frac{g(x) - g(a)}{x - a}} \\ &= \lim_{x \to a} \frac{f(x) - f(a)}{g(x) - g(a)} \\ &= \lim_{x \to a} \frac{f(x)}{g(x)} \end{aligned}$$
>

> [!info] Cauchy's Mean Value Theorem
> Suppose that the functions $f$ and $g$ are continuous on $[a, b]$ and differentiable on $(a, b)$, and $g'(x) \neq 0$ for all $x \in (a, b)$.
> Then there is a number $c \in (a, b)$ such that:
> $$\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$$
>

> [!info] Proof: General Version of l'Hospital's Rule (Type 0/0)
> Assume $\lim_{x \to a} f(x) = 0$ and $\lim_{x \to a} g(x) = 0$. Let $L = \lim_{x \to a} \frac{f'(x)}{g'(x)}$.
> Define:
> $$F(x) = \begin{cases} f(x) & \text{if } x \neq a \\ 0 & \text{if } x = a \end{cases} \qquad G(x) = \begin{cases} g(x) & \text{if } x \neq a \\ 0 & \text{if } x = a \end{cases}$$
> Then $F$ and $G$ are continuous on $I$ and $\lim_{x \to a} F(x) = F(a) = 0$.
> Let $x \in I$ and $x > a$. Then $F$ and $G$ are continuous on $[a, x]$ and differentiable on $(a, x)$ with $G' \neq 0$.
> By Cauchy's Mean Value Theorem, there is a number $y$ such that $a < y < x$ and:
> $$\frac{F'(y)}{G'(y)} = \frac{F(x) - F(a)}{G(x) - G(a)} = \frac{F(x)}{G(x)}$$
> As $x \to a^+$, we have $y \to a^+$ (since $a < y < x$).
> $$\lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{F(x)}{G(x)} = \lim_{y \to a^+} \frac{F'(y)}{G'(y)} = \lim_{y \to a^+} \frac{f'(y)}{g'(y)} = L$$
> A similar argument shows that the left-hand limit is also $L$.
> $$\lim_{x \to a} \frac{f(x)}{g(x)} = L$$
>

> [!info] Proof: l'Hospital's Rule for Infinite Limits ($x \to \infty$)
> If $a$ is infinite, let $t = 1/x$. Then $t \to 0^+$ as $x \to \infty$.
> $$\begin{aligned} \lim_{x \to \infty} \frac{f(x)}{g(x)} &= \lim_{t \to 0^+} \frac{f(1/t)}{g(1/t)} \\ &= \lim_{t \to 0^+} \frac{f'(1/t)(-1/t^2)}{g'(1/t)(-1/t^2)} \quad \text{(by l'Hospital's Rule for finite } a) \\ &= \lim_{t \to 0^+} \frac{f'(1/t)}{g'(1/t)} = \lim_{x \to \infty} \frac{f'(x)}{g'(x)} \end{aligned}$$
>

---

### 3. Other Indeterminate Forms

> [!info] Indeterminate Products (Type $0 \cdot \infty$)
> If $\lim_{x \to a} f(x) = 0$ and $\lim_{x \to a} g(x) = \infty$ (or $-\infty$), the limit $\lim_{x \to a} [f(x)g(x)]$ is an indeterminate form of type $0 \cdot \infty$.
> Convert the product to a quotient to use l'Hospital's Rule:
> $$fg = \frac{f}{1/g} \quad \text{or} \quad fg = \frac{g}{1/f}$$
>

> [!info] Indeterminate Differences (Type $\infty - \infty$)
> If $\lim_{x \to a} f(x) = \infty$ and $\lim_{x \to a} g(x) = \infty$, then $\lim_{x \to a} [f(x) - g(x)]$ is an indeterminate form of type $\infty - \infty$.
> Convert the difference into a quotient (by using a common denominator, rationalization, or factoring) to evaluate via l'Hospital's Rule.

> [!info] Indeterminate Powers (Types $0^0$, $\infty^0$, $1^\infty$)
> For $\lim_{x \to a} [f(x)]^{g(x)}$, three indeterminate forms exist:
> 1. $\lim f(x) = 0$ and $\lim g(x) = 0$ (type $0^0$)
> 2. $\lim f(x) = \infty$ and $\lim g(x) = 0$ (type $\infty^0$)
> 3. $\lim f(x) = 1$ and $\lim g(x) = \pm\infty$ (type $1^\infty$)
> 
> **Resolution:**
> Treat these cases by taking the natural logarithm:
> Let $y = [f(x)]^{g(x)}$, then $\ln y = g(x) \ln f(x)$.
> Or by writing the function as an exponential:
> $$[f(x)]^{g(x)} = e^{g(x) \ln f(x)}$$
>

---

### Examples

> [!example] Example 1: Form $0/0$
> **Problem:** Find $\lim_{x \to 1} \frac{\ln x}{x - 1}$.
> 
> **Solution:**
> $\lim_{x \to 1} \ln x = 0$ and $\lim_{x \to 1} (x - 1) = 0$, so l'Hospital's Rule applies:
> $$\begin{aligned} \lim_{x \to 1} \frac{\ln x}{x - 1} &= \lim_{x \to 1} \frac{\frac{d}{dx}(\ln x)}{\frac{d}{dx}(x - 1)} \\ &= \lim_{x \to 1} \frac{1/x}{1} = 1 \end{aligned}$$
>

> [!example] Example 2: Form $\infty/\infty$ (Multiple Applications)
> **Problem:** Calculate $\lim_{x \to \infty} \frac{e^x}{x^2}$.
> 
> **Solution:**
> $\lim_{x \to \infty} e^x = \infty$ and $\lim_{x \to \infty} x^2 = \infty$.
> $$\lim_{x \to \infty} \frac{e^x}{x^2} = \lim_{x \to \infty} \frac{\frac{d}{dx}(e^x)}{\frac{d}{dx}(x^2)} = \lim_{x \to \infty} \frac{e^x}{2x}$$
>
> The limit on the right is still indeterminate type $\infty/\infty$. Applying l'Hospital's Rule again gives:
> $$\lim_{x \to \infty} \frac{e^x}{x^2} = \lim_{x \to \infty} \frac{e^x}{2x} = \lim_{x \to \infty} \frac{e^x}{2} = \infty$$
>

> [!example] Example 3: Form $\infty/\infty$ with Roots
> **Problem:** Calculate $\lim_{x \to \infty} \frac{\ln x}{\sqrt[3]{x}}$.
> 
> **Solution:**
> $\lim_{x \to \infty} \ln x = \infty$ and $\lim_{x \to \infty} \sqrt[3]{x} = \infty$.
> $$\lim_{x \to \infty} \frac{\ln x}{\sqrt[3]{x}} = \lim_{x \to \infty} \frac{1/x}{\frac{1}{3}x^{-2/3}} = \lim_{x \to \infty} \frac{3}{\sqrt[3]{x}} = 0$$
>

> [!example] Example 4: Simplifying Between Applications
> **Problem:** Find $\lim_{x \to 0} \frac{\tan x - x}{x^3}$.
> 
> **Solution:**
> Type $0/0$.
> $$\lim_{x \to 0} \frac{\tan x - x}{x^3} = \lim_{x \to 0} \frac{\sec^2 x - 1}{3x^2}$$
>
> Still type $0/0$. Apply again:
> $$\lim_{x \to 0} \frac{\sec^2 x - 1}{3x^2} = \lim_{x \to 0} \frac{2\sec^2 x \tan x}{6x}$$
>
> Because $\lim_{x \to 0} \sec^2 x = 1$, simplify the calculation:
> $$\lim_{x \to 0} \frac{2\sec^2 x \tan x}{6x} = \frac{1}{3} \lim_{x \to 0} \sec^2 x \cdot \lim_{x \to 0} \frac{\tan x}{x} = \frac{1}{3} (1) \lim_{x \to 0} \frac{\sec^2 x}{1} = \frac{1}{3}$$
>

> [!example] Example 5: Cautionary Failure
> **Problem:** Find $\lim_{x \to \pi^-} \frac{\sin x}{1 - \cos x}$.
> 
> **Solution:**
> If blindly applying l'Hospital's Rule: $\lim_{x \to \pi^-} \frac{\cos x}{\sin x} = -\infty$. This is **wrong**.
> The denominator $(1 - \cos x)$ approaches $1 - (-1) = 2 \neq 0$. l'Hospital's Rule cannot be applied.
> $$\lim_{x \to \pi^-} \frac{\sin x}{1 - \cos x} = \frac{\sin \pi}{1 - \cos \pi} = \frac{0}{1 - (-1)} = 0$$
>

> [!example] Example 6: Indeterminate Product $0 \cdot \infty$
> **Problem:** Evaluate $\lim_{x \to 0^+} x \ln x$.
> 
> **Solution:**
> Type $0 \cdot -\infty$. Write $x = 1/(1/x)$:
> $$\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{1/x} = \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0$$
>

> [!example] Example 7: Curve Sketching Application
> **Problem:** Find $\lim_{x \to -\infty} x e^x$ to find horizontal asymptotes for $f(x) = x e^x$.
> 
> **Solution:**
> Type $-\infty \cdot 0$.
> $$\lim_{x \to -\infty} x e^x = \lim_{x \to -\infty} \frac{x}{e^{-x}} = \lim_{x \to -\infty} \frac{1}{-e^{-x}} = \lim_{x \to -\infty} (-e^x) = 0$$
>
> Thus, the $x$-axis is a horizontal asymptote.

> [!example] Example 8: Indeterminate Difference $\infty - \infty$
> **Problem:** Compute $\lim_{x \to (\pi/2)^-} (\sec x - \tan x)$.
> 
> **Solution:**
> Both terms $\to \infty$. Use a common denominator:
> $$\begin{aligned} \lim_{x \to (\pi/2)^-} (\sec x - \tan x) &= \lim_{x \to (\pi/2)^-} \left( \frac{1}{\cos x} - \frac{\sin x}{\cos x} \right) \\ &= \lim_{x \to (\pi/2)^-} \frac{1 - \sin x}{\cos x} \\ &= \lim_{x \to (\pi/2)^-} \frac{-\cos x}{-\sin x} = 0 \end{aligned}$$
>

> [!example] Example 9: Indeterminate Power $1^\infty$
> **Problem:** Calculate $\lim_{x \to 0^+} (1 + \sin 4x)^{\cot x}$.
> 
> **Solution:**
> Type $1^\infty$. Let $y = (1 + \sin 4x)^{\cot x}$.
> $$\ln y = \cot x \ln(1 + \sin 4x) = \frac{\ln(1 + \sin 4x)}{\tan x}$$
>
> Applying l'Hospital's Rule:
> $$\lim_{x \to 0^+} \ln y = \lim_{x \to 0^+} \frac{\frac{4\cos 4x}{1 + \sin 4x}}{\sec^2 x} = 4$$
>
> Since $y = e^{\ln y}$:
> $$\lim_{x \to 0^+} (1 + \sin 4x)^{\cot x} = \lim_{x \to 0^+} e^{\ln y} = e^4$$
>

> [!example] Example 10: Indeterminate Power $0^0$
> **Problem:** Find $\lim_{x \to 0^+} x^x$.
> 
> **Solution:**
> Type $0^0$. Write as an exponential: $x^x = e^{x \ln x}$.
> From Example 6, $\lim_{x \to 0^+} x \ln x = 0$.
> $$\lim_{x \to 0^+} x^x = \lim_{x \to 0^+} e^{x \ln x} = e^0 = 1$$
>

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 462)