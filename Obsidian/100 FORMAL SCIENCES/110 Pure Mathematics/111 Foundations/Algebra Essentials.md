Date: 2026-05-09
Tags: [[Mathematics]], [[Foundations]], [[Prerequisites]], [[Algebra]]

---
# 1. Sets

A Set is a collection of distinct objects. these objects are called **elements**
If a set has no elements, it is called an **empty set** or **null set**, denoted $\emptyset$ or $\varnothing$
## Example
Set of *digits* :
$$D=\{0,1,2,3,4,5,6,7,8,9\}$$
the braces `{ }` are used to enclose the **elements** in the set.
This method of denoting a set is called the **roster method**. A second way to denote a set is to use [set-builder notation](https://en.wikipedia.org/wiki/Set-builder_notation) , seen in [[Basic Set Theory]]:

![[Pasted image 20260509002720.png|center|525]]
Another examples:
$$
\{x \in \mathbb{R} \;|\; |x|=1\}\,, \quad \text{is the set} \; \{-1,1\}
$$
$$
E= \{x\;|\;x\text{ is even digit}\}=\{0,2,4,6,8\}
$$
$$
O= \{x\;|\;x\text{ is odd digit}\}=\{1,3,5,7,9\}
$$

> [!important]
> Because the elements of a **set** are distinct, we ~={red}never repeat=~ **elements**. For example, we would never write $\{1,2,3,2\}$; the correct listing is $\{1,2,3\}$.
>  Because a set is a collection, the order in which the elements are listed is immaterial. $\{1,2,3\}$, $\{2,1,3\}$, $\{3,2,1\}$, and so on, all represent the same set.

## Proposition
If every element of set $A$ is also an element of set $B$, then we say $A$ is  **subset** of $B$ denoted $A \subseteq B$.
if they have the same elements then $A=B$.

![[Pasted image 20260509011039.png|center|383]]
### Example
$$
\{1,2,3\} \subseteq \{1,2,3,4,5\}\; \text{ and }\; \{1,2,3\}=\{1,2,3\}
$$

## Definition

If $A$ and $B$ are sets, the *intersection* of $A$ with $B$, denoted $A \cap B$ is the set consisting of elements that belong to both $A$ and $B$. 
The *union* of $A$ with $B$, denoted $A \cup B$ is the set consisting of elements that belong to either $A$ or $B$, or both.
### Example

![[Pasted image 20260509004905.png|center|551]]

> [!NOTE]
> When working with sets we designate a **universal set** $U$, consists of all the elements that we wish to consider.
> ![[Pasted image 20260509010555.png]]

## Definition
If $A$ is a set , the **complement** of A, denoted $\overline{A}$ , is the set consisting of all the elements in the universal set that are not in $A$.
### Example
The universal set $U=\{1,2,3,4,5,6,7,8,9\}$
if $A=\{1,3,5,7,9\}$, then $\overline{A}=\{2,4,6,8\}$
### Proposition
- $A \cup \overline{A}= U$
- $A \cap \overline{A}= \emptyset$

## Proposition 
If $A$ and $B$, are 2 sets, then they are called disjoints, if and only if $A \cap B=\emptyset$

![[Pasted image 20260509010951.png|center|339]]

> [!NOTE]
> [Venn diagrams](https://en.wikipedia.org/wiki/Venn_diagram) to illustrate the definitions of intersection, union and complement, respectively.
> 
> ![[Pasted image 20260509011519.png|637]]
> 
> 

---
# Real Numbers

**Real Numbers** ($\mathbb{R}$) are represented by symbols such as :
$$
25, \quad0,\quad-3,\quad\frac{1}{3},\quad-\frac{5}{4},\quad0.125, \quad\sqrt{2}, \quad \pi,\quad\sqrt[3]{-2}, \quad0.666...
$$
- The set of **counting number**, or **natural numbers** contains the numbers in the set $\{1,2,3,4,...\}$, $\mathbb{N}$
	(The three dots, called an **ellipsis**, indicate that the pattern continues indefinitely)
- The set of **integers** contains the numbers in the set $\{...,-3,-2,-1,0,1,2,3,...\}$, $\mathbb{Z}$

A **rational number** is a number that can be expressed as $\frac{a}{b}$ of two integers. $\mathbb{Q}$
	*Example*: $\frac{3}{4}$, $\frac{5}{2}$, and $-\frac{2}{3}$
Since $\frac{a}{1}=a$, for any integer $a$ then every integer is also a **rational number**.

Real numbers that are not rational are called **irrational** $\mathbb{R}$. Such as $\sqrt{2}$ and $\pi$ (which is the constant ratio of the *circumference* to the *diameter* of a circle).

![[Pasted image 20260509013031.png|center|174]]

Real numbers can represented as *Decimals*. Rational real numbers have decimal representations that either terminate or are nonterminating with **repeating** blocks of digits. For example, $\frac{3}{4}=0,75$ which terminates; and $\frac{2}{3}=0.666$ in which the digit $6$ repeats indefinitely.
Irrational real numbers have decimal representations that neither repeat nor terminate. For example, $\sqrt{2}=1.41213...$ and $\pi=3.14159...$
We usually approximate the decimal representation of irrational numbers using the symbol "$\approx$". For example, $\sqrt{2}\approx 1.4142$.

![[Pasted image 20260517223440.png|center]]

## Properties of Real Numbers

| Property                         | Formula                          | Example                                                                          | Description                                             |
| :------------------------------- | :------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------ |
| **Commutative (Addition)**       | $a+b=b+a$                        | $7+3=3+7$                                                                        | Order doesn’t matter for addition.                      |
| **Commutative (Multiplication)** | $ab=ba$                          | $3 \cdot 5 = 5 \cdot 3$                                                          | Order doesn’t matter for multiplication.                |
| **Associative (Addition)**       | $(a+b)+c=a+(b+c)$                | $(2+4)+7=2+(4+7)$                                                                | Grouping doesn’t matter for addition.                   |
| **Associative (Multiplication)** | $(ab)c=a(bc)$                    | $(3 \cdot 7) \cdot 5 = 3 \cdot (7 \cdot 5)$                                      | Grouping doesn’t matter for multiplication.             |
| **Distributive**                 | $a(b+c)=ab+ac$<br>$(b+c)a=ba+ca$ | $2 \cdot (3+5)=2 \cdot 3 + 2 \cdot 5$<br>$(3+5) \cdot 2 = 3 \cdot 2 + 5 \cdot 2$ | Multiply a sum by distributing the factor to each term. |

- Distributivity:
$$
a \cdot (b+c)=ab+ac
$$
-  Zero-Product:
	If $ab=0$, then either $a=0$ or $b=0$ or both equal $0$

## Addition and Subtraction

The number $0$ is the **additive identity**:  
$$ a + 0 = a \quad \text{for any real } a $$

Every real number $a$ has an **additive inverse** (negative) $-a$, such that:  
$$ a + (-a) = 0 $$

**Subtraction** is defined as adding the negative:  
$$ a - b = a + (-b) $$

> [!info] Properties of Negatives
> | Property | Formula | Example |
> | :--- | :--- | :--- |
> | 1. Multiply by $-1$ | $(-1)a = -a$ | $(-1)5 = -5$ |
> | 2. Double negative | $-(-a) = a$ | $-(-5) = 5$ |
> | 3. Negative times positive | $(-a)b = a(-b) = -(ab)$ | $(-5)7 = 5(-7) = -(5 \cdot 7)$ |
> | 4. Negative times negative | $(-a)(-b) = ab$ | $(-4)(-3) = 4 \cdot 3$ |
> | 5. Distribute negative over sum | $-(a + b) = -a - b$ | $-(3 + 5) = -3 - 5$ |
> | 6. Distribute negative over difference | $-(a - b) = b - a$ | $-(5 - 8) = 8 - 5$ |

## Multiplication and Division

The number $1$ is the **multiplicative identity**:  
$$ a \cdot 1 = a \quad \text{for any real } a $$

Every nonzero real number $a$ has a **multiplicative inverse** (reciprocal) $\frac{1}{a}$, such that:  
$$ a \cdot \frac{1}{a} = 1 $$

**Division** is defined as multiplying by the reciprocal:  
$$ a \div b = a \cdot \frac{1}{b} \quad (b \ne 0) $$

We write $a \cdot \frac{1}{b}$ as $\frac{a}{b}$ — called the **quotient** of $a$ and $b$, or “$a$ over $b$”.  
- $a$: numerator  
- $b$: denominator (or divisor)

> [!info] Properties of Fractions
> | # | Property | Example | Description |
> |---|----------|---------|-------------|
> | 1 | $\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}$ | $\frac{2}{3} \cdot \frac{5}{7} = \frac{10}{21}$ | Multiply numerators and denominators. |
> | 2 | $\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}$ | $\frac{2}{3} \div \frac{5}{7} = \frac{2}{3} \cdot \frac{7}{5} = \frac{14}{15}$ | Invert divisor and multiply. |
> | 3 | $\frac{a}{c} + \frac{b}{c} = \frac{a+b}{c}$ | $\frac{2}{5} + \frac{7}{5} = \frac{9}{5}$ | Same denominator? Add numerators. |
> | 4 | $\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$ | $\frac{2}{5} + \frac{3}{7} = \frac{14 + 15}{35} = \frac{29}{35}$ | Different denominators? Use common denominator. |
> | 5 | $\frac{ac}{bc} = \frac{a}{b}$ | $\frac{2 \cdot 5}{3 \cdot 5} = \frac{2}{3}$ | Cancel common factors in num/denom. |
> | 6 | If $\frac{a}{b} = \frac{c}{d}$, then $ad = bc$ | $\frac{2}{3} = \frac{6}{9} \Rightarrow 2 \cdot 9 = 3 \cdot 6$ | Cross-multiply to check equality. |


