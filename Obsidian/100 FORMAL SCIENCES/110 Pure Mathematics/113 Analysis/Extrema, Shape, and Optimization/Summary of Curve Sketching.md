Date: 2026-07-06
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[The Graph of a Function]]

---
## Summary of Curve Sketching

Calculus reveals the exact locations of maximum/minimum points, inflection points, and asymptotic behavior that graphing calculators might obscure. 

### Guidelines for Sketching a Curve

*   **A. Domain:** The set of values $x$ for which $f(x)$ is defined.
*   **B. Intercepts:** The $y$-intercept is $f(0)$; $x$-intercepts are found by setting $y=0$.
*   **C. Symmetry:** Determine structural reflections or repetitions.

> [!info] Types of Symmetry
> *   **Even Function:** $f(-x) = f(x)$. The curve is symmetric about the $y$-axis.
> *   **Odd Function:** $f(-x) = -f(x)$. The curve is symmetric about the origin.
> *   **Periodic Function:** $f(x + p) = f(x)$ for a positive constant $p$ (the period). The curve translates structurally over intervals.
*   **D. Asymptotes:** Identify boundaries the curve approaches.
> [!info] Asymptote Types
> *   **Horizontal:** If $\lim_{x \to \infty} f(x) = L$ or $\lim_{x \to -\infty} f(x) = L$, then $y=L$ is a horizontal asymptote.
> *   **Vertical:** If $\lim_{x \to a^+} f(x) = \pm \infty$ or $\lim_{x \to a^-} f(x) = \pm \infty$, then $x=a$ is a vertical asymptote.
*   **E. Intervals of Increase/Decrease:** Compute $f'(x)$. If $f'(x) > 0$, $f$ is increasing; if $f'(x) < 0$, $f$ is decreasing.
*   **F. Local Maximum/Minimum Values:** Find critical numbers where $f'(c)=0$ or $f'(c)$ DNE. Apply the First or Second Derivative Test.
*   **G. Concavity and Points of Inflection:** Compute $f''(x)$. The curve is concave upward if $f''(x) > 0$ and concave downward if $f''(x) < 0$. Inflection points occur where concavity changes.
*   **H. Sketch the Curve:** Plot intercepts, extrema, inflection points, and asymptotes, then draw the curve passing through these points.

![[Pasted image 20260706200720.png|center|419]]

![[Pasted image 20260706200738.png|center]]

---

### Examples

> [!example] Example 1: Rational Function
> Sketch the curve $y = \frac{2x^2}{x^2 - 1}$.
> 
> **A. Domain:** $\{x \mid x^2 - 1 \neq 0\} = (-\infty, -1) \cup (-1, 1) \cup (1, \infty)$.
> **B. Intercepts:** Both $x$- and $y$-intercepts are $0$.
> **C. Symmetry:** $f(-x) = f(x)$, so the function is even (symmetric about the $y$-axis).
> **D. Asymptotes:** 
> $$
> \begin{aligned}
> \lim_{x \to \pm \infty} \frac{2x^2}{x^2 - 1} &= 2 
> \end{aligned}
> $$
> The line $y = 2$ is a horizontal asymptote.
> $$
> \begin{aligned}
> \lim_{x \to 1^+} \frac{2x^2}{x^2 - 1} &= \infty, \quad \lim_{x \to 1^-} \frac{2x^2}{x^2 - 1} = -\infty \\
> \lim_{x \to -1^+} \frac{2x^2}{x^2 - 1} &= -\infty, \quad \lim_{x \to -1^-} \frac{2x^2}{x^2 - 1} = \infty
> \end{aligned}
> $$
> The lines $x = 1$ and $x = -1$ are vertical asymptotes.
> 
> ![[Pasted image 20260706200813.png|center]]
> 
> **E. Increase/Decrease:** 
> $$
> \begin{aligned}
> f'(x) &= \frac{4x(x^2 - 1) - 2x^2(2x)}{(x^2 - 1)^2} = \frac{-4x}{(x^2 - 1)^2}
> \end{aligned}
> $$
> $f'(x) > 0$ when $x < 0$ ($x \neq -1$), increasing on $(-\infty, -1)$ and $(-1, 0)$.
> $f'(x) < 0$ when $x > 0$ ($x \neq 1$), decreasing on $(0, 1)$ and $(1, \infty)$.
> **F. Extrema:** $f'(0) = 0$. $f(0) = 0$ is a local maximum by the First Derivative Test.
> **G. Concavity:**
> $$
> \begin{aligned}
> f''(x) &= \frac{12x^2 + 4}{(x^2 - 1)^3}
> \end{aligned}
> $$
> Since $12x^2 + 4 > 0$, concavity depends on $x^2 - 1$. Concave upward on $(-\infty, -1)$ and $(1, \infty)$. Concave downward on $(-1, 1)$. No inflection points.
> 
> ![[Pasted image 20260706200830.png|center]]


