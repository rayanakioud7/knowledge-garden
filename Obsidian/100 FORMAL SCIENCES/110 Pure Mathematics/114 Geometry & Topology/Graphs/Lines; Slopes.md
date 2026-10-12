Date: 2026-05-15
Tags: [[Mathematics]], [[Geometry]]

---

## 1 Calculate and Interpret the Slope of a Line

> [!NOTE]
> A **linear equation** is an equation in two variables whose graph is a straight line. The defining characteristic of a line is its **slope**, a numerical measure of its steepness.

> [!info] Linear [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]
> A **linear function** is a function of the form:
> $$f(x) = ax + b$$
> - **Graph:** A line
> - **Slope:** $a$
> - **y-intercept:** $b$

### The Concept: Rise over Run

Imagine a staircase. The steepness is determined by the ratio of the vertical step (**Rise**) to the horizontal step (**Run**).

*Diagram of a line with a "staircase" showing Rise and Run:*
![[Pasted image 20260516000831.png|403]]

> [!info] Definition: Slope
> Let $P = (x_1, y_1)$ and $Q = (x_2, y_2)$ be two distinct points on a nonvertical line $L$. The **slope** $m$ of $L$ is:
> $$ m = \frac{y_2 - y_1}{x_2 - x_1} \qquad (x_1 \neq x_2) $$
>
> This can be interpreted as:
> $$ m = \frac{\text{Rise}}{\text{Run}} = \frac{\text{Change in } y}{\text{Change in } x} = \frac{\Delta y}{\Delta x} $$

*Visual derivation of the slope formula showing a right triangle formed by points P and Q:*
![[Pasted image 20260516000912.png|center]]

> [!warning] Vertical Lines
> If $x_1 = x_2$, the line is **vertical**. The slope is **undefined** because division by zero is not allowed.
> 
> ![[Pasted image 20260516000947.png|center]]

![[Pasted image 20260518013219.png]]

### Key Properties of Slope

1.  **Consistency:** The slope is constant. You can use *any* two distinct points on the line to calculate it. (Based on similar triangles).
2.  **Direction Independence:** It doesn't matter which point is $P$ and which is $Q$.
    $$ \frac{y_2 - y_1}{x_2 - x_1} = \frac{y_1 - y_2}{x_1 - x_2} $$

---

## Examples and Interpretation

### EXAMPLE 1 Finding and Interpreting Slope:

Find the slope of the line containing $(1, 2)$ and $(5, -3)$.

$$ m = \frac{-3 - 2}{5 - 1} = \frac{-5}{4} = -\frac{5}{4} $$

**Interpretation:**
The slope is $-\frac{5}{4}$. This means for every **4-unit increase** in $x$ (run), $y$ **decreases by 5 units** (rise). The average rate of change of $y$ with respect to $x$ is $-\frac{5}{4}$.

---

### EXAMPLE 2 Visualizing Slope Variations:

Consider four different lines ($L_1, L_2, L_3, L_4$) all passing through the point $P(2, 3)$.

![[Pasted image 20260516001125.png|center|433]]

**1. Positive Slope ($L_1$)**
Passes through $Q_1(-1, -2)$.
$$ \color{RubineRed}{m_1} = \frac{-2 - 3}{-1 - 2} = \frac{-5}{-3} = \frac{5}{3} $$
*   **Visual:** Slants **upward** from left to right.

**2. Negative Slope ($L_2$)**
Passes through $Q_2(3, -1)$.
$$ \color{orange}m_2 = \frac{-1 - 3}{3 - 2} = \frac{-4}{1} = -4 $$
*   **Visual:** Slants **downward** from left to right.

**3. Zero Slope ($L_3$)**
Passes through $Q_3(5, 3)$.
$$ \color{cyan}m_3 = \frac{3 - 3}{5 - 2} = \frac{0}{3} = 0 $$
*   **Visual:** **Horizontal** line.

**4. Undefined Slope ($L_4$)**
Passes through $Q_4(2, 5)$.
$$ \color{green}m_4 \text{ is undefined because } x_1 = x_2 = 2 $$
*   **Visual:** **Vertical** line.

---

## Summary: Geometry of Slope

| Slope Value ($m$) | Geometric Behavior | Example |
| :--- | :--- | :--- |
| **$m > 0$** | Line rises (slants up) from left to right. | $y = 2x$ |
| **$m < 0$** | Line falls (slants down) from left to right. | $y = -x$ |
| **$m = 0$** | Line is **Horizontal**. | $y = 3$ |
| **Undefined** | Line is **Vertical**. | $x = 2$ |

