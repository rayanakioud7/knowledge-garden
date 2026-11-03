---
type: note
date: '2026-10-13'
tags:
- analysis
- mathematics
- vector-functions
- space-curves
- parametric-equations
topics:
- '[[Analysis]]'
- '[[Mathematics]]'
- '[[Vector Functions]]'
- '[[Space Curves]]'
- '[[Parametric Equations]]'
---

Date: 2026-10-13
Tags: [[Analysis]], [[Mathematics]], [[Vector Functions]], [[Space Curves]], [[Parametric Equations]]

  ----

## Vector Functions and Space Curves

### Component Functions, Limits, and Continuity

> [!info] Definition / Theorem: Vector-Valued Functions and Limits A **vector-valued function**, or **vector function**, is a function whose domain is a set of real numbers and whose range is a set of vectors. For three-dimensional vectors in $V_3$, if $f(t)$, $g(t)$, and $h(t)$ are the real-valued **component functions** of $\mathbf{r}$, we write:
> 
>   
> 
> $$\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle = f(t)\mathbf{i} + g(t)\mathbf{j} + h(t)\mathbf{k}$$
> 
> **Limit of a Vector Function:** The limit of a vector function $\mathbf{r}$ is defined by taking the limits of its component functions, provided the limits of the component functions exist:
> 
>   
> 
> $$\lim_{t \to a} \mathbf{r}(t) = \left\langle \lim_{t \to a} f(t), \lim_{t \to a} g(t), \lim_{t \to a} h(t) \right\rangle$$

> [!abstract] Core Principle / Properties: Domain and Continuity
> 
>   
> 
> - **Domain Convention:** The domain of $\mathbf{r}$ consists of all values of $t$ for which the expression for $\mathbf{r}(t)$ is defined (the intersection of the domains of $f$, $g$, and $h$).
>     
>       
>     
> - **Continuity:** A vector function $\mathbf{r}$ is **continuous at $a$** if:
>     
>       
>     
>     $$\lim_{t \to a} \mathbf{r}(t) = \mathbf{r}(a)$$
>     
>     By the limit definition, $\mathbf{r}$ is continuous at $a$ if and only if its component functions $f$, $g$, and $h$ are continuous at $a$.
>     
>       
>     

> [!warning] Pitfall For $\lim_{t \to a} \mathbf{r}(t)$ to exist, the limit of _every_ individual component function must exist. Furthermore, a function may not be defined at $t = a$ (such as having a $\frac{\sin t}{t}$ component at $t = 0$), yet its limit as $t \to a$ can still exist if each component converges to a finite real value.
> 
>   

### Space Curves and Parametrizations

> [!info] Definition / Theorem: Space Curves and Parametric Equations Suppose $f$, $g$, and $h$ are continuous real-valued functions on an interval $I$. The set $C$ of all points $(x, y, z)$ in space where $t$ varies throughout the interval $I$ is called a **space curve**:
> 
>   
> 
> $$x = f(t) \qquad y = g(t) \qquad z = h(t)$$
> 
> These equations are called the **parametric equations** of $C$, and $t$ is called a **parameter**. Any continuous vector function $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ defines a space curve $C$ traced out by the tip of the moving position vector $\mathbf{r}(t)$ of the point $P(f(t), g(t), h(t))$ on $C$.
> 
>   

> ![[{AE568D0A-D85B-4D85-8F6E-13619D75A0D8}.png|404]]

> [!abstract] Core Principle / Properties: Line Segments and Curve Visualization
> 
>   
> 
> - **Line Segment Parametrization:** The vector equation for the line segment that joins the tip of the vector $\mathbf{r}_0$ to the tip of the vector $\mathbf{r}_1$ is given by:
>     
>       
>     
>     $$\mathbf{r}(t) = (1 - t)\mathbf{r}_0 + t\mathbf{r}_1 \qquad 0 \le t \le 1$$
>     
> - **Visualizing Space Curves:** Space curves can be visualized by enclosing them in a bounding box to view their projections onto coordinate planes, viewing them as lying on a surface (such as a cylinder), or viewing them as the curve of intersection of two surfaces.
>     
>       
>     

|**Space Curve**|**Vector / Parametric Representation**|**Geometric Description**|
|---|---|---|
|**Line in Space**|$\mathbf{r}(t) = \mathbf{r}_0 + t\mathbf{v}$|Line passing through $\mathbf{r}_0$ parallel to direction vector $\mathbf{v}$|
|**Circular Helix**|$\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + t\,\mathbf{k}$|Spirals upward around the circular cylinder $x^2 + y^2 = 1$|
|**Twisted Cubic**|$\mathbf{r}(t) = \langle t, t^2, t^3 \rangle$|Intersection of the cylinders $y = x^2$ and $z = x^3$|
|**Toroidal Spiral**|$\langle (4 + \sin 20t)\cos t, (4 + \sin 20t)\sin t, \cos 20t \rangle$|Space curve that winds around and lies on a torus|
|**Trefoil Knot**|$\langle (2 + \cos 1.5t)\cos t, (2 + \cos 1.5t)\sin t, \sin 1.5t \rangle$|Closed, self-weaving three-lobed space curve|

