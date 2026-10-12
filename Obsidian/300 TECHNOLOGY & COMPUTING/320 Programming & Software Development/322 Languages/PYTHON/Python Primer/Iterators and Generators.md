Date: 2026-05-26
Tags: [[Python]], [[Programming language]]

---

# Iterators and Generators

## Core Concepts

| Term         | Definition                                                                                            |
| :----------- | :---------------------------------------------------------------------------------------------------- |
| **Iterator** | Object that manages iteration. `next(i)` returns next element; raises `StopIteration` when exhausted. |
| **Iterable** | Object that produces an iterator via `iter(obj)`. Examples: `list`, `tuple`, `str`, `dict`, `file`.   |

> [!note] Key Distinction
> A `list` is **iterable**, but **not** an iterator. You must call `iter(data)` to create an iterator.

---

## Implementation Example

```python
data = [1, 2, 4, 8]
i = iter(data)      # Create iterator from iterable
print(i)            # <list_iterator object at 0x...>
print(next(i))      # 1
print(next(i))      # 2
print(next(i))
# next(i) repeatedly until StopIteration
```

**For-loop automation:**

```python
for element in iterable:
    # Python automatically:
    # 1. Creates iterator: iter(iterable)
    # 2. Calls next() repeatedly
    # 3. Catches StopIteration to exit
```

---

## Iterator Behavior

*   **State Management**: Each iterator maintains its own progress through the data.
*   **Reference, Not Copy**: Iterator maintains an index into the **original** collection.
*   **Live Updates**: If the original list is modified during iteration, the iterator sees the changes.

---

## Lazy Evaluation

Objects like `range(1000000)` do **not** store all values in memory.

| Feature                 | Benefit                                                    |
| :---------------------- | :--------------------------------------------------------- |
| **Generates on-demand** | Memory efficient (no million values stored)                |
| **Computes as needed**  | Interrupted loops don't waste time computing unused values |

> [!info] Example
> `for j in range(1000000):` executes without allocating memory for one million integers.

---

## Dictionary Views

Dictionary methods `keys()`, `values()`, and `items()` utilize **lazy evaluation**. They return **view objects**, not explicit lists.

> [!info] View Objects
> *   **Iterable:** Can be used in loops.
> *   **Dynamic:** Reflects the *current* state of the dictionary. If the dictionary changes, the view changes.
> *   **Memory Efficient:** Does not create a separate copy of the data.

To create a static list from a view, pass it to the `list()` constructor.

---
## Implementation Example

```python
footballers = {'ronaldo': 7, 'messi': 10, 'suarez': 9}

# Returns a view object (dynamic)
print(footballers.keys())   

print(footballers.items())  

# Returns an explicit list (static copy)
print(list(footballers.values())) 
# Output: [7, 10, 9]
```

---

## Dictionary View Methods

| Method       | Returns            | Content                       |
| :----------- | :----------------- | :---------------------------- |
| `d.keys()`   | `dict_keys` view   | All keys in the dictionary.   |
| `d.values()` | `dict_values` view | All values in the dictionary. |
| `d.items()`  | `dict_items` view  | All `(key, value)` tuples.    |

---

# Generators

Generators are a convenient way to create iterators. They look like functions but use `yield` instead of `return`.

> [!info] Generator Mechanics
> *   **`yield`**: Pauses execution and returns a value. The function’s state (local variables) is saved.
> *   **Resumption**: When `next()` is called, execution resumes from where it left off.
> *   **Termination**: Raises `StopIteration` when the function body ends or a bare `return` is reached.
> *   **Constraint**: Cannot mix `yield` and `return <value>` in the same function.

---

## Traditional Function vs. Generator

### Traditional: Eager Evaluation (Stores all results)
Computes all factors, stores them in a list, and returns the entire list at once.

```python
def factors(n):
    result = []
    for k in range(1, n + 1):
        if n % k == 0:
            result.append(k)
    return result

print(factors(100))
```

### Generator: Lazy Evaluation (Yields one by one)
Computes factors on-demand. Memory efficient.

```python
def factors(n):
    for k in range(1, n + 1):
        if n % k == 0:
            yield k

# Usage:
for factor in factors(100):
    print(factor)
```

---

## Optimized Generator Example

This version improves efficiency by only iterating up to $\sqrt{n}$. It yields both the small factor $k$ and the large factor $n // k$.

> [!note] Order Note
> This generator does **not** produce factors in strictly increasing order. For $n=100$, it yields: `1, 100, 2, 50, 4, 25, 5, 20, 10`.

```python
def factors(n):
    k = 1
    while k * k < n:          # Iterate up to sqrt(n)
        if n % k == 0:
            yield k           # Yield small factor
            yield n // k      # Yield corresponding large factor
        k += 1
    if k * k == n:            # Handle perfect square case
        yield k
```

---

## Infinite Series: [[Fibonacci]]

Generators can produce infinite sequences because they compute values only when requested.

```python
def fibonacci():
    a = 0
    b = 1
    while True:               # Infinite loop
        yield a               # Report current value
        future = a + b
        a = b                 # Update for next iteration
        b = future

# Usage: Get first 10 numbers
gen = fibonacci()
for _ in range(15):
    print(next(gen), end=' ')
```

---

## Benefits of Generators

| Feature | Benefit |
| :--- | :--- |
| **Lazy Evaluation** | Results computed only when requested. |
| **Memory Efficiency** | Entire series does not need to reside in memory at once. |
| **Infinite Series** | Can generate endless data streams (e.g., Fibonacci) without crashing. |


---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 33)