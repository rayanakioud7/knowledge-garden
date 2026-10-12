
---

Date: 2026-09-22
Tags: [[Linear Algebra]], [[Mathematics]], [[Dot Product]], [[Orthogonality]]

---

## The Dot Product and Vector Length

While adding vectors and multiplying them by scalars are the foundational operations of linear spaces, the **dot product** (or inner product) introduces the geometry of lengths and angles. It involves multiplying corresponding components of two vectors and summing the results to produce a single scalar number.

> [!info] Definition: The Dot Product
> For vectors $v = (v_1, v_2, \dots, v_n)$ and $w = (w_1, w_2, \dots, w_n)$, the dot product is defined as:

$$> v \cdot w = v_1 w_1 + v_2 w_2 + \dots + v_n w_n >$$

This simple algebraic operation has powerful real-world interpretations. In economics, multiplying a price vector by a quantity vector yields total income. In mechanics, multiplying weights by distances gives moments to determine if a system balances.

### Length of a Vector

The most important special case is the dot product of a vector with itself. Instead of finding the angle between two different vectors, $v \cdot v$ finds the length of $v$ squared.

> [!abstract] Core Principle: Vector Length
> The length (or norm) $\vert{}\vert{}v\vert{}\vert{}$ of a vector $v$ is the square root of its dot product with itself.
> 
> 

$$> \text{length} = \vert{}\vert{}v\vert{}\vert{} = \sqrt{v \cdot v} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2} >$$

This is the direct $n$-dimensional extension of the Pythagorean theorem. In two dimensions, the components $v_1$ and $v_2$ form the sides of a right triangle, making the length of the vector the hypotenuse $\sqrt{v_1^2 + v_2^2}$.

> ![[{4605C76F-29F6-4518-8A3B-CA08D54DAD85}.png]]
> (The length $\sqrt{v \cdot v}$ of two-dimensional and three-dimensional vectors computed via right triangles.)
> 

## Perpendicularity and Angles

In mathematics, zero is always a special number. For dot products, $v \cdot w = 0$ carries a specific geometric meaning: the vectors are **perpendicular** (orthogonal).

To understand *why* a zero dot product means an angle of $90^\circ$, we use the Pythagoras Law for the sides of a right triangle formed by vectors $v$, $w$, and their difference $v-w$.

**Proof of Perpendicularity condition:**
If $v$ and $w$ are perpendicular, the triangle formed by $v$, $w$, and $v-w$ must satisfy Pythagoras:

$$\begin{aligned} \vert{}\vert{}v\vert{}\vert{}^2 + \vert{}\vert{}w\vert{}\vert{}^2 &= \vert{}\vert{}v - w\vert{}\vert{}^2 \\ (v_1^2 + v_2^2) + (w_1^2 + w_2^2) &= (v_1 - w_1)^2 + (v_2 - w_2)^2 \\ v_1^2 + v_2^2 + w_1^2 + w_2^2 &= v_1^2 - 2v_1w_1 + w_1^2 + v_2^2 - 2v_2w_2 + w_2^2 \end{aligned}$$

Subtracting the squared terms from both sides leaves:

$$0 = -2v_1w_1 - 2v_2w_2$$

Dividing by $-2$ yields the fundamental result:

$$v_1w_1 + v_2w_2 = 0 \implies v \cdot w = 0$$

### The Cosine Formula

When $v \cdot w$ is not zero, its sign immediately reveals whether the angle $\theta$ between the vectors is acute or obtuse.

* $v \cdot w > 0 \implies \theta < 90^\circ$

* $v \cdot w < 0 \implies \theta > 90^\circ$


By dividing vectors by their lengths, we normalize them. The dot product of these normalized vectors gives the exact cosine of the angle between them.

> [!info] Theorem: The Cosine Formula
> If $v$ and $w$ are nonzero vectors, the angle $\theta$ between them is found by:

$$> \cos \theta = \frac{v \cdot w}{\vert{}\vert{}v\vert{}\vert{} \vert{}\vert{}w\vert{}\vert{}} >$$

> ![[{3514D4B6-C54C-45E8-B9B8-19946ECC7958}.png]]
> (Perpendicular vectors have $v \cdot w = 0$. The borderline divides half-planes where the dot product is positive (acute angles) and negative (obtuse angles).)
> 
> 

## Unit Vectors

A **unit vector** $u$ is a vector whose length equals one, meaning $u \cdot u = 1$. You can create a unit vector in the same direction as any nonzero vector $v$ by dividing it by its length:

$$u = \frac{v}{\vert{}\vert{}v\vert{}\vert{}}$$

In the $xy$-plane, standard unit vectors along the axes are written as $i = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and $j = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$. Any unit vector making an angle $\theta$ with the $x$-axis can be expressed simply as $u = \begin{bmatrix} \cos \theta \\ \sin \theta \end{bmatrix}$.

![[{501538E1-9C51-4C4F-9B39-392D47506073}.png]]

## Fundamental Inequalities

Because the cosine of any angle can never exceed $1$ (or fall below $-1$), the cosine formula directly leads to one of the most important inequalities in mathematics.

| Inequality Name         | Mathematical Statement                                                                                | Intuition                                                                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Schwarz Inequality**  | $\vert{}v \cdot w\vert{} \le \vert{}\vert{}v\vert{}\vert{} \cdot \vert{}\vert{}w\vert{}\vert{}$       | The absolute value of the dot product never exceeds the product of the lengths. Equality only holds if one vector is a multiple of the other (angle is $0^\circ$ or $180^\circ$). |
| **Triangle Inequality** | $\vert{}\vert{}v + w\vert{}\vert{} \le \vert{}\vert{}v\vert{}\vert{} + \vert{}\vert{}w\vert{}\vert{}$ | The length of the sum of two vectors cannot exceed the sum of their individual lengths (side 3 of a triangle is shorter than side 1 + side 2).                                    |


> [!warning] Pitfall
> It is a common mistake to assume $\vert{}\vert{}v + w\vert{}\vert{}$ equals $\vert{}\vert{}v\vert{}\vert{} + \vert{}\vert{}w\vert{}\vert{}$. This is only true in the extremely rare "flat triangle" case where vector $w$ is a positive scalar multiple of vector $v$ (e.g., $w = cv$ where $c \ge 0$).
> 
> 

## Computational Representation

When computing these operations algorithmically (in MATLAB, Python, or Julia), it is highly useful to frame the dot product as a matrix operation. The dot product $v \cdot w$ is structurally a **row vector times a column vector**.

If vectors are stored as columns by default, computing the inner product requires transposing the first vector.

$$v^T w = \begin{bmatrix} v_1 & v_2 \end{bmatrix} \begin{bmatrix} w_1 \\ w_2 \end{bmatrix} = v_1 w_1 + v_2 w_2$$

(Note: In MATLAB, this is natively written as `v' * w` instead of $v \cdot w$).

## Worked Example: Testing Inequalities

**Problem:** For the vectors $v = (3,4)$ and $w = (4,3)$, test the Schwarz inequality on $v \cdot w$ and the triangle inequality on $\vert{}\vert{}v + w\vert{}\vert{}$. Find $\cos \theta$.

**Step-by-Step Solution:**

1. **Compute lengths and dot product:**

$$\begin{aligned}     \vert{}\vert{}v\vert{}\vert{} &= \sqrt{3^2 + 4^2} = \sqrt{25} = 5 \\     \vert{}\vert{}w\vert{}\vert{} &= \sqrt{4^2 + 3^2} = \sqrt{25} = 5 \\     v \cdot w &= (3)(4) + (4)(3) = 12 + 12 = 24     \end{aligned}$$

2. **Test Schwarz Inequality ($\vert{}v \cdot w\vert{} \le \vert{}\vert{}v\vert{}\vert{} \cdot \vert{}\vert{}w\vert{}\vert{}$):**

$$24 \le (5)(5) \implies 24 \le 25 \quad \text{(True)}$$

3. **Test Triangle Inequality ($\vert{}\vert{}v + w\vert{}\vert{} \le \vert{}\vert{}v\vert{}\vert{} + \vert{}\vert{}w\vert{}\vert{}$):**
First find the sum vector: $v + w = (7, 7)$

$$\vert{}\vert{}v + w\vert{}\vert{} = \sqrt{7^2 + 7^2} = \sqrt{98} = 7\sqrt{2}$$

$$7\sqrt{2} \le 5 + 5 \implies \approx 9.89 \le 10 \quad \text{(True)}$$

4. **Find Cosine of the Angle:**

$$\cos \theta = \frac{v \cdot w}{\vert{}\vert{}v\vert{}\vert{} \vert{}\vert{}w\vert{}\vert{}} = \frac{24}{25}$$

(Since $\cos \theta$ is very close to 1, the angle between $v$ and $w$ is quite small).

---

# ~={red}References=~

*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 11-17)

