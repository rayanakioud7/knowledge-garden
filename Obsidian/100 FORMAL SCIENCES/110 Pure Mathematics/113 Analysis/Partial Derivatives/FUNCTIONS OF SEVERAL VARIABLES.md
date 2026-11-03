---
type: note
date: '2026-10-27'
tags:
- analysis
- mathematics
- multivariable-calculus
- functions-of-several-variables
- level-curves
topics:
- '[[Analysis]]'
- '[[Mathematics]]'
- '[[Multivariable Calculus]]'
- '[[Functions of Several Variables]]'
- '[[Level Curves]]'
---

Date: 2026-10-27
Tags: [[Analysis]], [[Mathematics]], [[Multivariable Calculus]], [[Functions of Several Variables]], [[Level Curves]]

## Functions of Two Variables

### Domain, Range, and Models

> [!info] Definition / Theorem: Function of Two Variables
> A **function $f$ of two variables** is a rule that assigns to each ordered pair of real numbers $(x, y)$ in a set $D \subset \mathbb{R}^2$ a unique real number denoted by $f(x, y)$.
> 
> 
> * **Domain ($D$):** The set of ordered pairs $(x, y)$ for which $f$ is defined. If a function is given by a formula and no domain is specified, the domain is the set of all pairs $(x, y)$ for which the expression yields a well-defined real number.
> 
> 
> * **Range:** The set of real values that $f$ takes on:
> 
> 
> 
> $$\text{Range} = \{f(x, y) \mid (x, y) \in D\} \subset \mathbb{R}$$
> 
> 
> 
> In the equation $z = f(x, y)$, $x$ and $y$ are the **independent variables** and $z$ is the **dependent variable**.
> 
> 
> 
> 

> ![[Pasted image 20261027213659.png]]
> *(Figure 1: Arrow diagram visualizing a function of two variables mapping points $(x, y)$ in the domain $D \subset \mathbb{R}^2$ to real numbers $z = f(x, y)$ on the $z$-axis)*
> 
> 

> [!abstract] Core Principle / Properties: Cobb-Douglas Production Function
> Functions of two variables can be represented verbally, numerically (via a table of values), algebraically (via an explicit formula), or visually (via a graph or level curves). A classic algebraic model in economics is the **Cobb-Douglas production function**, which models total monetary production $P$ as a function of labor $L$ and invested capital $K$:
> 
> 
> 
> $$P(L, K) = b L^{\alpha} K^{1 - \alpha} \qquad D = \{(L, K) \mid L \ge 0, K \ge 0\}$$
> 
> 
> 
> where $b$ and $\alpha$ are constants derived by fitting economic data via the method of least squares.
> 
> 

### Graphs and Surfaces

> [!info] Definition / Theorem: Graph of a Function of Two Variables
> If $f$ is a function of two variables with domain $D$, then the **graph** of $f$ is the set of all points $(x, y, z)$ in $\mathbb{R}^3$ such that $z = f(x, y)$ and $(x, y)$ is in $D$:
> 
> 
> 
> $$S = \{(x, y, z) \in \mathbb{R}^3 \mid z = f(x, y), (x, y) \in D\}$$
> 
> 
> 
> The graph of a function of two variables is a **surface** $S$ lying directly above or below its domain $D$ in the $xy$-plane.
> 
> 

> ![[Pasted image 20261027213715.png]]
> *(Figure 5: The graph of $f$ as a surface $S$ in $\mathbb{R}^3$ lying at height $z = f(x, y)$ directly above its domain $D$ in the $xy$-plane)*
> 
> 

|**Function Type**|**Algebraic Form**|**Surface Geometry in R3\mathbb{R}^3R3**|
|---|---|---|
|**Linear Function**|$f(x, y) = ax + by + c$|Plane with equation $ax + by - z + c = 0$|
|**Upper Hemisphere**|$g(x, y) = \sqrt{r^2 - x^2 - y^2}$|Top half ($z \ge 0$) of the sphere $x^2 + y^2 + z^2 = r^2$|
|**Elliptic Paraboloid**|$h(x, y) = ax^2 + by^2 \quad (a, b > 0)$|Paraboloid where horizontal traces are ellipses and vertical traces are parabolas|


