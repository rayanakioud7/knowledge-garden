Date: 2026-05-20
Tags: [[Python]], [[Programming language]]

---
### Python's Built-In Classes

A critical distinction among Python’s built-in classes is whether they are **mutable** or **immutable**.

> [!info] Definitions & Properties
> 
> - **Immutable**: An object is immutable if it has a fixed value upon instantiation that cannot subsequently be changed. (e.g., `float`, `int`).
>     
> - **Mutable**: An object is mutable if its internal state or contents can be modified after creation (e.g., `list`).
>     

### Summary of Core Built-In Classes

|**Class**|**Description**|**Immutable?**|
|---|---|---|
|`bool`|Boolean value|✓|
|`int`|Integer (arbitrary magnitude)|✓|
|`float`|Floating-point number|✓|
|`list`|Mutable sequence of objects||
|`tuple`|Immutable sequence of objects|✓|
|`str`|Character string|✓|
|`set`|Unordered set of distinct objects||
|`frozenset`|Immutable form of `set` class|✓|
|`dict`|Associative mapping (aka dictionary)||

> [!warning] Implementation Gotchas
> 
> While an identifier referencing an immutable object can be reassigned to a different value, the _underlying object itself_ is never changed. Reassignment simply breaks the reference and points the identifier to a newly created instance.

---
### The bool Class

The `bool` class is used to manipulate logical (Boolean) values. The only two instances of this class are expressed as the literals `True` and `False`.

#### Instantiation & Truth Value Testing

- **Default Constructor**: Invoking `bool()` without arguments returns `False`. In practice, using the direct literal form (`True` or `False`) is preferred.
    
- **Explicit Conversion**: Non-boolean types can be evaluated as a condition using the syntax `bool(foo)`.
    

> [!info] Definitions & Properties
> 
> **Truth Value Testing (Truthiness)**: Python automatically evaluates objects in a boolean context (such as an `if` or `while` condition) according to their type-specific state.

#### Evaluation Rules

|**Data Type**|**Evaluates to False**|**Evaluates to True**|
|---|---|---|
|**Numbers** (`int`, `float`)|Zero (`0`, `0.0`)|Any non-zero value|
|**Sequences / Containers** (`str`, `list`)|Empty (`''`, `[]`)|Non-empty (`'hello'`, `[1, 2]`)|

> [!warning] Implementation Gotchas
> 
> When using a non-boolean value directly as a condition in control structures (e.g., `while grade:`), Python implicitly applies these truthiness rules. An empty string user-input will instantly break a loop evaluated this way, which can act as a hidden logical bug if unexpected.

---
### The int Class

The `int` class represents integer values with arbitrary magnitude. Unlike languages like [[JAVA]] or C++, which support different fixed-size integer types (e.g., `int`, `short`, `long`) with different precisions, Python automatically handles the underlying memory allocation dynamically based on the size of the value.

#### Integral Literals and Base Encodings

Integers can be expressed using traditional base-10 literal forms (e.g., `0`, `137`, `-23`). Alternatively, you can specify integral values using alternative positional notation systems by applying a literal prefix beginning with `0`:

- **Binary (Base 2)**: Prefixed with `0b` or `0B` (e.g., `0b1011` $\rightarrow$ $11$).
    
- **Octal (Base 8)**: Prefixed with `0o` or `0O` (e.g., `0o52` $\rightarrow$ $42$).
    
- **Hexadecimal (Base 16)**: Prefixed with `0x` or `0X` (e.g., `0x7f` $\rightarrow$ $127$).

#### The int Constructor

The constructor `int()` returns `0` by default when invoked without arguments. When a parameter is supplied, it acts as a casting or parsing utility to yield an integral representation from alternative data types.

```python
print(int())
```

##### Type Conversions

- **Floating-Point Values**: Passing a float `f` to the constructor (i.e., `int(f)`) discards the fractional component entirely, producing a **truncated value** toward zero.

```python
print(int(3.14))   # Returns 3
int(3.99)   # Returns 3
int(-3.9)   # Returns -3
```
    
- **String Parsing**: Passing a string instance `s` parses its numeric contents into an base-10 integer representation.
    

