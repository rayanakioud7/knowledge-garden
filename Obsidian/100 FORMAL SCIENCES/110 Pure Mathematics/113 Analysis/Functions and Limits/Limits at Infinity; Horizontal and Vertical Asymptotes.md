Date: 2026-07-06
Tags:[[Mathematics]], [[Analysis]], [[Functions]], [[Limits]]

---

## Limits at Infinity; Horizontal Asymptotes

This section investigates the end behavior of functions as $x$ becomes arbitrarily large (positive or negative). 

### 1. Limits at Infinity and Horizontal Asymptotes
The values of a function can approach a specific value as $x$ grows without bound.

![[Pasted image 20260706194719.png|center]]

> [!info] Definition 1: Limit at Infinity (Positive)
> Let $f$ be a function defined on some interval $(a, \infty)$. Then
> $$ \lim_{x \to \infty} f(x) = L $$
> means that the values of $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently large.

![[Pasted image 20260706194753.png]]

> [!info] Definition 2: Limit at Infinity (Negative)
> Let $f$ be a function defined on some interval $(-\infty, a)$. Then
> $$ \lim_{x \to -\infty} f(x) = L $$
> means that the values of $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently large negative.

![[Pasted image 20260706194855.png]]

> [!info] Definition 3: Horizontal Asymptote
> The line $y = L$ is called a **horizontal asymptote** of the curve $y = f(x)$ if either
> $$ \lim_{x \to \infty} f(x) = L \quad \text{or} \quad \lim_{x \to -\infty} f(x) = L $$
>

![[Pasted image 20260706194930.png|center]]

> [!info] Theorem 4
> If $r > 0$ is a rational number, then
> $$ \lim_{x \to \infty} \frac{1}{x^r} = 0 $$
> If $r > 0$ is a rational number such that $x^r$ is defined for all $x$, then
> $$ \lim_{x \to -\infty} \frac{1}{x^r} = 0 $$
>

---

### Examples (Evaluating Limits and Finding Asymptotes)

> [!example] Example 1: Finding limits from a graph
> **Problem Statement:** Find the infinite limits, limits at infinity, and asymptotes for the function $f$ whose graph is shown in Figure 5.
> 
> **Solution:**
> *   As $x \to -1$ from both sides, the values become large: $\lim_{x \to -1} f(x) = \infty$.
> *   As $x \to 2^-$, the values become large negative, and as $x \to 2^+$, the values become large positive: $\lim_{x \to 2^-} f(x) = -\infty$ and $\lim_{x \to 2^+} f(x) = \infty$.
> *   Thus, both of the lines $x = -1$ and $x = 2$ are vertical asymptotes.
> *   As $x \to \infty$, $f(x)$ approaches $4$. As $x \to -\infty$, $f(x)$ approaches $2$.
> *   Therefore: $\lim_{x \to \infty} f(x) = 4$ and $\lim_{x \to -\infty} f(x) = 2$.
> *   This means that both $y = 4$ and $y = 2$ are horizontal asymptotes.
> 
> ![[Pasted image 20260706195002.png|center]]

> [!example] Example 2: Limits of $1/x$
> **Problem Statement:** Find $\lim_{x \to \infty} \frac{1}{x}$ and $\lim_{x \to -\infty} \frac{1}{x}$.
> 
> **Solution:**
> *   By taking $x$ large enough, $1/x$ can be made as close to $0$ as we please.
> *   $$ \lim_{x \to \infty} \frac{1}{x} = 0 $$
> *   Similar reasoning shows that when $x$ is large negative, $1/x$ is small negative.
> *   $$ \lim_{x \to -\infty} \frac{1}{x} = 0 $$
> *   It follows that the line $y = 0$ (the $x$-axis) is a horizontal asymptote of the curve $y = 1/x$.
> 
> ![[Pasted image 20260706195033.png|center]]

