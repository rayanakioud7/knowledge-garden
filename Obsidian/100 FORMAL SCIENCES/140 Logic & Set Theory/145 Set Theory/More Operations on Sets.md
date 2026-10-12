Date: 2026-09-24
Tags: [[Mathematics]], [[Proofs]], [[Logic]], [[Sets]]

---



### Complex Expressions in Set-Builder Notation

* Set-builder notation can be modified by placing a complex expression before the vertical line instead of a single variable.


* For example, $\{n^2 \mid n \in \mathbb{N}\}$ defines the set of all perfect squares.


* This notation logically translates to an elementhood test containing an existential quantifier: $\{n^2 \mid n \in \mathbb{N}\}$ means the same thing as $\{x \mid \exists n \in \mathbb{N},\quad(x = n^2)\}$.



### Families of Sets & Indexing

* Sets that contain other sets as their elements are called **families of sets**.


* When the elements of a set are identified by a numbered system or an **index set** $I$, the set is called an **indexed family**.


* The general form for an indexed family $A$ is $\{x_i \mid i \in I\}$.


* Logically, $x \in \{x_i \mid i \in I\}$ is equivalent to $\exists i \in I, \,(x = x_i)$.



### Power Sets

> [!abstract] Power Set
> * The **power set** of a set $A$, denoted $\mathcal{P}(A)$, is the set whose elements are all the subsets of $A$.
> 
> 
> * The formal definition is $\mathcal{P}(A) = \{x \mid x \subseteq A\}$.
> 
> 
> 
> 

> [!example] Evaluating a Power Set
> * If $A = \{7, 12\}$, its subsets are $\emptyset, \{7\}, \{12\}$, and $\{7, 12\}$.
> 
> 
> * Therefore, the power set is $\mathcal{P}(A) = \{\emptyset, \{7\}, \{12\}, \{7, 12\}\}$.
> 
> 
> * The power set of the empty set, $\mathcal{P}(\emptyset)$, contains exactly one element: $\{\emptyset\}$. Note that $\{\emptyset\}$ is a set with one element, meaning it is not the same as $\emptyset$.
> 
> 
> 
> 

### Unions and Intersections of Families

We can generalize intersection and union operations to apply to entire families of sets.

> [!abstract] Intersection and Union of a Family of Sets
> Suppose $\mathcal{F}$ is a family of sets:
> 
> 
> * **Intersection ($\cap \mathcal{F}$):** The set containing elements that *all* sets in $\mathcal{F}$ have in common.
> 
> 
> * $\cap \mathcal{F} = \{x \mid \forall A \in \mathcal{F},\,(x \in A)\} = \{x \mid \forall A,\,(A \in \mathcal{F} \to x \in A)\}$.
> 
> 
> 
> 
> * **Union ($\cup \mathcal{F}$):** The set containing elements that belong to *at least one* set in $\mathcal{F}$.
> 
> 
> * $\cup \mathcal{F} = \{x \mid \exists A \in \mathcal{F},\,(x \in A)\} = \{x \mid \exists A,\,(A \in \mathcal{F} \land x \in A)\}$.
> 
> 
> 
> 
> 
> 

If the family of sets is an indexed family denoted as $\mathcal{F} = \{A_i \mid i \in I\}$, an alternative mathematical notation is used:

* **Intersection:** $\cap_{i \in I} A_i = \{x \mid \forall i \in I(x \in A_i)\}$.


* **Union:** $\cup_{i \in I} A_i = \{x \mid \exists i \in I(x \in A_i)\}$.

![[Pasted image 20260924222214.png]]

> [!tip] Analyzing Complex Statements
> When writing out the meaning of complex mathematical statements in logical symbols, a good rule of thumb is to always start by applying the definition of the "outermost" symbol first.
> 
> 

**Key Takeaways**

* Set-builder notation can accommodate expressions before the vertical bar, which implicitly introduces an existential quantifier to define elementhood.


* The power set $\mathcal{P}(A)$ collects all subsets of $A$ into a new set, meaning the elementhood test for $x \in \mathcal{P}(A)$ is $x \subseteq A$.


* Unions and intersections can be applied to entire families of sets, utilizing universal ($\forall$) and existential ($\exists$) quantifiers respectively to define elementhood.


* Indexed notation (using an index set $I$) streamlines the representation of large or infinite families of sets and their corresponding unions ($\cup_{i \in I} A_i$) and intersections ($\cap_{i \in I} A_i$).

---
# ~={red}References=~
[[How_to_Prove_It_A_Structured_Approach_Daniel_J_Velleman_z_library.pdf]] (p, 73)