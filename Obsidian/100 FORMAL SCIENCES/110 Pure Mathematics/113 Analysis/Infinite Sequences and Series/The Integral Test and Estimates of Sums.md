Date: 2026-09-29
Tags:[[Analysis]], [[Stewart]], [[Mathematics]], [[Integral Test]], [[Series]]

## The Integral Test and Estimates of Sums

### The Integral Test 

> [!info] Definition / Theorem: The Integral Test
> Suppose $f$ is a continuous, positive, decreasing function on $[1, \infty)$ and let $a_n = f(n)$. Then the series $\sum_{n=1}^{\infty} a_n$ is convergent if and only if the improper integral $\int_{1}^{\infty} f(x) dx$ is convergent. In other words:
> 
> 
> * If $\int_{1}^{\infty} f(x) dx$ is convergent, then $\sum_{n=1}^{\infty} a_n$ is convergent.
> 
> 
> * If $\int_{1}^{\infty} f(x) dx$ is divergent, then $\sum_{n=1}^{\infty} a_n$ is divergent.
> 
> 
> 
> 

> [!warning] Pitfall
> When using the Integral Test, it is not necessary to start the series or the integral at $n=1$. Also, it is not required that $f$ be *always* decreasing; what is important is that $f$ be *ultimately* decreasing for $x$ larger than some number $N$. Furthermore, do *not* infer that the sum of the series is equal to the value of the integral. In general:
> 
> 
$$\sum_{n=1}^{\infty} a_n \neq \int_{1}^{\infty} f(x) dx$$

> ![[Pasted image 20260929223230.png]]
> 
> ![[Pasted image 20260929223310.png]]
> 
> *(Figures 1 and 2: Geometric confirmation of convergence and divergence by comparing the area under the curve to the sum of rectangle areas)*
> 

### The p-Series

> [!abstract] Core Principle / Properties: The $p$-Series
> A series of the form $\sum_{n=1}^{\infty} \frac{1}{n^p}$ is called a $p$-series. The convergence of this series is directly determined by the value of $p$.
> 
> 
*Serie de Rieman*

| Condition | Series Behavior | Example                                                 |
| --------- | --------------- | ------------------------------------------------------- |
| $p > 1$   | Convergent      | $\sum \frac{1}{n^3}$ converges ($p=3 > 1$)              |
| $p \le 1$ | Divergent       | $\sum \frac{1}{n^{1/3}}$ diverges ($p=\frac{1}{3} < 1$) |


### Estimating the Sum of a Series

> [!info] Definition / Theorem: Remainder Estimate for the Integral Test
> Suppose $f(k) = a_k$, where $f$ is a continuous, positive, decreasing function for $x \ge n$ and $\sum a_n$ is convergent. If we approximate the total sum $s$ by the $n$-th partial sum $s_n$, the remainder $R_n = s - s_n$ satisfies the following error estimate:
> 
> 
$$\int_{n+1}^{\infty} f(x) dx \le R_n \le \int_{n}^{\infty} f(x) dx$$

> [!abstract] Core Principle / Properties: Improved Sum Bounds
> By adding the partial sum $s_n$ to each side of the remainder inequalities, we can establish a tighter lower and upper bound for the exact sum of the series $s$:
> 
> 
$$s_n + \int_{n+1}^{\infty} f(x) dx \le s \le s_n + \int_{n}^{\infty} f(x) dx$$

> *![[Pasted image 20260929223530.png]]*
> *(Figures 3 and 4: Visualizing the remainder $R_n$ as the sum of rectangular areas to bound the error against the integral)*
> 

### Worked Examples

> [!example] Example: Applying the Integral Test
> Determine whether the series $\sum_{n=1}^{\infty} \frac{\ln n}{n}$ converges or diverges.
> **Solution:**
> The function $f(x) = \frac{\ln x}{x}$ is positive and continuous for $x > 1$. To verify it is decreasing, we compute its derivative:
> 
> 
$$f'(x) = \frac{(1/x)x - \ln x}{x^2} = \frac{1 - \ln x}{x^2}$$
> We see that $f'(x) < 0$ when $\ln x > 1$, which means $x > e$. Because $f$ is ultimately decreasing, we can evaluate the improper integral:
> 
> 
$$\begin{aligned} \int_{1}^{\infty} \frac{\ln x}{x} dx &= \lim_{t \to \infty} \int_{1}^{t} \frac{\ln x}{x} dx \\ &= \lim_{t \to \infty} \left[ \frac{(\ln x)^2}{2} \right]_{1}^{t} \\ &= \lim_{t \to \infty} \frac{(\ln t)^2}{2} \\ &= \infty \end{aligned}$$
> Since the improper integral diverges, the series must also diverge by the Integral Test.
> 
> 
$$\boxed{\text{Divergent}}$$

> [!example] Example: Using the Remainder Estimate
> Estimate the sum of the series $\sum_{n=1}^{\infty} \frac{1}{n^3}$ using the first 10 terms, and bound the error.
> **Solution:**
> We approximate the sum using $s_{10}$:
> 
> 
$$\sum_{n=1}^{\infty} \frac{1}{n^3} \approx s_{10} = \frac{1}{1^3} + \frac{1}{2^3} + \dots + \frac{1}{10^3} \approx 1.1975$$
> Using the Remainder Estimate with $f(x) = \frac{1}{x^3}$, the maximum error $R_{10}$ is bounded by the integral:
> 
$$\begin{aligned} R_{10} &\le \int_{10}^{\infty} \frac{1}{x^3} dx \\ &= \lim_{t \to \infty} \left[ -\frac{1}{2x^2} \right]_{10}^{t} \\ &= \frac{1}{2(10)^2} \\ &= \frac{1}{200} \end{aligned}$$
> The size of the error is at most $0.005$.
> 
> 
$$\boxed{R_{10} \le 0.005}$$

---
# ~={red}References=~

*Calculus, James Stewart* (p. 740-744)