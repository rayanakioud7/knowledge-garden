---
type: note
date: '2026-10-27'
tags:
- analysis
- mathematics
- multivariable-calculus
- partial-derivatives
- partial-differential-equations
topics:
- '[[Analysis]]'
- '[[Mathematics]]'
- '[[Multivariable Calculus]]'
- '[[Partial Derivatives]]'
- '[[Partial Differential Equations]]'
---

Date: 2026-10-27 
Tags: [[Analysis]], [[Mathematics]], [[Multivariable Calculus]], [[Partial Derivatives]], [[Partial Differential Equations]]

---
## Partial Derivatives of Functions of Two Variables

### Definition and Notations

> [!info] Definition / Theorem: Partial Derivatives of a Function of Two Variables. 
> If $f$ is a function of two variables, its **partial derivatives** are the functions $f_x$ and $f_y$ defined by:
> 
>   
> 
> $$f_x(x, y) = \lim_{h \to 0} \frac{f(x + h, y) - f(x, y)}{h}$$
> 
> $$f_y(x, y) = \lim_{h \to 0} \frac{f(x, y + h) - f(x, y)}{h}$$
> 
> At a specific point $(a, b)$, $f_x(a, b) = g'(a)$ where $g(x) = f(x, b)$, and $f_y(a, b) = G'(b)$ where $G(y) = f(a, y)$.
> 
>   

|**Partial Derivative**|**Subscript Notations**|**Leibniz Notations**|**Operator Notations**|
|---|---|---|---|
|**With respect to $x$**|$f_x(x, y), \; f_x, \; f_1$|$\frac{\partial f}{\partial x}, \; \frac{\partial}{\partial x}f(x, y), \; \frac{\partial z}{\partial x}$|$D_1 f, \; D_x f$|
|**With respect to $y$**|$f_y(x, y), \; f_y, \; f_2$|$\frac{\partial f}{\partial y}, \; \frac{\partial}{\partial y}f(x, y), \; \frac{\partial z}{\partial y}$|$D_2 f, \; D_y f$|

> [!abstract] Core Principle / Properties: Rule for Finding Partial Derivatives of $z = f(x, y)$
> 
>   
> 
> 1. To find $f_x$, regard $y$ as a constant and differentiate $f(x, y)$ with respect to $x$.
>     
>       
>     
> 2. To find $f_y$, regard $x$ as a constant and differentiate $f(x, y)$ with respect to $y$.
>     
>       
>     

> [!warning] Pitfall
>   Unlike single-variable differentials, the Leibniz symbol $\frac{\partial f}{\partial x}$ is a single atomic operator and **cannot** be interpreted as a ratio of two separate differentials $\partial f$ and $\partial x$. Additionally, when differentiating implicitly (e.g., finding $\frac{\partial z}{\partial x}$ where $z$ is defined implicitly as a function of $x$ and $y$), you must treat $y$ as a constant while applying the Chain Rule and Product Rule to every term containing $z$.
> 
>   

### Geometric and Physical Interpretations

> [!abstract] Core Principle / Properties: Slopes of Traces and Rates of Change
> 
>   
> 
> - **Geometric Interpretation (Slopes of Tangent Lines):** Let $S$ be the surface $z = f(x, y)$ and let $P(a, b, c)$ be a point on $S$ where $f(a, b) = c$.
>     
>       
>     - The vertical plane $y = b$ intersects $S$ in the trace curve $C_1$; the slope of its tangent line $T_1$ at $P$ is $f_x(a, b)$.
>         
>           
>         
>     - The vertical plane $x = a$ intersects $S$ in the trace curve $C_2$; the slope of its tangent line $T_2$ at $P$ is $f_y(a, b)$.
>         
>           
>         
> - **Rate of Change Interpretation:** If $z = f(x, y)$, then $\frac{\partial z}{\partial x}$ represents the instantaneous rate of change of $z$ with respect to $x$ when $y$ is held fixed, and $\frac{\partial z}{\partial y}$ represents the rate of change of $z$ with respect to $y$ when $x$ is held fixed.
>     
>       
>     

> ![[Pasted image 20261027231618.png]]
>  _(Figure 1: Geometric interpretation of partial derivatives at $P(a, b, c)$ as the slopes of the tangent lines $T_1$ and $T_2$ to the vertical trace curves $C_1$ in the plane $y = b$ and $C_2$ in the plane $x = a$)_

![[Pasted image 20261027231912.png]]

## Functions of More Than Two Variables and Higher Derivatives

### Partial Derivatives in $\mathbb{R}^n$

> [!info] Definition / Theorem: Partial Derivatives of Functions of $n$ Variables 
> If $u = f(x_1, x_2, \dots, x_n)$ is a function of $n$ variables, its **partial derivative with respect to the $i$-th variable $x_i$** is found by holding all other variables fixed:
> 
>   
> 
> $$\frac{\partial u}{\partial x_i} = \lim_{h \to 0} \frac{f(x_1, \dots, x_{i-1}, x_i + h, x_{i+1}, \dots, x_n) - f(x_1, \dots, x_i, \dots, x_n)}{h}$$
> 
> In compact notation, we write:
> 
>   
> 
> $$\frac{\partial u}{\partial x_i} = \frac{\partial f}{\partial x_i} = f_{x_i} = f_i = D_i f$$

