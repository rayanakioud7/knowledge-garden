Date: 2026-05-20
Tags: [[Mathematics]], [[Algebra]], [[100 FORMAL SCIENCES/110 Pure Mathematics/112 Algebra/Exponential and Logarithmic Functions/Logarithmic Functions]], [[Exponential Functions]]

---

## Exponential Equations

An **exponential equation** is an equation in which the variable occurs in the exponent. One-to-one properties of exponential functions allow for direct solving:

$$a^x = a^y \implies x = y$$

> [!example] Example 1: Exponential Equations
> 
> Solve each exponential equation.
> 
> **(a)**
> 
> $$\begin{aligned} 5^x &= 125 \qquad &\leftarrow \text{Given equation} \\ 5^x &= 5^3 \qquad &\leftarrow 125 = 5^3 \\ x &= 3 \qquad &\leftarrow \text{one-to-one property} \end{aligned}$$
> 
> **(b)**
> 
> $$\begin{aligned} 5^{2x} &= 5^{x+1} \qquad &\leftarrow \text{Given equation} \\ 2x &= x + 1 \qquad &\leftarrow \text{one-to-one property} \\ x &= 1 \qquad &\leftarrow \text{solve for } x \end{aligned}$$

---

> [!info] Guidelines for Solving Exponential Equations
> 
> 1. Isolate the exponential expression on one side of the equation.
>     
> 2. Take the logarithm of each side, then use the Laws of Logarithms to “bring down the exponent.”
>     
> 3. Solve for the variable.
>     

> [!example] Example 2: Solving an Exponential Equation
> 
> Consider the exponential equation $3^{x+2} = 7$.
> 
> **(a)** Find the exact solution of the equation expressed in terms of logarithms.
> 
> **(b)** Use a calculator to find an approximation to the solution rounded to six decimal places.
> 
> **(a)**
> 
> $$\begin{aligned} 3^{x+2} &= 7 \qquad &\leftarrow \text{Given equation} \\ \log(3^{x+2}) &= \log 7 \qquad &\leftarrow \text{take log of each side} \\ (x + 2)\log 3 &= \log 7 \qquad &\leftarrow \text{Law 3 (bring down exponent)} \\ x + 2 &= \frac{\log 7}{\log 3} \qquad &\leftarrow \text{divide by } \log 3 \\ x &= \frac{\log 7}{\log 3} - 2 \qquad &\leftarrow \text{subtract 2} \end{aligned}$$
> 
> Exact solution: $x = \frac{\log 7}{\log 3} - 2$
> 
> **(b)**
> 
> Approximation: $x \approx -0.228756$

> [!example] Example 4: Solving an Exponential Equation Algebraically and Graphically
> 
> Solve the equation $e^{3-2x} = 4$ algebraically.
> 
> **Solution: Algebraic**
> 
> $$\begin{aligned} e^{3-2x} &= 4 \qquad &\leftarrow \text{Given equation} \\ \ln(e^{3-2x}) &= \ln 4 \qquad &\leftarrow \text{take } \ln \text{ of each side} \\ 3 - 2x &= \ln 4 \qquad &\leftarrow \text{property of } \ln \\ -2x &= -3 + \ln 4 \qquad &\leftarrow \text{subtract 3} \\ x &= \frac{1}{2}(3 - \ln 4) \approx 0.807 \qquad &\leftarrow \text{multiply by } -\frac{1}{2} \end{aligned}$$
> 

> [!example] Example 5: An Exponential Equation of Quadratic Type
> 
> Solve the equation $e^{2x} - e^x - 6 = 0$.
> 
> $$\begin{aligned} e^{2x} - e^x - 6 &= 0 \qquad &\leftarrow \text{Given equation} \\ (e^x)^2 - e^x - 6 &= 0 \qquad &\leftarrow \text{Law of Exponents} \\ (e^x - 3)(e^x + 2) &= 0 \qquad &\leftarrow \text{factor (quadratic in } e^x) \end{aligned}$$
> 
> Inline substitution check: Let $w = e^x \implies w^2 - w - 6 = 0 \implies (w - 3)(w + 2) = 0$
> 
> $$\begin{aligned} e^x - 3 &= 0 \qquad &\text{or} \qquad e^x + 2 &= 0 \qquad &\leftarrow \text{Zero-Product Property} \\ e^x &= 3 & e^x &= -2 \end{aligned}$$
> 
> $$\begin{aligned} e^x &= 3 \implies x = \ln 3 \approx 1.0986 \\ e^x &= -2 \implies \emptyset \qquad &\leftarrow e^x > 0 \ \forall x \end{aligned}$$
> 
> Solution: $x = \ln 3$
> 

