Date: 2026-05-19
Tags: [[Mathematics]], [[Algebra]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---
# Rational Functions

> [!info] Definition:
> A **rational function** is a function of the form
> 
> $$r(x) = \frac{P(x)}{Q(x)}$$
> 
> where $P$ and $Q$ are polynomials, assuming $P(x)$ and $Q(x)$ have no factor in common.
> 
> The domain of $r$ is $\{x \mid Q(x) \ne 0\}$.

---

## Examples of Rational Functions

$$f(x) = \frac{1}{x} \qquad r(x) = \frac{2x}{x + 3} \qquad s(x) = \frac{x + 2}{x^2 + 5x + 1} \qquad u(x) = \frac{x^3 + 3x^2 - 5}{4x^3 + 3x + 4}$$

For $f(x) = 1/x$, the numerator is $P(x) = 1$ and the denominator is $Q(x) = x$.

---

## The Rational Function $f(x) = 1/x$

When graphing a rational function, pay special attention to behavior near $x$-values where the denominator is zero.

> [!example]
> 
> **Example 1: Graph of $f(x) = 1/x$**
> 
> Graph $f(x) = 1/x$, and state the domain and range.
> 
> $f$ is undefined for $x = 0$.
> 
> #### Behavior near $x = 0$
> 
> |**x**|**f(x)**|
> |---|---|
> |$-0.1$|$-10$|
> |$-0.01$|$-100$|
> |$-0.00001$|$-100,000$|
> 
> as $x \to 0^{-} \implies f(x) \to -\infty$
> 
> |**x**|**f(x)**|
> |---|---|
> |$0.1$|$10$|
> |$0.01$|$100$|
> |$0.00001$|$100,000$|
> 
> as $x \to 0^{+} \implies f(x) \to \infty$
> 
> #### Behavior as $|x|$ becomes large
> 
> |**x**|**f(x)**|
> |---|---|
> |$-10$|$-0.1$|
> |$-100$|$-0.01$|
> |$-100,000$|$-0.00001$|
> 
> as $x \to -\infty \implies f(x) \to 0$
> 
> |**x**|**f(x)**|
> |---|---|
> |$10$|$0.1$|
> |$100$|$0.01$|
> |$100,000$|$0.00001$|
> 
> as $x \to \infty \implies f(x) \to 0$
> 
> #### Additional Points
> 
> |**x**|**f(x)=1/x**|
> |---|---|
> |$-2$|$-\frac{1}{2}$|
> |$-1$|$-1$|
> |$-\frac{1}{2}$|$-2$|
> |$\frac{1}{2}$|$2$|
> |$1$|$1$|
> |$2$|$\frac{1}{2}$|
> 
> ![[Pasted image 20260519142646.png|center]]
> 
> Domain: $\{x \mid x \ne 0\}$
> 
> Range: $\{y \mid y \ne 0\}$

> [!tip] Arrow Notation
> ![[Pasted image 20260519142916.png|center]]

---

# Vertical and Horizontal Asymptotes

An asymptote of a function is a line that the graph of the function gets closer and closer to as one travels along that line.

> [!info]
> 
> ### Definition of Vertical and Horizontal Asymptotes
> 
> **1. Vertical Asymptotes**
> 
> The line $x = a$ is a **vertical asymptote** of the function $y = f(x)$ if $y$ approaches $\pm\infty$ as $x$ approaches $a$ from the left or right.
> 
> $$\begin{aligned} y \to \infty \text{ as } x \to a^{-} \qquad & y \to \infty \text{ as } x \to a^{+} \\ y \to -\infty \text{ as } x \to a^{-} \qquad & y \to -\infty \text{ as } x \to a^{+} \end{aligned}$$
> 
> ![[Pasted image 20260519143144.png|cente]]
> 
> **2. Horizontal Asymptote**
> 
> The line $y = b$ is a **horizontal asymptote** of the function $y = f(x)$ if $y$ approaches $b$ as $x$ approaches $\pm\infty$.
> 
> $$\begin{aligned} y \to b \text{ as } x \to -\infty \qquad & y \to b \text{ as } x \to \infty \end{aligned}$$
> 
> ![[Pasted image 20260519143220.png|center]]

---

A rational function of the form $r(x) = \frac{ax + b}{cx + d}$ is called a **linear fractional transformation**. It can be graphed by shifting, stretching, and/or reflecting the graph of $f(x) = 1/x$.

> see Note: [[Transformations of Functions]]

> [!example]
> 
> **Example 2: Using Transformations to Graph Rational Functions**
> 
> Graph each rational function, and state the domain and range.
> 
> **(a)** $r(x) = \frac{2}{x - 3}$
> 
> $$\begin{aligned} r(x) &= \frac{2}{x - 3} \\ &= 2\left(\frac{1}{x - 3}\right) \quad \leftarrow \text{Factor 2} \\ &= 2(f(x - 3)) \quad \leftarrow \text{Because } f(x) = 1/x \end{aligned}$$
> 
> Transformation: Shift 3 units right, stretch vertically by a factor of 2.
> 
> - Asymptotes: Vertical $x = 3$, Horizontal $y = 0$
>     
> - Domain: $\{x \mid x \ne 3\}$
>     
> - Range: $\{y \mid y \ne 0\}$
>     
> 
> ![[Pasted image 20260519144237.png|center]]
> 
> **(b)** $s(x) = \frac{3x + 5}{x + 2}$
> 
> $$\begin{aligned}
&\begin{array}{r}
3 \quad \\
x + 2 \overline{) \quad 3x + 5} \\
\underline{3x + 6} \\
-1
\end{array}
\end{aligned} \quad \leftarrow \text{Long division}$$
> 
> $$\begin{aligned} s(x) &= 3 - \frac{1}{x + 2} \quad \leftarrow \text{Long division result} \\ &= -\frac{1}{x + 2} + 3 \quad \leftarrow \text{Rearrange terms} \\ &= -f(x + 2) + 3 \quad \leftarrow \text{Since } f(x) = 1/x \end{aligned}$$
> 
> Transformation: Shift 2 units left, reflect about the $x$-axis, shift upward 3 units.
> 
> - Asymptotes: Vertical $x = -2$, Horizontal $y = 3$
>     
> - Domain: $\{x \mid x \ne -2\}$
>     
> - Range: $\{y \mid y \ne 3\}$
>     
> 
> ![[Pasted image 20260519144258.png|center]]

