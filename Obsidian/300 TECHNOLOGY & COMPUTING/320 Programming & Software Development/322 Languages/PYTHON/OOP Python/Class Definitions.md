Date: 2026-08-12
Tags: [[OOP]], [[Programming language]], [[Python]]

---

# Class Definitions

A class serves as the primary mechanism for abstraction in object-oriented programming. Every piece of data in Python is an instance of a class. A class acts as a blueprint for instances, defining behaviors through methods and state through attributes.

> [!info] Definitions & Properties
> A class defines the structure and behavior of objects. Methods represent member functions common to all instances. Attributes represent fields, instance variables, or data members that store state for individual instances. The self identifier references the specific instance executing a method.

---

## 1. Class Implementation & Encapsulation

Instance variables maintain state across method calls. Syntactically, `self` identifies the specific instance upon which a method is invoked. Python binds the target instance automatically to the parameter `self` during invocation.

> [!warning] Encapsulation Convention
> A single leading underscore prefix signals that an attribute or method is nonpublic. External code should not access nonpublic members directly. Accessors retrieve values, while mutators modify state safely.

| Member Type       | Purpose                                       | Method Example        |
| ----------------- | --------------------------------------------- | --------------------- |
| Constructor       | Initializes instance variables upon creation  | `__init__(self, ...)` |
| Accessor (Getter) | Retrieves instance state without modification | `get_balance(self)`   |
| Mutator (Setter)  | Modifies instance state with validation logic | `charge(self, price)` |

```python
class CreditCard:
    """A consumer credit card."""

    def __init__(self, customer, bank, acnt, limit):
        """Create a new credit card instance.

        The initial balance is zero.

        customer  the name of the customer (e.g., 'John Bowman')
        bank      the name of the bank (e.g., 'California Savings')
        acnt      the account identifier (e.g., '5391 0375 9387 5309')
        limit     credit limit (measured in dollars)
        """
        self._customer = customer
        self._bank = bank
        self._account = acnt
        self._limit = limit
        self._balance = 0

    def get_customer(self):
        """Return name of the customer."""
        return self._customer

    def get_bank(self):
        """Return the bank's name."""
        return self._bank

    def get_account(self):
        """Return the card identifying number (stored as a string)."""
        return self._account

    def get_limit(self):
        """Return current credit limit."""
        return self._limit

    def get_balance(self):
        """Return current balance."""
        return self._balance

    def charge(self, price):
        """Charge given price to the card, assuming sufficient credit limit.

        Return True if charge was processed; False if charge was denied.
        """
        if price + self._balance > self._limit:
            return False
        else:
            self._balance += price
            return True

    def make_payment(self, amount):
        """Process customer payment that reduces balance."""
        self._balance -= amount


if __name__ == '__main__':
    wallet = []
    wallet.append(CreditCard('John Bowman', 'California Savings', '5391 0375 9387 5309', 2500))
    wallet.append(CreditCard('John Bowman', 'California Federal', '3485 0399 3395 1954', 3500))
    wallet.append(CreditCard('John Bowman', 'California Finance', '5391 0375 9387 5309', 5000))

    for val in range(1, 17):
        wallet[0].charge(val)
        wallet[1].charge(2 * val)
        wallet[2].charge(3 * val)

    for c in range(3):
        print('Customer =', wallet[c].get_customer())
        print('Bank =', wallet[c].get_bank())
        print('Account =', wallet[c].get_account())
        print('Limit =', wallet[c].get_limit())
        print('Balance =', wallet[c].get_balance())
        while wallet[c].get_balance() > 100:
            wallet[c].make_payment(100)
            print('New balance =', wallet[c].get_balance())
        print()

```

---

## 2. Operator Overloading & Special Methods

Python built-in operators execute through special dunder methods. Defining special methods allows custom classes to utilize standard operator syntax, comparison expressions, and top-level functions (see Table 2.1).

> [!info] Operator Binding Mechanics
> Evaluating $a + b$ invokes the method `a.__add__(b)`. If the left operand does not support the operation, Python attempts the right-hand reverse variant `b.__radd__(a)`.

