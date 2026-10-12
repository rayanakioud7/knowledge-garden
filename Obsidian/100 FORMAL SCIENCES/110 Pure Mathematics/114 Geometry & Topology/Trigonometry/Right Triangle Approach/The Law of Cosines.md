
Date: 2026-05-29
Tags: [[Mathematics]], [[Geometry]], [[Trigonometry]], [[Functions]]

---
## The Law of Cosines

The Law of Sines cannot solve triangles if we know only two sides and the included angle (SAS) or all three sides (SSS). In these cases, the **Law of Cosines** applies.

> [!info] The Law of Cosines
> In any triangle $ABC$:
> $$ a^2 = b^2 + c^2 - 2bc \cos A $$
> $$ b^2 = a^2 + c^2 - 2ac \cos B $$
> $$ c^2 = a^2 + b^2 - 2ab \cos C $$
> 
![[Pasted image 20260529211604.png|center]]

**Proof Sketch (Distance Formula):**
Place vertex $A$ at the origin $(0,0)$ and side $c$ along the positive x-axis. Coordinates are $B(c, 0)$ and $C(b \cos A, b \sin A)$. The *Euclidien* distance from $B$ to $C$ is side $a$:

$$
\begin{aligned}
a^2 &= (b \cos A - c)^2 + (b \sin A - 0)^2 \\
&= b^2 \cos^2 A - 2bc \cos A + c^2 + b^2 \sin^2 A \\
&= b^2 (\cos^2 A + \sin^2 A) - 2bc \cos A + c^2 \quad \leftarrow \text{group terms} \\
&= b^2(1) - 2bc \cos A + c^2 \quad \leftarrow \text{Pythagorean Identity} \\
a^2 &= b^2 + c^2 - 2bc \cos A \quad \blacksquare
\end{aligned}
$$

![[Pasted image 20260529211627.png|center]]

---

## Example 1: Length of a Tunnel

> [!info] Pythagorean Theorem Connection
> If $\angle C = 90^\circ$, then $\cos C = 0$. The Law of Cosines reduces to $c^2 = a^2 + b^2$. Thus, the Pythagorean Theorem is a special case of the Law of Cosines.

> [!example] Example 1: Length of a Tunnel
> A surveyor measures two sides of a triangle formed by points $A$ and $B$ (tunnel ends) and an observation point $C$. Find the length of side $c$ ($AB$).
> *   Side adjacent to $C$: $388$ ft
> *   Other side adjacent to $C$: $212$ ft
> *   Included angle $\angle C = 82.4^\circ$
> 
>![[Pasted image 20260529212450.png|center]]
>
> **Solution**
> Apply the Law of Cosines:
> $$ c^2 = a^2 + b^2 - 2ab \cos C $$
> Substitute known values ($a=388, b=212$):
> $$
> \begin{aligned}
> c^2 &= 388^2 + 212^2 - 2(388)(212) \cos 82.4^\circ \\[10pt]
> &\approx 150544 + 44944 - 164352(0.13187) \\[10pt]
> &\approx 173730.2367 \quad \leftarrow \text{calculator value} \\[10pt]
> c &= \sqrt{173730.2367} \approx 416.8
> \end{aligned}
> $$
> The tunnel length is approximately **$417$ ft**.

---
## The Area of a Triangle

> [!info] Heron's Formula
> The **area** $\mathscr{A}$ of triangle $ABC$ given side lengths $a, b, c$:
> $$ \mathscr{A} = \sqrt{s(s-a)(s-b)(s-c)} $$
> where $s = \frac{1}{2}(a+b+c)$ is the **semiperimeter**.

![[Pasted image 20260529214149.png|center|364]]

**Proof:**
Start with $\mathscr{A} = \frac{1}{2}ab \sin C$. Squaring both sides and using the Pythagorean identity:
$$
\begin{aligned}
\mathscr{A}^2 &= \frac{1}{4}a^2b^2 \sin^2 C \\
&= \frac{1}{4}a^2b^2 (1 - \cos^2 C) \\
&= \frac{1}{4}a^2b^2 (1 - \cos C)(1 + \cos C)
\end{aligned}
$$

Substitute $\cos C = \frac{a^2+b^2-c^2}{2ab}$ into the factors:

**For $(1 + \cos C)$:**
$$
\begin{aligned}
1 + \cos C &= 1 + \frac{a^2+b^2-c^2}{2ab} \\
&= \frac{2ab + a^2 + b^2 - c^2}{2ab} \\
&= \frac{(a+b)^2 - c^2}{2ab} \\
&= \frac{(a+b+c)(a+b-c)}{2ab} \quad \leftarrow \text{Difference of squares}
\end{aligned}
$$

**For $(1 - \cos C)$:**
$$ 1 - \cos C = \frac{(c+a-b)(c-a+b)}{2ab} $$

Multiplying these factors back into the area equation:
$$
\begin{aligned}
\mathscr{A}^2 &= \frac{1}{4}a^2b^2 \left[ \frac{(c+a-b)(c-a+b)}{2ab} \right] \left[ \frac{(a+b+c)(a+b-c)}{2ab} \right] \\
&= \frac{1}{16} (a+b+c)(a+b-c)(c+a-b)(c-a+b)
\end{aligned}
$$

Substitute $s = \frac{a+b+c}{2}$:
*   $a+b+c = 2s$
*   $a+b-c = 2s - 2c = 2(s-c)$
*   $c+a-b = 2s - 2b = 2(s-b)$
*   $c-a+b = 2s - 2a = 2(s-a)$

$$ \mathscr{A}^2 = \frac{1}{16} (2s)(2(s-c))(2(s-b))(2(s-a)) = s(s-a)(s-b)(s-c) $$
Taking the square root yields Heron's Formula. $\blacksquare$

## Example 5: Area of a Lot

> [!example] Problem
> A triangular lot has side lengths $125$ ft, $280$ ft, and $315$ ft. Find the area.

![[Pasted image 20260529214642.png|center]]

**Solution**
First, calculate the semiperimeter $s$:
$$ s = \frac{125 + 280 + 315}{2} = 360 $$

Next, apply Heron's Formula $\mathscr{A} = \sqrt{s(s-a)(s-b)(s-c)}$:
$$
\begin{aligned}
\mathscr{A} &= \sqrt{360(360 - 125)(360 - 280)(360 - 315)} \\[10pt]
&= \sqrt{360(235)(80)(45)} \\[10pt]
&\approx 17,451.6 \quad \leftarrow \text{calculator value}
\end{aligned}
$$

The area is approximately **$17,452$ ft²**.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 532)