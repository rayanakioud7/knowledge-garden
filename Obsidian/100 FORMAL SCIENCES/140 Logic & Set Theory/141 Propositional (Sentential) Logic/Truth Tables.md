Date: 2026-07-05
Tags: [[Mathematics]], [[Proofs]], [[Logic]]

---

## 1.2 Truth Tables

To understand how words such as _and_, _or_, and _not_ affect the validity of arguments, we must examine how they contribute to the truth or falsity of the statements containing them.

  

> [!abstract] Truth Value
> 
> When we evaluate the truth or falsity of a statement, we assign it one of the labels _true_ or _false_; this label is called its **truth value**.
> 
>   

We can summarize all the possibilities for a logical formula using a truth table, where each row represents one of the possible combinations of truth values for the component statements.

  

> [!info] Basic Truth Tables
> 
>   
> 
> |**P**|**Q**|**P∧Q**|**P∨Q**|**¬P**|
> |---|---|---|---|---|
> |F|F|F|F|T|
> |F|T|F|T|T|
> |T|F|F|T||
> |T|T|T|T||

> [!warning] Inclusive vs. Exclusive Or
> 
> The word _or_ can be interpreted in two ways: the **inclusive or** (which includes the possibility of both statements being true) and the **exclusive or** (meaning "$P$ or $Q$ but not both"). In mathematics, _or_ always means the inclusive or unless specified otherwise.
> 
>   

---
### Constructing Complex Truth Tables

Using the fundamental rules for $\land$, $\lor$, and $\lnot$, we can work out truth tables for more complex formulas one step at a time. If a formula contains three letters, it requires eight lines to list all possible combinations of truth values.


> [!example] Compact Truth Tables and the Main Connective
> 
> Instead of using separate columns to list the truth values for every component part of a formula, you can list the truth values directly below the corresponding connective symbol in the original formula.
> 
>   
> 
> For example, in evaluating $\lnot(P \lor \lnot Q)$, you would first list the values for $P$ and $Q$, then evaluate $\lnot Q$, then combine $P$ and $\lnot Q$ under the $\lor$ symbol, and finally negate those results under the initial $\lnot$ symbol. The symbol under which the final truth value for the entire formula is listed is called the **main connective**.
> 
>   

### Verifying Arguments with Truth Tables

> [!tip] Verification Strategy: Truth Tables for Arguments
> 
> To verify if a deductive argument is valid using truth tables:
> 
>   
> 
> 1. Construct a truth table that includes columns for all the argument's premises and its conclusion.
>     
>       
>     
> 2. Identify every row where _all_ the premises are true.
>     
>       
>     
> 3. If the conclusion is also true in _every one_ of those rows, the argument is valid.
>     
>       
>     
> 4. If there is even one row where the premises are all true but the conclusion is false, the argument is invalid.
>     
>       
>     

