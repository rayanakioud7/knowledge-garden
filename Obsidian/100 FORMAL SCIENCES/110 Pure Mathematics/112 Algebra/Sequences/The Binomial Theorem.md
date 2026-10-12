Date: 2026-06-23
Tags: [[Mathematics]], [[Algebra]]

---
## The Binomial Theorem

> [!info] Definition of a Binomial
> An expression of the form $a + b$ is a **binomial**. Raising $a + b$ to a natural number power $n$ results in an expansion following specific structural patterns.

### Patterns in the Expansion of $(a + b)^n$
1. **Term Count:** There are $n + 1$ total terms.
2. **First/Last Terms:** The first term is $a^n$; the last term is $b^n$.
3. **Exponent Behavior:** As you move through the terms:
   - Exponents of $a$ **decrease** by $1$ ($a^n, a^{n-1}, \dots, a^0$).
   - Exponents of $b$ **increase** by $1$ ($b^0, b^1, \dots, b^n$).
4. **Exponent Sum:** The sum of exponents of $a$ and $b$ in each term is always $n$.

![[Pasted image 20260623223042.png|center]]

---

## Pascal's Triangle

> [!info] Key Property
> **Pascal's Triangle** is a triangular array of binomial coefficients. Every entry (excluding the $1$s on the outer edges) is the **sum of the two entries diagonally above it**.

![[Pasted image 20260623223109.png|center]]

---

> [!example] Example 1: Expanding a Binomial
> 
> **Expand $(a + b)^7$:**
> 1. Use the pattern of exponents for $a^7b^0$ through $a^0b^7$.
> 2. Use the coefficients from the $7$th row of Pascal's Triangle ($1, 7, 21, 35, 35, 21, 7, 1$).
>    
>    ![[Pasted image 20260623223137.png|center]]
> 
> **Result:**
> $$(a + b)^7 = a^7 + 7a^6b + 21a^5b^2 + 35a^4b^3 + 35a^3b^4 + 21a^2b^5 + 7ab^6 + b^7$$

---

