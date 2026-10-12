Date: 2026-06-04
Tags: [[Mathematics]], [[Trigonometry]]

---

## Addition and Subtraction Formulas

> [!info] Addition and Subtraction Formulas
> **Formulas for Sine:**
> $$
> \sin(s + t) = \sin s \cos t + \cos s \sin t
> $$
> $$
> \sin(s - t) = \sin s \cos t - \cos s \sin t
> $$
>
> **Formulas for Cosine:**
> $$
> \cos(s + t) = \cos s \cos t - \sin s \sin t
> $$
> $$
> \cos(s - t) = \cos s \cos t + \sin s \sin t
> $$
>
> **Formulas for Tangent:**
> $$
> \tan(s + t) = \frac{\tan s + \tan t}{1 - \tan s \tan t}
> $$
> $$
> \tan(s - t) = \frac{\tan s - \tan t}{1 + \tan s \tan t}
> $$

> $\tan(2\pi​−u)=\frac{\sin(2\pi−u)}{\cos(2\pi​−u)​}$

---

### Proof of Addition Formula for Cosine

To prove $\cos(s + t) = \cos s \cos t - \sin s \sin t$, we use the unit circle and distance formula.

![[Pasted image 20260604003500.png|center]]

Consider points on the unit circle:
- $P_0(1, 0)$ and $P_1(\cos(s+t), \sin(s+t))$ determine arc $s+t$.
- $Q_0(\cos(-s), \sin(-s)) = (\cos s, -\sin s)$ and $Q_1(\cos t, \sin t)$ determine arc $t - (-s) = s+t$.

Since the arcs are equal in length, the chords subtending them are equal in length: $d(P_0, P_1) = d(Q_0, Q_1)$.

Using the Distance Formula:
$$
\sqrt{[\cos(s+t) - 1]^2 + [\sin(s+t) - 0]^2} = \sqrt{(\cos t - \cos s)^2 + (\sin t + \sin s)^2}
$$

Squaring both sides and expanding:
$$
\begin{aligned}
&\cos^2(s+t) - 2\cos(s+t) + 1 + \sin^2(s+t) \\
&\quad = \cos^2 t - 2\cos s \cos t + \cos^2 s + \sin^2 t + 2\sin s \sin t + \sin^2 s
\end{aligned}
$$

Apply Pythagorean identity $\sin^2 \theta + \cos^2 \theta = 1$ three times (for angle $s+t$, angle $t$, and angle $s$):
$$
\begin{aligned}
\underbrace{\cos^2(s+t) + \sin^2(s+t)}_{1} + 1 - 2\cos(s+t) &= \underbrace{(\cos^2 t + \sin^2 t)}_{1} + \underbrace{(\cos^2 s + \sin^2 s)}_{1} - 2\cos s \cos t + 2\sin s \sin t \\
2 - 2\cos(s+t) &= 2 - 2\cos s \cos t + 2\sin s \sin t
\end{aligned}
$$

Subtract 2 from both sides and divide by $-2$:
$$
\boxed{\cos(s+t) = \cos s \cos t - \sin s \sin t} \quad \blacksquare
$$

---

### Proof of Subtraction Formula for Cosine

Replace $t$ with $-t$ in the Addition Formula for Cosine:

$$
\begin{aligned}
\cos(s - t) &= \cos(s + (-t)) \\
&= \cos s \cos(-t) - \sin s \sin(-t) \quad \leftarrow \text{Addition Formula for Cosine} \\
&= \boxed{\cos s \cos t + \sin s \sin t} \quad \leftarrow \text{Even-odd identities } (\cos(-t)=\cos t, \sin(-t)=-\sin t) \quad \blacksquare
\end{aligned}
$$


---

## Applications of Addition and Subtraction Formulas

> [!example] Example 3: Proving a Cofunction Identity
> Prove the cofunction identity $\cos\left(\frac{\pi}{2} - u\right) = \sin u$.

**Solution**

