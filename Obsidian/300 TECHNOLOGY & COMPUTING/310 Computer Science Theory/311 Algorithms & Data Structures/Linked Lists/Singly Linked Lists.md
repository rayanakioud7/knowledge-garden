---
type: note
date: '2026-10-21'
tags:
- data-structure
- python
- algorithm
- memory_management
- linked-lists
topics:
- '[[Data Structure]]'
- '[[Python]]'
- '[[Algorithm]]'
- '[[Memory_Management]]'
- '[[Linked Lists]]'
---

Date: 2026-10-21
Tags: [[Data Structure]], [[Python]], [[Algorithm]], [[Memory_Management]], [[Linked Lists]]

---
# 7. Linked Lists

## 1. Introduction: Arrays vs. Linked Lists

> [!warning] Pitfall / Edge Case: Limitations of Array-Based Sequences
> Although Python's `list` class is highly optimized, it presents three notable disadvantages for certain applications:
> 1. The length of the dynamic array may exceed the actual number of stored elements (memory overhead).
> 2. Amortized bounds may be unacceptable in **real-time systems**.
> 3. Insertions and deletions at **interior positions** are expensive ($O(n)$).

> [!info] Definition: Linked List
> A linked list relies on a **distributed representation**. Instead of a single large chunk of memory, a lightweight object called a **node** is allocated for each element. Each node maintains a reference to its element and one or more references to neighboring nodes to collectively represent the linear order of the sequence.
> **Trade-off:** We lose efficient random access by index ($O(1)$), but we gain flexibility for insertions and deletions.

---

## 2. Singly Linked Lists

> [!info] Definition: Node Structure
> A singly linked list is a collection of nodes forming a linear sequence. Each node stores:
> 1. A reference to an object (the **element** of the sequence).
> 2. A reference to the **next node** (`next`) in the list (or `None` if there is no subsequent node).

> ![[Pasted image 20261022010017.png|766]]
> *(Precise illustration description: A node with two fields: `element` pointing to an arbitrary object (e.g., airport code "MSP") and `next` pointing to the next node in the linked list, or `None`)*

> [!info] Definition: Head and Tail
> - The **first** node is the **head**.
> - The **last** node is the **tail**, identifiable because its `next` reference is `None`.
> - Traversing the list is done by following `next` references from the head. This process is commonly called *link hopping* or *pointer hopping*.

> ![[Pasted image 20261022010056.png]]
> *(Precise illustration description: A linked list with nodes LAX -> MSP -> BOS -> ATL. The list instance maintains a `head` reference to LAX and a `tail` reference to ATL. The `next` of ATL is `None` (denoted as Ø))*

### 2.1 Fundamental Operations

> [!example] Application Example: Insertion at the Head (`add_first`)
> Insertion at the head is an $O(1)$ operation.
> **Algorithm:**
> 1. Create a new node `newest` with element `e`.
> 2. Set `newest.next` to the old head (`L.head`).
> 3. Update `L.head` to point to `newest`.
> 4. Increment `L.size`.
> 
> ```python
> def add_first(L, e):
>     newest = Node(e)              # Create the new node
>     newest.next = L.head          # New node points to the old head
>     L.head = newest               # List head becomes the new node
>     L.size += 1                   # Increment size
> ```

> ![[Pasted image 20261022010108.png]]
> *(Precise illustration description: (a) List before insertion. (b) Creation of the new node pointing to the old head. (c) Reassignment of the `head` reference to the new node)*

> [!example] Application Example: Insertion at the Tail (`add_last`)
> Requires maintaining an explicit reference to the `tail`. Operation is $O(1)$.
> **Algorithm:**
> 1. Create a new node `newest` with `next = None`.
> 2. Set `L.tail.next` to `newest`.
> 3. Update `L.tail` to point to `newest`.
> 4. Increment `L.size`.
> 
> ```python
> def add_last(L, e):
>     newest = Node(e)              # Create new node (next=None by default)
>     newest.next = None            
>     L.tail.next = newest          # Old tail points to the new node
>     L.tail = newest               # List tail becomes the new node
>     L.size += 1
> ```

> *![[Pasted image 20261022010120.png]]
> *(Precise illustration description: (a) List before insertion. (b) Creation of the node and linking to the old tail. (c) Reassignment of the `tail` reference to the new node)*

> [!example] Application Example: Removal at the Head (`remove_first`)
> Inverse of head insertion, $O(1)$ operation.
> **Algorithm:**
> 1. If `L.head` is `None`, raise an error (empty list).
> 2. Point `L.head` to `L.head.next`.
> 3. Decrement `L.size`.
> 
> ```python
> def remove_first(L):
>     if L.head is None:
>         raise Error("List is empty")
>     L.head = L.head.next          # Head skips the first node
>     L.size -= 1
> ```

> ![[Pasted image 20261022010227.png]]
> *(Precise illustration description: (a) List before removal. (b) "Linking out" the old head. (c) Final configuration with the new head)*

> [!warning] Pitfall / Edge Case: Removal at the Tail
> It is **impossible** to efficiently remove the last node of a singly linked list, even if maintaining a `tail` reference. To remove the last node, one must access the node *preceding* the last node, which requires a full traversal from the head ($O(n)$). To support this operation efficiently, a **doubly linked list** is required.

