Date: 2026-10-12
Tags: [[Linear Algebra]], [[Strang]], [[Vector Spaces]], [[Subspaces]], [[Column Space]], [[Mathematics]]

---


## 1. The Third Level of Understanding

> [!abstract] The six organizing facts of Spaces of Vectors
> 1. The standard $n$-dimensional space $\mathbb{R}^n$ contains all real column vectors with $n$ components.
> 2. If $v$ and $w$ are in a vector space $S$, every combination $cv + dw$ must be in $S$.
> 3. The "vectors" in $S$ can be matrices or functions of $x$. The 1-point space $Z$ consists of $x = 0$.
> 4. A **subspace** of $\mathbb{R}^n$ is a vector space inside $\mathbb{R}^n$ (example: the line $y = 3x$ inside $\mathbb{R}^2$).
> 5. The **column space** of $A$ contains all combinations of the columns of $A$: a subspace of $\mathbb{R}^m$.
> 6. The column space contains all the vectors $Ax$. So $Ax = b$ is solvable **when $b$ is in $C(A)$**.

---

## 2. The Space $\mathbb{R}^n$ and the Eight Conditions

> [!info] Definition : The space $\mathbb{R}^n$
> The space $\mathbb{R}^n$ consists of all column vectors $v$ with $n$ components. The components are real numbers (hence $\mathbb{R}$); a vector with $n$ complex components lies in the space $\mathbb{C}^n$.
> - $\mathbb{R}^2$ = the usual $xy$-plane; $v = (x, y)$;
> - $\mathbb{R}^3$ = points $(x, y, z)$ in three-dimensional space;
> - $\mathbb{R}^1$ = a line (like the $x$-axis).
> 
> The greatness of linear algebra: it deals easily with five-dimensional space. We don't draw the vectors, we just need the $n$ numbers.

**The two essential operations** (they produce linear combinations, and the result stays *inside* the space):

$$
v + w \quad (\text{add component at a time}), \qquad c v \quad (\text{multiply every component by the scalar } c)
$$

> [!info] Définition / Théorème : The eight required conditions
> A series of properties can be verified in $\mathbb{R}^n$; three of them are:
> - **Commutative law:** $v + w = w + v$;
> - **Distributive law:** $c(v + w) = cv + cw$;
> - **Unique zero vector:** $0 + v = v$.
> 
> These are three of the **eight conditions** required of every vector space (the full standard list):
> 1. $v + w = w + v$; 2. $(v + w) + u = v + (w + u)$; 3. unique zero vector $0$; 4. unique $-v$ with $v + (-v) = 0$; 5. $c(v + w) = cv + cw$; 6. $(c + d)v = cv + dv$; 7. $c(dv) = (cd)v$; 8. $1v = v$.

> [!info] Definition : Real vector space
> A real vector space is a set of "vectors" together with rules for **vector addition** and for **multiplication by real numbers**. The addition and the multiplication must produce vectors that are **in the space**, and the eight conditions must be satisfied.

> [!example] Example : Three vector spaces other than $\mathbb{R}^n$
> - $\mathbf{M}$: the vector space of all real $2 \times 2$ matrices;
> - $\mathbf{F}$: the vector space of all real functions $f(x)$ — **infinite-dimensional**;
> - $\mathbf{Z}$: the vector space that consists only of a zero vector — **zero-dimensional**, the smallest possible vector space.
> 
> In $M$ the "vectors" are matrices; in $F$ they are functions; in $Z$ the only addition is $0 + 0 = 0$. In each case we can add (matrices to matrices, functions to functions) and multiply by $4$, and the result is still in $M$, $F$, or $Z$.
> A smaller function space is $\mathbf{P}$ (or $\mathbf{P}_n$): all polynomials $a_0 + a_1 x + \cdots + a_n x^n$ of degree $n$.
> 
> **No space can do without its zero vector:** each space has its own — the zero matrix, the zero function, the vector $(0,0,0)$ in $\mathbb{R}^3$.

> ![[Pasted image 20261012235625.png|756]]

---

## 3. Subspaces

> [!info] Definition : Subspace
> A **subspace** of a vector space is a set of vectors (including $0$) that satisfies two requirements: if $v$ and $w$ are vectors in the subspace and $c$ is any scalar, then
> $$
> \text{(i)} \quad v + w \text{ is in the subspace} \qquad \text{(ii)} \quad cv \text{ is in the subspace}
> $$
> In other words the set is **closed** under addition $v+w$ and multiplication $cv$ (and $dw$). We can also subtract, because $-w$ is in the subspace and $v + (-w) = v - w$. **All linear combinations stay in the subspace.**

> [!info] Définition / Théorème : First fact — the zero vector
> Every subspace contains the zero vector. The plane in $\mathbb{R}^3$ has to go through $(0,0,0)$. This follows directly from rule (ii): choose $c = 0$, and the rule requires $0v$ to be in the subspace.


