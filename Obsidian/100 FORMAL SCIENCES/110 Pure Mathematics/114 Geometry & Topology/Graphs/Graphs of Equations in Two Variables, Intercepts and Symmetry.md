Date: 2026-05-15
Tags: [[Mathematics]], [[Geometry]]

---

## 1 Graph Equations by Plotting Points

An **equation in two variables**, $x$ and $y$, is a statement where two expressions involving $x$ and $y$ are equal.
*   **Satisfy the equation:** Any values of $x$ and $y$ that result in a true statement.
*   **Graph of an equation:** The set of all points $(x, y)$ in the xy-plane whose coordinates satisfy the equation.

> [!abstract] Visualizing Relationships
> Graphs help visualize relationships between quantities. For example, the Figure below shows the relationship between risk level and average annual return in a stock portfolio.
>
> ![[Pasted image 20260515160938.png|center]]
> *Graph showing Average Annual Returns (%) vs Level of Risk (%). Shows a curve where risk is minimized around 30% foreign investment.*

### Checking Points on a Graph

To determine if a point lies on the graph of an equation, substitute the coordinates into the equation. If the equation holds true, the point is on the graph.

> [!example] EXAMPLE 1 Determining Whether a Point Is on the Graph
> Equation: $2x - y = 6$
>
> **(a)** Point $(2, 3)$
> $$ 2(2) - 3 = 4 - 3 = 1 \neq 6 $$
> **Result:** The equation is not satisfied. The point is **not** on the graph.
>
> **(b)** Point $(2, -2)$
> $$ 2(2) - (-2) = 4 + 2 = 6 $$
> **Result:** The equation is satisfied. The point **is** on the graph.

### The Method of Plotting Points

To obtain a graph:
1.  Assign values to $x$.
2.  Calculate corresponding $y$ values.
3.  Plot the points $(x, y)$.
4.  Connect them with a smooth curve or line.

> [!example] EXAMPLE 2 Graphing a Linear Equation
> Equation: $y = 2x + 5$
>
> | If ($x$) | Then ($y$) | Point on Graph |
> | :--- | :--- | :--- |
> | $0$ | $2(0) + 5 = 5$ | $(0, 5)$ |
> | $1$ | $2(1) + 5 = 7$ | $(1, 7)$ |
> | $-5$ | $2(-5) + 5 = -5$ | $(-5, -5)$ |
> | $10$ | $2(10) + 5 = 25$ | $(10, 25)$ |
>
> Graph of $y=2x+5$. A straight line passing through the plotted points with arrows at both ends.
> ![[Pasted image 20260515161121.png]]
>
> Connecting these points reveals a **line**. For linear equations ($y=mx+b$), only two points are strictly needed, but plotting more confirms the pattern.

> [!example] EXAMPLE 3 Graphing a Quadratic Equation
> Equation: $y = x^2$
>
> | $x$ | $y = x^2$ | $(x, y)$ |
> | :--- | :--- | :--- |
> | $-4$ | $16$ | $(-4, 16)$ |
> | $-3$ | $9$ | $(-3, 9)$ |
> | $-2$ | $4$ | $(-2, 4)$ |
> | $-1$ | $1$ | $(-1, 1)$ |
> | $0$ | $0$ | $(0, 0)$ |
> | $1$ | $1$ | $(1, 1)$ |
> | $2$ | $4$ | $(2, 4)$ |
> | $3$ | $9$ | $(3, 9)$ |
> | $4$ | $16$ | $(4, 16)$ |
>
> *Graph of $y=x^2$. A U-shaped curve (**parabola**) passing through the origin and the points listed above.*
> ![[Pasted image 20260515161201.png]]
>
> Connecting these points with a smooth curve produces a **parabola**.

### Complete Graphs

The graphs shown in examples often cannot display *every* point (e.g., the point $(20, 45)$ is on the line $y=2x+5$ but might be off the page).
*   **Arrows:** Used at the ends of a graph to indicate that the pattern continues indefinitely.
*   **Complete Graph:** A graph that presents enough points for the viewer to "see" the rest as an obvious continuation.

