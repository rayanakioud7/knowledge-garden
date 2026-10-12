Date: 2026-09-06
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Limits]]

---

## 7.8 Improper Integrals

### 1. Type 1: Infinite Intervals

> [!info] Definition of an Improper Integral of Type 1
> (a) If $\int_a^t f(x) \, dx$ exists for every number $t \ge a$, then:
> 
> $$\boxed{ \int_a^\infty f(x) \, dx = \lim_{t \to \infty} \int_a^t f(x) \, dx }$$
> 
> 
> 
> provided this limit exists (as a finite number).
> (b) If $\int_t^b f(x) \, dx$ exists for every number $t \le b$, then:
> 
> $$\boxed{ \int_{-\infty}^b f(x) \, dx = \lim_{t \to -\infty} \int_t^b f(x) \, dx }$$
> 
> 
> 
> provided this limit exists (as a finite number).
> The improper integrals are called **convergent** if the corresponding limit exists and **divergent** if the limit does not exist.
> (c) If both are convergent, then we define:
> 
> $$\boxed{ \int_{-\infty}^\infty f(x) \, dx = \int_{-\infty}^a f(x) \, dx + \int_a^\infty f(x) \, dx }$$
> 
> 
> 
> where $a$ is any real number.

![[Pasted image 20260906233832.png]]

> [!example] Example 1: Divergent Improper Integral
> **Problem:** Determine whether the integral $\int_1^\infty (1/x) \, dx$ is convergent or divergent.
> **Solution:**
> According to part (a) of the definition:
> 
> $$\begin{aligned} \int_1^\infty \frac{1}{x} \, dx &= \lim_{t \to \infty} \int_1^t \frac{1}{x} \, dx = \lim_{t \to \infty} \ln \vert{}x\vert{} \Big]_1^t \\ &= \lim_{t \to \infty} (\ln t - \ln 1) = \lim_{t \to \infty} \ln t = \infty \end{aligned}$$
> 
> 
> 
> The limit does not exist as a finite number, so the improper integral is divergent.

> [!example] Example 2: Convergent Improper Integral
> **Problem:** Evaluate $\int_{-\infty}^0 xe^x \, dx$.
> **Solution:**
> 
> $$\int_{-\infty}^0 xe^x \, dx = \lim_{t \to -\infty} \int_t^0 xe^x \, dx$$
> 
> 
> 
> Integrate by parts with $u = x \implies du = dx$ and $dv = e^x \, dx \implies v = e^x$:
> 
> $$\begin{aligned} \int_t^0 xe^x \, dx &= xe^x \Big]_t^0 - \int_t^0 e^x \, dx \\ &= -te^t - 1 + e^t \end{aligned}$$
> 
> 
> 
> Evaluate the limit as $t \to -\infty$ using l'Hospital's Rule for the term $te^t$:
> 
> $$\lim_{t \to -\infty} te^t = \lim_{t \to -\infty} \frac{t}{e^{-t}} = \lim_{t \to -\infty} \frac{1}{-e^{-t}} = \lim_{t \to -\infty} (-e^t) = 0$$
> 
> 
> 
> Therefore:
> 
> $$\begin{aligned} \int_{-\infty}^0 xe^x \, dx &= \lim_{t \to -\infty} (-te^t - 1 + e^t) \\ &= -0 - 1 + 0 = -1 \end{aligned}$$
> 
> 
> 
> The integral converges to $-1$.

> [!example] Example 3: Infinite Bounds on Both Ends
> **Problem:** Evaluate $\int_{-\infty}^\infty \frac{1}{1 + x^2} \, dx$.
> **Solution:**
> Choose $a = 0$ to split the integral:
> 
> $$\int_{-\infty}^\infty \frac{dx}{1 + x^2} = \int_{-\infty}^0 \frac{dx}{1 + x^2} + \int_0^\infty \frac{dx}{1 + x^2}$$
> 
> 
> 
> Evaluate the right side:
> 
> $$\begin{aligned} \int_0^\infty \frac{dx}{1 + x^2} &= \lim_{t \to \infty} \int_0^t \frac{dx}{1 + x^2} = \lim_{t \to \infty} \tan^{-1} x \Big]_0^t \\ &= \lim_{t \to \infty} (\tan^{-1} t - \tan^{-1} 0) = \frac{\pi}{2} - 0 = \frac{\pi}{2} \end{aligned}$$
> 
> 
> 
> Evaluate the left side:
> 
> $$\begin{aligned} \int_{-\infty}^0 \frac{dx}{1 + x^2} &= \lim_{t \to -\infty} \int_t^0 \frac{dx}{1 + x^2} = \lim_{t \to -\infty} \tan^{-1} x \Big]_t^0 \\ &= \lim_{t \to -\infty} (\tan^{-1} 0 - \tan^{-1} t) = 0 - \left(-\frac{\pi}{2}\right) = \frac{\pi}{2} \end{aligned}$$
> 
> 
> 
> Since both converge, the total integral is $\frac{\pi}{2} + \frac{\pi}{2} = \pi$.
> 
> ![[Pasted image 20260906233849.png|center]]

