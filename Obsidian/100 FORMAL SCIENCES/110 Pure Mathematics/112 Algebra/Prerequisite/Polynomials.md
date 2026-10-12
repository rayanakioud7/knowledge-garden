Date: 2026-05-10
Tags: [[Mathematics]], [[Algebra]]

---
# 1. Recognize Monomials

> [!info] Definition
> A **monomial** in one variable is the product of a constant and a variable raised to a nonnegative integer power. A monomial is of the form
> $$ax^k$$
> where $a$ is a constant, $x$ is a variable, and $k \geq 0$ is an integer. The constant $a$ is called the **coefficient** of the monomial. If $a \not = 0$ then $k$ is the **degree** of the monomial.

## Examples of Monomials

|Monomial|Coefficient|Degree|Note|
|---|---|---|---|
|$6x^2$|$6$|$2$||
|$-\sqrt{2}x^3$|$-\sqrt{2}$|$3$||
|$3$|$3$|$0$|$3 = 3 \cdot 1 = 3x^0,; x \neq 0$|
|$-5x$|$-5$|$1$|$-5x = -5x^1$|
|$x^4$|$1$|$4$|$x^4 = 1 \cdot x^4$|

## Examples of Non-Monomials

- $3x^{1/2}$ is not a monomial, since x is raised to $\frac{1}{2}$
- $4x^{-3}$ is not a monomial, since the exponent of $x$ is $-3$
Both of these powers are not non-negative integers

---
# 2. Recognize Polynomials

**Like Terms** — monomials with the same variable raised to the same power.

$$2x^4 \text{ and } -5x^4 \quad \checkmark \qquad 2x^3 \text{ and } 2x^5 \quad \times$$

Like terms can be added or subtracted using the Distributive Property:

$$2x^2 + 5x^2 = (2+5)x^2 = 7x^2 \qquad 8x^3 - 5x^3 = (8-5)x^3 = 3x^3$$
**Binomial** — sum or difference of two monomials of different degrees. 
**Trinomial** — sum or difference of three monomials of three different degrees.

$$x^2 - 2 \quad \text{(binomial)} \qquad x^3 - 3x + 5 \quad \text{(trinomial)}$$

$$2x^2 + 5x^2 + 2 = 7x^2 + 2 \quad \text{(binomial)}$$

> [!info] Definition
> A **polynomial** in one variable is an algebraic expression of the form
> $$a_nx^n+a_{n-1}x^{n-1}+...+a_1x+a_0$$
> where $a_n,a_{n-1},...,a_1,a_0$ are constants, called the **coefficients** of the polynomial, $n \geq 0$ is an integer, and $x$ is a variable. If $a_n \not = 0$ it is the **leading coefficient**, and $n$ is the **degree** of the polynomial.
> 

> A polynomial is a sum of monomials.

- The monomials that make up a polynomial are called its **terms**.
- If all coefficients are $0$ → **zero polynomial** — has no degree
- **Standard form**: terms written in descending order by degree

Missing powers simply have coefficient $= 0$, e.g. $x^3 + 2$ means $x^3 + 0x^2 + 0x + 2$.

**Examples of Polynomials**

|Polynomial|Coefficients|Degree|
|---|---|---|
|$-8x^3 + 4x^2 + 6x + 2$|$-8, 4, 6, 2$|$3$|
|$3x^2 - 5 = 3x^2 + 0\cdot x + (-5)$|$3, 0, -5$|$2$|
|$8 - 2x + x^2 = 1\cdot x^2 + (-2)x + 8$|$1, -2, 8$|$2$|
|$5x + \sqrt{2} = 5x^1 + \sqrt{2}$|$5, \sqrt{2}$|$1$|
|$3 = 3 \cdot 1 = 3\cdot x^0$|$3$|$0$|
|$0$|$0$|No degree|

Polynomials can use any variable:

$$3x^4 - x^2 + 2 \quad \text{(in } x\text{, degree 4)} \qquad 9y^3 - 2y^2 + y - 3 \quad \text{(in } y\text{, degree 3)}$$

