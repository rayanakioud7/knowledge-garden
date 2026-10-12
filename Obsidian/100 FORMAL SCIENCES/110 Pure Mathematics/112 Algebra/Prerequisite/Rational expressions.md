Date: 2026-05-11
Tags: [[Mathematics]], [[Algebra]]

---


# 1. Reduce a Rational Expression to Lowest Terms

> [!info] Definition
> A **rational expression** is the quotient of two polynomials:
> $$\frac{P(x)}{Q(x)} \qquad Q(x) \neq 0$$
> - **Numerator** — the polynomial on top
> - **Denominator** — the polynomial on bottom
> - A rational expression is **reduced to lowest terms** (simplified) when the numerator and denominator share no common factors (except $1$ and $-1$)

**Examples:**
$$\text{(a)}\;\frac{x^3+1}{x} \qquad \text{(b)}\;\frac{3x^2+x-2}{x^2+5} \qquad \text{(c)}\;\frac{x}{x^2-1} \qquad \text{(d)}\;\frac{xy^2}{(x-y)^2}$$

(a), (b), (c) are in one variable $x$ — (d) is in two variables $x$ and $y$.

> [!warning] Domain Restriction
> The denominator can **never** equal $0$.
> For $\dfrac{x^3+1}{x}$, the domain is $\{x \mid x \neq 0\}$

> [!info] Cancellation Property
> To reduce to lowest terms: **factor completely**, then cancel common factors:
> $$\frac{ac}{bc} = \frac{a}{b} \qquad b \neq 0,\; c \neq 0$$

> [!warning]
> Apply the Cancellation Property **only** to rational expressions in **factored form** — cancel only common **factors**, never individual terms.

> [!example] Reducing Rational Expressions to Lowest Terms
>
> **(a)**
> $$\frac{x^2+4x+4}{x^2+3x+2} = \frac{(x+2)(x+2)}{(x+2)(x+1)} = \frac{x+2}{x+1} \qquad x \neq -2, -1$$
>
> **(b)**
> $$\frac{x^3-8}{x^3-2x^2} = \frac{(x-2)(x^2+2x+4)}{x^2(x-2)} = \frac{x^2+2x+4}{x^2} \qquad x \neq 0, 2$$
>
> **(c)**
> $$\frac{8-2x}{x^2-x-12} = \frac{2(4-x)}{(x-4)(x+3)} = \frac{2(-1)(x-4)}{(x-4)(x+3)} = -\frac{2}{x+3} \qquad x \neq -3, 4$$

---

# 2. Multiply and Divide Rational Expressions

**Multiplication:** $\quad\dfrac{a}{b}\cdot\dfrac{c}{d}=\dfrac{ac}{bd} \qquad b\neq 0,\; d\neq 0$

**Division:** $\quad\dfrac{\dfrac{a}{b}}{\dfrac{c}{d}}=\dfrac{a}{b}\cdot\dfrac{d}{c}=\dfrac{ad}{bc} \qquad b\neq 0,\; c\neq 0,\; d\neq 0$

> [!tip] Always factor completely first, then cancel common factors. Leave answer in factored form.

**Examples:**

**(a)**
$$\frac{x^2-2x+1}{x^3+x}\cdot\frac{4x^2+4}{x^2+x-2} = \frac{(x-1)^2}{x(x^2+1)}\cdot\frac{4(x^2+1)}{(x+2)(x-1)}$$

$$= \frac{(x-1)^2\cdot 4(x^2+1)}{x(x^2+1)(x+2)(x-1)} = \frac{4(x-1)}{x(x+2)} \qquad x\neq -2, 0, 1$$

**(b)**
$$\frac{\dfrac{x+3}{x^2-4}}{\dfrac{x^2-x-12}{x^3-8}} = \frac{x+3}{x^2-4}\cdot\frac{x^3-8}{x^2-x-12}$$

$$= \frac{(x+3)}{(x-2)(x+2)}\cdot\frac{(x-2)(x^2+2x+4)}{(x-4)(x+3)} = \frac{x^2+2x+4}{(x+2)(x-4)} \qquad x\neq -3,-2,2,4$$

---

# 3. Add and Subtract Rational Expressions

**Same denominator:**
$$\frac{a}{b}+\frac{c}{b}=\frac{a+c}{b} \qquad \frac{a}{b}-\frac{c}{b}=\frac{a-c}{b} \qquad b\neq 0$$

**Different denominators:**
$$\frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd} \qquad \frac{a}{b}-\frac{c}{d}=\frac{ad-bc}{bd} \qquad b\neq 0,\; d\neq 0$$

**Example — Same denominator:**
$$\frac{2x^2-4}{2x+5}+\frac{x+3}{2x+5} = \frac{(2x^2-4)+(x+3)}{2x+5} = \frac{2x^2+x-1}{2x+5} = \frac{(2x-1)(x+1)}{2x+5} \qquad x\neq -\frac{5}{2}$$

**Example - Different denominator:**

$$
\frac{x^2}{x^2 - 4} - \frac{1}{x} \quad x \neq -2, 0, 2
$$
**Solution**
$$
\begin{aligned}
\frac{x^2}{x^2 - 4} - \frac{1}{x} &= \frac{x^2}{x^2 - 4} \cdot \frac{x}{x} - \frac{x^2 - 4}{x^2 - 4} \cdot \frac{1}{x} = \frac{x^2(x) - (x^2 - 4)(1)}{(x^2 - 4)(x)} \\
&= \frac{x^3 - x^2 + 4}{(x - 2)(x + 2)(x)}
\end{aligned}
$$

