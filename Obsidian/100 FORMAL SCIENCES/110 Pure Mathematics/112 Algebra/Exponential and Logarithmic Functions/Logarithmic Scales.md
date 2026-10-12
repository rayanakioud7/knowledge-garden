Date: 2026-05-20
Tags: [[Mathematics]], [[Algebra]], [[100 FORMAL SCIENCES/110 Pure Mathematics/112 Algebra/Exponential and Logarithmic Functions/Logarithmic Functions]]

---

## Logarithmic Scales

When a physical quantity varies over an extremely large range, taking its logarithm maps the values onto a manageable scale. On a **logarithmic scale**, numbers are represented by their logarithms.

![[Pasted image 20260520005809.png|center]]

### The pH Scale

Used by chemists to measure the acidity of a solution by compressing the wide variance of hydrogen ion concentrations $[H^+]$.

> [!info]
> 
> $$pH = -\log[H^+]$$
> 
> $[H^+] = \text{concentration of hydrogen ions in moles per liter (M)}$

- **Neutral**: $pH = 7$
    
- **Acidic**: $pH < 7$
    
- **Basic**: $pH > 7$
    

Inverse rule to extract concentration:

$$\text{Reverse the Rule} \quad \boxed{[H^+] = 10^{-pH}}$$

> [!warning] Each single-unit increase in pH corresponds to a **10-fold decrease** in $[H^+]$.

> [!example]
> 
> **(a)** Find the pH of human blood where $[H^+] = 3.16 \times 10^{-8}\text{ M}$.
> 
> $$\begin{aligned} pH &= -\log(3.16 \times 10^{-8}) \\ &\approx 7.5 \qquad \leftarrow \text{basic } (pH > 7) \end{aligned}$$
> 
> **(b)** Find $[H^+]$ of rain with a $pH = 2.4$.
> 
> $$\begin{aligned} \log[H^+] &= -2.4 \\ [H^+] &= 10^{-2.4} \approx 4.0 \times 10^{-3}\text{ M} \end{aligned}$$

### The Richter Scale

Measures the magnitude $M$ of an earthquake relative to a reference benchmark.

> [!info]
> 
> $$M = \log\frac{I}{S}$$
> 
> $I = \text{intensity (seismograph amplitude at 100 km)}$ $S = \text{standard earthquake intensity } (10^{-4}\text{ cm})$

> [!warning] An increase of 1 unit on the Richter scale indicates a **10-fold increase** in earthquake intensity $I$.

> [!example]
> 
> **(a)** Find the magnitude if $I = 3.75\text{ cm}$.
> 
> $$M = \log\frac{3.75}{10^{-4}} = \log 37500 \approx 4.6$$
> 
> **(b)** Find the intensity $I$ if $M = 5.1$.
> 
> $$\begin{aligned} 10^{5.1} &= \frac{I}{10^{-4}} \\ I &= 10^{5.1} \cdot 10^{-4} = 10^{1.1} \approx 12.6\text{ cm} \end{aligned}$$
> 
> **(c)** Compare 1906 earthquake ($M_1 = 8.3$) and 1989 earthquake ($M_2 = 7.1$).
> 
> $$\begin{aligned} \log\frac{I_1}{I_2} &= \log\frac{I_1/S}{I_2/S} = \log\frac{I_1}{S} - \log\frac{I_2}{S} \qquad &\leftarrow \text{Law 2} \\ &= 8.3 - 7.1 = 1.2 \\ \frac{I_1}{I_2} &= 10^{1.2} \approx 16 \qquad &\leftarrow \text{16 times more intense} \end{aligned}$$

### The Decibel Scale

Measures the perceived loudness level $B$ of sounds.

> [!info]
> 
> $$B = 10 \log\frac{I}{I_0}$$
> 
> $I = \text{sound intensity in } W/m^2$ $I_0 = \text{threshold of hearing } (10^{-12}\text{ W/m}^2)$

> [!example]
> 
> **(a)** Find $B$ for a jet takeoff with $I = 100\text{ W/m}^2$.
> 
> $$B = 10 \log\frac{10^2}{10^{-12}} = 10 \log 10^{14} = 10(14) = 140\text{ dB}$$
> 
> **(b)** Find $I$ for a motorcycle with $B = 90\text{ dB}$.
> 
> $$\begin{aligned} 90 &= 10 \log\frac{I}{10^{-12}} \\ 9 &= \log I - \log 10^{-12} \qquad &\leftarrow \text{divide by 10 and apply Law 2} \\ 9 &= \log I + 12 \\ \log I &= -3 \\ I &= 10^{-3}\text{ W/m}^2 \end{aligned}$$

---
# ~={red}References=~
- [[Precalculus - Mathematics for Calculus 8th Edition (James Stewart, Lothar Redlin, Saleem Watson) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 391)