**Not polynomials:**
$$\frac{1}{x} = x^{-1} \quad \text{(exponent is not a nonnegative integer)}$$
$$\frac{x^2+1}{x+5} \quad \text{(denominator has degree} > 0\text{)}$$
---
# 3. Know Formulas for Special Products

## Foil
stands for First, Outer, Inner, Last. is a method to find the product of two binomials.

![[Pasted image 20260510234229.png|center|456]]

**Using FOIL** — $(a+b)(c+d) = \underbrace{ac}_{F} + \underbrace{ad}_{O} + \underbrace{bc}_{I} + \underbrace{bd}_{L}$

**(a)** $\quad (x-3)(x+3) = x^2 + 3x - 3x - 9 = x^2 - 9$

**(b)** $\quad (x+2)^2 = (x+2)(x+2) = x^2 + 2x + 2x + 4 = x^2 + 4x + 4$

**(c)** $\quad (x-3)^2 = (x-3)(x-3) = x^2 - 3x - 3x + 9 = x^2 - 6x + 9$

**(d)** $\quad (2x+1)(3x+4) = 6x^2 + 8x + 3x + 4 = 6x^2 + 11x + 4$

> [!NOTE] Difference of two squares
> $$(x-a)(x+a)=x^2-a^2$$

> [!NOTE] Square of Binomials, or Perfect squares
> 
> $$(x+a)^2=x^2+2ax +a^2$$
> $$(x-a)^2=x^2-2ax +a^2$$

> [!NOTE] Cube of Binomials, or Perfect cubes
> $$(x+a)^3=x^3+3ax^2+3a^2x+a^3$$
> $$(x-a)^3=x^3-3ax^2+3a^2x-a^3$$
>  

> [!NOTE] Difference of Two Cubes
> $$(x-a)(x^2+ax+a^2)=x^3 - a^3$$
> 

> [!NOTE] Sum of Two Cubes
> $$
> (x+a)(x^2-ax+a^2)=x^3+a^3
> $$
> 

---
# 4. Divide Polynomials Using Long Division

> [!info] Key Terms Given a division $\dfrac{\text{Dividend}}{\text{Divisor}}$:
> 
> - **Dividend** — the polynomial being divided
> - **Divisor** — the polynomial dividing
> - **Quotient** — the result
> - **Remainder** — what is left over
> 
> $$\text{(Quotient)(Divisor) + Remainder = Dividend}$$

**Example: Dividing two integers** — Divide $842$ by $15$:

$$\frac{842}{15} = 56 + \frac{2}{15} \qquad \text{Check: } (56)(15) + 2 = 840 + 2 = 842$$

**Example: Dividing two polynomials** — Divide $3x^3 + 4x^2 + x + 7$ by $x^2 + 1$:

![[Pasted image 20260511010457.png|center]]

**Result:** $$\frac{3x^3 + 4x^2 + x + 7}{x^2 + 1} = 3x + 4 + \frac{-2x+3}{x^2+1}$$

**Check:** $$(3x+4)(x^2+1) + (-2x+3) = 3x^3 + 4x^2 + x + 7 \quad \checkmark$$
## Example 2:

Find the quotient and the remainder when
$$x^4-3x^3+2x-5\quad\text{ is divided by } \quad x^2-x+1$$
![[Pasted image 20260511010845.png]]

**Check:** $\text{(Quotient)(Divisor) + Remainder}$

$$= (x^2 - 2x - 3)(x^2 - x + 1) + x - 2$$

$$= x^4 - x^3 + x^2 - 2x^3 + 2x^2 - 2x - 3x^2 + 3x - 3 + x - 2$$

$$= x^4 - 3x^3 + 2x - 5 = \text{Dividend} \quad \checkmark$$

**Result:**

$$\frac{x^4 - 3x^3 + 2x - 5}{x^2 - x + 1} = x^2 - 2x - 3 + \frac{x-2}{x^2 - x + 1}$$
---

## Synthetic Division