---

# 4. Use the Least Common Multiple Method

If denominators have common factors, use the **Least Common Multiple (LCM) method**.
The **LCM** is the polynomial of least degree that has each denominator polynomial as a factor.

> [!info] LCM Method for Adding or Subtracting Rational Expressions
> **Step 1:** Factor completely each denominator polynomial.
> **Step 2:** The LCM is the product of each factor raised to the **greatest power** it occurs in any denominator.
> **Step 3:** Rewrite each rational expression using the LCM as common denominator.
> **Step 4:** Add or subtract using $\dfrac{a}{b} \pm \dfrac{c}{b} = \dfrac{a \pm c}{b}$

**Example** — Find the LCM of $x(x-1)^2(x+1)$ and $4(x-1)(x+1)^3$:

| Factor | Highest Power |
|--------|--------------|
| $4$ | $4^1$ |
| $x$ | $x^1$ |
| $(x-1)$ | $(x-1)^2$ |
| $(x+1)$ | $(x+1)^3$ |

$$\text{LCM} = 4x(x-1)^2(x+1)^3$$

> [!example] Using LCM to Add Rational Expressions
> $$\frac{x}{x^2+3x+2} + \frac{2x-3}{x^2-1} \qquad x \neq -2,-1,1$$
>
> **Step 1:** Factor each denominator:
> $$x^2+3x+2 = (x+2)(x+1) \qquad x^2-1 = (x-1)(x+1)$$
>
> **Step 2:** LCM $= (x+2)(x+1)(x-1)$
>
> **Step 3:** Rewrite each expression using the LCM:
> $$\frac{x}{(x+2)(x+1)} = \frac{x}{(x+2)(x+1)}\cdot\frac{x-1}{x-1} = \frac{x(x-1)}{(x+2)(x+1)(x-1)}$$
>
> $$\frac{2x-3}{(x-1)(x+1)} = \frac{2x-3}{(x-1)(x+1)}\cdot\frac{x+2}{x+2} = \frac{(2x-3)(x+2)}{(x-1)(x+1)(x+2)}$$
>
> **Step 4:** Add:
> $$\frac{x(x-1)}{(x+2)(x+1)(x-1)} + \frac{(2x-3)(x+2)}{(x+2)(x+1)(x-1)}$$
>
> $$= \frac{(x^2-x)+(2x^2+x-6)}{(x+2)(x+1)(x-1)}$$
>
> $$= \frac{3x^2-6}{(x+2)(x+1)(x-1)} = \frac{3(x^2-2)}{(x+2)(x+1)(x-1)}$$

---

# 5. Simplify Complex Rational Expressions

A **complex rational expression** is a rational expression whose numerator and/or denominator contains rational expressions. For example:
$$\frac{1+\dfrac{1}{x}}{1-\dfrac{1}{x}} \qquad \text{and} \qquad \frac{\dfrac{x^2}{x^2-4}-3}{\dfrac{x-3}{x+2}-1}$$

> [!info] Two Methods to Simplify
> **Method 1:** Simplify numerator and denominator separately first, then divide.
>
> **Method 2:** Find the LCM of all denominators in the expression, multiply both numerator and denominator by it, then simplify.

---

**Example** — Simplify $\dfrac{\dfrac{1}{2}+\dfrac{3}{x}}{\dfrac{x+3}{4}} \qquad x \neq -3, 0$

**Method 1:** Simplify numerator first, then divide:
$$\frac{\dfrac{1}{2}+\dfrac{3}{x}}{\dfrac{x+3}{4}} = \frac{\dfrac{x+6}{2x}}{\dfrac{x+3}{4}} = \frac{x+6}{2x}\cdot\frac{4}{x+3} = \frac{4(x+6)}{2x(x+3)} = \frac{2(x+6)}{x(x+3)}$$

**Method 2:** LCM of $2, x, 4$ is $4x$ — multiply numerator and denominator by $4x$:
$$\frac{\dfrac{1}{2}+\dfrac{3}{x}}{\dfrac{x+3}{4}} = \frac{4x\cdot\dfrac{1}{2}+4x\cdot\dfrac{3}{x}}{4x\cdot\dfrac{x+3}{4}} = \frac{2x+12}{x(x+3)} = \frac{2(x+6)}{x(x+3)}$$

---

## Rationalizing the Denominator or Numerator

To rationalize a denominator of the form $A + B\sqrt{C}$, multiply numerator and denominator by its **conjugate radical** $A - B\sqrt{C}$. This uses:

$$ (A + B\sqrt{C})(A - B\sqrt{C}) = A^2 - B^2 C \quad \leftarrow \text{Special Product Formula 1} $$

> [!example] Example 9: Rationalizing the Denominator  
> Rationalize: $\frac{1}{1 + \sqrt{2}}$

**Solution**

Multiply numerator and denominator by conjugate $1 - \sqrt{2}$:

$$
\begin{aligned}
\frac{1}{1 + \sqrt{2}} &= \frac{1}{1 + \sqrt{2}} \cdot \frac{1 - \sqrt{2}}{1 - \sqrt{2}} \\
&= \frac{1 - \sqrt{2}}{1^2 - (\sqrt{2})^2} \\
&= \frac{1 - \sqrt{2}}{1 - 2} \\
&= \frac{1 - \sqrt{2}}{-1} \\
&= \sqrt{2} - 1
\end{aligned}
$$

*Note: Same technique applies to rationalizing numerators — multiply by conjugate to eliminate radical in numerator.*


---
## ~={red}References=~

- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. A36 - A40)