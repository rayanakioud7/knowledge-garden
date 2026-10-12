Date: 2026-07-05
Tags: [[Mathematics]], [[Analysis]], [[Functions]], [[Derivatives]], [[Optimization]]

---

## Maximum and Minimum Values

**Motivation:** Optimization problems (minimize cost, maximize acceleration, etc.) reduce to finding extreme values of functions.

---

### 1. Absolute (Global) Extrema

> [!info] Definition 1 — Absolute Extrema
> Let $c$ be a number in the domain $D$ of $f$. Then $f(c)$ is the
> - **absolute maximum** of $f$ on $D$ if $f(c) \geq f(x)$ for all $x \in D$.
> - **absolute minimum** of $f$ on $D$ if $f(c) \leq f(x)$ for all $x \in D$.
>
> Absolute max/min values are called the **extreme values** of $f$.

---

### 2. Local Extrema

> [!info] Definition 2 — Local Extrema
> The number $f(c)$ is a
> - **local maximum** of $f$ if $f(c) \geq f(x)$ when $x$ is near $c$.
> - **local minimum** of $f$ if $f(c) \leq f(x)$ when $x$ is near $c$.
>
> "$x$ near $c$" means $x$ is in some open interval containing $c$.

![[Pasted image 20260705183704.png|center|391]]

---

> [!example] Example 1 — $f(x) = \cos x$
> Since $\cos(2n\pi) = 1$ and $\cos((2n+1)\pi) = -1$ for integer $n$, the function attains its absolute max $1$ and absolute min $-1$ infinitely often.

> [!example] Example 2 — $f(x) = x^2$
> $f(0) = 0$ is the absolute (and local) minimum, since $x^2 \geq 0$. There is **no** maximum value.
> 
> ![[Pasted image 20260705183739.png|center]]

> [!example] Example 3 — $f(x) = x^3$
> Has no absolute or local extrema.
> 
> ![[Pasted image 20260705183805.png|center]]

> [!example] Example 4 — $f(x) = 3x^4 - 16x^3 + 18x^2$ on $[-1, 4]$
> - Local max: $f(1) = 5$
> - Absolute max: $f(-1) = 37$ (endpoint — not a local max)
> - Local + absolute min: $f(3) = -27$
> - Local min: $f(0) = 0$
> - No extremum at $x = 4$.
>   
>   ![[Pasted image 20260705183831.png|center]]

---

### 3. The Extreme Value Theorem

> [!info] Theorem 3 — Extreme Value Theorem (EVT)
> If $f$ is **continuous** on a **closed interval** $[a, b]$, then $f$ attains an absolute maximum $f(c)$ and an absolute minimum $f(d)$ at some $c, d \in [a, b]$.

![[Pasted image 20260705183909.png]]

**Both hypotheses are essential:**

- **Discontinuity:** A function on $[0, 2]$ with a jump can fail to attain its supremum. (Figure 8)
- **Open interval:** A continuous function on $(0, 2)$ may be unbounded. (Figure 9)

![[Pasted image 20260705183923.png|center]]

---

### 4. Fermat's Theorem

At an interior local extremum where the derivative exists, the tangent is horizontal.

> [!info] Theorem 4 — Fermat's Theorem
> If $f$ has a local maximum or minimum at $c$, and if $f'(c)$ exists, then
> $$f'(c) = 0$$

![[Pasted image 20260705184028.png|center]]

**Proof (local max case):** Since $f(c) \geq f(x)$ for $x$ near $c$,

$$
f(c + h) - f(c) \leq 0 \tag{5}
$$

for $h$ near $0$.

**Case $h > 0$:** Divide (5) by $h > 0$:

$$
\frac{f(c+h) - f(c)}{h} \leq 0 \implies \lim_{h \to 0^+}\frac{f(c+h) - f(c)}{h} \leq 0
$$

Since $f'(c)$ exists, $f'(c) \leq 0$.

**Case $h < 0$:** Dividing by negative $h$ flips the inequality:

$$
\frac{f(c+h) - f(c)}{h} \geq 0 \implies \lim_{h \to 0^-}\frac{f(c+h) - f(c)}{h} \geq 0
$$

Hence $f'(c) \geq 0$.

