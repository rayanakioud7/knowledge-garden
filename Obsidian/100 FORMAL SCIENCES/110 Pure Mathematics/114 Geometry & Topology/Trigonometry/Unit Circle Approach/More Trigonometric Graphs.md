Date: 2026-05-24
Tags: [[Mathematics]], [[Geometry]], [[Trigonometry]], [[Graphes]]

---
## Graphs of Tangent, Cotangent, Secant, and Cosecant

> [!info] Periodic Properties
> - **Tangent and cotangent** have period $\pi$:  
>   $$
>   \tan(x + \pi) = \tan x \quad \cot(x + \pi) = \cot x
>   $$
> - **Secant and cosecant** have period $2\pi$:  
>   $$
>   \sec(x + 2\pi) = \sec x \quad \csc(x + 2\pi) = \csc x
>   $$

*(Recall: sine and cosine also have period $2\pi$; sec/csc inherit this as reciprocals.)*

---

### Graph of $y = \tan x$

Since $\tan x = \dfrac{\sin x}{\cos x}$, it is undefined where $\cos x = 0$, i.e., at $x = \frac{\pi}{2} + n\pi$, $n \in \mathbb{Z}$.

We sketch one period on $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, then repeat.

As $x \to \frac{\pi}{2}^-$, $\cos x \to 0^+$, $\sin x \to 1$ → $\tan x \to +\infty$  
As $x \to -\frac{\pi}{2}^+$, $\cos x \to 0^+$, $\sin x \to -1$ → $\tan x \to -\infty$

Thus:

$$
\tan x \to \infty \quad \text{as} \quad x \to \frac{\pi}{2}^- \\
\tan x \to -\infty \quad \text{as} \quad x \to -\frac{\pi}{2}^+
$$

→ Vertical asymptotes at $x = \pm \frac{\pi}{2}$ (and all odd multiples thereof).

![[Pasted image 20260524145234.png|center]]

#### Table: Values of $\tan x$ near $\frac{\pi}{2} \approx 1.5708$

| $x$       | $\tan x$     |
|-----------|--------------|
| $0$       | $0$          |
| $\frac{\pi}{6}$ | $0.58$      |
| $\frac{\pi}{4}$ | $1.00$      |
| $\frac{\pi}{3}$ | $1.73$      |
| $1.4$     | $5.80$       |
| $1.5$     | $14.10$      |
| $1.55$    | $48.08$      |
| $1.57$    | $1,255.77$   |
| $1.5707$  | $10,381.33$  |

Confirms unbounded growth near asymptote.

---

### Graph of $y = \cot x$

$\cot x = \dfrac{\cos x}{\sin x}$, undefined where $\sin x = 0$, i.e., $x = n\pi$, $n \in \mathbb{Z}$.

Sketch one period on $(0, \pi)$.

As $x \to 0^+$, $\sin x \to 0^+$, $\cos x \to 1$ → $\cot x \to +\infty$  
As $x \to \pi^-$, $\sin x \to 0^+$, $\cos x \to -1$ → $\cot x \to -\infty$

Thus:

$$
\cot x \to \infty \quad \text{as} \quad x \to 0^+ \\
\cot x \to -\infty \quad \text{as} \quad x \to \pi^-
$$

→ Vertical asymptotes at $x = 0, \pi, 2\pi, \dots$

![[Pasted image 20260524200526.png|center]]

Note: At $x = \frac{\pi}{2}$, $\cot x = 0$. Function decreases monotonically in each interval between asymptotes.

---

### Key Features Summary

| Function   | Period    | Asymptotes                     | Behavior in One Period             |
|------------|-----------|--------------------------------|------------------------------------|
| $\tan x$   | $\pi$     | $x = \frac{\pi}{2} + n\pi$     | Increases from $-\infty$ to $+\infty$ |
| $\cot x$   | $\pi$     | $x = n\pi$                     | Decreases from $+\infty$ to $-\infty$ |
| $\sec x$   | $2\pi$    | Same as $\tan x$               | Reciprocal of $\cos x$; U-shaped branches |
| $\csc x$   | $2\pi$    | Same as $\cot x$               | Reciprocal of $\sin x$; U-shaped branches |