> ![[{C6097C74-E510-46D1-A73C-38CB6B81BCB1}.png]]

![[{3E13792F-F9D4-4BE4-83CE-647489481888}.png]]
### Worked Examples

> [!example] Example: Finding the Domain of a Vector Function If $\mathbf{r}(t) = \langle t^3, \ln(3 - t), \sqrt{t} \rangle$, find the component functions and the domain of $\mathbf{r}$. **Solution:** The component functions are:
> 
>   
> 
> $$\begin{aligned} f(t) &= t^3 \\ g(t) &= \ln(3 - t) \\ h(t) &= \sqrt{t} \end{aligned}$$
> 
> By convention, the domain of $\mathbf{r}$ consists of all values of $t$ for which all three component expressions are simultaneously defined:
> 
>   
> 
> $$\begin{aligned} 3 - t > 0 &\implies t < 3 \\ t \ge 0 &\implies t \ge 0 \end{aligned}$$
> 
> Combining these conditions yields the interval $0 \le t < 3$.
> 
>   
> 
> $$\boxed{[0, 3)}$$

> [!example] Example: Evaluating the Limit of a Vector Function Find $\lim_{t \to 0} \mathbf{r}(t)$, where $\mathbf{r}(t) = (1 + t^3)\mathbf{i} + t e^{-t}\mathbf{j} + \frac{\sin t}{t}\mathbf{k}$. **Solution:** According to Definition 1, we take the limit of each component function as $t \to 0$:
> 
>   
> 
> $$\begin{aligned} \lim_{t \to 0} \mathbf{r}(t) &= \left[ \lim_{t \to 0} (1 + t^3) \right] \mathbf{i} + \left[ \lim_{t \to 0} t e^{-t} \right] \mathbf{j} + \left[ \lim_{t \to 0} \frac{\sin t}{t} \right] \mathbf{k} \\ &= (1)\mathbf{i} + (0)\mathbf{j} + (1)\mathbf{k} \\ &= \mathbf{i} + \mathbf{k} \end{aligned}$$
> 
> $$\boxed{\mathbf{i} + \mathbf{k}}$$

> [!example] Example: Parametrizing a Line Segment Find a vector equation and parametric equations for the line segment that joins the point $P(1, 3, -2)$ to the point $Q(2, -1, 3)$. **Solution:** Using the line segment formula $\mathbf{r}(t) = (1 - t)\mathbf{r}_0 + t\mathbf{r}_1$ for $0 \le t \le 1$, we set $\mathbf{r}_0 = \langle 1, 3, -2 \rangle$ and $\mathbf{r}_1 = \langle 2, -1, 3 \rangle$:
> 
>   
> 
> $$\begin{aligned} \mathbf{r}(t) &= (1 - t)\langle 1, 3, -2 \rangle + t\langle 2, -1, 3 \rangle \\ &= \langle 1 - t + 2t, 3 - 3t - t, -2 + 2t + 3t \rangle \\ &= \langle 1 + t, 3 - 4t, -2 + 5t \rangle \end{aligned}$$
> 
> Extracting the components gives the corresponding parametric equations for $0 \le t \le 1$:
> 
>   
> 
> $$\boxed{\mathbf{r}(t) = \langle 1 + t, 3 - 4t, -2 + 5t \rangle \implies x = 1 + t, \quad y = 3 - 4t, \quad z = -2 + 5t \quad (0 \le t \le 1)}$$

> [!example] Example: Parametrizing the Intersection of Two Surfaces Find a vector function that represents the curve of intersection of the cylinder $x^2 + y^2 = 1$ and the plane $y + z = 2$. **Solution:** The projection of the intersection curve $C$ onto the $xy$-plane is the circle $x^2 + y^2 = 1, z = 0$, which we parametrize as:
> 
>   
> 
> $$\begin{aligned} x &= \cos t \\ y &= \sin t \end{aligned} \qquad 0 \le t \le 2\pi$$
> 
> Substituting $y = \sin t$ into the plane equation $y + z = 2$ expresses $z$ in terms of $t$:
> 
>   
> 
> $$z = 2 - y = 2 - \sin t$$
> 
> Combining the three parametric equations into a single vector equation gives the parametrization of $C$:
> 
>   
> 
> $$\boxed{\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + (2 - \sin t)\mathbf{k}, \quad 0 \le t \le 2\pi}$$

---
# ~={red}References=~

_Calculus, James Stewart_ (p. 864-869)