Date: 2026-05-17
Tags: [[Mathematics]], [[100 FORMAL SCIENCES/110 Pure Mathematics/111 Foundations/Functions/Functions]]

---

## One-to-One Functions (Injective)

> [!info] Definition of a One-to-One Function
> A function is called **one-to-one** (or **injective**) if no two elements in its domain have the same image. That is:
> $$ f(x_1) \neq f(x_2) \quad \text{whenever} \quad x_1 \neq x_2 $$
> Equivalently:
> $$ f(x_1) = f(x_2) \implies x_1 = x_2 $$

![[Pasted image 20260517201354.png|center]]

### Horizontal Line Test

> A function is one-to-one **if and only if** every horizontal line intersects its graph at most once.

- If any horizontal line crosses the graph more than once → not injective.
- If all horizontal lines cross at most once → injective.

![[Pasted image 20260517201447.png|center|337]]

---
> [!example] Example 1: Deciding Whether a Function Is One-to-One
> Is $f(x) = x^3$ one-to-one?

**Solution 1 (Algebraic)**  
If $x_1 \neq x_2$, then $x_1^3 \neq x_2^3$. So $f$ is injective.

**Solution 2 (Graphical)**  
No horizontal line intersects the graph more than once → passes Horizontal Line Test → injective.

![[Pasted image 20260517201808.png|center|323]]

---

> [!tip] Monotonic Functions Are Injective
> Every strictly increasing or strictly decreasing function on an interval is one-to-one.

---

> [!example] Example 2: Deciding Whether a Function Is One-to-One
> Is $g(x) = x^2$ one-to-one?

**Solution 1 (Counterexample)**  
$g(1) = 1$ and $g(-1) = 1$ → same output for different inputs → not injective.

**Solution 2 (Graphical)**  
Horizontal lines (e.g., $y=1$) intersect graph twice → fails Horizontal Line Test.

![[Pasted image 20260517201846.png|center|339]]

> [!note] Restricting Domain to Achieve Injectivity
> Although $x^2$ is not injective on $\mathbb{R}$, restricting domain to $[0, \infty)$ makes it injective:
> $$ h(x) = x^2 \quad (x \ge 0) $$
> Passes Horizontal Line Test on this domain.

![[Pasted image 20260517201921.png|center|336]]

---

> [!example] Example 3: Showing That a Function Is One-to-One
> Show $f(x) = 3x + 4$ is one-to-one.

**Proof**  
Assume $f(x_1) = f(x_2)$:
$$ \begin{aligned} 3x_1 + 4 &= 3x_2 + 4 \\ 
3x_1 &= 3x_2 \quad \leftarrow \text{subtract 4} \\ 
x_1 &= x_2 \quad \leftarrow \text{divide by 3} \end{aligned} $$
Thus, $f$ is injective. $\blacksquare$

---

# The Inverse of a Function

One-to-one functions are precisely those that possess inverse functions.

> [!info] Definition of the Inverse of a Function
> Let $f$ be a one-to-one function with domain $A$ and range $B$. Its **inverse function** $f^{-1}$ has:
> - Domain: $B$ (range of $f$)
> - Range: $A$ (domain of $f$)
> - Defined by:  
>   $$ f^{-1}(y) = x \quad \iff \quad f(x) = y $$  
>   for any $y \in B$.
> 
> ![[Pasted image 20260517203101.png|center]]

**Key Properties**
$$ \begin{aligned} \text{domain of } f^{-1} &= \text{range of } f \\ \text{range of } f^{-1} &= \text{domain of } f \end{aligned} $$

> [!warning] Notation Warning
> $f^{-1}(x)$ does **not** mean $\frac{1}{f(x)}$.  
> The reciprocal is written $(f(x))^{-1}$.

> [!example] Example 4: Finding $f^{-1}$ for Specific Values
> If $f(1) = 5$, $f(3) = 7$, and $f(8) = -10$, find $f^{-1}(5)$, $f^{-1}(7)$, and $f^{-1}(-10)$.

