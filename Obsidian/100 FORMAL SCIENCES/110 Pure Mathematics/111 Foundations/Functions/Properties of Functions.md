Date: 2026-05-16
Tags: [[Mathematics]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---
# Even and Odd Functions

## 1. Determine Even and Odd Functions from a Graph

The terms **Even** and **Odd** describe the specific **symmetry** of a function. Instead of checking individual points, you can check the shape of the graph or the behavior of the equation when inputs are negated.

---

### The Algebraic Test
To determine if a function is even or odd, substitute **$-x$** into the function and see what happens.

> [!info] Even Function
> A function is **Even** if $f(-x) = f(x)$.
> *   **Meaning:** Changing the sign of the input does **not** change the output.
> *   **Visual:** The graph is symmetric with respect to the **y-axis**.
> 
> ![[Pasted image 20260517124234.png|center]]

> [!info] Odd Function
> A function is **Odd** if $f(-x) = -f(x)$.
> *   **Meaning:** Changing the sign of the input changes the sign of the output.
> *   **Visual:** The graph is symmetric with respect to the **origin**.
> 
> ![[Pasted image 20260517124300.png|center]]

---

### Geometric Intuition (Theorem)

| Type | Algebraic Check | Geometric Check | Visual Metaphor |
| :--- | :--- | :--- | :--- |
| **Even** | $f(-x) = f(x)$ | Y-Axis Symmetry | **Mirror Image:** Fold the graph along the y-axis; the sides match perfectly. |
| **Odd** | $f(-x) = -f(x)$ | Origin Symmetry | **Spin Test:** Rotate the graph 180° around the center point $(0,0)$; it lands on itself. |

---

### EXAMPLE 1: Analyzing Graphs from the Image

Let's look at the three graphs provided in the image and classify them.

![[Pasted image 20260516212429.png|center|552]]

#### The First Graph (Left)
*   **Observation:** This graph is a parabola opening downwards. If you look at the y-axis, the left side is a perfect mirror image of the right side.
*   **Symmetry:** Symmetric with respect to the y-axis.
*   **Conclusion:** This is an **Even Function**.

#### The Middle Graph
*   **Observation:** This graph rises and falls irregularly.
    *   Is it symmetric across the y-axis? No (the sides don't match).
    *   Is it symmetric around the origin? No (rotating it 180° would make it look upside down and backward).
*   **Conclusion:** This function is **Neither Even nor Odd**.

#### The Third Graph (Right)
*   **Observation:** This graph looks like a cubic function passing through the center. If you put a pin at the origin $(0,0)$ and spin the paper 180 degrees, the graph would look exactly the same.
*   **Symmetry:** Symmetric with respect to the origin.
*   **Conclusion:** This is an **Odd Function**.

---

> [!summary] Quick Checklist
> 1.  **Is it a mirror across the vertical line?** $\rightarrow$ Even.
> 2.  **Does it look the same upside down (rotated)?** $\rightarrow$ Odd.
> 3.  **Does it fail both?** $\rightarrow$ Neither.

---
## 2 Identify Even and Odd Functions from the Equation

> [!algorithm] The Algebraic Test
> Substitute **$-x$** into the function and simplify:
>
> | Result | Classification | Symmetry |
> | :--- | :--- | :--- |
> | $f(-x) = f(x)$ | **Even** | y-axis |
> | $f(-x) = -f(x)$ | **Odd** | Origin |
> | Neither | **Neither** | None |


### EXAMPLE 2: Quick Classification

**(a)** $f(x) = x^2 - 5$
$$ f(-x) = (-x)^2 - 5 = x^2 - 5 = f(x) $$
✅ **Even**

**(b)** $g(x) = x^3 - 1$
$$ g(-x) = (-x)^3 - 1 = -x^3 - 1 $$
$$ -g(x) = -(x^3 - 1) = -x^3 + 1 $$
❌ **Neither** ($g(-x) \neq g(x)$ and $g(-x) \neq -g(x)$)

**(c)** $h(x) = 5x^3 - x$
$$ h(-x) = 5(-x)^3 - (-x) = -5x^3 + x = -(5x^3 - x) = -h(x) $$
✅ **Odd**

**(d)** $F(x) = |x|$
$$ F(-x) = |-x| = |x| = F(x) $$
✅ **Even**

---

> [!tip] Power Function Shortcut
> For $f(x) = x^n$:
> *   **Even $n$** → Even function
> *   **Odd $n$** → Odd function
> *   **Mixed terms** → Usually Neither (unless all terms share the same parity)

---
# 3 Increasing, Decreasing, and Constant Functions

## Visual Intuition: Reading the Graph
To determine the behavior of a function, scan the graph from **left to right** (as $x$ increases).

*   **Going Uphill:** The function is **Increasing**.
*   **Going Downhill:** The function is **Decreasing**.
*   **Flat/Horizonal:** The function is **Constant**.

![[Pasted image 20260517123032.png]]

---

## Formal Definitions

> [!info] Mathematical Definitions
> Let $I$ be an open interval.
>
> *   **Increasing:** If $x_1 < x_2$, then $f(x_1) < f(x_2)$.
>     *(As x gets bigger, y gets bigger)*
>     .
> *   **Decreasing:** If $x_1 < x_2$, then $f(x_1) > f(x_2)$.
>     *(As x gets bigger, y gets smaller)*
>     .
>
> *   **Constant:** $f(x_1) = f(x_2)$ for all $x$ in $I$.
>     *(y stays the same)*

![[Pasted image 20260516214000.png]]

---

## Example Analysis

**Task:** Identify the intervals where the function in the example graph is increasing, decreasing, or constant.

| Interval (x-values) | Behavior | Visual Check |
| :--- | :--- | :--- |
| **$(-6, -4)$** | **Decreasing** | Graph goes down from $y=0$ to $y=-2$. |
| **$(-4, 0)$** | **Increasing** | Graph goes up from $y=-2$ to $y=4$. |
| **$(0, 3)$** | **Constant** | Graph is a horizontal line at $y=4$. |
| **$(3, 6)$** | **Decreasing** | Graph goes down from $y=4$ to $y=1$. |

> [!warning] Notation Rule
> Always describe behavior using **intervals of x-values**, not points.
> *   ✅ **Correct:** "The function is increasing on the interval $(-4, 0)$."
> *   ❌ **Incorrect:** "The function is increasing from the point $(-4, -2)$ to $(0, 4)$."

---

# 4 Use a Graph to Locate Local Maxima and Local Minima

Local extrema are the "hills" and "valleys" of a function. The word **local** implies that the point is the highest or lowest *in its immediate neighborhood*, not necessarily for the entire graph.

![[Pasted image 20260516214419.png]]

### The Concepts

| Concept | Visual Shape | Mathematical Definition |
| :--- | :--- | :--- |
| **Local Maximum** | 🏔️ **Peak** | $f(c) \ge f(x)$ for all $x$ near $c$. <br>*(It's the tallest point in the area)* |
| **Local Minimum** | 🕳️ **Valley** | $f(c) \le f(x)$ for all $x$ near $c$. <br>*(It's the lowest point in the area)* |

> [!info] Key Distinction
> *   The **location** is the x-value ($c$).
> *   The **value** is the y-value ($f(c)$).
> *   *Example:* "The local maximum is **2** (the height), and it occurs at **x=1** (the location)."

---

### EXAMPLE 4: Analyzing a Graph

Let's analyze the function shown in the provided graph.

![[Pasted image 20260516214350.png|center|477]]

#### 1. Identify Local Maxima (Peaks)
Look for points where the graph turns from going up to going down.
*   **Observation:** There is a peak at the point $(1, 2)$.
*   **Result:** The function has a local maximum of **2** at **$x = 1$**.

#### 2. Identify Local Minima (Valleys)
Look for points where the graph turns from going down to going up.
*   **Observation 1:** There is a valley at $(-1, 1)$.
    *   Local minimum of **1** at **$x = -1$**.
*   **Observation 2:** There is a valley at $(3, 0)$.
    *   Local minimum of **0** at **$x = 3$**.

#### 3. Determine Increasing and Decreasing Intervals
Use the peaks and valleys as "turning points" to define the intervals.

| Behavior | Interval (x-values) | Visual Check |
| :--- | :--- | :--- |
| **Decreasing** | $(-\infty, -1)$ | Going downhill from left until $x=-1$. |
| **Increasing** | $(-1, 1)$ | Going uphill from $x=-1$ to $x=1$. |
| **Decreasing** | $(1, 3)$ | Going downhill from $x=1$ to $x=3$. |
| **Increasing** | $(3, \infty)$ | Going uphill from $x=3$ onwards. |

> [!warning] Important Note
> When describing where a function is increasing or decreasing, always use **open intervals** of x-values. Do not include the turning points (the local max/min themselves) in the intervals.

---
# 5. Absolute Maximum and Absolute Minimum

### The Extreme Value Theorem

> [!theorem] Extreme Value Theorem
> If $f$ is **continuous** on a **closed interval** $[a, b]$, then $f$ has both an **absolute maximum** and an **absolute minimum** on $[a, b]$.

> **Continuity Note:**
> For the purpose of this section, a continuous function is one whose graph has no gaps or holes and can be traced without lifting the pencil from the paper.

---

## Key Definitions

> [!info] Absolute Maximum
> $f(u)$ is the absolute maximum on interval $I$ if $f(x) \leq f(u)$ for **all** $x$ in $I$.

> [!info] Absolute Minimum  
> $f(v)$ is the absolute minimum on interval $I$ if $f(x) \geq f(v)$ for **all** $x$ in $I$.

**Absolute extrema** = the highest and lowest values the function achieves on the entire domain/interval.

---

## EXAMPLE 5: Analyzing Five Graphs

![[Pasted image 20260516215506.png]]

| Graph | Domain | Abs Max | Abs Min | Key Insight |
| :--- | :--- | :--- | :--- | :--- |
| **(a)** | $[0, 5]$ | $6$ at $x=3$ | $1$ at $x=0$ | Closed interval, continuous ✓ |
| **(b)** | $[1, 5], x \neq 3$ | $3$ at $x=5$ | **DNE** | Hole at $(3,1)$ prevents minimum |
| **(c)** | $[0, 5]$ | $4$ at $x=5$ | $1$ on $[1,2]$ | Minimum occurs on entire interval |
| **(d)** | $[0, \infty)$ | **DNE** | $0$ at $x=0$ | Unbounded above (arrow up) |
| **(e)** | $[1, 5), x \neq 3$ | **DNE** | **DNE** | Hole + open endpoint = neither exists |

---

> [!warning] When Absolute Extrema Don't Exist
> 1. **Holes**: If the lowest/highest point is an open circle
> 2. **Unbounded**: Graph extends to $\infty$ or $-\infty$  
> 3. **Open endpoints**: Interval doesn't include the boundary where extremum would occur

> [!tip] Synonyms
> - **Absolute/Global maximum:** The highest value over the entire domain.
> - **Local/Relative maximum:** The highest value within a specific neighborhood around a point.

---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. 69 - 74)