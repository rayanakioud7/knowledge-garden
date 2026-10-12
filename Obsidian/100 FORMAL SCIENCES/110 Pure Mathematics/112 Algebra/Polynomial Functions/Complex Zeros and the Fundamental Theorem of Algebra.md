Date: 2026-05-18
Tags: [[Mathematics]], [[Algebra]], [[Polynomials]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]], [[Complex Numbers]]

---

## The Fundamental Theorem of Algebra and Complete Factorization

An $n$th-degree polynomial can have at most $n$ real zeros. In the complex number system, an $n$th-degree polynomial has exactly $n$ zeros (counting multiplicity) and can be factored into exactly $n$ linear factors.

---

> [!info] **Fundamental Theorem of Algebra**
> 
> Every polynomial
> 
> $$P(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0 \qquad (n \ge 1, \; a_n \ne 0)$$
> 
> with complex coefficients has at least one complex zero.

Because any real number is also a complex number, the theorem applies to polynomials with real coefficients as well.

---

> [!info] **Complete Factorization Theorem**
> 
> If $P(x)$ is a polynomial of degree $n \ge 1$, then there exist complex numbers $a, c_1, c_2, \dots, c_n$ (with $a \ne 0$) such that
> 
> $$P(x) = a(x - c_1)(x - c_2) \dots (x - c_n)$$

**Proof**

By the Fundamental Theorem of Algebra, $P$ has at least one zero, $c_1$. By the Factor Theorem, $P(x)$ can be factored as:

$$P(x) = (x - c_1)Q_1(x) \qquad \leftarrow \deg(Q_1) = n - 1$$

Applying the Fundamental Theorem to the quotient $Q_1(x)$ yields:

$$P(x) = (x - c_1)(x - c_2)Q_2(x) \qquad \leftarrow \deg(Q_2) = n - 2 \text{ and } c_2 \text{ is a zero of } Q_1(x)$$

Continuing this process for $n$ steps results in a final quotient $Q_n(x)$ of degree $0$, which is a nonzero constant $a$:

$$P(x) = a(x - c_1)(x - c_2) \dots (x - c_n) \quad \blacksquare$$

---

> [!tip] Method insight: 
> To find the complex zeros of an $n$th-degree polynomial, factor as much as possible using real numbers, then apply the Quadratic Formula on remaining quadratic factors that cannot be factored further over the reals.

---

> [!example] **Example: Factoring a Polynomial Completely**
> 
> Let $P(x) = x^3 - 3x^2 + x - 3$.
> 
> **(a) Find all the zeros of $P$.**
> 
> $$\begin{aligned} P(x) &= x^3 - 3x^2 + x - 3 \\ &= x^2(x - 3) + (x - 3) && \leftarrow \text{Group terms} \\ &= (x - 3)(x^2 + 1) && \leftarrow \text{Factor } x - 3 \end{aligned}$$
> 
> Set each factor equal to $0$:
> 
> - $x - 3 = 0 \implies x = 3$
>     
> - $x^2 + 1 = 0 \implies x^2 = -1 \implies x = \pm i$
>     
> 
> Zeros of $P$: $3, \; i, \; -i$
> 
> **(b) Find the complete factorization of $P$.**
> 
> Using the zeros $3, \; i, \; -i$:
> 
> $$\begin{aligned} P(x) &= (x - 3)(x - i)[x - (-i)] \\ &= (x - 3)(x - i)(x + i) \end{aligned}$$

---

> [!example] **Example: Factoring a Polynomial Completely**
> 
> Let $P(x) = x^3 - 2x + 4$.
> 
> **(a) Find all the zeros of $P$.**
> 
> Possible rational zeros: Factors of $4 \implies \pm 1, \pm 2, \pm 4$
> 
> Test $c = -2$ using synthetic division:
> 
> $$\begin{array}{r|rrrr} -2 & 1 & 0 & -2 & 4 \\ & & -2 & 4 & -4 \\ \hline & 1 & -2 & 2 & \boxed{0} \end{array} \implies P(x) = (x + 2)(x^2 - 2x + 2)$$
> 
> Set each factor equal to $0$:
> 
> - $x + 2 = 0 \implies x = -2$
>     
> - $x^2 - 2x + 2 = 0$
>     
> 
> Solve the quadratic component using the Quadratic Formula:
> 
> $$\begin{aligned} x^2 - 2x + 2 &= 0 && \leftarrow \text{Set factor equal to } 0 \\ x &= \frac{2 \pm \sqrt{4 - 8}}{2} && \leftarrow \text{Quadratic Formula} \\ x &= \frac{2 \pm 2i}{2} && \leftarrow \text{Take square root} \\ x &= 1 \pm i && \leftarrow \text{Simplify} \end{aligned}$$
> 
> Zeros of $P$: $-2, \; 1 + i, \; 1 - i$
> 
> **(b) Find the complete factorization of $P$.**
> 
> Using the zeros $-2, \; 1 + i, \; 1 - i$:
> 
> $$\begin{aligned} P(x) &= [x - (-2)][x - (1 + i)][x - (1 - i)] \\ &= (x + 2)(x - 1 - i)(x - 1 + i) \end{aligned}$$

---

## Zeros and Their Multiplicities

If the factor $x - c$ appears $k$ times in the complete factorization of $P(x)$, then $c$ is a zero of **multiplicity $k$**.

_Example:_ The polynomial

$$P(x) = (x - 1)^3(x + 2)^2(x + 3)^5$$

has the following zeros:

- $1 \quad \leftarrow \text{multiplicity } 3$
    
- $-2 \;\; \leftarrow \text{multiplicity } 2$
    
- $-3 \;\; \leftarrow \text{multiplicity } 5$
    

Counting multiplicities, $P$ has $3 + 2 + 5 = 10$ zeros, which matches its degree ($n = 10$).

---

> [!info] **Zeros Theorem**
> 
> Every polynomial of degree $n \ge 1$ has exactly $n$ zeros, provided that a zero of multiplicity $k$ is counted $k$ times.

**Proof**

By the Complete Factorization Theorem, a polynomial $P$ of degree $n$ can be expressed as:

$$P(x) = a(x - c_1)(x - c_2) \dots (x - c_n)$$

Let $c$ be any given zero of $P$:

$$\begin{aligned} P(c) &= a(c - c_1)(c - c_2) \dots (c - c_n) = 0 \\ &\implies c - c_i = 0 \quad \leftarrow \text{by Zero-Product Property} \\ &\implies c = c_i \text{ for some } i \end{aligned}$$

It follows that the list $c_1, c_2, \dots, c_n$ contains all zeros of $P$, yielding exactly $n$ zeros when counting repeats. $\blacksquare$

---

> [!example] **Example: Factoring a Polynomial with Complex Zeros**
> 
> Find the complete factorization and the five zeros of the polynomial
> 
> $$P(x) = 3x^5 + 24x^3 + 48x$$
> 
> **Factorization Progression:**
> 
> $$\begin{aligned} P(x) &= 3x(x^4 + 8x^2 + 16) && \leftarrow \text{Factor common monomial } 3x \\ &= 3x(x^2 + 4)^2 && \leftarrow \text{Factor perfect square trinomial} \end{aligned}$$
> 
> **Finding Zeros:**
> 
> Set each component equal to $0$:
> 
> - $3x = 0 \implies x = 0$
>     
> - $(x^2 + 4)^2 = 0 \implies x^2 + 4 = 0 \implies x^2 = -4 \implies x = \pm 2i$
>     
> 
> Over the complex numbers, $x^2 + 4 = (x - 2i)(x + 2i)$. Substituting this back into the expression:
> 
> $$\begin{aligned} P(x) &= 3x[(x - 2i)(x + 2i)]^2 \\ &= 3x(x - 2i)^2(x + 2i)^2 \end{aligned}$$
> 
> Zeros and Multiplicities:
> 
> - $0 \quad \;\; \leftarrow \text{multiplicity } 1$
>     
> - $2i \quad \, \leftarrow \text{multiplicity } 2 \text{ (double zero)}$
>     
> - $-2i \quad \leftarrow \text{multiplicity } 2 \text{ (double zero)}$
>     
> 
> Total counted zeros: $1 + 2 + 2 = 5$ zeros $\quad \leftarrow \text{matches } \deg(P) = 5$

| **Degree** | **Polynomial**                                                                      | **Zero(s)**                                                    | **Number of Zeros** |
| ---------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------- |
| $1$        | $P(x) = x - 4$                                                                      | $4$                                                            | $1$                 |
| $2$        | $\begin{aligned} P(x) &= x^2 - 10x + 25 \\ &= (x - 5)(x - 5) \end{aligned}$         | $5 \text{ (multiplicity 2)}$                                   | $2$                 |
| $3$        | $\begin{aligned} P(x) &= x^3 + x \\ &= x(x - i)(x + i) \end{aligned}$               | $0, \; i, \; -i$                                               | $3$                 |
| $4$        | $\begin{aligned} P(x) &= x^4 + 18x^2 + 81 \\ &= (x - 3i)^2(x + 3i)^2 \end{aligned}$ | $3i \text{ (multiplicity 2)}, \; -3i \text{ (multiplicity 2)}$ | $4$                 |
| $5$        | $\begin{aligned} P(x) &= x^5 - 2x^4 + x^3 \\ &= x^3(x - 1)^2 \end{aligned}$         | $0 \text{ (multiplicity 3)}, \; 1 \text{ (multiplicity 2)}$    | $5$                 |

---

## Complex Zeros Occur in Conjugate Pairs

For polynomials with real coefficients, non-real complex zeros always occur in conjugate pairs. If $a + bi$ ($b \neq 0$) is a zero, then its complex conjugate $a - bi$ must also be a zero.

---

> [!info] **Conjugate Zeros Theorem**
> 
> If the polynomial $P$ has real coefficients and if the complex number $z$ is a zero of $P$, then its complex conjugate $\overline{z}$ is also a zero of $P$.

**Proof**

Let $P(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0$, where each coefficient $a_i$ is a real number ($\overline{a_i} = a_i$). Assume $P(z) = 0$. We must show that $P(\overline{z}) = 0$.

Using the properties of complex conjugation—namely that the conjugate of a sum is the sum of the conjugates ($\overline{w + v} = \overline{w} + \overline{v}$) and the conjugate of a product is the product of the conjugates ($\overline{wv} = \overline{w} \cdot \overline{v}$):

$$\begin{aligned} P(\overline{z}) &= a_n(\overline{z})^n + a_{n-1}(\overline{z})^{n-1} + \dots + a_1\overline{z} + a_0 \\ &= a_n\overline{z^n} + a_{n-1}\overline{z^{n-1}} + \dots + a_1\overline{z} + a_0 \\ &= \overline{a_n}\overline{z^n} + \overline{a_{n-1}}\overline{z^{n-1}} + \dots + \overline{a_1}\overline{z} + \overline{a_0} && \leftarrow \text{Since coefficients are real: } a_i = \overline{a_i} \\ &= \overline{a_nz^n} + \overline{a_{n-1}z^{n-1}} + \dots + \overline{a_1z} + \overline{a_0} \\ &= \overline{a_nz^n + a_{n-1}z^{n-1} + \dots + a_1z + a_0} \\ &= \overline{P(z)} \\ &= \overline{0} = 0 \quad \blacksquare \end{aligned}$$

This identities that $\overline{z}$ satisfies the equation, proving it is a root.

---

## Linear and Quadratic Factors

If complex numbers are not used, a polynomial with real coefficients can always be factored into a combination of linear factors and quadratic factors. A quadratic polynomial with no real zeros is called **irreducible over the real numbers**.

---

> [!info] **Linear and Quadratic Factors Theorem**
> 
> Every polynomial with real coefficients can be factored into a product of linear and irreducible quadratic factors with real coefficients.

**Proof**

If $c = a + bi$ is a non-real complex root of a polynomial with real coefficients, its conjugate $\overline{c} = a - bi$ must also be a root. Multiplying their corresponding linear factors yields:

$$\begin{aligned} (x - c)(x - \overline{c}) &= [x - (a + bi)][x - (a - bi)] \\ &= [(x - a) - bi][(x - a) + bi] \\ &= (x - a)^2 - (bi)^2 \\ &= x^2 - 2ax + (a^2 + b^2) \end{aligned}$$

Because $a$ and $b$ are real numbers, the resulting quadratic expression $x^2 - 2ax + (a^2 + b^2)$ features entirely _real_ coefficients.

By the Complete Factorization Theorem, any polynomial can be broken down into linear factors $P(x) = a(x - c_1)(x - c_2) \dots (x - c_n)$. Grouping and multiplying the conjugate complex pairs into real quadratic units leaves a final product consisting solely of real linear factors and real irreducible quadratic factors. $\blacksquare$

---

> [!example] **Example: Factoring a Polynomial into Linear and Quadratic Factors**
> 
> Let $P(x) = x^4 + 2x^2 - 8$.
> 
> **(a) Factor $P$ into linear and irreducible quadratic factors with real coefficients.**
> 
> Factor the expression by treating it as a quadratic in terms of $x^2$:
> 
> $$\begin{aligned} P(x) &= x^4 + 2x^2 - 8 \\ &= (x^2 - 2)(x^2 + 4) \\ &= (x - \sqrt{2})(x + \sqrt{2})(x^2 + 4) \end{aligned}$$
> 
> The factor $x^2 + 4$ has no real zeros, meaning it is irreducible over the real numbers.
> 
> **(b) Factor $P$ completely into linear factors with complex coefficients.**
> 
> To find the complete factorization, break down the remaining irreducible quadratic factor over the complex field using $x^2 = -4 \implies x = \pm 2i$:
> 
> $$\begin{aligned} P(x) &= (x - \sqrt{2})(x + \sqrt{2})(x^2 + 4) \\ &= (x - \sqrt{2})(x + \sqrt{2})(x - 2i)(x + 2i) \end{aligned}$$

---

# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 293)