> [!example] Example 6: An Equation Involving Exponential Functions
> 
> Solve the equation $3xe^x + x^2e^x = 0$.
> 
> $$\begin{aligned} 3xe^x + x^2e^x &= 0 \qquad &\leftarrow \text{Given equation} \\ x(3 + x)e^x &= 0 \qquad &\leftarrow \text{factor out common factors} \\ x(3 + x) &= 0 \qquad &\leftarrow \text{divide by } e^x \ \ (\text{valid since } e^x \ne 0) \end{aligned}$$
> 
> $$\begin{aligned} x = 0 \qquad &\text{or} \qquad 3 + x = 0 \qquad &\leftarrow \text{Zero-Product Property} \\ & \qquad \qquad \ \ \ \ x = -3 \end{aligned}$$
> 
> Solutions: $x = 0, \ x = -3$
> 
> Check:
> 
> $$\begin{aligned} x = 0: \quad & 3(0)e^0 + 0^2e^0 = 0 \quad \checkmark \\ x = -3: \quad & 3(-3)e^{-3} + (-3)^2e^{-3} = -9e^{-3} + 9e^{-3} = 0 \quad \checkmark \end{aligned}$$


---

## Logarithmic Equations

A **logarithmic equation** is an equation in which a logarithm of the variable occurs. One-to-one properties of logarithmic functions allow for direct solving:

$$\log_a x = \log_a y \implies x = y$$

> [!example] Example 7: Solving a Logarithmic Equation
> 
> Solve the equation $\log_5(x^2 + 1) = \log_5(x - 2) + \log_5(x + 3)$.
> 
> $$\begin{aligned} \log_5(x^2 + 1) &= \log_5(x - 2) + \log_5(x + 3) \qquad &\leftarrow \text{Given equation} \\ \log_5(x^2 + 1) &= \log_5[(x - 2)(x + 3)] \qquad &\leftarrow \text{Law 1: } \log_a AB = \log_a A + \log_a B \\ \log_5(x^2 + 1) &= \log_5(x^2 + x - 6) \qquad &\leftarrow \text{expand} \\ x^2 + 1 &= x^2 + x - 6 \qquad &\leftarrow \text{log is one-to-one (or raise 5 to each side)} \\ 1 &= x - 6 \\ x &= 7 \qquad &\leftarrow \text{solve for } x \end{aligned}$$
> 
> Solution: $x = 7$
> 
> Check: Verify that $x = 7$ satisfies the original equation (arguments must remain positive). $\checkmark$


> [!example] Example 8: Solving Logarithmic Equations
> 
> Solve each equation for $x$.
> 
> **(a)**
> 
> $$\begin{aligned} \ln x &= 8 \qquad &\leftarrow \text{Given equation} \\ x &= e^8 \approx 2981 \qquad &\leftarrow \text{exponential form} \end{aligned}$$
> 
> Alternative Method:
> 
> $$\begin{aligned} \ln x &= 8 \qquad &\leftarrow \text{Given equation} \\ e^{\ln x} &= e^8 \qquad &\leftarrow \text{raise } e \text{ to each side} \\ x &= e^8 \qquad &\leftarrow \text{property of } \ln \end{aligned}$$
> 
> **(b)**
> 
> $$\begin{aligned} \log_2(25 - x) &= 3 \qquad &\leftarrow \text{Given equation} \\ 25 - x &= 2^3 \qquad &\leftarrow \text{exponential form (or raise 2 to each side)} \\ 25 - x &= 8 \\ x &= 25 - 8 = 17 \end{aligned}$$


> [!example] Example 9: Solving a Logarithmic Equation
> 
> Solve the equation $4 + 3 \log(2x) = 16$.
> 
> $$\begin{aligned} 4 + 3 \log(2x) &= 16 \qquad &\leftarrow \text{Given equation} \\ 3 \log(2x) &= 12 \qquad &\leftarrow \text{subtract 4} \\ \log(2x) &= 4 \qquad &\leftarrow \text{divide by 3} \\ 2x &= 10^4 \qquad &\leftarrow \text{exponential form (or raise 10 to each side)} \\ 2x &= 10000 \\ x &= 5000 \qquad &\leftarrow \text{divide by 2} \end{aligned}$$
> 
> Solution: $x = 5000$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 369)