> [!warning] Pitfall
> An entire sphere $x^2 + y^2 + z^2 = r^2$ cannot be represented by a single function of $x$ and $y$ because a single input pair $(x, y)$ cannot map to two distinct $z$-values. The upper hemisphere is represented by $g(x, y) = \sqrt{r^2 - x^2 - y^2}$ ($z \ge 0$), while the lower hemisphere requires a separate function, $h(x, y) = -\sqrt{r^2 - x^2 - y^2}$ ($z \le 0$).
> 
> 

---

## Level Curves and Contour Maps

### Geometric Interpretation

> [!info] Definition / Theorem: Level Curves
> The **level curves** (or **contour lines**) of a function $f$ of two variables are the curves in the $xy$-plane with equations:
> 
> 
> 
> $$f(x, y) = k$$
> 
> 
> 
> where $k$ is a constant in the range of $f$. A collection of level curves plotted in the domain plane is called a **contour map**.
> 
> 

> ![[Pasted image 20261027213917.png]]
> 


> [!abstract] Core Principle / Properties: Interpreting Contour Maps
> * **Horizontal Traces vs. Level Curves:** The level curves $f(x, y) = k$ in $\mathbb{R}^2$ are the orthogonal projections onto the $xy$-plane of the **horizontal traces** obtained by intersecting the surface $z = f(x, y)$ with the horizontal plane $z = k$ in $\mathbb{R}^3$.
> 
> 
> * **Steepness Indicator:** For equally spaced values of $k$, the surface $z = f(x, y)$ is **steep** where the level curves crowd close together, and **flatter** where the level curves are farther apart.
> 
> 
> * **Physical Applications:** On topographic maps, level curves represent paths of constant elevation; on weather maps, level curves of constant temperature are called **isothermals**.
> 
> 
> 
> 

![[Pasted image 20261027214348.png]]

---

## Functions of Three or More Variables

### Level Surfaces and Vector Notation

> [!info] Definition / Theorem: Functions of Three and $n$ Variables
> * **Function of Three Variables:** A rule $f$ that assigns to each ordered triple $(x, y, z)$ in a domain $D \subset \mathbb{R}^3$ a unique real number denoted by $f(x, y, z)$.
> 
> 
> * **Level Surfaces:** Because the graph of $w = f(x, y, z)$ lies in four-dimensional space $\mathbb{R}^4$, we visualize $f$ in $\mathbb{R}^3$ by examining its **level surfaces**, which are the surfaces with equations:
> 
> 
> 
> $$f(x, y, z) = k \qquad (k \in \text{Range}(f))$$
> 
> 
> * **Function of $n$ Variables:** A rule that assigns a real number $z = f(x_1, x_2, \dots, x_n)$ to an $n$-tuple $(x_1, x_2, \dots, x_n)$ of real numbers in a subset $D \subset \mathbb{R}^n$. Using vector notation with $\mathbf{x} = \langle x_1, x_2, \dots, x_n \rangle \in V_n$, we write $f(\mathbf{x})$ in place of $f(x_1, x_2, \dots, x_n)$. For example, a linear cost function with unit cost vector $\mathbf{c} = \langle c_1, c_2, \dots, c_n \rangle$ can be written compactly as a dot product:
> 
> 
> 
> $$f(\mathbf{x}) = \mathbf{c} \cdot \mathbf{x} = c_1 x_1 + c_2 x_2 + \dots + c_n x_n$$
> 
> 
> 
> 

> ![[Pasted image 20261027213848.png]]
> *(Figure 20: Level surfaces of $f(x, y, z) = x^2 + y^2 + z^2$ forming a family of concentric spheres $x^2 + y^2 + z^2 = k$ with radius $\sqrt{k}$)*
> 
> 

