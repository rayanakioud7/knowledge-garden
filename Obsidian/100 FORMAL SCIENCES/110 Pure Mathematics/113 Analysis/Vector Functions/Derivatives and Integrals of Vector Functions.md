---
type: note
date: '2026-10-15'
tags:
- analysis
- mathematics
- vector-functions
- vector-calculus
- tangent-vectors
topics:
- '[[Analysis]]'
- '[[Mathematics]]'
- '[[Vector Functions]]'
- '[[Vector Calculus]]'
- '[[Tangent Vectors]]'
---


Date: 2026-10-15
Tags: [[Analysis]], [[Mathematics]], [[Vector Functions]], [[Vector Calculus]], [[Tangent Vectors]]

---
# Derivatives and Integrals of Vector Functions

### Derivatives and Tangent Vectors

> [!info] Definition / Theorem: Derivative of a Vector Function (Definition 1 & Theorem 2)
> The **derivative** $\mathbf{r}'$ of a vector function $\mathbf{r}$ is defined in the same manner as for real-valued functions, provided the limit exists:
> 
> 
> 
> $$\frac{d\mathbf{r}}{dt} = \mathbf{r}'(t) = \lim_{h \to 0} \frac{\mathbf{r}(t + h) - \mathbf{r}(t)}{h}$$
> 
> 
> 
> **Component-wise Differentiation (Theorem 2):** If $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle = f(t)\mathbf{i} + g(t)\mathbf{j} + h(t)\mathbf{k}$, where $f$, $g$, and $h$ are differentiable functions, then:
> 
> 
> 
> $$\mathbf{r}'(t) = \langle f'(t), g'(t), h'(t) \rangle = f'(t)\mathbf{i} + g'(t)\mathbf{j} + h'(t)\mathbf{k}$$
> 
> 

> ![[{AF1A8B1B-DB6A-4686-BA10-C09D0C10AB52}.png]]
> *(Figure 1: Geometric significance of the derivative showing (a) the secant vector $\overrightarrow{PQ} = \mathbf{r}(t+h) - \mathbf{r}(t)$ and (b) the tangent vector $\mathbf{r}'(t)$ as $h \to 0$)*

> [!abstract] Core Principle / Properties: Tangent Vectors and Higher Derivatives
> * **Tangent Vector:** The vector $\mathbf{r}'(t)$ is called the **tangent vector** to the space curve $C$ defined by $\mathbf{r}$ at the point $P$, provided $\mathbf{r}'(t)$ exists and $\mathbf{r}'(t) \neq \mathbf{0}$. It points in the direction of increasing $t$.
> 
> 
> * **Tangent Line:** The tangent line to $C$ at $P$ is defined as the line passing through $P$ parallel to the tangent vector $\mathbf{r}'(t)$.
> 
> 
> * **Unit Tangent Vector:** The unit vector pointing in the direction of the tangent vector is given by:
> 
> 
> 
> $$\mathbf{T}(t) = \frac{\mathbf{r}'(t)}{\vert{}\mathbf{r}'(t)\vert{}}$$
> 
> 
> * **Second Derivative:** The second derivative of a vector function $\mathbf{r}$ is the derivative of $\mathbf{r}'$, denoted as $\mathbf{r}'' = (\mathbf{r}')'$.
> 
> 
> 
> 

