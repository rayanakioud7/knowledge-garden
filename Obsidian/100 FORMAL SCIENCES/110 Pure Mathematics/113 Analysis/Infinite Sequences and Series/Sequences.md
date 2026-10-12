Date: 2026-09-22
Tags: [[Mathematics]], [[Limits]], [[Analysis]]

---



### 1. Definitions and Notation

> [!info] Definition of a Sequence
> A sequence can be thought of as a list of numbers written in a definite order: $(a_1, a_2, a_3, \dots, a_n, \dots$). 
> The number $(a_1)$ is called the first term, $(a_2$) is the second term, and in general $(a_n$) is the $(n$)th term. We deal exclusively with infinite sequences, and so each term $(a_n$) will have a successor $(a_{n+1}$).
> The sequence $(\{a_1, a_2, a_3, \dots\}$) is also denoted by $(\{a_n\}$) or $(\{a_n\}_{n=1}^\infty$).

> [!info] Limit of a Sequence
> A sequence $(\{a_n\}$) has the limit $(L$) and we write:
> 
$$\lim_{n \to \infty} a_n = L \quad \text{or} \quad a_n \to L \text{ as } n \to \infty$$
> if we can make the terms $a_n$ as close to $L$ as we like by taking $n$ sufficiently large.
> If $\lim_{n \to \infty} a_n$ exists, we say the sequence **converges** (or is convergent). Otherwise, we say the sequence **diverges** (or is divergent).
> 
> 

> [!NOTE] Graphs of Sequences
> ![[Pasted image 20260922225339.png]]

---

### 2. Theorems for Calculating Limits

> [!info] Connecting Functions and Sequences (Theorem 3)
> If $\lim_{x \to \infty} f(x) = L$ and $f(n) = a_n$ when $n$ is an integer, then $\lim_{n \to \infty} a_n = L$.
> This theorem allows us to use L'Hospital's Rule on sequences by applying it to the related continuous function of a real variable.
> 
> 

> [!info] Squeeze Theorem for Sequences
> If $a_n \le b_n \le c_n$ for $n \ge n_0$ and $\lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = L$, then $\lim_{n \to \infty} b_n = L$.
> 
> 

> [!info] Absolute Value Theorem (Theorem 6)
> If $\lim_{n \to \infty} |a_n| = 0$, then $\lim_{n \to \infty} a_n = 0$.
> 
> 

> [!info] Continuous Function Theorem (Theorem 7)
> If $\lim_{n \to \infty} a_n = L$ and the function $f$ is continuous at $L$, then:
$$\lim_{n \to \infty} f(a_n) = f(L)$$

---

### 3. Special Sequences

> [!info] The Sequence $\{r^n\}$
> The sequence $\{r^n\}$ is convergent if $-1 < r \le 1$ and divergent for all other values of $r$.
> 
> 
$$\boxed{ \lim_{n \to \infty} r^n = \begin{cases} 0 & \text{if } -1 < r < 1 \\ 1 & \text{if } r = 1 \end{cases} }$$

> [!NOTE] Graphs of the Sequence $a_n = r^n$
> ![[Pasted image 20260922225434.png]]

---

### 4. Monotonic and Bounded Sequences

> [!info] Monotonic Sequences
> A sequence $\{a_n\}$ is called **increasing** if $a_n < a_{n+1}$ for all $n \ge 1$, that is, $a_1 < a_2 < a_3 < \cdots$.
> It is called **decreasing** if $a_n > a_{n+1}$ for all $n \ge 1$.
> A sequence is **monotonic** if it is either increasing or decreasing.
> 
> 

> [!info] Bounded Sequences
> A sequence $\{a_n\}$ is **bounded above** if there is a number $M$ such that $a_n \le M$ for all $n \ge 1$.
> It is **bounded below** if there is a number $m$ such that $m \le a_n$ for all $n \ge 1$.
> If it is bounded above and below, then $\{a_n\}$ is a **bounded sequence**.
> 
> 

