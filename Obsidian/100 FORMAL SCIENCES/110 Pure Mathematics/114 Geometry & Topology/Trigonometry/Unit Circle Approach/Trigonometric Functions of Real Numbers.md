Date: 2026-05-22
Tags: [[Mathematics]], [[Geometry]], [[Trigonometry]], [[Functions]]

---

Let $t$ be any real number and let $P(x, y)$ be the terminal point on the unit circle determined by $t$. Because these functions are mapped via the unit circle, they are also called **circular functions**.

> [!info] Definition of the Trigonometric Functions
> 
> $$\begin{aligned} \sin t &= y & \cos t &= x & \tan t &= \frac{y}{x} \quad x \ne 0 \\ \\ \csc t &= \frac{1}{y} \quad y \ne 0 & \sec t &= \frac{1}{x} \quad x \ne 0 & \cot t &= \frac{y}{x} \quad y \ne 0 \end{aligned}$$

![[Pasted image 20260522233354.png|center]]

> [!example] Example 1: Evaluating Trigonometric Functions
> 
> Find the six trigonometric functions of each real number $t$.
> 
> **(a)** $t = \frac{\pi}{3}$
> 
> $$t = \frac{\pi}{3} \implies P\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right) \qquad \leftarrow x = \frac{1}{2}, \ y = \frac{\sqrt{3}}{2}$$
> 
> $$\begin{aligned} \sin \frac{\pi}{3} &= \frac{\sqrt{3}}{2} & \cos \frac{\pi}{3} &= \frac{1}{2} & \tan \frac{\pi}{3} &= \frac{\sqrt{3}/2}{1/2} = \sqrt{3} \\ \\ \csc \frac{\pi}{3} &= \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3} & \sec \frac{\pi}{3} &= 2 & \cot \frac{\pi}{3} &= \frac{1/2}{\sqrt{3}/2} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3} \end{aligned}$$
> 
> ![[Pasted image 20260522233531.png|center]]
> 
> **(b)** $t = \frac{\pi}{2}$
> 
> $$t = \frac{\pi}{2} \implies P(0, 1) \qquad \leftarrow x = 0, \ y = 1$$
> 
> $$\begin{aligned} \sin \frac{\pi}{2} &= 1 & \cos \frac{\pi}{2} &= 0 \\ \\ \csc \frac{\pi}{2} &= \frac{1}{1} = 1 & \cot \frac{\pi}{2} &= \frac{0}{1} = 0 \end{aligned}$$
> 
> $$\tan \frac{\pi}{2} = \text{undefined}, \quad \sec \frac{\pi}{2} = \text{undefined} \qquad \leftarrow \text{division by } x = 0$$
> 
> ![[Pasted image 20260522233550.png|center]]

---

### Special Values of the Trigonometric Functions

| **t**            | **$\sin(t)$**        | **$\cos(t)$**        | **$\tan(t)$**        | **$\csc(t)$**         | **$\sec(t)$**         | **$\cot(t)$**        |
| ---------------- | -------------------- | -------------------- | -------------------- | --------------------- | --------------------- | -------------------- |
| $0$              | $0$                  | $1$                  | $0$                  | —                     | $1$                   | —                    |
| $\frac{\pi}{6}$  | $\frac{1}{2}$        | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ | $2$                   | $\frac{2\sqrt{3}}{3}$ | $\sqrt{3}$           |
| $\frac{\pi}{4}$  | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$                  | $\sqrt{2}$            | $\sqrt{2}$            | $1$                  |
| $\frac{\pi}{3}$  | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$        | $\sqrt{3}$           | $\frac{2\sqrt{3}}{3}$ | $2$                   | $\frac{\sqrt{3}}{3}$ |
| $\frac{\pi}{2}$  | $1$                  | $0$                  | —                    | $1$                   | —                     | $0$                  |
| $\pi$            | $0$                  | $-1$                 | $0$                  | —                     | $-1$                  | —                    |
| $\frac{3\pi}{2}$ | $-1$                 | $0$                  | —                    | $-1$                  | —                     | $0$                  |

![[Pasted image 20260523000415.png|center]]

Memory trick for pattern recognition of fundamental sines and cosines in Quadrant I:

$$\boxed{\frac{\sqrt{\square}}{2}}$$

