
Date: 2026-05-14
Tags:

---

> **One complete forward pass:** one sign sequence of 64 frames, 690 features per frame, through the full production model (d=512, 6 layers). Every matrix multiplication shown with exact shapes.

---

## Input

```
X  ∈  ℝ^(64 × 690)

64  = number of frames (T)
690 = features per frame (345 position + 345 velocity)
```

We track one sample. In a real batch of 64 samples this would be $(64, 64, 690)$ but we drop the batch dimension for clarity.

---
## Stage 0 — Padding Mask

Identify which frames are padding (all-zero rows):

$$M_{\text{pad}} \in \{0,1\}^{64} \quad m_t = \begin{cases}1 & \text{if } \text{ frame }t \text{ is real} \\ 0 & \text{if frame }t \text{ is padding} \end{cases}$$

Used later in attention and pooling. Computed once, reused everywhere.

---

## Stage 1 — Linear Projection + LayerNorm

**What it does:** Project heterogeneous 690-dim input into unified 512-dim model space, then normalise.

### Linear

$$H^{(0)} = X W_{\text{proj}} + b_{\text{proj}}$$

| Tensor | Shape | Values |
|--------|-------|--------|
| $X$ | $(64, 690)$ | input |
| $W_{\text{proj}}$ | $(690, 512)$ | learned |
| $b_{\text{proj}}$ | $(512,)$ | learned |
| $H^{(0)}$ | $(64, 512)$ | output |

$$\underbrace{(64 \times 690)}_{X} \times \underbrace{(690 \times 512)}_{W_{\text{proj}}} = \underbrace{(64 \times 512)}_{H^{(0)}}$$

Each output element:

$$H^{(0)}_{t,j} = \sum_{i=1}^{690} X_{t,i} \cdot W_{\text{proj},i,j} + b_{\text{proj},j}$$

### LayerNorm

Applied independently to each frame's 512-dim vector:

$$\hat{H}^{(0)}_t = \gamma \odot \frac{H^{(0)}_t - \mu_t}{\sigma_t + \varepsilon} + \beta$$

$$\mu_t = \frac{1}{512}\sum_{j=1}^{512} H^{(0)}_{t,j} \qquad \sigma_t = \sqrt{\frac{1}{512}\sum_{j=1}^{512}(H^{(0)}_{t,j} - \mu_t)^2}$$

| Tensor | Shape |
|--------|-------|
| $\gamma, \beta$ | $(512,)$ — learned |
| $\varepsilon$ | $10^{-5}$ — scalar |
| $\hat{H}^{(0)}$ | $(64, 512)$ |

---

## Stage 2 — 1D CNN Block + Residual + LayerNorm

**What it does:** Detect local motion patterns across adjacent frames using learned kernels.

### CNN layer 1

Kernel size 3, padding 1 → output same length:

$$\text{Conv}_1: W_{c1} \in \mathbb{R}^{512 \times 512 \times 3}, \quad b_{c1} \in \mathbb{R}^{512}$$

For each frame $t$:

$$C^{(1)}_t = W_{c1} * \hat{H}^{(0)}_t + b_{c1}$$

$$\text{shape: } (64, 512) \rightarrow (64, 512)$$

### GELU

$$G^{(1)}_t = \text{GELU}(C^{(1)}_t) \quad \text{element-wise}$$

### CNN layer 2

$$W_{c2} \in \mathbb{R}^{512 \times 512 \times 3}, \quad b_{c2} \in \mathbb{R}^{512}$$
For each frame $t$:
$$C^{(2)}_t = W_{c2} * G^{(1)}_t + b_{c2}$$

### GELU

$$G^{(2)}_t = \text{GELU}(C^{(2)}_t)$$

### Residual connection

$$R = G^{(2)} + \hat{H}^{(0)}$$

$$\underbrace{(64, 512)} + \underbrace{(64, 512)} = \underbrace{(64, 512)}$$

