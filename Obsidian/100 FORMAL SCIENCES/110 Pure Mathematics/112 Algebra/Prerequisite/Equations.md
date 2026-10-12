Date: 2026-05-11
Tags: [[Mathematics]], [[Algebra]]

---

# Equations in One Variable

An **equation in one variable** is a statement that two expressions are equal.
The admissible values of the variable that make the equation true are called **solutions** or **roots**.

> [!info] Properties of Equality
> | Property | Formula | Description |
> | :--- | :--- | :--- |
> | 1. Addition | $A = B \iff A + C = B + C$ | Adding same quantity to both sides preserves equality. |
> | 2. Multiplication | $A = B \iff CA = CB \quad (C \ne 0)$ | Multiplying both sides by same nonzero quantity preserves equality. |

These properties allow us to generate **equivalent equations** — key for solving algebraic equations.
## Solving Equations
To **solve** an equation means to find all its solutions.

$$x + 5 = 9 \qquad x^2 + 5x = 2x-2 \qquad \frac{x^2-4}{x+1}=0 \qquad \sqrt{x^2+9}=5$$

> [!info] Key Definitions
> - **Solution set** — the set of all solutions, written in set notation `{}`
> - **Identity** — an equation true for every value of the variable for which both sides are defined
> - **No real solution** — when no real number satisfies the equation

**Examples:**
- $x + 5 = 9$ has solution $x = 4$ — solution set $\{4\}$
- $\dfrac{x^2-4}{x+1} = 0$ has solutions $x = -2$ and $x = 2$ — solution set $\{-2, 2\}$
- $x^2 + 9 = 5$ has **no real solution** — no real number squares to $-4$
	- But it can be solved with complex numbers.
- $3x + 5 = x + 3 + 2x + 2$ is an **identity** — true for all $x \in \mathbb{R}$

> [!tip] Method for Solving
> Replace the original equation by a succession of **equivalent equations** until an equation with an obvious solution is obtained.

## Procedures That Result in Equivalent Equations

| # | Procedure | Replace | By |
|---|-----------|---------|-----|
| 1 | Interchange sides | $3 = x$ | $x = 3$ |
| 2 | Simplify (combine like terms) | $(x+2)+6 = 2x+(x+1)$ | $x+8 = 3x+1$ |
| 3 | Add/subtract same expression on both sides | $3x-5=4$ | $(3x-5)+5=4+5$ |
| 4 | Multiply/divide both sides by nonzero expression | $\dfrac{3x}{x-1}=\dfrac{6}{x-1},\; x\neq 1$ | $\dfrac{3x}{x-1}\cdot(x-1)=\dfrac{6}{x-1}\cdot(x-1)$ |
| 5 | Factor and apply Zero-Product Property | $x(x-3)=0$ | $x=0 \;\text{ or }\; x-3=0$ |

> [!warning]
> Squaring both sides of an equation does **not** necessarily produce an equivalent equation — it may introduce extraneous solutions.

---
# 1. Solve Equations by Factoring

> [!example] Solving Equations by Factoring
>
> **(a)** $x^3 = 4x$
>
> $$\begin{aligned}
> x^3 - 4x &= 0 \\
> x(x^2-4) &= 0 \quad &\leftarrow \text{factor}\\
> x(x-2)(x+2) &= 0 \quad &\leftarrow \text{factor again}\\
> x=0 \quad x=2 \quad &x=-2 \quad &\leftarrow \text{Zero-Product Property}
> \end{aligned}$$
>
> Solution set: $\{-2, 0, 2\}$
>
> **Check:**
> $x=-2: \quad (-2)^3 = -8 = 4(-2) \checkmark$
> $x=0: \quad 0^3 = 0 = 4(0) \checkmark$
> $x=2: \quad 2^3 = 8 = 4(2) \checkmark$
>
> ---
>
> **(b)** $x^3 - x^2 - 4x + 4 = 0$
>
> $$\begin{aligned}
> (x^3-x^2)-(4x-4) &= 0 \quad &\leftarrow \text{group terms}\\
> x^2(x-1)-4(x-1) &= 0 \quad &\leftarrow \text{factor each group}\\
> (x^2-4)(x-1) &= 0 \quad &\leftarrow \text{common factor}\\
> (x-2)(x+2)(x-1) &= 0 \quad &\leftarrow \text{factor again}\\
> x=2 \quad x=-2 \quad &x=1 \quad &\leftarrow \text{Zero-Product Property}
> \end{aligned}$$
>
> Solution set: $\{-2, 1, 2\}$
>
> **Check:**
> $x=-2: \quad (-2)^3-(-2)^2-4(-2)+4 = -8-4+8+4 = 0 \checkmark$
> $x=1: \quad 1-1-4+4 = 0 \checkmark$
> $x=2: \quad 8-4-8+4 = 0 \checkmark$

