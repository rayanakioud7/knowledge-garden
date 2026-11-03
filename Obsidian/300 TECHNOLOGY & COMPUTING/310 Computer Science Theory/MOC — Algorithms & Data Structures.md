---
type: moc
tags:
- moc
---

# 🧮 MOC — Algorithms & Data Structures

> [!INFO] Navigation Hub
> This Map of Content indexes **310 Computer Science Theory** (20 notes). The active library is `311 Algorithms & Data Structures` — four tracks: algorithm analysis, array-based sequences, recursion, and stacks/queues/deques — based on *Goodrich, Data Structures and Algorithms in Python*.

---

## Overview

- 📝 [[Discovering Errors & Debugging]] — Debugging methodology, error categories, practical tactics

## 311 Algorithms & Data Structures

### Algorithm Analysis

- 📝 [[Asymptotic Analysis and Big-Oh]] — Big-Oh/Omega/Theta formalism, defining functions
- 📝 [[Comparative Analysis]] — Growth-rate tables, hardware speedup limits, tractability
- 📝 [[Examples of Algorithm Analysis]] — Worked analyses (maximum element, prefix averages, element uniqueness)
- 📝 [[Experimental Studies & Growth Rates]] — Empirical timing, data fitting, limitations
- 📝 [[Simple Justification Techniques]] — Counterexamples, contraposition, induction for algorithm proofs
- 📝 [[The Seven Functions Used in Algorithm Analysis]] — Constant, log, linear, $n\log n$, quadratic, cubic, exponential

### Array-Based Sequences

- 📝 [[01. Low-Level & Referential Arrays]] — Memory layout, contiguous vs. referential arrays
- 📝 [[02. Dynamic Arrays & Amortized Analysis]] — Capacity doubling, amortized $O(1)$ append
- 📝 [[03. Python Sequence Operations & Complexity]] — list/tuple/str cost tables
- 📝 [[04. Array Applications & Insertion Sort]] — Array use cases + first sorting algorithm
- 📝 [[05. Multidimensional Arrays]] — Nested lists, row-major patterns

### Recursion

- 📝 [[01. Recursion Fundamentals & Examples]] — Factorial, English ruler, binary search
- 📝 [[02. Analyzing Recursive Algorithms]] — Recurrence equations and solving them
- 📝 [[03. Recursion Pitfalls & Stack Limits]] — Infinite recursion, Python recursion limit
- 📝 [[04. Recursion Patterns (Linear, Binary, Multiple)]] — The three recursion shapes
- 📝 [[05. Recursive Design & Tail Call Optimization]] — Design method and tail-call idea

### Stacks, Queues & Deques

- 📝 [[Stacks]] — LIFO semantics, array implementation, parentheses matching
- 📝 [[Queues]] — FIFO semantics, circular array implementation
- 📝 [[Double-Ended Queues]] — Deque API and adapters

---

## 🚧 Empty Divisions (planned)

- 🚧 312 Automata & Formal Languages — folder ready, no notes yet (starter content exists in [[Langages et Automates]], FR)
- 🚧 314 Computability Theory — folder ready, no notes yet
- 🚧 315 Cryptography — folder ready, no notes yet (foundations in [[Groups]] — 112)

> [!TIP] Cross-Domain Links
> - Recursion analysis ([[02. Analyzing Recursive Algorithms]]) is applied mathematical induction — see [[Mathematical Induction]] and [[Simple Justification Techniques]].
> - Array complexity tables connect to the [[MOC — Python|Python Primer track]] and [[03. Python Sequence Operations & Complexity]].
> - Stacks/queues are the data structures behind [[Double-Ended Queues|BFS/DFS]] traversals in [[Graphes]] (FR, discrete math).
> - Big-Oh meets limits: [[Asymptotic Analysis and Big-Oh]] parallels [[Limits at Infinity; Horizontal and Vertical Asymptotes]] (113).
> - The missing reference PDF *Data Structures and Algorithms in Python* (Goodrich) is the source of these notes — see [[Vault Consistency Audit]].

## 🗺️ Related MOCs

- [[MOC — Vault Index]] · [[MOC — Computer Science & Programming]]
- [[MOC — Programming & Software Development]] — the code side
- [[MOC — Applied Mathematics]] — discrete math used here (graphs, lattices)
