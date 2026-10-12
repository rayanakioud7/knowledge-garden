Date: 2026-07-05
Tags: [[Programming language]], [[OOP]], [[Python]]

---

# Object-Oriented Design Goals, Principles, and Patterns

## Core Concepts of Object-Oriented Programming

In the object-oriented paradigm, the main "actors" are **objects**.

*   **Object:** An instance of a class.
*   **Class:** A blueprint that defines the view of objects, specifying what data they hold and what actions they can perform.
*   **Instance Variables (Data Members):** The data contained within an object.
*   **Methods (Member Functions):** The actions or behaviors an object can execute.

---

## 2.1.1 Object-Oriented Design Goals

Software design aims to achieve three primary goals.

![[Pasted image 20260705020026.png|center]]

### 1. Robustness
Software must be correct and capable of handling errors.
*   **Correctness:** Produces the right output for anticipated inputs.
*   **Error Handling:** Recovers gracefully from unexpected inputs (e.g., negative prices).
*   **Safety:** Critical in life-critical applications (e.g., medical devices like the Therac-25).

### 2. Adaptability
Software must evolve over time to meet changing conditions.
*   **Evolvability:** The ability to modify the software easily.
*   **Portability:** The ability to run on different hardware or operating systems with minimal changes.

### 3. Reusability
Code should be usable as a component in different systems.
*   **Cost Efficiency:** High-quality software is expensive; reusing it offsets costs.
*   **Caution:** Reuse must be done carefully to avoid introducing errors from previous contexts (e.g., Therac-20 software reused in Therac-25).

---

## 2.1.2 Object-Oriented Design Principles

Three chief principles facilitate the goals above.

![[Pasted image 20260705020035.png|center]]

### 1. Modularity
Organizing a system into separate, well-defined functional units.
*   **Analogy:** A house is organized into electrical, plumbing, and structural modules, not a jumble of wires and pipes.
*   **Benefit:** Easier to test, debug, and reuse individual components.

### 2. Abstraction
Distilling a complicated system down to its fundamental parts.
*   **Abstract Data Types (ADTs):** A mathematical model specifying **what** operations a data structure supports, but not **how** it implements them.
*   **Public Interface:** The collective set of behaviors supported by an ADT.

> [!info] Duck Typing in Python
> Python uses "duck typing" to handle abstractions. It does not check data types at compile time. Instead, it assumes an object supports a behavior. If the object "walks like a duck and quacks like a duck," Python treats it as a duck. If the assumption fails, a run-time error occurs.

> [!info] Abstract Base Classes (ABC)
> Python supports formal abstractions via *Abstract Base Classes*. An ABC cannot be instantiated directly but defines methods that concrete subclasses must implement.

### 3. Encapsulation
Hiding the internal details of a component from the outside world.
*   **Freedom:** Programmers can change internal implementation without breaking code that depends on the component, as long as the public interface remains the same.
*   **Convention:** In Python, names starting with a single underscore (e.g., `_secret`) are assumed to be **nonpublic** and should not be relied upon by external code.

---

## 2.1.3 Design Patterns

A **design pattern** is a general template for solving a typical software design problem. It describes a solution that can be applied in many different situations.

### Components of a Pattern
1.  **Name:** Identifies the pattern.
2.  **Context:** Describes scenarios where the pattern applies.
3.  **Template:** Describes how to apply the pattern.
4.  **Result:** Analyzes what the pattern produces.

### Categories of Patterns

The book categorizes patterns into two groups: **Algorithm Design Patterns** and **Software Engineering Design Patterns**.

| Category | Pattern Name | Description / Context |
| :--- | :--- | :--- |
| **Algorithm Design** | **Recursion** | Solving problems by solving smaller instances of the same problem (Chapter 4). |
| | **Amortization** | Analyzing the average cost of operations over a sequence (Sections 5.3, 11.4). |
| | **Divide-and-Conquer** | Breaking a problem into subproblems, solving them, and combining results (Section 12.2.1). |
| | **Prune-and-Search** | Also known as decrease-and-conquer; eliminating parts of the search space (Section 12.7.1). |
| | **Brute Force** | Trying all possible solutions (Section 13.2.1). |
| | **Dynamic Programming** | Solving complex problems by breaking them into overlapping subproblems (Section 13.3). |
| | **Greedy Method** | Making the locally optimal choice at each stage (Sections 13.4.2, 14.6.2, 14.7). |
| **Software Engineering** | **Iterator** | Accessing elements of a collection sequentially (Sections 1.8, 2.3.4). |
| | **Adapter** | Converting the interface of a class into another interface clients expect (Section 6.1.2). |
| | **Position** | Abstracting the location of an element in a container (Sections 7.4, 8.1.2). |
| | **Composition** | Building complex objects from simpler ones (Sections 7.6.1, 9.2.1, 10.1.4). |
| | **Template Method** | Defining the skeleton of an algorithm in a superclass (Sections 2.4.3, 8.4.6, etc.). |
| | **Locator** | Storing the location of an element (Section 9.5.1). |
| | **Factory Method** | Defining an interface for creating an object (Section 11.2.1). |

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 57)