### LayerNorm

$$Z^{(0)} = \text{LN}(R) \quad \text{shape: } (64, 512)$$

Parameters: $\gamma_{\text{cnn}}, \beta_{\text{cnn}} \in \mathbb{R}^{512}$

### Zero out padding after CNN

$$Z^{(0)}_t = \mathbf{0} \quad \text{if frame } t \text{ is padding}$$

---

## Stage 3 — Positional Encoding

**What it does:** Inject temporal position information so the Transformer knows frame order.

$$\text{PE}_{t,2i} = \sin\!\left(\frac{t}{10000^{2i/512}}\right) \quad \text{PE}_{t,2i+1} = \cos\!\left(\frac{t}{10000^{2i/512}}\right)$$

$$i = 0, 1, \ldots, 255 \quad \text{(256 pairs for 512 dims)}$$

$$\text{PE} \in \mathbb{R}^{64 \times 512} \quad \text{fixed, not learned}$$

$$Z^{(0)} \leftarrow Z^{(0)} + \text{PE} \quad \text{shape: } (64, 512)$$

---

## Stages 4–9 — 6 Transformer Encoder Layers

Each layer $\ell = 1, \ldots, 6$ receives $Z^{(\ell-1)} \in \mathbb{R}^{64 \times 512}$ and produces $Z^{(\ell)} \in \mathbb{R}^{64 \times 512}$.

The structure of each layer (Pre-LN):

```
input Z^(ℓ-1)
    │
    ├── LayerNorm → Multi-Head Attention → + residual
    │
    └── LayerNorm → Feed-Forward → + residual
    │
output Z^(ℓ)
```

We show one complete layer in full. All 6 layers are identical in structure with independent weights.

---

### Layer ℓ — Sub-layer A: Multi-Head Self-Attention

#### A1. Pre-LayerNorm

$$\tilde{Z} = \text{LN}(Z^{(\ell-1)}) \quad \text{shape: } (64, 512)$$

Parameters: $\gamma_A, \beta_A \in \mathbb{R}^{512}$

$$\tilde{Z}_t = \gamma_A \odot \frac{Z^{(\ell-1)}_t - \mu_t}{\sigma_t + \varepsilon} + \beta_A$$


$\mu_t$ and $\sigma_t$ in LayerNorm are computed **on the spot** from the current vector being normalized:

$\mu_t = \frac{1}{512}\sum_{j=1}^{512} Z^{(\ell-1)}_{t,j}$

$\sigma_t = \sqrt{\frac{1}{512}\sum_{j=1}^{512}(Z^{(\ell-1)}_{t,j} - \mu_t)^2}$


- They are computed **from the current input vector** at that exact moment in the forward pass
- They change **every forward pass** because the input changes
- They are computed **for every frame** $t$ independently — so 64 different $\mu_t$ and $\sigma_t$ values per LayerNorm call
- They are computed **at every LayerNorm** in the network — Stage 1 has its own, each Transformer layer has two more (Pre-LN A and Pre-LN B), the classifier head has one more

Pre-LN normalises the input to each sub-layer so gradients stay stable across all 6 layers, which is essential when training a 21M-parameter model from scratch on 212k samples without pretraining.
#### A2. Linear projections — 8 heads, d_k = 512/8 = 64

For each head $i = 1, \ldots, 8$:

| Matrix | Shape | Parameters |
|--------|-------|------------|
| $W^i_Q$ | $(512, 64)$ | learned |
| $W^i_K$ | $(512, 64)$ | learned |
| $W^i_V$ | $(512, 64)$ | learned |

$$Q^i = \tilde{Z} W^i_Q \quad (64 \times 512)(512 \times 64) = (64 \times 64)$$
$$K^i = \tilde{Z} W^i_K \quad (64 \times 512)(512 \times 64) = (64 \times 64)$$
$$V^i = \tilde{Z} W^i_V \quad (64 \times 512)(512 \times 64) = (64 \times 64)$$

