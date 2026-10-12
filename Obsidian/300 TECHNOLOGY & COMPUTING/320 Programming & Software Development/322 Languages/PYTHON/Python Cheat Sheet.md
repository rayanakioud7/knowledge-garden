Date: 2025-12-24
Tags: [[Python]], [[Programming language]], [[Cheat sheet]]

# ~={red} Notes=~
## Getting Started

~={green} Python is an interpreted language, making it great for quick scripting and interactive exploration. =~

### Start the Interactive Shell

Launch Python's REPL (Read-Eval-Print Loop) for testing code snippets.

```bash
python
```

~={purple} Expansion: =~ The REPL is useful for experimenting with syntax without saving files. Type expressions directly and see immediate results.

### Quit the Interactive Shell

Exit the REPL session.

```python
>>> exit()
```

~={green} Alternative: =~ Use Ctrl+D (on Unix) or Ctrl+Z (on Windows) to quit.

### Run a Script

Execute a Python file from the command line.

```Bash
$ python my_script.py
```

~={purple} Expansion: =~ Ensure the script has a .py extension. Add shebang (`#! /usr/bin/env python`) at the top for Unix executability.

### Run a Script in Interactive Mode

Run a script and enter REPL afterward.

Bash

```
$ python -i my_script.py
```

~={green} Tip: =~ Great for debugging—inspect variables after script execution.

---

## Comments

~={red} Always add a space after the #. =~

Use comments to explain “why” of your code, not just “what”.

### Write Comments

Comments are ignored by the interpreter.

```python
# This is a comment
# print("This code will not run.")
print("This will run.")  # Comments are ignored by Python
```

~={purple} Expansion: =~ Docstrings (triple-quoted comments) are used for function/class documentation and can be accessed via `__doc__` attribute.

---

## Data Types

Python is ~={green} dynamically typed =~ (types checked at runtime).

Use ~={purple} None =~ to represent missing or optional values.

### Type Investigation

Check object types.

```python
type(42)  # <class 'int'>
type(3.14)  # <class 'float'>
type("Hello")  # <class 'str'>
type(True)  # <class 'bool'>
type(None)  # <class 'NoneType'>

isinstance(3.14, float)  # True
issubclass(int, object)  # True - everything inherits from object
```

~={purple} Expansion: =~ All classes inherit from object, enabling common behaviors like string representation.

### Type Conversion

Convert between types.

```python
int("42")  # 42
float("3.14")  # 3.14
str(42)  # "42"
bool(1)  # True
list("abc")  # ["a", "b", "c"]
```

~={red} Caution: =~ Conversions can raise `ValueError` if invalid (e.g., `int("abc")`).

---

## Variables & Assignment

Variables are created on first assignment. Use ~={green} descriptive names =~ in ~={green} snake_case =~.

### Basic Assignment

```python
name = "Leo"  # String
age = 7  # Integer
height = 5.6  # Float
is_cat = True  # Boolean
flaws = None  # None type
```

~={purple} Expansion: =~ Variables are references to objects; reassigning changes the reference.

### Parallel & Chained Assignments

```python
x, y = 10, 20  # Assign multiple values
a = b = c = 0  # Give same value to multiple variables
```

### Augmented Assignments

```python
counter += 1
numbers += [4, 5]
permissions |= write  # Bitwise OR for flags
```

~={green} Tip: =~ Augmented operators modify in place, efficient for mutable types like lists.

---

## Strings

~={green} Recommended: =~ Use double-quotes for strings.

Use `\n` for line breaks, `\\` for literal backslash.

### Creating Strings

```python
single = 'Hello'
double = "World"
multi = """Multiple
line string"""
```

~={purple} Expansion: =~ Triple quotes preserve newlines and are ideal for docstrings or multi-line text.

### String Operations

```python
greeting = "me" + "ow!"  # "meow!"
repeat = "Meow!" * 3  # "Meow!Meow!Meow!"
length = len("Python")  # 6
```

### String Methods

```python
"a".upper()  # "A"
"A".lower()  # "a"
" a ".strip()  # "a"
"abc".replace("bc", "ha")  # "aha"
"a b".split()  # ["a", "b"]
"-".join(["a", "b"])  # "a-b"
```

