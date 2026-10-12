Date: 2026-06-01
Tags: [[Mathematics]], [[Trigonometry]]

---
## Trigonometric Identities

> [!info] Fundamental Trigonometric Identities
> **Reciprocal Identities**
> $$
> \csc x = \frac{1}{\sin x} \quad \sec x = \frac{1}{\cos x} \quad \cot x = \frac{1}{\tan x}
> $$
> $$
> \tan x = \frac{\sin x}{\cos x} \quad \cot x = \frac{\cos x}{\sin x}
> $$
>
> **Pythagorean Identities**
> $$
> \sin^2 x + \cos^2 x = 1 \quad \tan^2 x + 1 = \sec^2 x \quad 1 + \cot^2 x = \csc^2 x
> $$
>
> **Even-Odd Identities**
> $$
> \sin(-x) = -\sin x \quad \cos(-x) = \cos x \quad \tan(-x) = -\tan x
> $$
>
> **Cofunction Identities**
> $$
> \begin{aligned}
> \sin\left(\frac{\pi}{2} - x\right) &= \cos x & \tan\left(\frac{\pi}{2} - x\right) &= \cot x & \sec\left(\frac{\pi}{2} - x\right) &= \csc x \\
> \cos\left(\frac{\pi}{2} - x\right) &= \sin x & \cot\left(\frac{\pi}{2} - x\right) &= \tan x & \csc\left(\frac{\pi}{2} - x\right) &= \sec x
> \end{aligned}
> $$

**Identity vs. Equation**: An **identity** is true for all values of the variable(s) for which both sides are defined. An equation is true only for specific values.

---

### Simplifying Trigonometric Expressions

Use fundamental identities, factoring, common denominators, and algebraic techniques to rewrite complex expressions into simpler forms.

> [!example] Example 1: Simplifying a Trigonometric Expression
> Simplify $\cos t + \tan t \sin t$.

**Solution**
Rewrite in terms of sine and cosine:
$$
\begin{aligned}
\cos t + \tan t \sin t &= \cos t + \left(\frac{\sin t}{\cos t}\right) \sin t && \leftarrow \text{Reciprocal identity} \\
&= \frac{\cos^2 t + \sin^2 t}{\cos t} && \leftarrow \text{Common denominator} \\
&= \frac{1}{\cos t} && \leftarrow \text{Pythagorean identity} \\
&= \sec t && \leftarrow \text{Reciprocal identity}
\end{aligned}
$$

> [!example] Example 2: Simplifying by Combining Fractions
> Simplify $\frac{\sin \theta}{\cos \theta} + \frac{\cos \theta}{1 + \sin \theta}$.

**Solution**
Combine fractions using a common denominator:
$$
\begin{aligned}
\frac{\sin \theta}{\cos \theta} + \frac{\cos \theta}{1 + \sin \theta} &= \frac{\sin \theta(1 + \sin \theta) + \cos^2 \theta}{\cos \theta(1 + \sin \theta)} && \leftarrow \text{Common denominator} \\
&= \frac{\sin \theta + \sin^2 \theta + \cos^2 \theta}{\cos \theta(1 + \sin \theta)} && \leftarrow \text{Distribute } \sin \theta \\
&= \frac{\sin \theta + 1}{\cos \theta(1 + \sin \theta)} && \leftarrow \text{Pythagorean identity} \\
&= \frac{1}{\cos \theta} = \sec \theta && \leftarrow \text{Cancel, use reciprocal identity}
\end{aligned}
$$

---

## Proving Trigonometric Identities

> [!info] Guidelines for Proving Trigonometric Identities
> 1. **Start with One Side**: Choose one side (usually the more complicated) and transform it into the other side.
> 2. **Use Known Identities**: Apply algebra and fundamental identities. Bring fractions to common denominator, factor, simplify.
> 3. **Convert to Sines and Cosines**: If stuck, rewrite all functions in terms of $\sin$ and $\cos$.

---

> [!warning] Critical Rule: Do NOT Operate on Both Sides
> To prove an identity, we **do not** perform the same operations on both sides. Operations like squaring are not reversible — they can transform a non-identity into an identity.
>
> Example: $\sin x = -\sin x$ is **not** an identity, but squaring both sides gives $\sin^2 x = \sin^2 x$, which **is** an identity. This doesn't prove the original.
>
> **Only reversible operations** preserve identity status.

---

### Disproving an Identity

To show an equation is **not** an identity, find one counterexample value where it fails.

Example: $\sin x + \cos x = 1$ is not an identity because at $x = \frac{\pi}{4}$:
$$
\sin\frac{\pi}{4} + \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} = \sqrt{2} \neq 1
$$

---

> [!example] Example 3: Proving an Identity by Rewriting in Terms of Sine and Cosine
> Verify that $\cos\theta(\sec\theta - \cos\theta) = \sin^2\theta$ is an identity.

**(a) Algebraic Proof**

Start with the more complicated side (LHS):

$$
\begin{aligned}
\text{LHS} &= \cos\theta(\sec\theta - \cos\theta) \\
&= \cos\theta\left(\frac{1}{\cos\theta} - \cos\theta\right) && \leftarrow \text{Reciprocal identity} \\
&= 1 - \cos^2\theta && \leftarrow \text{Expand} \\
&= \sin^2\theta && \leftarrow \text{Pythagorean identity} \\
&= \text{RHS} \quad \blacksquare
\end{aligned}
$$

**(b) Graphical Confirmation**

![[Pasted image 20260603183917.png|center|522]]

Graphs coincide → confirms identity.

---

