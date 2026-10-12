Date: 2026-05-18
Tags: [[Mathematics]], [[Algebra]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]], [[Polynomials]]

---

> [!info] Polynomial Function of Degree $n$
> A **polynomial function** is defined by a polynomial expression.  
> A polynomial function of **degree $n$** has the form:
> $$
> P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0 \quad (a_n \ne 0)
> $$
> - $a_n$: leading coefficient  
> - $n$: degree (highest power with nonzero coefficient)  
> - Domain: all real numbers $\mathbb{R}$

*Note: Constant functions ($n=0$) and linear functions ($n=1$) are special cases. Quadratics ($n=2$) studied next.*

---
## Quadratic Functions

A **quadratic function** is a polynomial function of degree 2:

> [!info] Standard Form
> $$ f(x) = ax^2 + bx + c \quad (a \ne 0) $$

Its graph is a **parabola**, obtainable by transforming the parent function $f(x) = x^2$ via shifts, stretches, and reflections 

---

### Vertex Form of a Quadratic Function

By completing the square, any quadratic can be written as:

> [!info] Vertex Form
> $$ f(x) = a(x - h)^2 + k $$
> - Vertex: $(h, k)$
> - If $a > 0$: parabola opens **upward**
> - If $a < 0$: parabola opens **downward**
> 
> ![[Pasted image 20260518142419.png|center]]


> [!tip] Why Vertex Form Matters  
> Reveals vertex and direction instantly. Ideal for graphing or optimization problems. Convert from standard form using “completing the square” 

---

> [!example] Example 1: Vertex Form of a Quadratic Function  
> Let $f(x) = 2x^2 - 12x + 13$.  
> (a) Express in vertex form.  
> (b) Find vertex, x- and y-intercepts.  
> (c) Sketch graph.  
> (d) Find domain and range.

**Solution**

**(a) Vertex Form via Completing the Square**

$$
\begin{aligned}
f(x) &= 2x^2 - 12x + 13 \\
&= 2(x^2 - 6x) + 13 \quad \leftarrow \text{Factor 2 from } x\text{-terms} \\
&= 2(x^2 - 6x + 9) + 13 - 2 \cdot 9 \quad \leftarrow \text{Complete square: add/subtract } 9 \text{ inside} \\
&= 2(x - 3)^2 - 5 \quad \leftarrow \text{Simplify}
\end{aligned}
$$

Vertex form: $f(x) = 2(x - 3)^2 - 5$

---

**(b) Key Features**

- **Vertex**: $(3, -5)$ ← from vertex form
- **y-intercept**: $f(0) = 13$ → point $(0, 13)$
- **x-intercepts**: Solve $f(x) = 0$:

$$
\begin{aligned}
2x^2 - 12x + 13 &= 0 \\
x &= \frac{12 \pm \sqrt{(-12)^2 - 4 \cdot 2 \cdot 13}}{2 \cdot 2} = \frac{12 \pm \sqrt{144 - 104}}{4} = \frac{12 \pm \sqrt{40}}{4} = \frac{12 \pm 2\sqrt{10}}{4} = \frac{6 \pm \sqrt{10}}{2}
\end{aligned}
$$

Approximate values: $x \approx 1.42$, $x \approx 4.58$

---

**(c) Graph Sketch**

Start with $y = x^2$, then:
- Shift right 3 units
- Stretch vertically by factor 2
- Shift down 5 units

Plot vertex $(3, -5)$, y-intercept $(0, 13)$, x-intercepts ≈ $(1.42, 0)$ and $(4.58, 0)$. Draw upward-opening parabola.

![[Pasted image 20260518143221.png|center]]

---

**(d) Domain and Range**

- **Domain**: All real numbers → $(-\infty, \infty)$
- **Range**: Since parabola opens upward and minimum value is $-5$ → $[-5, \infty)$

---

> [!tip] Completing the Square Tip  
> When leading coefficient ≠ 1, factor it out *only* from the $x^2$ and $x$ terms before completing the square. Don’t forget to subtract the added constant outside the parentheses!

---

> [!info] Maximum or Minimum Value of a Quadratic Function  
> Let $f(x) = a(x - h)^2 + k$ be in vertex form. The extremum occurs at the vertex $x = h$:

| Condition | Extremum Type | Value      |
| --------- | ------------- | ---------- |
| $a > 0$   | **Minimum**   | $f(h) = k$ |
| $a < 0$   | **Maximum**   | $f(h) = k$ |

![[Pasted image 20260518143526.png|center]]

> [!tip] Vertex = Optimal Point  
> For real-world applications (profit, area, trajectory), the vertex gives the optimal value — max if opening down, min if opening up. Always check sign of $a$ first.

---

