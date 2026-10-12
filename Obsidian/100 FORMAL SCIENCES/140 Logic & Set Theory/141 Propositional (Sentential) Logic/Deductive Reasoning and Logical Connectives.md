Date: 2026-07-04
Tags: [[Mathematics]], [[Proofs]], [[Logic]]

---
## Deductive Reasoning and Logical Connectives

Proofs play a central role in mathematics, and deductive reasoning is the foundation on which proofs are based. In deductive reasoning, we arrive at a conclusion based on the assumption that other statements, called _premises_, are true.

> [!example] Examples of Deductive Reasoning
> 
> 1. It will either rain or snow tomorrow. It's too warm for snow. Therefore, it will rain.
>     
> 2. If today is Sunday, then I don't have to go to work today. Today is Sunday. Therefore, I don't have to go to work today.
>     
> 3. I will go to work either tomorrow or today. I'm going to stay home today. Therefore, I will go to work tomorrow.
>     

### Validity of Arguments

In a deductive argument, the conclusion seems to be forced on us by the premises.

> [!abstract] Valid Argument
> 
> An argument is considered **valid** if the premises cannot all be true without the conclusion being true as well. If both premises are true, we can be sure that the conclusion is also true.

An argument can be invalid if the conclusion could be false even when both premises are true.

> [!example] Invalid Deductive Argument
> 
> Either the butler is guilty or the maid is guilty.
> 
> Either the maid is guilty or the cook is guilty.
> 
> Therefore, either the butler is guilty or the cook is guilty.
> 
> _Why it's invalid:_ If the maid were guilty, but the butler and the cook were both innocent, then both premises would be true and the conclusion would be false.

### Logical Form and Connectives

What makes an argument valid is its _form_, not its subject matter. For instance, the first and third arguments in the initial example share the same underlying logic:

$$P \text{ or } Q.$$

$$\text{not } Q.$$

$$\text{Therefore, } P.$$

Replacing specific statements with letters (such as $P$ and $Q$) keeps us from being distracted by aspects of the argument that don't affect its validity. Ultimately, the meanings of a few connecting words—like _or_ and _not_—give the key to understanding what makes reasoning valid or invalid.

> [!info] Connective Symbols
> 
> |**Symbol**|**Meaning**|
> |---|---|
> |$\lor$|or|
> |$\land$|and|
> |$\lnot$|not|

> [!abstract] Logical Connective Terminology
> 
> - The statement $P \lor Q$ is called the **disjunction** of $P$ and $Q$.
>     
> - The statement $P \land Q$ is called the **conjunction** of $P$ and $Q$.
>     
> - The statement $\lnot P$ is called the **negation** of $P$.
>     

When analyzing complex statements, it is often helpful to progressively break down the logical components and extract implicit negations.

> [!example] Analyzing Logical Forms
> 
> **Statement:** Joe is going to leave home and not come back.
> 
> _Initial Analysis:_ If we let $P$ stand for "Joe is going to leave home" and $Q$ stand for "Joe is not going to come back," we could represent this as $P \land Q$.
> 
> _Improved Analysis:_ The first analysis misses an important feature: it doesn't indicate that $Q$ is a negative statement. By letting $R$ stand for "Joe is going to come back," we can write $Q$ as $\lnot R$. Plugging this in gives the improved symbolic representation $P \land \lnot R$.
> 
> **Statement:** Either Bill is at work and Jane isn't, or Jane is at work and Bill isn't.
> 
> _Analysis:_ Let $B$ be "Bill is at work" and $J$ be "Jane is at work." The first half is $B \land \lnot J$, and the second half is $J \land \lnot B$. To represent the entire statement, we combine them with a disjunction: $(B \land \lnot J) \lor (J \land \lnot B)$.

> [!warning] Order of Operations for Negation
> 
> The negation symbol $\lnot$ always applies _only_ to the statement that comes immediately after it. For example, $\lnot P \land Q$ means $(\lnot P) \land Q$, rather than $\lnot(P \land Q)$. Similar to algebra, parentheses should be used to unambiguously indicate which statements are being combined.

---

**Key Takeaways**

