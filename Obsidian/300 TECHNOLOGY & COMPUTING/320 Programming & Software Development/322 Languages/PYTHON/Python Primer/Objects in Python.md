Date: 2026-05-20
Tags: [[Python]], [[Programming language]]

---
## Objects in Python

Python is an object-oriented language, and **classes** form the basis for all its data types. The language includes several **built-in classes** to handle core data representations:

- `int`: Designed for integer values.
    
- `float`: Designed for floating-point values.
    
- `str`: Designed for character strings.
    

## Identifiers, Objects, and the Assignment Statement

The most critical command structure across Python code configurations is the **assignment statement**, exemplified by:

```python
temperature = 98.6
```

#### Structural Mechanics

- **Identifier**: The name `temperature` serves as the **identifier** (or name).
    
- **Object Association**: The statement establishes the identifier and associates it with the **object** expressed on the right-hand side of the equal sign. In this instance, it maps to a floating-point object with a value of $98.6$.
    

> [!info] Definitions & Properties
> 
> Python's assignment model relies on reference mechanics. An identifier does not store a value directly; instead, it acts as a reference or pointer that targets an instance of a specific class hosted elsewhere in memory.

#### Visual Reference

![[Pasted image 20260520131052.png|center]]

---
### Identifiers

Identifiers in Python are **case-sensitive**, meaning names such as `temperature` and `Temperature` represent entirely distinct identifiers.

#### Structural Composition Rules

- **Allowed Characters**: Identifiers can be composed of almost any combination of letters, numerals, and underscore characters (including broader [Unicode characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters)).
    
- **Numerical Restriction**: An identifier cannot begin with a numeral. For example, `9lives` is an illegal name.
    
- **Reserved Word Restriction**: An identifier cannot match any of the language's internal keywords. There are 33 specially reserved words that cannot be repurposed as names.
    

> [!info] Definitions & Properties
> 
> **Reserved Words**: Python reserves specific tokens to define its core syntax, control flow, and logical architecture. These words are protected and cannot be assigned to objects as variables or function names.

#### Python Reserved Keywords

![[Pasted image 20260520132117.png|center]]

---

### Dynamic Typing and Aliasing

The semantics of a Python identifier are conceptually similar to a reference variable in [[JAVA]] or a pointer variable in C++. Each identifier is implicitly associated with the **memory address** of the object to which it refers.

#### Dynamic Typing Mechanics

Unlike statically typed languages such as Java or C++, Python is a **dynamically typed language**.

- **No Advance Declaration**: There is no requirement to declare an identifier with a particular data type in advance.
    
- **Flexible Binding**: An identifier can be associated with any type of object.
    
- **Reassignment**: An identifier can later be freely reassigned to another object of the same or a completely different type.
    
- **Object-Level Typing**: Although an identifier itself lacks a declared type, the specific object to which it refers possesses a definite, immutable type.
    

> [!warning] Implementation Gotchas
> 
> Python provides a special object named `None`, which serves a purpose similar to a `null` reference in Java or C++. It can be assigned to any identifier to denote the absence of a value or a reference to an active data structure.

### Aliasing

A programmer can establish an **alias** by assigning a second identifier to an existing object.

```python
temperature = 98.6
original = temperature
print(original)
```

> [!info] Definitions & Properties
> 
> **Aliasing**: When multiple identifiers point to the same underlying memory address, they become aliases for the same object. Any mutation or modification to the object through one identifier will reflect across all its aliases.
#### Visual Reference

![[Pasted image 20260520133320.png|center]]

---
### Reassignment & Reference Breaks

Once an **alias** is established, both identifiers look up the same underlying object. However, a subsequent assignment breaks this shared reference by rebinding the target identifier to a brand-new memory address without mutating the original object.

#### Mechanics of Reassignment

Consider the following operation after creating an alias:

```python
temperature = temperature + 5.0
print(temperature)
```

The interpreter processes this statement in a strict linear sequence:

1. **Evaluate RHS**: The expression on the right-hand side is computed first using the existing binding ($98.6 + 5.0 = 103.6$).
    
