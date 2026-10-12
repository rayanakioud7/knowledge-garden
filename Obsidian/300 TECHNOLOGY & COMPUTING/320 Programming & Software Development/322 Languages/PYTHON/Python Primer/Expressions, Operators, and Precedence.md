Date: 2026-05-20
Tags: [[Python]], [[Programming language]]

---

Existing values can be combined into larger syntactic **expressions** using symbols and keywords known as **operators**.

### Core Behavior of Operators

The semantic meaning of an operator depends on the type of its operands:

- **Numbers**: The syntax `a + b` indicates addition.
    
- **Strings**: The syntax `a + b` indicates concatenation (joining strings together).
    

### Compound Expressions

A **compound expression** combines two or more operations, such as `a + b * c`.

- **Evaluation Order**: The order of operations affects the final value.
    
- **Precedence**: Python defines a specific order of precedence to evaluate operators.
    
- **Parentheses**: A programmer can override this default order by using explicit parentheses `()` to group subexpressions.
    

### Expressions and Operators Summary

|**Operand Type**|**Operator**|**Syntax**|**Evaluation Behavior**|
|---|---|---|---|
|**Numeric**|`+`|`a + b`|Addition|
|**String**|`+`|`a + b`|Concatenation|
|**Compound**|_Precedence_|`a + b * c`|Order affects overall value|
|**Grouped**|`()`|`(a + b) * c`|Overrides default precedence|

---

## Logical Operators

Python uses keyword operators for Boolean values:

- **`not`**: Unary negation (flips `True` to `False` and vice versa).
    
- **`and`**: Conditional and.
    
- **`or`**: Conditional or.
    

### Short-Circuit Evaluation

The `and` and `or` operators use **short-circuit** evaluation. This means they do not check the second operand if the final result can already be decided by the first operand.

#### Practical Benefit

This behavior is useful to stop errors before they happen. You can test if a reference is valid (like checking it is not `None`) before running a second check that would normally crash your program if the first check failed.

### Summary of Operators

|**Operator**|**Type**|**Logic / Behavior**|
|---|---|---|
|`not`|Unary|Negates the Boolean value.|
|`and`|Binary|Stops checking if the first part is `False`.|
|`or`|Binary|Stops checking if the first part is `True`.|

---

## Equality Operators

Python supports operators to test two completely different types of equality: **identity** and **equivalence**.

- **`is`**: Checks for the same identity.
    
- **`is not`**: Checks for different identities.
    
- **`==`**: Checks for equivalence (value comparison).
    
- **`! =`**: Checks for non-equivalence.


### Identity vs. Equivalence

#### Identity (`is`)

The expression `a is b` evaluates to `True` only when both identifiers point to the exact same object in memory (**aliasing**).

#### Equivalence (`==`)

The expression `a == b` evaluates to `True` if the objects have the same value, even if they are stored in different memory locations.

- If `a is b` is true, then `a == b` is automatically true.
    
- Meaning of equivalence depends on data type:
    
    - **Strings**: Equivalent if characters match exactly, one by one.
        
    - **Sets**: Equivalent if they share the same contents, regardless of order.
        

### Comparison Operator Summary

|**Operator**|**Notion Tested**|**When does it return True?**|**Best For...**|
|---|---|---|---|
|`is`|**Identity**|If variables point to the _exact same_ memory address.|Detecting true aliasing.|
|`==`|**Equivalence**|If variables have the _same contents/values_.|Most general programming tasks.|

---

## Comparison Operators

Data types can define a natural order using these comparison operators:

- **`<`**: less than
    
- **`< =`**: less than or equal to
    
- **`>`**: greater than
    
- **`> =`**: greater than or equal to
    

### Behavior Across Types

- **Numeric Types**: These operators work exactly like normal math.
    
- **String Types**: Strings are compared **lexicographically** (alphabetical dictionary order) and are **case-sensitive**.
    

