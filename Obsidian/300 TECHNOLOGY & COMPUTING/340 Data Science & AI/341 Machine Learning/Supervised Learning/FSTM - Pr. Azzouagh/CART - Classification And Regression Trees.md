Date: 2026-01-12
Tags:  [[Mathematics]], [[Data Science]], [[Machine Learning]], [[Decision Tree]],[[Python]], [[Supervised Learning]], [[R]]
**Source Material:** Cours Arbre CART 2025 AZOUAGH
# ~={red} Notes=~

## Introduction: The Logic of CART

**CART (Classification And Regression Trees)** is a method that builds a model by asking a sequence of "Yes/No" questions:

1. **Binary:** Every question splits the data into exactly two groups (Left vs. Right).
    
2. **Recursive:** The process repeats for each new group created, splitting them further and further until a stopping rule is met.
    
3. **Goal:** To create final groups (leaves) that are as similar (homogeneous) as possible.
    

---

## Chapter 1: Regression Trees (Predicting Numbers)

In regression, we are predicting a **continuous number** (like Salary, Temperature, Sales).

### 1.1 How a Node Split Works

Imagine a "parent" node containing a mixed bag of values. We want to draw a line (a "split") that separates high values from low values to reduce the "chaos" (variance) in the resulting groups.

The Algorithm's Step-by-Step Search:

For every variable $X_j$ and every possible threshold $c$:

1. **Split the data:**
    
    - Group 1 (Left): All observations where $X_j < c$.
        
    - Group 2 (Right): All observations where $X_j \ge c$.
        
2. Calculate the Error (SSE):
    
    The error is measured by the Sum of Squared Errors (SSE). It calculates how far each actual value $y_i$ is from the average of its group $\bar{y}$.
    
    $$E(j, c) = \underbrace{\sum_{Left} (y_i - \bar{y}_{Left})^2}_{\text{Error in Left Child}} + \underbrace{\sum_{Right} (y_i - \bar{y}_{Right})^2}_{\text{Error in Right Child}}$$
    
3. Select the Best Split:
    
    The algorithm picks the specific pair $(j^*, c^*)$ that results in the lowest possible total error $E(j, c)$.
    

### 1.2 Measuring Improvement

We don't just want _any_ split; we want a split that significantly improves our prediction compared to the parent node.

**Gain of Impurity (Equation Explained):**

![[Pasted image 20260112231621.png]]

The gain $\Delta(j,s)$ measures how much variance we removed by splitting.

$$\Delta(j,s) = \text{Variance}(Parent) - [\text{Weighted Variance}(Left) + \text{Weighted Variance}(Right)]$$

- If the Gain is high, the split did a great job separating different values.
    
- If the Gain is near 0, the split was useless.
    

**Improvement Index:**
Indice d’amélioration (équivalent au gain d’impureté) 
$$I = 1 - \frac{E(j_*, c_*)}{E_{parent}}$$

- This tells us the percentage of error removed by the split.
    

### 1.3 Stopping Rules (When to stop growing?)

If we don't stop, we will end up with a tree where every single data point is its own leaf (overfitting). We use "Pre-Pruning" rules:

- **`maxdepth`:** The maximum number of levels (floors) the tree can have.
    
- **`minsplit`:** You need at least this many observations in a node to even _consider_ splitting it (e.g., 20).
    
- **`minbucket`:** Every final leaf must contain at least this many observations (e.g., 7). This ensures statistical reliability.
    
- **`cp` (Complexity Parameter):** The "Minimum Improvement Standard." If a split doesn't improve the model fit by at least `cp` amount, the tree stops growing there.
    

---

## Chapter 2: Classification Trees (Predicting Categories)

In classification, we are predicting a **category** (like Species, Yes/No, Spam/Ham). The predicted value for a leaf is the **most frequent class** (Mode) in that leaf.

### 2.1 Measuring "Purity" with Gini

Since we can't calculate an "average" for categories (you can't average "Cat" and "Dog"), we use **Impurity** measures. The most common is the **Gini Index**.

**The Gini Index ($G$) Intuition:**

![[Pasted image 20260113220332.png|center]]

- $G$ represents the probability that a randomly chosen element from the set would be incorrectly labeled if it were randomly labeled according to the distribution of labels in the subset.
    
- **$G = 0$ (Pure):** The node contains only one class (e.g., 100% "Yes").
    
- **$G \approx 0.5$ (Impure):** The node is a 50/50 mix of two classes (maximum confusion).
    

Formula:

$$G = 1 - \sum_{i=1}^{M} f_i^2$$

Where $f_i$ is the frequency (percentage) of class $i$ in the node.

#### Indice d’amélioration:

![[Pasted image 20260113224810.png|center]]

### 2.2 The Pruning Process (Post-Elagage)

Instead of stopping early, we often grow a massive tree ($T_{max}$) and then cut it back. This is safer because a "bad" split early on might lead to a "great" split later.

**Parametre de complexite $cp(t)$- Cost-Complexity Criterion ($C_\alpha$):**

![[Pasted image 20260113225228.png|center]]

We want a tree that has low error but also few leaves (low complexity). We minimize this score:

$$C_\alpha(T) = R(T) + \alpha |T|$$

- **$R(T)$:** The misclassification error (how often the tree is wrong).
    
- **$|T|$:** The number of leaves (how complex the tree is).
    
- **$\alpha$ (Alpha):** The "Penalty Price" for complexity.
    
    - If $\alpha = 0$, we get the massive, complex tree.
        
    - As $\alpha$ increases, we are "charged" more for every leaf, so we prune branches that don't reduce error enough to justify their cost.
        
![[Pasted image 20260113225505.png|center|600]]

**The Workflow:**

1. Grow the full tree $T_{max}$.
    
2. Gradually increase $\alpha$. This creates a sequence of nested trees (from big to small).
    
3. Use **Cross-Validation** to pick the best tree from this sequence (the one with the lowest cross-validation error, `xerror`).
    
![[Pasted image 20260113225638.png|center]]

---

## Diagram: The Pruning Logic

Extrait de code

```mermaid
graph TD
    A[Start: Maximal Tree Tmax] --> B[Calculate Misclassification Cost R(t)]
    B --> C[Calculate Complexity Penalty alpha*|T|]
    C --> D{Is the reduction in Error < Penalty?}
    D -- Yes --> E[Prune Branch (Cut)]
    D -- No --> F[Keep Branch]
    E --> G[Smaller Sub-Tree]
    G --> B
```

---

## Technical Implementation Notes

### R Code (Annotated)

```r
# Load libraries
library(rpart)       # The core CART algorithm
library(rpart.plot)  # For visualizing the tree

# 1. LOAD DATA
# Assume 'data' is your dataframe
# Y is the target, X1 and X2 are predictors
# data <- read.csv("your_file.csv", header=TRUE, sep=";")

# 2. GROW THE TREE
# formula: Target ~ Predictors
# method: "anova" for regression, "class" for classification (usually auto-detected)
arbre <- rpart(Y ~ X1 + X2, data = data) 

# 3. VISUALIZE
# This draws the tree structure
rpart.plot(arbre)

# 4. OPTIMIZE (PRUNING)
# 'printcp' displays the table of splits and their 'xerror' (cross-validation error)
printcp(arbre) 

# 'plotcp' graphs the error vs. complexity parameter (cp)
# Look for the dip in the line (lowest error)
plotcp(arbre)

# 5. PRUNE
# Select the cp value that minimizes xerror (e.g., let's say 0.03)
optimal_cp <- 0.03
arbre_final <- prune(arbre, cp = optimal_cp)

# 6. PREDICT
# Predict new values using the pruned tree
predictions <- predict(arbre_final, newdata = data.frame(X1=3, X2=1))
```

### Python Code (Annotated)

```python
import pandas as pd
from sklearn.tree import DecisionTreeRegressor, DecisionTreeClassifier, plot_tree
from sklearn.model_selection import train_test_split

# 1. PREPARE DATA
# X = features, y = target
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# 2. INITIALIZE MODEL (REGRESSION EXAMPLE)
# criterion='squared_error' matches the SSE minimization in CART
# min_samples_split=20 matches the 'minsplit' concept
regressor = DecisionTreeRegressor(criterion='squared_error', 
                                  min_samples_split=20, 
                                  random_state=42)

# 3. TRAIN
regressor.fit(X_train, y_train)

# 4. POST-PRUNING (Cost Complexity)
# This calculates the path of effective alphas
path = regressor.cost_complexity_pruning_path(X_train, y_train)
ccp_alphas = path.ccp_alphas

# Train a model for every alpha value to find the best one
clfs = []
for ccp_alpha in ccp_alphas:
    clf = DecisionTreeRegressor(random_state=42, ccp_alpha=ccp_alpha)
    clf.fit(X_train, y_train)
    clfs.append(clf)

# (In practice, you would cross-validate these 'clfs' to pick the best alpha)

# 5. VISUALIZE
import matplotlib.pyplot as plt
plt.figure(figsize=(15,10))
plot_tree(regressor, filled=True, feature_names=X.columns)
plt.show()
```

# ~={red}References=~
[[cours_Arbre_CART_2025_AZOUAGH-29-73.pdf]]