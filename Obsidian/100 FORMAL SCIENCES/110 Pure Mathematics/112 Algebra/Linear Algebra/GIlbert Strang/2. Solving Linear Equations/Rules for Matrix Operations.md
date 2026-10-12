
---

Date: 2026-10-05
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Matrix Operations]], [[Block Matrices]]

---

## Matrix Operations Basics

A matrix is a rectangular array of numbers.

* **Dimension:** $m \times n$ denotes $m$ rows and $n$ columns.
* **Entry $a_{ij}$:** The number located in the $i$-th row and $j$-th column.
* **Addition ($A + B$):** Add corresponding entries. Valid *only* if matrices have the exact same shape.
* **Scalar Multiplication ($cA$):** Multiply every entry in the matrix by the constant scalar $c$.

## Matrix Multiplication

> [!abstract] Rule for Matrix Multiplication
> To multiply $AB$, the inner dimensions must match: the number of columns in $A$ must equal the number of rows in $B$.

$$(m \times n) \times (n \times p) = (m \times p)$$

There are four distinct ways to compute the product $AB = C$:

### 1. The Dot Product Way (Standard)

The entry $C_{ij}$ is the dot product of row $i$ of $A$ and column $j$ of $B$.

$$(AB)_{ij} = (\text{row } i \text{ of } A) \cdot (\text{column } j \text{ of } B) = \sum_{k=1}^n a_{ik}b_{kj}$$

> ![[Pasted image 20261005225721.png]]
> *(Row 2 of A and Column 3 of B combine to produce the entry in row 2, column 3 of AB)*

### 2. The Column Way

Matrix $A$ multiplies every column of $B$ individually. Each column of $AB$ is a linear combination of the columns of $A$.

$$A \begin{bmatrix} b_1 & \dots & b_p \end{bmatrix} = \begin{bmatrix} Ab_1 & \dots & Ab_p \end{bmatrix}$$

### 3. The Row Way

Every row of $A$ multiplies the entire matrix $B$. Each row of $AB$ is a linear combination of the rows of $B$.

$$\begin{bmatrix} \text{row } i \text{ of } A \end{bmatrix} B = \begin{bmatrix} \text{row } i \text{ of } AB \end{bmatrix}$$

### 4. Columns Multiply Rows

Multiply each column $k$ of $A$ by the corresponding row $k$ of $B$ (each producing an $m \times p$ matrix), and add the results.

$$AB = (\text{col 1})(\text{row 1}) + (\text{col 2})(\text{row 2}) + \dots + (\text{col } n)(\text{row } n)$$

## Laws for Matrix Operations

| Property | Rule | Status |
| --- | --- | --- |
| **Commutative (Addition)** | $A + B = B + A$ | **True** |
| **Associative (Addition)** | $A + (B + C) = (A + B) + C$ | **True** |
| **Distributive (Scalar)** | $c(A + B) = cA + cB$ | **True** |
| **Commutative (Multiplication)** | $AB = BA$ | **False** |
| **Distributive (Left)** | $A(B + C) = AB + AC$ | **True** |
| **Distributive (Right)** | $(A + B)C = AC + BC$ | **True** |
| **Associative (Multiplication)** | $A(BC) = (AB)C$ | **True** |

> [!warning] Pitfall: Commutativity
> Matrix multiplication is rarely commutative. Even if $A$ and $B$ are square matrices of the same size, $AB$ will generally not equal $BA$. The identity matrix $I$ is a notable exception ($AI = IA = A$).

### Matrix Powers

For square matrices, exponents follow standard algebraic rules (provided $A$ has an inverse for negative powers).

$$A^p = AAA \dots A \text{ (p factors)}$$

$$A^p A^q = A^{p+q}$$

$$(A^p)^q = A^{pq}$$

## Block Matrices and Block Multiplication

Matrices can be partitioned into smaller sub-matrices called blocks.

> [!abstract] Block Multiplication
> If the blocks of $A$ can multiply the blocks of $B$ (i.e., cuts between columns of $A$ match cuts between rows of $B$), block multiplication is valid and follows the same rules as scalar entries.
> $$\begin{bmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{bmatrix} \begin{bmatrix} B_{11} \\ B_{21} \end{bmatrix} = \begin{bmatrix} A_{11}B_{11} + A_{12}B_{21} \\ A_{21}B_{11} + A_{22}B_{21} \end{bmatrix}$$
> 
> 

### Block Elimination (Schur Complement)

Elimination can be performed on whole blocks simultaneously using a block elimination matrix.

$$\begin{bmatrix} I & 0 \\ -CA^{-1} & I \end{bmatrix} \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} A & B \\ 0 & D - CA^{-1}B \end{bmatrix}$$

The resulting bottom-right block, $D - CA^{-1}B$, is called the **Schur complement**.

## Application: Graph Adjacency Matrices

A network graph of $n$ nodes can be represented by an $n \times n$ **adjacency matrix** $S$.

* $S_{ij} = 1$ if an edge directly connects node $i$ to node $j$.
* $S_{ij} = 0$ if there is no direct connection.

> [!info] Theorem: Powers of Adjacency Matrices
> The entry in row $i$, column $j$ of the matrix $S^N$ represents the exact total number of $N$-step paths between node $i$ and node $j$.

For example, computing $(S^2)_{ij}$ via the dot product formula:

$$(S^2)_{ij} = s_{i1}s_{1j} + s_{i2}s_{2j} + \dots + s_{in}s_{nj}$$

Each term $s_{ik}s_{kj}$ evaluates to $1$ only if a path exists from $i \to k$ and from $k \to j$, counting valid 2-step walks.

---

# ~={red}References=~

*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 71-77)
