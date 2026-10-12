Date: 2026-05-10
Tags: [[Mathematics]], [[Foundations]], [[Prerequisites]], [[Geometry]]

---

# 1. Use the [[Pythagoras|Pythagorean]] Theorem and Its Converse

The *Pythagorean Theorem* is a statement about right triangles. A right triangle is one that contains a **right angle**, that is, an angle of 90°. 
The side of the triangle opposite the 90° angle is called the *hypotenuse*; the remaining two sides are called *legs*.
- We  use $c$ to represent the length of the *hypotenuse* 
- $a$ and $b$ to represent the lengths of the *legs*. 

![[Pasted image 20260510112115.png|center|342]]

> [!info] Pythagorean Theorem
> In a right triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the legs.
> $$c^2=a^2+b^2$$
> 

## Example:

**Given:** right triangle with legs $a = 4$ and $b = 3$, find hypotenuse $c$.

$$c^2 = a^2 + b^2$$
$$c^2 = 4^2 + 3^2 = 16 + 9 = 25$$
$$c = \sqrt{25} = 5$$

> [!tip] Converse of the Pythagorean Theorem
> In a triangle, if the square of the length of one side equals the sum of the squares of the lengths of the other two sides, the triangle is a right triangle. 
> The 90° angle is opposite the longest side.

## Example 2: Verifying That a Triangle Is a Right Triangle

**Given:** Triangle with side lengths $5$, $12$, and $13$.  
Show that it is a right triangle and identify the hypotenuse.  

**Solution:**  
Square the lengths of the sides:  
$$5^2 = 25, \quad 12^2 = 144, \quad 13^2 = 169$$
Notice that the sum of the first two squares equals the third square:  
$$25 + 144 = 169$$
Hence, the triangle is a right triangle. The longest side, $13$, is the hypotenuse.

![[Pasted image 20260510113106.png|center|333]]

## Example 3: Applying the Pythagorean Theorem

![[Pasted image 20260510113816.png|center|513]]

**Given:** Burj Khalifa observation deck at $h = 442 \text{ m} = 0.442 \text{ km}$ above ground, Earth's radius $R = 6371 \text{ km}$, find distance $d$ to the horizon

![[Pasted image 20260510113744.png|center|324]]

$$d^2 + R^2 = (R + h)^2$$
$$d^2 = \left(6371 + 0.442\right)^2 - (6371)^2 \approx 5632.2$$
$$d = \sqrt{5632.2} \approx \boxed{75.05 \text{ km}}$$

A person can see almost **75 km** from the observation deck.

---
# 2. Know Geometry Formulas

## Rectangle

![[Pasted image 20260510114957.png|left||222]] For a rectangle of length $l$ and width $w$ ,

$Area=l\cdot w$

$Perimeter=2(l+w)$



> The area of a square can be calculated using its diagonal with the formula:
$$\text{Area}_{\text{square}} = \frac{d^2}{2}$$
## Triangle

![[Pasted image 20260510115232.png|left|220]]For a triangle with base $b$ and altitude $h$

$Area=\frac{1}{2}b\cdot h$




## Circle

![[Pasted image 20260510120311.png|left|208]] For a circle of radius $r$ (diameter $d=2r$),

$Area=\pi \cdot r^2$

$Circumference= 2\pi\cdot r=\pi\cdot d$


## Closed Box

![[Pasted image 20260510120616.png|left]] For a closed box of length $l\,$, width $w\,$, and height $h$. 

$Volume=l\cdot w\cdot h$
$\text{Surface area}=2lh+2wh+2lw$

## Sphere

![[Pasted image 20260510120906.png|left|164]] For a sphere of radius $r$

$Volume=\frac{4}{3}\pi \cdot r^3$

$\text{Surface area}=4\pi\cdot r^2$


## Cylinder

![[Pasted image 20260510121202.png|left|147]] For a right circular cylinder of height $h$ and radius $r$


$Volume = \pi\cdot r^2 \cdot h$

$\text{Surface area}=2\pi \cdot r^2+2\pi \cdot r\cdot h$



## Example