> [!warning] Implementation Gotchas
> 
> String parsing with the standard constructor assumes a default encoding of **base 10**. If the string contains non-numeric characters, formatting errors will occur.
	
```python
int('137')    # Correct: Returns integer 137
int('hello')  # ValueError: invalid literal for int() with base 10
```

> To parse a string encoded in a different numeric system, the target radix must be passed explicitly as a secondary parameter:
	
```python
print(int('7f', 16)) 
```

### Int Type Conversions Summary

| **Target Input**       | **Code Pattern** | **Evaluation Behavior / Output**                |
| ---------------------- | ---------------- | ----------------------------------------------- |
| Float ($f > 0$)        | `int(3.99)`      | Truncates decimal; outputs `3`                  |
| Float ($f < 0$)        | `int(-3.9)`      | Truncates toward zero; outputs `-3`             |
| String (Base 10)       | `int('1982')`    | Parses numeric string; outputs `1982`           |
| String (Explicit Base) | `int('7f',16)`   | Parses hex string representation; outputs `127` |

---

### The float Class

The `float` class is the sole floating-point type in Python. Its underlying architecture uses a fixed-precision representation more akin to a `double` in Java or C++, rather than their lower-precision `float` types.

#### Floating-Point Literals

- **Standard Decimal Form**: Expressed by including a decimal point within the numeric sequence (e.g., `98.6`). An integral equivalent can be written directly as `2.0` (or simply `2.`).
    
- **Scientific Notation**: Formatted using an exponent tracking suffix `e` or `E` to describe massive or microscopic magnitudes efficiently. For instance, the literal `6.022e23` represents the mathematical value $6.022 \times 10^{23}$.
    

### The float Constructor

The constructor `float()` returns `0.0` by default when evaluated without arguments. When passed an explicit parameter, it converts or parses the input into an equivalent floating-point value.

```python
print(float())
```

#### Type Conversions

- **Integer Conversion**: Passing an integer transforms the discrete numeric value into its floating-point equivalent.
     
```python
print(float(2))
```
    
- **String Parsing**: Passing a string parses its text contents into a valid floating-point number.
    
```python
pi = '3.14'
print(float(pi))
```

### Float Type Conversions Summary

|**Target Input**|**Code Pattern**|**Evaluation Behavior / Output**|
|---|---|---|
|None|`float()`|Default initializer; outputs `0.0`|
|Integer|`float(2)`|Widens integer type; outputs `2.0`|
|String (Valid)|`float('3.14')`|Parses numeric string; outputs `3.14`|

> [!warning] Implementation Gotchas
> 
> If an invalid string representation that cannot be logically parsed as a floating-point sequence is passed to the constructor (e.g., `float('hello')`), a `ValueError` exception is immediately raised.

---

## Sequence Types: The list, tuple, and str Classes

The `list`, `tuple`, and `str` classes form the primary **sequence** types in Python. They represent an *~={cyan}ordered=~* collection of values where element positioning is strictly significant.

#### Core Sequence Classes

- **`list`**: The most general sequence type, representing a mutable sequence of arbitrary objects (conceptually akin to an "[[Arrays in Java|array]]" in other programming languages).
    
- **`tuple`**: An **immutable** version of the `list` class that benefits from a streamlined, highly optimized internal memory representation.
    
- **`str`**: A highly specialized class designed exclusively for representing an immutable sequence of text characters.
    

> [!info] Definitions & Properties
> 
> **Sequence Invariant**: All sequence types support indexing and length queries, but they split down a fundamental behavioral line: `list` allows in-place element mutations, while `tuple` and `str` guarantee data structural immutability after initialization.

### Sequence Mechanics & Characteristics

|**Class**|**Mutability**|**Content Type**|**Lower-Level Paradigm**|
|---|---|---|---|
|`list`|**Mutable**|Arbitrary Object References|Traditional Dynamic Array|
|`tuple`|**Immutable**|Arbitrary Object References|Packed Constant Reference Array|
|`str`|**Immutable**|Text Characters|Sanitized Character Array|

