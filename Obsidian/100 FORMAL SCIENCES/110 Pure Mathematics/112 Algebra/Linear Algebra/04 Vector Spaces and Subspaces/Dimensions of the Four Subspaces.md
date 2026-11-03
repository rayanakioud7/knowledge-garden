---
type: note
date: '2026-10-19'
tags:
- linear-algebra
- strang
- mathematics
- four-fundamental-subspaces
- rank
- graph-theory
topics:
- '[[Linear Algebra]]'
- '[[Strang]]'
- '[[Mathematics]]'
- '[[Four Fundamental Subspaces]]'
- '[[Rank]]'
- '[[Graph Theory]]'
---


---
Date: 2026-10-19
Tags: [[Linear Algebra]], [[Strang]], [[Mathematics]], [[Four Fundamental Subspaces]], [[Rank]], [[Graph Theory]]

---

## The Four Fundamental Subspaces

For any $m \times n$ matrix $A$ of rank $r$, the Fundamental Theorem of Linear Algebra connects the rank $r$ (number of pivots) directly to the dimensions of four subspaces: two in $\mathbb{R}^n$ and two in $\mathbb{R}^m$.

> [!info] Theorem: Fundamental Theorem of Linear Algebra (Part 1)
> * **Row Space $C(A^T)$** and **Column Space $C(A)$** both have the exact same dimension $r$ (Row Rank = Column Rank).
> * **Nullspace $N(A)$** has dimension $n - r$, and **Left Nullspace $N(A^T)$** has dimension $m - r$.

| Subspace | Notation | Ambient Space | Dimension | Standard Basis | Preserved by Elimination ($A \to R$)? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Row Space** | $C(A^T)$ | $\mathbb{R}^n$ | $r$ | First $r$ nonzero (pivot) rows of $R$ | **Yes** ($C(A^T) = C(R^T)$) |
| **Column Space** | $C(A)$ | $\mathbb{R}^m$ | $r$ | The $r$ pivot columns of $A$ (not $R$) | **No** ($C(A) \neq C(R)$) |
| **Nullspace** | $N(A)$ | $\mathbb{R}^n$ | $n - r$ | The $n - r$ special solutions to $Rx = 0$ | **Yes** ($N(A) = N(R)$) |
| **Left Nullspace** | $N(A^T)$ | $\mathbb{R}^m$ | $m - r$ | Last $m - r$ rows of $E$ (where $EA = R$) | **No** ($N(A^T) \neq N(R^T)$) |


> *![[Pasted image 20261020001703.png]]
> (The dimensions of the Four Fundamental Subspaces: $C(A^T)$ of $\dim r$ and $N(A)$ of $\dim n - r$ in $\mathbb{R}^n$; $C(A)$ of $\dim r$ and $N(A^T)$ of $\dim m - r$ in $\mathbb{R}^m$)*

### The Counting Theorem
* **In $\mathbb{R}^n$:** $\dim C(A^T) + \dim N(A) = r + (n - r) = n$.
* **In $\mathbb{R}^m$:** $\dim C(A) + \dim N(A^T) = r + (m - r) = m$.

---

## Understanding the Four Subspaces via $R$ and $A$

Consider an $m \times n$ matrix $A$ ($3 \times 5$) that reduces to $R = \text{rref}(A)$ with rank $r = 2$:
$$
A = \begin{bmatrix} 1 & 3 & 5 & 0 & 7 \\ 0 & 0 & 0 & 1 & 2 \\ 1 & 3 & 5 & 1 & 9 \end{bmatrix} \xrightarrow{\text{elimination}} R = \begin{bmatrix} 1 & 3 & 5 & 0 & 7 \\ 0 & 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}
$$


### 1. Row Space $C(A^T)$
* **Dimension:** $r = 2$.
* **Why $C(A^T) = C(R^T)$:** Every row of $A$ is a combination of the rows of $R$, and vice versa.
* **Basis:** The $r = 2$ nonzero pivot rows of $R$: $(1, 3, 5, 0, 7)$ and $(0, 0, 0, 1, 2)$.

### 2. Column Space $C(A)$
* **Dimension:** $r = 2$.
* **Basis:** Pivot columns $1$ and $4$ of the **original matrix $A$**: $(1, 0, 1)$ and $(0, 1, 1)$.

> [!warning] Pitfall: Why $\dim C(A) = \dim C(R)$ even though $C(A) \neq C(R)$
> The columns of $R$ end in zeros, whereas the columns of $A$ do not, so $C(A) \neq C(R)$. However, their dimensions are equal because the exact same linear combinations of columns produce zero ($Ax = 0 \iff Rx = 0$). Columns are independent in $A$ if and only if they are independent in $R$.

