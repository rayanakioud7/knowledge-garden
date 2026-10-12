Date: 2026-07-05 
Tags: [[Mathematics]], [[Analysis]], [[Functions]], [[Derivatives]]

---
## The Mean Value Theorem

### 1. Rolle's Theorem

> [!info] Rolle's Theorem
> Let $f$ satisfy:
> 1. $f$ is continuous on $[a, b]$.
> 2. $f$ is differentiable on $(a, b)$.
> 3. $f(a) = f(b)$.
>
> Then there exists $c \in (a, b)$ such that $f'(c) = 0$.

**Proof:** Three cases.

- **Case I:** $f(x) = k$ constant. Then $f'(x) = 0$ everywhere, so any $c \in (a, b)$ works.

- **Case II:** $f(x) > f(a)$ for some $x \in (a, b)$. By the EVT (hypothesis 1), $f$ attains an absolute max on $[a, b]$. Since $f(a) = f(b)$ and the max exceeds $f(a)$, the max is at some $c \in (a, b)$. This is a local max; by hypothesis 2, $f'(c)$ exists, so by Fermat's Theorem, $f'(c) = 0$.

- **Case III:** $f(x) < f(a)$ for some $x \in (a, b)$. Same argument using the absolute min. $\blacksquare$

![[Pasted image 20260705191629.png]]

---

> [!example] Example 1 — Position Function
> If $s = f(t)$ is the position of a moving object and $f(a) = f(b)$ (same place at two instants), Rolle's Theorem guarantees an instant $t = c$ where the velocity $f'(c) = 0$. E.g., a ball thrown straight up has zero velocity at its apex.

---

> [!example] Example 2 — Uniqueness of Real Root
> **Problem:** Prove that $x^3 + x - 1 = 0$ has exactly one real root.
>
> **Existence (IVT):** Let $f(x) = x^3 + x - 1$. Then $f(0) = -1 < 0$ and $f(1) = 1 > 0$; $f$ is continuous, so by the IVT there is a root $c \in (0, 1)$.
>
> **Uniqueness (Rolle):** Suppose two roots $a < b$ exist, so $f(a) = 0 = f(b)$. $f$ is a polynomial, hence continuous on $[a, b]$ and differentiable on $(a, b)$. By Rolle's Theorem, $\exists c \in (a, b)$ with $f'(c) = 0$. But
>
> $$f'(x) = 3x^2 + 1 \geq 1 > 0 \quad \text{for all } x$$
>
> Contradiction. So there is exactly one real root. $\blacksquare$

![[Pasted image 20260705191710.png|center]]

---

### 2. The Mean Value Theorem

> [!info] Mean Value Theorem (MVT)
> Let $f$ satisfy:
> 1. $f$ is continuous on $[a, b]$.
> 2. $f$ is differentiable on $(a, b)$.
>
> Then there is a number $c \in (a, b)$ such that
>
> $$f'(c) = \frac{f(b) - f(a)}{b - a} \tag{1}$$
>
> or equivalently,
>
> $$f(b) - f(a) = f'(c)(b - a) \tag{2}$$

**Geometric interpretation:** The slope of the secant from $A(a, f(a))$ to $B(b, f(b))$ is

$$m_{AB} = \frac{f(b) - f(a)}{b - a} \tag{3}$$

The MVT states that some point $P(c, f(c))$ has a tangent line **parallel** to the secant $AB$.

![[Pasted image 20260705191807.png]]

---

### 3. Proof of the MVT

Apply Rolle's Theorem to the difference between $f$ and the secant line $AB$.

Equation of line $AB$:

$$y = f(a) + \frac{f(b) - f(a)}{b - a}(x - a)$$

Define

$$h(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a}(x - a) \tag{4}$$

**Verify Rolle's hypotheses for $h$:**

1. $h$ is continuous on $[a, b]$ (sum of $f$ and a linear function).
2. $h$ is differentiable on $(a, b)$; in fact,
$$h'(x) = f'(x) - \frac{f(b) - f(a)}{b - a}$$
3. Endpoint check:
$$
\begin{aligned}
h(a) &= f(a) - f(a) - 0 = 0 \\
h(b) &= f(b) - f(a) - \frac{f(b) - f(a)}{b - a}(b - a) = f(b) - f(a) - [f(b) - f(a)] = 0
\end{aligned}
$$
So $h(a) = h(b) = 0$.

By Rolle's Theorem, $\exists c \in (a, b)$ with $h'(c) = 0$:

$$0 = f'(c) - \frac{f(b) - f(a)}{b - a} \implies f'(c) = \frac{f(b) - f(a)}{b - a} \quad \blacksquare$$

![[Pasted image 20260705192001.png|center]]

---

> [!example] Example 3 — MVT Applied
> **Problem:** Illustrate MVT with $f(x) = x^3 - x$ on $[0, 2]$.
>
> $f$ is a polynomial, hence continuous on $[0, 2]$ and differentiable on $(0, 2)$. Then $\exists c \in (0, 2)$ with
>
> $$f(2) - f(0) = f'(c)(2 - 0)$$
>
> $f(2) = 6$, $f(0) = 0$, $f'(x) = 3x^2 - 1$:
>
> $$6 = (3c^2 - 1)(2) = 6c^2 - 2 \implies c^2 = \tfrac{4}{3} \implies c = \pm \tfrac{2}{\sqrt{3}}$$
>
> Since $c \in (0, 2)$: $c = \dfrac{2}{\sqrt{3}}$. The tangent at this $c$ is parallel to the secant through $(0, 0)$ and $(2, 6)$.

![[Pasted image 20260705192031.png]]

---

### 4. Consequence: Zero Derivative ⇒ Constant

> [!info] Theorem 5
> If $f'(x) = 0$ for all $x$ in an interval $(a, b)$, then $f$ is constant on $(a, b)$.

**Proof:** Let $x_1 < x_2$ in $(a, b)$. Apply the MVT to $f$ on $[x_1, x_2]$: $\exists c \in (x_1, x_2)$ with

$$f(x_2) - f(x_1) = f'(c)(x_2 - x_1) \tag{6}$$

Since $f'(c) = 0$, $f(x_2) = f(x_1)$. Thus $f$ is constant on $(a, b)$. $\blacksquare$

---

> [!info] Corollary 7
> If $f'(x) = g'(x)$ for all $x$ in an interval $(a, b)$, then $f - g$ is constant on $(a, b)$; i.e., $f(x) = g(x) + c$ for some constant $c$.

**Proof:** Let $F(x) = f(x) - g(x)$. Then $F'(x) = f'(x) - g'(x) = 0$ on $(a, b)$, so by Theorem 5, $F$ is constant. $\blacksquare$

---

> [!warning] Note: Interval Hypothesis is Essential
> Theorem 5 requires the domain to be an **interval**. Counterexample:
>
> $$f(x) = \frac{x}{|x|} = \begin{cases} 1 & \text{if } x > 0 \\ -1 & \text{if } x < 0 \end{cases}$$
>
> Domain $D = \{x : x \neq 0\}$; $f'(x) = 0$ on $D$, yet $f$ is not constant. No contradiction because $D$ is **not** an interval — $f$ is constant on each of $(-\infty, 0)$ and $(0, \infty)$ separately.


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 208)