---

## Finding Vertical and Horizontal Asymptotes of Rational Functions

To find asymptotes of general rational functions, analyze behavior near values that make the denominator zero (vertical asymptotes) and behavior as $x \to \pm\infty$ (horizontal asymptotes).

> [!example]
> 
> **Example 3: Asymptotes of a Rational Function**
> 
> Graph $r(x) = \frac{2x^2 - 4x + 5}{x^2 - 2x + 1}$, and state the domain and range.
> 
> #### Vertical Asymptote
> 
> Factor the denominator:
> 
> $$r(x) = \frac{2x^2 - 4x + 5}{(x - 1)^2}$$
> 
> Denominator is zero at $x = 1 \implies$ Vertical asymptote $x = 1$
> 
> Behavior near $x = 1$:
> 
> |**x**|**y**|
> |---|---|
> |$0$|$5$|
> |$0.5$|$14$|
> |$0.9$|$302$|
> |$0.99$|$30,002$|
> 
> as $x \to 1^{-} \implies y \to \infty$
> 
> |**x**|**y**|
> |---|---|
> |$2$|$5$|
> |$1.5$|$14$|
> |$1.1$|$302$|
> |$1.01$|$30,002$|
> 
> as $x \to 1^{+} \implies y \to \infty$
> 
> ![[Pasted image 20260519145948.png|center]]
> 
> #### Horizontal Asymptote
> 
> Divide numerator and denominator by the highest power of $x$ in the denominator ($x^2$):
> 
> $$\begin{aligned} y &= \frac{\frac{1}{x^2}\left(2x^2 - 4x + 5\right)}{\frac{1}{x^2}\left(x^2 - 2x + 1\right)} \\ \\ &= \frac{2 - \frac{4}{x} + \frac{5}{x^2}}{1 - \frac{2}{x} + \frac{1}{x^2}} \end{aligned}$$
> 
> As $x \to \pm\infty$:
> 
> $$y = \frac{2 - 0 + 0}{1 - 0 + 0} = 2 \quad \leftarrow \text{since } \frac{4}{x}, \frac{5}{x^2}, \frac{2}{x}, \frac{1}{x^2} \to 0$$
> 
> Horizontal asymptote: $y = 2$
> 
> ![[Pasted image 20260519150010.png|center]]
> 
> #### Domain and Range
> 
> - Domain: $\{x \mid x \ne 1\}$
>     
> - Range: $\{y \mid y > 2\}$
>

---
# Summary of finding Asymptotes

> [!info]
> 
> ### Finding Asymptotes of Rational Functions
> 
> Let $r$ be the rational function
> 
> $$r(x) = \frac{a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0}{b_m x^m + b_{m-1} x^{m-1} + \dots + b_1 x + b_0}$$
> 
> **1. Vertical Asymptotes**
> 
> The vertical asymptotes of $r$ are the lines $x = a$, where $a$ is a zero of the denominator.
> 
> **2. Horizontal Asymptote**
> 
> The horizontal asymptote of $r$ is determined by comparing the degrees $n$ and $m$:
> 
> - **(a)** If $n < m$, then $r$ has horizontal asymptote $y = 0$.
>     
> - **(b)** If $n = m$, then $r$ has horizontal asymptote:
>     
>     $$y = \frac{a_n}{b_m} \quad \leftarrow \frac{\text{leading coefficient of } P}{\text{leading coefficient of } Q}$$
>     
> - **(c)** If $n > m$, then $r$ has no horizontal asymptote.
>

