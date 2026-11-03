# miniTorch in C

A minimalist, dependency-free deep learning library written from scratch in pure C99/C11 that mimics PyTorch's core design.

Includes a reverse-mode automatic differentiation engine, dense N-D tensors, modular neural network layers (`nn.Module`), convolutional networks (CNN), a full generative Transformer (nanoGPT-style), optimizers (SGD, Adam), dataset utilities, and finite-difference gradient verification.

---

## Highlights

- **Pure C11**: Zero external dependencies—only standard C runtime and `math.h`.
- **Dynamic Computation Graph**: Reverse-mode autograd tape supporting arbitrary directed acyclic graphs (DAGs), multi-consumer branching, and parameter sharing.
- **Topological Sort Backward**: Robust reverse post-order DFS traversal guaranteeing all consumer gradients are fully accumulated before producers execute.
- **Scoped Memory Management**: Automatic cleanup of transient computation graphs per iteration while preserving model parameters via `MiniTorchScope` and reference counting.
- **Neural Network Primitives**:
  - `Linear` (fully connected with optional bias)
  - `Conv2d` (im2col + GEMM convolution with stride, padding, dilation)
  - `MaxPool2d` (2D max pooling with argmax gradient routing)
  - `LayerNorm1d` (layer normalization over channels/hidden dims)
  - `Embedding` (token lookup with scatter-add gradient accumulation)
  - `Dropout` (inverted dropout with training mode toggles)
  - `Sequential` (hierarchical container)
  - `TransformerBlock` (Pre-LN multi-head causal self-attention + GELU feed-forward MLP + residual connections)
- **Activations & Loss Functions**:
  - Activations: ReLU, GELU, Sigmoid, Tanh, Exp, Log, Sqrt, Pow
  - Losses: Cross-Entropy with stable log-softmax reduction, Sum of Squared Errors (SSE)
- **Optimizers**:
  - `optim_sgd`: Stochastic Gradient Descent with momentum and weight decay
  - `optim_adam`: Adam with first/second moment estimates and bias corrections
- **Data Loaders & Synthetic Datasets**:
  - Minibatch `DataLoader` with in-place Fisher-Yates shuffling
  - Datasets: XOR, Two Spirals, Bar images (horizontal vs. vertical), Text corpora

---

## Directory Structure

```text
minitorch in c/
├── include/
│   ├── data.h          # Datasets, DataLoader, RNG, synthetic problems
│   ├── nn.h            # Module interface, layers, containers, transformer block
│   ├── optim.h         # Optimizers (SGD with momentum, Adam)
│   └── tensor.h        # Dense N-D Tensor, autograd engine, scope management
├── src/
│   ├── data.c          # DataLoader & synthetic data generation implementations
│   ├── nn.c            # Layers, modules, and transformer block forward pass
│   ├── optim.c         # SGD and Adam optimization algorithms
│   └── tensor.c        # Tensor ops, autograd DAG engine, memory cleanup
├── tests/
│   ├── test_autograd.c # 23 finite-difference gradient checks for raw ops & leaks
│   └── test_nn.c       # Finite-difference gradient checks for full models & layers
├── demos/
│   ├── demo_xor.c      # MLP training on classic XOR problem (ReLU vs GELU)
│   ├── demo_cnn.c      # ConvNet training on 8x8 bar classification
│   └── demo_transformer.c # Generative causal Transformer character LM
├── Makefile            # Standard GNU / MinGW Make build script
├── CMakeLists.txt      # Modern CMake configuration
└── README.md           # Documentation
```

---

## Building and Running

### Prerequisites

- GCC / Clang with C11 support (`-std=c11`)
- Make (`make` / `mingw32-make`) or CMake (version >= 3.12)

### Using Make

```bash
# Build all tests and demos
make all

# Run test suites (finite-difference gradient checks)
make test

# Run all demonstrations (XOR, CNN, Transformer)
make demos

# Clean build artifacts
make clean
```

### Using CMake

```bash
# Configure and build
cmake -B build
cmake --build build

# Run automated tests via CTest
ctest --test-dir build --output-on-failure

# Run individual executables
./build/demo_xor
./build/demo_cnn
./build/demo_transformer
```

---

## Demonstrations

### 1. XOR Classification (`demos/demo_xor.c`)
Trains a 2-layer MLP on the classic non-linearly separable XOR problem using GELU and ReLU with Adam and SGD.
```text
== XOR  act=GELU  opt=Adam ==
Sequential
  Linear  (24 params)
  GELU
  Linear  (18 params)
  epoch     0  loss 0.74620
  epoch   600  loss 0.00005
  epoch  1200  loss 0.00001
  epoch  2999  loss 0.00000
    x=(0,0)  logits=( +7.296, -5.578)  pred=0  target=0  ok
    x=(0,1)  logits=( -7.262, +6.140)  pred=1  target=1  ok
    x=(1,0)  logits=( -6.848, +6.689)  pred=1  target=1  ok
    x=(1,1)  logits=( +6.373, -6.931)  pred=0  target=0  ok
  GELU + Adam : final loss  0.00000   accuracy 4/4
```

