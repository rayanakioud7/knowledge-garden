Date: 2026-09-22
Tags: [[Mathematics]], [[Equations]], [[Analysis]], [[Differential Equations]], [[Derivatives]]

---

## 9.3 Separable Equations

### 1. Separable Equations

> [!info] Definition
> A **separable equation** is a first-order differential equation in which the expression for $dy/dx$ can be factored as a function of $x$ times a function of $y$. In other words, it can be written in the form:
> 
> 
$$\frac{dy}{dx} = g(x)f(y)$$
> Equivalently, if $f(y) \neq 0$, we could write:
$$\boxed{ \frac{dy}{dx} = \frac{g(x)}{h(y)} }$$
> where $h(y) = 1/f(y)$.
> 
> 
> To solve this equation, rewrite it in differential form, separating the variables so all $y$'s are on one side and all $x$'s are on the other:
$$h(y) \, dy = g(x) \, dx$$
> Then integrate both sides:
$$\boxed{ \int h(y) \, dy = \int g(x) \, dx }$$
> Equation 2 defines $y$ implicitly as a function of $x$. In some cases, we may be able to solve for $y$ in terms of $x$.
> 
> 

> [!info] Justification (Chain Rule)
> If $h$ and $g$ satisfy $\int h(y) \, dy = \int g(x) \, dx$, then differentiating both sides with respect to $x$ gives:
$$\frac{d}{dx} \left( \int h(y) \, dy \right) = \frac{d}{dx} \left( \int g(x) \, dx \right)$$
> Applying the Chain Rule to the left side:
$$\frac{d}{dy} \left( \int h(y) \, dy \right) \frac{dy}{dx} = g(x)$$
$$h(y) \frac{dy}{dx} = g(x)$$
> Thus, the original differential equation is satisfied.
> 


---

### Examples

> [!example] Example 1: Solving a Separable Equation explicitly
> **Problem:**
> (a) Solve the differential equation $\frac{dy}{dx} = \frac{x^2}{y^2}$.
> (b) Find the solution of this equation that satisfies the initial condition $y(0) = 2$.
> 
> 
> **Solution (a):**
> Write the equation in terms of differentials and integrate both sides:
$$\begin{aligned} y^2 \, dy &= x^2 \, dx \\ \int y^2 \, dy &= \int x^2 \, dx \\ \frac{1}{3}y^3 &= \frac{1}{3}x^3 + C \end{aligned}$$
> Solving for $y$ yields the general solution:
$$y = \sqrt[3]{x^3 + 3C}$$
> Let $K = 3C$. Since $C$ is an arbitrary constant, so is $K$:
$$y = \sqrt[3]{x^3 + K}$$
> **Solution (b):**
> If we put $x = 0$ in the general solution, we get $y(0) = \sqrt[3]{K}$.
> To satisfy the initial condition $y(0) = 2$, we must have $\sqrt[3]{K} = 2 \implies K = 8$.
> Thus, the particular solution is:
> 
> 
$$y = \sqrt[3]{x^3 + 8}$$
> > [!NOTE] Family of Solutions
> > ![[Pasted image 20260922202945.png]]
> 
> 

> [!example] Example 2: Implicit Solution
> **Problem:** Solve the differential equation $\frac{dy}{dx} = \frac{6x^2}{2y + \cos y}$.
> 
> 
> **Solution:**
> Writing the equation in differential form and integrating both sides:
$$\begin{aligned} (2y + \cos y) \, dy &= 6x^2 \, dx \\ \int (2y + \cos y) \, dy &= \int 6x^2 \, dx \\ y^2 + \sin y &= 2x^3 + C \end{aligned}$$
> This gives the general solution implicitly. In this case, it’s impossible to solve the equation to express $y$ explicitly as a function of $x$.
> 
> 
> > [!NOTE] Implicit Solution Curves
> > ![[Pasted image 20260922203008.png]]

> [!example] Example 3: Explicit Solution with Exponential
> **Problem:** Solve the equation $y' = x^2 y$.
> 
> 
> **Solution:**
> First, rewrite the equation using Leibniz notation:
$$\frac{dy}{dx} = x^2 y$$
> If $y \neq 0$, we can rewrite it in differential notation and integrate:
$$\begin{aligned} \frac{dy}{y} &= x^2 \, dx \\ \int \frac{dy}{y} &= \int x^2 \, dx \\ \ln \vert{}y\vert{} &= \frac{x^3}{3} + C \end{aligned}$$
> This defines $y$ implicitly. To solve explicitly for $y$, exponentiate both sides:
> 
> 
$$\vert{}y\vert{} = e^{\ln\vert{}y\vert{}} = e^{(x^3/3) + C} = e^C e^{x^3/3}$$
$$y = \pm e^C e^{x^3/3}$$
> We can verify that the constant function $y = 0$ is also a solution. So we can write the general solution in the form:
> 
> 
$$y = A e^{x^3/3}$$
> where $A$ is an arbitrary constant ($A = e^C$, or $A = -e^C$, or $A = 0$).
> 
> 
> > [!NOTE] Direction Field and Solution Curves
> > ![[Pasted image 20260922203104.png]]
> 


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 618)