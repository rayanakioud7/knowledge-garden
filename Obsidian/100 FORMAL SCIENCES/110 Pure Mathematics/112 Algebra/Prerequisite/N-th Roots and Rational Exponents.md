Date: 2026-05-15
Tags: [[Mathematics]], [[Algebra]]

---

# 1 Work with nth Roots

> [!info] Definition: Principal nth Root
> The **principal $n$th root** of a real number $a$ (where $n \ge 2$ is an integer), symbolized by $\sqrt[n]{a}$, is defined as:
> $$ \sqrt[n]{a} = b \quad \text{means} \quad a = b^n $$
> - If $n$ is **even**: $a \ge 0$ and $b \ge 0$
> - If $n$ is **odd**: $a, b$ are any real numbers

The symbol $\sqrt[n]{a}$ is called a **radical**.
- $n$ is the **index**.
- $a$ is the **radicand**.
- If $n=2$, it is the **square root** ($\sqrt{a}$).
- If $n=3$, it is the **cube root** ($\sqrt[3]{a}$).

> [!note] Undefined Roots
> If $a$ is negative and $n$ is even, $\sqrt[n]{a}$ is **not defined** as a real number.

### EXAMPLE 1 Simplifying Principal nth Roots

These are examples of **perfect roots** (simplify to rational numbers).

(a) $\sqrt[3]{8} = \sqrt[3]{2^3} = 2$

(b) $\sqrt[3]{-64} = \sqrt[3]{(-4)^3} = -4$

(c) $\sqrt[4]{\frac{1}{16}} = \sqrt[4]{\left(\frac{1}{2}\right)^4} = \frac{1}{2}$

(d) $\sqrt[6]{(-2)^6} = |-2| = 2$ $\quad \leftarrow$ *Use absolute value for even roots*

> [!info] General Properties of $\sqrt[n]{a^n}$
> If $n \ge 2$ is an integer and $a$ is a real number:
> 
> 1.  If $n \ge 3$ is **odd**:
>     $$ \sqrt[n]{a^n} = a $$
> 2.  If $n \ge 2$ is **even**:
>     $$ \sqrt[n]{a^n} = |a| $$

## 2 Simplify Radicals

Let $n \ge 2$ and $m \ge 2$ denote positive integers, and let $a$ and $b$ represent real numbers. Assuming that all radicals are defined:

> [!info] Properties of Radicals
> $$ \sqrt[n]{ab} = \sqrt[n]{a} \cdot \sqrt[n]{b} \tag{2a} $$
> $$ \sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}} \tag{2b} $$
> $$ \sqrt[n]{a^m} = (\sqrt[n]{a})^m \tag{2c} $$

When used in reference to radicals, the direction to "**simplify**" means to remove from the radicals any perfect roots that occur as factors.

### EXAMPLE 3 Simplifying Radicals

**(a)** $\sqrt{32}$ :
$$ \sqrt{32} = \sqrt{16 \cdot 2} = \sqrt{16} \cdot \sqrt{2} = 4\sqrt{2} $$


**(b)** $\sqrt[3]{16}$ :
$$ \sqrt[3]{16} = \sqrt[3]{8 \cdot 2} = \sqrt[3]{8} \cdot \sqrt[3]{2} = \sqrt[3]{2^3} \cdot \sqrt[3]{2} = 2\sqrt[3]{2} $$


**(c)** $\sqrt[3]{-16x^4}$ :
$$
\begin{aligned}
\sqrt[3]{-16x^4} &= \sqrt[3]{-8 \cdot 2 \cdot x^3 \cdot x} = \sqrt[3]{(-8x^3)(2x)} \\
&= \sqrt[3]{(-2x)^3 \cdot 2x} = \sqrt[3]{(-2x)^3} \cdot \sqrt[3]{2x} \\
&= -2x\sqrt[3]{2x}
\end{aligned}
$$