~={purple} Expansion: =~ Methods like `split()` accept separators, e.g., `"a,b".split(",")`.

### String Indexing & Slicing

```python
text = "Python"
text[0]  # "P" (first)
text[-1]  # "n" (last)
text[1:4]  # "yth" (slice)
text[:3]  # "Pyt" (from start)
text[3:]  # "hon" (to end)
text[::2]  # "Pto" (every 2nd)
text[::-1]  # "nohtyP" (reverse)
```

~={green} Tip: =~ Slicing is zero-based and end-exclusive.

### String Formatting
```python
# f-strings
name = "Aubrey"
age = 2
f"Hello, {name}!"  # "Hello, Aubrey!"
f"{name} is {age} years old"  # "Aubrey is 2 years old"
f"Debug: {age=}"  # "Debug: age=2"

# Format method
template = "Hello, {name}! You're {age}."
template.format(name="Aubrey", age=2)  # "Hello, Aubrey! You're 2."
```

~={purple} Expansion: =~ f-strings (Python 3.6+) are faster and more readable than `format()`.

### Raw Strings

```python
# Normal string with an escaped tab
"This is:\tCool."  # "This is: Cool."

# Raw string with escape sequences
r"This is:\tCool."  # "This is:\tCool."
```

~={green} Use for: =~ Regex or paths with backslashes.

---

## Numbers & Math

### Arithmetic Operators

```python
10 + 3  # 13
10 - 3  # 7
10 * 3  # 30
10 / 3  # 3.3333333333333335
10 // 3  # 3  # Floor division, int type
10 % 3  # 1  # Modulo
2 ** 3
print(5+3)  # 8  # Exponent
```

~={purple} Expansion: =~ `//` is integer division, useful for avoiding floats.

### Useful Functions

```python
abs(-5)  # 5
round(3.7)  # 4
round(3.14159, 2)  # 3.14
min(3, 1, 2)  # 1
max(3, 1, 2)  # 3
sum([1, 2, 3])  # 6
```

~={green} Tip: =~ `sum()` works on iterables of numbers.

---

## Conditionals

~={red} Use 4 spaces per indentation level. =~

Python uses indentation for blocks.

### If-Elif-Else

```python
if age < 13:
    category = "child"
elif age < 20:
    category = "teenager"
else:
    category = "adult"
```

~={purple} Expansion: =~ Before Python 3.10, there was no switch statement; use if-elif chains or dicts. Python 3.10+ introduced `match`.

### Comparison Operators

```python
x == y  # Equal to
x != y  # Not equal to
x < y   # Less than
x <= y  # Less than or equal
x > y   # Greater than
x >= y  # Greater than or equal
```

### Logical Operators

```python
if age >= 18 and has_car:
    print("Roadtrip!")
if is_weekend or is_holiday:
    print("No work today.")
if not is_raining:
    print("You can go outside.")
```

~={green} Tip: =~ Short-circuiting: 'and' stops if left is False, 'or' if left is True.

---

## Loops

~={red} Be careful with while to avoid infinite loops. =~

### For Loops

```python
# Loop through range
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# Loop through collection
fruits = ["apple", "banana"]
for fruit in fruits:
    print(fruit)

# With enumerate for index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

~={purple} Expansion: =~ `range(start, stop, step)` for custom sequences.

### While Loops

```python
while True:
    user_input = input("Enter 'quit' to exit: ")
    if user_input == "quit":
        break
    print(f"You entered: {user_input}")
```

### Loop Control

```python
for i in range(10):
    if i == 3:
        continue  # Skip this iteration
    if i == 7:
        break  # Exit loop
    print(i)
```

~={green} Tip: =~ `else` clause on loops runs if no `break` occurred.

---

## Functions

Always use `()` to call functions. Use `return` to send values back.

### Defining Functions

```python
def greet():
    return "Hello!"

def greet_person(name):
    return f"Hello, {name}!"

def add(x, y=10):  # Default parameter
    return x + y