|**t**|**sint**|**cost**|
|---|---|---|
|$0$|$\frac{\sqrt{0}}{2}$|$\frac{\sqrt{4}}{2}$|
|$\frac{\pi}{6}$|$\frac{\sqrt{1}}{2}$|$\frac{\sqrt{3}}{2}$|
|$\frac{\pi}{4}$|$\frac{\sqrt{2}}{2}$|$\frac{\sqrt{2}}{2}$|
|$\frac{\pi}{3}$|$\frac{\sqrt{3}}{2}$|$\frac{\sqrt{1}}{2}$|
|$\frac{\pi}{2}$|$\frac{\sqrt{4}}{2}$|$\frac{\sqrt{0}}{2}$|

### Domains of the Trigonometric Functions

Domains are determined by tracking where the denominator coordinates ($x$ or $y$) equal $0$ on the unit circle.

- **$\cot t, \csc t$**: Undefined when $y = 0 \iff t = n\pi$ for $n \in \mathbb{Z}$
    
- **$\tan t, \sec t$**: Undefined when $x = 0 \iff t = \frac{\pi}{2} + n\pi$ for $n \in \mathbb{Z}$
    

> [!info] Domains of the Trigonometric Functions
> 
> |**Function**|**Domain**|
> |---|---|
> |$\sin, \cos$|All real numbers|
> |$\tan, \sec$|All real numbers other than $\frac{\pi}{2} + n\pi$ for any integer $n$|
> |$\cot, \csc$|All real numbers other than $n\pi$ for any integer $n$|

Note: The range of the sine and cosine functions is the closed interval $[-1, 1]$.

---

### Signs of the Trigonometric Functions

The signs of the trigonometric functions depend entirely on the quadrant of the terminal point $P(x,y)$ determined by $t$.

|**Quadrant**|**Coordinates**|**Positive Functions**|**Negative Functions**|
|---|---|---|---|
|**I**|$x > 0, \ y > 0$|All|None|
|**II**|$x < 0, \ y > 0$|$\sin, \csc$|$\cos, \sec, \tan, \cot$|
|**III**|$x < 0, \ y < 0$|$\tan, \cot$|$\sin, \csc, \cos, \sec$|
|**IV**|$x > 0, \ y < 0$|$\cos, \sec$|$\sin, \csc, \tan, \cot$|

![[Pasted image 20260523001359.png|center]]

Mnemonic device for quadrant signs:

$$\text{\textbf{A}ll \textbf{S}udents \textbf{T}ake \textbf{C}alculus}$$

### Evaluating Trigonometric Functions for any Real Number

To compute values of the trigonometric functions for any real number $t$, utilize the reference number $\bar{t}$ paired with the sign of the host quadrant.

> [!info] Guidelines for Evaluation
> 
> 1. **Find the reference number**: Find the reference number $\bar{t}$ associated with $t$.
>     
> 2. **Find the sign**: Determine the sign of the trigonometric function of $t$ by noting the quadrant in which the terminal point lies.
>     
> 3. **Find the value**: The value of the trigonometric function of $t$ is the same, except possibly for sign, as the value of the trigonometric function of $\bar{t}$.
>

---

## Evaluating Trigonometric Functions

> [!example] Example 2: Evaluating Trigonometric Functions
> Find each value.
> (a) $\cos \frac{2\pi}{3}$
> (b) $\tan \left(-\frac{\pi}{3}\right)$
> (c) $\sin \frac{19\pi}{4}$

**Solution**

**(a)** The reference number for $2\pi/3$ is $\pi/3$. Since the terminal point of $2\pi/3$ is in Quadrant II, $\cos(2\pi/3)$ is negative. Thus

$$
\begin{aligned}
\cos \frac{2\pi}{3} &= -\cos \frac{\pi}{3} && \leftarrow \text{Sign (Quad II)} \\
&= -\frac{1}{2} && \leftarrow \text{Reference number } (\pi/3) \text{ from Table 1}
\end{aligned}
$$

![[Pasted image 20260524004025.png|center]]

**(b)** The reference number for $-\pi/3$ is $\pi/3$. Since the terminal point of $-\pi/3$ is in Quadrant IV, $\tan(-\pi/3)$ is negative. Thus

$$
\begin{aligned}
\tan \left(-\frac{\pi}{3}\right) &= -\tan \frac{\pi}{3} && \leftarrow \text{Sign (Quad IV)} \\
&= -\sqrt{3} && \leftarrow \text{Reference number } (\pi/3) \text{ from Table 1}
\end{aligned}
$$

![[Pasted image 20260524004132.png|center]]