**(d)** $\sqrt[4]{\frac{16x^5}{81}}$ :
$$
\begin{aligned}
\sqrt[4]{\frac{16x^5}{81}} &= \sqrt[4]{\frac{2^4 x^4 x}{3^4}} = \sqrt[4]{\left(\frac{2x}{3}\right)^4 \cdot x} \\
&= \sqrt[4]{\left(\frac{2x}{3}\right)^4} \cdot \sqrt[4]{x} = \left| \frac{2x}{3} \right| \sqrt[4]{x} \leftarrow \text{Use absolute value since index is even.}
\end{aligned}
$$

---

## 3 Rationalize Denominators

**Rationalizing the denominator** means rewriting a fraction so the denominator contains no radicals. The strategy is to multiply the numerator and denominator by a "clever form of 1" that clears the root.

> [!abstract] Common Strategies
>
> | Denominator Type | Strategy (Multiply by...) | Why it works |
> | :--- | :--- | :--- |
> | **Single Root** $\sqrt{3}$ | $\sqrt{3}$ | $\sqrt{3} \cdot \sqrt{3} = 3$ |
> | **Binomial** $\sqrt{3} + 1$ | **Conjugate** $\sqrt{3} - 1$ | $(\sqrt{3})^2 - 1^2 = 2$ |
> | **Higher Root** $\sqrt[3]{4}$ | Missing factor $\sqrt[3]{2}$ | $\sqrt[3]{4} \cdot \sqrt[3]{2} = \sqrt[3]{8} = 2$ |

### EXAMPLE 5 Rationalizing Denominators

> [!example] Solutions
>
> **(a)** $\frac{4}{\sqrt{2}}$
> *Strategy:* Multiply by $\sqrt{2}$ to clear the square root.
> $$ \frac{4}{\sqrt{2}} \cdot \frac{\sqrt{2}}{\sqrt{2}} = \frac{4\sqrt{2}}{2} = 2\sqrt{2} $$
>
> **(b)** $\frac{\sqrt{3}}{\sqrt[3]{2}}$
> *Strategy:* To get a perfect cube ($2^3=8$), multiply by $\sqrt[3]{2^2} = \sqrt[3]{4}$.
> $$ \frac{\sqrt{3}}{\sqrt[3]{2}} \cdot \frac{\sqrt[3]{4}}{\sqrt[3]{4}} = \frac{\sqrt{3}\sqrt[3]{4}}{2} $$
>
> **(c)** $\frac{\sqrt{x} - 2}{\sqrt{x} + 2}$
> *Strategy:* Multiply by the **conjugate** $\sqrt{x} - 2$.
> $$ \begin{aligned} \frac{\sqrt{x} - 2}{\sqrt{x} + 2} \cdot \frac{\sqrt{x} - 2}{\sqrt{x} - 2} &= \frac{(\sqrt{x} - 2)^2}{(\sqrt{x})^2 - 2^2} \\ &= \frac{x - 4\sqrt{x} + 4}{x - 4} \end{aligned} $$

---

## Combining Like Radicals

Two or more radicals can be combined, provided that they have the **same index** and the **same radicand**. Such radicals are called **like radicals**.

**(a)** $-8\sqrt{12} + \sqrt{3}$

$$
\begin{aligned}
-8\sqrt{12} + \sqrt{3} &= -8\sqrt{4 \cdot 3} + \sqrt{3} \\
&= -8 \cdot \sqrt{4}\sqrt{3} + \sqrt{3} \\
&= -16\sqrt{3} + \sqrt{3} \\
&= -15\sqrt{3}
\end{aligned}
$$

**(b)** $\sqrt[3]{8x^4} + \sqrt[3]{-x} + 4\sqrt[3]{27x}$

$$
\begin{aligned}
\sqrt[3]{8x^4} + \sqrt[3]{-x} + 4\sqrt[3]{27x} &= \sqrt[3]{2^3 x^3 x} + \sqrt[3]{-1 \cdot x} + 4\sqrt[3]{3^3 x} \\
&= \sqrt[3]{(2x)^3} \cdot \sqrt[3]{x} + \sqrt[3]{-1} \cdot \sqrt[3]{x} + 4\sqrt[3]{3^3} \cdot \sqrt[3]{x} \\
&= 2x\sqrt[3]{x} - 1 \cdot \sqrt[3]{x} + 12\sqrt[3]{x} \\
&= (2x + 11)\sqrt[3]{x}
\end{aligned}
$$
---
## 4 Solve Radical Equations

