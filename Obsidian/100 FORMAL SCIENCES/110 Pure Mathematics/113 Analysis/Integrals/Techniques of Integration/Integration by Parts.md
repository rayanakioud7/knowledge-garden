Date: 2026-08-26
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]]

---

## 7.1 Integration by Parts

### 1. The Formula for Integration by Parts

> [!info] Derivation of Integration by Parts
> Integration by parts is the integration counterpart to the Product Rule for differentiation. 
> Let $f$ and $g$ be differentiable functions:
> $$ \begin{aligned} \frac{d}{dx} [f(x)g(x)] &= f(x)g'(x) + g(x)f'(x) \\ \int [f(x)g'(x) + g(x)f'(x)] dx &= f(x)g(x) \\ \int f(x)g'(x) dx + \int g(x)f'(x) dx &= f(x)g(x) \end{aligned} $$
> Rearranging this equation yields the standard formula.

> [!info] Integration by Parts Formula
> $$ 1. \quad \int f(x)g'(x) dx = f(x)g(x) - \int g(x)f'(x) dx $$
> Let $u = f(x) \implies du = f'(x) dx$
> Let $v = g(x) \implies dv = g'(x) dx$
> Applying the Substitution Rule:
> $$ \boxed{ \quad \int u \, dv = uv - \int v \, du} $$

---

### 2. Definite Integrals

> [!info] Integration by Parts for Definite Integrals
> Assuming $f'$ and $g'$ are continuous:
> $$ \boxed{ \quad \int_a^b f(x)g'(x) dx = f(x)g(x) \Big]_a^b - \int_a^b g(x)f'(x) dx} $$

---

### Examples

> [!example] Example 1
> **Problem:** Find $\int x \sin x \, dx$.
> 
> **Solution:**
> Let $u = x \implies du = dx$
> Let $dv = \sin x \, dx \implies v = -\cos x$
> $$ \begin{aligned} \int x \sin x \, dx &= \int u \, dv \\ &= uv - \int v \, du \\ &= x(-\cos x) - \int (-\cos x) \, dx \\ &= -x \cos x + \int \cos x \, dx \\ &= -x \cos x + \sin x + C \end{aligned} $$

> [!example] Example 2
> **Problem:** Evaluate $\int \ln x \, dx$.
> 
> **Solution:**
> Let $u = \ln x \implies du = \frac{1}{x} dx$
> Let $dv = dx \implies v = x$
> $$ \begin{aligned} \int \ln x \, dx &= x \ln x - \int x \frac{dx}{x} \\ &= x \ln x - \int dx \\ &= x \ln x - x + C \end{aligned} $$

> [!example] Example 3: Repeated Integration by Parts
> **Problem:** Find $\int t^2 e^t \, dt$.
> 
> **Solution:**
> Let $u = t^2 \implies du = 2t \, dt$
> Let $dv = e^t \, dt \implies v = e^t$
> $$ \int t^2 e^t \, dt = t^2 e^t - 2 \int t e^t \, dt $$
> The integral $\int t e^t \, dt$ requires integration by parts a second time:
> Let $u = t \implies du = dt$
> Let $dv = e^t \, dt \implies v = e^t$
> $$ \begin{aligned} \int t e^t \, dt &= te^t - \int e^t \, dt \\ &= te^t - e^t + C \end{aligned} $$
> Substituting this back into the original equation:
> $$ \begin{aligned} \int t^2 e^t \, dt &= t^2 e^t - 2\left( te^t - e^t + C \right) \\ &= t^2 e^t - 2te^t + 2e^t + C_1 \quad (\text{where } C_1 = -2C) \end{aligned} $$

