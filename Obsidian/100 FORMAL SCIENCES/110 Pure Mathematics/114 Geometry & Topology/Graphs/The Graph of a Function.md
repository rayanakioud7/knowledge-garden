Date: 2026-05-16
Tags: [[Mathematics]], [[Geometry]], [[Foundations]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---
# Graphs of Functions and the Vertical Line Test

## Visualizing Relationships

> In applications, a graph often demonstrates the relationship between two variables more clearly than a table or equation.

**Example: Gas Prices (1980–2009)**
Table 1 lists average gas prices over time. When plotted, these points form a line graph.

![[Pasted image 20260516203830.png]]

**Key Observation:**
For each date on the horizontal axis, there is **only one** price on the vertical axis. This confirms that the graph represents a **function**, even though we don't have a specific algebraic equation for it.

---

## 1. Identify the Graph of a Function

> [!info] The Graph of a Function
> If $f$ is a function with domain $A$, the **graph** of $f$ is the set of ordered pairs:
> $$ \{(x, f(x)) \mid x \in A\} $$
> plotted in a coordinate plane.
>
> - The graph is the set of all points $(x, y)$ such that $y = f(x)$.
> - The graph of $f$ is identical to the graph of the equation $y = f(x)$
> -  **Each number $x$ in the domain must have exactly one image $y$ in the range.**

> [!info] Theorem: Vertical-Line Test
> A set of points in the $xy$-plane is the graph of a function **if and only if** every vertical line intersects the graph in **at most one point**.

## EXAMPLE 1: Identifying the Graph of a Function

Which of the graphs in the Figure are graphs of functions?

![[Pasted image 20260516203911.png]]

### Analysis:

| Graph | Equation | Vertical Line Test | Conclusion |
| :--- | :--- | :--- | :--- |
| **(a)** | $y = x^2$ | ✅ Passes. Every vertical line hits the curve at most once. | **Function** |
| **(b)** | $y = x^3$ | ✅ Passes. Every vertical line hits the curve at most once. | **Function** |
| **(c)** | $x = y^2$ | ❌ Fails. A vertical line (e.g., at $x=1$) hits the graph at two points ($y=1$ and $y=-1$). | **Not a Function** |
| **(d)** | $x^2 + y^2 = 1$ | ❌ Fails. A vertical line intersects the circle at two points. | **Not a Function** |

---

# 2.2 The Graph of a Function: Analysis and Information

## Core Concept: Points on a Graph
If $(x, y)$ is a point on the graph of a function $f$, then:
$$ y = f(x) $$
*   **Input:** $x$ is the value of the function at $x$.
*   **Output:** $y$ is the image of $x$.

> [!example] EXAMPLE 2: Obtaining Information from a Graph
> **Context:** Let $f$ represent the distance $y$ of a pendulum bob from its *at-rest* position at time $x$.
> 
> ![[Pasted image 20260516205522.png|center]]
>
> **(a) Find specific values:**
> Look for the y-coordinate at the given x.
> *   $f(0) = 4$ (Point $(0, 4)$ is on the graph)
> *   $f(\frac{3\pi}{2}) = 0$ (Point $(\frac{3\pi}{2}, 0)$ is on the graph)
> *   $f(3\pi) = -4$ (Point $(3\pi, -4)$ is on the graph)
>
> **(b) Find the Domain:**
> Look at the "shadow" of the graph on the x-axis.
> *   The graph exists for $x$ between $0$ and $4\pi$.
> *   **Domain:** $[0, 4\pi]$
>
> **(c) Find the Range:**
> Look at the "shadow" of the graph on the y-axis.
> *   The graph oscillates between $-4$ and $4$.
> *   **Range:** $[-4, 4]$
>
> **(d) List the Intercepts:**
> Points where the graph touches the axes.
> *   **y-intercept:** $(0, 4)$
> *   **x-intercepts:** $(\frac{\pi}{2}, 0), (\frac{3\pi}{2}, 0), (\frac{5\pi}{2}, 0), (\frac{7\pi}{2}, 0)$
>
> **(e) Intersections with a Horizontal Line:**
> How many times does the line $y = 2$ intersect the graph?
> *   Draw a horizontal line at height 2. It hits the wave **4 times**.
>
> **(f) Solve $f(x) = -4$:**
> Find the x-values where the graph is at its lowest point ($y=-4$).
> *   $x = \pi$ and $x = 3\pi$.
>
> **(g) Solve $f(x) > 0$:**
> Where is the graph **above** the x-axis?
> *   Intervals: $[0, \frac{\pi}{2}) \cup (\frac{3\pi}{2}, \frac{5\pi}{2}) \cup (\frac{7\pi}{2}, 4\pi]$

---
## Graphing Piecewise-Defined Functions

A **piecewise-defined function** is defined by different formulas on different parts of its domain. The graph consists of separate pieces.

> [!example] Example 4: Graph of a Piecewise-Defined Function
> Sketch the graph of:
> $$f(x) = \begin{cases} x^2 & \text{if } x \le 1 \\ 2x + 1 & \text{if } x > 1 \end{cases}$$

**Solution**

| Interval | Function | Graph Piece |
| :--- | :--- | :--- |
| $x \le 1$ | $f(x) = x^2$ | Parabola to the left of $x = 1$ |
| $x > 1$ | $f(x) = 2x + 1$ | Line to the right of $x = 1$ |

**Key Points**
- At $x = 1$: $(1, 1)$ is included (solid dot) $\leftarrow$ from $x^2$
- At $x = 1$: $(1, 3)$ is excluded (open dot) $\leftarrow$ from $2x + 1$

![[Pasted image 20260517122151.png|center|382]]

---
## Visualizing Domain and Range (The Shadow Test)

When looking at a graph, you can determine the domain and range using "light beams":

*   **Domain:** Imagine vertical beams of light shining down from the top. The **shadow** cast on the x-axis is the domain.
*   **Range:** Imagine horizontal beams of light shining from the side. The **shadow** cast on the y-axis is the range.

![[Pasted image 20260516205730.png]]

---

> [!example] EXAMPLE 3: Obtaining Information from an Equation
> **Function:** $f(x) = \frac{x + 1}{x + 2}$
>
> **(a) Find the Domain:**
> The denominator cannot be zero.
> $x + 2 \neq 0 \implies x \neq -2$.
> **Domain:** $\{x \mid x \neq -2\}$
>
> **(b) Is the point $(1, \frac{1}{2})$ on the graph?**
> Evaluate $f(1)$:
> $$ f(1) = \frac{1 + 1}{1 + 2} = \frac{2}{3} $$
> Since $f(1) = \frac{2}{3} \neq \frac{1}{2}$, the point $(1, \frac{1}{2})$ is **NOT** on the graph.
> The point $(1, \frac{2}{3})$ **IS** on the graph.
>
> **(c) If $x = 2$, what is $f(x)$?**
> $$ f(2) = \frac{2 + 1}{2 + 2} = \frac{3}{4} $$
> The point $(2, \frac{3}{4})$ is on the graph.
>
> **(d) If $f(x) = 2$, what is $x$?**
> Set the equation equal to 2 and solve:
> $$ \frac{x + 1}{x + 2} = 2 $$
> $$ x + 1 = 2(x + 2) $$
> $$ x + 1 = 2x + 4 $$
> $$ -3 = x $$
> The point $(-3, 2)$ is on the graph.
>
> **(e) Find the x-intercepts:**
> Set $f(x) = 0$. A fraction is zero only when its numerator is zero (and denominator is not).
> $$ x + 1 = 0 \implies x = -1 $$
> The x-intercept is **$-1$**. The point $(-1, 0)$ is on the graph.




---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. 60 - 63)