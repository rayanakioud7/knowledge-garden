---

## Date: 2026-04-01 Tags: [[Mathematics]], [[Machine Learning]], [[Deep Learning]], [[Python]], [[Neural Networks]]

# ~={red}Notes=~

---
---

Date: 2026-04-01
Tags: [[Mathematics]], [[Machine Learning]], [[Python]], [[Neural Networks]], [[Deep Learning]], [[Theory]]

---
# Neural Networks — Foundations

“**Artificial**” neural networks are inspired by the organic brain, translated to the computer. It’s not a perfect comparison, but there are neurons, activations, and lots of interconnectivity, even if the underlying processes are quite different

![[Pasted image 20260401173725.png]]

## Definition

A ~={blue}neural network=~ is a computational model inspired by the structure of the biological brain. It consists of a collection of interconnected nodes (neurons) organized into layers, where each connection transmits a weighted signal. Signals flow from an ~={green}input layer=~ through one or more ~={green}hidden layers=~ to an ~={green}output layer=~, with each layer performing a nonlinear transformation on the data received from the previous layer.

> [!important]
>  What makes neural networks powerful is that they **automatically learn** optimal internal representations from raw data, without requiring manual feature engineering. Each successive layer builds higher-level abstractions from the representations discovered by the layer before it.

The network begins with edges connecting every possible pair of neurons between adjacent layers. During training, the weights on these connections are adjusted so that the model learns the most predictive relationships in the data.

![[Pasted image 20260401174004.png|center]]

---

## 1. Terminology & Notation

The following conventions are used consistently throughout these notes.

- $l$ — layer index, ranging from $0$ (input) to $L$ (output)
- $n^{[l]}$ — number of neurons (units) in layer $l$
- $j$ — neuron index within a layer
- $\vec{x} = \vec{a}^{[0]}$ — the input vector (layer 0)
- $\vec{a}^{[l]}$ — activation vector for layer $l$; its $j$-th element is $a_j^{[l]}$
- $W^{[l]}$ — weight matrix for layer $l$, shape $(n^{[l-1]}, n^{[l]})$
- $\vec{b}^{[l]}$ — bias vector for layer $l$, shape $(n^{[l]},)$
- $z_j^{[l]}$ — pre-activation (linear combination) at neuron $j$ in layer $l$
- $g(\cdot)$ — activation function
- $\hat{y}$ — model prediction (output of the final layer)
- $m$ — number of training examples
- $\alpha$ — learning rate

The forward data flow through the network can be summarized as:

$$\vec{x}^{[0]} \;\longrightarrow\; \vec{a}^{[1]} \;\longrightarrow\; \cdots \;\longrightarrow\; \vec{a}^{[l-1]} \;\longrightarrow\; a^{[L]}$$

---

## 2. The Model (Hypothesis)

### 2.1 Single Neuron

Each neuron in layer $l$ computes a weighted sum of its inputs, adds a bias, then applies a nonlinear activation function:

$$z_j^{[l]} = \vec{w}_j^{[l]} \cdot \vec{a}^{[l-1]} + b_j^{[l]}$$

$$a_j^{[l]} = g\!\left(z_j^{[l]}\right)$$

where $\vec{w}_j^{[l]}$ is the weight vector for neuron $j$ in layer $l$, and $\vec{a}^{[l-1]}$ is the activation output of the previous layer (equivalently, the input $\vec{x}$ when $l = 1$).

![[Pasted image 20260401174542.png]]

### 2.2 Layer Vector Form

Collecting all neurons in a layer into vector notation:

$$\vec{a}^{[l]} = g\!\left(W^{[l]\top} \vec{a}^{[l-1]} + \vec{b}^{[l]}\right)$$

### 2.3 Output Layer and Prediction

When the activation values reach the final layer $L$, the model produces a scalar (for binary tasks) or a vector (for multiclass tasks). For binary classification, a threshold is applied:

$$\hat{y} = \begin{cases} 1 & \text{if } a^{[L]} \geq 0.5 \\ 0 & \text{otherwise} \end{cases}$$

Since the output is a function of the original input, it is commonly written as $f(\vec{x})$. The entire model is also denoted $f_{\vec{w},\vec{b}}(\vec{x})$.

![[Pasted image 20260401174948.png]]

> ~={red}red X=~ is considered 1 and ~={blue}blue O=~ are 0

---

## 3. Neural Network Architecture

### 3.1 Layer Types

**Dense (Fully Connected) Layer** — Every neuron in the layer receives input from all neurons in the previous layer. This is the standard building block.

**Convolutional Layer** — Each neuron receives input from only a local region (receptive field) of the previous layer. Benefits include faster computation and reduced overfitting due to parameter sharing. Networks composed of multiple such layers are called ~={blue}Convolutional Neural Networks (CNNs)=~, and they excel at spatially structured data such as images and time-series.

![[Pasted image 20260401174857.png|center]]

### 3.2 Network Depth and Width

