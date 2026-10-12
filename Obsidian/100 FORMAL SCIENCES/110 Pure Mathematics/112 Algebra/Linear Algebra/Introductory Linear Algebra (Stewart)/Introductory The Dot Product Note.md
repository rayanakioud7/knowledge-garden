Date: 2026-06-09
Tags:  [[Mathematics]], [[Algebra]]

---
## The Dot Product

> [!info] Definition of the Dot Product
> If $\mathbf{u} = \langle a_1, a_2 \rangle$ and $\mathbf{v} = \langle b_1, b_2 \rangle$, their **dot product** is:
> $$ \mathbf{u} \cdot \mathbf{v} = a_1 b_1 + a_2 b_2 $$
> *Note: The result is a **scalar** (real number), not a vector.*

> [!example] Example 1: Calculating Dot Products
> **(a)** If $\mathbf{u} = \langle 3, -2 \rangle$ and $\mathbf{v} = \langle 4, 5 \rangle$:
> $$ \mathbf{u} \cdot \mathbf{v} = (3)(4) + (-2)(5) = 12 - 10 = 2 $$
>
> **(b)** If $\mathbf{u} = 2\mathbf{i} + \mathbf{j}$ and $\mathbf{v} = 5\mathbf{i} - 6\mathbf{j}$:
> $$ \mathbf{u} \cdot \mathbf{v} = (2)(5) + (1)(-6) = 10 - 6 = 4 $$

---

> [!info] Properties of the Dot Product
> 1.  **Commutative**: $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$
> 2.  **Scalar Multiplication**: $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v}) = \mathbf{u} \cdot (c\mathbf{v})$
> 3.  **Distributive**: $(\mathbf{u} + \mathbf{v}) \cdot \mathbf{w} = \mathbf{u} \cdot \mathbf{w} + \mathbf{v} \cdot \mathbf{w}$
> 4.  **Magnitude**: $|\mathbf{u}|^2 = \mathbf{u} \cdot \mathbf{u}$

---

> [!info] The Dot Product Theorem
> If $\theta$ is the angle between two nonzero vectors $\mathbf{u}$ and $\mathbf{v}$:
> $$ \mathbf{u} \cdot \mathbf{v} = |\mathbf{u}| |\mathbf{v}| \cos \theta $$
>
> *Proof*: Apply Law of Cosines to triangle formed by vectors $\mathbf{u}, \mathbf{v},$ and $\mathbf{u}-\mathbf{v}$.

**Finding the Angle**:
$$ \cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}| |\mathbf{v}|} $$

> [!example] Example 2: Finding the Angle Between Two Vectors
> Find angle between $\mathbf{u} = \langle 2, 5 \rangle$ and $\mathbf{v} = \langle 4, -3 \rangle$.
>
> $$ \mathbf{u} \cdot \mathbf{v} = (2)(4) + (5)(-3) = 8 - 15 = -7 $$
> $$ |\mathbf{u}| = \sqrt{4+25} = \sqrt{29}, \quad |\mathbf{v}| = \sqrt{16+9} = 5 $$
> $$ \cos \theta = \frac{-7}{5\sqrt{29}} \implies \theta = \cos^{-1}\left(\frac{-7}{5\sqrt{29}}\right) \approx 105.1^\circ $$

---

> [!info] Orthogonal Vectors
> Two nonzero vectors $\mathbf{u}$ and $\mathbf{v}$ are **perpendicular (orthogonal)** if and only if:
> $$ \mathbf{u} \cdot \mathbf{v} = 0 $$
> *(Because $\cos(\pi/2) = 0$)*

> [!example] Example 3: Checking for Perpendicular Vectors
> **(a)** $\mathbf{u} = \langle 3, 5 \rangle, \mathbf{v} = \langle 2, -8 \rangle$:
> $$ \mathbf{u} \cdot \mathbf{v} = 6 - 40 = -34 \neq 0 \quad (\text{Not perpendicular}) $$
>
> **(b)** $\mathbf{u} = \langle 2, 1 \rangle, \mathbf{v} = \langle -1, 2 \rangle$:
> $$ \mathbf{u} \cdot \mathbf{v} = -2 + 2 = 0 \quad (\text{Perpendicular}) $$

---
## Component, Projection, and Work

> [!info] The Component of $\mathbf{u}$ Along $\mathbf{v}$
> Also called the **scalar projection**. It represents the magnitude of the portion of $\mathbf{u}$ that points in the direction of $\mathbf{v}$.
> $$ \text{comp}_{\mathbf{v}} \mathbf{u} = |\mathbf{u}| \cos \theta = \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{v}|} $$
> *Note: This is a **scalar**, not a vector. It is negative if $\pi/2 < \theta \le \pi$.*