**(c)** Subtract multiples of $2\pi$ to find a coterminal angle within $[0, 2\pi)$.
Since $(19\pi/4) - 4\pi = 3\pi/4$, the terminal points determined by $19\pi/4$ and $3\pi/4$ are the same. The reference number for $3\pi/4$ is $\pi/4$. Since the terminal point of $3\pi/4$ is in Quadrant II, $\sin(3\pi/4)$ is positive. Thus

$$
\begin{aligned}
\sin \frac{19\pi}{4} &= \sin \frac{3\pi}{4} && \leftarrow \text{Subtract } 4\pi \text{ (coterminal)} \\
&= +\sin \frac{\pi}{4} && \leftarrow \text{Sign (Quad II)} \\
&= \frac{\sqrt{2}}{2} && \leftarrow \text{Reference number } (\pi/4) \text{ from Table 1}
\end{aligned}
$$

![[Pasted image 20260524004152.png|center]]

---

## The Unit Circle Approach and the Right Triangle Approach

> [!info] Equivalence of Approaches
> Trigonometric functions of **angles** $\theta$ (defined by ratios of sides in right triangles) are exactly the same as trigonometric functions of **real numbers** $t$ (defined by points on the unit circle), provided angles are measured in **radians**.
>
> The real number $t$ represents:
> 1. The length of an arc on the unit circle.
> 2. The radian measure of the angle $\theta$.

### Geometric Derivation

Consider a right triangle $OPQ$ with angle $\theta$ in standard position. Let $P'(x,y)$ be the terminal point on the unit circle determined by the arc of length $t$.

![[Pasted image 20260524005025.png|center]]

