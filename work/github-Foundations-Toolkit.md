
# Foundations Toolkit

> A rigorous, ground-up implementation of the mathematical, algorithmic, and systems foundations required for Machine Learning Systems Engineering.

## Purpose

This repository is not a collection of homework assignments. It is a proof-of-work artifact. Every directory contains implementations built from scratch to satisfy the four-level **Mastery Standard**:

1. **Explain:** Articulate the concept without notes.
2. **Derive:** Derive the underlying mathematics by hand.
3. **Implement:** Rebuild the concept from first principles (no magic libraries).
4. **Engineer:** Test, benchmark, profile, and document the system.

## Architecture

```mermaid
graph TD
    A[foundations-toolkit] --> B(C Memory & Systems)
    A --> C(Data Structures & Algorithms)
    A --> D(Matrix & Linear Algebra)
    A --> E(Algorithms)
    A --> F(Benchmarks)

    B --> B1[Dynamic Array - malloc/realloc/free]
    B --> B2[K.N. King Exercises - Pointers & Structs]
    
    C --> C1[Goodrich DSA - Pure Python implementations]
    C --> C2[Neetcode Submissions]
    
    D --> D1[Matrix Class - Gaussian Elimination]
    D --> D2[Strang Linear Algebra implementations]

    style A fill:#2d333b,stroke:#768390,stroke-width:2px,color:#adbac7
    style B fill:#1f2428,stroke:#444c56,color:#adbac7
    style C fill:#1f2428,stroke:#444c56,color:#adbac7
    style D fill:#1f2428,stroke:#444c56,color:#adbac7
```

## Directory Structure

| Directory | Focus | Key Artifacts |
| :--- | :--- | :--- |
| `c_memory/` | Manual memory management, pointers, Stack vs. Heap. | Dynamic Array (Valgrind certified), K.N. King exercises. |
| `dsa/` | Data structures from scratch (Goodrich methodology). | Hash Maps, Trees, Dynamic Arrays in pure Python. |
| `matrix/` | Linear algebra, matrix operations, Gaussian elimination. | Pure Python Matrix class, NumPy memory stride comparisons. |
| `algorithms/` | Algorithmic problem solving and complexity analysis. | Sorting, searching, and amortized time complexity proofs. |
| `benchmarks/` | Empirical performance proofs. | Time complexity benchmarks (C vs. Python). |
| `tests/` | Unit and integration testing. | Test suites for core data structures. |

## Build & Reproducibility

Each sub-directory contains its own build instructions. For the C components, ensure you have `gcc` and `valgrind` installed on a Linux environment (tested on Fedora KDE).

```bash
# Example: Compiling and profiling the Dynamic Array
cd c_memory
gcc -g -Wall -Wextra -Werror main.c -o dynarray
valgrind --leak-check=full --show-leak-kinds=all ./dynarray
```

## 👤 Author

**Rayan Akioud**  
Engineering Student, ENSAM Casablanca (IAGI)  
*Target: ML Systems Engineer / AI Infrastructure Engineer*

