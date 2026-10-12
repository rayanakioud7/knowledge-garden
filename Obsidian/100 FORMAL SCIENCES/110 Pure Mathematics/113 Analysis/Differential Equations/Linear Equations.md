Date: 2026-09-22
Tags:  [[Mathematics]], [[Equations]], [[Analysis]], [[Differential Equations]], [[Derivatives]]

---


## 9.5 Linear Equations

### 1. First-Order Linear Differential Equations

> [!info] Standard Form
> A first-order **linear** differential equation is one that can be put into the form:
> 
$$\boxed{ \frac{dy}{dx} + P(x)y = Q(x) }$$
> where $P$ and $Q$ are continuous functions on a given interval.


> [!info] The Integrating Factor
> To solve a linear differential equation, we multiply both sides by a suitable function $I(x)$, called an **integrating factor**, such that the left side becomes the derivative of the product $I(x)y$.
$$I(x)y' + I(x)P(x)y = (I(x)y)' = I(x)y' + I'(x)y$$
> This requires $I(x)P(x) = I'(x)$, which is a separable differential equation:
$$\begin{aligned} \frac{dI}{I} &= P(x) \, dx \\ \ln |I| &= \int P(x) \, dx \\ I(x) &= A e^{\int P(x) \, dx} \end{aligned}$$
> Choosing $A = 1$ gives the standard integrating factor:
$$\boxed{ I(x) = e^{\int P(x) \, dx} }$$
> **Method for solving:**
> 1. Put the equation into standard form: $y' + P(x)y = Q(x)$.
> 2. Multiply both sides by the integrating factor $I(x) = e^{\int P(x) \, dx}$.
> 3. Rewrite the left side as $(I(x)y)'$ and integrate both sides.
> 
> 

---

### Examples

> [!example] Example 1: Solving a Linear Equation
> **Problem:** Solve the differential equation $\frac{dy}{dx} + 3x^2y = 6x^2$.
> **Solution:**
> The equation is already in standard form with $P(x) = 3x^2$ and $Q(x) = 6x^2$.
> Find the integrating factor:
$$I(x) = e^{\int 3x^2 \, dx} = e^{x^3}$$
> Multiply both sides by $e^{x^3}$:
$$e^{x^3} \frac{dy}{dx} + 3x^2 e^{x^3} y = 6x^2 e^{x^3}$$
> Rewrite the left side using the Product Rule:
$$\frac{d}{dx} (e^{x^3} y) = 6x^2 e^{x^3}$$
> Integrate both sides:
$$\begin{aligned} e^{x^3} y &= \int 6x^2 e^{x^3} \, dx \\ e^{x^3} y &= 2e^{x^3} + C \\ y &= 2 + Ce^{-x^3} \end{aligned}$$

> [!example] Example 2: Initial-Value Problem
> **Problem:** Find the solution of the initial-value problem $x^2 y' + xy = 1$ for $x > 0$ and $y(1) = 2$.
> **Solution:**
> First, divide both sides by $x^2$ to put the differential equation into standard form:
$$y' + \frac{1}{x} y = \frac{1}{x^2} \quad (x > 0)$$
> Here, $P(x) = 1/x$. Find the integrating factor:
$$I(x) = e^{\int (1/x) \, dx} = e^{\ln x} = x$$
> Multiply the standard form equation by $x$:
$$\begin{aligned} x y' + y &= \frac{1}{x} \\ (xy)' &= \frac{1}{x} \end{aligned}$$
> Integrate both sides:
$$\begin{aligned} xy &= \int \frac{1}{x} \, dx = \ln x + C \\ y &= \frac{\ln x + C}{x} \end{aligned}$$
> Apply the initial condition $y(1) = 2$:
$$2 = \frac{\ln 1 + C}{1} \implies C = 2$$
> Therefore, the solution to the initial-value problem is:
$$y = \frac{\ln x + 2}{x}$$
> > [!NOTE] Solution to the Initial-Value Problem
> > ![[Pasted image 20260922210720.png]]
> 
> 

> [!example] Example 3: Non-Elementary Integral Solution
> **Problem:** Solve $y' + 2xy = 1$.
> **Solution:**
> The equation is in standard form with $P(x) = 2x$.
> Find the integrating factor:
$$I(x) = e^{\int 2x \, dx} = e^{x^2}$$
> Multiply by the integrating factor:
$$\begin{aligned} e^{x^2} y' + 2x e^{x^2} y &= e^{x^2} \\ (e^{x^2} y)' &= e^{x^2} \end{aligned}$$
> Integrate both sides:
$$e^{x^2} y = \int e^{x^2} \, dx + C$$
> Because $\int e^{x^2} \, dx$ cannot be expressed in terms of elementary functions, we leave the solution as:
$$y = e^{-x^2} \int e^{x^2} \, dx + Ce^{-x^2}$$
> Alternatively, using a definite integral with a dummy variable:
$$y = e^{-x^2} \int_0^x e^{t^2} \, dt + Ce^{-x^2}$$
> > [!NOTE] Solution Curves for Various Values of C
> > ![[Pasted image 20260922210745.png]]
> 
> 

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 640)