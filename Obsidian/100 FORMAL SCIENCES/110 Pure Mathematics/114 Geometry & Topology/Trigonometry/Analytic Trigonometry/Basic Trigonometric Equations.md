Date: 2026-06-07
Tags: [[Mathematics]], [[Trigonometry]]

---
## Basic Trigonometric Equations

> [!info] Definition
> A **trigonometric equation** contains trigonometric functions.
> - **Identity**: True for *all* values (e.g., $\sin^2 \theta + \cos^2 \theta = 1$).
> - **Equation**: True only for *specific* values of the variable.

**Basic Form**: $T(\theta) = c$, where $T$ is a trig function and $c$ is a constant.

> [!info] Guidelines for Solving Basic Trigonometric Equations
> 1.  **Find solutions in one period**: Find all solutions within an interval of length equal to the function's period ($2\pi$ for sin/cos, $\pi$ for tan).
> 2.  **Find all solutions**: Add integer multiples of the period to the solutions found in Step 1.
>     - For $\sin$ and $\cos$: Add $2k\pi$.
>     - For $\tan$: Add $k\pi$.

---

> [!example] Example 1: Solving $\sin \theta = \frac{1}{2}$
> **1. Solutions in one period $[0, 2\pi)$**:
> Sine is positive in QI and QII. Reference angle is $\pi/6$.
> $$ \theta = \frac{\pi}{6}, \quad \theta = \frac{5\pi}{6} $$
>
> **2. All solutions**:
> $$ \theta = \frac{\pi}{6} + 2k\pi, \quad \theta = \frac{5\pi}{6} + 2k\pi $$
> where $k$ is any integer.

![[Pasted image 20260607161546.png|center]]

---

> [!example] Example 2: Solving $\cos \theta = -\frac{\sqrt{2}}{2}$
> **1. Solutions in one period $[0, 2\pi)$**:
> Cosine is negative in QII and QIII. Reference angle is $\pi/4$.
> $$ \theta = \frac{3\pi}{4}, \quad \theta = \frac{5\pi}{4} $$
>
> **2. All solutions**:
> $$ \theta = \frac{3\pi}{4} + 2k\pi, \quad \theta = \frac{5\pi}{4} + 2k\pi $$
>
> **Specific solutions** (for $k = -1, 0, 1$):
> $$ -\frac{5\pi}{4}, -\frac{3\pi}{4}, \frac{3\pi}{4}, \frac{5\pi}{4}, \frac{11\pi}{4}, \frac{13\pi}{4} $$

---

> [!example] Example 3: Solving $\cos \theta = 0.65$ (Calculator)
> **1. Solutions in one period**:
> Find reference angle using inverse cosine: $\theta = \cos^{-1}(0.65) \approx 0.86$ rad.
> Cosine is positive in QI and QIV.
> - QI: $\theta \approx 0.86$
> - QIV: $\theta \approx 2\pi - 0.86 \approx 5.42$
>
> **2. All solutions**:
> $$ \theta \approx 0.86 + 2k\pi, \quad \theta \approx 5.42 + 2k\pi $$

---

> [!example] Example 4: Solving $\tan \theta = 2$
> **1. Solutions in one period**:
> $\theta = \tan^{-1}(2) \approx 1.12$.
> Tangent has period $\pi$, so we only need one solution in $(-\pi/2, \pi/2)$.
>
> **2. All solutions**:
> Add multiples of $\pi$:
> $$ \theta \approx 1.12 + k\pi $$

---

### Solving by Isolating the Function

> [!example] Example 5: Algebraic Equivalents
> **(a)** $2 \sin \theta - 1 = 0$
> Isolate $\sin \theta$:
> $$ \sin \theta = \frac{1}{2} $$
> This is Example 1. Solutions: $\theta = \frac{\pi}{6} + 2k\pi, \frac{5\pi}{6} + 2k\pi$.
>
> **(b)** $\tan^2 \theta - 3 = 0$
> Isolate $\tan \theta$:
> $$ \tan^2 \theta = 3 \implies \tan \theta = \pm \sqrt{3} $$
> In interval $(-\pi/2, \pi/2)$, solutions are $\pi/3$ and $-\pi/3$.
> Add multiples of period $\pi$:
> $$ \theta = \frac{\pi}{3} + k\pi, \quad \theta = -\frac{\pi}{3} + k\pi $$

---

### Solving Trigonometric Equations by Factoring