```

~={purple} Expansion: =~ Parameters can be positional, keyword, or `*args`/`**kwargs` for variable args.

### Calling Functions

```python
greet()  # "Hello!"
greet_person("Rayan")  # "Hello, Rayan"
add(5, 3)  # 8
add(7)  # 17
```

### Return Values

```python
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([1, 5, 3])
```

### Useful Built-in Functions

```python
callable(greet)  # True if callable
dir(object)  # Lists attributes
globals()  # Global symbol table
hash("key")  # Hash value
id(object)  # Unique ID
locals()  # Local symbol table
repr(object)  # Debug string
```

~={green} Tip: =~ `id()` helps check if two variables reference the same object.

### Lambda Functions

```python
square = lambda x: x**2
result = square(5)  # 25

# With map and filter
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

~={purple} Expansion: =~ Lambdas are anonymous; use for short, throwaway functions.

---

## Classes

Classes encapsulate data and methods. ~={green} self =~ refers to the instance.

### Defining Classes

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"

# Create instance
my_dog = Dog("Frieda", 3)
print(my_dog.bark())  # Frieda says Woof!
```

~={purple} Expansion: =~ `__init__` is called on instantiation; not a true constructor.

### Class Attributes & Methods

```python
class Cat:
    species = "Felis catus"  # Class attribute
    
    def __init__(self, name):
        self.name = name  # Instance attribute
    
    def meow(self):
        return f"{self.name} says Meow!"
    
    @classmethod
    def create_kitten(cls, name):
        return cls(f"Baby {name}")
```

~={green} Tip: =~ Class attributes are shared; instance attributes are per-object.

### Inheritance

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks!"
```

~={purple} Expansion: =~ Use `super()` for calling parent methods in overrides.

---

## Exceptions

Use specific exceptions. ~={red} finally always runs. =~

### Try-Except

```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")
finally:
    print("Calculation attempted")
```

~={purple} Expansion: =~ Catch multiple with `except (Exc1, Exc2)`.

### Common Exceptions

- ~={red} ValueError: =~ Invalid value
    
- ~={red} TypeError: =~ Wrong type
    
- ~={red} IndexError: =~ List index out of range
    
- ~={red} KeyError: =~ Dict key not found
    
- ~={red} FileNotFoundError: =~ File doesn't exist
    

### Raising Exceptions

```python
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age
```

~={green} Tip: =~ Custom exceptions by subclassing `Exception`.

---

## Collections

Collections store multiple items; loopable with ~={purple} in =~. Use ~={purple} len() =~ for size.

### Lists

Mutable, ordered.

```python
# Creating lists
empty = []
nums = [5]
mixed = [1, "two", 3.0, True]

# List methods
nums.append("x")  # Add to end
nums.insert(0, "y")  # Insert at index 0
nums.extend(["z", 5])  # Extend with iterable
nums.remove("two")  # Remove first "x"
del(mixed[0])
last = nums.pop()  # Pop returns last element

# List indexing and checks
fruits = ["banana", "apple", "orange"]
fruits[0]  # "banana"
fruits[-1]  # "orange"
"apple" in fruits  # True
len(fruits)  # 3
```

~={purple} Expansion: =~ Lists are dynamic arrays; slicing creates shallow copies.

### Tuples

Immutable, ordered.

```python
# Creating tuples
point = (3, 4)
single = (1,)  # Note the comma!
empty = ()

# Basic tuple unpacking
x, y = point  # x=3, y=4

# Extended unpacking
first, *rest = (1, 2, 3, 4)  # first=1, rest=[2, 3, 4]
```

~={green} Tip: =~ Use for fixed data, like coordinates.

### Sets

Unordered, unique items.

![Image de Set theory operations Venn diagram](https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT3EJIAMjOAsv75FH2dEC6khsf21VMdPz--n2hEhme0ziRBLFKxl3MBYwQu-abPYII1PUQyote9d2AUiEBRoJWEaVAJtvGZaWQf6AGh5hVK-36o6OY)

```python
# Creating Sets
a = {1, 2, 3}
b = set([3, 4, 4, 5])

# Set Operations
a | b  """{1, 2, 3, 4, 5} Union""" a.union(b)
a & b  """{3} Intersection """ a.intersection(b)
a - b  """{1, 2} Difference""" a.difference(b)
a ^ b  # {1, 2, 4, 5} Symmetric difference

# Check if subset
a.issubset(b)   

# Check if superset
a.issuperset(b)
```

