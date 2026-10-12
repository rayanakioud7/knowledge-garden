Date: 2026-09-05
Tags:  [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Partial Fractions]]

---

## 7.4 Integration of Rational Functions by Partial Fractions

### 1. Rational Functions and Polynomial Division

> [!info] Proper vs. Improper Rational Functions
> Let $f(x) = \frac{P(x)}{Q(x)}$ where $P$ and $Q$ are polynomials.
> *   $f$ is **proper** $\iff \deg(P) < \deg(Q)$.
> *   $f$ is **improper** $\iff \deg(P) \ge \deg(Q)$.
> 
> If $f$ is improper, perform polynomial long division to obtain a polynomial $S(x)$ and a proper rational function $\frac{R(x)}{Q(x)}$:
> $$ f(x) = S(x) + \frac{R(x)}{Q(x)} $$ 

> [!example] Example 1: Improper Rational Function
> **Problem:** Find $\int \frac{x^3 + x}{x - 1} \, dx$.
> 
> **Solution:**
> Since $\deg(x^3 + x) \ge \deg(x - 1)$, perform long division.
> $$ \frac{x^3 + x}{x - 1} = x^2 + x + 2 + \frac{2}{x - 1} $$ 
> $$ \begin{aligned} \int \frac{x^3 + x}{x - 1} \, dx &= \int \left( x^2 + x + 2 + \frac{2}{x - 1} \right) dx \\ &= \frac{x^3}{3} + \frac{x^2}{2} + 2x + 2\ln|x - 1| + C \end{aligned} $$

---

### 2. Partial Fraction Decomposition Cases

> [!info] Case I: Distinct Linear Factors
> If $Q(x)$ factors into distinct linear factors, $Q(x) = (a_1x + b_1)(a_2x + b_2)\cdots(a_kx + b_k)$, the decomposition is:
> $$ \frac{R(x)}{Q(x)} = \frac{A_1}{a_1x + b_1} + \frac{A_2}{a_2x + b_2} + \cdots + \frac{A_k}{a_kx + b_k} $$

> [!info] Useful Integration Formula
> $$ \boxed{ \int \frac{dx}{x^2 - a^2} = \frac{1}{2a} \ln \left| \frac{x - a}{x + a} \right| + C } $$

> [!example] Example 2: Distinct Linear Factors
> **Problem:** Evaluate $\int \frac{x^2 + 2x - 1}{2x^3 + 3x^2 - 2x} \, dx$.
> 
> **Solution:**
> Factor the denominator: $2x^3 + 3x^2 - 2x = x(2x^2 + 3x - 2) = x(2x - 1)(x + 2)$.
> $$ \frac{x^2 + 2x - 1}{x(2x - 1)(x + 2)} = \frac{A}{x} + \frac{B}{2x - 1} + \frac{C}{x + 2} $$
> Multiply by the common denominator:
> $$ x^2 + 2x - 1 = A(2x - 1)(x + 2) + Bx(x + 2) + Cx(2x - 1) $$
> Equating coefficients yields $A = \frac{1}{2}, B = \frac{1}{5}, C = -\frac{1}{10}$.
> $$ \begin{aligned} \int \frac{x^2 + 2x - 1}{2x^3 + 3x^2 - 2x} \, dx &= \int \left( \frac{1}{2x} + \frac{1}{5(2x - 1)} - \frac{1}{10(x + 2)} \right) dx \\ &= \frac{1}{2}\ln|x| + \frac{1}{10}\ln|2x - 1| - \frac{1}{10}\ln|x + 2| + K \end{aligned} $$

> [!info] Case II: Repeated Linear Factors
> If $Q(x)$ contains a repeated linear factor $(a_1x + b_1)^r$, the decomposition includes $r$ terms:
> $$ \frac{A_1}{a_1x + b_1} + \frac{A_2}{(a_1x + b_1)^2} + \cdots + \frac{A_r}{(a_1x + b_1)^r} $$