**Solution**
By definition of inverse:
$$ \begin{aligned} f^{-1}(5) &= 1 & \leftarrow \text{because } f(1) = 5 \\ f^{-1}(7) &= 3 & \leftarrow \text{because } f(3) = 7 \\ f^{-1}(-10) &= 8 & \leftarrow \text{because } f(8) = -10 \end{aligned} $$
![[Pasted image 20260517203151.png|center]]

---
## Inverse Function Property

> [!info] Inverse Function Property
> Let $f$ be a one-to-one function with domain $A$ and range $B$. The inverse $f^{-1}$ satisfies:
> $$ \begin{aligned} f^{-1}(f(x)) &= x \quad \text{for every } x \in A \\ f(f^{-1}(x)) &= x \quad \text{for every } x \in B \end{aligned} $$
> Conversely, any function satisfying these equations is the inverse of $f$.

![[Pasted image 20260517205643.png|center]]

These are called **cancellation equations**. They express that $f$ and $f^{-1}$ undo each other.

---

> [!example] Example 6: Verifying That Two Functions Are Inverses
> Show that $f(x) = x^3$ and $g(x) = x^{1/3}$ are inverses.

**Solution**  
Domain and range of both: $\mathbb{R}$.

Check cancellation:
$$ \begin{aligned} g(f(x)) &= g(x^3) = (x^3)^{1/3} = x \\ f(g(x)) &= f(x^{1/3}) = (x^{1/3})^3 = x \end{aligned} $$

Thus, by the Inverse Function Property, $f$ and $g$ are inverses. $\blacksquare$

> [!tip] Cube and Cube Root Cancel
> The cube function and cube root function are inverses — they cancel when composed, regardless of sign.

---
## Finding the Inverse of a Function

> [!info] How to Find the Inverse of a One-to-One Function
> 1. Write $y = f(x)$.
> 2. Solve for $x$ in terms of $y$ (if possible).
> 3. Interchange $x$ and $y$. The result is $y = f^{-1}(x)$.

*Note: Steps 2 and 3 can be reversed — interchange first, then solve for $y$.*

---

> [!example] Example 7: Finding the Inverse of a Function
> Find the inverse of $f(x) = 3x - 2$.

**Solution**

Step 1: Write $y = f(x)$  
$$ y = 3x - 2 $$

Step 2: Solve for $x$  
$$ \begin{aligned} 3x &= y + 2 \quad \leftarrow \text{Add 2} \\ x &= \frac{y + 2}{3} \quad \leftarrow \text{Divide by 3} \end{aligned} $$

Step 3: Interchange $x$ and $y$  
$$ y = \frac{x + 2}{3} $$

Thus,  
$$ f^{-1}(x) = \frac{x + 2}{3} $$

---

**Check Your Answer**

Verify using cancellation equations:

$$ \begin{aligned} f^{-1}(f(x)) &= f^{-1}(3x - 2) = \frac{(3x - 2) + 2}{3} = \frac{3x}{3} = x \\ f(f^{-1}(x)) &= f\left(\frac{x + 2}{3}\right) = 3\left(\frac{x + 2}{3}\right) - 2 = x + 2 - 2 = x \end{aligned} $$

Both satisfied → $\checkmark$

> [!tip] Reverse the Rule
> If $f$: “Multiply by 3, subtract 2” → $f^{-1}$: “Add 2, divide by 3”.  
> Inverses reverse the order and operations.

---

> [!example] Example 8: Finding the Inverse of a Function  
> Find the inverse of $f(x) = \frac{x^5 - 3}{2}$.

**Solution**

Step 1: Write $y = f(x)$  
$$ y = \frac{x^5 - 3}{2} $$

Step 2: Solve for $x$  
$$ \begin{aligned} 2y &= x^5 - 3 \quad \leftarrow \text{Multiply by 2} \\ x^5 &= 2y + 3 \quad \leftarrow \text{Add 3} \\ x &= (2y + 3)^{1/5} \quad \leftarrow \text{Take fifth root} \end{aligned} $$

