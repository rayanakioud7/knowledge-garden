Date: 2026-06-07
Tags: [[Mathematics]], [[Trigonometry]]

---
## Double-Angle Formulas

> [!info] Double-Angle Formulas
> **Formula for sine:**
> $$ \sin 2x = 2 \sin x \cos x $$
>
> **Formulas for cosine:**
> $$ \cos 2x = \cos^2 x - \sin^2 x = 1 - 2 \sin^2 x = 2 \cos^2 x - 1 $$
>
> **Formula for tangent:**
> $$ \tan 2x = \frac{2 \tan x}{1 - \tan^2 x} $$

---

### Proofs

**Proof of Double-Angle Formulas for Cosine**
Using the Addition Formula for Cosine with $x+x$:
$$
\begin{aligned}
\cos 2x &= \cos(x + x) \\
&= \cos x \cos x - \sin x \sin x \quad \leftarrow \text{Addition Formula} \\
&= \cos^2 x - \sin^2 x
\end{aligned}
$$
Deriving the other forms using $\sin^2 x + \cos^2 x = 1$:
1.  Substitute $\cos^2 x = 1 - \sin^2 x$:
    $$ \cos 2x = (1 - \sin^2 x) - \sin^2 x = 1 - 2\sin^2 x $$
2.  Substitute $\sin^2 x = 1 - \cos^2 x$:
    $$ \cos 2x = \cos^2 x - (1 - \cos^2 x) = 2\cos^2 x - 1 \quad \blacksquare $$

---

> [!example] Example 1: Using the Double-Angle Formulas
> If $\cos x = -\frac{2}{3}$ and $x$ is in Quadrant II, find $\cos 2x$ and $\sin 2x$.

**Solution**

**Find $\cos 2x$:**
$$
\begin{aligned}
\cos 2x &= 2 \cos^2 x - 1 \quad \leftarrow \text{Double-Angle Formula} \\
&= 2\left(-\frac{2}{3}\right)^2 - 1 \\
&= \frac{8}{9} - 1 = -\frac{1}{9}
\end{aligned}
$$

**Find $\sin 2x$:**
First find $\sin x$. Since $x$ is in QII, $\sin x > 0$:
$$ \sin x = \sqrt{1 - \cos^2 x} = \sqrt{1 - \left(-\frac{2}{3}\right)^2} = \frac{\sqrt{5}}{3} $$
Now apply the sine double-angle formula:
$$
\begin{aligned}
\sin 2x &= 2 \sin x \cos x \quad \leftarrow \text{Double-Angle Formula} \\
&= 2\left(\frac{\sqrt{5}}{3}\right)\left(-\frac{2}{3}\right) \\
&= -\frac{4\sqrt{5}}{9}
\end{aligned}
$$

---

> [!example] Example 2: A Triple-Angle Formula
> Write $\cos 3x$ in terms of $\cos x$.

**Solution**
$$
\begin{aligned}
\cos 3x &= \cos(2x + x) \\
&= \cos 2x \cos x - \sin 2x \sin x \quad \leftarrow \text{Addition formula} \\
&= (2 \cos^2 x - 1) \cos x - (2 \sin x \cos x) \sin x \quad \leftarrow \text{Double-Angle Formulas} \\
&= 2 \cos^3 x - \cos x - 2 \sin^2 x \cos x \quad \leftarrow \text{Expand} \\
&= 2 \cos^3 x - \cos x - 2 \cos x (1 - \cos^2 x) \quad \leftarrow \text{Pythagorean identity} \\
&= 2 \cos^3 x - \cos x - 2 \cos x + 2 \cos^3 x \quad \leftarrow \text{Expand} \\
&= 4 \cos^3 x - 3 \cos x \quad \leftarrow \text{Simplify} \quad \blacksquare
\end{aligned}
$$

> [!note] Polynomial Property
> $\cos nx$ can always be written as a polynomial of degree $n$ in $\cos x$. The analogous result for $\sin nx$ is not true in general.

---

> [!example] Example 3: Proving an Identity
> Prove the identity $\frac{\sin 3x}{\sin x \cos x} = 4 \cos x - \sec x$.

