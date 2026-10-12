Date: 2026-05-18
Tags:[[Mathematics]], [[Algebra]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]], [[Polynomials]], [[The Graph of a Function]]

---

## Polynomial Functions

> [!info] **Polynomial Functions**
> 
> A **polynomial function of degree $n$** is a function of the form
> 
> $$P(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0 \qquad a_n \ne 0$$
> 
> where $n$ is a nonnegative integer.
> 
> - $a_0, a_1, a_2, \dots, a_n \quad \leftarrow$ **coefficients**
>     
> - $a_0 \quad \leftarrow$ **constant coefficient** or **constant term**
>     
> - $a_n \quad \leftarrow$ **leading coefficient**
>     
> - $a_nx^n \quad \leftarrow$ **leading term**
>     

![[Pasted image 20260518150521.png|center|644]]

---

|**Polynomial**|**Degree**|**Leading Term**|**Constant Term**|
|---|---|---|---|
|$P(x) = 4x - 7$|$1$|$4x$|$-7$|
|$P(x) = x^2 + x$|$2$|$x^2$|$0$|
|$P(x) = 2x^3 - 6x^2 + 10$|$3$|$2x^3$|$10$|
|$P(x) = -5x^4 + x - 2$|$4$|$-5x^4$|$-2$|

If a polynomial consists of just a single term, it is a **monomial**.

_Examples:_ $P(x) = x^3$ and $Q(x) = -6x^5$

---

## Graphing Basic Polynomial Functions

The simplest polynomial functions are the monomials $P(x) = x^n$.

- **$n$ is even:** Graph has the same general shape as $y = x^2$.
    
- **$n$ is odd:** Graph has the same general shape as $y = x^3$.
    

As the degree $n$ increases, the graphs become flatter around the origin and steeper elsewhere.

![[Pasted image 20260518155330.png|center]]

> [!example] **Example: Transformations of Monomials**
> 
> Sketch the graph of each function, and state its domain and range.
> 
> **(a) $P(x) = -x^3$**
> 
> Transformation: Reflect $y = x^3$ about the $x$-axis.
> 
> - Domain: $(-\infty, \infty)$
>     
> - Range: $(-\infty, \infty)$
>     
> 
> ![[Pasted image 20260518161350.png|center]]
> 
> **(b) $Q(x) = (x - 2)^4$**
> 
> Transformation: Shift $y = x^4$ right $2$ units.
> 
> - Domain: $(-\infty, \infty)$
>     
> - Range: $[0, \infty)$
>     
> 
> ![[Pasted image 20260518161410.png|center]]
> 
> **(c) $R(x) = -2x^5 + 4$**
> 
> Transformation: Stretch $y = x^5$ vertically by factor of $2$, reflect about the $x$-axis, then shift upward $4$ units.
> 
> - Domain: $(-\infty, \infty)$
>     
> - Range: $(-\infty, \infty)$
>     
> 
> ![[Pasted image 20260518161613.png|center]]

---

## Graphs of Polynomial Functions: End Behavior

The graph of a polynomial function is **continuous** (no breaks or holes) and is a **smooth curve** (no corners or sharp points/cusps).

![[Pasted image 20260518161951.png|center]]

---

### Arrow Notation for End Behavior

|**Symbol**|**Meaning**|
|---|---|
|$x \to \infty$|$x$ goes to infinity ($x$ increases without bound)|
|$x \to -\infty$|$x$ goes to negative infinity ($x$ decreases without bound)|

The **end behavior** of any polynomial $P(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0$ is determined entirely by its leading term $a_nx^n$.

---

> [!info] **End Behavior of Polynomials**
> 
> For $P(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0$, end behavior depends on degree $n$ and leading coefficient $a_n$:
> 
> |**Degree n**|**Leading Coefficient an​**|**End Behavior**|
> |---|---|---|
> |**Odd**|Positive ($a_n > 0$)|$y \to \infty \text{ as } x \to \infty \quad \text{and} \quad y \to -\infty \text{ as } x \to -\infty$|
> |**Odd**|Negative ($a_n < 0$)|$y \to -\infty \text{ as } x \to \infty \quad \text{and} \quad y \to \infty \text{ as } x \to -\infty$|
> |**Even**|Positive ($a_n > 0$)|$y \to \infty \text{ as } x \to \infty \quad \text{and} \quad y \to \infty \text{ as } x \to -\infty$|
> |**Even**|Negative ($a_n < 0$)|$y \to -\infty \text{ as } x \to \infty \quad \text{and} \quad y \to -\infty \text{ as } x \to -\infty$|
> 
![[Pasted image 20260518162025.png|center]]

> [!example] **Example: End Behavior of a Polynomial**
> 
> Determine the end behavior of the polynomial
> 
> $$P(x) = -2x^4 + 5x^3 + 4x - 7$$
> 
> Parameters: $\text{degree } n = 4 \text{ (even)}, \quad \text{leading coefficient } a_n = -2 \text{ (negative)}$
> 
> End behavior:
> 
> $$y \to -\infty \text{ as } x \to -\infty \qquad \text{and} \qquad y \to -\infty \text{ as } x \to \infty$$
> 
> ![[Pasted image 20260518163736.png|center]]

> [!example] **Example: End Behavior of a Polynomial**
> 
> **(a) Determine the end behavior of the polynomial $P(x) = 3x^5 - 5x^3 + 2x$.**
> 
> Parameters: $\text{degree } n = 5 \text{ (odd)}, \quad \text{leading coefficient } a_n = 3 \text{ (positive)}$
> 
> End behavior:
> 
> $$y \to -\infty \text{ as } x \to -\infty \qquad \text{and} \qquad y \to \infty \text{ as } x \to \infty$$
> 
> **(b) Confirm that $P$ and its leading term $Q(x) = 3x^5$ have the same end behavior by graphing them together.**
> 
> As the viewing rectangle increases in size, the graphs of $P$ and $Q$ look progressively more identical, confirming identical end behavior dominated by the leading term.
> 
> ![[Pasted image 20260518164011.png|center]]

## Algebraic and Numerical Justification of End Behavior

### Algebraic Comparison

To see why the end behavior of a polynomial is determined by its leading term, factor out the highest power of $x$:

$$\begin{aligned} P(x) &= 3x^5\left(1 - \frac{5}{3x^2} + \frac{2}{3x^4}\right) \qquad Q(x) = 3x^5 \\ \end{aligned}$$

As $x \to \pm\infty$, the fractional terms approach $0$:

$$\frac{5}{3x^2} \to 0 \quad \text{and} \quad \frac{2}{3x^4} \to 0$$

Thus, for large values of $|x|$:

$$P(x) \approx 3x^5(1 - 0 - 0) = 3x^5 = Q(x)$$

### Numerical Comparison

|**x**|**P(x)**|**Q(x)**|
|---|---|---|
|$15$|$2,261,280$|$2,278,125$|
|$30$|$72,765,060$|$72,900,000$|
|$50$|$936,875,100$|$937,500,000$|

By this reasoning, the end behavior of _any_ polynomial is determined by its leading term.

---
## Using Zeros to Graph Polynomials

If $P$ is a polynomial function, then $c$ is a **zero** of $P$ if $P(c) = 0$. The zeros of $P$ are the solutions of the polynomial equation $P(x) = 0$. If $P(c) = 0$, the graph of $P$ has an $x$-[[Graphs of Equations in Two Variables, Intercepts and Symmetry|intercept]] at $x = c$.

---

> [!info] **Real Zeros of Polynomials**
> 
> If $P$ is a polynomial and $c$ is a real number, then the following are equivalent:
> 
> 1. $c$ is a zero of $P$.
>     
> 2. $x = c$ is a solution of the equation $P(x) = 0$.
>     
> 3. $x - c$ is a factor of $P(x)$.
>     
> 4. $c$ is an $x$-intercept of the graph of $P$.
>     

---

### Method: Finding Zeros via Factoring

To find the zeros, factor $P$ and apply the Zero-Product Property.

_Example:_ $P(x) = x^2 + x - 6$

$$P(x) = (x - 2)(x + 3)$$

Equivalence check for $c = 2$:

1. $2$ is a zero of $P$.
    
2. $x = 2$ is a solution of the equation $x^2 + x - 6 = 0$.
    
3. $x - 2$ is a factor of $x^2 + x - 6$.
    
4. $2$ is an $x$-intercept of the graph of $P$.
    

The same conditions hold symmetrically for the other zero, $c = -3$.

---

## Intermediate Value Theorem for Polynomials

> [!info] **Intermediate Value Theorem for Polynomials**
> 
> If $P$ is a polynomial function and $P(a)$ and $P(b)$ have opposite signs, then there exists at least one value $c$ between $a$ and $b$ for which $P(c) = 0$.

![[Pasted image 20260518172158.png|center]]

Consequence: Between any two successive zeros, the values of a polynomial are either all positive or all negative. The graph lies _entirely above_ or _entirely below_ the $x$-axis.

$$c_1, c_2 \text{ are successive zeros} \implies P(x) \text{ does not change sign on } (c_1, c_2)$$

$$\leftarrow \text{Otherwise, IVT implies an additional zero exists between } c_1 \text{ and } c_2$$

---

> [!info] **Guidelines for Graphing Polynomial Functions**
> 
> 1. **Zeros:** Factor the polynomial to find all its real zeros; these are the $x$-intercepts of the graph.
>     
> 2. **Test Points:** Make a table of values for the polynomial. Include test points to determine whether the graph of the polynomial lies above or below the $x$-axis on the intervals determined by the zeros. Include the $y$-intercept in the table.
>     
> 3. **End Behavior:** Determine the end behavior of the polynomial.
>     
> 4. **Graph:** Plot the intercepts and other points you found in the table. Sketch a smooth curve that passes through these points and exhibits the required end behavior.
>

> [!example] **Example: Using Zeros to Graph a Polynomial Function**
> 
> Sketch the graph of the polynomial function $P(x) = (x + 2)(x - 1)(x - 3)$.
> 
> Zeros: $x = -2, 1, 3$
> 
> Intervals: $(-\infty, -2), \quad (-2, 1), \quad (1, 3), \quad (3, \infty)$
> 
> ![[Pasted image 20260518181027.png|center]]
> 
> ---
> 
> ### Table of Values
> 
> |**x**|**P(x)**|**Note**|
> |---|---|---|
> |$-3$|$-24$|Test point|
> |$-2$|$0$|$x$-intercept|
> |$-1$|$8$|Test point|
> |$0$|$6$|$y$-intercept|
> |$1$|$0$|$x$-intercept|
> |$2$|$-4$|Test point|
> |$3$|$0$|$x$-intercept|
> |$4$|$18$|Test point|
> 
> ![[Pasted image 20260518181115.png|center]]


> [!example] **Example: Finding Zeros and Graphing a Polynomial Function**
> 
> Let $P(x) = x^3 - 2x^2 - 3x$.
> 
> **(a) Find the zeros of $P$.**
> 
> $$\begin{aligned} P(x) &= x^3 - 2x^2 - 3x \\ &= x(x^2 - 2x - 3) && \leftarrow \text{Factor } x \\ &= x(x - 3)(x + 1) && \leftarrow \text{Factor quadratic} \end{aligned}$$
> 
> Zeros: $x = 0, \quad x = 3, \quad x = -1$
> 
> **(b) Sketch a graph of $P$.**
> 
> Intercepts: $x\text{-intercepts at } x = 0, 3, -1 \qquad y\text{-intercept at } P(0) = 0$
> 
> End behavior: $\text{degree } n = 3 \text{ (odd)}, \quad \text{leading coefficient } a_n = 1 \text{ (positive)}$
> 
> $$y \to -\infty \text{ as } x \to -\infty \qquad \text{and} \qquad y \to \infty \text{ as } x \to \infty$$
> 
> ### Table of Values
> 
> |**x**|**P(x)**|**Note**|
> |---|---|---|
> |$-2$|$-10$|Test point|
> |$-1$|$0$|$x$-intercept|
> |$-\tfrac{1}{2}$|$\tfrac{7}{8}$|Test point|
> |$0$|$0$|$x$-intercept / $y$-intercept|
> |$1$|$-4$|Test point|
> |$2$|$-6$|Test point|
> |$3$|$0$|$x$-intercept|
> |$4$|$20$|Test point|
> 
> ![[Pasted image 20260518190720.png|center]]

---

## Shape of the Graph Near a Zero of Multiplicity $m$

> [!info] **Shape of the Graph Near a Zero of Multiplicity $m$**
> 
> If $c$ is a zero of $P$ of multiplicity $m$, then the behavior of the graph near $c$ depends on whether $m$ is odd or even:
> 
> |**Multiplicity m**|**Behavior Near x-Intercept c**|
> |---|---|
> |**$m$ odd, $m > 1$**|Graph crosses the $x$-axis flattening out near $c$|
> |**$m$ even, $m > 1$**|Graph is tangent to the $x$-axis (turns around) near $c$|
> 
> ![[Pasted image 20260518191046.png|center]]

---

> [!example] **Example: Graphing a Polynomial Function Using Its Zeros**
> 
> Graph the polynomial $P(x) = x^4(x - 2)^3(x + 1)^2$.
> 
> Zeros and Multiplicities:
> 
> - $x = 0 \quad \rightarrow \text{multiplicity } 4 \text{ (even } \implies \text{tangent/turns around)}$
>     
> - $x = 2 \quad \rightarrow \text{multiplicity } 3 \text{ (odd } \implies \text{crosses and flattens)}$
>     
> - $x = -1 \rightarrow \text{multiplicity } 2 \text{ (even } \implies \text{tangent/turns around)}$
>     
> 
> End Behavior: $\text{degree } n = 4 + 3 + 2 = 9 \text{ (odd)}, \quad \text{leading coefficient } a_n = 1 \text{ (positive)}$
> 
> $$y \to -\infty \text{ as } x \to -\infty \qquad \text{and} \qquad y \to \infty \text{ as } x \to \infty$$
> 
> ### Table of Values
> 
> |**x**|**P(x)**|**Note**|
> |---|---|---|
> |$-1.3$|$-9.2$|Test point|
> |$-1$|$0$|$x$-intercept (even mult)|
> |$-0.5$|$-0.2$|Test point|
> |$0$|$0$|$x$-intercept / $y$-intercept (even mult)|
> |$1$|$-4$|Test point|
> |$2$|$0$|$x$-intercept (odd mult)|
> |$2.3$|$8.2$|Test point|
> 
> ![[Pasted image 20260518191116.png|center]]

---

## Local Maxima and Minima of Polynomials

> see: [[Properties of Functions]]

- If $(a, f(a))$ is the highest point on the graph of $f$ within a viewing rectangle $\implies f(a)$ is a **local maximum value** of $f$, and $(a, f(a))$ is a **local maximum point**.
    
- If $(b, f(b))$ is the lowest point on the graph of $f$ within a viewing rectangle $\implies f(b)$ is a **local minimum value** of $f$, and $(b, f(b))$ is a **local minimum point**.
    

The local maximum and minimum points are collectively called **local extrema**.

![[Pasted image 20260518192522.png|center]]

---

> [!info] **Local Extrema of Polynomials**
> 
> If $P(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0$ is a polynomial of degree $n$, then the graph of $P$ has **at most** $n - 1$ local extrema.

A polynomial of degree $n$ may have fewer than $n - 1$ local extrema.

_Example:_ $P(x) = x^5$ has degree $5$ but has **no** local extrema.

---

> [!example] **Example: The Number of Local Extrema**
> 
> Use a graphing device to graph the polynomial and determine how many local extrema it has.
> 
> **(a) $P_1(x) = x^4 + x^3 - 16x^2 - 4x + 48$**
> 
> Degree: $n = 4 \implies \text{at most } 3 \text{ local extrema}$
> 
> - $2$ local minimum points, $1$ local maximum point
>     
> - Total: $3$ local extrema
>     
> 
> ![[Pasted image 20260518192827.png|center]]
> 
> **(b) $P_2(x) = x^5 + 3x^4 - 5x^3 - 15x^2 + 4x - 15$**
> 
> Degree: $n = 5 \implies \text{at most } 4 \text{ local extrema}$
> 
> - $2$ local minimum points, $2$ local maximum points
>     
> - Total: $4$ local extrema
>     
> 
> ![[Pasted image 20260518192903.png|center]]
> 
> **(c) $P_3(x) = 7x^4 + 3x^2 - 10x$**
> 
> Degree: $n = 4 \implies \text{at most } 3 \text{ local extrema}$
> 
> - $1$ local minimum point, $0$ local maximum points
>     
> - Total: $1$ local extremum
>     
> 
> ![[Pasted image 20260518192921.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 260)