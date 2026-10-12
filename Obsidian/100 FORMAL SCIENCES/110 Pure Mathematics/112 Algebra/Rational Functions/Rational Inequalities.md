Date: 2026-05-19
Tags: [[Mathematics]], [[Algebra]], [[Rational Functions and Asymptotes#Rational Functions|Rational]], [[Interval Notation and Solving Inequalities#3 Solve Inequalities|inequalities]]

---
## Rational Inequalities

Rational functions are not necessarily continuous; vertical asymptotes break the graph into separate branches.

The intervals on which a rational function $r$ does not change sign are determined by both its vertical asymptotes and its zeros.

If $r(x) = P(x)/Q(x)$, the **cut points** of $r$ are the values of $x$ where either $P(x) = 0$ or $Q(x) = 0$ (the zeros of the numerator and the zeros of the denominator).

![[Pasted image 20260519191123.png|center]]

---

> [!info]
> 
> ### Solving Rational Inequalities
> 
> **1. Move All Terms to One Side** > Rewrite the inequality so all nonzero terms appear on one side of the inequality symbol. Bring all quotients to a common denominator.
> 
> **2. Factor Numerator and Denominator** > Factor both the numerator and denominator into irreducible factors to find the **cut points**.
> 
> **3. Find the Intervals** > List the intervals determined by the cut points.
> 
> **4. Make a Table or Diagram** > Use test values to make a table or diagram of the signs of each factor in each interval. Determine the sign of the rational function on that interval in the final row.
> 
> **5. Solve** > Determine the solutions from the last row of the table. Check whether the endpoints of these intervals satisfy the inequality (endpoints where $Q(x) = 0$ are always excluded).

---

> [!example]
> 
> **Example 3: Solving a Rational Inequality**
> 
> Solve the inequality $\frac{1 - 2x}{x^2 - 2x - 3} \ge 1$.
> 
> #### 1. Move all terms to one side
> 
> $$\begin{aligned} \frac{1 - 2x}{x^2 - 2x - 3} - 1 &\ge 0 \quad &\leftarrow \text{Move terms to LHS} \\ \frac{(1 - 2x) - (x^2 - 2x - 3)}{x^2 - 2x - 3} &\ge 0 \quad &\leftarrow \text{Common denominator} \\ \frac{4 - x^2}{x^2 - 2x - 3} &\ge 0 \quad &\leftarrow \text{Simplify} \end{aligned}$$
> 
> #### 2. Factor numerator and denominator
> 
> $$\frac{(2 - x)(2 + x)}{(x - 3)(x + 1)} \ge 0$$
> 
> Zeros of numerator: $2, -2$
> 
> Zeros of denominator: $3, -1$
> 
> Cut points: $-2, -1, 2, 3$
> 
> #### 3. Find the Intervals
> 
> Intervals determined by the cut points:
> 
> $$(-\infty, -2), \qquad (-2, -1), \qquad (-1, 2), \qquad (2, 3), \qquad (3, \infty)$$
> 
> #### 4. Make a table or diagram
> 
> Use test values to determine the sign of each factor on each interval:
> 
> |**Interval**|**(−∞,−2)**|**(−2,−1)**|**(−1,2)**|**(2,3)**|**(3,∞)**|
> |---|---|---|---|---|---|
> |**Sign of $2 - x$**|$+$|$+$|$+$|$-$|$-$|
> |**Sign of $2 + x$**|$-$|$+$|$+$|$+$|$+$|
> |**Sign of $x - 3$**|$-$|$-$|$-$|$-$|$+$|
> |**Sign of $x + 1$**|$-$|$-$|$+$|$+$|$+$|
> |**Sign of $\frac{(2 - x)(2 + x)}{(x - 3)(x + 1)}$**|$-$|$+$|$-$|$+$|$-$|
> 
> #### 5. Solve
> 
> Inequality is satisfied where the expression is positive or zero ($\ge 0$).
> 
> Denominator zeros ($x = -1, x = 3$) must be excluded.
> 
> Numerator zeros ($x = -2, x = 2$) satisfy the inequality.
> 
> Solution: $[-2, -1) \cup [2, 3)$
> 
> ![[Pasted image 20260519191316.png|center]]


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 320)