> [!tip] Future Techniques
> While plotting points works, it can be tedious. Later sections will introduce **intercepts** and **symmetry** to help determine the shape of a graph with fewer plotted points.

---
## 2 Find Intercepts from a Graph

The points at which a graph crosses or touches the coordinate axes are called **intercepts**.

> [!info] Definition of Intercepts

| Intercept Type  | How to Find                | Where on Graph                               |
| --------------- | -------------------------- | -------------------------------------------- |
| **x-intercept** | Set $y = 0$, solve for $x$ | Points where graph crosses x-axis → $(a, 0)$ |
| **y-intercept** | Set $x = 0$, solve for $y$ | Points where graph crosses y-axis → $(0, b)$ |

![[Pasted image 20260518013029.png|center|325]]

> [!tip] Multiple Intercepts Possible  
> A graph can have zero, one, or multiple x- and/or y-intercepts. For functions, at most one y-intercept ([[The Graph of a Function|vertical line test]]).

*Generic graph showing points where the curve crosses the x-axis and touches the y-axis:*
![[Pasted image 20260515161733.png|315]]

### Example:

Find the intercepts of the graph in Figure 15.

*A complex curve crossing the axes at multiple points:*
![[Pasted image 20260515161835.png]]

**Solution**
Identify the points where the graph **touches** or **crosses** the axes:
$$ (-3, 0), \quad (0, 3), \quad \left(\frac{3}{2}, 0\right), \quad \left(0, -\frac{4}{3}\right), \quad (0, -3.5), \quad (4.5, 0) $$

*   **x-intercepts:** $-3, \frac{3}{2}, \text{and } 4.5$
*   **y-intercepts:** $-3.5, -\frac{4}{3}, \text{and } 3$

> [!note] Notation Convention
> *   **Unspecified:** If the type of intercept is not specified, report it as an **ordered pair** $(x, y)$.
> *   **Specified:** If the type is specified (e.g., "find the x-intercepts"), report only the **coordinate** (e.g., $x = -3$).

---

## 3 Find Intercepts from an Equation

Intercepts can be found algebraically using the fact that:
*   Points on the **x-axis** have $y = 0$.
*   Points on the **y-axis** have $x = 0$.

> [!abstract] Procedure for Finding Intercepts
> 1.  **x-intercept(s):** Let $y = 0$ in the equation and solve for $x$.
> 2.  **y-intercept(s):** Let $x = 0$ in the equation and solve for $y$.

### Example:

Find the intercepts of $y = x^2 - 4$ and graph the equation.

**1. Find x-intercepts**
Set $y = 0$:
$$
\begin{aligned}
x^2 - 4 &= 0 \\
(x + 2)(x - 2) &= 0 \quad \leftarrow \text{Factor} \\
x = -2 \quad &\text{or} \quad x = 2 \quad \leftarrow \text{Zero-Product Property}
\end{aligned}
$$
The x-intercepts are **$-2$ and $2$**.

**2. Find y-intercepts**
Set $x = 0$:
$$
\begin{aligned}
y &= 0^2 - 4 \\
y &= -4
\end{aligned}
$$
The y-intercept is **$-4$**.

**3. Graphing**
Using the intercepts $(-2, 0), (2, 0), (0, -4)$ and additional points from Table 2, we can sketch the parabola.

| $x$ | $y = x^2 - 4$ | $(x, y)$ |
| :--- | :--- | :--- |
| $-3$ | $5$ | $(-3, 5)$ |
| $-1$ | $-3$ | $(-1, -3)$ |
| $1$ | $-3$ | $(1, -3)$ |
| $3$ | $5$ | $(3, 5)$ |

*Graph of $y = x^2 - 4$, a parabola opening upwards with vertex at $(0, -4)$ and x-intercepts at $\pm 2$:*
![[Pasted image 20260515161947.png|258]]

Since $x^2 \geq 0$ for all real $x$, we know $y \geq -4$ for this equation.

---
## 4 Test an Equation for Symmetry

Symmetry is a powerful tool for graphing. If you know a graph is symmetric, you only need to plot half the points and reflect them to get the rest.

### Visual Intuition & Definitions

