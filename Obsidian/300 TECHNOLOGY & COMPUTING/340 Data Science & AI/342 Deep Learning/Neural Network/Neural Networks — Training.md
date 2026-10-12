
> **Prerequisites:** [[Neural Networks - Foundations]]

---

Date: 2026-04-01
Tags: [[Deep Learning]], [[Neural Networks]], [[Backpropagation]], [[Optimization]]

---

## 1. Cost Functions

### 1.1 Binary Cross-Entropy Loss

For binary classification with a single output unit, the per-example loss is:

$$\mathcal{L}(\hat{y}, y) = -y \log(\hat{y}) - (1 - y)\log(1 - \hat{y})$$

The cost over $m$ training examples is the mean of the per-example losses:

$$J(\vec{w}, b) = \frac{1}{m}\sum_{i=1}^{m} \mathcal{L}\!\left(\hat{y}^{(i)}, y^{(i)}\right)$$

### 1.2 Sparse Categorical Cross-Entropy (Multiclass)

For multiclass problems with $N$ output classes and a softmax output layer, the loss selects only the term corresponding to the true class:

$$\mathcal{L}(a_1, \ldots, a_N, y) = \begin{cases} -\log a_1 & \text{if } y = 1 \\ -\log a_2 & \text{if } y = 2 \\ \quad \vdots & \\ -\log a_N & \text{if } y = N \end{cases}$$

The more numerically stable formulation bypasses the intermediate activation variable and computes the loss directly from the logits $z_j$:

$$\mathcal{L} = -\log \frac{e^{z_j}}{\sum_{k=1}^{N} e^{z_k}}$$

This is what `SparseCategoricalCrossentropy(from_logits=True)` implements in TensorFlow, and `nn.CrossEntropyLoss()` implements in PyTorch.

---

## 2. Optimization

### 2.1 Standard Gradient Descent

The weights and biases are updated iteratively in the direction that reduces the cost:

$$w_j := w_j - \alpha \frac{\partial}{\partial w_j} J(\vec{w}, b)$$

$$b := b - \alpha \frac{\partial}{\partial b} J(\vec{w}, b)$$

All parameters are updated simultaneously at each step. The scalar $\alpha$ is the ~={red}learning rate=~, controlling the step size.

- If $\alpha$ is too large, gradient descent may overshoot and diverge.
- If $\alpha$ is too small, convergence is needlessly slow.

### 2.2 Adam Optimizer (Adaptive Moment Estimation)

Standard gradient descent uses a single global learning rate for all parameters. The ~={blue}Adam algorithm=~ assigns an individual, adaptive learning rate to each parameter. This makes it significantly more efficient for deep networks.

The update rule for each parameter $w_j$ is:

$$w_j := w_j - \alpha_j \frac{\partial}{\partial w_j} J(\vec{w}, b)$$

The adaptive learning rates $\alpha_j$ are adjusted according to two principles:

- If $w_j$ or $b$ consistently moves in the same direction → $\alpha_j$ is **increased**.
- If $w_j$ or $b$ oscillates → $\alpha_j$ is **decreased**.

Internally, Adam tracks the first moment (mean of gradients) and second moment (uncentered variance of gradients), producing a bias-corrected, per-parameter update.

---

### 3. Forward Propagation

Forward propagation is the process of passing an input through the network layer by layer to produce a prediction.

#### 3.1 Step-by-Step (Single Example)

For each layer $l = 1, 2, \ldots, L$:

$$ \vec{z}^{[l]} = W^{[l]\top} \vec{a}^{[l-1]} + \vec{b}^{[l]} $$

$$ \vec{a}^{[l]} = g^{[l]}\!\left(\vec{z}^{[l]}\right) $$

The initial input is $\vec{a}^{[0]} = \vec{x}$. The final output is $\hat{y} = a^{[L]}$.

**Matrix Formalization (3 Inputs, 2 Hidden Neurons, 1 Output)**

**Layer 1:**