> [!example] Evaluating Argument Validity
> 
> **Premise 1:** $(\lnot S \land L) \lor S$ (Either John isn't stupid and he is lazy, or he's stupid).
> 
> **Premise 2:** $S$ (John is stupid).
> 
> **Conclusion:** $\lnot L$ (John isn't lazy).
> 
>   
> 
> Constructing a truth table reveals a row where $S$ is True and $L$ is True. In this row, both premises evaluate to True, but the conclusion $\lnot L$ evaluates to False. Because it is possible for both premises to be true while the conclusion is false, this argument is invalid.
> 
>   ![[Pasted image 20260825233628.png|center]]

### Logical Equivalences

> [!abstract] Equivalent Formulas
> 
> Formulas that always have the same truth value, no matter what statements the letters in them stand for, are **equivalent**. If two formulas are equivalent, you can always substitute one for the other in any expression, and the results will remain equivalent.
> 
>   

> [!important] Common Logical Equivalences
> 
>   
> 
> - **DeMorgan's laws**:
>     
>       
>     - $\lnot(P \land Q)$ is equivalent to $\lnot P \lor \lnot Q$.
>         
>           
>         
>     - $\lnot(P \lor Q)$ is equivalent to $\lnot P \land \lnot Q$.
>         
>           
>         
> - **Commutative laws**:
>     
>       
>     - $P \land Q$ is equivalent to $Q \land P$.
>         
>           
>         
>     - $P \lor Q$ is equivalent to $Q \lor P$.
>         
>           
>         
> - **Associative laws**:
>     
>       
>     - $P \land (Q \land R)$ is equivalent to $(P \land Q) \land R$.
>         
>           
>         
>     - $P \lor (Q \lor R)$ is equivalent to $(P \lor Q) \lor R$.
>         
>           
>         
> - **Idempotent laws**:
>     
>       
>     - $P \land P$ is equivalent to $P$.
>         
>           
>         
>     - $P \lor P$ is equivalent to $P$.
>         
>           
>         
> - **Distributive laws**:
>     
>       
>     - $P \land (Q \lor R)$ is equivalent to $(P \land Q) \lor (P \land R)$.
>         
>           
>         
>     - $P \lor (Q \land R)$ is equivalent to $(P \lor Q) \land (P \lor R)$.
>         
>           
>         
> - **Absorption laws**:
>     
>       
>     - $P \lor (P \land Q)$ is equivalent to $P$.
>         
>           
>         
>     - $P \land (P \lor Q)$ is equivalent to $P$.
>         
>           
>         
> - **Double Negation law**:
>     
>       
>     - $\lnot\lnot P$ is equivalent to $P$.
>         
>           
>         

Notice that because of the **Associative laws**, we can leave out parentheses in formulas like $P \land Q \land R$ without worrying about ambiguity, as either way of filling in the parentheses leads to equivalent formulas.

---  

### Tautologies and Contradictions

> [!abstract] Tautologies and Contradictions
> 
>   
> 
> - **Tautologies** are formulas that are always true, regardless of the truth values of their component variables (e.g., $P \lor \lnot P$).
>     
>       
>     
> - **Contradictions** are formulas that are always false (e.g., $P \land \lnot P$).
>     
>       
>     

> [!important] Tautology and Contradiction Laws
> 
> **Tautology laws**:
> 
>   
> 
> - $P \land (\text{a tautology})$ is equivalent to $P$.
>     
>       
>     
> - $P \lor (\text{a tautology})$ is a tautology.
>     
>       
>     
> - $\lnot(\text{a tautology})$ is a contradiction.
>     
>       
>     
> 
> **Contradiction laws**:
> 
>   
> 
> - $P \land (\text{a contradiction})$ is a contradiction.
>     
>       
>     
> - $P \lor (\text{a contradiction})$ is equivalent to $P$.
>     
>       
>     
> - $\lnot(\text{a contradiction})$ is a tautology.
>     
>       
>     

> [!example] Using Laws to Find Simpler Formulas
> 
> Find a simpler formula equivalent to $\lnot(Q \land \lnot P) \lor P$:
> 
>   
> 
> $\lnot(Q \land \lnot P) \lor P$
> 
> is equivalent to $(\lnot Q \lor \lnot\lnot P) \lor P$ (**DeMorgan's law**)
> 
> is equivalent to $(\lnot Q \lor P) \lor P$ (**Double negation law**)
> 
> is equivalent to $\lnot Q \lor (P \lor P)$ (**Associative law**)
> 
> is equivalent to $\lnot Q \lor P$ (**Idempotent law**)
> 
>   

**Key Takeaways**

- Truth tables provide a mechanical, exhaustive method for determining the validity of deductive arguments; an argument is only valid if every scenario that makes the premises true also makes the conclusion true.
    
- **Equivalent** formulas share identical truth conditions and can be freely substituted for one another.
    
- Standard algebraic laws of logic (such as **DeMorgan's laws**, **Distributive laws**, and **Associative laws**) allow for the simplification of complex propositions without altering their semantic meaning.
      
- Recognizing **tautologies** (universally true statements) and **contradictions** (universally false statements) unlocks additional rules for simplifying logical expressions.

---
# ~={red}References=~
[[How_to_Prove_It_A_Structured_Approach_Daniel_J_Velleman_z_library.pdf]] (p, 14)