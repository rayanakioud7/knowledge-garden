Date: 2026-05-19
Tags: [[Mathematics]], [[Algebra]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---

## Exponential Functions

Exponential functions get their name from the fact that the variable is in the exponent.

$$\begin{aligned} f(3) &= 2^3 = 8 \\ f(10) &= 2^{10} = 1024 \\ f(30) &= 2^{30} = 1,073,741,824 \end{aligned} \quad \longleftrightarrow \quad \begin{aligned} g(x) &= x^2 \\ g(30) &= 30^2 = 900 \end{aligned}$$

To define $a^x$ when $x$ is an irrational number, approximate $x$ by rational numbers.

$$\text{Since } \sqrt{3} \approx 1.73205\dots \implies a^{\sqrt{3}} \text{ is approximated by } a^{1.7}, a^{1.73}, a^{1.732}, a^{1.7320}, a^{1.73205}, \dots$$

$$5^{\sqrt{3}} \approx 5^{1.732} \approx 16.2411\dots$$

The Laws of Exponents are still true when the exponents are real numbers.

> see: [[Algebra Essentials#Laws of Exponents|Laws of Exponents]]

---

> [!info]
> 
> ### Exponential Functions
> 
> The **exponential function with base $a$** is defined for all real numbers $x$ by
> 
> $$f(x) = a^x$$
> 
> where $a > 0$ and $a \ne 1$.

If $a = 1$, then $f(x) = 1^x = 1$, which is a constant function.

### Examples of Exponential Functions

$$f(x) = 2^x \quad \leftarrow \text{Base 2} \qquad g(x) = 3^x \quad \leftarrow \text{Base 3} \qquad h(x) = 10^x \quad \leftarrow \text{Base 10}$$

---

## Graphs of Exponential Functions

> [!example]
> 
> **Example 2: Graphing Exponential Functions by Ploting Points**
> 
> Draw the graph of each function.
> 
> **(a)** $f(x) = 3^x \qquad$ **(b)** $g(x) = \left(\frac{1}{3}\right)^x$
> 
> |**x**|**f(x)=3x**|**g(x)=(31​)x**|
> |---|---|---|
> |$-3$|$\frac{1}{27}$|$27$|
> |$-2$|$\frac{1}{9}$|$9$|
> |$-1$|$\frac{1}{3}$|$3$|
> |$0$|$1$|$1$|
> |$1$|$3$|$\frac{1}{3}$|
> |$2$|$9$|$\frac{1}{9}$|
> |$3$|$27$|$\frac{1}{27}$|
> 
> ![[Pasted image 20260519201715.png|center]]

The graph of $g(x) = \left(\frac{1}{3}\right)^x$ is the reflection of the graph of $f(x) = 3^x$ about the $y$-axis.

In general, the graph of $g(x) = \left(\frac{1}{a}\right)^x$ is the reflection of the graph of $f(x) = a^x$ about the $y$-axis:

$$g(x) = \left(\frac{1}{a}\right)^x = \frac{1}{a^x} = a^{-x} = f(-x)$$

> see: [[Transformations of Functions#Reflecting Graphs|Reflecting Graphs]]

---

### Families of Exponential Functions

All graphs of the family $f(x) = a^x$ have $y$-intercept 1 because $f(0) = a^0 = 1$ for $a \ne 0$.

There are two kinds of exponential functions:

- **Exponential Growth** ($a > 1$): The function increases rapidly.
    
- **Exponential Decay** ($0 < a < 1$): The function decreases rapidly.
    

![[Pasted image 20260519202146.png|center]]

The $x$-axis is a horizontal asymptote for $f(x) = a^x$:

$$\begin{aligned} \text{When } a > 1: \quad a^x \to 0 &\text{ as } x \to -\infty \\ \text{When } 0 < a < 1: \quad a^x \to 0 &\text{ as } x \to \infty \end{aligned}$$

Additionally, $a^x > 0$ for all $x \in \mathbb{R}$.

---

> [!info]
> 
> ### Graphs of Exponential Functions
> 
> The exponential function
> 
> $$f(x) = a^x \qquad (a > 0, \ a \ne 1)$$
> 
> - **Domain**: $\mathbb{R}$
>     
> - **Range**: $(0, \infty)$
>     
> - **$y$-intercept**: $1$
>     
> - **Horizontal Asymptote**: Line $y = 0$ ($x$-axis)
>     
> 
> ![[Pasted image 20260519202232.png|center]]

---

> [!example]
> 
> **Example 4: Transformations of Exponential Functions**
> 
> Use the graph of $f(x) = 2^x$ to sketch the graph of each function. State the $y$-intercept, domain, range, and horizontal asymptote.
> 
> **(a)** $g(x) = 1 + 2^x$
> 
> Transformation: Shift upward 1 unit.
> 
> - $y$-intercept: $g(0) = 1 + 2^0 = 2$
>     
> - Domain: $\mathbb{R}$
>     
> - Range: $(1, \infty)$
>     
> - Horizontal Asymptote: $y = 1$
>     
> 
> ![[Pasted image 20260519202518.png|center]]
> 
> **(b)** $h(x) = -2^x$
> 
> Transformation: Reflect about the $x$-axis.
> 
> - $y$-intercept: $h(0) = -2^0 = -1$
>     
> - Domain: $\mathbb{R}$
>     
> - Range: $(-\infty, 0)$
>     
> - Horizontal Asymptote: $y = 0$
>     
> 
> ![[Pasted image 20260519202539.png|center]]D
> 
> **(c)** $k(x) = 2^{x-1}$
> 
> Transformation: Shift 1 unit right.
> 
> - $y$-intercept: $k(0) = 2^{0-1} = \frac{1}{2}$
>     
> - Domain: $\mathbb{R}$
>     
> - Range: $(0, \infty)$
>     
> - Horizontal Asymptote: $y = 0$
>     
> 
> ![[Pasted image 20260519202555.png|center]]

---



---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 238)