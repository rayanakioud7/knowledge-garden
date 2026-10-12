Date: 2026-08-31
Tags:  [[Programming language]], [[Python]], [[Algorithm]], [[Data Structure]], [[Mathematics]]

---

# Simple Justification Techniques

> [!info] Definitions & Properties
> Mathematical justification establishes the correctness and running time bounds of algorithms through formal proof. Primary proof techniques include counterexamples, contrapositive logic, proof by contradiction, mathematical induction, and loop invariants.

---

## 1. Proof by Example and Counterexample

To justify an existence claim, produce a single concrete example that satisfies the property. To disprove a universal claim, produce a single invalid instance, known as a counterexample.

| Claim Type             | Logical Form                   | Justification Strategy                                       |
| ---------------------- | ------------------------------ | ------------------------------------------------------------ |
| **Existence**          | $\exists x \in S : P(x)$       | Produce one specific element $x$ satisfying $P(x)$.          |
| **Universal Disproof** | $\neg(\forall x \in S : P(x))$ | Produce one **counterexample** $x \in S$ where $P(x)$ fails. |

> [!note] Example 3.17 (Disproving a Universal Claim)
> Claim: Every number of the form $2^i - 1$ is prime for integer $i > 1$.
> Disproof: For $i = 4$, $2^4 - 1 = 15 = 3 \cdot 5$, which is composite. The value $i = 4$ serves as a counterexample.

---

## 2. Negation Techniques: Contrapositive and Contradiction

Negation techniques prove statements by evaluating their logical inverses or showing that falsehood leads to an impossibility.

| Technique | Logical Premise | Proof Structure |
| --- | --- | --- |
| **Contrapositive** | $(p \implies q) \iff (\neg q \implies \neg p)$ | Prove that the negation of conclusion $q$ implies the negation of hypothesis $p$. |
| **Contradiction** | $q \text{ is true} \iff (\neg q \implies \text{False})$ | Assume statement $q$ is false ($\neg q$) and derive a logical impossibility. |

> [!info] DeMorgan's Laws
> DeMorgan's laws define rules for negating compound logical expressions:
> * $\neg(p \lor q) \iff \neg p \land \neg q$
> * $\neg(p \land q) \iff \neg p \lor \neg q$
> 
> 

### Proof by Contrapositive (Example 3.18)

**Claim:** Let $a, b \in \mathbb{Z}$. If $ab$ is even, then $a$ is even or $b$ is even.

**Contrapositive Statement:** If $a$ is odd and $b$ is odd, then $ab$ is odd.

**Proof:** Let $a = 2j + 1$ and $b = 2k + 1$ for integers $j, k \in \mathbb{Z}$.

$$ab = (2j + 1)(2k + 1) = 4jk + 2j + 2k + 1 = 2(2jk + j + k) + 1$$

Because $2jk + j + k$ is an integer, $ab$ is odd.

### Proof by Contradiction (Example 3.19)

**Claim:** Let $a, b \in \mathbb{Z}$. If $ab$ is odd, then $a$ is odd and $b$ is odd.

**Proof:** Assume $ab$ is odd. To derive a contradiction, suppose $a$ is even or $b$ is even. Without loss of generality, assume $a$ is even ($a = 2j$ for $j \in \mathbb{Z}$).

$$ab = (2j)b = 2(jb)$$

This equation implies $ab$ is even, contradicting the premise that $ab$ is odd. Therefore, $a$ and $b$ must both be odd.

---

## 3. [[Mathematical Induction|Mathematical Induction]]

Mathematical induction proves that a statement $q(n)$ is true for all integers $n \ge 1$.

| Induction Phase    | Objective                      | Execution                                                                                |
| ------------------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| **Base Case**      | Establish starting point       | Prove $q(n)$ holds for $n = 1$ (or initial range $n \le k$).                             |
| **Inductive Step** | Prove sequence of implications | Assume $q(j)$ is true for all $j < n$ (inductive hypothesis), then prove $q(n)$ is true. |

