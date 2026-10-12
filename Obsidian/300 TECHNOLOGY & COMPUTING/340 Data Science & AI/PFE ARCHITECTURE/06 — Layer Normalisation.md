
> **One sentence summary:** LayerNorm rescales the 256 output
> values of each frame independently so that no single feature
> dominates the next computation — regardless of how large or
> small the raw projection values happen to be.

---

# 1. The Problem It Solves

After the matrix multiplication $\mathbf{X}\mathbf{W} + \mathbf{b}$,
each frame has 256 output values. But these values can be on
wildly different scales:

```
Frame 20 after projection (before LayerNorm):

  h₁  =  +47.3   ← very large positive
  h₂  =  -0.002  ← near zero
  h₃  =  +128.7  ← enormous
  h₄  =  -83.1   ← large negative
  ...
  h₂₅₆ = +0.41
```

If we feed these raw values into the next layer (the 1D-CNN),
the features with large magnitudes like $h_3 = 128.7$ will
completely dominate the computation. The network will focus
almost entirely on those large features and essentially ignore
$h_2 = -0.002$ — even if $h_2$ encodes something linguistically
critical like "mouth is open."

This creates two concrete problems:

**Problem 1 — Gradient instability**
During backpropagation, large activations produce large gradients.
Large gradients cause large weight updates. Large weight updates
destabilise training — the loss oscillates instead of decreasing
smoothly.

**Problem 2 — Feature dominance**
A feature with value 128.7 will always outweigh a feature with
value 0.002 in any dot product or weighted sum. The model cannot
learn to pay attention to small but linguistically important
signals.

---

# 2. The Intuition — Bringing Everyone to the Same Scale

Imagine you are comparing the heights of players across different
sports:

- Basketball players: 190–220 cm
- Gymnastics: 145–165 cm
- Weightlifting: 165–185 cm

If you want to compare their **relative heights within their sport**
(taller than average for their discipline?), you need to
**re-center and rescale** each group independently:

$$\text{relative height} = \frac{\text{height} - \text{mean of sport}}{\text{std of sport}}$$

After this transformation:
- A basketball player at 210 cm becomes +1.2 (above average for basketball)
- A gymnast at 155 cm becomes +0.8 (above average for gymnastics)

Now the numbers are **comparable** — not because the players are
the same height, but because both numbers are expressed in the
same units: standard deviations from their own group's mean.

**LayerNorm does exactly this — but for the 256 features of each frame.**

---

# 3. The Mathematics

Given a frame's 256-dimensional projection vector
$\mathbf{h} \in \mathbb{R}^{256}$, LayerNorm computes:

**Step 1 — Compute the mean across the 256 features:**

$$\mu = \frac{1}{256} \sum_{j=1}^{256} h_j$$

**Step 2 — Compute the standard deviation:**

$$\sigma = \sqrt{\frac{1}{256} \sum_{j=1}^{256} (h_j - \mu)^2}$$

**Step 3 — Normalise:**

$$\hat{h}_j = \frac{h_j - \mu}{\sigma + \varepsilon}$$

where $\varepsilon = 10^{-5}$ prevents division by zero if
$\sigma$ is very small.

After step 3, the 256 values have:
- Mean = 0
- Standard deviation ≈ 1

**Step 4 — Learned rescaling:**

$$\text{LayerNorm}(\mathbf{h})_j =
\gamma_j \cdot \hat{h}_j + \beta_j$$

where $\boldsymbol{\gamma}, \boldsymbol{\beta} \in \mathbb{R}^{256}$
are **learned parameters** initialised at $\gamma = 1$ and
$\beta = 0$. They allow the network to undo the normalisation
if it turns out that having a particular feature at a large
scale is actually useful for classification.

The complete formula in one line:

$$\boxed{
\text{LayerNorm}(\mathbf{h})_j =
\gamma_j \cdot
\frac{h_j - \mu}{\sigma + \varepsilon}
+ \beta_j
}$$

---

# 4. A Concrete Before/After Example

Using the earlier extreme values:

```
Before LayerNorm:
  h₁  = +47.3
  h₂  = -0.002
  h₃  = +128.7
  h₄  = -83.1
  h₂₅₆ = +0.41

  μ    = mean of all 256 values  ≈ +12.4  (hypothetical)
  σ    = std of all 256 values   ≈ +58.3  (hypothetical)

After LayerNorm (γ=1, β=0):
  ĥ₁  = (47.3  - 12.4) / 58.3  ≈ +0.60
  ĥ₂  = (-0.002 - 12.4) / 58.3 ≈ -0.21
  ĥ₃  = (128.7 - 12.4) / 58.3  ≈ +2.00
  ĥ₄  = (-83.1 - 12.4) / 58.3  ≈ -1.64
  ĥ₂₅₆ = (0.41 - 12.4) / 58.3  ≈ -0.21
```

The values are now all in the range $[-3, +3]$.
Feature $h_3$ is still the largest (it is a genuinely strong
feature) but it no longer dominates by a factor of 64,000×
over $h_2$. Every feature now has a fair chance to influence
the subsequent computation.

---

# 5. LayerNorm vs BatchNorm — An Important Distinction

You may have seen **BatchNorm** in other contexts. They look
similar but normalise across different dimensions:

| | BatchNorm | LayerNorm |
|---|---|---|
| Normalises across | All samples in the batch | All features of one sample |
| Statistics computed from | $B$ samples at once | 1 sample at a time |
| Depends on batch size | Yes — unstable at small $B$ | No — works for any $B$ |
| Used in | CNNs, vision models | Transformers, language models |

For Transformers, LayerNorm is preferred because:
1. Each sequence (sign video) has different content —
   normalising across the batch would mix unrelated samples
2. During inference, you process one sample at a time —
   BatchNorm statistics from training would not apply
3. Transformers process variable-length sequences —
   LayerNorm handles this naturally

---

# 6. Where LayerNorm Appears in Your Model

LayerNorm is not used just once. It appears at multiple points
throughout the ASLTransformer:

```
Stage 1:  Linear Projection output          ← HERE (after XW + b)
Stage 2:  After the residual connection     ← HERE (after CNN + skip)
Stage 4:  Inside each Transformer layer     ← HERE × 4 (Pre-LN style)
Stage 5:  Before the classification head    ← HERE (before final MLP)
```

The Pre-LN placement (normalising before each sub-layer rather
than after) was chosen because it produces more stable gradients
during training — a known improvement over the original
Transformer's Post-LN design.

---

# 7. Connection to Your Concern About Signer Dominance

Your intuition is correct but LayerNorm operates at the **feature
level**, not the **signer level**. Let us be precise about what
it does and does not do:

**What LayerNorm does:**
Ensures that within a single frame's 256-dimensional representation,
no single feature dimension dominates the others due to scale.

**What LayerNorm does NOT do:**
It does not prevent one signer's overall movement patterns from
dominating the model's learned weights. That is the job of the
**signer-independent data split** (Chapter 4) and **data
augmentation** (spatial scaling, temporal shift) — which simulate
variation between signers during training.

The two mechanisms work at different levels:

```
Data level:   Augmentation + signer split
              → different signers, different body sizes,
                different movement timing

Feature level: LayerNorm
              → within one frame, no feature dominates another
```

Both are necessary. LayerNorm makes the computation stable.
The data strategy makes the representations generalisable.

---

# 8. Summary

| Question | Answer |
|---|---|
| What does LayerNorm normalise? | The 256 features of one frame |
| What is the scope? | Per-frame — each frame normalised independently |
| What is the output range? | Approximately $[-3, +3]$ before rescaling |
| Are $\gamma$ and $\beta$ learned? | Yes — initialised at 1 and 0 |
| Why $\varepsilon$? | Prevents division by zero when $\sigma \approx 0$ |
| Why not BatchNorm? | Transformers need per-sample normalisation |
| Does it fix signer dominance? | No — that is the job of data strategy |

---

# 9. The Formula to Remember

$$\boxed{
\text{LN}(\mathbf{h}) =
\boldsymbol{\gamma} \odot
\frac{\mathbf{h} - \mu}{\sigma + \varepsilon}
+ \boldsymbol{\beta}
}$$

- $\mu, \sigma$ computed from the 256 values of **this frame only**
- $\boldsymbol{\gamma}, \boldsymbol{\beta}$ learned during training
- $\odot$ means element-wise multiplication
- Output: 256 values, mean $\approx 0$, std $\approx 1$,
  ready for the 1D-CNN
