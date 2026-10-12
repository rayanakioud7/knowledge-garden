Date: 2026-05-10
Tags: [[Mathematics]], [[Foundations]]

---

> Abstract:
> Proof by induction and its foundation in the Well-Ordering property of $\mathbb{N}$.

> [!NOTE]
> $\mathbb{N}=\{1,2,3,...\}$ has an ordering $(\text{as }\; 1<2<3<...)$

# Axiom

> [!info]  Well-ordering property
> The well-ordering property of $\mathbb{N}$ states that if $S \subset \mathbb{N}$ then there exists an $x \in S$ such that $x \leq y$ for all $y \in S$. In other words, there is always a *smallest element*.

Note that this is an axiom, and thus we have to assume this without proof.

---
# Theorem

> [!info] Induction
> This concept was invented by [Pascal](https://en.wikipedia.org/wiki/Blaise_Pascal) in 1665. 
> Let $P(n)$ be a statement depending on $n \in \mathbb{N}$. Assume that:
> 1. **(Base case)** $P(1)$ is true and
> 2. **(Inductive step)** if $P(m)$ is true then $P(m + 1)$ is true.
> Then, $P(n)$ is true for all $n \in \mathbb{N}$:

Equivalent to **raisonnement par récurrence** in French curriculum, but here _proved_ from the Well-Ordering Axiom rather than assumed.


> [!note] Remark: Proof by Contradiction
> When we prove something by **contradiction** we assume the conclusion we want is **false**,
> and then show that we will reach a **false statement**.
> Rules of logic thus imply that the initial statement must be false.
>
> In other words, if we want to prove $P$ is true:
> $$\text{Assume } \neg P \Rightarrow \text{reach a statement } Q \text{ where } Q \text{ and } \neg Q \text{ are both true}$$
> This is impossible, so $\neg P$ must be false, therefore $P$ is true.
>
> In this case: assume $S \neq \emptyset$ and derive a false statement. $\blacksquare$


## Proof:

Let $S = \{n \in \mathbb{N} \mid P(n) \text{ is not true}\}$. We wish to show $S = \emptyset$.
We proceed by **contradiction** — assume $S \neq \emptyset$ and derive a false statement.

$$\begin{aligned}
S \neq \emptyset &\Rightarrow S \text{ has a least element } m \in S \quad &(\text{Well-Ordering})\\
&\Rightarrow m \neq 1, \text{ i.e. } m > 1 \quad &(P(1) \text{ is true, so } 1 \notin S)\\
&\Rightarrow m-1 \notin S \quad &(m \text{ is the least element})\\
&\Rightarrow P(m-1) \text{ is true} \quad &(\text{definition of } S)\\
&\Rightarrow P(m) \text{ is true} \quad &(\text{inductive step})\\
&\Rightarrow m \notin S \quad &(\text{definition of } S)
\end{aligned}$$

But $m \in S$ and $m \notin S$ — a **contradiction**.
Thus $S = \emptyset$, and $P(n)$ is true for all $n \in \mathbb{N}$. $\blacksquare$

## Theorem: Induction in Action

> [!info]
> For all $c\not =1$ in the real numbers, and for all $n \in \mathbb{N}$,
> $$
> 1+c+c^2+...+c^n=\frac{1-c^{n+1}}{1-c}
> $$
> 

## Proof

First we prove the **base case** $(n=1)$.
$$ 1+c = \frac{1-c^{2}}{1-c} \quad \text{ and } \quad \frac{1-c^{2}}{1-c}=\frac{(1-c)(1+c)}{1-c}=1+c$$
Hence, the base case has been shown. 

Now, **Inductive step**: Assume that the equation is true for $k ∈ \mathbb{N}$, in other words:
$$1+c+c^2+...+c^k=\frac{1-c^{k+1}}{1-c}$$
Lets prove that it holds for $k+1$. Thus,

$$\begin{aligned}
1 + c + c^2 + \cdots + c^k + c^{k+1} &= (1 + c + c^2 + \cdots + c^k) + c^{k+1} \\
&= \frac{1 - c^{k+1}}{1 - c} + c^{k+1} \\
&= \frac{1 - c^{k+1} + c^{k+1}(1 - c)}{1 - c} \\
&= \frac{1 - c^{(k+1)+1}}{1 - c}
\end{aligned}$$

By the theorem of induction the equality is valid for all $n$. Therefore, our proof is complete. $\quad \blacksquare$


## Theorem: Induction in Action 2

> [!info] Bernoulli's Inequality
> For all $c \geq -1,\quad (1+c)^n\geq 1+nc \quad$,  for all $n \in \mathbb{N}$

### Proof of Bernoulli's Inequality: 

**Base case** $n=1$:
$$(1+c)^1 = 1 + 1\cdot c \quad \checkmark
$$
**Inductive step**: suppose that
$$(1+c)^m \geq 1 + mc$$
Then:
$$\begin{aligned}
(1+c)^{m+1} &= (1+c)^m \cdot (1+c) \\
&\geq (1+mc)(1+c) \quad &(\text{by assumption})\\
&= 1 + (m+1)c + mc^2 \\
&\geq 1 + (m+1)c \quad &(mc^2 \geq 0)
\end{aligned}$$

By induction, our proof is complete. $\blacksquare$

---

## Principle of Mathematical Induction (Stewart)

> [!example] Example 1: A Proof by Mathematical Induction
> 
> Prove that for all natural numbers $n$:
> $$1 + 3 + 5 + \dots + (2n - 1) = n^2$$
> 
> **Proof Solution:**
> Let $P(n)$ denote the propositional statement: $1 + 3 + 5 + \dots + (2n - 1) = n^2$.
> 
> ### Step 1: Base Case
> Verify that the statement holds for the initial value $n = 1$.
> - $P(1)$ is simply the statement: $1 = 1^2$
> - Since $1 = 1$, the base case is **true**.
> 
> ### Step 2: Inductive Step
> Assume that $P(k)$ is true for an arbitrary integer $k \ge 1$. This provides our **induction hypothesis**:
> $$1 + 3 + 5 + \dots + (2k - 1) = k^2$$
> 
> We must use this hypothesis to show that $P(k + 1)$ is true, which states:
> $$1 + 3 + 5 + \dots + (2k - 1) + [2(k + 1) - 1] = (k + 1)^2$$
> 
> **LHS to RHS Derivation:**
> Start with the left-hand side of $P(k+1)$ and group the first $k$ terms:
> $$\underbrace{1 + 3 + 5 + \dots + (2k - 1)}_{\text{Group first } k \text{ terms}} + [2(k + 1) - 1]$$
> 
> Substitute the induction hypothesis ($\Sigma_{i=1}^k (2i-1) = k^2$) into the grouped expression:
> $$= k^2 + [2(k + 1) - 1]$$
> 
> Apply the distributive property to expand the bracketed term:
> $$= k^2 + [2k + 2 - 1]$$
> 
> Simplify the linear components:
> $$= k^2 + 2k + 1$$
> 
> Factor the resulting perfect square trinomial:
> $$= (k + 1)^2 \quad \blacksquare$$
> 
> ### Conclusion
> Because $P(k + 1)$ logically follows from $P(k)$, the inductive step is complete. By the **Principle of Mathematical Induction**, $P(n)$ is true for all natural numbers $n \in \mathbb{N}$.


---

see also: [[Basic Set Theory]]

---
## ~={red}References=~
- [[mit-18-100-lecture 1.pdf]] (BASIC SET THEORY)
- https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/resources/18100a-lecture-1-multicammp4/
- - [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 855)