> [!warning] Characters class?
> 
> Python does not feature a dedicated primitive or class for individual characters (such as a `char` type in Java or C++). An individual text character is represented simply as a standard `str` instance with a length of $1$. Unnecessary loops or type checking designed around isolating individual character primitives will fail or add runtime overhead.

---
### The list Class

A `list` instance stores an ordered sequence of objects. It forms a **referential structure**, meaning that instead of housing data elements directly within its contiguous memory block, it stores a sequence of memory references pointing to external objects hosted elsewhere.

#### Structural Properties

- **Array-Based & Zero-Indexed**: Lists are array-based sequences. A list containing $n$ elements maps individual indices from $0$ to $n-1$ inclusively.
    
- **Dynamic Capacity**: Features the built-in capability to dynamically expand and contract its internal backing array capacity on-demand as elements are appended or removed.
    
- **Element Heterogeneity**: Elements within a single list instance can be completely arbitrary objects (including the `None` object or other nested container instances).
    

> [!info] Definitions & Properties
> 
> **Referential Array**: Because a list stores fixed-size memory addresses (pointers) rather than the raw objects themselves, it can maintain $O(1)$ constant-time indexing access regardless of the varying byte sizes or data types of the targeted elements.

### List Instantiation & Syntax

- **Literal Form**: Denoted using square brackets `[]` as structural delimiters. The elements can be explicit literals, variables, or pre-established identifiers.
    
- **Constructor Form**: The `list()` constructor generates an empty list `[]` by default when evaluated without arguments.
    
```python
# Literal instantiation using existing identifiers
a = 10
b = 20
numbers = [a, b] 

# Constructor instantiation from an iterable
characters = list('hello') # Evaluates to ['h', 'e', 'l', 'l', 'o']
print(characters)
```

#### Iterable Parsing vs. Non-Iterable Failures

The `list()` constructor accepts any arbitrary parameter, provided that object meets the interface requirements of an **iterable type** (e.g., strings, tuples, sets, dictionaries). It iterates through the target container step-by-step to populate the new list instance.

```python
# Common Trap: Passing non-iterable primitives raises a TypeError
list(True)  # TypeError: 'bool' object is not iterable
list(15)    # TypeError: 'int' object is not iterable
```

```python
# Shallow copying a list structure via constructor casting
backup = list(data)
```

### List Characteristics Summary

|**Feature**|**Architectural Behavior**|**Asymptotic Complexity (Indexing)**|
|---|---|---|
|**Memory Model**|Referential Pointer Array|$O(1)$ constant time|
|**Sizing Logic**|Dynamic Expansion / Contraction|$O(1)$ amortized time per append|
|**Indexing Range**|$0 \le \text{index} \le n-1$|Bound checked by interpreter|

> [!warning] Implementation Gotchas
> 
> Passing an existing list into the list constructor creates a **shallow copy**. While it allocates a brand-new top-level list container object in memory, the internal indices of this new list do not copy the nested items—they copy the _references_. This means both list containers point directly to the exact same underlying objects in memory.
> 
| **Operation**         | **Creates New List Container?** | **Shares Element References?** | **Mutating an Element Affects Both?** |
| --------------------- | ------------------------------- | ------------------------------ | ------------------------------------- |
| `backup = list(data)` | **Yes**                         | **Yes**                        | **Yes** (if the element is mutable)   |


```python
#  Common Trap: Modifying a nested mutable object alters both lists
data = [[1, 2], [3, 4]]
backup = list(data)    # Shallow copy

backup[0][0] = 99
print(data)            # Output: [[99, 2], [3, 4]]
```


```python
# Reassigning a top-level index only breaks the reference for that list
backup[0] = 'New'  
print(backup)      # Output: ['New', [3, 4]]
print(data)        # Output: [[99, 2], [3, 4]] -> Original index stays intact
```

#### Visual Reference
A list of integers. `prime = [2,3,5,7,11,13,17,19,23,29,31]`

![[Pasted image 20260520182542.png|center]]

---
### The tuple Class

The `tuple` class is an **immutable** version of a sequence. Because it cannot change, its internal structure is simpler and uses less memory than a `list`.

#### Syntax & Literals

- **Delimiters**: Tuples use parentheses `()` instead of square brackets `[]`.
    