### Steepness
The **absolute value** of the slope determines steepness.
*   $|m|$ is large $\rightarrow$ Steep line (closer to vertical).
*   $|m|$ is small $\rightarrow$ Flat line (closer to horizontal).

*Family of lines with positive slopes $0, 1/4, 1/2, 1, 2, 6$ getting steeper:*
![[Pasted image 20260516001453.png]]

*Family of lines with negative slopes $0, -1/4, -1/2, -1, -2, -6$ getting steeper:*
![[Pasted image 20260516001511.png]]

---
## 2 Graph Lines Given a Point and the Slope

If you know a point on a line and its slope, you can graph the line perfectly without finding the equation first. The secret lies in interpreting the slope as a set of instructions for movement: **Rise over Run**.

$$ m = \frac{\text{Rise}}{\text{Run}} = \frac{\text{Vertical Change}}{\text{Horizontal Change}} $$

> [!example] EXAMPLE 3: Graphing from a Point and Slope
> **Task:** Draw the line containing the point $(3, 2)$ with the given slopes.
>
> **(a) Slope $m = \frac{3}{4}$**
>
> *   **Interpretation:** Rise = $+3$, Run = $+4$.
> *   **Movement:** From $(3, 2)$, move **4 units Right** and **3 units Up**.
> *   **New Point:** $(3+4, 2+3) = (7, 5)$.
> *   **Graph:** Draw a line through $(3, 2)$ and $(7, 5)$.
>
> ![[Pasted image 20260516002032.png]]
>
> ---
>
> **(b) Slope $m = -\frac{4}{5}$**
>
> A negative slope can be interpreted in two valid ways. Both lead to the same line.
>
> **Method 1: Down and Right**
> Write slope as $\frac{-4}{5}$.
> *   **Interpretation:** Rise = $-4$, Run = $+5$.
> *   **Movement:** From $(3, 2)$, move **5 units Right** and **4 units Down**.
> *   **New Point:** $(3+5, 2-4) = (8, -2)$.
>
> **Method 2: Up and Left**
> Write slope as $\frac{4}{-5}$.
> *   **Interpretation:** Rise = $+4$, Run = $-5$.
> *   **Movement:** From $(3, 2)$, move **5 units Left** and **4 units Up**.
> *   **New Point:** $(3-5, 2+4) = (-2, 6)$.
>
> ![[Pasted image 20260516002255.png]]
>
> **Graph:** Draw a line through $(3, 2)$ and either $(8, -2)$ or $(-2, 6)$.

> [!tip] Quick Reference for Slope Movement
> | Slope Sign | Direction |
> | :--- | :--- |
> | **Positive (+)** | Uphill (Right & Up) OR (Left & Down) |
> | **Negative (-)** | Downhill (Right & Down) OR (Left & Up) |

---
## 3 Find the Equation of a Vertical Line

Vertical lines are unique because their x-coordinate never changes, regardless of the y-value. This results in an **undefined slope**.

> [!example] EXAMPLE 4 Graphing a Vertical Line
> **Graph the equation:** $x = 3$
>
> **Solution:**
> To graph $x = 3$, we look for all points $(x, y)$ where the x-coordinate is always 3.
> - Points: $(3, -1), (3, 0), (3, 1), (3, 2), (3, 3), \dots$
>
> The graph is a vertical line with an x-intercept of 3.
>
> ![[Pasted image 20260516002837.png]]

---

> [!info] Theorem: Equation of a Vertical Line
> A vertical line is given by an equation of the form:
> $$ x = a $$
> where **$a$** is the x-intercept.
>
> **Key Properties:**
> - The slope is **undefined**.
> - The line is perpendicular to the x-axis.
> - It is not a function (fails the vertical line test).

---
## 4 Use the Point-Slope Form of a Line; Identify Horizontal Lines

When you know a specific point on a line and its slope, you can derive the equation using the **Point-Slope Form**.

### Derivation
Let $L$ be a nonvertical line with slope $m$ containing the point $(x_1, y_1)$. For any *other* point $(x, y)$ on the line, the slope formula tells us:
$$ m = \frac{y - y_1}{x - x_1} $$
Multiplying both sides by $(x - x_1)$ gives us the standard Point-Slope equation.

![[Pasted image 20260516003158.png|center|424]]

> [!info] Theorem: Point-Slope Form of an Equation of a Line
> An equation of a nonvertical line with slope $m$ that contains the point $(x_1, y_1)$ is:
> $$ y - y_1 = m(x - x_1) \tag{2} $$