|**Number of Variables**|**Domain Subset**|**Graph Space**|**Level Set Equation & Geometry**|
|---|---|---|---|
|$2$ Variables: $f(x, y)$|$D \subset \mathbb{R}^2$|Surface in $\mathbb{R}^3$|$f(x, y) = k$ (Level curves in $\mathbb{R}^2$)|
|$3$ Variables: $f(x, y, z)$|$D \subset \mathbb{R}^3$|$4\text{D}$ hypersurface in $\mathbb{R}^4$|$f(x, y, z) = k$ (Level surfaces in $\mathbb{R}^3$)|
|$n$ Variables: $f(\mathbf{x})$|$D \subset \mathbb{R}^n$|Subset of $\mathbb{R}^{n+1}$|$f(x_1, \dots, x_n) = k$ (Hypersurfaces in $\mathbb{R}^n$)|

---

## Worked Examples

> [!example] Example: Evaluating and Finding the Domain of Functions of Two Variables
> For each function, evaluate $f(3, 2)$ and find the domain:
> (a) $f(x, y) = \frac{\sqrt{x + y + 1}}{x - 1}$
> (b) $f(x, y) = x\ln(y^2 - x)$
> 
> 
> **Solution:**
> **(a)** Substituting $x = 3$ and $y = 2$ gives:
> 
> 
> 
> $$f(3, 2) = \frac{\sqrt{3 + 2 + 1}}{3 - 1} = \frac{\sqrt{6}}{2}$$
> 
> 
> 
> The expression is real and well-defined when the radicand is nonnegative and the denominator is nonzero:
> 
> 
> 
> $$\begin{aligned} x + y + 1 \ge 0 &\implies y \ge -x - 1 \\ x - 1 \neq 0 &\implies x \neq 1 \end{aligned}$$
> 
> 
> 
> Geometrically, this is the set of all points lying on or above the line $y = -x - 1$, excluding points on the vertical line $x = 1$.
> 
> 
> **(b)** Substituting $x = 3$ and $y = 2$ gives:
> 
> 
> 
> $$f(3, 2) = 3\ln(2^2 - 3) = 3\ln(1) = 0$$
> 
> 
> 
> Since $\ln(y^2 - x)$ is defined only when its argument is strictly positive, we require $y^2 - x > 0$, or $x < y^2$ (the region to the left of the parabola $x = y^2$).
> 
> 
> 
> $$\boxed{\text{(a) } f(3, 2) = \frac{\sqrt{6}}{2}, \; D = \{(x, y) \mid x + y + 1 \ge 0, x \neq 1\} \qquad \text{(b) } f(3, 2) = 0, \; D = \{(x, y) \mid x < y^2\}}$$
> 
> 

> ![[Pasted image 20261027214049.png|356]]
> *(Figure 2 & Figure 3: Domain regions in the $xy$-plane showing the half-plane $y \ge -x - 1$ punctured by the dashed line $x = 1$, and the region strictly to the left of the dashed parabola $x = y^2$)*
> 
> 

> [!example] Example: Domain, Range, and Graph of a Radical Function
> Find the domain and range and describe the graph of $g(x, y) = \sqrt{9 - x^2 - y^2}$.
> 
> 
> **Solution:**
> For the square root to be defined, the radicand must be nonnegative:
> 
> 
> 
> $$9 - x^2 - y^2 \ge 0 \iff x^2 + y^2 \le 9$$
> 
> 
> 
> Thus, the domain $D = \{(x, y) \mid x^2 + y^2 \le 9\}$ is the closed disk centered at $(0, 0)$ with radius $3$.
> For the range, let $z = \sqrt{9 - x^2 - y^2}$. Because $z$ is a principal square root and $x^2 + y^2 \ge 0$:
> 
> 
> 
> $$\begin{aligned} 0 &\le 9 - x^2 - y^2 \le 9 \\ 0 &\le \sqrt{9 - x^2 - y^2} \le 3 \end{aligned}$$
> 
> 
> 
> Squaring both sides of $z = \sqrt{9 - x^2 - y^2}$ yields $x^2 + y^2 + z^2 = 9$ with the restriction $z \ge 0$, which is the upper hemisphere of radius $3$ centered at the origin.
> 
> 
> 
> $$\boxed{D = \{(x, y) \mid x^2 + y^2 \le 9\}, \quad \text{Range} = [0, 3], \quad \text{Graph: Upper hemisphere } x^2 + y^2 + z^2 = 9 \; (z \ge 0)}$$
> 
> 
> ![[Pasted image 20261027214110.png]]

