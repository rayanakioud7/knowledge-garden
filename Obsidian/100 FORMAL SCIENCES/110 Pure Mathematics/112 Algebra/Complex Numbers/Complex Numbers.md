Date: 2026-05-12
Tags: [[Mathematics]], [[Algebra]]

---

# 1. Complex Numbers

Real numbers cannot satisfy $x^2 = -1$. We introduce the **imaginary unit** to solve this.

> [!info] The Imaginary Unit
> The **imaginary unit**, denoted by $i$, is the number whose square is $-1$.
> $$i^2 = -1$$

> [!info] Complex Numbers
> **Complex numbers** are numbers of the form: $$a + bi$$ where $a, b \in \mathbb{R}$.
> - $a$ is the **real part**.
> - $b$ is the **imaginary part**.

## Standard Form

Written as $a + bi$:
- $3 + (-2)i$ is written as $3 - 2i$.
- $a + 0i$ is written as $a$ (Real numbers $\subset$ Complex numbers).
- $0 + bi$ is written as $bi$ (**pure imaginary number**).

> [!example] Example 1: Complex Numbers  
> Examples of complex numbers $a + bi$:

| Complex Number | Real Part | Imaginary Part |
|----------------|-----------|----------------|
| $3 + 4i$       | $3$       | $4$            |
| $\frac{1}{2} - \frac{2}{3}i$ | $\frac{1}{2}$ | $-\frac{2}{3}$ |
| $6i$           | $0$       | $6$            |
| $-7$           | $-7$      | $0$            |

*Note: Pure imaginary numbers have real part 0; real numbers have imaginary part 0.*

---
## 1 Add, Subtract, Multiply, and Divide Complex Numbers

Complex numbers follow the familiar rules of algebra for real numbers.

> [!info] Equality of Complex Numbers
> $$a + bi = c + di \quad \text{if and only if } a = c \text{ and } b = d \tag{1}$$

> [!info] Sum of Complex Numbers
> $$(a + bi) + (c + di) = (a + c) + (b + d)i \tag{2}$$

> [!info] Difference of Complex Numbers
> $$(a + bi) - (c + di) = (a - c) + (b - d)i \tag{3}$$

### EXAMPLE 1 Adding and Subtracting Complex Numbers

**(a)** $(3 + 5i) + (-2 + 3i) = [3 + (-2)] + (5 + 3)i = 1 + 8i$

**(b)** $(6 + 4i) - (3 + 6i) = (6 - 3) + (4 - 6)i = 3 + (-2)i = 3 - 2i$

---

> [!info] Product of Complex Numbers
> $$(a + bi) \cdot (c + di) = (ac - bd) + (ad + bc)i \tag{4}$$

### EXAMPLE 2 Multiplying Complex Numbers

$$(5 + 3i) \cdot (2 + 7i) = 5 \cdot (2 + 7i) + 3i(2 + 7i) = 10 + 35i + 6i + 21i^2$$

Using the Distributive Property and $i^2 = -1$:
$$\begin{aligned}
&= 10 + 41i + 21(-1) \\
&= -11 + 41i
\end{aligned}$$

**Examples:**
- $(2i)(2i) = 4i^2 = -4$
- $(2 + i)(1 - i) = 2 - 2i + i - i^2 = 3 - i$

---
## Conjugate

> [!info] Definition: Conjugate
> If $z = a + bi$ is a complex number, then its **conjugate**, denoted by $\overline{z}$, is defined as
> $$\overline{z} = \overline{a + bi} = a - bi$$


> Examples: $\overline{2 + 3i} = 2 - 3i$ and $\overline{-6 - 2i} = -6 + 2i$

### EXAMPLE 3 Multiplying a Complex Number by Its Conjugate

Find the product of $z = 3 + 4i$ and its conjugate $\overline{z}$.

Since $\overline{z} = 3 - 4i$:
$$z\overline{z} = (3 + 4i)(3 - 4i) = 9 - 12i + 12i - 16i^2 = 9 + 16 = 25$$
---
## Dividing Complex Numbers

