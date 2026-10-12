Date: 2026-05-14
Tags: [[Mathematics]], [[Algebra]]

---

# 1 Use Interval Notation

Suppose $a$ and $b$ are real numbers with $a < b$. The notation $a < x < b$ means $x$ is **between** $a$ and $b$, equivalent to $a < x$ and $x < b$. Similarly, $a \leq x \leq b$ is equivalent to $a \leq x$ and $x \leq b$

Write inequalities from smaller to larger values: prefer $2 \leq x \leq 3$ over $3 \geq x \geq 2$.

> [!warning]
> A statement like $2 \leq x \leq 1$ is **false** (no number satisfies both $2 \leq x$ and $x \leq 1$). Never mix inequality symbols like $2 \leq x \geq 3$.

> [!info] Definition: Intervals
> Let $a$ and $b$ represent real numbers with $a < b$.
> - **Closed interval** $[a, b]$: all real numbers $x$ for which $a \leq x \leq b$
> - **Open interval** $(a, b)$: all real numbers $x$ for which $a < x < b$
> - **Half-open (half-closed) intervals**:
>   - $(a, b]$: all real numbers $x$ for which $a < x \leq b$
>   - $[a, b)$: all real numbers $x$ for which $a \leq x < b$

> Here, $a$ is the **left endpoint** and $b$ is the **right endpoint**.

## Unbounded Intervals

The symbols $\infty$ (**infinity**) and $-\infty$ (**negative infinity**) are not real numbers, but notational devices indicating unboundedness.

| Interval | Description |
|----------|-------------|
| $[a, \infty)$ | All real numbers $x$ for which $x \geq a$ |
| $(a, \infty)$ | All real numbers $x$ for which $x > a$ |
| $(-\infty, a]$ | All real numbers $x$ for which $x \leq a$ |
| $(-\infty, a)$ | All real numbers $x$ for which $x < a$ |
| $(-\infty, \infty)$ | All real numbers $x$ |

> [!note]
> $\infty$ and $-\infty$ are **never included** as endpoints (parentheses always used), since neither is a real number.
## Summary:

![[Pasted image 20260514151335.png]]

![[Pasted image 20260518001046.png|center]]

### EXAMPLE 1: Writing Inequalities Using Interval Notation

**(a)** $1 \leq x \leq 3$
Describes all numbers $x$ between 1 and 3, inclusive. In interval notation: $[1, 3]$.

**(b)** $-4 < x < 0$
In interval notation: $(-4, 0)$.

**(c)** $x > 5$
Consists of all numbers $x$ greater than 5. In interval notation: $(5, \infty)$.

**(d)** $x \leq 1$
In interval notation: $(-\infty, 1]$.

### EXAMPLE 2: Writing Intervals Using Inequality Notation

**(a)** $[1, 4)$
Consists of all numbers $x$ for which $1 \leq x < 4$.

**(b)** $(2, \infty)$
Consists of all numbers $x$ for which $x > 2$.

**(c)** $[2, 3]$
Consists of all numbers $x$ for which $2 \leq x \leq 3$.

**(d)** $(-\infty, -3]$
Consists of all numbers $x$ for which $x \leq -3$.