$$ \vec{z}^{[1]} = \begin{bmatrix} w_{11}^{[1]} & w_{21}^{[1]} & w_{31}^{[1]} \\ w_{12}^{[1]} & w_{22}^{[1]} & w_{32}^{[1]} \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} + \begin{bmatrix} b_1^{[1]} \\ b_2^{[1]} \end{bmatrix} = \begin{bmatrix} z_1^{[1]} \\ z_2^{[1]} \end{bmatrix} $$

$$ \vec{a}^{[1]} = g^{[1]}\left( \begin{bmatrix} z_1^{[1]} \\ z_2^{[1]} \end{bmatrix} \right) = \begin{bmatrix} a_1^{[1]} \\ a_2^{[1]} \end{bmatrix} $$

**Layer 2:**

$$ \vec{z}^{[2]} = \begin{bmatrix} w_{11}^{[2]} & w_{21}^{[2]} \end{bmatrix} \begin{bmatrix} a_1^{[1]} \\ a_2^{[1]} \end{bmatrix} + \begin{bmatrix} b_1^{[2]} \end{bmatrix} = \begin{bmatrix} z_1^{[2]} \end{bmatrix} $$

$$ \hat{y} = \vec{a}^{[2]} = g^{[2]}\left( \begin{bmatrix} z_1^{[2]} \end{bmatrix} \right) $$

---

#### 3.2 Vectorized Form (All Examples)

For a data matrix $X \in \mathbb{R}^{m \times n}$ containing $m$ examples:

$$ Z^{[l]} = A^{[l-1]} W^{[l]} + \vec{b}^{[l]} $$

$$ A^{[l]} = g^{[l]}\!\left(Z^{[l]}\right) $$

Here $A^{[l]} \in \mathbb{R}^{m \times n^{[l]}}$ and NumPy broadcasting expands $\vec{b}^{[l]}$ from shape $(n^{[l]},)$ to $(m, n^{[l]})$ automatically.

**Matrix Formalization (Batch Size $m=2$)**

**Layer 1:**

$$ Z^{[1]} = \begin{bmatrix} x_{11} & x_{12} & x_{13} \\ x_{21} & x_{22} & x_{23} \end{bmatrix} \begin{bmatrix} w_{11}^{[1]} & w_{12}^{[1]} \\ w_{21}^{[1]} & w_{22}^{[1]} \\ w_{31}^{[1]} & w_{32}^{[1]} \end{bmatrix} + \begin{bmatrix} b_1^{[1]} & b_2^{[1]} \end{bmatrix} = \begin{bmatrix} z_{11}^{[1]} & z_{12}^{[1]} \\ z_{21}^{[1]} & z_{22}^{[1]} \end{bmatrix} $$

$$ A^{[1]} = g^{[1]}\left( \begin{bmatrix} z_{11}^{[1]} & z_{12}^{[1]} \\ z_{21}^{[1]} & z_{22}^{[1]} \end{bmatrix} \right) = \begin{bmatrix} a_{11}^{[1]} & a_{12}^{[1]} \\ a_{21}^{[1]} & a_{22}^{[1]} \end{bmatrix} $$

**Layer 2:**

$$ Z^{[2]} = \begin{bmatrix} a_{11}^{[1]} & a_{12}^{[1]} \\ a_{21}^{[1]} & a_{22}^{[1]} \end{bmatrix} \begin{bmatrix} w_{11}^{[2]} \\ w_{21}^{[2]} \end{bmatrix} + \begin{bmatrix} b_1^{[2]} \end{bmatrix} = \begin{bmatrix} z_{11}^{[2]} \\ z_{21}^{[2]} \end{bmatrix} $$

$$ \hat{Y} = A^{[2]} = g^{[2]}\left( \begin{bmatrix} z_{11}^{[2]} \\ z_{21}^{[2]} \end{bmatrix} \right) $$

---

## 4. Backpropagation

Backpropagation computes the gradient of the cost function with respect to every weight and bias in the network. It applies the chain rule of calculus in reverse — from the output layer back to the input layer — allowing gradient descent to update all parameters simultaneously.