> [!example] **Example: Minimum Value of a Quadratic Function**
> 
> Consider the quadratic function $f(x) = 5x^2 - 30x + 49$.
> 
> **(a) Express $f$ in vertex form.**
> 
> $$\begin{aligned} f(x) &= 5x^2 - 30x + 49 \\ &= 5(x^2 - 6x) + 49 && \leftarrow \text{Factor } 5 \text{ from } x\text{-terms} \\ &= 5(x^2 - 6x + 9) + 49 - 5 \cdot 9 && \leftarrow \text{Complete the square: add } 9 \text{ inside, subtract } 5 \cdot 9 \text{ outside} \\ &= 5(x - 3)^2 + 4 && \leftarrow \text{Factor and simplify} \end{aligned}$$
> 
> **(b) Sketch a graph of $f$.**
> 
> ![[Pasted image 20260518143944.png|center]]
> 
> **(c) Find the minimum value of $f$.**
> 
> Since $a = 5 > 0$, $f$ has a minimum value at the vertex $(3, 4)$:
> 
> $$f(3) = 4$$

---

> [!example] **Example: Maximum Value of a Quadratic Function**
> 
> Consider the quadratic function $f(x) = -x^2 + x + 2$.
> 
> **(a) Express $f$ in vertex form.**
> 
> $$\begin{aligned} f(x) &= -x^2 + x + 2 \\ &= -(x^2 - x) + 2 && \leftarrow \text{Factor } -1 \text{ from } x\text{-terms} \\ &= -(x^2 - x + \tfrac{1}{4}) + 2 - (-1)\tfrac{1}{4} && \leftarrow \text{Complete the square: add } \tfrac{1}{4} \text{ inside, subtract } (-1)\tfrac{1}{4} \text{ outside} \\ &= -(x - \tfrac{1}{2})^2 + \tfrac{9}{4} && \leftarrow \text{Factor and simplify} \end{aligned}$$
> 
> **(b) Sketch a graph of $f$.**
> 
> $x$-intercepts occur at $x = -1, 2 \quad \leftarrow f(x) = 0$
> 
> ![[Pasted image 20260518144329.png|center]]
> 
> **(c) Find the maximum value of $f$.**
> 
> Since $a = -1 < 0$, $f$ has a maximum value at the vertex $(\tfrac{1}{2}, \tfrac{9}{4})$:
> 
> $$f(\tfrac{1}{2}) = \tfrac{9}{4}$$

---

## Maximum or Minimum Value of a Quadratic Function

$$\begin{aligned} f(x) &= ax^2 + bx + c \\ &= a\left(x^2 + \frac{b}{a}x\right) + c && \leftarrow \text{Factor } a \text{ from the } x\text{-terms} \\ &= a\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2}\right) + c - a\left(\frac{b^2}{4a^2}\right) && \leftarrow \text{Complete the square: Add } \frac{b^2}{4a^2} \text{ inside, subtract } a\left(\frac{b^2}{4a^2}\right) \text{ outside} \\ &= a\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a} && \leftarrow \text{Factor} \end{aligned}$$

Vertex form parameters: $h = -\frac{b}{2a} \quad k = c - \frac{b^2}{4a}$

---

> [!info] **Maximum or Minimum Value of a Quadratic Function**
> 
> The maximum or minimum value of a quadratic function $f(x) = ax^2 + bx + c$ occurs at:
> 
> $$x = -\frac{b}{2a}$$
> 
> |**Condition**|**Extremum Type**|**Value**|
> |---|---|---|
> |$a > 0$|Minimum|$f\left(-\frac{b}{2a}\right)$|
> |$a < 0$|Maximum|$f\left(-\frac{b}{2a}\right)$|


> [!example] **Example: Finding Maximum and Minimum Values of Quadratic Functions**
> 
> Find the maximum or minimum value of each quadratic function.
> 
> **(a) $f(x) = x^2 + 4x$**
> 
> Parameters: $a = 1, \quad b = 4$
> 
> Extremum location:
> 
> $$x = -\frac{b}{2a} = -\frac{4}{2 \cdot 1} = -2$$
> 
> Since $a > 0$, the function has a minimum value:
> 
> $$f(-2) = (-2)^2 + 4(-2) = -4$$
> 
> ![[Pasted image 20260518144826.png|center]]
> 
> **(b) $g(x) = -2x^2 + 4x - 5$**
> 
> Parameters: $a = -2, \quad b = 4$
> 
> Extremum location:
> 
> $$x = -\frac{b}{2a} = -\frac{4}{2 \cdot (-2)} = 1$$
> 
> Since $a < 0$, the function has a maximum value:
> 
> $$g(1) = -2(1)^2 + 4(1) - 5 = -3$$
> 
> ![[Pasted image 20260518144842.png|center]]


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 252)