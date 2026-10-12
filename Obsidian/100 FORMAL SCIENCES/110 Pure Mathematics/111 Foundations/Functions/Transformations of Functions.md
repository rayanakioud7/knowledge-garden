Date: 2026-05-17
Tags: [[Mathematics]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---

> Transforming a function affects its graph and we will see why

---
# Vertical shifting

Adding a constant to a function shifts its graph vertically.

> [!info] Vertical Shifts of Graphs
> Suppose $c > 0$.
> - To graph $y = f(x) + c$, shift the graph of $y = f(x)$ **upward** $c$ units.
> - To graph $y = f(x) - c$, shift the graph of $y = f(x)$ **downward** $c$ units.
> 
> ![[Pasted image 20260517181710.png|center]]


> [!example] Example 1: Vertical Shifts of Graphs
> Use the graph of $f(x) = x^2$ to sketch:
> (a) $g(x) = x^2 + 3$
> (b) $h(x) = x^2 - 2$

**Solution**

(a) $g(x) = x^2 + 3 = f(x) + 3$
- Shift graph of $f$ **upward 3 units**

(b) $h(x) = x^2 - 2 = f(x) - 2$
- Shift graph of $f$ **downward 2 units**

![[Pasted image 20260517181739.png|center|381]]

---
# Horizontal Shifting

> [!info] Horizontal Shifts of Graphs
> Suppose $c > 0$.
> - To graph $y = f(x - c)$, shift the graph of $y = f(x)$ to the **right** $c$ units.
> - To graph $y = f(x + c)$, shift the graph of $y = f(x)$ to the **left** $c$ units.
> 
> ![[Pasted image 20260517181948.png|center]]


> [!example] Example 2: Horizontal Shifts of Graphs
> Use the graph of $f(x) = x^2$ to sketch:
> (a) $g(x) = (x + 4)^2$
> (b) $h(x) = (x - 2)^2$

**Solution**
(a) To graph $g$, shift the graph of $f$ to the **left 4 units**.
(b) To graph $h$, shift the graph of $f$ to the **right 2 units**.

![[Pasted image 20260517182036.png|center|411]]

---

> [!example] Example 3: Combining Horizontal and Vertical Shifts
> Sketch the graph of $f(x) = |x + 1| - 3$.

**Solution**
The equation involves two transformations of the graph of $y = |x|$.

1.  **Start:** Graph $y = |x|$.
2.  **Horizontal Shift:** Shift left 1 unit $\rightarrow y = |x + 1|$.
3.  **Vertical Shift:** Shift downward 3 units $\rightarrow y = |x + 1| - 3$.

![[Pasted image 20260517182430.png|center|403]]

---
# Reflecting Graphs

> [!info] Reflection Rules
> | Transformation | Effect on Graph |
> | :--- | :--- |
> | $y = -f(x)$ | Reflect about **x-axis** |
> | $y = f(-x)$ | Reflect about **y-axis** |
> 
> ![[Pasted image 20260517182931.png|center]]


> [!example] Example 4: Reflecting Graphs
> Sketch: (a) $f(x) = -x^2$ (b) $g(x) = \sqrt{-x}$

**Solution**
(a) Start with $y = x^2$. The graph of $f(x) = -x^2$ is the reflection about the **x-axis**.

![[Pasted image 20260517183014.png|center|310]]

(b) Start with $y = \sqrt{x}$. The graph of $g(x) = \sqrt{-x}$ is the reflection about the **y-axis**.
Note domain: $\{x \mid x \le 0\}$.

![[Pasted image 20260517183100.png|center|487]]

---

# Vertical Stretching and Shrinking

> [!info] Vertical Stretching and Shrinking
> To graph $y = cf(x)$ (assume $c > 0$):
> - If $c > 1$, **stretch** the graph of $y = f(x)$ vertically by a factor of $c$.
> - If $0 < c < 1$, **shrink** the graph of $y = f(x)$ vertically by a factor of $c$.
> 
> ![[Pasted image 20260517183623.png|center]]

> [!example] Example 5: Vertical Stretching and Shrinking
> Use $f(x) = x^2$ to sketch:
> (a) $g(x) = 3x^2$
> (b) $h(x) = \frac{1}{3}x^2$

**Solution**
(a) Multiply y-coordinates of $f$ by 3.
$$ g(x) = 3f(x) \quad \leftarrow \text{Stretch vertically by factor of 3} $$
Result is the narrowest parabola.

(b) Multiply y-coordinates of $f$ by $\frac{1}{3}$.
$$ h(x) = \frac{1}{3}f(x) \quad \leftarrow \text{Shrink vertically by factor of } \frac{1}{3} $$
Result is the widest parabola.

![[Pasted image 20260517183648.png|center|384]]

---

> [!example] Example 6: Combining Shifting, Stretching, and Reflecting
> Sketch the graph of $f(x) = 1 - 2(x - 3)^2$.

**Solution**
Start with the parent function $y = x^2$ and apply transformations sequentially:

1.  **Horizontal Shift:** Shift right 3 units.
    $$y = (x - 3)^2$$
2.  **Reflect & Stretch:** Reflect about the x-axis and stretch vertically by a factor of 2.
    $$y = -2(x - 3)^2$$
3.  **Vertical Shift:** Shift upward 1 unit.
    $$y = 1 - 2(x - 3)^2$$

![[Pasted image 20260517184038.png|center|449]]

---

## Horizontal Stretching and Shrinking

> [!info] Horizontal Stretching and Shrinking
> To graph $y = f(cx)$ (assume $c > 0$):
> - If $c > 1$, **shrink** the graph of $y = f(x)$ horizontally by a factor of $1/c$.
> - If $0 < c < 1$, **stretch** the graph of $y = f(x)$ horizontally by a factor of $1/c$.
> 
> ![[Pasted image 20260517184221.png|center]]


> [!example] Example 7: Horizontal Stretching and Shrinking
> Given the graph of $y = f(x)$.
> 
>![[Pasted image 20260517184301.png|center]] 
> Sketch:
> (a) $y = f(2x)$
> (b) $y = f(\frac{1}{2}x)$

**Solution**

(a) **Shrink** the graph horizontally by a factor of $\frac{1}{2}$.
![[Pasted image 20260517184332.png|350]]

(b) **Stretch** the graph horizontally by a factor of $2$ (since $1/(1/2) = 2$).
![[Pasted image 20260517184417.png]]

---

> [!example] Example 8: Finding an Equation for a Combination of Transformations
> Apply the following transformations to $f(x) = \sqrt{x}$ in order:
> 1. Shift 1 unit to the left
> 2. Shrink vertically by a factor of $\frac{1}{2}$
> 3. Reflect about the $y$-axis
>
> Find the equation for the final graph.

**Solution**

| Step | Transformation | Equation |
| :--- | :--- | :--- |
| Start | Base function | $y = \sqrt{x}$ |
| 1 | Shift left 1 unit | $y = \sqrt{x + 1}$ |
| 2 | Shrink vertically by $\frac{1}{2}$ | $y = \frac{1}{2}\sqrt{x + 1}$ |
| 3 | Reflect about $y$-axis ($x \to -x$) | $y = \frac{1}{2}\sqrt{-x + 1}$ |

**Final Equation:**
$$ y = \frac{1}{2}\sqrt{1 - x} $$

![[Pasted image 20260517184628.png|center]]



---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 201)