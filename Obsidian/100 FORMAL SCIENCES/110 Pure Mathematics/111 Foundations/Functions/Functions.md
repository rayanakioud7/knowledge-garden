Date: 2026-05-16
Tags: [[Mathematics]], [[Foundations]]

---

## 1 Determine Whether a Relation Represents a Function

### Relations vs. Functions

> [!info] **Relation** 
>  **Relation**: A correspondence between two sets. If $x$ and $y$ are elements in these sets and a relation exists between them, we say that $x$ **corresponds to** $y$ or that $y$ **depends on** $x$, written as $x \rightarrow y$.

> [!NOTE] Function
> > **Function**: A special type of relation where **each input corresponds to exactly one output**.

---

### Ways to Express Relations

#### 1. Equations
The equation $y = 3x - 1$ defines a relation where:
- $x$ serves as the **input**
- $y$ is the **output**

![[Pasted image 20260516163333.png]]

#### 2. Mapping Diagrams
A **map** illustrates a relation using a set of inputs with arrows drawn to corresponding outputs.

![[Pasted image 20260517120101.png|252]]
#### 3. Ordered Pairs
Written as $(x, y)$ to represent $x \rightarrow y$

#### 4. Graphs
Visual representation in the coordinate plane

---

### EXAMPLE 1: Maps and Ordered Pairs as Relations

A relation between states and their number of representatives in the House of Representatives:

***Mapping diagram** showing states (Alaska, Arizona, California, Colorado, Florida, North Dakota) mapped to their number of representatives (1, 8, 53, 7, 25, 1):*
![[Pasted image 20260516163420.png|center|514]]

This relation expressed as **ordered pairs**:
$$\{(Alaska, 1), (Arizona, 8), (California, 53), (Colorado, 7), (Florida, 25), (North Dakota, 1)\}$$

**Note**: Multiple inputs can map to the same output (Alaska and North Dakota both have 1 representative).

---

### The Definition of a Function

> [!info] Definition: Function
> Let $X$ and $Y$ be two nonempty sets. A **function** from $X$ into $Y$ is a relation that associates with **each element of $X$ exactly one element of $Y$**.

**Key Terminology:**
- **Domain**: The set $X$ (all inputs)
- **Range**: The set of all images of elements in the domain (subset of $Y$)
- **Value/Image**: For each element $x$ in $X$, the corresponding element $y$ in $Y$

![[Pasted image 20260516163603.png|center|498]]

---

### EXAMPLE 2: Determining Whether a Relation Represents a Function

**(a) Calories vs. Fat Content in Fast Food**

![[Pasted image 20260516163703.png|center|501]]

**Analysis:**
- Each calorie value maps to exactly one fat content value
- ~={green}**This IS a function**=~
- Domain: $\{470, 670, 630, 540, 360\}$
- Range: $\{21, 40, 39, 29, 16\}$

---

**(b) Gas Stations vs. Price per Gallon**

![[Pasted image 20260516163747.png|center|421]]

**Analysis:**
- Each station has exactly one price
- Multiple stations can have the same price (Shell and 7-Eleven both charge $2.72)
- ~={green}**This IS a function**=~
- Domain: $\{Mobil, Shell, Sunoco, 7\text{-}Eleven\}$
- Range: $\{\$2.69, \$2.71, \$2.72\}$

---

**(c) Diamond Carats vs. Price**

![[Pasted image 20260516163819.png|center|337]]

**Analysis:**
- The input 0.71 carats maps to TWO different prices ($1575 and $1765)
- ~={red}**This is NOT a function**=~
- A single input cannot have multiple outputs

---

> [!note] The Predictability Principle
> The key idea behind a function is **predictability**. If the input is known, we can determine the output with certainty. With non-functions, this predictability does not exist.

---

### EXAMPLE 3: Testing Ordered Pairs

Determine whether each relation represents a function:

**(a)** $\{(1, 4), (2, 5), (3, 6), (4, 7)\}$

