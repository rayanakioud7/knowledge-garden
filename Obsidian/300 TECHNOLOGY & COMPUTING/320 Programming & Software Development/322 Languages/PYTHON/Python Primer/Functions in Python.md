Date: 2026-05-23
Tags: [[Python]], [[Programming language]]

---
## Overview: Functions vs. Methods

In Python, we distinguish between **functions** and **methods**:
*   **Function**: A traditional, stateless block of code invoked without a specific object context (e.g., `sorted(data)`).
*   **Method**: A function attached to a specific class or object, invoked using dot notation (e.g., `data.sort()`).

This note focuses on general **functions**.

---

## Function Signature

The first line of a function definition is called the **signature**. It begins with the keyword `def`.

> [!info] Function Signature Components
> *   **Keyword**: Starts with `def`.
> *   **Name**: An identifier for the function (e.g., `count`).
> *   **Parameters**: A list of expected inputs inside parentheses (e.g., `data`, `target`).
> *   **Dynamic Typing**: Unlike Java or C++, Python does not require declaring variable types (e.g., `int`, `string`) in the signature.

---

## Implementation Example

The following function counts the number of occurrences of a specific target value within a list of data.

```python
data = [0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1]

def count(data, target):
    n = 0
    for item in data:
        if item == target:
            n += 1
    return n

print(count(data, 0))
```

---

## Execution Mechanics

### The Function Body
The code following the signature is the **body**.
*   It is expressed as an **indented block** of code.
*   Each time the function is called, this block executes.

### Activation Record and Namespace
When a function is called, Python manages the execution environment using specific structures:

> [!info] Activation Record & Namespace
> *   **Activation Record**: A dedicated record created by Python to store information relevant to the current function call.
> *   **Namespace**: A mapping of identifiers to objects within the current scope.
> *   **Local Scope**: Identifiers defined inside the function body (like `n` in the example above) exist only in the function's local namespace. They do not affect variables with the same name outside the function.

### Return Values
The `return` statement sends a result back to the caller. If no return type is specified in the signature, Python determines the type dynamically at runtime based on the value returned.

---

## Return Statement

> [!info] Definition
> The `return` statement immediately stops the execution of a function and sends a specific value back to the caller.

## Dynamic Return Types
Python functions do not declare a return type in their signature. The type of the returned value is determined dynamically at runtime.

## Implicit Returns
If a function ends without explicitly returning a value, Python automatically returns `None`.

| Scenario | Result |
| :--- | :--- |
| `return value` | Returns the specific `value`. |
| `return` (no argument) | Returns `None`. |
| End of function body reached | Returns `None`. |

## Multiple Return Statements
A function can contain multiple `return` statements. Conditional logic controls which statement is executed.

This structure allows for **early exit**. The function stops running as soon as a condition is met, rather than completing the entire code block.

## Implementation Example

The following function checks if a target value exists in a sequence. It iterates through the data and returns `True` immediately upon finding a match. If the loop finishes without finding the target, it returns `False`.

```python
def exist(data, target):
    for item in data:
        if item == target:
            return True   # Early exit: match found
    return False          # Executed only if loop completes without match

print(exist(data, 0))
```

---

## Information Passing

To understand how functions receive and send data, we must distinguish between two types of parameters.

> [!info] Parameter Terminology
> *   **Formal Parameters**: The identifiers listed in the function signature (e.g., `data`, `target`). They act as local variables within the function.
> *   **Actual Parameters**: The specific objects or values provided by the caller when invoking the function (e.g., `grades`, `'A'`).

## Assignment Semantics

Parameter passing in Python follows the semantics of the standard **assignment statement**.

When a function is called:
1.  Each formal parameter is assigned to the respective actual parameter.
2.  This assignment happens in the function's **local scope**.
3.  The formal parameter becomes an **alias** for the actual object.

### Example Mechanism

Consider the call:

```python
prizes = count(grades, 'A')
```

Just before the function body executes, Python performs implicit assignments:

| Formal Parameter | Actual Parameter | Resulting Alias |
| :--- | :--- | :--- |
| `data` | `grades` | `data` refers to the same list object as `grades`. |
| `target` | `'A'` | `target` refers to the string literal `'A'`. |

![[Pasted image 20260523220636.png|center]]

## Efficiency and Object Copying

Python’s mechanism ensures that **objects are not copied** during parameter passing.

*   **Efficiency**: Since only references (aliases) are passed, invoking a function is efficient even if the parameters are large, complex objects.
*   **Return Values**: Communication back to the caller via `return` is also implemented as an assignment. The identifier in the caller's scope (e.g., `prizes`) is assigned to the object returned by the function.