---

## 3. Implementing the Stack ADT with a Singly Linked List

> [!abstract] Design: Stack Orientation
> To implement a stack (LIFO) using a singly linked list, we must orient the **top of the stack** at the **head of the list**. This is the only location where both insertion and deletion occur in worst-case $O(1)$ time.

> [!example] Application Example: Complete Python Implementation of `LinkedStack`
> Uses `__slots__` to streamline memory usage for the nodes.

```python
class LinkedStack:
    """LIFO Stack implementation using a singly linked list for storage."""

    # -------------------------- Nested Node Class --------------------------
    class _Node:
        """Lightweight, nonpublic class for storing a singly linked node."""
        __slots__ = '_element', '_next'  # streamline memory usage

        def __init__(self, element, next):
            self._element = element      # reference to user's element
            self._next = next            # reference to next node

    # ------------------------------- Stack Methods -------------------------------
    def __init__(self):
        """Create an empty stack."""
        self._head = None                # reference to the head node
        self._size = 0                   # number of stack elements

    def __len__(self):
        """Return the number of elements in the stack."""
        return self._size

    def is_empty(self):
        """Return True if the stack is empty."""
        return self._size == 0

    def push(self, e):
        """Add element e to the top of the stack."""
        # Create and link a new node
        self._head = self._Node(e, self._head)
        self._size += 1

    def top(self):
        """Return (but do not remove) the element at the top of the stack.
        Raise Empty exception if the stack is empty.
        """
        if self.is_empty():
            raise Empty('Stack is empty')
        return self._head._element       # top of stack is at head of list

    def pop(self):
        """Remove and return the element from the top of the stack (i.e., LIFO).
        Raise Empty exception if the stack is empty.
        """
        if self.is_empty():
            raise Empty('Stack is empty')
        answer = self._head._element
        self._head = self._head.next     # bypass the former top node
        self._size -= 1
        return answer
```

> [!abstract] Performance Analysis: `LinkedStack`
> Unlike `ArrayStack` which has amortized bounds, `LinkedStack` guarantees worst-case performance.
> 
> | Operation | Running Time (Worst-Case) |
> | :--- | :--- |
> | `S.push(e)` | $O(1)$ |
> | `S.pop()` | $O(1)$ |
> | `S.top()` | $O(1)$ |
> | `len(S)` | $O(1)$ |
> | `S.is_empty()` | $O(1)$ |
> 
> **Space Usage:** $O(n)$, where $n$ is the current number of elements in the stack.

---

## 4. Implementing the Queue ADT with a Singly Linked List

> [!abstract] Design: Queue Orientation
> To implement a queue (FIFO), we must align the **front of the queue** with the **head of the list** (for deletion), and the **back of the queue** with the **tail of the list** (for insertion). We must explicitly maintain both references (`_head` and `_tail`).

> [!example] Application Example: Complete Python Implementation of `LinkedQueue`

```python
class LinkedQueue:
    """FIFO queue implementation using a singly linked list for storage."""

    # -------------------------- Nested Node Class --------------------------
    class _Node:
        __slots__ = '_element', '_next'

        def __init__(self, element, next):
            self._element = element
            self._next = next

    # ------------------------------- Queue Methods -------------------------------
    def __init__(self):
        """Create an empty queue."""
        self._head = None
        self._tail = None
        self._size = 0

    def __len__(self):
        return self._size

    def is_empty(self):
        return self._size == 0

    def first(self):
        """Return (but do not remove) the element at the front of the queue."""
        if self.is_empty():
            raise Empty('Queue is empty')
        return self._head._element

    def dequeue(self):
        """Remove and return the first element of the queue (i.e., FIFO).
        Raise Empty exception if the queue is empty.
        """
        if self.is_empty():
            raise Empty('Queue is empty')
        answer = self._head._element
        self._head = self._head.next
        self._size -= 1
        if self.is_empty():             # Edge case: queue becomes empty
            self._tail = None           # Removed head had been the tail
        return answer

    def enqueue(self, e):
        """Add an element to the back of queue."""
        newest = self._Node(e, None)    # New node will be the new tail
        if self.is_empty():
            self._head = newest         # Edge case: previously empty
        else:
            self._tail._next = newest   # Old tail points to the new node
        self._tail = newest             # Update tail reference
        self._size += 1
```

> [!warning] Pitfall / Edge Case: Edge Cases in the Queue
> 1. **`dequeue` on a single-element queue:** Removing the head simultaneously removes the tail. We must explicitly set `self._tail = None` to maintain state consistency.
> 2. **`enqueue` on an empty queue:** The new node becomes both the new head (`_head`) and the new tail (`_tail`). The `if self.is_empty():` condition handles this.

> [!abstract] Performance Analysis: `LinkedQueue`
> All operations (`enqueue`, `dequeue`, `first`, `__len__`, `is_empty`) execute in worst-case $O(1)$ time. Space usage is linear $O(n)$.

---
# ~={red}References=~
*Data Structures and Algorithms in Python, Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser — Chapter 7: Linked Lists (p. 256-265)*