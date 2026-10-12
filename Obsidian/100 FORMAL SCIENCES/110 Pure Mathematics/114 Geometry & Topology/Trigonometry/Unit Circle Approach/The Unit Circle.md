Date: 2026-05-20
Tags: [[Mathematics]], [[Geometry]], [[Trigonometry]]

---
This note is heavily related to quadrants on a coordinate plane 
> see: [[Distance and Midpoint Formulas#Quadrants|Quadrants]]

![[Pasted image 20260521010141.png|center]]

**summary:**
![[Pasted image 20260522225411.png]]

---
## The Unit Circle

> [!info]
> The **unit circle** is the circle of radius $1$ centered at the origin in the $xy$-plane.
> $$x^2 + y^2 = 1$$

![[Pasted image 20260521003554.png|center]]

> [!example] Example 1: A Point on the Unit Circle
> 
> Show that the point $P\left(\frac{\sqrt{3}}{3}, \frac{\sqrt{6}}{3}\right)$ is on the unit circle.
> 
> Check if the coordinates satisfy $x^2 + y^2 = 1$:
> 
> $$\begin{aligned} \left(\frac{\sqrt{3}}{3}\right)^2 + \left(\frac{\sqrt{6}}{3}\right)^2 &= \frac{3}{9} + \frac{6}{9} \\ &= \frac{9}{9} \\ &= 1 \quad \checkmark \end{aligned}$$
> 
> $P$ is on the unit circle.

---

## Terminal Points on the Unit Circle

To find the **terminal point** $P(x,y)$ determined by a real number $t$, start at $(1,0)$ and measure an arc length $|t|$ along the circumference of the unit circle:

- **$t \ge 0$**: Move counterclockwise.
    
- **$t < 0$**: Move clockwise.
    

![[Pasted image 20260521004718.png|center]]

Because the circumference of the unit circle is $C = 2\pi(1) = 2\pi$, key fractional distances map directly to coordinate axes:

|**Arc Length (t)**|**Rotation**|**Terminal Point P(x,y)**|
|---|---|---|
|$t = \frac{\pi}{2}$|$\frac{1}{4}$ circle counterclockwise|$(0,1)$|
|$t = \pi$|$\frac{1}{2}$ circle counterclockwise|$(-1,0)$|
|$t = \frac{3\pi}{2}$|$\frac{3}{4}$ circle counterclockwise|$(0,-1)$|
|$t = 2\pi$|Full circle counterclockwise|$(1,0)$|

![[Pasted image 20260521004744.png|center]]

> [!example] Example 3: Finding Terminal Points
> 
> Find the terminal point on the unit circle determined by each real number $t$.
> 
> **(a)** $t = 3\pi$
> 
> $$\begin{aligned} 3\pi &= 2\pi + \pi \qquad &\leftarrow \text{one full rotation + half rotation counterclockwise} \\ P(x,y) &= (-1,0) \end{aligned}$$
> 
> **(b)** $t = -\pi$
> 
> $$\begin{aligned} -\pi &\implies \text{half rotation clockwise} \\ P(x,y) &= (-1,0) \end{aligned}$$
> 
> **(c)** $t = -\frac{\pi}{2}$
> 
> $$\begin{aligned} -\frac{\pi}{2} &\implies \text{quarter rotation clockwise} \\ P(x,y) &= (0,-1) \end{aligned}$$

![[Pasted image 20260521004805.png|center]]

> [!warning]
> 
> Different values of $t$ can determine the same terminal point.

---

### Derivation of Terminal Point for $t = \frac{\pi}{4}$

The terminal point $P(x,y)$ determined by $t = \frac{\pi}{4}$ is equidistant from $(1,0)$ and $(0,1)$. By symmetry across the line $y = x$, $P$ is the first-quadrant intersection of $x^2 + y^2 = 1$ and $y = x$:

$$\begin{aligned} x^2 + x^2 &= 1 \qquad &\leftarrow \text{substitute } y = x \\ 2x^2 &= 1 \qquad &\leftarrow \text{combine like terms} \\ x^2 &= \frac{1}{2} \qquad &\leftarrow \text{divide by 2} \\ x &= \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2} \qquad &\leftarrow \text{take square roots; select } x > 0 \text{ for Quadrant I} \end{aligned}$$

Since $y = x$, the terminal point is:

$$P\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$$

![[Pasted image 20260521010413.png|center]]

### Special Terminal Points

> [!info]
> The table gives the terminal points for some special values of t.
> 
> |**t**|**Terminal Point (x,y)**|
> |---|---|
> |$0$|$(1,0)$|
> |$\frac{\pi}{6}$|$\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$|
> |$\frac{\pi}{4}$|$\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$|
> |$\frac{\pi}{3}$|$\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$|
> |$\frac{\pi}{2}$|$(0,1)$|
> |$\pi$|$(-1,0)$|
> |$\frac{3\pi}{2}$|$(0,-1)$|
> 
> ![[Pasted image 20260521010438.png|center]]

> [!example] Example 4: Finding Terminal Points
> 
> Find the terminal point determined by each real number $t$.
> 
> **(a)** $t = -\frac{\pi}{4}$
> 
> Let $Q\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$ be the terminal point for $\frac{\pi}{4}$. $P$ has the same coordinates as $Q$ except for sign symmetry.
> 
> $$\text{Quadrant IV} \implies x > 0, \ y < 0$$
> 
> $$P\left(\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right)$$
> 
> **(b)** $t = \frac{3\pi}{4}$
> 
> Let $Q\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$ be the terminal point for $\frac{\pi}{4}$. $P$ has the same coordinates as $Q$ except for sign symmetry.
> 
> $$\text{Quadrant II} \implies x < 0, \ y > 0$$
> 
> $$P\left(-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$$
> 
> **(c)** $t = -\frac{5\pi}{6}$
> 
> Let $Q\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$ be the terminal point for $\frac{\pi}{6}$. $P$ has the same coordinates as $Q$ except for sign symmetry.
> 
> $$\text{Quadrant III} \implies x < 0, \ y < 0$$
> 
> $$P\left(-\frac{\sqrt{3}}{2}, -\frac{1}{2}\right)$$

![[Pasted image 20260521011712.png|center]]

---

## The Reference Number

Let $t$ be a real number. The **reference number** $\bar{t}$ associated with $t$ is the shortest distance along the unit circle between the terminal point determined by $t$ and the $x$-axis.

> [!info] Finding Reference Numbers by Quadrant
> 
> - **Quadrant I**: $\bar{t} = t$
>     
> - **Quadrant II**: $\bar{t} = \pi - t$
>     
> - **Quadrant III**: $\bar{t} = t - \pi$
>     
> - **Quadrant IV**: $\bar{t} = 2\pi - t$
>     

![[Pasted image 20260522221426.png]]

> [!example] Example 5: Finding Reference Numbers
> 
> Find the reference number for each value of $t$.
> 
> **(a)** $t = \frac{5\pi}{6}$
> 
> $$\bar{t} = \pi - \frac{5\pi}{6} = \frac{\pi}{6} \qquad \leftarrow \text{Quadrant II}$$
> 
> **(b)** $t = \frac{7\pi}{4}$
> 
> $$\bar{t} = 2\pi - \frac{7\pi}{4} = \frac{\pi}{4} \qquad \leftarrow \text{Quadrant IV}$$
> 
> **(c)** $t = -\frac{2\pi}{3}$
> 
> $$t = -\frac{2\pi}{3} + 2\pi = \frac{4\pi}{3} \qquad \leftarrow \text{find coterminal angle in Quadrant III}$$
> 
> $$\bar{t} = \frac{4\pi}{3} - \pi = \frac{\pi}{3}$$
> 
> **(d)** $t = 5.80$
> 
> $$\bar{t} = 2\pi - 5.80 \approx 6.28 - 5.80 = 0.48 \qquad \leftarrow \text{Quadrant IV}$$

![[Pasted image 20260522221514.png|center]]

---

> [!info] Guidelines for Using Reference Numbers to Find Terminal Points
> 
> To find the terminal point $P$ determined by any value of $t$:
> 1. Find the reference number $\bar{t}$.
> 2. Find the terminal point $Q(a, b)$ determined by $\bar{t}$.
> 3. The terminal point determined by $t$ is $P(\pm a, \pm b)$, where the signs are chosen according to the quadrant in which this terminal point lies.
 

> [!example] Example 6: Using Reference Numbers to Find Terminal Points
> 
> Find the terminal point determined by each real number $t$.
> 
> **(a)** $t = \frac{5\pi}{6}$
> 
> $$\begin{aligned} \bar{t} &= \frac{\pi}{6} \implies Q\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right) \qquad &\leftarrow \text{from reference values} \\ t &\in \text{Quadrant II} \implies x < 0, \ y > 0 \end{aligned}$$
> 
> $$P\left(-\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$$
> 
> **(b)** $t = \frac{7\pi}{4}$
> 
> $$\begin{aligned} \bar{t} &= \frac{\pi}{4} \implies Q\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right) \\ t &\in \text{Quadrant IV} \implies x > 0, \ y < 0 \end{aligned}$$
> 
> $$P\left(\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right)$$
> 
> **(c)** $t = -\frac{2\pi}{3}$
> 
> $$\begin{aligned} \bar{t} &= \frac{\pi}{3} \implies Q\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right) \\ t &\in \text{Quadrant III} \implies x < 0, \ y < 0 \end{aligned}$$
> 
> $$P\left(-\frac{1}{2}, -\frac{\sqrt{3}}{2}\right)$$

### Terminal Points for Large values of $t$

Since the circumference of the unit circle is $2\pi$, adding or subtracting integer multiples of $2\pi$ yields identical terminal points:

$$P(t) = P(t + 2n\pi) \qquad n \in \mathbb{Z}$$

> [!example] Example 7: Finding the Terminal Point for Large $t$
> 
> Find the terminal point determined by $t = \frac{29\pi}{6}$.
> 
> $$\begin{aligned} t = \frac{29\pi}{6} &= 4\pi + \frac{5\pi}{6} \qquad &\leftarrow \text{extract full counterclockwise rotations} \\ &\equiv \frac{5\pi}{6} \end{aligned}$$
> 
> From Example 6(a), the terminal point is:
> 
> $$P\left(-\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$$

![[Pasted image 20260522225948.png|center]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 410)