---
## Mutable Parameters

When a function parameter refers to a **mutable object** (like a list or dictionary), the function can modify the object’s state. Since the formal parameter is an alias for the actual parameter, changes made inside the function affect the original object in the caller’s scope.

> [!warning] Side Effects on Mutable Objects
> If a function modifies a mutable parameter (e.g., via `.append()`, indexing assignment, etc.), those changes persist outside the function because both names refer to the same underlying object.

## Example: Modifying a List In-Place

The following function scales all elements of a numeric list by a given factor. It directly mutates the input list.

```python
def scale(data, factor):
    for j in range(len(data)):
        data[j] *= factor
```
### Usage and Effect

```python
scores = [10, 20, 30]
scale(scores, 2)
print(scores)  # Output: [20, 40, 60]
```

The list `scores` is modified in place — no new list is created, and no return value is needed.

---

## Reassignment vs. Mutation

It is critical to distinguish between:

| Operation | Effect on Caller’s Object |
| :--- | :--- |
| `data.append('F')` | ✅ Mutates the shared object → visible to caller |
| `data = []` | ❌ Breaks alias → local variable now points to new object; caller’s object unchanged |

Reassigning a formal parameter (e.g., `data = [...]`) only changes what the local name refers to — it does not alter the original object passed by the caller.

---

## Design Principle

While Python allows functions to mutate parameters, this should be done intentionally and documented clearly. Unexpected side effects are poor design. Functions like `scale` that are meant to modify their inputs should have names and documentation indicating mutation behavior.

Use mutable parameter modification when:
*   The goal is to update existing data structures efficiently.
*   The function’s purpose is explicitly to alter state (e.g., sorting, scaling, appending).

Avoid it when:
*   The function is expected to be pure (no side effects).
*   The caller expects the original object to remain unchanged.

---
## Default Parameter Values

Python allows functions to accept **default values** for parameters. This enables a single function signature to support multiple calling patterns — a feature known as **polymorphism** (from Greek: “many forms”).

> [!info] Polymorphic Function Signature
> A function with default parameters can be invoked with fewer arguments than defined. Missing arguments are filled in using their default values.

---

### Syntax and Rules

```python
def foo(a, b=15, c=27):
    ...
```

| Call Pattern | Effective Values |
| :--- | :--- |
| `foo(4, 12, 8)` | `a=4`, `b=12`, `c=8` → defaults ignored |
| `foo(4)` | `a=4`, `b=15`, `c=27` → defaults used for `b`, `c` |
| `foo(8, 20)` | `a=8`, `b=20`, `c=27` → default used only for `c` |

> [!warning] Default Parameter Rule
> If any parameter has a default value, **all subsequent parameters must also have defaults**.  
> ❌ Invalid: `def bar(a, b=15, c)`  
> ✅ Valid: `def bar(a, b=15, c=27)`

---

### Practical Example: GPA Calculator

The following function computes a student’s GPA from a list of letter grades. It accepts an optional `points` dictionary that maps grades to numeric values. If not provided, it uses a standard mapping.

```python
def compute_gpa(grades, points={'A+':4.0, 'A':4.0, 'A-':3.67, 
								'B+':3.33,'B':3.0, 'B-':2.67, 
								'C+':2.33, 'C':2.0,'C-':1.67,
								'D+':1.33, 'D':1.0, 'F':0.0}):
    num_courses = 0
    total_points = 0
    for g in grades:
        if g in points:           # ignore unrecognized grades
            num_courses += 1
            total_points += points[g]
    return total_points / num_courses
```

#### Usage Variants

```python
# Use default grading scale
print(compute_gpa(['A', 'B+', 'C']))  # Output: ~3.11

# Use custom grading scale
custom_scale = {'A': 5.0, 'B': 4.0, 'C': 3.0}
print(compute_gpa(['A', 'B', 'C'], custom_scale))  # Output: 4.0
```

This design provides flexibility without requiring separate functions or complex overloading.

---

### Key Benefits

*   **Backward Compatibility**: Add new optional parameters without breaking existing calls.
*   **Simplified Interface**: Common cases use defaults; rare cases allow customization.
*   **Reduced Code Duplication**: Avoid writing multiple versions of the same logic for different argument counts.

Default parameters make functions more adaptable while keeping signatures clean and readable.

---
### Polymorphic Function: Simulating `range()` Behavior

Python’s built-in `range()` constructor supports multiple calling forms — a classic example of **polymorphism** through default parameters and internal reassignment.

