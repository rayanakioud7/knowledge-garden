Date: 2026-08-04
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Antiderivatives]], [[Derivatives]]

---

## 4.5 The Substitution Rule


### 1. Indefinite Integrals


> [!info] The Substitution Rule
> Let $u = g(x)$ be differentiable on interval $I$.
> Let $f \in C^0(g(I))$.
> $$ \int f(g(x))g'(x) \, dx = \int f(u) \, du $$

- $u=g(x)$
- $du = g'(x)dx$

---


> [!example] Example 1
> **Problem:** $\int x^3 \cos(x^4 + 2) \, dx$
> 
> **Solution:**
> Let $u = x^4 + 2 \implies du = 4x^3 \, dx \implies \frac{1}{4}du = x^3 \, dx$.
> $$ \begin{aligned} \int x^3 \cos(x^4 + 2) \, dx &= \int \cos(u) \cdot \frac{1}{4} \, du \\ &= \frac{1}{4}\sin(u) + C \\ &= \frac{1}{4}\sin(x^4 + 2) + C \end{aligned} $$

> [!example] Example 2
> **Problem:** $\int \sqrt{2x + 1} \, dx$
> 
> **Solution 1:**
> Let $u = 2x + 1 \implies du = 2 \, dx \implies dx = \frac{1}{2}du$.
> $$ \begin{aligned} \int \sqrt{2x + 1} \, dx &= \int u^{1/2} \cdot \frac{1}{2} \, du \\ &= \frac{1}{2} \cdot \frac{u^{3/2}}{3/2} + C \\ &= \frac{1}{3}(2x + 1)^{3/2} + C \end{aligned} $$
> **Solution 2:**
> Let $u = \sqrt{2x + 1} \implies u^2 = 2x + 1 \implies 2u \, du = 2 \, dx \implies u \, du = dx$.
> $$ \begin{aligned} \int \sqrt{2x + 1} \, dx &= \int u \cdot u \, du \\ &= \int u^2 \, du \\ &= \frac{u^3}{3} + C = \frac{1}{3}(2x + 1)^{3/2} + C \end{aligned} $$

> [!example] Example 3
> **Problem:** $\int \frac{x}{\sqrt{1 - 4x^2}} \, dx$
> 
> **Solution:**
> Let $u = 1 - 4x^2 \implies du = -8x \, dx \implies x \, dx = -\frac{1}{8}du$.
> $$ \begin{aligned} \int \frac{x}{\sqrt{1 - 4x^2}} \, dx &= -\frac{1}{8} \int u^{-1/2} \, du \\ &= -\frac{1}{8}(2\sqrt{u}) + C \\ &= -\frac{1}{4}\sqrt{1 - 4x^2} + C \end{aligned} $$
> 
> ![[Pasted image 20260804073355.png|center]]

> [!example] Example 4
> **Problem:** $\int \cos 5x \, dx$
> 
> **Solution:**
> Let $u = 5x \implies du = 5 \, dx \implies dx = \frac{1}{5}du$.
> $$ \begin{aligned} \int \cos 5x \, dx &= \frac{1}{5} \int \cos u \, du \\ &= \frac{1}{5} \sin u + C \\ &= \frac{1}{5} \sin 5x + C \end{aligned} $$

> [!example] Example 5
> **Problem:** $\int \sqrt{1 + x^2} x^5 \, dx$
> 
> **Solution:**
> Let $u = 1 + x^2 \implies du = 2x \, dx \implies x \, dx = \frac{1}{2}du$.
> $x^2 = u - 1 \implies x^4 = (u - 1)^2$.
> $$ \begin{aligned} \int \sqrt{1 + x^2} x^5 \, dx &= \int \sqrt{1 + x^2} x^4 \cdot x \, dx \\ &= \int \sqrt{u} (u - 1)^2 \cdot \frac{1}{2} \, du \\ &= \frac{1}{2} \int u^{1/2} (u^2 - 2u + 1) \, du \\ &= \frac{1}{2} \int (u^{5/2} - 2u^{3/2} + u^{1/2}) \, du \\ &= \frac{1}{2} \left( \frac{2}{7}u^{7/2} - 2 \cdot \frac{2}{5}u^{5/2} + \frac{2}{3}u^{3/2} \right) + C \\ &= \frac{1}{7}(1 + x^2)^{7/2} - \frac{2}{5}(1 + x^2)^{5/2} + \frac{1}{3}(1 + x^2)^{3/2} + C \end{aligned} $$