To simplify $\frac{a + bi}{c + di}$, multiply numerator and denominator by the **complex conjugate** of the denominator: $c - di$.

$$
\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}
$$

> [!tip] Don’t memorize the full formula — just remember:  
> Multiply top and bottom by the conjugate of the denominator, then expand normally.

---

> [!example] Example 3: Dividing Complex Numbers  
> Express in form $a + bi$:  
> (a) $\frac{3 + 5i}{1 - 2i}$  
> (b) $\frac{7 + 3i}{4i}$

**Solution**

(a) Conjugate of $1 - 2i$ is $1 + 2i$:

$$
\begin{aligned}
\frac{3 + 5i}{1 - 2i} &= \frac{(3 + 5i)(1 + 2i)}{(1 - 2i)(1 + 2i)} \\
&= \frac{3(1) + 3(2i) + 5i(1) + 5i(2i)}{1^2 + (-2)^2} \\
&= \frac{3 + 6i + 5i + 10i^2}{5} \\
&= \frac{3 + 11i - 10}{5} \quad \leftarrow i^2 = -1 \\
&= \frac{-7 + 11i}{5} = -\frac{7}{5} + \frac{11}{5}i
\end{aligned}
$$

(b) Conjugate of $4i = 0 + 4i$ is $-4i$:

$$
\begin{aligned}
\frac{7 + 3i}{4i} &= \frac{(7 + 3i)(-4i)}{(4i)(-4i)} \\
&= \frac{-28i -12i^2}{-16i^2} \\
&= \frac{-28i + 12}{16} \quad \leftarrow i^2 = -1 \\
&= \frac{12 - 28i}{16} = \frac{3}{4} - \frac{7}{4}i
\end{aligned}
$$

---

> [!info] Theorem
> The product of a complex number and its conjugate is a nonnegative real number. If $z = a + bi$, then
> $$z\overline{z} = a^2 + b^2 \tag{5}$$

**Proof:** If $z = a + bi$, then
$$z\overline{z} = (a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2 \quad \blacksquare$$

## Reciprocal of a Complex Number

> [!NOTE]
> To express $\frac{1}{z}$ in standard form, multiply numerator and denominator by $\overline{z}$:
> 
> $$\frac{1}{a + bi} = \frac{1}{z} \cdot \frac{\overline{z}}{\overline{z}} = \frac{\overline{z}}{z\overline{z}} = \frac{a - bi}{a^2 + b^2} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}i$$

### EXAMPLE 4 Writing the Reciprocal of a Complex Number in Standard Form

Write $\frac{1}{3+4i}$ in standard form $a+bi$; that is, find the reciprocal of $3+4i$.

**Solution**
Multiply the numerator and denominator by the conjugate of $3+4i$, which is $3-4i$.

$$
\frac{1}{3+4i} = \frac{1}{3+4i} \cdot \frac{3-4i}{3-4i} = \frac{3-4i}{9+16} = \frac{3}{25} - \frac{4}{25}i
$$

To express the quotient of two complex numbers in standard form, multiply the numerator and denominator of the quotient by the conjugate of the denominator.

### EXAMPLE 5 Writing the Quotient of Two Complex Numbers in Standard Form

Write each of the following in standard form.
(a) $\dfrac{1+4i}{5-12i}$          (b) $\dfrac{2-3i}{4-3i}$

**Solution**

**(a)**
$$
\begin{aligned}
\frac{1+4i}{5-12i} &= \frac{1+4i}{5-12i} \cdot \frac{5+12i}{5+12i} = \frac{5+12i+20i+48i^2}{25+144} \\
&= \frac{-43+32i}{169} = -\frac{43}{169} + \frac{32}{169}i
\end{aligned}
$$

**(b)**
$$
\begin{aligned}
\frac{2-3i}{4-3i} &= \frac{2-3i}{4-3i} \cdot \frac{4+3i}{4+3i} = \frac{8+6i-12i-9i^2}{16+9} \\
&= \frac{17-6i}{25} = \frac{17}{25} - \frac{6}{25}i
\end{aligned}
$$