```python
# String comparison examples
print("apple" < "banana")  # True (alphabetical order)
print("Apple" < "apple")   # True (uppercase letters come before lowercase in Unicode)
```

### Type Incompatibility

You cannot compare different types that do not match. If you try to compare incompatible data types, Python will stop and raise an error (exception).

```python
# This will cause a TypeError crash
result = 5 < 'hello'  # Error: '<' not supported between instances of 'int' and 'str'
```

### Summary Table

|**Operator**|**Meaning**|**Works On**|**Example**|
|---|---|---|---|
|`<`|Less than|Numbers / Strings|`4 < 9` $\rightarrow$ `True`|
|`<=`|Less than or equal to|Numbers / Strings|`5 <= 5` $\rightarrow$ `True`|
|`>`|Greater than|Numbers / Strings|`"b" > "a"` $\rightarrow$ `True`|
|`>=`|Greater than or equal to|Numbers / Strings|`10 >= 12` $\rightarrow$ `False`|

---

## Arithmetic Operators

Python supports the following standard arithmetic operators:

- **`+`**: Addition
    
- **`-`**: Subtraction
    
- **`*`**: Multiplication
    
- **`/`**: True division
    
- **`//`**: Integer division (floor division)
    
- **`%`**: Modulo operator (remainder)
    

### Basic Operations (`+`, `-`, `*`)

The data type of the output depends directly on the inputs:

- `int` and `int` $\rightarrow$ returns an `int`.
    
- `float` and `float` (or mixed `int` and `float`) $\rightarrow$ returns a `float`.
    

### Division Modes (`/` vs `//` vs `%`)

Python handles division very carefully compared to other languages like C, C++, or Java.

#### 1. True Division (`/`)

Always calculates the exact mathematical result and returns a floating-point number, even if both inputs are integers.

#### 2. Integer Division (`//`)

Divides the numbers and rounds **down** to the next lowest whole integer (mathematical floor).

#### 3. Modulo (`%`)

Calculates the remainder left over after integer division is finished.

### The Division Formula Invariant

For any division problem with a dividend $n$ and a divisor $m$, $\frac{n}{m}$, Python guarantees that this math formula always stays true:

$$q \cdot m + r = n$$

_(Where $q = n \mathbin{/\!/} m$ and $r = n \mathbin{\%} m$)_

### Summary Table for Positive and Negative Inputs

| **Operation**     | **Syntax Examples**                         | **Process / Math Explained**                                                                 | **Final Result**              |
| ----------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| **True Division** | `27 / 4`                                    | Exact math division.                                                                         | `6.75`                        |
| **Positive `//`** | `27 // 4`                                   | Floor of $6.75$ (rounds down).                                                               | `6`                           |
| **Positive `%`**  | `27 % 4`                                    | Remainder: $27 - (6 \cdot 4)$.                                                               | `3`                           |
| **Negative `//`** | `-27 // 4`                                  | Exact is $-6.75$. Floor rounds down to next lowest.                                          | `-7`                          |
| **Negative `%`**  | `-27 % 4`                                   | Remainder: $-27 - (-7 \cdot 4) = -27 + 28$.                                                  | `1`                           |
| **Float Inputs**  | `8.2 // 3.14`<br><br>  <br><br>`8.2 % 3.14` | Works on floats too! Floor is $2.0$.<br><br>  <br><br>Remainder is $8.2 - (2.0 \cdot 3.14)$. | `2.0`<br><br>  <br><br>`1.92` |

---
## Bitwise Operators

Python provides operators to manipulate integers directly at their binary (bit) level.

### Unary and Binary Bitwise Operators

- **`~`**: Bitwise complement (prefix unary operator). Flips all bits.
    
- **`&`**: Bitwise AND. Result bit is $1$ if both corresponding bits are $1$.
    
- **`|`**: Bitwise OR. Result bit is $1$ if at least one corresponding bit is $1$.
    
- **`^`**: Bitwise XOR (exclusive-or). Result bit is $1$ if corresponding bits are different.
    

