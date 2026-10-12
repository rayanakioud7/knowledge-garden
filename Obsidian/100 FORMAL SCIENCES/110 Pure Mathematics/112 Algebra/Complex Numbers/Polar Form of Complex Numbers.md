Date: 2026-06-08
Tags: [[Mathematics]], [[Algebra]], [[Polar Coordinates]]

---

## Polar Form of Complex Numbers; De Moivre's Theorem

### Graphing Complex Numbers

Complex numbers $z = a + bi$ are graphed in the **complex plane**:
- **Real axis (Re)**: Horizontal axis ($a$).
- **Imaginary axis (Im)**: Vertical axis ($b$).
- Plot $z$ as the point $(a, b)$.

![[Pasted image 20260608221355.png]]

> [!example] Example 2: Graphing Sets of Complex Numbers
> **(a)** $S = \{a + bi \mid a \ge 0\}$: Right half-plane (including imaginary axis).
> **(b)** $T = \{a + bi \mid a < 1, b \ge 0\}$: Region to the left of $x=1$ and above x-axis (Quadrant II and part of QI).

![[Pasted image 20260608221412.png]]

---

### Modulus of a Complex Number

The **modulus** (or absolute value) $|z|$ is the distance from the origin to $z=a+bi$.

> [!info] Definition
> $$ |z| = |a + bi| = \sqrt{a^2 + b^2} $$
> 
> ![[Pasted image 20260608221511.png|center]]

> [!example] Example 3: Calculating Modulus
> - $|3 + 4i| = \sqrt{3^2 + 4^2} = 5$
> - $|8 - 5i| = \sqrt{8^2 + (-5)^2} = \sqrt{89}$

> [!example] Example 4: Graphing Sets Defined by Modulus
> **(a)** $C = \{z \mid |z| = 1\}$: Circle of radius 1 centered at origin (Unit Circle).
> **(b)** $D = \{z \mid |z| \le 1\}$: Unit disk (interior and boundary of unit circle).

![[Pasted image 20260608221532.png|center]]

---

### Polar Form of Complex Numbers

Any complex number $z = a + bi$ can be written in polar (trigonometric) form using $r = |z|$ and angle $\theta$.

> [!info] Polar Form
> $$ z = r(\cos \theta + i \sin \theta) $$
> where:
> - $r = |z| = \sqrt{a^2 + b^2}$ (modulus)
> - $\tan \theta = \frac{b}{a}$ ($\theta$ is the **argument**)

*Note: The argument $\theta$ is not unique; any $\theta + 2n\pi$ works. Choose $\theta$ based on the quadrant of $(a,b)$.*

![[Pasted image 20260608221613.png|center]]

> [!example] Example 5: Writing Complex Numbers in Polar Form
>
> **(a)** $1 + i$
> - $r = \sqrt{1^2+1^2} = \sqrt{2}$
> - $\tan \theta = 1/1 = 1 \implies \theta = \pi/4$ (QI)
> - **Result**: $\sqrt{2}(\cos \frac{\pi}{4} + i \sin \frac{\pi}{4})$
>
> **(b)** $-1 + \sqrt{3}i$
> - $r = \sqrt{(-1)^2 + (\sqrt{3})^2} = 2$
> - $\tan \theta = -\sqrt{3} \implies \theta = 2\pi/3$ (QII)
> - **Result**: $2(\cos \frac{2\pi}{3} + i \sin \frac{2\pi}{3})$
>
> **(c)** $-4\sqrt{3} - 4i$
> - $r = \sqrt{48 + 16} = 8$
> - $\tan \theta = \frac{-4}{-4\sqrt{3}} = \frac{1}{\sqrt{3}} \implies \theta = 7\pi/6$ (QIII)
> - **Result**: $8(\cos \frac{7\pi}{6} + i \sin \frac{7\pi}{6})$
>
> **(d)** $3 + 4i$
> - $r = \sqrt{3^2+4^2} = 5$
> - $\theta = \tan^{-1}(4/3) \approx 0.93$ rad (QI, not a standard angle)
> - **Result**: $5[\cos(\tan^{-1}\frac{4}{3}) + i \sin(\tan^{-1}\frac{4}{3})] \approx 5(\cos 0.93 + i \sin 0.93)$

