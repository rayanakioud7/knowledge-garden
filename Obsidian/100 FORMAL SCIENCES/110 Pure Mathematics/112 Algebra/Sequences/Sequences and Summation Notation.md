Date: 2026-06-22
Tags: [[Mathematics]], [[Algebra]]

---

## Sequences and Summation Notation

### Definition of a Sequence

> [!info] Definition
> A **sequence** is a function $a$ whose domain is the set of natural numbers $\{1, 2, 3, \dots\}$. The range values are called the **terms** of the sequence.
> 
> *   **Notation:** We write $a_n$ instead of $a(n)$.
> *   **Terms:** $a_1, a_2, a_3, \dots, a_n, \dots$
>     *   $a_1$: First term
>     *   $a_n$: $n$th term (General term)

![[Pasted image 20260623125242.png|center]]

---

### Describing Sequences
Sequences can be defined in two main ways:

1.  **Explicit Formula:** Defines $a_n$ directly in terms of $n$.
    *   Example: $a_n = 5n$ (Terms: $5, 10, 15, 20, \dots$)
    *   Example: $a_n = 2n$ (Even numbers: $2, 4, 6, 8, \dots$)

2.  **Recursive Formula:** Defines $a_n$ in terms of the previous term $a_{n-1}$.
    *   Example: $a_n = a_{n-1} + 5$ (Start with $a_1 = 5$)

---

> [!example] Example 1: Finding the Terms of a Sequence
> Find the first five terms and the 100th term for the following formulas.
>
> | Formula ($n$th Term) | First Five Terms ($n=1, 2, 3, 4, 5$) | 100th Term ($n=100$) |
> | :--- | :--- | :--- |
> | **(a)** $a_n = 2n - 1$ | $1, 3, 5, 7, 9$ | $199$ |
> | **(b)** $c_n = n^2 - 1$ | $0, 3, 8, 15, 24$ | $9999$ |
> | **(c)** $t_n = \frac{n}{n+1}$ | $\frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}$ | $\frac{100}{101}$ |
> | **(d)** $r_n = \frac{(-1)^n}{2^n}$ | $-\frac{1}{2}, \frac{1}{4}, -\frac{1}{8}, \frac{1}{16}, -\frac{1}{32}$ | $\frac{1}{2^{100}}$ |

---
### Graphing Sequences

> [!info] Graphical Representation
> A **sequence** is a function whose domain is the set of natural numbers ($\mathbb{N}$). Its graph in the Cartesian plane consists of **isolated points** that are *not* connected.

#### Sequence Behaviors

* **Alternating Sign Effect:** The presence of $(-1)^n$ or $(-1)^{n+1}$ in the sequence's formula causes successive terms to alternate between negative and positive values.

| Sequence        | Terms                                                                                                       | Visual Pattern                       |
| :-------------- | :---------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| **Decreasing**  | $1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \frac{1}{5}, \frac{1}{6}, \dots, \frac{1}{n}, \dots$             | ![[Pasted image 20260623132018.png]] |
| **Alternating** | $1, -\frac{1}{2}, \frac{1}{3}, -\frac{1}{4}, \frac{1}{5}, -\frac{1}{6}, \dots, \frac{(-1)^{n+1}}{n}, \dots$ | ![[Pasted image 20260623132042.png]] |

---

> [!example] Example 2: Finding the $nth$ Term of a Sequence
> 
> Find the $nth$ term of a sequence whose first several terms are given.
> 
> **(a)** $\frac{1}{2}, \frac{3}{4}, \frac{5}{6}, \frac{7}{8}, \dots$
> - **Pattern Recognition:** 
> - Numerators are odd numbers $\implies 2n - 1$
>   - Denominators are even numbers $\implies 2n$
> - **Formula:**
>   $$a_n = \frac{2n - 1}{2n}$$
> 
> **(b)** $-2, 4, -8, 16, -32, \dots$
> - **Pattern Recognition:** 
> - Magnitudes are powers of 2 $\implies 2^n$
>   - Signs alternate starting with negative at $n=1$ $\implies (-1)^n$
> - **Formula:**
>   $$a_n = (-1)^n 2^n$$

---

## The [[Fibonacci]] Sequence

> [!info] Definition
> The **Fibonacci sequence** is a sequence defined recursively where each term is the sum of the two preceding terms. It is named after the 13th-century Italian mathematician who used it to model a population growth problem regarding the breeding of rabbits.

### Mathematical Formulation

$$F_1 = 1, \quad F_2 = 1$$
$$F_n = F_{n-1} + F_{n-2} \quad \text{for } n \ge 3$$

---

