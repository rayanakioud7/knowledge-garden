Date: 2026-08-20
Tags: [[OOP]], [[Programming language]], [[Python]]

---

# Shallow and Deep Copying

> [!info] Definitions & Properties
> An assignment creates an alias for an object, binding a new name to the existing object reference.
> A shallow copy constructs a new container object, but populates it with references to the child objects contained in the original sequence.
> A deep copy constructs a new container object and recursively constructs new copies of all child objects referenced by the original.

---

## 1. Copying Behaviors and Memory Mechanics

Python lists are referential structures storing pointers to memory locations of elements .

| Copy Type        | Mechanics                            | Container Object                                 | Element Objects    | Modification Effect                                                                                                    |
| ---------------- | ------------------------------------ | ------------------------------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **Aliasing**     | `palette = warmtones`                | Shared![[Pasted image 20260820000329.png]]       | Shared             | Modifying list structure or elements alters the original object.                                                       |
| **Shallow Copy** | `palette = list(warmtones)`          | Independent ![[Pasted image 20260820000352.png]] | Shared references  | Reassigning list items affects only the target copy; modifying mutable elements alters both lists (indirect aliasing). |
| **Deep Copy**    | `palette = copy.deepcopy(warmtones)` | Independent ![[Pasted image 20260820000435.png]] | Independent copies | Full structural and element isolation between original and copied structures.                                          |

---

## 2. Python copy Module

The built-in `copy` module provides explicit functions for duplicating generic objects without manual iteration.

| Function | Operation | Usage Example |
| --- | --- | --- |
| `copy.copy(x)` | Generates a shallow copy of object $x$. | `palette = copy.copy(warmtones)` |
| `copy.deepcopy(x)` | Generates a deep copy of object $x$. | `palette = copy.deepcopy(warmtones)` |

```python
import copy

# Reference aliasing
palette_alias = warmtones

# Shallow copy via constructor or copy module
palette_shallow1 = list(warmtones)
palette_shallow2 = copy.copy(warmtones)

# Deep copy via copy module
palette_deep = copy.deepcopy(warmtones)

```

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 102)