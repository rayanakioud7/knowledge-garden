---
type: note
date: '2026-10-22'
tags:
- logic
- proofs
- quantifiers
- discrete-math
- velleman
- set-theory
topics:
- '[[Logic]]'
- '[[Proofs]]'
- '[[Quantifiers]]'
- '[[Discrete Math]]'
- '[[Velleman]]'
- '[[Set Theory]]'
---

Date: 2026-10-22
Tags: [[Logic]], [[Proofs]], [[Quantifiers]], [[Discrete Math]], [[Velleman]], [[Set Theory]]

# 3.3. Proofs Involving Quantifiers

## 1. Proving Universal Statements ($\forall x P(x)$)

> [!abstract] Strategy: The Arbitrary Object
> To prove a goal of the form $\forall x P(x)$, you must show that $P(x)$ is true no matter what $x$ is. 
> **The Rule:** Let $x$ stand for an **arbitrary** object and prove $P(x)$. 
> - The letter $x$ must be a **new** variable in the proof. 
> - You must not assume anything about $x$ other than what is explicitly stated.
> - If $x$ is already being used, choose an unused variable (e.g., $y$).

**Form of Final Proof:**
> Let $x$ be arbitrary.
> *Proof of $P(x)$ goes here.*
> Since $x$ was arbitrary, we can conclude that $\forall x P(x)$.

> [!example] Application Example 3.3.1: Subset Proofs
> **Theorem:** Suppose $A, B$, and $C$ are sets, and $A \setminus B \subseteq C$. Then $A \setminus C \subseteq B$.
> 
> **Scratch Work (Givens & Goals):**
> 
> | Givens | Goals |
> | :--- | :--- |
> | $A \setminus B \subseteq C$ | $\forall x (x \in A \setminus C \to x \in B)$ |
> 
> 
> Because the goal is $\forall x P(x)$, we introduce an arbitrary $x$ and change the goal to $x \in A \setminus C \to x \in B$. Because this is a conditional, we assume the antecedent.
> 
> **Final Proof:**
> Let $x$ be arbitrary. Suppose $x \in A \setminus C$. This means $x \in A$ and $x \notin C$. Suppose $x \notin B$. Then $x \in A \setminus B$, so since $A \setminus B \subseteq C$, $x \in C$. But this contradicts $x \notin C$. Therefore $x \in B$. Thus, if $x \in A \setminus C$ then $x \in B$. Since $x$ was arbitrary, $\forall x (x \in A \setminus C \to x \in B)$, so $A \setminus C \subseteq B$. $\blacksquare$

### 1.1 Implicit Arbitrary Objects
Mathematicians often skip the explicit phrase "Let $x$ be arbitrary" when proving statements of the form $\forall x (P(x) \to Q(x))$ or $\forall x \in A P(x)$.

> [!info] Definition: Common Proof Openings
> - **For $\forall x (P(x) \to Q(x))$:** The proof simply starts with *"Suppose $P(x)$."* It is understood that $x$ is arbitrary.
> - **For $\forall x \in A P(x)$:** The proof starts with *"Suppose $x \in A$."* It is understood that $x$ is an arbitrary element of $A$.

> [!example] Application Example 3.3.2: Set Equality and Subsets
> **Theorem:** Suppose $A$ and $B$ are sets. If $A \cap B = A$ then $A \subseteq B$.
> 
> **Final Proof:**
> Suppose $A \cap B = A$, and suppose $x \in A$. Then since $A \cap B = A$, $x \in A \cap B$, so $x \in B$. Since $x$ was an arbitrary element of $A$, we can conclude that $A \subseteq B$. $\blacksquare$

---

## 2. Proving Existential Statements ($\exists x P(x)$)

> [!abstract] Strategy: The Witness
> To prove a goal of the form $\exists x P(x)$, you only need to find **one** specific value that makes $P(x)$ true.
> **The Rule:** Try to find a value of $x$ for which $P(x)$ is true. Start your proof with *"Let $x = \text{(the value)}$"*, and proceed to prove $P(x)$ for this specific value.

**Form of Final Proof:**
> Let $x = \text{(the value you decided on)}$.
> *Proof of $P(x)$ goes here.*
> Thus, $\exists x P(x)$.

> [!warning] Pitfall / Edge Case: Scratch Work vs. Final Proof
> Finding the right value for $x$ often requires solving an equation or trial-and-error. **The reasoning you use to find the value does NOT appear in the final proof.** The final proof only *verifies* that the chosen value works.

> [!example] Application Example 3.3.3: Solving for the Witness
> **Theorem:** For every real number $x$, if $x > 0$ then there is a real number $y$ such that $y(y + 1) = x$.
> 
> **Scratch Work:** We need to find $y$ such that $y^2 + y - x = 0$. Using the quadratic formula: $y = \frac{-1 \pm \sqrt{1 + 4x}}{2}$. Since $x > 0$, the square root is defined. We pick the positive root: $y = \frac{-1 + \sqrt{1 + 4x}}{2}$.
> 
> **Final Proof:**
> Let $x$ be an arbitrary real number, and suppose $x > 0$. Let $y = \frac{-1 + \sqrt{1 + 4x}}{2}$, which is defined since $x > 0$. Then:
> $$ y(y+1) = \left(\frac{\sqrt{1+4x}-1}{2}\right) \cdot \left(\frac{\sqrt{1+4x}+1}{2}\right) = \frac{(1+4x) - 1}{4} = \frac{4x}{4} = x $$
> Thus, $\exists y [y(y+1) = x]$. Therefore $x > 0 \to \exists y [y(y+1) = x]$. Since $x$ was arbitrary, $\forall x (x > 0 \to \exists y [y(y+1) = x])$. $\blacksquare$

