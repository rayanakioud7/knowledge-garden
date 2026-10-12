Date: 2026-08-13
Tags: [[OOP]], [[Programming language]], [[Python]]

---

# Inheritance

> [!info] Definitions & Properties
> Inheritance allows a new class to be defined using an existing class as its starting point. The existing class is the base class, parent class, or superclass. The newly defined class is the subclass or child class. Inheritance models an "is a" relationship between objects.

---

## 1. Mechanics of Inheritance

Subclasses differentiate themselves from superclasses through two primary mechanisms:

| Mechanism          | Description                           | Implementation                                          |
| ------------------ | ------------------------------------- | ------------------------------------------------------- |
| **Specialization** | Modifies existing superclass behavior | Overrides an existing method with a new implementation  |
| **Extension**      | Adds new capability to the subclass   | Defines brand new methods not present in the superclass |

---

## 2. Subclassing and Method Overriding

As demonstrated in Section 2.4.1, the `PredatoryCreditCard` class inherits from `CreditCard` to add fee assessments and interest compounding.

![[Pasted image 20260813214226.png]]

To convert an Annual Percentage Rate (APR) into a monthly multiplicative interest factor $r$, compute:

$$r = (1 + \text{APR})^{1/12}$$

For example, an APR of $0.0825$ yields $r = (1 + 0.0825)^{1/12} \approx 1.006628$, resulting in a monthly interest charge of $0.6628\%$.

```python
class PredatoryCreditCard(CreditCard):
    """An extension to CreditCard that compounds interest and fees."""

    def __init__(self, customer, bank, acnt, limit, apr):
        """Create a new predatory credit card instance.

        The initial balance is zero.

        customer  the name of the customer (e.g., 'John Bowman')
        bank      the name of the bank (e.g., 'California Savings')
        acnt      the account identifier (e.g., '5391 0375 9387 5309')
        limit     credit limit (measured in dollars)
        apr       annual percentage rate (e.g., 0.0825 for 8.25% APR)
        """
        super().__init__(customer, bank, acnt, limit)
        self._apr = apr

    def charge(self, price):
        """Charge given price to the card, assuming sufficient credit limit.

        Return True if charge was processed.
        Return False and assess $5 fee if charge is denied.
        """
        success = super().charge(price)
        if not success:
            self._balance += 5
        return success

    def process_month(self):
        """Assess monthly interest on outstanding balance."""
        if self._balance > 0:
            monthly_factor = pow(1 + self._apr, 1/12)
            self._balance *= monthly_factor

```

> [!note] Protected Members
> Subclasses directly access nonpublic data members like `self._balance`. A single leading underscore indicates a protected member intended for internal class hierarchies rather than public access.

---

## 3. Hierarchy of Numeric Progressions

Section 2.4.2 establishes a reusable class hierarchy for generating mathematical series based on a common base class.

![[Pasted image 20260813214329.png]]

| Progression Class       | Progression Rule          | Default Initial State   | Parameters               |
| ----------------------- | ------------------------- | ----------------------- | ------------------------ |
| `Progression`           | $x_k = x_{k-1} + 1$       | $0, 1, 2, 3, \dots$     | `start=0`                |
| `ArithmeticProgression` | $x_k = x_{k-1} + d$       | $0, d, 2d, 3d, \dots$   | `increment=1`, `start=0` |
| `GeometricProgression`  | $x_k = x_{k-1} \cdot b$   | $1, b, b^2, b^3, \dots$ | `base=2`, `start=1`      |
| `FibonacciProgression`  | $x_k = x_{k-1} + x_{k-2}$ | $0, 1, 1, 2, 3, \dots$  | `first=0`, `second=1`    |

### Base Progression Class

```python
class Progression:
    """Iterator producing a generic progression.

    Default iterator produces the whole numbers 0, 1, 2, ...
    """

    def __init__(self, start=0):
        """Initialize current to the first value of the progression."""
        self._current = start

    def _advance(self):
        """Update self._current to a new value.

        This should be overridden by a subclass to customize progression.

        By convention, if current is set to None, this designates the
        end of a finite progression.
        """
        self._current += 1

    def __next__(self):
        """Return the next element, or else raise StopIteration error."""
        if self._current is None:
            raise StopIteration()
        else:
            answer = self._current
            self._advance()
            return answer

    def __iter__(self):
        """By convention, an iterator must return itself as an iterator."""
        return self

    def print_progression(self, n):
        """Print next n values of the progression."""
        print(' '.join(str(next(self)) for j in range(n)))

```

### Specialized Subclasses