### Higher-Order Partial Derivatives and Clairaut's Theorem

> [!info] Definition / Theorem: Second Partial Derivatives and Clairaut's Theorem 
> If $f$ is a function of two variables, the partial derivatives of $f_x$ and $f_y$ are called the **second partial derivatives** of $f$.
> 
>   
> 
> **Clairaut's Theorem:** Suppose $f$ is defined on a disk $D$ that contains the point $(a, b)$. If the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are both continuous on $D$, then:
> 
>   
> 
> $$f_{xy}(a, b) = f_{yx}(a, b)$$
> 
> By extension, higher-order mixed partial derivatives (order 3 or higher) are independent of the order of differentiation provided the derivatives are continuous (e.g., $f_{xyy} = f_{yxy} = f_{yyx}$).
> 
>   

| **Derivative Type**                     | **Subscript Notation**      | **Leibniz Notation**                                                                                                 | **Order of Differentiation**                        |
| --------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Pure Second Partial ($x$)**           | $(f_x)_x = f_{xx} = f_{11}$ | $\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial^2 f}{\partial x^2}$          | Differentiate twice with respect to $x$             |
| **Mixed Second Partial ($x$ then $y$)** | $(f_x)_y = f_{xy} = f_{12}$ | $\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial^2 f}{\partial y \partial x}$ | First with respect to $x$, then with respect to $y$ |
| **Mixed Second Partial ($y$ then $x$)** | $(f_y)_x = f_{yx} = f_{21}$ | $\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial^2 f}{\partial x \partial y}$ | First with respect to $y$, then with respect to $x$ |
| **Pure Second Partial ($y$)**           | $(f_y)_y = f_{yy} = f_{22}$ | $\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial^2 f}{\partial y^2}$          | Differentiate twice with respect to $y$             |

![[Pasted image 20261027232119.png]]

> [!warning] Pitfall 
> Pay careful attention to the reading direction of mixed partial derivative notations: in subscript notation $f_{xy}$, you differentiate from **left to right** (first $x$, then $y$), whereas in Leibniz operator notation $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)$, operators are applied from **right to left** (first $x$, then $y$).
> 
>   

## Partial Differential Equations

### Laplace's Equation and the Wave Equation

> [!abstract] Core Principle / Properties: Fundamental Partial Differential Equations 
> Partial derivatives appear in **partial differential equations (PDEs)** that model fundamental physical laws. Solutions to Laplace's equation are called **harmonic functions**.
> 
>   

|**Equation Name**|**Mathematical Formulation**|**Physical Applications**|
|---|---|---|
|**Laplace's Equation (2D)**|$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$|Heat conduction, fluid flow, and electric potential|
|**Laplace's Equation (3D)**|$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} = 0$|Three-dimensional potential fields and geophysical magnetic field strength|
|**Wave Equation (1D)**|$\frac{\partial^2 u}{\partial t^2} = a^2 \frac{\partial^2 u}{\partial x^2}$|Ocean waves, sound waves, light waves, and vibrating strings ($a$ depends on string density and tension)|

> _![[Pasted image 20261027231930.png|514]]
>  (Figure 8: Displacement $u(x, t)$ of a vibrating violin string at position $x$ and time $t$, governed by the one-dimensional wave equation)_
> 
>   

## Worked Examples

