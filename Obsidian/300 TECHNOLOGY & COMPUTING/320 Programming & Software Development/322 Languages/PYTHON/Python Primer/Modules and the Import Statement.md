Date: 2026-05-31
Tags: [[Python]], [[Programming language]]

---
# Modules and the Import Statement

Python's built-in namespace contains only ~130–150 essential definitions. The standard library contains thousands more, organized into **modules**.

The `import` statement loads definitions (functions, classes, variables) from a module into your current namespace.

---

## Import Syntax Variations

### 1. Direct Import (`from ... import ...`)
Imports specific identifiers directly into the current namespace. You can use them without a prefix.

```python
from math import pi, sqrt

print(pi)        # Direct access
print(sqrt(2))   # Direct access
```

### 2. Module Import (`import ...`)
Imports the module object itself. You must use **dot notation** (fully-qualified names) to access definitions.

```python
import math

print(math.pi)       # Qualified access
print(math.sqrt(2))  # Qualified access
```

> [!info] Namespace Behavior
> *   `from math import sqrt`: Adds `sqrt` to your namespace.
> *   `import math`: Adds `math` to your namespace.

---

## The Wildcard Import (`*`)

You can import all public definitions from a module using an asterisk.

```python
from math import *
```

> [!warning] Danger of Wildcard Imports
> Use `import *` sparingly. It dumps all names from the module into your current namespace, which can **overwrite** existing variables or functions with the same name (namespace collision).

---

## Summary Table

| Syntax                  | Usage          | Risk of Name Conflict                         |
| :---------------------- | :------------- | :-------------------------------------------- |
| `import math`           | `math.sqrt(2)` | Low (Namespace is prefixed)                   |
| `from math import sqrt` | `sqrt(2)`      | Medium (Overwrites local `sqrt` if it exists) |
| `from math import *` | `sqrt(2)` | High (Overwrites *any* matching local name) |

---

# Creating a New Module

To create a module, simply save your Python definitions (functions, classes, variables) in a file with a **`.py`** suffix (e.g., `utility.py`).

*   **Importing:** You can import definitions from this file into other scripts in the same directory.
    *   Example: `from utility import count`

---

## Execution Behavior

When a module is imported, **all top-level code** in that file is executed immediately.

To control this behavior, Python uses a special conditional statement:

```python
if __name__ == '__main__':
    # Code here runs ONLY if the file is executed directly
    # Code here DOES NOT run if the file is imported
```

> [!info] Execution Logic
> *   **Direct Execution:** If you run `python utility.py`, `__name__` is set to `'__main__'`. The code inside the block **executes**.
> *   **Imported:** If you run `import utility`, `__name__` is set to `'utility'`. The code inside the block is **skipped**.

---

## Common Use Case: Unit Tests

This pattern is often used to embed **unit tests** or demo code within a module. The tests run when you develop the module, but do not interfere when the module is used as a library in another program.

### Example: `utility.py`

```python
# utility.py

def count(data, target):
    n = 0
    for item in data:
        if item == target:
            n += 1
    return n

# This block only runs if you type 'python utility.py' in the terminal.
# It is skipped if you type 'from utility import count' in another script.
if __name__ == '__main__':
    data = [1, 2, 2, 3]
    print(count(data, 2))  # Output: 2
```

---

# Existing Modules

The Table summarizes key Python modules relevant to the study of data structures and algorithms.

| Module Name     | Description                                                                                    |
| :-------------- | :--------------------------------------------------------------------------------------------- |
| **array**       | Provides compact array storage for primitive types.                                            |
| **collections** | Defines additional data structures and abstract base classes involving collections of objects. |
| **copy**        | Defines general functions for making copies of objects.                                        |
| **heapq**       | Provides heap-based priority queue functions                                                   |
| **math**        | Defines common mathematical constants and functions.                                           |
| **os**          | Provides support for interactions with the operating system.                                   |
| **random**      | Provides random number generation.                                                             |
| **re**          | Provides support for processing regular expressions.                                           |
| **sys**         | Provides additional level of interaction with the Python interpreter.                          |
| **time**        | Provides support for measuring time, or delaying a program.                                    |

---
# Pseudo-Random Number Generation

Python's `random` module generates **pseudo-random numbers**. These numbers appear statistically random but are produced by a deterministic formula, not true randomness.

## Mechanics

A pseudo-random generator calculates the next number in a sequence based on previous numbers. A simple linear congruential generator uses the formula:

$$ \text{next} = (a \times \text{current} + b) \ \% \ n $$

Where $a$, $b$, and $n$ are specific integers. Python uses a more advanced algorithm called the **Mersenne Twister**, which produces sequences that are statistically uniform.

> [!warning] Security Warning
> Pseudo-random sequences are predictable if the algorithm is known. They are suitable for games or simulations but **unsuitable for computer security**. Security applications require true randomness (e.g., from hardware noise).

---

## The Seed

Because the next number depends on the current one, the generator needs a starting point called a **seed**.

*   **Determinism:** For a given seed, the generated sequence is always identical.
*   **Variation:** To get a different sequence each time a program runs, the seed is often set using the current system time or user input.

---

## Python Implementation

The `random` module provides the `Random` class.
*   **Instances:** You can create multiple instances of `Random` to have independent generators with separate states.
*   **Module Functions:** For convenience, the module also provides stand-alone functions (like `random.random()`) that use a single shared generator instance.

---

## Common Functions

| Syntax                         | Description                                                             |
| :----------------------------- | :---------------------------------------------------------------------- |
| `seed(hashable)`               | Initializes the generator based on the hash of the parameter.           |
| `random()`                     | Returns a pseudo-random float in the interval $[0.0, 1.0)$.             |
| `randint(a, b)`                | Returns a pseudo-random integer in the closed interval $[a, b]$.        |
| `randrange(start, stop, step)` | Returns a pseudo-random integer from `range(start, stop, step)`.        |
| `choice(seq)`                  | Returns a random element from the given sequence.                       |
| `shuffle(seq)`                 | Reorders the elements of the given sequence in-place (pseudo-randomly). |

```python
from random import randrange

a = randrange(1,100,10)
print(a)
```

```python
import random

c = random.randint(5, 98)
print(c)
```

---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 48)