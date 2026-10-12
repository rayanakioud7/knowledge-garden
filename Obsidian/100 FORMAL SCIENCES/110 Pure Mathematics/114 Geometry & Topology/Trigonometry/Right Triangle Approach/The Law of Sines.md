Date: 2026-05-29
Tags: [[Mathematics]], [[Geometry]], [[Trigonometry]], [[Functions]]

---

## The Law of Sines

> [!info] The Law of Sines
> In any triangle $ABC$, side lengths are proportional to the sines of their opposite angles:
> $$ \frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c} $$
> 
![[Pasted image 20260529202302.png|center]]

**Proof Sketch:**
Using the area formula $\mathscr{A} = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B = \frac{1}{2}ab\sin C$. Multiplying by $\frac{2}{abc}$ yields:
$$ \frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c} $$

> [!example] Example 1: Tracking a Satellite (ASA Case)
> Given: Two stations $340$ mi apart ($\angle A = 75^\circ, \angle B = 60^\circ$). Find distance $b$ to satellite.
> 
>![[Pasted image 20260529202348.png|center]]
>
> **1. Find Missing Angle**
> $$ C = 180^\circ - (75^\circ + 60^\circ) = 45^\circ $$
>
> **2. Apply Law of Sines**
> $$
> \begin{aligned}
> \frac{\sin B}{b} &= \frac{\sin C}{c} \\[10pt]
> b &= \frac{c \sin B}{\sin C} \\[10pt]
> b &= \frac{340 \sin 60^\circ}{\sin 45^\circ} \\[10pt]
> &\approx 416 \quad \leftarrow \text{distance to satellite}
> \end{aligned}
> $$


---

## The Ambiguous Case

> [!info] SSA (Side-Side-Angle) Cases
> Given an angle $A$ and sides $a, b$, there are four possibilities:
> 1. **No triangle:** Side $a$ is too short to reach the other side ($a < b \sin A$).
> 2. **Right triangle:** Side $a$ just reaches the base ($a = b \sin A$).
> 3. **Two triangles:** Side $a$ can swing to two positions ($b \sin A < a < b$, assuming $A$ is acute).
> 4. **One triangle:** Side $a$ is long enough to hit only once ($a \ge b$ or $A \ge 90^\circ$ with $a > b$).

![[Pasted image 20260529203112.png|697]]

> [!example] Example 3: SSA, The One-Solution Case
> Solve $\triangle ABC$ where $\angle A = 45^\circ$, $a = 7\sqrt{2}$, $b = 7$.
>
> **1. Find Angle $B$**
> Use the Law of Sines to solve for $\sin B$:
> $$
> \begin{aligned}
> \frac{\sin A}{a} &= \frac{\sin B}{b} \\[10pt]
> \sin B &= \frac{b \sin A}{a} = \frac{7 \sin 45^\circ}{7\sqrt{2}} = \frac{7 (\frac{\sqrt{2}}{2})}{7\sqrt{2}} = \frac{1}{2}
> \end{aligned}
> $$
> Possible angles for $B$ are $30^\circ$ or $150^\circ$.
> *   Check validity: $\angle A + 150^\circ = 45^\circ + 150^\circ = 195^\circ > 180^\circ$ (Invalid).
> *   Therefore, only **$\angle B = 30^\circ$** is valid.
>
> **2. Find Angle $C$**
> $$ \angle C = 180^\circ - (45^\circ + 30^\circ) = 105^\circ $$
>
> **3. Find Side $c$**
> $$
> \begin{aligned}
> c &= \frac{b \sin C}{\sin B} \\[10pt]
> c &= \frac{7 \sin 105^\circ}{\sin 30^\circ} = \frac{7 \sin 105^\circ}{1/2} \\[10pt]
> &\approx 13.5
> \end{aligned}
> $$

![[Pasted image 20260529203259.png|center|380]]

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 524)