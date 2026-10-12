Date: 2026-09-29
Tags: [[Analysis]], [[Stewart]], [[Mathematics]], [[Comparison Tests]], [[Series]]

---
## The Comparison Tests

### The Comparison Test

> [!info] Definition / Theorem: The Comparison Test
> Suppose $\sum a_n$ and $\sum b_n$ are series with positive terms.
> -  If $\sum b_n$ is convergent and $a_n \le b_n$ for all $n$, then $\sum a_n$ is also convergent.
> -  If $\sum b_n$ is divergent and $a_n \ge b_n$ for all $n$, then $\sum a_n$ is also divergent.
> 
> 

> [!abstract] Core Principle / Properties: Standard Series for Comparison
> When applying the Comparison Test, we typically compare the given series to known standard series.
> 
> 

| Series Type | Standard Form | Convergence Condition | Divergence Condition |
| --- | --- | --- | --- |
| **$p$-series** | $\sum \frac{1}{n^p}$ | $p > 1$<br> | $p \le 1$<br> |
| **Geometric series** | $\sum ar^{n-1}$ | $\Vert{}r\Vert{} < 1$<br> | $\Vert{}r\Vert{} \ge 1$<br> |

> [!warning] Pitfall
> It is only necessary to verify that the condition $a_n \le b_n$ or $a_n \ge b_n$ holds for $n \ge N$, where $N$ is some fixed integer. A finite number of initial terms does not affect the ultimate convergence or divergence of the series. Additionally, the Comparison Test cannot be applied if the terms are *larger* than those of a convergent series or *smaller* than those of a divergent series.
> 
> 

### The Limit Comparison Test

> [!info] Definition / Theorem: The Limit Comparison Test
> Suppose $\sum a_n$ and $\sum b_n$ are series with positive terms. If:
> 
> 
$$\lim_{n \to \infty} \frac{a_n}{b_n} = c$$
> where $c$ is a finite number and $c > 0$, then either both series converge or both diverge.
> 
> 

> [!example] Example: Using the Limit Comparison Test
> Determine whether the series $\sum_{n=1}^{\infty} \frac{1}{2^n - 1}$ converges or diverges.
> **Solution:**
> We use the Limit Comparison Test with the following sequences:
> 
> 
$$\begin{aligned} a_n &= \frac{1}{2^n - 1} \\ b_n &= \frac{1}{2^n} \end{aligned}$$
> Evaluating the limit of their ratio:
> 
> 
$$\begin{aligned} \lim_{n \to \infty} \frac{a_n}{b_n} &= \lim_{n \to \infty} \frac{\frac{1}{2^n - 1}}{\frac{1}{2^n}} \\ &= \lim_{n \to \infty} \frac{2^n}{2^n - 1} \\ &= \lim_{n \to \infty} \frac{1}{1 - 1/2^n} \\ &= 1 \end{aligned}$$
> Since this limit exists and $c = 1 > 0$, and the comparison series $\sum \frac{1}{2^n}$ is a convergent geometric series, the given series also converges by the Limit Comparison Test.
> 
> 
$$\boxed{\text{Convergent}}$$

### Estimating Sums Using Comparison

> [!abstract] Core Principle / Properties: Comparing Remainders
> If we use the Comparison Test to show that a series $\sum a_n$ converges by comparison with a convergent series $\sum b_n$, we can estimate the sum $\sum a_n$ by comparing their respective remainders:
> 
> 
$$\begin{aligned} R_n &= s - s_n = a_{n+1} + a_{n+2} + \dots \\ T_n &= t - t_n = b_{n+1} + b_{n+2} + \dots \end{aligned}$$
> Since $a_n \le b_n$ for all $n$, it follows that the remainders are also bounded:
> 
> 
$$R_n \le T_n$$
> If $\sum b_n$ is a $p$-series, we can estimate its remainder $T_n$ using the Remainder Estimate for the Integral Test.
> 
> 

> [!example] Example: Approximating the Sum and Bounding Error
> Use the sum of the first 100 terms to approximate the sum of the series $\sum \frac{1}{n^3 + 1}$ and estimate the error involved in this approximation.
> **Solution:**
> The given series converges by comparison with $\sum \frac{1}{n^3}$ since:
> 
> 
$$\frac{1}{n^3 + 1} < \frac{1}{n^3}$$
> The remainder $T_n$ for the comparison series $\sum \frac{1}{n^3}$ can be bounded using the integral test estimate:
> 
> 
$$T_n \le \int_{n}^{\infty} \frac{1}{x^3} dx = \frac{1}{2n^2}$$
> Therefore, the remainder $R_n$ for our given series satisfies:
> 
> 
$$R_n \le T_n \le \frac{1}{2n^2}$$
> Evaluating this boundary for $n = 100$:
> 
> 
$$R_{100} \le \frac{1}{2(100)^2} = 0.00005$$
> Thus, the error in the approximation is less than $0.00005$.
> 
> 

$$\boxed{R_{100} \le 0.00005}$$

---
# ~={red}References=~

*Calculus, James Stewart* (p. 747-750)