### 2. Definite Integrals


> [!info] The Substitution Rule for Definite Integrals
> Let $g' \in C^0([a, b])$.
> Let $f \in C^0(g([a, b]))$.
> $$ \int_a^b f(g(x))g'(x) \, dx = \int_{g(a)}^{g(b)} f(u) \, du $$

---


> [!example] Example 6
> **Problem:** $\int_0^4 \sqrt{2x + 1} \, dx$
> 
> **Solution:**
> Let $u = 2x + 1 \implies du = 2 \, dx \implies dx = \frac{1}{2}du$.
> $x = 0 \implies u = 1$.
> $x = 4 \implies u = 9$.
> $$ \begin{aligned} \int_0^4 \sqrt{2x + 1} \, dx &= \int_1^9 \frac{1}{2}\sqrt{u} \, du \\ &= \left[ \frac{1}{2} \cdot \frac{2}{3}u^{3/2} \right]_1^9 \\ &= \frac{1}{3}(9^{3/2} - 1^{3/2}) = \frac{26}{3} \end{aligned} $$

> [!example] Example 7
> **Problem:** $\int_1^2 \frac{dx}{(3 - 5x)^2}$
> 
> **Solution:**
> Let $u = 3 - 5x \implies du = -5 \, dx \implies dx = -\frac{1}{5}du$.
> $x = 1 \implies u = -2$.
> $x = 2 \implies u = -7$.
> $$ \begin{aligned} \int_1^2 \frac{dx}{(3 - 5x)^2} &= -\frac{1}{5} \int_{-2}^{-7} u^{-2} \, du \\ &= -\frac{1}{5} \left[ -\frac{1}{u} \right]_{-2}^{-7} \\ &= -\frac{1}{5} \left( \frac{1}{7} - \frac{1}{2} \right) = \frac{1}{14} \end{aligned} $$

### 3. Symmetry


> [!info] Integrals of Symmetric Functions
> Let $f \in C^0([-a, a])$.
> - (a) $f$ even $\implies f(-x) = f(x) \implies \int_{-a}^a f(x) \, dx = 2 \int_0^a f(x) \, dx$.
> - (b) $f$ odd $\implies f(-x) = -f(x) \implies \int_{-a}^a f(x) \, dx = 0$.
> 
> ![[Pasted image 20260804073215.png|center]]

---


> [!example] Example 8
> **Problem:** $\int_{-2}^2 (x^6 + 1) \, dx$
> 
> **Solution:**
> $f(x) = x^6 + 1 \implies f(-x) = f(x) \implies f$ is even.
> $$ \begin{aligned} \int_{-2}^2 (x^6 + 1) \, dx &= 2 \int_0^2 (x^6 + 1) \, dx \\ &= 2 \left[ \frac{1}{7}x^7 + x \right]_0^2 \\ &= 2 \left( \frac{128}{7} + 2 \right) = \frac{284}{7} \end{aligned} $$

> [!example] Example 9
> **Problem:** $\int_{-1}^1 \frac{\tan x}{1 + x^2 + x^4} \, dx$
> 
> **Solution:**
> $f(x) = \frac{\tan x}{1 + x^2 + x^4} \implies f(-x) = -f(x) \implies f$ is odd.
> $$ \int_{-1}^1 \frac{\tan x}{1 + x^2 + x^4} \, dx = 0 $$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 331)