---
# The Real Number Line

![[Pasted image 20260509014327.png]]

The **real number line** is a line where every point corresponds to exactly one real number, and every real number corresponds to one point.

- The point **0** is called the **origin**.
- Numbers increase to the **right** and decrease to the **left**.
- The distance between 0 and 1 defines the **scale** of the line.
- Real numbers include:
    - **Integers** $\{...,−1, 0, 1, 2, …\}$
    - **Rational numbers** (like $-\frac{1}{2}$ and $\frac{1}{2}$)
    - **Irrational numbers** (like $\sqrt{2}$ and $\pi$).

## Definition
The real number associated with a point $P$ is called the **coordinate** of $P$, and the line whose points have been assigned coordinates is called the **real number line**.

### The real number line consists of three classes of real numbers

![[Pasted image 20260509014938.png|center|411]]

1. The **negative real numbers** are the coordinates of points to the left of the origin $O$.
2. The real number zero is the coordinate of the origin $O$.
3. The **positive real numbers** are the coordinates of points to the right of the origin $O$.

---
# 2. Graph Inequalities

## Inequalities on the Real Number Line

Given two real numbers $a$ and $b$, exactly one of three relations holds:

| Relation                               | Meaning                 | Notation |
| -------------------------------------- | ----------------------- | -------- |
| $a$ is to the **left** of $b$          | $a$ is less than $b$    | $a < b$  |
| $a$ is at the **same location** as $b$ | $a$ equals $b$          | $a = b$  |
| $a$ is to the **right** of $b$         | $a$ is greater than $b$ | $a > b$  |
![[Pasted image 20260509124747.png|center|313]]

