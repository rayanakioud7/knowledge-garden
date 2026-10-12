Date: 2026-06-20
Tags: [[Mathematics]], [[Geometry]]

---

## Rotation of Axes

### General Second-Degree Equation

**Standard form (axes parallel to coordinate axes):**
$$ Ax^2 + Cy^2 + Dx + Ey + F = 0 $$

**General form (rotated axes):**
$$ Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0 $$

The $Bxy$ term indicates the conic is **rotated**. To eliminate this term, we rotate the coordinate axes by angle $\phi$.

---

### Rotation of Axes Formulas

![[000/000.Source Material/math/pictures/Pasted image 20260620202249.png|center]]

![[000/000.Source Material/math/pictures/Pasted image 20260620202259.png|center]]

**Derivation:**
Let $P(x,y)$ have polar coordinates $(r, \theta + \phi)$ in original system and $(r, \theta)$ in rotated system.

$$ X = r \cos \theta, \quad Y = r \sin \theta $$
$$ x = r \cos(\theta + \phi), \quad y = r \sin(\theta + \phi) $$

Using addition formulas:
$$ x = r(\cos \theta \cos \phi - \sin \theta \sin \phi) = (r \cos \theta)\cos \phi - (r \sin \theta)\sin \phi $$
$$ y = r(\sin \theta \cos \phi + \cos \theta \sin \phi) = (r \sin \theta)\cos \phi + (r \cos \theta)\sin \phi $$

**Rotation Formulas:**

| To get old coordinates | To get new coordinates |
|------------------------|------------------------|
| $x = X \cos \phi - Y \sin \phi$ | $X = x \cos \phi + y \sin \phi$ |
| $y = X \sin \phi + Y \cos \phi$ | $Y = -x \sin \phi + y \cos \phi$ |

---

> [!example] Example 1: Rotation of Axes
> **Given:** Axes rotated through $\phi = 30^\circ$. Point has $xy$-coordinates $(2, -4)$.
> 
> **Find:** $XY$-coordinates
> 
> **Solution:**
> Using $X = x \cos \phi + y \sin \phi$ and $Y = -x \sin \phi + y \cos \phi$:
> 
> $$ X = 2 \cos 30^\circ + (-4) \sin 30^\circ = 2\left(\frac{\sqrt{3}}{2}\right) - 4\left(\frac{1}{2}\right) = \sqrt{3} - 2 $$
> 
> $$ Y = -2 \sin 30^\circ + (-4) \cos 30^\circ = -2\left(\frac{1}{2}\right) - 4\left(\frac{\sqrt{3}}{2}\right) = -1 - 2\sqrt{3} $$
> 
> **Answer:** $XY$-coordinates are $(\sqrt{3} - 2, -1 - 2\sqrt{3})$

---
### Simplifying the General Conic Equation

> [!info] Theorem: Eliminating the $xy$-Term
> To eliminate the $xy$-term in the general conic equation $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$, rotate the axes through an acute angle $\phi$ satisfying:
> $$ \cot 2\phi = \frac{A - C}{B} $$

---

### Derivation of the Rotation Angle

Substitute the rotation formulas ($x = X \cos \phi - Y \sin \phi$, $y = X \sin \phi + Y \cos \phi$) into the general equation. Expanding and collecting like terms yields:
$$ A'X^2 + B'XY + C'Y^2 + D'X + E'Y + F' = 0 $$

The coefficient of the $XY$-term is:
$$ B' = 2(C - A) \sin \phi \cos \phi + B(\cos^2 \phi - \sin^2 \phi) $$

To eliminate the $XY$-term, set $B' = 0$. Applying double-angle formulas ($\sin 2\phi = 2 \sin \phi \cos \phi$ and $\cos 2\phi = \cos^2 \phi - \sin^2 \phi$):
$$ (C - A) \sin 2\phi + B \cos 2\phi = 0 $$
$$ B \cos 2\phi = (A - C) \sin 2\phi $$
$$ \cot 2\phi = \frac{A - C}{B} $$

---

