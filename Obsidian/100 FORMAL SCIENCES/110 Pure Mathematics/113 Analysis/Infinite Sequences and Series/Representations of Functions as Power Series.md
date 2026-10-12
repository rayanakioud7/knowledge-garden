Date: 2026-10-06
Tags: [[Calculus]], [[Stewart]], [[Mathematics]], [[Power Series]], [[Differentiation]], [[Integration]]

---

## Representations of Functions as Power Series

### The Geometric Series Representation

> [!abstract] Core Principle / Properties: The Geometric Power Series
> The foundational strategy for representing known functions as power series stems from the geometric series formula:
> 
> 
$$\frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots = \sum_{n=0}^{\infty} x^n$$
> This equation expresses the function $f(x) = \frac{1}{1-x}$ as a sum of a power series, which converges strictly on the interval $\vert{}x\vert{} < 1$. By algebraically manipulating other rational functions to fit this form, we can easily find their series representations.
> 
> 

> ![[Pasted image 20261006223102.png]]
> *(Figure 1: The function $f(x) = 1/(1-x)$ and its sequence of partial sums $s_n(x)$. As $n$ increases, the partial sums become better approximations of the function on the interval $-1 < x < 1$)*
> 

> [!example] Example: Algebraic Manipulation for a Series
> Find a power series representation for $f(x) = \frac{1}{x+2}$ and its interval of convergence.
> **Solution:**
> Factor a $2$ from the denominator to match the geometric form $\frac{1}{1 - \text{term}}$:
> 
> 
$$\frac{1}{2+x} = \frac{1}{2\left(1 + \frac{x}{2}\right)} = \frac{1}{2} \left[ \frac{1}{1 - \left(-\frac{x}{2}\right)} \right]$$
> Now, replace $x$ with $-x/2$ in the standard geometric series:
> 
> 
$$\begin{aligned} \frac{1}{2+x} &= \frac{1}{2} \sum_{n=0}^{\infty} \left(-\frac{x}{2}\right)^n \\ &= \frac{1}{2} \sum_{n=0}^{\infty} \frac{(-1)^n x^n}{2^n} \\ &= \sum_{n=0}^{\infty} \frac{(-1)^n}{2^{n+1}} x^n \end{aligned}$$
> The series converges when $\vert{}-x/2\vert{} < 1$, which simplifies to $\vert{}x\vert{} < 2$.
> 
> 

$$\boxed{\sum_{n=0}^{\infty} \frac{(-1)^n}{2^{n+1}} x^n, \quad I = (-2, 2)}$$

### Differentiation and Integration of Power Series

> [!info] Definition / Theorem: Term-by-Term Differentiation and Integration
> If the power series $\sum c_n(x - a)^n$ has a radius of convergence $R > 0$, then the function $f$ defined by $f(x) = \sum_{n=0}^{\infty} c_n(x - a)^n$ is differentiable (and therefore continuous) on the interval $(a - R, a + R)$. The derivative and integral can be found by evaluating each term individually:
> 
> 
> - (i) $f'(x) = c_1 + 2c_2(x-a) + 3c_3(x-a)^2 + \dots = \sum_{n=1}^{\infty} n c_n (x-a)^{n-1}$
> 
> 
> - (ii) $\int f(x) dx = C + c_0(x-a) + c_1\frac{(x-a)^2}{2} + \dots = C + \sum_{n=0}^{\infty} c_n \frac{(x-a)^{n+1}}{n+1}$
> 
> The radii of convergence for both the differentiated and integrated power series remain $R$.
> 
> 

> [!warning] Pitfall
> Although Theorem 2 guarantees that the *radius* of convergence $R$ remains identical upon differentiation or integration, it does not guarantee that the *interval* of convergence remains the same. The convergence behavior at the exact endpoints $x = a \pm R$ can change—the original series might converge at an endpoint while the differentiated series diverges there.
> 
> 

