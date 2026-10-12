Date: 2026-05-20
Tags: [[Mathematics]], [[Algebra]], [[Exponential Functions]], [[100 FORMAL SCIENCES/110 Pure Mathematics/112 Algebra/Exponential and Logarithmic Functions/Logarithmic Functions]], [[Cheat sheet]]

---

# Chapter 4 Review: Properties and Formulas

### Exponential Functions

The **exponential function** $f$ with base $a$ ($a > 0, a \ne 1$) is defined for all real numbers $x$ by:

$$f(x) = a^x$$

- **Domain**: $\mathbb{R}$
    
- **Range**: $(0, \infty)$
    

![[Pasted image 20260520010346.png|center]]

### The Natural Exponential Function

The **natural exponential function** is the exponential function with base $e$:

$$f(x) = e^x$$

The number $e$ is defined as the value that $\left(1 + 1/n\right)^n$ approaches as $n \to \infty$ ($e \approx 2.7182818284590\dots$).

### Compound Interest

- **Compounded $n$ times per year**:
    
    $$A(t) = P\left(1 + \frac{r}{n}\right)^{nt}$$
    
    where $P = \text{principal}$, $r = \text{annual interest rate}$, $t = \text{years}$, $A(t) = \text{amount}$.
    
- **Compounded continuously**:
    
    $$A(t) = Pe^{rt}$$
    
---
### Logarithmic Functions

The **logarithmic function** $\log_a$ with base $a$ ($a > 0, a \ne 1$) is defined for $x > 0$ by:

$$\log_a x = y \iff a^y = x$$

- **Domain**: $(0, \infty)$
    
- **Range**: $\mathbb{R}$
    

![[Pasted image 20260520010410.png|center]]

- **Common Logarithm**: $\log x = \log_{10} x$
    
- **Natural Logarithm**: $\ln x = \log_e x$
    

#### Properties of Logarithms

1. $\log_a 1 = 0$
    
2. $\log_a a = 1$
    
3. $\log_a a^x = x$
    
4. $a^{\log_a x} = x$
    

### Laws of Logarithms

Let $a$ be a logarithm base ($a > 0, a \ne 1$), and let $A, B$, and $C$ be real numbers or algebraic expressions representing real numbers, with $A > 0$ and $B > 0$:

1. $\log_a(AB) = \log_a A + \log_a B$
    
2. $\log_a(A/B) = \log_a A - \log_a B$
    
3. $\log_a(A^C) = C\log_a A$
    

#### Change of Base Formula

$$\log_b x = \frac{\log_a x}{\log_a b}$$

### Equation Solving Guidelines

#### Guidelines for Solving Exponential Equations

1. Isolate the exponential term on one side of the equation.
    
2. Take the logarithm of each side, and use the Laws of Logarithms to “bring down the exponent”.
    
3. Solve for the variable.
    

#### Guidelines for Solving Logarithmic Equations

1. Isolate the logarithmic term(s) on one side of the equation, and use the Laws of Logarithms to combine logarithmic terms if necessary.
    
2. Rewrite the equation in exponential form.
    
3. Solve for the variable.
    
---
### Modeling with Exponential and Logarithmic Functions

#### Exponential Growth Model

$$n(t) = n_0 e^{rt}$$

where $n_0 = \text{initial population (at } t = 0)$, and $r = \text{relative growth rate}$.

#### Logistic Growth Model

$$n(t) = \frac{M}{1 + Ae^{-rt}}$$

where $M = \text{carrying capacity}$ and $A = (M - n_0)/n_0$.

#### Radioactive Decay Model

$$m(t) = m_0 e^{-rt}$$

where the relative decay rate is $\boxed{r = \frac{\ln 2}{h}}$ given half-life $h$.

#### Newton's Law of Cooling

$$T(t) = T_s + D_0 e^{-kt}$$

where $T_s = \text{surrounding temperature}$, $D_0 = \text{initial temperature difference}$, and $k > 0$.

#### Logarithmic Scales

- **The pH Scale**:
    
    $$pH = -\log[H^+]$$
    
- **The Richter Scale**:
    
    $$M = \log\frac{I}{S}$$
    
- **The Decibel Scale**:
    
    $$B = 10 \log\frac{I}{I_0}$$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 397)