Date: 2026-09-09
Tags: [[Mathematics]], [[Proofs]], [[Logic]], [[Sets]]

---

## 1.5 The Conditional and Biconditional Connectives

> [!abstract] Conditional Statements
> * The connective $\to$ represents the conditional statement "If $P$ then $Q$".
> * In the formula $P \to Q$, $P$ is called the **antecedent** and $Q$ is called the **consequent**.
> 
> 

> [!info] Conditional Truth Table
> | $P$ | $Q$ | $P \to Q$ |
> | --- | --- | --- |
> | F | F | T |
> | F | T | T |
> | T | F | F |
> | T | T | T |
> 
> 
> 

> [!tip] Understanding the "False Antecedent" Cases
> * To understand why F $\to$ F and F $\to$ T evaluate to True, consider the universally true statement "If $x > 2$ then $x^2 > 4$".
> * Plugging in $x = 1$ yields false $\to$ false, which must evaluate to true to preserve the statement's overall truth.
> * Plugging in $x = -5$ yields false $\to$ true, which also must evaluate to true.
> * Therefore, the only scenario where $P \to Q$ is false is when a true antecedent leads to a false consequent.
> 
> 

### Equivalences and Terminology

> [!important] Conditional Equivalences
> * **Conditional laws**:
> * $P \to Q$ is equivalent to $\lnot P \lor Q$.
> * $P \to Q$ is equivalent to $\lnot(P \land \lnot Q)$.
> 
> 
> * **Contrapositive law**:
> * The **contrapositive** of $P \to Q$ is the formula $\lnot Q \to \lnot P$.
> * $P \to Q$ is logically equivalent to $\lnot Q \to \lnot P$.
> 
> 
> 
> 

Mathematical phrasing often expresses $P \to Q$ in formats other than "If $P$ then $Q$".

> [!abstract] Alternative Phrasings for $P \to Q$
> * $P$ implies $Q$.
> * $Q$, if $P$.
> * $P$ only if $Q$.
> * $P$ is a **sufficient condition** for $Q$ (the truth of $P$ guarantees the truth of $Q$).
> * $Q$ is a **necessary condition** for $P$ (in order for $P$ to be true, $Q$ must be true; if $\lnot Q$, then $\lnot P$).
> 
> 

> [!warning] The Converse Trap
> * The **converse** of $P \to Q$ is the formula $Q \to P$.
> * A conditional statement ($P \to Q$) and its converse ($Q \to P$) do *not* mean the same thing and are not logically equivalent.
> * Inferring $P$ from the premises $P \to Q$ and $Q$ is an invalid argument form.
> 
> 

### The Biconditional Connective

When both a conditional statement and its converse are true, we use the biconditional connective.

> [!abstract] Biconditional Statements
> * The connective $\leftrightarrow$ expresses that both $P \to Q$ and $Q \to P$ are true.
> * $P \leftrightarrow Q$ is an abbreviation for $(P \to Q) \land (Q \to P)$.
> * This is commonly read as "$P$ if and only if $Q$", abbreviated in mathematics as "$P$ **iff** $Q$".
> * It can also be phrased as "$P$ is a necessary and sufficient condition for $Q$".
> 
> 

> [!info] Biconditional Truth Table
> | $P$ | $Q$ | $P \leftrightarrow Q$ |
> | --- | --- | --- |
> | F | F | T |
> | F | T | F |
> | T | F | F |
> | T | T | T |
> 
> 

> [!warning] Everyday Language vs. Mathematics
> * In everyday speech, people frequently use an "if" statement when they actually mean to convey a biconditional "iff" (e.g., "If you don't eat your dinner, you won't get dessert" implies the converse is also true).
> * This blurring of terminology is never acceptable in mathematics. You must strictly differentiate between "if" ($\to$) and "iff" ($\leftrightarrow$).
> 
> 

**Key Takeaways**

* The conditional statement $P \to Q$ is only false in the single case where $P$ is true and $Q$ is false.
* A conditional statement is logically equivalent to its contrapositive ($\lnot Q \to \lnot P$) but must never be confused with its converse ($Q \to P$).
* The phrasing "$P$ is a sufficient condition for $Q$" translates to $P \to Q$, whereas "$P$ is a necessary condition for $Q$" translates to $Q \to P$.
* The biconditional connective $\leftrightarrow$ means "$P$ if and only if $Q$" and evaluates to true only when $P$ and $Q$ share the exact same truth value.

---
# ~={red}References=~
[[How_to_Prove_It_A_Structured_Approach_Daniel_J_Velleman_z_library.pdf]] (p, 44)