### 2. Convolutional Neural Network (`demos/demo_cnn.c`)
Trains a CNN (`Conv2d -> ReLU -> MaxPool2d -> Flatten -> Linear -> ReLU -> Linear`) to classify noisy 8x8 pixel patterns into horizontal vs. vertical bars.
```text
Training (Adam, lr=0.02, 60 epochs):
  Epoch   0 | Loss:  0.72079 | Train Acc: 44/80 (55.0%) | Test Acc: 14/20 (70.0%)
  Epoch  10 | Loss:  0.09061 | Train Acc: 80/80 (100.0%) | Test Acc: 19/20 (95.0%)
  Epoch  20 | Loss:  0.00105 | Train Acc: 80/80 (100.0%) | Test Acc: 20/20 (100.0%)
  Epoch  60 | Loss:  0.00001 | Train Acc: 80/80 (100.0%) | Test Acc: 20/20 (100.0%)

Sample Test Set Predictions:
  Sample [true=0, pred=0]: (Vertical)
    ..........##....
    ..........##....
    ......##..##....
    ..........##....
  Sample [true=1, pred=1]: (Horizontal)
    ........##......
    ################
    ################
    ......##........
```

### 3. Generative Causal Transformer (`demos/demo_transformer.c`)
Trains a causal autoregressive Transformer language model on character sequence motifs and demonstrates greedy autoregressive text generation.
```text
Training (Adam, lr=0.005, 50 epochs):
  Epoch   0 | Mean Sequence Cross-Entropy Loss: 1.01659
  Epoch  20 | Mean Sequence Cross-Entropy Loss: 0.21934
  Epoch  50 | Mean Sequence Cross-Entropy Loss: 0.10001

Autoregressive Text Generation (Motif Completion):
  Prompt:    "abc"
  Generated: "abcdeffdeghigihabc"
  Prompt:    "def"
  Generated: "deffdeghigihabcabc"
  Prompt:    "ghi"
  Generated: "ghigihabcabcdeffde"
```

---

## Verification & Testing

Every operator and model architecture is strictly validated using finite-difference gradient checking, evaluating numerical central differences:
$$\frac{\partial L}{\partial w_i} \approx \frac{L(w_i + \epsilon) - L(w_i - \epsilon)}{2\epsilon}$$
against analytical gradients computed by `tensor_backward()`.

### Autograd Test Suite (`tests/test_autograd.c`)
- **Unary Ops**: ReLU, Sigmoid, Tanh, GELU, Exp, Log, Sqrt, Pow(3), Sum-dim, Mean-dim
- **Binary & Reduction Ops**: Elementwise Add/Sub/Mul/Div, Broadcasting, Matmul, Matmul-TN
- **Specialized Ops**: Conv2D (weight & bias), MaxPool2D routing, Embedding scatter-add
- **Graph Mechanics**: Shared parameter edges, multi-pass gradient accumulation, Cross-Entropy
- **Leak Verification**: 25 iterations of dynamic graph allocation & teardown leaving 0 memory leaks
- **Result**: **23 / 23 PASS**

### Neural Network Test Suite (`tests/test_nn.c`)
- MLP (GELU) with Cross-Entropy Loss
- MLP (ReLU) with Sum of Squared Errors
- CNN (Conv2D + MaxPool2D + Linear) with Cross-Entropy
- LayerNorm + Linear with SSE
- Full TransformerBlock (Attention + Pre-LN + GELU MLP + Residuals) with SSE
- Adam optimization convergence
- **Result**: **6 / 6 PASS**

---

## Architecture Details

### Scopes and Memory Ownership
A dynamic computation graph can generate thousands of intermediate nodes. In miniTorch:
- Model parameters are marked `held = 1` and registered to a `MiniTorchScope`.
- Transient forward graph nodes (`add`, `matmul`, `relu`, etc.) are owned by their outputs via reference counts (`refs`).
- Calling `tensor_backward(loss)` populates parameter `.grad` buffers.
- Calling `tensor_free(loss)` tears down the forward graph in $O(V + E)$ iteratively without stack overflow, freeing all intermediates while leaving parameter tensors intact.
- Calling `scope_destroy(scope)` frees all remaining parameters and the scope at shutdown.

### Reverse-Mode Autograd and DAG Topological Sort
Unlike tree structures, neural networks with residual connections and multi-head attention are DAGs where intermediate tensors have multiple consumers (e.g. $x_1$ consumed by both the residual connection and the feed-forward LayerNorm).
`build_postorder()` performs a reverse post-order DFS to topologically sort the graph, ensuring every consumer accumulates its gradient into a tensor before that tensor's backward function executes.

---

## License
MIT License.