> [!note] French Interval Notation
> In the French curriculum, open intervals are written with reversed brackets instead of parentheses. For example, $(5, 8)$ is written as $]5, 8[$. Similarly:
> - $]a, b[$ denotes the open interval $(a, b)$
> - $[a, b[$ denotes the half-open interval $[a, b)$
> - $]a, b]$ denotes the half-open interval $(a, b]$

---

## 2 Use Properties of Inequalities

For any real number $a$, the value of $a^2$ is 0 or positive; that is, $a^2$ is **nonnegative**.

> [!info] Nonnegative Property
> For any real number $a$,
> $$a^2 \geq 0 \tag{1}$$

> [!note] In Words
> The square of a real number is never negative.

---

If we add the same number to both sides of an inequality, we obtain an equivalent inequality. This is called the **addition property** of inequalities.

> [!info] Addition Property of Inequalities
> For real numbers $a$, $b$, and $c$:
> $$\text{If } a < b, \text{ then } a + c < b + c \tag{2a}$$
> $$\text{If } a > b, \text{ then } a + c > b + c \tag{2b}$$

The addition property states that the sense (direction) of an inequality remains unchanged if the same number is added to each side.

---

## Multiplication Properties for Inequalities

When multiplying both sides of an inequality by a nonzero number:
- Multiplying by a **positive** number: direction remains the **same**
- Multiplying by a **negative** number: direction is **reversed**

> [!info] Multiplication Properties for Inequalities
> For real numbers $a$, $b$, and $c$:
>
> If $a < b$ and $c > 0$, then $ac < bc$. 
> If $a < b$ and $c < 0$, then $ac > bc$. 
>
> If $a > b$ and $c > 0$, then $ac > bc$.
> If $a > b$ and $c < 0$, then $ac < bc$.

### Examples: Multiplication Property of Inequalities

**(a)** If $2x < 6$, then $\frac{1}{2}(2x) < \frac{1}{2}(6)$ or $x < 3$.

**(b)** If $\frac{x}{-3} > 12$, then $-3\left(\frac{x}{-3}\right) < -3(12)$ or $x < -36$. $\quad \leftarrow \text{Reverse inequality}$

**(c)** If $-4x < -8$, then $\frac{-4x}{-4} > \frac{-8}{-4}$ or $x > 2$. $\quad \leftarrow \text{Reverse inequality}$

**(d)** If $-x > 8$, then $(-1)(-x) < (-1)(8)$ or $x < -8$. $\quad \leftarrow \text{Reverse inequality}$

---

> [!info] Reciprocal Property for Inequalities
> The reciprocal of a positive real number is positive, and the reciprocal of a negative real number is negative.
>
> If $a > 0$, then $\frac{1}{a} > 0$.   $\quad$      If $\frac{1}{a} > 0$, then $a > 0$.
>
> If $a < 0$, then $\frac{1}{a} < 0$.     $\quad$     If $\frac{1}{a} < 0$, then $a < 0$. 

> [!note] Reciprocal Inequality Property
> If $a$ and $b$ have the **same sign** (both positive or both negative) and $a > b$, then:
> $$ \frac{1}{a} < \frac{1}{b} $$
> *(Note: The inequality symbol reverses when taking reciprocals of numbers with the same sign.)*

## Summary

![[Pasted image 20260518010850.png|center]]

---
## 3. Solve Inequalities

An **inequality in one variable** is a statement involving two expressions (at least one containing the variable), separated by $<$, $\le$, $>$, or $\ge$.

To **solve an inequality** means to find all values of the variable for which the statement is true. These values are called **solutions**.

**Examples:**
$$ x + 5 < 8 \qquad 2x - 3 \ge 4 \qquad x^2 - 1 \le 3 \qquad \frac{x + 1}{x - 2} > 0 $$

Solve by creating a series of **equivalent inequalities** until reaching an obvious solution like $x < 3$.

> [!info] Procedures That Leave the Inequality Symbol **Unchanged**
> 1. **Simplify both sides** (combine like terms, eliminate parentheses)  
>    $(x + 2) + 6 > 2x + 5(x + 1)$ becomes $x + 8 > 7x + 5$
> 
> 2. **Add or subtract the same expression** on both sides  
>    $3x - 5 < 4$ becomes $(3x - 5) + 5 < 4 + 5$
> 
> 3. **Multiply or divide both sides** by the same **positive** expression  
>    $4x > 16$ becomes $\frac{4x}{4} > \frac{16}{4}$

> [!warning] Procedures That **Reverse** the Inequality Symbol
> 4. **Interchange the two sides** of the inequality  
>    $3 < x$ becomes $x > 3$
> 
> 5. **Multiply or divide both sides** by the same **negative** expression  
>    $-2x > 6$ becomes $\frac{-2x}{-2} < \frac{6}{-2}$

### EXAMPLE 4 Solving an Inequality

Solve the inequality: $4x + 7 \ge 2x - 3$
Graph the solution set.

**Solution**

$$
\begin{aligned}
4x + 7 &\ge 2x - 3 \\
4x + 7 - 7 &\ge 2x - 3 - 7 & \leftarrow \text{Subtract 7 from both sides.} \\
4x &\ge 2x - 10 & \leftarrow \text{Simplify.} \\
4x - 2x &\ge 2x - 10 - 2x & \leftarrow \text{Subtract } 2x \text{ from both sides.} \\
2x &\ge -10 & \leftarrow \text{Simplify.} \\
\frac{2x}{2} &\ge \frac{-10}{2} & \leftarrow \text{Divide both sides by 2. (Direction unchanged.)} \\
x &\ge -5 & \leftarrow \text{Simplify.}
\end{aligned}
$$

The solution set is $\{x \mid x \ge -5\}$ or, using interval notation, $[-5, \infty)$.

**Graph:** A number line with a closed bracket `[` at $-5$ and shading extending to the right.

![[Pasted image 20260514155211.png|center]]

---

### EXAMPLE 5 Solving Combined Inequalities

Solve the inequality: $-5 < 3x - 2 < 1$
Graph the solution set.

**Solution**

The inequality is equivalent to $-5 < 3x - 2$ and $3x - 2 < 1$. We solve all parts simultaneously:

$$
\begin{aligned}
-5 &< 3x - 2 < 1 \\
-5 + 2 &< 3x - 2 + 2 < 1 + 2 \quad \leftarrow \text{Add 2 to each part.} \\
-3 &< 3x < 3 \quad \leftarrow \text{Simplify.} \\
\frac{-3}{3} &< \frac{3x}{3} < \frac{3}{3} \quad \leftarrow \text{Divide each part by 3.} \\
-1 &< x < 1 \quad \leftarrow \text{Simplify.}
\end{aligned}
$$

The solution set is $\{x \mid -1 < x < 1\}$. In interval notation: $(-1, 1)$.

**Graph:**
Open interval between $-1$ and $1$.

![[Pasted image 20260514155803.png|center]]

---

### EXAMPLE 6 Using the Reciprocal Property to Solve an Inequality

Solve: $(4x - 1)^{-1} > 0$

**Key Insight:** Since $(4x - 1)^{-1} = \frac{1}{4x - 1}$, apply the Reciprocal Property: if $\frac{1}{a} > 0$, then $a > 0$.

$$
\begin{aligned}
(4x - 1)^{-1} &> 0 \\
\frac{1}{4x - 1} &> 0 \\
4x - 1 &> 0 \quad \leftarrow \text{Reciprocal Property} \\
4x &> 1 \\
x &> \frac{1}{4}
\end{aligned}
$$

**Solution:** $\left\{x \mid x > \frac{1}{4}\right\}$ or $\left(\frac{1}{4}, \infty\right)$

**Graph:** Open parenthesis at $\frac{1}{4}$, shading to the right.

![[Pasted image 20260514213539.png|center]]

---

> [!info] Theorem: Absolute Value Inequalities  
> If $u$ is an algebraic expression and $a > 0$, then:
>

| Inequality     | Equivalent Statement               | Solution Set                     |
| :------------- | :--------------------------------- | :------------------------------- |
| $\|u\| < a$    | $-a < u < a$                       | $(-a, a)$                        |
| $\|u\| \leq a$ | $-a \leq u \leq a$                 | $[-a, a]$                        |
| $\|u\| > a$    | $u < -a \;\text{or}\; u > a$       | $(-\infty, -a) \cup (a, \infty)$ |
| $\|u\| \geq a$ | $u \leq -a \;\text{or}\; u \geq a$ | $(-\infty, -a] \cup [a, \infty)$ |

*Note: These equivalences hold only when $a > 0$. If $a \leq 0$, analyze case-by-case.*

### Conceptual Examples: Distance from Origin

**EXAMPLE 7: Less than** ($|x| < 4$)
We seek points distance $< 4$ from the origin.
$$ -4 < x < 4 \quad \Rightarrow \quad \text{Interval: } (-4, 4) $$

**EXAMPLE 8: Greater than** ($|x| > 3$)
We seek points distance $> 3$ from the origin.
$$ x < -3 \quad \text{or} \quad x > 3 \quad \Rightarrow \quad \text{Interval: } (-\infty, -3) \cup (3, \infty) $$
![[Pasted image 20260514215629.png|center]]

---

### EXAMPLE 9 Solving $|2x + 4| \leq 3$

$$
\begin{aligned}
-3 &\leq 2x + 4 \leq 3 & \leftarrow \text{Apply Theorem} \\
-3 - 4 &\leq 2x \leq 3 - 4 & \leftarrow \text{Subtract 4} \\
-7 &\leq 2x \leq -1 \\
-\frac{7}{2} &\leq x \leq -\frac{1}{2} & \leftarrow \text{Divide by 2}
\end{aligned}
$$

**Solution:** $\left[-\frac{7}{2}, -\frac{1}{2}\right]$

![[Pasted image 20260514215700.png]]

---

### EXAMPLE 10 Solving $|2x - 5| > 3$

$$
\begin{aligned}
2x - 5 &< -3 \quad \text{or} \quad 2x - 5 > 3 & \leftarrow \text{Apply Theorem} \\
2x &< 2 \quad \text{or} \quad 2x > 8 & \leftarrow \text{Add 5} \\
x &< 1 \quad \text{or} \quad x > 4 & \leftarrow \text{Divide by 2}
\end{aligned}
$$

**Solution:** $(-\infty, 1) \cup (4, \infty)$

![[Pasted image 20260514215717.png]]

> [!warning] Common Error
> Do not write the solution to Example 10 as $1 > x > 4$. This implies $x$ is less than 1 AND greater than 4 simultaneously, which is impossible. Always use the word **"or"** for disjoint intervals.

---
### Quadratic Inequality

> [!example] Example 3: Solving a Quadratic Inequality  
> Solve: $x^2 \leq 5x - 6$

**Solution**

Step 1: Move all terms to one side.  
$$
x^2 - 5x + 6 \leq 0
$$

Step 2: Factor.  
$$
(x - 2)(x - 3) \leq 0
$$

Step 3: Find critical points → zeros of factors: $x = 2$, $x = 3$.  
These divide the real line into intervals:  
$$
(-\infty, 2), \quad (2, 3), \quad (3, \infty)
$$

Step 4: Test sign in each interval.

| Interval | Test Value | Sign of $x-2$ | Sign of $x-3$ | Sign of $(x-2)(x-3)$ |
|----------|------------|---------------|---------------|----------------------|
| $(-\infty, 2)$ | $x=1$ | $-$ | $-$ | $+$ |
| $(2, 3)$ | $x=2.5$ | $+$ | $-$ | $-$ ← satisfies $\leq 0$ |
| $(3, \infty)$ | $x=4$ | $+$ | $+$ | $+$ |

Step 5: Include endpoints if inequality is non-strict ($\leq$ or $\geq$).  
At $x=2$: $(2-2)(2-3)=0$ → included.  
At $x=3$: $(3-2)(3-3)=0$ → included.

**Final Answer:**  
$$
[2, 3]
$$

![[Pasted image 20260518011555.png|center]]

> [!tip] Sign Diagram Shortcut  
> For polynomials, signs alternate across simple roots unless multiplicity is even. Here, both roots have multiplicity 1 → signs flip at each root. Start from rightmost interval (+ for leading coefficient positive), then alternate: $+ \; - \; +$. We want where product ≤ 0 → middle interval including endpoints.

---

> [!example] Example 4: Solving an Inequality with Repeated Factors  
> Solve: $x(x - 1)^2(x - 3) < 0$

**Solution**

Factors are already on one side and factored. Zeros at:  
$x = 0$, $x = 1$ (multiplicity 2), $x = 3$

Intervals:  
$$
(-\infty, 0), \quad (0, 1), \quad (1, 3), \quad (3, \infty)
$$

Sign diagram using test points:

![[Pasted image 20260518011824.png|center]]

Note: $(x-1)^2$ is always ≥ 0; zero only at $x=1$. Since inequality is strict ($<$), exclude all zeros.

**Final Answer:**  
$$
(0, 1) \cup (1, 3)
$$


> [!tip] Even Multiplicity → No Sign Change  
> At $x=1$, factor $(x-1)^2$ has even multiplicity → sign does **not** change across this root. That’s why both intervals adjacent to 1 have same sign for the product. Always check multiplicity when building sign diagrams!

---

> [!example] Example 5: Solving an Inequality Involving a Quotient  
> Solve: $\frac{1 + x}{1 - x} \geq 1$

**Solution**

Step 1: Move all terms to one side.  
$$
\frac{1 + x}{1 - x} - 1 \geq 0
$$

Step 2: Combine using common denominator $1 - x$:  
$$
\frac{1 + x - (1 - x)}{1 - x} = \frac{1 + x - 1 + x}{1 - x} = \frac{2x}{1 - x} \geq 0
$$

Step 3: Find critical points → numerator zero at $x = 0$, denominator zero at $x = 1$.  
Intervals:  
$$
(-\infty, 0), \quad (0, 1), \quad (1, \infty)
$$

Step 4: Sign diagram — *paste your table or sign chart here*

![[Pasted image 20260518012308.png|center]]

Step 5: Check endpoints.  
- $x = 0$: $\frac{2(0)}{1 - 0} = 0 \geq 0$ → included.  
- $x = 1$: undefined → excluded.

**Final Answer:**  
$$
[0, 1)
$$

![[Pasted image 20260518012324.png]]

> [!warning] Never Multiply Both Sides by Variable Expression in Inequalities  
> Multiplying by $1 - x$ would require case analysis (sign unknown). Always move all terms to one side and combine into single rational expression before analyzing sign.

---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. A72 - A77)
- - [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 84)