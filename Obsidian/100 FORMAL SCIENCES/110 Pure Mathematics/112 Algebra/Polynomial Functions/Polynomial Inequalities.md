Date: 2026-05-19
Tags: [[Mathematics]], [[Algebra]] ,[[Polynomial Functions and Their Graphs|Polynomials]], [[Interval Notation and Solving Inequalities#3 Solve Inequalities|inequalities]]

---

# Polynomial Inequalities

An important consequence of the Intermediate Value Theorem is that the values of a polynomial function $P$ do not change sign between successive zeros. Between successive $x$-intercepts, the graph of $P$ is entirely above or entirely below the $x$-axis.

see Note Intermediate Value Theorem

![[Pasted image 20260519183055.png|center]]

---

> [!info]
> 
> ### Solving Polynomial Inequalities
> 
> **1. Move All Terms to One Side** > Rewrite the inequality so that all nonzero terms appear on one side of the inequality symbol.
> 
> **2. Factor the Polynomial** > Factor the polynomial into irreducible factors, and find the real zeros of the polynomial.
> 
> **3. Find the Intervals** > List the intervals determined by the real zeros.
> 
> **4. Make a Table or Diagram** > Use test values to make a table or diagram of the signs of each factor in each interval. Determine the sign of the polynomial on that interval in the final row.
> 
> **5. Solve** > Determine the solutions of the inequality from the last row of the table. Check whether the endpoints of these intervals satisfy the inequality (relevant if the inequality involves $\le$ or $\ge$).

---

> [!example]
> 
> **Example 1: Solving a Polynomial Inequality**
> 
> Solve the inequality $2x^3 + x^2 + 6 \ge 13x$.
> 
> #### 1. Move all terms to one side
> 
> $$2x^3 + x^2 - 13x + 6 \ge 0$$
> 
> #### 2. Factor the polynomial
> 
> $$(x - 2)(2x - 1)(x + 3) \ge 0 \quad \leftarrow \text{see Note Factoring a Polynomial Using the Factor Theorem}$$
> 
> Real zeros: $-3$, $\frac{1}{2}$, and $2$
> 
> #### 3. Find the Intervals
> 
> Intervals determined by the zeros:
> 
> $$(-\infty, -3), \qquad \left(-3, \frac{1}{2}\right), \qquad \left(\frac{1}{2}, 2\right), \qquad (2, \infty)$$
> 
> #### 4. Make a table or diagram
> 
> Use test values to determine the sign of each factor on each interval:
> 
> |**Interval**|**(−∞,−3)**|**(−3,1/2​)**|**(1/2​,2)**|**(2,∞)**|
> |---|---|---|---|---|
> |**Test Value**|$x = -4$|$x = 0$|$x = 1$|$x = 3$|
> |**Sign of $x - 2$**|$-$|$-$|$-$|$+$|
> |**Sign of $2x - 1$**|$-$|$-$|$+$|$+$|
> |**Sign of $x + 3$**|$-$|$+$|$+$|$+$|
> |**Sign of $(x - 2)(2x - 1)(x + 3)$**|$-$|$+$|$-$|$+$|
> 
> #### 5. Solve
> 
> Inequality is satisfied where the product is positive or zero ($\ge 0$).
> 
> Check endpoints: $-3$, $\frac{1}{2}$, and $2$ satisfy the inequality.
> 
> Solution: $[-3, \frac{1}{2}] \cup [2, \infty)$
> 
> ![[Pasted image 20260519183350.png|center]]

---

> [!example]
> 
> **Example 2: Solving a Polynomial Inequality**
> 
> Solve the inequality $3x^4 - x^2 - 4 < 2x^3 + 12x$.
> 
> #### 1. Move all terms to one side
> 
> $$3x^4 - 2x^3 - x^2 - 12x - 4 < 0$$
> 
> #### 2. Factor the polynomial
> 
> $$(x - 2)(3x + 1)(x^2 + x + 2) < 0 \quad \leftarrow \text{factored into linear and irreducible quadratic factors}$$
> 
> Real zeros: $2$ and $-\frac{1}{3}$
> 
> _The factor $x^2 + x + 2$ has no real zeros._
> 
> #### 3. Find the Intervals
> 
> Intervals determined by the real zeros:
> 
> $$(-\infty, -\frac{1}{3}), \qquad (-\frac{1}{3}, 2), \qquad (2, \infty)$$
> 
> #### 4. Make a table or diagram
> 
> Use test values to determine the sign of each factor on each interval:
> 
> |**Interval**|**(−∞,−1/3​)**|**(−1/3​,2)**|**(2,∞)**|
> |---|---|---|---|
> |**Sign of $x - 2$**|$-$|$-$|$+$|
> |**Sign of $3x + 1$**|$-$|$+$|$+$|
> |**Sign of $x^2 + x + 2$**|$+$|$+$|$+$|
> |**Sign of $(x - 2)(3x + 1)(x^2 + x + 2)$**|$+$|$-$|$+$|
> 
> #### 5. Solve
> 
> Inequality requires the polynomial values to be less than 0 ($< 0$).
> 
> Endpoints do not satisfy the strict inequality.
> 
> Solution: $(-\frac{1}{3}, 2)$
> 
> ![[Pasted image 20260519185248.png|center]]


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 318)