> [!info] The $p$-Integral Rule for Infinite Intervals
> 
> $$\boxed{ \int_1^\infty \frac{1}{x^p} \, dx \text{ is convergent if } p > 1 \text{ and divergent if } p \le 1. }$$
> 
> 

> [!example] Example 4: Proof of the $p$-Integral Rule
> **Problem:** For what values of $p$ is the integral $\int_1^\infty \frac{1}{x^p} \, dx$ convergent?
> **Solution:**
> Assume $p \neq 1$ (since $p=1$ diverges by Example 1).
> 
> $$\begin{aligned} \int_1^\infty \frac{1}{x^p} \, dx &= \lim_{t \to \infty} \int_1^t x^{-p} \, dx \\ &= \lim_{t \to \infty} \left[ \frac{x^{-p+1}}{-p+1} \right]_1^t \\ &= \lim_{t \to \infty} \frac{1}{1-p} \left[ t^{1-p} - 1 \right] \end{aligned}$$
> 
> 
> 
> If $p > 1$, then $1 - p < 0$, so $t^{1-p} \to 0$ as $t \to \infty$. Thus, the integral converges to $\frac{1}{p-1}$.
> If $p < 1$, then $1 - p > 0$, so $t^{1-p} \to \infty$ as $t \to \infty$. Thus, the integral diverges.

---

### 2. Type 2: Discontinuous Integrands

> [!info] Definition of an Improper Integral of Type 2
> - (a) If $f$ is continuous on $[a, b)$ and is discontinuous at $b$, then:
> 
> $$\boxed{ \int_a^b f(x) \, dx = \lim_{t \to b^-} \int_a^t f(x) \, dx }$$
> 
> 
> 
> if this limit exists (as a finite number). 
> 
> ![[Pasted image 20260906233918.png]]
> 
> 
> - (b) If $f$ is continuous on $(a, b]$ and is discontinuous at $a$, then:
> 
> $$\boxed{ \int_a^b f(x) \, dx = \lim_{t \to a^+} \int_t^b f(x) \, dx }$$
> 
> 
> 
> if this limit exists (as a finite number).
> 
> ![[Pasted image 20260906233954.png]]
> 
> The improper integral is called **convergent** if the corresponding limit exists and **divergent** if the limit does not exist.
> 
> - (c) If $f$ has a discontinuity at $c$, where $a < c < b$, and both $\int_a^c f(x) \, dx$ and $\int_c^b f(x) \, dx$ are convergent, then:
> 
> $$\boxed{ \int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx }$$
> 
> ![[Pasted image 20260906234004.png]]
> 

> [!example] Example 5: Discontinuity at the Left Endpoint
> **Problem:** Find $\int_2^5 \frac{1}{\sqrt{x - 2}} \, dx$.
> **Solution:**
> The function $f(x) = 1/\sqrt{x-2}$ has a vertical asymptote at $x = 2$.
> 
> $$\begin{aligned} \int_2^5 \frac{dx}{\sqrt{x - 2}} &= \lim_{t \to 2^+} \int_t^5 \frac{dx}{\sqrt{x - 2}} \\ &= \lim_{t \to 2^+} \left[ 2\sqrt{x - 2} \right]_t^5 \\ &= \lim_{t \to 2^+} (2\sqrt{3} - 2\sqrt{t - 2}) \\ &= 2\sqrt{3} - 0 = 2\sqrt{3} \end{aligned}$$
> 
> 
> 
> The integral is convergent.
> 
> ![[Pasted image 20260906233650.png|center]]

> [!example] Example 6: Discontinuity at the Right Endpoint
> **Problem:** Determine whether $\int_0^{\pi/2} \sec x \, dx$ converges or diverges.
> **Solution:**
> The integrand has a vertical asymptote at $\pi/2$ since $\lim_{x \to (\pi/2)^-} \sec x = \infty$.
> 
> $$\begin{aligned} \int_0^{\pi/2} \sec x \, dx &= \lim_{t \to (\pi/2)^-} \int_0^t \sec x \, dx \\ &= \lim_{t \to (\pi/2)^-} \ln \vert{}\sec x + \tan x\vert{} \Big]_0^t \\ &= \lim_{t \to (\pi/2)^-} [\ln(\sec t + \tan t) - \ln 1] = \infty \end{aligned}$$
> 
> 
> 
> The given improper integral is divergent.