Graphs of secant and cosecant are derived by taking reciprocals of cosine and sine respectively — they inherit asymptotes where denominator is zero, and exhibit “U” or inverted “U” shapes between them.

---

## Graphs of Secant and Cosecant

> [!info] Reciprocal Construction Method
> To graph:
> - $y = \sec x = \dfrac{1}{\cos x}$ → take reciprocals of $y$-coordinates of $y = \cos x$
> - $y = \csc x = \dfrac{1}{\sin x}$ → take reciprocals of $y$-coordinates of $y = \sin x$
>
> Vertical asymptotes occur where denominator is zero.

---

### One Period on $(0, 2\pi)$

![[Pasted image 20260524204443.png|center]]

---

### Asymptote Behavior Example: $y = \sec x$ near $x = \frac{\pi}{2}$

Since $\cos x > 0$ for $x < \frac{\pi}{2}$ (nearby), and $\cos x < 0$ for $x > \frac{\pi}{2}$:

$$
\begin{align}
\sec x \to +\infty \quad \text{as} \quad x \to \frac{\pi}{2}^- \\
\sec x \to -\infty \quad \text{as} \quad x \to \frac{\pi}{2}^+
\end{align}$$

Same logic applies to all asymptotes — sign of denominator determines direction of infinity.

---

> [!info] Graphs of Secant and Cosecant (Full Periodic Extension)
> Both functions are periodic with period $2\pi$.
>
> **Vertical Asymptotes**:
> - $y = \sec x$: $x = \frac{\pi}{2} + n\pi$, $n \in \mathbb{Z}$
> - $y = \csc x$: $x = n\pi$, $n \in \mathbb{Z}$
>
> **Range**: $(-\infty, -1] \cup [1, \infty)$ for both  
> *(since $|\sec x| \geq 1$, $|\csc x| \geq 1$)*
>
> **Symmetry**:
> - $y = \sec x$ is **even** → symmetric about y-axis  
>   ($\sec(-x) = \sec x$)
> - $y = \csc x$ is **odd** → symmetric about origin  
>   ($\csc(-x) = -\csc x$)

![[Pasted image 20260524204919.png|center]]

---

### Key Observations

- Between asymptotes, each branch of secant/cosecant corresponds to a “hump” of cosine/sine:
  - Where cosine is positive and decreasing → secant is positive and increasing toward $+\infty$
  - Where cosine is negative and increasing → secant is negative and decreasing toward $-\infty$
- Minimum/maximum values of secant/cosecant occur where cosine/sine reach their extrema ($\pm 1$) → secant/cosecant also equal $\pm 1$ there.
- No x-intercepts — since numerator is always 1, never zero.

---

## Graphs of Transformations of Tangent and Cotangent

> [!example] Example 1: Graphing Tangent Curves
> Graph each function.
> 
> **(a)** $y = 2 \tan x$  
> **(b)** $y = -\tan x$

**Solution**

Start with base graph $y = \tan x$, then apply transformations.

**(a)** $y = 2 \tan x$: vertically stretch by factor 2 → multiply all y-coordinates by 2. Asymptotes unchanged at $x = \frac{\pi}{2} + n\pi$.

**(b)** $y = -\tan x$: reflect over x-axis → flip sign of all y-values. Still passes through origin, but now decreases from left to right in each period.

![[Pasted image 20260524210544.png|center|642]]

---

> [!info] Tangent and Cotangent Curves (General Form)
> For $k > 0$:
> 
> Functions:  
> $$
> y = a \tan kx \quad \text{and} \quad y = a \cot kx
> $$
> 
> - **Period**: $\dfrac{\pi}{k}$  
>   *(since argument $kx$ must vary by $\pi$ for one full cycle)*
> 
> - **Appropriate interval for one period**:
>   - For $y = a \tan kx$: $\left( -\dfrac{\pi}{2k},\ \dfrac{\pi}{2k} \right)$
>   - For $y = a \cot kx$: $\left( 0,\ \dfrac{\pi}{k} \right)$
> 
> - **Key features**:
>   - Vertical asymptotes at endpoints of interval
>   - X-intercept at midpoint of interval
>   - If $a < 0$, reflect over x-axis after scaling

