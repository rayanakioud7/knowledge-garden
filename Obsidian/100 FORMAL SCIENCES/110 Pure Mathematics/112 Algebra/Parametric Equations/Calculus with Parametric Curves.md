Date: 2026-09-22
Tags: [[Mathematics]], [[Equations]], [[Algebra]], [[Analysis]], [[Derivatives]]

---
### 1. Tangents

> [!info] First Derivative of a Parametric Curve
> Suppose $f$ and $g$ are differentiable functions defining a parametric curve $x = f(t)$ and $y = g(t)$. By the Chain Rule, $\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}$. If $\frac{dx}{dt} \neq 0$, we can solve for the slope of the tangent line $\frac{dy}{dx}$ without eliminating the parameter $t$:
> 
> 
$$\boxed{ \frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} \quad \text{if } \frac{dx}{dt} \neq 0 }$$
> * **Horizontal Tangent:** Occurs when $\frac{dy}{dt} = 0$ (provided $\frac{dx}{dt} \neq 0$).
> 
> 
> * **Vertical Tangent:** Occurs when $\frac{dx}{dt} = 0$ (provided $\frac{dy}{dt} \neq 0$).
> 
> 
> * **Physics Interpretation:** If a moving particle traces the curve, $\frac{dy}{dt}$ and $\frac{dx}{dt}$ represent its vertical and horizontal velocities; the tangent slope is simply the ratio of these velocities.
> 
> 
> 
> 

> [!info] Second Derivative of a Parametric Curve
> To find the second derivative $\frac{d^2y}{dx^2}$, apply the Chain Rule again by replacing $y$ with $\frac{dy}{dx}$.
> 
> 
$$\boxed{ \frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}} }$$
> **Warning:** It is a common error to assume the second derivative is the ratio of the second derivatives with respect to $t$. Note that $\frac{d^2y}{dx^2} \neq \frac{d^2y/dt^2}{d^2x/dt^2}$.
> 
> 

---

### Examples

> [!example] Example 1: Tangents and Concavity
> **Problem:** A curve $C$ is defined by the parametric equations $x = t^2, y = t^3 - 3t$.
> (a) Show that $C$ has two tangents at the point $(3, 0)$ and find their equations.
> (b) Find the points on $C$ where the tangent is horizontal or vertical.
> (c) Determine where the curve is concave upward or downward.
> 
> 
> **Solution (a):**
> Notice that $y = t^3 - 3t = t(t^2 - 3) = 0$ when $t = 0$ or $t = \pm\sqrt{3}$. Therefore, the point $(3, 0)$ on $C$ arises from two values of the parameter, $t = \sqrt{3}$ and $t = -\sqrt{3}$, indicating that $C$ crosses itself at $(3, 0)$.
> 
> 
$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{3t^2 - 3}{2t} = \frac{3}{2}\left(t - \frac{1}{t}\right)$$
> The slope of the tangent when $t = \pm\sqrt{3}$ is $dy/dx = \pm 6 / (2\sqrt{3}) = \pm\sqrt{3}$. The equations of the tangents at $(3, 0)$ are:
> 
> 
$$y = \sqrt{3}(x - 3) \quad \text{and} \quad y = -\sqrt{3}(x - 3)$$
> **Solution (b):**
> $C$ has a horizontal tangent when $dy/dx = 0$, which means $dy/dt = 0$ and $dx/dt \neq 0$.
> Since $dy/dt = 3t^2 - 3$, this happens when $t^2 = 1 \implies t = \pm 1$. The corresponding points on $C$ are $(1, -2)$ and $(1, 2)$.
> $C$ has a vertical tangent when $dx/dt = 2t = 0$, so $t = 0$ (note that $dy/dt \neq 0$ there). The corresponding point is $(0, 0)$.
> 
> 
> **Solution (c):**
> To determine concavity, calculate the second derivative:
$$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt} = \frac{\frac{3}{2}\left(1 + \frac{1}{t^2}\right)}{2t} = \frac{3(t^2 + 1)}{4t^3}$$
> Thus, the curve is concave upward when $t > 0$ and concave downward when $t < 0$.
> 
> 
> > [!NOTE] Tangents and Concavity of a Parametric Curve
> > ![[Pasted image 20260922213225.png]]
> 
> 