> [!example] Example 2: Binomial Expansion with Substitution
> 
> **Expand $(2 - 3x)^5$:**
> 1. Start with the expansion of $(a + b)^5$ using coefficients ($1, 5, 10, 10, 5, 1$):
>    $$(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$
> 2. Substitute $a = 2$ and $b = -3x$:
>    $$(2 - 3x)^5 = (2)^5 + 5(2)^4(-3x) + 10(2)^3(-3x)^2 + 10(2)^2(-3x)^3 + 5(2)(-3x)^4 + (-3x)^5$$
> 3. Simplify:
>    $$= 32 - 240x + 720x^2 - 1080x^3 + 810x^4 - 243x^5$$

---

## The Binomial Coefficients

### Factorial Notation
> [!info] Definition
> For any natural number $n$, **$n$ factorial** ($n!$) is the product of the first $n$ natural numbers.
> $$n! = 1 \cdot 2 \cdot 3 \cdot \dots \cdot (n - 1) \cdot n$$
> 
> **Special Case Definition:**
> $$0! = 1$$

---

### The Binomial Coefficient Formula

> [!info] Algebraic Definition
> Let $n$ and $r$ be nonnegative integers with $r \le n$. The **binomial coefficient** is denoted by $\binom{n}{r}$ and defined by:
> $$\binom{n}{r} = \frac{n!}{r!(n - r)!}$$

---

> [!example] Example 3: Calculating Binomial Coefficients
> 
> **(a)** $\binom{9}{4} = \frac{9!}{4!(9 - 4)!} = \frac{9!}{4! \, 5!} = \frac{1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \cdot 6 \cdot 7 \cdot 8 \cdot 9}{(1 \cdot 2 \cdot 3 \cdot 4)(1 \cdot 2 \cdot 3 \cdot 4 \cdot 5)} = \frac{6 \cdot 7 \cdot 8 \cdot 9}{1 \cdot 2 \cdot 3 \cdot 4} = 126$
> 
> **(b)** $\binom{100}{3} = \frac{100!}{3!(100 - 3)!} = \frac{100!}{3! \, 97!} = \frac{98 \cdot 99 \cdot 100}{1 \cdot 2 \cdot 3} = 161,700$
> 
> **(c)** $\binom{100}{97} = \frac{100!}{97!(100 - 97)!} = \frac{100!}{97! \, 3!} = \frac{98 \cdot 99 \cdot 100}{1 \cdot 2 \cdot 3} = 161,700$

---

## Combinatorial Properties

### 1. Symmetry Relation
Binomial coefficients are symmetric relative to the center of each row:
$$\binom{n}{r} = \binom{n}{n - r}$$

### 2. Pascal's Triangle Representation
Pascal's triangle can be written explicitly using binomial coefficients:

$$\begin{gathered}
\binom{0}{0} \\
\binom{1}{0} \quad \binom{1}{1} \\
\binom{2}{0} \quad \binom{2}{1} \quad \binom{2}{2} \\
\binom{3}{0} \quad \binom{3}{1} \quad \binom{3}{2} \quad \binom{3}{3} \\
\binom{4}{0} \quad \binom{4}{1} \quad \binom{4}{2} \quad \binom{4}{3} \quad \binom{4}{4} \\
\binom{5}{0} \quad \binom{5}{1} \quad \binom{5}{2} \binom{5}{3} \quad \binom{5}{4} \quad \binom{5}{5}
\end{gathered}$$

### 3. Key Recursive Property (Pascal's Identity)
> [!info] Theorem
> For any nonnegative integers $r$ and $k$ with $r \le k$:
> $$\binom{k}{r - 1} + \binom{k}{r} = \binom{k + 1}{r}$$
> 
> *Interpretation: The sum of two adjacent entries in the $k$-th row equals the entry directly below them in the $(k + 1)$-st row.*

---
## The Binomial Theorem

> [!info] The Binomial Theorem
> For any natural number $n$:
> $$(a + b)^n = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \dots + \binom{n}{n-1}ab^{n-1} + \binom{n}{n}b^n$$
> Or in summation notation: $$(a+b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r}b^r$$

---

> [!example] Example 4: Expanding $(x + y)^4$
> $$\begin{aligned}
> (x + y)^4 &= \binom{4}{0}x^4 + \binom{4}{1}x^3y + \binom{4}{2}x^2y^2 + \binom{4}{3}xy^3 + \binom{4}{4}y^4 \\
> &= 1x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + 1y^4
> \end{aligned}$$

---

> [!example] Example 5: Expanding with Fractional Exponents & Negative Terms
> Expand $(\sqrt{x} - 1)^8$.
> 
> **1. Expand $(a+b)^8$ with Pascal coefficients:**
> $$(a+b)^8 = a^8 + 8a^7b + 28a^6b^2 + 56a^5b^3 + 70a^4b^4 + 56a^3b^5 + 28a^2b^6 + 8ab^7 + b^8$$
> 
> **2. Substitute $a = x^{1/2}$ and $b = -1$:**
> $$\begin{aligned}
> (\sqrt{x} - 1)^8 = &(x^{1/2})^8 + 8(x^{1/2})^7(-1) + 28(x^{1/2})^6(-1)^2 + 56(x^{1/2})^5(-1)^3 \\
> &+ 70(x^{1/2})^4(-1)^4 + 56(x^{1/2})^3(-1)^5 + 28(x^{1/2})^2(-1)^6 \\
> &+ 8(x^{1/2})(-1)^7 + (-1)^8
> \end{aligned}$$
> 
> **3. Simplify indices:**
> $$(\sqrt{x} - 1)^8 = x^4 - 8x^{7/2} + 28x^3 - 56x^{5/2} + 70x^2 - 56x^{3/2} + 28x - 8x^{1/2} + 1$$

---

## Finding a General Term

> [!info] General Term Formula
> The term containing $a^{n-r}b^r$ in the expansion of $(a + b)^n$ is uniquely determined by:
> $$\binom{n}{r}a^{n-r}b^r$$
> *Note: By symmetry, the term containing $a^r$ can also be written as $\binom{n}{r}a^rb^{n-r}$.*

---

> [!example] Example 6: Finding a Explicit Single Term
> Find the term containing $x^5$ in the expansion of $(2x + y)^{20}$.
> 
> **Solution:**
> - Set $a = 2x$, $b = y$, $n = 20$. 
> - To yield $x^5$, the power of $a$ must be $5$, meaning we choose $n-r = 5 \implies r = 15$.
> $$\binom{20}{15}a^5b^{15} = \frac{20!}{5! \, 15!}(2x)^5(y)^{15} = 15504 \cdot 32x^5y^{15} = 496,128x^5y^{15}$$

---

> [!example] Example 7: Finding a Term via Index Equations
> Find the coefficient of $x^8$ in the expansion of $\left(x^2 + \frac{1}{x}\right)^{10}$.
> 
> **Solution:**
> 1. Write the general term with $a = x^2$, $b = x^{-1}$, and $n = 10$:
>    $$\binom{10}{r}(x^2)^{10-r}\left(x^{-1}\right)^r = \binom{10}{r}x^{20-2r}x^{-r} = \binom{10}{r}x^{20-3r}$$
> 2. Set the exponent equal to the target power ($8$) to find $r$:
>    $$20 - 3r = 8 \implies 12 = 3r \implies r = 4$$
>    *(Note: The textbook defines $b=x^{-1}$ with power $10-r$, yielding $3r-10=8 \implies r=6$. Because $\binom{10}{4}=\binom{10}{6}$, both strategies match).*
> 3. Compute the coefficient using $r=4$ (or $6$):
>    $$\binom{10}{6} = \frac{10!}{6! \, 4!} = 210$$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 810)