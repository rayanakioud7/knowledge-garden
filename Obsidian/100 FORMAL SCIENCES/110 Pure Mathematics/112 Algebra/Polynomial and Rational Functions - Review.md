Date: 2026-05-19
Tags: [[Mathematics]], [[Algebra]], [[Polynomials]], [[Cheat sheet]]

---
### Quadratic Functions


#### A **quadratic function** is a function of the form

$$f(x) = ax^2 + bx + c$$
> see: [[Quadratic Functions and Models#Quadratic Functions]]


#### Vertex form obtained by completing the square:

$$f(x) = a(x - h)^2 + k$$

> see: [[Quadratic Functions and Models#Vertex Form of a Quadratic Function]]

The graph is a **parabola** with vertex $(h, k)$.

- If $a > 0$, $f$ has a **minimum value** $k$ at $x = h = -b/(2a)$.
    
- If $a < 0$, $f$ has a **maximum value** $k$ at $x = h = -b/(2a)$.
    

---

### Polynomial Functions

A **polynomial function** of degree $n$ is a function $P$ of the form

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 \qquad a_n \ne 0$$

The numbers $a_i$ are **coefficients**; $a_n$ is the **leading coefficient**, and $a_0$ is the **constant coefficient**. The graph is a smooth, continuous curve.

#### Real Zeros of Polynomials

A zero of a polynomial $P$ is a number $c$ for which $P(c) = 0$. The following statements are equivalent:

1. $c$ is a real zero of $P$.
    
2. $x = c$ is a solution of the equation $P(x) = 0$.
    
3. $x - c$ is a factor of $P(x)$.
    
4. $c$ is an $x$-intercept of the graph of $P$.
    

#### Multiplicity of a Zero

A zero $c$ of a polynomial $P$ has **multiplicity** $m$ if $m$ is the highest power for which $(x - c)^m$ is a factor of $P(x)$.

#### Local Maximums and Minimums

A polynomial function $P$ of degree $n$ has $n - 1$ or fewer **local extrema** (local maximums and minimums).

---

### Division of Polynomials

If $P(x)$ and $D(x)$ are polynomials with $D(x) \ne 0$, then:

$$P(x) = D(x) \cdot Q(x) + R(x) \qquad \text{or} \qquad \frac{P(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)}$$

where $P(x)$ is the dividend, $D(x)$ is the divisor, $Q(x)$ is the quotient, and $R(x)$ is the remainder ($\text{degree of } R < \text{ degree of } D$ or $R(x) = 0$).

#### Remainder Theorem

When $P(x)$ is divided by the linear divisor $D(x) = x - c$, the remainder is the constant $P(c)$.

#### Rational Zeros of Polynomials

If $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$ has integer coefficients, then all rational zeros of $P$ are of the form:

$$x = \pm \frac{p}{q}$$

where $p$ is a divisor of the constant term $a_0$ and $q$ is a divisor of the leading coefficient $a_n$.

#### Descartes’s Rule of Signs

Let $P$ be a polynomial with real coefficients:

- The number of positive real zeros of $P$ either equals the number of **changes of sign** in the coefficients of $P(x)$ or is less than that by an even number.
    
- The number of negative real zeros of $P$ either equals the number of **changes of sign** in the coefficients of $P(-x)$ or is less than that by an even number.
    

#### Upper and Lower Bounds Theorem

Divide $P(x)$ by $x - c$ via synthetic division yielding $P(x) = (x - c) \cdot Q(x) + r$:

- If $c > 0$ and the coefficients of $Q$ and $r$ are all nonnegative $\implies c$ is an **upper bound** for the zeros.
    
- If $c < 0$ and the coefficients of $Q$ and $r$ alternately nonpositive and nonnegative $\implies c$ is a **lower bound** for the zeros.
    

---

### Complex Zeros and Factorization

#### The Fundamental Theorem of Algebra

Every polynomial $P$ of degree $n$ with complex coefficients has exactly $n$ complex zeros, provided each zero of multiplicity $m$ is counted $m$ times.

#### Complete Factorization Theorem

$$P(x) = a(x - c_1)(x - c_2) \dots (x - c_n)$$

where $a$ is the leading coefficient and $c_1, c_2, \dots, c_n$ are the complex zeros of $P$.

#### Conjugate Zeros Theorem

If a polynomial $P$ has real coefficients and if $a + bi$ is a zero of $P$, then its complex conjugate $a - bi$ is also a zero of $P$.

#### Linear and Quadratic Factors Theorem

Every polynomial with real coefficients can be factored into linear and irreducible quadratic factors with real coefficients.

---

### Rational Functions

A **rational function** $r$ is a quotient of polynomial functions:

$$r(x) = \frac{P(x)}{Q(x)}$$

We assume $P$ and $Q$ have no factors in common.

#### Asymptotes

- **Vertical Asymptotes**: The line $x = a$ is a vertical asymptote if $y \to \pm\infty$ as $x \to a^{+}$ or $x \to a^{-}$. These lines occur at the zeros of the denominator: $Q(a) = 0$.
    
- **Horizontal Asymptote**: The line $y = b$ is a horizontal asymptote if $y \to b$ as $x \to \infty$ or $x \to -\infty$.
    
    Let $n = \text{degree of } P$ and $m = \text{degree of } Q$:
    
    - If $n < m$, horizontal asymptote is $y = 0$.
        
    - If $n = m$, horizontal asymptote is $y = \frac{\text{leading coefficient of } P}{\text{leading coefficient of } Q}$.
        
    - If $n > m$, $r$ has no horizontal asymptote.
        

---

### Polynomial and Rational Inequalities

#### Polynomial Inequalities

An inequality of the form $P(x) \ge 0$ where $P$ is a polynomial. Solved by finding real zeros and using test values between successive zeros to determine sign intervals.

#### Rational Inequalities

An inequality of the form $r(x) \ge 0$ where $r(x) = P(x)/Q(x)$ is a rational function. The **cut points** are the zeros of the numerator ($P(x) = 0$) and the zeros of the denominator ($Q(x) = 0$). Solved by using test points between successive cut points. Zeros of the denominator are always excluded from the final solution interval.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 324-325)