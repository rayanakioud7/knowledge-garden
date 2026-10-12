Date: 2026-07-06
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Derivatives]], [[Optimization]], [[Isaac Newton]]

---
## Newton's Method

Newton's method (also known as the Newton-Raphson method) is a numerical rootfinder used to calculate approximate solutions for equations where exact formulas are unavailable. The process involves finding the $x$-intercept of successive tangent lines to approximate the true root $r$.

### 1. Derivation and Formula
Starting with an initial approximation $x_1$, we consider the tangent line $L$ to the curve $y = f(x)$ at the point $(x_1, f(x_1))$. The $x$-intercept of this tangent line, designated as $x_2$, provides a closer approximation to the true root. 

The equation of the tangent line $L$, using the slope $f'(x_1)$, is $y - f(x_1) = f'(x_1)(x - x_1)$. Setting $y=0$ allows us to solve for the $x$-intercept $x_2$:
$$
\begin{aligned}
0 - f(x_1) &= f'(x_1)(x_2 - x_1) \\
x_2 &= x_1 - \frac{f(x_1)}{f'(x_1)}
\end{aligned}
$$


![[Pasted image 20260706225904.png|center|440]]

> [!info] Newton's Method Formula
> If the $n$th approximation is $x_n$ and $f'(x_n) \neq 0$, then the next approximation is given by the recursive formula:
> $$
> \begin{aligned}
> x_{n+1} &= x_n - \frac{f(x_n)}{f'(x_n)}
> \end{aligned}
> $$
>

![[Pasted image 20260706225928.png|center]]

> [!warning] Conditions for Failure
> The sequence of approximations may fail to converge to the root if $f'(x_1)$ is close to $0$, or if an intermediate approximation falls outside the domain of $f$. Under these circumstances, a better initial approximation $x_1$ must be chosen.
> 
> ![[Pasted image 20260706225949.png|center]]

---

### Examples

> [!example] Example 1: Finding a Third Approximation
> **Problem Statement:** Starting with $x_1 = 2$, find the third approximation $x_3$ to the root of the equation $x^3 - 2x - 5 = 0$.
> 
> **Solution:**
> Let $f(x) = x^3 - 2x - 5$. 
> Then its derivative is $f'(x) = 3x^2 - 2$.
> Applying Newton's formula:
> $$
> \begin{aligned}
> x_{n+1} &= x_n - \frac{x_n^3 - 2x_n - 5}{3x_n^2 - 2}
> \end{aligned}
> $$
>
> 
> Calculating for $n=1$:
> $$
> \begin{aligned}
> x_2 &= 2 - \frac{2^3 - 2(2) - 5}{3(2)^2 - 2} = 2.1
> \end{aligned}
> $$
>
> 
> Calculating for $n=2$:
> $$
> \begin{aligned}
> x_3 &= 2.1 - \frac{(2.1)^3 - 2(2.1) - 5}{3(2.1)^2 - 2} \approx 2.0946
> \end{aligned}
> $$
>
> 
> ![[Pasted image 20260706230002.png|center]]

> [!example] Example 2: Approximating a Root to High Precision
> **Problem Statement:** Use Newton's method to find $\sqrt[6]{2}$ correct to eight decimal places.
> 
> **Solution:**
> Finding $\sqrt[6]{2}$ is equivalent to finding the positive root of the equation $x^6 - 2 = 0$.
> Let $f(x) = x^6 - 2$, which gives $f'(x) = 6x^5$.
> The iterative formula becomes:
> $$
> \begin{aligned}
> x_{n+1} &= x_n - \frac{x_n^6 - 2}{6x_n^5}
> \end{aligned}
> $$
>
> 
> Choosing an initial approximation of $x_1 = 1$, we obtain the following sequence:
> *   $x_2 \approx 1.16666667$
> *   $x_3 \approx 1.12644368$
> *   $x_4 \approx 1.12249707$
> *   $x_5 \approx 1.12246205$
> *   $x_6 \approx 1.12246205$
> 
> Because the approximations $x_5$ and $x_6$ agree to eight decimal places, we conclude that $\sqrt[6]{2} \approx 1.12246205$.

> [!example] Example 3: Transcendental Equation
> **Problem Statement:** Find, correct to six decimal places, the root of the equation $\cos x = x$.
> 
> **Solution:**
> We first rewrite the equation in standard form: $\cos x - x = 0$.
> Let $f(x) = \cos x - x$, which means $f'(x) = -\sin x - 1$.
> The formula is applied as follows:
> $$
> \begin{aligned}
> x_{n+1} &= x_n - \frac{\cos x_n - x_n}{-\sin x_n - 1} = x_n + \frac{\cos x_n - x_n}{\sin x_n + 1}
> \end{aligned}
> $$
>
> 
> Starting with $x_1 = 1$ (derived from estimating the intersection on a rough sketch):
> *   $x_2 \approx 0.75036387$
> *   $x_3 \approx 0.73911289$
> *   $x_4 \approx 0.73908513$
> *   $x_5 \approx 0.73908513$
> 
> Since $x_4$ and $x_5$ agree to six decimal places, the root is approximately $0.739085$.
> 
> ![[Pasted image 20260706230022.png|center]]


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 263)