![[Pasted image 20260608221641.png]]

---
## Multiplication, Division, and Powers of Complex Numbers

> [!info] Multiplication and Division in Polar Form
> Let $z_1 = r_1(\cos \theta_1 + i \sin \theta_1)$ and $z_2 = r_2(\cos \theta_2 + i \sin \theta_2)$.
> 
> **Multiplication**: Multiply moduli, add arguments.
> $$ z_1 z_2 = r_1 r_2 [\cos(\theta_1 + \theta_2) + i \sin(\theta_1 + \theta_2)] $$
> 
> **Division**: Divide moduli, subtract arguments.
> $$ \frac{z_1}{z_2} = \frac{r_1}{r_2} [\cos(\theta_1 - \theta_2) + i \sin(\theta_1 - \theta_2)] \quad (z_2 \neq 0) $$

> [!example] Example 6: Multiplying and Dividing
> Let $z_1 = 2(\cos \frac{\pi}{4} + i \sin \frac{\pi}{4})$ and $z_2 = 5(\cos \frac{\pi}{3} + i \sin \frac{\pi}{3})$.
> 
> **(a) Product**:
> $$
> \begin{aligned}
> z_1 z_2 &= (2)(5) \left[ \cos\left(\frac{\pi}{4} + \frac{\pi}{3}\right) + i \sin\left(\frac{\pi}{4} + \frac{\pi}{3}\right) \right] \\
> &= 10 \left( \cos \frac{7\pi}{12} + i \sin \frac{7\pi}{12} \right) \approx -2.588 + 9.659i
> \end{aligned}
> $$
> 
> **(b) Quotient**:
> $$
> \begin{aligned}
> \frac{z_1}{z_2} &= \frac{2}{5} \left[ \cos\left(\frac{\pi}{4} - \frac{\pi}{3}\right) + i \sin\left(\frac{\pi}{4} - \frac{\pi}{3}\right) \right] \\
> &= \frac{2}{5} \left[ \cos\left(-\frac{\pi}{12}\right) + i \sin\left(-\frac{\pi}{12}\right) \right] \approx 0.3864 - 0.1035i
> \end{aligned}
> $$

---
### De Moivre's Theorem

> [!info] De Moivre's Theorem
> If $z = r(\cos \theta + i \sin \theta)$, then for any integer $n$ (negative, positive and zero):
> $$ z^n = r^n (\cos n\theta + i \sin n\theta) $$
> *To take the $n$th power, take the $n$th power of the modulus and multiply the argument by $n$.*

> [!example] Example 7: Finding a Power Using De Moivre's Theorem
> Find $\left(\frac{1}{2} + \frac{1}{2}i\right)^{10}$.
> 
> **Solution**
> First, write in polar form. Since $\frac{1}{2} + \frac{1}{2}i = \frac{1}{2}(1+i)$, and $1+i = \sqrt{2}(\cos \frac{\pi}{4} + i \sin \frac{\pi}{4})$:
> $$ z = \frac{\sqrt{2}}{2} \left( \cos \frac{\pi}{4} + i \sin \frac{\pi}{4} \right) $$
> Apply De Moivre's Theorem:
> $$
> \begin{aligned}
> z^{10} &= \left(\frac{\sqrt{2}}{2}\right)^{10} \left[ \cos\left(10 \cdot \frac{\pi}{4}\right) + i \sin\left(10 \cdot \frac{\pi}{4}\right) \right] \\
> &= \frac{2^5}{2^{10}} \left( \cos \frac{5\pi}{2} + i \sin \frac{5\pi}{2} \right) \\
> &= \frac{1}{32} (0 + i(1)) = \frac{1}{32}i
> \end{aligned}
> $$

