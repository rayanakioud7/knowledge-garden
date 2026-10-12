Date: 2026-08-31
Tags: [[Mathematics]], [[Functions]], [[Analysis]], [[Integral]], [[Trigonometry]]

---

## 7.2 Trigonometric Integrals

### 1. Evaluating $\int \sin^m x \cos^n x \, dx$

> [!info] Algorithm: Powers of Sine and Cosine
> **Case A: $n = 2k + 1$ (odd)**
> $\implies$ Isolate $\cos x$, apply $\cos^2 x = 1 - \sin^2 x$, and substitute $u = \sin x$.
> $$ \int \sin^m x (\cos^2 x)^k \cos x \, dx = \int \sin^m x (1 - \sin^2 x)^k \cos x \, dx $$
> 
> **Case B: $m = 2k + 1$ (odd)**
> $\implies$ Isolate $\sin x$, apply $\sin^2 x = 1 - \cos^2 x$, and substitute $u = \cos x$.
> $$ \int (\sin^2 x)^k \cos^n x \sin x \, dx = \int (1 - \cos^2 x)^k \cos^n x \sin x \, dx $$
> 
> **Case C: $m, n \in 2\mathbb{Z}$ (both even)**
> $\implies$ Apply half-angle identities to reduce the powers:
> $$ \boxed{\sin^2 x = \frac{1}{2}(1 - \cos 2x)} $$
> $$ \boxed{\cos^2 x = \frac{1}{2}(1 + \cos 2x)} $$
> $$ \boxed{\sin x \cos x = \frac{1}{2}\sin 2x} $$

---

### 2. Evaluating $\int \tan^m x \sec^n x \, dx$

> [!info] Algorithm: Powers of Tangent and Secant
> **Case A: $n = 2k$ with $k \ge 2$ (even)**
> $\implies$ Isolate $\sec^2 x$, apply $\sec^2 x = 1 + \tan^2 x$, and substitute $u = \tan x$.
> $$ \int \tan^m x (\sec^2 x)^{k-1} \sec^2 x \, dx = \int \tan^m x (1 + \tan^2 x)^{k-1} \sec^2 x \, dx $$
> 
> **Case B: $m = 2k + 1$ (odd)**
> $\implies$ Isolate $\sec x \tan x$, apply $\tan^2 x = \sec^2 x - 1$, and substitute $u = \sec x$.
> $$ \int (\tan^2 x)^k \sec^{n-1} x (\sec x \tan x) \, dx = \int (\sec^2 x - 1)^k \sec^{n-1} x (\sec x \tan x) \, dx $$

---

### 3. Essential Trigonometric Formulas

> [!info] Base Integrals
> $$ \boxed{\int \tan x \, dx = \ln |\sec x| + C} $$
> $$ \boxed{\int \sec x \, dx = \ln |\sec x + \tan x| + C} $$

> [!info] Product-to-Sum Identities
> Utilized for evaluating mixed-frequency integrals such as $\int \sin mx \cos nx \, dx$:
> $$ \boxed{\sin A \cos B = \frac{1}{2}[\sin(A - B) + \sin(A + B)]} $$
> $$ \boxed{\sin A \sin B = \frac{1}{2}[\cos(A - B) - \cos(A + B)]} $$
> $$ \boxed{\cos A \cos B = \frac{1}{2}[\cos(A - B) + \cos(A + B)]} $$

---

### Examples

> [!example] Example 1: $n$ is odd
> **Problem:** Evaluate $\int \cos^3 x \, dx$.
> 
> **Solution:**
> Let $u = \sin x \implies du = \cos x \, dx$.
> $$ \begin{aligned} \int \cos^3 x \, dx &= \int (1 - \sin^2 x)\cos x \, dx \\ &= \int (1 - u^2) \, du = u - \frac{1}{3}u^3 + C \\ &= \sin x - \frac{1}{3}\sin^3 x + C \end{aligned} $$

> [!example] Example 2: $m$ is odd
> **Problem:** Evaluate $\int \sin^5 x \cos^2 x \, dx$.
> 
> **Solution:**
> Let $u = \cos x \implies du = -\sin x \, dx$.
> $$ \begin{aligned} \int (\sin^2 x)^2 \cos^2 x \sin x \, dx &= \int (1 - \cos^2 x)^2 \cos^2 x \sin x \, dx \\ &= \int (1 - u^2)^2 u^2 (-du) \\ &= -\int (u^2 - 2u^4 + u^6) \, du \\ &= -\left( \frac{u^3}{3} - \frac{2u^5}{5} + \frac{u^7}{7} \right) + C \\ &= -\frac{1}{3}\cos^3 x + \frac{2}{5}\cos^5 x - \frac{1}{7}\cos^7 x + C \end{aligned} $$
> 
> ![[Pasted image 20260831200350.png|center]]

