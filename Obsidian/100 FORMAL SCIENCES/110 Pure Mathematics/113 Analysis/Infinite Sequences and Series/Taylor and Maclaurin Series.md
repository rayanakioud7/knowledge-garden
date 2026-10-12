Date: 2026-10-06
Tags: [[Calculus]], [[Stewart]], [[Mathematics]], [[Taylor Series]], [[Maclaurin Series]], [[Power Series]]

---

## Taylor and Maclaurin Series

### Definitions and Expansion Formulas

> [!info] Definition / Theorem: Taylor and Maclaurin Series
> If a function $f$ has a power series representation (expansion) at $a$, meaning $f(x) = \sum_{n=0}^{\infty} c_n (x-a)^n$ for $\vert{}x-a\vert{} < R$, then its coefficients are given by the formula $c_n = \frac{f^{(n)}(a)}{n!}$.
> 
> 
> The resulting series is called the **Taylor series of the function $f$ at $a$** (or centered at $a$):
> 
> 
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x - a)^n = f(a) + \frac{f'(a)}{1!} (x - a) + \frac{f''(a)}{2!} (x - a)^2 + \dots$$
> For the special case where $a = 0$, the series is given the specific name **Maclaurin series**:
> 
> 
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n = f(0) + \frac{f'(0)}{1!} x + \frac{f''(0)}{2!} x^2 + \dots$$

### Taylor Polynomials and the Remainder

> [!abstract] Core Principle / Properties: $n$-th Degree Taylor Polynomial
> The partial sums of a Taylor series are polynomials of degree $n$, called the **$n$-th degree Taylor polynomial of $f$ at $a$**:
> 
> 
$$T_n(x) = \sum_{i=0}^{n} \frac{f^{(i)}(a)}{i!} (x - a)^i$$
> The **remainder** of the Taylor series is defined as $R_n(x) = f(x) - T_n(x)$.
> 
> 
> **Theorem 8:** If $f(x) = T_n(x) + R_n(x)$ and $\lim_{n \to \infty} R_n(x) = 0$ for $\vert{}x - a\vert{} < R$, then $f$ is equal to the sum of its Taylor series on the interval $\vert{}x - a\vert{} < R$.
> 
> 

 > ![[Pasted image 20261006231620.png]]
> *(Figure 1: The graphs of the exponential function $y=e^x$ alongside its first three Taylor polynomials at $a=0$. As $n$ increases, $T_n(x)$ becomes a better approximation to $f(x)$)*
> 

> [!info] Definition / Theorem: Taylor's Inequality
> To prove that $\lim_{n \to \infty} R_n(x) = 0$, we typically bound the derivative using Taylor's Inequality.
> If $\vert{}f^{(n+1)}(x)\vert{} \le M$ for $\vert{}x - a\vert{} \le d$, then the remainder $R_n(x)$ of the Taylor series satisfies the inequality:
> 
> 
$$\vert{}R_n(x)\vert{} \le \frac{M}{(n + 1)!} \vert{}x - a\vert{}^{n+1} \quad \text{for } \vert{}x - a\vert{} \le d$$

> [!warning] Pitfall
> Proving convergence of a Taylor series often requires utilizing the fundamental limit fact that the factorial grows much faster than any exponential sequence:
> 
> 
$$\lim_{n \to \infty} \frac{x^n}{n!} = 0 \quad \text{for every real number } x$$

### Important Maclaurin Series

| Function | Maclaurin Series | Radius of Convergence |
| --- | --- | --- |
| $\frac{1}{1-x}$ | $\sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots$<br> | $R = 1$<br> |
| $e^x$ | $\sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$<br> | $R = \infty$<br> |
| $\sin x$ | $\sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$<br> | $R = \infty$<br> |
| $\cos x$ | $\sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$<br> | $R = \infty$<br> |
| $\tan^{-1} x$ | $\sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \dots$<br> | $R = 1$<br> |
| $\ln(1+x)$ | $\sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots$<br> | $R = 1$<br> |
| $(1+x)^k$ | $\sum_{n=0}^{\infty} \binom{k}{n} x^n = 1 + kx + \frac{k(k-1)}{2!}x^2 + \dots$<br> | $R = 1$<br> |
![[Pasted image 20261006231655.png|576]]
### The Binomial Series

> [!info] Definition / Theorem: The Binomial Series
> If $k$ is any real number and $\vert{}x\vert{} < 1$, the function $(1+x)^k$ can be represented by the **binomial series**:
> 
> 
$$(1+x)^k = \sum_{n=0}^{\infty} \binom{k}{n} x^n$$
> The traditional notation for the **binomial coefficients** when $k$ is not necessarily a positive integer is:
> 
> 
$$\binom{k}{n} = \frac{k(k-1)(k-2)\dots(k-n+1)}{n!}=\frac{k!}{n!(n-k)!} \quad (n \ge 1)$$

### Worked Examples

> [!example] Example: Evaluating Limits using Maclaurin Series
> Evaluate $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$ using series.
> **Solution:**
> Instead of using L'Hospital's Rule, we substitute the known Maclaurin series for $e^x$:
> 
> 
$$\begin{aligned} \lim_{x \to 0} \frac{e^x - 1 - x}{x^2} &= \lim_{x \to 0} \frac{\left( 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots \right) - 1 - x}{x^2} \\ &= \lim_{x \to 0} \frac{\frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots}{x^2} \\ &= \lim_{x \to 0} \left( \frac{1}{2} + \frac{x}{3!} + \frac{x^2}{4!} + \dots \right) \end{aligned}$$
> Because power series are continuous functions, we can evaluate the limit by direct substitution of $x=0$:
> 
> 
$$\boxed{\frac{1}{2}}$$

> [!example] Example: Multiplication of Power Series
> Find the first three nonzero terms in the Maclaurin series for $e^x \sin x$.
> **Solution:**
> We multiply the Maclaurin series for $e^x$ and $\sin x$ by collecting like terms, similar to polynomial multiplication:
> 
> 
$$e^x \sin x = \left( 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \dots \right) \left( x - \frac{x^3}{6} + \dots \right)$$
> Expanding and grouping by degree:
> 
> 
$$\begin{aligned} 1 \cdot \left( x - \frac{x^3}{6} \right) &= x - \frac{x^3}{6} \\ x \cdot \left( x - \frac{x^3}{6} \right) &= x^2 - \frac{x^4}{6} \\ \frac{x^2}{2} \cdot \left( x - \dots \right) &= \frac{x^3}{2} - \dots \\ \end{aligned}$$
> Summing the coefficients for degrees 1, 2, and 3:
> 
> 
$$x + x^2 + \left(-\frac{1}{6} + \frac{1}{2}\right)x^3 = x + x^2 + \frac{x^3}{3}$$
$$\boxed{x + x^2 + \frac{1}{3}x^3 + \dots}$$

---
# ~={red}References=~

*Calculus, James Stewart* (p. 780-788)