> [!example] Example 2: Radical Function
> Sketch the graph of $f(x) = \frac{x^2}{\sqrt{x + 1}}$.
> 
> **A. Domain:** $\{x \mid x + 1 > 0\} = (-1, \infty)$.
> **B. Intercepts:** Both $0$.
> **C. Symmetry:** None.
> **D. Asymptotes:** $\lim_{x \to \infty} f(x) = \infty$, so no horizontal asymptote. $\lim_{x \to -1^+} f(x) = \infty$, so $x = -1$ is a vertical asymptote.
> **E. Increase/Decrease:** 
> $$
> \begin{aligned}
> f'(x) &= \frac{x(3x + 4)}{2(x + 1)^{3/2}}
> \end{aligned}
> $$
> Critical number is $0$. $f$ is decreasing on $(-1, 0)$ and increasing on $(0, \infty)$.
> **F. Extrema:** $f(0) = 0$ is a local (and absolute) minimum.
> **G. Concavity:**
> $$
> \begin{aligned}
> f''(x) &= \frac{3x^2 + 8x + 8}{4(x + 1)^{5/2}}
> \end{aligned}
> $$
> Discriminant of the numerator is negative, so $f''(x) > 0$ everywhere. Concave upward on $(-1, \infty)$ with no points of inflection.
> 
> ![[Pasted image 20260706201009.png|center]]

> [!example] Example 3: Trigonometric Function
> Sketch the graph of $f(x) = \frac{\cos x}{2 + \sin x}$.
> 
> **A. Domain:** $\mathbb{R}$.
> **B. Intercepts:** $y$-intercept is $1/2$. $x$-intercepts occur at $x = (2n + 1)\pi/2$.
> **C. Symmetry:** Periodic with period $2\pi$. Evaluate on $[0, 2\pi]$.
> **D. Asymptotes:** None.
> **E. Increase/Decrease:**
> $$
> \begin{aligned}
> f'(x) &= -\frac{2\sin x + 1}{(2 + \sin x)^2}
> \end{aligned}
> $$
> $f'(x) > 0 \iff \sin x < -1/2 \iff x \in (7\pi/6, 11\pi/6)$ (increasing). Decreasing on $(0, 7\pi/6)$ and $(11\pi/6, 2\pi)$.
> **F. Extrema:** Local minimum at $f(7\pi/6) = -1/\sqrt{3}$. Local maximum at $f(11\pi/6) = 1/\sqrt{3}$.
> **G. Concavity:**
> $$
> \begin{aligned}
> f''(x) &= -\frac{2\cos x(1 - \sin x)}{(2 + \sin x)^3}
> \end{aligned}
> $$
> Concave upward on $(\pi/2, 3\pi/2)$. Concave downward on $(0, \pi/2)$ and $(3\pi/2, 2\pi)$. Inflection points at $x = \pi/2$ and $x = 3\pi/2$.
> 
> ![[Pasted image 20260706201036.png|center]]

---

### Slant Asymptotes

> [!info] Definition: Slant Asymptote
> An asymptote that is oblique (neither horizontal nor vertical). The line $y = mx + b$ is a slant asymptote if:
> $$
> \begin{aligned}
> \lim_{x \to \infty} [f(x) - (mx + b)] &= 0
> \end{aligned}
> $$
> For rational functions, slant asymptotes occur when the degree of the numerator is exactly one more than the degree of the denominator. The equation is found via long division.

![[Pasted image 20260706201105.png|center]]

> [!example] Example 4: Function with a Slant Asymptote
> Sketch the graph of $f(x) = \frac{x^3}{x^2 + 1}$.
> 
> **A. Domain:** $\mathbb{R} = (-\infty, \infty)$.
> **B. Intercepts:** Both $0$.
> **C. Symmetry:** $f(-x) = -f(x)$, odd function symmetric about the origin.
> **D. Asymptotes:** No vertical or horizontal asymptotes. Performing long division:
> $$
> \begin{aligned}
> f(x) &= x - \frac{x}{x^2 + 1}
> \end{aligned}
> $$
> As $x \to \pm\infty$, the remainder term approaches $0$, so the line $y = x$ is a slant asymptote.
> **E. Increase/Decrease:**
> $$
> \begin{aligned}
> f'(x) &= \frac{x^2(x^2 + 3)}{(x^2 + 1)^2}
> \end{aligned}
> $$
> $f'(x) > 0$ for all $x \neq 0$, so $f$ is increasing on $(-\infty, \infty)$.
> **F. Extrema:** No sign change in $f'$ at $0$, so no local extrema.
> **G. Concavity:**
> $$
> \begin{aligned}
> f''(x) &= \frac{2x(3 - x^2)}{(x^2 + 1)^3}
> \end{aligned}
> $$
> $f''(x) = 0$ when $x = 0$ or $x = \pm\sqrt{3}$. 
> Concave upward on $(-\infty, -\sqrt{3})$ and $(0, \sqrt{3})$. Concave downward on $(-\sqrt{3}, 0)$ and $(\sqrt{3}, \infty)$. Inflection points are at $0$ and $\pm\sqrt{3}$.
> 
> ![[Pasted image 20260706201141.png|center]]


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 238)