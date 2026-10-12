Date: 2026-05-19
Tags: [[Mathematics]], [[Algebra]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---

## Logarithmic Functions

Every exponential function $f(x) = a^x$ ($a > 0, a \ne 1$) is a one-to-one function by the Horizontal Line Test and therefore has an inverse function $f^{-1}$, called the **logarithmic function with base $a$** (denoted by $\log_a$).

$$f^{-1}(x) = y \iff f(y) = x$$

> see: [[One-to-One Functions and Their Inverses]]

![[Pasted image 20260519214757.png|center]]

---

> [!info]
> 
> ### Definition of Logarithmic Functions
> 
> For $a > 0$ and $a \ne 1$, the logarithmic function with base $a$, denoted by $\log_a$, is defined by
> 
> $$\log_a x = y \iff a^y = x$$

$\log_a x$ is the _exponent_ to which the base $a$ must be raised to give $x$.

- We read $\log_a x = y$ as "log base $a$ of $x$ is $y$."
    
- Parentheses are usually omitted: $\log_a(x) = \log_a x$.
    

---

### Switching Forms

When switching between the **logarithmic form** $\log_a x = y$ and the **exponential form** $a^y = x$, the base remains the same.

![[Pasted image 20260519214917.png|center]]

---

> [!example]
> 
> **Example 1: Logarithmic and Exponential Forms**
> 
> The logarithmic and exponential forms are equivalent equations: If one is true, then so is the other.
> 
> |**Logarithmic Form**|**Exponential Form**|
> |---|---|
> |$\log_{10} 100,000 = 5$|$10^5 = 100,000$|
> |$\log_2 8 = 3$|$2^3 = 8$|
> |$\log_2\left(\frac{1}{8}\right) = -3$|$2^{-3} = \frac{1}{8}$|
> |$\log_{1/3} 9 = -2$|$\left(\frac{1}{3}\right)^{-2} = 9$|

It is important to understand that $\log_a x$ is an **exponent**.

|**x**|**log10​x**|
|---|---|
|$10^4$|$4$|
|$10^3$|$3$|
|$10^2$|$2$|
|$10$|$1$|
|$1$|$0$|
|$10^{-1}$|$-1$|
|$10^{-2}$|$-2$|
|$10^{-3}$|$-3$|
|$10^{-4}$|$-4$|

---

> [!example]
> 
> **Example 2: Evaluating Logarithms**
> 
> **(a)** $\log_{10} 1000 = 3 \qquad$ because $\quad 10^3 = 1000$
> 
> **(b)** $\log_2 32 = 5 \qquad\quad$ because $\quad 2^5 = 32$
> 
> **(c)** $\log_{10} 0.1 = -1 \qquad$ because $\quad 10^{-1} = 0.1$
> 
> **(d)** $\log_{16} 4 = \frac{1}{2} \qquad\quad$ because $\quad 16^{1/2} = 4$
> 
> **(e)** $\log_{1/2} 16 = -4 \qquad$ because $\quad \left(\frac{1}{2}\right)^{-4} = 16$

---


Applying the cancellation equations of the Inverse Function Property to $f(x) = a^x$ and $f^{-1}(x) = \log_a x$ yields:

$$\begin{aligned} \log_a(a^x) &= x \qquad (x \in \mathbb{R}) \\ a^{\log_a x} &= x \qquad (x > 0) \end{aligned}$$

> see: [[One-to-One Functions and Their Inverses#Inverse Function Property|Inverse Function Property]]

---

> [!info]
> 
> ### Properties of Logarithms
> 
> |**Property**|**Reason**|
> |---|---|
> |**1.** $\log_a 1 = 0$|We must raise $a$ to the power $0$ to get $1$.|
> |**2.** $\log_a a = 1$|We must raise $a$ to the power $1$ to get $a$.|
> |**3.** $\log_a a^x = x$|We must raise $a$ to the power $x$ to get $a^x$.|
> |**4.** $a^{\log_a x} = x$|$\log_a x$ is the power to which $a$ must be raised to get $x$.|

> [!example]
> 
> **Example 3: Applying Properties of Logarithms**
> 
> We illustrate the properties of logarithms when the base is $5$.
> 
> - $$\log_5 1 = 0 \qquad \text{Property 1}$$
>     
> - $$\log_5 5 = 1 \qquad \text{Property 2}$$
>     
> - $$\log_5 5^8 = 8 \qquad \text{Property 3}$$
>     
> - $$5^{\log_5 12} = 12 \qquad \text{Property 4}$$
>     

---

> [!example]
> 
> **Example 4: Graphing a Logarithmic Function by Plotting Points**
> 
> Sketch the graph of $f(x) = \log_2 x$.
> 
> To make a table of values, choose $x$-values to be powers of 2 so that their logarithms are easily evaluated:
> 
> |**x**|**log2​x**|
> |---|---|
> |$2^3 = 8$|$3$|
> |$2^2 = 4$|$2$|
> |$2^1 = 2$|$1$|
> |$1$|$0$|
> |$2^{-1} = \frac{1}{2}$|$-1$|
> |$2^{-2} = \frac{1}{4}$|$-2$|
> |$2^{-3} = \frac{1}{8}$|$-3$|
> |$2^{-4} = \frac{1}{16}$|$-4$|
> 
> ![[Pasted image 20260519221102.png|center]]

---

### Families of Logarithmic Functions

Figure 3 shows graphs of the family of logarithmic functions $y = \log_a x$ for various values of the base $a$.

- **When $a > 1$**: The function increases. As the base $a$ gets larger, the graph grows more slowly for $x > 1$.
    
- **When $0 < a < 1$**: The function decreases.
    

All these graphs pass through the $x$-intercept $1$ because $\log_a 1 = 0$ for any valid base $a$. The $y$-axis ($x = 0$) serves as a vertical asymptote for the entire family.

![[Pasted image 20260519221207.png|center]]

---

## Graphs of Logarithmic Functions ($a > 1$)

Since $y = \log_a x$ is the inverse function of $y = a^x$, its graph is a geometric **reflection about the line $y = x$** of the corresponding exponential graph.

Because $f(x) = a^x$ has domain $\mathbb{R}$ and range $(0, \infty)$, its inverse function swapping inputs and outputs means that $y = \log_a x$ has:

- **Domain:** $(0, \infty)$
    
- **Range:** $\mathbb{R}$
    

![[Pasted image 20260519221406.png|center]]

---

> [!info]
> 
> ### Graphs of Logarithmic Functions ($a > 1$)
> 
> The logarithmic function
> 
> $$f(x) = \log_a x \qquad (a > 1)$$
> 
> - **Domain:** $(0, \infty)$
>     
> - **Range:** $\mathbb{R}$
>     
> - **$x$-intercept:** $1$
>     
> - **Vertical Asymptote:** The line $x = 0$ (the $y$-axis)
>     
> 
> As $x \to 0^{+}$, $\log_a x \to -\infty$.
> 
![[Pasted image 20260519221546.png|center]]

For $a > 1$, the fact that the exponential counterpart $y = a^x$ increases extremely rapidly for $x > 0$ dictates that its inverse $y = \log_a x$ is a **very slowly increasing function** for $x > 1$.

---

> [!example]
> 
> **Example 5: Reflecting Graphs of Logarithms**
> 
> Sketch the graph of each function. State the $x$-intercept, domain, range, and vertical asymptote.
> 
> **(a)** $g(x) = -\log_2 x$
> 
> Transformation: Start with the graph of $f(x) = \log_2 x$ and reflect it across the $x$-axis.
> 
> - **$x$-intercept:** $1$ _(unchanged by $x$-axis reflection)_
>     
> - **Domain:** $(0, \infty)$
>     
> - **Range:** $\mathbb{R}$
>     
> - **Vertical Asymptote:** $x = 0$
>     
> 
> ![[Pasted image 20260519221951.png|center]]
> 
> **(b)** $h(x) = \log_2(-x)$
> 
> Transformation: Start with the graph of $f(x) = \log_2 x$ and reflect it across the $y$-axis.
> 
> - **$x$-intercept:** $-1$ _(the point $(1,0)$ reflects to $(-1,0)$)_
>     
> - **Domain:** $(-\infty, 0)$
>     
> - **Range:** $\mathbb{R}$
>     
> - **Vertical Asymptote:** $x = 0$
>     
> 
> ![[Pasted image 20260519222013.png|center]]

---

> [!example]
> 
> **Example 6: Shifting Graphs of Logarithmic Functions**
> 
> Sketch the graph of each function. State the domain, range, and vertical asymptote.
> 
> **(a)** $g(x) = 2 + \log_5 x$
> 
> Transformation: Start with the graph of $f(x) = \log_5 x$ and shift it upward 2 units.
> 
> - **Point shift:** The point $(1,0)$ on the graph of $f$ shifts to $(1,2)$ on the graph of $g$.
>     
> - **Domain:** $(0, \infty)$
>     
> - **Range:** $\mathbb{R}$
>     
> - **Vertical Asymptote:** $x = 0$
>     
> 
> ![[Pasted image 20260519224637.png|center]]
> 
> **(b)** $h(x) = \log_{10}(x - 3)$
> 
> Transformation: Start with the graph of $f(x) = \log_{10} x$ and shift it to the right 3 units.
> 
> - **Point shift:** The point $(1,0)$ on the graph of $f$ shifts to $(4,0)$ on the graph of $h$.
>     
> - **Domain:** $(3, \infty)$
>     
> - **Range:** $\mathbb{R}$
>     
> - **Vertical Asymptote:** $x = 3$
>     
> 
> ![[Pasted image 20260519224654.png|center]]

---

## Common Logarithms

Logarithms with base 10 are referred to as **common logarithms**.

---

> [!info]
> 
> ### Common Logarithm
> 
> The logarithm with base 10 is called the **common logarithm** and is denoted by omitting the base:
> 
> $$\log x = \log_{10} x$$

From the fundamental definition of logarithms:

$$\log 10 = 1 \qquad \text{and} \qquad \log 100 = 2$$

To evaluate a value that is not an exact integer power of 10, such as $\log 50$:

- Find the exponent $y$ such that $10^y = 50$.
    
- Since $10^1 = 10$ and $10^2 = 100$, it is clear that:
    
    $$1 < \log 50 < 2$$

---

> [!example]
> 
> **Example 7: Evaluating Common Logarithms**
> 
> Use a calculator to find appropriate values of $f(x) = \log x$, and use these values to sketch the graph.
> 
> By evaluating points that are not standard powers of 10:
> 
> |**x**|**logx**|
> |---|---|
> |$0.01$|$-2$|
> |$0.1$|$-1$|
> |$0.5$|$-0.301$|
> |$1$|$0$|
> |$4$|$0.602$|
> |$5$|$0.699$|
> |$10$|$1$|
> 
> ![[Pasted image 20260519225235.png|center]]

---

## Natural Logarithms


> [!info]
> The logarithm with base $e$ is called the **natural logarithm** and is denoted by $\ln$:
> $$\ln x = \log_e x$$

The natural logarithmic function $y = \ln x$ is the inverse function of the natural exponential function $y = e^x$.

$$\ln x = y \iff e^y = x$$

![[Pasted image 20260519230611.png|center|386]]

### Properties of Natural Logarithms

|**Property**|**Reason**|
|---|---|
|1. $\ln 1 = 0$|We must raise $e$ to the power $0$ to get $1$.|
|2. $\ln e = 1$|We must raise $e$ to the power $1$ to get $e$.|
|3. $\ln e^x = x$|We must raise $e$ to the power $x$ to get $e^x$.|
|4. $e^{\ln x} = x$|$\ln x$ is the power to which $e$ must be raised to get $x$.|

---

> [!example] Example 10: Finding the Domain of a Logarithmic Function
> 
> Find the domain of the function $f(x) = \ln(4 - x^2)$.
> 
> $$\begin{aligned} 4 - x^2 &> 0 \qquad \leftarrow \text{argument must be positive} \\ x^2 &< 4 \\ |x| &< 2 \\ -2 < x &< 2 \end{aligned}$$
> 
> Domain: $\{x \mid -2 < x < 2\} = (-2, 2)$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 352)