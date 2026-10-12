Date: 2026-05-18
Tags: [[Mathematics]], [[Foundations]]

---


> [!info] Quick Reference — All Key Formulas from Chapter 1

---

### **Properties of Real Numbers** 

> see: [[Algebra Essentials]] 

| Property | Formula |
|----------|---------|
| Commutative (Add) | $a + b = b + a$ |
| Commutative (Mult) | $ab = ba$ |
| Associative (Add) | $(a + b) + c = a + (b + c)$ |
| Associative (Mult) | $(ab)c = a(bc)$ |
| Distributive | $a(b + c) = ab + ac$ |

---

### **Absolute Value** 

> see: [[Algebra Essentials]] 

$$
|a| = \begin{cases} 
a & \text{if } a \ge 0 \\
-a & \text{if } a < 0 
\end{cases}
\quad
|ab| = |a||b|
\quad
\left|\frac{a}{b}\right| = \frac{|a|}{|b|}
\quad
d(a,b) = |b - a|
$$

---

### **Exponents** 

> see: [[Algebra Essentials]] 

$$
a^m a^n = a^{m+n}
\quad
\frac{a^m}{a^n} = a^{m-n}
\quad
(a^m)^n = a^{mn}
\quad
(ab)^n = a^n b^n
\quad
\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}
$$

---

### **Radicals**

> see: [[N-th Roots and Rational Exponents]] 
$$
\sqrt[n]{a} = b \iff b^n = a
\quad
\sqrt[n]{ab} = \sqrt[n]{a} \sqrt[n]{b}
\quad
\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}
\quad
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}
\quad
a^{m/n} = (\sqrt[n]{a})^m = \sqrt[n]{a^m}
$$

*If $n$ odd: $\sqrt[n]{a^n} = a$; if $n$ even: $\sqrt[n]{a^n} = |a|$*

---

### **Special Product Formulas** 

> see: [[Polynomials]] 

- Difference of squares:  
  $(A + B)(A - B) = A^2 - B^2$

- Square of sum/difference:  
  $(A + B)^2 = A^2 + 2AB + B^2$  
  $(A - B)^2 = A^2 - 2AB + B^2$

- Cube of sum/difference:  
  $(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$  
  $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$

---

### **Special Factoring Formulas** 

> see: [[Polynomials]] 

- Difference of squares:  
  $A^2 - B^2 = (A + B)(A - B)$

- Perfect squares:  
  $A^2 + 2AB + B^2 = (A + B)^2$  
  $A^2 - 2AB + B^2 = (A - B)^2$

- Sum/difference of cubes:  
  $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$  
  $A^3 + B^3 = (A + B)(A^2 - AB + B^2)$

---

### **Rational Expressions** *(Section 1.4)*

> see: [[Rational expressions]]
- Cancel common factors:  
  $\frac{AC}{BC} = \frac{A}{B}$

- Multiply fractions:  
  $\frac{A}{B} \cdot \frac{C}{D} = \frac{AC}{BD}$

- Divide fractions:  
  $\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C}$

- Add fractions:  
  $\frac{A}{C} + \frac{B}{C} = \frac{A + B}{C}$  
  $\frac{A}{B} + \frac{C}{D} = \frac{AD + BC}{BD}$

---

### **Properties of Equality**

> see: [[Equations]] 

$$
A = B \iff A + C = B + C
\quad
A = B \iff CA = CB \quad (C \ne 0)
$$

---

### **Linear Equations** 

> see: [[Equations]] 

Form: $ax + b = 0$ → solution: $x = -\frac{b}{a}$

Zero-Product Property: If $AB = 0$, then $A = 0$ or $B = 0$

---

### **Completing the Square**

> see: [[Polynomials]] 

To complete square for $x^2 + bx$: add $\left(\frac{b}{2}\right)^2$

$$
x^2 + bx + \left(\frac{b}{2}\right)^2 = \left(x + \frac{b}{2}\right)^2
$$

---

### **Quadratic Formula** 

> see: [[Equations]] 

For $ax^2 + bx + c = 0$:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}, \quad D = b^2 - 4ac
$$

- $D > 0$: two real solutions  
- $D = 0$: one real solution  
- $D < 0$: two complex solutions

---

### **Complex Numbers** 

> see: [[Complex Numbers]] 

Form: $a + bi$, where $i = \sqrt{-1}$, $i^2 = -1$

Conjugate: $\overline{a + bi} = a - bi$

Multiply/divide using conjugates to eliminate imaginary denominator.

---

### **Inequalities** *(Section 1.8)*

> see: [[Interval Notation and Solving Inequalities]] 

- Adding same quantity:  
  $A < B \iff A + C < B + C$

- Multiplying by positive $C$:  
  $A < B \iff AC < BC$

- Multiplying by negative $C$: reverses inequality  
  $A < B \iff AC > BC$

---

### **Absolute-Value Inequalities** 

> see: [[Interval Notation and Solving Inequalities]] 

Assume $a > 0$:

| Inequality     | Equivalent Statement               | Solution Set                     |                         |
| :------------- | :--------------------------------- | :------------------------------- | ----------------------- |
| $\|u\| < a$    | $-a < u < a$                       | $(-a, a)$                        | $-a < u < a$            |
| $\|u\| \leq a$ | $-a \leq u \leq a$                 | $[-a, a]$                        | $-a \le u \le a$        |
| $\|u\| > a$    | $u < -a \;\text{or}\; u > a$       | $(-\infty, -a) \cup (a, \infty)$ | $u < -a$ or $u > a$     |
| $\|u\| \geq a$ | $u \leq -a \;\text{or}\; u \geq a$ | $(-\infty, -a] \cup [a, \infty)$ | $u \le -a$ or $u \ge a$ |

---

*This review consolidates all core formulas and properties from Chapter 1 for quick reference before moving to functions and graphs.*


---
# ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]]
- - [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]]