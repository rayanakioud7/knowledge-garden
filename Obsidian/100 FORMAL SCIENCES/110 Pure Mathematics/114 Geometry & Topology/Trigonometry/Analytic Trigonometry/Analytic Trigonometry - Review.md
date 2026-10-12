Date: 2026-06-08
Tags: [[Mathematics]], [[Trigonometry]]

---
## Chapter 7 Review: Analytic Trigonometry

> [!info] Fundamental Trigonometric Identities
> **Reciprocal Identities**
> $$ \csc x = \frac{1}{\sin x}, \quad \sec x = \frac{1}{\cos x}, \quad \cot x = \frac{1}{\tan x} $$
> $$ \tan x = \frac{\sin x}{\cos x}, \quad \cot x = \frac{\cos x}{\sin x} $$
>
> **Pythagorean Identities**
> $$ \sin^2 x + \cos^2 x = 1, \quad \tan^2 x + 1 = \sec^2 x, \quad 1 + \cot^2 x = \csc^2 x $$
>
> **Even-Odd Identities**
> $$ \sin(-x) = -\sin x, \quad \cos(-x) = \cos x, \quad \tan(-x) = -\tan x $$
>
> **Cofunction Identities**
> $$ \sin\left(\frac{\pi}{2}-x\right) = \cos x, \quad \cos\left(\frac{\pi}{2}-x\right) = \sin x, \quad \tan\left(\frac{\pi}{2}-x\right) = \cot x $$
> $$ \sec\left(\frac{\pi}{2}-x\right) = \csc x, \quad \csc\left(\frac{\pi}{2}-x\right) = \sec x, \quad \cot\left(\frac{\pi}{2}-x\right) = \tan x $$

---

> [!info] Proving Trigonometric Identities
> **Guidelines**:
> 1.  **Start with one side**: Choose the more complicated side.
> 2.  **Use known identities**: Algebra, factoring, common denominators.
> 3.  **Convert to sines and cosines**: If stuck, rewrite everything in terms of $\sin$ and $\cos$.
>
> **Warning**: Do not operate on both sides simultaneously (unless steps are reversible).

---

> [!info] Addition and Subtraction Formulas
> **Formulas for Sine**
> $$ \sin(s+t) = \sin s \cos t + \cos s \sin t $$
> $$ \sin(s-t) = \sin s \cos t - \cos s \sin t $$
>
> **Formulas for Cosine**
> $$ \cos(s+t) = \cos s \cos t - \sin s \sin t $$
> $$ \cos(s-t) = \cos s \cos t + \sin s \sin t $$
>
> **Formulas for Tangent**
> $$ \tan(s+t) = \frac{\tan s + \tan t}{1 - \tan s \tan t}, \quad \tan(s-t) = \frac{\tan s - \tan t}{1 + \tan s \tan t} $$

---

> [!info] Sums of Sines and Cosines
> Expression $A \sin x + B \cos x$ can be written as $k \sin(x + \phi)$ where:
> $$ k = \sqrt{A^2 + B^2}, \quad \cos \phi = \frac{A}{k}, \quad \sin \phi = \frac{B}{k} $$

---

> [!info] Double-Angle Formulas
> **Sine**
> $$ \sin 2x = 2 \sin x \cos x $$
>
> **Cosine**
> $$ \cos 2x = \cos^2 x - \sin^2 x = 1 - 2\sin^2 x = 2\cos^2 x - 1 $$
>
> **Tangent**
> $$ \tan 2x = \frac{2 \tan x}{1 - \tan^2 x} $$

---

> [!info] Formulas for Lowering Powers
> $$ \sin^2 x = \frac{1 - \cos 2x}{2}, \quad \cos^2 x = \frac{1 + \cos 2x}{2}, \quad \tan^2 x = \frac{1 - \cos 2x}{1 + \cos 2x} $$

---

> [!info] Half-Angle Formulas
> $$ \sin \frac{u}{2} = \pm \sqrt{\frac{1 - \cos u}{2}}, \quad \cos \frac{u}{2} = \pm \sqrt{\frac{1 + \cos u}{2}} $$
> $$ \tan \frac{u}{2} = \frac{1 - \cos u}{\sin u} = \frac{\sin u}{1 + \cos u} $$
> *Note: The sign ($\pm$) depends on the quadrant of $u/2$.*

---

> [!info] Product-Sum and Sum-to-Product Formulas
> **Product-to-Sum**
> $$ \sin u \cos v = \frac{1}{2}[\sin(u+v) + \sin(u-v)] $$
> $$ \cos u \sin v = \frac{1}{2}[\sin(u+v) - \sin(u-v)] $$
> $$ \cos u \cos v = \frac{1}{2}[\cos(u+v) + \cos(u-v)] $$
> $$ \sin u \sin v = \frac{1}{2}[\cos(u-v) - \cos(u+v)] $$
>
> **Sum-to-Product**
> $$ \sin x + \sin y = 2 \sin\frac{x+y}{2} \cos\frac{x-y}{2} $$
> $$ \sin x - \sin y = 2 \cos\frac{x+y}{2} \sin\frac{x-y}{2} $$
> $$ \cos x + \cos y = 2 \cos\frac{x+y}{2} \cos\frac{x-y}{2} $$
> $$ \cos x - \cos y = -2 \sin\frac{x+y}{2} \sin\frac{x-y}{2} $$

---

> [!info] Trigonometric Equations
> **Basic Equation**: $T(\theta) = c$ (where $T$ is a trig function).
>
> **Solving Strategy**:
> 1.  **Find solutions in one period**: Solve for $\theta$ in an interval of length $2\pi$ (for sin/cos) or $\pi$ (for tan).
> 2.  **Find all solutions**: Add integer multiples of the period ($2k\pi$ or $k\pi$) to the solutions found in Step 1.
>
> **Advanced Techniques**:
> -   **Factoring**: Use Zero-Product Property.
> -   **Identities**: Rewrite to isolate a single function.
> -   **Multiples of Angles**: Solve for the multiple (e.g., $3\theta$) first, then divide by the coefficient.
> -   **Squaring**: Check for extraneous solutions.


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 592)