Date: 2026-05-25
Tags: [[Python]], [[Programming language]]

---
# Exception Handling

Exceptions are unexpected events that occur during the execution of a program. They typically result from logical errors or unanticipated situations (such as running out of memory).

> [!info] Terminology Mapping
> *   **Exceptions** are also known as **errors**. They are objects.
> *   **Raised** is synonymous with **thrown**. Code "raises" an exception when it encounters a problem.
> *   **Caught** is synonymous with **handled**. A surrounding context "catches" the exception to manage it.

![[Pasted image 20260813181208.png]]

## Execution Flow

When an exception occurs, the following process takes place:

1.  **Raised:** Code (or the Python interpreter) raises an exception object.
2.  **Caught (Optional):** A surrounding context may catch the exception and handle it appropriately.
3.  **Uncaught (Default):** If the exception is **not** caught:
    *   The Python interpreter stops executing the program immediately.
    *   An appropriate error message is reported to the console.

## Sources of Exceptions

*   **User Code:** Logical errors or invalid operations defined by the programmer.
*   **Interpreter:** System-level issues, such as running out of memory.

This section covers common error types, the syntax for catching/handling raised errors, and how to manually raise errors from user-defined code blocks.

---
# Common Exception Types

Python includes a rich hierarchy of exception classes to designate various categories of errors. The class `Exception` serves as a base class for most error types.

When an error occurs, an instance of a specific subclass is created. This instance encodes details about the problem.

> [!info] Common Causes of Exceptions
> *   **Undefined Identifier:** Using a variable name that does not exist causes a `NameError`.
> *   **Invalid Attribute:** Using dot notation (e.g., `obj.foo`) when `obj` has no member named `foo` causes an `AttributeError`.
> *   **Parameter Issues:** Sending the wrong number, type, or value of parameters to a function.

---

## Exception Class Reference

The following table lists common exception classes found in Python.

| Class | Description |
| :--- | :--- |
| **Exception** | A base class for most error types. |
| **AttributeError** | Raised by syntax `obj.foo` if `obj` has no member named `foo`. |
| **EOFError** | Raised if "end of file" is reached for console or file input. |
| **IOError** | Raised upon failure of an I/O operation (e.g., opening a file). |
| **IndexError** | Raised if an index to a sequence is out of bounds. |
| **KeyError** | Raised if a nonexistent key is requested for a set or dictionary. |
| **KeyboardInterrupt** | Raised if the user types `ctrl-C` while the program is executing. |
| **NameError** | Raised if a nonexistent identifier is used. |
| **StopIteration** | Raised by `next(iterator)` if no element remains (see Section 1.8). |
| **TypeError** | Raised when the wrong type of parameter is sent to a function. |
| **ValueError** | Raised when a parameter has an invalid value (e.g., $\sqrt{-5}$). |
| **ZeroDivisionError** | Raised when any division operator is used with 0 as the divisor. |

---

## Parameter Errors

Functions often raise exceptions when arguments do not match expectations.

### TypeError
This occurs when the **type** or the **number** of parameters is incorrect.

*   **Wrong Type:** Passing a string to a math function.
    *   Example: `abs('hello')` raises `TypeError` because the parameter is not numeric.
*   **Wrong Count:** Passing too many or too few arguments.
    *   Example: `abs(3, 5)` raises `TypeError` because `abs` expects only one parameter.

### ValueError
This occurs when the **type** and **number** of parameters are correct, but the **value** itself is illegitimate for the context.

*   **Invalid Value:** The `int` constructor accepts a string, but that string must represent an integer.
    *   Valid: `int('137')`
    *   Invalid: `int('3.14')` raises `ValueError` (string is valid type, but '3.14' is not an integer).
    *   Invalid: `int('hello')` raises `ValueError`.

## Access Errors

Errors frequently occur when trying to access elements in data structures.

| Data Structure | Access Syntax | Error Type | Condition |
| :--- | :--- | :--- | :--- |
| **Sequence** (list, tuple, str) | `data[k]` | `IndexError` | Integer `k` is not a valid index (out of bounds). |
| **Mapping** (dict, set) | `data[key]` | `KeyError` | Attempt to access a nonexistent element/key. |

