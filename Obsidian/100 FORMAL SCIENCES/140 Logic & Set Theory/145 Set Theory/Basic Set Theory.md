Date: 2026-05-09
Tags: [[Mathematics]], [[Foundations]]

---

# Sets

> Some of these topic are discussed in a different way in [[Algebra Essentials]]


> [!info] Definition
> A set is a collection of objects called elements or members of that set. 
> The empty set (denoted $\emptyset$) is the set with no elements. 

There are a few symbols that are super helpful to know as a shorthand, and will be used throughout the course. Let $S$ be a set. Then:

![[Pasted image 20260509221431.png|637]]

| Symbol       | Meaning                        | Symbol            | Meaning                 |
| ------------ | ------------------------------ | ----------------- | ----------------------- |
| $a \in S$    | "$a$ is an element in $S$"     | $\exists$         | "there exists"          |
| $a \notin S$ | "$a$ is not an element in $S$" | $\exists!$        | "there exists a unique" |
| $\forall$    | "for all"                      | $\Rightarrow$     | "implies"               |
| $:=$         | "define"                       | $\Leftrightarrow$ | "if and only if"        |
## Definition: Set Relations

We want to relate different sets, and thus we get the following notation/definitions:
1. A set $A$ is a *subset* of $B$, $A \subset B$, if every element of $A$ is in $B$: Given $A \subset B$, if $a \in A \Rightarrow  a\in B$.
2. Two sets $A$ and $B$ are *equal*, $A = B$, if $A \subset B$ and $B \subset A$.
3. A set $A$ is a *proper subset* of $B$, $A \subsetneq  B$ if $A \subset B$ and $A \not= B$.

## Set Building Notation
$$
\{x \in A \;|\; P(x)\} \quad \text{or} \quad \{x\;|\;P(x)\}
$$
Which means "all $x\in A$ that satisfies property $P(x)$".

### Examples

1. The set of natural numbers: $\mathbb{N}=\{1,2,3,4,...\}$
2. The set of integers: $\mathbb{Z}=\{0,1,-1,2,-2,3,-3,...\}$
3. The set of rational numbers: $\mathbb{Q}=\{\frac{m}{n}\;|\;m,n\in \mathbb{Z}\;\text{ and }\; n\not=0\}$
4. The set of real numbers: $\mathbb{R}$.
5. Odd numbers: $\{2n+1\;|\;n \in \mathbb{N}\}=\{1,3,5,...\}$

It follows:
$$
\mathbb{N} \;\subset \;\mathbb{Z}\; \subset\; \mathbb{Q}\; \subset\; \mathbb{R}\; (\subset \mathbb{C})
$$

> [!question] Problem
> How do we **Describe** $\mathbb{R}$?
> 
> *Check*: [[Cantor’s Remarkable Theorem and the Rationals’ Lack of the Least Upper Bound Property]] and [[The Characterization of the Real Numbers]] to find out

## Definitions

1. The **union** of $A$ and $B$ is the set $A\cup B=\{x\;|\;x\in A \; \text{ or } \; x\in B\}$. 
2. The **intersection** of $A$ and $B$ is the set $A\cap B=\{x\;|\;x\in A \; \text{ and } \; x\in B\}$.
3. The **set difference** of $A$ and $B$ is the set $A\setminus B=\{x\in A \; | \; x\not \in B\}$. 
4. The **complement** of $A$ is the set $A^c=\{x \;|\; x \not \in A\}$.
5. $A$ and $B$ are disjoint if $A\cap B=\emptyset$

![[Pasted image 20260510001120.png|center|470]]


## Theorem: De Morgan's Laws

If $A,B,C$ are sets then:

1. $(B \cup C)^c=B^c\cap C^c$ ,
2. $(B \cap C)^c=B^c\cup C^c$ ,
3. $A\setminus (B \cup C) = (A\setminus B) \cap (A\setminus C)$ ,
4. $A\setminus (B \cap C) = (A\setminus B) \cup (A\setminus C)$ .

### Proof:

> $\blacksquare$ this black square means the end of a proof.

> [!info] Proof of (1): $(B \cup C)^c = B^c \cap C^c$
> We must prove $(B\cup C)^c \subseteq B^c \cap C^c$ and $B^c \cap C^c \subseteq (B \cup C)^c$
>
> $$\begin{aligned}
> x \in (B \cup C)^c &\Rightarrow x \notin B \cup C \\
> &\Rightarrow x \notin B \;\text{ and }\; x \notin C \\
> &\Rightarrow x \in B^c \;\text{ and }\; x \in C^c \\
> &\Rightarrow x \in B^c \cap C^c \\
> \text{Thus, }(B \cup C)^c &\subseteq B^c \cap C^c
> \end{aligned}$$
>
> $$\begin{aligned}
> x \in B^c \cap C^c &\Rightarrow x \in B^c \;\text{ and }\; x \in C^c \\
> &\Rightarrow x \notin B \;\text{ and }\; x \notin C \\
> &\Rightarrow x \notin B \cup C \\
> &\Rightarrow x \in (B \cup C)^c \\
> \text{Thus, }B^c \cap C^c &\subseteq (B \cup C)^c \qquad \blacksquare
> \end{aligned}$$