Use the **Zero-Product Property**: If $AB = 0$, then $A=0$ or $B=0$.

> [!example] Example 6: Quadratic Type
> Solve $2 \cos^2 \theta - 7 \cos \theta + 3 = 0$.
>
> Factor the quadratic form $(2C-1)(C-3)=0$:
> $$ (2 \cos \theta - 1)(\cos \theta - 3) = 0 $$
>
> Set factors to zero:
> 1.  $2 \cos \theta - 1 = 0 \implies \cos \theta = \frac{1}{2}$
>     Solutions in $[0, 2\pi)$: $\theta = \frac{\pi}{3}, \frac{5\pi}{3}$.
>     General: $\theta = \frac{\pi}{3} + 2k\pi, \frac{5\pi}{3} + 2k\pi$.
>
> 2.  $\cos \theta - 3 = 0 \implies \cos \theta = 3$
>     **No solution** (range of cosine is $[-1, 1]$).

---

> [!example] Example 7: Common Factor
> Solve $5 \sin \theta \cos \theta + 4 \cos \theta = 0$.
>
> Factor out $\cos \theta$:
> $$ \cos \theta (5 \sin \theta + 4) = 0 $$
>
> Set factors to zero:
> 1.  $\cos \theta = 0$
>     Solutions in $[0, 2\pi)$: $\theta = \frac{\pi}{2}, \frac{3\pi}{2}$.
>
> 2.  $5 \sin \theta + 4 = 0 \implies \sin \theta = -0.8$
>     Reference angle: $\sin^{-1}(0.8) \approx 0.93$.
>     Sine is negative in QIII and QIV.
>     - QIII: $\theta \approx \pi + 0.93 \approx 4.07$
>     - QIV: $\theta \approx 2\pi - 0.93 \approx 5.35$ (or simply use negative angle $-0.93$)
>
> **All solutions**:
> $$ \theta = \frac{\pi}{2} + 2k\pi, \quad \theta = \frac{3\pi}{2} + 2k\pi $$
> $$ \theta \approx -0.93 + 2k\pi, \quad \theta \approx 4.07 + 2k\pi $$

![[Pasted image 20260607193958.png|center]]

---
## More Trigonometric Equations

### Solving by Using Identities

Use identities to rewrite equations in terms of a single trig function, then factor.

> [!example] Example 1: Using a Trigonometric Identity
> Solve $1 + \sin\theta = 2\cos^2\theta$.

**Solution**

Convert to single function using Pythagorean identity:

$$
\begin{aligned}
1 + \sin\theta &= 2\cos^2\theta \quad \leftarrow \text{Given} \\
1 + \sin\theta &= 2(1 - \sin^2\theta) \quad \leftarrow \text{Pythagorean identity} \\
2\sin^2\theta + \sin\theta - 1 &= 0 \quad \leftarrow \text{Rearrange} \\
(2\sin\theta - 1)(\sin\theta + 1) &= 0 \quad \leftarrow \text{Factor}
\end{aligned}
$$

Set each factor to zero:
- $\sin\theta = \frac{1}{2} \implies \theta = \frac{\pi}{6}, \frac{5\pi}{6}$ in $[0, 2\pi)$
- $\sin\theta = -1 \implies \theta = \frac{3\pi}{2}$ in $[0, 2\pi)$

**All solutions**: $\theta = \frac{\pi}{6} + 2k\pi, \quad \theta = \frac{5\pi}{6} + 2k\pi, \quad \theta = \frac{3\pi}{2} + 2k\pi$

---

> [!example] Example 2: Using Double-Angle Formula
> Solve $\sin 2\theta - \cos\theta = 0$.

**Solution**

$$
\begin{aligned}
\sin 2\theta - \cos\theta &= 0 \\
2\sin\theta\cos\theta - \cos\theta &= 0 \quad \leftarrow \text{Double-Angle Formula} \\
\cos\theta(2\sin\theta - 1) &= 0 \quad \leftarrow \text{Factor}
\end{aligned}
$$

- $\cos\theta = 0 \implies \theta = \frac{\pi}{2}, \frac{3\pi}{2}$
- $\sin\theta = \frac{1}{2} \implies \theta = \frac{\pi}{6}, \frac{5\pi}{6}$

**All solutions**: $\theta = \frac{\pi}{2} + 2k\pi, \quad \theta = \frac{3\pi}{2} + 2k\pi, \quad \theta = \frac{\pi}{6} + 2k\pi, \quad \theta = \frac{5\pi}{6} + 2k\pi$

