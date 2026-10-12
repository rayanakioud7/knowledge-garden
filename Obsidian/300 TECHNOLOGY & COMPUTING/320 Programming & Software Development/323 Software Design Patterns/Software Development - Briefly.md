
Date: 2026-08-12
Tags: [[OOP]], [[Programming language]], [[Python]]

---

# Software Development (Section 2.2)

| Step | Purpose |
|---|---|
| 1. Design | Divide the program into classes; define interactions, data, and actions |
| 2. Implementation | Write the code |
| 3. Testing and Debugging | Check correctness; locate and fix errors |

Covered practices: coding style, naming conventions, formal documentation, unit testing.

---

## 2.2.1 Design

The most important phase in object-oriented programming. Decide:

- How to divide the program into classes.
- How the classes interact.
- What data each class stores.
- What actions each class performs.

Rules of thumb for designing classes:

| Rule | Guideline |
|---|---|
| **Responsibilities** | Divide work into different *actors*, each with one responsibility. Describe responsibilities with action verbs. Actors become the classes. |
| **Independence** | Make each class as independent as possible. Each class has autonomy over one aspect of the program. Give data (instance variables) to the class that controls the actions needing that data. |
| **Behaviors** | Define each behavior precisely so other classes understand the effect of each action. Behaviors become the methods. The full set of behaviors is the *interface* of the class. |

Skill improves with experience: recurring requirement patterns match previously seen design patterns.

### CRC Cards

> [!info] CRC card
> Class-Responsibility-Collaborator card. One index card per component (future class). The component name goes on top, responsibilities on the left, collaborators on the right.

![[Pasted image 20260812203922.png]]

- Design iterates an action/actor cycle: identify an action (responsibility), then choose the actor (component) best suited to perform it.
- Design is complete when all actions are assigned to actors.
- The small card enforces a small set of responsibilities and collaborators per component, keeping each class manageable.

### UML Class Diagrams

- [[Introduction au Génie Logiciel et UML|UML]] (Unified Modeling Language) diagrams: standard visual notation for object-oriented designs.
- A **class diagram** is a box with three portions: class name, instance variables, recommended methods.

![[Pasted image 20260812204110.png|623]]

- Naming conventions for this design: see Section 2.2.3.


---

## 2.2.2 Pseudo-Code

> [!info] Pseudo-code
> A description of an algorithm intended for human readers, not a computer program. A mixture of natural language and high-level programming constructs. It shows the main ideas of a generic implementation, without low-level implementation details, but without skipping important steps.

Style used here:

- Mix of mathematical notation and English prose (e.g., "indicate an error" instead of a formal raise statement).
- Indentation marks the extent of control structures, following Python conventions.
- A sequence $A$ of length $n$ is indexed from $A[0]$ to $A[n-1]$.
- Comments are enclosed in curly braces $\{$ like these $\}$ instead of Python's `#`.

Finding the right balance of detail is a skill refined through practice.

---

## 2.2.3 Coding Style and Documentation

Official *Style Guide for Python Code*: `http://www.python.org/dev/peps/pep-0008/`

### Indentation

- Python blocks are typically indented by 4 spaces;
- Avoid tabs: display width varies across systems, and Python does not treat tabs and spaces as identical. Editors can replace tabs with spaces automatically.

### Naming Conventions

| Identifier | Convention | Examples |
|---|---|---|
| Class | Singular noun, capitalized; multiple words in CamelCase | `Date`, `CreditCard` |
| Function / method | Lowercase; words separated by underscores; verb describing its effect; a noun describing the value if it only returns a value | `make_payment`, `sqrt` |
| Individual object (parameter, instance variable, local variable) | Lowercase noun; occasionally one uppercase letter for a data structure | `price`, `T` |
| Constant | All capital letters, underscores between words | `MAX_SIZE` |
| Internal name | Single leading underscore (encapsulation; not public interface) | `_secret` |

- Choose meaningful names: readable aloud, reflecting the action, responsibility, or data of the identifier.