> [!info] Definition
> **Synthetic division** is a compact shorthand for long division, used when the divisor is of the form $x - c$.
> Instead of writing polynomials, we work only with **coefficients**, using $0$ as placeholder for missing powers.

> [!tip] Key Rule
> The divisor $x - c$ becomes just $c$ placed to the left of the division symbol.
> Row 2 entries are obtained by **multiplying** the latest Row 3 entry by $c$.
> Row 3 entries are obtained by **adding** Rows 1 and 2.

divide $2x^3-7x^2+5$ by $x-3$:

![[Pasted image 20260518214444.png|center]]

**Derivation from Long Division** — Divide $2x^3 - x^2 + 3$ by $x - 3$:

$$\begin{array}{r|rrrr}
3 & 2 & -1 & 0 & 3 \\
  &   & 6  & 15 & 45 \\ \hline
  & 2 & 5  & 15 & 48
\end{array}$$

$$\underbrace{2 \quad 5 \quad 15}_{\text{Quotient coefficients}} \qquad \underbrace{48}_{\text{Remainder}}$$

$$\frac{2x^3 - x^2 + 3}{x-3} = 2x^2 + 5x + 15 + \frac{48}{x-3}$$

---

**Step-by-step** — Divide $x^3 - 4x^2 - 5$ by $x - 3$, so $c = 3$:

**Step 1 & 2:** Write coefficients (insert $0$ for missing $x$), place $c = 3$ to the left:
$$\begin{array}{r|rrrr}
3 & 1 & -4 & 0 & -5 \\
  &   &    &   &    \\ \hline
  &   &    &   &
\end{array}$$

**Step 3:** Bring down the first coefficient $1$ to Row 3:
$$\begin{array}{r|rrrr}
3 & 1 & -4 & 0 & -5 \\
  &   &    &   &    \\ \hline
  & 1 &    &   &
\end{array}$$

**Step 4:** Multiply $1 \times 3 = 3$, place in Row 2 next column:
$$\begin{array}{r|rrrr}
3 & 1 & -4 & 0 & -5 \\
  &   & 3  &   &    \\ \hline
  & 1 &    &   &
\end{array}$$

**Step 5:** Add Row 1 + Row 2: $-4 + 3 = -1$, enter in Row 3:
$$\begin{array}{r|rrrr}
3 & 1 & -4 & 0 & -5 \\
  &   & 3  &   &    \\ \hline
  & 1 & -1 &   &
\end{array}$$

**Step 6:** Multiply $-1 \times 3 = -3$, place in Row 2. Add: $0 + (-3) = -3$:
$$\begin{array}{r|rrrr}
3 & 1 & -4 & 0  & -5 \\
  &   & 3  & -3 &    \\ \hline
  & 1 & -1 & -3 &
\end{array}$$

**Step 7:** Multiply $-3 \times 3 = -9$, place in Row 2. Add: $-5 + (-9) = -14$:
$$\begin{array}{r|rrrr}
3 & 1 & -4 & 0  & -5  \\
  &   & 3  & -3 & -9  \\ \hline
  & 1 & -1 & -3 & -14
\end{array}$$

> [!tip] Reading Row 3
> - Last entry $-14$ → **Remainder**
> - Remaining entries $1, -1, -3$ → coefficients of **Quotient** (degree one less than dividend)
> $$\text{Quotient} = x^2 - x - 3 \qquad \text{Remainder} = -14$$

---

> [!NOTE] Theorem
> 
> Let $Q$ be a polynomial of positive degree and let $P$ be a polynomial whose degree is greater than or equal to the degree of $Q$. 
> The remainder after dividing $P$ by $Q$ is either the zero polynomial or a polynomial whose degree is less than the degree of the divisor $Q$.
> 

**Example**

**Given:** $P = x^3 + 2x^2 - 3$, $Q = x^2 + 1$

$$\frac{x^3 + 2x^2 - 3}{x^2 + 1} = x + 2 + \frac{-x - 5}{x^2 + 1}$$