---

# 2. Solve Equations Involving Absolute Value

If $|x| = a$ where $a \geq 0$, then $x = a$ or $x = -a$ — since there are two points on the real number line at distance $a$ from the origin.

$$|x| = 5 \implies x = 5 \quad \text{or} \quad x = -5 \quad \Rightarrow \text{solution set } \{-5, 5\}$$

> [!example] $|x + 4| = 13$
>
> $$x + 4 = 13 \quad \text{or} \quad x + 4 = -13$$
> $$x = 9 \quad \text{or} \quad x = -17$$
>
> Solution set: $\{-17, 9\}$

> [!example] Solve $|x^2 - 9| = 0$
>
> $$|x^2 - 9| = 0 \implies x^2 - 9 = 0 \quad \leftarrow \text{only } |a| = 0 \text{ when } a = 0$$
>
> $$\begin{aligned}
> x^2 &= 9 \\
> x &= \pm\sqrt{9} = \pm 3
> \end{aligned}$$
>
> Solution set: $\{-3, 3\}$

> [!example] Solve $|x^2 + x| = 12$
>
> $$x^2 + x = 12 \quad \text{or} \quad x^2 + x = -12$$
>
> **(Case 1)** $x^2 + x - 12 = 0$
> $$\begin{aligned}
> (x+4)(x-3) &= 0 \\
> x = -4 \quad &\text{or} \quad x = 3
> \end{aligned}$$
>
> **(Case 2)** $x^2 + x + 12 = 0$
> $$b^2 - 4ac = 1 - 48 = -47 < 0 \implies \text{no real solution}$$
>
> Solution set: $\{-4, 3\}$

---
# 3. Solve a Quadratic Equation by Factoring

> [!info] Definition
> A **quadratic equation** (or **second-degree equation**) is an equation of the form:
> $$ax^2 + bx + c = 0 \qquad a,b,c \in \mathbb{R},\; a \neq 0$$
> Written in this form it is in **standard form**.

**Method:** factor the left side into two first-degree polynomials, then apply the Zero-Product Property.

> [!example] Solve $2x^2 = x + 3$
>
> $$\begin{aligned}
> 2x^2 - x - 3 &= 0 \quad &\leftarrow \text{standard form}\\
> (2x-3)(x+1) &= 0 \quad &\leftarrow \text{factor}\\
> x = \frac{3}{2} \quad &\text{or} \quad x = -1 \quad &\leftarrow \text{Zero-Product Property}
> \end{aligned}$$
>
> Solution set: $\left\{-1,\; \dfrac{3}{2}\right\}$

> [!note]
> When both factors yield the same solution, the quadratic has a **repeated solution**, also called a **double root** or **root of multiplicity 2**.

## The Square Root Method

If $x^2 = p$ and $p \geq 0$, then:
$$x = \sqrt{p} \quad \text{or} \quad x = -\sqrt{p} \quad \Longleftrightarrow \quad x = \pm\sqrt{p}$$

**Derivation:**
$$\begin{aligned}
x^2 - p &= 0 \\
(x-\sqrt{p})(x+\sqrt{p}) &= 0 \\
x = \sqrt{p} \quad &\text{or} \quad x = -\sqrt{p}
\end{aligned}$$