- **Empty Tuple**: Written simply as `()`.
    

```python
empty_tuple = ()
prime_factors = (2, 3, 5)
print(prime_factors)
```

#### The Single-Element Rule

To create a tuple with exactly one element, you **must** include a trailing comma after that element inside the parentheses.

```python
# A valid tuple with one element
single_element_tuple = (17,)

# NOT a tuple! This is just the integer 17 inside regular math parentheses
regular_integer = (17)
print(type(regular_integer))
```

#### Key Rules Summary

|**Form**|**Syntax**|**Resulting Type**|
|---|---|---|
|**Empty**|`()`|`tuple`|
|**Single Item**|`(17,)`|`tuple` (Note the comma!)|
|**No Comma**|`(17)`|`int` (Standard math grouping)|
|**Multiple Items**|`(2, 3, 5)`|`tuple`|

> [!warning] Implementation Gotchas
> 
> Forgetting the trailing comma for a single-item tuple is a very common bug. If you write `(17)`, Python thinks you are just doing normal math calculations and treats it as a normal number. This will break your code if your program expects a sequence type.

---

### The str Class

The `str` class represents an **immutable** sequence of text characters. Strings are optimized to save memory compared to generic sequences like lists or tuples.

#### Creating String Literals

You can create strings using different types of quote delimiters:

- **Single Quotes**: `'hello'`
    
- **Double Quotes**: `"hello"`
    
- **Triple Quotes**: `'''hello'''` or `"""hello"""`
    

Choosing between single and double quotes allows you to use quote characters easily inside your text without causing syntax errors:

```python
message = "Don't worry" # Double quotes allow single quotes inside
print(message)
```

#### Escape Characters