> [!info] Supported `range()` Forms
> *   `range(n)` → integers from `0` to `n-1`
> *   `range(start, stop)` → integers from `start` to `stop-1`
> *   `range(start, stop, step)` → same as above, but with custom increment

This appears to violate the rule that “defaults must be trailing,” because in `range(n)`, the single argument acts as `stop`, not `start`. Python resolves this via **internal parameter remapping**.

---

#### Implementation Strategy

We can simulate this behavior using `None` as a sentinel value for missing arguments, then reassign within the function body.

```python
def range_sim(start, stop=None, step=1):
    if stop is None:
        stop = start
        start = 0
    # ... generate sequence from start to stop (exclusive), by step
```

#### How It Works

| Call | Internal Assignment After Remap |
| :--- | :--- |
| `range_sim(5)` | `start=0`, `stop=5`, `step=1` |
| `range_sim(2, 7)` | `start=2`, `stop=7`, `step=1` |
| `range_sim(1, 10, 2)` | `start=1`, `stop=10`, `step=2` |

When only one argument is passed (`range_sim(n)`), it is initially assigned to `start`. The function detects that `stop` is `None`, so it swaps:  
→ `stop = start` (original `n`)  
→ `start = 0`

This preserves the expected semantics while adhering to Python’s syntax rules for default parameters.

---
### Key Insight

Polymorphic signatures don’t always require strict left-to-right defaults. By combining:
*   Default values (`stop=None`, `step=1`)
*   Conditional reassignment inside the function body

…we can support flexible, intuitive interfaces even when positional meaning changes based on argument count.

This technique is widely used in Python libraries to maintain backward compatibility and user-friendly APIs.

---

# Keyword Parameters

Python supports two mechanisms for passing arguments to functions:

## 1. Positional Arguments (Default)

Arguments are matched to parameters **by order**.

```python
def foo(a=10, b=20, c=30):
    ...

foo(5)        # a=5, b=20, c=30
foo(5, 15)    # a=5, b=15, c=30
foo(5, 15, 25)# a=5, b=15, c=25
```

## 2. Keyword Arguments (Named)

Arguments are matched to parameters **by name**, regardless of position.

```python
foo(c=5)      # a=10, b=20, c=5
foo(b=7, a=2) # a=2, b=7, c=30
```

> [!info] Benefit of Keyword Arguments
> *   Improves readability by explicitly naming the purpose of each argument.
> *   Allows skipping optional parameters without relying on positional order.
> *   Enables flexible calling when many defaults exist.

---

## Keyword-Only Parameters

Some functions require certain parameters to be passed **only** via keyword syntax. This is enforced in Python using `*` in the signature. We will see such cases in standard library functions.

### Example: `max()` with `key` Parameter

The built-in `max()` function uses natural ordering (`<`) by default. But you can customize comparison logic using the `key` parameter — which must be passed as a keyword argument.

```python
# Natural order: -35 < 20 → max is 20
print(max(-35, 20))  # Output: 20

# Compare by absolute value: abs(-35)=35 > abs(20)=20 → max is -35
print(max(-35, 20, key=abs))  # Output: -35
```

Here, `key=abs` tells `max()` to compare elements based on their absolute values, not their actual numeric values.

> [!note] Why `key` Must Be Keyword
> The `max()` function accepts any number of positional arguments (e.g., `max(a,b,c,d)`). There is no fixed position where a “comparison function” could be placed. Thus, `key` is designed as a keyword-only parameter to avoid ambiguity.

This pattern is also used in sorting functions like `sorted()` and `list.sort()`, which accept a `key` parameter to define custom sort orders.

---
## Summary Table

| Argument Type | Syntax Example      | Matching Rule         | Use Case                          |
| ------------- | ------------------- | --------------------- | --------------------------------- |
| Positional    | `foo(5, 10)`        | By order              | Simple, required, or few params   |
| Keyword       | `foo(b=10, a=5)`    | By name               | Clarity, skip defaults, many opts |
| Keyword-Only  | `max(..., key=abs)` | Must use `name=value` | When position is ambiguous        |

Keyword parameters enhance flexibility and clarity — especially for functions with multiple optional behaviors or polymorphic signatures.

---

# Python’s Built-In Functions

Python provides a set of commonly used functions that are automatically available — no import required. These cover input/output, mathematics, ordering, collections, and type inspection.

> [!info] Notation Key
> *   `x, y, z` → arbitrary numeric types  
> *   `k` → integer  
> *   `a, b, c` → arbitrary comparable types  
> *   `iterable` → any object supporting iteration (e.g., `str`, `list`, `tuple`, `set`, `dict`)  
> *   `sequence` → indexable iterable (`str`, `list`, `tuple` — **not** `set` or `dict`)