> [!example] Example 4: Finding the First 11 Terms
> 
> Find the first 11 terms of the sequence defined recursively by $F_1 = 1$, $F_2 = 1$, and $F_n = F_{n-1} + F_{n-2}$.
> 
> **Step-by-Step Calculation:**
> - $F_1 = 1$
> - $F_2 = 1$
> - $F_3 = F_2 + F_1 = 1 + 1 = 2$
> - $F_4 = F_3 + F_2 = 2 + 1 = 3$
> - $F_5 = F_4 + F_3 = 3 + 2 = 5$
> - $F_6 = F_5 + F_4 = 5 + 3 = 8$
> - $F_7 = F_6 + F_5 = 8 + 5 = 13$
> - $F_8 = F_7 + F_6 = 13 + 8 = 21$
> - $F_9 = F_8 + F_7 = 21 + 13 = 34$
> - $F_{10} = F_9 + F_8 = 34 + 21 = 55$
> - $F_{11} = F_{10} + F_9 = 55 + 34 = 89$
> 
> **Sequence:** 
> > $$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, \dots$$

---
## The Partial Sums of a Sequence

> [!info] Definition
> For a given sequence $a_1, a_2, a_3, a_4, \dots, a_n, \dots$, the **partial sums** are the cumulative sums of the terms up to a given index $n$. 
> - $S_1$ is the **first partial sum**
> - $S_2$ is the **second partial sum**
> - $S_n$ is the **$nth$ partial sum**
> 
> The structural progression $S_1, S_2, S_3, \dots, S_n, \dots$ forms the **sequence of partial sums**.

### Mathematical Formulation

$$\begin{aligned}
S_1 &= a_1 \\
S_2 &= a_1 + a_2 \\
S_3 &= a_1 + a_2 + a_3 \\
S_4 &= a_1 + a_2 + a_3 + a_4 \\
&\vdots \\
S_n &= a_1 + a_2 + a_3 + \dots + a_n
\end{aligned}$$

---

> [!example] Example 5: Finding Partial Sums (Geometric Behavior)
> 
> Find the first four partial sums and the $nth$ partial sum of the sequence given by $a_n = \frac{1}{2^n}$.
> 
> **Sequence Terms:** $\frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \dots$
> 
> **Step-by-Step Calculation:**
> - $S_1 = \frac{1}{2} = \frac{1}{2}$
> - $S_2 = \frac{1}{2} + \frac{1}{4} = \frac{3}{4}$
> - $S_3 = \frac{1}{2} + \frac{1}{4} + \frac{1}{8} = \frac{7}{8}$
> - $S_4 = \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} = \frac{15}{16}$
> 
> **Pattern Recognition:** 
> > For each $S_n$, the denominator is $2^n$ and the numerator is $2^n - 1$.
> 
> **General Formula ($S_n$):**
> $$S_n = \frac{2^n - 1}{2^n} = 1 - \frac{1}{2^n}$$
> 
>
> ![[Pasted image 20260623144002.png|center]]


---

> [!example] Example 6: Finding Partial Sums (Telescoping Behavior)
> 
> Find the first four partial sums and the $nth$ partial sum of the sequence given by $a_n = \frac{1}{n} - \frac{1}{n+1}$.
> 
> **Step-by-Step Calculation:**
> - $S_1 = \left(1 - \frac{1}{2}\right) = 1 - \frac{1}{2}$
> - $S_2 = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) = 1 - \frac{1}{3}$
> - $S_3 = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) = 1 - \frac{1}{4}$
> - $S_4 = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \left(\frac{1}{4} - \frac{1}{5}\right) = 1 - \frac{1}{5}$
> 
> **Pattern Recognition:**
> Intermediate terms cancel out systematically (telescoping properties), leaving only the first and last components.
> 
> **General Formula ($S_n$):**
> $$S_n = 1 - \frac{1}{n + 1}$$


---

### Applications in Nature

The sequence governs numerous biological growth patterns and natural phenomena.

| Phenomenon         | Description                                                                                  | Visual Representation                |
| :----------------- | :------------------------------------------------------------------------------------------- | :----------------------------------- |
| **Tree Branching** | The accumulation of branches at horizontal structural tiers follows the sequence increments. | ![[Pasted image 20260623141731.png]] |
| **Seed Patterns**  | Spiral seed arrangements match adjacent Fibonacci tracking dimensions.                       | ![[Pasted image 20260623141748.png]] |

---
## Sigma Notation

> [!info] Definition
> For a given sequence $a_1, a_2, a_3, a_4, \dots$, the sum of its first $n$ terms can be written compactly using **summation notation** or **sigma notation** (derived from the capital Greek letter $\Sigma$, corresponding to "S" for sum).
> 
> $$\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + a_4 + \dots + a_n$$
> 
> Where:
> - $k$ is the **index of summation** (or **summation variable**).
> - $1$ is the lower limit (where to start).
> - $n$ is the upper limit (where to end).

