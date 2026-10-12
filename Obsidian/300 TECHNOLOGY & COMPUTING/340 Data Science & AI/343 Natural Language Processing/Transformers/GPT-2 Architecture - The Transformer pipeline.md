Date: 2026-05-04
Tags: 

*Based on "Give me 100 minutes, I will make Transformer click forever"*

## Table of Contents
- [[#Chapter 1 - The Big Picture & Blueprint]]
- [[#Chapter 2 - Token Embeddings]]
- [[#Chapter 3 - Positional Embeddings]]
- [[#Chapter 4 - Self-Attention Intuition]]
- [[#Chapter 5 - Scaled Dot-Product Attention]]
- [[#Chapter 6 - The Causal Mask]]
- [[#Chapter 7 - Multi-Head Attention]]
- [[#Chapter 8 - The MLP Thinking Layer]]
- [[#Chapter 9 - Residual Connections]]
- [[#Chapter 10 - Layer Normalization]]
- [[#Chapter 11 - The Complete Transformer Block]]
- [[#Chapter 12 - Stacking Blocks - The Full GPT Model]]
- [[#Chapter 13 - The Language Model Head]]
- [[#Chapter 14 - Training - Forward Pass and Loss]]
- [[#Chapter 15 - Autoregressive Generation]]

---

## Chapter 1 - The Big Picture & Blueprint

> "These ~80 lines of Python contain all the fundamental architectural principles of a multi-billion dollar model. There is no hidden magic."

### The Complete GPT-2 Architecture (Our Roadmap)

```
Token IDs [B, T]
    ↓
[Token Embedding WTE] + [Positional Embedding WPE]
    ↓
[Dropout]
    ↓
[Transformer Block] × N  ← The heart of the model
    ↓
[Final LayerNorm]
    ↓
[LM Head] → Logits [B, T, vocab_size]
```

### The Master Formula

$$\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^T}{\sqrt{d_k}} + M\right)V$$

Where:
- $Q$ = Query matrix ("What am I looking for?")
- $K$ = Key matrix ("What do I offer?")
- $V$ = Value matrix ("What information do I carry?")
- $d_k$ = dimension of keys (scaling factor)
- $M$ = causal mask (blocks future tokens)

Don't worry if this is intimidating now. By Chapter 6 it will be second nature.

### The Blueprint: `GPTConfig`

Every construction project starts with a blueprint. Ours is:

```python
from dataclasses import dataclass

@dataclass
class GPTConfig:
    vocab_size: int          # How many unique tokens the model knows
    block_size: int          # Max context window length
    n_layer: int   = 12      # Number of Transformer Blocks stacked
    n_head: int    = 12      # Number of parallel attention heads
    n_embd: int    = 768     # Richness of token vectors
    dropout: float = 0.1     # Regularization
```

### Parameter Table

| Parameter | Controls | Intuition | GPT-2 Small |
|-----------|----------|-----------|-------------|
| `vocab_size` | Vocabulary size | How many unique tokens the model knows | 50,257 |
| `block_size` | Context window | How far back the model can see | 1,024 |
| `n_layer` | Model **depth** | Blocks stacked vertically | 12 |
| `n_head` | Model **width** | Parallel attention "conversations" | 12 |
| `n_embd` | Embedding dimension | Richness of each token's vector | 768 |

> 💡 **Key Insight**: By only changing these numbers, the exact same code creates a tiny toy model *or* full GPT-2. Zero architecture changes required.

---

## Chapter 2 - Token Embeddings

### The Problem: Meaningless Numbers

The raw input is a sequence of integer token IDs:
```
Input: [5, 21, 108, 32]   ← Just arbitrary numbers
```

The number `21` is **not** "4.2 times more word" than `5`. The distances are meaningless. Neural networks learn via gradient descent on real-valued math — they cannot learn from arbitrary categorical labels.

### The Goal: A Semantic Coordinate Space

We want to map each token ID → a **learned vector** where the *distance between vectors is meaningful*.

#### Color Space Analogy

| Method | Red | Orange | Blue | Problem |
|--------|-----|--------|------|---------|
| ❌ Categorical ID | 1 | 2 | 8 | `8` has no relation to `1` |
| ✅ Vector | [0.9, 0.1] | [0.8, 0.2] | [0.1, 0.9] | Orange is *close* to Red; Blue is *far* |

We do the same for words, but in 768 dimensions instead of 2.

### The Mechanism: A Learnable Lookup Table

`nn.Embedding` is simply a giant matrix $W_{te} \in \mathbb{R}^{V \times C}$ where each row is a token's coordinate vector.

```python
import torch
import torch.nn as nn

vocab_size = 10
n_embd = 3   # 3D semantic space for this example

token_embedding_table = nn.Embedding(vocab_size, n_embd)

# The weight attribute IS the coordinate book
print("Shape:", token_embedding_table.weight.shape)
# torch.Size([10, 3])
# → 10 tokens, each with a 3D coordinate vector

print(token_embedding_table.weight)
# tensor([[-0.22,  0.65, -0.31],   ← coordinate for token 0
#         [ 0.12, -0.44,  0.78],   ← coordinate for token 1
#         ...                       ← etc.
#        ], requires_grad=True)
```

> 💡 **The Magic of `requires_grad=True`**: This means during training, the model learns the *best possible coordinates* for each token to minimize its prediction error. The model figures out what each dimension "means".

### Using the Embedding Layer

```python
B, T = 2, 4   # batch size=2, sequence length=4

# Input: random token IDs
idx = torch.randint(0, vocab_size, (B, T))   # shape [2, 4]

# Lookup: for each ID, retrieve its coordinate vector
tok_emb = token_embedding_table(idx)          # shape [2, 4, 3]

print("Input IDs shape:", idx.shape)          # [2, 4]
print("Output vectors shape:", tok_emb.shape) # [2, 4, 3]
```

Shape transformation: $[B, T] \rightarrow [B, T, C]$

### The Famous Result: Semantic Math

After training, the embedding space captures meaning:
$$\vec{\text{king}} - \vec{\text{man}} + \vec{\text{woman}} \approx \vec{\text{queen}}$$

### The Critical Flaw: Context-Free Representations

The vector for "**bank**" is *identical* in:
1. "I sat on the river **bank**."
2. "I withdrew money from the **bank**."

The lookup table is just a dictionary — it knows nothing about surrounding words. **This is the central problem the Transformer solves.**

---

## Chapter 3 - Positional Embeddings

### The Problem: Order Blindness

With only token embeddings, our model sees the input as a **bag of vectors** — it has no sense of order. "Dog bites man" and "Man bites dog" produce the exact same set of vectors.

Language is fundamentally about order. We must fix this.

### The Solution: Learn a Unique Vector Per Position

Just as we learned a unique vector for each *word*, we learn a unique vector for each *position*:
- A vector meaning "I am at position 0"
- A vector meaning "I am at position 1"
- ...up to `block_size`

### Implementation

```python
B, T, C = 2, 5, 3
vocab_size = 10
block_size = 8   # model's max sequence length

token_emb_table = nn.Embedding(vocab_size, C)
pos_emb_table   = nn.Embedding(block_size, C)  # "vocab" = positions

idx = torch.randint(0, vocab_size, (B, T))      # shape [2, 5]

# Step 1: Token embeddings
tok_emb = token_emb_table(idx)   # [2, 5, 3]

# Step 2: Positional embeddings
# Only generate positions for CURRENT sequence length T, not full block_size
pos = torch.arange(0, T, dtype=torch.long)      # [0, 1, 2, 3, 4]
pos_emb = pos_emb_table(pos)                    # [5, 3]

# Step 3: Combine via addition (PyTorch broadcasts [5,3] across batch)
x = tok_emb + pos_emb    # [2, 5, 3]  ← (B,T,C) + (T,C) → (B,T,C)
```

### Why Does Addition Work?

Both vectors live in the same $C$-dimensional space. The model learns to create positional vectors such that:

$$\text{vector}(\text{"the"}, \text{pos}=5) \neq \text{vector}(\text{"the"}, \text{pos}=20)$$

The combination creates a **unique point** for every (word, position) pair. The network learns to "understand" this composition through training.

### Handling Variable Sequence Lengths

The line `torch.arange(0, T, ...)` handles this automatically. If `block_size=8` but our current input has `T=5`, we only generate positions 0–4. The remaining positional embeddings are never loaded. ✅

**After this step**: Our tensor `x` of shape `[B, T, C]` encodes both *what* each token is and *where* it sits in the sequence. This is the input to the Transformer blocks.

---

## Chapter 4 - Self-Attention Intuition

### The Core Problem: Ambiguity

Consider the word **"crane"**:
- *"**Crane** ate fish."* → 🐦 it's a bird
- *"**Crane** lifted steel."* → 🏗️ it's a machine

The starting token vector for "crane" is **identical** in both sentences. We need a mechanism to *dynamically update* this vector based on its neighbors. That mechanism is **self-attention**.

### Q, K, V: The Three Roles

For every token, we create three derived vectors via learned linear projections:

| Vector | Name | Role | Analogy |
|--------|------|------|---------|
| $Q$ | **Query** | "What am I looking for?" | Your search query |
| $K$ | **Key** | "What do I represent?" | A file's label |
| $V$ | **Value** | "What info do I offer?" | Your elevator pitch |

#### Why Have a Separate V Vector?

> "The raw input `x` is your entire résumé. The Value vector `V` is your prepared elevator pitch — a learned, packaged version of your knowledge ready for others to consume."

| Aspect | Input Vector `x` | Value Vector `V` |
|--------|-----------------|-----------------|
| What it is | Raw, complete information | Packaged, consumable information |
| Analogy | Your entire résumé | Your elevator pitch |
| How it's made | Output of embedding layers | Learned linear transform of `x` |

The model learns the *best elevator pitch* for each token. This gives it flexibility to emphasize or de-emphasize parts of its raw knowledge.

### The Three Steps of Self-Attention

#### Step 1: Scoring — "How relevant is each token to me?"
$$\text{score}(i,j) = Q_i \cdot K_j$$
Dot product of the current token's Query with every other token's Key.

#### Step 2: Normalizing — "Convert scores to percentages"
$$\text{weight}(i,j) = \text{softmax}\!\left(\frac{\text{score}(i,j)}{\sqrt{d_k}}\right)$$

#### Step 3: Aggregating — "Weighted average of information"
$$\text{output}_i = \sum_j \text{weight}(i,j) \cdot V_j$$

### Worked Example: The "Crane" Disambiguation

**Setup**: 2D space where Dim1 = animal-ness, Dim2 = machine-ness

| Token | Key $K$ | Value $V$ |
|-------|---------|----------|
| crane | [0.7, 0.7] ← ambiguous | [0.5, 0.5] |
| ate | [0.9, 0.1] ← high animal | [0.9, 0.1] |
| fish | [0.9, 0.1] ← high animal | [0.8, 0.2] |
| lifted | [0.1, 0.9] ← high machine | [0.1, 0.9] |
| steel | [0.1, 0.9] ← high machine | [0.2, 0.8] |

**Crane's Query** = $[0.7, 0.7]$ (ambiguous — looking for clues)

---

**Sentence 1: "Crane ate fish"**

**Scoring**:
$$\text{score}(\text{crane} \to \text{crane}) = [0.7,0.7]\cdot[0.7,0.7] = 0.49+0.49 = 0.98$$
$$\text{score}(\text{crane} \to \text{ate}) = [0.7,0.7]\cdot[0.9,0.1] = 0.63+0.07 = 0.70$$
$$\text{score}(\text{crane} \to \text{fish}) = [0.7,0.7]\cdot[0.9,0.1] = 0.63+0.07 = 0.70$$

**After Softmax** → weights: $[0.44, 0.30, 0.30]$

*"Crane will listen 44% to itself, 30% to 'ate', 30% to 'fish'"*

**Aggregating**:
$$\vec{\text{crane}}_{\text{new}} = 0.44 \cdot [0.5,0.5] + 0.30 \cdot [0.9,0.1] + 0.30 \cdot [0.8,0.2]$$
$$= [0.22, 0.22] + [0.27, 0.03] + [0.24, 0.06] = \mathbf{[0.71, 0.29]}$$

→ **Heavily skewed toward Dim 1 (Animal)** ✅ It's a bird!

---

**Sentence 2: "Crane lifted steel"**

Scores and weights are **identical** (same crane query, same math). But now they apply to different neighbors:

$$\vec{\text{crane}}_{\text{new}} = 0.44 \cdot [0.5,0.5] + 0.30 \cdot [0.1,0.9] + 0.30 \cdot [0.2,0.8]$$
$$= [0.22, 0.22] + [0.03, 0.27] + [0.06, 0.24] = \mathbf{[0.29, 0.71]}$$

→ **Heavily skewed toward Dim 2 (Machine)** ✅ It's a crane!

> 🎯 **The Power**: The same initial vector was transformed into two completely different context-aware vectors solely because of different neighboring tokens. This is self-attention.

---

## Chapter 5 - Scaled Dot-Product Attention

Now we translate the intuition into efficient matrix operations.

### Part 1: Raw Tensor Walkthrough

**Setup**: Sentence "A crane ate fish" → `T=4` tokens, `C=2` dimensions, `B=1`

```python
import torch, torch.nn as nn, torch.nn.functional as F, math

B, T, C = 1, 4, 2

# Our pretend input from the embedding layers
x = torch.tensor([
    [[0.1, 0.1],   # A
     [1.0, 0.2],   # crane
     [0.1, 0.9],   # ate
     [0.8, 0.0]]   # fish
]).float()
```

**Step 1: Project x into Q, K, V**

```python
torch.manual_seed(42)
q_proj = nn.Linear(C, C, bias=False)
k_proj = nn.Linear(C, C, bias=False)
v_proj = nn.Linear(C, C, bias=False)

Q = q_proj(x)   # [1, 4, 2]
K = k_proj(x)   # [1, 4, 2]
V = v_proj(x)   # [1, 4, 2]
```

**Step 2: Compute Raw Scores** $QK^T$

```python
# Q: [B,T,C] @ K^T: [B,C,T] → scores: [B,T,T]
scores = Q @ K.transpose(-2, -1)   # [1, 4, 4]

# Each row i = "how relevant is every other token to token i"
# tensor([[[0.05, 0.41, 0.18, 0.27],   ← A's scores
#          [0.18, 1.39, 0.61, 0.91],   ← crane's scores (highest self-score!)
#          [0.06, 0.48, 0.21, 0.32],   ← ate's scores
#          [0.13, 0.98, 0.43, 0.64]]]) ← fish's scores
```

**Step 3: Scale** — divide by $\sqrt{d_k}$ for numerical stability

$$\text{scaled\_scores} = \frac{QK^T}{\sqrt{d_k}}$$

```python
d_k = K.size(-1)
scaled_scores = scores / math.sqrt(d_k)
```

> 💡 **Why scale?** Without scaling, dot products can grow very large in high dimensions, pushing softmax into regions where gradients vanish.

**Step 4: Softmax** — convert scores to probabilities

```python
attn_weights = F.softmax(scaled_scores, dim=-1)   # [1, 4, 4]
# Each row now sums to 1.0
```

**Step 5: Aggregate Values**

```python
# attn_weights: [B,T,T] @ V: [B,T,C] → output: [B,T,C]
output = attn_weights @ V   # [1, 4, 2]
```

### Shape Summary Table

| Step | Operation | Input Shape(s) | Output Shape | Meaning |
|------|-----------|----------------|--------------|---------|
| 1 | Linear projections | `[B,T,C]` | `[B,T,C]` each | Q, K, V for every token |
| 2 | `Q @ K.T` | `[B,T,C]` × `[B,C,T]` | `[B,T,T]` | Raw compatibility scores |
| 3 | `/ sqrt(d_k)` | `[B,T,T]` | `[B,T,T]` | Stabilized scores |
| 4 | `softmax` | `[B,T,T]` | `[B,T,T]` | Attention probabilities |
| 5 | `@ V` | `[B,T,T]` × `[B,T,C]` | `[B,T,C]` | Context-aware vectors |

### Part 2: Encapsulating into `nn.Module`

```python
class SingleHeadSelfAttention(nn.Module):
    def __init__(self, config):
        super().__init__()
        # Fused: one big projection instead of three small ones
        # More GPU-efficient (one large matmul vs three small ones)
        self.c_attn = nn.Linear(config.n_embd, 3 * config.n_embd, bias=False)

    def forward(self, x):
        B, T, C = x.size()

        # Project and split into Q, K, V
        qkv = self.c_attn(x)            # [B, T, 3C]
        q, k, v = qkv.split(C, dim=2)  # each [B, T, C]

        # Attention scores
        scaled_scores = (q @ k.transpose(-2, -1)) / math.sqrt(k.size(-1))
        attn_weights  = F.softmax(scaled_scores, dim=-1)

        # Weighted aggregation
        output = attn_weights @ v       # [B, T, C]
        return output
```

#### Fused vs Separate Projections

| Approach | Code | Efficiency |
|----------|------|------------|
| Separate (conceptually clear) | Three `nn.Linear(C, C)` layers | Three smaller matrix multiplications |
| **Fused (used in practice)** | One `nn.Linear(C, 3*C)` layer | One larger, GPU-optimized matmul |

> ⚠️ **Note**: The minimal implementation uses `bias=False` for simplicity. The original GPT-2 paper includes biases in all linear projections.

---

## Chapter 6 - The Causal Mask

### The Problem: Time Travel (Cheating)

GPT is **autoregressive** — it generates one token at a time. When predicting the next word for "A crane ate...", it must only use tokens it has *already seen*. It cannot see "fish" (the answer it should predict).

But our current attention lets every token attend to every other:
```
# Current (broken) attention weights:
"A"     attends to: [A, crane, ate, fish]   ← CHEATING! sees future
"crane" attends to: [A, crane, ate, fish]   ← CHEATING! sees future
"ate"   attends to: [A, crane, ate, fish]   ← CHEATING! sees future
```

**Rule**: Token at position $t$ can only attend to positions $0, 1, \ldots, t$.

### The Solution: Mask Future Positions to $-\infty$

**Why $-\infty$?** Because:
$$e^{-\infty} = 0$$

After softmax, future positions get weight exactly **0** — they contribute nothing.

### Step-by-Step Implementation

**Step 1: Create a Lower Triangular Mask**

```python
T = 4
mask = torch.tril(torch.ones(T, T))
# tensor([[1., 0., 0., 0.],   ← "A" can only see itself
#         [1., 1., 0., 0.],   ← "crane" sees A + itself
#         [1., 1., 1., 0.],   ← "ate" sees A, crane, itself
#         [1., 1., 1., 1.]])  ← "fish" sees all (it's last)
```

**Step 2: Apply the Mask**

```python
masked_scores = scaled_scores.masked_fill(mask == 0, float('-inf'))
# Upper-right triangle is now all -inf:
# tensor([[[ 0.04,  -inf,  -inf,  -inf],
#          [ 0.13,  0.98,  -inf,  -inf],
#          [ 0.04,  0.34,  0.15,  -inf],
#          [ 0.09,  0.69,  0.30,  0.45]]])
```

**Step 3: Softmax — the $-\infty$ become 0**

```python
attn_weights = F.softmax(masked_scores, dim=-1)
# tensor([[[1.00, 0.00, 0.00, 0.00],   ← "A" only sees itself
#          [0.30, 0.70, 0.00, 0.00],   ← "crane" sees past + self
#          [0.31, 0.38, 0.31, 0.00],   ← "ate" sees past + self
#          [0.22, 0.40, 0.24, 0.14]]]) ← "fish" sees all
```

Information flows **only from past to present**. ✅

### Before vs After Masking

| | "A" sees "fish"? | "crane" sees "fish"? | "ate" sees "fish"? |
|--|-----------------|---------------------|-------------------|
| ❌ Without mask | Yes | Yes | Yes |
| ✅ With causal mask | **No (0%)** | **No (0%)** | **No (0%)** |

### Storing the Mask: `register_buffer`

```python
class CausalSelfAttention(nn.Module):
    def __init__(self, config):
        super().__init__()
        # ...
        self.register_buffer(
            "bias",
            torch.tril(torch.ones(config.block_size, config.block_size))
            .view(1, 1, config.block_size, config.block_size)
            # ↑ Extra dims for broadcasting with multi-head tensors later
        )

    def forward(self, x):
        B, T, C = x.size()
        # ... compute scaled_scores ...

        # Slice mask to current sequence length T
        scaled_scores = scaled_scores.masked_fill(
            self.bias[:, :, :T, :T] == 0, float("-inf"))

        attn_weights = F.softmax(scaled_scores, dim=-1)
        # ...
```

#### Buffer vs Parameter

| Property | Buffer | Parameter |
|----------|--------|-----------|
| Saved with model? | ✅ Yes | ✅ Yes |
| Moves to GPU with `.to(device)`? | ✅ Yes | ✅ Yes |
| Updated by optimizer? | ❌ **No** | ✅ Yes |
| Use case | Fixed masks, constants | Learned weights |

The causal mask is **fixed** — it should never be updated by the optimizer.

---

## Chapter 7 - Multi-Head Attention

### The Problem with One Head

A single attention head tries to track everything simultaneously: syntax, semantics, long-range dependencies. That's too much for one mechanism.

### The Solution: A Team of Specialists

Run $N$ independent attention heads **in parallel**. Each head potentially specializes in different relationships:
- **Head 1**: verb-object relationships
- **Head 2**: pronoun coreference
- **Head 3**: semantic similarity
- **Head 4–12**: other patterns...

### The Split → Attend → Merge Process

**GPT-2 Small**: $C=768$, $N_h=12$, $d_h = C/N_h = 64$

#### Step 1: Split Heads

```python
B, T, C   = 1, 4, 768
n_head    = 12
head_dim  = C // n_head   # 64

Q = torch.randn(B, T, C)  # [1, 4, 768]

# Carve the embedding dimension into (n_head, head_dim)
Q_reshaped = Q.view(B, T, n_head, head_dim)   # [1, 4, 12, 64]

# Bring n_head to the front → parallel batch dimension
Q_final = Q_reshaped.transpose(1, 2)           # [1, 12, 4, 64]
#                                               B  nh  T   dh
```

> 💡 **Key Insight**: After transposing, PyTorch treats `n_head` as a batch dimension. All 12 heads compute attention *simultaneously* — no loops needed.

#### Step 2: Run All Heads in Parallel

```python
K_final = K.view(B, T, n_head, head_dim).transpose(1, 2)   # [1, 12, 4, 64]
V_final = V.view(B, T, n_head, head_dim).transpose(1, 2)   # [1, 12, 4, 64]

# [B, nh, T, dh] @ [B, nh, dh, T] → [B, nh, T, T]
scores = (Q_final @ K_final.transpose(-2, -1)) / math.sqrt(head_dim)
# ... apply causal mask ...
attn_weights = F.softmax(scores, dim=-1)         # [1, 12, 4, 4]

# [B, nh, T, T] @ [B, nh, T, dh] → [B, nh, T, dh]
output_per_head = attn_weights @ V_final          # [1, 12, 4, 64]
```

#### Step 3: Merge Heads

```python
# [B, nh, T, dh] → [B, T, nh, dh] → [B, T, C]
merged = output_per_head.transpose(1, 2).contiguous().view(B, T, C)
# [1, 4, 768]

# Final projection mixes information across heads
c_proj = nn.Linear(C, C)
final_output = c_proj(merged)   # [1, 4, 768]
```

> ⚠️ **Why `.contiguous()`?** After `transpose()`, PyTorch may store the tensor in non-contiguous memory. `.contiguous()` creates a copy with proper memory layout, which is required before `.view()`.

### Complete Shape Journey

| Stage | Operation | Shape |
|-------|-----------|-------|
| Input | Raw embeddings | `[B, T, C]` |
| Split | `.view() + .transpose()` | `[B, nh, T, dh]` |
| Attend | Per-head attention (parallel) | `[B, nh, T, dh]` |
| Merge | `.transpose() + .view()` | `[B, T, C]` |
| Project | Final `nn.Linear` | `[B, T, C]` |

### Width vs Depth

| Concept | Source | What it does | Analogy |
|---------|--------|-------------|---------|
| **Width** | Multi-head attention | Parallel processing *within* a layer | Committee of 12 specialists in one meeting |
| **Depth** | Multiple transformer layers | Sequential processing *across* layers | Series of 12 meetings, each refining the last |

### Full `CausalSelfAttention` Module

```python
class CausalSelfAttention(nn.Module):
    def __init__(self, config: GPTConfig):
        super().__init__()
        assert config.n_embd % config.n_head == 0
        self.n_head = config.n_head
        self.n_embd = config.n_embd

        self.c_attn = nn.Linear(config.n_embd, 3 * config.n_embd)   # fused Q,K,V
        self.c_proj = nn.Linear(config.n_embd, config.n_embd)        # output projection
        self.resid_drop = nn.Dropout(config.dropout)

        # Causal mask stored as buffer (not trained, moves to GPU)
        self.register_buffer("bias",
            torch.tril(torch.ones(config.block_size, config.block_size))
            .view(1, 1, config.block_size, config.block_size))

    def forward(self, x):
        B, T, C = x.size()

        # 1. Project and split into Q, K, V
        qkv = self.c_attn(x)
        q, k, v = qkv.split(self.n_embd, dim=2)
        head_dim = C // self.n_head

        # 2. Reshape for multi-head: [B,T,C] → [B,nh,T,dh]
        q = q.view(B, T, self.n_head, head_dim).transpose(1, 2)
        k = k.view(B, T, self.n_head, head_dim).transpose(1, 2)
        v = v.view(B, T, self.n_head, head_dim).transpose(1, 2)

        # 3. Causal self-attention (all heads in parallel)
        att = (q @ k.transpose(-2, -1)) / math.sqrt(head_dim)
        att = att.masked_fill(self.bias[:, :, :T, :T] == 0, float("-inf"))
        att = F.softmax(att, dim=-1)
        y = att @ v   # [B, nh, T, dh]

        # 4. Merge heads and project
        y = y.transpose(1, 2).contiguous().view(B, T, C)
        return self.resid_drop(self.c_proj(y))
```

---

## Chapter 8 - The MLP Thinking Layer

### Role in the Transformer

| Layer | Role | Analogy |
|-------|------|---------|
| `CausalSelfAttention` | Tokens interact with each other | The group meeting |
| `MLP` | Each token processes *independently* | Going back to your desk to think |

The repeated pattern of *communication → thinking* is what gives the Transformer its power.

### Architecture: Expand → Activate → Contract

$$C \xrightarrow{\times 4} 4C \xrightarrow{\text{GELU}} 4C \xrightarrow{\div 4} C$$

```python
class MLP(nn.Module):
    def __init__(self, config: GPTConfig):
        super().__init__()
        self.fc   = nn.Linear(config.n_embd, 4 * config.n_embd)   # expand
        self.proj = nn.Linear(4 * config.n_embd, config.n_embd)   # contract
        self.drop = nn.Dropout(config.dropout)

    def forward(self, x):
        x = self.fc(x)          # [B,T,C] → [B,T,4C]
        x = F.gelu(x)           # nonlinearity (smooth alternative to ReLU)
        x = self.drop(self.proj(x))  # [B,T,4C] → [B,T,C]
        return x
```

### Demystifying `nn.Linear`

At its core, `nn.Linear` is just:
$$\text{output} = \text{input} \cdot W^T + b$$

```python
# Tiny example: project from 2D to 4D
linear = nn.Linear(in_features=2, out_features=4)

# Manually set weights [4×2] and biases [4]
linear.weight.data = torch.tensor([[1.,0.],[-1.,0.],[0.,2.],[0.,-2.]])
linear.bias.data   = torch.tensor([1., 1., -1., -1.])

x = torch.tensor([0.5, -0.5])

# Manual calculation of output[0]:
# out[0] = (0.5×1.0) + (-0.5×0.0) + 1.0 = 1.5
output = linear(x)
# tensor([1.5, 0.5, -2.0, 0.0]) ← matches! No magic.
```

### GELU Activation

GELU is a smooth alternative to ReLU. It squashes negative values toward zero while allowing small negative signals through.

| Input | ReLU | GELU |
|-------|------|------|
| 2.0 | 2.00 | ~1.95 |
| 0.5 | 0.50 | ~0.35 |
| 0.0 | 0.00 | 0.00 |
| -0.5 | 0.00 | ~-0.15 |
| -2.0 | 0.00 | ~-0.05 |

> 💡 **Why GELU over ReLU?** GELU allows a tiny amount of negative signal through, which provides richer gradients during training. GPT-2 uses GELU throughout.

### Full MLP Walkthrough (Numerical)

Input: single token vector `x = [[[0.5, -0.5]]]`, `C=2`

```
Step 1 - Expansion:   [1,1,2] → [1,1,8]
         Values: [2.40, -0.50, 1.88, -1.91, 2.08, 1.16, 0.41, -2.12]

Step 2 - GELU:        [1,1,8] → [1,1,8]
         Values: [2.39, -0.15, 1.87, -0.01, 2.06, 1.03, 0.31, -0.00]
         (large positives untouched; large negatives squashed to ~0)

Step 3 - Contraction: [1,1,8] → [1,1,2]
         Values: [1.09, -1.38]

Step 4 - Dropout:     [1,1,2] → [1,1,2]
         (randomly zeros some values during training; no-op during eval)
```

> 💡 **Critical Property**: MLP input shape = MLP output shape = `[B, T, C]`. This enables residual connections and stackability.

---

## Chapter 9 - Residual Connections

### The Core Pattern

The most important lines in the entire `Block` are these two `+` signs:

```python
def forward(self, x):
    x = x + self.attn(self.ln_1(x))   # ← residual connection
    x = x + self.mlp(self.ln_2(x))    # ← residual connection
    return x
```

This simple `x = x + something` pattern is one of the most significant breakthroughs in deep learning history (ResNet, 2015).

### The Problem: Vanishing Gradients

In a deep network, the learning signal (gradient) travels **backward** through every layer. With each step, it gets multiplied by the layer's weights. In many cases it shrinks exponentially:

```
Loss → Layer 12 → Layer 11 → ... → Layer 1
         OK         Weaker  ...  ~0 (learns nothing!)
```

Early layers stop learning entirely. This is the **vanishing gradient problem**.

### The Solution: An Express Lane for Gradients

```
Input x ──────────────────────────────→ (+) → Output
              ↓                          ↑
         [LayerNorm]                     │
              ↓                          │  ← Residual "Express Lane"
         [Attention]─────────────────────┘
         (computes the adjustment)
```

During backpropagation, the gradient can flow **directly** through the `+` operator, completely bypassing all transformations inside the attention layer. This is an **uninterrupted highway** for gradients.

### What the Network Actually Learns

**Without residuals**: "Here is a blank canvas. Paint a masterpiece."
*(Learn the entire transformation from scratch at every layer — very hard)*

**With residuals**: "Here is the current painting `x`. Just make small adjustments."
*(Learn only the residual/delta — much easier)*

The MLP and attention layers only need to learn **corrections**, not complete transformations.

### Numerical Example

```python
x_initial      = torch.tensor([[[0.2, 0.1, 0.3, 0.4]]])
# ↑ Current state of the token's representation

attention_output = torch.tensor([[[0.1, -0.1, 0.2, -0.3]]])
# ↑ The "adjustment" computed by the attention layer

x_after = x_initial + attention_output
# → tensor([[[0.3, 0.0, 0.5, 0.1]]])
# ↑ Just simple addition! Shape is unchanged.
```

| Step | Operation | Shape In | Shape Out | Purpose |
|------|-----------|----------|-----------|---------|
| 1 | `self.attn(self.ln_1(x))` | `[B,T,C]` | `[B,T,C]` | Compute the update |
| 2 | `x + ...` | `[B,T,C]` | `[B,T,C]` | Apply the update |

**Input shape = Output shape = `[B, T, C]`** always. This is what makes blocks stackable.

---

## Chapter 10 - Layer Normalization

### The Problem: Moving Targets

During training, the distribution of activations at each layer constantly shifts — different mean, different variance from batch to batch. This is called **internal covariate shift**.

Each layer is trying to learn while its inputs keep changing. It's like trying to shoot arrows at a target strapped to a bucking bronco.

### The Solution: Normalize Each Token's Vector

For **each individual token vector** independently, LayerNorm:

1. Computes mean $\mu$ and variance $\sigma^2$ across the embedding dimension $C$
2. Normalizes: $\hat{x} = \dfrac{x - \mu}{\sqrt{\sigma^2 + \epsilon}}$
3. Applies learned scale and shift: $y = \gamma \cdot \hat{x} + \beta$

$$\hat{x}_i = \frac{x_i - \mu}{\sqrt{\sigma^2 + \epsilon}}, \qquad y_i = \gamma_i \hat{x}_i + \beta_i$$

Where $\gamma$ (weight) and $\beta$ (bias) are **learned parameters**, initialized to 1 and 0 respectively.

### Numerical Walkthrough

```python
C = 4
x_token = torch.tensor([[[0.3, -0.2, 0.8, 0.5]]])

# Step 1: Compute statistics across C dimension
mu    = x_token.mean(dim=-1, keepdim=True)   # 0.35
sigma = x_token.std(dim=-1, keepdim=True)    # 0.41

print(f"Mean: {mu.item():.2f}, Std: {sigma.item():.2f}")
# Mean: 0.35, Std: 0.41  ← the "moving target"

# Step 2: Normalize → x_hat
epsilon = 1e-5
x_hat = (x_token - mu) / torch.sqrt(sigma**2 + epsilon)
# tensor([[[-0.12, -1.33,  1.09,  0.36]]])

print(f"x_hat mean: {x_hat.mean():.2f}, std: {x_hat.std():.2f}")
# Mean: 0.00, Std: 1.00  ← stable target!

# Step 3: Apply learned gamma and beta
# PyTorch initializes: gamma=ones, beta=zeros (identity transform initially)
ln = nn.LayerNorm(C)
print("Initial gamma:", ln.weight.data)   # [1., 1., 1., 1.]
print("Initial beta: ", ln.bias.data)    # [0., 0., 0., 0.]

# After training, model might learn e.g.:
gamma = torch.tensor([1.5, 1.0, 1.0, 1.0])
beta  = torch.tensor([0.5, 0.0, 0.0, 0.0])
y = gamma * x_hat + beta
# tensor([[[0.32, -1.33, 1.09, 0.36]]])
# ← stable AND optimally scaled for the next layer
```

### Pre-Norm vs Post-Norm

| Style | Equation | Used in | Stability |
|-------|----------|---------|-----------|
| **Pre-Norm** | $x + \text{SubLayer}(\text{LN}(x))$ | **GPT-2** ✅ | More stable for deep networks |
| Post-Norm | $\text{LN}(x + \text{SubLayer}(x))$ | Original Transformer | Can require LR warmup |

**Why GPT-2 uses Pre-Norm**: By normalizing *before* entering the attention or MLP layer, values are kept in check. This prevents exploding activations and makes training smoother, especially for very deep models.

In code: `x = x + self.attn(self.ln_1(x))` — the `ln_1` comes *inside* the residual.

---

## Chapter 11 - The Complete Transformer Block

### Assembling All Components

```python
class Block(nn.Module):
    def __init__(self, config: GPTConfig):
        super().__init__()
        self.ln_1 = nn.LayerNorm(config.n_embd)         # stabilizer 1
        self.attn = CausalSelfAttention(config)           # communication
        self.ln_2 = nn.LayerNorm(config.n_embd)         # stabilizer 2
        self.mlp  = MLP(config)                          # thinking

    def forward(self, x):
        # Sub-layer 1: Attention (communication)
        x = x + self.attn(self.ln_1(x))  # Normalize → Attend → Add

        # Sub-layer 2: MLP (thinking)
        x = x + self.mlp(self.ln_2(x))   # Normalize → Think → Add

        return x
```

Zero new complexity here — it's a container for components you've already mastered.

### Data Flow Through the Block

```
Input x [B,T,C]
    │
    ├──────────────────────────────────┐ residual
    │                                  │
    ↓                                  │
LayerNorm 1                            │
    ↓                                  │
CausalSelfAttention (12 heads)         │
    ↓                                  │
   (+) ←──────────────────────────────┘
    │
    ├──────────────────────────────────┐ residual
    │                                  │
    ↓                                  │
LayerNorm 2                            │
    ↓                                  │
MLP (expand 4×, GELU, contract)        │
    ↓                                  │
   (+) ←──────────────────────────────┘
    │
Output x [B,T,C]  ← SAME SHAPE AS INPUT → stackable!
```

### The Mantra: Normalize → Process → Add

Every sub-layer follows this identical pattern. Internalize this — it's the heartbeat of the Transformer.

### Why Stacking Works: The Symposium Analogy

A single Block = one project meeting. Complex problems need more.

| Block | What it develops |
|-------|-----------------|
| Block 0 | Basic syntax: which words modify which |
| Block 1–3 | Phrase-level patterns and grammar |
| Block 4–8 | Sentence-level semantics |
| Block 9–11 | Deep, nuanced, contextual understanding |

Each block's output becomes the next block's input, building a **hierarchical understanding**.

---

## Chapter 12 - Stacking Blocks: The Full GPT Model

### The Complete `__init__` Method

```python
class GPT2(nn.Module):
    def __init__(self, config: GPTConfig):
        super().__init__()
        self.config = config

        # ── Part 1: Input Layers ──────────────────────────────────
        self.wte  = nn.Embedding(config.vocab_size, config.n_embd)  # token emb
        self.wpe  = nn.Embedding(config.block_size, config.n_embd)  # pos emb
        self.drop = nn.Dropout(config.dropout)

        # ── Part 2: Core Processing ───────────────────────────────
        self.h = nn.ModuleList([Block(config) for _ in range(config.n_layer)])

        # ── Part 3: Output Preparation ───────────────────────────
        self.ln_f = nn.LayerNorm(config.n_embd)   # final stabilization

        # Language Model Head (Chapter 13)
        self.lm_head = nn.Linear(config.n_embd, config.vocab_size, bias=False)
        self.lm_head.weight = self.wte.weight     # weight tying!
```

### Part-by-Part Breakdown

**Part 1 — Input Layers** (Chapters 2 & 3)
- `wte`: Token dictionary — maps ID → meaning vector
- `wpe`: Position lookup — maps position → position vector
- `drop`: Regularization dropout applied to their sum

**Part 2 — Core Processing** (Chapters 5–11)
```python
self.h = nn.ModuleList([Block(config) for _ in range(config.n_layer)])
```
This single line creates `n_layer` **independent** Block instances. Each call to `Block(config)` creates a brand new object with its own unique weights. They are **not shared**.

> 🔑 **Why independent weights?** Block 0 processes raw embeddings and needs different skills than Block 11 which makes final refinements. Independent weights let each layer *specialize*.

**Part 3 — Output Preparation**
- `ln_f`: Final LayerNorm before the LM head. Last stabilization of the processed vectors.

### `nn.ModuleList` vs Regular Python List

| Feature | `nn.ModuleList` | Python `list` |
|---------|----------------|---------------|
| Registers parameters? | ✅ Yes | ❌ No |
| Moves to GPU with `.to(device)`? | ✅ Yes | ❌ No |
| Appears in `model.parameters()`? | ✅ Yes | ❌ No |

Always use `nn.ModuleList` for lists of PyTorch modules.

---

## Chapter 13 - The Language Model Head

### The Final Piece

After the stack of Transformer blocks and final LayerNorm, we have a `[B, T, C]` tensor of highly context-aware vectors. But this is an internal representation — not a prediction.

**Goal**: Convert each of the `T` context vectors into a distribution over the entire vocabulary.

```python
self.lm_head = nn.Linear(config.n_embd, config.vocab_size, bias=False)
```

Shape transformation:
$$[B, T, C] \xrightarrow{\text{lm\_head}} [B, T, \text{vocab\_size}]$$

Applied **independently to every token position simultaneously** → produces $T$ predictions at once.

### Why Make T Predictions? (Not Just the Last One)

#### During Training: Efficiency is Everything

```
Input  [idx]:    ["A",     "crane",  "ate",   "fish"]
Target [targets]:["crane", "ate",    "fish",  ???  ]
                   ↑         ↑         ↑
               logits[:,0] logits[:,1] logits[:,2]
```

One forward pass → `T` supervised learning signals. Training is $T\times$ more data-efficient. The causal mask ensures no cheating.

#### During Generation: Take Only the Last

```python
logits = self.lm_head(x)       # [B, T, vocab_size]
logits = logits[:, -1, :]      # [B, vocab_size] — only the last position!
```

We "waste" the first `T-1` predictions but leverage the same optimized parallel architecture. A pragmatic and effective trade-off.

### Weight Tying: The Elegant Optimization

```python
self.lm_head = nn.Linear(config.n_embd, config.vocab_size, bias=False)
self.lm_head.weight = self.wte.weight   # ← They share the SAME memory object!
```

This is **not** copying — it creates a reference. When backprop updates one, it *simultaneously* updates the other.

#### Why This Makes Perfect Sense

| Layer | Weight Shape | Role |
|-------|-------------|------|
| `wte` | `[vocab_size, n_embd]` | Token ID → meaning vector |
| `lm_head` | `[vocab_size, n_embd]` | Meaning vector → token scores |

They are **perfect inverses**:
- `wte`: "ID → meaning"
- `lm_head`: "meaning → ID"

The representation of "cat" should be the same whether "cat" appears as input or output. Weight tying enforces this logical constraint architecturally.

#### The Benefits

| Benefit | Detail |
|---------|--------|
| **Parameter reduction** | $50{,}257 \times 768 \approx 38.5M$ parameters saved with one line |
| **Regularization** | Enforces a sensible architectural constraint, reduces overfitting |
| **Better performance** | Symmetry in the embedding space is theoretically motivated |

---

## Chapter 14 - Training: Forward Pass and Loss

### The Complete `forward` Method

```python
def forward(self, idx, targets=None):
    B, T = idx.size()
    assert T <= self.config.block_size

    # 1. Embeddings
    pos = torch.arange(0, T, dtype=torch.long, device=idx.device).unsqueeze(0)
    x = self.wte(idx) + self.wpe(pos)   # [B, T, C]
    x = self.drop(x)

    # 2. Process through all blocks
    for block in self.h:
        x = block(x)                    # [B, T, C] unchanged

    # 3. Final norm + LM head
    x = self.ln_f(x)
    logits = self.lm_head(x)           # [B, T, vocab_size]

    # 4. Loss (only during training)
    loss = None
    if targets is not None:
        loss = F.cross_entropy(
            logits.view(-1, logits.size(-1)),   # [B*T, vocab_size]
            targets.view(-1)                     # [B*T]
        )
    return logits, loss
```

### What is Next-Token Prediction?

For each training sequence, `targets` = `idx` shifted one position left:

```
idx     = [5,  12,  8,  21]   ("A crane ate fish")
targets = [12,  8,  21,  6]   ("crane ate fish ???")
```

The model must predict: given "A" → predict "crane"; given "A crane" → predict "ate"; etc.

### The `.view()` Reshape: Why?

`F.cross_entropy` expects 2D input. We squash batch and time together:

| Variable | Original Shape | After `.view()` | Purpose |
|----------|---------------|-----------------|---------|
| `logits` | `[B, T, V]` | `[B×T, V]` | Each row = one position's prediction |
| `targets` | `[B, T]` | `[B×T]` | Aligned list of correct answers |

### Cross Entropy: How Loss is Calculated

`F.cross_entropy` computes the negative log-likelihood for each position, then **averages** (not sums) them:

$$\mathcal{L} = -\frac{1}{B \cdot T} \sum_{i=1}^{B \cdot T} \log P(\text{target}_i | \text{context}_i)$$

**Why average, not sum?** Keeps the loss on a consistent scale regardless of batch size. Makes training stable and hyperparameters transferable.

### Preparing Training Data: Chunking

```
Raw token stream: [5, 12, 8, 21, 6, 33, 9, 4, 15, 7, ...]
                                        ↓
Sample 1: idx=[5,12,8,21],  targets=[12,8,21,6]
Sample 2: idx=[6,33,9,4],   targets=[33,9,4,15]
```

Stack samples into batches for GPU-parallel processing:
```python
# Batch of B=2, sequence length T=4
idx     = [[5,  12,  8, 21],    # shape [2, 4]
           [6,  33,  9,  4]]

targets = [[12,  8, 21,  6],    # shape [2, 4]
           [33,  9,  4, 15]]
```

### The Complete Training Loop: 6 Stages

| Stage | Operation | Detail |
|-------|-----------|--------|
| **1. Forward Pass** | `logits, loss = model(idx, targets)` | Processes both samples in parallel through all layers |
| **2. Reshape** | `.view(-1, vocab_size)` | `logits: [2,4,V]→[8,V]`, `targets: [2,4]→[8]` |
| **3. Per-Position Loss** | Cross entropy per pair | e.g., `[2.5, 3.1, 1.9, 4.2, 2.8, 3.5, 2.2, 3.8]` |
| **4. Average** | Mean of all losses | `(2.5+3.1+...+3.8)/8 = 3.0` |
| **5. Backprop** | `loss.backward()` | Computes gradients for *every* parameter |
| **6. Update** | `optimizer.step()` | Nudges all weights to reduce `loss` |

> 💡 **One batch = one backward pass = one weight update.** The entire model learns from the *average* performance across all positions in the batch.

---

## Chapter 15 - Autoregressive Generation

### The Generation Loop

```
1. PREDICT  → Feed current sequence → get scores for next token
2. SAMPLE   → Roll dice based on probabilities → pick one token
3. APPEND   → Add new token to end of sequence
4. REPEAT   → Go back to step 1 with longer sequence
```

### Walked Example

**Prompt**: "A crane" → `idx = [5, 12]`

**Iteration 1**:
1. Feed `[5, 12]` → model → `logits[:, -1, :]` (only last position)
2. Probabilities: `"ate"=40%`, `"lifted"=35%`, `"flew"=25%`...
3. Sample → "ate" (ID=8)
4. `idx = [5, 12, 8]`

**Iteration 2**:
1. Feed `[5, 12, 8]` → model → `logits[:, -1, :]`
2. Having seen "ate", model gives `"fish"=90%`
3. Sample → "fish" (ID=21)
4. `idx = [5, 12, 8, 21]`

Output: "A crane ate fish" 🎉

### The `generate` Method

```python
@torch.no_grad()   # No gradients during inference → saves memory + computation
def generate(self, idx, max_new_tokens=50, temperature=1.0, top_k=None):
    for _ in range(max_new_tokens):

        # 1. Crop to context window (model's "short-term memory")
        idx_cond = idx[:, -self.config.block_size:]

        # 2. Forward pass
        logits, _ = self(idx_cond)

        # 3. Take ONLY the last position's logits
        logits = logits[:, -1, :] / max(temperature, 1e-8)
        # ↑ Dividing by temperature BEFORE softmax controls creativity

        # 4. Optional: Top-K filtering
        if top_k is not None:
            v, _ = torch.topk(logits, min(top_k, logits.size(-1)))
            thresh = v[:, -1].unsqueeze(-1)
            logits = torch.where(logits < thresh,
                                 torch.full_like(logits, -float("inf")),
                                 logits)

        # 5. Softmax → probabilities
        probs = F.softmax(logits, dim=-1)

        # 6. Sample (the dice roll)
        next_token = torch.multinomial(probs, num_samples=1)

        # 7. Append and continue
        idx = torch.cat([idx, next_token], dim=1)

    return idx
```

### The Creative Control Knobs

#### Temperature

Rescales logits before softmax: `logits / temperature`

| Temperature | Effect on Distribution | Output Character |
|-------------|----------------------|-----------------|
| < 1.0 (e.g., 0.5) | "Peakier" — high-prob tokens dominate | Conservative, predictable, repetitive |
| = 1.0 | Unchanged | Balanced |
| > 1.0 (e.g., 1.5) | "Flatter" — rare tokens more likely | Creative, surprising, potentially nonsensical |

> ⚠️ The code uses `max(temperature, 1e-8)` to prevent division by zero. As `temperature → 0`, output approaches greedy decoding (always pick the highest probability token).

#### Top-K Sampling

Only consider the `k` most likely tokens. Set all others to $-\infty$ before softmax.

| `top_k` | Effect |
|---------|--------|
| `None` | All 50,257 tokens eligible |
| `50` | Only top 50 tokens eligible |
| `1` | Greedy decoding (deterministic) |

Top-K prevents rare/nonsensical tokens from ever being chosen, greatly improving coherence.

---

## Complete Architecture Summary

```
Token IDs [B, T]
    │
    ├── WTE (nn.Embedding) ──────────────┐
    │   vocab_size × n_embd              + → [B,T,C]
    └── WPE (nn.Embedding) ──────────────┘
        block_size × n_embd
                    │
               Dropout
                    │
         ┌──────────┘
         │
    ┌────▼────────────────────────────────┐
    │  Transformer Block (×n_layer=12)    │
    │                                     │
    │  x = x + Attn(LN1(x))              │
    │       ↑ causal self-attention       │
    │       ↑ 12 heads in parallel        │
    │       ↑ pre-norm architecture       │
    │                                     │
    │  x = x + MLP(LN2(x))               │
    │       ↑ expand 4×, GELU, contract   │
    │       ↑ per-token independently     │
    │                                     │
    │  Input shape = Output shape [B,T,C] │
    └────────────────────────────────────┘
                    │
                    │ (×12 sequential blocks)
                    │
              Final LayerNorm
                    │
              LM Head (nn.Linear)
              [tied to WTE weights]
                    │
            Logits [B, T, vocab_size]
                    │
          ┌─────────┴──────────┐
      Training              Generation
    (all T logits)        (last logit only)
          │                    │
    Cross Entropy         Softmax + Sample
    → scalar loss         → next token
    → backprop            → append → repeat
    → weight update
```

---

## Master Reference: Key Concepts

| Concept | One-Line Summary | Chapter |
|---------|-----------------|---------|
| Token Embeddings | Map token IDs → learnable coordinate vectors | 2 |
| Positional Embeddings | Add unique position vectors so order is preserved | 3 |
| Self-Attention | Each token dynamically aggregates information from all others | 4–5 |
| Causal Mask | Block future tokens by setting their scores to $-\infty$ | 6 |
| Multi-Head Attention | Run $N$ parallel attention heads for multiple "perspectives" | 7 |
| MLP | Per-token nonlinear "thinking" after communication | 8 |
| Residual Connection | Add input to output; creates gradient highway through depth | 9 |
| Layer Normalization | Normalize each token's vector to stabilize training | 10 |
| Transformer Block | One "meeting": LN→Attn→Add then LN→MLP→Add | 11 |
| Weight Tying | LM head shares weights with WTE; saves ~38.5M params | 13 |
| Cross Entropy Loss | Average negative log-likelihood across all `B×T` positions | 14 |
| Autoregressive Gen | Predict → Sample → Append → Repeat | 15 |

## ~={red}References=~

https://www.youtube.com/watch?v=PA1h0-ezens&t=1094s
https://github.com/The-Pocket/PocketFlow-Tutorial-Video-Generator/blob/main/docs/llm/transformer.md