![[Pasted image 20260609142122.png|center|546]]

> [!example] Example 4: Resolving a Force into Components
> A 3000 lb car is on a driveway inclined at $15^\circ$.
> - **Force rolling car down (parallel to incline)**:
>   $$ |\mathbf{u}| = 3000 \cos(75^\circ) \approx 776 \text{ lb} $$
>   *(Angle between weight vector and incline is $90-15=75^\circ$)*
> - **Force on driveway (perpendicular)**:
>   $$ |\mathbf{v}| = 3000 \cos(15^\circ) \approx 2898 \text{ lb} $$

![[Pasted image 20260609142149.png|center]]

> [!example] Example 5: Finding Components
> Let $\mathbf{u} = \langle 1, 4 \rangle$ and $\mathbf{v} = \langle -2, 1 \rangle$.
> $$ \text{comp}_{\mathbf{v}} \mathbf{u} = \frac{(1)(-2) + (4)(1)}{\sqrt{(-2)^2 + 1^2}} = \frac{2}{\sqrt{5}} $$

---

> [!info] The Vector Projection of $\mathbf{u}$ Onto $\mathbf{v}$
> Denoted $\text{proj}_{\mathbf{v}} \mathbf{u}$. It is a **vector** parallel to $\mathbf{v}$ with length equal to the component of $\mathbf{u}$ along $\mathbf{v}$.
> $$ \text{proj}_{\mathbf{v}} \mathbf{u} = (\text{comp}_{\mathbf{v}} \mathbf{u}) \frac{\mathbf{v}}{|\mathbf{v}|} = \left( \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{v}|^2} \right) \mathbf{v} $$

**Resolving Vectors**: Any vector $\mathbf{u}$ can be written as $\mathbf{u} = \mathbf{u}_1 + \mathbf{u}_2$ where:
- $\mathbf{u}_1 = \text{proj}_{\mathbf{v}} \mathbf{u}$ (parallel to $\mathbf{v}$)
- $\mathbf{u}_2 = \mathbf{u} - \text{proj}_{\mathbf{v}} \mathbf{u}$ (orthogonal to $\mathbf{v}$)

![[Pasted image 20260609142345.png|center]]

> [!example] Example 6: Resolving a Vector into Orthogonal Vectors
> Let $\mathbf{u} = \langle -2, 9 \rangle$ and $\mathbf{v} = \langle -1, 2 \rangle$.
>
> **(a) Find $\text{proj}_{\mathbf{v}} \mathbf{u}$**:
> $$ \mathbf{u} \cdot \mathbf{v} = (-2)(-1) + (9)(2) = 20 $$
> $$ |\mathbf{v}|^2 = (-1)^2 + 2^2 = 5 $$
> $$ \text{proj}_{\mathbf{v}} \mathbf{u} = \frac{20}{5} \langle -1, 2 \rangle = 4\langle -1, 2 \rangle = \langle -4, 8 \rangle $$
>
> **(b) Resolve $\mathbf{u}$**:
> - Parallel part: $\mathbf{u}_1 = \langle -4, 8 \rangle$
> - Orthogonal part: $\mathbf{u}_2 = \mathbf{u} - \mathbf{u}_1 = \langle -2, 9 \rangle - \langle -4, 8 \rangle = \langle 2, 1 \rangle$

---

### Work

> [!info] Work Formula
> If a constant force $\mathbf{F}$ moves an object along displacement vector $\mathbf{D}$, the work $W$ is:
> $$ W = \mathbf{F} \cdot \mathbf{D} = |\mathbf{F}| |\mathbf{D}| \cos \theta $$
> *(Only the component of force in the direction of motion does work).*

> [!example] Example 7: Calculating Work
> Force $\mathbf{F} = \langle 2, 3 \rangle$ moves object from $(1, 3)$ to $(5, 9)$.
> - Displacement $\mathbf{D} = \langle 5-1, 9-3 \rangle = \langle 4, 6 \rangle$.
> - Work $W = \mathbf{F} \cdot \mathbf{D} = (2)(4) + (3)(6) = 8 + 18 = 26$ ft-lb.

![[Pasted image 20260609142411.png|center]]

> [!example] Example 8: Calculating Work (Angle)
> Child pulls wagon with 20 lb force at $60^\circ$ angle for 100 ft.
> - Displacement $\mathbf{D} = 100\mathbf{i}$.
> - Force $\mathbf{F} = 20(\cos 60^\circ \mathbf{i} + \sin 60^\circ \mathbf{j}) = 10\mathbf{i} + 10\sqrt{3}\mathbf{j}$.
> - Work $W = \mathbf{F} \cdot \mathbf{D} = (10)(100) + (10\sqrt{3})(0) = 1000$ ft-lb.

![[Pasted image 20260609142538.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 647)