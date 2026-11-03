---
type: note
date: '2026-10-22'
tags:
- data-structures
- linked-lists
- python
- algorithm
topics:
- '[[Data Structures]]'
- '[[Linked Lists]]'
- '[[Python]]'
- '[[Algorithm]]'
---

Date: 2026-10-22
Tags: [[Data Structures]], [[Linked Lists]], [[Python]], [[Algorithm]]

---


# 7.2 Circularly Linked Lists

## 1. Concept and Structure

> [!info] Definition: Circularly Linked List
> In a standard singly linked list, the tail node's `next` reference is `None`. In a **circularly linked list**, the tail node uses its `next` reference to point back to the head of the list. This provides a more general model for data sets that are cyclic (having no particular notion of a beginning or end).
> 
> Even though a circular list has no beginning or end *per se*, we must maintain a reference to a particular node to make use of the list. We use the identifier `current` to describe this designated node. By setting `current = current.next`, we can effectively advance through the nodes.

> ![[Pasted image 20261022010416.png]]

### 1.1 Round-Robin Schedulers

> [!abstract] Design: Round-Robin Scheduling
> A round-robin scheduler iterates through a collection of elements in a circular fashion and "services" each element. This is often used to fairly allocate a shared resource (e.g., CPU time slices to concurrent applications).
> 
> **Inefficient approach (Standard Queue):** Repeatedly performing `e = Q.dequeue()`, servicing `e`, and `Q.enqueue(e)`. This requires unnecessary effort: a node is removed (size decremented, head adjusted) and then a new node is created to reinsert at the tail (size incremented).
> **Efficient approach (Circular List):** The effective transfer of an item from the "head" to the "tail" is accomplished simply by advancing the reference that marks the boundary of the queue.

> ![[Pasted image 20261022010437.png]]

---

## 2. Implementing a Queue with a Circularly Linked List

> [!abstract] Design: CircularQueue Orientation
> To implement the queue ADT using a circularly linked list, we rely on the intuition that the queue has a head and a tail, but with the `next` reference of the tail linked to the head. 
> **Key Optimization:** There is no need to explicitly store references to both the head and the tail. As long as we keep a reference to the **tail**, we can always find the head by following the tail's `next` reference (`self.tail.next`).

> [!example] Application Example: Complete Python Implementation of `CircularQueue`
> The implementation supports the entire queue ADT, plus an additional `rotate()` method that moves the first element to the back in $O(1)$ time without unlinking/relinking nodes.

```python
class CircularQueue:
    """Queue implementation using circularly linked list for storage."""

    # -------------------------- Nested Node Class --------------------------
    class _Node:
        """Lightweight, nonpublic class for storing a singly linked node."""
        __slots__ = '_element', '_next'  # streamline memory usage

        def __init__(self, element, next):
            self._element = element
            self._next = next

    # ------------------------------- Queue Methods -------------------------------
    def __init__(self):
        """Create an empty queue."""
        self._tail = None             # will represent tail of queue
        self._size = 0                # number of queue elements

    def __len__(self):
        """Return the number of elements in the queue."""
        return self._size

    def is_empty(self):
        """Return True if the queue is empty."""
        return self._size == 0

    def first(self):
        """Return (but do not remove) the element at the front of the queue.
        Raise Empty exception if the queue is empty.
        """
        if self.is_empty():
            raise Empty('Queue is empty')
        head = self._tail._next       # the head is the node after the tail
        return head._element

    def dequeue(self):
        """Remove and return the first element of the queue (i.e., FIFO).
        Raise Empty exception if the queue is empty.
        """
        if self.is_empty():
            raise Empty('Queue is empty')
        oldhead = self._tail._next
        if self._size == 1:           # removing only element
            self._tail = None         # queue becomes empty
        else:
            self._tail._next = oldhead._next  # bypass the old head
        self._size -= 1
        return oldhead._element

    def enqueue(self, e):
        """Add an element to the back of queue."""
        newest = self._Node(e, None)  # node will be new tail node
        if self.is_empty():
            newest._next = newest     # initialize circularly
        else:
            newest._next = self._tail._next   # new node points to head
            self._tail._next = newest         # old tail points to new node
        self._tail = newest           # new node becomes the tail
        self._size += 1

    def rotate(self):
        """Rotate front element to the back of the queue."""
        if self._size > 0:
            self._tail = self._tail._next  # old head becomes new tail
```

> [!warning] Pitfall / Edge Case: Empty Queue Handling
> 1. **`dequeue` on a single-element queue:** If `self._size == 1`, removing the head means the queue becomes empty. We must explicitly set `self._tail = None` to break the circular reference and maintain state consistency.
> 2. **`enqueue` on an empty queue:** The new node must point to *itself* (`newest._next = newest`) to establish the initial circular structure before updating `self._tail`.

> [!abstract] Performance Analysis: `CircularQueue`
> All operations (`enqueue`, `dequeue`, `first`, `__len__`, `is_empty`) execute in worst-case $O(1)$ time. 
> The `rotate()` method is strictly $O(1)$ and avoids the overhead of a full `dequeue` followed by an `enqueue` (which would involve decrementing/incrementing the size counter and modifying multiple pointer links).

---
# ~={red}References=~
*Data Structures and Algorithms in Python, Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser — Chapter 7.2: Circularly Linked Lists (p. 266-269)*
