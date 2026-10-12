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
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 802)