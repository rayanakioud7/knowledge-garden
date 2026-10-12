Date: 2026-09-10
Tags: [[Mathematics]], [[Equations]], [[Analysis]], [[Differential Equations]], [[Derivatives]]

---

### 1. Direction Fields

> [!info] Direction Fields
> A first-order differential equation $y' = F(x, y)$ specifies the slope of a solution curve at any point $(x, y)$.
> By drawing short line segments with slope $F(x, y)$ at several points, we create a **direction field** (or slope field).
> These segments indicate the direction in which a solution curve is heading, allowing us to visualize the general shape of the curves without an explicit formula.
> 
> 
> **Autonomous Differential Equations:** An equation of the form $y' = f(y)$ where the independent variable is missing from the right side. The slopes corresponding to two different points with the same $y$-coordinate must be equal, meaning shifted solution curves are also valid solutions.
> 
> 

> [!NOTE] Direction Field Visualization
> ![[{6B2FA2EC-6B59-4507-BE43-A076A78E00A5}.png]]

---

### Examples: Direction Fields

> [!example] Example 1: Sketching a Direction Field
> **Problem:** Sketch the direction field for $y' = x^2 + y^2 - 1$.
> 
> 
> **Solution:**
> We compute the slope at various grid points and draw short line segments parallel to those slopes. For instance, at $(0,0)$, the slope is $-1$. The resulting solution curves move parallel to the nearby line segments.
> 
> 
> > [!NOTE] Direction Field for Example 1
> > ![[{06EFF080-2F08-41CA-94BE-16A1043744E8}.png]]
> 
> 

> [!example] Example 2: Electric Circuit (Physics Application)
> **Problem:** A simple circuit has resistance $R = 12 \, \Omega$, inductance $L = 4 \text{ H}$, and a constant voltage $E(t) = 60 \text{ V}$.
> 
> 
> **Solution:**
> The circuit is modeled by the first-order differential equation $L \frac{dI}{dt} + RI = E(t)$.
> 
> 

$$4 \frac{dI}{dt} + 12I = 60 \implies \frac{dI}{dt} = 15 - 3I$$

> This is an autonomous differential equation.
> Setting the derivative to $0$ identifies the equilibrium solution: $15 - 3I = 0 \implies I(t) = 5 \text{ A}$.
> 
> ![[{03C7AED8-D33B-479E-9952-CB2A030BF921}.png]]

---

### 2. Euler's Method

> [!info] Euler's Method
> Euler's method provides numerical approximations to the initial-value problem $y' = F(x, y), \ y(x_0) = y_0$.
> It proceeds by starting at the initial point, moving a short distance along the tangent line (determined by step size $h$), recalculating the slope, and repeating the process to make midcourse corrections.
> 
> 
> Let the step size be $h$, so $x_n = x_{n-1} + h$. The recursive formula for the approximation is:
> 
> 

$$\boxed{ y_n = y_{n-1} + h F(x_{n-1}, y_{n-1}) }$$

> where $n = 1, 2, 3, \dots$.

![[{929D148D-553E-48A2-B306-DAE57EFE535D}.png]]

---

### Examples: Euler's Method

> [!example] Example 3: Applying Euler's Method
> **Problem:** Use Euler's method with step size $h = 0.1$ to approximate the solution of $y' = x + y, \ y(0) = 1$.
> 
> 
> **Solution:**
> We are given $x_0 = 0, y_0 = 1, h = 0.1$, and $F(x, y) = x + y$.
> 
> 

$$\begin{aligned} y_1 &= y_0 + hF(x_0, y_0) = 1 + 0.1(0 + 1) = 1.1 \\ y_2 &= y_1 + hF(x_1, y_1) = 1.1 + 0.1(0.1 + 1.1) = 1.22 \\ y_3 &= y_2 + hF(x_2, y_2) = 1.22 + 0.1(0.2 + 1.22) = 1.362 \end{aligned}$$

> This means $y(0.3) \approx 1.362$. Decreasing the step size $h$ increases the accuracy of the approximation.
> 
> 
> > [!NOTE] Euler Approximations Approaching Exact Solution
> > ![[{2FCC8C23-3F76-4DF4-81F0-0E341D606567}.png]]
> 
> 

> [!example] Example 4: Electric Circuit (Euler's Method)
> **Problem:** For the circuit in Example 2, modeled by $\frac{dI}{dt} = 15 - 3I$ with $I(0) = 0$, estimate the current at $t = 0.5 \text{ s}$ using $h = 0.1$.
> 
> 
> **Solution:**
> Here $F(t, I) = 15 - 3I$, $t_0 = 0$, $I_0 = 0$, and $h = 0.1$.
> 
> 

$$\begin{aligned} I_1 &= 0 + 0.1(15 - 3(0)) = 1.5 \\ I_2 &= 1.5 + 0.1(15 - 3(1.5)) = 2.55 \\ I_3 &= 2.55 + 0.1(15 - 3(2.55)) = 3.285 \\ I_4 &= 3.285 + 0.1(15 - 3(3.285)) = 3.7995 \\ I_5 &= 3.7995 + 0.1(15 - 3(3.7995)) = 4.15965 \end{aligned}$$

> Therefore, the current after $0.5 \text{ s}$ is $I(0.5) \approx 4.16 \text{ A}$.
> 
>


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 610)