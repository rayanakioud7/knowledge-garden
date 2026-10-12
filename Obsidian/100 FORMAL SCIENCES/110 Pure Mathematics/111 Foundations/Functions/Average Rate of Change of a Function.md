Date: 2026-05-17
Tags: [[Mathematics]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---

> The **average rate of change** of a function measures how much the output changes per unit change in the input over a specific interval. Geometrically, this is the **slope of the secant line** connecting two points on the graph.

---

## Definition

> [!info] Average Rate of Change Formula
> If $a$ and $b$ (where $a \neq b$) are in the domain of a function $y = f(x)$, the average rate of change of $f$ from $a$ to $b$ is:
>
> $$ \text{Average rate of change} = \frac{\Delta y}{\Delta x} = \frac{f(b) - f(a)}{b - a} $$
> 
> ![[Pasted image 20260517123812.png|center]]

Where:
- $\Delta y$ = "change in $y$" (vertical change)
- $\Delta x$ = "change in $x$" (horizontal change)

---

## EXAMPLE 7: Finding the Average Rate of Change

**Function:** $f(x) = 3x^2$

Calculate the average rate of change over different intervals starting from $x = 1$.

### (a) From $x = 1$ to $x = 3$

$$ \frac{\Delta y}{\Delta x} = \frac{f(3) - f(1)}{3 - 1} = \frac{27 - 3}{2} = \frac{24}{2} = 12 $$

### (b) From $x = 1$ to $x = 5$

$$ \frac{\Delta y}{\Delta x} = \frac{f(5) - f(1)}{5 - 1} = \frac{75 - 3}{4} = \frac{72}{4} = 18 $$

### (c) From $x = 1$ to $x = 7$

$$ \frac{\Delta y}{\Delta x} = \frac{f(7) - f(1)}{7 - 1} = \frac{147 - 3}{6} = \frac{144}{6} = 24 $$

---

## Visual Interpretation

![[Pasted image 20260516220356.png|center|368]]

### Key Observations:

1. **Positive Rate of Change:** All average rates of change are positive, confirming the function is increasing on the interval $(1, 7)$.

2. **Increasing Rate:** The average rate of change grows larger as the interval extends:
   - Interval $(1, 3)$: slope = 12
   - Interval $(1, 5)$: slope = 18
   - Interval $(1, 7)$: slope = 24

3. **Nonlinear Behavior:** Since $f(x) = 3x^2$ is a quadratic function, the rate of change is not constant. The graph curves upward, causing secant lines to become steeper over larger intervals.

---
# The Secant Line

## Geometric Interpretation of Average Rate of Change

>The average rate of change of a function has a direct geometric meaning: 
   it is the **slope of the secant line** connecting two points on the graph.

![[Pasted image 20260516220725.png]]

> [!info] Slope of the Secant Line
> The average rate of change of a function from $a$ to $b$ equals the slope of the secant line containing the points $(a, f(a))$ and $(b, f(b))$:
>
> $$ m_{\text{sec}} = \frac{f(b) - f(a)}{b - a} $$

---

## EXAMPLE 8: Finding the Equation of a Secant Line

**Given Function:** $g(x) = 3x^2 - 2x + 3$

### (a) Average Rate of Change from $x = -2$ to $x = 1$:

First, evaluate the function at the endpoints:
- $g(1) = 3(1)^2 - 2(1) + 3 = 4$
- $g(-2) = 3(-2)^2 - 2(-2) + 3 = 19$

Calculate the average rate of change:
$$ \frac{g(1) - g(-2)}{1 - (-2)} = \frac{4 - 19}{3} = \frac{-15}{3} = -5 $$

### (b) Equation of the Secant Line:

**Points:** $(-2, 19)$ and $(1, 4)$  
**Slope:** $m_{\text{sec}} = -5$

Use point-slope form with point $(-2, 19)$:
$$ y - y_1 = m_{\text{sec}}(x - x_1) $$
$$ y - 19 = -5(x - (-2)) $$
$$ y - 19 = -5(x + 2) $$
$$ y - 19 = -5x - 10 $$
$$ y = -5x + 9 $$

**Secant line equation:** $y = -5x + 9$

### (c) Graph:

*Graph showing the parabola $g(x) = 3x^2 - 2x + 3$ with the secant line $y = -5x + 9$ passing through points $(-2, 19)$ and $(1, 4)$:*
![[Pasted image 20260516221028.png|center|460]]

---

> [!tip] Key Connection
> The secant line provides a **linear approximation** of the function over the interval $[a, b]$ This concept is fundamental to understanding derivatives in calculus.