### Bit Shifting Operators

- **`<<`**: Shift bits left. Pushes bits to the left and fills the new empty spaces on the right side with zeros.
    
- **`>>`**: Shift bits right. Pushes bits to the right and fills the new empty spaces on the left side with the sign bit.
    

### Summary Table

| **Operator Syntax** | **Operation** | **Functional Bit Behavior**                                  |
| ------------------- | ------------- | ------------------------------------------------------------ |
| `~x`                | Complement    | Flips $0 \rightarrow 1$ and $1 \rightarrow 0$.               |
| `x & y`             | AND           | Returns $1$ only if both bits are $1$.                       |
| `x \| y`            | OR            | Returns $1$ if any bit is $1$.                               |
| `x ^ y`             | XOR           | Returns $1$ if the bits are different.                       |
| `x << j`            | Left Shift    | Moves bits left by $j$ positions; fills right with $0$.      |
| `x >> j`            | Right Shift   | Moves bits right by $j$ positions; fills left with sign bit. |

---
## Sequence Operators

All built-in sequence types (`str`, `tuple`, `list`) share a standard set of operators for indexing, slicing, and combining data.

### 1. Indexing and Slicing

Python sequences support **zero-indexing** for positive positions and **negative indexing** to count backward from the end.

- **`s[j]`**: Gets the single element at index `j`.
    
- **`s[start:stop]`**: Returns a subsequence (slice) from the `start` index up to, but **excluding**, the `stop` index. 
	- slices are, mathematically, described as half-open intervals $[start, stop)$
    
- **`s[start:stop:step]`**: Extracts elements starting at `start`, skipping by the value of `step` each time, until reaching the `stop` boundary.
    

```python
data = [10, 20, 30, 40, 50, 60, 70, 80]

# Standard Slice: half-open interval [3:8] takes indices 3, 4, 5, 6, 7
print(data[3:8])      # Output: [40, 50, 60, 70, 80]

# Slice with Step value
print(data[1:7:2])    # Output: [20, 40, 60] (indices 1, 3, 5)
```

### 2. Combining and Checking Containers

- **`s + t`**: Concatenation (joins sequence `s` and sequence `t` together into a new instance).
    
- **`k * s`**: Repetition (adds sequence `s` to itself `k` times).
    
- **`val in s`**: Returns `True` if an element equivalent to `val` is found inside `s`.
    
- **`val not in s`**: Returns `True` if `val` is missing from `s`.
    

```python
# Membership check inside strings
print('amp' in 'example')  # Output: True (substring match)
```

### 3. Structural Sequence Comparisons

Sequences compare their items one by one using **lexicographical order** (element-by-element comparison) until they discover the first differing element.

```python
# Element at index 1 (6 is less than 7) decides the result
print([5, 6, 9] < [5, 7])  # Output: True
```

### Operator Syntax Cheat Sheet

|**Syntax Formula**|**Operation Performed**|**Element Behavior / Mutability**|
|---|---|---|
|`s[j]`|Indexing|Reads item. If mutable (`list`), `s[j] = val` replaces it.|
|`s[start:stop]`|Slicing|Creates a subsequence copy.|
|`del s[j]`|Deletion|Only valid on mutable types (`list`). Removes the item.|
|`s == t` / `s != t`|Equivalence|Evaluates element-by-element equality across the sequences.|
|`s < t` / `s > t`|Ordering|Evaluates sequence hierarchy based on lexicographical order.|
## Operators for Sets and Dictionaries

Sets and dictionaries do not keep a specific order for their elements. Because of this, their operators work based on mathematical math rules rather than item-by-item text matching.

### Set and Frozenset Operators

Set comparison operators like `<` or `>` do not check alphabetical order. Instead, they use the mathematical properties of sets.

#### Mathematical Order Properties

- **Partial Order**: Comparison operators on sets define a **partial order**, not a total order.
    
- **Disjoint Sets**: If two sets are completely separate (disjoint), they cannot be compared using `<`, `==`, or `>` because neither set contains the other.
    