---

## nth Roots of Complex Numbers

> [!info] Formula for nth Roots
> If $z = r(\cos \theta + i \sin \theta)$ and $n$ is a positive integer, $z$ has $n$ distinct $n$th roots $w_k$:
> $$ w_k = r^{1/n} \left[ \cos\left(\frac{\theta + 2k\pi}{n}\right) + i \sin\left(\frac{\theta + 2k\pi}{n}\right) \right] $$
> for $k = 0, 1, 2, \dots, n-1$.

> [!info] Guidelines for Finding nth Roots
> 1. **Modulus**: The modulus of each $n$th root is $r^{1/n}$.
> 2. **Argument**: The argument of the first root ($k=0$) is $\theta/n$.
> 3. **Roots**: Repeatedly add $2\pi/n$ to get the argument of each successive root.
> 
> *Geometric property: The $n$th roots are spaced equally on a circle of radius $r^{1/n}$.*

> [!example] Example 8: Finding Roots of a Complex Number
> Find the six sixth roots of $z = -64$.
> 
> **Solution**
> In polar form, $z = 64(\cos \pi + i \sin \pi)$. Here $r=64, \theta=\pi, n=6$.
> Modulus of roots: $64^{1/6} = 2$.
> Arguments: $\frac{\pi + 2k\pi}{6}$ for $k=0,1,2,3,4,5$.
> 
> $$
> \begin{aligned}
> w_0 &= 2\left(\cos \frac{\pi}{6} + i \sin \frac{\pi}{6}\right) = \sqrt{3} + i & (k=0) \\
> w_1 &= 2\left(\cos \frac{\pi}{2} + i \sin \frac{\pi}{2}\right) = 2i & (k=1) \\
> w_2 &= 2\left(\cos \frac{5\pi}{6} + i \sin \frac{5\pi}{6}\right) = -\sqrt{3} + i & (k=2) \\
> w_3 &= 2\left(\cos \frac{7\pi}{6} + i \sin \frac{7\pi}{6}\right) = -\sqrt{3} - i & (k=3) \\
> w_4 &= 2\left(\cos \frac{3\pi}{2} + i \sin \frac{3\pi}{2}\right) = -2i & (k=4) \\
> w_5 &= 2\left(\cos \frac{11\pi}{6} + i \sin \frac{11\pi}{6}\right) = \sqrt{3} - i & (k=5)
> \end{aligned}
> $$

![[Pasted image 20260608231604.png|center|319]]

---

> [!example] Example 9: Finding Cube Roots (using degrees)
> Find the three cube roots of $z = 2 + 2i$.
> 
> **Solution**
> Convert to polar form using degrees: $r = \sqrt{2^2+2^2} = 2\sqrt{2}$, $\theta = 45^\circ$.
> $$ z = 2\sqrt{2}(\cos 45^\circ + i \sin 45^\circ) $$
> Modulus of roots: $(2\sqrt{2})^{1/3} = (2^{3/2})^{1/3} = 2^{1/2} = \sqrt{2}$.
> Arguments: $\frac{45^\circ + 360^\circ k}{3} = 15^\circ + 120^\circ k$.
> 
> $$
> \begin{aligned}
> w_0 &= \sqrt{2}(\cos 15^\circ + i \sin 15^\circ) \approx 1.366 + 0.366i & (k=0) \\
> w_1 &= \sqrt{2}(\cos 135^\circ + i \sin 135^\circ) = -1 + i & (k=1) \\
> w_2 &= \sqrt{2}(\cos 255^\circ + i \sin 255^\circ) \approx -0.366 - 1.366i & (k=2)
> \end{aligned}
> $$

![[Pasted image 20260608231625.png|center]]

---

> [!example] Example 10: Solving an Equation Using the nth Roots Formula
> Solve the equation $z^6 + 64 = 0$.
> 
> **Solution**
> Rewrite as $z^6 = -64$. The solutions are the six sixth roots of $-64$, which were found in Example 8.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 618)