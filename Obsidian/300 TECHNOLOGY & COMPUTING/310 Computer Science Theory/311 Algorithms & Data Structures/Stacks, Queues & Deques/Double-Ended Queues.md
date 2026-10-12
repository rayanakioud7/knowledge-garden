Date: 2026-10-08
Tags: [[Programming language]], [[Python]], [[Algorithm]], [[Data Structure]], [[Array]], [[OOP]]

---

# Double-Ended Queues (Deques)

> [!info] Definitions & Properties
>  A double-ended queue, or **deque** (pronounced _"deck"_), is a linear sequence that supports element insertion and deletion at both endpoints (front and back). The deque ADT is a generalization of both the FIFO queue and LIFO stack abstractions.
> 
>   

## 1. The Deque Abstract Data Type (ADT)

The deque ADT defines symmetric update operations and accessors for both ends of the sequence.
  

| **Method**         | **Behavior**                                                                    |
| ------------------ | ------------------------------------------------------------------------------- |
| `D.add_first(e)`   | Inserts element `e` at the front of deque `D`.                                  |
| `D.add_last(e)`    | Inserts element `e` at the back of deque `D`.                                   |
| `D.delete_first()` | Removes and returns the first element of `D`; raises an error if empty.         |
| `D.delete_last()`  | Removes and returns the last element of `D`; raises an error if empty.          |
| `D.first()`        | Returns the first element of `D` without removing it; raises an error if empty. |
| `D.last()`         | Returns the last element of `D` without removing it; raises an error if empty.  |
| `D.is_empty()`     | Returns `True` if deque `D` contains no elements, `False` otherwise.            |
| `len(D)`           | Returns the number of elements currently stored in deque `D`.                   |

### Deque Operation Trace (Example 6.5)

| **Operation**     | **Return Value** | **Deque Contents (front↔back)** |
| ----------------- | ---------------- | ------------------------------- |
| `D.add_last(5)`   | —                | `[5]`                           |
| `D.add_first(3)`  | —                | `[3, 5]`                        |
| `D.add_first(7)`  | —                | `[7, 3, 5]`                     |
| `D.first()`       | `7`              | `[7, 3, 5]`                     |
| `D.delete_last()` | `5`              | `[7, 3]`                        |
| `len(D)`          | `2`              | `[7, 3]`                        |
| `D.delete_last()` | `3`              | `[7]`                           |
| `D.delete_last()` | `7`              | `[]`                            |
| `D.add_first(6)`  | —                | `[6]`                           |
| `D.last()`        | `6`              | `[6]`                           |
| `D.add_first(8)`  | —                | `[8, 6]`                        |
| `D.is_empty()`    | `False`          | `[8, 6]`                        |
| `D.last()`        | `6`              | `[8, 6]`                        |

## 2. Implementing a Deque with a Circular Array

An array-based deque maintains the same three internal state variables as `ArrayQueue`: `_data`, `_size`, and `_front`.

### Modular Index Arithmetic

Given array capacity $N = \text{len}(\text{\_data})$
  
- **Last Element Index (`last`)**:    
    $$\text{back} = (\text{\_front} + \text{\_size} - 1) \pmod N$$  
    
- **Prepend Operation (`add_first`)**: To insert at the front, shift the front index cyclically to the left:
    $$\text{\_front}_{\text{new}} = (\text{\_front} - 1) \pmod N$$
    
- **Append Operation (`add_last`)**: Computes the next open slot at the rear:

    $$\text{avail} = (\text{\_front} + \text{\_size}) \pmod N$$
    
- **Delete Front (`delete_first`)**: Advances `_front` cyclically to the right:
	
$$\text{\_front}_{\text{new}} = (\text{\_front} + 1) \pmod N$$
    

