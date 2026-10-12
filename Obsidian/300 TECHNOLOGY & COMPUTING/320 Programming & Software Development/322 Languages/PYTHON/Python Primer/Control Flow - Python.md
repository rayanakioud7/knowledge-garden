Date: 2026-05-23
Tags: [[Python]], [[Programming language]], [[Control Flow]]

---

## Control Structures and Block Syntax

Python's fundamental control structures rely on a specific syntax to define blocks of code for conditional statements and loops.

### Code Block Delimiters

- **The Colon Character (`:`)**: Used to mark the beginning of a code block that forms the body of a control structure, function, or class.
    
- **Single-Line Placement**: If the body consists of only a single executable statement, it can technically be placed directly on the same line to the right of the colon.
    
- **Indented Blocks**: Typically, a body is written as an **indented block** starting on the line immediately following the colon.
    

### The Role of Indentation

Unlike many programming languages that use curly braces `{}` to group code, Python relies entirely on the **indentation level** to determine the boundaries and scope of a code block or any nested blocks within it.

```python
# Single-line shortcut (valid for single statements)
if active: balance = 0

# Standard indented block (preferred for readability)
if active:
    balance = 0
    status = "reset"  # Same indentation means same block
```

### Syntax Rules Summary

|**Structural Element**|**Syntax Delimiter**|**Scope Definition**|**Applied To**|
|---|---|---|---|
|**Block Beginning**|`:`|Marks the start of a body.|Conditionals, Loops, Functions, Classes.|
|**Block Boundaries**|Indentation|Level of whitespace defines scope.|All nested code blocks.|

---

## Conditionals

Conditional constructs (or `if` statements) execute a specific block of code based on whether a Boolean expression evaluates to `True` or `False`.

### General Syntax Structure

The most general form of a conditional construct uses `if`, `elif` (else if), and `else`:

```python
if first_condition:
    first_body
elif second_condition:
    second_body
elif third_condition:
    third_body
else:
    fourth_body
```

- **Mutual Exclusion**: Python evaluates conditions from top to bottom. The moment one condition succeeds, its corresponding body executes, and the rest of the entire construct is completely skipped.
    
- **Flexibility**: A construct can contain any number of `elif` clauses (including zero). The final `else` clause is optional.
    

### Implicit Boolean Evaluation (Truthiness)

Non-Boolean types can be evaluated directly inside conditional statements using implicit rules. For example, checking if a text string contains characters can be written using a shorthand form:

```python
# Shorthand form
if response:
    pass

# Exact equivalent explicit form
if response != '':
    pass
```

### Nesting and Indentation Scoping

Control structures can be nested inside one another. Python uses indentation to figure out exactly which commands belong inside a conditional body and which commands run unconditionally outside of it.

```python
if door_is_closed:
    if door_is_locked:
        unlock_door()     # Runs only if closed AND locked
    open_door()           # Runs if closed, regardless of starting lock status

advance()                 # Not indented! Runs unconditionally after the block finishes
```

### Structural Summary

|**Clause Type**|**Is it Required?**|**Max Allowed per Construct**|**Evaluation Rule**|
|---|---|---|---|
|`if`|**Yes**|$1$|Checked first.|
|`elif`|No|Unlimited|Checked only if all previous clauses failed.|
|`else`|No|$1$|Runs only if every single prior condition failed.|

---

## Loops

Python offers two distinct looping constructs for repeating code blocks:

- **`while` loop**: Used for general repetition based on repeatedly testing a Boolean condition.
    
- **`for` loop**: Used for convenient iteration over a defined series of values (like characters in a string, elements in a list, or numbers in a range).
    

### While Loops

A `while` loop repeatedly executes a block of code as long as its conditional expression remains `True`.

#### Syntax Structure

```python
while condition:
    body
```

#### Execution Lifecycle

1. **Initial Test**: Python evaluates the Boolean condition.
    
2. **True Condition**: If it is `True`, the loop body executes.
    
3. **Retesting**: After the body finishes, Python loops back to test the condition again.
    
4. **False Condition**: When the condition evaluates to `False`, the loop stops immediately, and control moves past the loop body.
    

### Code Breakdown: Linear Search with a `while` Loop

The text provides a practical example of searching for a specific character `'X'` inside a sequence:

```python
data =[0,1,2,3,4,5,6]
j = 0
while j < len(data) and data[j] != 'X':
    j += 1
print(j)
```

#### The Importance of Operator Short-Circuiting

The correctness of this loop relies completely on the **short-circuiting** behavior of the logical `and` operator:

- **The Safety Guard**: Python evaluates the left expression (`j < len(data)`) first.
    
- **Index Protection**: If `j` reaches the end of the list, `j < len(data)` becomes `False`. Because it is an `and` statement, Python stops immediately and never runs the right expression (`data[j] != 'X'`).
    
- **Preventing Crashes**: If Python evaluated the right expression first or ran both without short-circuiting, accessing `data[j]` at the end of the sequence would trigger a critical `IndexError` crash.
    

### Search Loop Outcome Scenarios

When this loop completes, the final value of the index variable `j` tells you the exact outcome of your search:

|**Loop Termination Scenario**|**Final Value of Index j**|**Meaning**|
|---|---|---|
|**Element Found**|Index of the leftmost occurrence of `'X'`.|Target found successfully.|
|**Element Missing**|Equal to `len(data)`.|Target is not in the collection.|
|**Empty Collection**|`0` (Since `0 < 0` fails immediately).|Loop body never executes.|