> [!NOTE]
> The symbols $<,\; >,\; \leq,\; \geq$ are called **inequality symbols**.
> - $a \leq b$ means $a < b$ **or** $a = b$
> - $a \geq b$ means $a > b$ **or** $a = b$
> - $a < b$ is th same as $b>a$, furthermore:
> 	- $a<b$ means $b-a$ is **positive**
> - $a<b$ called *strict inequality*
> - $a \leq b$ called *non-strict inequality*

## Proposition

- $a>0$ is equivalent to $a$ is **positive**
- $a<0$ is equivalent to $a$ is **negative**
- $a\geq0$ is equivalent to $a$ is **non-negative**

## Example

> [!example] Graphing Inequalities on the Real Number Line
> 
> **(a)** Graph all $x$ such that $x > 4$
> $$x \in (4, +\infty)$$
> Use a **left parenthesis** `(` at 4 — the endpoint is **not** included.
> 	or we might also use "$]4,+\infty[$".
>
> **(b)** Graph all $x$ such that $x \leq 5$
> $$x \in (-\infty, 5] \quad \text{Or}\quad x \in ]-\infty,5]$$
> Use a **right bracket** `]` at 5 — the endpoint **is** included.

![[Pasted image 20260509133150.png|center|500]]

- see also: [[Interval Notation and Solving Inequalities]]

