Date: 2026-09-29
Tags: [[Mathematics]], [[Limits]], [[Analysis]], [[Sequences]]

---

## Infinite Series

### Partial Sums and Convergence

> [!info] Definition / Theorem: Infinite Series and Convergence
> Given a sequence $\{a_n\}$, an infinite series is the sum of its terms. Let $s_n$ denote its $n$-th partial sum:
> 
> 
$$ s_n = \sum_{i=1}^{n} a_i = a_1 + a_2 + \dots + a_n $$
> If the sequence of partial sums $\{s_n\}$ is convergent and $\lim_{n \to \infty} s_n = s$ exists as a real number, then the series is convergent.
> 
> 
$$ \sum_{n=1}^{\infty} a_n = s $$
> The number $s$ is called the sum of the series. If the sequence $\{s_n\}$ is divergent, the series is called divergent.
> 
> 

> *![[Pasted image 20260929214754.png]]
> 
> (Figure 2: The sequence of partial sums $s_n$ plotted against $n$, showing how they approach the series limit as $n$ increases)*
> 

### Special Series

> [!abstract] Core Principle / Properties: The Geometric Series
> A geometric series is determined by its first term $a \neq 0$ and its common ratio $r$. Each term is obtained from the preceding one by multiplying it by $r$.
> 
> 
$$ \sum_{n=1}^{\infty} a r^{n-1} = a + ar + ar^2 + \dots $$
> The series converges if $\vert{}r\vert{} < 1$ and diverges if $\vert{}r\vert{} \ge 1$.
> 
> 

| Condition | Series Behavior | Limit / Sum |
| --- | --- | --- |
| $\vert{}r\vert{} < 1$ | Convergent | $s = \frac{a}{1-r}$<br> |
| $\vert{}r\vert{} \ge 1$ | Divergent | Does not exist


> ![[Pasted image 20260929214820.png]]
> *(Figure 1: Geometric demonstration of the sum of a convergent geometric series using similar triangles)*
> 

> [!abstract] Core Principle / Properties: The Harmonic Series
> The harmonic series is given by:
$$ \sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \dots $$
> The harmonic series is divergent.
> 
> 

### Convergence Theorems and Tests

> [!info] Definition / Theorem: Theorem 6 and Test for Divergence
> **Theorem 6:** If the series $\sum_{n=1}^{\infty} a_n$ is convergent, then $\lim_{n \to \infty} a_n = 0$.
> **Test for Divergence:** If $\lim_{n \to \infty} a_n$ does not exist or if $\lim_{n \to \infty} a_n \neq 0$, then the series $\sum_{n=1}^{\infty} a_n$ is divergent.
> 
> 

> [!warning] Pitfall
> The converse of Theorem 6 is not true in general. If $\lim_{n \to \infty} a_n = 0$, we cannot conclude that $\sum a_n$ is convergent. For example, the harmonic series $\sum \frac{1}{n}$ diverges even though $1/n \to 0$. If the limit is $0$, we know nothing about the convergence or divergence of the series.
> 
> 

> [!abstract] Core Principle / Properties: Properties of Convergent Series
> If $\sum a_n$ and $\sum b_n$ are convergent series, and $c$ is a constant, then the following series are also convergent:
> 
> 
$$ \sum_{n=1}^{\infty} c a_n = c \sum_{n=1}^{\infty} a_n $$
$$ \sum_{n=1}^{\infty} (a_n \pm b_n) = \sum_{n=1}^{\infty} a_n \pm \sum_{n=1}^{\infty} b_n $$
> Note: A finite number of terms does not affect the overall convergence or divergence of a series.
> 
> 

### Examples

> [!example] Example: Repeating Decimals as Series
> Write the number $2.3\overline{17} = 2.3171717\dots$ as a ratio of integers.
> **Solution:**
> First, express the repeating decimal as a sum:
> 
> 
$$ 2.3171717\dots = 2.3 + \frac{17}{10^3} + \frac{17}{10^5} + \frac{17}{10^7} + \dots $$
> After the first term, we have a geometric series:
> 
> 
$$ \begin{aligned} > a &= \frac{17}{10^3} \\ > r &= \frac{1}{10^2} > \end{aligned} $$
> Since $\vert{}r\vert{} = \frac{1}{100} < 1$, the series converges. We calculate its sum:
> 
> 
$$ \begin{aligned}  2.3\overline{17} &= 2.3 + \frac{\frac{17}{10^3}}{1 - \frac{1}{10^2}} \\  &= 2.3 + \frac{\frac{17}{1000}}{\frac{99}{100}} \\  &= \frac{23}{10} + \frac{17}{990} \\  &= \frac{2277}{990} + \frac{17}{990} \\  &= \frac{2294}{990} \\  &= \frac{1147}{495}  \end{aligned} $$
$$ \boxed{\frac{1147}{495}} $$

> [!example] Example: Finding the Sum of a Telescoping Series
> Show that the series $\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$ is convergent, and find its sum.
> **Solution:**
> This is not a geometric series, so we compute the partial sums using partial fraction decomposition:
> 
> 
$$ \frac{1}{i(i+1)} = \frac{1}{i} - \frac{1}{i+1} $$
> The $n$-th partial sum $s_n$ is:
> 
> 
$$ \begin{aligned}  s_n &= \sum_{i=1}^{n} \left( \frac{1}{i} - \frac{1}{i+1} \right) \\  &= \left( 1 - \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \dots + \left( \frac{1}{n} - \frac{1}{n+1} \right)  \end{aligned} >$$
> Notice that the terms cancel in pairs (a telescoping sum):
> 
> 
$$ s_n = 1 - \frac{1}{n+1} $$
> Taking the limit as $n \to \infty$:
> 
> 
$$ \begin{aligned}  \lim_{n \to \infty} s_n &= \lim_{n \to \infty} \left( 1 - \frac{1}{n+1} \right) \\  &= 1 - 0 \\  &= 1  \end{aligned} $$
$$ \boxed{1} $$



---
# ~={red}References=~
[[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 727)