By dropping a perpendicular from $P'$ to $Q'$ on the x-axis, $\triangle OPQ$ is similar to $\triangle OP'Q'$. Since the radius of the unit circle is $1$ ($OP'=1$):

$$
\begin{aligned}
\sin \theta &= \frac{\text{opp}}{\text{hyp}} = \frac{PQ}{OP} = \frac{P'Q'}{OP'} = \frac{y}{1} = y = \sin t \\
\cos \theta &= \frac{\text{adj}}{\text{hyp}} = \frac{OQ}{OP} = \frac{OQ'}{OP'} = \frac{x}{1} = x = \cos t
\end{aligned}
$$

![[Pasted image 20260524005240.png|center]]

### Conclusion

Since the radian measure of $\theta$ is $t$, the functions assign identical values to a given real number. Different applications require viewing these functions through different lenses (geometric ratios vs. circular coordinates).

---

## Even-Odd Properties of Trigonometric Functions

> [!info] Even-Odd Properties
> Sine, cosecant, tangent, and cotangent are **odd functions**.  
> Cosine and secant are **even functions**.
>
> $$
> \begin{aligned}
> \sin(-t) &= -\sin t & \cos(-t) &= \cos t & \tan(-t) &= -\tan t \\
> \csc(-t) &= -\csc t & \sec(-t) &= \sec t & \cot(-t) &= -\cot t
> \end{aligned}
> $$

![[Pasted image 20260524011627.png|center]]

From Figure , since the point corresponding to $-t$ is $(x, -y)$ when $t$ corresponds to $(x, y)$:

$$
\begin{aligned}
\sin(-t) &= -y = -\sin t \\
\cos(-t) &= x = \cos t \\
\tan(-t) &= \frac{-y}{x} = -\frac{y}{x} = -\tan t
\end{aligned}
$$

Reciprocal identities preserve parity: reciprocal of an even function is even; reciprocal of an odd function is odd.

---

> [!example] Example 4: Even and Odd Trigonometric Functions
> Use the even-odd properties to determine each value.
> 
> **(a)** $\sin\left(-\frac{\pi}{6}\right)$  
> **(b)** $\cos\left(-\frac{\pi}{4}\right)$

**Solution**

By even-odd properties and standard values (Table 1):

**(a)**  
$$
\sin\left(-\frac{\pi}{6}\right) = -\sin\frac{\pi}{6} = -\frac{1}{2} \quad \leftarrow \text{Sine is odd}
$$

**(b)**  
$$
\cos\left(-\frac{\pi}{4}\right) = \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2} \quad \leftarrow \text{Cosine is even}
$$
---
## Fundamental Identities

> [!info] Fundamental Identities
> **Reciprocal Identities**
> $$
> \csc t = \frac{1}{\sin t} \quad \sec t = \frac{1}{\cos t} \quad \cot t = \frac{1}{\tan t}
> $$
> $$
> \tan t = \frac{\sin t}{\cos t} \quad \cot t = \frac{\cos t}{\sin t}
> $$
>
> **Pythagorean Identities**
> $$
> \sin^2 t + \cos^2 t = 1
> $$
> $$
> \tan^2 t + 1 = \sec^2 t
> $$
> $$
> 1 + \cot^2 t = \csc^2 t
> $$

### Proof of Pythagorean Identities

Let $P(x, y)$ be a point on the unit circle corresponding to real number $t$. By definition:
$$
\cos t = x, \quad \sin t = y
$$
Since $P(x,y)$ lies on the unit circle:
$$
x^2 + y^2 = 1 \implies \sin^2 t + \cos^2 t = 1 \quad \blacksquare
$$

Divide both sides by $\cos^2 t$ (provided $\cos t \ne 0$):
$$
\begin{aligned}
\frac{\sin^2 t}{\cos^2 t} + \frac{\cos^2 t}{\cos^2 t} &= \frac{1}{\cos^2 t} \\
\left(\frac{\sin t}{\cos t}\right)^2 + 1 &= \left(\frac{1}{\cos t}\right)^2 \\
\tan^2 t + 1 &= \sec^2 t \quad \blacksquare
\end{aligned}
$$

Divide both sides of $\sin^2 t + \cos^2 t = 1$ by $\sin^2 t$ (provided $\sin t \ne 0$):
$$
\begin{aligned}
\frac{\sin^2 t}{\sin^2 t} + \frac{\cos^2 t}{\sin^2 t} &= \frac{1}{\sin^2 t} \\
1 + \left(\frac{\cos t}{\sin t}\right)^2 &= \left(\frac{1}{\sin t}\right)^2 \\
1 + \cot^2 t &= \csc^2 t \quad \blacksquare
\end{aligned}
$$
---

 ## Finding and Relating Trigonometric Functions

> [!example] Example 5: Finding All Trigonometric Functions from the Value of One
> If $\cos t = \frac{3}{5}$ and $t$ is in Quadrant IV, find the values of all the trigonometric functions at $t$.

**Solution**

From the Pythagorean identities:

$$
\begin{aligned}
\sin^2 t + \cos^2 t &= 1 && \leftarrow \text{Pythagorean identity} \\
\sin^2 t + \left(\frac{3}{5}\right)^2 &= 1 && \leftarrow \text{Substitute } \cos t = \frac{3}{5} \\
\sin^2 t &= 1 - \frac{9}{25} = \frac{16}{25} && \leftarrow \text{Solve for } \sin^2 t \\
\sin t &= \pm \frac{4}{5} && \leftarrow \text{Take square roots}
\end{aligned}
$$

Since $t$ is in Quadrant IV, $\sin t < 0$, so $\sin t = -\frac{4}{5}$.

Now use reciprocal and quotient identities:

$$
\begin{aligned}
\sin t &= -\frac{4}{5} & \cos t &= \frac{3}{5} & \tan t &= \frac{\sin t}{\cos t} = \frac{-4/5}{3/5} = -\frac{4}{3} \\
\csc t &= \frac{1}{\sin t} = -\frac{5}{4} & \sec t &= \frac{1}{\cos t} = \frac{5}{3} & \cot t &= \frac{1}{\tan t} = -\frac{3}{4}
\end{aligned}
$$

---

> [!example] Example 6: Writing One Trigonometric Function in Terms of Another
> Write $\tan t$ in terms of $\cos t$, where $t$ is in Quadrant III.

**Solution**

Since $\tan t = \frac{\sin t}{\cos t}$, express $\sin t$ via Pythagorean identity:

$$
\begin{aligned}
\sin^2 t + \cos^2 t &= 1 \\
\sin^2 t &= 1 - \cos^2 t && \leftarrow \text{Solve for } \sin^2 t \\
\sin t &= \pm \sqrt{1 - \cos^2 t} && \leftarrow \text{Take square roots}
\end{aligned}
$$

In Quadrant III, $\sin t < 0$, so take negative root:

$$
\tan t = \frac{\sin t}{\cos t} = \frac{-\sqrt{1 - \cos^2 t}}{\cos t}
$$

---

*Note: Convention — $\sin^n t$ means $(\sin t)^n$ for all integers $n$ except $n = -1$. Superscript $-1$ denotes inverse function (covered later).*

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 417)