#### Set Mathematical Operators Summary

| **Operator Syntax** | **Mathematical Meaning** | **Formal Math Rule**                           |
| ------------------- | ------------------------ | ---------------------------------------------- |
| `key in s`          | Containment check        | $key \in s$                                    |
| `key not in s`      | Non-containment check    | $key \notin s$                                 |
| `s1 == s2`          | Equivalence              | $s_1 = s_2$                                    |
| `s1 != s2`          | Non-equivalence          | $s_1 \neq s_2$                                 |
| `s1 <= s2`          | Subset                   | $s_1 \subseteq s_2$                            |
| `s1 < s2`           | Proper Subset            | $s_1 \subset s_2 \pmod{s_1 \neq s_2}$          |
| `s1 >= s2`          | Superset                 | $s_1 \supseteq s_2$                            |
| `s1 > s2`           | Proper Superset          | $s_1 \supset s_2 \pmod{s_1 \neq s_2}$          |
| s1 \| s2            | Union                    | $s_1 \cup s_2$                                 |
| `s1 & s2`           | Intersection             | $s_1 \cap s_2$                                 |
| `s1 - s2`           | Difference               | $s_1 \setminus s_2$                            |
| `s1 ^ s2`           | Symmetric Difference     | $(s_1 \setminus s_2) \cup (s_2 \setminus s_1)$ |

### Dictionary Operators

The concept of subsets does not make sense for dictionaries, so the `dict` class does not support operators like `<` or `>`. Two dictionaries are equal (`d1 == d2`) only if they contain identical key-value pairs, regardless of their internal storage order.

#### Dictionary Operators Summary

|**Operator Syntax**|**Operation Performed**|**Behavior Description**|
|---|---|---|
|`d[key]`|Access value|Finds and returns the value linked to `key`.|
|`d[key] = value`|Set or Reset|Creates a new pair or overwrites the old value.|
|`del d[key]`|Remove pair|Deletes both the key and its value from the dictionary.|
|`key in d`|Key containment|Checks if `key` exists as a valid key inside `d`.|
|`key not in d`|Key non-containment|Checks if `key` is missing from the keys of `d`.|
|`d1 == d2`|Equivalence|Returns `True` if both have identical key-value pairs.|
|`d1 != d2`|Non-equivalence|Returns `True` if key-value pairs do not match.|

> [!info] Definitions & Properties
> 
> **Membership Check Focus**: The operators `key in d` and `key not in d` only scan the dictionary **keys**, not the values. Checking if a value exists requires scanning the full dataset, which takes more computational time.

---

## Extended Assignment Operators

Python supports extended assignment operators (like `+=`, `-=`, `*=`) as shorthand expressions. For example, `count += 5` is shorthand for `count = count + 5`.

### Behavior Across Different Types

The way `+=` works internally depends entirely on whether the data type is **immutable** or **mutable**.

#### 1. Immutable Types (Numbers, Strings, Tuples)

Extended assignment does **not** modify the existing object. Instead, Python cuts the reference link and reassigns the identifier to a brand-new object in memory.

#### 2. Mutable Types (Lists)

Classes can redefine the behavior of `+=` to mutate the object directly in place rather than making a new copy.

### Code Execution Trace: `beta += foo` vs `beta = beta + foo`

The text provides a precise code example demonstrating how mutable lists change behavior depending on the syntax used:

```python
alpha = [1, 2, 3]
beta = alpha            # beta becomes an alias (points to the exact same list)

beta += [4, 5]          # Uses in-place mutation! Extends the original list structure
# Both alpha and beta now see: [1, 2, 3, 4, 5]

beta = beta + [6, 7]    # Standard addition: creates a BRAND-NEW list instance 
# This reassigns beta. It breaks the alias link.

print(alpha)            # Output: [1, 2, 3, 4, 5]
```

### Summary of List Assignment Mechanics