> [!example] Example 3: Rational Function
> **Problem Statement:** Evaluate $\lim_{x \to \infty} \frac{3x^2 - x - 2}{5x^2 + 4x + 1}$ and indicate which properties of limits are used at each stage.
> 
> **Solution:**
> *   To evaluate the limit at infinity of a rational function, first divide both the numerator and denominator by the highest power of $x$ that occurs in the denominator (here, $x^2$).
> $$
> \begin{aligned}
> \lim_{x \to \infty} \frac{3x^2 - x - 2}{5x^2 + 4x + 1} &= \lim_{x \to \infty} \frac{\frac{3x^2 - x - 2}{x^2}}{\frac{5x^2 + 4x + 1}{x^2}} \\
> &= \lim_{x \to \infty} \frac{3 - \frac{1}{x} - \frac{2}{x^2}}{5 + \frac{4}{x} + \frac{1}{x^2}} \\
> &= \frac{\lim_{x \to \infty} \left( 3 - \frac{1}{x} - \frac{2}{x^2} \right)}{\lim_{x \to \infty} \left( 5 + \frac{4}{x} + \frac{1}{x^2} \right)} \\
> &= \frac{\lim_{x \to \infty} 3 - \lim_{x \to \infty} \frac{1}{x} - 2 \lim_{x \to \infty} \frac{1}{x^2}}{\lim_{x \to \infty} 5 + 4 \lim_{x \to \infty} \frac{1}{x} + \lim_{x \to \infty} \frac{1}{x^2}} \\
> &= \frac{3 - 0 - 0}{5 + 0 + 0} \\
> &= \frac{3}{5}
> \end{aligned}
> $$
> *   A similar calculation shows that the limit as $x \to -\infty$ is also $3/5$.
> 
> ![[Pasted image 20260706195121.png|center]]

> [!example] Example 4: Function with a Radical
> **Problem Statement:** Find the horizontal and vertical asymptotes of the graph of the function $f(x) = \frac{\sqrt{2x^2 + 1}}{3x - 5}$.
> 
> **Solution:**
> *   Dividing both numerator and denominator by $x$ and using properties of limits. For $x > 0$, $\sqrt{x^2} = x$.
> $$
> \begin{aligned}
> \lim_{x \to \infty} \frac{\sqrt{2x^2 + 1}}{3x - 5} &= \lim_{x \to \infty} \frac{\frac{\sqrt{2x^2 + 1}}{x}}{\frac{3x - 5}{x}} \\
> &= \lim_{x \to \infty} \frac{\sqrt{\frac{2x^2 + 1}{x^2}}}{3 - \frac{5}{x}} \\
> &= \lim_{x \to \infty} \frac{\sqrt{2 + \frac{1}{x^2}}}{3 - \frac{5}{x}} \\
> &= \frac{\sqrt{\lim_{x \to \infty} 2 + \lim_{x \to \infty} \frac{1}{x^2}}}{\lim_{x \to \infty} 3 - 5 \lim_{x \to \infty} \frac{1}{x}} \\
> &= \frac{\sqrt{2 + 0}}{3 - 5 \cdot 0} \\
> &= \frac{\sqrt{2}}{3}
> \end{aligned}
> $$
> *   Therefore, the line $y = \frac{\sqrt{2}}{3}$ is a horizontal asymptote.
> *   In computing the limit as $x \to -\infty$, for $x < 0$, we have $\sqrt{x^2} = |x| = -x$. So when we divide the numerator by $x$, we get $\frac{1}{x}\sqrt{2x^2+1} = -\frac{1}{\sqrt{x^2}}\sqrt{2x^2+1} = -\sqrt{2+\frac{1}{x^2}}$.
> $$
> \begin{aligned}
> \lim_{x \to -\infty} \frac{\sqrt{2x^2 + 1}}{3x - 5} &= \lim_{x \to -\infty} \frac{-\sqrt{2 + \frac{1}{x^2}}}{3 - \frac{5}{x}} \\
> &= \frac{-\sqrt{2 + \lim_{x \to -\infty} \frac{1}{x^2}}}{3 - 5 \lim_{x \to -\infty} \frac{1}{x}} \\
> &= -\frac{\sqrt{2}}{3}
> \end{aligned}
> $$
> *   Thus the line $y = -\frac{\sqrt{2}}{3}$ is also a horizontal asymptote.
> *   A vertical asymptote is likely to occur when the denominator, $3x - 5$, is $0$, that is, when $x = \frac{5}{3}$.
> *   If $x$ is close to $\frac{5}{3}$ and $x > \frac{5}{3}$, then the denominator is close to $0$ and positive, and the numerator is positive, so $f(x)$ is positive. Therefore:
> $$ \lim_{x \to (5/3)^+} \frac{\sqrt{2x^2 + 1}}{3x - 5} = \infty $$
> *   If $x$ is close to $\frac{5}{3}$ but $x < \frac{5}{3}$, then $3x - 5 < 0$ and $f(x)$ is large negative. Thus:
> $$ \lim_{x \to (5/3)^-} \frac{\sqrt{2x^2 + 1}}{3x - 5} = -\infty $$
> *   The vertical asymptote is $x = \frac{5}{3}$.
> 
> ![[Pasted image 20260706195229.png|center]]

