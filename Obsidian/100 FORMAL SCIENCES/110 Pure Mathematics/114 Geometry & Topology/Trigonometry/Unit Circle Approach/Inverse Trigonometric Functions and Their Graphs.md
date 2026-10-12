Date: 2026-05-24
Tags: [[Mathematics]], [[Geometry]], [[Trigonometry]], [[Graphes]], [[Functions]]

---

## The Inverse Sine Function

To define an inverse, restrict $y = \sin x$ to a domain where it is one-to-one.

**Restricted Domain**: $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$  
On this interval, sine passes the Horizontal Line Test and attains all values in $[-1, 1]$.

![[Pasted image 20260524215350.png|center]]

---

> [!info] Definition of the Inverse Sine Function
> The **inverse sine function**, denoted $\sin^{-1} x$ or $\arcsin x$, has:
> - **Domain**: $[-1, 1]$
> - **Range**: $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$
> 
> Defined by:  
> $$
> y = \sin^{-1} x \quad \iff \quad \sin y = x
> $$
> 
![[Pasted image 20260524215413.png|center]]

---

### Cancellation Properties

$$
\begin{aligned}
\sin(\sin^{-1} x) &= x && \text{for } -1 \leq x \leq 1 \\
\sin^{-1}(\sin x) &= x && \text{for } -\frac{\pi}{2} \leq x \leq \frac{\pi}{2}
\end{aligned}
$$

Outside these intervals, cancellation fails — e.g., $\sin^{-1}(\sin \pi) = \sin^{-1}(0) = 0 \ne \pi$

---

> [!note] Notation Alert
> $\sin^{-1} x \ne (\sin x)^{-1} = \csc x$  
> Superscript $-1$ denotes inverse function, not reciprocal.

Always verify output lies in principal range $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ when evaluating or simplifying expressions involving $\sin^{-1}$.


---

## The Inverse Cosine Function

To define an inverse, restrict $y = \cos x$ to a domain where it is one-to-one.

**Restricted Domain**: $[0, \pi]$  
On this interval, cosine decreases *monotonically* from 1 to -1 — passes Horizontal Line Test and covers full range $[-1, 1]$.

![[Pasted image 20260524221252.png|center]]

---

> [!info] Definition of the Inverse Cosine Function
> The **inverse cosine function**, denoted $\cos^{-1} x$ or $\arccos x$, has:
> - **Domain**: $[-1, 1]$
> - **Range**: $[0, \pi]$
> 
> Defined by:  
> $$
> y = \cos^{-1} x \quad \iff \quad \cos y = x
> $$
> 
![[Pasted image 20260524221519.png|center]]

---

### Cancellation Properties

$$
\begin{aligned}
\cos(\cos^{-1} x) &= x && \text{for } -1 \leq x \leq 1 \\
\cos^{-1}(\cos x) &= x && \text{for } 0 \leq x \leq \pi
\end{aligned}
$$

Outside these intervals, cancellation fails — e.g., $\cos^{-1}(\cos 2\pi) = \cos^{-1}(1) = 0 \ne 2\pi$


---

> [!note] Notation Alert
> $\cos^{-1} x \ne (\cos x)^{-1} = \sec x$  
> Superscript $-1$ denotes inverse function, not reciprocal.

Note: Unlike arcsine (odd), arccosine is **neither even nor odd** — but satisfies $\cos^{-1}(-x) = \pi - \cos^{-1} x$.

---

## The Inverse Tangent Function

To define an inverse, restrict $y = \tan x$ to the interval $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, where it is *strictly increasing* and one-to-one.

---

> [!info] Definition of the Inverse Tangent Function
> The **inverse tangent function**, denoted $\tan^{-1} x$ or $\arctan x$, has:
> - **Domain**: $\mathbb{R}$ (all real numbers)
> - **Range**: $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$
> 
> Defined by:  
> $$
> y = \tan^{-1} x \quad \iff \quad \tan y = x
> $$

![[Pasted image 20260524223340.png|center]]

---

