Date: 2026-10-07
Tags: [[Programming language]], [[Python]], [[Algorithm]], [[Data Structure]], [[Array]], [[OOP]]

---

> [!info] Definitions & Properties
> A stack is a collection of objects inserted and removed according to the **last-in, first-out (LIFO)** principle. Access is restricted exclusively to the most recently inserted element residing at the top of the stack. Common applications include web browser page history (back-button stack), text editor undo buffers, and execution call stacks in programming runtimes.
> 
> 

> [!NOTE] Figure 6.1
> ![[Pasted image 20261007234648.png]]
> 
> 

---

## 1. The Stack Abstract Data Type (ADT)

The stack abstract data type specifies two fundamental update operations and three auxiliary accessor methods:

![[Pasted image 20261007234720.png]]

### Stack Operation Trace (Example 6.3)

| Operation | Return Value | Stack Contents (Top on Right) |
| --- | --- | --- |
| `S.push(5)` | — | `[5]`<br> |
| `S.push(3)` | — | `[5, 3]`<br> |
| `len(S)` | `2` | `[5, 3]`<br> |
| `S.pop()` | `3` | `[5]`<br> |
| `S.is_empty()` | `False` | `[5]`<br> |
| `S.pop()` | `5` | `[]`<br> |
| `S.is_empty()` | `True` | `[]`<br> |
| `S.pop()` | `"error"` | `[]`<br> |
| `S.push(7)` | — | `[7]`<br> |
| `S.push(9)` | — | `[7, 9]`<br> |
| `S.top()` | `9` | `[7, 9]`<br> |
| `S.push(4)` | — | `[7, 9, 4]`<br> |
| `len(S)` | `3` | `[7, 9, 4]`<br> |
| `S.pop()` | `4` | `[7, 9]`<br> |
| `S.push(6)` | — | `[7, 9, 6]`<br> |
| `S.push(8)` | — | `[7, 9, 6, 8]`<br> |
| `S.pop()` | `8` | `[7, 9, 6]`<br> |

---

## 2. Array-Based Implementation

Storing stack elements internally within a standard Python list aligns the top of the stack with the end of the list. Appending to and popping from the end of a dynamic array execute in $O(1)$ amortized time.

> [!NOTE] Figure 6.2
> ![[Pasted image 20261007234739.png]]
> 
> 

### The Adapter Pattern

The **Adapter design pattern** customizes an existing class to match the interface of a different abstract data type by wrapping the adaptee class inside a hidden instance field.

| Stack Method | Realization with Python List `L` |
| --- | --- |
| `S.push(e)` | `L.append(e)`<br> |
| `S.pop()` | `L.pop()`<br> |
| `S.top()` | `L[-1]`<br> |
| `S.is_empty()` | `len(L) == 0`<br> |
| `len(S)` | `len(L)`<br> |

### Python Implementation (`ArrayStack`)

```python
class Empty(Exception):
    """Error attempting to access an element from an empty container."""
    pass


class ArrayStack:
    """LIFO Stack implementation using a Python list as underlying storage."""

    def __init__(self):
        """Create an empty stack."""
        self._data = []                    # nonpublic list instance

    def __len__(self):
        """Return the number of elements in the stack."""
        return len(self._data)

    def is_empty(self):
        """Return True if the stack is empty."""
        return len(self._data) == 0

    def push(self, e):
        """Add element e to the top of the stack."""
        self._data.append(e)               # new item stored at end of list

    def top(self):
        """Return (but do not remove) the element at the top of the stack.

        Raise Empty exception if the stack is empty.
        """
        if self.is_empty():
            raise Empty('Stack is empty')
        return self._data[-1]              # the last item in the list

    def pop(self):
        """Remove and return the element from the top of the stack (i.e., LIFO).

        Raise Empty exception if the stack is empty.
        """
        if self.is_empty():
            raise Empty('Stack is empty')
        return self._data.pop()            # remove last item from list

```

---

## 3. Algorithmic Complexity

![[Pasted image 20261007234805.png]]

*(Asterisk $*$ denotes an amortized time bound; worst-case execution is $O(n)$ during underlying array reallocation.)*

> [!note] Space Usage & Preallocation
> The overall space complexity for an `ArrayStack` containing $n$ elements is $O(n)$. When the maximum capacity is known in advance, amortized resize penalties can be avoided by preallocating a fixed-length list (e.g., `[None] * max_capacity`) and maintaining an explicit integer pointer to track the current top index.
> 
> 

---

## 4. Reversing Data Using a Stack

Because the LIFO order reverses insertion order, a stack can invert sequences, such as lines in a file.

```python
def reverse_file(filename):
    """Overwrite given file with its contents line-by-line reversed."""
    S = ArrayStack()
    original = open(filename)
    for line in original:
        S.push(line.rstrip('\n'))          # strip and push line
    original.close()

    # overwrite with contents in LIFO order
    output = open(filename, 'w')
    while not S.is_empty():
        output.write(S.pop() + '\n')       # re-insert newline characters
        output.close()

```

---

## 5. Delimiter & Markup Matching

### Delimiter Matching Algorithm

Arithmetic expressions require opening delimiters (`(`, `[`, `{`) to match their corresponding closing symbols (`)`, `]`, `}`) in nested order.

* When an opening delimiter is read, push it onto the stack.


* When a closing delimiter is read, pop from the stack and verify that the popped symbol matches the closing delimiter.


* A syntax failure occurs if:
1. A closing delimiter appears while the stack is empty.


2. The popped opening delimiter does not match the closing delimiter type.


3. The expression ends while opening delimiters remain on the stack.


```python
def is_matched(expr):
    """Return True if all delimiters are properly matched; False otherwise."""
    lefty = '({['                               # opening delimiters
    righty = ')}]'                              # respective closing delims
    S = ArrayStack()
    for c in expr:
        if c in lefty:
            S.push(c)                           # push left delimiter on stack
        elif c in righty:
            if S.is_empty():
                return False                    # nothing to match with
            if righty.index(c) != lefty.index(S.pop()):
                return False                    # mismatched delimiter
    return S.is_empty()                         # were all symbols matched?

```

> [!info] Complexity
> For an expression of length $n$, the algorithm executes at most $n$ `push` and $n$ `pop` operations. Delimiter lookup runs in $O(1)$ time, yielding an overall running time of $O(n)$ and auxiliary stack space of $O(n)$.
> 
> 

---

### Matching Tags in Markup Languages (HTML/XML)

HTML documents require opening tags (such as `<body>`, `<h1>`) to balance matching closing tags (`</body>`, `</h1>`).

> [!NOTE] Figure 6.3
> ![[Pasted image 20261007234842.png]]
> 
> 

```python
def is_matched_html(raw):
    """Return True if all HTML tags are properly matched; False otherwise."""
    S = ArrayStack()
    j = raw.find('<')                           # find first '<' character (if any)
    while j != -1:
        k = raw.find('>', j + 1)                # find next '>' character
        if k == -1:
            return False                        # invalid tag syntax
        tag = raw[j + 1:k]                      # strip away < >
        if not tag.startswith('/'):
            S.push(tag)                         # opening tag: push onto stack
        else:
            if S.is_empty():
                return False                    # closing tag with no match
            if tag[1:] != S.pop():
                return False                    # mismatched tag label
        j = raw.find('<', k + 1)                # find next '<' character (if any)
    return S.is_empty()                         # were all opening tags matched?

```

> [!info] Complexity
> Scanning through $n$ characters of raw HTML performs at most $O(n)$ string slice and stack operations, resulting in an overall running time of $O(n)$.
> 



---
# ~={red}References=~
- [[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 230)