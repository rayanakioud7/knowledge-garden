---
type: note
date: '2026-10-28'
tags:
- data-structure
- python
- algorithm
- memory_management
topics:
- '[[Data Structure]]'
- '[[Python]]'
- '[[Algorithm]]'
- '[[Memory_Management]]'
---

Date: 2026-10-28
Tags: [[Data Structure]], [[Python]], [[Algorithm]], [[Memory_Management]]

---

## 1. Fundamentals of Doubly Linked Lists

### The Asymmetry Bottleneck of Singly Linked Lists
In a singly linked list, each node only maintains a forward reference (`next`). While this allows $O(1)$ insertion at either end and $O(1)$ deletion at the head, **it is impossible to efficiently delete the tail node or an arbitrary interior node** in $O(1)$ time. Deleting a node requires updating the `next` pointer of the node that *immediately precedes* it, which cannot be reached without a full $\Omega(n)$ traversal from the head.

> [!info] Definition: Doubly Linked List
> A **doubly linked list** is a linked data structure in which every node keeps an explicit reference to both the node before it (`prev`) and the node after it (`next`), alongside its stored data (`element`). This bidirectional symmetry enables worst-case $O(1)$ insertions and deletions at both ends and at any known interior position.

---

## 2. Header and Trailer Sentinels

To eliminate boundary edge cases when inserting into or deleting from an empty list or near the ends, a doubly linked list places special dummy nodes called **sentinels** (or guards) at both boundaries:
* **Header Sentinel (`header`):** Placed at the very beginning of the list.
* **Trailer Sentinel (`trailer`):** Placed at the very end of the list.

> ![[Pasted image 20261028214644.png]]
> *(Figure 7.10: A doubly linked list representing the sequence {JFK, PVD, SFO} bounded by `header` and `trailer` sentinel nodes)*

### Structural Invariants of Sentinels
* **No User Data:** Sentinels store `None` as their element; they never hold elements of the primary sequence.
* **Empty List Initialization:** In an empty list, `header.next` points directly to `trailer`, and `trailer.prev` points directly to `header`.
* **Non-Empty List Access:** The first real element is always stored at `header.next`, and the last real element is always stored at `trailer.prev`.

> [!abstract] Architectural Advantage of Sentinels
> Although sentinels consume a tiny amount of extra $O(1)$ memory, they drastically simplify operation logic:
> 1. The `header` and `trailer` references **never change** over the lifetime of the list—only the nodes between them are modified.
> 2. **Unified Insertion:** Every new node is guaranteed to be inserted *between* an existing pair of nodes (unlike `LinkedQueue`, which required an `if self.is_empty()` branch to reassign `head` when inserting into an empty list).
> 3. **Unified Deletion:** Every node slated for deletion is guaranteed to have a valid neighbor on both its left (`prev`) and right (`next`) sides.

---

## 3. Insertion and Deletion Mechanics

### Inserting Between Two Nodes ($O(1)$)
Every insertion places a new node between an existing `predecessor` node and `successor` node:
1. Instantiate the new node with its `prev` link pointing to `predecessor` and its `next` link pointing to `successor`.
2. Update `predecessor.next` to reference the new node.
3. Update `successor.prev` to reference the new node.
4. Increment the list size counter.

* *Inserting at the front:* Insert between `header` and `header.next`.
* *Inserting at the back:* Insert between `trailer.prev` and `trailer`.

> ![[Pasted image 20261028214701.png]]
> *(Figures 7.11 & 7.12: Step-by-step pointer re-linking when inserting an interior element and when inserting at the front immediately after `header`)*

---

### Deleting a Node ($O(1)$)
Deleting a target `node` is the exact inverse of insertion:
1. Identify the target node's neighbors: `predecessor = node.prev` and `successor = node.next`.
2. Link the neighbors directly to one another to bypass the target node: `predecessor.next = successor` and `successor.prev = predecessor`.
3. Decrement the list size counter.
4. **Node Deprecation & Garbage Collection:** Explicitly reset the removed node's `_prev`, `_next`, and `_element` references to `None`. This severs lingering outgoing references so Python's garbage collector can reclaim the memory and marks the node as deprecated.

> ![[Pasted image 20261028214709.png]]
> *(Figure 7.13: Removing an element from a doubly linked list by linking its neighbors directly together and bypassing the removed node)*