Each row $Q^i_t \in \mathbb{R}^{64}$ is the query for frame $t$ in head $i$.

#### A3. Attention scores

$$S^i = Q^i (K^i)^\top \quad (64 \times 64)(64 \times 64)^\top = (64 \times 64)$$

$$S^i_{t,s} = Q^i_t \cdot K^i_s = \sum_{d=1}^{64} Q^i_{t,d} \cdot K^i_{s,d}$$

#### A4. Scale

$$\hat{S}^i = \frac{S^i}{\sqrt{64}} = \frac{S^i}{8} \quad \text{shape: } (64, 64)$$

#### A5. Padding mask

For every padding frame $s$ (where $m_s = 0$):

$$\hat{S}^i_{t,s} \leftarrow -\infty \quad \forall t$$

#### A6. Softmax

$$A^i = \text{softmax}(\hat{S}^i, \text{dim}=-1) \quad \text{shape: } (64, 64)$$

$$A^i_{t,s} = \frac{e^{\hat{S}^i_{t,s}}}{\sum_{k=1}^{64} e^{\hat{S}^i_{t,k}}} \quad \text{each row sums to 1}$$

Padding columns receive zero attention weight because $e^{-\infty} = 0$.
- Padding frames are completely ignored in attention ✓
#### A7. Weighted sum

$$\text{head}_i = A^i V^i \quad (64 \times 64)(64 \times 64) = (64 \times 64)$$

$$(\text{head}_i)_t = \sum_{s=1}^{64} A^i_{t,s} \cdot V^i_s$$

#### A8. Concatenate all 8 heads

$$\text{Concat} = [\text{head}_1 \mid \text{head}_2 \mid \cdots \mid \text{head}_8]$$

$$\underbrace{(64, 64)} \mid \cdots \mid \underbrace{(64, 64)} = \underbrace{(64, 512)}$$

#### A9. Output projection

$$W_O \in \mathbb{R}^{512 \times 512}$$

$$\text{MHA} = \text{Concat} \cdot W_O \quad (64 \times 512)(512 \times 512) = (64 \times 512)$$

#### A10. Residual connection

$$Z^{(\ell)}_A = Z^{(\ell-1)} + \text{MHA} \quad (64, 512) + (64, 512) = (64, 512)$$

---

### Layer ℓ — Sub-layer B: Feed-Forward Block

#### B1. Pre-LayerNorm

$$\tilde{Z}_A = \text{LN}(Z^{(\ell)}_A) \quad \text{shape: } (64, 512)$$
 
Parameters: $\gamma_B, \beta_B \in \mathbb{R}^{512}$

#### B2. First linear layer — expand to d_ff = 2048

$$W_1 \in \mathbb{R}^{512 \times 2048}, \quad b_1 \in \mathbb{R}^{2048}$$

$$H = \tilde{Z}_A W_1 + b_1$$

$$\underbrace{(64 \times 512)}_{\tilde{Z}_A} \times \underbrace{(512 \times 2048)}_{W_1} + \underbrace{(2048,)}_{b_1} = \underbrace{(64 \times 2048)}_{H}$$

Each element:

$$H_{t,j} = \sum_{i=1}^{512} \tilde{Z}_{A,t,i} \cdot W_{1,i,j} + b_{1,j}$$

#### B3. GELU activation

$$H' = \text{GELU}(H) \quad \text{element-wise, shape: } (64, 2048)$$

$$\text{GELU}(x) = x \cdot \Phi(x) \approx 0.5x\!\left(1 + \tanh\!\left(\sqrt{\tfrac{2}{\pi}}\left(x + 0.044715x^3\right)\right)\right)$$

#### B4. Second linear layer — compress back to 512

$$W_2 \in \mathbb{R}^{2048 \times 512}, \quad b_2 \in \mathbb{R}^{512}$$

$$\text{FFN} = H' W_2 + b_2$$