---
# Raising an Exception

An exception is thrown by executing the **`raise`** statement. This statement requires an instance of an exception class as an argument to designate the specific problem.

> [!info] Raise Syntax
> `raise ExceptionClass('Error message')`
>
> This creates a new instance of the exception class (e.g., `ValueError`) with the error message passed to the constructor.

## Execution Flow

When a `raise` statement is executed:
1.  **Immediate Stop:** The execution of the current function ceases immediately.
2.  **Propagation:** The exception is sent to the calling context.
3.  **Handling:** If the exception is not caught by the caller, it propagates further up the chain. If it remains uncaught at the top level, the interpreter stops the program and displays a traceback.

---

## Parameter Validation Strategy

When checking the validity of parameters sent to a function, it is customary to follow a specific order:
1.  **Verify Type:** Ensure the parameter is of the appropriate data type.
2.  **Verify Value:** Ensure the parameter has an appropriate value for that type.

### The `isinstance` Function

To check types at run-time, Python provides the built-in function `isinstance`

*   **Syntax:** `isinstance(obj, cls)`
*   **Returns:** `True` if `obj` is an instance of class `cls` (or any subclass of `cls`).
*   **Multiple Types:** You can pass a **tuple** of allowable types as the second parameter.
    *   Example: `isinstance(x, (int, float))` checks if `x` is either an integer or a float.

---

## Implementation Examples

### Basic Validation (Value Only)
The following function calculates a square root. It checks if the input value is negative. If so, it raises a `ValueError`.

```python
import math

def squareroot(x):
    if x < 0:
        raise ValueError('x cannot be negative')
    else:
        a = math.sqrt(x)
        return a

print(squareroot(-5)) # Raises ValueError
print(squareroot(4))  # Returns 2.0
```

### Robust Validation (Type and Value)
A more robust implementation checks the type first, then the value. This mimics how standard library functions often behave.

```python
import math

def sqrt(x):
    if not isinstance(x, (int, float)):
        raise TypeError("x must be numeric")

    if x < 0:
        raise ValueError("x cannot be negative")

    return math.sqrt(x)


print(sqrt('hello'))      # 5.0
```

In this example:
*   Passing a string (e.g., `'hello'`) triggers the `TypeError`.
*   Passing a negative number (e.g., `-5`) triggers the `ValueError`.
*   Passing a valid non-negative number proceeds to the calculation logic.

---
## Error-Checking Philosophy

*   **Trade-off:** Rigorous type checking (e.g., using `isinstance`) consumes extra execution time and adds code complexity.
*   **Pythonic Approach:** Rely on **implicit error handling**. Write simple code; if invalid types are used, Python's operations (like `+`) will naturally raise appropriate exceptions (e.g., `TypeError`).

### Example: `sum()` Function

| Approach | Behavior |
| :--- | :--- |
| **Rigorous** | Manually checks if input is iterable and if every element is numeric before calculating. |
| **Simple (Preferred)** | Directly iterates and adds (`total + v`). <br>• If input isn't iterable, the `for` loop fails naturally.<br>• If elements aren't numeric, the addition raises a `TypeError` naturally. |

```python
def sum(values):
	total = 0
	for value in values:
		total += values
	return total 
```

> [!note] Book Preference
> The text favors **simpler implementations** with minimal explicit error-checking to maintain clean presentation, relying on Python to raise errors automatically when operations fail.

---

# Catching an Exception

There are two main philosophies for handling potential errors in code.

## 1. “Look Before You Leap” (Proactive Checking)

Use conditional logic to **prevent** the exception from occurring.

```python
if y != 0:
    ratio = x / y
else:
    ... handle error ...
```

*   **Goal:** Avoid exceptions entirely by checking conditions first.
*   **Cost:** Adds extra checks on every execution, even when no error occurs.

## 2. “Easier to Ask for Forgiveness than Permission” (Reactive Handling)

Attempt the operation and **catch** the exception if it arises. This is implemented using `try-except`.

```python
try:
    ratio = x / y
except ZeroDivisionError:
    ... handle error ...
```

