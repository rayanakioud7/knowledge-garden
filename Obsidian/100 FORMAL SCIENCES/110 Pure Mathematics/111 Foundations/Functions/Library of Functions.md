
Date: 2026-05-16
Tags: [[Mathematics]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---

First we introduce a few more functions, beginning with the **square root function**.

> [!info] Properties of $f(x) = \sqrt{x}$
> 1. The domain and the range are the set of nonnegative real numbers.
> 2. The $x$-intercept of the graph of $f(x) = \sqrt{x}$ is 0. The $y$-intercept of the graph of $f(x) = \sqrt{x}$ is also 0.
> 3. The function is neither even nor odd.
> 4. The function is increasing on the interval $(0, \infty)$.
> 5. The function has an absolute minimum of 0 at $x = 0$.
> 
> ![[Screenshot 2026-05-17 111621.png|center]]

> [!example] Example 1: Graphing the Cube Root Function
> (a) Determine whether $f(x) = \sqrt[3]{x}$ is even, odd, or neither. State whether the graph of $f$ is symmetric with respect to the $y$-axis or symmetric with respect to the origin.
> (b) Determine the intercepts, if any, of the graph of $f(x) = \sqrt[3]{x}$.
> (c) Graph $f(x) = \sqrt[3]{x}$.

**Solution:**
(a) Because
$$f(-x) = \sqrt[3]{-x} = -\sqrt[3]{x} = -f(x)$$
the function is odd. The graph of $f$ is symmetric with respect to the origin.

(b) The $y$-intercept is $f(0) = \sqrt[3]{0} = 0$. The $x$-intercept is found by solving the equation $f(x) = 0$.
$$\begin{aligned} f(x) &= 0 \\ \sqrt[3]{x} &= 0 \quad \leftarrow f(x) = \sqrt[3]{x} \\ x &= 0 \quad \leftarrow \text{Cube both sides of the equation} \end{aligned}$$
The $x$-intercept is also 0.

(c) Use the function to form a table and obtain some points on the graph. Because of the symmetry with respect to the origin, we find only points $(x, y)$ for which $x \ge 0$.

| $x$ | $y = f(x) = \sqrt[3]{x}$ | $(x, y)$ |
| --- | --- | --- |
| $0$ | $0$ | $(0, 0)$ |
| $\frac{1}{8}$ | $\frac{1}{2}$ | $(\frac{1}{8}, \frac{1}{2})$ |
| $1$ | $1$ | $(1, 1)$ |
| $2$ | $\sqrt[3]{2} \approx 1.26$ | $(2, \sqrt[3]{2})$ |
| $8$ | $2$ | $(8, 2)$ |

![[Pasted image 20260517113506.png|center|369]]

> [!info] Properties of $f(x) = \sqrt[3]{x}$
> 1. The domain and the range are the set of all real numbers.
> 2. The $x$-intercept of the graph of $f(x) = \sqrt[3]{x}$ is 0. The $y$-intercept of the graph of $f(x) = \sqrt[3]{x}$ is also 0.
> 3. The graph is symmetric with respect to the origin. The function is odd.
> 4. The function is increasing on the interval $(-\infty, \infty)$.
> 5. The function does not have any local minima or any local maxima.

---

> [!example] Example 2: Graphing the Absolute Value Function
> (a) Determine whether $f(x) = |x|$ is even, odd, or neither. State whether the graph of $f$ is symmetric with respect to the $y$-axis or symmetric with respect to the origin.
> (b) Determine the intercepts, if any, of the graph of $f(x) = |x|$.
> (c) Graph $f(x) = |x|$.

**Solution**
(a) Because
$$f(-x) = |-x| = |x| = f(x)$$
the function is even. The graph of $f$ is symmetric with respect to the $y$-axis.

(b) The $y$-intercept is $f(0) = |0| = 0$. The $x$-intercept is found by solving the equation $f(x) = 0$ or $|x| = 0$. So the $x$-intercept is 0.

(c) Use the function to form a table and obtain some points on the graph. Because of the symmetry with respect to the $y$-axis, we need to find only points $(x, y)$ for which $x \ge 0$.

| $x$ | $y=f(x)$ | $(x, y)$ |
| --- | -------- | -------- |
| $0$ | $0$      | $(0, 0)$ |
| $1$ | $1$      | $(1, 1)$ |
| $2$ | $2$      | $(2, 2)$ |
| $3$ | $3$      | $(3, 3)$ |
![[Pasted image 20260517113442.png|center|445]]

> [!info] Properties of $f(x) = |x|$
> 1. The domain is the set of all real numbers. The range of $f$ is $\{y \mid y \ge 0\}$.
> 2. The $x$-intercept of the graph of $f(x) = |x|$ is 0. The $y$-intercept of the graph of $f(x) = |x|$ is also 0.
> 3. The graph is symmetric with respect to the $y$-axis. The function is even.
> 4. The function is decreasing on the interval $(-\infty, 0)$. It is increasing on the interval $(0, \infty)$.
> 5. The function has an absolute minimum of 0 at $x = 0$.

---

## 2.4 Library of Functions

> [!info] Constant Function
> $$f(x) = b \quad (b \text{ is a real number})$$
> - Domain: $(-\infty, \infty)$
> - Range: $\{b\}$
> - Graph: horizontal line with $y$-intercept $b$
> - Even function
> 
> ![[Pasted image 20260517113530.png|center]]

> [!info] Identity Function
> $$f(x) = x$$
> - Domain: $(-\infty, \infty)$
> - Range: $(-\infty, \infty)$
> - Graph: line with slope 1, $y$-intercept 0
> - Odd function, increasing on $(-\infty, \infty)$
>  
> ![[Pasted image 20260517113613.png|center]]

> [!info] Linear Function
> $$f(x) = mx+b$$
> - Domain: $(-\infty, \infty)$
> - Range: $(-\infty, \infty)$
> - Graph: line with slope $m$, $y$-intercept $b$
> 
> 
> ![[Pasted image 20260517115756.png|center]]
> >see also: [[Lines; Slopes|Slopes]]

> [!info] Square Function
> $$f(x) = x^2$$
> - Domain: $(-\infty, \infty)$
> - Range: $[0, \infty)$
> - Graph: parabola with vertex at $(0, 0)$
> - Even function
> - Decreasing on $(-\infty, 0)$, increasing on $(0, \infty)$
> 
> ![[Pasted image 20260517113649.png|center]]

> [!info] Cube Function
> $$f(x) = x^3$$
> - Domain: $(-\infty, \infty)$
> - Range: $(-\infty, \infty)$
> - Intercept: $(0, 0)$
> - Odd function, increasing on $(-\infty, \infty)$
> 
> ![[Pasted image 20260517113712.png|center]]

> [!info] Square Root Function
> $$f(x) = \sqrt{x}$$
> - Domain: $[0, \infty)$
> - Range: $[0, \infty)$
> - Intercept: $(0, 0)$
> - Neither even nor odd
> - Increasing on $(0, \infty)$
> 
> ![[Pasted image 20260517113734.png|center]]

> [!info] Cube Root Function
> $$f(x) = \sqrt[3]{x}$$
> - Domain: $(-\infty, \infty)$
> - Range: $(-\infty, \infty)$
> - Intercept: $(0, 0)$
> - Odd function, increasing on $(-\infty, \infty)$
> 
> ![[Pasted image 20260517113802.png|center]]

> [!info] Reciprocal Function
> $$f(x) = \frac{1}{x}$$
> - Domain: $(-\infty, 0) \cup (0, \infty)$
> - Range: $(-\infty, 0) \cup (0, \infty)$
> - No intercepts
> - Odd function
> - Decreasing on $(-\infty, 0)$ and $(0, \infty)$
> 
> ![[Pasted image 20260517113835.png|center]]

> [!info] Absolute Value Function
> $$f(x) = |x|$$
> - Domain: $(-\infty, \infty)$
> - Range: $[0, \infty)$
> - Intercept: $(0, 0)$
> - Even function
> - Decreasing on $(-\infty, 0)$, increasing on $(0, \infty)$
> 
> ![[Pasted image 20260517114214.png|center]]

---
## Greatest Integer Function (Floor Function)

> [!info] Definition
> $$f(x) = \lfloor x \rfloor = \text{int}(x) = \text{greatest integer less than or equal to } x$$
> ![[Pasted image 20260517115232.png|center]]

**Examples**
$$ \begin{aligned} \lfloor 2 \rfloor &= 2 & \lfloor 2.3 \rfloor &= 2 & \lfloor 1.999 \rfloor &= 1 \\ \lfloor 0.002 \rfloor &= 0 & \lfloor -0.5 \rfloor &= -1 & \lfloor -3.5 \rfloor &= -4 \end{aligned} $$

**Properties**

| Property | Description |
| --- | --- |
| **Domain** | $(-\infty, \infty)$ |
| **Range** | $\mathbb{Z}$ (Set of integers) |
| **Intercepts** | $y$-int: $0$; $x$-ints: $[0, 1)$ |
| **Symmetry** | Neither even nor odd |
| **Continuity** | Discontinuous (Step Function) |

**Graphing Behavior**
*   Constant on intervals $[k, k+1)$ for integer $k$.
*   Graph is a series of horizontal steps.
*   At integer $x=k$:
    *   Value is $k$ (solid dot at $(k, k)$).
    *   Limit from left is $k-1$ (open circle at $(k, k-1)$).


---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. 