Remainder $= -x - 5$, which has degree $1 <$ degree of $Q = 2$ $\checkmark$

---

## The Remainder and Factor Theorems

> [!info] **Remainder Theorem**
> 
> If the polynomial $P(x)$ is divided by $x - c$, then the remainder is the value $P(c)$.

**Proof**

$$\begin{aligned} P(x) &= (x - c) \cdot Q(x) + r && \leftarrow \text{Division Algorithm where } \deg(r) < \deg(x-c) \implies r \text{ is constant} \\ P(c) &= (c - c) \cdot Q(c) + r && \leftarrow \text{Substitute } x = c \\ &= 0 + r = r \quad \blacksquare \end{aligned}$$

---

> [!example] **Example: Using the Remainder Theorem to Find the Value of a Polynomial**
> 
> Let $P(x) = 3x^5 + 5x^4 - 4x^3 + 7x + 3$.
> 
> **(a) Find the quotient and remainder when $P(x)$ is divided by $x + 2$.**
> 
> Divisor: $x + 2 = x - (-2) \implies c = -2$
> 
> $$\begin{array}{r|rrrrrr} -2 & 3 & 5 & -4 & 0 & 7 & 3 \\ & & -6 & 2 & 4 & -8 & 2 \\ \hline & 3 & -1 & -2 & 4 & -1 & \boxed{5} \end{array}$$
> 
> - Quotient: $Q(x) = 3x^4 - x^3 - 2x^2 + 4x - 1$
>     
> - Remainder: $r = 5$
>     
> 
> **(b) Use the Remainder Theorem to find $P(-2)$.**
> 
> $$P(-2) = r = 5$$

---

> [!info] **Factor Theorem**
> 
> $c$ is a zero of $P$ if and only if $x - c$ is a factor of $P(x)$.

**Proof**

$$\begin{aligned} x - c \text{ is a factor} &\implies P(x) = (x - c)Q(x) \\ &\implies P(c) = (c - c)Q(c) = 0 \cdot Q(c) = 0 \\ \\ P(c) = 0 &\implies P(x) = (x - c)Q(x) + 0 \quad \leftarrow \text{by Remainder Theorem} \\ &\implies P(x) = (x - c)Q(x) \quad \blacksquare \end{aligned}$$

---

> [!example] **Example: Factoring a Polynomial Using the Factor Theorem**
> 
> Let $P(x) = x^3 - 7x + 6$. Show that $P(1) = 0$, and use this fact to factor $P(x)$ completely.
> 
> $$P(1) = 1^3 - 7(1) + 6 = 0 \implies x - 1 \text{ is a factor}$$
> 
> Division step to find remaining components:
> 
> $$\begin{array}{r|rrrr} 1 & 1 & 0 & -7 & 6 \\ & & 1 & 1 & -6 \\ \hline & 1 & 1 & -6 & \boxed{0} \end{array} \qquad \text{or} \qquad \begin{aligned} &\begin{array}{r} x^2 + x - 6 \quad \\ x - 1 \overline{) \quad x^3 + 0x^2 - 7x + 6} \\ \underline{x^3 - x^2} \phantom{- 7x + 6} \\ x^2 - 7x \phantom{+ 6} \\ \underline{x^2 - x} \phantom{+ 6} \\ -6x + 6 \\ \underline{-6x + 6} \\ 0 \end{array} \end{aligned}$$
> 
> Complete factorization:
> 
> $$\begin{aligned} P(x) &= (x - 1)(x^2 + x - 6) && \leftarrow \text{From division} \\ &= (x - 1)(x - 2)(x + 3) && \leftarrow \text{Factor quadratic} \end{aligned}$$

---
# 5. Factor Polynomials


> [!info] Definition
>  **Factoring** — expressing a polynomial as a product of other polynomials. 
>  A polynomial is **prime** if it cannot be written as a product of two other polynomials (excluding $1$ and $-1$). 
>  A polynomial is **factored completely** when written as a product of only prime factors.

