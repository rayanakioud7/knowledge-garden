Date: 2026-07-23
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Sequences and Summation Notation|Summation]], [[Area]]

---

## Areas and Distances

The area problem aims to find the area of a region $S$ that lies under the curve $y = f(x)$ from $a$ to $b$. The region is bounded by the graph of a continuous function $f$ (where $f(x) \ge 0$), the vertical lines $x = a$ and $x = b$, and the $x$-axis.

![[Pasted image 20260724000916.png|center|451]]

### 1. The Area Problem

To find the area of a region with curved sides, we approximate the region by dividing it into $n$ vertical strips of equal width and calculating the area of the resulting rectangles.
*   Width of each strip: $\Delta x = \frac{b - a}{n}$
*   Right endpoints of the subintervals: $x_1 = a + \Delta x, x_2 = a + 2\Delta x, \dots, x_n = b$
*   Sum of areas using right endpoints: $R_n = f(x_1)\Delta x + f(x_2)\Delta x + \dots + f(x_n)\Delta x$

![[Pasted image 20260724001053.png|center]]

> [!info] Definition 2: Area of a Region (Right Endpoints)
> The area $A$ of the region $S$ that lies under the graph of the continuous function $f$ is the limit of the sum of the areas of approximating rectangles:
> $$ A = \lim_{n \to \infty} R_n = \lim_{n \to \infty} [f(x_1)\Delta x + f(x_2)\Delta x + \dots + f(x_n)\Delta x] $$
> 
> ![[Pasted image 20260724001159.png|center]]

The limit remains identical if left endpoints are used:
> [!info] Definition 3: Area of a Region (Left Endpoints)
> $$ A = \lim_{n \to \infty} L_n = \lim_{n \to \infty} [f(x_0)\Delta x + f(x_1)\Delta x + \dots + f(x_{n-1})\Delta x] $$
> 
> ![[Pasted image 20260724001212.png|center]]

More generally, the height of the $i$th rectangle can be the value of $f$ at any chosen sample point $x_i^*$ in the $i$th sub-interval $[x_{i-1}, x_i]$. Using sigma notation, the area is expressed compactly:
> [!info] Definition 4: Area of a Region (Sample Points)
> $$ A = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*)\Delta x $$

![[Pasted image 20260724001129.png|center]]

---

### Examples

> [!example] Example 1: Estimating Area Using Rectangles
> **Problem Statement:** Use rectangles to estimate the area under the parabola $y = x^2$ from $0$ to $1$.
> 
> **Solution:**
> Divide the region $S$ into four strips $S_1, S_2, S_3, S_4$. 
> Right endpoints approximation (overestimates the curve):
> $$ \begin{aligned} R_4 &= \frac{1}{4} \left(\frac{1}{4}\right)^2 + \frac{1}{4} \left(\frac{1}{2}\right)^2 + \frac{1}{4} \left(\frac{3}{4}\right)^2 + \frac{1}{4} (1)^2 \\ &= \frac{15}{32} = 0.46875 \end{aligned} $$
> Left endpoints approximation (underestimates the curve):
> $$ \begin{aligned} L_4 &= \frac{1}{4} (0)^2 + \frac{1}{4} \left(\frac{1}{4}\right)^2 + \frac{1}{4} \left(\frac{1}{2}\right)^2 + \frac{1}{4} \left(\frac{3}{4}\right)^2 \\ &= \frac{7}{32} = 0.21875 \end{aligned} $$
> This establishes lower and upper estimates for the true area $A$: $0.21875 < A < 0.46875$.
> 
> ![[Pasted image 20260724001359.png|center]]

> [!example] Example 2: Evaluating the Exact Area via Limits
> **Problem Statement:** For the region $S$ in Example 1, show that the sum of the areas of the upper approximating rectangles approaches $1/3$, that is, $\lim_{n \to \infty} R_n = 1/3$.
> 
> **Solution:**
> $R_n$ is the sum of the areas of $n$ rectangles, each with width $1/n$ and heights evaluated at points $1/n, 2/n, \dots, n/n$.
> $$ \begin{aligned} R_n &= \frac{1}{n}\left(\frac{1}{n}\right)^2 + \frac{1}{n}\left(\frac{2}{n}\right)^2 + \dots + \frac{1}{n}\left(\frac{n}{n}\right)^2 \\ &= \frac{1}{n^3} (1^2 + 2^2 + \dots + n^2) \end{aligned} $$
> Using the standard formula for the sum of squares: $1^2 + 2^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}{6}$.
> $$ \begin{aligned} R_n &= \frac{1}{n^3} \cdot \frac{n(n + 1)(2n + 1)}{6} = \frac{(n + 1)(2n + 1)}{6n^2} \end{aligned} $$
> Taking the limit as $n \to \infty$:
> $$ \begin{aligned} \lim_{n \to \infty} R_n &= \lim_{n \to \infty} \frac{(n + 1)(2n + 1)}{6n^2} \\ &= \lim_{n \to \infty} \frac{1}{6} \left(\frac{n+1}{n}\right) \left(\frac{2n+1}{n}\right) \\ &= \lim_{n \to \infty} \frac{1}{6} \left(1 + \frac{1}{n}\right) \left(2 + \frac{1}{n}\right) \\ &= \frac{1}{6} \cdot 1 \cdot 2 = \frac{1}{3} \end{aligned} $$
> 
> ![[Pasted image 20260724001431.png|center]]

> [!example] Example 3: Estimating Area Using Midpoints
> **Problem Statement:** Let $A$ be the area of the region under the graph of $f(x) = \cos x$ between $x = 0$ and $x = b$, where $0 \le b \le \pi/2$. Estimate the area for the case $b = \pi/2$ by taking the sample points to be midpoints and using four subintervals.
> 
> **Solution:**
> With $n = 4$ and bounds from $0$ to $\pi/2$, the width of the subintervals is $\Delta x = (\pi/2)/4 = \pi/8$.
> The subintervals are $[0, \pi/8], [\pi/8, \pi/4], [\pi/4, 3\pi/8], [3\pi/8, \pi/2]$.
> The midpoints $x_i^*$ for these intervals are:
> $$ x_1^* = \frac{\pi}{16}, \quad x_2^* = \frac{3\pi}{16}, \quad x_3^* = \frac{5\pi}{16}, \quad x_4^* = \frac{7\pi}{16} $$
> The sum of the areas of the four approximating rectangles is evaluated as:
> $$ \begin{aligned} M_4 &= \sum_{i=1}^4 f(x_i^*) \Delta x \\ &= \left(\cos \frac{\pi}{16}\right) \frac{\pi}{8} + \left(\cos \frac{3\pi}{16}\right) \frac{\pi}{8} + \left(\cos \frac{5\pi}{16}\right) \frac{\pi}{8} + \left(\cos \frac{7\pi}{16}\right) \frac{\pi}{8} \\ &= \frac{\pi}{8} \left(\cos \frac{\pi}{16} + \cos \frac{3\pi}{16} + \cos \frac{5\pi}{16} + \cos \frac{7\pi}{16}\right) \approx 1.006 \end{aligned} $$
> 
> ![[Pasted image 20260724001513.png|center]]

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 284)