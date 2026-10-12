Date: 2026-09-29
Tags: [[Analysis]], [[Stewart]], [[Mathematics]], [[Series]], [[Convergence Tests]]

---


## Alternating Series

### The Alternating Series Test

> [!info] Definition / Theorem: Alternating Series Test
> An alternating series is a series whose terms are alternately positive and negative. The $n$-th term is of the form $a_n = (-1)^{n-1}b_n$ or $a_n = (-1)^n b_n$, where $b_n = \vert{}a_n\vert{}$ is a positive number.
> 
> 
> If the alternating series satisfies:
> -  $b_{n+1} \le b_n$ for all $n$
> -  $\lim_{n \to \infty} b_n = 0$
> then the series is convergent.
> 
> 
$$\sum_{n=1}^{\infty} (-1)^{n-1} b_n = b_1 - b_2 + b_3 - b_4 + b_5 - \dots$$

> ![[Pasted image 20260929233045.png]]
> (Figure 1: Geometric proof concept showing how successive partial sums $s_n$ oscillate and narrow down to the total sum $s$)
> 


> ![[Pasted image 20260929233100.png]]
> (Figure 2: Graphs of the terms $a_n$ and the partial sums $s_n$ for the alternating harmonic series, visualizing the zigzag convergence to approximately 0.693)
> 
> 

> [!warning] Pitfall
> Condition (i) of the Alternating Series Test only needs to hold *eventually* (for $n \ge N$). If it is not algebraically obvious that the sequence $\{b_n\}$ is decreasing, you can consider the related continuous function $f(x)$ and verify that its derivative $f'(x) < 0$ for $x \ge N$. Additionally, if condition (ii) fails (i.e., $\lim_{n \to \infty} b_n \neq 0$), the series diverges by the Test for Divergence.
> 
> 

### Estimating Sums

> [!abstract] Core Principle / Properties: Alternating Series Estimation Theorem
> A partial sum $s_n$ of any convergent series can be used as an approximation to the total sum $s$. For an alternating series that satisfies the conditions of the Alternating Series Test, the size of the error $\vert{}R_n\vert{}$ is strictly smaller than the absolute value of the first neglected term, $b_{n+1}$:
> 
> 
$$\vert{}R_n\vert{} = \vert{}s - s_n\vert{} \le b_{n+1}$$

> [!example] Example: Testing Convergence with a Derivative
> Test the series $\sum_{n=1}^{\infty} \frac{(-1)^{n+1} n^2}{n^3 + 1}$ for convergence or divergence.
> **Solution:**
> The series is alternating with $b_n = \frac{n^2}{n^3 + 1}$. To verify condition (i), it is not immediately obvious that $b_n$ is decreasing, so we check the derivative of the related function $f(x) = \frac{x^2}{x^3 + 1}$:
> 
> 
$$f'(x) = \frac{x(2 - x^3)}{(x^3 + 1)^2}$$
> Since $f'(x) < 0$ for $x > \sqrt[3]{2}$, the sequence $b_n$ is decreasing for $n \ge 2$.
> Next, we verify condition (ii):
> 
> 
$$\lim_{n \to \infty} b_n = \lim_{n \to \infty} \frac{n^2}{n^3 + 1} = \lim_{n \to \infty} \frac{\frac{1}{n}}{1 + \frac{1}{n^3}} = 0$$
> Both conditions are satisfied, so the series converges.
> 
> 
$$\boxed{\text{Convergent}}$$

> [!example] Example: Estimating the Sum of an Alternating Series
> Find the sum of the series $\sum_{n=0}^{\infty} \frac{(-1)^n}{n!}$ correct to three decimal places.
> **Solution:**
> The series converges by the Alternating Series Test. Let's write out the first few terms of the series:
> 
> 
$$\begin{aligned} s &= \frac{1}{0!} - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \frac{1}{5!} + \frac{1}{6!} - \frac{1}{7!} + \dots \\ &= 1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24} - \frac{1}{120} + \frac{1}{720} - \frac{1}{5040} + \dots \end{aligned}$$
> We examine the terms to find when $b_{n+1}$ becomes small enough. Notice that the 8th term ($b_7$) is:
> 
> 
$$b_7 = \frac{1}{5040} < \frac{1}{5000} = 0.0002$$
> By the Alternating Series Estimation Theorem, the error in using $s_6$ is bounded by $b_7$:
> 
> 
$$\vert{}s - s_6\vert{} \le b_7 < 0.0002$$
> We compute $s_6$:
> 
> 
$$s_6 = 1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24} - \frac{1}{120} + \frac{1}{720} \approx 0.368056$$
> An error of less than $0.0002$ does not affect the third decimal place.
> 
> 
$$\boxed{s \approx 0.368}$$


---
# ~={red}References=~

*Calculus, James Stewart* (p. 751-754)