By the Subtraction Formula for Cosine:
$$
\begin{aligned}
\cos\left(\frac{\pi}{2} - u\right) &= \cos\frac{\pi}{2} \cos u + \sin\frac{\pi}{2} \sin u \\
&= 0 \cdot \cos u + 1 \cdot \sin u \\
&= \sin u \quad \blacksquare
\end{aligned}
$$

---

> [!example] Example 4: Proving an Identity
> Verify the identity $\dfrac{1 + \tan x}{1 - \tan x} = \tan\left(\dfrac{\pi}{4} + x\right)$.

**Solution**

Start with the right-hand side (RHS) and apply the Addition Formula for Tangent:

$$
\begin{aligned}
\text{RHS} &= \tan\left(\frac{\pi}{4} + x\right) \\
&= \frac{\tan\frac{\pi}{4} + \tan x}{1 - \tan\frac{\pi}{4} \tan x} \quad \leftarrow \text{Addition Formula for Tangent} \\
&= \frac{1 + \tan x}{1 - 1 \cdot \tan x} \quad \leftarrow \tan\frac{\pi}{4} = 1 \\
&= \frac{1 + \tan x}{1 - \tan x} = \text{LHS} \quad \blacksquare
\end{aligned}
$$

---
## Expressions Involving Trigonometric Functions of a Sum

Expressions involving trigonometric functions and their inverses often arise in calculus. To evaluate them, define angles for the inverse functions, draw reference triangles to find missing sides, and apply addition/subtraction formulas.

> [!example] Example 6: Simplifying an Expression Involving Inverse Trigonometric Functions
> Write $\sin(\cos^{-1}x + \tan^{-1}y)$ as an algebraic expression in $x$ and $y$, where $-1 \le x \le 1$.

**Solution**

Let $\theta = \cos^{-1}x$ and $\phi = \tan^{-1}y$.
This implies $\cos \theta = x$ and $\tan \phi = y$.

Construct reference triangles to determine the remaining trigonometric ratios:
- **Triangle for $\theta$**: Adjacent $= x$, Hypotenuse $= 1 \implies$ Opposite $= \sqrt{1-x^2}$.
  $$ \sin \theta = \sqrt{1-x^2} $$
- **Triangle for $\phi$**: Opposite $= y$, Adjacent $= 1 \implies$ Hypotenuse $= \sqrt{1+y^2}$.
  $$ \cos \phi = \frac{1}{\sqrt{1+y^2}}, \quad \sin \phi = \frac{y}{\sqrt{1+y^2}} $$

![[Pasted image 20260604011815.png|center]]

Apply the Addition Formula for Sine:

$$
\begin{aligned}
\sin(\cos^{-1}x + \tan^{-1}y) &= \sin(\theta + \phi) \\
&= \sin \theta \cos \phi + \cos \theta \sin \phi \qquad \leftarrow \text{Addition Formula for Sine} \\
&= \sqrt{1-x^2} \left( \frac{1}{\sqrt{1+y^2}} \right) + x \left( \frac{y}{\sqrt{1+y^2}} \right) \qquad \leftarrow \text{Substitute from triangles} \\
&= \frac{1}{\sqrt{1+y^2}} \left( \sqrt{1-x^2} + xy \right) \qquad \leftarrow \text{Factor out } \frac{1}{\sqrt{1+y^2}}
\end{aligned}
$$

---
## Evaluating Expressions Involving Trigonometric Functions

> [!example] Example 7: Evaluating an Expression Involving Trigonometric Functions
> Evaluate $\sin(\theta + \phi)$, where $\sin \theta = \frac{12}{13}$ with $\theta$ in Quadrant II and $\tan \phi = \frac{3}{4}$ with $\phi$ in Quadrant III.

**Solution**

**Step 1: Find missing values for $\theta$ (Quadrant II)**
Given $\sin \theta = \frac{y}{r} = \frac{12}{13}$, we have $y=12, r=13$.
Use Pythagorean Theorem ($x^2 + y^2 = r^2$):
$$
\begin{aligned}
x^2 + 12^2 &= 13^2 \\
x^2 &= 25 \\
x &= -5 \quad \leftarrow x < 0 \text{ in Quadrant II}
\end{aligned}
$$
Thus, $\cos \theta = \frac{x}{r} = -\frac{5}{13}$.