![[Pasted image 20260623142645.png|center]]

---

> [!example] Example 7: Evaluating Sums in Sigma Notation
> 
> Find each sum:
> 
> **(a)** $\sum_{k=1}^{5} k^2$
> $$\sum_{k=1}^{5} k^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$$
> 
> **(b)** $\sum_{j=3}^{5} \frac{1}{j}$
> $$\sum_{j=3}^{5} \frac{1}{j} = \frac{1}{3} + \frac{1}{4} + \frac{1}{5} = \frac{20 + 15 + 12}{60} = \frac{47}{60}$$
> 
> **(c)** $\sum_{k=5}^{10} k$
> $$\sum_{k=5}^{10} k = 5 + 6 + 7 + 8 + 9 + 10 = 45$$
> 
> **(d)** $\sum_{i=1}^{6} 2$
> $$\sum_{i=1}^{6} 2 = 2 + 2 + 2 + 2 + 2 + 2 = 12$$

---

> [!example] Example 8: Writing Sums in Sigma Notation
> 
> Write each sum using sigma notation:
> 
> **(a)** $1^3 + 2^3 + 3^3 + 4^3 + 5^3 + 6^3 + 7^3$
> - **Pattern:** Base values increase by 1 from 1 to 7, exponent remains fixed at 3.
> - **Result:** $$\sum_{k=1}^{7} k^3$$
> 
> **(b)** $\sqrt{3} + \sqrt{4} + \sqrt{5} + \dots + \sqrt{77}$
> Summation representations are **not unique**. Alternate index configurations include:
> - Base index ($k=3$): $$\sum_{k=3}^{77} \sqrt{k}$$
> - Shifted index ($k=0$): $$\sum_{k=0}^{74} \sqrt{k+3}$$
> - Shifted index ($k=1$): $$\sum_{k=1}^{75} \sqrt{k+2}$$

---

## Properties of Sums

> [!info] Algebraic Properties
> Let $a_1, a_2, a_3, \dots$ and $b_1, b_2, b_3, \dots$ be sequences. For any positive integer $n$ and any real number $c$, the following properties hold:
> 
> 1. **Linearity (Addition):** $$\sum_{k=1}^{n} (a_k + b_k) = \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k$$
> 2. **Linearity (Subtraction):** $$\sum_{k=1}^{n} (a_k - b_k) = \sum_{k=1}^{n} a_k - \sum_{k=1}^{n} b_k$$
> 3. **Constant Factorization:** $$\sum_{k=1}^{n} c a_k = c \left( \sum_{k=1}^{n} a_k \right)$$

### Mathematical Proofs

> [!info] Proof of Property 1 (Distributive/Commutative Property)
> Expand the left-hand side of the equation:
> $$\sum_{k=1}^{n} (a_k + b_k) = (a_1 + b_1) + (a_2 + b_2) + (a_3 + b_3) + \dots + (a_n + b_n)$$
> Rearrange the terms using the commutative and associative properties of real numbers:
> $$\sum_{k=1}^{n} (a_k + b_k) = (a_1 + a_2 + a_3 + \dots + a_n) + (b_1 + b_2 + b_3 + \dots + b_n)$$
> Rewrite each grouped expression using sigma notation:
> $$\sum_{k=1}^{n} (a_k + b_k) = \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k \quad \blacksquare$$

> [!info] Proof of Property 3 (Distributive Property)
> Expand the expression by distributing the constant factor $c$:
> $$\sum_{k=1}^{n} c a_k = c a_1 + c a_2 + c a_3 + \dots + c a_n$$
> Factor out the common scalar value $c$:
> $$\sum_{k=1}^{n} c a_k = c(a_1 + a_2 + a_3 + \dots + a_n) = c \left( \sum_{k=1}^{n} a_k \right) \quad \blacksquare$$

---
## Sums of Powers

> [!info] Key Summation Formulas
> Below are the standard closed-form formulas for the sums of the first $n$ positive integers raised to successive whole-number powers:
> 
> 0. **Sum of Constants:**
>    $$\sum_{k=1}^{n} 1 = n$$
> 
> 1. **Sum of First $n$ Integers (Linear):**
>    $$\sum_{k=1}^{n} k = \frac{n(n + 1)}{2}$$
> 
> 2. **Sum of Squares (Quadratic):**
>    $$\sum_{k=1}^{n} k^2 = \frac{n(n + 1)(2n + 1)}{6}$$
> 
> 3. **Sum of Cubes (Cubic):**
>    $$\sum_{k=1}^{n} k^3 = \frac{n^2(n + 1)^2}{4} = \left[ \frac{n(n+1)}{2} \right]^2$$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 810)
