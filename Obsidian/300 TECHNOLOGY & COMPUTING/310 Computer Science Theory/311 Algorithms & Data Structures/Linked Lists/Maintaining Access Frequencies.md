---
type: note
date: '2026-10-28'
tags:
- note
---

Date: 2026-10-28
Tags:
  - "[[Data Structure]]"
  - "[[Linked Lists]]"
  - "[[Positional List ADT]]"
  - "[[Algorithm Analysis]]"

---

## Favorites List ADT

> [!info] Definition
> A **favorites list** stores elements and counts how often each element is accessed.

| Operation             | Purpose                                      |
| --------------------- | -------------------------------------------- |
| `access(e)`           | Add `e` if absent, then increment its count. |
| `remove(e)`           | Remove `e` if present.                       |
| `top(k)`              | Yield the `k` most-accessed elements.        |
| `len()`, `is_empty()` | Report size and emptiness.                   |

The implementation uses **composition**: a `FavoritesList` contains a `PositionalList` of internal `_Item` objects, each storing a value and its count.

## Strategy 1: Keep the List Sorted

Maintain elements in **non-increasing order** of access counts:

$$count(e_i) \geq count(e_{i+1})$$

On `access(e)`: find `e`, append it if absent, increment its count, then move it toward the front until the order is restored. This resembles one pass of **insertion sort**. Since the list is sorted, `top(k)` returns the first `k` entries.

> [!example] Example
> Before: `A(7) → B(4) → C(4) → D(1)`
>
> After `access(C)`, its count becomes `5`, so it moves before `B`:
>
> `A(7) → C(5) → B(4) → D(1)`

> [!warning] Tie handling
> Move an item only when its count is **strictly greater** than its predecessor's count. Equal counts do not require a move.

## Strategy 2: Move-to-Front (MTF)

> [!info] Locality of reference
> Recently accessed elements are often accessed again soon. **Move-to-front** exploits this by moving each accessed item to the beginning, regardless of its count.

MTF no longer keeps the list sorted by frequency. The position represents recency, not popularity. `FavoritesListMTF` can inherit from `FavoritesList` and override the movement and `top(k)` behavior.

### Cost trade-off

For the particular access sequence in the source—each of `n` elements is accessed `n` times in turn—the sorted-list approach has total cost:

$$n(1 + 2 + \cdots + n) = n\frac{n(n+1)}{2} = O(n^3)$$

With MTF, after an element's first access moves it to the front, its repeated accesses cost `O(1)`. The total for this sequence is therefore `O(n^2)`.

> [!warning] MTF is a heuristic
> It is not faster for every access sequence. Its benefit depends on locality of reference, and `top(k)` becomes more expensive because the list is not sorted by count.

To compute MTF's `top(k)`, copy the items to a temporary list, repeatedly find and remove the item with the largest count, and yield its value:

$$T_{top(k)}(n) = O(kn)$$

- Constant `k` (e.g. `top(10)`): `O(n)`.
- `k = \Theta(n)`: `O(n^2)`.
- Sorting a copy first costs `O(n \log n)`.

## Complexity Summary

| Operation   |             Sorted list |                                MTF list |
| ----------- | ----------------------: | --------------------------------------: |
| `access(e)` |       `O(n)` worst case |   `O(n)` search; `O(1)` move once found |
| `remove(e)` |           `O(n)` search |                           `O(n)` search |
| `top(k)`    |                  `O(k)` | `O(kn)` with repeated maximum selection |
| List order  | Decreasing access count |                     Recent access first |

## Python Code

The implementation below follows the chapter's design and uses the `PositionalList` ADT from the preceding section. That ADT must provide `first`, `after`, `before`, `add_first`, `add_last`, `add_before`, `delete`, and `len`.

```python
class FavoritesList:
    """Elements ordered from most frequently accessed to least."""

    class _Item:
        __slots__ = "_value", "_count"

        def __init__(self, value):
            self._value = value
            self._count = 0

    def __init__(self):
        self._data = PositionalList()  # stores _Item objects

    def __len__(self):
        return len(self._data)

    def is_empty(self):
        return len(self._data) == 0

    def _find_position(self, value):
        """Return the Position holding value, or None if absent."""
        walk = self._data.first()
        while walk is not None and walk.element()._value != value:
            walk = self._data.after(walk)
        return walk

    def _move_up(self, p):
        """Restore decreasing count order after an access."""
        if p != self._data.first():
            count = p.element()._count
            walk = self._data.before(p)
            if count > walk.element()._count:
                while walk != self._data.first():
                    before = self._data.before(walk)
                    if count <= before.element()._count:
                        break
                    walk = before
                self._data.add_before(walk, self._data.delete(p))

    def access(self, value):
        """Register an access, adding a new value if needed."""
        p = self._find_position(value)
        if p is None:
            p = self._data.add_last(self._Item(value))
        p.element()._count += 1
        self._move_up(p)

    def remove(self, value):
        """Remove value if it is present."""
        p = self._find_position(value)
        if p is not None:
            self._data.delete(p)

    def top(self, k):
        """Yield the k most-accessed values; requires 1 <= k <= len(self)."""
        if not 1 <= k <= len(self):
            raise ValueError("Illegal value for k")
        walk = self._data.first()
        for _ in range(k):
            item = walk.element()
            yield item._value
            walk = self._data.after(walk)


class FavoritesListMTF(FavoritesList):
    """Favorites list using the move-to-front heuristic."""

    def _move_up(self, p):
        if p != self._data.first():
            self._data.add_first(self._data.delete(p))

    def top(self, k):
        """Yield the k largest-count values without reordering the main list."""
        if not 1 <= k <= len(self):
            raise ValueError("Illegal value for k")

        # Copy item references; changes to this temporary list do not reorder data.
        temp = []
        walk = self._data.first()
        while walk is not None:
            temp.append(walk.element())
            walk = self._data.after(walk)

        for _ in range(k):
            best = max(temp, key=lambda item: item._count)
            yield best._value
            temp.remove(best)
```

> [!warning] Code dependency
> This code assumes the textbook's `PositionalList` ADT is already defined. The provided PDF excerpt does not include that class's implementation.

> [!abstract] Takeaway
> Use a **sorted list** when fast `top(k)` queries matter. Consider **MTF** when recent accesses predict near-future accesses. Choose based on the workload, not on one operation alone.

---
# ~={red}References=~
*“7.6 Case Study: Maintaining Access Frequencies,” Chapter 7: Linked Lists, pp. 286–290, source PDF provided. Author, edition, and year are not identified in the excerpt.*