> [!example] Example 4: Solving for the Unknown Integral
> **Problem:** Evaluate $\int e^x \sin x \, dx$.
> 
> **Solution:**
> Let $u = e^x \implies du = e^x \, dx$
> Let $dv = \sin x \, dx \implies v = -\cos x$
> $$ \int e^x \sin x \, dx = -e^x \cos x + \int e^x \cos x \, dx $$
> Integrate by parts a second time for $\int e^x \cos x \, dx$:
> Let $u = e^x \implies du = e^x \, dx$
> Let $dv = \cos x \, dx \implies v = \sin x$
> $$ \int e^x \cos x \, dx = e^x \sin x - \int e^x \sin x \, dx $$
> Substituting this back yields an equation containing the original integral on both sides:
> $$ \int e^x \sin x \, dx = -e^x \cos x + e^x \sin x - \int e^x \sin x \, dx $$
> Add $\int e^x \sin x \, dx$ to both sides:
> $$ \begin{aligned} 2 \int e^x \sin x \, dx &= -e^x \cos x + e^x \sin x \\ \int e^x \sin x \, dx &= \frac{1}{2} e^x (\sin x - \cos x) + C \end{aligned} $$
> 
> ![[Pasted image 20260826005758.png|center]]

> [!example] Example 5: Evaluating a Definite Integral
> **Problem:** Calculate $\int_0^1 \tan^{-1} x \, dx$.
> 
> **Solution:**
> Let $u = \tan^{-1} x \implies du = \frac{dx}{1 + x^2}$
> Let $dv = dx \implies v = x$
> $$ \begin{aligned} \int_0^1 \tan^{-1} x \, dx &= x \tan^{-1} x \Big]_0^1 - \int_0^1 \frac{x}{1 + x^2} dx \\ &= \left( 1 \cdot \tan^{-1} 1 - 0 \cdot \tan^{-1} 0 \right) - \int_0^1 \frac{x}{1 + x^2} dx \\ &= \frac{\pi}{4} - \int_0^1 \frac{x}{1 + x^2} dx \end{aligned} $$
> To evaluate the remaining integral, substitute $t = 1 + x^2 \implies dt = 2x \, dx \implies x \, dx = \frac{1}{2} dt$. 
> Limits: $x=0 \implies t=1$; $x=1 \implies t=2$.
> $$ \begin{aligned} \int_0^1 \frac{x}{1 + x^2} dx &= \frac{1}{2} \int_1^2 \frac{dt}{t} = \frac{1}{2} \ln |t| \Big]_1^2 \\ &= \frac{1}{2}(\ln 2 - \ln 1) = \frac{1}{2} \ln 2 \end{aligned} $$
> Therefore:
> $$ \int_0^1 \tan^{-1} x \, dx = \frac{\pi}{4} - \frac{\ln 2}{2} $$
> 
> ![[Pasted image 20260826005819.png|center]]

> [!example] Example 6: Proving a Reduction Formula
> **Problem:** Prove the reduction formula for $\int \sin^n x \, dx$, where $n \ge 2$ is an integer:
> $$ 7. \quad \int \sin^n x \, dx = -\frac{1}{n} \cos x \sin^{n-1} x + \frac{n-1}{n} \int \sin^{n-2} x \, dx $$
> 
> **Proof:**
> Let $u = \sin^{n-1} x \implies du = (n-1) \sin^{n-2} x \cos x \, dx$
> Let $dv = \sin x \, dx \implies v = -\cos x$
> $$ \int \sin^n x \, dx = -\cos x \sin^{n-1} x + (n-1) \int \sin^{n-2} x \cos^2 x \, dx $$
> Substitute $\cos^2 x = 1 - \sin^2 x$:
> $$ \begin{aligned} \int \sin^n x \, dx &= -\cos x \sin^{n-1} x + (n-1) \int \sin^{n-2} x (1 - \sin^2 x) \, dx \\ &= -\cos x \sin^{n-1} x + (n-1) \int \sin^{n-2} x \, dx - (n-1) \int \sin^n x \, dx \end{aligned} $$
> Move the last term to the left side and solve for $\int \sin^n x \, dx$:
> $$ \begin{aligned} \int \sin^n x \, dx + (n-1) \int \sin^n x \, dx &= -\cos x \sin^{n-1} x + (n-1) \int \sin^{n-2} x \, dx \\ n \int \sin^n x \, dx &= -\cos x \sin^{n-1} x + (n-1) \int \sin^{n-2} x \, dx \\ \int \sin^n x \, dx &= -\frac{1}{n} \cos x \sin^{n-1} x + \frac{n-1}{n} \int \sin^{n-2} x \, dx \end{aligned} $$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 488)