**Step 2: Find missing values for $\phi$ (Quadrant III)**
Given $\tan \phi = \frac{y}{x} = \frac{3}{4}$. In Quadrant III, both $x$ and $y$ are negative, so $y=-3, x=-4$.
Hypotenuse $r = \sqrt{(-3)^2 + (-4)^2} = 5$.
Thus, $\sin \phi = -\frac{3}{5}$ and $\cos \phi = -\frac{4}{5}$.

![[Pasted image 20260604012008.png|center]]

**Step 3: Apply Addition Formula for Sine**
$$
\begin{aligned}
\sin(\theta + \phi) &= \sin \theta \cos \phi + \cos \theta \sin \phi \quad \leftarrow \text{Addition Formula} \\
&= \left(\frac{12}{13}\right)\left(-\frac{4}{5}\right) + \left(-\frac{5}{13}\right)\left(-\frac{3}{5}\right) \quad \leftarrow \text{Substitute values} \\
&= -\frac{48}{65} + \frac{15}{65} \\
&= -\frac{33}{65}
\end{aligned}
$$
---
## Expressions of the Form $A \sin x + B \cos x$

Linear combinations of sine and cosine can be rewritten as a single sine function using the Addition Formula.

> [!info] Sums of Sines and Cosines
> If $A$ and $B$ are real numbers, then:
> $$
> A \sin x + B \cos x = k \sin(x + \phi)
> $$
> where $k = \sqrt{A^2 + B^2}$ and $\phi$ satisfies:
> $$
> \cos \phi = \frac{A}{k} \quad \text{and} \quad \sin \phi = \frac{B}{k}
> $$
>
> *Geometric Interpretation:* The angle $\phi$ corresponds to the point $(A, B)$ in the plane, where $k$ is the distance from the origin.

![[Pasted image 20260605224259.png|center|381]]

---

> [!example] Example 8: A Sum of Sine and Cosine Terms
> Express $3 \sin x + 4 \cos x$ in the form $k \sin(x + \phi)$.

**Solution**
Identify $A=3, B=4$. Calculate amplitude $k$:
$$ k = \sqrt{3^2 + 4^2} = 5 $$

Determine $\phi$:
$$ \cos \phi = \frac{3}{5}, \quad \sin \phi = \frac{4}{5} $$
Since both are positive, $\phi$ is in Quadrant I.
$$ \phi = \sin^{-1}\left(\frac{4}{5}\right) \approx 53.1^\circ $$

Result:
$$ 3 \sin x + 4 \cos x \approx 5 \sin(x + 53.1^\circ) $$

---

> [!example] Example 9: Graphing a Trigonometric Function
> Write $f(x) = -\sin 2x + \sqrt{3} \cos 2x$ in the form $k \sin(2x + \phi)$ and graph it.

**Solution**
Identify $A=-1, B=\sqrt{3}$.
$$ k = \sqrt{(-1)^2 + (\sqrt{3})^2} = \sqrt{4} = 2 $$

Determine $\phi$:
$$ \cos \phi = -\frac{1}{2}, \quad \sin \phi = \frac{\sqrt{3}}{2} $$
Cosine is negative, sine is positive $\implies$ $\phi$ is in Quadrant II.
$$ \phi = \frac{2\pi}{3} $$

Rewrite function:
$$ f(x) = 2 \sin\left(2x + \frac{2\pi}{3}\right) = 2 \sin 2\left(x + \frac{\pi}{3}\right) $$

**Graphing Properties:**
*   **Amplitude:** $2$
*   **Period:** $\frac{2\pi}{2} = \pi$
*   **Horizontal Shift:** $-\frac{\pi}{3}$ (left by $\pi/3$)

![[Pasted image 20260605225037.png|center|476]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 561)