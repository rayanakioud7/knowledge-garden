Here’s a concrete plan for making a **pure NumPy neural network + autograd engine** as your Year 1–2 “From Scratch” theoretical flagship repo. Treat v1.0 as a 3–4 month part-time project, then extend it over time.

The goal is not to beat PyTorch. The goal is to prove you understand **reverse-mode autodiff, matrix calculus, backpropagation, and neural network internals** by building them with only NumPy in the core.

---

## 1. Scope and constraints

### Core constraint
The `numpy_autograd` package should import only:
- `numpy`
- Python standard library

No PyTorch, TensorFlow, JAX, or autograd libraries in the core.

Optional dependencies can be used only for:
- examples: `matplotlib`, `scikit-learn`, `tqdm`
- benchmarks: `torch` in a separate benchmark script
- docs: `mkdocs`, `sphinx`, etc.

### What v1.0 should prove
- You can implement a dynamic computational graph.
- You can derive and code backward passes for tensor ops.
- You can handle broadcasting, reductions, matmul, and softmax correctly.
- You can build layers, losses, optimizers, and a training loop.
- You can verify gradients with numerical gradient checking.
- You can train a real MLP on MNIST and reach reasonable accuracy.

---

## 2. Suggested repo structure

```text
numpy-autograd/
├── numpy_autograd/
│   ├── __init__.py
│   ├── tensor.py              # Tensor class, graph, backward()
│   ├── ops.py                 # add, mul, matmul, sum, mean, exp, log, etc.
│   ├── functional.py          # relu, sigmoid, tanh, softmax, cross_entropy
│   ├── nn/
│   │   ├── __init__.py
│   │   ├── module.py          # base Module, Parameter, Sequential
│   │   ├── layers.py          # Linear, Dropout, BatchNorm, LayerNorm
│   │   ├── losses.py          # MSELoss, CrossEntropyLoss, BCELoss
│   │   └── init.py            # Xavier, He, zeros, ones
│   ├── optim/
│   │   ├── __init__.py
│   │   ├── sgd.py             # SGD, Momentum
│   │   └── adam.py            # Adam, AdamW
│   ├── data.py                # Dataset, DataLoader, batching
│   └── utils.py               # gradcheck, one_hot, accuracy
├── tests/
│   ├── test_tensor.py
│   ├── test_ops.py
│   ├── test_gradcheck.py
│   ├── test_nn.py
│   ├── test_optim.py
│   └── test_training.py
├── examples/
│   ├── linear_regression.py
│   ├── xor_mlp.py
│   ├── mnist_mlp.py
│   └── notebooks/
│       ├── 01_autograd_from_scratch.ipynb
│       └── 02_backprop_derivations.ipynb
├── benchmarks/
│   └── compare_mlp_torch.py
├── docs/
│   ├── architecture.md
│   ├── gradients.md
│   └── limitations.md
├── .github/workflows/ci.yml
├── pyproject.toml
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

Use a `src/` layout if you want to be extra clean, but the above is fine for a first flagship repo.

---

## 3. Phase-by-phase plan

### Phase 0 — Setup and scope lock (Week 1)
- Create repo, MIT license, `pyproject.toml`, `.gitignore`.
- Set up GitHub Actions: run `pytest`, `ruff`, maybe `mypy`.
- Write README skeleton:
  - What it is
  - Constraints: pure NumPy core
  - Quickstart
  - Roadmap
  - Results
- Decide the public API early:
- 
```python
  from numpy_autograd import Tensor
  from numpy_autograd.nn import Linear, ReLU, Sequential
  from numpy_autograd.optim import Adam
```

- Commit in small, logical commits. Don’t dump the whole project at once.

---

### Phase 1 — Scalar autograd engine (Weeks 2–3)
Start with a micrograd-style `Value` class to learn the mechanics.

Implement:
- `Value(data, _children, _op)`
- `requires_grad`
- `grad`
- `backward()`
- topological sort
- operations: `+`, `-`, `*`, `/`, `**`, `tanh`, `relu`, `exp`, `log`
- tiny MLP on XOR

Tests:
- numerical gradient check for every scalar op
- backward through a small graph
- XOR converges

This phase proves you understand the chain rule and reverse-mode autodiff.

---

### Phase 2 — Tensor autograd engine (Weeks 4–6)
Replace `Value` with a `Tensor` that wraps `np.ndarray`.

Tensor design:
```python
class Tensor:
    def __init__(self, data, requires_grad=False, _children=(), _op=""):
        self.data = np.asarray(data, dtype=np.float64)
        self.grad = None
        self.requires_grad = requires_grad
        self._backward = lambda: None
        self._prev = set(_children)
        self._op = _op
