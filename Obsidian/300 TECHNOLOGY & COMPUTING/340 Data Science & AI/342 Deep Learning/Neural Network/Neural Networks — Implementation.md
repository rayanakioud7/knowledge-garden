---
jupyter:
  jupytext:
    cell_metadata_filter: -all
    formats: ipynb,md
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.19.4
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
---


> **Prerequisites:** [[Neural Networks - Foundations]] · [[Neural Networks — Training]]

---

Date: 2026-04-01
Tags: [[Deep Learning]], [[Neural Networks]], [[Python]], [[PyTorch]], [[Tensorflow]]

---

## 1. Manual Forward Propagation (NumPy)

### 1.1 Single-Example Dense Layer

```python
import numpy as np

def sigmoid(z):
    """Sigmoid activation function."""
    return 1 / (1 + np.exp(-z))

def dense_layer(a_in, W, b, activation):
    """
    Compute the output of a single dense layer.

    Args:
        a_in  (ndarray, shape (n,))   : Input activation vector
        W     (ndarray, shape (n, j)) : Weight matrix; j = number of units
        b     (ndarray, shape (j,))   : Bias vector
        activation                    : Activation function g(z)

    Returns:
        a_out (ndarray, shape (j,))   : Output activation vector
    """
    j = W.shape[1]
    a_out = np.zeros(j)

    for unit in range(j):
        w = W[:, unit]
        z = np.dot(w, a_in) + b[unit]
        a_out[unit] = activation(z)

    return a_out
    
    
```

### 1.2 Vectorized Dense Layer (All Examples)

```Python

def dense_layer_vectorized(A_in, W, b, activation):
    """
    Vectorized dense layer: processes all examples in one operation.

    Args:
        A_in  (ndarray, shape (m, n)) : Input matrix; m examples, n features
        W     (ndarray, shape (n, j)) : Weight matrix
        b     (ndarray, shape (1, j)) : Bias vector (broadcasts over m)
        activation                    : Activation function

    Returns:
        A_out (ndarray, shape (m, j)) : Output activation matrix
    """
    Z = np.matmul(A_in, W) + b     # (m, n) x (n, j) + (1, j) -> (m, j)
    A_out = activation(Z)
    return A_out
```


### 1.3 Multi-Layer Forward Pass

```python

def forward_propagation(X, W1, b1, W2, b2, W3, b3):
    """
    Full forward pass through a three-layer network.

    Args:
        X            : Input data matrix, shape (m, n_input)
        W1, b1       : Layer 1 parameters
        W2, b2       : Layer 2 parameters
        W3, b3       : Layer 3 parameters

    Returns:
        A3           : Output activations, shape (m, n_output)
    """
    A1 = dense_layer_vectorized(X,  W1, b1, sigmoid)
    A2 = dense_layer_vectorized(A1, W2, b2, sigmoid)
    A3 = dense_layer_vectorized(A2, W3, b3, sigmoid)
    return A3

```

### 1.4 Softmax

```python
def softmax(z):
    """
    Softmax function: converts a vector of logits to a probability distribution.

    Args:
        z (ndarray, shape (N,)) : Input logits

    Returns:
        a (ndarray, shape (N,)) : Probability distribution summing to 1
    """
    ez = np.exp(z)
    return ez / np.sum(ez)
```

## 2. TensorFlow / Keras Implementation
### 2.1 Binary Classification

```python

import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Build
model = Sequential(
    [
        tf.keras.Input(shape=(400,)),           # 20×20 images unrolled
        Dense(25, activation='sigmoid'),
        Dense(15, activation='sigmoid'),
        Dense(1,  activation='sigmoid'),        # P(y=1 | x)
    ],
    name="binary_classifier"
)

model.summary()

# Compile
model.compile(
    loss=tf.keras.losses.BinaryCrossentropy(),
    optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3),
)

# Train
model.fit(X_train, y_train, epochs=20)

# Inference
prediction = model.predict(X_test[0].reshape(1, 400))
yhat = 1 if prediction >= 0.5 else 0
```

### 2.2 Multiclass Classification (Numerically Stable)

>[!important] 
>Use activation='linear' in the final layer and from_logits=True in the loss. This delays the softmax to the loss function, avoiding numerical roundoff errors.


```python

import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Build
model = Sequential(
    [
        tf.keras.Input(shape=(400,)),
        Dense(25, activation='relu',    name='L1'),
        Dense(15, activation='relu',    name='L2'),
        Dense(10, activation='linear',  name='L3'),   # logits
    ],
    name="multiclass_classifier"
)

model.summary()

# Compile
model.compile(
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3),
)

# Train
history = model.fit(X_train, y_train, epochs=40)

# Inference
logits = model.predict(X_test[0].reshape(1, 400))
probabilities = tf.nn.softmax(logits)
predicted_digit = np.argmax(probabilities)

```

### 2.3 Inspecting Layer Weights (TF)

```python

layer1, layer2, layer3 = model.layers

W1, b1 = layer1.get_weights()
W2, b2 = layer2.get_weights()
W3, b3 = layer3.get_weights()

print(f"W1 shape = {W1.shape}, b1 shape = {b1.shape}")
print(f"W2 shape = {W2.shape}, b2 shape = {b2.shape}")
print(f"W3 shape = {W3.shape}, b3 shape = {b3.shape}")
```

## 3. PyTorch Implementation
### 3.1 Binary Classification

```python

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset

# ---------- Data preparation ----------
# Assume X_train, y_train are NumPy arrays
X_train_t = torch.tensor(X_train, dtype=torch.float32)
y_train_t = torch.tensor(y_train, dtype=torch.float32).view(-1, 1)

train_ds = TensorDataset(X_train_t, y_train_t)
train_dl = DataLoader(train_ds, batch_size=32, shuffle=True)

# ---------- Model ----------
class BinaryClassifier(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(400, 25),      # hidden layer 1
            nn.Sigmoid(),
            nn.Linear(25, 15),       # hidden layer 2
            nn.Sigmoid(),
            nn.Linear(15, 1),        # output: logit (no sigmoid here)
        )

    def forward(self, x):
        return self.net(x)

model = BinaryClassifier()
print(model)

# ---------- Loss & Optimizer ----------
# BCEWithLogitsLoss = sigmoid + BCE combined (numerically stable)
criterion = nn.BCEWithLogitsLoss()
optimizer = optim.Adam(model.parameters(), lr=1e-3)

# ---------- Training loop ----------
epochs = 20
for epoch in range(epochs):
    epoch_loss = 0.0
    for X_batch, y_batch in train_dl:
        logits = model(X_batch)            # forward
        loss = criterion(logits, y_batch)  # loss
        optimizer.zero_grad()              # reset gradients
        loss.backward()                    # backprop
        optimizer.step()                   # update weights
        epoch_loss += loss.item() * X_batch.size(0)

    epoch_loss /= len(train_ds)
    if (epoch + 1) % 5 == 0:
        print(f"Epoch {epoch+1}/{epochs}  Loss: {epoch_loss:.4f}")

# ---------- Inference ----------
model.eval()
with torch.no_grad():
    sample = torch.tensor(X_test[0], dtype=torch.float32).unsqueeze(0)
    prob = torch.sigmoid(model(sample))    # apply sigmoid for probability
    yhat = (prob >= 0.5).int().item()
    print(f"Prediction: {yhat}  (probability: {prob.item():.4f})")

```


## 3.2 Multiclass Classification (Numerically Stable)

>[!important] 
>PyTorch's nn.CrossEntropyLoss() expects raw logits (no softmax) and integer class labels. It internally applies