> [!example] Example 3: Eliminating the $xy$-Term
> **Equation:** $6\sqrt{3}x^2 + 6xy + 4\sqrt{3}y^2 = 21\sqrt{3}$
>
> **1. Find Rotation Angle $\phi$:**
> $$ \cot 2\phi = \frac{A - C}{B} = \frac{6\sqrt{3} - 4\sqrt{3}}{6} = \frac{2\sqrt{3}}{6} = \frac{\sqrt{3}}{3} $$
> $$ 2\phi = 60^\circ \implies \phi = 30^\circ $$
>
> **2. Apply Rotation Formulas ($\phi = 30^\circ$):**
> $$ x = X \cos 30^\circ - Y \sin 30^\circ = \frac{\sqrt{3}}{2}X - \frac{1}{2}Y $$
> $$ y = X \sin 30^\circ + Y \cos 30^\circ = \frac{1}{2}X + \frac{\sqrt{3}}{2}Y $$
>
> **3. Substitute and Simplify:**
> Substitute $x$ and $y$ into the original equation:
> $$ 6\sqrt{3}\left(\frac{\sqrt{3}X - Y}{2}\right)^2 + 6\left(\frac{\sqrt{3}X - Y}{2}\right)\left(\frac{X + \sqrt{3}Y}{2}\right) + 4\sqrt{3}\left(\frac{X + \sqrt{3}Y}{2}\right)^2 = 21\sqrt{3} $$
>
> Expanding and collecting terms results in:
> $$ 7\sqrt{3}X^2 + 3\sqrt{3}Y^2 = 21\sqrt{3} $$
> Divide by $21\sqrt{3}$:
> $$ \frac{X^2}{3} + \frac{Y^2}{7} = 1 $$
>
> **4. Identify Curve:**
> *   **Type:** Ellipse in the $XY$-coordinate system.
> *   **Orientation:** Foci lie on the $Y$-axis (since $7 > 3$).
> *   **Dimensions:** $a^2 = 7 \implies a = \sqrt{7}$ (Major axis length $2\sqrt{7}$), $b^2 = 3 \implies b = \sqrt{3}$ (Minor axis length $2\sqrt{3}$).

![[000/000.Source Material/math/pictures/Pasted image 20260620220403.png|center]]

---

## The Discriminant

> [!info] Identifying Conics by the Discriminant
> For the general equation $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$, the **discriminant** is the quantity:
> $$ B^2 - 4AC $$
>
> The graph is a conic (non-degenerate case) determined by the sign of the discriminant:
> 1.  **Parabola:** $B^2 - 4AC = 0$
> 2.  **Ellipse:** $B^2 - 4AC < 0$
> 3.  **Hyperbola:** $B^2 - 4AC > 0$

### Invariance Under Rotation
The discriminant is **invariant** under rotation of axes.
If we rotate axes by $\phi$ to eliminate the $xy$-term ($B' = 0$), the new equation is $A'X^2 + C'Y^2 + D'X + E'Y + F' = 0$.
The relationship holds:
$$ (B')^2 - 4A'C' = B^2 - 4AC $$
Since $B' = 0$:
$$ -4A'C' = B^2 - 4AC $$
*   If $B^2 - 4AC > 0$, then $A'C' < 0$ (opposite signs) $\implies$ **Hyperbola**.
*   If $B^2 - 4AC < 0$, then $A'C' > 0$ (same sign) $\implies$ **Ellipse**.
*   If $B^2 - 4AC = 0$, then $A'C' = 0$ (one is zero) $\implies$ **Parabola**.

---

> [!example] Example 5: Identifying a Conic by the Discriminant
> **Equation:** $3x^2 + 5xy - 2y^2 + x - y + 4 = 0$
>
> **(a) Identify the conic:**
> *   $A = 3$
> *   $B = 5$
> *   $C = -2$
>
> Calculate discriminant:
> $$ B^2 - 4AC = 5^2 - 4(3)(-2) = 25 + 24 = 49 $$
> Since $49 > 0$, the conic is a **hyperbola**.
>
> **(b) Graph:**
> 
> ![[000/000.Source Material/math/pictures/Pasted image 20260620221512.png|center]]



---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 802)