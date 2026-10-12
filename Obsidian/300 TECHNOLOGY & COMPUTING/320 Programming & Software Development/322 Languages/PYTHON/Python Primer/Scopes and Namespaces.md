Date: 2026-05-30
Tags: [[Python]], [[Programming language]]

---

# Scopes and Namespaces

## Name Resolution

**Name resolution** is the process of determining the value associated with an identifier.
*   If an identifier is used (e.g., `x + y`) but has not been associated with an object, Python raises a `NameError`.

---
## Scope

Whenever an identifier is assigned a value, that definition is made within a specific **scope**.

| Scope Type       | Description                                                                                     |
| :--------------- | :---------------------------------------------------------------------------------------------- |
| **Global Scope** | Top-level assignments made outside of any function.                                             |
| **Local Scope**  | Assignments made within the body of a function. These are local to that specific function call. |

> [!info] Isolation
> An assignment inside a function (e.g., `x = 5`) has **no effect** on an identifier `x` in the broader global scope. The local `x` is distinct.

---

## Namespaces

Each distinct scope is represented by a **namespace**. A namespace manages all identifiers currently defined in a given scope.

### Figure: Namespace Interaction

The following diagram illustrates the relationship between a caller's namespace and a function's local namespace during the call `count(grades, 'A')`.

```python
# ==========================================
# 1. CALLER'S NAMESPACE (Global Scope)
# ==========================================

# Variables defined in the main script belong to the global scope.
gpa = 3.56
major = 'CS'
grades = ['A-', 'B+', 'A-']

# ==========================================
# 2. THE FUNCTION DEFINITION
# ==========================================

def count(data, target):
    """
    This function creates a LOCAL NAMESPACE when called.
    """
    # Local variable initialization
    n = 0
    
    # The diagram shows the moment the loop assigns 
    # the first element ('A-') to the local variable 'item'.
    for item in data:
        
        # Logic to count occurrences
        if item == target:
            n += 1
            
    return n

# ==========================================
# 3. THE EXECUTION (Triggering the Diagram)
# ==========================================

# When we call count(grades, 'A'), the following happens:
# 1. 'data' becomes an ALIAS for the 'grades' list.
# 2. 'target' is assigned 'A'.
# 3. 'n' is initialized to 0.
# 4. The loop starts, assigning 'item' to the first element 'A-'.

result = count(grades, 'A')

# Verification:
# The variable 'data' inside the function refers to the exact same 
# list object as 'grades' in the global scope.
print("ID of 'grades' (Caller):", id(grades))
```


![[Pasted image 20260530233431.png|center]]

**Key Observations from Figure:**

1.  **Caller's Namespace (Left):**
    *   Contains identifiers: `gpa` (float), `grades` (list), `major` (string).
2.  **Function's Local Namespace (Right):**
    *   Contains identifiers: `n`, `target`, `data`, `item`.
3.  **Aliasing:**
    *   The local parameter `data` is an alias for the caller's argument `grades`. Both point to the **same list object** in memory.
    *   The local parameter `target` points to the string literal `'A'`.

This structure ensures that local variables (like `n` or `item`) do not clash with global variables, while still allowing the function to access and modify the objects passed to it.

---

Python implements namespaces as **dictionaries** that map identifier names (strings) to their associated values.

| Function     | Description                                          |
| :----------- | :--------------------------------------------------- |
| **`dir()`**  | Returns a list of identifiers (the dictionary keys). |
| **`vars()`** | Returns the full dictionary mapping names to values. |

> [!info] Default Behavior
> By default, both `dir()` and `vars()` inspect the **most locally enclosing namespace** where they are called.

---

# First-Class Objects

In Python, **first-class objects** are instances of a type that can be treated like any other variable.

> [!info] Capabilities of First-Class Objects
> *   **Assigned** to an identifier (variable).
> *   **Passed** as a parameter to a function.
> *   **Returned** by a function.

While basic types (like `int` and `list`) are first-class, **functions** and **classes** are also first-class objects in Python.

---

## Functions as Objects

You can assign a function to a new variable name. This creates an **alias**; it does not create a new function.

```python
scream = print       # 'scream' is now an alias for the 'print' function
scream('Hello')      # Output: Hello
```

### Functions as Parameters

Because functions are objects, you can pass them as arguments to other functions.

```python
# The 'abs' function is passed as the value for the 'key' parameter
max(-5, 10, key=abs) 
```

In this example, the identifier `key` inside the `max` function is assigned the actual parameter `abs` (the function object itself).

---

## Namespace Perspective

From a namespace standpoint, defining a function is simply an assignment operation.

| Syntax           | Namespace Action                                                                                   |
| :--------------- | :------------------------------------------------------------------------------------------------- |
| `scream = print` | Adds `scream` to the namespace. Its value is the built-in `print` function object.                 |
| `def count(...)` | Adds `count` to the namespace. Its value is the new function instance representing the code block. |
| `class MyClass:` | Adds `MyClass` to the namespace. Its value is the class representation.                            |

---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 46)