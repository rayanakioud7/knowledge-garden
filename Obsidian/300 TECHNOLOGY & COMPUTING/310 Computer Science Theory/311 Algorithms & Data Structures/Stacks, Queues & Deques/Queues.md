Date: 2026-10-07
Tags: [[Programming language]], [[Python]], [[Algorithm]], [[Data Structure]], [[Array]], [[OOP]]

---


> [!info] Definitions & Properties
> A queue is a linear collection of elements managed under the **first-in, first-out (FIFO)** principle. Elements enter at the back (rear) and are removed from the front; the element residing in the queue the longest is always processed first. Common applications include operating system print buffers, web server request pools, customer support call centers, and breadth-first search traversals.
> 
> 

> [!NOTE] Figure 6.4
> ![[Pasted image 20261008003320.png]]
> 
> 

---

## 1. The Queue Abstract Data Type (ADT)

The queue ADT specifies two fundamental update operations and three auxiliary accessor methods:

| Method         | Behavior                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| `Q.enqueue(e)` | Inserts element `e` at the back of queue `Q`.                                                               |
| `Q.dequeue()`  | Removes and returns the element at the front of queue `Q`; raises an error if `Q` is empty.                 |
| `Q.first()`    | Returns a reference to the front element of queue `Q` without removing it; raises an error if `Q` is empty. |
| `Q.is_empty()` | Returns `True` if queue `Q` contains no elements, `False` otherwise.                                        |
| `len(Q)`       | Returns the number of elements currently stored in queue `Q`.                                               |


### Queue Operation Trace (Example 6.4)

| Operation      | Return Value | Queue Contents ($\text{front} \leftarrow Q \leftarrow \text{back}$) |
| -------------- | ------------ | ------------------------------------------------------------------- |
| `Q.enqueue(5)` | —            | `[5]`<br>                                                           |
| `Q.enqueue(3)` | —            | `[5, 3]`<br>                                                        |
| `len(Q)`       | `2`          | `[5, 3]`<br>                                                        |
| `Q.dequeue()`  | `5`          | `[3]`<br>                                                           |
| `Q.is_empty()` | `False`      | `[3]`<br>                                                           |
| `Q.dequeue()`  | `3`          | `[]`<br>                                                            |
| `Q.is_empty()` | `True`       | `[]`<br>                                                            |
| `Q.dequeue()`  | `"error"`    | `[]`<br>                                                            |
| `Q.enqueue(7)` | —            | `[7]`<br>                                                           |
| `Q.enqueue(9)` | —            | `[7, 9]`<br>                                                        |
| `Q.first()`    | `7`          | `[7, 9]`<br>                                                        |
| `Q.enqueue(4)` | —            | `[7, 9, 4]`<br>                                                     |
| `len(Q)`       | `3`          | `[7, 9, 4]`<br>                                                     |
| `Q.dequeue()`  | `7`          | `[9, 4]`<br>                                                        |

---

## 2. Array-Based Implementations & Flawed Approaches

Adapting a Python list to implement a queue naively introduces severe performance bottlenecks:

### Flaw 1: The Linear Shift Trap

* Using `L.append(e)` for enqueue and `L.pop(0)` for dequeue causes `pop(0)` to shift all remaining $n - 1$ elements one cell to the left.


* Results in an unacceptable worst-case running time of $\Theta(n)$ per dequeue operation.



### Flaw 2: The Rightward Drift Memory Leak

* Setting the dequeued slot to `None` and advancing an explicit front pointer `f` achieves $O(1)$ time per dequeue.


* However, the underlying array continues to expand indefinitely to the right, consuming $O(m)$ memory space where $m$ is the total historical number of enqueued items, even if the queue currently contains only a few active elements.



> [!NOTE] Figure 6.5
> ![[Pasted image 20261008003531.png]]
> 
> 

---

## 3. Circular Array Representation

To maintain both $O(1)$ time and $O(n)$ proportional memory, the queue is modeled as a circular buffer of fixed capacity $N$, where the indices wrap around to 0 upon reaching the array boundary.

> [!NOTE] Figure 6.6
>![[Pasted image 20261008003555.png]]
> 
> 

### Circular Pointer Arithmetic

Given current front index $f$, current element count $\text{size}$, and total buffer capacity $N = \text{len}(\text{data})$:

$$\text{Next Front Index (Dequeue):} \quad f_{\text{new}} = (f + 1) \pmod N$$

$$\text{Next Available Index (Enqueue):} \quad \text{avail} = (f + \text{size}) \pmod N$$

---

## 4. Python Implementation (`ArrayQueue`)

The `ArrayQueue` class tracks three instance variables:

* `_data`: An underlying fixed-length list instance.


* `_size`: The current number of elements in the queue.


* `_front`: The array index of the current front element.



```python
class Empty(Exception):
    """Error attempting to access an element from an empty container."""
    pass


class ArrayQueue:
    """FIFO queue implementation using a Python list as underlying storage."""
    DEFAULT_CAPACITY = 10          # moderate capacity for all new queues

    def __init__(self):
        """Create an empty queue."""
        self._data = [None] * ArrayQueue.DEFAULT_CAPACITY
        self._size = 0
        self._front = 0

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
        return self._data[self._front]

    def dequeue(self):
        """Remove and return the first element of the queue (i.e., FIFO).

        Raise Empty exception if the queue is empty.
        """
        if self.is_empty():
            raise Empty('Queue is empty')
        answer = self._data[self._front]
        self._data[self._front] = None               # help garbage collection
        self._front = (self._front + 1) % len(self._data)
        self._size -= 1
        
        # shrink the underlying array if occupancy falls below 25%
        if 0 < self._size < len(self._data) // 4:
            self._resize(len(self._data) // 2)
            
        return answer

    def enqueue(self, e):
        """Add an element to the back of queue."""
        if self._size == len(self._data):
            self._resize(2 * len(self._data))        # double the array size
        avail = (self._front + self._size) % len(self._data)
        self._data[avail] = e
        self._size += 1

    def _resize(self, cap):                          # cap >= len(self)
        """Resize to a new list of capacity >= len(self)."""
        old = self._data                             # keep track of existing list
        self._data = [None] * cap                    # allocate list with new capacity
        walk = self._front
        for k in range(self._size):                  # only consider existing elements
            self._data[k] = old[walk]                # intentionally shift indices
            walk = (1 + walk) % len(old)             # use old size as modulus
        self._front = 0                              # front has been realigned

```

---

## 5. Resizing and Realignment Mechanics

When expanding the buffer via `_resize(2 * len(self._data))`, elements cannot simply be copied to their existing indices because circular modulo arithmetic depends directly on array length.

> [!NOTE] Figure 6.7
> ![[Pasted image 20261008003634.png]]
> 
> 

### Realignment Rule

* The elements are copied sequentially into the new array starting from destination index 0 up to $\text{size} - 1$.


* The source pointer advances using the modulus of the **old** list length: `walk = (1 + walk) % len(old)`.


* `self._front` is reset to 0 in the expanded array.



> [!warning] Memory Shrinking Policy
> To prevent an inactive queue that previously handled large traffic from holding excess memory, the array halves its capacity when `0 < _size < len(_data) // 4`. Shrinking at one-fourth capacity prevents thrashing (rapid oscillation between doubling and halving) and maintains an amortized $O(1)$ bound.
> 
> 

---

## 6. Algorithmic Complexity

### Table 6.3: Performance of Array-Based Queue Implementation

![[Pasted image 20261008003650.png|614]]

*(Asterisk $*$ indicates an amortized running time bound. Total space usage is strictly bounded by $O(n)$.)*

---
# ~={red}References=~
- [[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 239)