![[Pasted image 20260510122055.png|left|127]] **Given:**

triangle with base $b = 4$ cm and height $h = 6$ cm, semicircle with diameter $d = 4$ cm so radius $r = 2$ cm.

$\text{Area} = \text{Area of triangle} + \text{Area of semicircle}$

$$= \frac{1}{2}bh + \frac{1}{2}\pi r^2 = \frac{1}{2}(4)(6) + \frac{1}{2}\pi \cdot 2^2$$

$$= 12 + 2\pi \approx \boxed{18.28 \text{ cm}^2}$$
---

# 3. Understand Congruent Triangles and Similar Triangles

## Congruent Triangles

> [!NOTE] Definition
> Two triangles are **congruent** if each of the corresponding angles is the same measure and each of the corresponding sides is the same length.


> Two triangles are **congruent** if they have the same size and shape.

### Example

These 2 triangles are congruent since the angles are equal and the lengths of the sides also equal
$$a=d\quad b=e \quad c=f$$

![[Pasted image 20260510123740.png]]

| Case             | Condition                              | Abbreviation |
| ---------------- | -------------------------------------- | ------------ |
| Angle-Side-Angle | Two angles equal + included side equal | **ASA**      |
| Side-Side-Side   | All three corresponding sides equal    | **SSS**      |
| Side-Angle-Side  | Two sides equal + included angle equal | **SAS**      |

> [!example]
> **(a) ASA:** two triangles with angles $80°$, $40°$ and included side $= 10$
>
> **(b) SSS:** two triangles with sides $15$, $20$, $8$
>
> **(c) SAS:** two triangles with sides $7$, $8$ and included angle $= 40°$
> 
![[Pasted image 20260510124217.png]]

## Similar Triangles

> [!NOTE] Definition
> Two triangles are **similar** if the corresponding angles are equal and the lengths of the corresponding sides are proportional.

> Two triangles are similar if they have the same shape, but (possibly) different sizes.

### Example

The corresponding figure below shows that the two triangles have equal angles but the length of the sides are proportional because the ratio of the second one is twice as long as the first triangle
$$\frac{d}{a}=\frac{e}{b}=\frac{f}{c}=2$$

![[Pasted image 20260510124546.png|center|510]]


| Case | Condition | Abbreviation |
|------|-----------|--------------|
| Angle-Angle | Two corresponding angles equal | **AA** |
| Side-Side-Side | All three sides proportional | **SSS** |
| Side-Angle-Side | Two sides proportional + included angle equal | **SAS** |

> [!example]
> **(a) AA:** two triangles with angles $80°$ and $35°$
>
> **(b) SSS:** sides are proportional:
> $$\frac{10}{30} = \frac{5}{15} = \frac{6}{18} = \frac{1}{3}$$
>
> **(c) SAS:** sides are proportional and included angle equal $120°$:
> $$\frac{4}{6} = \frac{12}{18} = \frac{2}{3}$$
> 
> ![[Pasted image 20260510124924.png]]

## Example

**Given:** two similar triangles, find missing length $x$ and angles $A$, $B$, $C$.

![[Pasted image 20260510125141.png]]

Since triangles are similar, corresponding angles are equal: $$A = 90°, \quad B = 60°, \quad C = 30°$$

Corresponding sides are proportional: $$\frac{3}{5} = \frac{6}{x}$$
$$5x \cdot \frac{3}{5} = 5x \cdot \frac{6}{x}$$

$$3x = 30 \implies \boxed {x = 10}$$

---

## Parallel Lines

> [!info] Definitions
> - **Opposite angles** (vertex angles): Equal angles formed when two lines intersect.
> - **Parallel lines**: Two lines in a plane that never intersect.
> - **Transversal**: A line that intersects two other lines.

![[Pasted image 20260517135001.png]]

**Angle Pairs**

| Type | Visual Position |
| :--- | :--- |
| **Corresponding angles** | Same side of transversal, same relative position |
| **Alternate interior angles** | Between lines, opposite sides of transversal |
| **Co-interior angles** | Between lines, same side of transversal |

![[Pasted image 20260517134936.png]]

