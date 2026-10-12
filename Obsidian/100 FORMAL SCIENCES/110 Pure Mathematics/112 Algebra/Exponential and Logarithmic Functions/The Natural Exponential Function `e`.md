Date: 2026-05-19
Tags: [[Mathematics]], [[Algebra]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]], [[Exponential Functions]]

---

## The Number $e$

The number $e$ is defined as the value that $\left(1 + 1/n\right)^n$ approaches as $n$ becomes large.

|**n**|**(1+n1​)n**|
|---|---|
|$1$|$2.00000$|
|$5$|$2.48832$|
|$10$|$2.59374$|
|$100$|$2.70481$|
|$1000$|$2.71692$|
|$10,000$|$2.71815$|
|$100,000$|$2.71827$|
|$1,000,000$|$2.71828$|

Rounded to five decimal places, $e \approx 2.71828$.

> [!info]
> 
> $$\boxed{e \approx 2.71828182845904523536}$$

The number $e$ is an irrational number; it cannot be written as an exact value in decimal form.

---

## The Natural Exponential Function

The notation $e$ was chosen by [[Leonhard Euler]], probably because it is the first letter of the word _exponential_.

Since $2 < e < 3$, the graph of the natural exponential function lies between the graphs of $y = 2^x$ and $y = 3^x$.

---

> [!info]
> 
> ### The Natural Exponential Function
> 
> The **natural exponential function** is the exponential function
> 
> $$f(x) = e^x$$
> 
> with base $e$. It is often referred to as _the exponential function_.

![[Pasted image 20260519204622.png|center]]

---

> [!example]
> 
> **Example 2: Graphing Exponential Functions**
> 
> Sketch the graph of each function. State the $y$-intercept, domain, range, and horizontal asymptote.
> 
> **(a)** $f(x) = 3e^{0.5x}$
> 
> Plotting points:
> 
> |**x**|**f(x)=3e0.5x**|
> |---|---|
> |$-3$|$0.67$|
> |$-2$|$1.10$|
> |$-1$|$1.82$|
> |$0$|$3.00$|
> |$1$|$4.95$|
> |$2$|$8.15$|
> |$3$|$13.45$|
> 
> - $y$-intercept: $f(0) = 3e^0 = 3$
>     
> - Domain: $\mathbb{R}$
>     
> - Range: $(0, \infty)$
>     
> - Horizontal Asymptote: $y = 0$
>     
> 
> ![[Pasted image 20260519204949.png|center]]
> 
> **(b)** $g(x) = e^{-x} - 2$
> 
> Transformation: Start with $y = e^x$, reflect about the $y$-axis to get $y = e^{-x}$, then shift downward 2 units.
> 
> - $y$-intercept: $g(0) = e^0 - 2 = -1$
>     
> - Domain: $\mathbb{R}$
>     
> - Range: $(-2, \infty)$
>     
> - Horizontal Asymptote: $y = -2$
>     
> 
> ![[Pasted image 20260519205019.png|center]]

---

> [!example]
> 
> **Example 3: Combinations Involving Exponential Functions**
> 
> Use a graphing device to graph each function. State the $y$-intercept and use the graph to find the horizontal asymptote and any local extrema.
> 
> **(a)** $g(x) = e^{-x^2}$
> 
> - $y$-intercept: $g(0) = e^0 = 1$
>     
> - Local Extrema: Local maximum value of $1$ at $x = 0$
>     
> - Horizontal Asymptote: $y = 0$
>     
>     $$\text{As } |x| \to \infty, \quad e^{x^2} \to \infty \implies y = \frac{1}{e^{x^2}} \to 0$$
>     
> 
> ![[Pasted image 20260519211631.png|center]]
> 
> **(b)** $l(x) = \frac{5}{1 + e^{-x}}$
> 
> - $y$-intercept: $l(0) = \frac{5}{1 + e^0} = \frac{5}{2}$
>     
> - Local Extrema: None
>     
> - Horizontal Asymptotes:
>     
>     $$\begin{aligned} \text{As } x \to \infty, \quad &e^{-x} \to 0 \implies y \to \frac{5}{1 + 0} = 5 \\ \text{As } x \to -\infty, \quad &e^{-x} \to \infty \implies y \to 0 \end{aligned}$$
>     
>     Horizontal asymptotes at $y = 5$ and $y = 0$
>     
> 
> ![[Pasted image 20260519211649.png|center]]
> 
> **(c)** $s(x) = 10xe^{-0.1x}$
> 
> - $y$-intercept: $s(0) = 10(0)e^0 = 0$
>     
> - Local Extrema: Local maximum value of approximately $36.8$ at $x \approx 10.0$
>     
> - Horizontal Asymptote: $y = 0$
>     
> 
> ![[Pasted image 20260519211705.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 346)