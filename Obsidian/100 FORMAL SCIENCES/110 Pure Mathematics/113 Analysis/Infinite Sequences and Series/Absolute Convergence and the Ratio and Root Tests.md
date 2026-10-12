Date: 2026-09-29
Tags: [[Analysis]], [[Mathematics]], [[Absolute Convergence]], [[Ratio Test]], [[Root Test]]. [[Series]]

## Absolute Convergence and the Ratio and Root Tests

### Absolute vs. Conditional Convergence

> [!info] Definition / Theorem: Absolute and Conditional Convergence
> * **Absolute Convergence:** A series $\sum a_n$ is called absolutely convergent if the series of absolute values $\sum \vert{}a_n\vert{}$ is convergent.
> 
> 
> * **Conditional Convergence:** A series $\sum a_n$ is called conditionally convergent if it is convergent but not absolutely convergent.
> 
> 
> 
> 
> **Theorem:** If a series $\sum a_n$ is absolutely convergent, then it is convergent.
> 
> 

> ![[Pasted image 20260929235336.png]] 
> *(Figure 1: Graphs of the terms $a_n$ and partial sums $s_n$ for the series $\sum \frac{\cos n}{n^2}$. The signs change irregularly, but absolute convergence still guarantees standard convergence)*
> 

### The Ratio Test

> [!info] Definition / Theorem: The Ratio Test
> For a series $\sum a_n$, evaluate the limit of the absolute ratio of consecutive terms:
> 
> 
$$\lim_{n \to \infty} \left\vert{} \frac{a_{n+1}}{a_n} \right\vert{} = L$$
> -  If $L < 1$, then the series $\sum a_n$ is absolutely convergent (and therefore convergent).
> -  If $L > 1$ or $\lim_{n \to \infty} \left\vert{} \frac{a_{n+1}}{a_n} \right\vert{} = \infty$, then the series $\sum a_n$ is divergent.
> -  If $L = 1$, the Ratio Test is inconclusive; no conclusion can be drawn about the convergence or divergence of $\sum a_n$.
> 
> 

> [!warning] Pitfall
> If $\lim_{n \to \infty} \vert{}a_{n+1}/a_n\vert{} = 1$, the series might converge or it might diverge, meaning you must use another test. The Ratio Test is generally conclusive if the $n$-th term contains an exponential or a factorial. However, for series containing only rational functions of $n$ or $p$-series, the ratio limit will always be $1$, and the test will fail.
> 
> 

### The Root Test

> [!info] Definition / Theorem: The Root Test
> For a series $\sum a_n$, evaluate the limit of the $n$-th root of the absolute terms:
> 
> 
$$\lim_{n \to \infty} \sqrt[n]{\vert{}a_n\vert{}} = L$$
> -  If $L < 1$, then the series $\sum a_n$ is absolutely convergent (and therefore convergent).
> -  If $L > 1$ or $\lim_{n \to \infty} \sqrt[n]{\vert{}a_n\vert{}} = \infty$, then the series $\sum a_n$ is divergent.
> -  If $L = 1$, the Root Test is inconclusive.
> 
> 

### Rearrangements

> [!abstract] Core Principle / Properties: Rearranging Series Terms
> A rearrangement of an infinite series is obtained by simply changing the order of the terms.
> 
> 
> * **Absolutely Convergent Series:** If $\sum a_n$ is an absolutely convergent series with sum $s$, then any rearrangement of $\sum a_n$ has the same sum $s$.
> 
> 
> * **Conditionally Convergent Series:** Any conditionally convergent series can be rearranged to give a different sum. Riemann proved that a conditionally convergent series can be rearranged to have a sum equal to any real number whatsoever.
> 
> 
> 
> 

### Worked Examples

> [!example] Example: Determining Absolute Convergence (Irregular Signs)
> Determine whether the series $\sum_{n=1}^{\infty} \frac{\cos n}{n^2}$ is convergent or divergent.
> **Solution:**
> This series has both positive and negative terms, but it is not strictly alternating because the signs change irregularly. We can apply the Comparison Test to the series of absolute values:
> 
> 
$$\sum_{n=1}^{\infty} \left\vert{} \frac{\cos n}{n^2} \right\vert{} = \sum_{n=1}^{\infty} \frac{\vert{}\cos n\vert{}}{n^2}$$
> Since $\vert{}\cos n\vert{} \le 1$ for all $n$, we have:
> 
> 
$$\frac{\vert{}\cos n\vert{}}{n^2} \le \frac{1}{n^2}$$
> We know that $\sum \frac{1}{n^2}$ is convergent because it is a $p$-series with $p = 2$. Therefore, $\sum \frac{\vert{}\cos n\vert{}}{n^2}$ is convergent by the Comparison Test. Thus, the given series is absolutely convergent, and therefore convergent by Theorem 3.
> 
> 
$$\boxed{\text{Absolutely Convergent}}$$

> [!example] Example: Applying the Ratio Test
> Test the series $\sum_{n=1}^{\infty} (-1)^n \frac{n^3}{3^n}$ for absolute convergence.
> **Solution:**
> We use the Ratio Test with $a_n = (-1)^n \frac{n^3}{3^n}$:
> 
> 
$$\begin{aligned} \left\vert{} \frac{a_{n+1}}{a_n} \right\vert{} &= \left\vert{} \frac{\frac{(-1)^{n+1}(n+1)^3}{3^{n+1}}}{\frac{(-1)^n n^3}{3^n}} \right\vert{} \\ &= \frac{(n+1)^3}{3^{n+1}} \cdot \frac{3^n}{n^3} \\ &= \frac{1}{3} \left( \frac{n+1}{n} \right)^3 \\ &= \frac{1}{3} \left( 1 + \frac{1}{n} \right)^3 \end{aligned}$$
> Taking the limit as $n \to \infty$:
> 
> 
$$\lim_{n \to \infty} \frac{1}{3} \left( 1 + \frac{1}{n} \right)^3 = \frac{1}{3} (1)^3 = \frac{1}{3} < 1$$
> Thus, by the Ratio Test, the given series is absolutely convergent.
> 
> 
$$\boxed{\text{Absolutely Convergent}}$$

> [!example] Example: Applying the Root Test
> Test the convergence of the series $\sum_{n=1}^{\infty} \left( \frac{2n+3}{3n+2} \right)^n$.
> **Solution:**
> Because the $n$-th term involves an $n$-th power, the Root Test is convenient. We evaluate the limit:
> 
> 
$$\begin{aligned} \sqrt[n]{\vert{}a_n\vert{}} &= \sqrt[n]{\left( \frac{2n+3}{3n+2} \right)^n} \\ &= \frac{2n+3}{3n+2} \\ &= \frac{2 + \frac{3}{n}}{3 + \frac{2}{n}} \end{aligned}$$
> Taking the limit as $n \to \infty$:
> 
> 
$$\lim_{n \to \infty} \frac{2 + \frac{3}{n}}{3 + \frac{2}{n}} = \frac{2}{3} < 1$$
> Thus, the given series converges by the Root Test.
> 
> 
$$\boxed{\text{Convergent}}$$

# ~={red}References=~

*Calculus, James Stewart* (p. 758-761)