```

Key features:
- dynamic graph
- `backward()` with topological sort
- `zero_grad()`
- `detach()`
- `no_grad()` context manager
- `unbroadcast(grad, shape)` to reduce gradients after NumPy broadcasting

Operations to implement:
- elementwise: `add`, `sub`, `mul`, `div`, `pow`
- matrix: `matmul`, `transpose`, `reshape`
- reductions: `sum`, `mean`, `max`
- activations: `relu`, `sigmoid`, `tanh`, `softmax`
- losses: `mse_loss`, `cross_entropy_loss` with logits
- utility: `logsumexp` for stable cross-entropy

Critical detail: **broadcasting gradients**.
If `z = x + y` and `x.shape=(3,1)`, `y.shape=(1,4)`, then `z.shape=(3,4)`.
`dx` must be summed over the broadcasted dimension to return to `(3,1)`.

Tests:
- gradcheck every op with random inputs
- test broadcasting explicitly
- test non-contiguous arrays
- test softmax + cross-entropy stability

---

### Phase 3 — Neural network library (Weeks 7–9)
Build a small PyTorch-like API.

Modules:
```python
class Module:
    def parameters(self): ...
    def zero_grad(self): ...
    def __call__(self, x): ...
```

Layers:
- `Linear(in_features, out_features, bias=True)`
- `ReLU`, `Sigmoid`, `Tanh`
- `Dropout(p)`
- `Sequential(*layers)`
- stretch: `BatchNorm1d`, `LayerNorm`

Losses:
- `MSELoss`
- `CrossEntropyLoss` (logits)
- `BCELoss` / `BCEWithLogitsLoss`

Optimizers:
- `SGD(params, lr, momentum=0)`
- `Adam(params, lr, betas, eps, weight_decay)`
- `AdamW`

Initializers:
- Xavier/Glorot
- He/Kaiming
- zeros, ones, normal

Data:
- `Dataset`
- `DataLoader`
- batching, shuffling
- one-hot encoding
- accuracy metric

At this point you can write:
```python
model = Sequential(
    Linear(784, 128),
    ReLU(),
    Linear(128, 10)
)
optim = Adam(model.parameters(), lr=1e-3)
loss_fn = CrossEntropyLoss()

for x, y in dataloader:
    logits = model(x)
    loss = loss_fn(logits, y)
    optim.zero_grad()
    loss.backward()
    optim.step()
