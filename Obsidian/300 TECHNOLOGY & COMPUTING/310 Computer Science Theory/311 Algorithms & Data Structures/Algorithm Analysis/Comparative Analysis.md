Date: 2026-08-26
Tags: [[Programming language]], [[Python]], [[Algorithm]], [[Data Structure]]

---

# Comparative Analysis

> [!info] Definitions & Properties
> Comparative analysis evaluates the relative efficiency of algorithms by comparing their asymptotic growth rates. An algorithm with running time $O(n)$ is asymptotically superior to an algorithm with running time $O(n^2)$, even if constant factors make the $O(n^2)$ algorithm faster for small input sizes $n$.

---

## 1. Asymptotic Growth Ordering & Function Values

The seven fundamental functions used in algorithm analysis are ordered by increasing asymptotic growth rate as follows:

$$1 \quad < \quad \log n \quad < \quad n \quad < \quad n \log n \quad < \quad n^2 \quad < \quad n^3 \quad < \quad 2^n$$

### Table 3.2: Selected Values of Fundamental Functions

| $n$ | $\log n$ | $n$ | $n \log n$ | $n^2$ | $n^3$ | $2^n$ |
| --- | --- | --- | --- | --- | --- | --- |
| **8** | 3 | 8 | 24 | 64 | 512 | 256 |
| **16** | 4 | 16 | 64 | 256 | 4,096 | 65,536 |
| **32** | 5 | 32 | 160 | 1,024 | 32,768 | 4,294,967,296 |
| **64** | 6 | 64 | 384 | 4,096 | 262,144 | $1.84 \times 10^{19}$ |
| **128** | 7 | 128 | 896 | 16,384 | 2,097,152 | $3.40 \times 10^{38}$ |
| **256** | 8 | 256 | 2,048 | 65,536 | 16,777,216 | $1.15 \times 10^{77}$ |
| **512** | 9 | 512 | 4,608 | 262,144 | 134,217,728 | $1.34 \times 10^{154}$ |

---

## 2. Impact of Algorithm Design and Hardware Speedups

Asymptotically efficient algorithms scale substantially better than slower algorithms when given additional time or faster execution hardware.

### Table 3.3: Maximum Problem Size $n$ Solvable Within Time Constraints

| Running Time ($\mu s$) | 1 Second | 1 Minute | 1 Hour |
| --- | --- | --- | --- |
| $400n$ | 2,500 | 150,000 | 9,000,000 |
| $2n^2$ | 707 | 5,477 | 42,426 |
| $2^n$ | 19 | 25 | 31 |

### Table 3.4: Impact of a $256\times$ Hardware Speedup on Maximum Problem Size

| Running Time | New Maximum Problem Size (Given Previous Max $m$) |
| --- | --- |
| $400n$ | $256m$ |
| $2n^2$ | $16m$ |
| $2^n$ | $m + 8$ |

> [!note] Hardware Limitations vs. Algorithmic Efficiency
> Upgrading hardware by a factor of 256 increases the solvable problem size for a linear algorithm by $256\times$, for a quadratic algorithm by $16\times$, and for an exponential algorithm by merely an additive constant of $+8$.

---

## 3. Algorithmic Tractability & Practical Caveats

> [!warning] Pitfalls of Hidden Constant Factors
> Big-Oh notation hides constant factors and lower-order terms. An algorithm running in $10^{100}n$ time is technically $O(n)$, but an $O(n \log n)$ algorithm with running time $10 n \log n$ is vastly more practical for real-world input sizes.

### Polynomial vs. Exponential Time

A fundamental boundary in computer science separates tractable algorithms from intractable algorithms based on growth rate:

| Algorithm Class | Complexity Bound | Tractability Status | Operational Characteristics |
| --- | --- | --- | --- |
| **Polynomial Time** | $O(n^c) \quad (c \ge 1)$ | Tractable | Practical for reasonable constants and small exponents $c$. |
| **Exponential Time** | $O(b^n) \quad (b > 1)$ | Intractable | Computationally infeasible for all but the smallest input sizes. |

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 128)