Date: 2026-05-18
Tags: [[Mathematics]], [[Algebra]], [[Polynomials]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---

For an expanded polynomial, the constant term is the product of the zeros multiplied by the leading coefficient. Thus, integer zeros must be factors of the constant term.

$$\begin{aligned} P(x) &= (x - 2)(x - 3)(x + 4) && \leftarrow \text{Factored form} \\ &= x^3 - x^2 - 14x + 24 && \text{with constant } 24 = (-2) \times (-3) \times 4 \end{aligned}$$

---

# Rational Zeros Theorem

> [!info] **Rational Zeros Theorem**
> 
> If the polynomial $P(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0$ has integer coefficients ($a_n \ne 0, a_0 \ne 0$), then every rational zero of $P$ is of the form:
> 
> $$\frac{p}{q}$$
> 
> where $\frac{p}{q}$ is in lowest terms, and:
> 
> - $p$ is a factor of the constant coefficient $a_0$
>     
> - $q$ is a factor of the leading coefficient $a_n$
>     

Inline note: $\frac{p}{q}$ is in _lowest terms_ if $p$ and $q$ have no common factor other than $1$.

**Proof**

$$\begin{aligned} a_n\left(\frac{p}{q}\right)^n + a_{n-1}\left(\frac{p}{q}\right)^{n-1} + \dots + a_1\left(\frac{p}{q}\right) + a_0 &= 0 \\ a_np^n + a_{n-1}p^{n-1}q + \dots + a_1pq^{n-1} + a_0q^n &= 0 && \leftarrow \text{Multiply by } q^n \\ p\left(a_np^{n-1} + a_{n-1}p^{n-2}q + \dots + a_1q^{n-1}\right) &= -a_0q^n && \leftarrow \text{Subtract } a_0q^n \text{ and factor LHS} \end{aligned}$$

Since $p$ divides the LHS, $p$ must divide $-a_0q^n$. Because $\gcd(p, q) = 1$, $p$ must be a factor of $a_0$. A symmetric derivation shows $q$ is a factor of $a_n$. $\blacksquare$

Special case: If $a_n = \pm 1$, then any rational zero must simply be an integer factor of the constant term $a_0$.

---

> [!example] **Example: Using the Rational Zeros Theorem**
> 
> Find the rational zeros of $P(x) = x^3 - 3x + 2$.
> 
> Parameters: $a_n = 1 \implies q \in \{\pm 1\}, \quad a_0 = 2 \implies p \in \{\pm 1, \pm 2\}$
> 
> Possible rational zeros $\frac{p}{q}$: $\pm 1, \pm 2$
> 
> Test candidates:
> 
> $$\begin{aligned} P(1) &= (1)^3 - 3(1) + 2 = 0 && \leftarrow \checkmark \\ P(-1) &= (-1)^3 - 3(-1) + 2 = 4 \\ P(2) &= (2)^3 - 3(2) + 2 = 4 \\ P(-2) &= (-2)^3 - 3(-2) + 2 = 0 && \leftarrow \checkmark \end{aligned}$$
> 
> The rational zeros of $P$ are $1$ and $-2$.

---

> [!info] **Finding the Rational Zeros of a Polynomial**
> 
> 1. **List Possible Zeros.** List all possible rational zeros using the Rational Zeros Theorem.
>     
> 2. **Divide.** Use synthetic division to evaluate the polynomial at candidates for the rational zeros found in Step 1 until you get a remainder $0$. Note the quotient obtained when the remainder is $0$.
>     
> 3. **Repeat.** Repeat Steps 1 and 2 for the quotient. Stop when you reach a quotient that is quadratic or factors easily, and use the quadratic formula or factor to find the remaining zeros.
>     

---

> [!example] **Example: Finding Rational Zeros**
> 
> Write the polynomial $P(x) = 2x^3 + x^2 - 13x + 6$ in factored form, and find all its zeros.
> 
> Possible rational zeros:
> 
> $$\frac{\text{factor of constant term}}{\text{factor of leading coefficient}} = \frac{\text{factor of } 6}{\text{factor of } 2}$$
> 
> - Factors of $6$: $\pm 1, \pm 2, \pm 3, \pm 6$
>     
> - Factors of $2$: $\pm 1, \pm 2$
>     
> 
> Raw candidate list:
> 
> $$\pm\frac{1}{1}, \pm\frac{2}{1}, \pm\frac{3}{1}, \pm\frac{6}{1}, \pm\frac{1}{2}, \pm\frac{2}{2}, \pm\frac{3}{2}, \pm\frac{6}{2}$$
> 
> Simplified list (duplicates eliminated):
> 
> $$\pm 1, \pm 2, \pm 3, \pm 6, \pm\frac{1}{2}, \pm\frac{3}{2}$$
> 
> **Test whether $1$ is a zero:**
> 
> $$\begin{array}{r|rrrr} 1 & 2 & 1 & -13 & 6 \\ & & 2 & 3 & -10 \\ \hline & 2 & 3 & -10 & \boxed{-4} \end{array} \qquad \implies \text{Remainder } \ne 0 \text{, so } 1 \text{ is not a zero}$$
> 
> **Test whether $2$ is a zero:**
> 
> $$\begin{array}{r|rrrr} 2 & 2 & 1 & -13 & 6 \\ & & 4 & 10 & -6 \\ \hline & 2 & 5 & -3 & \boxed{0} \end{array} \qquad \implies \text{Remainder } = 0 \text{, so } 2 \text{ is a zero}$$
> 
> **Factorization progression:**
> 
> $$\begin{aligned} P(x) &= 2x^3 + x^2 - 13x + 6 \\ &= (x - 2)(2x^2 + 5x - 3) && \leftarrow \text{From synthetic division quotient} \\ &= (x - 2)(2x - 1)(x + 3) && \leftarrow \text{Factor quadratic } 2x^2 + 5x - 3 \end{aligned}$$
> 
> Zeros of $P$: $2, \tfrac{1}{2}, -3$

---

# Descartes’s Rule of Signs

A **variation in sign** occurs whenever adjacent coefficients of a polynomial $P(x)$, written with descending powers of $x$ (omitting terms with coefficient 0), have opposite signs.

|**Polynomial**|**Variations in Sign**|
|---|---|
|$x^2 + 4x + 1$|$0$|
|$2x^3 + x - 6$|$1$|
|$x^4 - 3x^2 - x + 4$|$2$|

_Example:_

$$P(x) = \underbrace{5x^7}_{(+)} \to \underbrace{-3x^5}_{(-)} \to \underbrace{-x^4}_{(-)} \to \underbrace{+2x^2}_{(+)} \to \underbrace{+x}_{(+)} \to \underbrace{-3}_{(-)} \quad \implies 3 \text{ variations}$$

---

> [!info] **Descartes’s Rule of Signs**
> 
> Let $P$ be a polynomial with real coefficients.
> 
> 1. The number of positive real zeros of $P(x)$ either is equal to the number of variations in sign in $P(x)$ or is less than that by an even whole number.
>     
> 2. The number of negative real zeros of $P(x)$ either is equal to the number of variations in sign in $P(-x)$ or is less than that by an even whole number.
>     

Inline note: Zeros of multiplicity $m$ are counted $m$ times.

_Example:_ $P(x) = x^2 - 2x + 1 = (x - 1)^2$ has $2$ sign changes and $1$ positive real zero ($x = 1$) with multiplicity $2$.

---

> [!example] **Example: Using Descartes’s Rule**
> 
> Use Descartes’s Rule of Signs to determine the possible number of positive and negative real zeros of the polynomial
> 
> $$P(x) = 3x^6 + 4x^5 + 3x^3 - x - 3$$
> 
> **Positive Real Zeros:**
> 
> $$P(x) = +3x^6 + 4x^5 + 3x^3 \to -x - 3 \quad \implies 1 \text{ variation}$$
> 
> There is exactly $1$ positive real zero.
> 
> **Negative Real Zeros:**
> 
> Evaluate $P(-x)$:
> 
> $$\begin{aligned} P(-x) &= 3(-x)^6 + 4(-x)^5 + 3(-x)^3 - (-x) - 3 \\ &= \underbrace{3x^6}_{(+)} \to \underbrace{-4x^5}_{(-)} - 3x^3 \to \underbrace{+x}_{(+)} \to \underbrace{-3}_{(-)} \quad \implies 3 \text{ variations} \end{aligned}$$
> 
> There are either $3$ or $1$ negative real zeros.
> 
> **Total Real Zeros:**
> 
> Either $1 + 3 = 4$ or $1 + 1 = 2$ total real zeros.

---

# Upper and Lower Bounds Theorem

> [!info] **The Upper and Lower Bounds Theorem**
> 
> Let $P$ be a polynomial with real coefficients.
> 
> 1. If $P(x)$ is divided by $x - b$ (with $b > 0$) using synthetic division, and the bottom row (quotient and remainder coefficients) has **no negative entry**, then $b$ is an **upper bound** for the real zeros of $P$.
>     
> 2. If $P(x)$ is divided by $x - a$ (with $a < 0$) using synthetic division, and the bottom row has entries that are **alternately nonpositive and nonnegative**, then $a$ is a **lower bound** for the real zeros of $P$.
>     

Inline note: "Alternately nonpositive and nonnegative" means signs alternate, where $0$ can be considered positive or negative as needed to maintain the pattern.

---

> [!example] **Example: Upper and Lower Bounds for the Zeros of a Polynomial**
> 
> Show that all the real zeros of the polynomial $P(x) = x^4 - 3x^2 + 2x - 5$ lie between $-3$ and $2$.
> 
> ![[Pasted image 20260518230137.png|center]]
> 
> **Test upper bound $b = 2$ ($2 > 0$):**
> 
> $$\begin{array}{r|rrrrr} 2 & 1 & 0 & -3 & 2 & -5 \\ & & 2 & 4 & 2 & 8 \\ \hline & 1 & 2 & 1 & 4 & \boxed{3} \end{array} \qquad \implies \text{All entries are nonnegative } \implies 2 \text{ is an upper bound}$$
> 
> **Test lower bound $a = -3$ ($-3 < 0$):**
> 
> $$\begin{array}{r|rrrrr} -3 & 1 & 0 & -3 & 2 & -5 \\ & & -3 & 9 & -18 & 48 \\ \hline & 1 & -3 & 6 & -16 & \boxed{43} \end{array} \qquad \implies \text{Entries alternate in sign } (+, -, +, -, +) \implies -3 \text{ is a lower bound}$$
> 
> Since remainders are nonzero ($\ne 0$), neither $-3$ nor $2$ is a zero. Thus, all real zeros lie strictly between $-3$ and $2$.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 281)