A graph has symmetry if it looks the same after a specific transformation.

> [!abstract] The 3 Types of Symmetry
>
> **1. Symmetry with respect to the x-axis**
> *   **Visual:** The x-axis acts as a mirror. The top half is a reflection of the bottom half.
> *   **Point Rule:** If $(x, y)$ is on the graph, then **$(x, -y)$** is also on the graph.
> *   *![[Pasted image 20260515163307.png]]
>
> **2. Symmetry with respect to the y-axis**
> *   **Visual:** The y-axis acts as a mirror. The left side is a reflection of the right side.
> *   **Point Rule:** If $(x, y)$ is on the graph, then **$(-x, y)$** is also on the graph.
> *   ![[Pasted image 20260515163322.png]]
>
> **3. Symmetry with respect to the Origin**
> *   **Visual:** Rotating the graph $180^\circ$ around the origin leaves it unchanged.
> *   **Point Rule:** If $(x, y)$ is on the graph, then **$(-x, -y)$** is also on the graph.
> *   ![[Pasted image 20260515163334.png]]

---

### Algebraic Tests for Symmetry

To test an equation algebraically, substitute the variables and simplify. If the resulting equation is **equivalent** to the original, the symmetry exists.

| Symmetry Type | The Test (Substitution) | Condition for Success |
| :--- | :--- | :--- |
| **x-Axis** | Replace $y$ with $-y$ | Equation remains unchanged |
| **y-Axis** | Replace $x$ with $-x$ | Equation remains unchanged |
| **Origin** | Replace $x$ with $-x$ **AND** $y$ with $-y$ | Equation remains unchanged |

---

### EXAMPLE 9 Testing an Equation for Symmetry

**Test:** $y = \frac{4x^2}{x^2 + 1}$

**1. Test x-Axis (Replace $y$ with $-y$)**
$$ -y = \frac{4x^2}{x^2 + 1} $$
This is **not equivalent** to the original ($y \neq -y$).
$\implies$ **No x-axis symmetry.**

**2. Test y-Axis (Replace $x$ with $-x$)**
$$ y = \frac{4(-x)^2}{(-x)^2 + 1} $$
Since $(-x)^2 = x^2$:
$$ y = \frac{4x^2}{x^2 + 1} $$
This **is equivalent** to the original.
$\implies$ **Has y-axis symmetry.**

**3. Test Origin (Replace $x$ with $-x$ and $y$ with $-y$)**
$$ -y = \frac{4(-x)^2}{(-x)^2 + 1} \implies -y = \frac{4x^2}{x^2 + 1} $$
Multiply by $-1$:
$$ y = -\frac{4x^2}{x^2 + 1} $$
This is **not equivalent** to the original.
$\implies$ **No origin symmetry.**

**Conclusion:** The graph is symmetric only with respect to the **y-axis**.

*Graph of the function showing a "bell shape" centered on the y-axis, confirming the symmetry.*
![[Pasted image 20260515163431.png|center|471]]

---

## 5 Know How to Graph Key Equations

Master these fundamental graphs using a systematic approach:
1. **Find intercepts**
2. **Test for symmetry**
3. **Plot strategic points**
4. **Sketch the curve**

---

> [!example] EXAMPLE 10: The Cubic Function $y = x^3$
>
> **Step 1: Intercepts**
> - Set $x = 0 \implies y = 0$
> - Set $y = 0 \implies x = 0$
> - **Only intercept:** $(0, 0)$
>
> **Step 2: Symmetry Tests**
>
> | Test | Substitution | Result |
> | :--- | :--- | :--- |
> | **x-Axis** | $-y = x^3$ | ❌ Not symmetric |
> | **y-Axis** | $y = (-x)^3 = -x^3$ | ❌ Not symmetric |
> | **Origin** | $-y = (-x)^3 \implies y = x^3$ | ✅ **Symmetric!** |
>
> **Step 3: Strategic Plotting**
>
> Since we have **origin symmetry**, plot points for $x \geq 0$ and reflect through the origin.
>
> | $x$ | $y = x^3$ | Point | Reflected Point |
> | :--- | :--- | :--- | :--- |
> | 0 | 0 | $(0, 0)$ | $(0, 0)$ |
> | 1 | 1 | $(1, 1)$ | $(-1, -1)$ |
> | 2 | 8 | $(2, 8)$ | $(-2, -8)$ |
> | 3 | 27 | $(3, 27)$ | $(-3, -27)$ |
>
> ![[Pasted image 20260515170433.png|Center]]
>
> **Key Features:**
> - Passes through origin
> - Increases rapidly for $|x| > 1$
> - Flat near origin for $|x| < 1$
> - Origin symmetry (rotational)