> [!example] Example 5: Multiplying by the Conjugate
> **Problem Statement:** Compute $\lim_{x \to \infty} (\sqrt{x^2 + 1} - x)$.
> 
> **Solution:**
> *   We use algebra to rewrite the function by multiplying numerator and denominator by the conjugate radical.
> $$
> \begin{aligned}
> \lim_{x \to \infty} (\sqrt{x^2 + 1} - x) &= \lim_{x \to \infty} \left( \sqrt{x^2 + 1} - x \right) \frac{\sqrt{x^2 + 1} + x}{\sqrt{x^2 + 1} + x} \\
> &= \lim_{x \to \infty} \frac{(x^2 + 1) - x^2}{\sqrt{x^2 + 1} + x} \\
> &= \lim_{x \to \infty} \frac{1}{\sqrt{x^2 + 1} + x}
> \end{aligned}
> $$
> *   The denominator of this last expression becomes large as $x \to \infty$. So,
> $$ \lim_{x \to \infty} (\sqrt{x^2 + 1} - x) = \lim_{x \to \infty} \frac{1}{\sqrt{x^2 + 1} + x} = 0 $$
> 
>![[Pasted image 20260706195249.png|center]]

> [!example] Example 6: Limit of Sine
> **Problem Statement:** Evaluate $\lim_{x \to \infty} \sin \frac{1}{x}$.
> 
> **Solution:**
> *   If we let $t = 1/x$, then $t \to 0^+$ as $x \to \infty$. Therefore,
> $$
> \begin{aligned}
> \lim_{x \to \infty} \sin \frac{1}{x} &= \lim_{t \to 0^+} \sin t = 0
> \end{aligned}
> $$
>

> [!example] Example 7: Oscillating Function
> **Problem Statement:** Evaluate $\lim_{x \to \infty} \sin x$.
> 
> **Solution:**
> *   As $x$ increases, the values of $\sin x$ oscillate between $1$ and $-1$ infinitely often and so they don't approach any definite number.
> *   Thus $\lim_{x \to \infty} \sin x$ does not exist.

---

### 2. Infinite Limits at Infinity
The notation $\lim_{x \to \infty} f(x) = \infty$ is used to indicate that the values of $f(x)$ become large as $x$ becomes large. Similar meanings are attached to combinations of $\infty$ and $-\infty$.

> [!example] Example 8: Polynomials
> **Problem Statement:** Find $\lim_{x \to \infty} x^3$ and $\lim_{x \to -\infty} x^3$.
> 
> **Solution:**
> *   When $x$ becomes large, $x^3$ also becomes large. Therefore we can write:
> $$ \lim_{x \to \infty} x^3 = \infty $$
> *   Similarly, when $x$ is large negative, so is $x^3$. Thus:
> $$ \lim_{x \to -\infty} x^3 = -\infty $$
> 
> ![[Pasted image 20260706195427.png|center]]

> [!example] Example 9: Difference of Terms
> **Problem Statement:** Find $\lim_{x \to \infty} (x^2 - x)$.
> 
> **Solution:**
> *   The Limit Laws can't be applied to infinite limits because $\infty$ is not a number (so $\infty - \infty$ can't be defined). However, we can write:
> $$
> \begin{aligned}
> \lim_{x \to \infty} (x^2 - x) &= \lim_{x \to \infty} x(x - 1) = \infty
> \end{aligned}
> $$
> *   This works because both $x$ and $x - 1$ become arbitrarily large and so their product does too.

> [!example] Example 10: Improper Rational Function
> **Problem Statement:** Find $\lim_{x \to \infty} \frac{x^2 + x}{3 - x}$.
> 
> **Solution:**
> *   We divide the numerator and denominator by the highest power of $x$ in the denominator, which is just $x$:
> $$
> \begin{aligned}
> \lim_{x \to \infty} \frac{x^2 + x}{3 - x} &= \lim_{x \to \infty} \frac{x + 1}{\frac{3}{x} - 1} = -\infty
> \end{aligned}
> $$
> *   This occurs because $x + 1 \to \infty$ and $3/x - 1 \to -1$ as $x \to \infty$.

