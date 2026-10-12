Date: 2026-09-05
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Trigonometry]]

---

## 7.3 Trigonometric Substitution

### 1. Inverse Substitution Principle

> [!info] Inverse Substitution
> Instead of making a substitution of the form $u = g(x)$, we can employ the Substitution Rule in reverse by making a substitution of the form $x = g(t)$. 
> To ensure the calculations remain valid and reversible, $g$ must be a one-to-one function (i.e., it possesses an inverse function).
> 
> $\boxed{\int f(x) \, dx = \int f(g(t))g'(t) \, dt}$

> [!info] Table of Trigonometric Substitutions
> Trigonometric substitutions are effective for specific radical expressions by leveraging corresponding trigonometric identities. The restriction on $\theta$ is imposed to ensure the substitution function is one-to-one.
> 
> *   **Expression: $\sqrt{a^2 - x^2}$**
>     *   Substitution: $\boxed{x = a \sin \theta, \quad -\frac{\pi}{2} \le \theta \le \frac{\pi}{2}}$
>     *   Identity: $1 - \sin^2 \theta = \cos^2 \theta$
> *   **Expression: $\sqrt{a^2 + x^2}$**
>     *   Substitution: $\boxed{x = a \tan \theta, \quad -\frac{\pi}{2} < \theta < \frac{\pi}{2}}$
>     *   Identity: $1 + \tan^2 \theta = \sec^2 \theta$
> *   **Expression: $\sqrt{x^2 - a^2}$**
>     *   Substitution: $\boxed{x = a \sec \theta, \quad 0 \le \theta < \frac{\pi}{2} \text{ or } \pi \le \theta < \frac{3\pi}{2}}$
>     *   Identity: $\sec^2 \theta - 1 = \tan^2 \theta$

---

### Examples

> [!example] Example 1: Evaluation using Sine Substitution
> **Problem:** Evaluate $\int \frac{\sqrt{9 - x^2}}{x^2} \, dx$.
> 
> **Solution:**
> Let $x = 3 \sin \theta$, where $-\pi/2 \le \theta \le \pi/2$. 
> $\implies dx = 3 \cos \theta \, d\theta$.
> $$ \sqrt{9 - x^2} = \sqrt{9 - 9\sin^2 \theta} = \sqrt{9\cos^2 \theta} = 3|\cos \theta| = 3\cos \theta $$
> (Note: $\cos \theta \ge 0$ because $-\pi/2 \le \theta \le \pi/2$).
> 
> Applying the substitution:
> $$ \begin{aligned} \int \frac{\sqrt{9 - x^2}}{x^2} \, dx &= \int \frac{3\cos \theta}{9\sin^2 \theta} 3\cos \theta \, d\theta \\ &= \int \frac{\cos^2 \theta}{\sin^2 \theta} \, d\theta = \int \cot^2 \theta \, d\theta \\ &= \int (\csc^2 \theta - 1) \, d\theta \\ &= -\cot \theta - \theta + C \end{aligned} $$
> 
> To return to the original variable $x$, interpret $\theta$ as an angle of a right triangle where $\sin \theta = x/3$.
> The opposite side is $x$, hypotenuse is $3$, and adjacent side is $\sqrt{9 - x^2}$.
> $$ \cot \theta = \frac{\sqrt{9 - x^2}}{x} $$
> Since $\sin \theta = x/3 \implies \theta = \sin^{-1}(x/3)$.
> $$ \int \frac{\sqrt{9 - x^2}}{x^2} \, dx = -\frac{\sqrt{9 - x^2}}{x} - \sin^{-1}\left(\frac{x}{3}\right) + C $$
> 
> ![[Pasted image 20260905100239.png|center]]

> [!example] Example 2: Area of an Ellipse
> **Problem:** Find the area enclosed by the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.
> 
> **Solution:**
> Solving for $y$:
> $$ \frac{y^2}{b^2} = 1 - \frac{x^2}{a^2} = \frac{a^2 - x^2}{a^2} \implies y = \pm \frac{b}{a}\sqrt{a^2 - x^2} $$
> By symmetry, the total area $A$ is four times the area in the first quadrant ($0 \le x \le a$):
> $$ \frac{1}{4}A = \int_0^a \frac{b}{a} \sqrt{a^2 - x^2} \, dx $$
> 
> Let $x = a \sin \theta \implies dx = a \cos \theta \, d\theta$.
> Limits: $x = 0 \implies \theta = 0$; $x = a \implies \sin \theta = 1 \implies \theta = \pi/2$.
> $$ \sqrt{a^2 - x^2} = \sqrt{a^2 - a^2\sin^2\theta} = a\cos\theta $$
> 
> Evaluating the definite integral:
> $$ \begin{aligned} A &= 4 \frac{b}{a} \int_0^a \sqrt{a^2 - x^2} \, dx = 4 \frac{b}{a} \int_0^{\pi/2} a\cos\theta \cdot a\cos\theta \, d\theta \\ &= 4ab \int_0^{\pi/2} \cos^2\theta \, d\theta = 4ab \int_0^{\pi/2} \frac{1}{2}(1 + \cos 2\theta) \, d\theta \\ &= 2ab \left[ \theta + \frac{1}{2}\sin 2\theta \right]_0^{\pi/2} = 2ab \left( \frac{\pi}{2} + 0 - 0 \right) = \pi ab \end{aligned} $$
> 
> $\boxed{A = \pi ab}$ (Setting $a=b=r$ yields the circle area $\pi r^2$).
> 
> ![[Pasted image 20260905100309.png|center]]

> [!example] Example 3: Evaluation using Tangent Substitution
> **Problem:** Find $\int \frac{1}{x^2\sqrt{x^2 + 4}} \, dx$.
> 
> **Solution:**
> Let $x = 2 \tan \theta$, where $-\pi/2 < \theta < \pi/2$. $\implies dx = 2 \sec^2 \theta \, d\theta$.
> $$ \sqrt{x^2 + 4} = \sqrt{4(\tan^2\theta + 1)} = \sqrt{4\sec^2\theta} = 2|\sec\theta| = 2\sec\theta $$
> 
> Applying the substitution:
> $$ \begin{aligned} \int \frac{dx}{x^2\sqrt{x^2 + 4}} &= \int \frac{2\sec^2\theta \, d\theta}{4\tan^2\theta \cdot 2\sec\theta} = \frac{1}{4} \int \frac{\sec\theta}{\tan^2\theta} \, d\theta \\ &= \frac{1}{4} \int \frac{1/\cos\theta}{\sin^2\theta/\cos^2\theta} \, d\theta = \frac{1}{4} \int \frac{\cos\theta}{\sin^2\theta} \, d\theta \end{aligned} $$
> 
> Let $u = \sin \theta \implies du = \cos \theta \, d\theta$.
> $$ \begin{aligned} \frac{1}{4} \int \frac{du}{u^2} &= \frac{1}{4} \left( -\frac{1}{u} \right) + C = -\frac{1}{4\sin\theta} + C \\ &= -\frac{\csc\theta}{4} + C \end{aligned} $$
> 
> From the triangle where $\tan \theta = x/2$, $\csc \theta = \frac{\sqrt{x^2 + 4}}{x}$.
> $$ \int \frac{dx}{x^2\sqrt{x^2 + 4}} = -\frac{\sqrt{x^2 + 4}}{4x} + C $$
> 
> ![[Pasted image 20260905100334.png|center]]

> [!example] Example 4: Direct Substitution Over Trigonometric
> **Problem:** Find $\int \frac{x}{\sqrt{x^2 + 4}} \, dx$.
> 
> **Solution:**
> While $x = 2 \tan \theta$ is possible, direct substitution is simpler. 
> Let $u = x^2 + 4 \implies du = 2x \, dx$.
> $$ \int \frac{x}{\sqrt{x^2 + 4}} \, dx = \frac{1}{2} \int \frac{du}{\sqrt{u}} = \sqrt{u} + C = \sqrt{x^2 + 4} + C $$

> [!example] Example 5: Evaluation using Secant Substitution
> **Problem:** Evaluate $\int \frac{dx}{\sqrt{x^2 - a^2}}$, where $a > 0$.
> 
> **Solution 1 (Trigonometric):**
> Let $x = a \sec \theta$, where $0 < \theta < \pi/2$ or $\pi < \theta < 3\pi/2$. $\implies dx = a \sec \theta \tan \theta \, d\theta$.
> $$ \sqrt{x^2 - a^2} = \sqrt{a^2(\sec^2\theta - 1)} = \sqrt{a^2\tan^2\theta} = a|\tan\theta| = a\tan\theta $$
> 
> $$ \int \frac{dx}{\sqrt{x^2 - a^2}} = \int \frac{a \sec \theta \tan \theta}{a \tan \theta} \, d\theta = \int \sec \theta \, d\theta = \ln|\sec\theta + \tan\theta| + C $$
> 
> From the triangle, $\sec \theta = x/a$ and $\tan \theta = \frac{\sqrt{x^2 - a^2}}{a}$.
> $$ \begin{aligned} \int \frac{dx}{\sqrt{x^2 - a^2}} &= \ln \left| \frac{x}{a} + \frac{\sqrt{x^2 - a^2}}{a} \right| + C \\ &= \ln \left| x + \sqrt{x^2 - a^2} \right| - \ln a + C \end{aligned} $$
> Absorbing $-\ln a$ into the constant $C_1 = C - \ln a$:
> $\boxed{\int \frac{dx}{\sqrt{x^2 - a^2}} = \ln \left| x + \sqrt{x^2 - a^2} \right| + C_1}$
> 
> 
> ![[Pasted image 20260905100406.png|center]]
> 
> **Solution 2 (Hyperbolic):**
> For $x > 0$, substitute $x = a \cosh t$.
> $$ \sqrt{x^2 - a^2} = \sqrt{a^2(\cosh^2 t - 1)} = \sqrt{a^2 \sinh^2 t} = a \sinh t $$
> $dx = a \sinh t \, dt$.
> $$ \int \frac{dx}{\sqrt{x^2 - a^2}} = \int \frac{a \sinh t \, dt}{a \sinh t} = \int dt = t + C $$
> Since $\cosh t = x/a \implies t = \cosh^{-1}(x/a)$.
> $$ \int \frac{dx}{\sqrt{x^2 - a^2}} = \cosh^{-1}\left(\frac{x}{a}\right) + C $$
> 


> [!example] Example 6: Definite Integral with Complex Argument
> **Problem:** Find $\int_0^{3\sqrt{3}/2} \frac{x^3}{(4x^2 + 9)^{3/2}} \, dx$.
> 
> **Solution:**
> Note that $(4x^2 + 9)^{3/2} = (\sqrt{4x^2 + 9})^3$. Let $u = 2x \implies \sqrt{u^2 + 9}$ suggests tangent substitution.
> Let $2x = 3 \tan \theta \implies x = \frac{3}{2}\tan\theta$ and $dx = \frac{3}{2}\sec^2\theta \, d\theta$.
> $$ \sqrt{4x^2 + 9} = \sqrt{9\tan^2\theta + 9} = 3\sec\theta $$
> Limits: $x=0 \implies \theta=0$; $x=\frac{3\sqrt{3}}{2} \implies \tan\theta = \sqrt{3} \implies \theta=\pi/3$.
> 
> $$ \begin{aligned} \int_0^{3\sqrt{3}/2} \frac{x^3}{(4x^2 + 9)^{3/2}} \, dx &= \int_0^{\pi/3} \frac{\frac{27}{8}\tan^3\theta}{27\sec^3\theta} \frac{3}{2}\sec^2\theta \, d\theta \\ &= \frac{3}{16} \int_0^{\pi/3} \frac{\tan^3\theta}{\sec\theta} \, d\theta = \frac{3}{16} \int_0^{\pi/3} \frac{\sin^3\theta}{\cos^2\theta} \, d\theta \\ &= \frac{3}{16} \int_0^{\pi/3} \frac{1 - \cos^2\theta}{\cos^2\theta} \sin\theta \, d\theta \end{aligned} $$
> 
> Let $u = \cos \theta \implies du = -\sin \theta \, d\theta$.
> Limits: $\theta = 0 \implies u = 1$; $\theta = \pi/3 \implies u = 1/2$.
> $$ \begin{aligned} -\frac{3}{16} \int_1^{1/2} \frac{1 - u^2}{u^2} \, du &= \frac{3}{16} \int_{1/2}^1 (u^{-2} - 1) \, du = \frac{3}{16} \left[ -\frac{1}{u} - u \right]_{1/2}^1 \\ &= \frac{3}{16} \left[ (-1 - 1) - (-2 - 1/2) \right] \\ &= \frac{3}{16} \left( -2 + \frac{5}{2} \right) = \frac{3}{32} \end{aligned} $$

> [!example] Example 7: Completing the Square First
> **Problem:** Evaluate $\int \frac{x}{\sqrt{3 - 2x - x^2}} \, dx$.
> 
> **Solution:**
> Complete the square under the root:
> $$ 3 - 2x - x^2 = 3 - (x^2 + 2x) = 3 + 1 - (x^2 + 2x + 1) = 4 - (x + 1)^2 $$
> Substitute $u = x + 1 \implies du = dx$ and $x = u - 1$.
> $$ \int \frac{x}{\sqrt{3 - 2x - x^2}} \, dx = \int \frac{u - 1}{\sqrt{4 - u^2}} \, du $$
> 
> Now apply trigonometric substitution $u = 2 \sin \theta \implies du = 2 \cos \theta \, d\theta$ and $\sqrt{4 - u^2} = 2 \cos \theta$.
> $$ \begin{aligned} \int \frac{2\sin\theta - 1}{2\cos\theta} 2\cos\theta \, d\theta &= \int (2\sin\theta - 1) \, d\theta \\ &= -2\cos\theta - \theta + C \\ &= -\sqrt{4 - u^2} - \sin^{-1}\left(\frac{u}{2}\right) + C \\ &= -\sqrt{3 - 2x - x^2} - \sin^{-1}\left(\frac{x + 1}{2}\right) + C \end{aligned} $$
> 
> ![[Pasted image 20260905100502.png]]

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 502)