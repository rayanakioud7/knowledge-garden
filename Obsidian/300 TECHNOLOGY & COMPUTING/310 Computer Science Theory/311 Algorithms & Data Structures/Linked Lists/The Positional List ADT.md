---
type: note
date: '2026-10-28'
tags:
- data-structure
- python
- algorithm
- oop
- memory_management
topics:
- '[[Data Structure]]'
- '[[Python]]'
- '[[Algorithm]]'
- '[[OOP]]'
- '[[Memory_Management]]'
---

Date: 2026-10-28
Tags: [[Data Structure]], [[Python]], [[Algorithm]], [[OOP]], [[Memory_Management]]

---
> ADT = Abstract Data Type

## 1. Motivation: Beyond End-Only Operations & Integer Indices

Standard linear abstractions like stacks, queues, and deques restrict updates to the extreme ends of a sequence. However, real-world sequences—such as a customer hanging up while waiting in a call queue, someone joining a ticket line right behind a friend, or a text editor cursor inserting and deleting characters mid-document—require arbitrary interior insertions and deletions.

### Why Integer Indices Fail for Linked Lists
1. **No $O(1)$ Random Access:** Locating the $j^{\text{th}}$ element in a linked list requires link-hopping from the beginning or end, costing $O(n)$ time.
2. **Index Drift:** An element's integer index constantly shifts whenever insertions or deletions occur earlier in the sequence. We need an abstraction that tracks an element's intrinsic location regardless of mutations elsewhere in the container.

> ![[Pasted image 20261028221626.png]]
> *(Figure 7.14: Identifying a local position in a sequence directly without relying on an integer index)*

---

## 2. Why Encapsulate Nodes Inside a `Position` Object?

Since `_DoublyLinkedBase` performs $O(1)$ updates given direct `_Node` references, why not expose raw nodes to the user? Directly exposing nodes violates object-oriented **abstraction and encapsulation** for three critical reasons:

1. **User Simplicity:** Users should not have to manage low-level pointer manipulation or know about hidden implementation details like `header` and `trailer` sentinel nodes.
2. **Structural Integrity & Security:** If users hold raw `_Node` pointers, they could manually corrupt `.next` or `.prev` links, or pass a node belonging to list $A$ into a method of list $B$, breaking the container's internal state.
3. **Implementation Flexibility:** Decoupling the public position token from the underlying storage node allows engineers to swap or optimize the internal data structure (even using an array-based backend) without breaking client code.

---

## 3. The Positional List Abstract Data Type (ADT)

> [!info] Definition: The `Position` Abstraction
> A **Position** instance acts as an abstract marker or token tied to a single element within a broader positional list. A position $p$ remains completely unaffected by insertions or deletions elsewhere in the list; it only becomes invalid if $p$ itself is explicitly deleted.
> * **`p.element()`**: Returns the element stored at position $p$.

### Accessor Methods of a Positional List $L$

| Method | Return Value / Behavior | Boundary Condition |
| :--- | :--- | :--- |
| `L.first()` | Position of the first element in $L$ | Returns `None` if $L$ is empty |
| `L.last()` | Position of the last element in $L$ | Returns `None` if $L$ is empty |
| `L.before(p)` | Position immediately preceding $p$ | Returns `None` if $p$ is the first position |
| `L.after(p)` | Position immediately following $p$ | Returns `None` if $p$ is the last position |
| `L.is_empty()` | `True` if $L$ contains no elements | — |
| `len(L)` | Total number of elements in $L$ | — |
| `iter(L)` | Forward iterator yielding the **elements** of $L$ | — |

> [!warning] `first()` / `last()` Return Positions, Not Elements
> Unlike `LinkedDeque.first()`, which returns the raw value, `PositionalList.first()` returns a `Position` instance. To retrieve the value, chain the call: `L.first().element()`. Returning a `Position` allows immediate cursor navigation via `L.after(p)`.

### Mutator (Update) Methods of a Positional List $L$

| Method | Action | Return Value |
| :--- | :--- | :--- |
| `L.add_first(e)` | Inserts new element $e$ at the front of $L$ | `Position` of the newly inserted element |
| `L.add_last(e)` | Inserts new element $e$ at the back of $L$ | `Position` of the newly inserted element |
| `L.add_before(p, e)` | Inserts new element $e$ immediately before position $p$ | `Position` of the newly inserted element |
| `L.add_after(p, e)` | Inserts new element $e$ immediately after position $p$ | `Position` of the newly inserted element |
| `L.replace(p, e)` | Replaces element at position $p$ with $e$ | The **old element** formerly stored at $p$ |
| `L.delete(p)` | Removes element at position $p$ and invalidates $p$ | The **deleted element** formerly stored at $p$ |