```python
class ArrayDeque:
    """Double-ended queue implementation using a circular array."""
    DEFAULT_CAPACITY = 10

    def __init__(self):
        self._data = [None] * ArrayDeque.DEFAULT_CAPACITY
        self._size = 0
        self._front = 0

    def __len__(self):
        return self._size

    def is_empty(self):
        return self._size == 0

    def first(self):
        if self.is_empty():
            raise Empty('Deque is empty')
        return self._data[self._front]

    def last(self):
        if self.is_empty():
            raise Empty('Deque is empty')
        back = (self._front + self._size - 1) % len(self._data)
        return self._data[back]

    def add_first(self, e):
        if self._size == len(self._data):
            self._resize(2 * len(self._data))
        self._front = (self._front - 1) % len(self._data)
        self._data[self._front] = e
        self._size += 1

    def add_last(self, e):
        if self._size == len(self._data):
            self._resize(2 * len(self._data))
        avail = (self._front + self._size) % len(self._data)
        self._data[avail] = e
        self._size += 1

    def delete_first(self):
        if self.is_empty():
            raise Empty('Deque is empty')
        answer = self._data[self._front]
        self._data[self._front] = None
        self._front = (self._front + 1) % len(self._data)
        self._size -= 1
        return answer

    def delete_last(self):
        if self.is_empty():
            raise Empty('Deque is empty')
        back = (self._front + self._size - 1) % len(self._data)
        answer = self._data[back]
        self._data[back] = None
        self._size -= 1
        return answer

    def _resize(self, cap):
        old = self._data
        self._data = [None] * cap
        walk = self._front
        for k in range(self._size):
            self._data[k] = old[walk]
            walk = (1 + walk) % len(old)
        self._front = 0
```

> [!note] Complexity
>  All core accessors (`first`, `last`, `is_empty`, `len`) run in $O(1)$ worst-case time. The mutating operations (`add_first`, `add_last`, `delete_first`, `delete_last`) execute in $O(1)$ amortized time, subject to geometric array resizing.
> 
>   

## 3. Python's `collections.deque`

The Python standard library provides an optimized deque implementation via `collections.deque`.

  

### Table 6.4: Comparison of Deque ADT vs. `collections.deque`

| **Our Deque ADT**  | **collections.deque** | **Description**                                |
| ------------------ | --------------------- | ---------------------------------------------- |
| `len(D)`           | `len(D)`              | Number of elements.                            |
| `D.add_first(e)`   | `D.appendleft(e)`     | Add element to beginning.                      |
| `D.add_last(e)`    | `D.append(e)`         | Add element to end.                            |
| `D.delete_first()` | `D.popleft()`         | Remove and return from beginning.              |
| `D.delete_last()`  | `D.pop()`             | Remove and return from end.                    |
| `D.first()`        | `D[0]`                | Access first element.                          |
| `D.last()`         | `D[-1]`               | Access last element.                           |
| —                  | `D[j]`                | Access arbitrary entry by index.               |
| —                  | `D[j] = val`          | Modify arbitrary entry by index.               |
| —                  | `D.clear()`           | Clear all contents.                            |
| —                  | `D.rotate(k)`         | Circularly shift elements rightward $k$ steps. |
| —                  | `D.remove(e)`         | Remove first matching element.                 |
| —                  | `D.count(e)`          | Count occurrences of element `e`.              |

### Implementation Characteristics

- **Underlying Architecture**: `collections.deque` uses a hybrid data structure composed of a doubly linked list of fixed-length blocks (circular arrays).
    
      
    
- **Performance Profile**: Guarantees strict $O(1)$ worst-case time for insertions and deletions at either end (`append`, `appendleft`, `pop`, `popleft`). Random access near the middle (`D[j]`) degrades to $O(n)$ time because the underlying linked nodes must be traversed.
    
      
    
- **Bounded Capacity (`maxlen`)**: Supports an optional `maxlen` parameter. When a bounded deque is full, adding an item to one end silently evicts an item from the opposing end without raising an overflow error.

---
# ~={red}References=~
- [[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 247)