> [!example] $x^2 = 4$
> $$x = \pm\sqrt{4} = \pm 2$$
> Solution set: $\{-2, 2\}$

---
# 4. Solve a Quadratic Equation by Completing the Square

> [!example] Solve $2x^2 - 8x - 5 = 0$
>
> $$\begin{aligned}
> 2x^2 - 8x &= 5 \quad &\leftarrow \text{move constant to right}\\
> x^2 - 4x &= \frac{5}{2} \quad &\leftarrow \text{divide by 2 so coefficient of } x^2 = 1\\
> x^2 - 4x + 4 &= \frac{5}{2} + 4 \quad &\leftarrow \text{add } \left(\frac{1}{2}\cdot(-4)\right)^2 = 4 \text{ to both sides}\\
> (x-2)^2 &= \frac{13}{2} \quad &\leftarrow \text{perfect square}\\
> x - 2 &= \pm\sqrt{\frac{13}{2}} \quad &\leftarrow \text{Square Root Method}\\
> x - 2 &= \pm\frac{\sqrt{26}}{2} \quad &\leftarrow \sqrt{\frac{13}{2}} = \frac{\sqrt{13}}{\sqrt{2}} = \frac{\sqrt{26}}{2}\\
> x &= 2 \pm \frac{\sqrt{26}}{2}
> \end{aligned}$$
>
> Solution set: $\left\{2 - \dfrac{\sqrt{26}}{2},\; 2 + \dfrac{\sqrt{26}}{2}\right\} \approx \{-0.55,\; 4.55\}$

---

# 5. Solve a Quadratic Equation Using the Quadratic Formula

## Derivation

Starting from $ax^2 + bx + c = 0,\; a > 0$:

$$\begin{aligned}
ax^2 + bx &= -c \\
x^2 + \frac{b}{a}x &= -\frac{c}{a} \quad &\leftarrow \text{divide by } a\\
x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} &= \frac{b^2}{4a^2} - \frac{c}{a} \quad &\leftarrow \text{add } \left(\frac{1}{2}\cdot\frac{b}{a}\right)^2 = \frac{b^2}{4a^2}\\
\left(x + \frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a^2} \quad &\leftarrow \text{perfect square, combine right side}\\
x + \frac{b}{2a} &= \pm\frac{\sqrt{b^2-4ac}}{2a} \quad &\leftarrow \text{Square Root Method, } \sqrt{4a^2}=2a\\
x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \quad &\leftarrow \text{subtract } \frac{b}{2a}
\end{aligned}$$

## Theorem: Quadratic Formula

> [!info]
> For $ax^2 + bx + c = 0,\; a \neq 0$, the real solutions are given by:
> $$\boxed{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}$$
> - If $b^2 - 4ac < 0$ → **no real solution**
> - If $b^2 - 4ac \geq 0$ → **real solution(s) exist**

## The Discriminant

The quantity $b^2 - 4ac$ is called the **discriminant** — it determines the nature and number of solutions:

| Discriminant    | Solutions                                           |
| --------------- | --------------------------------------------------- |
| $b^2 - 4ac > 0$ | Two distinct real solutions                         |
| $b^2 - 4ac = 0$ | One repeated solution (double root, multiplicity 2) |
| $b^2 - 4ac < 0$ | No real solution ($\in \mathbb{C}$ only)            |


> [!example] Solve $3x^2 - 5x + 1 = 0$ using the Quadratic Formula
>
> Identify $a = 3,\; b = -5,\; c = 1$
>
> **Discriminant:**
> $$b^2 - 4ac = (-5)^2 - 4(3)(1) = 25 - 12 = 13 > 0 \implies \text{two real solutions}$$
>
> **Apply the formula:**
> $$x = \frac{-(-5) \pm \sqrt{13}}{2(3)} = \frac{5 \pm \sqrt{13}}{6}$$
>
> Solution set: $\left\{\dfrac{5-\sqrt{13}}{6},\; \dfrac{5+\sqrt{13}}{6}\right\}$