> [!example] Example: Computing First and Second Partial Derivatives If $f(x, y) = x^3 + x^2y^3 - 2y^2$, find $f_x(2, 1)$, $f_y(2, 1)$, and all four second-order partial derivatives of $f$.
> 
>   
> 
> **Solution:** Holding $y$ constant and differentiating with respect to $x$, then evaluating at $(2, 1)$:
> 
>   
> 
> $$\begin{aligned} f_x(x, y) &= 3x^2 + 2xy^3 \\ f_x(2, 1) &= 3(2)^2 + 2(2)(1)^3 = 12 + 4 = 16 \end{aligned}$$
> 
> Holding $x$ constant and differentiating with respect to $y$, then evaluating at $(2, 1)$:
> 
>   
> 
> $$\begin{aligned} f_y(x, y) &= 3x^2y^2 - 4y \\ f_y(2, 1) &= 3(2)^2(1)^2 - 4(1) = 12 - 4 = 8 \end{aligned}$$
> 
> Differentiating $f_x$ and $f_y$ with respect to $x$ and $y$ yields the second partial derivatives (confirming Clairaut's Theorem since $f_{xy} = f_{yx}$):
> 
>   
> 
> $$\begin{aligned} f_{xx} &= \frac{\partial}{\partial x}(3x^2 + 2xy^3) = 6x + 2y^3 \\ f_{xy} &= \frac{\partial}{\partial y}(3x^2 + 2xy^3) = 6xy^2 \\ f_{yx} &= \frac{\partial}{\partial x}(3x^2y^2 - 4y) = 6xy^2 \\ f_{yy} &= \frac{\partial}{\partial y}(3x^2y^2 - 4y) = 6x^2y - 4 \end{aligned}$$
> 
> $$\boxed{f_x(2, 1) = 16, \quad f_y(2, 1) = 8, \quad f_{xx} = 6x + 2y^3, \quad f_{xy} = f_{yx} = 6xy^2, \quad f_{yy} = 6x^2y - 4}$$

> [!example] Example: Implicit Partial Differentiation Find $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$ if $z$ is defined implicitly as a function of $x$ and $y$ by the equation $x^3 + y^3 + z^3 + 6xyz = 1$.
> 
>   
> 
> **Solution:** Differentiate both sides implicitly with respect to $x$, treating $y$ as a constant and $z$ as a differentiable function of $x$:
> 
>   
> 
> $$\begin{aligned} \frac{\partial}{\partial x}(x^3 + y^3 + z^3 + 6xyz) &= \frac{\partial}{\partial x}(1) \\ 3x^2 + 0 + 3z^2 \frac{\partial z}{\partial x} + 6yz + 6xy \frac{\partial z}{\partial x} &= 0 \\ (3z^2 + 6xy) \frac{\partial z}{\partial x} &= -(3x^2 + 6yz) \\ \frac{\partial z}{\partial x} &= -\frac{x^2 + 2yz}{z^2 + 2xy} \end{aligned}$$
> 
> By symmetry, differentiating implicitly with respect to $y$ (treating $x$ as a constant) yields:
> 
>   
> 
> $$\begin{aligned} 3y^2 + 3z^2 \frac{\partial z}{\partial y} + 6xz + 6xy \frac{\partial z}{\partial y} &= 0 \\ \frac{\partial z}{\partial y} &= -\frac{y^2 + 2xz}{z^2 + 2xy} \end{aligned}$$
> 
> $$\boxed{\frac{\partial z}{\partial x} = -\frac{x^2 + 2yz}{z^2 + 2xy}, \qquad \frac{\partial z}{\partial y} = -\frac{y^2 + 2xz}{z^2 + 2xy}}$$

> [!example] Example: Higher-Order Partial Derivatives of Three Variables Calculate $f_{xxyz}$ if $f(x, y, z) = \sin(3x + yz)$.
> 
>   
> 
> **Solution:** Differentiate sequentially with respect to $x$, $x$, $y$, and finally $z$ (using the Product Rule on the final step):
> 
>   
> 
> $$\begin{aligned} f_x &= 3\cos(3x + yz) \\ f_{xx} &= -9\sin(3x + yz) \\ f_{xxy} &= -9z\cos(3x + yz) \\ f_{xxyz} &= \frac{\partial}{\partial z}\big[-9z\cos(3x + yz)\big] \\ &= -9\cos(3x + yz) + 9yz\sin(3x + yz) \end{aligned}$$
> 
> $$\boxed{f_{xxyz} = -9\cos(3x + yz) + 9yz\sin(3x + yz)}$$

> [!example] Example: Verifying Solutions to Laplace's Equation and the Wave Equation (a) Show that $u(x, y) = e^x \sin y$ is a solution of Laplace's equation. (b) Verify that $u(x, t) = \sin(x - at)$ satisfies the wave equation.
> 
>   
> 
> **Solution:** **(a)** Compute the second-order pure partial derivatives of $u(x, y) = e^x \sin y$:
> 
>   
> 
> $$\begin{aligned} u_x &= e^x \sin y \implies u_{xx} = e^x \sin y \\ u_y &= e^x \cos y \implies u_{yy} = -e^x \sin y \end{aligned}$$
> 
> Summing the second partial derivatives confirms Laplace's equation:
> 
>   
> 
> $$u_{xx} + u_{yy} = e^x \sin y - e^x \sin y = 0$$
> 
> **(b)** Compute the partial derivatives of $u(x, t) = \sin(x - at)$ with respect to $x$ and $t$:
> 
>   
> 
> $$\begin{aligned} u_x &= \cos(x - at) \implies u_{xx} = -\sin(x - at) \\ u_t &= -a\cos(x - at) \implies u_{tt} = -a^2\sin(x - at) = a^2 u_{xx} \end{aligned}$$
> 
> Since $u_{tt} = a^2 u_{xx}$, $u(x, t)$ satisfies the wave equation.
> 
>   
> 
> $$\boxed{\text{(a) } u_{xx} + u_{yy} = 0 \qquad \text{(b) } u_{tt} = -a^2\sin(x - at) = a^2 u_{xx}}$$

---
# ~={red}References=~

_Calculus, James Stewart_ (p. 924-933)