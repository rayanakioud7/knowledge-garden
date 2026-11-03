---
type: note
date: '2026-10-27'
tags:
- analysis
- mathematics
- multivariable-calculus
- limits-and-continuity
topics:
- '[[Analysis]]'
- '[[Mathematics]]'
- '[[Multivariable Calculus]]'
- '[[Limits and Continuity]]'
---

Date: 2026-10-27
Tags: [[Analysis]], [[Mathematics]], [[Multivariable Calculus]], [[Limits and Continuity]]

---
## Limits of Functions of Several Variables

### Precise Definition of a Limit

> [!info] Definition / Theorem: 
> Limit of a Function of Two Variables (Definition 1) Let $f$ be a function of two variables whose domain $D$ includes points arbitrarily close to $(a, b)$. Then the **limit of $f(x, y)$ as $(x, y)$ approaches $(a, b)$** is $L$, written as:
> 
>   
> 
> $$\lim_{(x, y) \to (a, b)} f(x, y) = L$$
> 
> if for every number $\varepsilon > 0$ there is a corresponding number $\delta > 0$ such that:
> 
>   
> 
> $$\text{if } (x, y) \in D \text{ and } 0 < \sqrt{(x - a)^2 + (y - b)^2} < \delta \quad \text{then} \quad \vert{}f(x, y) - L\vert{} < \varepsilon$$

> ![[Pasted image 20261027221318.png]] _(Figure 1 & Figure 2: Geometric illustrations of Definition 1 showing points in the punctured disk $D_\delta$ centered at $(a, b)$ mapping into the interval $(L - \varepsilon, L + \varepsilon)$, with the corresponding surface patch $S$ lying between the horizontal planes $z = L - \varepsilon$ and $z = L + \varepsilon$)_
> 
>   

### Direction of Approach and Nonexistence of Limits

> [!abstract] Core Principle / Properties:
> Two-Path Test for Nonexistence of a Limit Unlike functions of a single variable (which have only two directions of approach, left and right), a point $(x, y)$ can approach $(a, b)$ from an infinite number of directions along any path staying within the domain $D$.
> 
>   
> 
> If $f(x, y) \to L_1$ as $(x, y) \to (a, b)$ along a path $C_1$ and $f(x, y) \to L_2$ as $(x, y) \to (a, b)$ along a path $C_2$, where $L_1 \neq L_2$, then $\lim_{(x, y) \to (a, b)} f(x, y)$ **does not exist**.
> 
>   

> ![[Pasted image 20261027221348.png]] 
> _(Figure 3: Multiple distinct paths and curves in the $xy$-plane along which $(x, y)$ can approach the point $(a, b)$)_
> 
>   

> [!warning] 
> Pitfall Obtaining the exact same limiting value along the coordinate axes ($x = 0$ and $y = 0$), or even along _every_ nonvertical straight line $y = mx$ through the origin, does **not** prove that the limit exists. A different path, such as a parabola $x = y^2$, may still yield a different limiting value. To prove a limit _does_ exist, you must use the $\varepsilon$-$\delta$ definition, the Limit Laws, or the Squeeze Theorem.
> 
>   

> [!abstract] Core Principle / Properties: 
> Limit Laws and the Squeeze Theorem The single-variable Limit Laws (sum, difference, product, quotient) and the Squeeze Theorem extend directly to functions of two variables. In particular, the foundational building blocks hold:
> 
>   
> 
> $$\lim_{(x, y) \to (a, b)} x = a \qquad \lim_{(x, y) \to (a, b)} y = b \qquad \lim_{(x, y) \to (a, b)} c = c$$

## Continuity

### Continuity of Functions of Two Variables

> [!info] Definition / Theorem: 
> Continuity at a Point and on a Domain (Definition 4) A function $f$ of two variables is called **continuous at $(a, b)$** if:
> 
>   
> 
> $$\lim_{(x, y) \to (a, b)} f(x, y) = f(a, b)$$
> 
> We say $f$ is **continuous on $D$** if $f$ is continuous at every point $(a, b)$ in $D$. Geometrically, the surface that is the graph of a continuous function has no hole or break.
> 
>   

|**Function Class**|**General Form / Structure**|**Continuity Domain**|
|---|---|---|
|**Polynomial Function**|Sum of terms of the form $c x^m y^n$ ($m, n \in \mathbb{Z}_{\ge 0}$)|Continuous everywhere on $\mathbb{R}^2$|
|**Rational Function**|Ratio of two polynomials $\frac{P(x, y)}{Q(x, y)}$|Continuous at every point in its domain ($Q(x, y) \neq 0$)|
|**Composite Function**|$h(x, y) = (g \circ f)(x, y) = g(f(x, y))$|Continuous wherever $f(x, y)$ is continuous and $g(t)$ is continuous on the range of $f$|