---

> [!example] EXAMPLE 5 Using the Point-Slope Form of a Line
>
> **Problem:** Find the equation of the line with slope $4$ containing the point $(1, 2)$.
>
> **Solution:**
> Substitute $m = 4, x_1 = 1, y_1 = 2$ into the formula:
> $$
> \begin{aligned}
> y - y_1 &= m(x - x_1) \\
> y - 2 &= 4(x - 1) \\
> y - 2 &= 4x - 4 \\
> y &= 4x - 2
> \end{aligned}
> $$
>
> ![[Pasted image 20260516003243.png|center]]

---

> [!example] EXAMPLE 6 Finding the Equation of a Horizontal Line
>
> **Problem:** Find an equation of the horizontal line containing the point $(3, 2)$.
>
> **Solution:**
> A horizontal line has a **slope of 0** ($m=0$).
> Using the point-slope form with $m=0, x_1=3, y_1=2$:
> $$
> \begin{aligned}
> y - y_1 &= m(x - x_1) \\
> y - 2 &= 0 \cdot (x - 3) \\
> y - 2 &= 0 \\
> y &= 2
> \end{aligned}
> $$
>
> **Key Insight:** On a horizontal line, the y-value is constant. Since the line passes through $y=2$, the equation is simply $y=2$.
>
> ![[Pasted image 20260516003347.png|center]]

> [!info] Theorem: Equation of a Horizontal Line
> A horizontal line is given by an equation of the form:
> $$ y=b $$
> where $b$ is the $y$-intercept.

---

## 5 Find the Equation of a Line Given Two Points

If you have two points, you have enough information to write the line's equation. The strategy is a two-step process: **Find the Slope** $\rightarrow$ **Use Point-Slope Form**.

> [!example] EXAMPLE 7: Finding an Equation from Two Points
> **Problem:** Find the equation of the line containing $(2, 3)$ and $(-4, 5)$.
>
> **Step 1: Calculate Slope**
> $$ m = \frac{5 - 3}{-4 - 2} = \frac{2}{-6} = -\frac{1}{3} $$
>
> **Step 2: Use Point-Slope Form**
> Use the slope $m = -\frac{1}{3}$ and either point. Let's use $(2, 3)$:
> $$ y - 3 = -\frac{1}{3}(x - 2) $$
>
> *[Figure 38: Graph of the line passing through $(2, 3)$ and $(-4, 5)$.]*
>
> > [!tip] Tip
> > You could have used the other point $(-4, 5)$. The equation $y - 5 = -\frac{1}{3}(x + 4)$ looks different, but simplifies to the same line!

---

## 6 Write the Equation of a Line in Slope-Intercept Form

The **Slope-Intercept Form** is the most useful form for graphing and understanding a line because it reveals the two most important features directly: the **slope** and the **y-intercept**.

### Derivation
We know the point-slope form: $y - y_1 = m(x - x_1)$.
If the line crosses the y-axis at $(0, b)$, we can use this point as $(x_1, y_1)$.

$$
\begin{aligned}
y - b &= m(x - 0) \\
y - b &= mx \\
y &= mx + b
\end{aligned}
$$

> [!info] Theorem: Slope-Intercept Form
> An equation of a line with slope $m$ and y-intercept $b$ is:
> $$ y = mx + b \tag{3} $$
> *   **$m$** = Slope (steepness/direction)
> *   **$b$** = y-intercept (where it crosses the vertical axis)

---

## Understanding the Roles of $m$ and $b$

We can visualize how $m$ and $b$ affect the graph by looking at families of lines.

### 1. Changing the Slope ($m$)
Consider the family of lines $y = mx + 2$. The y-intercept is fixed at $2$.
*   **Observation:** As you change $m$, the lines **rotate** around the fixed point $(0, 2)$.
*   **Conclusion:** The slope determines the angle of the line.

![[Pasted image 20260516140204.png]]

*   $Y_1 = 2$ (Slope 0, horizontal)
*   $Y_4 = 3x + 2$ (Positive slope)
*   $Y_5 = -3x + 2$ (Negative slope)

### 2. Changing the Intercept ($b$)
Consider the family of lines $y = 2x + b$. The slope is fixed at $2$.
*   **Observation:** The lines never cross each other; they look like a "ladder" shifted up and down.
*   **Conclusion:** Lines with the **same slope** are **parallel**. Changing $b$ shifts the line vertically.

![[Pasted image 20260516140224.png]]