---
## For Loops

Python's `for` loop syntax is a cleaner, more convenient alternative to a `while` loop when iterating through a sequence of elements. It is similar to the "for each" loop found in other programming languages like [[JAVA]].

### Iterable Structures

A `for` loop can operate on any **iterable** structure. Iterables are containers that can return their elements one at a time. Examples include:

- Lists (`list`) and Tuples (`tuple`)
    
- Strings (`str`)
    
- Sets (`set`) and Dictionaries (`dict`)
    
- Files
    

#### General Syntax Structure

```python
for element in iterable:
    body  # The body can use 'element' as a variable identifier
```

### Loop Variable Behavior

During each pass (iteration) of the loop, Python automatically assigns the next element from the sequence to the loop variable identifier (`val`).

- **Methods on Mutable Elements**: If the element drawn from the sequence is mutable (like a nested list), you can use `val` to call methods and mutate that object directly.
    
- **Reassignment Protection**: Reassigning `val` to a brand-new value (e.g., `val = 10`) inside the loop body **does not** change the original data structure, nor does it affect the next iteration of the loop.
    

### Classic Code Examples

#### 1. Computing the Sum of a List

```python
total = 0
for val in data:
    total += val  # Adds each element to the total variable
print(total)
```

#### 2. Finding the Maximum Value in a List

```python
biggest = data[0]  # Assumes the data list is not empty
for val in data:
    if val > biggest:
        biggest = val  # Updates the maximum value found so far
print(biggest)
print(max(data))
```

### For Loops vs. While Loops

While both loops can perform the same repeating tasks, the `for` loop has distinct structural advantages:

|**Feature Requirement**|**while Loop**|**for Loop**|
|---|---|---|
|**Index Management**|**Manual**: You must create, increment, and track an index variable (e.g., `j += 1`).|**Automatic**: Python handles extracting items implicitly.|
|**Loop Condition**|Required (Boolean expression).|Not required.|
|**Non-Indexed Containers**|❌ Cannot be used easily on collections without index positions (like a `set`).|**Yes**: Works flawlessly on sets or files.|

---

## Index-Based For Loops

A standard `for` loop iterates over elements directly, but it has a limitation: it does not tell you the index position where an element resides within the sequence. For some applications, knowing the index position is necessary.

### The range Class

To loop over indices, Python provides a built-in class named `range` that generates sequences of integers.

- **Simplest Form**: The syntax `range(n)` generates a series of $n$ integer values starting from $0$ up to $n - 1$.
    
- **Index Matching**: For a data sequence of length $n$, the integers generated by `range(n)` match the exact valid index positions of that sequence.
    

#### Standard Syntax Idiom

```python
# Standard pattern to loop through all index positions
nums = [0,3,7,18,28,19]
for j in range(len(nums)):
    # j is an integer index, NOT the element itself
    print(nums[j])  # Use data[j] to look up the actual element
```

### Code Breakdown: Finding the Maximum Element's Index

Instead of tracking the maximum value itself, this program tracks the **index position** where the maximum value lives:

```python
big_index = 0
for j in range(len(nums)):
    if nums[j] > nums[big_index]:
        big_index = j  # Updates to look at the new largest index position
print(big_index)
```

### Direct Element Loop vs. Index-Based Loop Summary

| **Loop Approach** | **Syntax**                   | **Loop Variable Tracks**       | **Primary Use Case**                                       |
| ----------------- | ---------------------------- | ------------------------------ | ---------------------------------------------------------- |
| **Element-Based** | `for val in data:`           | The actual item object.        | When you only need to read or process values.              |
| **Index-Based**   | `for j in range(len(data)):` | An integer index position $j$. | When you need to know _where_ items live or modify a list. |

---

## Break and Continue Statements

Python provides two control statements to alter the natural execution flow of loops from inside their bodies.

### 1. The break Statement

The `break` statement **immediately terminates** a `while` or `for` loop.

- **Nested Loops Rule**: If `break` is executed inside nested loops, it only terminates the most **immediately enclosing loop** (the specific loop it is directly sitting inside). It does not stop any outer loops.
    

```python
found = False
for item in data:
    if item == target:
        found = True
        break  # Stops the loop immediately because the target is found
```

### 2. The continue Statement

The `continue` statement skips the rest of the code in the **current iteration** of a loop body, but the loop itself keeps running.

- **Next Pass Execution**: Python stops executing lines below the `continue` statement for that specific turn, jumps back to the top of the loop, and proceeds directly with the next scheduled pass.
    

### Comparison Summary

|**Statement**|**What happens to the current iteration turn?**|**What happens to the remaining loop passes?**|**Best Used For**|
|---|---|---|---|
|`break`|Stops immediately.|**Terminated entirely** (exits loop).|Exiting early once a search target is found.|
|`continue`|Stops immediately.|**Proceeds as expected** with the next item.|Skipping invalid data entries without stopping the loop.|

> [!info] Definitions & Properties
> 
> **Usage Recommendation**: The textbook recommends using both `break` and `continue` sparingly. However, they are highly effective tools to simplify your code structure and avoid writing overly complex logical conditions.

---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 18)