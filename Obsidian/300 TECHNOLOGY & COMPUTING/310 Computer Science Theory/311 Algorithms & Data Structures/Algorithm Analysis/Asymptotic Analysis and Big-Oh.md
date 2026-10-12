Date: 2026-08-26
Tags: [[Programming language]], [[Python]], [[Algorithm]], [[Data Structure]]

---

# Asymptotic Analysis

> [!info] Definitions & Properties
> Asymptotic analysis evaluates the growth rate of an algorithm's running time or space usage as input size $n$ grows toward infinity, disregarding constant factors and lower-order terms.

---

## 1. Big-Oh Notation

Let $f(n)$ and $g(n)$ be functions mapping positive integers to positive real numbers. Function $f(n)$ is $O(g(n))$ if there exists a real constant $c > 0$ and an integer constant $n_0 \ge 1$ such that:

$$f(n) \le c \cdot g(n), \quad \text{for } n \ge n_0$$

> [!NOTE] Figure 3.5
> ![[Pasted image 20260826202935.png|center]]

### Maximum Element Algorithm Example

Code Fragment 3.1 demonstrates a linear-time algorithm whose running time grows proportionally to input size $n$.

```python
def find_max(data):
    """Return the maximum element from a nonempty Python list."""
    biggest = data[0]
    for val in data:
        if val > biggest:
            biggest = val
    return biggest

```

> [!note] Proposition 3.7
> The algorithm `find_max` runs in $O(n)$ time. Initialization takes $c'$ primitive operations, and the loop body executes $n$ times with $c''$ operations per iteration. Total running time is bounded by $c' + c'' \cdot n \le c \cdot n$.

---

## 2. Characterizing Functions in Simplest Terms

When using Big-Oh notation:

* Omit constant factors (e.g., $3n \implies O(n)$).
* Omit lower-order terms (e.g., $n^2 + n \implies O(n^2)$).
* Specify the tightest valid upper bound (e.g., express $f(n) = n^3$ as $O(n^3)$ rather than $O(n^5)$).

> [!info] Proposition 3.9 (Polynomial Degree Bound)
> If $f(n)$ is a polynomial of degree $d$ defined as $f(n) = a_0 + a_1 n + \dots + a_d n^d$ with $a_d > 0$, then $f(n)$ is $O(n^d)$.

| Function $f(n)$ | Big-Oh Class | Constant $c$ | Threshold $n_0$ | Book Reference |
| --- | --- | --- | --- | --- |
| $8n + 5$ | $O(n)$ | $9$ | $5$ | Example 3.6 |
| $5n^4 + 3n^3 + 2n^2 + 4n + 1$ | $O(n^4)$ | $15$ | $1$ | Example 3.8 |
| $5n^2 + 3n \log n + 2n + 5$ | $O(n^2)$ | $15$ | $1$ | Example 3.10 |
| $20n^3 + 10n \log n + 5$ | $O(n^3)$ | $35$ | $1$ | Example 3.11 |
| $3\log n + 2$ | $O(\log n)$ | $5$ | $2$ | Example 3.12 |
| $2^{n+2}$ | $O(2^n)$ | $4$ | $1$ | Example 3.13 |
| $2n + 100 \log n$ | $O(n)$ | $102$ | $1$ | Example 3.14 |

---

## 3. Big-Omega and Big-Theta Notations

Asymptotic bounds are classified into upper, lower, and tight bounds:

| Notation | Mathematical Definition | Intuitive Meaning | Example |
| --- | --- | --- | --- |
| **Big-Oh** $O(g(n))$ | $f(n) \le c \cdot g(n) \text{ for } n \ge n_0$ | Asymptotic upper bound ($\le$) | $8n + 5$ is $O(n)$ |
| **Big-Omega** $\Omega(g(n))$ | $f(n) \ge c \cdot g(n) \text{ for } n \ge n_0$ | Asymptotic lower bound ($\ge$) | $3n \log n - 2n$ is $\Omega(n \log n)$ |
| **Big-Theta** $\Theta(g(n))$ | $c' \cdot g(n) \le f(n) \le c'' \cdot g(n) \text{ for } n \ge n_0$ | Asymptotic tight bound ($=$) | $3n \log n + 4n + 5\log n$ is $\Theta(n \log n)$ |

> [!info] Big-Omega Definition
> Function $f(n)$ is $\Omega(g(n))$ if $g(n)$ is $O(f(n))$, meaning there exist constants $c > 0$ and $n_0 \ge 1$ such that $f(n) \ge c \cdot g(n)$ for all $n \ge n_0$.

> [!info] Big-Theta Definition
> Function $f(n)$ is $\Theta(g(n))$ if $f(n)$ is $O(g(n))$ and $f(n)$ is $\Omega(g(n))$, meaning there exist constants $c' > 0, c'' > 0$ and $n_0 \ge 1$ such that $c' \cdot g(n) \le f(n) \le c'' \cdot g(n)$ for all $n \ge n_0$.

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 123)