**Solution:** ~={green}This IS a function=~. No ordered pairs have the same first element with different second elements.
- Domain: $\{1, 2, 3, 4\}$
- Range: $\{4, 5, 6, 7\}$

**(b)** $\{(1, 4), (2, 4), (3, 5), (6, 10)\}$

**Solution:** ~={green}This IS a function=~. Different first elements can have the same second element (both 1 and 2 map to 4). This does not violate the definition.
- Domain: $\{1, 2, 3, 6\}$
- Range: $\{4, 5, 10\}$

**(c)** $\{(-3, 9), (-2, 4), (0, 0), (1, 1), (-3, 8)\}$

**Solution:** ~={red}This is NOT a function=~. The ordered pairs $(-3, 9)$ and $(-3, 8)$ have the same first element but different second elements.

---

### Testing Equations for Functions

> [!tip]
> To determine whether an equation defines $y$ as a function of $x$, solve for $y$. If any value of $x$ corresponds to more than one $y$, the equation does not define a function.

### EXAMPLE 4: Linear Equation

**Determine if $y = 2x - 5$ defines $y$ as a function of $x$.**

**Solution:**

For any input $x$, the operations (multiply by 2, subtract 5) yield exactly one output $y$.

- If $x = 1$, then $y = 2(1) - 5 = -3$
- If $x = 3$, then $y = 2(3) - 5 = 1$

~={green}**This IS a function=~.**

---

### EXAMPLE 5: Circle Equation

**Determine if $x^2 + y^2 = 1$ defines $y$ as a function of $x$.**

**Solution:**

Solve for $y$:
$$x^2 + y^2 = 1$$
$$y^2 = 1 - x^2$$
$$y = \pm\sqrt{1 - x^2}$$

The $\pm$ symbol indicates that for values of $x$ between $-1$ and $1$, TWO values of $y$ result.

- If $x = 0$, then $y = \pm 1$ (two different outputs from the same input)

~={red}**This is NOT a function.**=~

---

> [!important] Key Distinction
> - **Many-to-one**: Allowed (different inputs → same output)
> - **One-to-many**: Forbidden (same input → different outputs)

---

# 2.2 Find the Value of a Function

## Function Notation and Terminology

Functions are typically denoted by letters such as $f$, $F$, $g$, or $G$. If $f$ is a function, then for each number $x$ in its domain, the corresponding image in the range is designated by the symbol: $$f(x)$$
*   **Read as**: "$f$ of $x$" or "$f$ at $x$".
*   **Meaning**: The number that results when $x$ is given and the function $f$ is applied.
*   **Warning**: $f(x)$ does **not** mean "$f$ times $x$".

### Visualizing Functions

We can visualize functions using mapping diagrams where every element in the domain maps to exactly one element in the range.

![[Pasted image 20260516183456.png]]

*   **(a)** $f(x) = x^2$: Inputs like $1$ and $-1$ both map to output $1$.
*   **(b)** $F(x) = \frac{1}{x}$: Reciprocal function.
*   **(c)** $g(x) = \sqrt{x}$: Square root function.
*   **(d)** $G(x) = 3$: Constant function. All inputs map to the single output $3$.

---

## The Function Machine Analogy

It is often helpful to think of a function $f$ as a machine.

![[Pasted image 20260516183519.png|center|423]]

1.  **Input**: The machine receives a number $x$ from the domain.
2.  **Processing**: The machine manipulates the input according to the function's rule.
3.  **Output**: The machine produces a value $y = f(x)$.

**Restrictions on the Machine:**
1.  It only accepts numbers from the **domain** of the function.
2.  For each input, there is **exactly one output** (though different inputs may produce the same output).

### Variables and Arguments

*   **Independent Variable ($x$)**: Also called the **argument** of the function. It can be assigned any permissible number from the domain.
*   **Dependent Variable ($y$)**: Its value depends on the choice of $x$.
*   **Symbol Independence**: The specific symbol used does not matter. $f(x) = x^3$, $f(t) = t^3$, and $f(z) = z^3$ all represent the same rule: "cube the input."