*   $Y_2 = 2x + 1$
*   $Y_4 = 2x + 4$
*   $Y_5 = 2x - 4$

---
## 7 Identify the Slope and y-Intercept of a Line from Its Equation

When an equation is in **slope-intercept form** ($y = mx + b$), finding the slope and intercept is immediate.

**Quick Identification:**
For the equation $y = -2x + 7$:
- Compare to $y = \textcolor{red}{m}x + \textcolor{blue}{b}$
- **Slope ($m$):** $-2$
- **y-intercept ($b$):** $7$

---

> [!example] EXAMPLE 8: Finding Slope and y-Intercept
> **Problem:** Find the slope $m$ and y-intercept $b$ of $2x + 4y = 8$. Graph the equation.
>
> **Step 1: Convert to Slope-Intercept Form**
> Solve for $y$:
> $$
> \begin{aligned}
> 2x + 4y &= 8 \\
> 4y &= -2x + 8 \\
> y &= \frac{-2x}{4} + \frac{8}{4} \\
> y &= -\frac{1}{2}x + 2
> \end{aligned}
> $$
>
> **Step 2: Identify Features**
> - **Slope ($m$):** $-\frac{1}{2}$
> - **y-intercept ($b$):** $2$
>
> **Step 3: Graph the Line**
> 1.  Plot the y-intercept at **$(0, 2)$**.
> 2.  Use the slope $m = -\frac{1}{2}$ (Rise $-1$, Run $2$).
> 3.  From $(0, 2)$, move **right 2** and **down 1** to reach **$(2, 1)$**.
> 4.  Draw the line through these points.
>
> ![[Pasted image 20260516140312.png|center]]

---
## 8 Graph Lines Written in General Form Using Intercepts

While **Slope-Intercept Form** ($y=mx+b$) is great for seeing slope, equations are often given in **General Form**. You don't always need to rearrange the equation to graph it; you can simply find the "bookends" where the line hits the axes.

> [!info] Definition: General Form
> The equation of a line is in **general form** when written as:
> $$ Ax + By = C \tag{4} $$
> where $A, B,$ and $C$ are real numbers, and $A$ and $B$ are not both $0$.

### The "Two-Intercept" Graphing Strategy
To graph a line in general form quickly, find the two points where it crosses the axes.

1.  **Find x-intercept:** Let $y = 0$ and solve for $x$.
2.  **Find y-intercept:** Let $x = 0$ and solve for $y$.
3.  **Connect:** Draw a line through these two points.

---

> [!example] EXAMPLE 9: Graphing Using Intercepts
> **Equation:** $2x + 4y = 8$
>
> **Step 1: Find the x-intercept**
> Set $y = 0$:
> $$ 2x + 4(0) = 8 \implies 2x = 8 \implies x = 4 $$
> Point: **$(4, 0)$**
>
> **Step 2: Find the y-intercept**
> Set $x = 0$:
> $$ 2(0) + 4y = 8 \implies 4y = 8 \implies y = 2 $$
> Point: **$(0, 2)$**
>
> **Step 3: Graph**
> Plot $(4, 0)$ and $(0, 2)$ and draw the line connecting them.
>
> ![[Pasted image 20260516140751.png|center]]

---
### Special Cases in General Form
Vertical and horizontal lines are just specific versions of $Ax + By = C$ where one coefficient is zero.

| Line Type | Equation | General Form Version | Graph Description |
| :--- | :--- | :--- | :--- |
| **Vertical** | $x = a$ | $1\cdot x + 0\cdot y = a$ | Crosses x-axis at $a$; slope undefined. |
| **Horizontal** | $y = b$ | $0\cdot x + 1\cdot y = b$ | Crosses y-axis at $b$; slope is 0. |

> [!abstract] Definition: Linear Equation
> Because every line can be written in general form, **any equation equivalent to $Ax + By = C$ is called a linear equation.**

---

## 9 Find Equations of Parallel Lines

Two lines in the same plane are **parallel** if they never intersect (they have no points in common).

> [!info] Theorem: Criterion for Parallel Lines
> Two **non-vertical** lines are parallel if and only if:
> 1.  Their slopes are equal ($m_1 = m_2$).
> 2.  They have different y-intercepts ($b_1 \neq b_2$).

---

### EXAMPLE 10: Showing Two Lines Are Parallel

**Problem:** Show that $L_1: 2x + 3y = 6$ and $L_2: 4x + 6y = 0$ are parallel.

**Strategy:** Convert both to **Slope-Intercept Form** ($y=mx+b$) to compare their $m$ and $b$ values.

