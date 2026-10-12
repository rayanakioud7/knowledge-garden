Date: 2026-05-29
Tags: [[Mathematics]], [[Geometry]], [[Trigonometry]], [[Functions]]

---
## Trigonometric Functions of Angles

Extend trigonometric ratios from acute angles to any angle using standard position. Let $P(x,y)$ be a point on the terminal side of $\theta$. The distance from the origin is:
$$ r = \sqrt{x^2 + y^2} $$

> [!info] Definition of the Trigonometric Functions
> For an angle $\theta$ in standard position with a point $P(x,y)$ on its terminal side and $r = \sqrt{x^2+y^2}$:
> $$
> \begin{aligned}
> \sin \theta &= \frac{y}{r} & \cos \theta &= \frac{x}{r} & \tan \theta &= \frac{y}{x} \quad (x \neq 0) \\[10pt]
> \csc \theta &= \frac{r}{y} \quad (y \neq 0) & \sec \theta &= \frac{r}{x} \quad (x \neq 0) & \cot \theta &= \frac{x}{y} \quad (y \neq 0)
> \end{aligned}
> $$

![[Pasted image 20260529185623.png|center]]

---

## Special Values of the Trigonometric Functions of Angles

> [!info] Table 1: Special Values
> | $\theta$ in Degrees | $\theta$ in Radians | sin $\theta$ | cos $\theta$ | tan $\theta$ | csc $\theta$ | sec $\theta$ | cot $\theta$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $0^\circ$ | $0$ | $0$ | $1$ | $0$ | — | $1$ | — |
| $30^\circ$ | $\frac{\pi}{6}$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ | $2$ | $\frac{2\sqrt{3}}{3}$ | $\sqrt{3}$ |
| $45^\circ$ | $\frac{\pi}{4}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ | $\sqrt{2}$ | $\sqrt{2}$ | $1$ |
| $60^\circ$ | $\frac{\pi}{3}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ | $\frac{2\sqrt{3}}{3}$ | $2$ | $\frac{\sqrt{3}}{3}$ |
| $90^\circ$ | $\frac{\pi}{2}$ | $1$ | $0$ | — | $1$ | — | $0$ |
| $180^\circ$ | $\pi$ | $0$ | $-1$ | $0$ | — | $-1$ | — |
| $270^\circ$ | $\frac{3\pi}{2}$ | $-1$ | $0$ | — | $-1$ | — | $0$ |
![[Pasted image 20260529185934.png|center]]

> [!example] Example 1: Finding Trigonometric Functions of Angles
> Find (a) $\cos 135^\circ$, (b) $\tan 390^\circ$.

**(a)** $135^\circ$ is in Quadrant II. The reference angle is $45^\circ$. Since cosine corresponds to the x-coordinate, it is negative here.
$$ \cos 135^\circ = -\frac{\sqrt{2}}{2} $$
![[Pasted image 20260529190020.png|center|304]]

**(b)** The angles $390^\circ$ and $30^\circ$ are coterminal ($390^\circ - 360^\circ = 30^\circ$).
$$ \tan 390^\circ = \tan 30^\circ = \frac{\sqrt{3}}{3} $$
![[Pasted image 20260529190115.png|center|265]]

---
## Reference Angles and Signs of Trigonometric Functions

> [!info] Definition of Reference Angle
> Let $\theta$ be an angle in standard position. The **reference angle** $\bar{\theta}$ associated with $\theta$ is the acute angle formed by the terminal side of $\theta$ and the x-axis.

![[Pasted image 20260529191450.png|center]]

> [!example] Example 2: Finding Reference Angles
> Find the reference angle for (a) $\theta = \frac{5\pi}{3}$ and (b) $\theta = 870^\circ$.
>
> **(a)** The terminal side of $\frac{5\pi}{3}$ lies in Quadrant IV. The reference angle is the difference from $2\pi$:
> $$ \bar{\theta} = 2\pi - \frac{5\pi}{3} = \frac{\pi}{3} $$
> ![[Pasted image 20260529191519.png|center]]
>
> **(b)** The angle $870^\circ$ is coterminal with $150^\circ$ ($870 - 2(360) = 150$). Since $150^\circ$ is in Quadrant II:
> $$ \bar{\theta} = 180^\circ - 150^\circ = 30^\circ $$
> ![[Pasted image 20260529191533.png|center]]

The signs of trigonometric functions depend on the quadrant. Recall that $\sin \theta = y/r$, $\cos \theta = x/r$, and $\tan \theta = y/x$. Since $r > 0$, the sign depends on the signs of $x$ and $y$.

> [!info] Signs of the Trigonometric Functions
> | Quadrant | Positive Functions | Negative Functions | Mnemonic |
| :--- | :--- | :--- | :--- |
| I | All (sin, cos, tan, csc, sec, cot) | None | **A**ll |
| II | sin, csc | cos, sec, tan, cot | **S**tudents |
| III | tan, cot | sin, csc, cos, sec | **T**ake |
| IV | cos, sec | sin, csc, tan, cot | **C**alculus |

