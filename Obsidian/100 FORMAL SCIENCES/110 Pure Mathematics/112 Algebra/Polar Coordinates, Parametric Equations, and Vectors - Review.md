
Date: 2026-06-09
Tags: [[Mathematics]], [[Coordinates]], [[Algebra]], [[Complex Numbers]]

---

## Chapter 8 Review: Polar Coordinates, Complex Numbers, and Vectors

> [!info] Polar Coordinates
> A point $P$ is defined by $(r, \theta)$, where $r$ is distance from pole (origin) and $\theta$ is angle from polar axis (positive x-axis).
>
> **Conversion Formulas**:
> - **Polar to Rectangular**:
>   $$ x = r \cos \theta, \quad y = r \sin \theta $$
> - **Rectangular to Polar**:
>   $$ r^2 = x^2 + y^2, \quad \tan \theta = \frac{y}{x} $$

---

> [!info] Polar Graphs & Symmetry
> A polar equation is $r = f(\theta)$.
>
> **Symmetry Tests**:
> - **Polar Axis (x-axis)**: Replace $\theta$ with $-\theta$. Equation unchanged.
> - **Pole (origin)**: Replace $r$ with $-r$ OR $\theta$ with $\theta + \pi$. Equation unchanged.
> - **Line $\theta = \pi/2$ (y-axis)**: Replace $\theta$ with $\pi - \theta$. Equation unchanged.

---

> [!info] Complex Numbers
> $z = a + bi$, where $a$ is real part, $b$ is imaginary part.
>
> **Modulus**: $|z| = \sqrt{a^2 + b^2}$.
>
> **Polar Form**:
> $$ z = r(\cos \theta + i \sin \theta) $$
> where $r = |z|$ and $\tan \theta = b/a$.

**Operations in Polar Form**:
- **Multiplication**: Multiply moduli, add arguments.
  $$ z_1 z_2 = r_1 r_2 [\cos(\theta_1 + \theta_2) + i \sin(\theta_1 + \theta_2)] $$
- **Division**: Divide moduli, subtract arguments.
  $$ \frac{z_1}{z_2} = \frac{r_1}{r_2} [\cos(\theta_1 - \theta_2) + i \sin(\theta_1 - \theta_2)] $$

> [!info] De Moivre's Theorem & Roots
> **Powers**:
> $$ z^n = r^n (\cos n\theta + i \sin n\theta) $$
>
> **nth Roots**: For $z = r(\cos \theta + i \sin \theta)$, the $n$ roots $w_k$ are:
> $$ w_k = r^{1/n} \left[ \cos\left(\frac{\theta + 2k\pi}{n}\right) + i \sin\left(\frac{\theta + 2k\pi}{n}\right) \right] $$
> for $k = 0, 1, \dots, n-1$.

---

> [!info] Parametric Equations
> A curve defined by $x = f(t)$ and $y = g(t)$ on interval $I$.
>
> **Polar to Parametric**:
> To graph $r = f(\theta)$, let $t = \theta$:
> $$ x = f(t) \cos t, \quad y = f(t) \sin t $$

---

> [!info] Vectors
> A quantity with magnitude and direction. $\mathbf{v} = \langle a_1, a_2 \rangle$.
>
> **Magnitude**: $|\mathbf{v}| = \sqrt{a_1^2 + a_2^2}$.
>
> **Direction**: Angle $\theta$ where $\tan \theta = \frac{a_2}{a_1}$.
>
> **Component Form from Points**: If initial point $P(x_1, y_1)$ and terminal $Q(x_2, y_2)$:
> $$ \mathbf{v} = \langle x_2 - x_1, y_2 - y_1 \rangle $$
>
> **Standard Unit Vectors**: $\mathbf{i} = \langle 1, 0 \rangle$, $\mathbf{j} = \langle 0, 1 \rangle$.
> $$ \mathbf{v} = a_1 \mathbf{i} + a_2 \mathbf{j} $$

**Vector Operations**:
- **Addition**: $\mathbf{u} + \mathbf{v} = \langle a_1+b_1, a_2+b_2 \rangle$
- **Scalar Mult**: $c\mathbf{u} = \langle ca_1, ca_2 \rangle$
- **Components from Mag/Dir**: $a_1 = |\mathbf{v}| \cos \theta, \quad a_2 = |\mathbf{v}| \sin \theta$

---

> [!info] The Dot Product
> For $\mathbf{u} = \langle a_1, a_2 \rangle$ and $\mathbf{v} = \langle b_1, b_2 \rangle$:
> $$ \mathbf{u} \cdot \mathbf{v} = a_1 b_1 + a_2 b_2 $$
>
> **Angle Between Vectors**:
> $$ \cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}| |\mathbf{v}|} $$
>
> **Orthogonality**: $\mathbf{u} \perp \mathbf{v} \iff \mathbf{u} \cdot \mathbf{v} = 0$.
>
> **Projection of $\mathbf{u}$ onto $\mathbf{v}$**:
> $$ \text{proj}_{\mathbf{v}} \mathbf{u} = \left( \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{v}|^2} \right) \mathbf{v} $$
>
> **Work**:
> $$ W = \mathbf{F} \cdot \mathbf{D} $$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 655)