### 4.1 Intuition

At each layer, we ask: given how much the cost changed at the layer above, how much did each weight and bias in the current layer contribute?

### 4.2 Gradient Derivation

Define the error signal at layer $l$ as:

$$\delta^{[l]} = \frac{\partial \mathcal{L}}{\partial z^{[l]}}$$

**Output layer ($l = L$):**

$$\delta^{[L]} = a^{[L]} - y$$

_(For binary cross-entropy with sigmoid output.)_

**Hidden layer propagation:**

$$\delta^{[l]} = \left(W^{[l+1]} \delta^{[l+1]}\right) \odot g'^{[l]}\!\left(z^{[l]}\right)$$

where $\odot$ denotes the element-wise product and $g'$ is the derivative of the activation function.

**Parameter gradients:**

$$\frac{\partial \mathcal{L}}{\partial W^{[l]}} = \vec{a}^{[l-1]} \left(\delta^{[l]}\right)^{\!\top}$$

$$\frac{\partial \mathcal{L}}{\partial \vec{b}^{[l]}} = \delta^{[l]}$$

### 4.3 Activation Function Derivatives

| Activation | $g(z)$                     | $g'(z)$              |
| ---------- | -------------------------- | --------------------- |
| Sigmoid    | $\dfrac{1}{1+e^{-z}}$     | $g(z)(1 - g(z))$     |
| ReLU       | $\max(0, z)$              | $\mathbb{1}[z > 0]$  |
| Linear     | $z$                        | $1$                   |

> [!important] 
> ReLU's derivative is either 0 or 1, which avoids the vanishing gradient problem that afflicts the sigmoid function. This is a primary reason ReLU accelerates training in deep networks.

---

## 5. Training Process

The complete training loop involves the following steps, repeated for a specified number of ~={blue}epochs=~:

1. **Initialize** weights and biases (commonly with small random values or Xavier initialization).
2. **Forward pass** — compute $\hat{y}$ for the current batch.
3. **Compute loss** — evaluate $J(\vec{w}, b)$.
4. **Backward pass** — compute gradients via backpropagation.
5. **Update parameters** — apply gradient descent (or Adam).
6. **Repeat** until convergence.

One epoch corresponds to one complete pass through the entire training dataset.

![[Pasted image 20260504200853.png]]

---

## 6. Overfitting and Regularization

~={red}Overfitting=~ occurs when the model fits the training data too closely — including its noise — and generalizes poorly to unseen examples. Conversely, ~={red}underfitting=~ occurs when the model is too simple to capture the underlying pattern.

Common remedies for overfitting include:

- **Collecting more training data** — the most reliable solution.
- **L2 Regularization (Weight Decay)** — penalizes large weights by adding $\frac{\lambda}{2m}\sum w_j^2$ to the cost.
- **Dropout** — randomly deactivates a fraction of neurons during each training step, forcing the network to learn redundant representations.
- **Early stopping** — halt training when performance on a validation set begins to degrade.

---

## 7. Model Evaluation

After training, evaluate the model on a held-out ~={green}test set=~ (data not used during training or validation). Key metrics include:

- **Accuracy** — fraction of examples correctly classified.
- **Loss curve** — plot training loss against epochs to diagnose underfitting (high loss) or overfitting (diverging train/validation loss).
- **Confusion matrix** — for multiclass tasks, shows which classes are confused with which.

---

**See also:** [[Neural Networks - Foundations]] · [[Neural Networks — Implementation|Neural Networks - Implementation]]

---

# ~={red}References=~

- [Neural Networks - Course Notes PDF](Neural_Networks.pdf)
- [MIT Neural Networks Lecture Slides](mit_neural_network.pdf)
- [C2 Week 1 Assignment: Binary Digit Recognition](C2_W1_Assignment.ipynb)
- [C2 Week 2 Assignment: Multiclass Digit Recognition](C2_W2_Assignment.ipynb)