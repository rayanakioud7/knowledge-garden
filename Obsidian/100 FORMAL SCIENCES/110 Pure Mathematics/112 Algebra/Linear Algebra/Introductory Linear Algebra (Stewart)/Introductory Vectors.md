Date: 2026-06-09
Tags: [[Mathematics]], [[Algebra]]

---

## Vectors

> [!info] Geometric Description of Vectors
> A **vector** is a directed line segment representing a quantity with magnitude and direction (e.g., displacement, velocity, force).
> - **Notation**: $\vec{AB}$ or boldface $\mathbf{u}$. $A$ is initial point, $B$ is terminal point.
> - **Magnitude (Length)**: Denoted $|\vec{AB}|$ or $|\mathbf{u}|$.
> - **Equality**: Two vectors are equal if they have the same magnitude and direction (position doesn't matter).

**Vector Operations (Geometric)**:
- **Addition ($\mathbf{u} + \mathbf{v}$)**:
    - *Triangle Rule*: Place initial point of $\mathbf{v}$ at terminal point of $\mathbf{u}$. Sum is vector from start of $\mathbf{u}$ to end of $\mathbf{v}$.
    - *Parallelogram Rule*: Place initial points together. Sum is the diagonal of the parallelogram formed by $\mathbf{u}$ and $\mathbf{v}$.
- **Scalar Multiplication ($c\mathbf{v}$)**:
    - Magnitude: $|c| |\mathbf{v}|$.
    - Direction: Same as $\mathbf{v}$ if $c > 0$; opposite if $c < 0$.
- **Subtraction ($\mathbf{u} - \mathbf{v}$)**: Defined as $\mathbf{u} + (-\mathbf{v})$. Geometrically, it is the other diagonal of the parallelogram formed by $\mathbf{u}$ and $\mathbf{v}$.

![[Pasted image 20260609011957.png]]

---

> [!info] Vectors in the Coordinate Plane (Component Form)
> A vector $\mathbf{v}$ can be represented analytically by its components $\langle a_1, a_2 \rangle$, where $a_1$ is horizontal change and $a_2$ is vertical change.
>
> **Component Form from Points**:
> If vector $\mathbf{v}$ has initial point $P(x_1, y_1)$ and terminal point $Q(x_2, y_2)$:
> $$ \mathbf{v} = \langle x_2 - x_1, y_2 - y_1 \rangle $$
>
> **Magnitude**:
> $$ |\mathbf{v}| = \sqrt{a_1^2 + a_2^2} $$

![[Pasted image 20260609012110.png|center]]

![[Pasted image 20260609012143.png]]

---

> [!example] Example 1: Describing Vectors in Component Form
> **(a)** Find component form of $\mathbf{u}$ with initial point $(-2, 5)$ and terminal point $(3, 7)$.
> $$ \mathbf{u} = \langle 3 - (-2), 7 - 5 \rangle = \langle 5, 2 \rangle $$
>
> **(b)** If $\mathbf{v} = \langle 3, 7 \rangle$ starts at $(2, 4)$, find terminal point $(x, y)$.
> $$ \langle x - 2, y - 4 \rangle = \langle 3, 7 \rangle \implies x-2=3, y-4=7 \implies (5, 11) $$
>
> **(c)** Sketch $\mathbf{w} = \langle 2, 3 \rangle$ at various initial points. (All arrows are parallel, length $\sqrt{13}$, pointing up-right).

![[Pasted image 20260609012204.png|center]]

---

> [!example] Example 2: Magnitudes of Vectors
> Find magnitude of each vector.
>
> **(a)** $\mathbf{u} = \langle 2, -3 \rangle$
> $$ |\mathbf{u}| = \sqrt{2^2 + (-3)^2} = \sqrt{4+9} = \sqrt{13} $$
>
> **(b)** $\mathbf{v} = \langle 5, 0 \rangle$
> $$ |\mathbf{v}| = \sqrt{5^2 + 0^2} = 5 $$
>
> **(c)** $\mathbf{w} = \langle \frac{3}{5}, \frac{4}{5} \rangle$
> $$ |\mathbf{w}| = \sqrt{\left(\frac{3}{5}\right)^2 + \left(\frac{4}{5}\right)^2} = \sqrt{\frac{9}{25} + \frac{16}{25}} = \sqrt{1} = 1 $$
> *(Note: This is a unit vector).*

---
## Algebraic Operations on Vectors

> [!info] Algebraic Operations on Vectors
> If $\mathbf{u} = \langle a_1, a_2 \rangle$ and $\mathbf{v} = \langle b_1, b_2 \rangle$:
> $$
> \begin{aligned}
> \mathbf{u} + \mathbf{v} &= \langle a_1 + b_1, a_2 + b_2 \rangle \\
> \mathbf{u} - \mathbf{v} &= \langle a_1 - b_1, a_2 - b_2 \rangle \\
> c\mathbf{u} &= \langle ca_1, ca_2 \rangle \quad (c \in \mathbb{R})
> \end{aligned}
> $$

![[Pasted image 20260609012718.png|center]]

> [!example] Example 3: Operations with Vectors
> Given $\mathbf{u} = \langle 2, -3 \rangle$ and $\mathbf{v} = \langle -1, 2 \rangle$:
> $$
> \begin{aligned}
> \mathbf{u} + \mathbf{v} &= \langle 2+(-1), -3+2 \rangle = \langle 1, -1 \rangle \\
> \mathbf{u} - \mathbf{v} &= \langle 2-(-1), -3-2 \rangle = \langle 3, -5 \rangle \\
> 2\mathbf{u} &= 2\langle 2, -3 \rangle = \langle 4, -6 \rangle \\
> -3\mathbf{v} &= -3\langle -1, 2 \rangle = \langle 3, -6 \rangle \\
> 2\mathbf{u} + 3\mathbf{v} &= \langle 4, -6 \rangle + \langle -3, 6 \rangle = \langle 1, 0 \rangle
> \end{aligned}
> $$

---

> [!info] Properties of Vectors
> **Vector Addition**:
> - Commutative: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
> - Associative: $\mathbf{u} + (\mathbf{v} + \mathbf{w}) = (\mathbf{u} + \mathbf{v}) + \mathbf{w}$
> - Identity: $\mathbf{u} + \mathbf{0} = \mathbf{u}$
> - Inverse: $\mathbf{u} + (-\mathbf{u}) = \mathbf{0}$
>
> **Scalar Multiplication**:
> - Distributive: $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$ and $(c+d)\mathbf{u} = c\mathbf{u} + d\mathbf{u}$
> - Associative: $(cd)\mathbf{u} = c(d\mathbf{u})$
> - Identity: $1\mathbf{u} = \mathbf{u}$
> - Zero property: $0\mathbf{u} = \mathbf{0}, c\mathbf{0} = \mathbf{0}$
>
> **Length**: $|c\mathbf{u}| = |c| |\mathbf{u}|$

---

### Unit Vectors $\mathbf{i}$ and $\mathbf{j}$

A **unit vector** has length 1. Two standard unit vectors are:
$$ \mathbf{i} = \langle 1, 0 \rangle \quad \mathbf{j} = \langle 0, 1 \rangle $$

> [!info] Vectors in Terms of $\mathbf{i}$ and $\mathbf{j}$
> Any vector $\mathbf{v} = \langle a_1, a_2 \rangle$ can be written as:
> $$ \mathbf{v} = a_1 \mathbf{i} + a_2 \mathbf{j} $$

![[Pasted image 20260609012931.png|center]]

> [!example] Example 4: Vectors in Terms of $\mathbf{i}$ and $\mathbf{j}$
> **(a)** Write $\mathbf{u} = \langle 5, -8 \rangle$ in terms of $\mathbf{i}$ and $\mathbf{j}$.
> $$ \mathbf{u} = 5\mathbf{i} - 8\mathbf{j} $$
>
> **(b)** If $\mathbf{u} = 3\mathbf{i} + 2\mathbf{j}$ and $\mathbf{v} = -\mathbf{i} + 6\mathbf{j}$, find $2\mathbf{u} + 5\mathbf{v}$.
> $$
> \begin{aligned}
> 2\mathbf{u} + 5\mathbf{v} &= 2(3\mathbf{i} + 2\mathbf{j}) + 5(-\mathbf{i} + 6\mathbf{j}) \\
> &= (6\mathbf{i} + 4\mathbf{j}) + (-5\mathbf{i} + 30\mathbf{j}) \\
> &= \mathbf{i} + 34\mathbf{j}
> \end{aligned}
> $$

---

### Horizontal and Vertical Components

If a vector $\mathbf{v}$ has magnitude $|\mathbf{v}|$ and direction angle $\theta$ (standard position):

> [!info] Component Form from Magnitude and Direction
> $$ \mathbf{v} = \langle |\mathbf{v}| \cos \theta, |\mathbf{v}| \sin \theta \rangle = |\mathbf{v}| \cos \theta \, \mathbf{i} + |\mathbf{v}| \sin \theta \, \mathbf{j} $$

![[Pasted image 20260609013009.png|center]]

> [!example] Example 5: Components and Direction of a Vector
> **(a)** Vector $\mathbf{v}$ has length 8 and direction $\pi/3$.
> $$
> \begin{aligned}
> a_1 &= 8 \cos(\pi/3) = 4 \\
> a_2 &= 8 \sin(\pi/3) = 4\sqrt{3} \\
> \mathbf{v} &= 4\mathbf{i} + 4\sqrt{3}\mathbf{j}
> \end{aligned}
> $$
>
> **(b)** Find direction of $\mathbf{u} = -\sqrt{3}\mathbf{i} + \mathbf{j}$.
> $$ \tan \theta = \frac{1}{-\sqrt{3}} = -\frac{\sqrt{3}}{3} $$
> Reference angle is $\pi/6$. Since terminal point is in Quadrant II (x negative, y positive):
> $$ \theta = \pi - \frac{\pi}{6} = \frac{5\pi}{6} $$

![[Pasted image 20260609013102.png|center]]

---
## Using Vectors to Model Velocity and Force

> [!info] Velocity Vectors
> The **true velocity** $\mathbf{w}$ of an object moving in a medium (like wind or water) is the sum of the object's velocity relative to the medium ($\mathbf{v}$) and the velocity of the medium ($\mathbf{u}$).
> $$ \mathbf{w} = \mathbf{u} + \mathbf{v} $$

![[Pasted image 20260609014347.png]]

> [!example] Example 6: The True Speed and Direction of an Airplane
> Airplane heads due North at 300 mi/h. Wind flows N 30° E at 40 mi/h.
>
> **(a) Component Form**:
> - Airplane relative to air ($\mathbf{v}$): Due North $\implies$ angle $90^\circ$.
>   $$ \mathbf{v} = 0\mathbf{i} + 300\mathbf{j} = 300\mathbf{j} $$
> - Wind ($\mathbf{u}$): N 30° E $\implies$ angle $90^\circ - 30^\circ = 60^\circ$ from positive x-axis.
>   $$ \mathbf{u} = 40(\cos 60^\circ \mathbf{i} + \sin 60^\circ \mathbf{j}) = 20\mathbf{i} + 20\sqrt{3}\mathbf{j} \approx 20\mathbf{i} + 34.64\mathbf{j} $$
>
> **(b) True Velocity ($\mathbf{w}$)**:
> $$ \mathbf{w} = \mathbf{u} + \mathbf{v} = 20\mathbf{i} + (20\sqrt{3} + 300)\mathbf{j} \approx 20\mathbf{i} + 334.64\mathbf{j} $$
>
> **(c) True Speed and Direction**:
> - Speed: $|\mathbf{w}| = \sqrt{20^2 + 334.64^2} \approx 335.2$ mi/h.
> - Direction: $\tan \theta = \frac{334.64}{20} \approx 16.732 \implies \theta \approx 86.6^\circ$.
>   This is N $3.4^\circ$ E (since $90^\circ - 86.6^\circ = 3.4^\circ$).

---

> [!example] Example 7: Calculating a Heading
> Boat speed 10 mi/h. River flows East at 5 mi/h. Find heading to land directly opposite.
>
> **Solution**:
> - River velocity: $\mathbf{u} = 5\mathbf{i}$.
> - Boat velocity relative to water: $\mathbf{v} = 10(\cos \theta \mathbf{i} + \sin \theta \mathbf{j})$.
> - True course: $\mathbf{w} = \mathbf{u} + \mathbf{v} = (5 + 10\cos \theta)\mathbf{i} + (10\sin \theta)\mathbf{j}$.
>
> To land directly across, the horizontal component must be 0:
> $$ 5 + 10\cos \theta = 0 \implies \cos \theta = -\frac{1}{2} $$
> $$ \theta = 120^\circ \quad (\text{or N } 30^\circ \text{ W}) $$

![[Pasted image 20260609014412.png|center]]

---

### Resultant Force

Force is a vector. The **resultant force** $\mathbf{F}$ acting on an object is the vector sum of all individual forces.

> [!example] Example 8: Resultant Force
> Two forces act at point $P$: $\mathbf{F}_1$ (10 lb at 45°) and $\mathbf{F}_2$ (20 lb at 150°).
>
> **Solution**:
> Convert to component form:
> $$ \mathbf{F}_1 = 10(\cos 45^\circ \mathbf{i} + \sin 45^\circ \mathbf{j}) = 5\sqrt{2}\mathbf{i} + 5\sqrt{2}\mathbf{j} $$
> $$ \mathbf{F}_2 = 20(\cos 150^\circ \mathbf{i} + \sin 150^\circ \mathbf{j}) = -10\sqrt{3}\mathbf{i} + 10\mathbf{j} $$
>
> Sum the vectors:
> $$
> \begin{aligned}
> \mathbf{F} &= \mathbf{F}_1 + \mathbf{F}_2 \\
> &= (5\sqrt{2} - 10\sqrt{3})\mathbf{i} + (5\sqrt{2} + 10)\mathbf{j} \\
> &\approx -10\mathbf{i} + 17\mathbf{j}
> \end{aligned}
> $$

![[Pasted image 20260609014517.png]]


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 637)