---

### Trace Example: Positional List Operations

> [!example] Step-by-Step State Trace (Example 7.1)
> Tracing operations on an initially empty positional list $L$, where subscripts ($8_p$) denote the `Position` variable associated with each stored element:
> 
> | Operation | Returned Value | Resulting List State ($L$) |
> | :--- | :--- | :--- |
> | `L.add_last(8)` | $p$ | $8_p$ |
> | `L.first()` | $p$ | $8_p$ |
> | `L.add_after(p, 5)` | $q$ | $8_p, 5_q$ |
> | `L.before(q)` | $p$ | $8_p, 5_q$ |
> | `L.add_before(q, 3)` | $r$ | $8_p, 3_r, 5_q$ |
> | `r.element()` | $3$ | $8_p, 3_r, 5_q$ |
> | `L.after(p)` | $r$ | $8_p, 3_r, 5_q$ |
> | `L.before(p)` | `None` | $8_p, 3_r, 5_q$ |
> | `L.add_first(9)` | $s$ | $9_s, 8_p, 3_r, 5_q$ |
> | `L.delete(L.last())` | $5$ | $9_s, 8_p, 3_r$ *(position $q$ is now invalidated)* |
> | `L.replace(p, 7)` | $8$ | $9_s, 7_p, 3_r$ |

---

## 4. Doubly Linked List Implementation (`PositionalList`)

> [!abstract] Proposition 7.2: Worst-Case Complexity
> Every method of the `PositionalList` ADT runs in **worst-case $O(1)$ time** when implemented with a doubly linked list.

### Architectural Design Mechanics

1. **Redundant Position Instances & Equality (`__eq__`):**
   Calling `L.first()` and `L.last()` on a 1-element list instantiates two distinct `Position` wrapper objects in memory that point to the exact same underlying `_Node`. Therefore, `Position` overrides `__eq__` and `__ne__` to compare whether two wrappers reference the same `_Node` (`other._node is self._node`).
2. **Unwrapping & Validation (`_validate`):**
   Every method accepting a position $p$ passes it through `_validate(p)` to verify three strict conditions before extracting its hidden `_node`:
   * `isinstance(p, self.Position)`: Ensures $p$ is actually a `Position` object.
   * `p._container is self`: Ensures $p$ belongs to *this specific list instance* and not another `PositionalList`.
   * `p._node._next is not None`: Detects whether the node was previously deleted (since `_delete_node` sets `_prev` and `_next` to `None` upon removal).
3. **Wrapping & Sentinel Protection (`_make_position`):**
   Whenever an operation returns a node to the user, `_make_position(node)` wraps it in a `Position` instance—unless the node is `_header` or `_trailer`, in which case it returns `None` to prevent exposing sentinels.

---

### Complete Python Implementation (Annotated Architecture)

```python
class PositionalList(_DoublyLinkedBase):
    """Sequential container of elements allowing positional access in O(1) time."""

    #-------------------------- nested Position class --------------------------
    class Position:
        """Public abstraction representing the location of a single element."""

        def __init__(self, container, node):
            self._container = container         # reference to owning PositionalList
            self._node = node                   # reference to underlying _Node

        def element(self):
            """Return the element stored at this Position."""
            return self._node._element

        def __eq__(self, other):
            """Return True if other is a Position referencing the exact same _Node."""
            return type(other) is type(self) and other._node is self._node

        def __ne__(self, other):
            """Return True if other does not represent the same location."""
            return not (self == other)

    #-------------------------- private utility methods --------------------------
    def _validate(self, p):
        """Verify Position p is valid and return its underlying _Node."""
        if not isinstance(p, self.Position):
            raise TypeError("p must be proper Position type")
        if p._container is not self:
            raise ValueError("p does not belong to this container")
        if p._node._next is None:               # recognizes deprecated/deleted nodes
            raise ValueError("p is no longer valid")
        return p._node

    def _make_position(self, node):
        """Wrap a _Node in a Position instance, or return None if it is a sentinel."""
        if node is self._header or node is self._trailer:
            return None                         # never expose sentinels to caller
        return self.Position(self, node)

    #-------------------------- public accessors --------------------------
    def first(self):
        """Return the first Position in the list (or None if empty)."""
        return self._make_position(self._header._next)

    def last(self):
        """Return the last Position in the list (or None if empty)."""
        return self._make_position(self._trailer._prev)

    def before(self, p):
        """Return the Position immediately before p (or None if p is first)."""
        node = self._validate(p)
        return self._make_position(node._prev)

    def after(self, p):
        """Return the Position immediately after p (or None if p is last)."""
        node = self._validate(p)
        return self._make_position(node._next)

    def __iter__(self):
        """Generate a forward iteration of the elements in the list."""
        cursor = self.first()
        while cursor is not None:
            yield cursor.element()
            cursor = self.after(cursor)

    #-------------------------- public mutators --------------------------
    def _insert_between(self, e, predecessor, successor):
        """Override base utility to return a wrapped Position instead of raw _Node."""
        node = super()._insert_between(e, predecessor, successor)
        return self._make_position(node)

    def add_first(self, e):
        """Insert element e at the front and return its Position."""
        return self._insert_between(e, self._header, self._header._next)

    def add_last(self, e):
        """Insert element e at the back and return its Position."""
        return self._insert_between(e, self._trailer._prev, self._trailer)

    def add_before(self, p, e):
        """Insert element e right before Position p and return new Position."""
        original = self._validate(p)
        return self._insert_between(e, original._prev, original)

    def add_after(self, p, e):
        """Insert element e right after Position p and return new Position."""
        original = self._validate(p)
        return self._insert_between(e, original, original._next)

    def delete(self, p):
        """Remove and return the element at Position p (invalidating p)."""
        original = self._validate(p)
        return self._delete_node(original)      # inherited method sets links to None

    def replace(self, p, e):
        """Replace element at Position p with e and return the former element."""
        original = self._validate(p)
        old_value = original._element
        original._element = e
        return old_value
```