> [!tip] Thinking in Terms of Arguments
> Thinking of the independent variable as an "argument" helps in evaluation.
> If $f(x) = x^3$, then:
> *   $f(2)$ means "cube 2".
> *   $f(a)$ means "cube $a$".
> *   $f(x+h)$ means "cube the quantity $(x+h)$".

---
## Net Change

The **net change** in the value of a function $f$ as the input changes from $a$ to $b$ (where $a \le b$) is given by:
$$ \text{Net Change} = f(b) - f(a) $$

> [!example] Example 5: Finding Net Change
> Let $f(x) = x^2$. Find the net change in the value of $f$ between the given inputs.
> (a) From 1 to 3
> (b) From $-2$ to 2

**Solution**
(a) The net change is $f(3) - f(1) = 9 - 1 = 8$.
(b) The net change is $f(2) - f(-2) = 4 - 4 = 0$.

---
# Evaluating a Function
## EXAMPLE 6: Finding Values of a Function

**Given Function:**
$$ f(x) = 2x^2 - 3x $$

We will evaluate this function for various arguments.

### (a) Evaluate $f(3)$:
Substitute $3$ for every instance of $x$.
$$ f(3) = 2(3)^2 - 3(3) = 18 - 9 = 9 $$
**Result:** The image of $3$ is $9$.

### (b) Evaluate $f(x) + f(3)$:
Add the function expression to the value found in part (a).
$$ f(x) + f(3) = (2x^2 - 3x) + 9 = 2x^2 - 3x + 9 $$

### (c) Evaluate $3f(x)$:
Multiply the entire function expression by $3$.
$$ 3f(x) = 3(2x^2 - 3x) = 6x^2 - 9x $$

### (d) Evaluate $f(-x)$:
Substitute $-x$ for $x$. Be careful with parentheses.
$$ f(-x) = 2(-x)^2 - 3(-x) $$
Since $(-x)^2 = x^2$:
$$ f(-x) = 2x^2 + 3x $$

### (e) Evaluate $-f(x)$:
Multiply the entire function by $-1$.
$$ -f(x) = -(2x^2 - 3x) = -2x^2 + 3x $$

> [!warning] Common Mistake
> Notice that $f(-x) \neq -f(x)$ in this specific function.
> *   $f(-x) = 2x^2 + 3x$
> *   $-f(x) = -2x^2 + 3x$

### (f) Evaluate $f(3x)$:
Substitute $3x$ for $x$.
$$ f(3x) = 2(3x)^2 - 3(3x) $$
$$ f(3x) = 2(9x^2) - 9x = 18x^2 - 9x $$

> [!warning] Common Mistake
> Notice that $f(3x) \neq 3f(x)$.
> *   $f(3x) = 18x^2 - 9x$
> *   $3f(x) = 6x^2 - 9x$

### (g) Evaluate $f(x+3)$:
Substitute $(x+3)$ for $x$.
$$ f(x+3) = 2(x+3)^2 - 3(x+3) $$
Expand the squared term and distribute:
$$ = 2(x^2 + 6x + 9) - 3x - 9 $$
$$ = 2x^2 + 12x + 18 - 3x - 9 $$
Combine like terms:
$$ = 2x^2 + 9x + 9 $$

> [!warning] Common Mistake
> Notice that $f(x+3) \neq f(x) + f(3)$.
> *   $f(x+3) = 2x^2 + 9x + 9$
> *   $f(x) + f(3) = 2x^2 - 3x + 9$

### (h) The Difference Quotient:

Evaluate $\frac{f(x+h) - f(x)}{h}$ where $h \neq 0$.

This expression is fundamental to calculus.

**Step 1: Find $f(x+h)$**
$$ f(x+h) = 2(x+h)^2 - 3(x+h) $$
$$ = 2(x^2 + 2xh + h^2) - 3x - 3h $$
$$ = 2x^2 + 4xh + 2h^2 - 3x - 3h $$