### Cancellation Properties

$$
\begin{aligned}
\tan(\tan^{-1} x) &= x && \text{for all } x \in \mathbb{R} \\
\tan^{-1}(\tan x) &= x && \text{for } -\frac{\pi}{2} < x < \frac{\pi}{2}
\end{aligned}
$$

Outside this open interval, cancellation fails — e.g., $\tan^{-1}(\tan \pi) = \tan^{-1}(0) = 0 \ne \pi$

---

### Key Features

- **Horizontal asymptotes**: $y = \frac{\pi}{2}$ and $y = -\frac{\pi}{2}$
- **Odd function**: $\tan^{-1}(-x) = -\tan^{-1} x$
- **Continuous and strictly increasing** over entire domain

---

> [!note] Notation Alert
> $\tan^{-1} x \ne (\tan x)^{-1} = \cot x$  
> Superscript $-1$ denotes inverse function, not reciprocal.

---

## The Inverse Secant, Cosecant, and Cotangent Functions

To define inverses for secant, cosecant, and cotangent, we restrict their domains to intervals where they are **one-to-one** and attain **all values in their range**. Choices below simplify calculus computations (e.g., derivative signs).

---

### Inverse Secant: $y = \sec^{-1} x$

**Restricted domain of $\sec x$**:  
$$
\left[0, \frac{\pi}{2}\right) \cup \left[\pi, \frac{3\pi}{2}\right)
$$  
→ Excludes points where $\cos x = 0$, covers full range $(-\infty, -1] \cup [1, \infty)$

![[Pasted image 20260524223705.png|center]]

**Definition**:  
$y = \sec^{-1} x \iff \sec y = x$, with $y \in \left[0, \frac{\pi}{2}\right) \cup \left[\pi, \frac{3\pi}{2}\right)$

Domain: $(-\infty, -1] \cup [1, \infty)$  
Range: $\left[0, \frac{\pi}{2}\right) \cup \left[\pi, \frac{3\pi}{2}\right)$

---

### Inverse Cosecant: $y = \csc^{-1} x$

**Restricted domain of $\csc x$**:  
$$
\left(0, \frac{\pi}{2}\right] \cup \left(\pi, \frac{3\pi}{2}\right]
$$  
→ Excludes points where $\sin x = 0$, covers full range $(-\infty, -1] \cup [1, \infty)$

![[Pasted image 20260524223720.png|center]]

**Definition**:  
$y = \csc^{-1} x \iff \csc y = x$, with $y \in \left(0, \frac{\pi}{2}\right] \cup \left(\pi, \frac{3\pi}{2}\right]$

Domain: $(-\infty, -1] \cup [1, \infty)$  
Range: $\left(0, \frac{\pi}{2}\right] \cup \left(\pi, \frac{3\pi}{2}\right]$

---

### Inverse Cotangent: $y = \cot^{-1} x$

**Restricted domain of $\cot x$**:  
$$
(0, \pi)
$$  
→ Strictly decreasing, continuous, covers all real outputs

![[Pasted image 20260524223737.png|center]]

**Definition**:  
$y = \cot^{-1} x \iff \cot y = x$, with $y \in (0, \pi)$

Domain: $\mathbb{R}$  
Range: $(0, \pi)$

Note: This choice makes $\cot^{-1} x$ **continuous everywhere** and matches common calculus conventions.

---

> [!note] Calculator Tip
> Most calculators do not have direct keys for $\sec^{-1}, \csc^{-1}, \cot^{-1}$. Use identities:
> $$
> \sec^{-1} x = \cos^{-1}\left(\frac{1}{x}\right), \quad
> \csc^{-1} x = \sin^{-1}\left(\frac{1}{x}\right), \quad
> \cot^{-1} x = \tan^{-1}\left(\frac{1}{x}\right) \text{ (for } x > 0\text{)}
> $$
> For $x < 0$, adjust using symmetry or add $\pi$ as needed based on desired range.

Always confirm output lies within the defined principal range for your course or application.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 451)