---

## Categorized Overview

### Input/Output
*   `print(obj1, obj2, ...)` → outputs arguments to console
*   `input(prompt)` → reads string from user; optional prompt displayed
*   `open(filename, mode)` → opens file for reading/writing

### Character Encoding
*   `ord(char)` → returns Unicode code point (integer) of character  
    Example: `ord('A')` → `65`
*   `chr(integer)` → returns character for given Unicode code point  
    Example: `chr(65)` → `'A'`

### Mathematics
*   `abs(x)` → absolute value
*   `divmod(x, y)` → returns tuple `(x // y, x % y)` for integers
*   `pow(x, y)` → equivalent to `x ** y`
*   `pow(x, y, z)` → equivalent to `(x ** y) % z`
*   `round(x)` → nearest integer (ties round to even)
*   `round(x, k)` → rounds to `k` decimal places
*   `sum(iterable)` → sum of numeric elements
*   *(Additional math functions in `math` module)*

### Ordering
*   `max(iterable)` or `max(a, b, c, ...)` → largest element
*   `min(iterable)` or `min(a, b, c, ...)` → smallest element
*   `sorted(iterable)` → returns new list with elements in sorted order

> [!note] Comparison Basis
> By default, `max`/`min`/`sorted` use natural ordering (`<`). Use `key=` parameter to customize comparison logic (see Keyword Parameters section).

### Collections / Iterations
*   `len(iterable)` → number of elements
*   `range(stop)` → generates `0` to `stop-1`
*   `range(start, stop)` → generates `start` to `stop-1`
*   `range(start, stop, step)` → generates with custom increment
*   `reversed(sequence)` → iterator over sequence in reverse order
*   `all(iterable)` → `True` if all elements are truthy
*   `any(iterable)` → `True` if at least one element is truthy
*   `map(f, iter1, iter2, ...)` → applies function `f` to corresponding elements
*   `iter(iterable)` → returns iterator object
*   `next(iterator)` → retrieves next item from iterator

### Type & Identity Inspection
*   `type(obj)` → returns class/type of object
*   `isinstance(obj, cls)` → checks if `obj` is instance of `cls` (or subclass)
*   `id(obj)` → returns unique integer identity of object (memory address proxy)
*   `hash(obj)` → returns hash value (for use in dicts/sets — Chapter 10)

---

## Reference Table: Common Built-In Functions

| Calling Syntax             | Description                                      |
|----------------------------|--------------------------------------------------|
| `abs(x)`                   | Absolute value of number                         |
| `all(iterable)`            | `True` if all elements are truthy                |
| `any(iterable)`            | `True` if any element is truthy                  |
| `chr(integer)`             | Character from Unicode code point                |
| `divmod(x, y)`             | Tuple `(quotient, remainder)` for integers       |
| `hash(obj)`                | Integer hash value (Chapter 10)                  |
| `id(obj)`                  | Unique integer “identity” of object              |
| `input(prompt)`            | Read string from stdin                           |
| `isinstance(obj, cls)`     | Check if `obj` is instance of `cls`              |
| `iter(iterable)`           | Return iterator object (Section 1.8)             |
| `len(iterable)`            | Number of elements                               |
| `map(f, iter1, iter2, ...)`| Apply `f` to paired elements                     |
| `max(iterable)`            | Largest element                                  |
| `max(a, b, c, ...)`        | Largest among arguments                          |
| `min(iterable)`            | Smallest element                                 |
| `min(a, b, c, ...)`        | Smallest among arguments                         |
| `next(iterator)`           | Next item from iterator (Section 1.8)            |
| `open(filename, mode)`     | Open file                                        |
| `ord(char)`                | Unicode code point of character                  |
| `pow(x, y)`                | `x ** y`                                         |
| `pow(x, y, z)`             | `(x ** y) % z`                                   |
| `print(obj1, obj2, ...)`   | Output to console                                |
| `range(stop)`              | Generate `0` to `stop-1`                         |
| `range(start, stop)`       | Generate `start` to `stop-1`                     |
| `range(start, stop, step)` | Generate with step size                          |
| `reversed(sequence)`       | Reverse iterator                                 |
| `round(x)`                 | Nearest integer (tie → even)                     |
| `round(x, k)`              | Round to `k` decimals                            |
| `sorted(iterable)`         | New sorted list                                  |
| `sum(iterable)`            | Sum of numeric elements                          |
| `type(obj)`                | Class/type of object                             |

These functions form the core toolkit for everyday Python programming. Mastery enables concise, readable, and efficient code without reinventing basic operations.


---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 23)