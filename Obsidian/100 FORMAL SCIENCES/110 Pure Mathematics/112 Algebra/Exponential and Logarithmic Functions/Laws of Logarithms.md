Date: 2026-05-19
Tags: [[Mathematics]], [[Algebra]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]], [[100 FORMAL SCIENCES/110 Pure Mathematics/112 Algebra/Exponential and Logarithmic Functions/Logarithmic Functions]]

---

## Laws of Logarithms

Let $a$ be a positive number with $a \ne 1$. Let $A, B$, and $C$ be real numbers with $A > 0$ and $B > 0$.

> [!info] Laws of Logarithms
> 
> 1. $\log_a(AB) = \log_a A + \log_a B$
>     
> 2. $\log_a\left(\frac{A}{B}\right) = \log_a A - \log_a B$
>     
> 3. $\log_a(A^C) = C\log_a A$
>     

### Proofs

#### Law 1

$$\begin{aligned} \log_a(AB) &= \log_a(a^u a^v) \qquad &\leftarrow \text{let } \log_a A = u \implies a^u = A \text{ and } \log_a B = v \implies a^v = B \\ &= \log_a(a^{u+v}) \\ &= u + v \\ &= \log_a A + \log_a B \quad \blacksquare \end{aligned}$$

#### Law 2

$$\begin{aligned} \log_a A &= \log_a\left[\left(\frac{A}{B}\right)B\right] \\ &= \log_a\left(\frac{A}{B}\right) + \log_a B \qquad &\leftarrow \text{by Law 1} \\ \log_a\left(\frac{A}{B}\right) &= \log_a A - \log_a B \quad \blacksquare \end{aligned}$$

#### Law 3

$$\begin{aligned} \log_a(A^C) &= \log_a((a^u)^C) \qquad &\leftarrow \text{let } \log_a A = u \implies a^u = A \\ &= \log_a(a^{uC}) \\ &= uC \\ &= C\log_a A \quad \blacksquare \end{aligned}$$

---

> [!example] Example 1: Using the Laws of Logarithms to Evaluate Expressions
> 
> Evaluate each expression.
> 
> **(a)**
> 
> $$\begin{aligned} \log_4 2 + \log_4 32 &= \log_4(2 \cdot 32) \qquad &\leftarrow \text{Law 1} \\ &= \log_4 64 \\ &= 3 \qquad &\leftarrow 64 = 4^3 \end{aligned}$$
> 
> **(b)**
> 
> $$\begin{aligned} \log_2 80 - \log_2 5 &= \log_2\left(\frac{80}{5}\right) \qquad &\leftarrow \text{Law 2} \\ &= \log_2 16 \\ &= 4 \qquad &\leftarrow 16 = 2^4 \end{aligned}$$
> 
> **(c)**
> 
> $$\begin{aligned} -\frac{1}{3} \log 1000 &= \log 1000^{-1/3} \qquad &\leftarrow \text{Law 3} \\ &= \log \frac{1}{10} \qquad &\leftarrow \text{property of negative exponents} \\ &= -1 \qquad &\leftarrow \frac{1}{10} = 10^{-1} \end{aligned}$$


> [!example] Example 3: Combining Logarithmic Expressions
> 
> Use the Laws of Logarithms to combine each expression into a single logarithm.
> 
> **(a)**
> 
> $$\begin{aligned} 3 \log x + \frac{1}{2} \log(x + 1) &= \log x^3 + \log(x + 1)^{1/2} \qquad &\leftarrow \text{Law 3} \\ &= \log(x^3(x + 1)^{1/2}) \qquad &\leftarrow \text{Law 1} \end{aligned}$$
> 
> **(b)**
> 
> $$\begin{aligned} 3 \ln s + \frac{1}{2} \ln t - 4 \ln(t^2 + 1) &= \ln s^3 + \ln t^{1/2} - \ln(t^2 + 1)^4 \qquad &\leftarrow \text{Law 3} \\ &= \ln(s^3 t^{1/2}) - \ln(t^2 + 1)^4 \qquad &\leftarrow \text{Law 1} \\ &= \ln \frac{s^3 \sqrt{t}}{(t^2 + 1)^4} \qquad &\leftarrow \text{Law 2} \end{aligned}$$

---

## Change of Base Formula

> [!info] Change of Base Formula
> 
> $$\log_b x = \frac{\log_a x}{\log_a b} \qquad a > 0, \ b > 0$$

Alternative formulation shows $\log_b x$ is a constant multiple of $\log_a x$:

$$\log_b x = \frac{1}{\log_a b} \cdot \log_a x$$

### Proof

$$\begin{aligned} y &= \log_b x \qquad &\leftarrow \text{Given} \\ b^y &= x \qquad &\leftarrow \text{exponential form} \\ \log_a b^y &= \log_a x \qquad &\leftarrow \text{take } \log_a \text{ of each side} \\ y \log_a b &= \log_a x \qquad &\leftarrow \text{Law 3} \\ y &= \frac{\log_a x}{\log_a b} \qquad &\leftarrow \text{divide by } \log_a b \quad \blacksquare \end{aligned}$$

Setting $x = a$ yields the specific case:

$$\log_b a = \frac{1}{\log_a b}$$

> [!example] Example 5: Evaluating Logarithms with the Change of Base Formula
> 
> Use the Change of Base Formula to express each logarithm in terms of **common** or **natural logarithms**, then evaluate to five decimal places.
> 
> **(a)** $\log_8 5$
> 
> $$\log_8 5 = \frac{\log_{10} 5}{\log_{10} 8} \approx 0.77398$$
> 
> **(b)** $\log_9 20$
> 
> $$\log_9 20 = \frac{\ln 20}{\ln 9} \approx 1.36342$$

> [!example] Example 6: Using the Change of Base Formula
> 
> Let $f(x) = \log_6 x$ and $g(x) = (\ln x)/(\ln 6)$. Explain why $f(x) = g(x)$.
> 
> $$f(x) = \log_6 x = \frac{\ln x}{\ln 6} = g(x) \qquad \leftarrow \text{by Change of Base formula}$$
> 


---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 362)