Both inequalities force $f'(c) = 0$. $\blacksquare$

---

> [!warning] Converse of Fermat's Theorem is FALSE
> **Example 5:** $f(x) = x^3$ has $f'(0) = 0$ but no extremum at $0$ (the curve crosses its horizontal tangent).
>
>![[Pasted image 20260705184110.png|center]]
>
> **Example 6:** $f(x) = |x|$ has an absolute min at $0$, but $f'(0)$ does not exist.
>
> Extrema may occur where $f'(c) = 0$ **or** where $f'(c)$ does not exist.
> 
> ![[Pasted image 20260705184137.png|center]]

---

### 5. Critical Numbers

> [!info] Definition 6 — Critical Number
> A **critical number** of $f$ is a number $c$ in the domain of $f$ such that either $f'(c) = 0$ or $f'(c)$ does not exist.

**Rephrasing Fermat's Theorem (Theorem 7):**

> If $f$ has a local maximum or minimum at $c$, then $c$ is a critical number of $f$.

---

> [!example] Example 7: Critical Numbers of $f(x) = x^{3/5}(4 - x)$
> By the Product Rule:
>
> $$
> \begin{aligned}
> f'(x) &= x^{3/5}(-1) + (4 - x)\left(\tfrac{3}{5}x^{-2/5}\right) \\
> &= -x^{3/5} + \frac{3(4 - x)}{5x^{2/5}} \\
> &= \frac{-5x + 3(4 - x)}{5x^{2/5}} = \frac{12 - 8x}{5x^{2/5}}
> \end{aligned}
> $$
>
> - $f'(x) = 0 \iff 12 - 8x = 0 \iff x = \tfrac{3}{2}$
> - $f'(x)$ DNE at $x = 0$.
>
> **Critical numbers:** $0$ and $\tfrac{3}{2}$.

![[Pasted image 20260705184219.png|center]]

---

### 6. The Closed Interval Method

Since an absolute extremum on $[a, b]$ occurs either at a critical number (interior) or at an endpoint:

> [!info] The Closed Interval Method
> To find the absolute max and min of a **continuous** $f$ on $[a, b]$:
> 1. Find $f$ at each **critical number** in $(a, b)$.
> 2. Find $f(a)$ and $f(b)$.
> 3. **Largest** value from Steps 1–2 = absolute max; **smallest** = absolute min.

---

> [!example] Example 8: Absolute Extrema of $f(x) = x^3 - 3x^2 + 1$ on $[-\tfrac{1}{2}, 4]$
> Since $f$ is continuous on $[-\tfrac{1}{2}, 4]$, apply the Closed Interval Method.
>
> **Step 1 — Critical numbers:**
>
> $$f'(x) = 3x^2 - 6x = 3x(x - 2)$$
>
> $f'$ exists everywhere; $f'(x) = 0 \iff x = 0$ or $x = 2$. Both lie in $(-\tfrac{1}{2}, 4)$.
>
> **Values at critical numbers:**
>
> $$f(0) = 1, \qquad f(2) = -3$$
>
> **Step 2 — Endpoints:**
>
> $$f\!\left(-\tfrac{1}{2}\right) = \tfrac{1}{8}, \qquad f(4) = 17$$
>
> **Step 3 — Compare:**
>
> | $x$ | $f(x)$ |
> |---|---|
> | $-\tfrac{1}{2}$ | $\tfrac{1}{8}$ |
> | $0$ | $1$ |
> | $2$ | $-3$ ← **min** |
> | $4$ | $17$ ← **max** |
>
> **Absolute max:** $f(4) = 17$. **Absolute min:** $f(2) = -3$.
>
> The absolute max occurs at an endpoint; the absolute min at a critical number.

![[Pasted image 20260705184326.png|center|474]]

---

> [!info] First Derivative Test for Absolute Extreme Values
> Suppose that $c$ is a critical number of a continuous function $f$ defined on an interval.
> - (a) If $f'(x) > 0$ for all $x < c$ and $f'(x) < 0$ for all $x > c$, then $f(c)$ is the absolute maximum value of $f$.
> - (b) If $f'(x) < 0$ for all $x < c$ and $f'(x) > 0$ for all $x > c$, then $f(c)$ is the absolute minimum value of $f$.

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 198)