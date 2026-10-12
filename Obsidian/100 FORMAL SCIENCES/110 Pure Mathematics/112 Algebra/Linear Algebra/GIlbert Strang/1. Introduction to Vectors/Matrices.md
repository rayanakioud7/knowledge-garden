
---

Date: 2026-09-28
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Matrices]], [[Linear Independence]]

---

## Matrices

To this point, linear combinations have been written as scalars multiplying vectors. Introducing matrices provides a crucial change in viewpoint: we can rewrite combinations by placing the vectors into the columns of a matrix $A$.

> [!abstract] Core Principle: Matrix Multiplication (Column View)
> Multiplying a matrix $A$ by a vector $x$ produces a linear combination of the columns of $A$.
> 
> 
> $$Ax = x_1(\text{column 1}) + x_2(\text{column 2}) + x_3(\text{column 3})$$
> 
> 

For example, combining three vectors $u, v, w$ with scalars $x_1, x_2, x_3$ looks like this in matrix form:

$$Ax = \begin{bmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & -1 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} x_1 \\ x_2 - x_1 \\ x_3 - x_2 \end{bmatrix}$$

In this new viewpoint, the matrix $A$ acts on the input vector $x$ to produce an output vector $b$.

> [!warning] Pitfall: Row vs. Column Perspectives
> You may have previously learned to multiply $Ax$ a row at a time by taking the dot product of each row of $A$ with the vector $x$. While computing by rows is correct and yields the same result, working with $Ax$ as a **combination of columns** is the fundamental key to understanding linear algebra.
> 
> 

## The Difference Matrix and Inverse Systems

The matrix $A$ shown above is called a "*difference matrix*" because its output vector $b$ contains the differences of the components of the input vector $x$.
If we input the squares $x = (1, 4, 9)$, the matrix produces the odd numbers as differences:

$$Ax = \begin{bmatrix} 1 - 0 \\ 4 - 1 \\ 9 - 4 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \\ 5 \end{bmatrix} = b$$

### The Inverse Problem

Up to now, we computed the output $b$ from a known $x$. The inverse problem asks: *Which combination of columns produces a particular vector $b$?* This means treating $b$ as known and solving the linear system $Ax = b$ for the unknown $x$.

> [!info] Definition: Invertible and Inverse Matrix
> If we can recover $x$ perfectly from $b$, the matrix $A$ is **invertible**. We write the solution as $x = A^{-1}b$, where $A^{-1}$ is the inverse matrix.
> 
> 

For our difference matrix $A$, the inverse matrix $A^{-1}$ is a **sum matrix**. If $b$ contains the differences of $x$, then $x$ can be reconstructed by accumulating the sums of $b$:

$$x = A^{-1}b = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{bmatrix} \begin{bmatrix} b_1 \\ b_2 \\ b_3 \end{bmatrix} = \begin{bmatrix} b_1 \\ b_1 + b_2 \\ b_1 + b_2 + b_3 \end{bmatrix}$$

> [!abstract] Core Principle: The Calculus Analogy
> Linear algebra shares a perfect analogy with the Fundamental Theorem of Calculus.
> 
> 
> * The forward difference operation $Ax = b$ is analogous to taking a derivative: $\frac{dx}{dt} = b(t)$.
> 
> 
> * The inverse sum operation $x = A^{-1}b$ is analogous to taking an integral: $x(t) = \int b(t) dt$.
> 
> 
> 
> 

## Singular Matrices and Cyclic Differences

Not all matrices are invertible. If we change the third column of $A$ to create a "cyclic difference matrix" $C$, the system behaves completely differently:

$$Cx = \begin{bmatrix} 1 & 0 & -1 \\ -1 & 1 & 0 \\ 0 & -1 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} x_1 - x_3 \\ x_2 - x_1 \\ x_3 - x_2 \end{bmatrix} = b$$

Solving $Cx = b$ is generally impossible because the left sides of the equations ($x_1 - x_3$, $x_2 - x_1$, $x_3 - x_2$) always add up to zero. Therefore, no solution exists unless the components of the target vector $b$ also add up to zero ($b_1 + b_2 + b_3 = 0$).

Furthermore, if we want to solve $Cx = 0$, there are infinitely many solutions: any constant vector $x = (c, c, c)$ produces zero differences. (This undetermined constant $c$ is exactly analogous to the $+C$ added to indefinite integrals).

## Independence and Dependence

The algebraic failure of the cyclic matrix $C$ has a direct geometric explanation regarding how its columns combine.

> ![[Pasted image 20260928211235.png]]
> *(Independent vectors $u, v, w$ fill the whole 3D space. Dependent vectors $u, v, w^*$ are constrained to a 2D plane.)*
> 

| Property          | Independent Columns (Matrix $A$)                                | Dependent Columns (Matrix $C$)                                                                           |
| ----------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Geometry**      | Combinations of columns fill the whole three-dimensional space. | Columns lie in the same plane. Combinations cannot reach vectors outside this plane.                     |
| **Zero Solution** | $Ax = 0$ has only one solution: $x = (0,0,0)$.                  | $Cx = 0$ has many solutions (other non-zero combinations give the zero vector, e.g., $u + v + w^* = 0$). |
| **Matrix Status** | $A$ is an **invertible matrix**.                                | $C$ is a **singular matrix** (no inverse exists).                                                        |


---

# ~={red}References=~

*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 22-27)