When a network has $s_{\text{in}}$ units in one layer and $s_{\text{out}}$ units in the next:

- $W$ has shape $(s_{\text{in}}, s_{\text{out}})$
- $b$ has shape $(s_{\text{out}},)$

A three-layer network for digit recognition (e.g., $400 \to 25 \to 15 \to 1$) has the following parameter count:

| Layer       | W shape      | b shape  | Parameters  |
| ----------- | ------------ | -------- | ----------- |
| Layer 1     | $(400, 25)$  | $(25,)$  | $10{,}025$  |
| Layer 2     | $(25, 15)$   | $(15,)$  | $390$       |
| Layer 3     | $(15, 1)$    | $(1,)$   | $16$        |
| **Total**   |              |          | **$10{,}431$** |

---

## 4. Activation Functions

Activation functions introduce nonlinearity into the network. Without them, a deep network collapses into a single linear transformation, no matter how many layers it has.

### 4.1 Common Activation Functions

| Name    | Formula                                            | Output Range          | Typical Use                  |
| ------- | -------------------------------------------------- | --------------------- | ---------------------------- |
| Linear  | $g(z) = z$                                         | $(-\infty, +\infty)$  | Regression output            |
| Sigmoid | $g(z) = \dfrac{1}{1+e^{-z}}$                       | $(0, 1)$              | Binary classification output |
| ReLU    | $g(z) = \max(0, z)$                                | $[0, +\infty)$        | Hidden layers (default)      |
| Softmax | $g(z_j) = \dfrac{e^{z_j}}{\sum_{k=1}^{N} e^{z_k}}$ | $(0, 1)$, sums to $1$ | Multiclass output            |

![[Pasted image 20260401175443.png]]

### 4.2 Choosing an Activation Function

**Output layer:**

- Binary classification $\Rightarrow$ ~={green}Sigmoid=~ (or linear + `from_logits`)
- Multiclass classification $\Rightarrow$ ~={green}Softmax=~ (or linear + `from_logits`)
- Regression $\Rightarrow$ ~={green}Linear=~
- Non-negative regression $\Rightarrow$ ~={green}ReLU=~

**Hidden layers:**

- ~={red}ReLU is the default and preferred choice=~ in practice.
- Sigmoid is rarely used in hidden layers due to the vanishing gradient problem: gradient descent slows dramatically on the flat regions of the sigmoid curve (near 0 and 1). ReLU has only one flat region ($z \leq 0$), making training faster.

> [!important] 
> If all hidden layers use a linear activation function, the entire network is mathematically equivalent to linear regression, regardless of depth. Similarly, linear hidden layers with a sigmoid output reduce to logistic regression. **Never use linear activations in hidden layers.**

### 4.3 Softmax Regression

[[Softmax Regression]] generalizes logistic regression to the multiclass setting. For $N$ classes:

$$z_j = \vec{w}_j \cdot \vec{x} + b_j \qquad j = 1, \ldots, N$$

$$a_j = \frac{e^{z_j}}{\sum_{k=1}^{N} e^{z_k}} = P(y = j \mid \vec{x})$$

The key property is that all outputs sum to one: $\sum_{j=1}^{N} a_j = 1$.

---

## 5. Multiclass Classification

### 5.1 Problem Setup

In binary classification, the model estimates $P(y = 1 \mid \vec{x})$. In multiclass classification with $N$ classes, the model simultaneously estimates:

$$P(y = 1 \mid \vec{x}), \quad P(y = 2 \mid \vec{x}), \quad \ldots, \quad P(y = N \mid \vec{x})$$

These $N$ probabilities form a probability distribution (they sum to 1) and are produced by a ~={blue}softmax output layer=~.

### 5.2 Decision Rule

The predicted class is the index of the largest output probability:

$$\hat{y} = \arg\max_{j} \; a_j = \arg\max_{j} \; P(y = j \mid \vec{x})$$

### 5.3 Comparison: Binary vs. Multiclass

| Aspect            | Binary Classification | Multiclass Classification           |
| ----------------- | --------------------- | ----------------------------------- |
| Output units      | 1                     | $N$                                 |
| Output activation | Sigmoid               | Softmax (or linear + `from_logits`) |
| Loss function     | `BinaryCrossentropy`  | `SparseCategoricalCrossentropy`     |
| Decision          | Threshold at 0.5      | `argmax` of outputs                 |

---

**See also:** [[Neural Networks — Training|Neural Networks - Training]] · [[Neural Networks — Implementation|Neural Networks - Implementation]]

---

# ~={red}References=~

- [Neural Networks - Course Notes PDF](Neural_Networks.pdf)
- [MIT Neural Networks Lecture Slides](mit_neural_network.pdf)
- [NumPy Documentation](https://numpy.org/doc/stable/)
- [TensorFlow / Keras Documentation](https://www.tensorflow.org/api_docs/python/tf/keras)
- [PyTorch Documentation](https://pytorch.org/docs/stable/)
- [MNIST Dataset](http://yann.lecun.com/exdb/mnist/)