---

> [!note] Why These Intervals?
> - $\tan \theta$ has asymptotes at $\theta = \pm \frac{\pi}{2}$ → so for $\tan kx$, set $kx = \pm \frac{\pi}{2}$ → $x = \pm \frac{\pi}{2k}$
> - $\cot \theta$ has asymptotes at $\theta = 0, \pi$ → so for $\cot kx$, set $kx = 0, \pi$ → $x = 0, \frac{\pi}{k}$

Always derive intervals from the argument’s behavior — don’t memorize without understanding.

---

## Example 2: Graphing Tangent Curves

> [!example] Example 2: Graphing Tangent Curves
> Graph each function.
> 
> **(a)** $y = \tan 2x$  
> **(b)** $y = \tan 2\left(x - \frac{\pi}{4}\right)$

---

### (a) $y = \tan 2x$

**Period**: $\dfrac{\pi}{k} = \dfrac{\pi}{2}$

**Appropriate interval for one period**: $\left(-\dfrac{\pi}{4}, \dfrac{\pi}{4}\right)$  
→ Asymptotes at endpoints, x-intercept at midpoint $x=0$

Graph has same shape as $y = \tan x$, but **horizontally shrunk by factor $\frac{1}{2}$**.

![[Pasted image 20260524211407.png|center]]

---

### (b) $y = \tan 2\left(x - \frac{\pi}{4}\right)$

This is the graph from part (a), shifted **right by $\frac{\pi}{4}$**.

To find new interval: solve for when argument varies from $-\frac{\pi}{2}$ to $\frac{\pi}{2}$:

$$
\begin{aligned}
\text{Start: } & 2\left(x - \frac{\pi}{4}\right) = -\frac{\pi}{2} \Rightarrow x - \frac{\pi}{4} = -\frac{\pi}{4} \Rightarrow x = 0 \\
\text{End: }   & 2\left(x - \frac{\pi}{4}\right) = \frac{\pi}{2} \Rightarrow x - \frac{\pi}{4} = \frac{\pi}{4} \Rightarrow x = \frac{\pi}{2}
\end{aligned}
$$

→ One complete period on $(0, \frac{\pi}{2})$

Asymptotes at $x = 0$ and $x = \frac{\pi}{2}$, x-intercept at midpoint $x = \frac{\pi}{4}$

![[Pasted image 20260524211520.png|center]]

---

### General Method for Shifted Tangent

For $y = a \tan k(x - b)$:

1. Period = $\frac{\pi}{k}$
2. Solve for interval where argument $k(x - b)$ goes from $-\frac{\pi}{2}$ to $\frac{\pi}{2}$:
   $$
   \begin{aligned}
   k(x - b) &= -\frac{\pi}{2} \Rightarrow x = b - \frac{\pi}{2k} \\
   k(x - b) &= \frac{\pi}{2} \Rightarrow x = b + \frac{\pi}{2k}
   \end{aligned}
   $$
3. Interval: $\left(b - \frac{\pi}{2k},\ b + \frac{\pi}{2k}\right)$
4. Asymptotes at endpoints, x-intercept at $x = b$
5. Apply vertical stretch/reflection if $a \ne 1$ or $a < 0$

This ensures correct positioning of all key features without guesswork.

---

> [!note] Horizontal Shift in Factored Form
> Always write tangent functions as $y = a \tan k(x - b)$ to directly read shift $b$. If given as $y = \tan(kx - c)$, factor out $k$:  
> $$
> y = \tan\left(k\left(x - \frac{c}{k}\right)\right) \Rightarrow \text{shift } = \frac{c}{k}
> $$

Example: $y = \tan(2x - \frac{\pi}{2}) = \tan\left(2\left(x - \frac{\pi}{4}\right)\right)$ → shift right by $\frac{\pi}{4}$

---

## Graphs of Transformations of Secant and Cosecant