- Deductive reasoning relies on arguments where the truth of the premises guarantees the truth of the conclusion; an argument is valid if the premises cannot all be true without the conclusion also being true.
    
- The validity of an argument is determined by its logical form rather than its subject matter, which allows us to replace statements with abstract variables.
    
- Complex logical statements are constructed using standard connective symbols: $\lor$ (disjunction/or), $\land$ (conjunction/and), and $\lnot$ (negation/not).
    
- The negation symbol ($\lnot$) binds strictly to the proposition immediately following it; parentheses are essential for establishing unambiguous order of operations in compound expressions.

---

### Translating Between English and Logic

When translating complex expressions between logical symbols and natural language, the placement of specific English words can help clarify where parentheses belong.

> [!example] Example 1.1.3: Translating Logical Expressions
> 
> Suppose $S$ stands for "John is stupid" and $L$ stands for "John is lazy." We can translate the following symbolic expressions into English:
> 
> 1. $(\lnot S \land L) \lor S$: "Either John isn't stupid and he is lazy, or he's stupid."
>     
> 2. $\lnot S \land (L \lor S)$: "John isn't stupid, and either he's lazy or he's stupid." Notice how the placement of the word _either_ changes based on the parentheses.
>     
> 3. $\lnot(S \land L) \lor S$: "Either John isn't both stupid and lazy, or John is stupid." Here, the word _both_ helps distinguish the parenthesis position.
>     

> [!warning] Translation Traps
> 
> - **Non-logical uses of "and":** The symbol $\land$ cannot represent the word _and_ in the sentence "John and Bill are friends," because it is not combining two statements.
>     
> - **"But" often means "And":** The word _but_ is frequently used in English to mean _and_ (conjunction), particularly when conveying a contrast (e.g., "John isn't stupid _but_ he is lazy").
>     
> - **Meaning over word-for-word translation:** A statement like "Rain and snow are the only two possibilities" uses the word _and_, but logically expresses a ~={orange}disjunction=~ (either rain or snow). Always determine the logical form by analyzing what the statement means, rather than translating it strictly word by word.
>     

### Well-Formed Formulas

The connective symbols have strict grammatical rules, much like arithmetic operators in algebra. The symbols $\land$ and $\lor$ act as operators _between_ two statements, whereas the symbol $\lnot$ is applied _before_ a statement to negate it.

> [!abstract] Well-Formed Formulas
> 
> Meaningless, "ungrammatical" strings of logical symbols (such as $P \lnot \land Q$ or $P - Q$) are invalid. "Grammatical" expressions that correctly follow the syntactic rules of logical connectives are called **well-formed formulas**, or simply **formulas**.

### Hidden Logical Connectives in Mathematics

Sometimes logical words are embedded implicitly within standard mathematical notation.

> [!example] Unpacking Mathematical Notation
> 
> - **Simple inequalities:** The statement $3 \le \pi$ appears to contain no logical words, but read aloud, it means $3 < \pi$ _or_ $3 = \pi$. Instead of abbreviating these short statements with variables, we can write the logical form directly as $(3 < \pi) \lor (3 = \pi)$.
>     
> - **Compound inequalities:** The statement $3 \le \pi < 4$ combines multiple relations. It means $3 \le \pi$ _and_ $\pi < 4$. Expanding the hidden logic of both parts yields the full formula: $[(3 < \pi) \lor (3 = \pi)] \land (\pi < 4)$. Uncovering this logical form is often crucial for understanding mathematical reasoning.
>     

**Key Takeaways**

- Natural language requires careful analysis to translate into logic; words like "but" often represent logical conjunction ($\land$), and words like "either" or "both" dictate the placement of parentheses.
    
- Logical symbols must follow strict grammatical rules to create meaningful expressions, known as **well-formed formulas**.
    
- Standard mathematical notations (like $\le$ or chained inequalities) frequently hide implicit logical connectives ($\lor$ and $\land$) that must be explicitly unpacked to reveal the statement's true logical form.


---
# ~={red}References=~
[[How_to_Prove_It_A_Structured_Approach_Daniel_J_Velleman_z_library.pdf]] (p, 8)