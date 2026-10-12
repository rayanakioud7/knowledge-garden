Date: 2026-01-30
Tags: [[Mathematics]], [[History]], [[Archaeology]], [[Mesopotamia]], [[Scribes & Knowledge Transmission]]
Aliases: - **Babylonian Mathematics** - **Sexagesimal System**

# ~={red} Notes=~

# Mathematics in Ancient Mesopotamia

> [!ABSTRACT] Historical Shift
> Until the 1920s, history assumed mathematics began with the Greeks. The deciphering of **Mesopotamian clay tablets** revolutionized this view, revealing a sophisticated mathematical culture that flourished thousands of years before Euclid. unlike the elementary state of Egyptian math, Babylonian math was **highly advanced, abstract, and computational**.

![[Pasted image 20260130125524.png|center|500]]

---

## 1. The Evidence: Clay vs. Papyrus

The primary reason we know so much about Mesopotamian mathematics is the **medium** of writing.
* **Egypt**: Wrote on *papyrus* (perishable, fragile).
* **Mesopotamia**: Wrote on **clay tablets** (durable, fire-hardened).

![[Pasted image 20260130125712.png|center|450]]

**Eras Covered:**
* **[[Sumerian]]** (3rd millennium BCE)
* **Old [[Babylon|Babylonian]]** (c. 18th century BCE) - *The Golden Age of Math*
* **[[Seleucid]]/[[Greek]] Period** (3rd century BCE) - *Astronomy boom*

---

## 2. The Sexagesimal System (Base 60)

The Babylonians introduced a positional numeral system based on **60**. This legacy persists today in how we measure **time** (60 seconds) and **angles** (360 degrees).