### 3. Nullspace $N(A)$
* **Dimension:** $n - r = 5 - 2 = 3$ (free variables $x_2, x_3, x_5$).
* **Basis:** The $3$ special solutions to $Rx = 0$ (which contain the $3 \times 3$ identity matrix in rows $2, 3, 5$):
$$
s_2 = \begin{bmatrix} -3 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}, \quad s_3 = \begin{bmatrix} -5 \\ 0 \\ 1 \\ 0 \\ 0 \end{bmatrix}, \quad s_5 = \begin{bmatrix} -7 \\ 0 \\ 0 \\ -2 \\ 1 \end{bmatrix}
$$


### 4. Left Nullspace $N(A^T)$
> [!info] Definition: Left Nullspace $N(A^T)$
> The left nullspace contains all vectors $y \in \mathbb{R}^m$ that solve $A^T y = 0$. Transposing this equation gives $y^T A = 0^T$, where $y^T$ multiplies $A$ from the **left** to combine the rows of $A$ into the zero row.

* **Dimension:** $m - r = 3 - 2 = 1$.
* **Basis from $EA = R$:** Since elimination reaches $R$ with $m - r$ zero rows at the bottom, the last $m - r$ rows of the elimination matrix $E$ record the exact row combinations of $A$ that produce those zero rows. Here, $(\text{row } 1) + (\text{row } 2) - (\text{row } 3) = 0 \implies y = (1, 1, -1)$.

---

## Rank $r$ Matrices as Sums of Rank $1$ Matrices

> [!abstract] Core Principle: Rank Decomposition
> * **Rank $1$ Matrix:** Every rank $1$ matrix has the outer product form $A = u v^T$ (column times row), where $u$ is a basis for $C(A)$ and $v$ is a basis for $C(A^T)$.
> * **Rank $r$ Matrix:** Every rank $r$ matrix can be factored as $A = CR$ (where $C$ contains the $r$ pivot columns of $A$ and $R$ contains the $r$ nonzero rows of $\text{rref}(A)$), decomposing $A$ into a sum of $r$ rank-one matrices:
>   $$ A = \begin{bmatrix} u_1 & \dots & u_r \end{bmatrix} \begin{bmatrix} v_1^T \\ \vdots \\ v_r^T \end{bmatrix} = u_1 v_1^T + u_2 v_2^T + \dots + u_r v_r^T $$
>  

---

## Application: Graphs and Incidence Matrices

Consider a directed graph with $m = 5$ edges and $n = 4$ nodes. Its $5 \times 4$ **incidence matrix** $A$ has $-1$ at the start node and $+1$ at the end node of each edge:

$$
A = \begin{bmatrix} -1 & 1 & 0 & 0 \\ -1 & 0 & 1 & 0 \\ 0 & -1 & 1 & 0 \\ 0 & -1 & 0 & 1 \\ 0 & 0 & -1 & 1 \end{bmatrix} \xrightarrow{\text{rref}} R = \begin{bmatrix} 1 & 0 & 0 & -1 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}
$$


> ![[Pasted image 20261020002911.png]]
> *(A graph with 5 edges and 4 nodes represented by its $5 \times 4$ incidence matrix $A$.)*

| Subspace                    | Graph / Network Interpretation                                                                                                      | Dimension & Basis                                                                                        |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Nullspace $N(A)$**        | Constant node potentials $x = (c, c, c, c)$ producing zero potential differences ($Ax = 0$).                                        | $\dim = 1$ (so $r = 4 - 1 = 3$). Basis: $(1, 1, 1, 1)$.                                                  |
| **Column Space $C(A)$**     | Voltage differences across edges (Kirchhoff's Voltage Law).                                                                         | $\dim = 3$. Basis: First $3$ columns of $A$.                                                             |
| **Row Space $C(A^T)$**      | Independent edges forming a **spanning tree** (a subgraph with no loops).                                                           | $\dim = 3$. Basis: Rows $1, 2, 4$ of $A$ (edges $1, 2, 4$).                                              |
| **Left Nullspace $N(A^T)$** | **Kirchhoff's Current Law** ($A^T y = 0$: flow in equals flow out). Basis vectors correspond to independent **loops** in the graph. | $\dim = 5 - 3 = 2$. Basis: Upper loop $y_1 = (1, -1, 1, 0, 0)$ and lower loop $y_2 = (0, 0, -1, 1, -1)$. |


---
# ~={red}References=~
*Introduction to Linear Algebra (5th Ed), Gilbert Strang* (p. 181-189)