**Step 2: Set up the numerator $f(x+h) - f(x)$**
$$ [2x^2 + 4xh + 2h^2 - 3x - 3h] - [2x^2 - 3x] $$
$$ = 2x^2 + 4xh + 2h^2 - 3x - 3h - 2x^2 + 3x $$

**Step 3: Simplify the numerator**
Cancel terms $2x^2$ and $-2x^2$. Cancel $-3x$ and $3x$.
$$ = 4xh + 2h^2 - 3h $$

**Step 4: Divide by $h$**
$$ \frac{4xh + 2h^2 - 3h}{h} $$
Factor out $h$ from the numerator:
$$ \frac{h(4x + 2h - 3)}{h} $$
Divide out $h$:
$$ = 4x + 2h - 3 $$

**Final Answer:** $4x + 2h - 3$

---
## Implicit vs. Explicit Forms of a Function

When a function $f$ is defined by an equation involving $x$ and $y$, the form of the equation determines how the function is expressed.

| Form Type | Description |
| :--- | :--- |
| **Implicit Form** | The function is defined by a general equation relating $x$ and $y$. The variable $y$ is not isolated. |
| **Explicit Form** | The equation is solved for $y$ in terms of $x$. We write $y = f(x)$, clearly showing $y$ as a function of $x$. |

### Examples of Conversion

| Implicit Form | Explicit Form |
| :--- | :--- |
| $3x + y = 5$ | $y = f(x) = -3x + 5$ |
| $x^2 - y = 6$ | $y = f(x) = x^2 - 6$ |
| $xy = 4$ | $y = f(x) = \frac{4}{x}$ |

---

> [!summary] Important Facts about Functions
>
> **(a) The One-to-One Output Rule**
> For each $x$ in the domain of a function $f$, there is **exactly one** image $f(x)$ in the range. However, a single element in the range can result from *more than one* $x$ in the domain.
>
> **(b) Function Notation**
> The symbol **$f$** denotes the function itself. It is symbolic of the **equation (or rule)** used to transform an input $x$ from the domain into an output $f(x)$ in the range.
>
> **(c) Variables**
> If $y = f(x)$:
> *   **$x$** is the **independent variable** (or argument).
> *   **$y$** is the **dependent variable** (or the value of $f$ at $x$).

---
# 3 Find the Domain of a Function Defined by an Equation

## Domain and Range from a Graph

For a function $y = f(x)$:

| Concept | Definition |
| :--- | :--- |
| **Domain** | Set of all $x$-values for which $f$ is defined |
| **Range** | Set of all corresponding $y$-values |

![[Pasted image 20260517122644.png|center|441]]



Often, the domain is not explicitly stated. In such cases, we agree that the **domain of $f$** is the largest set of real numbers for which the value $f(x)$ is a real number.

> [!info] Definition: Domain by Default
> The domain of a function $f$ is the same as the domain of the variable $x$ in the expression $f(x)$.

### EXAMPLE 8: Finding the Domain of a Function

Find the domain of each of the following functions:

**(a) Polynomial Function**
$$f(x) = x^2 + 5x$$
*   **Analysis:** We can square any real number and add 5 times that number. There are no restrictions.
*   **Domain:** The set of all real numbers.

**(b) Rational Function**
$$g(x) = \frac{3x}{x^2 - 4}$$
*   **Analysis:** Division by zero is undefined. The denominator cannot be zero.
    $$x^2 - 4 \neq 0 \implies x \neq -2 \text{ and } x \neq 2$$
*   **Domain:** $\{x \mid x \neq -2, x \neq 2\}$
    *   *Read as: "The set of all real numbers $x$ such that $x$ does not equal $-2$ and $x$ does not equal $2$."*

