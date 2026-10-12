
---

Date: 2026-09-28
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Gaussian Elimination]]

---

## Gaussian Elimination

A systematic method to solve linear equations by transforming a full system $Ax=b$ into an upper triangular system $Ux=c$.

* **Goal:** Eliminate variables below the main diagonal to enable back substitution.


* **Method:** Subtract multiples of one equation from another.



> [!info] Definition: Pivots and Multipliers
> * **Pivot:** The first nonzero entry in the row used for elimination. Pivots lie on the diagonal of $U$. **Zero is never allowed as a pivot**.
> 
> 
> * **Multiplier ($\ell_{ij}$):** The ratio used to eliminate a specific entry.
> 
> 

$$\ell_{ij} = \frac{\text{entry to eliminate in row } i}{\text{pivot in row } j}$$

> [!abstract] Core Principle: Geometric Preservation
> Row operations completely change the equations and the angles of the lines/planes, but they **do not change the solution** (the intersection point).
> 
> 

> ![[Pasted image 20260928224115.png]]
> *(Eliminating $x$ makes the second line horizontal ($8y=8$), but the lines still intersect at $(3,1)$)*.
> 
> 

## Breakdown of Elimination

Elimination fails if the algorithm is forced to divide by zero.

| Breakdown Type        | Condition                                            | Row Picture Geometry      | Result                                  |
| --------------------- | ---------------------------------------------------- | ------------------------- | --------------------------------------- |
| **No Solution**       | Reaches a false equation (e.g., $0y = 8$).           | Parallel lines.           | **Inconsistent** (Singular matrix).     |
| **Infinitely Many**   | Reaches a trivial equation (e.g., $0y = 0$).         | Same line.                | **Dependent** (One variable is "free"). |
| **Temporary Failure** | Zero in pivot position, but non-zero entry below it. | Normal intersecting lines | **Row Exchange** produces valid pivots. |


> ![[Pasted image 20260928224322.png]]
> 
> ![[Pasted image 20260928224335.png]]
> 
> *(Figure 2.6: No solution / Parallel lines. Figure 2.7: Infinitely many solutions / Same line)*.
> 

## Example: 3x3 Elimination & Back Substitution

**System:**

$$\begin{cases}
2x + 4y - 2z &= 2 \\
4x + 9y - 3z &= 8 \\
-2x - 3y + 7z &= 10
\end{cases}$$

**Forward Elimination ($A \to U$):**

* **Column 1 (Pivot is $\mathbf{2}$):**

* Eliminate $4x$ (Eq 2): Multiplier $\ell_{21} = 4/2 = 2$.
$\text{Eq 2} - 2(\text{Eq 1}) \implies 1y + 1z = 4$

* Eliminate $-2x$ (Eq 3): Multiplier $\ell_{31} = -2/2 = -1$.
$\text{Eq 3} - (-1)(\text{Eq 1}) \implies 1y + 5z = 12$



* **Column 2 (New Pivot is $\mathbf{1}$):**

* Eliminate $1y$ (New Eq 3): Multiplier $\ell_{32} = 1/1 = 1$.
$\text{New Eq 3} - 1(\text{New Eq 2}) \implies 4z = 8$




**Upper Triangular System ($Ux = c$):**
Pivots ($\mathbf{2, 1, 4}$) are now clearly visible on the diagonal.

$$\begin{aligned}
\mathbf{2}x + 4y - 2z &= 2 \\
\mathbf{1}y + 1z &= 4 \\
\mathbf{4}z &= 8
\end{aligned}$$

**Back Substitution:**
Solve from bottom to top.

1. From Eq 3: $4z = 8 \implies z = 2$

2. From Eq 2: $y + 2 = 4 \implies y = 2$

3. From Eq 1: $2x + 4(2) - 2(2) = 2 \implies 2x = -2 \implies x = -1$


**Solution:** $(-1, 2, 2)$.

---

# ~={red}References=~

*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 46-51)
