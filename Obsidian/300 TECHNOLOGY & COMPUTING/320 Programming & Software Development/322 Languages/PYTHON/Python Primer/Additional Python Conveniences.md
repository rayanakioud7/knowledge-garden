Date: 2026-05-29
Tags: [[Python]], [[Programming language]]

---

# Conditional Expressions

Python supports **conditional expressions** (ternary operator) to replace simple `if-else` blocks with a single line.

> [!info] Syntax
> `expr1 if condition else expr2`
>
> *   If `condition` is **True**, evaluates to `expr1`.
> *   If `condition` is **False**, evaluates to `expr2`.
>
> Equivalent to C/Java: `condition ? expr1 : expr2`

---

## Comparison: Traditional vs. Conditional

### Traditional Control Structure
```python
if n >= 0:
    param = n
else:
    param = -n
result = foo(param)
```

### Conditional Expression
```python
param = n if n >= 0 else -n
result = foo(param)
```

### Direct Usage as Argument
No intermediate variable needed — use directly in function calls.

```python
result = foo(n if n >= 0 else -n)
```

---

## Implementation Example

```python
def absolu(n):
    param = n if n >= 0 else -n
    return param

print(absolu(-5))  # Output: 5
```

---

## Best Practices

| Guideline | Reason |
| :--- | :--- |
| ✅ Use for simple, readable logic | Shortens code without sacrificing clarity |
| ❌ Avoid complex nested conditions | Harder to read than multi-line `if-else` |
| ✅ Prefer “natural” case first | The value before `if` should be the common/expected case |

---
# Comprehension Syntax

Comprehensions provide a concise way to create collections (lists, sets, dicts) or generators by transforming or filtering an existing iterable.

> [!info] General Form
> `[expression for value in iterable if condition]`
>
> *   `expression`: What to compute/store.
> *   `value`: Current item from `iterable`.
> *   `if condition`: Optional filter — only include items where this is `True`.

Logically equivalent to:
```python
result = []
for value in iterable:
    if condition:
        result.append(expression)
```

---

## List Comprehension Examples

### Squares of 1 to n
```python
# Traditional
squares = []
for k in range(1, n+1):
    squares.append(k*k)

# Comprehension
squares = [k*k for k in range(1, n+1)]
```

### Factors of n
```python
factors = [k for k in range(1, n+1) if n % k == 0]
```

### Even numbers from 0 to 14 (step 2)
```python
even = [k+2 for k in range(0, 15, 2)]

print(even)
```

---

## Comprehension Types

Same logic, different output type — determined by delimiters.

| Delimiter    | Type          | Example                           |
| :----------- | :------------ | :-------------------------------- |
| `[ ... ]`    | **List**      | `[k*k for k in range(1, n+1)]`    |
| `{ ... }`    | **Set**       | `{k*k for k in range(1, n+1)}`    |
| `( ... )`    | **Generator** | `(k*k for k in range(1, n+1))`    |
| `{k: v ...}` | **Dict**      | `{k: k*k for k in range(1, n+1)}` |

---

## Generator Comprehension Advantage

Use generator comprehensions when you don’t need to store all results — especially useful as arguments to functions like `sum()`, `max()`, etc.

```python
# Memory efficient: no list created
total = sum(k*k for k in range(1, n+1))

# vs. memory heavy: creates full list first
total = sum([k*k for k in range(1, n+1)])
```

```python
total = sum(k*k for k in range(1,10))
print(total)
```

> [!note] Preference
> Prefer generator comprehensions for aggregation tasks — avoids unnecessary memory allocation.

---
# Packing and Unpacking of Sequences

Python provides convenient syntax for handling tuples and sequences through **packing** (combining values) and **unpacking** (splitting values).

---

## Automatic Packing

Comma-separated expressions are automatically treated as a tuple, even without parentheses.

```python
data = 2, 4, 6, 8  # Automatically packed into tuple (2, 4, 6, 8)
print(data)
```

### Common Use: Returning Multiple Values

Functions can return multiple values by packing them into a tuple.

```python
def get_coordinates():
    x = 10
    y = 20
    return x, y  # Returns tuple (10, 20)

result = get_coordinates()  # result is (10, 20)
print(result)
a,b = get_coordinates()
print(a, '\t', b)
```

---

## Unpacking

Assign individual identifiers to elements of a sequence. The number of variables must match the number of elements.

```python
a, b, c, d = range(7, 11)
# Effect: a=7, b=8, c=9, d=10
```

> [!warning] Length Match Required
> Left-hand side variables must equal right-hand side elements. Mismatch raises `ValueError`.

---

## Unpacking Function Returns

Unpack tuples returned by functions directly into separate variables.

```python
quotient, remainder = divmod(17, 5)
# quotient = 3, remainder = 2
```

---

## Unpacking in Loops

When iterating over a sequence of iterables (e.g., list of tuples), unpack each element directly in the loop header.

```python
for x, y in [(7, 2), (5, 8), (6, 4)]:
    print(x, '\t', y)
```


### Practical Example: Dictionary Items

Commonly used to iterate over key-value pairs from `dict.items()`.

```python
mapping = {'a': 1, 'b': 2, 'c': 3}
for k, v in mapping.items():
    print(f"Key: {k}, Value: {v}")
```

---

## Summary Table

| Operation | Syntax | Result |
| :--- | :--- | :--- |
| **Packing** | `data = 1, 2, 3` | Creates tuple `(1, 2, 3)` |
| **Unpacking** | `a, b, c = (1, 2, 3)` | Assigns `a=1, b=2, c=3` |
| **Return Pack** | `return x, y` | Returns tuple `(x, y)` |
| **Return Unpack** | `x, y = func()` | Splits returned tuple |
| **Loop Unpack** | `for k, v in items:` | Unpacks each iteration |

---

# Simultaneous Assignments

Simultaneous assignment combines **packing** and **unpacking** to assign multiple values in one statement.

> [!info] Syntax
> `x, y, z = 6, 2, 5`
>
> *   Right-hand side `(6, 2, 5)` is automatically packed into a tuple.
> *   Tuple is unpacked: `x=6`, `y=2`, `z=5`.

---

## Evaluation Order

All right-hand side expressions are evaluated **before** any assignments occur. This enables safe swapping without temporary variables.

### Swap Without Temporary Variable

```python
j, k = k, j  # Swaps values of j and k
```

Equivalent to (but cleaner than):

```python
temp = j
j = k
k = temp
```

The unnamed tuple on the right acts as an implicit temporary storage.

---

## Implementation Example: [[Fibonacci]] Generator

Simultaneous assignment simplifies state updates in generators.

```python
def fibonacci():
    a, b = 0, 1          # Initialize both at once
    while True:
        yield a
        a, b = b, a + b  # Update both simultaneously

gen = fibonacci()
for _ in range(15):
    print(next(gen), end=' ')
```

Without simultaneous assignment, you’d need a third variable:

```python
# Verbose version (avoid this)
future = a + b
a = b
b = future
```

---
## Benefits

| Benefit             | Description                                                  |
| :------------------ | :----------------------------------------------------------- |
| ✅ No temp variables | Cleaner code for swaps and multi-assignments                 |
| ✅ Atomic update     | All RHS evaluated first → no partial state issues            |
| ✅ Readability       | Expresses intent clearly (e.g., “swap these”, “update both”) |

---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 42)