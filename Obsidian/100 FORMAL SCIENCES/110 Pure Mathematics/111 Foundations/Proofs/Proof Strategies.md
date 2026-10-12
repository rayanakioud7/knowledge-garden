Date: 2026-10-01
Tags: [[Mathematics]], [[Proofs]], [[Logic]], 
 
---

## 3.1 Proof Strategies

* A theorem states that if certain assumptions (called the **hypotheses**) are true, a specific conclusion must also be true.


* An **instance** of a theorem is an assignment of particular values to its free variables.


* If there is even one instance where the hypotheses are true but the conclusion is false, the theorem is incorrect; this instance is called a **counterexample**.


* A mathematical proof is a deductive argument where the premises are the theorem's hypotheses and the conclusion is the theorem's conclusion.



> [!warning] The Primary Rule of Proof Writing
> "I shall make no assertion before its time."
> You must never assert that a statement is true in a proof unless you can completely justify it using the hypotheses or conclusions reached earlier in the proof. Asserting unverified claims leads to circular reasoning; however, safely *assuming* a statement is true for the sake of argument (to trace its logical consequences) is a valid transformation strategy.
> 
> 

### Givens and Goals

* During the process of figuring out a proof (the scratch work phase), the statements known or assumed to be true are tracked as **givens**.


* The statement that remains to be proven at any point is tracked as the **goal**.


* Proof techniques operate by continually revising the givens and the goal to transform the problem into an equivalent but easier problem, until the goal obviously follows from the givens.



### Proving Conditional Statements

> [!tip] Strategy: Direct Proof of a Conditional
> **When to use:** To prove a goal of the form $P \to Q$. By assuming $P$, you transform the problem into a new one where $P$ is added to the givens and the goal becomes $Q$.
> 
> 
> **Scratch work:**
> *Before using strategy:*
> Givens: $\dots$ | Goal: $P \to Q$
> 
> *After using strategy:*
> Givens: $\dots$, $P$ | Goal: $Q$
> 
> **Form of final proof:**
> Suppose $P$.
> [Proof of $Q$ goes here.]
> Therefore $P \to Q$.
> 
> 

> [!example] Example 3.1.2: Direct Proof
> **Theorem:** Suppose $a$ and $b$ are real numbers. If $0 < a < b$ then $a^2 < b^2$.
> 
> 
> **Scratch work:**
> *Givens:* $a$ and $b$ are real numbers; $0 < a < b$.
> *Goal:* $a^2 < b^2$.
> Comparing the inequalities $a < b$ and $a^2 < b^2$ suggests multiplying both sides of the given inequality by $a$ or $b$. Because $a$ and $b$ are positive, we don't reverse the inequality direction. Multiplying $a < b$ by $a$ yields $a^2 < ab$, and multiplying it by $b$ yields $ab < b^2$. Thus $a^2 < ab < b^2$, which gives $a^2 < b^2$.
> 
> 
> **Formal Proof:**
> Suppose $0 < a < b$. Multiplying the inequality $a < b$ by the positive number $a$ we can conclude that $a^2 < ab$, and similarly multiplying by $b$ we get $ab < b^2$. Therefore $a^2 < ab < b^2$, so $a^2 < b^2$, as required. Thus, if $0 < a < b$ then $a^2 < b^2$. $\blacksquare$
> 

> [!tip] Strategy: Proof by Contrapositive
> **When to use:** As a second method for proving a goal of the form $P \to Q$. Because $P \to Q$ is logically equivalent to its contrapositive $\lnot Q \to \lnot P$, you can prove the latter instead.
> 
> 
> **Scratch work:**
> *Before using strategy:*
> Givens: $\dots$ | Goal: $P \to Q$
> 
> *After using strategy:*
> Givens: $\dots$, $\lnot Q$ | Goal: $\lnot P$
> 
> **Form of final proof:**
> Suppose $Q$ is false.
> [Proof of $\lnot P$ goes here.]
> Therefore $P \to Q$.
> 
> 

> [!example] Example 3.1.3: Proof by Contrapositive
> **Theorem:** Suppose $a$, $b$, and $c$ are real numbers and $a > b$. Prove that if $ac \le bc$ then $c \le 0$.
> 
> 
> **Scratch work:**
> *Initial Givens:* $a, b, c$ are real numbers; $a > b$.
> *Initial Goal:* $(ac \le bc) \to (c \le 0)$.
> The contrapositive of the goal is $\lnot(c \le 0) \to \lnot(ac \le bc)$, which translates to $(c > 0) \to (ac > bc)$.
> *New Givens:* $a, b, c$ are real numbers; $a > b$; $c > 0$.
> *New Goal:* $ac > bc$.
> From the given $c > 0$, the goal $ac > bc$ follows immediately from multiplying both sides of the given $a > b$ by the positive number $c$.
> 
> 
> **Formal Proof:**
> We will prove the contrapositive. Suppose $c > 0$. Then we can multiply both sides of the given inequality $a > b$ by $c$ and conclude that $ac > bc$. Therefore, if $ac \le bc$ then $c \le 0$. $\blacksquare$
> 

### Conventions of Formal Proof Writing

* **Avoid logical symbols:** While logical symbols ($\to, \land, \lor$) are used freely in scratch work, mathematicians generally avoid them in the final write-up, sticking to ordinary English.


* **Omit psychological steps:** The final proof rarely refers explicitly to "givens" and "goals". It provides mathematical justification for the conclusions, omitting explanations of the thought processes or scratch work used to discover those steps.



**Key Takeaways**

* A theorem is invalidated by a single counterexample (an instance where hypotheses are true but the conclusion is false), but can only be verified by a rigorous deductive argument called a proof.


* Proof construction separates internal "scratch work" (tracking *givens* and *goals*) from the final formal write-up (which consists strictly of mathematically justified assertions written in plain English).


* To prove a conditional statement $P \to Q$ directly, assume $P$ as a new given and set $Q$ as the new goal.


* To prove $P \to Q$ by contraposition, assume the negation of the consequent ($\lnot Q$) as a new given and set the negation of the antecedent ($\lnot P$) as the new goal.

---
# ~={red}References=~
[[How_to_Prove_It_A_Structured_Approach_Daniel_J_Velleman_z_library.pdf]] (p, 84)