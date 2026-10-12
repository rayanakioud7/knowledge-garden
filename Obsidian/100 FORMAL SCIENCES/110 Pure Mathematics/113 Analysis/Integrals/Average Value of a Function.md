Date: 2026-08-04
Tags:  [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Antiderivatives]]

---

## 5.5 Average Value of a Function

### 1. Average Value Definition

> [!info] Average Value of a Function on  $[a,b]$
> $$ f_{ave} = \frac{1}{b - a} \int_a^b f(x) \, dx $$

---

### 2. The Mean Value Theorem for Integrals

> [!info] The Mean Value Theorem for Integrals
> If $f$ is continuous on $[a, b]$, then there exists a number $c$ in $[a, b]$ such that:
> $$ f(c) = f_{ave} = \frac{1}{b - a} \int_a^b f(x) \, dx $$
> that is,
> $$ \int_a^b f(x) \, dx = f(c)(b - a) $$

![[Pasted image 20260804091023.png|center]]

---

> [!example] Example 1
> **Problem:** Find the average value of $f(x) = 1 + x^2$ on the interval $[-1, 2]$.
> 
> **Solution:**
> With $a = -1$ and $b = 2$ we have:
> $$ \begin{aligned} f_{ave} &= \frac{1}{b - a} \int_a^b f(x) \, dx \\ &= \frac{1}{2 - (-1)} \int_{-1}^2 (1 + x^2) \, dx \\ &= \frac{1}{3} \left[ x + \frac{x^3}{3} \right]_{-1}^2 = 2 \end{aligned} $$

> [!example] Example 2
> **Problem:** Since $f(x) = 1 + x^2$ is continuous on the interval $[-1, 2]$, find the number $c$ in $[-1, 2]$ that satisfies the Mean Value Theorem for Integrals.
> 
> **Solution:**
> In this particular case we can find $c$ explicitly. From Example 1 we know that $f_{ave} = 2$, so the value of $c$ satisfies:
> $$ f(c) = f_{ave} = 2 $$
> Therefore:
> $$ 1 + c^2 = 2 \implies c^2 = 1 $$
> So in this case there happen to be two numbers $c = \pm 1$ in the interval $[-1, 2]$ that work in the Mean Value Theorem for Integrals.
> 
> ![[Pasted image 20260804091104.png|center]]

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 374)