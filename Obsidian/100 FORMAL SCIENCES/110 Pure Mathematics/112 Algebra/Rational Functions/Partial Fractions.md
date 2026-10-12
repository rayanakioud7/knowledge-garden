Date: 2026-06-10
Tags: [[Algebra]], [[Mathematics]], [[Functions]]

---
## Partial Fractions

> [!info] Concept
> **Partial Fraction Decomposition** is the reverse of adding fractions.
> - **Combining**: $\frac{1}{x-1} + \frac{1}{2x+1} = \frac{3x}{2x^2-x-1}$
> - **Decomposing**: $\frac{3x}{2x^2-x-1} = \frac{1}{x-1} + \frac{1}{2x+1}$
>
> Given a rational function $r(x) = \frac{P(x)}{Q(x)}$ where $\deg(P) < \deg(Q)$, we factor $Q(x)$ completely into linear and irreducible quadratic factors to express $r(x)$ as a sum of simpler fractions.

---

### Case 1: Distinct Linear Factors

> [!info] Rule
> If the denominator $Q(x)$ is a product of distinct linear factors:
> $$ Q(x) = (a_1x + b_1)(a_2x + b_2)\cdots(a_nx + b_n) $$
> Then the decomposition takes the form:
> $$ \frac{P(x)}{Q(x)} = \frac{A_1}{a_1x + b_1} + \frac{A_2}{a_2x + b_2} + \cdots + \frac{A_n}{a_nx + b_n} $$

> [!example] Example 1: Distinct Linear Factors
> Find the partial fraction decomposition of $\frac{5x + 7}{x^3 + 2x^2 - x - 2}$.
>
> **1. Factor the Denominator**:
> $$
> \begin{aligned}
> x^3 + 2x^2 - x - 2 &= x^2(x+2) - 1(x+2) \\
> &= (x^2-1)(x+2) \\
> &= (x-1)(x+1)(x+2)
> \end{aligned}
> $$
>
> **2. Set up Decomposition**:
> $$ \frac{5x + 7}{(x-1)(x+1)(x+2)} = \frac{A}{x-1} + \frac{B}{x+1} + \frac{C}{x+2} $$
>
> **3. Solve for Constants**:
> Multiply by the common denominator $(x-1)(x+1)(x+2)$:
> $$ 5x + 7 = A(x+1)(x+2) + B(x-1)(x+2) + C(x-1)(x+1) $$
> Expand and group like terms:
> $$
> \begin{aligned}
> 5x + 7 &= A(x^2+3x+2) + B(x^2+x-2) + C(x^2-1) \\
> &= (A+B+C)x^2 + (3A+B)x + (2A-2B-C)
> \end{aligned}
> $$
> Equate coefficients (note that the LHS has $0x^2$):
> $$
> \begin{cases}
> A + B + C = 0 & (\text{coeff of } x^2) \\
> 3A + B = 5 & (\text{coeff of } x) \\
> 2A - 2B - C = 7 & (\text{constant})
> \end{cases}
> $$
> Solving this system (e.g., via Gaussian elimination) yields $A=2, B=-1, C=-1$.
>
> **Final Answer**:
> $$ \frac{2}{x-1} - \frac{1}{x+1} - \frac{1}{x+2} $$

---

### Case 2: Repeated Linear Factors

> [!info] Rule
> If $Q(x)$ contains a linear factor $(ax+b)$ repeated $k$ times, i.e., $(ax+b)^k$, the decomposition must include $k$ terms:
> $$ \frac{A_1}{ax+b} + \frac{A_2}{(ax+b)^2} + \cdots + \frac{A_k}{(ax+b)^k} $$

> [!example] Example 2: Repeated Linear Factors
> Find the decomposition of $\frac{x^2 + 1}{x(x-1)^3}$.
>
> **1. Set up Decomposition**:
> The factor $x$ appears once; $(x-1)$ appears 3 times.
> $$ \frac{x^2 + 1}{x(x-1)^3} = \frac{A}{x} + \frac{B}{x-1} + \frac{C}{(x-1)^2} + \frac{D}{(x-1)^3} $$
>
> **2. Solve for Constants**:
> Multiply by $x(x-1)^3$:
> $$ x^2 + 1 = A(x-1)^3 + Bx(x-1)^2 + Cx(x-1) + Dx $$
> Expand and group terms:
> $$
> \begin{aligned}
> x^2 + 1 &= A(x^3-3x^2+3x-1) + B(x^3-2x^2+x) + C(x^2-x) + Dx \\
> &= (A+B)x^3 + (-3A-2B+C)x^2 + (3A+B-C+D)x - A
> \end{aligned}
> $$
> Equate coefficients (LHS is $0x^3 + 1x^2 + 0x + 1$):
> $$
> \begin{cases}
> A + B = 0 \\
> -3A - 2B + C = 1 \\
> 3A + B - C + D = 0 \\
> -A = 1
> \end{cases}
> $$
> Solving the system:
> - From eq 4: $A = -1$.
> - From eq 1: $-1 + B = 0 \implies B = 1$.
> - From eq 2: $-3(-1) - 2(1) + C = 1 \implies 3 - 2 + C = 1 \implies C = 0$.
> - From eq 3: $3(-1) + 1 - 0 + D = 0 \implies -2 + D = 0 \implies D = 2$.
>
> **Final Answer**:
> $$ -\frac{1}{x} + \frac{1}{x-1} + \frac{2}{(x-1)^3} $$

