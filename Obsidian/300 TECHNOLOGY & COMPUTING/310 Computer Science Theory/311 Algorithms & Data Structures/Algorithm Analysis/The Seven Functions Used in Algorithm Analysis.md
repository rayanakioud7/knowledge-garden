Date: 2026-08-26
Tags: [[Mathematics]], [[Sequences and Summation Notation|Summation]], [[Algorithm]], [[Data Structure]], [[Functions]]

---

# The Seven Functions Used in Algorithm Analysis

> [!info] Definitions & Properties
> Algorithm analysis uses seven fundamental functions to characterize execution growth rates: Constant ($1$), Logarithmic ($\log n$), Linear ($n$), $n$-log-$n$ ($n \log n$), Quadratic ($n^2$), Cubic ($n^3$), and Exponential ($b^n$).

---

## 1. Summary of Fundamental Functions

The table below summarizes the seven primary functions used to measure algorithm running times.

| Function Class | Formula | Typical Algorithm Context |
| --- | --- | --- |
| **Constant** | $f(n) = c$ | Basic primitive operations (addition, variable assignment, comparison). |
| **Logarithmic** | $f(n) = \log_b n$ | Repeatedly dividing a problem or input in half (default base $b=2$). |
| **Linear** | $f(n) = n$ | Processing each of $n$ elements in an array or sequence. |
| **$n$-log-$n$** | $f(n) = n \log n$ | Comparison-based sorting algorithms (e.g., optimal sorting bounds). |
| **Quadratic** | $f(n) = n^2$ | Nested loops over an $n$-element container. |
| **Cubic** | $f(n) = n^3$ | Multi-level nested loops or 3D grid processing. |
| **Exponential** | $f(n) = b^n$ | Brute-force search over all possible combinations (default base $b=2$). |

---

## 2. Logarithm Rules and Identities

The logarithm function is defined as $x = \log_b n \iff b^x = n$ for base $b > 1$. By convention in computer science, $\log n = \log_2 n$.

> [!note] Ceiling Approximation
> For integer $n$, $\lceil \log_b n \rceil$ represents the number of times $n$ can be divided by $b$ before the result becomes $\le 1$.
> * $\lceil \log_3 27 \rceil = 3 \quad ((27/3)/3)/3 = 1$
> * $\lceil \log_4 64 \rceil = 3 \quad ((64/4)/4)/4 = 1$
> * $\lceil \log_2 12 \rceil = 4 \quad (((12/2)/2)/2)/2 = 0.75 \le 1$
> 
> 

### Proposition 3.1 (Logarithm Rules)

For real numbers $a > 0$, $b > 1$, $c > 0$, and $d > 1$:

$$\begin{aligned} \log_b(ac) &= \log_b a + \log_b c \\ \log_b(a/c) &= \log_b a - \log_b c \\ \log_b(a^c) &= c \log_b a \\ \log_b a &= \frac{\log_d a}{\log_d b} \\ b^{\log_d a} &= a^{\log_d b} \end{aligned}$$

### Base Conversion Formula

To calculate base-2 logarithms on standard base-10 calculators:

$$\log_2 n = \frac{\text{LOG } n}{\text{LOG } 2}$$

---

## 3. Polynomials & Arithmetic Summations

### General Polynomial Definition

A polynomial function of degree $d$ with coefficients $a_0, a_1, \dots, a_d$ ($a_d \neq 0$) is defined as:

$$f(n) = \sum_{i=0}^{d} a_i n^i = a_0 + a_1 n + a_2 n^2 + \dots + a_d n^d$$

### Proposition 3.3 (Arithmetic Progression Sum)

Nested loops where the inner loop step count increases by 1 each iteration result in an arithmetic summation:

$$1 + 2 + 3 + \dots + (n-1) + n = \sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

Evaluating $\frac{n(n+1)}{2} = \frac{n^2}{2} + \frac{n}{2}$ confirms a quadratic $O(n^2)$ growth rate.

> [!NOTE] Figure 3.3
> ![[Pasted image 20260826202532.png|center]]

---

## 4. Exponential Functions & Geometric Series

### Exponent Rules

For positive integers $a$, $b$, and $c$:

$$\begin{aligned} (b^a)^c &= b^{ac} \\ b^a b^c &= b^{a+c} \\ \frac{b^a}{b^c} &= b^{a-c} \end{aligned}$$

* **Fractional Exponents**: $b^{a/c} = \sqrt[c]{b^a}$
* **Negative Exponents**: $b^{-d} = \frac{1}{b^d}$

### Proposition 3.5 (Geometric Sums)

For integer $n \ge 0$ and real number $a > 0$ ($a \neq 1$):

$$\sum_{i=0}^{n} a^i = 1 + a + a^2 + \dots + a^n = \frac{a^{n+1} - 1}{a - 1}$$

For base $a = 2$, the sum of the first $n$ powers of 2 equals:

$$1 + 2 + 4 + 8 + \dots + 2^{n-1} = \sum_{i=0}^{n-1} 2^i = 2^n - 1$$

This value represents the largest integer representable in binary using $n$ bits.

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 120)