*   **Philosophy:** Don’t waste time preventing rare errors — let them happen, then handle them.
*   **Attributed to:** Grace Hopper, early computer science pioneer.

---

## `try-except` Structure

| Block               | Purpose                                                                         |
| :------------------ | :------------------------------------------------------------------------------ |
| `try:`              | Primary code that might raise an exception. Can be one line or a large block.   |
| `except ErrorType:` | Code executed **only if** the specified exception is raised in the `try` block. |

You can have multiple `except` blocks to handle different exception types.

---

> [!info] Efficiency Note
> The `try` block runs efficiently when no exception occurs — no overhead from pre-checks. But catching an exception costs more than a simple conditional. Use `try-except` when exceptional cases are rare or hard to predict.

---

# Catching Exceptions: Practical Patterns

## 1. Capture Exception Object

Use `as` to access the exception instance for detailed error messages.

```python
try:
    fp = open('sample.txt')
except IOError as e:
    print('Unable to open file:', e)  # e.g., "file not found"
```

```text
error opening file: [Errno 2] No such file or directory: 'sample.txt':
```

---

## 2. Handle Multiple Exception Types

Catch several exceptions in one `except` block using a tuple.

```python
age = -1
while age <= 0:
    try:
        age = int(input('Enter your age in years: '))
        if age <= 0:
            print('Your age must be positive')
    except (ValueError, EOFError):
        print('Invalid response')
```

> [!note] Behavior
> If an exception occurs, the rest of the `try` block is skipped. The loop continues with `age` unchanged.

---

## 3. Silent Exception Handling

Use `pass` to catch and ignore exceptions — useful when you want to suppress errors without action.

```python
try:
    age = int(input('Enter your age: '))
except (ValueError, EOFError):
    pass  # Do nothing; loop will retry
```

> [!info] `pass` Statement
> A no-op placeholder that satisfies Python’s syntax requirement for a non-empty block.

---

## When to Use `try-except`

Ideal for unpredictable operations like:
*   File I/O (`open()`) → may raise `IOError`
*   User input (`input()`, `int()`) → may raise `EOFError`, `ValueError`

Avoid overusing it for predictable logic — prefer proactive checks when possible.

---

# Advanced `try-except` Patterns

## 1. Multiple `except` Clauses for Different Responses

Handle different exception types with custom logic per type.

```python
age = -1
while age <= 0:
    try:
        age = int(input('Enter your age in years: '))
        if age <= 0:
            print('Your age must be positive')
    except ValueError:
        print('That is an invalid age specification')
    except EOFError:
        print('There was an unexpected error reading input.')
        raise  # Re-raise to propagate upward and break loop
```

> [!info] `raise` without arguments  
> Re-throws the currently handled exception — useful after logging or cleanup, to let higher-level code handle it.

---

## 2. Catch-All `except` (Use Sparingly)

Catch any unhandled exception using bare `except:`.

```python
try:
    ... risky code ...
except SomeSpecificError:
    ... handle known case ...
except:
    ... handle unknown errors ...
```

> [!warning] Avoid Overuse  
> Bare `except` hides unexpected bugs. Use only when you truly need to catch *everything* — e.g., top-level safety net.

---

## 3. `finally` Clause for Cleanup

Code in `finally` always runs — whether an exception occurred or not. Ideal for resource cleanup.

```python
fp = open('data.txt', 'r')
try:
    content = fp.read()
except IOError as e:
    print('File error:', e)
finally:
    fp.close()  # Always executed
```

> [!note] Guarantee  
> Even if an exception is raised and not caught, or re-raised, `finally` still executes before control leaves the block.

---

## Summary Table

| Clause          | Purpose                                  | Runs When?                     |
|-----------------|------------------------------------------|--------------------------------|
| `try`           | Code that may raise exceptions           | Always                         |
| `except Type`   | Handle specific exception                | Only if that exception occurs  |
| `except`        | Catch-all for any other exception        | If no prior `except` matched   |
| `finally`       | Cleanup / guaranteed execution           | Always, even on uncaught error |

![[Pasted image 20260525214603.png|center|493]]

---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 33)