## Functions of Three or More Variables

### General Vector Formulation in $\mathbb{R}^n$

> [!info] Definition / Theorem:
>  Limits and Continuity in $\mathbb{R}^n$ (Definition 5) Using vector notation where $\mathbf{x} = \langle x_1, x_2, \dots, x_n \rangle$, $\mathbf{a} = \langle a_1, a_2, \dots, a_n \rangle$, and $\vert{}\mathbf{x} - \mathbf{a}\vert{}$ is the Euclidean distance in $\mathbb{R}^n$, if $f$ is defined on a subset $D$ of $\mathbb{R}^n$, then:
> 
>   
> 
> $$\lim_{\mathbf{x} \to \mathbf{a}} f(\mathbf{x}) = L$$
> 
> means that for every number $\varepsilon > 0$ there is a corresponding number $\delta > 0$ such that:
> 
>   
> 
> $$\text{if } \mathbf{x} \in D \text{ and } 0 < \vert{}\mathbf{x} - \mathbf{a}\vert{} < \delta \quad \text{then} \quad \vert{}f(\mathbf{x}) - L\vert{} < \varepsilon$$
> 
> Furthermore, $f$ is **continuous at $\mathbf{a}$** if:
> 
>   
> 
> $$\lim_{\mathbf{x} \to \mathbf{a}} f(\mathbf{x}) = f(\mathbf{a})$$

| **Dimension $n$** | **Point Vector $\mathbf{x}$** | **Target Vector $\mathbf{a}$** | **Euclidean Distance Metric $∥x−a∥\Vert{}\mathbf{x} - \mathbf{a}\Vert{}$** |
| ----------------- | ----------------------------- | ------------------------------ | -------------------------------------------------------------------------- |
| $n = 1$           | $x$                           | $a$                            | $\Vert{}x - a\Vert{}$                                                      |
| $n = 2$           | $\langle x, y \rangle$        | $\langle a, b \rangle$         | $\sqrt{(x - a)^2 + (y - b)^2}$                                             |
| $n = 3$           | $\langle x, y, z \rangle$     | $\langle a, b, c \rangle$      | $\sqrt{(x - a)^2 + (y - b)^2 + (z - c)^2}$                                 |

## Worked Examples

> [!example] Example: Showing a Limit Does Not Exist Along Linear Paths Determine whether $\lim_{(x, y) \to (0, 0)} \frac{xy}{x^2 + y^2}$ exists.
> 
>   
> 
> **Solution:** First, approach $(0, 0)$ along the $x$-axis by setting $y = 0$ for $x \neq 0$:
> 
>   
> 
> $$f(x, 0) = \frac{0}{x^2} = 0 \implies f(x, y) \to 0 \quad \text{as } (x, y) \to (0, 0) \text{ along } y = 0$$
> 
> Approaching along the $y$-axis ($x = 0$ for $y \neq 0$) similarly gives $f(0, y) = \frac{0}{y^2} = 0 \to 0$. Next, approach $(0, 0)$ along the diagonal line $y = x$ for $x \neq 0$:
> 
>   
> 
> $$\begin{aligned} f(x, x) &= \frac{x^2}{x^2 + x^2} \\ &= \frac{x^2}{2x^2} \\ &= \frac{1}{2} \implies f(x, y) \to \frac{1}{2} \quad \text{as } (x, y) \to (0, 0) \text{ along } y = x \end{aligned}$$
> 
> Since different paths yield different limiting values ($0 \neq \frac{1}{2}$), the limit does not exist.
> 
>   
> 
> $$\boxed{\text{Does Not Exist}}$$

> [!example] Example: Showing a Limit Does Not Exist Using a Parabolic Path If $f(x, y) = \frac{xy^2}{x^2 + y^4}$, does $\lim_{(x, y) \to (0, 0)} f(x, y)$ exist?
> 
>   
> 
> **Solution:** Let $(x, y) \to (0, 0)$ along any nonvertical line through the origin $y = mx$, where $m$ is the slope:
> 
>   
> 
> $$\begin{aligned} f(x, mx) &= \frac{x(mx)^2}{x^2 + (mx)^4} \\ &= \frac{m^2 x^3}{x^2 + m^4 x^4} \\ &= \frac{m^2 x}{1 + m^4 x^2} \to 0 \quad \text{as } (x, y) \to (0, 0) \text{ along } y = mx \end{aligned}$$
> 
> Now let $(x, y) \to (0, 0)$ along the parabola $x = y^2$ for $y \neq 0$:
> 
>   
> 
> $$\begin{aligned} f(y^2, y) &= \frac{y^2 \cdot y^2}{(y^2)^2 + y^4} \\ &= \frac{y^4}{2y^4} \\ &= \frac{1}{2} \to \frac{1}{2} \quad \text{as } (x, y) \to (0, 0) \text{ along } x = y^2 \end{aligned}$$
> 
> Since approaching along $x = y^2$ gives $\frac{1}{2}$ whereas linear paths give $0$, the limit does not exist.
> 
>   
> 
> $$\boxed{\text{Does Not Exist}}$$