---

> [!example]
> 
> **Example 4: Asymptotes of a Rational Function**
> 
> Find the vertical and horizontal asymptotes of $r(x) = \frac{3x^2 - 2x - 1}{2x^2 + 3x - 2}$.
> 
> #### Vertical Asymptotes
> 
> Factor the denominator:
> 
> $$r(x) = \frac{3x^2 - 2x - 1}{(2x - 1)(x + 2)}$$
> 
> $$\begin{aligned} 2x - 1 = 0 &\implies x = \frac{1}{2} \\ x + 2 = 0 &\implies x = -2 \end{aligned}$$
> 
> Vertical asymptotes: $x = \frac{1}{2}$ and $x = -2$
> 
> #### Horizontal Asymptote
> 
> Degrees of numerator and denominator are equal ($n = m = 2$).
> 
> $$\frac{\text{leading coefficient of numerator}}{\text{leading coefficient of denominator}} = \frac{3}{2}$$
> 
> Horizontal asymptote: $y = \frac{3}{2}$
> 
> ![[Pasted image 20260519151311.png|center]]

---

## Graphing Rational Functions

> [!info]
> 
> ### Sketching Graphs of Rational Functions
> 
> **1. Factor** > Factor the numerator and denominator.
> 
> **2. Intercepts** > Find $x$-intercepts via zeros of the numerator.
> 
> Find $y$-intercept by evaluating the function at $x = 0$.
> 
> _A fraction is 0 only if its numerator is 0 (and the denominator is not 0)._
> 
> **3. Vertical Asymptotes** > Find vertical asymptotes via zeros of the denominator. Use test values to determine whether $y \to \infty$ or $y \to -\infty$ on each side.
> 
> **4. Horizontal Asymptote** > Find the horizontal asymptote (if any) by comparing polynomial degrees.
> 
> **5. Sketch the Graph** > Plot intercepts, asymptotes, and additional test points to complete the curve.

---

> [!example]
> 
> **Example 5: Graphing a Rational Function**
> 
> Graph $r(x) = \frac{2x^2 + 7x - 4}{x^2 + x - 2}$, and state the domain and range.
> 
> #### 1. Factor
> 
> $$y = \frac{(2x - 1)(x + 4)}{(x - 1)(x + 2)}$$
> 
> #### 2. Intercepts
> 
> - **$x$-Intercepts**: Zeros of numerator $\implies x = \frac{1}{2}$ and $x = -4$
>     
> - **$y$-Intercept**: Evaluate $r(0)$
>     
>     $$r(0) = \frac{2(0)^2 + 7(0) - 4}{(0)^2 + (0) - 2} = \frac{-4}{-2} = 2 \implies y = 2$$
>     
> 
> #### 3. Vertical Asymptotes
> 
> Zeros of denominator $\implies x = 1$ and $x = -2$
> 
> #### 4. Behavior near Vertical Asymptotes
> 
> When choosing test values, ensure there is no $x$-intercept between the test point and the vertical asymptote.
> 
> - Test $x \to 1^{-}$ (e.g., $x = 0.9$):
>     
>     $$y = \frac{[2(0.9) - 1][(0.9) + 4]}{[(0.9) - 1][(0.9) + 2]} \implies \text{sign is } \frac{(+)(+)}{(-)(+)} \implies \text{negative} \implies y \to -\infty$$
>     
> - Test $x \to 1^{+}$ (e.g., $x = 1.1$):
>     
>     $$y = \frac{[2(1.1) - 1][(1.1) + 4]}{[(1.1) - 1][(1.1) + 2]} \implies \text{sign is } \frac{(+)(+)}{(+)(+)} \implies \text{positive} \implies y \to \infty$$
>     
> 
> Summary of behaviors:
> 
> |**As x→**|**−2−**|**−2+**|**1−**|**1+**|
> |---|---|---|---|---|
> |**sign of $y = \frac{(2x-1)(x+4)}{(x-1)(x+2)}$**|$\frac{(-)(+)}{(-)(-)}$|$\frac{(-)(+)}{(-)(+)}$|$\frac{(+)(+)}{(-)(+)}$|$\frac{(+)(+)}{(+)(+)}$|
> |**so $y \to$**|$-\infty$|$\infty$|$-\infty$|$\infty$|
> 
> #### 5. Horizontal Asymptote
> 
> Degrees are equal ($n = m = 2$).
> 
> $$\frac{\text{leading coefficient of numerator}}{\text{leading coefficient of denominator}} = \frac{2}{1} = 2 \implies y = 2$$
> 
> #### 6. Graphing Points & Sketch
> 
> |**x**|**y**|
> |---|---|
> |$-6$|$0.93$|
> |$-4$|$0$|
> |$-3$|$-1.75$|
> |$-1$|$4.50$|
> |$0$|$2$|
> |$0.5$|$0$|
> |$1.5$|$6.29$|
> |$2$|$4.50$|
> |$6$|$2.75$|
> 
> ![[Pasted image 20260519153113.png|center]]
> 
> #### Domain and Range
> 
> - Domain: $\{x \mid x \ne 1, x \ne -2\}$
>     
> - Range: All real numbers
>