> [!tip] Notation Rule
> | Symbol | Endpoint included? | Bracket |
> |--------|--------------------|---------|
> | $<$ or $>$ | No | Parenthesis $(\;)$ |
> | $\leq$ or $\geq$ | Yes | Bracket $[\;]$ |

---
# 3. Absolute Value and Distance

The ***absolute value*** of a number $a$ is the distance from 0 to $a$ on the number line.
## Example
- $-4$ is  $4$ units from $0$
- $3$ is $3$ units from $0$
![[Pasted image 20260509133513.png|center|346]]

> [!info] Definition of Absolute Value
> If $a$ is a real number, the **absolute value** of $a$ is:
> $$ |a| = \begin{cases} a & \text{if } a \ge 0 \\ -a & \text{if } a < 0 \end{cases} $$

> [!info] Properties of Absolute Value
> ![[Pasted image 20260518001953.png|center]]

### Definition

If $P$ and $Q$ are two points on a real number line with coordinates $a$ and $b$, the distance between $P$ and $Q$:
$$
d(P,Q)=|b-a|
$$

> [!important] Key Property
> Distance is always **non-negative**: $d(P,Q) \geq 0$
> Order does not matter: $d(P,Q) = d(Q,P)$, since $|b-a| = |a-b|$

## Example

> [!example] Finding Distance on a Number Line
> 
> Let $P = -5$, $Q = 7$, $R = -3$ be points on the real number line.
> 
> ![[Pasted image 20260509134527.png|center]]
> 
> The **distance** between two points $a$ and $b$ is defined as:
> $$d(a,b) = |b - a|$$
> 
> **(a)** Distance between $P$ and $Q$:
> $$d(P,Q) = |7 - (-5)| = |12| = 12$$
> 
> **(b)** Distance between $Q$ and $R$:
> $$d(Q,R) = |-3 - 7| = |-10| = 10$$

---

# 4. Evaluate algebraic expressions

In algebra we use letter like $x,y,z,a,b$ and $c$ to represent numbers. If the letter used is to represent *any* numbers from a given set of numbers, it is called a **variable**.
A **constant** is either a fixed number, such as $5$ or $\sqrt{3}$, or a letter that represents a fixed (possibly unspecified) number

Both **constant** and **variables** are combined using the operations of addition, subtraction, multiplication, and division to form *algebraic expressions*. 
## Example
$$
x+3 \quad \frac{3}{1-t} \quad 7x-2y
$$
> To evaluate an algebraic expression, substitute for each variable its numerical
> value.

> [!example] Evaluating Algebraic Expressions at $x = 3,\; y = -1$
>
> | Expression | Substitution | Result |
> |---|---|---|
> | $x + 3y$ | $3 + 3(-1)$ | $0$ |
> | $5xy$ | $5(3)(-1)$ | $-15$ |
> | $\dfrac{3y}{2-2x}$ | $\dfrac{3(-1)}{2-2(3)} = \dfrac{-3}{-4}$ | $\dfrac{3}{4}$ |
> | $\lvert -4x+y \rvert$ | $\lvert -12+(-1) \rvert = \lvert -13 \rvert$ | $13$ |