---

## 3. Using Quantified Givens

Handling givens is fundamentally different from handling goals. You do not get to "choose" values for existential givens, and you must wait for the right moment to use universal givens.

### 3.1 Existential Instantiation ($\exists x P(x)$ as a Given)
> [!info] Definition: Existential Instantiation
> If you have a given of the form $\exists x P(x)$, introduce a **new** variable $x_0$ into the proof to stand for the object that is guaranteed to exist. You can now add $P(x_0)$ to your givens list.
> *Rule:* Apply this **immediately** when you see an existential given.

### 3.2 Universal Instantiation ($\forall x P(x)$ as a Given)
> [!info] Definition: Universal Instantiation
> If you have a given of the form $\forall x P(x)$, you can plug in **any** specific value $a$ for $x$ to conclude $P(a)$.
> *Rule:* **Wait** until a likely choice for $a$ pops up in the proof before plugging it in.

> [!example] Application Example 3.3.4: Mixing Quantifiers (Families of Sets)
> **Theorem:** Suppose $F$ and $G$ are families of sets and $F \cap G \neq \emptyset$. Prove that $\bigcap F \subseteq \bigcup G$.
> 
> **Logical Translation:**
> - Given: $\exists A (A \in F \cap G)$
> - Goal: $\forall x (x \in \bigcap F \to x \in \bigcup G)$
> 
> **Final Proof:**
> Suppose $x \in \bigcap F$. Since $F \cap G \neq \emptyset$, we can let $A_0$ be an element of $F \cap G$ *(Existential Instantiation)*. Thus, $A_0 \in F$ and $A_0 \in G$. Since $x \in \bigcap F$ and $A_0 \in F$, it follows that $x \in A_0$ *(Universal Instantiation on the definition of $\bigcap F$)*. But we also know $A_0 \in G$, so we can conclude that $x \in \bigcup G$. $\blacksquare$

---

## 4. Best Practices for Variables in Proofs

> [!warning] Pitfall / Edge Case: The "Who are they?" Confusion
> Proofs involving quantifiers are often difficult for *them*. (Readers will experience the same confusion if you use variables without explaining what they stand for).
> 
> **Golden Rules of Variables:**
> 1. **Always introduce variables before using them.** (e.g., "Let $x$ be an arbitrary element of $A$").
> 2. **Know what kind of object it is.** Is it a number? A set? A function? (e.g., Don't write $a \in X$ unless $X$ is a set).
> 3. **Arbitrary vs. Specific:** Be clear in your own mind and in your writing whether a variable is arbitrary (chosen by someone else) or specific (chosen by you).

---

## 5. Advanced Examples & Reading Proofs

### 5.1 Nested Quantifiers (Power Sets)

> [!example] Application Example 3.3.5: Nested Universals
> **Theorem:** Suppose $B$ is a set and $F$ is a family of sets. If $\bigcup F \subseteq B$ then $F \subseteq \mathcal{P}(B)$.
> 
> **Proof Structure:**
> 1. Goal is $\forall x (x \in F \to x \in \mathcal{P}(B))$. Let $x$ be an arbitrary element of $F$.
> 2. New goal: $x \in \mathcal{P}(B)$, which means $x \subseteq B$, which means $\forall y (y \in x \to y \in B)$.
> 3. Let $y$ be an arbitrary element of $x$.
> 4. Since $y \in x$ and $x \in F$, clearly $y \in \bigcup F$. 
> 5. Since $\bigcup F \subseteq B$, $y \in B$. 
> 6. Conclude $x \subseteq B \implies x \in \mathcal{P}(B) \implies F \subseteq \mathcal{P}(B)$. $\blacksquare$

### 5.2 Reading Condensed Proofs (Divisibility)

> [!info] Definition: Divisibility
> For any integers $x$ and $y$, $x$ divides $y$ (written $x \mid y$) if $\exists k \in \mathbb{Z} (kx = y)$.

> [!example] Application Example: Reading Theorem 3.3.6
> **Theorem:** For all integers $a, b$, and $c$, if $a \mid b$ and $b \mid c$ then $a \mid c$.
> **Condensed Proof:** Let $a, b$, and $c$ be arbitrary integers and suppose $a \mid b$ and $b \mid c$. Since $a \mid b$, we can choose some integer $m$ such that $ma = b$. Similarly, since $b \mid c$, we can choose an integer $n$ such that $nb = c$. Therefore $c = nb = nma$, so since $nm$ is an integer, $a \mid c$. $\blacksquare$
> 
> **Commentary (Deconstructing the logic):**
> - *"Let $a,b,c$ be arbitrary..."* $\to$ Proving the outer $\forall$ quantifiers.
> - *"Since $a \mid b$, we can choose $m$..."* $\to$ **Existential Instantiation** on the definition of $a \mid b$ ($\exists k(ka=b)$).
> - *"Therefore $c = nma$..."* $\to$ The proof doesn't explicitly mention the variable $k$ for the goal $a \mid c$ ($\exists k(ka=c)$). It implicitly uses $k = nm$ to satisfy the existential goal.

---
# ~={red}References=~
*How to Prove It: A Structured Approach, Daniel J. Velleman — Chapter 3.3: Proofs Involving Quantifiers (p. 108-121)*