> [!info] Secant and Cosecant Curves (General Form)
> For $k > 0$:
> 
> Functions:  
> $$
> y = a \sec kx \quad \text{and} \quad y = a \csc kx
> $$
> 
> - **Period**: $\dfrac{2\pi}{k}$  
> - **Appropriate interval for one complete period**: $\left(0, \dfrac{2\pi}{k}\right)$  
>   *(Note: This is a convention — you may shift this interval as needed for horizontal shifts.)*
> 
> To graph:
> 1. Sketch the corresponding reciprocal function ($y = \cos kx$ for secant, $y = \sin kx$ for cosecant) over the interval.
> 2. Take reciprocals of y-values to get secant/cosecant branches.
> 3. Vertical asymptotes occur where denominator is zero.
> 4. Apply vertical stretch/shrink by $|a|$; reflect if $a < 0$.

---

> [!example] Example 4: Graphing Cosecant Curves
> Graph each function.
> 
> **(a)** $y = \frac{1}{2} \csc 2x$  
> **(b)** $y = \frac{1}{2} \csc\left(2x + \frac{\pi}{2}\right)$

---

### (a) $y = \frac{1}{2} \csc 2x$

**Period**: $\dfrac{2\pi}{2} = \pi$

**Interval for one period**: $(0, \pi)$

Asymptotes where $\sin 2x = 0$ → $2x = 0, \pi, 2\pi$ → $x = 0, \frac{\pi}{2}, \pi$

Thus, sketch:

- On $(0, \frac{\pi}{2})$: $\csc 2x$ starts at $+\infty$, dips to minimum at $x=\frac{\pi}{4}$ where $\sin 2x = 1$ → $\csc 2x = 1$, then back to $+\infty$
- On $(\frac{\pi}{2}, \pi)$: $\csc 2x$ starts at $-\infty$, rises to maximum at $x=\frac{3\pi}{4}$ where $\sin 2x = -1$ → $\csc 2x = -1$, then back to $-\infty$

Then apply vertical shrink by factor $\frac{1}{2}$: min becomes $\frac{1}{2}$, max becomes $-\frac{1}{2}$

![[Pasted image 20260524213724.png|center|473]]

---

### (b) $y = \frac{1}{2} \csc\left(2x + \frac{\pi}{2}\right)$

First, rewrite in factored form to identify shift:

$$
y = \frac{1}{2} \csc\left(2x + \frac{\pi}{2}\right) = \frac{1}{2} \csc\left[2\left(x + \frac{\pi}{4}\right)\right]
$$

→ Horizontal shift: **left by $\frac{\pi}{4}$**

Same shape as part (a), but shifted left by $\frac{\pi}{4}$

To find new interval for one period: start from original interval $(0, \pi)$, subtract $\frac{\pi}{4}$ → $\left(-\frac{\pi}{4}, \frac{3\pi}{4}\right)$

Alternatively, solve for where argument $2(x + \frac{\pi}{4})$ goes from $0$ to $2\pi$:

$$
\begin{aligned}
\text{Start: } & 2\left(x + \frac{\pi}{4}\right) = 0 \Rightarrow x = -\frac{\pi}{4} \\
\text{End: }   & 2\left(x + \frac{\pi}{4}\right) = 2\pi \Rightarrow x = \pi - \frac{\pi}{4} = \frac{3\pi}{4}
\end{aligned}
$$

Asymptotes where $\sin\left(2x + \frac{\pi}{2}\right) = 0$ → $2x + \frac{\pi}{2} = n\pi$ → $x = \frac{n\pi - \frac{\pi}{2}}{2} = \frac{(2n-1)\pi}{4}$

Within $\left(-\frac{\pi}{4}, \frac{3\pi}{4}\right)$: asymptotes at $x = -\frac{\pi}{4}$, $x = \frac{\pi}{4}$, $x = \frac{3\pi}{4}$

Branches:
- $\left(-\frac{\pi}{4}, \frac{\pi}{4}\right)$: positive branch, vertex at $x=0$ → $y = \frac{1}{2} \csc\left(\frac{\pi}{2}\right) = \frac{1}{2}(1) = \frac{1}{2}$
- $\left(\frac{\pi}{4}, \frac{3\pi}{4}\right)$: negative branch, vertex at $x=\frac{\pi}{2}$ → $y = \frac{1}{2} \csc\left(\frac{3\pi}{2}\right) = \frac{1}{2}(-1) = -\frac{1}{2}$

![[Pasted image 20260524213853.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 442)