**Solution**
Start with the left-hand side:
$$
\begin{aligned}
\text{LHS} &= \frac{\sin 3x}{\sin x \cos x} = \frac{\sin(x + 2x)}{\sin x \cos x} \\
&= \frac{\sin x \cos 2x + \cos x \sin 2x}{\sin x \cos x} \quad \leftarrow \text{Addition Formula} \\
&= \frac{\sin x (2 \cos^2 x - 1) + \cos x (2 \sin x \cos x)}{\sin x \cos x} \quad \leftarrow \text{Double-Angle Formulas}
\end{aligned}
$$
$$
\begin{aligned}
&= \frac{2 \sin x \cos^2 x - \sin x + 2 \sin x \cos^2 x}{\sin x \cos x} \quad \leftarrow \text{Expand numerator} \\
&= \frac{4 \sin x \cos^2 x - \sin x}{\sin x \cos x} \quad \leftarrow \text{Combine like terms} \\
&= \frac{\sin x (4 \cos^2 x - 1)}{\sin x \cos x} \quad \leftarrow \text{Factor out } \sin x \\
&= \frac{4 \cos^2 x - 1}{\cos x} \quad \leftarrow \text{Cancel } \sin x \\
&= \frac{4 \cos^2 x}{\cos x} - \frac{1}{\cos x} \quad \leftarrow \text{Separate fraction} \\
&= 4 \cos x - \sec x = \text{RHS} \quad \leftarrow \text{Reciprocal identity} \quad \blacksquare
\end{aligned}
$$
---

## Half-Angle Formulas

These formulas allow us to rewrite trigonometric expressions involving even powers of sine and cosine in terms of the first power of cosine only. This technique is crucial for integration in calculus.

> [!info] Formulas for Lowering Powers
> $$
> \sin^2 x = \frac{1 - \cos 2x}{2} \qquad \cos^2 x = \frac{1 + \cos 2x}{2}
> $$
> $$
> \tan^2 x = \frac{1 - \cos 2x}{1 + \cos 2x}
> $$

### Proof

Derived directly from the Double-Angle Formulas for Cosine:
1.  From $\cos 2x = 1 - 2\sin^2 x$, solve for $\sin^2 x$.
2.  From $\cos 2x = 2\cos^2 x - 1$, solve for $\cos^2 x$.
3.  The tangent formula follows from the quotient identity $\tan^2 x = \frac{\sin^2 x}{\cos^2 x}$:
    $$
    \tan^2 x = \frac{\frac{1 - \cos 2x}{2}}{\frac{1 + \cos 2x}{2}} = \frac{1 - \cos 2x}{1 + \cos 2x} \quad \blacksquare
    $$

---

> [!example] Example 4: Lowering Powers in a Trigonometric Expression
> Express $\sin^2 x \cos^2 x$ in terms of the first power of cosine.

**Solution**

**Method 1: Using Power-Lowering Formulas Repeatedly**

$$
\begin{aligned}
\sin^2 x \cos^2 x &= \left( \frac{1 - \cos 2x}{2} \right) \left( \frac{1 + \cos 2x}{2} \right) \\
&= \frac{1 - \cos^2 2x}{4} \\
&= \frac{1}{4} - \frac{1}{4} \cos^2 2x \\
&= \frac{1}{4} - \frac{1}{4} \left( \frac{1 + \cos(2 \cdot 2x)}{2} \right) \quad \leftarrow \text{Apply formula to } \cos^2 2x \\
&= \frac{1}{4} - \frac{1}{8} - \frac{1}{8} \cos 4x \\
&= \frac{1}{8} - \frac{1}{8} \cos 4x \\
&= \frac{1}{8}(1 - \cos 4x)
\end{aligned}
$$

**Method 2: Using the Double-Angle Formula for Sine**

Recall that $\sin x \cos x = \frac{1}{2} \sin 2x$. Thus:

$$
\begin{aligned}
\sin^2 x \cos^2 x &= (\sin x \cos x)^2 \\
&= \left( \frac{1}{2} \sin 2x \right)^2 \\
&= \frac{1}{4} \sin^2 2x \\
&= \frac{1}{4} \left( \frac{1 - \cos 4x}{2} \right) \quad \leftarrow \text{Apply power-lowering to } \sin^2 2x \\
&= \frac{1}{8}(1 - \cos 4x) \quad \blacksquare
\end{aligned}
$$
---
## Half-Angle Formulas

> [!info] Half-Angle Formulas
> $$
> \sin \frac{u}{2} = \pm \sqrt{\frac{1 - \cos u}{2}} \qquad \cos \frac{u}{2} = \pm \sqrt{\frac{1 + \cos u}{2}}
> $$
> $$
> \tan \frac{u}{2} = \frac{1 - \cos u}{\sin u} = \frac{\sin u}{1 + \cos u}
> $$
> The choice of the $+$ or $-$ sign depends on the quadrant in which $u/2$ lies.

### Proof of Tangent Half-Angle Formula

Substitute $x = u/2$ into the formulas for lowering powers and take the square root. For tangent:

$$
\begin{aligned}
\tan \frac{u}{2} &= \pm \sqrt{\frac{1 - \cos u}{1 + \cos u}} \\
&= \pm \sqrt{\left( \frac{1 - \cos u}{1 + \cos u} \right) \left( \frac{1 - \cos u}{1 - \cos u} \right)} \qquad \leftarrow \text{Multiply num and den by } 1 - \cos u \\
&= \pm \sqrt{\frac{(1 - \cos u)^2}{1 - \cos^2 u}} \qquad \leftarrow \text{Simplify} \\
&= \pm \frac{|1 - \cos u|}{|\sin u|} \qquad \leftarrow \sqrt{A^2} = |A| \text{ and } 1-\cos^2 u = \sin^2 u
\end{aligned}
$$

Since $1 - \cos u \ge 0$ for all $u$, and $\sin u$ and $\tan(u/2)$ always have the same sign, the $\pm$ and absolute values resolve to:

$$
\tan \frac{u}{2} = \frac{1 - \cos u}{\sin u}
$$

The other form, $\frac{\sin u}{1 + \cos u}$, is derived by multiplying numerator and denominator by $1 + \cos u$. $\blacksquare$

---

> [!example] Example 5: Using a Half-Angle Formula
> Find the exact value of $\sin 22.5^\circ$.

**Solution**

Since $22.5^\circ$ is half of $45^\circ$, use the Half-Angle Formula for Sine with $u = 45^\circ$. Choose the $+$ sign because $22.5^\circ$ is in Quadrant I.

$$
\begin{aligned}
\sin \frac{45^\circ}{2} &= \sqrt{\frac{1 - \cos 45^\circ}{2}} \qquad \leftarrow \text{Half-Angle Formula} \\
&= \sqrt{\frac{1 - \sqrt{2}/2}{2}} \qquad \leftarrow \cos 45^\circ = \sqrt{2}/2 \\
&= \sqrt{\frac{2 - \sqrt{2}}{4}} \qquad \leftarrow \text{Common denominator} \\
&= \frac{1}{2}\sqrt{2 - \sqrt{2}} \qquad \leftarrow \text{Simplify}
\end{aligned}
$$

---

> [!example] Example 6: Using a Half-Angle Formula
> Find $\tan(u/2)$ if $\sin u = \frac{2}{5}$ and $u$ is in Quadrant II.

**Solution**

First find $\cos u$. Since cosine is negative in Quadrant II:

$$
\begin{aligned}
\cos u &= -\sqrt{1 - \sin^2 u} \\
&= -\sqrt{1 - \left(\frac{2}{5}\right)^2} \\
&= -\sqrt{\frac{21}{25}} = -\frac{\sqrt{21}}{5}
\end{aligned}
$$

Now apply the Half-Angle Formula for Tangent (using the form without square roots to avoid sign ambiguity):