**Line $L_1$:**
$$
\begin{aligned}
2x + 3y &= 6 \\
3y &= -2x + 6 \\
y &= -\frac{2}{3}x + 2
\end{aligned}
$$
*   Slope $m_1 = -\frac{2}{3}$
*   Intercept $b_1 = 2$

**Line $L_2$:**
$$
\begin{aligned}
4x + 6y &= 0 \\
6y &= -4x \\
y &= -\frac{4}{6}x \\
y &= -\frac{2}{3}x
\end{aligned}
$$
*   Slope $m_2 = -\frac{2}{3}$
*   Intercept $b_2 = 0$

**Conclusion:**
Since the slopes are equal ($-\frac{2}{3}$) but the intercepts are different ($2 \neq 0$), the lines are **parallel**.

*Graph showing two parallel lines $L_1$ and $L_2$ running side-by-side.*
![[Pasted image 20260516141202.png]]

---

### EXAMPLE 11: Finding the Equation of a Parallel Line

**Problem:** Find the equation of the line containing $(2, -3)$ and parallel to $2x + y = 6$.

**Step 1: Find the slope of the reference line.**
Convert $2x + y = 6$ to slope-intercept form:
$$ y = -2x + 6 $$
The slope is **$m = -2$**.
*Note: Parallel lines have the same slope, so our new line must also have $m = -2$.*

**Step 2: Use Point-Slope Form.**
Use slope $m = -2$ and point $(x_1, y_1) = (2, -3)$.

$$
\begin{aligned}
y - y_1 &= m(x - x_1) \\
y - (-3) &= -2(x - 2) \\
y + 3 &= -2x + 4 \\
y &= -2x + 1 \quad & \leftarrow \text{Slope-Intercept Form} \\
2x + y &= 1 \quad & \leftarrow \text{General Form}
\end{aligned}
$$

![[Pasted image 20260516141228.png]]

---
## 10 Find Equations of Perpendicular Lines

Two lines are **perpendicular** if they intersect at a right angle ($90^\circ$).

> [!info] Theorem: Criterion for Perpendicular Lines
> Two nonvertical lines are perpendicular if and only if the **product of their slopes is $-1$**
> $$ m_1 m_2 = -1 $$
>
> **In other words:** The slopes must be **negative reciprocals** of each other.
> If $m_1 = \frac{a}{b}$, then $m_2 = -\frac{b}{a}$.

### Proof Sketch (Using Distance Formula)
By placing two perpendicular lines at the origin, we form a right triangle with vertices $O(0,0)$, $A(1, m_2)$, and $B(1, m_1)$.
Applying the **Pythagorean Theorem** ($a^2 + b^2 = c^2$) to the distances between these points:
$$ [d(O, A)]^2 + [d(O, B)]^2 = [d(A, B)]^2 $$
Simplifying the distance formulas leads directly to the result:
$$ m_1 m_2 = -1 $$

---

### EXAMPLE 12 Finding the Slope of a Perpendicular Line

If a line has slope $\frac{3}{2}$, any line perpendicular to it must have the negative reciprocal slope.
$$ m_{\perp} = -\frac{2}{3} $$
Check: $\left(\frac{3}{2}\right) \cdot \left(-\frac{2}{3}\right) = -1$.

---

### EXAMPLE 13 Finding the Equation of a Perpendicular Line

**Problem:** Find the equation of the line containing $(1, -2)$ and perpendicular to $x + 3y = 6$.

**Step 1: Find the slope of the given line.**
Rewrite $x + 3y = 6$ in slope-intercept form:
$$
\begin{aligned}
3y &= -x + 6 \\
y &= -\frac{1}{3}x + 2
\end{aligned}
$$
The slope is $m = -\frac{1}{3}$.

**Step 2: Find the perpendicular slope.**
The negative reciprocal of $-\frac{1}{3}$ is **$3$**.

**Step 3: Use Point-Slope Form.**
Use point $(1, -2)$ and slope $m = 3$:
$$
\begin{aligned}
y - y_1 &= m(x - x_1) \\
y - (-2) &= 3(x - 1) \\
y + 2 &= 3x - 3 \\
y &= 3x - 5 \quad & \leftarrow \text{Slope-Intercept Form} \\
3x - y &= 5 \quad & \leftarrow \text{General Form}
\end{aligned}
$$

*Graph showing the two lines intersecting at a right angle at point (1, -2)*
![[Pasted image 20260516142112.png|center|319]]


---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. 19 - 28)