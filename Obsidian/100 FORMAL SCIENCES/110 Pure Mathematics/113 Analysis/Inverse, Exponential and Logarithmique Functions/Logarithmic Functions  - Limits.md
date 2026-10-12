Date: 2026-08-19
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Derivatives]], [[Limits]], [[Logarithmic Functions]]

---

## 6.3 Logarithmic Functions

### 1. Limits of Logarithmic Functions

> [!info] Limits of Logarithmic Functions
> For any base $a > 1$, the logarithmic function $f(x) = \log_a x$ has the following limits:
> $$ \lim_{x \to \infty} \log_a x = \infty \quad \text{and} \quad \lim_{x \to 0^+} \log_a x = -\infty $$
> Consequently, the $y$-axis is a vertical asymptote of the curve $y = \log_a x$.

> [!example] Example 3: Evaluating a Logarithmic Limit
> **Problem:** Find $\lim_{x \to 0} \log_{10}(\tan^2 x)$.
> 
> **Solution:**
> As $x \to 0$, we know that $t = \tan^2 x \to \tan^2 0 = 0$, and the values of $t$ are strictly positive.
> Since the base $a = 10 > 1$, we apply the limit property:
> $$ \begin{aligned} \lim_{x \to 0} \log_{10}(\tan^2 x) &= \lim_{t \to 0^+} \log_{10} t \\ &= -\infty \end{aligned} $$

---

### 2. The Natural Logarithm

> [!info] The Natural Logarithm ($\ln x$)
> The logarithm with base $e$ is called the natural logarithm, denoted by $\log_e x = \ln x$.
> 
> **Cancellation Equations:**
> $$ \ln(e^x) = x \quad \forall x \in \mathbb{R} $$
> $$ e^{\ln x} = x \quad \forall x > 0 $$
> 
> **Limits:**
> Because $e > 1$, the natural logarithm satisfies:
> $$ \lim_{x \to \infty} \ln x = \infty \quad \text{and} \quad \lim_{x \to 0^+} \ln x = -\infty $$

![[Pasted image 20260819014631.png|430]]

> [!info] Growth of the Natural Logarithm
> While $\lim_{x \to \infty} \ln x = \infty$, the natural logarithm grows extremely slowly.
> In fact, $\ln x$ grows more slowly than any positive power of $x$.
> For any positive power $p$:
> $$ \lim_{x \to \infty} \frac{\ln x}{x^p} = 0 $$

![[Pasted image 20260819014710.png|634]]

---

### 3. Change of Base Formula

> [!info] Proof: Change of Base Formula
> For any positive number $a \ (a \neq 1)$, logarithms can be converted to the natural base:
> $$ \log_a x = \frac{\ln x}{\ln a} $$
> 
> **Proof:**
> Let $y = \log_a x$.
> By the definition of the inverse function, this is equivalent to:
> $$ a^y = x $$
> Taking the natural logarithm of both sides of the equation yields:
> $$ \begin{aligned} \ln(a^y) &= \ln x \\ y \ln a &= \ln x \\ y &= \frac{\ln x}{\ln a} \end{aligned} $$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 404)