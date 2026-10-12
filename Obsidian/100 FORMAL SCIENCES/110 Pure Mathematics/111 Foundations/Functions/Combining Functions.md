Date: 2026-05-17
Tags: [[Mathematics]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---
# Algebra of Functions

Let $f$ and $g$ be functions with domains $A$ and $B$.

> [!info] Operations on Functions
> | Operation | Notation | Definition | Domain |
> | :--- | :--- | :--- | :--- |
> | **Sum** | $(f + g)(x)$ | $f(x) + g(x)$ | $A \cap B$ |
> | **Difference** | $(f - g)(x)$ | $f(x) - g(x)$ | $A \cap B$ |
> | **Product** | $(fg)(x)$ | $f(x)g(x)$ | $A \cap B$ |
> | **Quotient** | $\left(\frac{f}{g}\right)(x)$ | $\frac{f(x)}{g(x)}$ | $\{x \in A \cap B \mid g(x) \neq 0\}$ |

**Note:** The domain of the combined function is the intersection of the domains of $f$ and $g$, with the additional restriction that the denominator cannot be zero for quotients.

---

> [!example] Example 1: Combinations of Functions and Their Domains
> Let $f(x) = \frac{1}{x-2}$ and $g(x) = \sqrt{x}$.
> (a) Find the functions $f+g, f-g, fg$, and $f/g$ and their domains.
> (b) Find $(f+g)(4), (f-g)(4), (fg)(4)$, and $(f/g)(4)$.

**Solution**
(a) **Domains**
Domain of $f$: $\{x \mid x \neq 2\}$
Domain of $g$: $\{x \mid x \ge 0\}$
Intersection: $\{x \mid x \ge 0 \text{ and } x \neq 2\} = [0, 2) \cup (2, \infty)$

**Combined Functions**
$$ \begin{aligned} (f+g)(x) &= \frac{1}{x-2} + \sqrt{x} & \text{Domain: } \{x \mid x \ge 0, x \neq 2\} \\ (f-g)(x) &= \frac{1}{x-2} - \sqrt{x} & \text{Domain: } \{x \mid x \ge 0, x \neq 2\} \\ (fg)(x) &= \frac{\sqrt{x}}{x-2} & \text{Domain: } \{x \mid x \ge 0, x \neq 2\} \\ \left(\frac{f}{g}\right)(x) &= \frac{1/(x-2)}{\sqrt{x}} = \frac{1}{(x-2)\sqrt{x}} & \text{Domain: } \{x \mid x > 0, x \neq 2\} \end{aligned} $$
*Note: For $f/g$, we exclude $x=0$ because $g(0)=0$.*

(b) **Evaluations at $x=4$**
$$ \begin{aligned} (f+g)(4) &= f(4) + g(4) = \frac{1}{2} + 2 = \frac{5}{2} \\ (f-g)(4) &= f(4) - g(4) = \frac{1}{2} - 2 = -\frac{3}{2} \\ (fg)(4) &= f(4)g(4) = \left(\frac{1}{2}\right)(2) = 1 \\ \left(\frac{f}{g}\right)(4) &= \frac{f(4)}{g(4)} = \frac{1/2}{2} = \frac{1}{4} \end{aligned} $$
---
## Graphical Addition

The graph of the function $f + g$ is obtained by adding corresponding $y$-coordinates of the graphs of $f$ and $g$.

> [!info] Graphical Addition
> To graph $y = (f + g)(x)$:
> 1.  Take the height of $f(x)$ (segment $PQ$).
> 2.  Add it to the height of $g(x)$ (segment $PR$).
> 3.  The result is the height of the sum (point $S$).
> 
![[Pasted image 20260517192006.png|center|358]]

> [!example] Example 2: Using Graphical Addition
> Use graphical addition to graph $f + g$.

**Solution**
Visually sum the heights of the functions at each $x$-value.

*Graph showing the geometric addition of vertical segments $PQ$ and $PR$ to find point $S$ on the curve $y=(f+g)(x)$:*

![[Pasted image 20260517192156.png|center|402]]

---
# Composition of Functions


> [!info] Definition
> Given two functions $f$ and $g$, the **composite function** $f \circ g$ (read "$f$ composed with $g$") is defined by:
> $$ (f \circ g)(x) = f(g(x)) $$
>
> **Order of Operations:** Apply $g$ first, then apply $f$ to the result.
>
> **Domain:** The set of all $x$ in the domain of $g$ such that $g(x)$ is in the domain of $f$.
> 
> ![[Pasted image 20260517195138.png|center]]

**Example:**
$$h(x)=f(g(x))=f(x^2+1)=\sqrt{x^2+1}$$

![[Pasted image 20260517195039.png|center|610]]


> [!example] Example 3: Finding the Composition of Functions
> Let $f(x) = x^2$ and $g(x) = x - 3$.
> (a) Find $f \circ g$ and $g \circ f$.
> (b) Evaluate $(f \circ g)(5)$ and $(g \circ f)(7)$.

**Solution**

(a)
$$ \begin{aligned} (f \circ g)(x) &= f(g(x)) = f(x - 3) = (x - 3)^2 \\ (g \circ f)(x) &= g(f(x)) = g(x^2) = x^2 - 3 \end{aligned} $$
Domain of both is $\mathbb{R}$. Note that $f \circ g \neq g \circ f$.

(b)
$$ \begin{aligned} (f \circ g)(5) &= f(g(5)) = f(2) = 2^2 = 4 \\ (g \circ f)(7) &= g(f(7)) = g(49) = 49 - 3 = 46 \end{aligned} $$
---
> [!example] Example 4: Composition with Itself
> Let $f(x) = \sqrt{x}$ and $g(x) = \sqrt{2-x}$.

**(c) $f \circ f$**
$$ (f \circ f)(x) = f(f(x)) = f(\sqrt{x}) = \sqrt{\sqrt{x}} = \sqrt[4]{x} $$
Domain: $[0, \infty)$

**(d) $g \circ g$**
$$ (g \circ g)(x) = g(g(x)) = g(\sqrt{2-x}) = \sqrt{2 - \sqrt{2-x}} $$
**Domain Analysis:**
1.  Inner root defined: $2 - x \ge 0 \implies x \le 2$.
2.  Outer root defined: $2 - \sqrt{2-x} \ge 0 \implies \sqrt{2-x} \le 2 \implies 2-x \le 4 \implies x \ge -2$.
Domain: $[-2, 2]$

---
## Composition of Three Functions

The composite function $f \circ g \circ h$ is found by applying $h$, then $g$, then $f$:
$$ (f \circ g \circ h)(x) = f(g(h(x))) $$

> [!example] Example 5: A Composition of Three Functions
> Find $f \circ g \circ h$ if $f(x) = \frac{x}{x+1}$, $g(x) = x^{10}$, and $h(x) = x + 3$.

**Solution**
$$ \begin{aligned} (f \circ g \circ h)(x) &= f(g(h(x))) \\ &= f(g(x+3)) \\ &= f((x+3)^{10}) \\ &= \frac{(x+3)^{10}}{(x+3)^{10} + 1} \end{aligned} $$
> Conclusion: It is possible to take the composition of three or more functions.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 214)