---
# 5. Determine the Domain of a Variable

> [!info] Definition
> The set of all values a variable is **allowed** to assume is called the **domain** of the variable.

Two constraints that restrict a domain:

| Constraint                                      | Reason                                            | Example                              |
| ----------------------------------------------- | ------------------------------------------------- | ------------------------------------ |
| Denominator $\neq 0$                            | Division by 0 is undefined                        | $\frac{5}{x-2} \Rightarrow x \neq 2$ |
| Geometric context                               | Physical quantities must be positive              | $C = 2\pi r \Rightarrow r > 0$       |
| $\sqrt{\text{expression}} \geq 0 expression​≥0$ | Square root of negative undefined in $\mathbb{R}$ | $\sqrt{x-3} \Rightarrow x \geq 3$    |


> [!example] Examples
>
> **(a)** $\dfrac{5}{x-2}$: domain is $\{x \mid x \neq 2\}$, since $x=2$ makes denominator $= 0$
>
> **(b)** $C = 2\pi r$: domain of $r$ is $(0, +\infty)$, since radius must be positive.
> Domain of $C$ is also $(0, +\infty)$ since circumference inherits the same constraint.

> [!tip]
> Domain can be expressed in **set notation** $\{x \mid x \neq 2\}$ or **interval notation** $(0, +\infty)$ — use whichever is cleaner for the context.

---
# 6. Use the Laws of Exponents

> [!info] Definition
> If $a$ is a real number and $n$ is a positive integer, then the symbol $a^n$ represents the product of $n$ factors of $a$. That is,
> $$a^n=\underbrace{a\cdot a\cdot ...\cdot a}_{n}$$
> - $a^1=a$
> - $a^2=a\cdot a$
> - and so on...
> 

$a$ is called the **base** and $n$ is called the **exponent** or **power** 
We usually read as $a^2$ “a squared” and $a^3$ as “a cubed.”

> [!important] Key Property
> If $a\not=0$, $n$ is a positive integer we define:
> $$a^0=1$$
> $$a^{-n}=\frac{1}{a^n}$$

## Theorem: Laws of Exponents

Let $a, b \in \mathbb{R}$ and $m, n \in \mathbb{Z}$:

![[Pasted image 20260509145624.png|637]]

## Laws of Exponents

Let $a, b \in \mathbb{R}$ and $m, n \in \mathbb{Z}$:

| Law | Formula |
|-----|---------|
| Product | $a^m \cdot a^n = a^{m+n}$ |
| Power of a power | $(a^m)^n = a^{mn}$ |
| Power of a product | $(ab)^n = a^n b^n$ |
| Quotient | $\dfrac{a^m}{a^n} = a^{m-n} = \dfrac{1}{a^{n-m}} \quad a \neq 0$ |
| Power of a quotient | $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n} \quad b \neq 0$ |

> [!example] Using the Laws of Exponents — Writing with Positive Exponents
>
> **(a)** $\dfrac{x^5 y^{-2}}{x^3 y}, \quad x \neq 0,\; y \neq 0$
>
> $$\frac{x^5 y^{-2}}{x^3 y} = \frac{x^5}{x^3} \cdot \frac{y^{-2}}{y} = x^{5-3} \cdot y^{-2-1} = x^2 y^{-3} = \frac{x^2}{y^3}$$
>
> **(b)** $\left(\dfrac{x^{-3}}{3y^{-1}}\right)^{-2}, \quad x \neq 0,\; y \neq 0$
>
> $$\left(\frac{x^{-3}}{3y^{-1}}\right)^{-2} = \frac{(x^{-3})^{-2}}{(3y^{-1})^{-2}} = \frac{x^{6}}{3^{-2}(y^{-1})^{-2}} = \frac{x^6}{\frac{1}{9} \cdot y^2} = \frac{9x^6}{y^2}$$

## Scientific Notation

> [!info] Scientific Notation
> A positive number $x$ is in **scientific notation** if written as:
> $$ x = a \times 10^n \quad \text{where } 1 \le a < 10 \text{ and } n \in \mathbb{Z} $$