|**Syntax Used**|**Modifies Original In-Place?**|**Identity Behavior (is)**|**Impact on Aliases**|
|---|---|---|---|
|`beta += foo`|**Yes**|Keeps same memory address|Changes what the alias variable sees.|
|`beta = beta + foo`|**No**|Reassigns to a _new_ address|Breaks the alias link completely.|

---
### Compound Expressions and Operator Precedence

Programming languages use strict rules to decide the order of evaluation for compound expressions like $5 + 2 \cdot 3$.

### Evaluation Order Rules

- **Precedence Level**: Operators with higher precedence are processed before operators with lower precedence. For example, multiplication (`*`) has higher precedence than addition (`+`).
    
- **Overriding with Parentheses**: You can force a different order by using parentheses `()`.
    
- **Left-to-Right Associativity**: Operators within the same category are processed from left to right. For example, $5 - 2 + 3$ evaluates as $(5 - 2) + 3 = 6$.
    
- **Right-to-Left Associativity**: Unary operators and exponentiation () are processed from right to left.
    

```python
print(5 + 2 * 3)    # Evaluates to 11 (Multiplication runs first)
print((5 + 2) * 3)  # Evaluates to 21 (Parentheses override precedence)
```

### Chaining Expressions

- **Chained Assignment**: Python allows assigning multiple identifiers to the rightmost value in one line, such as `x = y = 0`.
    
- **Chained Comparisons**: You can chain comparison operators together. For example, $1 \le x + y \le 10$ is evaluated exactly like the compound expression $(1 \le x + y) \text{ and } (x + y \le 10)$, but Python optimizes it so the intermediate value $x + y$ is only computed **once**.
    

### Table: Operator Precedence Hierarchy

The table below orders Python operators from **highest precedence (evaluated first)** to **lowest precedence (evaluated last)**.

| **Hierarchy**   | **Operator Type**                                                  | **Symbols / Syntax**                                                             | **Evaluation Direction**      |
| --------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ----------------------------- |
| **1 (Highest)** | Member access                                                      | `expr.member`                                                                    | Left-to-Right                 |
| **2**           | Function/method calls<br><br>  <br><br>Container subscripts/slices | `expr(...)`<br><br>  <br><br>`expr[...]`                                         | Left-to-Right                 |
| **3**           | Exponentiation                                                     | `**`                                                                             | **Right-to-Left**             |
| **4**           | Unary operators                                                    | `+expr`, `-expr`, `~expr`                                                        | **Right-to-Left**             |
| **5**           | Multiplication, division, remainder                                | `*`, `/`, `//`, `%`                                                              | Left-to-Right                 |
| **6**           | Addition, subtraction                                              | `+`, `-`                                                                         | Left-to-Right                 |
| **7**           | Bitwise shifting                                                   | `<<`, `>>`                                                                       | Left-to-Right                 |
| **8**           | Bitwise-AND                                                        | `&`                                                                              | Left-to-Right                 |
| **9**           | Bitwise-XOR                                                        | `^`                                                                              | Left-to-Right                 |
| **10**          | Bitwise-OR                                                         | **\|**                                                                           | Left-to-Right                 |
| **11**          | Comparisons<br><br>  <br><br>Containment                           | `is`, `is not`, `==`, `!=`, `<`, `<=`, `>`, `>=`<br><br>  <br><br>`in`, `not in` | Chained / Left-to-Right       |
| **12**          | Logical-NOT                                                        | `not expr`                                                                       | Left-to-Right                 |
| **13**          | Logical-AND                                                        | `and`                                                                            | Left-to-Right (Short-circuit) |
| **14**          | Logical-OR                                                         | `or`                                                                             | Left-to-Right (Short-circuit) |
| **15**          | Conditional expression                                             | `val1 if cond else val2`                                                         | Evaluates condition first     |
| **16 (Lowest)** | Assignments                                                        | `=`, `+=`, `-=`, `*=`, etc.                                                      | **Right-to-Left**             |


---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 12)