> [!example] Example 2: Tangents of a Cycloid
> **Problem:**
> (a) Find the tangent to the cycloid $x = r(\theta - \sin\theta), y = r(1 - \cos\theta)$ at the point where $\theta = \pi/3$.
> (b) At what points is the tangent horizontal? When is it vertical?
> 
> 
> **Solution (a):**
> The slope of the tangent line is:
$$\frac{dy}{dx} = \frac{dy/d\theta}{dx/d\theta} = \frac{r\sin\theta}{r(1 - \cos\theta)} = \frac{\sin\theta}{1 - \cos\theta}$$
> When $\theta = \pi/3$, we have:
$$x = r\left(\frac{\pi}{3} - \sin\frac{\pi}{3}\right) = r\left(\frac{\pi}{3} - \frac{\sqrt{3}}{2}\right) \quad \text{and} \quad y = r\left(1 - \cos\frac{\pi}{3}\right) = \frac{r}{2}$$
$$\frac{dy}{dx} = \frac{\sin(\pi/3)}{1 - \cos(\pi/3)} = \frac{\sqrt{3}/2}{1 - 1/2} = \sqrt{3}$$
> Therefore, the slope of the tangent is $\sqrt{3}$ and its equation is:
$$y - \frac{r}{2} = \sqrt{3}\left(x - \frac{r\pi}{3} + \frac{r\sqrt{3}}{2}\right) \quad \text{or} \quad \sqrt{3}x - y = r\left(\frac{\pi}{\sqrt{3}} - 2\right)$$
> **Solution (b):**
> The tangent is horizontal when $dy/dx = 0$, which occurs when $\sin\theta = 0$ and $1 - \cos\theta \neq 0$. This happens at $\theta = (2n - 1)\pi$, where $n$ is an integer. The corresponding points on the cycloid are $((2n - 1)\pi r, 2r)$.
> When $\theta = 2n\pi$, both $dx/d\theta$ and $dy/d\theta$ are $0$. Using l'Hospital's Rule:
> 
> 
$$\lim_{\theta \to 2n\pi^+} \frac{dy}{dx} = \lim_{\theta \to 2n\pi^+} \frac{\sin\theta}{1 - \cos\theta} = \lim_{\theta \to 2n\pi^+} \frac{\cos\theta}{\sin\theta} = \infty$$
> A similar computation shows that $dy/dx \to -\infty$ as $\theta \to 2n\pi^-$. Thus, there are vertical tangents when $\theta = 2n\pi$, which corresponds to $x = 2n\pi r$.
> 
> 
> > [!NOTE] Tangents of a Cycloid
> > ![[Pasted image 20260922213255.png]]
> 
>

---


### 2. Areas under Parametric Curves

> [!info] Area Formula for Parametric Equations
> We know that the area under a curve \(y = F(x)\) from \(a\) to \(b\) is \(A = \int_a^b F(x) \, dx\), where \(F(x) \ge 0\)[cite: 95]. 
> If the curve is traced out once by the parametric equations \(x = f(t)\) and \(y = g(t)\), for \(\alpha \le t \le \beta\), we can calculate an area formula by using the Substitution Rule for Definite Integrals:
> 
$$\boxed{ A = \int_a^b y \, dx = \int_\alpha^\beta g(t) f'(t) \, dt }$$
> (Or $\int_\beta^\alpha g(t) f'(t) \, dt$ depending on the parameter limits corresponding to $x=a$ and $x=b$).
> 
> 

> [!example] Example 3: Area under a Cycloid
> **Problem:** Find the area under one arch of the cycloid $x = r(\theta - \sin\theta)$, $y = r(1 - \cos\theta)$.
> 
> 
> **Solution:**
> One arch of the cycloid is given by $0 \le \theta \le 2\pi$.
> Using the Substitution Rule with $y = r(1 - \cos\theta)$ and $dx = r(1 - \cos\theta) \, d\theta$, we have:
> 
> 
$$\begin{aligned} A &= \int_0^{2\pi} y \, dx = \int_0^{2\pi} r(1 - \cos\theta) r(1 - \cos\theta) \, d\theta \\ &= r^2 \int_0^{2\pi} (1 - \cos\theta)^2 \, d\theta \\ &= r^2 \int_0^{2\pi} (1 - 2\cos\theta + \cos^2\theta) \, d\theta \end{aligned}$$
> Applying the half-angle identity for $\cos^2\theta$:
$$\begin{aligned} A &= r^2 \int_0^{2\pi} \left[ 1 - 2\cos\theta + \frac{1}{2}(1 + \cos 2\theta) \right] \, d\theta \\ &= r^2 \left[ \frac{3}{2}\theta - 2\sin\theta + \frac{1}{4}\sin 2\theta \right]_0^{2\pi} \\ &= r^2 \left( \frac{3}{2} \cdot 2\pi \right) = 3\pi r^2 \end{aligned}$$
> This result demonstrates that the area under one arch of the cycloid is exactly three times the area of the generating rolling circle.
> 
> 
> > [!NOTE] Figure 3: Area under one arch of the cycloid
> > ![[Pasted image 20260922213341.png|center]]
> 
> 


---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 669)