## Properties of Conjugates

The conjugate of a complex number has general properties useful for simplification.

> [!info] Theorem: Conjugate of a Real Number
> For a real number $a = a + 0i$, the conjugate is the real number itself.
> $$\overline{a} = a$$

> [!info] Theorem: Properties of Conjugates
> Let $z$ and $w$ be complex numbers.
>
> 1.  **Double Conjugate:** The conjugate of the conjugate is the number itself.
>     $$\overline{(\overline{z})} = z \tag{6}$$
>
> 2.  **Conjugate of a Sum:** The conjugate of the sum equals the sum of the conjugates.
>     $$\overline{z + w} = \overline{z} + \overline{w} \tag{7}$$
>
> 3.  **Conjugate of a Product:** The conjugate of the product equals the product of the conjugates.
>     $$\overline{z \cdot w} = \overline{z} \cdot \overline{w} \tag{8}$$

### EXAMPLE 6 Verifying Properties of Conjugates

Let $z = 2 - 3i$, $w = 1 + 4i$, and $a = 5$. Verify the properties of conjugates.

**Property 1 (Real Number):**
$$\overline{a} = \overline{5} = 5$$

**Property 2 (Double Conjugate):**
$$\overline{(\overline{z})} = \overline{(2 + 3i)} = 2 - 3i=z $$


**Property 3 (Sum):**
$$
\begin{aligned}
\text{LHS: } \overline{z + w} &= \overline{(2 - 3i) + (1 + 4i)} = \overline{3 + i} = 3 - i \\
\text{RHS: } \overline{z} + \overline{w} &= (2 + 3i) + (1 - 4i) = 3 - i
\end{aligned}
$$
$\text{LHS} = \text{RHS} \checkmark$

**Property 4 (Product):**
$$
\begin{aligned}
\text{LHS: } \overline{z \cdot w} &= \overline{(2 - 3i)(1 + 4i)} = \overline{2 + 8i - 3i - 12i^2} = \overline{14 + 5i} = 14 - 5i \\
\text{RHS: } \overline{z} \cdot \overline{w} &= (2 + 3i)(1 - 4i) = 2 - 8i + 3i - 12i^2 = 14 - 5i
\end{aligned}
$$
$\text{LHS} = \text{RHS} \checkmark$

---
## Powers of $i$

The powers of $i$ repeat in a **cycle of 4**:

$$
\begin{aligned}
i^1 &= i & i^5 &= i \\
i^2 &= -1 & i^6 &= -1 \\
i^3 &= -i & i^7 &= -i \\
i^4 &= 1 & i^8 &= 1
\end{aligned}
$$

### EXAMPLE 7 Evaluating Powers of $i$

**(a)** $i^{27} = i^{24} \cdot i^3 = (i^4)^6 \cdot i^3 = 1^6 \cdot (-i) = -i$

**(b)** $i^{101} = i^{100} \cdot i = (i^4)^{25} \cdot i = 1^{25} \cdot i = i$

### EXAMPLE 8 Writing the Power of a Complex Number in Standard Form

Write $(2 + i)^3$ in standard form.

Using the binomial formula $(x + a)^3 = x^3 + 3ax^2 + 3a^2x + a^3$:

$$
\begin{aligned}
(2 + i)^3 &= 2^3 + 3 \cdot i \cdot 2^2 + 3 \cdot i^2 \cdot 2 + i^3 \\
&= 8 + 12i + 6(-1) + (-i) \\
&= 2 + 11i
\end{aligned}
$$
---

# 2. Solve Quadratic Equations in the Complex Number System

Quadratic equations with negative discriminants have no real solutions ($\mathbb{R}$) but always have solutions in the complex number ($\mathbb{C}$) system.

> [!info] Definition: Principal Square Root of $-N$
> If $N$ is a positive real number, the **principal square root** of $-N$ is:
> $$ \sqrt{-N} = \sqrt{N}i $$
> where $i$ is the imaginary unit and $i^2 = -1$.