Examples of prime polynomials over the integers: $$2,\quad 3,\quad 5,\quad x,\quad x+1,\quad x-1,\quad 3x+4,\quad x^2+4$$

> [!tip] 
> First Step Always look for a **common monomial factor** first, then use the Distributive Property to factor it out.

**Example: Identifying Common Monomial Factors**

|Polynomial|Common Factor|Remaining Factor|Factored Form|
|---|---|---|---|
|$2x + 4$|$2$|$x+2$|$2(x+2)$|
|$3x - 6$|$3$|$x-2$|$3(x-2)$|
|$2x^2 - 4x + 8$|$2$|$x^2-2x+4$|$2(x^2-2x+4)$|
|$8x - 12$|$4$|$2x-3$|$4(2x-3)$|
|$x^2 + x$|$x$|$x+1$|$x(x+1)$|
|$x^3 - 3x^2$|$x^2$|$x-3$|$x^2(x-3)$|
|$6x^2 + 9x$|$3x$|$2x+3$|$3x(2x+3)$|

**Factor completely each polynomial:**

**(a)** $x^4 - 16$ $$x^4 - 16 = (x^2-4)(x^2+4) = (x-2)(x+2)(x^2+4)$$ Over $\mathbb{C}$: $$= (x-2)(x+2)(x-2i)(x+2i)$$

**(b)** $x^3 - 1$ $$x^3 - 1 = (x-1)(x^2+x+1) \quad \leftarrow \text{difference of cubes}$$

**(c)** $9x^2 - 6x + 1$ $$9x^2 - 6x + 1 = (3x-1)^2 \quad \leftarrow \text{perfect square}$$

**(d)** $x^2 + 4x - 12$ $$x^2 + 4x - 12 = (x+6)(x-2) \quad \leftarrow 6 \times (-2) = -12,; 6 + (-2) = 4$$

**(e)** $3x^2 + 10x - 8$ $$3x^2 + 10x - 8 = (3x-2)(x+4) \quad \leftarrow 12x - 2x = 10x$$

**(f)** $x^3 - 4x^2 + 2x - 8$ $$= (x^3 - 4x^2) + (2x-8) \quad \leftarrow \text{group terms}$$ $$= x^2(x-4) + 2(x-4) \quad \leftarrow \text{Distributive Property}$$ $$= (x^2+2)(x-4)$$

---
# 6. Complete the Square

> [!info] Completing the Square
> For $x^2 + bx$, identify $b$, then add $\left(\dfrac{b}{2}\right)^2$:
> $$x^2 + bx + \left(\frac{b}{2}\right)^2 = \left(x + \frac{b}{2}\right)^2$$

| Start       | Add                                                  | Result                    | Factored Form                    |
| ----------- | ---------------------------------------------------- | ------------------------- | -------------------------------- |
| $y^2 + 8y$  | $\left(\frac{1}{2}\cdot 8\right)^2 = 16$             | $y^2 + 8y + 16$           | $(y+4)^2$                        |
| $x^2 + 12x$ | $\left(\frac{1}{2}\cdot 12\right)^2 = 36$            | $x^2 + 12x + 36$          | $(x+6)^2$                        |
| $a^2 - 20a$ | $\left(\frac{1}{2}\cdot(-20)\right)^2 = 100$         | $a^2 - 20a + 100$         | $(a-10)^2$                       |
| $p^2 - 5p$  | $\left(\frac{1}{2}\cdot(-5)\right)^2 = \frac{25}{4}$ | $p^2 - 5p + \frac{25}{4}$ | $\left(p - \frac{5}{2}\right)^2$ |


![[Pasted image 20260511031629.png|left]]Are you wondering why we call making an expression a perfect square “completing the square”? Look at the square in the Figure. Its area is $(y+4)^2$ . The yellow area is $y^2$ and each orange area is $4y$ (for a total area of $8y$). The sum of these areas is $y^2+8y$ . To complete the square, we need to add the area of the green region:
$4 \cdot 4 = 16$. As a result, $y^2 + 8y + 16 = (y + 4)^2$.






---
## ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. A23 - A29)