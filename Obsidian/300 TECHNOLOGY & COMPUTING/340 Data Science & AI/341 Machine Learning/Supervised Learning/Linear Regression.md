Date: 2025-12-27
Tags:  [[Mathematics]], [[Machine Learning]], [[Python]], [[Supervised Learning]]

# ~={red} Notes=~
## Definition
Linear regression is a type of [supervised machine-learning algorithm](https://www.geeksforgeeks.org/machine-learning/supervised-machine-learning/) that learns from the labelled datasets and maps the data points with most optimized linear functions which can be used for prediction on new datasets. It assumes that there is a linear relationship between the input and output, meaning the output changes at a constant rate as the input changes. This relationship is represented by a straight line.

![[Pasted image 20251227184306.png|center]]

## 1. Terminology & Notation
To better understand linear regression we can take a closer look at the example of a model that predicts house prices. Let’s say you were given a dataset with size and prices. You can build a model based on linear regression — this model fits a line through the data.

If we look at the figure below, we can see the data points and the line that was fitted. Given that, we can see that for new house size 1250, the model will predict something like $250K.

![[Pasted image 20251227183940.png|center|500]]

This regression model predicts numbers and it is a form of supervised learning.

**Some key terminology to understand:**
- ~={purple}Training set=~: the data used to train the model
- ~={purple}Input variable=~: represents the input variable/feature and is usually denoted as $x$
- ~={purple}Target variable=~: represents the target variable and is usually denoted as $y$
- $m$ is the number of training examples
- $(x, y)$ is the a single training example
- $(x^{(i)}, y^{(i)})$ represents the $i^{(th)}$ training example

![[Pasted image 20251227184114.png|center|500]]


where $x^{(1)} = 2104$ and $y^{(1)}=400$. Therefore, $(x^{(1)}, y^{(1)}) = (2104, 400)$.

## 2. ~={blue}The Model (Hypothesis)=~

**When designing a linear regression model the following are the important components:**
- First, you have a training set which represents your features and target variables
- You feed that through a learning algorithm which can include a model (represented by a function $f$)
- $x$ data is fed through the model which outputs the prediction or estimated value $\hat y$
- $f$ can be represented as a linear function:  ~={red}$f(x) = wx + b$=~ or $\hat y = θ_0​+θ_1​x$
- $w$ and $b$ are called the parameters of the model
- When you are dealing with one single feature $x$ in linear regression it is referred to as univariate linear regression

![[Pasted image 20251227185000.png|center|600]]

### Cost Function Formula

![[Pasted image 20251227192701.png|center|]]

Recall that for linear regression the model function is defined as follows:
$$
f_{w, b}(x)=w x+b
$$
where $w$ and $b$ are the parameters of the model.
To demonstrate how the parameters determine the function $f$ we can take a look at some plots in a chart.

**~={pink}Example=~**: 
![[Pasted image 20251227190443.png|center|600]]

The function f is important because it gives us the prediction $\hat y$. We then take that prediction and compare with the original target to compute what’s referred to as the ~={orange}**cost function**=~. The purpose of the **cost function** is to allow the model to optimize for values of w and b that reduces the errors of the model. In other words, find w and b where $\hat y^{(i)}$ is close to $y^{(i)}$ for all $(x^{(i)}, y^{(i)})$.

A widely used cost function in linear regression is known as **squared error cost function** and is defined as follows:
$$
J(w, b)=\frac{1}{2 m} \sum_{i=1}^{m}\left(f_{w, b}\left(x^{(i)}\right)-y^{(i)}\right)^{2}
$$
![[Pasted image 20251227185940.png|center|600]]

**The code below calculates cost by looping over each example. In each loop:**
- `f_wb`, a prediction is calculated
- the difference between the target and the prediction is calculated and squared.
- this is added to the total cost.

```python
def compute_cost(x, y, w, b): 
    """
    Computes the cost function for linear regression.
    
    Args:
      x (ndarray (m,)): Data, m examples 
      y (ndarray (m,)): target values
      w,b (scalar)    : model parameters  
    
    Returns
        total_cost (float): The cost of using w,b as the parameters for linear regression
               to fit the data points in x and y
    """
    # number of training examples
    m = x.shape[0] 
    
    cost_sum = 0 
    for i in range(m): 
        f_wb = w * x[i] + b   
        cost = (f_wb - y[i]) ** 2  
        cost_sum = cost_sum + cost  
    total_cost = (1 / (2 * m)) * cost_sum  

    return total_cost
```
#### ~={green}Cost Function Intuition=~

Recall that to measure how well the choice of the parameters $w$ and $b$ fits the training data, you define the cost function $J$. $J$ measures the difference between the model’s predictions and the actual true values for $y$. So the overall goal is to minimize $J$ as a function of $w$ and $b$. This is defined as:
$$
\underset{w, b}{\operatorname{min}} J(w, b)
$$
To get a better intuition of the cost function, let’s take a look at an example and plot it.
To do this, we can simplify our prediction function $f$ to be:
$$
f_{w}(x) = wx
$$
We have set $b=0$. So this gives us the following cost function:
$$
J(w)=\frac{1}{2 m} \sum_{i=1}^{m}\left(f_{w}\left(x^{(i)}\right)-y^{(i)}\right)^{2}
$$
Now we want to minimize the following:
$$
\underset{w}{\operatorname{min}} J(w)
$$

As an example, let’s plot what a minimal prediction function looks like when we plot examples on a chart and $w=1$:
![[Pasted image 20251227192124.png|center|500]]


With substitution we end up with:
$$
J(w) =\frac{1}{2 m} \sum_{i=1}^{m}\left(w x^{(i)}-y^{(i)}\right)^{2}
$$
If you look at the example above, we plotted the following three data points representing value pairs of $x$ and $y$:
`[1, 1], [2, 2], [3, 3]`

If we replace the values in the cost function $J$ we end up with:
$$
J(w) =\frac{1}{2 m}\left(0^{2}+0^{2}+0^{2}\right)
$$

Given those calculations we can now plot the function $J$ with respect to the $w$ parameter. Let’s try to use many different values of $w$ given the same data points as before. The plot will look something like what’s shown below:
![[Pasted image 20251227192353.png|center|500]]

**Use the code below to plot the function:**
```python
import torch
import numpy as np

def plot_cost_function(w, m, x, y):
    j_w = [ (1/(2*m)) * torch.sum(((w * x) - y)**2)  for w in w]
    plt.plot(w, j_w, '-', linewidth=6)

    plt.xlabel('w')
    plt.ylabel('J(w)')
    plt.show()
    return

w = torch.tensor([x for x in np.linspace(-0.5, 2.5, 25)], dtype=float) 
x = torch.tensor([1.0, 2.0, 3.0], dtype=float)
y = torch.tensor([1.0, 2.0, 3.0], dtype=float) 
m = 3.0

plot_cost_function(w, m, x, y)
```

One interesting observation you will note here is that when $w=1$ we saw a straight line through the data points in our previous chart, which means that a perfect line was fitted through the data points. In fact, when $w=1$ it produces $J(w) = 0$. So in this problem we want to choose $w$ that minimizes $J(w)$, which is this example turns out to be $w=1$.

**~={pink}So far, we have the following definitions:=~**

***Model:***

$$
f_{w, b}(x)=w x+b
$$

***Parameters:***

$$
w, b
$$

***Cost Function:***

$$
J(w, b)=\frac{1}{2 m} \sum_{i=1}^{m}\left(f_{w, b}\left(x^{(i)}\right)-y^{(i)}\right)^{2}
$$

***Learning objective:***

$$
\underset{w, b}{\operatorname{minimize}} J(w, b)
$$

You can also use this general form to visualize the cost function. However, it does require a bit more effort and different tools. The course has a great [video explainer](https://www.coursera.org/learn/machine-learning/lecture/Ov8Zt/visualization-examples) and visual examples of how the cost function looks. It uses counter plots which are a popular way to visualize the cost function.

## ~={blue}2. Train the model with Gradient Descent=~

![[Pasted image 20251227202038.png|center]]
### **Gradient Descent Overview**

Gradient descent is one of the most important and widely used algorithms to train machine learning and deep learning models. 

The gradient descent algorithm is a very simple concept. Let’s say we have some function $J(w, b)$ we want to minimize. We start with $w, b$, which you can initialize to zero. You then keep changing $w, b$ to reduce $J(w, b)$ until the algorithm settles as or gets near a minimum. 

In the gradient descent algorithm, you can adjust the weight by using the following update formula:

$$
w=w-\alpha \frac{\partial}{\partial w} J(w, b)
$$

where $\alpha$ is the learning rate which controls how big of a step you take in the gradient descent procedure. $\frac{\partial}{\partial w} J(w, b)$ defines in which direction you want to take the step. You do the same assignment procedure on the $b$ parameter:

$$
b=b-\alpha \frac{\partial}{\partial b} J(w, b)
$$

So the algorithm updates those parameters until convergence where $w$ and $b$ don’t change much.

### **Gradient Descent Intuition**

To get a better intuition about what the updates above do and how it helps the algorithm converge, we can take a look at the simplified version of the parameter update on $w$.

Given:

$$
w=w-\alpha \frac{\partial}{\partial w} J(w)
$$

If $\frac{\partial}{\partial w} J(w) > 0$, i.e., a positive number, then $w$ gets smaller as illustrated below: 

$$
w=w-\alpha \cdot \text { (positive number) }
$$

![[Pasted image 20251227211737.png|center|500]]

If $\frac{\partial}{\partial w} J(w) < 0$, i.e., a negative number then $w$ increases as illustrated below:
$$
w=w-\alpha \cdot(\text { negative number })
$$
![[Pasted image 20251227211821.png|center|500]]


#### Choosing the right learning rate $\alpha$

Another important consideration when using the gradient descent algorithm is to choose the right value for the learning rate. A poor choice of $\alpha$ might make the algorithm inefficient. If $\alpha$ is too small, then the steps taken by the algorithm will also be small which makes the algorithm slow. If $\alpha$ is too large, the algorithm could be very close to the minimum and miss it entirely because of a big step taken. With too large learning rates the algorithms runs the risk of overshooting and never reach minimum.

The illustration below shows that if $\alpha$ is too small, gradient descent may be too slow.

![[Pasted image 20251227211919.png|center|500]]

On the other hand, if $\alpha$ is too large, gradient descent may overshoot, never reach minimum or fail to converge or even diverge:

![[Pasted image 20251227211939.png|center|500]]

Note that if you are already at a local minimum the parameters won’t change.

When $\frac{\partial}{\partial w} J(w) = 0$, $w$ remains unchanged.

![[Pasted image 20251227212002.png|center|500]]

As we approach a local minimum, the derivative value gets closer to zero. With the gradient descent algorithm, update steps become smaller until you reach that local minimum even with a fixed learning rate.


**~={green}In Summary:=~** 
Gradient descent iteratively updates the parameters $w$ and $b$ to minimize the cost function.
**The Update Rule**:
Repeat until convergence

$$
w = w - \alpha \frac{\partial J}{\partial w}
$$
$$
b = b - \alpha \frac{\partial J}{\partial b}
$$

Where:
* $\alpha$ is the **learning rate**.
* $\frac{\partial J}{\partial w}$ and $\frac{\partial J}{\partial b}$ are the **gradients** (partial derivatives).

### Gradient Definition
The gradient for the weight parameter $w$ is defined as:

$$
\frac{\partial J}{\partial w} = \frac{1}{m} \sum_{i=0}^{m-1} (f_{w,b}(x^{(i)}) - y^{(i)})x^{(i)} 
$$
$$
\frac{\partial J}{\partial b} = \frac{1}{m} \sum_{i=0}^{m-1} (f_{w,b}(x^{(i)}) - y^{(i)})
$$

> [!important] Simultaneous Update
> **Simultaneously** means that you must calculate the partial derivatives for **all** parameters ($w$ and $b$) using the current values *before* updating any of them.
> 
> **Correct:**
> 1. Calculate $tmp\_w = \frac{\partial J}{\partial w}$
> 2. Calculate $tmp\_b = \frac{\partial J}{\partial b}$
> 3. $w = w - \alpha \cdot tmp\_w$
> 4. $b = b - \alpha \cdot tmp\_b$
>
> **Incorrect:** Updating $w$ and then using the *new* $w$ to calculate the update for $b$.


## Implementation and Python

**You will need three functions:**
- `compute_gradient` implementing equation (4) and (5) above
- `compute_cost` implementing equation (2) above (code from previous lab)
- `gradient_descent`, utilizing compute_gradient and compute_cost

**Conventions:**
- The naming of python variables containing partial derivatives follows this pattern,∂𝐽(𝑤,𝑏)∂𝑏 will be `dj_db`.
- w.r.t is With Respect To, as in partial derivative of 𝐽(𝑤𝑏) With Respect To 𝑏.

### Tools
In this lab, we will make use of:
- [[Numpy Library Cheat sheet|NumPy]], a popular library for scientific computing
- Matplotlib, a popular library for plotting data
```python
import numpy as np
import matplotlib.pyplot as plt
```

### Data
a house with 1000 square feet sold for $300,000 and a house with 2000 square feet sold for $500,000.

| Size (1000 sqft) | Price (1000s of dollars) |
| ---------------- | ------------------------ |
| 1                | 300                      |
| 2                | 500                      |
```python
x_train = np.array([1.0, 2.0])          
y_train = np.array([300.0, 500.0])  
```

### `compute_cost`

To calculate the error and see how close to zero the cost function $J$ is while searching for $w$ and $b$

```python
def compute_cost(x, y, w, b): 
    m = x.shape[0] 
    cost_sum = 0 
    for i in range(m): 
        f_wb = w * x[i] + b   
        cost = (f_wb - y[i]) ** 2  
        cost_sum = cost_sum + cost  
    total_cost = (1 / (2 * m)) * cost_sum  
    return total_cost

```

**Vectorizing the `compute_cost` function:**

- Instead of the loop, you can write the cost function in one line using NumPy. This is a great snippet to add to your note as a "Level Up":

```python
def compute_cost_vectorized(x, y, w, b):
    m = len(x)
    f_wb = np.dot(x, w) + b  # Vectorized prediction
    cost = np.sum((f_wb - y)**2) / (2 * m)
    return cost
```

### `compute_gradient`
Returns $\frac{\partial J}{\partial w}$ and $\frac{\partial J}{\partial b}$.

```python
def compute_gradient(x, y, w, b): 

    # Number of training examples
    m = x.shape[0]    
    dj_dw = 0
    dj_db = 0
    
    for i in range(m):  
        f_wb = w * x[i] + b 
        dj_dw_i = (f_wb - y[i]) * x[i] 
        dj_db_i = f_wb - y[i] 
        dj_db += dj_db_i
        dj_dw += dj_dw_i 
    dj_dw = dj_dw / m 
    dj_db = dj_db / m 
    return dj_dw, dj_db
```

![[Pasted image 20251227213206.png|center]]

### Gradient Descent
 you will utilize this function to find optimal values of 𝑤 and 𝑏 on the training data.
```python
def gradient_descent(x, y, w_in, b_in, alpha, num_iters, gradient_function): 
    w = w_in
    b = b_in
    for i in range(num_iters):
        dj_dw, dj_db = gradient_function(x, y, w, b)
        w = w - alpha * dj_dw
        b = b - alpha * dj_db
    return w, b

```

![[Pasted image 20251227215323.png|center|500]]

### Initialize parameters

```python
initial_w = 0
initial_b = 0
iterations = 10000
alpha = 0.1 # Learning rate
```
### Running and Plotting the Gradient Descent

We will be running the algorithm and plotting the linear regression function with prediction to a random value


```python
# Run gradient descent
w_final, b_final = gradient_descent(x_train, y_train, initial_w, initial_b, alpha, iterations, compute_gradient)

print(f"w found by gradient descent: {w_final:.2f}")
print(f"b found by gradient descent: {b_final:.2f}")
print(f"cost function or error of this model: {compute_cost(x_train, y_train, w_final, b_final)}")

x_new = 1.5
y_prediction = w_final * x_new + b_final

print(f"Prediction for x={x_new}: ${y_prediction:.2f} (in thousands)")

# --- PLOTTING ---
plt.figure() # Create a new figure
plt.scatter(x_train, y_train, marker='x', c='r', label='Actual Values')
plt.plot(x_train, w_final * x_train + b_final, c='b', label='Prediction')
plt.title("Housing Prices")
plt.ylabel('Price (in 1000s of dollars)')
plt.xlabel('Size (1000 sqft)')
plt.legend()
plt.show()

```


## Python code using scikit-learn

Much easier with already built in functions for fitting the model and making predictions without the need to create any compute functions

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# 1. DATA PREPARATION
# Sklearn expects 'X' to be a 2D array (rows, columns). 
# .reshape(-1, 1) converts [1.0, 2.0] into [[1.0], [2.0]]
x_train = np.array([1.0, 2.0]).reshape(-1, 1) 
y_train = np.array([300.0, 500.0])

# 2. MODEL TRAINING
# This single line replaces the entire 'compute_cost' and 'gradient_descent' functions
model = LinearRegression()
model.fit(x_train, y_train)

# 3. RESULTS
# Extract the learned parameters (w and b)
w = model.coef_[0]      # Slope
b = model.intercept_    # Y-intercept

print(f"w (Coefficient): {w}")
print(f"b (Intercept): {b}")

# 4. PREDICTION & PLOTTING
predictions = model.predict(x_train)

# 4. 1. Define the new value
x_new = 1.5

# 2. Reshape it to a 2D array: [[1.5]]
# sklearn expects shape (n_samples, n_features)
x_new_reshaped = np.array([[x_new]]) 

# 3. Make the prediction
Y_prediction = model.predict(x_new_reshaped)

print(f"Prediction for x = {x_new}: {Y_prediction[0]}$")

plt.scatter(x_train, y_train, color='red', label='Actual')
plt.plot(x_train, predictions, color='blue', label='Prediction')
plt.xlabel('Size (1000 sqft)')
plt.ylabel('Price (1000s)')
plt.legend()
plt.show()

```

# ~={red}References=~
[Dair notes](https://dair-ai.notion.site/Course-1-Supervised-Machine-Learning-3a200719f58145dc8a701a2545bdf9f4#52d705ece1c84140b87fe0b306e1c2a0)
[Geekforgeeks](https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/)
[Coursera](https://www.coursera.org/learn/machine-learning/home/module/1)