> [!example] Example 4: Repeated Linear Factors
> **Problem:** Find $\int \frac{x^4 - 2x^2 + 4x + 1}{x^3 - x^2 - x + 1} \, dx$.
> 
> **Solution:**
> Improper fraction $\implies$ Long division:
> $$ \frac{x^4 - 2x^2 + 4x + 1}{x^3 - x^2 - x + 1} = x + 1 + \frac{4x}{x^3 - x^2 - x + 1} $$
> Factor $Q(x) = x^3 - x^2 - x + 1 = x^2(x - 1) - (x - 1) = (x - 1)(x^2 - 1) = (x - 1)^2(x + 1)$.
> $$ \frac{4x}{(x - 1)^2(x + 1)} = \frac{A}{x - 1} + \frac{B}{(x - 1)^2} + \frac{C}{x + 1} $$
> Solving yields $A = 1, B = 2, C = -1$.
> $$ \begin{aligned} \int \frac{x^4 - 2x^2 + 4x + 1}{x^3 - x^2 - x + 1} \, dx &= \int \left( x + 1 + \frac{1}{x - 1} + \frac{2}{(x - 1)^2} - \frac{1}{x + 1} \right) dx \\ &= \frac{x^2}{2} + x + \ln|x - 1| - \frac{2}{x - 1} - \ln|x + 1| + K \end{aligned} $$

> [!info] Case III: Distinct Irreducible Quadratic Factors
> If $Q(x)$ contains an irreducible quadratic factor $ax^2 + bx + c$ (where $b^2 - 4ac < 0$), the decomposition includes a term of the form:
> $$ \frac{Ax + B}{ax^2 + bx + c} $$
> These terms are often integrated by completing the square and using the formula:
> $$ \boxed{ \int \frac{dx}{x^2 + a^2} = \frac{1}{a} \tan^{-1}\left(\frac{x}{a}\right) + C } $$

> [!example] Example 5: Distinct Irreducible Quadratic Factor
> **Problem:** Evaluate $\int \frac{2x^2 - x + 4}{x^3 + 4x} \, dx$.
> 
> **Solution:**
> $x^3 + 4x = x(x^2 + 4)$.
> $$ \frac{2x^2 - x + 4}{x(x^2 + 4)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 4} $$
> Solving yields $A = 1, B = 1, C = -1$.
> $$ \begin{aligned} \int \frac{2x^2 - x + 4}{x^3 + 4x} \, dx &= \int \left( \frac{1}{x} + \frac{x - 1}{x^2 + 4} \right) dx \\ &= \int \frac{1}{x} \, dx + \int \frac{x}{x^2 + 4} \, dx - \int \frac{1}{x^2 + 4} \, dx \\ &= \ln|x| + \frac{1}{2}\ln(x^2 + 4) - \frac{1}{2}\tan^{-1}\left(\frac{x}{2}\right) + K \end{aligned} $$

> [!example] Example 6: Completing the Square
> **Problem:** Evaluate $\int \frac{4x^2 - 3x + 2}{4x^2 - 4x + 3} \, dx$.
> 
> **Solution:**
> Divide first:
> $$ \frac{4x^2 - 3x + 2}{4x^2 - 4x + 3} = 1 + \frac{x - 1}{4x^2 - 4x + 3} $$
> The quadratic is irreducible ($b^2 - 4ac = -32 < 0$). Complete the square: $4x^2 - 4x + 3 = (2x - 1)^2 + 2$.
> Let $u = 2x - 1 \implies du = 2 \, dx \implies x = \frac{1}{2}(u + 1)$.
> $$ \begin{aligned} \int \frac{x - 1}{4x^2 - 4x + 3} \, dx &= \int \frac{\frac{1}{2}(u + 1) - 1}{u^2 + 2} \frac{du}{2} = \frac{1}{4} \int \frac{u - 1}{u^2 + 2} \, du \\ &= \frac{1}{4} \int \frac{u}{u^2 + 2} \, du - \frac{1}{4} \int \frac{1}{u^2 + 2} \, du \\ &= \frac{1}{8}\ln(u^2 + 2) - \frac{1}{4\sqrt{2}}\tan^{-1}\left(\frac{u}{\sqrt{2}}\right) + C \end{aligned} $$
> Returning to $x$:
> $$ \int f(x) \, dx = x + \frac{1}{8}\ln(4x^2 - 4x + 3) - \frac{1}{4\sqrt{2}}\tan^{-1}\left(\frac{2x - 1}{\sqrt{2}}\right) + C $$