$$
\begin{aligned}
\tan \frac{u}{2} &= \frac{1 - \cos u}{\sin u} \qquad \leftarrow \text{Half-Angle Formula} \\
&= \frac{1 - (-\sqrt{21}/5)}{2/5} \\
&= \frac{1 + \sqrt{21}/5}{2/5} \\
&= \frac{5 + \sqrt{21}}{2}
\end{aligned}
$$

---
## Expressions Involving Inverse Trigonometric Functions

Expressions involving trigonometric functions and their inverses are evaluated by defining an angle $\theta$ for the inverse part, drawing a reference triangle to find missing sides, and applying fundamental identities (like Double-Angle Formulas).

> [!example] Example 7: Evaluating an Expression Involving an Inverse Trigonometric Function
> Evaluate $\sin(2 \cos^{-1}(-\frac{2}{5}))$.

**Solution**

Let $\theta = \cos^{-1}(-\frac{2}{5})$. By definition, $\cos \theta = -\frac{2}{5}$ with $\theta$ in Quadrant II ($0 \le \theta \le \pi$).

**1. Find missing side using Pythagorean Theorem:**
Since $\cos \theta = \frac{x}{r} = -\frac{2}{5}$, let $x = -2$ and $r = 5$.
$$
\begin{aligned}
x^2 + y^2 &= r^2 \qquad \leftarrow \text{Pythagorean Theorem} \\
(-2)^2 + y^2 &= 5^2 \qquad \leftarrow x = -2, r = 5 \\
y^2 &= 21 \\
y &= \sqrt{21} \qquad \leftarrow y > 0 \text{ in QII}
\end{aligned}
$$

![[Pasted image 20260607013717.png|center]]

**2. Apply Double-Angle Formula for Sine:**
$$
\begin{aligned}
\sin(2 \cos^{-1}(-\tfrac{2}{5})) &= \sin 2\theta \\
&= 2 \sin \theta \cos \theta \qquad \leftarrow \text{Double-Angle Formula} \\
&= 2 \left( \frac{\sqrt{21}}{5} \right) \left( -\frac{2}{5} \right) \qquad \leftarrow \text{From triangle: } \sin \theta = \frac{y}{r}, \cos \theta = \frac{x}{r} \\
&= -\frac{4\sqrt{21}}{25}
\end{aligned}
$$

---

> [!example] Example 8: Simplifying an Expression Involving an Inverse Trigonometric Function
> Write $\sin(2 \cos^{-1} x)$ as an algebraic expression in $x$ only, where $-1 \le x \le 1$.

**Solution**

Let $\theta = \cos^{-1} x$. Then $\cos \theta = x$.
Construct a right triangle where adjacent side $= x$ and hypotenuse $= 1$.
Opposite side $= \sqrt{1^2 - x^2} = \sqrt{1 - x^2}$.

![[Pasted image 20260607013738.png|center]]

We need to find $\sin 2\theta$. Use the Double-Angle Formula for Sine:

$$
\begin{aligned}
\sin(2 \cos^{-1} x) &= \sin 2\theta \qquad \leftarrow \cos^{-1} x = \theta \\
&= 2 \sin \theta \cos \theta \qquad \leftarrow \text{Double-Angle Formula} \\
&= 2 (\sqrt{1 - x^2}) (x) \qquad \leftarrow \text{From triangle: } \sin \theta = \frac{\sqrt{1-x^2}}{1}, \cos \theta = x \\
&= 2x\sqrt{1 - x^2}
\end{aligned}
$$
---
## Product-Sum and Sum-to-Product Formulas

### Product-to-Sum Formulas

Derived by adding or subtracting the Addition and Subtraction Formulas. For example, adding the formulas for $\sin(u+v)$ and $\sin(u-v)$:

$$
\begin{aligned}
\sin(u+v) &= \sin u \cos v + \cos u \sin v \\
\sin(u-v) &= \sin u \cos v - \cos u \sin v \\
\hline
\sin(u+v) + \sin(u-v) &= 2 \sin u \cos v
\end{aligned}
$$

Dividing by 2 gives the first formula.

