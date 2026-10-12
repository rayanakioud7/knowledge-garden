Date: 2026-06-20
Tags: [[Mathematics]], [[Geometry]]

---

## 10.2 Ellipses

### Geometric Definition of an Ellipse

An **ellipse** is the set of all points in the plane the sum of whose distances from two fixed points $F_1$ and $F_2$ is a constant. These two fixed points are called the **foci** (plural of focus).

*   **Drawing an Ellipse:** You can draw an ellipse by placing two tacks (foci) on a board, looping a string around them, and tracing a curve with a pencil while keeping the string taut. The length of the string represents the constant sum of distances.

![[000/000.Source Material/math/pictures/Pasted image 20260620173029.png|center]]
### Deriving the Equation of an Ellipse

To find the simplest equation, we place the foci on the x-axis at $F_1(-c, 0)$ and $F_2(c, 0)$ so the origin is halfway between them.

![[000/000.Source Material/math/pictures/Pasted image 20260620173106.png|center]]

Let $P(x, y)$ be any point on the ellipse. The sum of the distances from $P$ to the foci is defined as $2a$ (where $a > c$).
$$ d(P, F_1) + d(P, F_2) = 2a $$

Using the distance formula and simplifying (squaring both sides twice to remove radicals), we arrive at the standard equation:
$$ \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 $$
where $b^2 = a^2 - c^2$ (which implies $a^2 = b^2 + c^2$). Since $a > c$, it follows that $a > b$.

*   **Vertices:** The ellipse crosses the x-axis at $(\pm a, 0)$. These are the vertices.
*   **Major Axis:** The segment joining the vertices. Its length is $2a$.
*   **Minor Axis:** The segment joining the y-intercepts $(0, \pm b)$. Its length is $2b$.

---

### Equations and Graphs of Ellipses

> [!info]
> The following table summarizes the properties of ellipses centered at the origin. Note that $a$ is always the larger denominator.
> 
> | Feature        | Horizontal Ellipse                      | Vertical Ellipse                        |
> | :------------- | :-------------------------------------- | :-------------------------------------- |
> | **Equation**   | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ | $\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1$ |
> | **Condition**  | $a > b > 0$                             | $a > b > 0$                             |
> | **Vertices**   | $(\pm a, 0)$                            | $(0, \pm a)$                            |
> | **Foci**       | $(\pm c, 0)$                            | $(0, \pm c)$                            |
> | **Major Axis** | Horizontal, length $2a$                 | Vertical, length $2a$                   |
> | **Minor Axis** | Vertical, length $2b$                   | Horizontal, length $2b$                 |
> | **Relation**   | $c^2 = a^2 - b^2$                       | $c^2 = a^2 - b^2$                       |
> ![[000/000.Source Material/math/pictures/Pasted image 20260620173200.png|center]]
> 



> [!example] Example 1: Sketching an Ellipse
> An ellipse has the standard equation $\frac{x^2}{9} + \frac{y^2}{4} = 1$.
>
> **(a) Find foci, vertices, and axes lengths.**
> Since the larger denominator (9) is under $x^2$, the major axis is horizontal.
> *   $a^2 = 9 \implies a = 3$
> *   $b^2 = 4 \implies b = 2$
> *   Find $c$: $c^2 = a^2 - b^2 = 9 - 4 = 5 \implies c = \sqrt{5}$.
>
> *   **Foci:** $(\pm \sqrt{5}, 0)$
> *   **Vertices:** $(\pm 3, 0)$
> *   **Length of Major Axis:** $2a = 6$
> *   **Length of Minor Axis:** $2b = 4$
>
> **(b) Graphing:**
> To graph on a calculator, solve for $y$:
> $y = \pm 2\sqrt{1 - x^2/9}$
> 
> ![[000/000.Source Material/math/pictures/Pasted image 20260620173330.png|center]]

> [!example] Example 2: Finding the Foci of an Ellipse
> Find the foci of the ellipse $16x^2 + 9y^2 = 144$.
>
> **Solution:**
> First, put the equation in standard form by dividing by 144:
> $$ \frac{16x^2}{144} + \frac{9y^2}{144} = 1 \implies \frac{x^2}{9} + \frac{y^2}{16} = 1 $$
> Since $16 > 9$, the major axis is vertical ($a^2 = 16, b^2 = 9$).
> *   $a = 4, b = 3$
> *   $c^2 = a^2 - b^2 = 16 - 9 = 7 \implies c = \sqrt{7}$
>
> Since the ellipse is vertical, the foci are on the y-axis: **$(0, \pm \sqrt{7})$**.

> [!example] Example 3: Finding the Equation of an Ellipse
> The vertices of an ellipse are $(\pm 4, 0)$ and the foci are $(\pm 2, 0)$. Find the standard equation.
>
> **Solution:**
> *   Vertices at $(\pm 4, 0)$ imply a horizontal ellipse with $a = 4$.
> *   Foci at $(\pm 2, 0)$ imply $c = 2$.
> *   Find $b^2$: $b^2 = a^2 - c^2 = 4^2 - 2^2 = 16 - 4 = 12$.
>
> Equation:
> $$ \frac{x^2}{16} + \frac{y^2}{12} = 1 $$

---

### Eccentricity of an Ellipse

Eccentricity ($e$) measures how much an ellipse deviates from being a circle.
$$ e = \frac{c}{a} $$
where $c$ is the distance from center to focus, and $a$ is the distance from center to vertex.

*   **Range:** $0 < e < 1$.
*   **Circle:** If $e \approx 0$, then $c \approx 0$, meaning the foci are close to the center. The ellipse looks like a circle.
*   **Elongated:** If $e \approx 1$, then $c \approx a$, meaning the foci are close to the vertices. The ellipse is long and thin.

![[000/000.Source Material/math/pictures/Pasted image 20260620173445.png|center]]

> [!example] Example 4: Finding Equation from Eccentricity and Foci
> Find the standard equation of the ellipse with foci $(0, \pm 8)$ and eccentricity $e = \frac{4}{5}$.
>
> **Solution:**
> *   Foci are on the y-axis, so it is a vertical ellipse.
> *   $c = 8$.
> *   Use eccentricity formula: $e = \frac{c}{a} \implies \frac{4}{5} = \frac{8}{a}$.
> *   Solve for $a$: $4a = 40 \implies a = 10$.
> *   Find $b^2$: $b^2 = a^2 - c^2 = 10^2 - 8^2 = 100 - 64 = 36$.
>
> Equation (Vertical):
> $$ \frac{x^2}{36} + \frac{y^2}{100} = 1 $$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 775)