### Comments

- Inline comment: `#` after the code.

```python
if n % 2 == 1:    # n is odd
```

- Block comment: multiline string literal in triple quotes `"""..."""`; no effect when executed; used for documentation.

### Documentation (Docstrings)

> [!info] Docstring
> Any string literal that appears as the *first* statement within the body of a module, class, or function (including a member function). By convention, delimited with triple quotes. Stored as a field of the module, function, or class in which it is declared.

Single-line form (triple quotes are common even for one line):

```python
def scale(data, factor):
  """Multiply all entries of numeric data list by the given factor."""
  for j in range(len(data)):
    data[j] *= factor
```

Detailed form: one summary line, a blank line, then further details.

```python
def scale(data, factor):
  """Multiply all entries of numeric data list by the given factor.

  data    an instance of any mutable sequence type (such as a list)
          containing numeric elements
  factor  a number that serves as the multiplicative factor for scaling
  """
  for j in range(len(data)):
    data[j] *= factor
```

- Retrieval: `help(x)` in the Python interpreter shows the documentation of object `x`.
- The external tool `pydoc` generates formal documentation as text or a web page.
- Docstring authoring guidelines: `http://www.python.org/dev/peps/pep-0257/`

---

## 2.2.4 Testing and Debugging

> [!info] Definitions
> **Testing**: experimentally checking the correctness of a program.
> **Debugging**: tracking the execution of a program and discovering its errors.
> Both are often the most time-consuming activity in development.

### Testing

- Checking all possible inputs is infeasible; execute the program on a representative subset.

| Coverage level | Requirement |
|---|---|
| Method coverage | Every method of a class is tested at least once |
| Statement coverage | Every code statement is executed at least once |

- Programs often fail on **special cases** of the input. For a method that sorts a sequence of integers, test:
  - Zero-length sequence (no elements).
  - Sequence with one element.
  - All elements equal.
  - Sequence already sorted.
  - Sequence reverse sorted.
- Also test structural boundary cases, e.g., inserting or removing at the beginning or end of a Python list.
- Besides handcrafted suites, run the program on many randomly generated inputs. The `random` module generates random numbers and randomizes the order of collections.

### Testing Strategies

Dependencies induce a hierarchy: component $A$ is above component $B$ if $A$ depends on $B$ ($A$ calls function $B$, or $A$ relies on a parameter that is an instance of class $B$).

| Strategy | Order | Mechanism |
|---|---|---|
| **Top-down** | From the top of the hierarchy to the bottom | Used with **stubbing**: replace a lower-level component with a *stub* that simulates it (e.g., a stub returns a fixed string instead of reading a file line) |
| **Bottom-up** | From lower-level components to higher-level ones | Test bottom-level functions first, then functions that call only tested levels; test a class before classes that depend on it |


> [!info] Unit testing
> The functionality of a specific component is tested in isolation of the larger software project. It isolates the cause of errors, since lower-level dependencies are already thoroughly tested.

> [!note] Regression testing
> As software is maintained, all previous tests are re-executed to ensure that changes do not introduce new bugs into previously tested components.

**Automated testing in Python.** Tests for a module can be embedded in the same file, shielded by a conditional construct (see Section 1.11):

```python
if __name__ == '__main__':
  # perform tests...
```

- This block runs when Python is invoked directly on the module, but not when the module is imported.
- The `unittest` module provides more robust automation: group test cases into test suites, execute suites, and report or analyze results.

### Debugging

| Technique | How it works | Note |
|---|---|---|
| **Print statements** | Track variable values during execution | Statements must later be removed or commented out before release |
| **Debugger** | Specialized environment that controls and monitors execution; inserts **breakpoints**; program stops at each breakpoint and current variable values can be inspected | Better approach |

- The standard Python distribution includes the module `pdb` for debugging inside the interpreter.
- Most Python IDEs, such as IDLE, provide graphical debugging environments.

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 62)