> [!abstract] Modélisation : The complete list of subspaces of $\mathbb{R}^3$
> | Label | Subspace |
> | :---: | :--- |
> | $(L)$ | Any line through $(0,0,0)$ |
> | $(P)$ | Any plane through $(0,0,0)$ |
> | $(\mathbb{R}^3)$ | The whole space |
> | $(Z)$ | The single vector $(0,0,0)$ |

> [!warning] Piège / Cas Particulier : Planes and sets that fail
> - **Planes that don't contain the origin fail** the tests: they are not subspaces (the zero vector is missing).
> - **Example 1 (quarter-plane):** keep only vectors $(x, y)$ with components positive or zero. $(2,3)$ is included but $(-2,-3)$ is not: rule (ii) is violated at $c = -1$. Not a subspace.
> - **Example 2 (two quarter-planes):** include also vectors with both components negative. Rule (ii) now holds (any $c$), but rule (i) fails: $v = (2,3)$ and $w = (-3,-2)$ give $v + w = (-1, 1)$, outside the set. **Two quarter-planes don't make a subspace.**

> [!info] Définition / Théorème : The rule for subspaces (combined form)
> Rules (i) and (ii) combine into a single requirement:
> $$
> \text{A subspace containing } v \text{ and } w \text{ must contain all} \textbf{ linear combinations } cv + dw.
> $$

> [!example] Example 3 : Subspaces inside the matrix space $M$
> Inside $M$ (all $2 \times 2$ matrices), two subspaces:
> - $(U)$ all **upper triangular** matrices $\begin{bmatrix} a & b \\ 0 & d \end{bmatrix}$;
> - $(D)$ all **diagonal** matrices $\begin{bmatrix} a & 0 \\ 0 & d \end{bmatrix}$.
> 
> Add any two matrices in $U$: the sum is in $U$. Add diagonal matrices: the sum is diagonal. Here $D$ is also a subspace **of** $U$. The zero matrix is in both (when $a = b = d = 0$); $Z$ is always a subspace.
> **Multiples of the identity** $cI$ also form a subspace: $2I + 3I$ is in it, and so is $3(4I)$ — a "line of matrices" inside $M$, $U$, and $D$.
> **Is $I$ a subspace by itself? Certainly not.** Only the zero matrix is.

---

## 4. The Column Space of $A$

> [!info] Definition : Column space $C(A)$
> The **column space** consists of all linear combinations of the columns of $A$:
> $$
> C(A) = \{ Ax : x \in \mathbb{R}^n \} = \left\{ \sum_{j} x_j \, (\text{column } j) \right\}
> $$
> If $A$ is $m \times n$, its columns have $m$ components, so the columns belong to $\mathbb{R}^m$ and $C(A)$ is a **subspace of $\mathbb{R}^m$** (not $\mathbb{R}^n$): adding combinations or multiplying by scalars still produces combinations of the columns.

> [!important]  Théorème : The solvability criterion
> $$
> \text{The system } Ax = b \text{ is solvable } \iff b \in C(A).
> $$
> To solve $Ax = b$ is to express $b$ as a combination of the columns; the coefficients of that combination give the solution $x$. If $b$ is not in the column space produced by $A$: **no solution**.

> [!example] Example 4 : A $3 \times 2$ matrix whose column space is a plane
> Let $A$ be a $3 \times 2$ matrix with two independent columns $v_1, v_2 \in \mathbb{R}^3$:
> $$
> Ax = \begin{bmatrix} v_1 & v_2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = x_1 v_1 + x_2 v_2
> $$
> The column space of all combinations of the two columns **fills a plane in $\mathbb{R}^3$** (Figure 3.2). With only 2 columns, $C(A)$ can't be all of $\mathbb{R}^3$. The plane has zero thickness, so **most right sides $b$ in $\mathbb{R}^3$ are not in the column space**: for most $b$ there is no solution to the 3 equations in 2 unknowns.
> Of course $(0,0,0)$ is in $C(A)$ — the plane passes through the origin, and $Ax = 0$ always has the solution $x = 0$.
> The attainable right sides $b$ are exactly the vectors in $C(A)$: the first column itself (take $x_1 = 1, x_2 = 0$), the second column (take $x_1 = 0, x_2 = 1$), and — the new level of understanding — **all** their combinations.

> ![[Pasted image 20261012235916.png]]

> [!info] Definition : Span of a set $S$
> Instead of columns in $\mathbb{R}^m$, start with any set $S$ of vectors in a vector space $V$. Taking all combinations produces a subspace:
> $$
> SS = \{ c_1 v_1 + \cdots + c_N v_N \} = \text{the subspace of } V \text{ "spanned" by } S
> $$
> $SS$ is always the **smallest subspace containing $S$**. When $S$ = the columns of $A$, $SS = C(A)$; when $S$ = one nonzero vector $v$, $SS$ = the line through $v$. **The columns span the column space.**