> [!info] Parallel Lines Theorem
> Two lines are parallel $\iff$ **corresponding angles** formed by a transversal are congruent.

**Equivalent Conditions**
Two lines are parallel if any of the following hold:
- Alternate interior angles are equal
- Alternate exterior angles are equal
- Sum of co-interior angles is $180^\circ$

> [!example] Example 6: Parallel Lines
> Prove: Alternate interior angles are equal $\iff$ lines are parallel.

**Proof**
Let transversal intersect lines forming angles $\angle 1, \angle 2, \angle 3$ where $\angle 1, \angle 3$ are alternate interior and $\angle 2$ is vertically opposite to $\angle 3$ (and corresponding to $\angle 1$).

$(\Rightarrow)$ Assume $\angle 1 = \angle 3$.
$$ \angle 2 = \angle 3 \quad \leftarrow \text{opposite angles} $$
$$ \angle 1 = \angle 2 \quad \leftarrow \text{substitution} $$
$\implies$ Corresponding angles equal $\implies$ Lines parallel.

$(\Leftarrow)$ Assume lines parallel.
$$ \angle 1 = \angle 2 \quad \leftarrow \text{corresponding angles} $$
$$ \angle 2 = \angle 3 \quad \leftarrow \text{opposite angles} $$
$$ \angle 1 = \angle 3 \quad \leftarrow \text{substitution} $$
$\implies$ Alternate interior angles equal.

![[Pasted image 20260517135124.png]]

---
## Exterior Angle Theorem

**Definition**
An **exterior angle** of a triangle is the angle between a side and an outward extended adjacent side.

> [!example] Example 7: Exterior Angle Theorem
> Prove:
> (a) The sum of the angles of a triangle is $180^\circ$.
> (b) An exterior angle of a triangle is equal to the sum of the two opposite interior angles.

**Proof**

(a) Let a triangle have interior angles $\angle 1, \angle 2, \angle 3$.
Construct a line parallel to the side between $\angle 1$ and $\angle 2$ passing through the vertex of $\angle 3$. Let the angles formed on this line be $\angle a$ and $\angle b$.

![[Pasted image 20260517135638.png]]

$$ \begin{aligned} \angle 1 &= \angle a & \leftarrow \text{alternate interior angles} \\ \angle 2 &= \angle b & \leftarrow \text{alternate interior angles} \\ \angle a + \angle 3 + \angle b &= 180^\circ & \leftarrow \text{straight angle} \end{aligned} $$

Substitute $\angle a$ and $\angle b$:
$$ \angle 1 + \angle 3 + \angle 2 = 180^\circ \quad \checkmark $$

(b) Let $\angle e$ be an exterior angle adjacent to interior angle $\angle 2$.

![[Pasted image 20260517135646.png]]

$$ \begin{aligned} \angle 1 + \angle 2 + \angle 3 &= 180^\circ & \leftarrow \text{from part (a)} \\ \angle 2 + \angle e &= 180^\circ & \leftarrow \text{straight angle} \end{aligned} $$

Equating the sums:
$$ \angle 1 + \angle 2 + \angle 3 = \angle e + \angle 2 $$
Subtract $\angle 2$:
$$ \angle e = \angle 1 + \angle 3 \quad \checkmark $$
---
## Quadrilaterals and Parallelograms

| Shape | Definition |
| :--- | :--- |
| **Quadrilateral** | Four-sided figure |
| **Trapezoid** | One pair of parallel sides |
| **Parallelogram** | Two pairs of parallel sides |

![[Pasted image 20260517141321.png]]

> [!example] Example 8: Opposite Sides of a Parallelogram Are Congruent
> **Prove:** Opposite sides of a parallelogram are congruent.

**Proof**
Let $ABCD$ be a parallelogram with diagonal $AC$.
![[Pasted image 20260517141406.png]]

$$ \begin{aligned} \angle 1 &= \angle 3 \quad \leftarrow \text{alternate interior angles } (AB \parallel DC) \\ \angle 2 &= \angle 4 \quad \leftarrow \text{alternate interior angles } (AD \parallel BC) \end{aligned} $$