| Operation Category   | Common Syntax                                       | Primary Special Method                                        | Reverse / Alternate Form |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------- | ------------------------ |
| Binary Arithmetic    | $a + b$                                             | `a.__add__(b)`                                                | `b.__radd__(a)`          |
|                      | $a - b$                                             | `a.__sub__(b)`                                                | `b.__rsub__(a)`          |
|                      | $a \cdot b$                                         | `a.__mul__(b)`                                                | `b.__rmul__(a)`          |
|                      | $a / b$                                             | `a.__truediv__(b)`                                            | `b.__rtruediv__(a)`      |
|                      | $a // b$                                            | `a.__floordiv__(b)`                                           | `b.__rfloordiv__(a)`     |
|                      | $a \% b$                                            | `a.__mod__(b)`                                                | `b.__rmod__(a)`          |
|                      | $a ** b$                                            | `a.__pow__(b)`                                                | `b.__rpow__(a)`          |
| Augmented Assignment | $a += b$                                            | `a.__iadd__(b)`                                               | —                        |
| Unary Arithmetic     | $+a$, $-a$, $\sim a$                                | `a.__pos__()`, `a.__neg__()`, `a.__invert__()`                | —                        |
| Absolute Value       | $\text{abs}(a)$                                     | `a.__abs__()`                                                 | —                        |
| Comparisons          | $a < b$, $a \le b$                                  | `a.__lt__(b)`, `a.__le__(b)`                                  | —                        |
|                      | $a > b$, $a \ge b$                                  | `a.__gt__(b)`, `a.__ge__(b)`                                  | —                        |
|                      | $a == b$, $a \neq b$                                | `a.__eq__(b)`, `a.__ne__(b)`                                  | —                        |
| Container Operations | $v \in a$                                           | `a.__contains__(v)`                                           | —                        |
| Element Access       | $a[k]$, $a[k] = v$, $\text{del } a[k]$              | `a.__getitem__(k)`, `a.__setitem__(k, v)`, `a.__delitem__(k)` | —                        |
| Invocation           | $a(\text{arg1}, \dots)$                             | `a.__call__(arg1, ...)`                                       | —                        |
| Utility Functions    | $\text{len}(a)$, $\text{hash}(a)$                   | `a.__len__()`, `a.__hash__()`                                 | —                        |
| Iteration            | $\text{iter}(a)$, $\text{next}(a)$                  | `a.__iter__()`, `a.__next__()`                                | —                        |
| Conversions          | $\text{bool}(a)$, $\text{str}(a)$, $\text{repr}(a)$ | `a.__bool__()`, `a.__str__()`, `a.__repr__()`                 | —                        |

> [!note] Implied Default Behaviors
> Python provides fallbacks when special methods are omitted. Evaluating truth value falls back to checking length if boolean conversion is missing. Iteration falls back to zero-based indexing using element access methods. Equivalence checks default to object identity.

---

## 3. Multidimensional Vector Class

A custom spatial vector illustrates operator overloading and sequence methods. Vector addition requires element-wise summation across equal dimensions:

$$\mathbf{u} + \mathbf{v} = \langle u_0 + v_0, \, u_1 + v_1, \, \dots, \, u_{d-1} + v_{d-1} \rangle$$

> [!info] Polymorphism
> Polymorphism allows a method to process any argument type that adheres to the expected interface. Element addition executes successfully provided the right-hand operand supports length and index access protocols.

```python
class Vector:
    """Represent a vector in a multidimensional space."""

    def __init__(self, d):
        """Create d-dimensional vector of zeros."""
        self._coords = [0] * d

    def __len__(self):
        """Return the dimension of the vector."""
        return len(self._coords)

    def __getitem__(self, j):
        """Return jth coordinate of vector."""
        return self._coords[j]

    def __setitem__(self, j, val):
        """Set jth coordinate of vector to given value."""
        self._coords[j] = val

    def __add__(self, other):
        """Return sum of two vectors."""
        if len(self) != len(other):
            raise ValueError('dimensions must agree')
        result = Vector(len(self))
        for j in range(len(self)):
            result[j] = self[j] + other[j]
        return result

    def __eq__(self, other):
        """Return True if vector has same coordinates as other."""
        return self._coords == other._coords

    def __ne__(self, other):
        """Return True if vector differs from other."""
        return not self == other

    def __str__(self):
        """Produce string representation of vector."""
        return '<' + str(self._coords)[1:-1] + '>'

```


---

## 4. Iterators

An iterator tracks state during collection traversal. It implements method `__next__` to return sequential elements and raises `StopIteration` upon sequence exhaustion.

```python
class SequenceIterator:
    """An iterator for any of Python's sequence types."""

    def __init__(self, sequence):
        """Create an iterator for the given sequence."""
        self._seq = sequence
        self._k = -1

    def __next__(self):
        """Return the next element, or else raise StopIteration error."""
        self._k += 1
        if self._k < len(self._seq):
            return self._seq[self._k]
        else:
            raise StopIteration()

    def __iter__(self):
        """By convention, an iterator must return itself as an iterator."""
        return self

```

---

## 5. Lazy Evaluation & Custom Range Class

The `range` type uses lazy evaluation. It calculates values on demand instead of allocating memory for entire number sequences.

> [!info] Definitions & Properties
> Lazy evaluation defers value computation until explicitly requested. Memory usage remains constant regardless of sequence magnitude $n$.

The total entry count $n$ for range parameters $(\text{start}, \text{stop}, \text{step})$ is calculated as:

$$n = \max\left(0, \, \left\lfloor \frac{\text{stop} - \text{start} + \text{step} - 1}{\text{step}} \right\rfloor\right)$$

```python
class Range:
    """A class that mimics the built-in range class."""

    def __init__(self, start, stop=None, step=1):
        """Initialize a Range instance.

        Semantics is similar to built-in range class.
        """
        if step == 0:
            raise ValueError('step cannot be 0')

        if stop is None:
            start, stop = 0, start

        self._length = max(0, (stop - start + step - 1) // step)
        self._start = start
        self._step = step

    def __len__(self):
        """Return number of entries in the range."""
        return self._length

    def __getitem__(self, k):
        """Return entry at index k (using standard interpretation if negative)."""
        if k < 0:
            k += len(self)

        if not 0 <= k < self._length:
            raise IndexError('index out of range')

        return self._start + k * self._step

```


---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 69)