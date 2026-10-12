Date: 2026-07-07
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Derivatives]]

---

## Antiderivatives

Finding a function $F$ whose derivative is a known function $f$ is the process of finding an antiderivative.

### 1. The General Antiderivative

> [!info] Definition: Antiderivative
> A function $F$ is called an **antiderivative** of $f$ on an interval $I$ if $F'(x) = f(x)$ for all $x$ in $I$.

---

> [!info] Theorem 1
> If $F$ is an antiderivative of $f$ on an interval $I$, then the most general antiderivative of $f$ on $I$ is $F(x) + C$, where $C$ is an arbitrary constant.

![[Pasted image 20260707185631.png|center]]

---

### 2. Antidifferentiation Formulas

Every differentiation formula gives rise to an antidifferentiation formula. To obtain the most general antiderivative from the particular ones, add a constant $C$.

| Function | Particular antiderivative | Function | Particular antiderivative |
| :--- | :--- | :--- | :--- |
| $cf(x)$ | $cF(x)$ | $\cos x$ | $\sin x$ |
| $f(x) + g(x)$ | $F(x) + G(x)$ | $\sin x$ | $-\cos x$ |
| $x^n \ (n \neq -1)$ | $\frac{x^{n+1}}{n + 1}$ | $\sec^2 x$ | $\tan x$ |
| | | $\sec x \tan x$ | $\sec x$ |



---

### 3. Differential Equations

> [!info] Definition: Differential Equation
> An equation that involves the derivatives of a function is called a **differential equation**. The general solution involves an arbitrary constant (or constants), which can be uniquely specified if extra conditions are given.

---

### Examples

> [!example] Example 1: Finding General Antiderivatives
> **Problem Statement:** Find the most general antiderivative of each of the following functions. 
> (a) $f(x) = \sin x$ 
> (b) $f(x) = x^n, n \ge 0$ 
> (c) $f(x) = x^{-3}$
> 
> **Solution:**
> (a) Since $\frac{d}{dx}(-\cos x) = \sin x$, the most general antiderivative is $G(x) = -\cos x + C$.
> (b) Using the Power Rule to discover an antiderivative:
> $$
> \begin{aligned}
> \frac{d}{dx} \left( \frac{x^{n+1}}{n+1} \right) &= \frac{(n+1)x^n}{n+1} = x^n
> \end{aligned}
> $$
> Thus, the general antiderivative is $F(x) = \frac{x^{n+1}}{n+1} + C$.
> (c) For $f(x) = x^{-3}$, the particular antiderivative is $\frac{x^{-2}}{-2}$. The general antiderivative must account for the fact that $f$ is not defined at $x=0$:
> $$
> \begin{aligned}
> F(x) &= \begin{cases}
> -\frac{1}{2x^2} + C_1 & \text{if } x > 0 \\
> -\frac{1}{2x^2} + C_2 & \text{if } x < 0
> \end{cases}
> \end{aligned}
> $$
>

> [!example] Example 2: Simplifying Before Antidifferentiating
> **Problem Statement:** Find all functions $g$ such that $g'(x) = 4\sin x + \frac{2x^5 - \sqrt{x}}{x}$.
> 
> **Solution:**
> Rewrite the given function first:
> $$
> \begin{aligned}
> g'(x) &= 4 \sin x + 2x^4 - \frac{1}{\sqrt{x}} \\
> &= 4 \sin x + 2x^4 - x^{-1/2}
> \end{aligned}
> $$
> Using the formulas in the table together with Theorem 1, we obtain:
> $$
> \begin{aligned}
> g(x) &= 4(-\cos x) + 2\frac{x^5}{5} - \frac{x^{1/2}}{1/2} + C \\
> &= -4\cos x + \frac{2}{5}x^5 - 2\sqrt{x} + C
> \end{aligned}
> $$
>

> [!example] Example 3: Initial Value Problem
> **Problem Statement:** Find $f$ if $f'(x) = x\sqrt{x}$ and $f(1) = 2$.
> 
> **Solution:**
> Rewrite the derivative: $f'(x) = x^{3/2}$.
> The general antiderivative is:
> $$
> \begin{aligned}
> f(x) &= \frac{x^{5/2}}{5/2} + C = \frac{2}{5}x^{5/2} + C
> \end{aligned}
> $$
> To determine $C$, we use the fact that $f(1) = 2$:
> $$
> \begin{aligned}
> f(1) &= \frac{2}{5} + C = 2 \\
> C &= 2 - \frac{2}{5} = \frac{8}{5}
> \end{aligned}
> $$
> The particular solution is $f(x) = \frac{2x^{5/2} + 8}{5}$.

> [!example] Example 4: Second Derivative Initial Value Problem
> **Problem Statement:** Find $f$ if $f''(x) = 12x^2 + 6x - 4$, $f(0) = 4$, and $f(1) = 1$.
> 
> **Solution:**
> The general antiderivative of $f''(x) = 12x^2 + 6x - 4$ is:
> $$
> \begin{aligned}
> f'(x) &= 12\frac{x^3}{3} + 6\frac{x^2}{2} - 4x + C = 4x^3 + 3x^2 - 4x + C
> \end{aligned}
> $$
> Using the antidifferentiation rules once more, we find that:
> $$
> \begin{aligned}
> f(x) &= 4\frac{x^4}{4} + 3\frac{x^3}{3} - 4\frac{x^2}{2} + Cx + D \\
> &= x^4 + x^3 - 2x^2 + Cx + D
> \end{aligned}
> $$
> To determine $C$ and $D$ we use the given conditions that $f(0) = 4$ and $f(1) = 1$. Since $f(0) = 0 + D = 4$, we have $D = 4$.
> Since $f(1) = 1$, we have:
> $$
> \begin{aligned}
> f(1) &= 1 + 1 - 2 + C(1) + 4 = 1 \\
> C + 4 &= 1 \implies C = -3
> \end{aligned}
> $$
> Therefore the required function is $f(x) = x^4 + x^3 - 2x^2 - 3x + 4$.

> [!example] Example 5: Sketching an Antiderivative
> **Problem Statement:** The graph of a function $f$ is given in Figure 2. Make a rough sketch of an antiderivative $F$, given that $F(0) = 2$.
> 
> ![[Pasted image 20260707185915.png|center]]
> 
> **Solution:**
> We are guided by the fact that the slope of $y = F(x)$ is $f(x)$.
> *   We start at the point $(0, 2)$ and draw $F$ as an initially decreasing function since $f(x)$ is negative when $0 < x < 1$.
> *   Notice that $f(1) = f(3) = 0$, so $F$ has horizontal tangents when $x = 1$ and $x = 3$.
> *   For $1 < x < 3$, $f(x)$ is positive and so $F$ is increasing.
> *   We see that $F$ has a local minimum when $x = 1$ and a local maximum when $x = 3$.
> *   For $x > 3$, $f(x)$ is negative and so $F$ is decreasing on $(3, \infty)$.
> *   Since $f(x) \to 0$ as $x \to \infty$, the graph of $F$ becomes flatter as $x \to \infty$.
> *   Also notice that $F''(x) = f'(x)$ changes from positive to negative at $x = 2$ and from negative to positive at $x = 4$, so $F$ has inflection points when $x = 2$ and $x = 4$.
> 
> ![[Pasted image 20260707185928.png|center]]

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 269)