> ![[Pasted image 20261027221816.png]]
>  _(Figure 7: Graph of $f(x, y) = \frac{xy^2}{x^2 + y^4}$ showing the constant ridge of height $z = 0.5$ lying directly above the parabola $x = y^2$)_
> 
>   

> [!example] Example: Proving a Limit Exists via the $\varepsilon$-$\delta$ Definition and Squeeze Theorem Find $\lim_{(x, y) \to (0, 0)} \frac{3x^2 y}{x^2 + y^2}$ if it exists.
> 
>   
> 
> **Solution:** Let $\varepsilon > 0$. We want to find $\delta > 0$ such that if $0 < \sqrt{x^2 + y^2} < \delta$, then $\left\vert{} \frac{3x^2 y}{x^2 + y^2} - 0 \right\vert{} < \varepsilon$. Observe that since $y^2 \ge 0$, we have $x^2 \le x^2 + y^2$, which means $\frac{x^2}{x^2 + y^2} \le 1$. Therefore:
> 
>   
> 
> $$\begin{aligned} \left\vert{} \frac{3x^2 y}{x^2 + y^2} - 0 \right\vert{} &= \frac{3x^2 \vert{}y\vert{}}{x^2 + y^2} \\ &\le 3\vert{}y\vert{} \\ &= 3\sqrt{y^2} \\ &\le 3\sqrt{x^2 + y^2} \end{aligned}$$
> 
> Choose $\delta = \frac{\varepsilon}{3}$. Then for $0 < \sqrt{x^2 + y^2} < \delta$, we obtain:
> 
>   
> 
> $$\left\vert{} \frac{3x^2 y}{x^2 + y^2} - 0 \right\vert{} \le 3\sqrt{x^2 + y^2} < 3\delta = 3\left(\frac{\varepsilon}{3}\right) = \varepsilon$$
> 
> Alternatively, since $0 \le \left\vert{} \frac{3x^2 y}{x^2 + y^2} \right\vert{} \le 3\vert{}y\vert{}$ and $\lim_{(x, y) \to (0, 0)} 3\vert{}y\vert{} = 0$, the Squeeze Theorem directly confirms the limit is $0$.
> 
>   
> 
> $$\boxed{0}$$

> [!example] Example: Determining Continuity of Piecewise and Composite Functions (a) Determine where the piecewise function $f(x, y) = \begin{cases} \frac{3x^2 y}{x^2 + y^2} & \text{if } (x, y) \neq (0, 0) \\ 0 & \text{if } (x, y) = (0, 0) \end{cases}$ is continuous. (b) Determine where $h(x, y) = \arctan\left(\frac{y}{x}\right)$ is continuous.
> 
>   
> 
> **Solution:** **(a)** For $(x, y) \neq (0, 0)$, $f$ is a rational function whose denominator $x^2 + y^2$ is nonzero, so $f$ is continuous at all $(x, y) \neq (0, 0)$. At $(0, 0)$, using the limit found in Example 4:
> 
>   
> 
> $$\lim_{(x, y) \to (0, 0)} f(x, y) = \lim_{(x, y) \to (0, 0)} \frac{3x^2 y}{x^2 + y^2} = 0 = f(0, 0)$$
> 
> Therefore, $f$ is continuous at $(0, 0)$ as well, meaning $f$ is continuous on all of $\mathbb{R}^2$.
> 
>   ![[Pasted image 20261027221904.png]]
> 
> **(b)** The inner function $f(x, y) = \frac{y}{x}$ is a rational function and is therefore continuous everywhere except on the vertical line $x = 0$. The outer function $g(t) = \arctan t$ is continuous everywhere on $\mathbb{R}$. Thus, the composite function $h(x, y) = g(f(x, y)) = \arctan(y/x)$ is continuous at all points in $\mathbb{R}^2$ where $x \neq 0$.
> 
>   
> 
> $$\boxed{\text{(a) Continuous on } \mathbb{R}^2 \qquad \text{(b) Continuous on } \{(x, y) \in \mathbb{R}^2 \mid x \neq 0\}}$$
> 
> ![[Pasted image 20261027221915.png]]


---
# ~={red}References=~

_Calculus, James Stewart_ (p. 916-923)