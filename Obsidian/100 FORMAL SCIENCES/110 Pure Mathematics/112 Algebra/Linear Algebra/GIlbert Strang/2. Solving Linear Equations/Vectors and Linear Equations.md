
---

Date: 2026-09-28
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Linear Equations]], [[Matrices]]

---

## Vectors and Linear Equations

The central problem of linear algebra is to solve a system of linear equations. A standard system of two equations in two unknowns can be analyzed from two distinctly different visual and mathematical perspectives: the **row picture** and the **column picture**.

Given the linear system:

$$
\begin{cases}
x - 2y &= 1 \\
3x + 2y &= 11
\end{cases}$$

### The Row Picture (Intersection of Planes/Lines)

We begin a row at a time. In two dimensions, each row represents a linear equation that produces a straight line in the $xy$-plane. The solution to the system is the single point where these lines intersect.

By finding points that satisfy each equation (e.g., $x=3, y=1$ solves both), we find the intersection point $(3, 1)$.

> ![[Pasted image 20260928215035.png]]
> (Row picture: Two lines meeting at a single point $(3, 1)$, which is the solution to both equations.)
> 
> 

For a $3 \times 3$ system (three equations, three unknowns $x, y, z$), the row picture shows three planes in three-dimensional space. Two planes typically intersect in a line $L$, and the third plane cuts that line at a single intersection point, which is the solution.

> ![[Pasted image 20260928215639.png]]
> (Row picture in 3D: Two planes meet at a line $L$. Three planes meet at a single point.)
> 
> 

### The Column Picture (Linear Combination of Vectors)

Instead of looking at horizontal rows, we can separate the original system into its vertical columns to create a **vector equation**.

$$x \begin{bmatrix} 1 \\ 3 \end{bmatrix} + y \begin{bmatrix} -2 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 \\ 11 \end{bmatrix}$$

> [!abstract] Core Principle: The Column Picture
> The column picture combines the column vectors on the left side to produce the vector $b$ on the right side. The problem is to find the correct scalar coefficients ($x$ and $y$) that multiply these columns so their vector sum equals the target vector.
> 
> 

Using the same solution from the row picture ($x=3, y=1$), we can verify that $3(\text{column 1}) + 1(\text{column 2}) = b$.

> ![[Pasted image 20260928215649.png]]
> (Column picture: Combining column vectors with scalar weights to produce the right side $(1, 11)$.)
> 
> 

The column picture scales perfectly to higher dimensions. It is much easier to visualize a linear combination of four vectors in four-dimensional space than it is to imagine four hyperplanes intersecting at a single point.

## The Matrix Form: $Ax = b$

We can combine the coefficients of the linear system into a single matrix $A$. The rows of $A$ give the row picture, and the columns give the column picture.

$$\text{Matrix equation } Ax = b \implies \begin{bmatrix} 1 & -2 \\ 3 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ 11 \end{bmatrix}$$

There are two fundamental ways to compute the multiplication of a matrix $A$ and a vector $x$:

| Method                        | Mathematical Definition                                                                           | Intuition                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Multiplication by Rows**    | $Ax$ comes from **dot products**, each row of $A$ times the column vector $x$.                    | Defines the $i$-th component of the output vector as $(\text{row } i) \cdot x$.     |
| **Multiplication by Columns** | $Ax$ is a **linear combination** of the column vectors of $A$, weighted by the components of $x$. | Defines the output vector as $x_1(\text{column 1}) + x_2(\text{column 2}) + \dots$. |

(Note: Strang's text strongly emphasizes understanding $Ax$ as a combination of the columns of $A$.)

### Matrix Notation and The Identity Matrix

Matrix entries are denoted by their row and column index. The entry $a_{ij}$ (or $A(i,j)$) is located in row $i$ and column $j$. An $m$ by $n$ matrix has $m$ rows and $n$ columns, containing $mn$ total entries.

> [!info] Definition: The Identity Matrix
> The identity matrix $I$ has $1$'s on the "main diagonal" and $0$'s everywhere else. Multiplying any vector by $I$ leaves the vector unchanged.
> 
> 
> $$I = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}, \quad Ix = x$$
> 
> 

## Worked Example: Solving by Inspection

**Problem:** Describe the column picture of these three equations $Ax = b$. Solve by careful inspection of the columns.

$$\begin{cases}
x + 3y + 2z &= -3 \\
2x + 2y + 2z &= -2 \\
3x + 5y + 6z &= -5
\end{cases}$$

**Step-by-Step Solution:**
First, rewrite the system as a matrix-vector equation $Ax = b$:

$$\begin{bmatrix} 1 & 3 & 2 \\ 2 & 2 & 2 \\ 3 & 5 & 6 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} -3 \\ -2 \\ -5 \end{bmatrix}$$

The column picture asks for a linear combination of the three columns of $A$ that produces the vector $b$.

By inspecting the columns, we can see that the target vector $b = \begin{bmatrix} -3 \\ -2 \\ -5 \end{bmatrix}$ is exactly the negative of the second column $\begin{bmatrix} 3 \\ 2 \\ 5 \end{bmatrix}$.

Therefore, we need $0$ of the first column, $-1$ of the second column, and $0$ of the third column. The solution is:

$$x = 0, \quad y = -1, \quad z = 0$$

(If the right side changed to $b = (4, 4, 8)$, which is the sum of the first two columns, the solution would instead be $x=1, y=1, z=0$).

---

# ~={red}References=~

*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 31-34, 40)
