Date: 2026-05-20
Tags: [[Mathematics]], [[Algebra]], [[Exponential Functions]]

---
### 1. Exponential Growth (Doubling Time)

Used when growth is expressed via a baseline **doubling period**.

> [!info]
> 
> $$n(t) = n_0 2^{t/a}$$
> 
> $n_0 = \text{initial population} \quad a = \text{doubling time} \quad t = \text{time}$

> [!example] Initial rabbits $n_0 = 645$, doubles every $a = 3$ months. Find population at $t = 12$ months:
> 
> $$n(12) = 645 \cdot 2^{12/3} = 645 \cdot 2^4 = 10,320 \quad \text{rabbits}$$

### 2. Exponential Growth (Relative Growth Rate)

Used when growth is expressed via a continuous, **instantaneous relative rate** $r$.

> [!info]
> 
> $$n(t) = n_0 e^{rt}$$
> 
> $n_0 = \text{initial population} \quad r = \text{relative growth rate} \quad t = \text{time}$

> [!example] Initial bacteria $n_0 = 500$, growth rate $r = 40\% = 0.4$ per hour. Find time $t$ to reach $n(t) = 80,000$:
> 
> $$\begin{aligned} 80,000 &= 500 e^{0.4t} \\ 160 &= e^{0.4t} \qquad &\leftarrow \text{divide by 500} \\ \ln 160 &= 0.4t \qquad &\leftarrow \text{take } \ln \text{ of each side} \\ t &= \frac{\ln 160}{0.4} \approx 12.68 \quad \text{hours} \end{aligned}$$

#### Model Conversion Insight

To convert a generic exponential baseline model $y = C \cdot b^t$ into an intrinsic base-$e$ model $y = C \cdot e^{kt}$, map the growth constant via:

$$\boxed{k = \ln b} \implies y = C \cdot e^{(\ln b)t}$$

### 3. Logistic Growth

Accounts for environmental **carrying capacities** $M$ that restrict infinite exponential overgrowth.

> [!info]
> 
> $$n(t) = \frac{M}{1 + Ae^{-rt}}$$
> 
> $M = \text{carrying capacity} \quad r = \text{initial relative growth rate} \quad A = \frac{M - n_0}{n_0}$

> [!example] Fish environment with $M = 30,000$, $n_0 = 3000$, and initial rate $r = 0.1848$:
> 
> $$\begin{aligned} A &= \frac{30,000 - 3000}{3000} = 9 \qquad &\leftarrow \text{calculate coefficient } A \\ n(t) &= \frac{30,000}{1 + 9e^{-0.1848t}} \end{aligned}$$

### 4. Radioactive Decay

Models mass minimization via a stabilizing **half-life** baseline period $h$.

> [!info]
> 
> $$m(t) = m_0 2^{-t/h} = m_0 e^{-rt}$$
> 
> $m_0 = \text{initial mass} \quad h = \text{half-life} \quad \boxed{r = \frac{\ln 2}{h}} = \text{relative decay rate}$

> [!example] Polonium-210 with $h = 138$ days and initial mass $m_0 = 300$ mg. Find remaining mass after $t = 365$ days:
> 
> $$\begin{aligned} r &= \frac{\ln 2}{138} \approx 0.00502 \qquad &\leftarrow \text{determine relative decay rate} \\ m(365) &= 300 e^{-0.00502(365)} \approx 48.01 \quad \text{mg} \end{aligned}$$

### 5. Newton's Law of Cooling

Models temperature equalization matching surrounding ambient conditions.

> [!info]
> 
> $$T(t) = T_s + D_0 e^{-kt}$$
> 
> $T_s = \text{surrounding temperature} \quad D_0 = T_{\text{initial}} - T_s \quad k = \text{cooling constant } (k > 0)$

> [!example] Coffee at $200^\circ\text{F}$ is placed in a $70^\circ\text{F}$ room ($T_s = 70 \implies D_0 = 200 - 70 = 130$). It cools to $150^\circ\text{F}$ at $t = 10$ minutes. Find constant $k$:
> 
> $$\begin{aligned} 70 + 130e^{-10k} &= 150 \\ 130e^{-10k} &= 80 \qquad &\leftarrow \text{subtract 70} \\ e^{-10k} &= \frac{8}{13} \qquad &\leftarrow \text{divide by 130} \\ -10k &= \ln\left(\frac{8}{13}\right) \qquad &\leftarrow \text{take } \ln \text{ of each side} \\ k &= -\frac{1}{10}\ln\left(\frac{8}{13}\right) \approx 0.04855 \end{aligned}$$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 379)