```

---

### Phase 4 — Training examples and benchmarks (Weeks 10–11)
Examples to include:
1. Linear regression on synthetic data.
2. XOR MLP.
3. MNIST MLP classifier.
4. Optional: Fashion-MNIST.
5. Optional: small CNN on MNIST.

MNIST MLP target:
- 1–2 hidden layers
- ReLU + Adam
- batch size 64–128
- 5–10 epochs
- aim for **97–98% test accuracy**

Benchmark:
- Compare forward/backward speed against a tiny PyTorch MLP on CPU.
- Be honest: pure NumPy will be slower and CPU-only.
- Include a table in README.

---

### Phase 5 — Polish, docs, release (Week 12)
- Write README with:
  - hero code snippet
  - architecture diagram
  - gradient derivation table
  - MNIST results
  - install instructions
  - limitations
- Add docstrings to all public APIs.
- Add notebooks explaining:
  - what reverse-mode autodiff is
  - how broadcasting gradients work
  - how softmax + cross-entropy backward is derived
- Add CI badges, coverage badge, license badge.
- Tag `v0.1.0`.
- Write a short blog post: “I built a neural network from scratch with only NumPy.”

---

## 4. Key gradient formulas to implement

For each op, cache forward values and define `_backward`.

| Forward | Backward |
|---|---|
| `z = x + y` | `dx = dz`, `dy = dz` then unbroadcast |
| `z = x * y` | `dx = dz * y`, `dy = dz * x` then unbroadcast |
| `z = x @ y` | `dx = dz @ y.T`, `dy = x.T @ dz` |
| `z = sum(x)` | `dx = dz * ones_like(x)` |
| `z = mean(x)` | `dx = dz / x.size` |
| `z = exp(x)` | `dx = dz * exp(x)` |
| `z = log(x)` | `dx = dz / x` |
| `z = tanh(x)` | `dx = dz * (1 - tanh(x)**2)` |
| `z = relu(x)` | `dx = dz * (x > 0)` |
| `z = sigmoid(x)` | `dx = dz * sigmoid(x) * (1 - sigmoid(x))` |
| `z = softmax(x)` | `dx = softmax * (dz - sum(dz * softmax, axis=-1, keepdims=True))` |
| `z = cross_entropy(logits, y)` | `dx = (softmax(logits) - one_hot(y)) / N` |

Use `logsumexp` for stable cross-entropy:
```python
log_probs = logits - logsumexp(logits, axis=-1, keepdims=True)
loss = -log_probs[range(N), y].mean()
```

---

## 5. Testing strategy

This is what makes the repo credible.

### Gradient checking
For every op:
1. Create random inputs.
2. Compute analytical gradient via `backward()`.
3. Compute numerical gradient:
   ```python
   (f(x + eps) - f(x - eps)) / (2 * eps)
   ```
4. Compare with `np.testing.assert_allclose`.

Test:
- scalar and tensor ops
- broadcasting
- reductions
- matmul with batch dimensions
- softmax + cross-entropy
- layers with parameters

### Other tests
- shape tests
- zero_grad behavior
- optimizer step correctness on a quadratic
- overfit a tiny dataset
- XOR convergence
- MNIST smoke test: train 1 epoch and check accuracy > 90%

### CI
GitHub Actions:
```yaml
- run: pytest
- run: ruff check .
- run: mypy numpy_autograd
```

---

## 6. GitHub presentation

Your README should answer:

- **What is this?** A pure NumPy autograd engine and neural network library.
- **Why does it exist?** To prove I understand backprop and matrix calculus from first principles.
- **What works?** Tensor autograd, layers, optimizers, MNIST MLP.
- **What is the API?** Show a 10-line training loop.
- **How is it tested?** Gradient checks for every op.
- **What are the results?** MNIST accuracy, benchmark table.
- **What are the limitations?** CPU-only, no GPU, educational, slower than PyTorch.
- **What did I learn?** Link to blog posts / notebooks.

Add a simple architecture diagram:

```text
Tensor -> ops -> computational graph -> topological sort -> backward()
       -> nn.Module -> layers -> losses -> optimizers -> training loop
```

---

## 7. Stretch goals after v1.0

Once v1.0 is solid, extend in this order:

1. **Convolutional layers**
   - `im2col` / `col2im`
   - Conv2d forward and backward
   - MaxPool2d
   - Train a small CNN on MNIST

2. **Recurrent layers**
   - RNN cell
   - LSTM cell
   - Backprop through time

3. **Normalization**
   - BatchNorm
   - LayerNorm

4. **Attention**
   - Scaled dot-product attention
   - Multi-head attention
   - Tiny decoder-only Transformer on a toy character dataset

5. **Performance**
   - `einsum` optimizations
   - memory-efficient graph
   - optional `numba` or `cython` backend outside core

6. **Educational content**
   - “Backprop from scratch” series
   - YouTube / blog / Twitter thread
   - Jupyter notebooks with derivations

---

## 8. Success criteria

You can call this repo a success when:

- `pip install -e .` works.
- `pytest` passes with gradient checks.
- You can train an MLP on MNIST to >97% test accuracy.
- The core package imports only NumPy.
- README explains the math and shows results.
- You can explain every backward pass in an interview.
- The repo has clean commits, CI, tests, docs, and examples.

This single repo will prove more about your understanding of deep learning than ten projects that just call `model.fit()` or `torch.nn.Linear`.