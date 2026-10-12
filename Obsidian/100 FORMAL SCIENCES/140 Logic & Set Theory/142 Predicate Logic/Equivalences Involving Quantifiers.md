Date: 2026-09-24
Tags: [[Mathematics]], [[Proofs]], [[Logic]]

---


When negating statements containing quantifiers, the negation symbol can be pushed through the quantifier by flipping the quantifier to its opposite type.

> [!important] Quantifier Negation Laws
> * $\lnot \exists x P(x)$ is equivalent to $\forall x \lnot P(x)$.
> 
> 
> * $\lnot \forall x P(x)$ is equivalent to $\exists x \lnot P(x)$.
> 
> 
> 
> 

Combining quantifier negation laws with established propositional equivalences (like De Morgan's laws or conditional laws) allows us to re-express complex negative statements as simpler, equivalent positive statements.

> [!example] Negating a Universal Statement
> To find a positive equivalent for $\lnot(A \subseteq B)$:
> 
> 
> 1. Expand the subset definition: $\lnot \forall x(x \in A \to x \in B)$.
> 
> 
> 2. Apply **Quantifier Negation Law**: $\exists x \lnot(x \in A \to x \in B)$.
> 
> 
> 3. Apply **Conditional Law**: $\exists x \lnot(x \notin A \lor x \in B)$.
> 
> 
> 4. Apply **De Morgan's Law**: $\exists x(x \in A \land x \notin B)$.
> 
> 
> 
> 
> *Conclusion:* Saying $A$ is not a subset of $B$ means there is something in $A$ that is not in $B$.
> 
> 

### Swapping Quantifiers

> [!tip] Rules for Reversing Quantifier Order
> * **Same Type:** Two consecutive universal quantifiers ($\forall x \forall y$) or two existential quantifiers ($\exists x \exists y$) can *always* be switched without changing the meaning of the formula.
> 
> 
> * **Mixed Types:** As established in Section 2.1, reversing the order of different quantifiers (e.g., $\exists x \forall y$ to $\forall y \exists x$) generally changes the meaning of the formula and is not an equivalence.
> 
> 
> 
> 

### The Unique Existential Quantifier

Mathematical statements frequently declare that *exactly one* object satisfies a condition.

> [!abstract] Unique Existential Notation
> * **Symbol:** $\exists ! x P(x)$.
> 
> 
> * **Meaning:** "There is exactly one value of $x$ such that $P(x)$ is true," or "There is a unique $x$ such that $P(x)$".
> 
> 
> * **Formal Abbreviation:** $\exists ! x P(x)$ is an abbreviation for the formal logic expression: $\exists x(P(x) \land \lnot \exists y(P(y) \land y \neq x))$.
> 
> 
> 
> 

### Bounded Quantifiers

To specify the universe $(A)$ of discourse directly within a formula, or to restrict attention to a specific subset of the universe, bounded quantifiers are used.

> [!abstract] Bounded Quantifier Abbreviations
> * **Universal:** $\forall x \in A P(x)$ is an abbreviation for $\forall x(x \in A \to P(x))$.
> 
> 
> * **Existential:** $\exists x \in A P(x)$ is an abbreviation for $\exists x(x \in A \land P(x))$.
> 
> 
> 
> 

Bounded quantifiers follow the same negation rules as standard quantifiers:

* $\lnot \forall x \in A P(x)$ is equivalent to $\exists x \in A \lnot P(x)$.


* $\lnot \exists x \in A P(x)$ is equivalent to $\forall x \in A \lnot P(x)$.



### Vacuously True Statements

When dealing with bounded quantifiers over an empty set ($A = \emptyset$), the resulting truth values are strictly governed by the underlying logical connectives.

> [!warning] Vacuously True
> * **Existential on Empty Sets:** $\exists x \in \emptyset P(x)$ is always **false**, because there is nothing in the empty set to satisfy $P(x)$.
> 
> 
> * **Universal on Empty Sets:** $\forall x \in \emptyset P(x)$ is always **true**. Expanding its definition gives $\forall x(x \in \emptyset \to P(x))$. Since $x \in \emptyset$ is always false, the conditional $F \to P(x)$ evaluates to true for every possible $x$. Statements that are true simply because the antecedent is impossible are called **vacuously true**.
> 
> 
> * *Application:* This principle proves that the empty set is a subset of every set ($\emptyset \subseteq B$). The definition $\forall x(x \in \emptyset \to x \in B)$ is vacuously true.
> 
> 
> 
> 

### Distributive Laws for Quantifiers

> [!warning] Distributing Quantifiers
> * **Valid:** The universal quantifier distributes over conjunction: $\forall x(P(x) \land Q(x))$ is logically equivalent to $\forall x P(x) \land \forall x Q(x)$.
> 
> 
> * **Invalid:** The existential quantifier does *not* distribute over conjunction: $\exists x(P(x) \land Q(x))$ is *not* equivalent to $\exists x P(x) \land \exists x Q(x)$.
> 
> 
> 
> 

**Key Takeaways**

* Negating a quantified statement flips universal quantifiers ($\forall$) to existential ($\exists$) and vice versa, while negating the inner proposition.

* Adjacent quantifiers of the same type can be freely swapped; adjacent quantifiers of different types cannot.

* Bounded quantifiers ($\forall x \in A$, $\exists x \in A$) are shorthand for conditional and conjunctive expressions, respectively.

* A universal claim restricted to an empty set is automatically "vacuously true" because its underlying conditional premise is always false.

---
# ~={red}References=~
[[How_to_Prove_It_A_Structured_Approach_Daniel_J_Velleman_z_library.pdf]] (p, 64)