---

## 4. Base Implementation (`_DoublyLinkedBase`)

Why is the base class named with a leading underscore (`_DoublyLinkedBase`)? Because passing raw `_Node` references to public users breaks encapsulation. Instead, `_DoublyLinkedBase` serves as a protected low-level engine that public classes (`LinkedDeque` for end-only operations and `PositionalList` for arbitrary interior operations) inherit from.

### Python Implementation: `_DoublyLinkedBase`
```python
class _DoublyLinkedBase:
    """Private base class providing a doubly linked list representation with sentinels."""

    class _Node:
        """Lightweight, nonpublic class for storing a doubly linked node."""
        __slots__ = '_element', '_prev', '_next'  # avoid __dict__ overhead

        def __init__(self, element, prev_node, next_node):
            self._element = element
            self._prev = prev_node
            self._next = next_node

    def __init__(self):
        """Create an empty list with linked header and trailer sentinels."""
        self._header = self._Node(None, None, None)
        self._trailer = self._Node(None, None, None)
        self._header._next = self._trailer        # trailer follows header
        self._trailer._prev = self._header        # header precedes trailer
        self._size = 0

    def __len__(self):
        return self._size

    def is_empty(self):
        return self._size == 0

    def _insert_between(self, e, predecessor, successor):
        """Add element e between two existing nodes and return the new node."""
        newest = self._Node(e, predecessor, successor)
        predecessor._next = newest
        successor._prev = newest
        self._size += 1
        return newest

    def _delete_node(self, node):
        """Delete nonsentinel node from the list and return its element."""
        predecessor = node._prev
        successor = node._next
        predecessor._next = successor
        successor._prev = predecessor
        self._size -= 1
        element = node._element
        # Deprecate node to assist garbage collection
        node._prev = node._next = node._element = None
        return element
```

## 5. Implementing a Deque (`LinkedDeque`)

By inheriting from `_DoublyLinkedBase`, we can implement a Double-Ended Queue (`LinkedDeque`) where **every operation executes in strict worst-case O(1)O(1)O(1) time**, avoiding the amortized resizing overhead of circular array deques.

- `_DoublyLinkedBase.__init__`, `__len__`, and `is_empty` are inherited directly without modification.
- Front operations target the node right after `_header` (`self._header._next`).
- Back operations target the node right before `_trailer` (`self._trailer._prev`).
    

### Python Implementation: `LinkedDeque`

```python
class LinkedDeque(_DoublyLinkedBase):
    """Double-ended queue implementation based on a doubly linked list."""

    def first(self):
        """Return (but do not remove) the element at the front of the deque."""
        if self.is_empty():
            raise Empty("Deque is empty")
        return self._header._next._element        # real item just after header

    def last(self):
        """Return (but do not remove) the element at the back of the deque."""
        if self.is_empty():
            raise Empty("Deque is empty")
        return self._trailer._prev._element       # real item just before trailer

    def insert_first(self, e):
        """Add an element to the front of the deque."""
        self._insert_between(e, self._header, self._header._next)

    def insert_last(self, e):
        """Add an element to the back of the deque."""
        self._insert_between(e, self._trailer._prev, self._trailer)

    def delete_first(self):
        """Remove and return the element from the front of the deque."""
        if self.is_empty():
            raise Empty("Deque is empty")
        return self._delete_node(self._header._next)

    def delete_last(self):
        """Remove and return the element from the back of the deque."""
        if self.is_empty():
            raise Empty("Deque is empty")
        return self._delete_node(self._trailer._prev)
```

### Complexity Comparison: `ArrayDeque` vs. `LinkedDeque`

|Operation|`ArrayDeque` (Circular Array)|`LinkedDeque` (Doubly Linked List)|
|---|---|---|
|`first()` / `last()`|O(1) worst-case|O(1) worst-case|
|`insert_first(e)` / `insert_last(e)`|O(1)∗ amortized|O(1) **worst-case**|
|`delete_first()` / `delete_last()`|O(1)∗ amortized|O(1) **worst-case**|
|Space Overhead|Compact contiguous buffer (reserves slack capacity)|O(n) with 3 references (`_element`, `_prev`, `_next`) per node|

---

# ~={red}References=~

_Data Structures and Algorithms in Python (Chapter 7: Linked Lists, Section 7.3)_ (p. 270–276)