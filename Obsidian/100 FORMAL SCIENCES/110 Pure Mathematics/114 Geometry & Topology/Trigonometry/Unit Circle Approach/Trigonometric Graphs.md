Date: 2026-05-24
Tags: [[Mathematics]], [[Geometry]], [[Trigonometry]], [[Graphes]]

---
## Graphs of Sine and Cosine

> [!info] Periodic Properties of Sine and Cosine
> The functions sine and cosine have period $2\pi$:
> $$
> \sin(t + 2n\pi) = \sin t \quad \cos(t + 2n\pi) = \cos t \quad \text{for any integer } n
> $$
> A function $f$ is **periodic** if there exists a positive number $p$ such that $f(t + p) = f(t)$ for every $t$.  
> The **period** of $f$ is the least such positive $p$ (if it exists).  
> The graph of $f$ on any interval of length $p$ is called **one complete period**.

---

### Behavior Over One Period: $[0, 2\pi]$

Recall: $\sin t = y$, $\cos t = x$, where $(x,y)$ is terminal point on unit circle determined by real number $t$.

![[Pasted image 20260524013841.png|center]]

#### Table 1: Variation of $\sin t$ and $\cos t$ over $[0, 2\pi]$

| Interval          | $\sin t$       | $\cos t$       |
|-------------------|----------------|----------------|
| $0 \to \frac{\pi}{2}$   | $0 \to 1$      | $1 \to 0$      |
| $\frac{\pi}{2} \to \pi$ | $1 \to 0$      | $0 \to -1$     |
| $\pi \to \frac{3\pi}{2}$| $0 \to -1$     | $-1 \to 0$     |
| $\frac{3\pi}{2} \to 2\pi$| $-1 \to 0$    | $0 \to 1$      |

As $t$ increases from $0$ to $2\pi$, the point $P(x,y)$ traverses the unit circle once counterclockwise. The $y$-coordinate ($\sin t$) oscillates from $0 \to 1 \to 0 \to -1 \to 0$, forming one full cycle of the sine wave. Similarly, the $x$-coordinate ($\cos t$) traces $1 \to 0 \to -1 \to 0 \to 1$, forming the cosine wave.

Thus, both functions repeat their values every $2\pi$ units — confirming periodicity with period $2\pi$.

### Key Values for Accurate Graphing

> [!info] Table 2: Critical Points for $y = \sin t$ and $y = \cos t$ over $[0, 2\pi]$
>
> | $t$           | $\color{red}0$       | $\frac{\pi}{6}$ | $\frac{\pi}{3}$ | $\color{red}{\frac{\pi}{2}}$ | $\frac{2\pi}{3}$ | $\frac{5\pi}{6}$ | $\color{red}\pi$     | $\frac{7\pi}{6}$ | $\frac{4\pi}{3}$ | $\color{red}\frac{3\pi}{2}$ | $\frac{5\pi}{3}$ | $\frac{11\pi}{6}$ | $\color{red}2\pi$    |
> |---------------|-----------|------------------|------------------|------------------|-------------------|-------------------|-----------|-------------------|-------------------|-------------------|-------------------|--------------------|-----------|
> | $\sin t$      | $0$       | $\frac{1}{2}$   | $\frac{\sqrt{3}}{2}$ | $1$             | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$   | $0$       | $-\frac{1}{2}$   | $-\frac{\sqrt{3}}{2}$ | $-1$            | $-\frac{\sqrt{3}}{2}$ | $-\frac{1}{2}$   | $0$       |
> | $\cos t$      | $1$       | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$   | $0$             | $-\frac{1}{2}$   | $-\frac{\sqrt{3}}{2}$ | $-1$      | $-\frac{\sqrt{3}}{2}$ | $-\frac{1}{2}$   | $0$             | $\frac{1}{2}$   | $\frac{\sqrt{3}}{2}$ | $1$       |

*Note: Red entries indicate key extrema or intercepts used to anchor graph shape.*

---

### One Period Graphs ($0 \leq t \leq 2\pi$)

![[Pasted image 20260524032449.png|center]]