Solve: $\sqrt[3]{2x - 4} - 2 = 0$

**Strategy:** Isolate the radical, then raise both sides to the power of the index (3).

$$
\begin{aligned}
\sqrt[3]{2x - 4} &= 2 & \leftarrow \text{Isolate radical} \\
(\sqrt[3]{2x - 4})^3 &= 2^3 & \leftarrow \text{Cube both sides} \\
2x - 4 &= 8 \\
2x &= 12 \\
x &= 6
\end{aligned}
$$

**Check:** $\sqrt[3]{2(6) - 4} - 2 = \sqrt[3]{8} - 2 = 2 - 2 = 0$. $\checkmark$

---

## 5 Simplify Expressions with Rational Exponents

Radicals allow us to define exponents that are rational numbers (fractions).

> [!info] Definition: Rational Exponents ($1/n$)
> If $a$ is a real number and $n \ge 2$ is an integer:
> $$ a^{1/n} = \sqrt[n]{a} $$
> *(Provided $\sqrt[n]{a}$ exists. If $n$ is even and $a < 0$, no real solution exists.)*

### EXAMPLE 7 Writing Fractional Exponents as Radicals

| Expression | Conversion | Result |
| :--- | :--- | :--- |
| **(a)** $4^{1/2}$ | $\sqrt{4}$ | $2$ |
| **(b)** $8^{1/2}$ | $\sqrt{8} = \sqrt{4 \cdot 2}$ | $2\sqrt{2}$ |
| **(c)** $(-27)^{1/3}$ | $\sqrt[3]{-27}$ | $-3$ |
| **(d)** $16^{1/3}$ | $\sqrt[3]{16} = \sqrt[3]{8 \cdot 2}$ | $2\sqrt[3]{2}$ |

> [!info] Definition: Rational Exponents ($m/n$)
> If $a$ is a real number and $m, n$ are integers with no common factors ($n \ge 2$):
> $$ a^{m/n} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m $$
> *(Provided $\sqrt[n]{a}$ exists.)*

**Key Comments for Simplifying:**

1.  **Lowest Terms:** The exponent $\frac{m}{n}$ must be in lowest terms.
2.  **Easier Path:** Generally, calculating $(\sqrt[n]{a})^m$ is easier than $\sqrt[n]{a^m}$ because you work with smaller numbers (taking the root *first*).

---
### EXAMPLE 8 Using Rational Exponent Rules

Evaluate by converting to radicals. Note that $(\sqrt[n]{a})^m$ is usually easier to calculate than $\sqrt[n]{a^m}$.

*   **(a)** $4^{3/2} = (\sqrt{4})^3 = 2^3 = 8$
*   **(b)** $(-8)^{4/3} = (\sqrt[3]{-8})^4 = (-2)^4 = 16$
*   **(c)** $(32)^{-2/5} = (\sqrt[5]{32})^{-2} = 2^{-2} = \frac{1}{4}$
*   **(d)** $25^{6/4} = 25^{3/2} = (\sqrt{25})^3 = 5^3 = 125$ $\quad \leftarrow$ *Reduce fraction $\frac{6}{4}$ to $\frac{3}{2}$ first*

---

### EXAMPLE 9 Simplifying Expressions with Rational Exponents

Simplify. Express answers with positive exponents only. Assume variables are positive.

**(a)** $(x^{2/3}y)(x^{-2}y)^{1/2}$

$$
\begin{aligned}
(x^{2/3}y)(x^{-2}y)^{1/2} &= (x^{2/3}y)(x^{-1}y^{1/2}) & \leftarrow \text{Distribute } 1/2 \\
&= (x^{2/3} \cdot x^{-1})(y \cdot y^{1/2}) & \leftarrow \text{Group like bases} \\
&= x^{-1/3}y^{3/2} \\
&= \frac{y^{3/2}}{x^{1/3}} & \leftarrow \text{Positive exponents}
\end{aligned}
$$

**(b)** $\left( \frac{2x^{1/3}}{y^{2/3}} \right)^{-3}$

