Date: 2026-08-26
Tags: [[Programming language]], [[Python]], [[Algorithm]], [[Data Structure]]

---

# Algorithm Analysis

> [!info] Definitions & Properties
> Algorithm analysis evaluates the efficiency of an algorithm in terms of execution time and memory usage as a function of input size $n$. A primitive operation is a basic low-level computation executed in constant time.

---

## 1. Experimental Studies

Section 3.1 demonstrates measuring elapsed wall-clock time using Python's `time` module to record execution duration for test inputs.

```python
from time import time

start_time = time()
# run algorithm
end_time = time()
elapsed = end_time - start_time

```

> [!NOTE] Figure 3.1
> ![[Pasted image 20260826183109.png|center]]

> [!warning] Limitations of Experimental Analysis
> Experimental measurements depend heavily on specific hardware, CPU load, and software environments, making direct comparisons unreliable across different systems.

| Limitation | Description |
| --- | --- |
| **Environment Dependence** | Running times vary across different hardware platforms and software environments. |
| **Limited Input Scope** | Experiments evaluate only a small subset of inputs, potentially omitting critical edge cases. |
| **Implementation Obligation** | Algorithms must be fully coded and executable before experimental measurement can occur. |

---

## 2. Theoretical Analysis Framework

Section 3.1.1 establishes an analytical framework to evaluate algorithm efficiency independently of execution hardware or implementation details.

### Goals of Theoretical Analysis

* Evaluate relative efficiency independently of hardware and software environments.
* Analyze high-level algorithm descriptions or pseudocode without full implementation.
* Account for all possible valid inputs.

### Primitive Operations

Primitive operations correspond to low-level instructions executed in constant time. The number of primitive operations executed $t$ is proportional to the overall running time of the algorithm.

* Assigning an identifier to an object.
* Determining the object associated with an identifier.
* Performing an arithmetic operation (e.g., addition, multiplication).
* Comparing two numbers.
* Accessing a single element of a Python list by index.
* Calling a function (excluding operations within the function).
* Returning from a function.

### Worst-Case Input Focus

Algorithm performance varies across different inputs of identical size $n$. Algorithm efficiency is characterized by a function $f(n)$ measuring primitive operations executed on worst-case inputs.

> [!NOTE] Figure 3.2
> ![[Pasted image 20260826183142.png|center]]

> [!note] Worst-Case vs. Average-Case Analysis
> Worst-case analysis provides an absolute upper bound on running time for every input of size $n$. Average-case analysis requires defining complex probability distributions over inputs and is mathematically more difficult to compute.

---

## 3. Growth Rates of Fundamental Functions

Section 3.2.1 classifies algorithm efficiency using seven fundamental mathematical functions ordered by growth rate (see Table 3.1).

| Function Name   | Growth Rate Form    | Practical Viability                                         |
| --------------- | ------------------- | ----------------------------------------------------------- |
| **Constant**    | $1$                 | Ideal; running time is independent of input size $n$.       |
| **Logarithmic** | $\log n$            | Highly scalable; typical for logarithmic search algorithms. |
| **Linear**      | $n$                 | Optimal when inspecting every input item once.              |
| **$n$-log-$n$** | $n \log n$          | Standard for efficient comparison-based sorting.            |
| **Quadratic**   | $n^2$               | Practical only for small input sizes.                       |
| **Cubic**       | $n^3$               | Practical only for small input sizes.                       |
| **Exponential** | $a^n \quad (a > 1)$ | Infeasible for large inputs; computationally prohibitive.   |

> [!NOTE] Figure 3.4
>![[Pasted image 20260826183231.png|center]]

### Mathematical Notation: Floor and Ceiling

Calculations of operation counts $f(n)$ frequently yield non-integer values. Discrete operation counts are expressed using floor and ceiling functions:

* **Floor Function**: Identifies the largest integer less than or equal to $x$.

$$\lfloor x \rfloor$$


* **Ceiling Function**: Identifies the smallest integer greater than or equal to $x$.

$$\lceil x \rceil$$

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 111)