Step 3: Interchange $x$ and $y$  
$$ y = (2x + 3)^{1/5} $$

Thus,  
$$ f^{-1}(x) = (2x + 3)^{1/5} $$

---

**Check Your Answer**

$$ \begin{aligned} f^{-1}(f(x)) &= f^{-1}\left( \frac{x^5 - 3}{2} \right) = \left[ 2\left( \frac{x^5 - 3}{2} \right) + 3 \right]^{1/5} = (x^5 - 3 + 3)^{1/5} = (x^5)^{1/5} = x \\ f(f^{-1}(x)) &= f\left( (2x + 3)^{1/5} \right) = \frac{ \left[ (2x + 3)^{1/5} \right]^5 - 3 }{2} = \frac{2x + 3 - 3}{2} = \frac{2x}{2} = x \end{aligned} $$

Both satisfied → $\checkmark$

> [!tip] Reverse the Rule  
> $f$: “Fifth power, subtract 3, divide by 2” → $f^{-1}$: “Multiply by 2, add 3, take fifth root”.

---

> [!example] Example 9: Finding the Inverse of a Rational Function  
> Find the inverse of $f(x) = \frac{2x + 3}{x - 1}$.

**Solution**

Step 1: Write $y = f(x)$  
$$ y = \frac{2x + 3}{x - 1} $$

Step 2: Solve for $x$  
$$ \begin{aligned} y(x - 1) &= 2x + 3 \quad \leftarrow \text{Multiply by } x - 1 \\ yx - y &= 2x + 3 \quad \leftarrow \text{Expand} \\ yx - 2x &= y + 3 \quad \leftarrow \text{Bring } x\text{-terms to LHS} \\ x(y - 2) &= y + 3 \quad \leftarrow \text{Factor } x \\ x &= \frac{y + 3}{y - 2} \quad \leftarrow \text{Divide by } y - 2 \end{aligned} $$

Step 3: Interchange $x$ and $y$  
$$ y = \frac{x + 3}{x - 2} $$

Thus,  
$$ f^{-1}(x) = \frac{x + 3}{x - 2} $$

*Note: Domain restriction — original function undefined at $x = 1$; inverse undefined at $x = 2$. Range of $f$ is all reals except 2 → domain of $f^{-1}$ excludes 2.*

---
## Graphing the Inverse of a Function

> [!info] Reflection Property
> The graph of $f^{-1}$ is obtained by reflecting the graph of $f$ about the line $y = x$.

![[Pasted image 20260517211422.png|center|553]]

---

> [!example] Example 10: Graphing the Inverse of a Function  
> Let $f(x) = \sqrt{x - 2}$.  
> (a) Sketch graph of $f$.  
> (b) Use reflection to sketch graph of $f^{-1}$.  
> (c) Find equation for $f^{-1}$.

**Solution**

(a) Start with $y = \sqrt{x}$, shift right 2 units → $y = \sqrt{x - 2}$. Domain: $x \ge 2$.

(b) Reflect graph of $f$ over line $y = x$ to get graph of $f^{-1}$.

(c) Solve for inverse algebraically:

$$ \begin{aligned} y &= \sqrt{x - 2} \\ y^2 &= x - 2 \quad \leftarrow \text{Square both sides} \\ x &= y^2 + 2 \quad \leftarrow \text{Add 2},\; y \ge 0 \end{aligned} $$

Interchange $x$ and $y$:

$$ y = x^2 + 2 \quad (x \ge 0) $$

Thus,

$$ f^{-1}(x) = x^2 + 2 \quad (x \ge 0) $$

*Note: Restriction $x \ge 0$ comes from range of original function $f$ (since square root outputs ≥ 0).*

![[Pasted image 20260517211752.png|center|311]]

> [!tip] Reverse the Rule  
> $f$: “Subtract 2, then take square root” → $f^{-1}$: “Square, then add 2”.  
> But note: since square root only gives nonnegative outputs, inverse domain is restricted to $x \ge 0$.

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 224)