Key features:
- **Sine**: Starts at origin, rises to max, falls through zero to min, returns to zero.
- **Cosine**: Starts at max, falls through zero to min, rises through zero back to max.

---

### Full Periodic Extension

![[Pasted image 20260524032517.png|center]]

Since both functions are periodic with period $2\pi$, their graphs repeat identically in every interval $[2n\pi, 2(n+1)\pi]$ for integer $n$.

---

## Graphs of Sine and Cosine

> [!info] Core Properties
> The functions $y = \sin x$ and $y = \cos x$ have:
> - **Domain**: all real numbers $\mathbb{R}$
> - **Range**: $[-1, 1]$
> - **Period**: $2\pi$
> 
> ![[Pasted image 20260524032733.png|center]]

---
### Symmetry Properties

- **Sine** is an **odd function** → graph symmetric with respect to the **origin**.  
  $$ \sin(-x) = -\sin x $$

- **Cosine** is an **even function** → graph symmetric with respect to the **y-axis**.  
  $$ \cos(-x) = \cos x $$

This matches their algebraic parity and explains visual reflection behavior in their graphs.

---

### X-Intercept Summary

| Function     | X-Intercepts                  |
|--------------|-------------------------------|
| $y = \sin x$   | $x = n\pi$, $n \in \mathbb{Z}$        |
| $y = \cos x$   | $x = \frac{\pi}{2} + n\pi$, $n \in \mathbb{Z}$ |

These intercepts occur periodically every $\pi$ units for sine, and offset by $\frac{\pi}{2}$ for cosine — consistent with phase shift between the two waves.
Local maxima/minima occur midway between successive x-intercepts.

---
## Graphs of Transformations of Sine and Cosine


> [!example] Example 1: Graphing Cosine Curves
> Sketch each function. State domain and range.
> 
> **(a)** $f(x) = 2 + \cos x$  
> **(b)** $g(x) = -\cos x$

**Solution**

**(a)** The graph of $f(x) = 2 + \cos x$ is the graph of $y = \cos x$ shifted **upward by 2 units**.

- Domain: $\mathbb{R}$ (all real numbers)
- Range: Since $\cos x \in [-1, 1]$, then $2 + \cos x \in [1, 3]$

![[Pasted image 20260524033351.png|center]]

**(b)** The graph of $g(x) = -\cos x$ is the reflection of $y = \cos x$ across the **x-axis**.

- Domain: $\mathbb{R}$
- Range: Still $[-1, 1]$ (reflection preserves vertical span)

![[Pasted image 20260524033408.png|center]]

---

These transformations follow standard function rules:
- Vertical shift: $f(x) = c + \cos x$ → moves graph up/down
- Reflection: $f(x) = -\cos x$ → flips over x-axis

Domain remains unchanged for both; range adjusts only under vertical shifts.

---

## Vertical and Horizontal Transformations of Sine and Cosine

### Vertical Scaling: Amplitude

For functions $y = a \sin x$ and $y = a \cos x$, the number $|a|$ is called the **amplitude** — it represents the maximum deviation from the midline (i.e., the largest value attained in absolute terms).

![[Pasted image 20260524033941.png|center|341]]

> [!info] Vertical Stretch/Shrink Rule
> For $y = a \sin x$ or $y = a \cos x$:  
> - If $|a| > 1$: vertical stretch by factor $|a|$  
> - If $0 < |a| < 1$: vertical shrink by factor $|a|$  
> - If $a < 0$: reflect over x-axis after scaling

![[Pasted image 20260524034116.png|center|406]]

---

> [!example] Example 2: A Vertically Stretched Cosine Curve
> Find amplitude, sketch graph, state domain and range for $y = -3 \cos x$.

**Solution**

Amplitude: $|-3| = 3$ → max value = 3, min value = -3.

Graph construction:
1. Start with $y = \cos x$
2. Vertically stretch by factor 3 → $y = 3 \cos x$
3. Reflect over x-axis → $y = -3 \cos x$

- Domain: $\mathbb{R}$
- Range: $[-3, 3]$

![[Pasted image 20260524034148.png|center]]

---

### Horizontal Scaling: Period Change

Because sine and cosine have period $2\pi$, the functions

