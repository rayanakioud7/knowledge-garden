Date: 2026-08-25
Tags: [[Mathematics]], [[Proofs]], [[Logic]], [[Sets]]

---

## Variables and Sets

In mathematical reasoning, it is often necessary to make statements about objects represented by letters called *variables*. If a statement involves a variable $x$, we often write it as $P(x)$ to stress that it is a statement about $x$, which makes it easy to talk about substituting specific values (e.g., $P(7)$ means plugging $7$ in for $x$). Statements can include multiple variables representing different kinds of objects, such as $D(p, q)$, and these statements can be combined using the standard logical connectives.

When evaluating these statements, their truth values often depend on the specific values of the variables involved. To formally manage this, we use concepts from set theory.

### Basic Set Notation

A *set* is a collection of objects, which are called the elements of the set.

* The simplest way to specify a set is by listing its elements between braces, such as $\{3, 7, 14\}$.
* The symbol $\in$ means "is an element of" (e.g., $7 \in \{3, 7, 14\}$).
* The symbol $\notin$ means "is not an element of" (e.g., $11 \notin \{3, 7, 14\}$).
* A set is completely determined by its elements; the order in which elements are listed does not matter, and listing an element multiple times does not change the set.

For sets with infinitely many elements, or elements that follow a specific pattern, we can use an *elementhood* test rather than an explicit list.

$$B = \{x \mid x \text{ is a prime number}\}$$

This notation is read as "the set of all $x$ such that $x$ is a prime number". The statement "$x$ is a prime number" acts as the elementhood test; any value of $x$ that makes this statement come out true passes the test and is an element of the set.

### Free and Bound Variables

When defining sets using elementhood tests, it is important to distinguish how variables function within the expression.

* In the statement $y \in \{x \mid x^2 < 9\}$, $y$ is a **free variable**, while $x$ is a **bound variable** (or dummy variable).
* Free variables stand for objects that the statement says something about; plugging in different values for a free variable affects the meaning and truth value of the statement.
* Bound variables are simply letters used as a convenience to help express an idea, and do not stand for any particular object. The notation $\{x \mid \dots\}$ binds the variable $x$.
* Bound variables can always be replaced by new variables, or eliminated altogether, without changing the meaning of the statement (e.g., $y \in \{x \mid x^2 < 9\}$ means the exact same thing as $y^2 < 9$). In general, $y \in \{x \mid P(x)\}$ means the same thing as $P(y)$.

### Truth Sets and Universes of Discourse

To distinguish the values of a free variable $x$ that make a statement $P(x)$ true from those that make it false, we collect them into a set.

> [!abstract] Truth Set
> The **truth set** of a statement $P(x)$ is the set of all values of $x$ that make the statement $P(x)$ true. It is defined by using the statement $P(x)$ as an elementhood test:
> Truth set of $P(x) = \{x \mid P(x)\}$.

When statements contain free variables, it is usually clear from context what kind of objects those variables stand for. The set of all possible values for the variables is called the **universe of discourse** for the statement, and we say that the variables *range over* this universe.

> [!info] Standard Universes of Discourse
> Mathematical notation frequently utilizes standard names for common universes of discourse:
> * $\mathbb{R} = \{x \mid x \text{ is a real number}\}$
> * $\mathbb{Q} = \{x \mid x \text{ is a rational number}\}$
> * $\mathbb{Z} = \{x \mid x \text{ is an integer}\} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$
> * $\mathbb{N} = \{x \mid x \text{ is a natural number}\} = \{0, 1, 2, 3, \dots\}$
> 
> 

These letters can be followed by a superscript $+$ or $-$ to restrict the set to only positive or negative numbers (e.g., $\mathbb{R}^+$ for positive real numbers). To explicitly restrict a truth set to a specific universe $U$, we write $\{x \in U \mid P(x)\}$. This notation means that among the elements of $U$, only those that pass the elementhood test $P(x)$ will actually be in the truth set. In general, $y \in \{x \in A \mid P(x)\}$ means the same thing as $y \in A \land P(y)$.

### The Empty Set

If $P(x)$ is a tautology (always true), its truth set encompasses the entire universe $U$. Conversely, if $P(x)$ is a contradiction (always false for every possible value of $x$), nothing can pass the elementhood test, meaning the truth set has no elements.

> [!abstract] The Empty Set
> Because a set is completely determined once its elements are specified, there is only one set that has no elements. It is called the **empty set**, or the null set, and is often denoted $\emptyset$. Alternatively, it can be written as $\{ \}$.

> [!warning] Empty Set Notation Traps
> * The statement $x \in \emptyset$ is an example of a statement that is *always* false, no matter what $x$ is.
> * The notation $\{\emptyset\}$ is *not* correct notation for the empty set. Just as $2$ and $\{2\}$ are not the same thing, $\emptyset$ is not the same as $\{\emptyset\}$. The first is a set with no elements, whereas the second is a set with exactly one element (that element being the empty set itself).
> 
> 

**Key Takeaways**

* Sets represent collections of objects and are primarily defined either explicitly using braces (e.g., $\{3, 7\}$) or conceptually using elementhood tests (e.g., $\{x \mid P(x)\}$).
* In set-builder notation like $\{x \mid P(x)\}$, $x$ acts as a *bound variable* that can be substituted without altering the meaning, while variables in the statement outside the set-builder are *free variables*.
* The set of all valid values that a variable can take is its *universe of discourse* (e.g., $\mathbb{R}, \mathbb{Z}$); appending constraints like $x \in \mathbb{R}$ directly into the definition restricts the truth set to that universe.
* A set containing absolutely zero elements is uniquely identified as the empty set ($\emptyset$ or $\{ \}$); a statement checking for elementhood within the empty set ($x \in \emptyset$) evaluates as a logical contradiction.

---
# ~={red}References=~
[[How_to_Prove_It_A_Structured_Approach_Daniel_J_Velleman_z_library.pdf]] (p, 26)