---
## Other Types of Equations

When solving equations with **fractional expressions** or **radicals**, always check solutions — multiplying by variable-containing expressions can introduce **extraneous solutions**.

> [!example] Example 10: Equation Involving Fractional Expressions  
> Solve: $\frac{3}{x} - \frac{2}{x-3} = \frac{-12}{x^2 - 9}$

**Solution**

Note: $x^2 - 9 = (x-3)(x+3)$, so LCD is $x(x-3)(x+3)$. But since RHS denominator is $x^2 - 9$, and LHS has denominators $x$ and $x-3$, we multiply both sides by $x(x^2 - 9)$ to eliminate all denominators.

$$
\begin{aligned}
\left( \frac{3}{x} - \frac{2}{x-3} \right) x(x^2 - 9) &= \frac{-12}{x^2 - 9} \cdot x(x^2 - 9) \\
3(x^2 - 9) - 2x(x + 3) &= -12x \quad \leftarrow \text{Simplify} \\
3x^2 - 27 - 2x^2 - 6x &= -12x \quad \leftarrow \text{Expand} \\
x^2 - 6x - 27 &= -12x \quad \leftarrow \text{Combine like terms} \\
x^2 + 6x - 27 &= 0 \quad \leftarrow \text{Add } 12x \\
(x - 3)(x + 9) &= 0 \quad \leftarrow \text{Factor} \\
x = 3 \quad &\text{or} \quad x = -9 \quad \leftarrow \text{Zero-Product Property}
\end{aligned}
$$

**Check for Extraneous Solutions**

- $x = 3$: Makes denominators $x-3$ and $x^2 - 9$ zero → undefined → ❌ extraneous.
- $x = -9$:  
  LHS: $\frac{3}{-9} - \frac{2}{-9 - 3} = -\frac{1}{3} + \frac{1}{6} = -\frac{1}{6}$  
  RHS: $\frac{-12}{(-9)^2 - 9} = \frac{-12}{81 - 9} = \frac{-12}{72} = -\frac{1}{6}$ → ✅ valid.

**Final Answer:** $x = -9$

> [!warning] Always Check!
> Multiplying both sides by an expression containing the variable may introduce extraneous solutions. Verify each candidate in the original equation.

---

> [!example] Example 11: Equation Involving a Radical  
> Solve: $2x = 1 - \sqrt{2 - x}$

**Solution**

Step 1: Isolate the radical.  
$$
\begin{aligned}
2x - 1 &= -\sqrt{2 - x} \quad \leftarrow \text{Subtract 1} \\
(2x - 1)^2 &= (-\sqrt{2 - x})^2 \quad \leftarrow \text{Square both sides} \\
4x^2 - 4x + 1 &= 2 - x \quad \leftarrow \text{Expand LHS} \\
4x^2 - 3x - 1 &= 0 \quad \leftarrow \text{Bring all terms to left} \\
(4x + 1)(x - 1) &= 0 \quad \leftarrow \text{Factor} \\
x = -\frac{1}{4} \quad &\text{or} \quad x = 1 \quad \leftarrow \text{Zero-Product Property}
\end{aligned}
$$

**Check for Extraneous Solutions**

- $x = -\frac{1}{4}$:  
  LHS: $2(-\frac{1}{4}) = -\frac{1}{2}$  
  RHS: $1 - \sqrt{2 - (-\frac{1}{4})} = 1 - \sqrt{\frac{9}{4}} = 1 - \frac{3}{2} = -\frac{1}{2}$ → ✅ valid.

- $x = 1$:  
  LHS: $2(1) = 2$  
  RHS: $1 - \sqrt{2 - 1} = 1 - 1 = 0$ → ❌ not equal → extraneous.

**Final Answer:** $x = -\frac{1}{4}$

> [!warning] Squaring Can Introduce Extraneous Solutions  
> Always check solutions in original equation when squaring both sides — especially with radicals.

---