$$
y = a \sin kx \quad \text{and} \quad y = a \cos kx \quad (k > 0)
$$

complete one full cycle as $kx$ varies from $0$ to $2\pi$, i.e., as $x$ varies from $0$ to $\frac{2\pi}{k}$.

Thus, their **period** is $\boxed{\dfrac{2\pi}{k}}$.

These are collectively called **sinusoidal curves**.

> [!info] Sine and Cosine Curves Summary
> For $y = a \sin kx$ and $y = a \cos kx$ ($k > 0$):
> - **Amplitude**: $|a|$
> - **Period**: $\dfrac{2\pi}{k}$
> - One complete period occurs on interval $\left[0, \dfrac{2\pi}{k}\right]$

---

![[Pasted image 20260524034410.png|center]]

Effect of $k$:
- $k > 1$: horizontal shrink (cycle completes faster)
- $0 < k < 1$: horizontal stretch (cycle takes longer)

![[Pasted image 20260524034429.png|center]]

---

### Graphing Strategy

To sketch $y = a \sin kx$ or $y = a \cos kx$:

1. Determine amplitude $|a|$ and period $\frac{2\pi}{k}$
2. Mark key points over one period: start, quarter, half, three-quarters, end
   - For sine: starts at 0, rises to max, falls to 0, to min, back to 0
   - For cosine: starts at max, falls to 0, to min, to 0, back to max
3. Repeat pattern left/right using periodicity

This method ensures accurate placement of intercepts, maxima, and minima without plotting every point.

---

## Example 3: Amplitude and Period

> [!example] Example 3: Amplitude and Period
> Find the amplitude and period of each function, and sketch its graph.
> 
> **(a)** $y = 4 \cos 3x$  
> **(b)** $y = -2 \sin \frac{1}{2}x$

---

### (a) $y = 4 \cos 3x$

**Amplitude and Period:**

$$
\begin{aligned}
\text{amplitude} &= |a| = |4| = 4 \\
\text{period} &= \frac{2\pi}{k} = \frac{2\pi}{3}
\end{aligned}
$$

**Sketching the Graph:**

Interval for one complete period: $\left[0, \frac{2\pi}{3}\right]$

Divide into 4 equal subintervals → step size = $\frac{2\pi}{3} \cdot \frac{1}{4} = \frac{\pi}{6}$

Key points table:

| $x$           | $0$         | $\frac{\pi}{6}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\frac{2\pi}{3}$ |
|---------------|-------------|------------------|------------------|------------------|-------------------|
| $y$           | $4$         | $0$             | $-4$            | $0$             | $4$              |
| Feature       | maximum     | intercept        | minimum          | intercept        | maximum           |

![[Pasted image 20260524035039.png|center]]

---

### (b) $y = -2 \sin \frac{1}{2}x$

**Amplitude and Period:**

$$
\begin{aligned}
\text{amplitude} &= |a| = |-2| = 2 \\
\text{period} &= \frac{2\pi}{k} = \frac{2\pi}{1/2} = 4\pi
\end{aligned}
$$

**Sketching the Graph:**

Interval for one complete period: $[0, 4\pi]$

Step size = $\frac{4\pi}{4} = \pi$

Key points table:

| $x$           | $0$     | $\pi$    | $2\pi$   | $3\pi$   | $4\pi$   |
|---------------|---------|----------|----------|----------|----------|
| $y$           | $0$     | $-2$     | $0$      | $2$      | $0$      |
| Feature       | intercept | minimum  | intercept | maximum  | intercept |

Note: Since coefficient is negative ($-2$), sine curve starts by going *downward* from origin.

![[Pasted image 20260524035247.png|center]]

---

### General Sketching Strategy Recap

For $y = a \sin kx$ or $y = a \cos kx$:

1. Compute amplitude $|a|$ and period $\frac{2\pi}{k}$
2. Choose interval $[0, \frac{2\pi}{k}]$ for one cycle
3. Divide into 4 equal parts → step = $\frac{\text{period}}{4}$
4. Plot key points based on base function behavior:
   - **Cosine**: starts at max/min depending on sign of $a$
   - **Sine**: starts at 0; direction depends on sign of $a$