> [!warning]
> In writing $\sqrt{-N} = \sqrt{N}i$, be sure to place $i$ outside the $\sqrt{}$ symbol.

### EXAMPLE 9 Evaluating the Square Root of a Negative Number

(a) $\sqrt{-1} = \sqrt{1}i = i$
(b) $\sqrt{-4} = \sqrt{4}i = 2i$
(c) $\sqrt{-8} = \sqrt{8}i = 2\sqrt{2}i$

### EXAMPLE 10 Solving Equations

Solve each equation in the complex number system.
(a) $x^2 = 4$       (b) $x^2 = -9$

**Solution**

**(a)**
$$ x = \pm\sqrt{4} = \pm 2 $$
Solution set: $\{-2, 2\}$

**(b)**
$$ x = \pm\sqrt{-9} = \pm\sqrt{9}i = \pm 3i $$
Solution set: $\{-3i, 3i\}$

> [!warning]
> When working with square roots of negative numbers, do not set the square root of a product equal to the product of the square roots.
> $$\sqrt{100} = \sqrt{(-25)(-4)} \neq \sqrt{-25}\sqrt{-4} = (5i)(2i) = 10i^2 = -10$$

> [!info] Theorem: Quadratic Formula
> In the complex number system, the solutions of $ax^2 + bx + c = 0$, where $a, b, c \in \mathbb{R}$ and $a \neq 0$, are given by:
> $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \tag{9}$$

### EXAMPLE 11 Solving Quadratic Equations in the Complex Number System

Solve $x^2 - 4x + 8 = 0$ in the complex number system.

Here $a = 1, b = -4, c = 8$, and $b^2 - 4ac = 16 - 4(1)(8) = -16$.

$$
x = \frac{-(-4) \pm \sqrt{-16}}{2(1)} = \frac{4 \pm \sqrt{16}i}{2} = \frac{4 \pm 4i}{2} = 2 \pm 2i
$$

Solution set: $\{2 - 2i, 2 + 2i\}$

**Check:**
- $2 + 2i$: $(2 + 2i)^2 - 4(2 + 2i) + 8 = 4 + 8i + 4i^2 - 8 - 8i + 8 = 4 - 4 = 0 \checkmark$
- $2 - 2i$: $(2 - 2i)^2 - 4(2 - 2i) + 8 = 4 - 8i + 4i^2 - 8 + 8i + 8 = 4 - 4 = 0 \checkmark$

> [!NOTE] Character of the Solutions of a Quadratic Equation
> 
> For $ax^2 + bx + c = 0$ with real coefficients:
> 
> 1. If $b^2 - 4ac > 0$: two unequal real solutions
> 2. If $b^2 - 4ac = 0$: repeated real solution (double root)
> 3. If $b^2 - 4ac < 0$: two complex solutions that are conjugates of each other
> 
> When $b^2 - 4ac = -N < 0$:
> $$
> x = \frac{-b \pm \sqrt{-N}}{2a} = \frac{-b \pm \sqrt{N}i}{2a} = \frac{-b}{2a} \pm \frac{\sqrt{N}}{2a}i
> $$
> These solutions are conjugates of each other.

### EXAMPLE 12 Determining the Character of Solutions

Without solving, determine the character of the solutions:

**(a)** $3x^2 + 4x + 5 = 0$

$a = 3, b = 4, c = 5$
$b^2 - 4ac = 16 - 4(3)(5) = -44 < 0$

Two complex conjugates (not real).

**(b)** $2x^2 + 4x + 1 = 0$

$a = 2, b = 4, c = 1$
$b^2 - 4ac = 16 - 8 = 8 > 0$

Two unequal real numbers.

**(c)** $9x^2 - 6x + 1 = 0$

$a = 9, b = -6, c = 1$
$b^2 - 4ac = 36 - 4(9)(1) = 0$

Repeated real number (double root).


---
## ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. A54 - A58)