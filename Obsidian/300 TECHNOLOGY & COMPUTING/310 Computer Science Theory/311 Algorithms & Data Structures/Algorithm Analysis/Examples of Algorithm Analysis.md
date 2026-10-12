Date: 2026-08-26
Tags: [[Programming language]], [[Python]], [[Algorithm]], [[Data Structure]]

---

# Examples of Algorithm Analysis

> [!info] Definitions & Properties
> Constant-time operations execute in $O(1)$ time independently of input size $n$. Array-based sequences store element references in contiguous memory, enabling direct index lookup via memory offsets.

---

## 1. Constant-Time Operations

Python list operations leverage underlying memory layouts to achieve $O(1)$ execution time for key accesses.

| Operation          | Syntax      | Mechanism                                                               | Time Complexity |
| ------------------ | ----------- | ----------------------------------------------------------------------- | --------------- |
| **Length Lookup**  | `len(data)` | Retrieves an internal instance variable tracking total element count.   | $O(1)$          |
| **Element Access** | `data[j]`   | Validates index $j$ and computes exact memory address via array offset. | $O(1)$          |

---

## 2. Maximum-Finding Analysis

The `find_max` algorithm (Section 3.3.1, Code Fragment 3.1) evaluates a sequence of $n$ elements to identify the maximum value.

> [!note] Worst-Case vs. Average-Case Complexity
> * **Worst-Case**: Input in strictly increasing order requires $n - 1$ reassignments, yielding $O(n)$ running time.
> * **Average-Case**: Randomly ordered inputs require reassignment only when element $j$ exceeds all preceding elements. The expected update count equals the $n$-th Harmonic number $H_n$:
> 
> $$H_n = \sum_{j=1}^{n} \frac{1}{j} = O(\log n)$$
> 
> 
> 
> 

---

## 3. Prefix Averages

Given a sequence $S$ of $n$ numbers, the prefix average sequence $A$ computes the average of elements $S[0], \dots, S[j]$ for each index $j \in \{0, \dots, n-1\}$:

$$A[j] = \frac{\sum_{i=0}^{j} S[i]}{j + 1}$$

### Comparison of Prefix Average Algorithms

| Algorithm | Strategy | Inner Operation / Execution Count | Time Complexity |
| --- | --- | --- | --- |
| `prefix_average1` | Two explicit nested loops | Inner loop sums $j+1$ elements: $\sum_{j=0}^{n-1} (j+1) = \frac{n(n+1)}{2}$ | $O(n^2)$ |
| `prefix_average2` | Slice `S[0:j+1]` + `sum()` | Slice allocation and `sum()` each take $O(j+1)$ time per pass | $O(n^2)$ |
| `prefix_average3` | Single loop with running sum | Maintains total dynamically with single addition per iteration | $O(n)$ |

### Quadratic Implementations

```python
def prefix_average1(S):
    """Return list such that, for all j, A[j] equals average of S[0], ..., S[j]."""
    n = len(S)
    A = [0] * n
    for j in range(n):
        total = 0
        for i in range(j + 1):
            total += S[i]
        A[j] = total / (j + 1)
    return A

```

```python
def prefix_average2(S):
    """Return list such that, for all j, A[j] equals average of S[0], ..., S[j]."""
    n = len(S)
    A = [0] * n
    for j in range(n):
        A[j] = sum(S[0:j + 1]) / (j + 1)
    return A

```

### Linear Implementation

```python
def prefix_average3(S):
    """Return list such that, for all j, A[j] equals average of S[0], ..., S[j]."""
    n = len(S)
    A = [0] * n
    total = 0
    for j in range(n):
        total += S[j]
        A[j] = total / (j + 1)
    return A

```

---

## 4. Three-Way Set Disjointness

Three-way set disjointness determines whether the intersection of three sequences $A$, $B$, and $C$ (each containing $n$ distinct elements) is empty: $A \cap B \cap C = \emptyset$.

| Algorithm | Strategy | Loop Bounds & Execution Analysis | Worst-Case Complexity |
| --- | --- | --- | --- |
| `disjoint1` | Triple nested loops | Tests all $n^3$ candidate triples $(a, b, c)$ | $O(n^3)$ |
| `disjoint2` | Short-circuit nested loops | Evaluates inner $C$ loop only when $a == b$; at most $O(n)$ matching pairs exist | $O(n^2)$ |

```python
def disjoint1(A, B, C):
    """Return True if there is no element common to all three lists."""
    for a in A:
        for b in B:
            for c in C:
                if a == b == c:
                    return False
    return True

```

```python
def disjoint2(A, B, C):
    """Return True if there is no element common to all three lists."""
    for a in A:
        for b in B:
            if a == b:
                for c in C:
                    if a == c:
                        return False
    return True

```

---

## 5. Element Uniqueness

The element uniqueness problem determines whether all $n$ elements in a sequence $S$ are distinct.

| Algorithm | Strategy              | Core Operations                                                               | Time Complexity |
| --------- | --------------------- | ----------------------------------------------------------------------------- | --------------- |
| `unique1` | Nested pair iteration | Compares all $\frac{n(n-1)}{2}$ distinct index pairs $(j, k)$ with $j < k$    | $O(n^2)$        |
| `unique2` | Sorting copy          | Presorts array in $O(n \log n)$ time, then checks adjacent elements in $O(n)$ | $O(n \log n)$   |

```python
def unique1(S):
    """Return True if there are no duplicate elements in sequence S."""
    for j in range(len(S)):
        for k in range(j + 1, len(S)):
            if S[j] == S[k]:
                return False
    return True

```

```python
def unique2(S):
    """Return True if there are no duplicate elements in sequence S."""
    temp = sorted(S)
    for j in range(1, len(temp)):
        if temp[j - 1] == temp[j]:
            return False
    return True

```

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 130)