> [!info] Case IV: Repeated Irreducible Quadratic Factors
> If $Q(x)$ has a repeated irreducible quadratic factor $(ax^2 + bx + c)^r$, the decomposition includes:
> $$ \frac{A_1x + B_1}{ax^2 + bx + c} + \frac{A_2x + B_2}{(ax^2 + bx + c)^2} + \cdots + \frac{A_rx + B_r}{(ax^2 + bx + c)^r} $$

> [!example] Example 8: Repeated Irreducible Quadratic Factor
> **Problem:** Evaluate $\int \frac{1 - x + 2x^2 - x^3}{x(x^2 + 1)^2} \, dx$.
> 
> **Solution:**
> $$ \frac{1 - x + 2x^2 - x^3}{x(x^2 + 1)^2} = \frac{A}{x} + \frac{Bx + C}{x^2 + 1} + \frac{Dx + E}{(x^2 + 1)^2} $$
> Solving yields $A = 1, B = -1, C = -1, D = 1, E = 0$.
> $$ \begin{aligned} \int \frac{1 - x + 2x^2 - x^3}{x(x^2 + 1)^2} \, dx &= \int \left( \frac{1}{x} - \frac{x + 1}{x^2 + 1} + \frac{x}{(x^2 + 1)^2} \right) dx \\ &= \int \frac{dx}{x} - \int \frac{x}{x^2 + 1} \, dx - \int \frac{dx}{x^2 + 1} + \int \frac{x}{(x^2 + 1)^2} \, dx \\ &= \ln|x| - \frac{1}{2}\ln(x^2 + 1) - \tan^{-1}x - \frac{1}{2(x^2 + 1)} + K \end{aligned} $$

---

### 3. Rationalizing Substitutions

> [!info] Integrands with Roots
> For nonrational functions containing an expression of the form $\sqrt[n]{g(x)}$, the substitution $u = \sqrt[n]{g(x)}$ may convert the integrand into a rational function.

> [!example] Example 9: Rationalizing Substitution
> **Problem:** Evaluate $\int \frac{\sqrt{x + 4}}{x} \, dx$.
> 
> **Solution:**
> Let $u = \sqrt{x + 4} \implies u^2 = x + 4 \implies x = u^2 - 4 \text{ and } dx = 2u \, du$.
> $$ \begin{aligned} \int \frac{\sqrt{x + 4}}{x} \, dx &= \int \frac{u}{u^2 - 4} 2u \, du = 2 \int \frac{u^2}{u^2 - 4} \, du \\ &= 2 \int \left( 1 + \frac{4}{u^2 - 4} \right) du \\ &= 2 \int du + 8 \int \frac{du}{u^2 - 4} \end{aligned} $$
> Using the formula $\int \frac{dx}{x^2 - a^2} = \frac{1}{2a}\ln\left|\frac{x - a}{x + a}\right| + C$ with $a = 2$:
> $$ \begin{aligned} 2u + 8 \cdot \frac{1}{4} \ln\left| \frac{u - 2}{u + 2} \right| + C &= 2\sqrt{x + 4} + 2\ln\left| \frac{\sqrt{x + 4} - 2}{\sqrt{x + 4} + 2} \right| + C \end{aligned} $$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 509)