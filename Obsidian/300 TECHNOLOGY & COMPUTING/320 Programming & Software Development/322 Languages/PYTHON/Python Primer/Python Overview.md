Date: 2026-05-20
Tags: [[Python]], [[Programming language]]

---
## Introduction

Python is a **high-level computer language** originally developed by Guido van Rossum in the early 1990s. The language has since become a prominently used language in industry and education.

> [!info] Core Versions & Compatibility
> 
> - **Python 2**: Released in 2000.
>     
> - **Python 3**: Released in 2008.
>     
> 
> There are significant incompatibilities between Python 2 and Python 3. The implementations and data structures covered are based on Python 3.

The language is interpreter-based and freely available at [www.python.org](https://www.python.org/), along with official documentation and tutorials.

---
## The Python Interpreter

Python is formally an **interpreted language**. Commands are executed through a piece of software known as the **Python interpreter**.

> [!info] Interpreter REPL Workflow
> 
> The interpreter operates on a three-step cycle:
> 
> 1. **Receive** a command.
>     
> 2. **Evaluate** that command.
>     
> 3. **Report** the result of the command.
>     

#### Execution Modes

- **Interactive Mode**: Invoking the interpreter from the command line Starts with typing `python` in it, and it provides a clean workspace with a prompt (typically `>>>`) to input code directly for immediate evaluation.
    
- **Script Mode**: A programmer defines a series of commands in advance and saves them in a plain text file known as **source code** or a **script**, conventionally using the `.py` suffix (e.g., `demo.py`). This file is executed by passing it as an argument to the interpreter.

![[Pasted image 20260520121545.png|center]]

```bash
python demo.py
```

> [!warning] Implementation Gotchas
> 
> When executing a predefined script, the interpreter terminates and exits back to the system shell upon completion. To inspect variables or debug interactively after the script runs, use the `-i` flag to force the interpreter into interactive mode post-execution.
> 
> ```bash
> python -i demo.py
> ```

#### Development Environments

Many **integrated development environments** (IDEs) provide richer software development platforms for Python:

- **IDLE**: Bundled with the standard Python distribution, offering an embedded text editor with syntax highlighting and a basic debugger for step-by-step execution.
    
- **VS Code**: A highly customizable and widely adopted general-purpose editor for application development.
    
- **Jupyter Notebooks**: Frequently utilized in data science workflows to create rich documents that combine executable code blocks with markdown text, mathematical equations, and inline data visualizations (via libraries like `matplotlib` and `pandas`).

---
## Preview of a Python Program

Python's syntax relies heavily on the structural use of **whitespace** rather than braces or explicit keywords to define code blocks.

#### Syntactic Rules

- **Statement Termination**: Individual statements are typically concluded with a newline character.
    
- **Line Continuations**: A command can extend to another line either by using a concluding backslash character (`\`), or if an opening delimiter (such as `(`, `[`, or `{`) has not yet been closed.
    
- **Comments**: Annotations provided for human readers that are completely ignored by the Python interpreter. The primary syntax for comments is based on the use of the `#` character, which designates the remainder of that line as a comment.
    

> [!info] Definitions & Properties
> 
> **Indentation Level**: A block of code is indented to designate it as the body of a control structure. **Nested control structures** use increasing, uniform amounts of indentation (typically 4 spaces per nesting level) to establish scope hierarchy.

### Code Fragment: GPA Calculator

The following program computes the grade-point average (GPA) for a student based on letter grades entered by a user.

```python
print('Welcome to the GPA calculator.')
print('Please enter all your letter grades, one per line.')
print('Enter a blank line to designate the end.')

# map from letter grade to point value
points = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.67, 
    'B+': 3.33, 'B': 3.0, 'B-': 2.67, 
    'C+': 2.33, 'C': 2.0, 'C-': 1.67, 
    'D+': 1.33, 'D': 1.0, 'F': 0.0
}

num_courses = 0
total_points = 0
done = False

while not done:
    grade = input()                          # read line from user
    if grade == '':
        done = True                          # empty line was entered
    elif grade not in points:
	    # unrecognized grade entered
        print("Unknown grade '{0}' being ignored".format(grade))
    else:
        num_courses += 1
        total_points += points[grade]

if num_courses > 0:                          # avoid division by zero
    print('Your GPA is {0:.3}'.format(total_points / num_courses))
```

![[Pasted image 20260520124742.png|center]]

> [!example] Code Walkthroughs / Traces
> 
> In this implementation, the body of the `while` loop spans the subsequent 8 lines of code. The loop body contains a nested conditional structure (`if-elif-else`) that handles input evaluation and tallying logic, which itself undergoes a secondary level of indentation to define its inner blocks.



---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 2)