2. **Instantiate Object**: A brand-new `float` instance is created in memory to hold the value $103.6$.
    
3. **Rebind LHS**: The left-hand identifier (`temperature`) is updated to point directly to this new object.
    

> [!warning] Implementation Gotchas
> 
> Reassigning an identifier **never** modifies the value of the existing object in place. It simply changes which object that specific identifier references. Any other aliases pointing to the original object remain completely unchanged.

> [!example] Reference State Trace
> 
> - **Initial State**: `temperature` $\rightarrow$ `float(98.6)` $\leftarrow$ `original`
>     
> - **Post-Execution State**:
>     
>     - `temperature` $\rightarrow$ `float(103.6)` _(Rebound)_
>         
>     - `original` $\rightarrow$ `float(98.6)` _(Unchanged)_
>         

```python
print(original)
```
#### Visual Reference

![[Pasted image 20260520134452.png|center]]

---
## Creating and Using Objects

### Instantiation

The process of creating a new instance of a class is known as **instantiation**. In general syntax, an object is instantiated by invoking the **constructor** of a class.

```python
w = Widget()       # Constructor invocation without parameters
w = Widget(a,b,c)  # Constructor invocation with parameters
```

#### Alternative Instance Creation Mechanisms

- **Literal Forms**: Many of Python's built-in classes support a **literal** form for designating new instances directly without an explicit constructor call.
    
```python
    temperature = 98.6  # Yields a literal instance of the float class
```
    
- **Factory Functions / Indirect Calls**: A new instance can be created indirectly by calling a function that generates and returns a class instance.
    
```python
    ordered_list = sorted(unordered_sequence)  # Returns a new instance of the list class
```
    

> [!info] Definitions & Properties
> 
> **Constructor vs. Literal**: While constructor invocation explicitly requests memory allocation for a user-defined or built-in class, literals provide syntactic sugar for core built-in types (`float`, `int`, `str`, `list`), allowing the interpreter to handle underlying object generation efficiently.

---
### Calling Methods

Python supports traditional standalone functions where data is explicitly passed as a parameter (e.g., `sorted(data)`). In contrast, classes define **methods** (also known as **member functions**) that are invoked directly on a specific instance using the dot (`.`) operator.

```python
data.sort()  # Invokes the member function 'sort' on the 'data' list instance
```

#### Method Chaining and Evaluation

The expression to the left of the dot identifier designates the target object. This target can be a variable name or the immediate return object of a preceding operation, enabling method chaining.

> [!example] Method Chaining Evaluation
> 
> ```
> response.lower().startswith('y')
> ```
> 
> 1. `response.lower()` is evaluated first, producing a brand-new intermediate string instance in lowercase.
>     
> 2. `.startswith('y')` is immediately invoked on that newly generated intermediate string object.
>     

#### Accessors vs. Mutators

Methods are functionally categorized based on their behavior regarding object state:

- **Accessors**: Methods that return information about the internal state of an object without modifying it (e.g., `.startswith()`).
    
- **Mutators**: Methods that deliberately alter the internal state of the object (also referred to as **update methods**, e.g., `.sort()`).
    

### Method Comparison

| **Method Type**      | **State Modification** | **Example**        |
| -------------------- | ---------------------- | ------------------ |
| **Accessor**         | No                     | `response.lower()` |
| **Mutator (Update)** | Yes                    | `data.sort()`      |

> [!warning] Implementation Gotchas
> 
> Calling a mutator like `data.sort()` updates the list **in-place** and returns `None`.

```python
# ❌ Common Trap: sorted_data becomes None
sorted_data = data.sort() 
 #  Correct: Creates a brand-new sorted list instance
sorted_data = sorted(data) 
```

### In-Place Mutation vs. New Instance

|**Approach**|**Modifies Original?**|**Returns**|**Use Case**|
|---|---|---|---|
|`data.sort()`|**Yes** (In-place)|`None`|When you want to overwrite the original order and save memory.|
|`sorted(data)`|**No** (Immutated)|A new `list`|When you need a sorted copy but must keep the original intact.|

---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 4-6)