$\triangle ABC \cong \triangle CDA$ by ASA (side $AC$ is common).
$$ \implies AB = CD \quad \text{and} \quad DA = BC $$
---

> [!info] Diagonals of a Parallelogram
> A quadrilateral is a parallelogram **if and only if** the diagonals bisect each other.

**Proof**
Let diagonals of quadrilateral $ABCD$ intersect at $E$.

![[Pasted image 20260517141552.png]]

$(\Rightarrow)$ Assume $ABCD$ is a parallelogram.
$$ \begin{aligned} \angle ABE &= \angle CDE \quad \leftarrow \text{alternate interior angles} \\ \angle BAE &= \angle DCE \quad \leftarrow \text{alternate interior angles} \\ AB &= CD \quad \leftarrow \text{from Example 8} \end{aligned} $$
$\triangle AEB \cong \triangle CED$ by ASA.
$$ \implies AE = CE \quad \text{and} \quad BE = DE $$

$(\Leftarrow)$ Assume diagonals bisect each other ($AE = CE, BE = DE$).
$$ \angle AEB = \angle CED \quad \leftarrow \text{opposite angles} $$
$\triangle AEB \cong \triangle CED$ by SAS.
$$ \implies \angle ABE = \angle CDE \quad \leftarrow \text{alternate interior angles} $$
$$ \implies AB \parallel CD $$
Analogous argument for $\triangle AED$ and $\triangle CEB$ shows $AD \parallel CB$.
Thus, $ABCD$ is a parallelogram.

---

## Circles

A **chord** of a circle is a line segment whose endpoints lie on the circle.
An angle is **subtended** by a chord if the chord forms the "base" of the angle.

![[Pasted image 20260517141931.png]]
D
> [!info] Circles and Chords
> 1. The angle at the center of a circle subtended by a chord is **twice** any angle on the circle subtended by the same chord.
>    $$ \text{Angle at Center} = 2 \times \text{Angle at Circumference} $$
> 2. Chords of equal length subtend equal angles.

**Proof (Angle at Center)**
Let $\angle ABC$ be subtended by chord $AC$ on the circle, and $\angle AOC$ be subtended at the center $O$.

![[Pasted image 20260517142012.png]]

Construct diameter $BD$. $\triangle AOB$ is isosceles (radii $OA=OB$), so base angles are equal 
($\angle a$).
By Exterior Angle Theorem:
$$ \angle c = \angle a + \angle a = 2\angle a \quad \leftarrow \text{Exterior Angle} $$
Similarly, for the other side:
$$ \angle d = 2\angle b $$
Total angle at center:
$$ \begin{aligned} \angle AOC &= \angle c + \angle d \\ &= 2\angle a + 2\angle b \\ &= 2(\angle a + \angle b) \\ &= 2\angle ABC \quad \checkmark \end{aligned} $$

> [!info] Triangle Inscribed in a Semicircle
> An angle subtended by a **diameter** of a circle is a **right angle** ($90^\circ$).
> Thus, a triangle inscribed in a semicircle is a right triangle.
> 
![[Pasted image 20260517142231.png|center]]

---

## Tangent Lines

A **tangent** to a circle is a line that intersects the circle at **exactly one point**.

> [!info] Tangent Lines to Circles
> A line is tangent to a circle at point $P$ **if and only if** the line is perpendicular to the radius drawn to point $P$.
> 
> ![[Pasted image 20260517142352.png|center]]



> [!example] Example 10: Tangent to a Circle
> In Figure, line $CD$ is tangent to the circle at $C$, and $AC$ is a diameter. Show that $\triangle ACD \sim \triangle ABC$.

**Solution**
![[Pasted image 20260517142430.png]]

1.  $\angle ABC = 90^\circ$ $\leftarrow$ Angle subtended by diameter (Semicircle Theorem).
2.  $\angle ACD = 90^\circ$ $\leftarrow$ Tangent perpendicular to radius $AC$.
3.  $\angle BAC$ is common to both triangles.

Since two angles are congruent, the triangles are similar:
$$ \triangle ACD \sim \triangle ABC $$

---
## ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. A14 - A19)