| Derived Function $f(x)$ | Power Series Representation | Radius of Convergence $R$ |
| --- | --- | --- |
| $\frac{1}{(1-x)^2}$ | $\sum_{n=0}^{\infty} (n+1)x^n$<br> | $1$<br> |
| $\ln(1+x)$ | $\sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n}$<br> | $1$<br> |
| $\tan^{-1} x$ | $\sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1}$<br> | $1$<br> |

### Worked Applications

> [!example] Example: Power Series via Integration
> Find a power series representation for $\ln(1+x)$ and its radius of convergence.
> **Solution:**
> Notice that the derivative of $\ln(1+x)$ is $\frac{1}{1+x}$. We first represent $\frac{1}{1+x}$ as a geometric series by replacing $x$ with $-x$:
> 
> 
$$\frac{1}{1+x} = \frac{1}{1 - (-x)} = 1 - x + x^2 - x^3 + \dots = \sum_{n=0}^{\infty} (-1)^n x^n \quad (\vert{}x\vert{} < 1)$$
> Integrating both sides yields the power series for $\ln(1+x)$:
> 
> 
$$\begin{aligned} \ln(1+x) &= \int \frac{1}{1+x} dx \\ &= \int (1 - x + x^2 - x^3 + \dots) dx \\ &= C + x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots \\ &= C + \sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} \end{aligned}$$
> To determine the constant $C$, substitute $x=0$, which yields $\ln(1) = C \implies C = 0$. The radius of convergence remains the same as the original series, $R = 1$.
> 
> 
$$\boxed{\ln(1+x) = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n}, \quad R=1}$$

> [!example] Example: Approximating Definite Integrals
> Approximate $\int_{0}^{0.5} \frac{1}{1+x^7} dx$ correct to within $10^{-7}$.
> **Solution:**
> First, express the integrand as a power series by replacing $x$ with $-x^7$ in the geometric series formula:
> 
> 
$$\frac{1}{1+x^7} = \frac{1}{1 - (-x^7)} = \sum_{n=0}^{\infty} (-x^7)^n = \sum_{n=0}^{\infty} (-1)^n x^{7n} = 1 - x^7 + x^{14} - \dots$$
> Integrate term by term to find the indefinite integral:
> 
> 
$$\int \frac{1}{1+x^7} dx = C + \sum_{n=0}^{\infty} (-1)^n \frac{x^{7n+1}}{7n+1} = C + x - \frac{x^8}{8} + \frac{x^{15}}{15} - \dots$$
> Apply the Fundamental Theorem of Calculus to evaluate the definite integral (using $C=0$):
> 
> 
$$\begin{aligned} \int_{0}^{0.5} \frac{1}{1+x^7} dx &= \left[ x - \frac{x^8}{8} + \frac{x^{15}}{15} - \dots \right]_{0}^{1/2} \\ &= \frac{1}{2} - \frac{1}{8 \cdot 2^8} + \frac{1}{15 \cdot 2^{15}} - \frac{1}{22 \cdot 2^{22}} + \dots \end{aligned}$$
> Since this is an alternating series, we use the Alternating Series Estimation Theorem. We evaluate the size of the terms to find where the error drops below $10^{-7}$:
> 
> 
$$\text{Term for } n=3: \quad \frac{1}{22 \cdot 2^{22}} \approx \frac{1}{9.2 \times 10^7} \approx 1.08 \times 10^{-8} < 10^{-7}$$
> Because the term for $n=3$ is smaller than $10^{-7}$, we stop adding after the term for $n=2$:
> 
> 
$$\begin{aligned} \int_{0}^{0.5} \frac{1}{1+x^7} dx &\approx \frac{1}{2} - \frac{1}{8 \cdot 2^8} + \frac{1}{15 \cdot 2^{15}} \\ &\approx 0.49951374 \end{aligned}$$
$$\boxed{0.49951374}$$


---
# ~~={red}References=~~

*Calculus, James Stewart* (p. 771-775)