> [!example] Example 12: Equation of Quadratic Type  
> Solve: $x^4 - 8x^2 + 8 = 0$

**Solution**

Let $W = x^2$. Then equation becomes:

$$
\begin{aligned}
(x^2)^2 - 8x^2 + 8 &= 0 \\
W^2 - 8W + 8 &= 0 \quad \leftarrow \text{Substitute } W = x^2 \\
W &= \frac{-(-8) \pm \sqrt{(-8)^2 - 4 \cdot 1 \cdot 8}}{2} = \frac{8 \pm \sqrt{64 - 32}}{2} = \frac{8 \pm \sqrt{32}}{2} = \frac{8 \pm 4\sqrt{2}}{2} = 4 \pm 2\sqrt{2} \\
x^2 &= 4 \pm 2\sqrt{2} \quad \leftarrow \text{Back-substitute } W = x^2 \\
x &= \pm \sqrt{4 \pm 2\sqrt{2}} \quad \leftarrow \text{Take square roots}
\end{aligned}
$$

**Four real solutions:**

$$
\sqrt{4 + 2\sqrt{2}}, \quad \sqrt{4 - 2\sqrt{2}}, \quad -\sqrt{4 + 2\sqrt{2}}, \quad -\sqrt{4 - 2\sqrt{2}}
$$

Approximations (calculator):  
$x \approx 2.61, \; 1.08, \; -2.61, \; -1.08$

> [!tip] Quadratic-Type Equations  
> If an equation can be written as $a(\text{expression})^2 + b(\text{expression}) + c = 0$, substitute $W =$ expression to reduce to quadratic form. Common cases:  
> - $x^4, x^2$ → let $W = x^2$  
> - $x^{2/3}, x^{1/3}$ → let $W = x^{1/3}$  
> - $(x+1)^2, (x+1)$ → let $W = x+1$

---

> [!example] Example 13: Equation Involving Fractional Powers  
> Solve: $x^{1/3} + x^{1/6} - 2 = 0$

**Solution**

This is quadratic-type. Let $W = x^{1/6}$, so $W^2 = (x^{1/6})^2 = x^{1/3}$.

$$
\begin{aligned}
x^{1/3} + x^{1/6} - 2 &= 0 \\
(x^{1/6})^2 + x^{1/6} - 2 &= 0 \quad \leftarrow \text{Rewrite } x^{1/3} \text{ as } (x^{1/6})^2 \\
W^2 + W - 2 &= 0 \quad \leftarrow \text{Substitute } W = x^{1/6} \\
(W - 1)(W + 2) &= 0 \quad \leftarrow \text{Factor} \\
W = 1 \quad &\text{or} \quad W = -2 \quad \leftarrow \text{Zero-Product Property} \\
x^{1/6} = 1 \quad &\text{or} \quad x^{1/6} = -2 \quad \leftarrow \text{Back-substitute} \\
x = 1^6 = 1 \quad &\text{or} \quad x = (-2)^6 = 64 \quad \leftarrow \text{Raise both sides to 6th power}
\end{aligned}
$$

**Check for Extraneous Solutions**

- $x = 1$:  
  LHS: $1^{1/3} + 1^{1/6} - 2 = 1 + 1 - 2 = 0$ → ✅ valid.

- $x = 64$:  
  LHS: $64^{1/3} + 64^{1/6} - 2 = 4 + 2 - 2 = 4 \ne 0$ → ❌ extraneous.

**Final Answer:** $x = 1$

> [!warning] Even Roots and Negative Bases  
> Although $(-2)^6 = 64$, the expression $x^{1/6}$ denotes the **principal (nonnegative) sixth root**. So $x^{1/6} = -2$ has no real solution — it’s invalid in reals. Always verify when dealing with fractional exponents!

> [!tip] Quadratic-Type with Fractional Exponents  
> If exponents are rational and one is double the other (e.g., $x^{2k}, x^k$), let $W = x^k$ to reduce to quadratic.

---

## ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. A46 - A49)
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 53)