> [!example] Example 7: Discontinuity in the Middle
> **Problem:** Evaluate $\int_0^3 \frac{dx}{x - 1}$ if possible.
> **Solution:**
> The line $x = 1$ is a vertical asymptote. Split the integral at $c=1$:
> 
> $$\int_0^3 \frac{dx}{x - 1} = \int_0^1 \frac{dx}{x - 1} + \int_1^3 \frac{dx}{x - 1}$$
> 
> 
> 
> Evaluate the first integral:
> 
> $$\begin{aligned} \int_0^1 \frac{dx}{x - 1} &= \lim_{t \to 1^-} \int_0^t \frac{dx}{x - 1} = \lim_{t \to 1^-} \ln \vert{}x - 1\vert{} \Big]_0^t \\ &= \lim_{t \to 1^-} (\ln \vert{}t - 1\vert{} - \ln \vert{}-1\vert{}) \\ &= \lim_{t \to 1^-} \ln(1 - t) = -\infty \end{aligned}$$
> 
> 
> 
> Since the first integral is divergent, the entire integral $\int_0^3 \frac{dx}{x - 1}$ is divergent.
> **Warning:** Failing to notice the asymptote and treating it as an ordinary integral yields an erroneous result: $\ln\vert{}x-1\vert{}]_0^3 = \ln 2$. This is mathematically invalid.

> [!example] Example 8: Integration by Parts with Improper Limits
> **Problem:** Evaluate $\int_0^1 \ln x \, dx$.
> **Solution:**
> The function has a vertical asymptote at $x = 0$.
> 
> $$\int_0^1 \ln x \, dx = \lim_{t \to 0^+} \int_t^1 \ln x \, dx$$
> 
> 
> 
> Integrate by parts ($u = \ln x \implies du = dx/x, \ dv = dx \implies v = x$):
> 
> $$\begin{aligned} \int_t^1 \ln x \, dx &= x \ln x \Big]_t^1 - \int_t^1 dx \\ &= (1 \ln 1 - t \ln t) - (1 - t) \\ &= -t \ln t - 1 + t \end{aligned}$$
> 
> 
> 
> Evaluate the limit using l'Hospital's Rule:
> 
> $$\lim_{t \to 0^+} t \ln t = \lim_{t \to 0^+} \frac{\ln t}{1/t} = \lim_{t \to 0^+} \frac{1/t}{-1/t^2} = \lim_{t \to 0^+} (-t) = 0$$
> 
> 
> 
> Therefore:
> 
> $$\int_0^1 \ln x \, dx = \lim_{t \to 0^+} (-t \ln t - 1 + t) = -0 - 1 + 0 = -1$$
> 
> 
> ![[Pasted image 20260906233753.png|center]]

---

### 3. A Comparison Test for Improper Integrals

> [!info] Comparison Theorem for Improper Integrals
> Suppose that $f$ and $g$ are continuous functions with $f(x) \ge g(x) \ge 0$ for $x \ge a$.
> 
> - (a) If $\int_a^\infty f(x) \, dx$ is convergent, then $\int_a^\infty g(x) \, dx$ is convergent.
> - (b) If $\int_a^\infty g(x) \, dx$ is divergent, then $\int_a^\infty f(x) \, dx$ is divergent.
> 
> (This theorem also applies to Type 2 improper integrals).

![[Pasted image 20260906234058.png|428]]

> [!example] Example 9: Proving Convergence via Comparison
> **Problem:** Show that $\int_0^\infty e^{-x^2} \, dx$ is convergent.
> **Solution:**
> Split the integral:
> 
> $$\int_0^\infty e^{-x^2} \, dx = \int_0^1 e^{-x^2} \, dx + \int_1^\infty e^{-x^2} \, dx$$
> 
> 
> 
> The first integral is an ordinary definite integral. For the second integral, note that for $x \ge 1$, we have $x^2 \ge x \implies -x^2 \le -x \implies e^{-x^2} \le e^{-x}$.
> The integral of $e^{-x}$ is easy to evaluate:
> 
> $$\int_1^\infty e^{-x} \, dx = \lim_{t \to \infty} \int_1^t e^{-x} \, dx = \lim_{t \to \infty} (-e^{-t} + e^{-1}) = e^{-1}$$
> 
> 
> 
> Since $\int_1^\infty e^{-x} \, dx$ converges and $e^{-x^2} \le e^{-x}$ for $x \ge 1$, the Comparison Theorem guarantees that $\int_1^\infty e^{-x^2} \, dx$ is convergent. Thus, the total integral converges.
> 
> ![[Pasted image 20260906234115.png|center]]

> [!example] Example 10: Proving Divergence via Comparison
> **Problem:** Show that $\int_1^\infty \frac{1 + e^{-x}}{x} \, dx$ is divergent.
> **Solution:**
> Observe the inequality:
> 
> $$\frac{1 + e^{-x}}{x} > \frac{1}{x}$$
> 
> 
> 
> We know that $\int_1^\infty (1/x) \, dx$ is divergent (by Example 1 or the $p$-Integral Rule with $p=1$). By the Comparison Theorem, the larger integral $\int_1^\infty \frac{1 + e^{-x}}{x} \, dx$ must also be divergent.

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 540)