> [!example] Example 3: $m, n$ are even
> **Problem:** Evaluate $\int_0^\pi \sin^2 x \, dx$.
> 
> **Solution:**
> $$ \begin{aligned} \int_0^\pi \sin^2 x \, dx &= \frac{1}{2} \int_0^\pi (1 - \cos 2x) \, dx \\ &= \frac{1}{2} \left[ x - \frac{1}{2}\sin 2x \right]_0^\pi \\ &= \frac{1}{2}(\pi - 0) - \frac{1}{4}(0 - 0) = \frac{\pi}{2} \end{aligned} $$
> 
> ![[Pasted image 20260831200443.png|center]]

> [!example] Example 4: Higher Even Powers
> **Problem:** Evaluate $\int \sin^4 x \, dx$.
> 
> **Solution:**
> $$ \begin{aligned} \int \sin^4 x \, dx &= \int \left( \frac{1 - \cos 2x}{2} \right)^2 dx \\ &= \frac{1}{4} \int (1 - 2\cos 2x + \cos^2 2x) \, dx \\ &= \frac{1}{4} \int \left[ 1 - 2\cos 2x + \frac{1}{2}(1 + \cos 4x) \right] dx \\ &= \frac{1}{4} \int \left( \frac{3}{2} - 2\cos 2x + \frac{1}{2}\cos 4x \right) dx \\ &= \frac{1}{4} \left( \frac{3}{2}x - \sin 2x + \frac{1}{8}\sin 4x \right) + C \end{aligned} $$

> [!example] Example 5: $n$ is even (Secant)
> **Problem:** Evaluate $\int \tan^6 x \sec^4 x \, dx$.
> 
> **Solution:**
> Let $u = \tan x \implies du = \sec^2 x \, dx$.
> $$ \begin{aligned} \int \tan^6 x (\sec^2 x) \sec^2 x \, dx &= \int \tan^6 x (1 + \tan^2 x) \sec^2 x \, dx \\ &= \int u^6(1 + u^2) \, du \\ &= \int (u^6 + u^8) \, du \\ &= \frac{1}{7}\tan^7 x + \frac{1}{9}\tan^9 x + C \end{aligned} $$

> [!example] Example 6: $m$ is odd (Tangent)
> **Problem:** Evaluate $\int \tan^5 \theta \sec^7 \theta \, d\theta$.
> 
> **Solution:**
> Let $u = \sec \theta \implies du = \sec \theta \tan \theta \, d\theta$.
> $$ \begin{aligned} \int (\tan^2 \theta)^2 \sec^6 \theta (\sec \theta \tan \theta) \, d\theta &= \int (\sec^2 \theta - 1)^2 \sec^6 \theta (\sec \theta \tan \theta) \, d\theta \\ &= \int (u^2 - 1)^2 u^6 \, du \\ &= \int (u^{10} - 2u^8 + u^6) \, du \\ &= \frac{1}{11}\sec^{11} \theta - \frac{2}{9}\sec^9 \theta + \frac{1}{7}\sec^7 \theta + C \end{aligned} $$

> [!example] Example 8: $\int \sec^3 x \, dx$
> **Problem:** Evaluate $\int \sec^3 x \, dx$.
> 
> **Solution:**
> Apply integration by parts.
> Let $u = \sec x \implies du = \sec x \tan x \, dx$.
> Let $dv = \sec^2 x \, dx \implies v = \tan x$.
> $$ \begin{aligned} \int \sec^3 x \, dx &= \sec x \tan x - \int \sec x \tan^2 x \, dx \\ &= \sec x \tan x - \int \sec x (\sec^2 x - 1) \, dx \\ &= \sec x \tan x - \int \sec^3 x \, dx + \int \sec x \, dx \end{aligned} $$
> Isolate the target integral on the left hand side:
> $$ 2 \int \sec^3 x \, dx = \sec x \tan x + \ln |\sec x + \tan x| $$
> $$ \implies \int \sec^3 x \, dx = \frac{1}{2} (\sec x \tan x + \ln |\sec x + \tan x|) + C $$

> [!example] Example 9: Product-to-Sum Integration
> **Problem:** Evaluate $\int \sin 4x \cos 5x \, dx$.
> 
> **Solution:**
> $$ \begin{aligned} \int \sin 4x \cos 5x \, dx &= \frac{1}{2} \int [\sin(-x) + \sin 9x] \, dx \\ &= \frac{1}{2} \int (-\sin x + \sin 9x) \, dx \\ &= \frac{1}{2} \left( \cos x - \frac{1}{9}\cos 9x \right) + C \end{aligned} $$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 499)