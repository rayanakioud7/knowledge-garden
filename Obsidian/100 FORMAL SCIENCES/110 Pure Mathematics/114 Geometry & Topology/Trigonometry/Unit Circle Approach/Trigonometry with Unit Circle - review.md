Date: 2026-05-24
Tags: [[Mathematics]],[[Geometry]], [[Trigonometry]], [[Graphes]], [[Cheat sheet]]

---

## Chapter 5 Review: Trigonometric Functions

> [!info] The Unit Circle & Definitions
> **Unit Circle**: Circle of radius 1 centered at $(0,0)$. Equation: $x^2 + y^2 = 1$.
>
> **Terminal Point**: The point $P(x, y)$ obtained by traveling distance $t$ counterclockwise from $(1, 0)$.
>
> **Trigonometric Functions** (for $P(x,y)$):
> $$
> \begin{aligned}
> \sin t &= y & \cos t &= x & \tan t &= \frac{y}{x} \\
> \csc t &= \frac{1}{y} & \sec t &= \frac{1}{x} & \cot t &= \frac{x}{y}
> \end{aligned}
> $$

![[Pasted image 20260525004539.png|center]]

### Special Values Table

| $t$ | $\sin t$ | $\cos t$ | $\tan t$ | $\csc t$ | $\sec t$ | $\cot t$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $0$ | $0$ | $1$ | $0$ | — | $1$ | — |
| $\frac{\pi}{6}$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ | $2$ | $\frac{2\sqrt{3}}{3}$ | $\sqrt{3}$ |
| $\frac{\pi}{4}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ | $\sqrt{2}$ | $\sqrt{2}$ | $1$ |
| $\frac{\pi}{3}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ | $\frac{2\sqrt{3}}{3}$ | $2$ | $\frac{\sqrt{3}}{3}$ |
| $\frac{\pi}{2}$ | $1$ | $0$ | — | $1$ | — | $0$ |
| $\pi$ | $0$ | $-1$ | $0$ | — | $-1$ | — |
| $\frac{3\pi}{2}$ | $-1$ | $0$ | — | $-1$ | — | $0$ |

---

> [!info] Fundamental Identities
> **Reciprocal**: $\csc t = \frac{1}{\sin t}, \sec t = \frac{1}{\cos t}, \cot t = \frac{1}{\tan t}$
>
> **Pythagorean**:
> $$ \sin^2 t + \cos^2 t = 1 $$
> $$ \tan^2 t + 1 = \sec^2 t $$
> $$ 1 + \cot^2 t = \csc^2 t $$
>
> **Even-Odd**:
> *   **Odd**: $\sin(-t)=-\sin t, \tan(-t)=-\tan t, \csc(-t)=-\csc t, \cot(-t)=-\cot t$
> *   **Even**: $\cos(-t)=\cos t, \sec(-t)=\sec t$

![[Pasted image 20260525004635.png|center]]

---

### Graphs & Transformations

> [!info] Periodic Properties
> *   **Sine/Cosine**: Period $2\pi$. $\sin(t+2\pi) = \sin t$. $\cos(t+2\pi)=\cos(t)$
> *   **Tangent**: Period $\pi$. $\tan(t+\pi) = \tan t$.

**Transformations of Sine and Cosine**:
For $y = a \sin k(x - b)$ or $y = a \cos k(x - b)$ with $k > 0$:
*   **Amplitude**: $|a|$
*   **Period**: $\frac{2\pi}{k}$
*   **Horizontal Shift**: $b$
*   **Interval for one period**: $[b, b + \frac{2\pi}{k}]$

![[Pasted image 20260525004726.png|center]]

**Graphing Tangent/Cotangent**:
*   **Tangent**: $y = a \tan kx$. Period $\frac{\pi}{k}$. Interval: $(-\frac{\pi}{2k}, \frac{\pi}{2k})$.
*   **Cotangent**: $y = a \cot kx$. Period $\frac{\pi}{k}$. Interval: $(0, \frac{\pi}{k})$.

![[Pasted image 20260525004755.png|center]]

**Graphing Secant/Cosecant**:
*   **Period**: $\frac{2\pi}{k}$.
*   **Interval**: $(0, \frac{2\pi}{k})$.
*   Asymptotes occur where the reciprocal function (cos/sin) is zero.

![[Pasted image 20260525004814.png|center]]

---

> [!info] Inverse Trigonometric Functions
> Defined by restricting domains to make functions one-to-one.
>
> | Function | Definition | Domain | Range |
> | :--- | :--- | :--- | :--- |
> | $\sin^{-1} x$ | $\sin y = x$ | $[-1, 1]$ | $[-\frac{\pi}{2}, \frac{\pi}{2}]$ |
> | $\cos^{-1} x$ | $\cos y = x$ | $[-1, 1]$ | $[0, \pi]$ |
> | $\tan^{-1} x$ | $\tan y = x$ | $(-\infty, \infty)$ | $(-\frac{\pi}{2}, \frac{\pi}{2})$ |

![[Pasted image 20260525004839.png|center]]

---

### Harmonic Motion

> [!info] Motion Models
> **Simple Harmonic Motion**: $y = a \sin \omega t$ or $y = a \cos \omega t$
> *   **Amplitude**: $|a|$
> *   **Period**: $\frac{2\pi}{\omega}$
> *   **Frequency**: $\frac{\omega}{2\pi}$
>
> **Damped Harmonic Motion**: $y = k e^{-ct} \sin \omega t$ ($c > 0$)
> *   **Damping constant**: $c$
> *   **Initial amplitude**: $k$
>
> **Phase**: For $y = A \sin k(t - b)$, phase is $b$.
> *   **Horizontal shift**: $\frac{b}{k}$ (lag time if $b>0$).
> *   **Phase Difference**: Between $y_1$ and $y_2$ is $b - c$. "In phase" if difference is multiple of $2\pi$.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 472)