> [!example] Example: Equations of Level Curves
> Describe the level curves of the following functions:
> (a) $f(x, y) = 6 - 3x - 2y$ for $k = -6, 0, 6, 12$
> (b) $g(x, y) = \sqrt{9 - x^2 - y^2}$ for $k = 0, 1, 2, 3$
> (c) $h(x, y) = 4x^2 + y^2 + 1$ for $k > 1$
> 
> 
> **Solution:**
> **(a)** Setting $f(x, y) = k$ gives:
> 
> 
> 
> $$6 - 3x - 2y = k \iff 3x + 2y + (k - 6) = 0$$
> 
> 
> 
> This is a family of equally spaced parallel lines with slope $-\frac{3}{2}$.
> 
> ![[Pasted image 20261027214140.png]]
> 
> **(b)** Setting $g(x, y) = k$ ($0 \le k \le 3$) and squaring both sides yields:
> 
>
> 
> $$\sqrt{9 - x^2 - y^2} = k \iff x^2 + y^2 = 9 - k^2$$
> 
> 
> 
> This is a family of concentric circles centered at $(0, 0)$ with radius $\sqrt{9 - k^2}$.
> 
 ![[Pasted image 20261027214149.png]]
> 
> **(c)** Setting $h(x, y) = k$ ($k > 1$) and dividing by $k - 1$ puts the curve in standard conic form:
> 
> 
> 
> $$\begin{aligned} 4x^2 + y^2 + 1 &= k \\ 4x^2 + y^2 &= k - 1 \\ \frac{x^2}{\frac{1}{4}(k - 1)} + \frac{y^2}{k - 1} &= 1 \end{aligned}$$
> 
> 
> 
> This is a family of ellipses centered at the origin with semiaxes $\frac{1}{2}\sqrt{k - 1}$ and $\sqrt{k - 1}$.
> 
> 
> 
> $$\boxed{\text{(a) Parallel lines } 3x + 2y + (k - 6) = 0 \quad \text{(b) Concentric circles } x^2 + y^2 = 9 - k^2 \quad \text{(c) Ellipses } \frac{x^2}{\frac{1}{4}(k - 1)} + \frac{y^2}{k - 1} = 1}$$
> 
> ![[Pasted image 20261027214246.png]]

> [!example] Example: Domain and Level Surfaces in $\mathbb{R}^3$
> (a) Find the domain of $f(x, y, z) = \ln(z - y) + xy\sin z$.
> (b) Describe the level surfaces of $g(x, y, z) = x^2 + y^2 + z^2$.
> 
> 
> **Solution:**
> **(a)** The term $xy\sin z$ is defined for all $(x, y, z) \in \mathbb{R}^3$, while $\ln(z - y)$ requires a strictly positive argument:
> 
> 
> 
> $$z - y > 0 \iff z > y$$
> 
> 
> 
> Thus, the domain is the half-space consisting of all points in $\mathbb{R}^3$ lying strictly above the plane $z = y$.
> 
> 
> **(b)** Setting $g(x, y, z) = k$ yields:
> 
> 
> 
> $$x^2 + y^2 + z^2 = k \qquad (k \ge 0)$$
> 
> 
> 
> For $k > 0$, these level surfaces form a family of concentric spheres centered at the origin $O(0, 0, 0)$ with radius $\sqrt{k}$ (and the single point $(0, 0, 0)$ when $k = 0$).
> 
> 
> 
> $$\boxed{\text{(a) } D = \{(x, y, z) \in \mathbb{R}^3 \mid z > y\} \qquad \text{(b) Concentric spheres } x^2 + y^2 + z^2 = k \text{ of radius } \sqrt{k} \; (k \ge 0)}$$
> 
> ![[Pasted image 20261027214324.png]]

---

# ~={red}References=~

*Calculus, James Stewart* (p. 902-911)