> [!example] Example 5 : Comparing column spaces in $\mathbb{R}^2$
> - $I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$: $C(I)$ is the **whole space** $\mathbb{R}^2$ — every vector is a combination of the columns.
> - $A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}$: $C(A)$ is only a **line**. The second column $(2,4)$ is a multiple of the first $(1,2)$; the column space contains $(1,2)$, $(2,4)$, and all $(c, 2c)$ along that line. $Ax = b$ is solvable only when $b$ is on the line.
> - $B$ (a $2 \times 3$ matrix whose second column is twice the first, with a third column completing the span): $C(B)$ is **all of $\mathbb{R}^2$**. Every $b$ is attainable — and attainable in several ways: for $b = (5,4)$, $x = (0,1,1)$ (column 2 + column 3) and $x = (2,0,1)$ ($2 \times$ column 1 + column 3) both work. Same column space as $I$, but **more solutions** because $x$ has extra components.

> [!abstract] Bridge to your engineering track
> The criterion "$Ax=b$ solvable $\iff b \in C(A)$" is exactly the membership test your pure-Python `Matrix` class must implement in `solve(b)`: Gaussian elimination either produces $x$ (b in the span) or exposes a contradictory row $0 = \text{nonzero}$ (b outside the span). The column space is the set of *reachable* right-hand sides — the same logic you will meet again in MML as the image of a linear map.

---

## 5. Worked Examples (complete)

> [!example] Worked Example 3.1A : Constructing $A$ with prescribed solvability
> **Given** three different vectors $b_1, b_2, b_3$. Construct a matrix so that $Ax = b_1$ and $Ax = b_2$ are solvable, but $Ax = b_3$ is not.
> **Solution.** Make $b_1$ and $b_2$ the two columns of $A$: then the solutions are $x = (1, 0)$ and $x = (0, 1)$. To keep $Ax = b_3$ unsolvable, don't make the column space any larger — the question becomes:
> $$
> Ax = \begin{bmatrix} b_1 & b_2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = b_3 \quad ? \quad \text{i.e., is } b_3 \text{ a combination of } b_1, b_2?
> $$
> If **no**: we have the desired matrix. If **yes**: construction is impossible, because any column space containing $b_1$ and $b_2$ must contain all their linear combinations, hence $b_3$, hence $Ax = b_3$ would necessarily be solvable.

> [!example] Worked Example 3.1B : Subspace $S$ of $V$, then subspace $SS$ of $S$
> | Space $V$ | As combinations | As solutions | A subspace $S$ | A subspace $SS \subseteq S$ |
> | :--- | :--- | :--- | :--- | :--- |
> | $V_1$ | all combinations of $(1,1,0,0)$, $(1,1,1,0)$, $(1,1,1,1)$ | all solutions of $v_1 - v_2 = 0$ | combinations of the first two vectors | multiples $(c, c, 0, 0)$ of the first |
> | $V_2$ | all combinations of $(1,0,-1)$, $(1,-1,1)$ | all solutions of $u \cdot v = 0$, $u = (1,2,1)$ | the line through $(1,-1,1)$ | $Z$ (zero subspace) |
> | $V_3$ | all combinations of $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}$ | all solutions $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ of $b = c$ (symmetric) | the diagonal matrices | multiples $cI$ |
> | $V_4$ | all combinations of $1, x, x^2, x^3$ | all solutions of $\frac{d^4 y}{dx^4} = 0$ | quadratic polynomials | linear polynomials (then constants as $SSS$) |
> 
> In all four parts one could also take $S = V$ itself and $SS = Z$. Each $V$ admits **two descriptions**: "all combinations of…" and "all solutions of…".

---

## 6. Review of the Key Ideas

> [!abstract] Ce qu'il faut retenir
> 1. $\mathbb{R}^n$ contains all column vectors with $n$ real components.
> 2. $M$ ($2 \times 2$ matrices), $F$ (functions), and $Z$ (zero vector alone) are vector spaces.
> 3. A subspace containing $v$ and $w$ must contain all their combinations $cv + dw$.
> 4. The combinations of the columns of $A$ form the column space $C(A)$; the column space is "spanned" by the columns.
> 5. $Ax = b$ has a solution **exactly when** $b$ is in the column space of $A$:
> $$
> C(A) = \text{all combinations of the columns} = \text{all vectors } Ax
> $$
> 


---
# ~={red}References=~
*Gilbert Strang — Introduction to Linear Algebra, Chapter 3: Vector Spaces and Subspaces, §3.1 "Spaces of Vectors" (p. 123–130)*