---
## Common Factors in Numerator and Denominator

If $s(x) = p(x)/q(x)$ and the polynomials $p$ and $q$ have a factor in common, that factor can be canceled out _only_ for values of $x$ where the factor is not zero. Because the function remains undefined at those removed values, its graph contains a **hole** (a removable discontinuity) at those specific points.

> [!example]
> 
> **Example 8: Common Factor in Numerator and Denominator**
> 
> Graph each of the following functions.
> 
> **(a)** $s(x) = \frac{x - 3}{x^2 - 3x}$
> 
> $$\begin{aligned} s(x) &= \frac{x - 3}{x(x - 3)} \\ &= \frac{1}{x} \qquad x \ne 3 \end{aligned}$$
> 
> Curve matches $r(x) = 1/x$ exactly, but with a hole at $x = 3$.
> 
> ![[Pasted image 20260519153447.png|center]]
> 
> **(b)** $t(x) = \frac{x^3 - 2x^2}{x - 2}$
> 
> $$\begin{aligned} t(x) &= \frac{x^2(x - 2)}{x - 2} \\ &= x^2 \qquad x \ne 2 \end{aligned}$$
> 
> Curve matches $f(x) = x^2$ exactly, but with a hole at $x = 2$.
> 
> ![[Pasted image 20260519153500.png|center]]

---

## Slant Asymptotes and End Behavior

If $r(x) = P(x)/Q(x)$ is a rational function for which the degree of the numerator is exactly one more than the degree of the denominator ($n = m + 1$), use the Division Algorithm to express the function in the form:

$$r(x) = ax + b + \frac{R(x)}{Q(x)}$$

where the degree of $R$ is less than the degree of $Q$, and $a \ne 0$.

$$\text{As } x \to \pm\infty, \quad \frac{R(x)}{Q(x)} \to 0 \implies y \to ax + b$$

The line $y = ax + b$ is a **slant asymptote**, or an **oblique asymptote**.

> [!example]
> 
> **Example 9: A Rational Function with a Slant Asymptote**
> 
> Graph the rational function $r(x) = \frac{x^2 - 4x - 5}{x - 3}$.
> 
> #### 1. Factor
> 
> $$y = \frac{(x + 1)(x - 5)}{x - 3}$$
> 
> #### 2. Intercepts
> 
> - **$x$-Intercepts**: Zeros of numerator $\implies x = -1$ and $x = 5$
>     
> - **$y$-Intercept**: Evaluate $r(0)$
>     
>     $$r(0) = \frac{0^2 - 4(0) - 5}{0 - 3} = \frac{-5}{-3} = \frac{5}{3} \implies y = \frac{5}{3}$$
>     
> 
> #### 3. Asymptotes
> 
> - **Vertical Asymptote**: Zero of denominator $\implies x = 3$
>     
>     - Behavior: $y \to \infty$ as $x \to 3^{-}$ and $y \to -\infty$ as $x \to 3^{+}$
>         
> - **Horizontal Asymptote**: None $\quad \leftarrow \text{degree of numerator } > \text{ degree of denominator}$
>     
> - **Slant Asymptote**:
>     
>     $$\begin{aligned} &\begin{array}{r} x - 1 \quad \\ x - 3 \overline{) \quad x^2 - 4x - 5} \\ \underline{x^2 - 3x} \phantom{- 4x - 5} \\ -x - 5 \\ \underline{-x + 3} \\ -8 \end{array} \end{aligned} \quad \leftarrow \text{Long division}$$
>     
>     $$r(x) = x - 1 - \frac{8}{x - 3}$$
>     
>     Slant asymptote: $y = x - 1$
>     
> 
> #### 4. Graphing Points & Sketch
> 
> |**x**|**y**|
> |---|---|
> |$-2$|$-1.4$|
> |$-1$|$0$|
> |$0$|$1.67$|
> |$1$|$4$|
> |$2$|$9$|
> |$4$|$-5$|
> |$5$|$0$|
> |$6$|$2.33$|
> 
> ![[Pasted image 20260519154647.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 301)