If you need to include special characters or use the same quote character inside your string, use a backslash (`\`) as an **escape character**.

```python
# Using a backslash to escape a single quote
message = 'Don\'t worry' 

# Escaping the backslash itself to write a file path
path = 'C:\\Python\\' 

# Common special escape characters
newline_example = "First line\nSecond line" # \n adds a new line
tab_example = "Item 1\tItem 2"             # \t adds a tab space
```

#### Multi-line Strings with Triple Quotes

Triple quotes (`"""` or `'''`) let you write long strings that cross multiple lines. Newline characters are captured automatically without using `\n`. This makes code much cleaner when printing large blocks of text.

```python
# Clean multi-line printing using triple quotes
print("""Welcome to the GPA calculator.
Please enter all your letter grades, one per line.
Enter a blank line to designate the end.""")
```

#### String Rules Summary

| **Feature**                | **Syntax Example**                       | **When to Use**                                              |
| -------------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| **Single / Double Quotes** | `'text'` or `"text"`                     | Standard, single-line text data.                             |
| **Escape Quote**           | `'Don\'t'`                               | To put a quote symbol inside matching quote delimiters.      |
| **Escape Newline**         | `"Line 1\nLine 2"`                       | To format text structure using a single-line string.         |
| **Triple Quotes**          | `"""Line 1`<br><br>  <br><br>`Line 2"""` | For multi-line text blocks without manual escape characters. |

> [!info] Definitions & Properties
> 
> **String Indexing**: Strings are ordered sequences. Every character has a specific zero-indexed position starting from $0$. Because strings are immutable, you can look up characters using indices, but you cannot change them in place.

#### Visual Reference
A Python string, which is an indexed sequence of characters:
![[Pasted image 20260520190439.png|center]]


---

## The set and frozenset Classes

The `set` class represents a collection of elements with **no duplicates** and **no inherent order**.

### Core Advantages and Underlying Structure

- **Fast Lookups**: The main advantage of a set over a list is that it is highly optimized for checking if an item is in the set.
    
- **Hash Table**: This fast lookup performance relies on an underlying data structure called a **hash table**.
    

> [!info] Definitions & Properties
> 
> **The Hashable Requirement**: Only instances of **immutable types** can be added to a Python set. This means you can add integers, floats, strings, and tuples to a set. You cannot add lists or other sets because they are mutable.

- **`frozenset`**: This class is simply an **immutable form of the set type**. Because a `frozenset` is immutable, it is legal to have a set that contains `frozenset` instances inside it.
    

### Set Syntax and Instantiation

- **Literal Delimiters**: Sets use curly braces `{` and `}` to group elements.
    
- **The Empty Set Exception**: You **cannot** use `{}` to make an empty set. In Python, `{}` is already reserved to create an empty dictionary.
    
- **Constructor Form**: To create an empty set, you must use the explicit constructor syntax `set()`.
    

```python
# A set literal with items
color_set = {'red', 'green', 'blue'}

# Making an empty set
empty_set = set()

# Making a set from an iterable string
unique_chars = set('hello')  # Evaluates to {'h', 'e', 'l', 'o'}

print(color_set)
print(empty_set)
print(unique_chars)
```

### Set Type Comparison

|**Class**|**Mutability**|**Can Add to a Regular Set?**|**Syntax Example**|
|---|---|---|---|
|`set`|**Mutable**|No|`{'red', 'green'}` or `set()`|
|`frozenset`|**Immutable**|**Yes**|`frozenset(['red', 'green'])`|

> [!warning] Implementation Gotchas
> 
> Writing `my_set = {}` when you mean to make an empty set is a silent bug. Python will create an empty dictionary (`dict`) instead. Always use `set()` when you want an empty set container.

---

## The dict Class

The `dict` class represents a **dictionary** or **mapping** from a set of unique **keys** to their associated **values**.

### Core Advantages and Structure

- **Fast Lookups**: Python builds a `dict` using a mechanism almost identical to a `set`. It yields exceptionally fast lookup times because keys are tracked internally using a hash table structure.
    
- **Key-Value Associations**: Unlike a set which only stores unique single items, a dictionary pairs each unique key to a specific value object.
    

### Dictionary Syntax and Instantiation

#### Literal Form

Dictionaries use curly braces `{}` as structural delimiters.

- **Empty Dictionary**: Writing `{}` creates an empty dictionary.
    
- **Non-Empty Dictionary**: Formatted using a comma-separated list of `key: value` pairs.
    

```python
# Making an empty dictionary
empty_dict = {}

# A dictionary literal mapping language codes to names
languages = {'ga': 'Irish', 'de': 'German'}

print(empty_dict)
print(languages)
```

#### Constructor Form

The `dict()` constructor builds a dictionary from existing mappings or sequences of key-value pairs.

```python
# Making a dictionary from a sequence of two-element tuples
pairs = [('ga', 'Irish'), ('de', 'German')]
languages_from_list = dict(pairs)
print(languages_from_list)
```

### Dictionary Rules Summary

| **Form / Approach**   | **Syntax Example**        | **Resulting Type**                       |
| --------------------- | ------------------------- | ---------------------------------------- |
| **Empty Literal**     | `{}`                      | `dict` (Note: This is NOT an empty set!) |
| **Populated Literal** | `{'A+': 4.0, 'A': 4.0}`   | `dict`                                   |
| **Constructor**       | `dict([('ga', 'Irish')])` | `dict`                                   |


> [!info] Definitions & Properties
> 
> **Key Uniqueness**: *Keys* within a dictionary must be completely unique and immutable (hashable), just like elements inside a set. The associated *values* can be mutable or immutable, and they do not have to be unique.

### Code Walkthrough: Dictionary Practical Application

We can look back at our GPA calculator setup to see how a dictionary maps grade strings to matching numeric float values.

```python
# A dictionary mapping letter grades (keys) to GPA values (values)
points = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.67, 
    'B+': 3.33, 'B': 3.0, 'B-': 2.67, 
    'C+': 2.33, 'C': 2.0, 'C-': 1.67, 
    'D+': 1.33, 'D': 1.0, 'F': 0.0
}

# Looking up a value using a key
grade = 'A-'
gpa_value = points[grade] # Evaluates to 3.67

print(gpa_value)
```

> [!warning] Implementation Gotchas
> 
> Attempting to use a mutable object (like a `list`) as a dictionary key will trigger a `TypeError`. Because lists can change, Python cannot compute a stable hash value for them, making them invalid as dictionary keys. Always use immutable types like strings, integers, or tuples for keys.

---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 7-11)