> [!info] Proof of (2): $(B \cap C)^c = B^c \cup C^c$
> We must prove $(B\cap C)^c \subseteq B^c \cup C^c$ and $B^c \cup C^c \subseteq (B \cap C)^c$
>
> $$\begin{aligned}
> x \in (B \cap C)^c &\Rightarrow x \notin B \cap C \\
> &\Rightarrow x \notin B \;\text{ or }\; x \notin C \\
> &\Rightarrow x \in B^c \;\text{ or }\; x \in C^c \\
> &\Rightarrow x \in B^c \cup C^c \\
> \text{Thus, }(B \cap C)^c &\subseteq B^c \cup C^c
> \end{aligned}$$
>
> $$\begin{aligned}
> x \in B^c \cup C^c &\Rightarrow x \in B^c \;\text{ or }\; x \in C^c \\
> &\Rightarrow x \notin B \;\text{ or }\; x \notin C \\
> &\Rightarrow x \notin B \cap C \\
> &\Rightarrow x \in (B \cap C)^c \\
> \text{Thus, }B^c \cup C^c &\subseteq (B \cap C)^c \qquad \blacksquare
> \end{aligned}$$

> [!info] Proof of (3): $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$
> We must prove $A\setminus(B\cup C) \subseteq (A\setminus B)\cap(A\setminus C)$ and $(A\setminus B)\cap(A\setminus C) \subseteq A\setminus(B\cup C)$
>
> $$\begin{aligned}
> x \in A \setminus (B \cup C) &\Rightarrow x \in A \;\text{ and }\; x \notin B \cup C \\
> &\Rightarrow x \in A \;\text{ and }\; x \notin B \;\text{ and }\; x \notin C \\
> &\Rightarrow x \in A\setminus B \;\text{ and }\; x \in A\setminus C \\
> &\Rightarrow x \in (A\setminus B) \cap (A\setminus C) \\
> \text{Thus, } A\setminus(B\cup C) &\subseteq (A\setminus B)\cap(A\setminus C)
> \end{aligned}$$
>
> $$\begin{aligned}
> x \in (A\setminus B)\cap(A\setminus C) &\Rightarrow x \in A\setminus B \;\text{ and }\; x \in A\setminus C \\
> &\Rightarrow x \in A,\; x\notin B \;\text{ and }\; x\notin C \\
> &\Rightarrow x \in A \;\text{ and }\; x \notin B\cup C \\
> &\Rightarrow x \in A\setminus(B\cup C) \\
> \text{Thus, }(A\setminus B)\cap(A\setminus C) &\subseteq A\setminus(B\cup C) \qquad \blacksquare
> \end{aligned}$$

> [!info] Proof of (4): $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$
> We must prove $A\setminus(B\cap C) \subseteq (A\setminus B)\cup(A\setminus C)$ and $(A\setminus B)\cup(A\setminus C) \subseteq A\setminus(B\cap C)$
>
> $$\begin{aligned}
> x \in A\setminus(B\cap C) &\Rightarrow x\in A \;\text{ and }\; x \notin B\cap C \\
> &\Rightarrow x\in A \;\text{ and }\; (x\notin B \;\text{ or }\; x\notin C) \\
> &\Rightarrow (x\in A \;\text{ and }\; x\notin B) \;\text{ or }\;(x\in A \;\text{ and }\; x\notin C) \\
> &\Rightarrow x\in A\setminus B \;\text{ or }\; x\in A\setminus C \\
> &\Rightarrow x\in (A\setminus B)\cup(A\setminus C) \\
> \text{Thus, }A\setminus(B\cap C) &\subseteq (A\setminus B)\cup(A\setminus C)
> \end{aligned}$$
>
> $$\begin{aligned}
> x\in(A\setminus B)\cup(A\setminus C) &\Rightarrow x\in A\setminus B \;\text{ or }\; x\in A\setminus C \\
> &\Rightarrow (x\in A,\;x\notin B) \;\text{ or }\;(x\in A,\;x\notin C) \\
> &\Rightarrow x\in A \;\text{ and }\;(x\notin B \;\text{ or }\; x\notin C) \\
> &\Rightarrow x\in A \;\text{ and }\; x\notin B\cap C \\
> &\Rightarrow x\in A\setminus(B\cap C) \\
> \text{Thus, }(A\setminus B)\cup(A\setminus C) &\subseteq A\setminus(B\cap C) \qquad \blacksquare
> \end{aligned}$$

see also: [[Mathematical Induction]]


---
## ~={red}References=~
- [[mit-18-100-lecture 1.pdf]] (BASIC SET THEORY)
- https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/resources/18100a-lecture-1-multicammp4/ 