$$
\begin{aligned}
\left( \frac{2x^{1/3}}{y^{2/3}} \right)^{-3} &= \left( \frac{y^{2/3}}{2x^{1/3}} \right)^{3} & \leftarrow \text{Flip fraction for negative exponent} \\
&= \frac{(y^{2/3})^3}{2^3(x^{1/3})^3} \\
&= \frac{y^2}{8x}
\end{aligned}
$$

**(c)** $\left( \frac{9x^2y^{1/3}}{x^{1/3}y} \right)^{1/2}$

$$
\begin{aligned}
\left( \frac{9x^2y^{1/3}}{x^{1/3}y} \right)^{1/2} &= \left( 9x^{2-1/3}y^{1/3-1} \right)^{1/2} & \leftarrow \text{Simplify inside first} \\
&= \left( 9x^{5/3}y^{-2/3} \right)^{1/2} \\
&= 9^{1/2}(x^{5/3})^{1/2}(y^{-2/3})^{1/2} \\
&= 3x^{5/6}y^{-1/3} \\
&= \frac{3x^{5/6}}{y^{1/3}}
\end{aligned}
$$

---

### EXAMPLE 10 Writing an Expression as a Single Quotient

This type of algebraic manipulation is common in Calculus (e.g., simplifying derivatives).

**Problem:** Write as a single quotient with positive exponents:
$$ (x^2 + 1)^{1/2} + x \cdot \frac{1}{2}(x^2 + 1)^{-1/2} \cdot 2x $$

**Solution:**

1.  **Simplify the second term:**
    $$ x \cdot \frac{1}{2}(x^2 + 1)^{-1/2} \cdot 2x = \frac{x \cdot x}{(x^2 + 1)^{1/2}} = \frac{x^2}{(x^2 + 1)^{1/2}} $$

2.  **Find a common denominator:** The term $(x^2 + 1)^{1/2}$ acts as the denominator.
    $$ (x^2 + 1)^{1/2} + \frac{x^2}{(x^2 + 1)^{1/2}} $$

3.  **Combine fractions:** Multiply the first term by $\frac{(x^2 + 1)^{1/2}}{(x^2 + 1)^{1/2}}$.
    $$
    \begin{aligned}
    \frac{(x^2 + 1)^{1/2} \cdot (x^2 + 1)^{1/2}}{(x^2 + 1)^{1/2}} + \frac{x^2}{(x^2 + 1)^{1/2}} &= \frac{(x^2 + 1) + x^2}{(x^2 + 1)^{1/2}} \\
    &= \frac{2x^2 + 1}{(x^2 + 1)^{1/2}}
    \end{aligned}
    $$

---
### EXAMPLE 11 Factoring an Expression Containing Rational Exponents

**Problem:** Factor $\frac{4}{3}x^{1/3}(2x + 1) + 2x^{4/3}$

**Solution**

To factor this expression, first combine the terms into a single fraction by finding a common denominator (which is 3).

$$
\begin{aligned}
\frac{4}{3}x^{1/3}(2x + 1) + 2x^{4/3} &= \frac{4x^{1/3}(2x + 1)}{3} + \frac{6x^{4/3}}{3} \\
&= \frac{4x^{1/3}(2x + 1) + 6x^{4/3}}{3} & \leftarrow \text{Combine fractions} \\
&= \frac{2x^{1/3} [ 2(2x + 1) + 3x ]}{3} & \leftarrow \text{Factor out GCF } 2x^{1/3} \\
&= \frac{2x^{1/3} (4x + 2 + 3x)}{3} & \leftarrow \text{Distribute and simplify} \\
&= \frac{2x^{1/3}(7x + 2)}{3}
\end{aligned}
$$

**Key Steps:**
1.  **Common Denominator:** Rewrite $2x^{4/3}$ as $\frac{6x^{4/3}}{3}$.
2.  **Factor GCF:** Identify the greatest common factor in the numerator.
    *   Coefficients: $4$ and $6$ $\rightarrow$ GCF is $2$.
    *   Variables: $x^{1/3}$ and $x^{4/3}$ $\rightarrow$ GCF is $x^{1/3}$ (always take the lowest exponent).
3.  **Simplify:** Combine like terms inside the brackets ($4x + 3x = 7x$).

---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. A82 - A85)