A sexagesimal digit was composed of a group of narrow, wedge-shaped marks representing units up to nine ([![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Babylonian_1.svg/20px-Babylonian_1.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_1.svg), [![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Babylonian_2.svg/20px-Babylonian_2.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_2.svg), [![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Babylonian_3.svg/20px-Babylonian_3.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_3.svg), [![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Babylonian_4.svg/20px-Babylonian_4.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_4.svg), ..., [![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Babylonian_9.svg/20px-Babylonian_9.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_9.svg)) and a group of wide, wedge-shaped marks representing up to five tens ([![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Babylonian_10.svg/20px-Babylonian_10.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_10.svg), [![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Babylonian_20.svg/20px-Babylonian_20.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_20.svg), [![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Babylonian_30.svg/20px-Babylonian_30.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_30.svg), [![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Babylonian_40.svg/20px-Babylonian_40.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_40.svg), [![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Babylonian_50.svg/20px-Babylonian_50.svg.png)](https://en.wikipedia.org/wiki/File:Babylonian_50.svg)). The value of the digit was the sum of the values of its component parts:

![[Pasted image 20260130130357.png|center|550]]

 70 as ![mathematics](https://cdn.britannica.com/78/212778-004-82D27B77/Mathematics.jpg)![mathematics](https://cdn.britannica.com/79/212779-004-8E4C2599/Mathematics.jpg), 80 as ![mathematics](https://cdn.britannica.com/78/212778-004-82D27B77/Mathematics.jpg)![mathematics](https://cdn.britannica.com/79/212779-004-8E4C2599/Mathematics.jpg)![mathematics](https://cdn.britannica.com/79/212779-004-8E4C2599/Mathematics.jpg)
### Why Base 60?
It is a **Superior Highly Composite Number**. It has many divisors:
$$\{1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60\}$$
This makes calculation, especially division, extremely efficient compared to Base 10.

### Mechanics of the System
* **Place Value**: Like our modern system, the position of a digit determines its value (powers of 60).
* **The Ambiguity**:
    * **No Decimal Point**: A sequence like `3 7 30` could mean:
        * $3 + \frac{7}{60} + \frac{30}{60^2} \approx 3.125$
        * $3(60) + 7 + \frac{30}{60} = 187.5$
        * $3(60^2) + 7(60) + 30 = 11,250$
    * **Context** determined the magnitude.
    * **Zero**: A placeholder symbol for zero appeared only late (3rd Century BCE), leaving earlier texts ambiguous.

---

## 3. Arithmetic Operations

### Multiplication & Division
The Babylonians used **tables** rather than long calculation algorithms.
* **Multiplication**: Scribes memorized or looked up tables (multiples of 1–50).
* **Division**: Performed as **multiplication by the reciprocal**.
    $$a \div b = a \times \frac{1}{b}$$
### "Regular" Numbers
Division relied on **Regular Numbers**: integers whose reciprocals yield a *finite* sexagesimal fraction.
* In Base 60, regular numbers are those whose prime factors are only **2, 3, or 5**.
* *Example*: The reciprocal of 54 (factors 2, 3) is finite ($1/54 = 0;1,6,40$).
* *Contrast*: The reciprocal of 7 is an infinite repeating expansion (like $1/3$ in our decimal system).

---

## 4. Major Achievements: Geometry & Algebra

### The Square Root of 2 (YBC 7289)

![[Pasted image 20260130130959.png|center|500]]

A famous tablet from Yale shows a square with its diagonals. It lists the value of $\sqrt{2}$ with stunning precision to **four sexagesimal places**:
$$1 + \frac{24}{60} + \frac{51}{60^2} + \frac{10}{60^3} \approx 1.41421296...$$
* *Modern value*: $1.41421356...$
* *Accuracy*: Accurate to within $0.0000006$.

### Approximation Rules
They used algebraic estimations for geometry. To find the diagonal of a rectangle (hypotenuse), they used an approximation rule similar to the later Greek method:
$$\sqrt{a^2 + b^2} \approx a + \frac{b^2}{2a}$$
![[Pasted image 20260130131054.png|center|500]]
### Quadratic Equations
Babylonian algebra was **rhetorical** (written in words) but procedurally identical to modern algebra. They solved for two unknowns ($b$ and $h$) given their product and sum/difference:
* **Given**: $b + h = S$ and $b \times h = P$
* **Logic**: They utilized the identity:
    $$(b - h)^2 = (b + h)^2 - 4bh$$
* This is functionally equivalent to the **Quadratic Formula**.

### [[Pythagoras|Pythagorean]] Triples (Plimpton 322)

![[Pasted image 20260130131209.png|center|500]]

A tablet at Columbia University lists 15 sets of **Pythagorean Triples** (integers where $a^2 + b^2 = c^2$).
* The list is not random; it is ordered by the ratio $d^2/h^2$, representing an angle decreasing from $45^\circ$ to $30^\circ$.
* This proves they understood the **Pythagorean Theorem** 1,000 years before Pythagoras.
* **Generating Formula**: They likely knew that for integers $p, q$:
    $$\text{Diagonal } d = \frac{1}{2} \left( \frac{p}{q} + \frac{q}{p} \right)$$

---

## 5. Mathematical Astronomy

In the **Seleucid period**, math became the engine of astronomy.
* **Goal**: Predicting lunar eclipses and planetary positions.
* **Method**: They did not use geometric models (like Greek spheres) but **Arithmetic Progressions**.
* **Zigzag Functions**: They modeled planetary motion using linear "zigzag" approximations (increasing and decreasing arithmetic series) to simulate sinusoidal movement.

![[Pasted image 20260130131253.png|center]]

---

## 6. The Legacy

> [!tip] The Transmission
> While the Greeks (like [[Hipparchus]]) preferred geometry, they adopted the **Babylonian sexagesimal system** and its astronomical parameters.

* **To the Greeks**: Transmitted perhaps as early as the 5th century BCE.
* **To the Arabs**: Preserved during the Middle Ages.
* **To the Renaissance**: Used by Copernicus and Kepler.
* **To Today**: We still use minutes, seconds, and degrees because of the Mesopotamian scribes.

![[Pasted image 20260130131409.png|center|600]]
# ~={red}References=~
https://www.britannica.com/science/mathematics/Geometric-and-algebraic-problems