---

## 1. Insertion Sort on a Positional List

Having previously defined the **insertion-sort** algorithm for array-based sequences (Section 5.5.2), we can adapt the exact same high-level strategy to operate on a `PositionalList`. Each element is sequentially placed into its proper order relative to a growing collection of previously sorted elements.

### Positional Pointers (State Variables)
Instead of tracking integer indices, the algorithm maintains three `Position` variables to navigate the list:
* **`marker`**: Represents the rightmost position of the currently sorted portion of the list.
* **`pivot`**: The position immediately past `marker` (`L.after(marker)`), representing the next item to be placed into the sorted portion.
* **`walk`**: A cursor initialized at `marker` that moves leftward (`L.before(walk)`) through the sorted section as long as there remains a preceding element with a value strictly larger than the `pivot`'s element.

> ![[Pasted image 20261028222239.png|690]]
> *(Figure 7.15: Overview of one step of our insertion-sort algorithm. The shaded elements, those up to and including `marker` (15, 22, 25, 29, 36), have already been sorted. In this step, the `pivot`'s element (23) should be relocated immediately before the `walk` position (25))*[cite: 249].

---

## 2. Step-by-Step Algorithmic Mechanics

> [!abstract] Execution Logic per Pass
> Assuming the list has more than 1 element (`len(L) > 1`), `marker` starts at `L.first()` and loops until `marker == L.last()`:
> 1. **Identify Candidate:** Set `pivot = L.after(marker)` and extract `value = pivot.element()`.
> 2. **Case 1 — Already Sorted ($O(1)$):** If `value > marker.element()`, the `pivot` is already in its rightful sorted place. No elements are moved; simply advance `marker = pivot`.
> 3. **Case 2 — Out of Order (Relocation Required):** If `value <= marker.element()`, the `pivot` must be relocated leftward:
>    * Initialize `walk = marker`.
>    * Walk backward while `walk != L.first()` and `L.before(walk).element() > value` by updating `walk = L.before(walk)`.
>    * Once `walk` reaches the leftmost item greater than `value`, remove the pivot via `L.delete(pivot)` and reinsert its value right before `walk` via `L.add_before(walk, value)`.
>    * *(Note: `marker` does not need to be reassigned in the `else` branch because deleting `pivot` and reinserting it earlier automatically leaves `marker` adjacent to the next unsorted element).*

---

## 3. Python Implementation

```python
def insertion_sort(L):
    """Sort PositionalList of comparable elements into nondecreasing order."""
    if len(L) > 1:                          # otherwise, no need to sort it
        marker = L.first()
        while marker != L.last():
            pivot = L.after(marker)         # next item to place
            value = pivot.element()
            if value > marker.element():    # pivot is already sorted
                marker = pivot              # pivot becomes new marker
            else:                           # must relocate pivot
                walk = marker               # find leftmost item greater than value
                while walk != L.first() and L.before(walk).element() > value:
                    walk = L.before(walk)
                L.delete(pivot)
                L.add_before(walk, value)   # reinsert value before walk
```



---
# ~={red}References=~

_Data Structures and Algorithms in Python (Chapter 7: Linked Lists, Section 7.4)_ (p. 277–284)