> [!note] Reversibility Insight
> Each step in Example 3 is reversible, so the proof could work backward from RHS to LHS. However, it's typically easier to transform the more complicated side into the simpler side.

---
> [!example] Example 4: Proving an Identity by Combining Fractions
> Verify the identity $2 \tan x \sec x = \dfrac{1}{1 - \sin x} - \dfrac{1}{1 + \sin x}$.

**Solution**

Start with the right-hand side (RHS), finding a common denominator:

$$
\begin{aligned}
\text{RHS} &= \frac{1}{1 - \sin x} - \frac{1}{1 + \sin x} \\
&= \frac{(1 + \sin x) - (1 - \sin x)}{(1 - \sin x)(1 + \sin x)} \qquad \leftarrow \text{Common denominator} \\
&= \frac{2 \sin x}{1 - \sin^2 x} \qquad \leftarrow \text{Simplify numerator} \\
&= \frac{2 \sin x}{\cos^2 x} \qquad \leftarrow \text{Pythagorean identity} \\
&= 2 \frac{\sin x}{\cos x} \left(\frac{1}{\cos x}\right) \qquad \leftarrow \text{Factor} \\
&= 2 \tan x \sec x = \text{LHS} \qquad \leftarrow \text{Reciprocal identities} \quad \blacksquare
\end{aligned}
$$

---

> [!info] Strategy: Introducing an Extra Factor
> If stuck, multiply the numerator and denominator by a chosen trigonometric expression (often a conjugate) to simplify the result.
> 
> Example: Multiplying by $(1 + \sin u)$ exploits the difference of squares:
> $(1 - \sin u)(1 + \sin u) = 1 - \sin^2 u = \cos^2 u$

---

> [!example] Example 5: Proving an Identity by Introducing Something Extra
> Verify the identity $\dfrac{\cos u}{1 - \sin u} = \sec u + \tan u$.

**Solution**

Start with the left-hand side (LHS) and multiply numerator and denominator by $1 + \sin u$:

$$
\begin{aligned}
\text{LHS} &= \frac{\cos u}{1 - \sin u} \\
&= \frac{\cos u}{1 - \sin u} \cdot \frac{1 + \sin u}{1 + \sin u} \qquad \leftarrow \text{Multiply num and den by } 1 + \sin u \\
&= \frac{\cos u(1 + \sin u)}{1 - \sin^2 u} \qquad \leftarrow \text{Expand denominator} \\
&= \frac{\cos u(1 + \sin u)}{\cos^2 u} \qquad \leftarrow \text{Pythagorean identity} \\
&= \frac{1 + \sin u}{\cos u} \qquad \leftarrow \text{Cancel common factor} \\
&= \frac{1}{\cos u} + \frac{\sin u}{\cos u} \qquad \leftarrow \text{Separate into two fractions} \\
&= \sec u + \tan u = \text{RHS} \qquad \leftarrow \text{Reciprocal identities} \quad \blacksquare
\end{aligned}
$$

---
## Proving Identities and Trigonometric Substitution

> [!info] Strategy: Working with Both Sides Separately
> If transforming one side into the other is difficult, transform **each side separately** into the same third expression. If $\text{LHS} = \text{Expression}_3$ and $\text{RHS} = \text{Expression}_3$, then $\text{LHS} = \text{RHS}$.

> [!example] Example 6: Proving an Identity by Working with Both Sides Separately
> Verify the identity $\dfrac{1 + \cos \theta}{\cos \theta} = \dfrac{\tan^2 \theta}{\sec \theta - 1}$.

**Solution**

Transform LHS and RHS independently to reach a common result:

$$
\begin{aligned}
\text{LHS} &= \frac{1 + \cos \theta}{\cos \theta} \\
&= \frac{1}{\cos \theta} + \frac{\cos \theta}{\cos \theta} \\
&= \sec \theta + 1
\end{aligned}
\qquad
\begin{aligned}
\text{RHS} &= \frac{\tan^2 \theta}{\sec \theta - 1} \\
&= \frac{\sec^2 \theta - 1}{\sec \theta - 1} \quad \leftarrow \text{Pythagorean identity} \\
&= \frac{(\sec \theta - 1)(\sec \theta + 1)}{\sec \theta - 1} \quad \leftarrow \text{Factor} \\
&= \sec \theta + 1
\end{aligned}
$$

Since $\text{LHS} = \sec \theta + 1$ and $\text{RHS} = \sec \theta + 1$, the equation is an identity. $\blacksquare$

---

### Trigonometric Substitution

**Concept**: Replace an algebraic variable $x$ with a trigonometric function (e.g., $x = \sin \theta$) to simplify expressions, particularly those involving square roots like $\sqrt{1-x^2}$. This is foundational for integration in calculus.

> [!example] Example 7: Trigonometric Substitution
> Substitute $x = \sin \theta$ in the expression $\sqrt{1 - x^2}$ and simplify. Assume $0 \le \theta \le \pi/2$.

**Solution**

$$
\begin{aligned}
\sqrt{1 - x^2} &= \sqrt{1 - \sin^2 \theta} \quad \leftarrow \text{Substitute } x = \sin \theta \\
&= \sqrt{\cos^2 \theta} \quad \leftarrow \text{Pythagorean identity} \\
&= \cos \theta \quad \leftarrow \text{Take square root}
\end{aligned}
$$

> [!warning] Domain Constraints & Absolute Values
> Normally, $\sqrt{u^2} = |u|$.
> Here, $\sqrt{\cos^2 \theta} = |\cos \theta|$.
> However, because the problem restricts $\theta$ to $[0, \pi/2]$, we know $\cos \theta \ge 0$. Thus, $|\cos \theta| = \cos \theta$.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 554)