> [!warning] Pitfall
> The unit tangent vector $\mathbf{T}(t)$ and the direction of the tangent line are only defined at points where the tangent vector is strictly non-zero ($\mathbf{r}'(t) \neq \mathbf{0}$). Additionally, when preserving order in cross product differentiation, you must maintain the exact order of factors $\mathbf{u}$ and $\mathbf{v}$ because the cross product is not commutative.
> 
> 

### Differentiation Rules

> [!info] Definition / Theorem: Differentiation Rules for Vector Functions (Theorem 3)
> Suppose $\mathbf{u}$ and $\mathbf{v}$ are differentiable vector functions, $c$ is a scalar, and $f$ is a differentiable real-valued function.
> 
> 

| Operation | Differentiation Formula |
| --- | --- |
| **Sum Rule** | $\frac{d}{dt}[\mathbf{u}(t) + \mathbf{v}(t)] = \mathbf{u}'(t) + \mathbf{v}'(t)$<br> |
| **Scalar Multiple** | $\frac{d}{dt}[c\mathbf{u}(t)] = c\mathbf{u}'(t)$<br> |
| **Scalar Function Product** | $\frac{d}{dt}[f(t)\mathbf{u}(t)] = f'(t)\mathbf{u}(t) + f(t)\mathbf{u}'(t)$<br> |
| **Dot Product** | $\frac{d}{dt}[\mathbf{u}(t) \cdot \mathbf{v}(t)] = \mathbf{u}'(t) \cdot \mathbf{v}(t) + \mathbf{u}(t) \cdot \mathbf{v}'(t)$<br> |
| **Cross Product** | $\frac{d}{dt}[\mathbf{u}(t) \times \mathbf{v}(t)] = \mathbf{u}'(t) \times \mathbf{v}(t) + \mathbf{u}(t) \times \mathbf{v}'(t)$<br> |
| **Chain Rule** | $\frac{d}{dt}[\mathbf{u}(f(t))] = f'(t)\mathbf{u}'(f(t))$<br> |

> [!abstract] Core Principle / Properties: Constant Length Vector Functions
> If a vector function has constant length $\vert{}\mathbf{r}(t)\vert{} = c$, then its derivative $\mathbf{r}'(t)$ is orthogonal to $\mathbf{r}(t)$ for all $t$:
> 
> 
> 
> $$\vert{}\mathbf{r}(t)\vert{} = c \implies \mathbf{r}'(t) \cdot \mathbf{r}(t) = 0$$
> 
> 
> 
> Geometrically, if a curve lies on a sphere centered at the origin, the tangent vector $\mathbf{r}'(t)$ is always perpendicular to the position vector $\mathbf{r}(t)$.
> 
> 

### Integrals of Vector Functions

> [!info] Definition / Theorem: Definite Integrals and the Fundamental Theorem of Calculus
> The **definite integral** of a continuous vector function $\mathbf{r}(t)$ on $[a, b]$ is evaluated by integrating each of its component functions:
> 
> 
> 
> $$\int_{a}^{b} \mathbf{r}(t)\,dt = \left( \int_{a}^{b} f(t)\,dt \right)\mathbf{i} + \left( \int_{a}^{b} g(t)\,dt \right)\mathbf{j} + \left( \int_{a}^{b} h(t)\,dt \right)\mathbf{k}$$
> 
> 
> 
> **Fundamental Theorem of Calculus for Vector Functions:** If $\mathbf{R}$ is an antiderivative of $\mathbf{r}$ such that $\mathbf{R}'(t) = \mathbf{r}(t)$, then:
> 
> 
> 
> $$\int_{a}^{b} \mathbf{r}(t)\,dt = \mathbf{R}(t)\Big]_{a}^{b} = \mathbf{R}(b) - \mathbf{R}(a)$$
> 
> 

> [!warning] Pitfall
> When computing an indefinite integral $\int \mathbf{r}(t)\,dt$, you must include a **vector constant of integration** $+\,\mathbf{C}$ (where $\mathbf{C} = \langle C_1, C_2, C_3 \rangle$), rather than a scalar constant.
> 
> 

### Worked Examples

