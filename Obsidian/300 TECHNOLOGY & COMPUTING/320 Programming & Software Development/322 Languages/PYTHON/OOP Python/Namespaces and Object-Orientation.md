Date: 2026-08-17
Tags: [[OOP]], [[Programming language]], [[Python]]

---

# Namespaces and Object-Orientation

A namespace is an abstraction that manages identifiers defined within a particular scope, mapping each name to its associated value. Functions, classes, and modules are first-class objects in Python, meaning the value associated with an identifier can be a function, class, or module.

![[Pasted image 20260820000230.png]]

---

## 1. Instance and Class Namespaces

> [!info] Definitions & Properties
> An instance namespace manages attributes specific to an individual object instance.
> A class namespace manages members shared by all instances of a class or invoked without reference to a specific instance.

| Namespace Type         | Storage Scope                     | Managed Content                              | Establishment Syntax                            | Example                           |
| ---------------------- | --------------------------------- | -------------------------------------------- | ----------------------------------------------- | --------------------------------- |
| **Instance Namespace** | Per individual object             | Attributes unique to that instance           | Qualified assignment (`self.attribute = value`) | `self._balance = 0`               |
| **Class Namespace**    | Shared across all class instances | Member functions, class data, nested classes | Unqualified assignment directly in class body   | `def make_payment(self, amount):` |

---

## 2. Class Data Members and Nested Classes

### Class Data Members

Class-level data members store shared values or constants across all instances, avoiding unnecessary memory allocation in individual instance namespaces.

```python
class PredatoryCreditCard(CreditCard):
    OVERLIMIT_FEE = 5  # class-level data member

    def charge(self, price):
        success = super().charge(price)
        if not success:
            self._balance += PredatoryCreditCard.OVERLIMIT_FEE
        return success

```

### Nested Classes

A class definition can be nested within the scope of an outer class to organize supporting structures (such as node classes in ~={blue}linked lists=~ or ~={blue}trees=~) and prevent name collisions. Nesting does not establish an inheritance relationship. Nested classes can be overridden by subclasses.

```python
class A:
    # outer class
    class B:
        # nested class
        pass

```

---

## 3. Memory Optimization with `__slots__`

By default, Python represents instance namespaces using internal `dict` instances. The `__slots__` declaration replaces instance dictionaries with a fixed sequence of variable names, reducing memory overhead for lightweight objects created in large numbers.

> [!warning] Inheritance Rules for `__slots__`
> Subclasses must explicitly declare `__slots__` to avoid creating instance dictionaries. The subclass `__slots__` declaration should only list newly introduced instance variable names.

```python
class CreditCard:
    __slots__ = '_customer', '_bank', '_account', '_balance', '_limit'


class PredatoryCreditCard(CreditCard):
    __slots__ = '_apr'  # only new instance variable introduced in subclass

```

---

## 4. Name Resolution and Dynamic Dispatch

### Name Resolution Algorithm

Evaluating member access syntax `obj.foo` causes the Python interpreter to search namespaces in the following order:

1. **Instance Namespace**: Search for identifier in `obj`'s instance namespace.
2. **Immediate Class Namespace**: Search the class namespace of `obj`'s class.
3. **Inheritance Hierarchy**: Search upward through superclass namespaces in order.
4. **Attribute Error**: Raise `AttributeError` if identifier is not found.

### Name Resolution Examples

Resolution sequence for instance `mycard` of class `PredatoryCreditCard` (derived from `CreditCard`):

| Expression                 | Search Result Location                | Resolved Member                     |
| -------------------------- | ------------------------------------- | ----------------------------------- |
| `mycard._balance`          | Instance namespace                    | `_balance` instance variable        |
| `mycard.process_month()`   | `PredatoryCreditCard` class namespace | `process_month` subclass method     |
| `mycard.make_payment(200)` | `CreditCard` superclass namespace     | Inherited `make_payment` method     |
| `mycard.charge(50)`        | `PredatoryCreditCard` class namespace | Overriding `charge` subclass method |

> [!info] Dynamic Dispatch
> Dynamic dispatch (or dynamic binding) determines at run-time which method implementation to call based on the actual type of the object invoked, contrasting with compile-time static dispatch.

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 92)