- **Positive exponent $n$**: move decimal point $n$ places to the **right**.  
  Example: $4 \times 10^{13} = 40,000,000,000,000$

![[Pasted image 20260518002844.png|center]]

- **Negative exponent $n$**: move decimal point $|n|$ places to the **left**.  
  Example: $1.66 \times 10^{-24} = 0.000\ldots00166$ (24 zeros after decimal before 166)

![[Pasted image 20260518002911.png|center]]


---

# 7. Evaluate Square Roots

A real number is squared when it is raised to the power of $2$. The *inverse* of squaring is finding a **square root**. 
## Example
since $6^2=36$ and $(-6)^2=36$, the numbers $6$ and $-6$ are square roots of $36$
the symbol $\sqrt{}$ called a **radical sign**, For example: $\sqrt{36}=6$

> [!info] Definition of $n$th Root
> If $n$ is a positive integer, the **principal $n$th root** of $a$ is defined by:
> $$ \sqrt[n]{a} = b \quad \text{means} \quad b^n = a $$
>
> - If $n$ is **even**, then we require $a \ge 0$ and $b \ge 0$.  
> - If $n$ is **odd**, $a$ can be any real number; $b$ has the same sign as $a$.

*Note: The principal root is always nonnegative when it exists for even roots.*

> [!important] Key Properties of Square Roots in $\mathbb{R}$
>
> | # | Property | Example |
> |---|-----------|---------|
> | 1 | $\sqrt{a}$ is **undefined** in $\mathbb{R}$ if $a < 0$ | $\sqrt{-4} \notin \mathbb{R}$ |
> | 2 | $\sqrt{0} = 0$ | $0^2 = 0$ |
> | 3 | $\sqrt{a} > 0$ for all $a > 0$ | $\sqrt{4} = 2$, not $-2$ |
> | 4 | $(\sqrt{c})^2 = c \quad$ if $c \geq 0$ | $(\sqrt{3})^2 = 3$ |

> [!warning] Why property 4 requires $c \geq 0$
> The rule $(\sqrt{c})^2 = c$ **breaks down** for negatives in $\mathbb{R}$.
> If $c = -4$: $\sqrt{-4}$ doesn't exist in $\mathbb{R}$, so the left side is undefined.
> In $\mathbb{C}$ however: $\sqrt{-4} = 2i \Rightarrow (2i)^2 = -4$ ✓ — but that's a different number system entirely.

![[Pasted image 20260518003130.png]]

> [!tip]
> The **principal square root** of $a^2$ is defined whether $a>0$ or $a<0$, since $a^2>0$.
> But since the **principal square root** is non-negative, we need an absolute value to ensure the non-negative results.
> $$
> \forall a \in \mathbb{R}, \quad \sqrt{a^2}=|a|
> $$

> [!example] Simplifying $\sqrt{a^2} = |a|$
>
> | Expression | Simplification | Result |
> |---|---|---|
> | $\sqrt{(2.3)^2}$ | $= \|2.3\|$ | $= 2.3$ |
> | $\sqrt{(-2.3)^2}$ | $= \|-2.3\|$ | $= 2.3$ |
> | $\sqrt{x^2}$ | $= \|x\|$ | for all $x \in \mathbb{R}$ |

---

> [!info] Definition of Rational Exponents
> For any rational exponent $\frac{m}{n}$ in lowest terms, where $m,n \in \mathbb{Z}$ and $n > 0$:
> $$ a^{m/n} = (\sqrt[n]{a})^m \quad \text{or equivalently} \quad a^{m/n} = \sqrt[n]{a^m} $$
>
> - If $n$ is **even**, require $a \ge 0$.  
> - If $n$ is **odd**, $a$ can be any real number.

This definition ensures consistency with the Laws of Exponents.

*Derivation insight:*  
To preserve $(a^{1/n})^n = a$, we define $a^{1/n} = \sqrt[n]{a}$. Then extend to $a^{m/n} = (a^{1/n})^m$.

---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. A1 - A10)