> [!info] Monotonic Sequence Theorem
> Every bounded, monotonic sequence is **convergent**.
> 
> (The proof of this theorem is based on the Completeness Axiom for the set of real numbers, which states that every nonempty set of real numbers with an upper bound has a least upper bound).
> 
> 

---

### Examples

> [!example] Example 4: Limit of a Rational Sequence
> **Problem:** Find $\lim_{n \to \infty} \frac{n}{n+1}$.
> 
> 
> **Solution:**
> The method is similar to the one used for functions: Divide numerator and denominator by the highest power of $n$ that occurs in the denominator and then use the Limit Laws.
> 
> 
$$\lim_{n \to \infty} \frac{n}{n+1} = \lim_{n \to \infty} \frac{1}{1 + \frac{1}{n}} = \frac{\lim 1}{\lim 1 + \lim \frac{1}{n}} = \frac{1}{1 + 0} = 1$$

> [!example] Example 6: Using L'Hospital's Rule
> **Problem:** Calculate $\lim_{n \to \infty} \frac{\ln n}{n}$.
> 
> 
> **Solution:**
> Notice that both numerator and denominator approach infinity as $n \to \infty$. We can't apply L'Hospital's Rule directly because it applies not to sequences but to functions of a real variable. However, we can apply L'Hospital's Rule to the related function $f(x) = (\ln x)/x$ and obtain:
> 
> 
$$\lim_{x \to \infty} \frac{\ln x}{x} = \lim_{x \to \infty} \frac{1/x}{1} = 0$$
> Therefore, by Theorem 3, we have $\lim_{n \to \infty} \frac{\ln n}{n} = 0$.
> 
> 

> [!example] Example 14: Using the Monotonic Sequence Theorem
> **Problem:** Investigate the sequence $\{a_n\}$ defined by the recurrence relation $a_1 = 2$ and $a_{n+1} = \frac{1}{2}(a_n + 6)$ for $n = 1, 2, 3, \dots$.
> 
> 
> **Solution:**
> We begin by computing the first several terms:
> $a_1 = 2$, $a_2 = 4$, $a_3 = 5$, $a_4 = 5.5$, $a_5 = 5.75$, etc.
> These initial terms suggest that the sequence is increasing and the terms are approaching $6$.
> 
> 
> **Step 1: Prove the sequence is increasing.**
> We use mathematical induction to show that $a_{n+1} > a_n$ for all $n \ge 1$.
> *Base Case:* True for $n=1$ because $a_2 = 4 > a_1 = 2$.
> *Inductive Step:* Assume it is true for $n=k$, so $a_{k+1} > a_k$.
> Then $a_{k+1} + 6 > a_k + 6 \implies \frac{1}{2}(a_{k+1} + 6) > \frac{1}{2}(a_k + 6)$.
> Thus, $a_{k+2} > a_{k+1}$. By induction, the sequence is increasing.
> 
> 
> **Step 2: Prove the sequence is bounded.**
> We verify that $\{a_n\}$ is bounded by showing that $a_n < 6$ for all $n$.
> *Base Case:* $a_1 = 2 < 6$.
> *Inductive Step:* Assume $a_k < 6$.
> Then $a_k + 6 < 12 \implies \frac{1}{2}(a_k + 6) < \frac{1}{2}(12) = 6$.
> Thus, $a_{k+1} < 6$. By induction, the sequence is bounded above by $6$.
> 
> 
> **Step 3: Find the Limit.**
> Since the sequence $\{a_n\}$ is increasing and bounded, Theorem 12 guarantees that it has a limit, say $L$.
> We can use the given recurrence relation to write:
> 
> 
$$\lim_{n \to \infty} a_{n+1} = \lim_{n \to \infty} \frac{1}{2}(a_n + 6) = \frac{1}{2}\left(\lim_{n \to \infty} a_n + 6\right)$$
> Since $a_n \to L$, it follows that $a_{n+1} \to L$ too (as $n \to \infty$, $n + 1 \to \infty$ also). So we have:
> 
> 
$$L = \frac{1}{2}(L + 6)$$
> Solving this equation for $L$, we get $L = 6$, as predicted.
> 
> 

