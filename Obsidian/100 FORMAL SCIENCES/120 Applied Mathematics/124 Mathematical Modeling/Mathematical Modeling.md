Date: 2026-05-13
Tags: [[Mathematics]], [[Algebra]]

---

# Mathematical Modeling — Word Problems

**Mathematical modeling** is the process of translating a real-world verbal description into mathematical language, solving it, then checking the solution against the original problem.

$$\text{Real Problem} \rightarrow \text{Verbal Description} \rightarrow \text{Language of Mathematics} \rightarrow \text{Mathematical Problem} \rightarrow \text{Solution}$$

> [!warning] Always check units — variables measuring the same quantity must use consistent units.

---

# 1. Translate Verbal Descriptions into Mathematical Expressions

| Words | Translation |
|---|---|
| "speed equals distance divided by time" | $r = \dfrac{d}{t}$ |
| "$5$ times as large as $x$" | $5x$ |
| "$3$ less than $x$" | $x - 3$ |
| "exceeds $x$ by $4$" | $x + 4$ |
| "when added to $x$, gives $5$" | $5 - x$ |

---

## Steps for Solving Applied Problems

> [!info]
> **Step 1:** Read carefully — identify what you are looking for.
> **Step 2:** Assign a variable to the unknown; express all other unknowns in terms of it.
> **Step 3:** List known facts and translate them into a mathematical equation or inequality.
> **Step 4:** Solve the equation for the variable.
> **Step 5:** Check the answer against the original problem. If it doesn't agree, try again.

---
# 2. Solve Interest Problems

**Interest** — money paid for the use of money.
**Principal** $P$ — the total amount borrowed or invested.
**Rate of interest** $r$ — expressed as a decimal on a per annum basis.

> [!info] Simple Interest Formula
> $$I = Prt$$
> where $I$ = interest, $P$ = principal, $r$ = annual rate (decimal), $t$ = time in years.

> [!warning] Always express $r$ as a decimal and $t$ in years. e.g. $9\% \to r = 0.09$, $6$ months $\to t = \frac{1}{2}$

> [!example] Computing Interest on a Loan
> $P = \$500,\; r = 9\% = 0.09,\; t = 6 \text{ months} = \frac{1}{2} \text{ year}$
> $$I = Prt = (500)(0.09)\left(\frac{1}{2}\right) = \$22.50$$
> Total owed: $\$500 + \$22.50 = \$522.50$

> [!example] Financial Planning — Two Investments
> Candy has $\$70{,}000$ to invest, wants $\$2800$ annual return at $4\%$ overall.
> Options: bonds at $7\%$ or certificate at $2\%$.
>
> Let $x$ = amount in bonds, then $70{,}000 - x$ = amount in certificate.
>
> | Investment | Principal | Rate | Time | Interest |
> |---|---|---|---|---|
> | Bonds | $x$ | $0.07$ | $1$ | $0.07x$ |
> | Certificate | $70000-x$ | $0.02$ | $1$ | $0.02(70000-x)$ |
> | Total | $70000$ | $0.04$ | $1$ | $2800$ |
>
> $$0.07x + 0.02(70{,}000 - x) = 2800$$
> $$0.07x + 1400 - 0.02x = 2800$$
> $$0.05x = 1400 \implies x = \$28{,}000$$
>
> Bonds: $\$28{,}000$ at $7\%$ → $\$1960$
> Certificate: $\$42{,}000$ at $2\%$ → $\$840$
> Total: $\$1960 + \$840 = \$2800$ $\checkmark$

---
# 3. Solve Mixture Problems

**Mixture problems** combine two or more quantities with different properties (price, concentration, etc.) to form a new mixture.

> [!info] Key Equation
> $$(\text{price per unit})(\text{quantity}) + (\text{price per unit})(\text{quantity}) = (\text{price per unit})(\text{total quantity})$$

> [!example] Blending Coffees
> Mix B grade Colombian at $\$5$/lb with A grade Arabica at $\$10$/lb to get $100$ lbs of blend at $\$7$/lb.
>
> Let $x$ = pounds of B grade → $100 - x$ = pounds of A grade.
>
> | Coffee | Price/lb | Pounds | Revenue |
> |---|---|---|---|
> | B grade Colombian | $\$5$ | $x$ | $5x$ |
> | A grade Arabica | $\$10$ | $100-x$ | $10(100-x)$ |
> | Blend | $\$7$ | $100$ | $700$ |
>
> $$5x + 10(100-x) = 700$$
> $$5x + 1000 - 10x = 700$$
> $$-5x = -300 \implies x = 60$$
>
> **60 lbs** of B grade + **40 lbs** of A grade $= 100$ lbs of blend.
>
> **Check:** $(5)(60) + (10)(40) = 300 + 400 = \$700 = (7)(100)$ $\checkmark$

---
# 4. Solve Uniform Motion Problems

**Uniform motion** — object moves at a constant (average) speed.

> [!info] Uniform Motion Formula
> $$d = rt$$
> where $d$ = distance, $r$ = rate (speed), $t$ = time.

> [!example] Catching Up — Tanya & Honda
> Tanya runs at $8$ mi/hr. Honda leaves $2$ hours later at $40$ mi/hr. When do they meet?
>
> Let $t$ = time (hrs) for Honda to catch up → Tanya's elapsed time $= t + 2$
>
> | | Rate (mi/hr) | Time (hr) | Distance (mi) |
> |---|---|---|---|
> | Tanya | $8$ | $t+2$ | $8(t+2)$ |
> | Honda | $40$ | $t$ | $40t$ |
>
> Since distances are equal:
> $$8(t+2) = 40t$$
> $$8t + 16 = 40t$$
> $$32t = 16 \implies t = \frac{1}{2} \text{ hour}$$
>
> Each will have traveled $d = 40\left(\dfrac{1}{2}\right) = 20$ miles from home.
>
> **Check:** Tanya: $(2.5)(8) = 20$ mi $\checkmark$ — Honda: $\left(\dfrac{1}{2}\right)(40) = 20$ mi $\checkmark$

---
# 5. Solve Constant Rate Job Problems

If a job takes $t$ units of time to complete, then $\dfrac{1}{t}$ of the job is done per unit of time.

> [!info] Key Equation
> $$\frac{\text{Part done by A}}{1 \text{ hr}} + \frac{\text{Part done by B}}{1 \text{ hr}} = \frac{\text{Part done together}}{1 \text{ hr}}$$

> [!example] Working Together
> Danny takes $4$ hrs alone, Mike takes $6$ hrs alone. How long together?
>
> Let $t$ = time (hrs) to finish together.
>
> | | Hours to do job | Part done in 1 hr |
> |---|---|---|
> | Danny | $4$ | $\frac{1}{4}$ |
> | Mike | $6$ | $\frac{1}{6}$ |
> | Together | $t$ | $\frac{1}{t}$ |
>
> $$\frac{1}{4} + \frac{1}{6} = \frac{1}{t}$$
> $$\frac{3}{12} + \frac{2}{12} = \frac{1}{t}$$
> $$\frac{5}{12} = \frac{1}{t} \implies t = \frac{12}{5} \text{ hrs} = 2 \text{ hrs } 24 \text{ min}$$
>
> They finish at **12:24 PM** — they make the golf date. $\checkmark$


---
## ~={red}References=~
- [[Precalculus, 9th Edition (Michael Sullivan) (z-library.sk, 1lib.sk, z-lib.sk).pdf]], (p. 62 - A68)