5. Connect smoothly and repeat periodically

This ensures precise, efficient graphing without calculator reliance.

---
## Shifted Sine and Cosine Curves

> [!info] Shifted Sine and Cosine Curves
> The functions  
> $$
> y = a \sin k(x - b) \quad \text{and} \quad y = a \cos k(x - b) \quad (k > 0)
> $$  
> have:
> - **Amplitude**: $|a|$  
> - **Period**: $\dfrac{2\pi}{k}$  
> - **Horizontal shift**: $b$ (to the right if $b > 0$, left if $b < 0$)  
>   
> An appropriate interval for one complete period is:  
> $$
> \left[b,\ b + \frac{2\pi}{k}\right]
> $$

![[Pasted image 20260524035700.png|center]]

---

> [!example] Example 4: A Horizontally Shifted Sine Curve
> Find amplitude, period, horizontal shift of $y = 2 \sin \frac{1}{3}\left(x - \frac{\pi}{4}\right)$, and graph one complete period.

**Solution**

From form $y = a \sin k(x - b)$:

$$
\begin{aligned}
\text{amplitude} &= |a| = |2| = 2 \\
\text{period} &= \frac{2\pi}{k} = \frac{2\pi}{1/3} = 6\pi \\
\text{horizontal shift} &= b = \frac{\pi}{4} \quad \text{(to the right)}
\end{aligned}
$$

**Sketching the Graph:**

Interval for one complete period:
$$
\left[\frac{\pi}{4},\ \frac{\pi}{4} + 6\pi\right] = \left[\frac{\pi}{4},\ \frac{25\pi}{4}\right]
$$

Divide into 4 equal subintervals → step size = $\frac{6\pi}{4} = \frac{3\pi}{2}$

Start at $x = \frac{\pi}{4}$, add $\frac{3\pi}{2}$ successively:

Key points table:

| $x$           | $\frac{\pi}{4}$ | $\frac{7\pi}{4}$ | $\frac{13\pi}{4}$ | $\frac{19\pi}{4}$ | $\frac{25\pi}{4}$ |
|---------------|------------------|-------------------|--------------------|--------------------|--------------------|
| $y$           | $0$             | $2$              | $0$               | $-2$              | $0$               |
| Feature       | intercept        | maximum           | intercept          | minimum            | intercept          |

![[Pasted image 20260524035935.png|center]]

---

### Alternative Method: Solve for Interval Endpoints

To find start/end of one period for $y = a \sin k(x - b)$:

Set argument from $0$ to $2\pi$:

$$
\begin{aligned}
\text{Start: } & k(x - b) = 0 \Rightarrow x = b \\
\text{End: }   & k(x - b) = 2\pi \Rightarrow x = b + \frac{2\pi}{k}
\end{aligned}
$$

Same result: interval $\left[b,\ b + \frac{2\pi}{k}\right]$

This method avoids memorization — derive interval directly from function structure.

---
### Key Takeaway

Horizontal shift does not affect amplitude or period — only position along x-axis. Always identify $b$ in factored form $k(x - b)$ to correctly determine direction and magnitude of shift.

---

## Graphical Addition and Variable Amplitude

> [!example] Example 7: A Sum of Sine and Cosine Curves
> Graph $f(x) = 2 \cos x$, $g(x) = \sin 2x$, and $h(x) = 2 \cos x + \sin 2x$ on a common screen.

**Solution**

The graph of $h = f + g$ is obtained by adding the corresponding $y$-coordinates of $f$ and $g$ at each $x$. This technique is called **graphical addition**.

![[Pasted image 20260524130935.png|center]]

Note: The resultant curve $h(x)$ is not sinusoidal — it combines two different frequencies and amplitudes. Its maxima/minima do not align regularly with either component.

---

> [!example] Example 8: A Cosine Curve with Variable Amplitude
> Graph $y = x^2$, $y = -x^2$, and $y = x^2 \cos 6\pi x$ on a common screen. Explain relationship.

**Solution**

Since $-1 \leq \cos 6\pi x \leq 1$ for all real $x$, and $x^2 \geq 0$, multiplying gives:

$$
-x^2 \leq x^2 \cos 6\pi x \leq x^2
$$

Thus, the graph of $y = x^2 \cos 6\pi x$ lies between the parabolas $y = x^2$ and $y = -x^2$. It touches them when $\cos 6\pi x = \pm 1$.

![[Pasted image 20260524131105.png|center]]

This illustrates **variable amplitude**: the function $a(x) = x^2$ modulates the amplitude of the cosine wave. As $|x|$ increases, the oscillations grow in magnitude; near $x=0$, they shrink to zero.

---

### General Principle: Envelope Functions

For functions of the form:

$$
f(x) = a(x) \sin kx \quad \text{or} \quad f(x) = a(x) \cos kx
$$

the graph lies between the **envelope curves** $y = a(x)$ and $y = -a(x)$, provided $a(x) \geq 0$.

- If $a(x)$ is constant → standard sinusoid with fixed amplitude.
- If $a(x)$ varies → amplitude changes with $x$, creating “beating” or “modulated” waves.
- Touch points occur when $\sin kx = \pm 1$ or $\cos kx = \pm 1$, i.e., at extrema of the trigonometric factor.

This behavior is foundational in signal processing, physics (wave interference), and engineering (AM radio modulation).

---

> [!warning] Non-Sinusoidal Resultants
> When adding sine/cosine functions with different periods (e.g., $\cos x$ and $\sin 2x$), the sum is generally **not periodic** unless the ratio of periods is rational. Even if periodic, the waveform may lack symmetry or simple harmonic structure.

Always verify periodicity and shape visually or algebraically before assuming sinusoidal behavior.

---

## Variable and Decaying Amplitude Examples

> [!example] Example 9: A Cosine Curve with Variable Amplitude
> Graph $f(x) = \cos 2\pi x \cos 16\pi x$.

**Solution**

This is a product of two cosine functions. Since $|\cos 16\pi x| \leq 1$, we have:

$$
-\left|\cos 2\pi x\right| \leq f(x) \leq \left|\cos 2\pi x\right|
$$

But more precisely, since $\cos 2\pi x$ itself oscillates between $-1$ and $1$, the graph of $f(x)$ lies between the curves:

$$
y = \cos 2\pi x \quad \text{and} \quad y = -\cos 2\pi x
$$

These form an **oscillating envelope** — not fixed parabolas or lines, but another periodic function modulating the amplitude.

![[Pasted image 20260524132604.png|center]]

Note: This is a classic example of **beat phenomenon** in physics — interference of two waves with close frequencies produces amplitude modulation at the difference frequency.

Here:
- Carrier frequency: $16\pi$ → period $\frac{2\pi}{16\pi} = \frac{1}{8}$
- Envelope frequency: $2\pi$ → period $\frac{2\pi}{2\pi} = 1$

The envelope completes one full cycle every 1 unit, while the inner wave oscillates 8 times per envelope cycle.

---

> [!example] Example 10: A Sine Curve with Decaying Amplitude
> Graph $f(x) = \dfrac{\sin x}{x}$ and comment on behavior near $x = 0$.

**Solution**

Function undefined at $x = 0$, but limit exists:

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

Thus, although $0 \notin \text{domain}$, graph approaches $(0,1)$ from both sides.

Rewrite as:

$$
f(x) = \underbrace{\frac{1}{x}}_{a(x)} \cdot \sin x
$$

So this is a sine wave with **amplitude controlled by $a(x) = \frac{1}{x}$**, which decays as $|x|$ increases.

![[Pasted image 20260524134008.png|center]]

Key observations:
- Even function? Yes — $\frac{\sin(-x)}{-x} = \frac{-\sin x}{-x} = \frac{\sin x}{x}$ → actually **even**!
- Oscillations cross x-axis at $x = n\pi$, $n \ne 0$
- Envelope curves: $y = \frac{1}{x}$ and $y = -\frac{1}{x}$ for $x > 0$; mirrored for $x < 0$
- As $|x| \to \infty$, amplitude $\to 0$ → damped oscillation

This function is foundational in calculus (limit definition), Fourier analysis, and signal processing ($sinc$ function).

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 427)