---
## Irreducible Quadratic Factors

> [!info] Case 3: The Denominator Has Irreducible Quadratic Factors
> If the denominator $Q(x)$ contains an irreducible quadratic factor $ax^2 + bx + c$ (one that cannot be factored into real linear factors), the partial fraction decomposition includes a term with a **linear numerator**:
> $$ \frac{Ax + B}{ax^2 + bx + c} $$

---

> [!example] Example 3: Distinct Quadratic Factors
> Find the partial fraction decomposition of $\frac{2x^2 - x + 4}{x^3 + 4x}$.
>
> **1. Factor the Denominator**:
> $$ x^3 + 4x = x(x^2 + 4) $$
> Note that $x^2 + 4$ is irreducible over the real numbers.
>
> **2. Set up the Decomposition**:
> - For the linear factor $x$, use $\frac{A}{x}$.
> - For the quadratic factor $x^2 + 4$, use $\frac{Bx + C}{x^2 + 4}$.
>
> $$ \frac{2x^2 - x + 4}{x(x^2 + 4)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 4} $$
>
> **3. Solve for Constants**:
> Multiply both sides by the common denominator $x(x^2 + 4)$:
> $$ 2x^2 - x + 4 = A(x^2 + 4) + (Bx + C)x $$
>
> Expand and group like terms:
> $$
> \begin{aligned}
> 2x^2 - x + 4 &= Ax^2 + 4A + Bx^2 + Cx \\
> 2x^2 - x + 4 &= (A + B)x^2 + Cx + 4A
> \end{aligned}
> $$
>
> Equate coefficients:
> $$
> \begin{cases}
> A + B = 2 & (\text{coefficients of } x^2) \\
> C = -1 & (\text{coefficients of } x) \\
> 4A = 4 & (\text{constant terms})
> \end{cases}
> $$
>
> **4. Solve the System**:
> - From $4A = 4$, we get **$A = 1$**.
> - From $C = -1$, we get **$C = -1$**.
> - Substitute $A=1$ into the first equation: $1 + B = 2 \implies$ **$B = 1$**.
>
> **Final Answer**:
> $$ \frac{1}{x} + \frac{x - 1}{x^2 + 4} $$

---
## Repeated Irreducible Quadratic Factors

> [!info] Case 4: The Denominator Has a Repeated Irreducible Quadratic Factor
> Suppose the complete factorization of $Q(x)$ contains the factor $(ax^2 + bx + c)^k$, where $ax^2 + bx + c$ cannot be factored further. Then, the partial fraction decomposition of $P(x)/Q(x)$ will have the terms:
> $$ \frac{A_1x + B_1}{ax^2 + bx + c} + \frac{A_2x + B_2}{(ax^2 + bx + c)^2} + \cdots + \frac{A_kx + B_k}{(ax^2 + bx + c)^k} $$

---

> [!example] Example 4: Repeated Quadratic Factors
> Write the form of the partial fraction decomposition of:
> $$ \frac{x^5 - 3x^2 + 12x - 1}{x^3(x^2 + x + 1)(x^2 + 2)^3} $$
>
> **Solution**
> Identify the factors in the denominator:
> -   $x^3$: Linear factor $x$ repeated 3 times.
> -   $(x^2 + x + 1)$: Irreducible quadratic factor (distinct).
> -   $(x^2 + 2)^3$: Irreducible quadratic factor repeated 3 times.
>
> The decomposition form is:
> $$
> \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x^3} + \frac{Dx + E}{x^2 + x + 1} + \frac{Fx + G}{x^2 + 2} + \frac{Hx + I}{(x^2 + 2)^2} + \frac{Jx + K}{(x^2 + 2)^3}
> $$
>
> *Note: Finding the values for A through K would require solving a system of 11 linear equations.*

---

### Important Prerequisite: Degree of Numerator vs. Denominator

The techniques described in this section apply **only** to rational functions $P(x)/Q(x)$ where the **degree of $P$ is less than the degree of $Q$**.

If $\deg(P) \ge \deg(Q)$, you must first use **long division** to divide $Q$ into $P$.

---

> [!example] Example 5: Using Long Division to Prepare for Partial Fractions
> Find the partial fraction decomposition of:
> $$ \frac{2x^4 + 4x^3 - 2x^2 + x + 7}{x^3 + 2x^2 - x - 2} $$
>
> **Solution**
> Since the degree of the numerator (4) is larger than the degree of the denominator (3), we use long division.
>
> **Long Division**:
> $$ \frac{2x^4 + 4x^3 - 2x^2 + x + 7}{x^3 + 2x^2 - x - 2} = 2x + \frac{5x + 7}{x^3 + 2x^2 - x - 2} $$
>
> Now, decompose the remainder term $\frac{5x + 7}{x^3 + 2x^2 - x - 2}$.
> From Example 1, we know the denominator factors as $(x-1)(x+1)(x+2)$.
>
> $$ \frac{5x + 7}{(x-1)(x+1)(x+2)} = \frac{2}{x-1} + \frac{-1}{x+1} + \frac{-1}{x+2} $$
>
> **Final Result**:
> Combine the quotient from the division with the decomposed remainder:
> $$ \frac{2x^4 + 4x^3 - 2x^2 + x + 7}{x^3 + 2x^2 - x - 2} = 2x + \frac{2}{x-1} - \frac{1}{x+1} - \frac{1}{x+2} $$


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 729)