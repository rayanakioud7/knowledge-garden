Date: 2026-05-26
Tags: [[Mathematics]], [[Geometry]], [[Trigonometry]], [[Functions]]

---

## 6.2 Trigonometry of Right Triangles

### Trigonometric Ratios

Consider a right triangle with $\theta$ as one of its acute angles. The **trigonometric ratios** are defined as follows.

> [!info] The Trigonometric Ratios
> $$(\text{SOH CAH TOA})$$
> $$
> \begin{array}{ccc}
> \sin \theta = \frac{\text{opposite}}{\text{hypotenuse}} & \cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}} & \tan \theta = \frac{\text{opposite}}{\text{adjacent}} \\[10pt]
> \csc \theta = \frac{\text{hypotenuse}}{\text{opposite}} & \sec \theta = \frac{\text{hypotenuse}}{\text{adjacent}} & \cot \theta = \frac{\text{adjacent}}{\text{opposite}}
> \end{array}
> $$
> ![[Pasted image 20260529180046.png|center]]

The symbols are abbreviations for full names: **sine, cosine, tangent, cosecant, secant, cotangent**. Since any two right triangles with angle $\theta$ are similar, these ratios depend only on the angle $\theta$, regardless of triangle size 

> [!example] Example 1: Finding Trigonometric Ratios
> Find the six trigonometric ratios of the angle $\theta$ in Figure 3.
>
> **Solution**
> Identify side lengths relative to $\theta$: opposite $= 2$, adjacent $= \sqrt{5}$, hypotenuse $= 3$.
> $$
> \begin{aligned}
> \sin \theta &= \frac{2}{3} & \cos \theta &= \frac{\sqrt{5}}{3} & \tan \theta &= \frac{2}{\sqrt{5}} \\[10pt]
> \csc \theta &= \frac{3}{2} & \sec \theta &= \frac{3}{\sqrt{5}} & \cot \theta &= \frac{\sqrt{5}}{2}
> \end{aligned}
> $$
> ![[Pasted image 20260529180355.png|center]]

---
## Special Triangles; Calculators

**Special ratios** are derived from right triangles using the Pythagorean Theorem.

> [!info] Derivation of Side Lengths
> **45-45-90 Triangle (Isosceles Right)**
> Derived from a square of side $1$.
> $$
> \begin{aligned}
> 1^2 + 1^2 &= c^2 \\
> 2 &= c^2 \\
> c &= \sqrt{2} \quad \leftarrow \text{hypotenuse}
> \end{aligned}
> $$
> ![[Pasted image 20260529183607.png|center]]

> [!info] Derivation of Side Lengths (Continued)
> **30-60-90 Triangle**
> Derived from an equilateral triangle of side $2$ bisected by altitude.
> $$
> \begin{aligned}
> 1^2 + h^2 &= 2^2 \\
> h^2 &= 3 \\
> h &= \sqrt{3} \quad \leftarrow \text{altitude (opposite } 60^\circ)
> \end{aligned}
> $$
> ![[Pasted image 20260529183717.png|center]]

> [!info] Special Values of the Trigonometric Ratios
> | $\theta$ (Degrees) | $\theta$ (Radians) | $\sin \theta$ | $\cos \theta$ | $\tan \theta$ | $\csc \theta$ | $\sec \theta$ | $\cot \theta$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $30^\circ$ | $\frac{\pi}{6}$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ | $2$ | $\frac{2\sqrt{3}}{3}$ | $\sqrt{3}$ |
| $45^\circ$ | $\frac{\pi}{4}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ | $\sqrt{2}$ | $\sqrt{2}$ | $1$ |
| $60^\circ$ | $\frac{\pi}{3}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ | $\frac{2\sqrt{3}}{3}$ | $2$ | $\frac{\sqrt{3}}{3}$ |

---
## Applications of Trigonometry of Right Triangles

> [!info] Solving a Triangle
> To **solve** a triangle means to determine all six parts (three sides and three angles) from known information.

> [!example] Example 4: Solving a Right Triangle
> Solve right triangle $ABC$ with $\angle A = 30^\circ$ and hypotenuse $c = 12$.
>
> **1. Find Angle $B$**
> The sum of angles in a triangle is $180^\circ$. Since $\angle C = 90^\circ$:
> $$ \angle B = 180^\circ - 90^\circ - 30^\circ = 60^\circ $$
>
> **2. Find Side $a$ (Opposite)**
> Use the sine ratio:
> $$
> \begin{aligned}
> \sin 30^\circ &= \frac{\text{opposite}}{\text{hypotenuse}} \\
> \frac{1}{2} &= \frac{a}{12} \\
> a &= 12 \left( \frac{1}{2} \right) = 6 \quad \checkmark
> \end{aligned}
> $$
>
> **3. Find Side $b$ (Adjacent)**
> Use the cosine ratio:
> $$
> \begin{aligned}
> \cos 30^\circ &= \frac{\text{adjacent}}{\text{hypotenuse}} \\
> \frac{\sqrt{3}}{2} &= \frac{b}{12} \\
> b &= 12 \left( \frac{\sqrt{3}}{2} \right) = 6\sqrt{3} \quad \checkmark
> \end{aligned}
> $$
> ![[Pasted image 20260529184351.png|center]]

**In short:**
![[Pasted image 20260529184450.png]]

---

## Applications of Trigonometry

> [!info] Problem Setup
> Observer is $500$ ft from building base.
> - Angle to top of building: $24^\circ$. Let height be $h$.
> - Angle to top of flagpole: $27^\circ$. Let total height (building + pole) be $k$.
> 
![[Pasted image 20260529185023.png|center]]

> [!example] Example 6: A Problem Involving Right Triangles
> Find the height of the building ($h$) and the length of the flagpole.
>
> **1. Height of Building ($h$)**
> $$
> \begin{aligned}
> \tan 24^\circ &= \frac{h}{500} \\
> h &= 500 \tan 24^\circ \\
> &\approx 500(0.4452) \approx 223 \quad \leftarrow \text{building height}
> \end{aligned}
> $$
>
> **2. Total Height to Top of Pole ($k$)**
> $$
> \begin{aligned}
> \tan 27^\circ &= \frac{k}{500} \\
> k &= 500 \tan 27^\circ \\
> &\approx 500(0.5095) \approx 255 \quad \leftarrow \text{total height}
> \end{aligned}
> $$
>
> **3. Length of Flagpole**
> Subtract building height from total height:
> $$ k - h \approx 255 - 223 = 32 \quad \leftarrow \text{flagpole length} $$


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 496)