**(c) Radical Function (Square Root)**
$$h(t) = \sqrt{4 - 3t}$$
*   **Analysis:** Only nonnegative numbers have real square roots. The radicand must be $\ge 0$.
    $$
    \begin{aligned}
    4 - 3t &\ge 0 \\
    -3t &\ge -4 \\
    t &\le \frac{4}{3} \quad (\text{Divide by negative, flip inequality})
    \end{aligned}
    $$
*   **Domain:** $\left\{t \mid t \le \frac{4}{3}\right\}$ or the interval $\left(-\infty, \frac{4}{3}\right]$.

**(d) Mixed Function (Radical and Rational)**
$$F(x) = \frac{\sqrt{3x + 12}}{x - 5}$$
*   **Analysis:** Two conditions must be met:
    1.  Radicand $\ge 0$: $3x + 12 \ge 0 \implies 3x \ge -12 \implies x \ge -4$.
    2.  Denominator $\neq 0$: $x - 5 \neq 0 \implies x \neq 5$.
*   **Domain:** $\{x \mid x \ge -4, x \neq 5\}$

---

> [!NOTE] Procedure: Finding the Domain
> 
> When finding the domain of a function defined by an equation (subset of real numbers):
> 
> 1.  **Start** with the domain as the set of all real numbers.
> 2.  **Check Denominators:** If the equation has a denominator, exclude any numbers that make the denominator zero.
> 3.  **Check Radicals:** If the equation has a radical of even index (like $\sqrt{}$), exclude any numbers that make the expression inside the radical negative.

---

### Defined vs. Not Defined

*   If $x$ is in the domain, we say $f$ is **defined at $x$**, or $f(x)$ **exists**.
*   If $x$ is NOT in the domain, we say $f$ is **not defined at $x$**, or $f(x)$ **does not exist**.

**Example:**
If $f(x) = \frac{x}{x^2 - 1}$:
*   $f(0)$ exists (0 is in domain).
*   $f(1)$ and $f(-1)$ do not exist (1 and -1 are not in domain).

---

### EXAMPLE 9: Finding the Domain in an Application

**Problem:** Express the area of a circle as a function of its radius. Find the domain.

**Solution:**
Let $r$ be the independent variable (radius) and $A$ be the dependent variable (area).
$$A(r) = \pi r^2$$

**Determining the Domain:**
While mathematically $\pi r^2$ works for any real number $r$, in the context of geometry:
*   A radius represents a length.
*   Length cannot be negative.
*   A circle with radius 0 is just a point (degenerate), so usually we restrict to positive lengths.

**Domain:** $\{r \mid r > 0\}$

> [!note] Double Use of Symbols
> In applications, a symbol like $A$ is often used in two ways:
> 1. To name the function ($A(r)$).
> 2. To symbolize the dependent variable ($A = \dots$).
> This is common and should not cause confusion.

---
## Solving Equations and Inequalities Graphically

| Problem Type  | Graphical Interpretation                       |
| :------------ | :--------------------------------------------- |
| $f(x) = g(x)$ | $x$-values where graphs **intersect**          |
| $f(x) < g(x)$ | $x$-values where graph of $g$ is **above** $f$ |
| $f(x) > g(x)$ | $x$-values where graph of $f$ is **above** $g$ |

![[Pasted image 20260517123408.png]]


> [!example] Example 3: Solving Graphically
> Solve:
>  (a) $2x^2 + 3 = 5x + 6$ 
> (b) $2x^2 + 3 \leq 5x + 6$
>  (c) $2x^2 + 3 > 5x + 6$

**Solution**
Let $f(x) = 2x^2 + 3$ and $g(x) = 5x + 6$.

| Part | Solution |
| :--- | :--- |
| (a) $f(x) = g(x)$ | $x = -0.5, 3$ |
| (b) $f(x) \leq g(x)$ | $[-0.5, 3]$ |
| (c) $f(x) > g(x)$ | $(-\infty, -0.5) \cup (3, \infty)$ |

![[Pasted image 20260517123444.png]]

---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. 46 - 54)