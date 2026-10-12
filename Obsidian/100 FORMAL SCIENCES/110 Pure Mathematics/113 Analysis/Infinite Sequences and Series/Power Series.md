Date: 2026-10-06
Tags: [[Calculus]], [[Stewart]], [[Mathematics]], [[Power Series]], [[Radius of Convergence]]

## Power Series

### Definition and Structure

> [!info] Definition / Theorem: Power Series
> A power series is a series of the form:
> 
> 
$$\sum_{n=0}^{\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots$$
> where $x$ is a variable and the $c_n$'s are constants called the coefficients. The domain of the function $f(x)$ represented by this sum is the set of all $x$ for which the series converges.
> 
> 
> More generally, a series centered at $a$ (or about $a$) is written as:
> 
> 
$$\sum_{n=0}^{\infty} c_n (x-a)^n = c_0 + c_1 (x-a) + c_2 (x-a)^2 + \dots$$

> [!warning] Pitfall
> In writing out the general term for $n=0$, there is an adopted convention that $(x - a)^0 = 1$, even when $x = a$. This ensures that the first term $c_0(x-a)^0$ correctly simplifies to the constant $c_0$.
> 
> 

### Radius and Interval of Convergence

> [!info] Definition / Theorem: Convergence Possibilities (Theorem 3)
> For a given power series $\sum_{n=0}^{\infty} c_n(x-a)^n$, there are exactly three possibilities regarding its convergence:
> 
> 
> 1. The series converges only when $x = a$.
> 
> 
> 2. The series converges for all $x$.
> 
> 
> 3. There is a positive number $R$ such that the series converges if $\vert{}x - a\vert{} < R$ and diverges if $\vert{}x - a\vert{} > R$.
> 
> 
> 
> 
> The number $R$ is called the **radius of convergence**. The **interval of convergence** consists of all values of $x$ for which the series converges.
> 
> 

| Case | Radius of Convergence ($R$) | Interval of Convergence |
| --- | --- | --- |
| Converges only at $x=a$ | $R=0$<br> | $\{a\}$<br> |
| Converges for all $x$ | $R=\infty$<br> | $(-\infty, \infty)$<br> |
| Converges for $\Vert{}x-a\Vert{} < R$ | $0 < R < \infty$<br> | $(a-R, a+R)$, $[a-R, a+R)$, $(a-R, a+R]$, or $[a-R, a+R]$<br> |

> ![[Pasted image 20261006220548.png]]
> *(Figure 3: Visualization of the interval of convergence for a power series centered at $a$ with radius $R$, showing the endpoints where convergence can vary)*
> 

> [!warning] Pitfall
> The Ratio Test and Root Test *always* fail when $x$ is an endpoint of the interval of convergence (where $\vert{}x - a\vert{} = R$). Therefore, you must manually test the endpoints $x = a - R$ and $x = a + R$ using other methods (such as the Alternating Series Test or $p$-series test) to determine whether they should be included in the interval.
> 
> 

### Worked Examples

> [!example] Example: Finding the Radius and Interval of Convergence
> For what values of $x$ does the series $\sum_{n=1}^{\infty} \frac{(x-3)^n}{n}$ converge?
> **Solution:**
> Let $a_n = \frac{(x-3)^n}{n}$. We apply the Ratio Test to find absolute convergence:
> 
> 
$$\begin{aligned} \left\vert{} \frac{a_{n+1}}{a_n} \right\vert{} &= \left\vert{} \frac{(x-3)^{n+1}}{n+1} \cdot \frac{n}{(x-3)^n} \right\vert{} \\ &= \frac{1}{1 + \frac{1}{n}} \vert{}x-3\vert{} \end{aligned}$$
> Taking the limit as $n \to \infty$, we get $\vert{}x-3\vert{}$. By the Ratio Test, the series converges absolutely when $\vert{}x-3\vert{} < 1$, which gives a radius of convergence $R = 1$.
> Rewriting the inequality gives the core interval:
> 
> 
$$-1 < x - 3 < 1 \implies 2 < x < 4$$
> Next, we test the endpoints $x=2$ and $x=4$:
> 
> 
> * At $x=4$, the series becomes $\sum_{n=1}^{\infty} \frac{1^n}{n} = \sum_{n=1}^{\infty} \frac{1}{n}$, which is the divergent harmonic series.
> 
> 
> * At $x=2$, the series becomes $\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$, which converges by the Alternating Series Test.
> 
> 
> 
> 
> Thus, the series converges for $2 \le x < 4$.
> 
> 
$$\boxed{[2, 4)}$$

> [!example] Example: Domain of the Bessel Function
> Find the domain of the Bessel function of order 0 defined by $J_0(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{2^{2n}(n!)^2}$.
> **Solution:**
> Let $a_n = \frac{(-1)^n x^{2n}}{2^{2n}(n!)^2}$. We use the Ratio Test:
> 
> 
$$\begin{aligned} \left\vert{} \frac{a_{n+1}}{a_n} \right\vert{} &= \left\vert{} \frac{(-1)^{n+1} x^{2(n+1)}}{2^{2(n+1)} [(n+1)!]^2} \cdot \frac{2^{2n}(n!)^2}{(-1)^n x^{2n}} \right\vert{} \\ &= \frac{x^{2n+2}}{2^{2n+2} (n+1)^2 (n!)^2} \cdot \frac{2^{2n} (n!)^2}{x^{2n}} \\ &= \frac{x^2}{4(n+1)^2} \end{aligned}$$
> Taking the limit as $n \to \infty$:
> 
> 
$$\lim_{n \to \infty} \frac{x^2}{4(n+1)^2} = 0 < 1 \quad \text{for all } x$$
> Because the limit is $0$ (which is always less than $1$) for all $x$, the series converges for all real numbers. The radius of convergence is $R = \infty$.
> 
> 
$$\boxed{(-\infty, \infty)}$$

---

# ~~={red}References=~~

*Calculus, James Stewart* (p. 765-769)