![[Pasted image 20260529191659.png|center]]

---

## Evaluating Trigonometric Functions at Any Angle

> [!info] Algorithm for Evaluation
> To find the values of trigonometric functions for any angle $\theta$, follow these steps:
> 1. **Find the Reference Angle.** Determine the reference angle $\bar{\theta}$ associated with $\theta$.
> 2. **Find the Sign.** Determine the sign of the function by noting the quadrant in which $\theta$ lies.
> 3. **Find the Value.** The value is the same as that for $\bar{\theta}$, except possibly for the sign determined in Step 2.

> [!example] Example 3: Using the Reference Angle to Evaluate Trigonometric Functions
> Find (a) $\sin 240^\circ$ and (b) $\cot 495^\circ$.
>
> **(a)** The terminal side of $240^\circ$ is in Quadrant III. The reference angle is:
> $$ \bar{\theta} = 240^\circ - 180^\circ = 60^\circ $$
> Since sine corresponds to the y-coordinate, it is negative in Quadrant III.
> $$ \sin 240^\circ = -\sin 60^\circ = -\frac{\sqrt{3}}{2} \quad \leftarrow \text{from Table 1} $$
> ![[Pasted image 20260529192149.png|center]]
>
> **(b)** The angle $495^\circ$ is coterminal with $135^\circ$ ($495 - 360 = 135$). The terminal side is in Quadrant II. The reference angle is:
> $$ \bar{\theta} = 180^\circ - 135^\circ = 45^\circ $$
> Cotangent corresponds to $x/y$, which is negative in Quadrant II.
> $$ \cot 495^\circ = \cot 135^\circ = -\cot 45^\circ = -1 \quad \leftarrow \text{from Table 1} $$
> ![[Pasted image 20260529192206.png|center]]

---

## Trigonometric Identities

> [!info] Fundamental Identities
> These identities hold for any angle $\theta$ where both sides are defined.
>
> **Reciprocal & Quotient Identities**
> $$ \csc \theta = \frac{1}{\sin \theta} \quad \sec \theta = \frac{1}{\cos \theta} \quad \cot \theta = \frac{1}{\tan \theta} $$
> $$ \tan \theta = \frac{\sin \theta}{\cos \theta} \quad \cot \theta = \frac{\cos \theta}{\sin \theta} $$
>
> **Pythagorean Identities**
> Derived from the Pythagorean Theorem ($x^2 + y^2 = r^2$).
> $$ \sin^2 \theta + \cos^2 \theta = 1 $$
> $$ \tan^2 \theta + 1 = \sec^2 \theta \quad (\text{divide by } \cos^2 \theta) $$
> $$ 1 + \cot^2 \theta = \csc^2 \theta \quad (\text{divide by } \sin^2 \theta) $$

![[Pasted image 20260529192910.png|center]]

> [!example] Proof of $\sin^2 \theta + \cos^2 \theta = 1$
> Using the definitions $\sin \theta = y/r$ and $\cos \theta = x/r$ along with the Pythagorean Theorem $x^2 + y^2 = r^2$:
> $$
> \begin{aligned}
> \sin^2 \theta + \cos^2 \theta &= \left( \frac{y}{r} \right)^2 + \left( \frac{x}{r} \right)^2 \\
> &= \frac{y^2}{r^2} + \frac{x^2}{r^2} \\
> &= \frac{x^2 + y^2}{r^2} \\
> &= \frac{r^2}{r^2} \\
> &= 1 \quad \blacksquare
> \end{aligned}
> $$

---
## Areas of Triangles

The area $\mathscr{A}$ of a triangle is standardly given by $\mathscr{A} = \frac{1}{2} \times \text{base} \times \text{height}$. When two sides and the included angle are known, the height can be determined using trigonometric ratios.

> [!info] Area of a Triangle
> The **area** $\mathscr{A}$ of a triangle with sides of lengths $a$ and $b$ and included angle $\theta$ is:
> $$ \mathscr{A} = \frac{1}{2}ab \sin \theta $$

![[Pasted image 20260529193651.png|center]]

> [!example] Example 8: Finding the Area of a Triangle
> Find the area of triangle $ABC$ with sides of length $10$ cm and $3$ cm, and included angle $120^\circ$.
>
> **Solution**
> Apply the area formula using $\theta = 120^\circ$:
> $$
> \begin{aligned}
> \mathscr{A} &= \frac{1}{2}(10)(3) \sin 120^\circ \\
> &= 15 \sin 60^\circ \quad \leftarrow \text{Reference angle } (180^\circ - 120^\circ = 60^\circ) \\
> &= 15 \left( \frac{\sqrt{3}}{2} \right) \\
> &\approx 13 \text{ cm}^2
> \end{aligned}
> $$

![[Pasted image 20260529193546.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 505)