Date: 2026-09-07
Tags: [[Mathematics]], [[Equations]], [[Analysis]], [[Differential Equations]], [[Derivatives]]

---

> [!info] Definitions & Properties
> A differential equation is an equation containing an unknown function and one or more of its derivatives. The order of a differential equation is the order of the highest derivative present. A function $f$ is a solution if substituting $y = f(x)$ and its derivatives satisfies the equation.

---

## 1. Population Growth Models

### Natural Growth Model (Exponential Growth)

Under ideal conditions (unlimited resources, no predators, immunity from disease), a population grows at a rate proportional to its current size.

| Variable / Parameter | Description |
| --- | --- |
| $t$ | Independent variable representing time |
| $P$ | Dependent variable representing population size |
| $dP/dt$ | Population growth rate with respect to time |
| $k$ | Proportionality constant (relative growth rate) |

$$\frac{dP}{dt} = kP$$

If $P > 0$ and $k > 0$, the derivative $P'(t) > 0$, meaning the population increases continuously at an accelerating rate.

The general solution is the family of exponential functions:

$$P(t) = C e^{kt}$$

For $t = 0$, $P(0) = C e^0 = C$, meaning $C$ represents the initial population $P(0)$.

> [!NOTE] Figure 1
> ![[Pasted image 20260910190927.png|center]]


---

### Logistic Growth Model

When resources are limited, a population levels off as it approaches the carrying capacity $M$.

* If $P$ is small: $\frac{dP}{dt} \approx kP$ (growth is approximately proportional to $P$).
* If $P > M$: $\frac{dP}{dt} < 0$ (population decreases toward $M$).

These constraints yield the logistic differential equation:

$$\frac{dP}{dt} = kP\left(1 - \frac{P}{M}\right)$$

| Population State | Sign of $dP/dt$ | Qualitative Trajectory |
| --- | --- | --- |
| $P = 0$ or $P = M$ | $\frac{dP}{dt} = 0$ | Equilibrium solutions; population remains constant. |
| $0 < P < M$ | $\frac{dP}{dt} > 0$ | Population increases toward carrying capacity $M$. |
| $P > M$ | $\frac{dP}{dt} < 0$ | Population decreases toward carrying capacity $M$. |

As $P \to M$, the term $1 - P/M \to 0$, causing $\frac{dP}{dt} \to 0$ and flattening the growth curve.

> [!NOTE] Figure 3
> ![[Pasted image 20260910190959.png|center]]

---

## 2. Physical Modeling: Motion of a Spring

Hooke's Law states that a spring stretched or compressed $x$ units from equilibrium exerts a restoring force proportional to displacement:

$$\text{restoring force} = -kx$$

Applying Newton's Second Law ($F = m a = m \frac{d^2 x}{dt^2}$) in the absence of friction:

$$m \frac{d^2 x}{dt^2} = -kx \implies \frac{d^2 x}{dt^2} = -\frac{k}{m}x$$

> [!note] Second-Order Analysis
> This is a second-order differential equation because it involves a second derivative. The second derivative of $x$ is proportional to $x$ with the opposite sign. The general solutions are combinations of sine and cosine functions.

> [!NOTE] Figure 4
> ![[Pasted image 20260910191206.png|center]]

---

## 3. Classification of Differential Equations

| Differential Equation | Dependent Variable | Independent Variable | Order | Mathematical Classification |
| --- | --- | --- | --- | --- |
| $\frac{dP}{dt} = kP$ | $P$ | $t$ | First-order | Separable / Linear ordinary differential equation |
| $\frac{dP}{dt} = kP\left(1 - \frac{P}{M}\right)$ | $P$ | $t$ | First-order | Non-linear ordinary differential equation (Logistic) |
| $m \frac{d^2 x}{dt^2} = -kx$ | $x$ | $t$ | Second-order | Linear ordinary differential equation (Harmonic oscillator) |
| $y' = xy$ | $y$ | $x$ | First-order | Separable ordinary differential equation |

---

## 4. Verification and Initial-Value Problems

### Solution Verification (Example 1)

Show that every member of the family $y = \frac{1 + c e^t}{1 - c e^t}$ satisfies $y' = \frac{1}{2}(y^2 - 1)$.

1. **Left-hand side ($y'$):** Use the Quotient Rule:

$$\begin{aligned} y' &= \frac{(1 - c e^t)(c e^t) - (1 + c e^t)(-c e^t)}{(1 - c e^t)^2} \\&= \frac{c e^t - c^2 e^{2t} + c e^t + c^2 e^{2t}}{(1 - c e^t)^2} \\&= \frac{2c e^t}{(1 - c e^t)^2}
\end{aligned}$$

2. **Right-hand side ($\frac{1}{2}(y^2 - 1)$):**

$$\begin{aligned} \frac{1}{2}(y^2 - 1) &= \frac{1}{2}\left[\left(\frac{1 + c e^t}{1 - c e^t}\right)^2 - 1\right] \\&= \frac{1}{2}\left[\frac{(1 + 2c e^t + c^2 e^{2t}) - (1 - 2c e^t + c^2 e^{2t})}{(1 - c e^t)^2}\right] \\&= \frac{2c e^t}{(1 - c e^t)^2} \end{aligned}$$

Both sides are identical for all real values of $c$. Thus, the function family solves the equation.

> [!NOTE] Figure 5
> ![[Pasted image 20260910191511.png|center]]

---

### Initial-Value Problems (Example 2)

> [!info] Definitions & Properties
> An initial-value problem (IVP) pairs a differential equation with an initial condition $y(t_0) = y_0$. The initial condition determines the exact value of the arbitrary constant $c$, isolating a particular solution from the general solution family.

Find the particular solution of $y' = \frac{1}{2}(y^2 - 1)$ satisfying the initial condition $y(0) = 2$.

1. Substitute $t = 0$ and $y = 2$ into the general solution:

$$2 = \frac{1 + c e^0}{1 - c e^0} = \frac{1 + c}{1 - c}$$

2. Solve for $c$:

$$2(1 - c) = 1 + c \implies 2 - 2c = 1 + c \implies 3c = 1 \implies c = \frac{1}{3}$$

3. Substitute $c = \frac{1}{3}$ into the general equation:

$$y = \frac{1 + \frac{1}{3}e^t}{1 - \frac{1}{3}e^t} = \frac{3 + e^t}{3 - e^t}$$

---
# ~={red}References=~
- [[James_Stewart_Calculus_Early_Transcendentals,_Seventh_edition_James.pdf]] (p. 604)