> [!example] Example: Derivative and Unit Tangent Vector
> (a) Find the derivative of $\mathbf{r}(t) = (1 + t^3)\mathbf{i} + te^{-t}\mathbf{j} + \sin 2t\,\mathbf{k}$.
> (b) Find the unit tangent vector at the point where $t = 0$.
> **Solution:**
> **(a)** Differentiating each component of $\mathbf{r}(t)$ according to Theorem 2 gives:
> 
> 
> 
> $$\begin{aligned} \mathbf{r}'(t) &= \frac{d}{dt}(1 + t^3)\mathbf{i} + \frac{d}{dt}(te^{-t})\mathbf{j} + \frac{d}{dt}(\sin 2t)\mathbf{k} \\ &= 3t^2\mathbf{i} + (1 - t)e^{-t}\mathbf{j} + 2\cos 2t\,\mathbf{k} \end{aligned}$$
> 
> 
> 
> **(b)** Evaluating $\mathbf{r}(0)$ and $\mathbf{r}'(0)$ at $t = 0$ yields the point $(1, 0, 0)$ and tangent vector $\mathbf{r}'(0) = \mathbf{j} + 2\mathbf{k}$. Dividing by its magnitude gives the unit tangent vector:
> 
> 
> 
> $$\begin{aligned} \mathbf{T}(0) &= \frac{\mathbf{r}'(0)}{\vert{}\mathbf{r}'(0)\vert{}} \\ &= \frac{\mathbf{j} + 2\mathbf{k}}{\sqrt{0^2 + 1^2 + 2^2}} \\ &= \frac{1}{\sqrt{5}}\mathbf{j} + \frac{2}{\sqrt{5}}\mathbf{k} \end{aligned}$$
> 
> 
> $$\boxed{\mathbf{r}'(t) = 3t^2\mathbf{i} + (1 - t)e^{-t}\mathbf{j} + 2\cos 2t\,\mathbf{k}, \quad \mathbf{T}(0) = \frac{1}{\sqrt{5}}\mathbf{j} + \frac{2}{\sqrt{5}}\mathbf{k}}$$
> 
> 

> ![[{A4671576-EEDA-4C64-B24E-36E5EEBD7C60}.png|431]]
> *(Figure 3: The circular helix and its tangent line at the point $(0, 1, \pi/2)$)*
> 

> [!example] Example: Parametric Equations of a Tangent Line
> Find parametric equations for the tangent line to the helix with parametric equations $x = 2\cos t$, $y = \sin t$, $z = t$ at the point $(0, 1, \pi/2)$.
> **Solution:**
> The vector equation of the helix and its derivative are:
> 
> 
> 
> $$\begin{aligned} \mathbf{r}(t) &= \langle 2\cos t, \sin t, t \rangle \\ \mathbf{r}'(t) &= \langle -2\sin t, \cos t, 1 \rangle \end{aligned}$$
> 
> 
> 
> At the point $(0, 1, \pi/2)$, the parameter value is $t = \pi/2$. Substituting $t = \pi/2$ into $\mathbf{r}'(t)$ gives the direction vector of the tangent line:
> 
> 
> 
> $$\mathbf{r}'\left(\frac{\pi}{2}\right) = \left\langle -2\sin\frac{\pi}{2}, \cos\frac{\pi}{2}, 1 \right\rangle = \langle -2, 0, 1 \rangle$$
> 
> 
> 
> The tangent line passes through $(0, 1, \pi/2)$ parallel to $\langle -2, 0, 1 \rangle$, giving the parametric equations:
> 
> 
> 
> $$\boxed{x = -2t, \quad y = 1, \quad z = \frac{\pi}{2} + t}$$
> 
> 

> [!example] Example: Proof of Orthogonality for Constant Length Vectors
> Show that if $\vert{}\mathbf{r}(t)\vert{} = c$ (a constant), then $\mathbf{r}'(t)$ is orthogonal to $\mathbf{r}(t)$ for all $t$.
> **Solution:**
> Express the magnitude squared using the dot product and differentiate both sides with respect to $t$ using the Dot Product Rule:
> 
> 
> 
> $$\begin{aligned} \mathbf{r}(t) \cdot \mathbf{r}(t) &= \vert{}\mathbf{r}(t)\vert{}^2 = c^2 \\ \frac{d}{dt}[\mathbf{r}(t) \cdot \mathbf{r}(t)] &= \frac{d}{dt}(c^2) \\ \mathbf{r}'(t) \cdot \mathbf{r}(t) + \mathbf{r}(t) \cdot \mathbf{r}'(t) &= 0 \\ 2\mathbf{r}'(t) \cdot \mathbf{r}(t) &= 0 \\ \mathbf{r}'(t) \cdot \mathbf{r}(t) &= 0 \end{aligned}$$
> 
> 
> 
> Since their dot product is zero, $\mathbf{r}'(t)$ is orthogonal to $\mathbf{r}(t)$ for all $t$.
> 
> 
> 
> $$\boxed{\mathbf{r}'(t) \cdot \mathbf{r}(t) = 0}$$
> 
> 

> [!example] Example: Integrating a Vector Function
> If $\mathbf{r}(t) = 2\cos t\,\mathbf{i} + \sin t\,\mathbf{j} + 2t\,\mathbf{k}$, evaluate $\int \mathbf{r}(t)\,dt$ and $\int_{0}^{\pi/2} \mathbf{r}(t)\,dt$.
> **Solution:**
> Integrating each component function gives the indefinite integral:
> 
> 
> 
> $$\begin{aligned} \int \mathbf{r}(t)\,dt &= \left( \int 2\cos t\,dt \right)\mathbf{i} + \left( \int \sin t\,dt \right)\mathbf{j} + \left( \int 2t\,dt \right)\mathbf{k} \\ &= 2\sin t\,\mathbf{i} - \cos t\,\mathbf{j} + t^2\mathbf{k} + \mathbf{C} \end{aligned}$$
> 
> 
> 
> Evaluating the definite integral from $0$ to $\pi/2$ via the Fundamental Theorem of Calculus:
> 
> 
> 
> $$\begin{aligned} \int_{0}^{\pi/2} \mathbf{r}(t)\,dt &= \left[ 2\sin t\,\mathbf{i} - \cos t\,\mathbf{j} + t^2\mathbf{k} \right]_{0}^{\pi/2} \\ &= \left( 2\mathbf{i} - 0\mathbf{j} + \frac{\pi^2}{4}\mathbf{k} \right) - \left( 0\mathbf{i} - 1\mathbf{j} + 0\mathbf{k} \right) \\ &= 2\mathbf{i} + \mathbf{j} + \frac{\pi^2}{4}\mathbf{k} \end{aligned}$$
> 
> 
> $$\boxed{\int \mathbf{r}(t)\,dt = 2\sin t\,\mathbf{i} - \cos t\,\mathbf{j} + t^2\mathbf{k} + \mathbf{C}, \quad \int_{0}^{\pi/2} \mathbf{r}(t)\,dt = 2\mathbf{i} + \mathbf{j} + \frac{\pi^2}{4}\mathbf{k}}$$
> 
> 

---

# ~={red}References=~

*Calculus, James Stewart* (p. 871-875)