$$\underbrace{(64 \times 2048)}_{H'} \times \underbrace{(2048 \times 512)}_{W_2} + \underbrace{(512,)}_{b_2} = \underbrace{(64 \times 512)}_{\text{FFN}}$$

#### B5. Residual connection

$$Z^{(\ell)} = Z^{(\ell)}_A + \text{FFN} \quad (64, 512) + (64, 512) = (64, 512)$$

---

### All 6 layers — shapes never change

$$Z^{(0)} \xrightarrow{\text{layer 1}} Z^{(1)} \xrightarrow{\text{layer 2}} Z^{(2)} \xrightarrow{\cdots} Z^{(6)}$$

Each $Z^{(\ell)} \in \mathbb{R}^{64 \times 512}$.

---

## Stage 5 — Masked Global Average Pooling

**What it does:** Collapse the 64-frame sequence into one vector by averaging only real frames.

$$\mathbf{z} = \frac{\displaystyle\sum_{t=1}^{64}m_t \cdot Z^{(6)}_t}{\displaystyle\max\!\left(\sum_{t=1}^{64}m_t,\ 1\right)}$$

| Tensor | Shape |
|--------|-------|
| $Z^{(6)}$ | $(64, 512)$ |
| Real mask | $(64,)$ — boolean |
| $\mathbf{z}$ | $(512,)$ |

If the sign has 30 real frames and 34 padding frames:

$$\mathbf{z} = \frac{1}{30}\sum_{t \in \text{real}} Z^{(6)}_t$$

---

## Stage 6 — Classification Head

**What it does:** Map the 512-dim summary to 250 class scores through a two-layer MLP.

### LayerNorm

$$\tilde{\mathbf{z}} = \text{LN}(\mathbf{z}) \quad \text{shape: } (512,)$$

Parameters: $\gamma_{\text{cls}}, \beta_{\text{cls}} \in \mathbb{R}^{512}$

### First linear layer

$$W_3 \in \mathbb{R}^{512 \times 512}, \quad b_3 \in \mathbb{R}^{512}$$

$$\mathbf{h} = W_3^\top \tilde{\mathbf{z}} + b_3 \quad (512 \times 512)(512,) = (512,)$$

$$h_j = \sum_{i=1}^{512} W_{3,i,j} \cdot \tilde{z}_i + b_{3,j}$$

### GELU

$$\mathbf{h}' = \text{GELU}(\mathbf{h}) \quad \text{shape: } (512,)$$

### Dropout

$$\mathbf{h}'' = \text{Dropout}(\mathbf{h}', p=0.3) \quad \text{shape: } (512,)$$

During inference: $\mathbf{h}'' = \mathbf{h}'$ (dropout disabled).

### Second linear layer — output 250 logits

$$W_4 \in \mathbb{R}^{512 \times 250}, \quad b_4 \in \mathbb{R}^{250}$$

$$\hat{\mathbf{y}} = W_4^\top \mathbf{h}'' + b_4$$

$$\underbrace{(512 \times 250)^\top}_{W_4^\top} \underbrace{(512,)}_{\mathbf{h}''} + \underbrace{(250,)}_{b_4} = \underbrace{(250,)}_{\hat{\mathbf{y}}}$$

$$\hat{y}_c = \sum_{i=1}^{512} W_{4,i,c} \cdot h''_i + b_{4,c} \quad c = 1, \ldots, 250$$

---

## Output

$$\hat{\mathbf{y}} \in \mathbb{R}^{250}$$

These are the raw **logits**. The predicted sign is:

$$c^* = \arg\max_{c} \hat{y}_c$$

During training, $\hat{\mathbf{y}}$ is passed to CrossEntropyLoss with label smoothing.
During inference, softmax converts to probabilities:

$$\hat{p}_c = \frac{e^{\hat{y}_c}}{\sum_{j=1}^{250} e^{\hat{y}_j}}$$

---

## Complete Shape Summary

```
Input:                (64, 690)

Stage 1:
  Linear projection:  (64, 690) × (690, 512) = (64, 512)
  LayerNorm:          (64, 512) → (64, 512)
  params: γ,β ∈ (512,)

Stage 2:
  CNN layer 1:        (64, 512) → (64, 512)   kernel (512,512,3)
  GELU:               (64, 512) → (64, 512)
  CNN layer 2:        (64, 512) → (64, 512)   kernel (512,512,3)
  GELU:               (64, 512) → (64, 512)
  Residual:           (64, 512) + (64, 512) = (64, 512)
  LayerNorm:          (64, 512) → (64, 512)

Stage 3:
  Positional enc.:    (64, 512) + PE(64,512) = (64, 512)

Stages 4–9 (×6 layers, each identical):
  Pre-LN A:           (64, 512) → (64, 512)
  Q,K,V per head:     (64, 512) × (512, 64) = (64, 64)   ×8 heads
  Scores:             (64, 64) × (64, 64)ᵀ = (64, 64)
  Scale by 1/8:       (64, 64) → (64, 64)
  Mask + Softmax:     (64, 64) → (64, 64)
  Weighted sum:       (64, 64) × (64, 64) = (64, 64)     per head
  Concat 8 heads:     8×(64, 64) → (64, 512)
  Output proj:        (64, 512) × (512, 512) = (64, 512)
  Residual A:         (64, 512) + (64, 512) = (64, 512)
  Pre-LN B:           (64, 512) → (64, 512)
  FFN expand:         (64, 512) × (512, 2048) = (64, 2048)
  GELU:               (64, 2048) → (64, 2048)
  FFN compress:       (64, 2048) × (2048, 512) = (64, 512)
  Residual B:         (64, 512) + (64, 512) = (64, 512)

Stage 5:
  Masked GAP:         (64, 512) → (512,)

Stage 6:
  LayerNorm:          (512,) → (512,)
  Linear 1:           (512,) × (512, 512) = (512,)
  GELU:               (512,) → (512,)
  Dropout:            (512,) → (512,)
  Linear 2:           (512,) × (512, 250) = (250,)

Output:               (250,)   ← 250 class logits
```

---

## Complete Parameter Count Per Layer

### One Transformer layer

| Component | Matrices | Shape | Parameters |
|-----------|----------|-------|------------|
| Pre-LN A | $\gamma_A, \beta_A$ | $(512,) \times 2$ | 1,024 |
| Q projection | $W^1_Q, \ldots, W^8_Q$ | $(512,64)\times 8$ | 262,144 |
| K projection | $W^1_K, \ldots, W^8_K$ | $(512,64)\times 8$ | 262,144 |
| V projection | $W^1_V, \ldots, W^8_V$ | $(512,64)\times 8$ | 262,144 |
| Output proj | $W_O$ | $(512,512)$ | 262,144 |
| Pre-LN B | $\gamma_B, \beta_B$ | $(512,)\times 2$ | 1,024 |
| FFN expand | $W_1, b_1$ | $(512,2048)+(2048,)$ | 1,050,624 |
| FFN compress | $W_2, b_2$ | $(2048,512)+(512,)$ | 1,049,088 |
| **Total per layer** | | | **3,150,336** |

### Full model

| Component | Parameters |
|-----------|------------|
| Linear projection + LN | 354,304 |
| CNN block + LN | 1,576,960 |
| 6 Transformer layers | $6 \times 3{,}150{,}336 = 18{,}902{,}016$ |
| Classification head | 394,250 |
| Positional encoding | 0 (fixed) |
| **Total** | **~21,235,962** |

---

## References
-  project: `src/model.py` → `ASLTransformerV5` (base) and `ASLTransformerV11` (scaled, d=512, L=6)
- Vaswani et al. (2017) — *Attention Is All You Need*
- Ba et al. (2016) — *Layer Normalization*