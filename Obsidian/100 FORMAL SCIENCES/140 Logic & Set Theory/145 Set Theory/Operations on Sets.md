Date: 2026-09-07
Tags: [[Mathematics]], [[Proofs]], [[Logic]], [[Sets]]

---

## 1.4 Operations on Sets

Set operations define the truth sets of compound statements such as $P(x) \land Q(x)$, $P(x) \lor Q(x)$, and $\lnot P(x)$.

> [!abstract] Basic Set Operations
> * **Intersection ($A \cap B$):** $\{x \mid x \in A \text{ and } x \in B\}$. Elements common to both sets.
> * **Union ($A \cup B$):** $\{x \mid x \in A \text{ or } x \in B\}$. Elements in either $A$ or $B$, inclusive.
> * **Difference ($A \setminus B$):** $\{x \mid x \in A \text{ and } x \notin B\}$. The set resulting from starting with $A$ and removing any elements also in $B$.
> * **Symmetric Difference ($A \triangle B$):** $(A \setminus B) \cup (B \setminus A) = (A \cup B) \setminus (A \cap B)$. Elements in either $A$ or $B$, but not both.
> 
> 

**Venn Diagram References:**

> [!NOTE] Universe of discourse $U$ containing sets $A$ and $B$.
> 
> ![[Pasted image 20260908142836.png| center]]

> [!NOTE] $A \cap B$ shaded.
>   ![[Pasted image 20260908142922.png|center]]

> [!NOTE] $A \cup B$ shaded.
> ![[Pasted image 20260908142954.png|center]]

> [!NOTE] $A \setminus B$ shaded.
>   ![[Pasted image 20260908143052.png|center]]

> [!NOTE] $A \triangle B$ shaded.
> ![[Pasted image 20260908143128.png|center]]
> 

> [!example] Computing Operations
> Let $A = \{1, 2, 3, 4, 5\}$ and $B = \{2, 4, 6, 8, 10\}$.
> * $A \cap B = \{2, 4\}$.
> * $A \cup B = \{1, 2, 3, 4, 5, 6, 8, 10\}$.
> * $A \setminus B = \{1, 3, 5\}$.
> * $(A \cup B) \setminus (A \cap B) = \{1, 3, 5, 6, 8, 10\}$.
> 
> 

### Translating Between Sets and Logic

Set operations ($\cap, \cup, \setminus$) parallel the logical connectives ($\land, \lor, \lnot$) via elementhood tests.

* Truth set of $P(x) \land Q(x)$ evaluates to $A \cap B$.
* Truth set of $P(x) \lor Q(x)$ evaluates to $A \cup B$.
* Truth set of $\lnot P(x)$ evaluates to $U \setminus A$ (where $U$ is the universe of discourse).

> [!warning] Syntax Constraint
> Logical connectives combine *statements*; set operations combine *sets*. Expressions like $A \land B$ or $P(x) \cap Q(x)$ are meaningless and invalid.

> [!tip] Deriving Set Identities via Logic
> Convert the set operation into its logical elementhood test, apply established logical equivalences (like **De Morgan's Laws** or **Distributive Laws**), and translate back to set notation.

> [!example] Example 1.4.4: Deriving an Identity
> Show the logical equivalence for $x \in A \setminus (B \cap C)$:
> $x \in A \setminus (B \cap C)$
> $\iff x \in A \land \lnot(x \in B \cap C)$ (definition of $\setminus$)
> $\iff x \in A \land \lnot(x \in B \land x \in C)$ (definition of $\cap$)
> $\iff x \in A \land (x \notin B \lor x \notin C)$ (**De Morgan's law**)
> $\iff (x \in A \land x \notin B) \lor (x \in A \land x \notin C)$ (**Distributive law**)
> $\iff (x \in A \setminus B) \lor (x \in A \setminus C)$ (definition of $\setminus$)
> $\iff x \in (A \setminus B) \cup (A \setminus C)$ (definition of $\cup$).
> This proves $A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$.
> 
> Venn diagram of three sets $A, B, C$ demonstrating this distributive behavior.
> 
> ![[Pasted image 20260908143347.png|center]]
> 

### Subsets and Disjoint Sets

> [!abstract] Subsets and Disjoint Sets
> * **Subset ($A \subseteq B$):** Every element of $A$ is also an element of $B$.
> * **Disjoint:** $A$ and $B$ have no elements in common, meaning $A \cap B = \emptyset$.
> 
> 

**Venn Diagram References:**

![[Pasted image 20260908143433.png]]

To prove sets are disjoint, translate to logic to expose a contradiction.

* Evaluate $x \in (A \cap B) \cap (A \setminus B)$.
* $\iff (x \in A \land x \in B) \land (x \in A \land x \notin B)$.
* $\iff x \in A \land (x \in B \land x \notin B)$.
* Because $x \in B \land x \notin B$ is a contradiction, the statement is always false, proving $(A \cap B) \cap (A \setminus B) = \emptyset$.

> [!important] Theorem 1.4.7
> For any sets $A$ and $B$, $(A \cup B) \setminus B \subseteq A$.
> *Proof.* We must show that if something is an element of $(A \cup B) \setminus B$, then it must also be an element of $A$.
> Suppose $x \in (A \cup B) \setminus B$.
> This means $x \in A \cup B$ and $x \notin B$, or in other words $(x \in A \lor x \in B) \land x \notin B$.
> Notice that these statements have the logical form $P \lor Q$ and $\lnot Q$.
> From these premises, we can logically conclude that $P$ (or $x \in A$) must be true.
> Thus, anything that is an element of $(A \cup B) \setminus B$ must also be an element of $A$, so $(A \cup B) \setminus B \subseteq A$. $\blacksquare$

**Key Takeaways**

* Set operations ($\cap, \cup, \setminus$) manipulate truth sets using the exact same underlying logic as compound statements ($\land, \lor, \lnot$).
* Set identities can be rigorously proven by expanding elementhood tests into logic, applying known laws (e.g., De Morgan's), and restructuring back into set notation.
* Mathematical proofs concerning relations like disjointness or subsets rely entirely on reducing the definitions to logical arguments (often seeking a contradiction or a forced logical conclusion).

---
# ~={red}References=~
[[How_to_Prove_It_A_Structured_Approach_Daniel_J_Velleman_z_library.pdf]] (p, 34)