```python
class ArithmeticProgression(Progression):
    """Iterator producing an arithmetic progression."""

    def __init__(self, increment=1, start=0):
        """Create a new arithmetic progression.

        increment  the fixed constant to add to each term (default 1)
        start      the first term of the progression (default 0)
        """
        super().__init__(start)
        self._increment = increment

    def _advance(self):
        """Update current value by adding the fixed increment."""
        self._current += self._increment

```

```python
class GeometricProgression(Progression):
    """Iterator producing a geometric progression."""

    def __init__(self, base=2, start=1):
        """Create a new geometric progression.

        base   the fixed constant multiplied to each term (default 2)
        start  the first term of the progression (default 1)
        """
        super().__init__(start)
        self._base = base

    def _advance(self):
        """Update current value by multiplying it by the base value."""
        self._current *= self._base

```

```python
class FibonacciProgression(Progression):
    """Iterator producing a generalized Fibonacci progression."""

    def __init__(self, first=0, second=1):
        """Create a new fibonacci progression.

        first   the first term of the progression (default 0)
        second  the second term of the progression (default 1)
        """
        super().__init__(first)
        self._prev = second - first

    def _advance(self):
        """Update current value by taking sum of previous two."""
        self._prev, self._current = self._current, self._prev + self._current

```

### Execution & Output

```python
if __name__ == '__main__':
    print('Default progression:')
    Progression().print_progression(10)

    print('Arithmetic progression with increment 5:')
    ArithmeticProgression(5).print_progression(10)

    print('Arithmetic progression with increment 5 and start 2:')
    ArithmeticProgression(5, 2).print_progression(10)

    print('Geometric progression with default base:')
    GeometricProgression().print_progression(10)

    print('Geometric progression with base 3:')
    GeometricProgression(3).print_progression(10)

    print('Fibonacci progression with default start values:')
    FibonacciProgression().print_progression(10)

    print('Fibonacci progression with start values 4 and 6:')
    FibonacciProgression(4, 6).print_progression(10)

```

```text
Default progression:
0 1 2 3 4 5 6 7 8 9
Arithmetic progression with increment 5:
0 5 10 15 20 25 30 35 40 45
Arithmetic progression with increment 5 and start 2:
2 7 12 17 22 27 32 37 42 47
Geometric progression with default base:
1 2 4 8 16 32 64 128 256 512
Geometric progression with base 3:
1 3 9 27 81 243 729 2187 6561 19683
Fibonacci progression with default start values:
0 1 1 2 3 5 8 13 21 34
Fibonacci progression with start values 4 and 6:
4 6 10 16 26 42 68 110 178 288

```

---

## 4. Abstract Base Classes

Section 2.4.3 describes Abstract Base Classes (ABCs) as formal blueprints for class hierarchies that prevent direct instantiation.

> [!info] Definitions & Properties
> An Abstract Base Class (ABC) cannot be directly instantiated. It declares one or more abstract methods that concrete subclasses must override. A concrete class provides full implementations for all inherited abstract methods and can be instantiated.

> [!note] Template Method Pattern
> The Template Method Pattern provides concrete method implementations inside an ABC that rely on calls to abstract methods. Concrete behaviors become functional as soon as a subclass defines the required abstract behaviors.

| Sequence Method Type | Methods | Responsibilities |
| --- | --- | --- |
| **Abstract Methods** | `__len__`, `__getitem__` | Must be implemented by concrete subclasses |
| **Concrete Template Methods** | `__contains__`, `index`, `count` | Derived automatically from abstract methods |

```python
from abc import ABCMeta, abstractmethod

class Sequence(metaclass=ABCMeta):
    """Our own version of collections.Sequence abstract base class."""

    @abstractmethod
    def __len__(self):
        """Return the length of the sequence."""

    @abstractmethod
    def __getitem__(self, j):
        """Return the element at index j of the sequence."""

    def __contains__(self, val):
        """Return True if val found in the sequence; False otherwise."""
        for j in range(len(self)):
            if self[j] == val:
                return True
        return False

    def index(self, val):
        """Return leftmost index at which val is found (or raise ValueError)."""
        for j in range(len(self)):
            if self[j] == val:
                return j
        raise ValueError('value not in sequence')

    def count(self, val):
        """Return the number of elements equal to given value."""
        k = 0
        for j in range(len(self)):
            if self[j] == val:
                k += 1
        return k

```

> [!warning] Method Optimization in Subclasses
> Default template methods like `__contains__` perform sequential $O(n)$ searches. Subclasses should override inherited methods when domain-specific logic allows higher efficiency, such as $O(1)$ arithmetic checks in `Range` (Code Fragment 2.6).

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 82)