---


> [!info] Definitions
> A sequence $u_n$ is **upper bounded** by a real number $M$ if $u_n \le M$ for all $n$.
> A sequence $u_n$ is **lower bounded** by a real number $m$ if $u_n \ge m$ for all $n$.

Mathematical induction is the standard tool for proving bounds on recursive sequences (where $u_{n+1}$ depends on $u_n$).

### The 4-Step Induction Blueprint

1. **Base Case (Initialization):** Prove the inequality holds for the very first term (usually $n=0$ or $n=1$).
2. **Inductive Hypothesis (Assumption):** Assume the inequality holds for some arbitrary integer $k \ge 0$.
3. **Inductive Step (Propagation):** Use the assumption from step 2 to logically build your way to the next term, proving the inequality holds for $k+1$.
4. **Conclusion:** State that by the principle of mathematical induction, the inequality holds for all $n$.

---

### Example 1: Proving an Upper Bound

Let a sequence be defined by $u_0 = 1$ and $u_{n+1} = \sqrt{2 + u_n}$.
**Goal:** Prove that the sequence is bounded above by $2$ (i.e., $u_n < 2$ for all $n \ge 0$).

* **Step 1: Base Case**
For $n = 0$, $u_0 = 1$. Since $1 < 2$, the base case holds.
* **Step 2: Inductive Hypothesis**
Assume that for some integer $k \ge 0$, we have $u_k < 2$.
* **Step 3: Inductive Step**
We need to prove that $u_{k+1} < 2$.
Starting from our hypothesis:

$$u_k < 2$$

Add $2$ to both sides:

$$2 + u_k < 4$$

Take the square root of both sides (valid since the square root function is strictly increasing):

$$\sqrt{2 + u_k} < \sqrt{4}$$

Substitute the definition of the sequence and simplify the right side:

$$u_{k+1} < 2$$

The property holds for $k+1$.

* **Step 4: Conclusion**
By mathematical induction, $u_n < 2$ for all $n \ge 0$. Therefore, $2$ is an upper bound.

---

### Example 2: Proving a Lower Bound

Let a sequence be defined by $v_0 = 4$ and $v_{n+1} = 2v_n - 3$.
**Goal:** Prove that the sequence is bounded below by $3$ (i.e., $v_n \ge 3$ for all $n \ge 0$).

* **Step 1: Base Case**
For $n = 0$, $v_0 = 4$. Since $4 \ge 3$, the base case holds.
* **Step 2: Inductive Hypothesis**
Assume that for some integer $k \ge 0$, we have $v_k \ge 3$.
* **Step 3: Inductive Step**
We need to prove that $v_{k+1} \ge 3$.
Starting from our hypothesis:

$$v_k \ge 3$$

Multiply both sides by $2$:

$$2v_k \ge 6$$

Subtract $3$ from both sides:

$$2v_k - 3 \ge 6 - 3$$

Substitute the definition of the sequence and simplify the right side:

$$v_{k+1} \ge 3$$

The property holds for $k+1$.

* **Step 4: Conclusion**
By mathematical induction, $v_n \ge 3$ for all $n \ge 0$. Therefore, $3$ is a lower bound.

---

> [!warning] Pro Tip for Complex Sequences
> If the sequence involves fractions, like $w_{n+1} = \frac{3w_n + 2}{w_n + 4}$, building the inequality side-by-side often fails because the direction of the inequality can flip when multiplying or dividing.
> Instead of building the formula from the hypothesis, study the sign of the difference. To prove $w_{n+1} \le M$, calculate the expression for $w_{n+1} - M$, factor it, and prove the result is $\le 0$ using your inductive hypothesis.


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 727)