~={purple} Expansion: =~ Fast membership testing; no duplicates.

### Dictionaries

Key-value pairs, unordered (pre-3.7), ordered insertion (3.7+).

```python
# Creating Dictionaries
empty = {}
pet = {"name": "Leo", "age": 42}

# Dictionary Operations
pet["sound"] = "Purr!"  # Add
pet["age"] = 7  # Update
age = pet.get("age", 0)  # Get with default
del pet["sound"]  # Delete
pet.pop("age")  # Remove and return

# Dictionary Methods
pet = {"name": "Frieda", "sound": "Bark!"}
pet.keys()  # dict_keys(['name', 'sound'])
pet.values()  # dict_values(['Frieda', 'Bark!'])
pet.items()  # dict_items([('name', 'Frieda'), ('sound', 'Bark!')])
```

~={green} Tip: =~ Keys must be hashable (immutable).

---

## Comprehensions

Condensed loops; faster than equivalents.

### List Comprehensions

```python
# Basic
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# Nested
matrix = [[i*j for j in range(3)] for i in range(3)]
```

### Other Comprehensions

```python
# Dictionary
word_lengths = {word: len(word) for word in ["hello", "world"]}

# Set
unique_lengths = {len(word) for word in ["who", "what", "why"]}

# Generator
sum_squares = sum(x**2 for x in range(1000))
```

~={purple} Expansion: =~ Generators are lazy; good for large data without memory use.

---

## File I/O

Use ~={green} with =~ for automatic closing.
### File Operations

![[Pasted image 20260102134553.png]]
![[Pasted image 20260102134756.png]]
```python
# Read entire file
with open("file.txt", mode="r", encoding="utf-8") as file:
    content = file.read()

# Read line by line
with open("file.txt", mode="r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())

# Write
with open("output.txt", mode="w", encoding="utf-8") as file:
    file.write("Hello, World!\n")

# Append
with open("log.txt", mode="a", encoding="utf-8") as file:
    file.write("New log entry\n")
```

~={red} Caution: =~ Specify encoding to avoid issues on different OS.
The mode argument is optional and the default value is **r**. In this notebook we only cover two modes:
- **r**: Read mode for reading files
- **w**: Write mode for writing files

---

## Imports & Modules

~={red} Prefer explicit imports over import *. =~

Group imports: stdlib, third-party, local.

### Import Styles

```python
# Entire module
import math
result = math.sqrt(16)

# Specific
from math import sqrt
result = sqrt(16)

# Alias
import numpy as np
array = np.array([1, 2, 3])

# All (avoid)
from math import *
```

### Package Imports

```python
import package.module
from package import module
from package.subpackage import module
from package.module import function, Class
from package.module import name as alias
```

~={purple} Expansion: =~ `__init__.py` makes directories packages.

---

## Virtual Environments

Isolate project dependencies.

### Create

```bash
$ python -m venv .venv
```

### Activate (Windows)

```powershell
PS> .venv\Scripts\activate
```

### Activate (Linux/macOS)

```bash
$ source .venv/bin/activate
```

### Deactivate

```bash
(.venv) $ deactivate
```

~={green} Tip: =~ Use for each project to avoid version conflicts.

---

## Packages

From PyPI.

### Install

```bash
$ python -m pip install requests
```

### Save & Install from File

Bash

```
$ python -m pip freeze > requirements.txt
$ python -m pip install -r requirements.txt
```

~={purple} Expansion: =~ Use `--upgrade` for updates; `virtualenvwrapper` for management.

---

## Miscellaneous

### Truthy/Falsy Values

**Truthy:** Non-zero numbers, non-empty collections, `True`. **Falsy:** `0`, `0.0`, `""`, `[]`, `()`, `{}`, `None`, `False`.

### Pythonic Constructs

```python
# Swap
a, b = b, a

# Flatten list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [item for sublist in matrix for item in sublist]

# Remove duplicates (unordered)
unique_unordered = list(set(my_list))

# Preserve order
unique = list(dict.fromkeys(my_list))

# Count
from collections import Counter
counts = Counter(my_list)
```

~={green} Tip: =~ `collections` module has useful types like `defaultdict`, `namedtuple`.


# ~={red}References=~