> [!info] Product-to-Sum Formulas
> $$
> \begin{aligned}
> \sin u \cos v &= \tfrac{1}{2}[\sin(u+v) + \sin(u-v)] \\
> \cos u \sin v &= \tfrac{1}{2}[\sin(u+v) - \sin(u-v)] \\
> \cos u \cos v &= \tfrac{1}{2}[\cos(u+v) + \cos(u-v)] \\
> \sin u \sin v &= \tfrac{1}{2}[\cos(u-v) - \cos(u+v)]
> \end{aligned}
> $$

> [!example] Example 9: Expressing a Trigonometric Product as a Sum
> Express $\sin 3x \sin 5x$ as a sum of trigonometric functions.

**Solution**
Use the fourth Product-to-Sum Formula with $u = 3x$ and $v = 5x$. Note that cosine is an even function ($\cos(-\theta) = \cos \theta$).

$$
\begin{aligned}
\sin 3x \sin 5x &= \tfrac{1}{2}[\cos(3x - 5x) - \cos(3x + 5x)] \\
&= \tfrac{1}{2}[\cos(-2x) - \cos 8x] \\
&= \tfrac{1}{2} \cos 2x - \tfrac{1}{2} \cos 8x
\end{aligned}
$$

---

### Sum-to-Product Formulas

These are the reverse of the Product-to-Sum formulas. By substituting $u = \frac{x+y}{2}$ and $v = \frac{x-y}{2}$ into the Product-to-Sum formulas, we obtain:

> [!info] Sum-to-Product Formulas
> $$
> \begin{aligned}
> \sin x + \sin y &= 2 \sin\left(\frac{x+y}{2}\right) \cos\left(\frac{x-y}{2}\right) \\
> \sin x - \sin y &= 2 \cos\left(\frac{x+y}{2}\right) \sin\left(\frac{x-y}{2}\right) \\
> \cos x + \cos y &= 2 \cos\left(\frac{x+y}{2}\right) \cos\left(\frac{x-y}{2}\right) \\
> \cos x - \cos y &= -2 \sin\left(\frac{x+y}{2}\right) \sin\left(\frac{x-y}{2}\right)
> \end{aligned}
> $$

> [!example] Example 10: Proving an Identity
> Prove the identity $\frac{\sin 3t + \sin 5t}{\cos 3t - \cos 5t} = \cot t$.

**Solution**
Apply Sum-to-Product formulas to the numerator and denominator.

$$
\begin{aligned}
\text{LHS} &= \frac{\sin 3t + \sin 5t}{\cos 3t - \cos 5t} \\
&= \frac{2 \sin\left(\frac{3t+5t}{2}\right) \cos\left(\frac{3t-5t}{2}\right)}{-2 \sin\left(\frac{3t+5t}{2}\right) \sin\left(\frac{3t-5t}{2}\right)} \quad \leftarrow \text{Sum-to-Product} \\
&= \frac{2 \sin 4t \cos(-t)}{-2 \sin 4t \sin(-t)} \\
&= \frac{\cos(-t)}{-\sin(-t)} \quad \leftarrow \text{Cancel } 2 \sin 4t \\
&= \frac{\cos t}{-(-\sin t)} \quad \leftarrow \text{Even-Odd identities} \\
&= \frac{\cos t}{\sin t} = \cot t = \text{RHS} \quad \blacksquare
\end{aligned}
$$

> [!example] Example 11: Solving a Trigonometric Equation
> Solve the equation $\sin 5x = \sin 3x$.

**Solution**
Move all terms to one side to use Sum-to-Product formulas.

$$
\begin{aligned}
\sin 5x - \sin 3x &= 0 \\
2 \cos\left(\frac{5x+3x}{2}\right) \sin\left(\frac{5x-3x}{2}\right) &= 0 \quad \leftarrow \text{Sum-to-Product} \\
2 \cos 4x \sin x &= 0
\end{aligned}
$$

Set each factor to zero:
1.  $\cos 4x = 0 \implies 4x = \frac{\pi}{2} + n\pi \implies x = \frac{\pi}{8} + \frac{n\pi}{4}$
2.  $\sin x = 0 \implies x = n\pi$

where $n$ is an integer.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 570)