### Fibonacci Growth Bound (Proposition 3.20)

**Claim:** For the Fibonacci function $F(1) = 1, F(2) = 2$, and $F(n) = F(n-2) + F(n-1)$ for $n > 2$ (see Section 1.8), $F(n) < 2^n$.

* **Base Cases ($n \le 2$):**
* $F(1) = 1 < 2^1 = 2$
* $F(2) = 2 < 2^2 = 4$


* **Inductive Step ($n > 2$):** Assume $F(n') < 2^{n'}$ for all $n' < n$.

$$F(n) = F(n-2) + F(n-1) < 2^{n-2} + 2^{n-1} < 2^{n-1} + 2^{n-1} = 2 \cdot 2^{n-1} = 2^n$$

### Summation Identity (Proposition 3.21 / Proposition 3.3)

**Claim:** $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$ for $n \ge 1$.

* **Base Case ($n = 1$):** $\sum_{i=1}^{1} i = 1 = \frac{1(1+1)}{2} = 1$.
* **Inductive Step ($n \ge 2$):** Assume $\sum_{i=1}^{n-1} i = \frac{(n-1)n}{2}$.

$$\sum_{i=1}^{n} i = n + \sum_{i=1}^{n-1} i = n + \frac{(n-1)n}{2} = \frac{2n + n^2 - n}{2} = \frac{n^2 + n}{2} = \frac{n(n+1)}{2}$$

---

## 4. Loop Invariants

A loop invariant establishes loop correctness by defining an inductive property $\mathcal{L}$ across loop iterations.

| Invariant Stage                      | Property       | Condition                                                                                     |
| ------------------------------------ | -------------- | --------------------------------------------------------------------------------------------- |
| **Initialization ($\mathcal{L}_0$)** | Base claim     | Holds before the first loop iteration executes.                                               |
| **Maintenance ($\mathcal{L}_j$)**    | Inductive step | If $\mathcal{L}_{j-1}$ holds before iteration $j$, $\mathcal{L}_j$ holds after iteration $j$. |
| **Termination ($\mathcal{L}_k$)**    | Final proof    | State $\mathcal{L}_k$ upon loop termination guarantees algorithm correctness.                 |

### Sequential Search Verification

Code Fragment 3.9 implements sequential search to find the first index of `val` in sequence `S`.

```python
def find(S, val):
    """Return index j such that S[j] == val, or -1 if no such element."""
    n = len(S)
    j = 0
    while j < n:
        if S[j] == val:
            return j
        j += 1
    return -1

```

> [!note] Loop Invariant Statement $\mathcal{L}_j$
> At the beginning of iteration $j$ of the `while` loop, target value $val$ is not equal to any of the first $j$ elements of sequence $S$ ($S[0 \dots j-1]$).

* **Initialization ($\mathcal{L}_0$):** At $j = 0$, $S[0 \dots -1]$ contains no elements. Statement $\mathcal{L}_0$ holds vacuously.
* **Maintenance ($\mathcal{L}_j$):** Iteration $j$ evaluates $S[j] == val$.
* If $S[j] == val$, the algorithm returns index $j$, which is correct.
* If $S[j] \neq val$, index $j$ increments to $j + 1$. Because $val \neq S[j]$ and $val$ is not in $S[0 \dots j-1]$, $val$ is not in $S[0 \dots j]$, establishing $\mathcal{L}_{j+1}$.


* **Termination ($\mathcal{L}_n$):** If the loop terminates without returning, $j = n$. Invariant $\mathcal{L}_n$ confirms $val$ is absent from $S[0 \dots n-1]$. The function correctly returns $-1$.

---
# ~={red}References=~
[[Data_Structures_and_Algorithms_in_Python_Michael_T_Goodrich_z_library.pdf]](p, 137)