> [!example] Example 11: Sketching a Polynomial Graph
> **Problem Statement:** Sketch the graph of $y = (x - 2)^4(x + 1)^3(x - 1)$ by finding its intercepts and its limits as $x \to \infty$ and $x \to -\infty$.
> 
> **Solution:**
> *   The $y$-intercept is $f(0) = (-2)^4(1)^3(-1) = -16$.
> *   The $x$-intercepts are found by setting $y = 0$: $x = 2, -1, 1$.
> *   Notice that since $(x - 2)^4$ is positive, the function doesn't change sign at $2$; thus the graph doesn't cross the $x$-axis at $2$.
> *   The graph crosses the axis at $-1$ and $1$.
> *   When $x$ is large positive, all three factors are large, so:
> $$ \lim_{x \to \infty} (x - 2)^4(x + 1)^3(x - 1) = \infty $$
> *   When $x$ is large negative, the first factor is large positive and the second and third factors are both large negative, making the overall product positive, so:
> $$ \lim_{x \to -\infty} (x - 2)^4(x + 1)^3(x - 1) = \infty $$
> 
>![[Pasted image 20260706195526.png|center]]

---

### 3. Precise Definitions

> [!info] Definition 5: Precise Definition of Limit at Infinity
> Let $f$ be a function defined on some interval $(a, \infty)$. Then
> $$ \lim_{x \to \infty} f(x) = L $$
> means that for every $\varepsilon > 0$ there is a corresponding number $N$ such that
> if $x > N$ then $|f(x) - L| < \varepsilon$
>

![[Pasted image 20260706195656.png|center]]

> [!info] Definition 6: Precise Definition of Limit at Negative Infinity
> Let $f$ be a function defined on some interval $(-\infty, a)$. Then
> $$ \lim_{x \to -\infty} f(x) = L $$
> means that for every $\varepsilon > 0$ there is a corresponding number $N$ such that
> if $x < N$ then $|f(x) - L| < \varepsilon$
>

![[Pasted image 20260706195824.png|center]]

> [!example] Example 12: Finding $N$ Graphically
> **Problem Statement:** Use a graph to find a number $N$ such that if $x > N$ then $\left| \frac{3x^2 - x - 2}{5x^2 + 4x + 1} - 0.6 \right| < 0.1$.
> 
> **Solution:**
> *   We rewrite the given inequality as $0.5 < \frac{3x^2 - x - 2}{5x^2 + 4x + 1} < 0.7$.
> *   Graph the curve and these lines. We use the cursor to estimate that the curve crosses the line $y = 0.5$ when $x \approx 6.7$.
> *   To the right of this number, the curve stays between the lines $y = 0.5$ and $y = 0.7$.
> *   Rounding to be safe, we can say that if $x > 7$ then $\left| \frac{3x^2 - x - 2}{5x^2 + 4x + 1} - 0.6 \right| < 0.1$.
> *   In other words, for $\varepsilon = 0.1$, we can choose $N = 7$ (or any larger number) in Definition 5.
> 
> ![[Pasted image 20260706195858.png|center]]

> [!example] Example 13: Epsilon-N Proof
> **Problem Statement:** Use Definition 5 to prove that $\lim_{x \to \infty} \frac{1}{x} = 0$.
> 
> **Solution:**
> *   Given $\varepsilon > 0$, we want to find $N$ such that if $x > N$ then $\left| \frac{1}{x} - 0 \right| < \varepsilon$.
> *   In computing the limit we may assume that $x > 0$. Then $1/x < \varepsilon \iff x > 1/\varepsilon$.
> *   Let's choose $N = 1/\varepsilon$.
> *   So if $x > N = \frac{1}{\varepsilon}$, then $\frac{1}{x} - 0 = \frac{1}{x} < \varepsilon$.
> *   Therefore, by Definition 5, $\lim_{x \to \infty} \frac{1}{x} = 0$.
> 
> ![[Pasted image 20260706195926.png|center]]

> [!info] Definition 7: Precise Definition of Infinite Limit at Infinity
> Let $f$ be a function defined on some interval $(a, \infty)$. Then
> $$ \lim_{x \to \infty} f(x) = \infty $$
> means that for every positive number $M$ there is a corresponding positive number $N$ such that
> if $x > N$ then $f(x) > M$
>

![[Pasted image 20260706195947.png|center]]

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 217)