---

> [!warning] Extraneous Solutions from Squaring
> When squaring both sides, always check solutions in the original equation. Squaring can introduce extraneous solutions.

> [!example] Example 3: Squaring and Using an Identity
> Solve $\cos\theta + 1 = \sin\theta$ in $[0, 2\pi)$.

**Solution**

$$
\begin{aligned}
\cos\theta + 1 &= \sin\theta \\
\cos^2\theta + 2\cos\theta + 1 &= \sin^2\theta \quad \leftarrow \text{Square both sides} \\
\cos^2\theta + 2\cos\theta + 1 &= 1 - \cos^2\theta \quad \leftarrow \text{Pythagorean identity} \\
2\cos^2\theta + 2\cos\theta &= 0 \\
2\cos\theta(\cos\theta + 1) &= 0
\end{aligned}
$$

- $\cos\theta = 0 \implies \theta = \frac{\pi}{2}, \frac{3\pi}{2}$
- $\cos\theta = -1 \implies \theta = \pi$

**Check in original equation**:
- $\theta = \frac{\pi}{2}$: $0 + 1 = 1$ ✓
- $\theta = \frac{3\pi}{2}$: $0 + 1 \neq -1$  (extraneous)
- $\theta = \pi$: $-1 + 1 = 0$ ✓

**Solutions**: $\theta = \frac{\pi}{2}, \pi$

---

### Finding Intersection Points

> [!example] Example 4: Intersection of $f(x) = \sin x$ and $g(x) = \cos x$

**Graphical**: $x \approx 0.785, 3.927$ (from graphing device)

**Algebraic**:
$$
\begin{aligned}
\sin x &= \cos x \\
\frac{\sin x}{\cos x} &= 1 \quad \leftarrow \text{Divide by } \cos x \text{ (valid since } \cos x \neq 0\text{)} \\
\tan x &= 1 \\
x &= \frac{\pi}{4} + k\pi
\end{aligned}
$$

![[Pasted image 20260607200038.png|center]]

---

### Equations with Multiples of Angles

**Strategy**: Solve for the multiple of the angle first, then divide.

> [!example] Example 5: Multiple of an Angle
> Solve $2\sin 3\theta - 1 = 0$.

**(a) All solutions**:

$$
\begin{aligned}
2\sin 3\theta &= 1 \\
\sin 3\theta &= \frac{1}{2}
\end{aligned}
$$

Solve for $3\theta$ in $[0, 2\pi)$: $3\theta = \frac{\pi}{6}, \frac{5\pi}{6}$

General solutions for $3\theta$:
$$
3\theta = \frac{\pi}{6} + 2k\pi, \quad 3\theta = \frac{5\pi}{6} + 2k\pi
$$

Divide by 3:
$$
\theta = \frac{\pi}{18} + \frac{2k\pi}{3}, \quad \theta = \frac{5\pi}{18} + \frac{2k\pi}{3}
$$

**(b) Solutions in $[0, 2\pi)$** (use $k = 0, 1, 2$):

$$
\theta = \frac{\pi}{18}, \frac{5\pi}{18}, \frac{13\pi}{18}, \frac{17\pi}{18}, \frac{25\pi}{18}, \frac{29\pi}{18}
$$

![[Pasted image 20260607200110.png|center|383]]

---

> [!example] Example 6: Half-Angle Equation
> Solve $\sqrt{3}\tan\frac{\theta}{2} - 1 = 0$.

**(a) All solutions**:

$$
\begin{aligned}
\sqrt{3}\tan\frac{\theta}{2} &= 1 \\
\tan\frac{\theta}{2} &= \frac{1}{\sqrt{3}}
\end{aligned}
$$

Solve for $\frac{\theta}{2}$ in $(-\frac{\pi}{2}, \frac{\pi}{2})$: $\frac{\theta}{2} = \frac{\pi}{6}$

General solutions for $\frac{\theta}{2}$ (period $\pi$):
$$
\frac{\theta}{2} = \frac{\pi}{6} + k\pi
$$

Multiply by 2:
$$
\theta = \frac{\pi}{3} + 2k\pi
$$

**(b) Solutions in $[0, 4\pi)$** (use $k = 0, 1$):

$$
\theta = \frac{\pi}{3}, \frac{7\pi}{3}
$$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 580)