---

> [!example] EXAMPLE 11: The Sideways Parabola $x = y^2$
>
> **(a) Full Graph**
>
> **Intercepts:** $(0, 0)$ only
>
> **Symmetry Test:**
> - Replace $y$ with $-y$: $x = (-y)^2 = y^2$ ✓
> - **Symmetric with respect to x-axis**
>
> ![[Pasted image 20260515170523.png]]
>
> **(b) Restricted Graph: $y \geq 0$**
>
> When we restrict to $y \geq 0$, we can solve for $y$:
> $$x = y^2 \implies y = \sqrt{x}$$
>
> This gives us only the **upper half** (Quadrant I portion).
>
> ![[Pasted image 20260515170545.png]]
>
> **Comparison:**
> - $x = y^2$: Full parabola opening right
> - $y = \sqrt{x}$: Top half only (function)


---

> [!example] EXAMPLE 12: The Reciprocal Function $y = \frac{1}{x}$
>
> **Step 1: Intercepts**
>
> - **y-intercept?** Set $x = 0 \implies \frac{1}{0}$ = **undefined** ❌
> - **x-intercept?** Set $y = 0 \implies \frac{1}{x} = 0$ = **no solution** ❌
>
> **Important:** This graph **never touches** the x-axis or y-axis!
>
> **Step 2: Symmetry Tests**
>
> | Test | Substitution | Result |
> | :--- | :--- | :--- |
> | **x-Axis** | $-y = \frac{1}{x}$ | ❌ No |
> | **y-Axis** | $y = \frac{1}{-x} = -\frac{1}{x}$ | ❌ No |
> | **Origin** | $-y = \frac{1}{-x} \implies y = \frac{1}{x}$ | ✅ **Yes!** |
>
> **Step 3: Strategic Plotting**
>
> With **origin symmetry**, plot positive $x$ values only:
>
> | $x$ | $y = \frac{1}{x}$ | Point |
> | :--- | :--- | :--- |
> | $\frac{1}{10}$ | 10 | $(\frac{1}{10}, 10)$ |
> | $\frac{1}{3}$ | 3 | $(\frac{1}{3}, 3)$ |
> | $\frac{1}{2}$ | 2 | $(\frac{1}{2}, 2)$ |
> | 1 | 1 | $(1, 1)$ |
> | 2 | $\frac{1}{2}$ | $(2, \frac{1}{2})$ |
> | 3 | $\frac{1}{3}$ | $(3, \frac{1}{3})$ |
> | 10 | $\frac{1}{10}$ | $(10, \frac{1}{10})$ |
>
> **Behavior Analysis:**
>
> - As $x \to 0^+$ (approaches 0 from right): $y \to +\infty$
> - As $x \to +\infty$: $y \to 0^+$
> - Reflect through origin for negative values
>
> ![[Pasted image 20260515170729.png]]
>
> **Key Features:**
> - Two separate branches
> - **Asymptotes:** x-axis and y-axis (graph approaches but never touches)
> - Origin symmetry
> - No intercepts
> - Discontinuous at $x = 0$

---

## Summary of Key Equations

| Equation | Shape | Symmetry | Intercepts |
| :--- | :--- | :--- | :--- |
| $y = x^3$ | Cubic curve | Origin | $(0,0)$ |
| $x = y^2$ | Sideways parabola | x-axis | $(0,0)$ |
| $y = \sqrt{x}$ | Half parabola | None | $(0,0)$ |
| $y = \frac{1}{x}$ | Hyperbola | Origin | None |

---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. 9 - 15)