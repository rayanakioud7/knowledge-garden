Date: 2026-01-11
Tags:  [[Mathematics]], [[Data Science]], [[Machine Learning]], [[Python]], [[Supervised Learning]], [[R]]

# ~={red} Notes=~

**Source:** Course Pr. N. Azouagh (2025-2026)

---

## 1. Core Concept
**KNN** is a **Supervised Learning** algorithm used for both Classification and Regression.
* **Lazy Learner:** It does not build a model during the training phase. It simply stores the data.
* **Instance-Based:** Predictions are made by comparing new instances to stored instances.
* **Hypothesis:** Similar inputs have similar outputs ("Tell me who your neighbors are, I'll tell you who you are").

---

## 2. The Algorithm (Step-by-Step)

1.  **Store Data:** Load the training set $(X, Y)$.
2.  **Input:** Receive a new query point $x_q$.
3.  **Distance:** Calculate the distance between $x_q$ and *every* point in the training set.
4.  **Sort:** Order the distances from smallest to largest.
5.  **Select K:** Pick the top $K$ nearest neighbors.
6.  **Vote (Classification):** Majority class wins.
    * *Tie-breaking:* Choose $K$ to be an odd number or weight by distance.
7.  **Average (Regression):** Calculate the mean of the $K$ neighbors' target values.

---

## 3. Distances & Data Types
*The choice of distance function depends heavily on the data type.*

![[Pasted image 20260115122041.png|center|500]]
### ~={blue}A. Continuous Variables (Quantitative)=~

#### ~={cyan}1. Euclidean Distance (The Standard)=~

Used in the PDF example. Best for low-dimensional, continuous space.
$$d(x, y) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$$

#### ~={cyan}2. Manhattan Distance (L1 Norm)=~

Better when dimensions are not comparable (e.g., Age vs. Salary) or high dimensionality.
$$d(x, y) = \sum_{i=1}^{n} |x_i - y_i|$$

#### ~={cyan}3. Minkowski Distance=~
Generalization of both.
* $p=1 \rightarrow$ Manhattan
* $p=2 \rightarrow$ Euclidean
$$d(x, y) = (\sum_{i=1}^{n} |x_i - y_i|^p)^{1/p}$$

### ~={blue}B. Categorical Variables (Qualitative)=~

#### ~={cyan}1. Hamming Distance=~
Used for binary vectors or strings.
![[Pasted image 20260115122322.png|center|500]]
* **Logic:** Count the number of positions where symbols are different.
* **Example:**
    * User A: [1, 0, 1, 1]
    * User B: [1, 1, 0, 1]
    * Difference at index 1 and 2. Distance = 2.
	
	**Calcul :**
	
	1. Pos 1: 1 vs 1 (Identique)
	    
	2. Pos 2: 0 vs 0 (Identique)
	    
	3. Pos 3: **1 vs 0 (Différent) $\rightarrow$ +1**
	    
	4. Pos 4: 1 vs 1 (Identique)
	    
	5. Pos 5: **1 vs 0 (Différent) $\rightarrow$ +1**
$$D_{Hamming} = 1 + 1 = 2$$

#### ~={cyan}2. Simple Matching Coefficient (Overlap)=~
$$d(x, y) = \text{number of non-matching attributes}$$

### ~={blue}C. Mixed Data (Gower Distance)=~
Used when you have Age (Numerical) AND Marital Status (Categorical).
* Computes a similarity coefficient $s_{ijk}$ for each variable $k$ and averages them.
Usage : Quand on a à la fois du numérique (Age) et du qualitatif (Sexe, Couleur).

Formule simplifiée : C'est la moyenne des distances normalisées de chaque variable.

$$D_{Gower} = \frac{1}{p} \sum_{k=1}^{p} d_k$$

- Pour qualitatif : $d_k = 0$ si égal, $1$ si différent.
    
- Pour quantitatif : $d_k = \frac{|x_A - x_B|}{\text{Plage de variation (Max - Min)}}$

~={green}Exemple :=~

On veut comparer deux clients.

- **Client A :** {Âge: **25**, Statut: **Marié**}
    
- **Client B :** {Âge: **35**, Statut: **Célibataire**}
    
- _Info contexte :_ Dans toute la base de données, l'âge varie de 20 à 70 ans (donc Plage = $70 - 20 = 50$).
    

	**Calcul :**
	
	1. **Variable 1 (Âge - Quantitatif) :**
	    
	    - Écart absolu : $|25 - 35| = 10$
	        
	    - Normalisation : $10 / 50 = \mathbf{0.2}$
	        
	2. **Variable 2 (Statut - Qualitatif) :**
	    
	    - "Marié" $\neq$ "Célibataire" $\rightarrow$ **1** (Dissimilarité totale)
	        
	3. Distance de Gower (Moyenne) :
	    $$D = \frac{0.2 + 1}{2} = \mathbf{0.6}$$

_Interprétation : La distance est de 0.6 (sur une échelle de 0 à 1)._
  

---

## 4. Weighted KNN (Advanced)
**Problem:** In standard KNN, a neighbor at distance 0.1 counts as much as a neighbor at distance 10.
**Solution:** Give more weight to closer neighbors.

**Formula for Weight ($w_i$):**
$$w_i = \frac{1}{d(x_q, x_i)^2}$$
*(Inverse squared distance is common)*

**Weighted Vote:**
Instead of counting votes (1 vs 1), sum the weights:
* $\text{Score(Class A)} = \sum w_i$ where neighbor $i$ is Class A.

---

## 5. Choosing K (The "Goldilocks" Problem)
From the PDF (Slide 21 - Overfitting vs Underfitting):

* **K = 1 (Too Low):**
    * Captures noise/outliers.
    * High Variance, Low Bias.
    * **Overfitting**.
* **K = N (Too High):**
    * Predicts the majority class of the whole dataset.
    * Low Variance, High Bias.
    * **Underfitting**.
* **Rule of Thumb:** $K = \sqrt{N}$ (where $N$ is number of samples), usually an odd number (3, 5, 7).

---

## 6. Worked Example (Manual Calculation)
*Based on Course PDF Page 4.*

**Data:**
* Karim (Oui): (1, 2, 0)
* Sara (Non): (0, 3, 4)
* Tariq (Non): (2, 0, 2)
* **Target Naji:** (1, 3, 1)

**Step 1: Euclidean Distances**
1.  **d(Naji, Karim):** $\sqrt{(1-1)^2 + (3-2)^2 + (1-0)^2} = \sqrt{0+1+1} = \mathbf{1.41}$
2.  **d(Naji, Sara):** $\sqrt{(1-0)^2 + (3-3)^2 + (1-4)^2} = \sqrt{1+0+9} = \mathbf{3.16}$
3.  **d(Naji, Tariq):** $\sqrt{(1-2)^2 + (3-0)^2 + (1-2)^2} = \sqrt{1+9+1} = \mathbf{3.32}$

**Step 2: Decision**
* **If K=1:** Closest is Karim (1.41) $\rightarrow$ **Oui**.
* **If K=3:** Neighbors are Karim (Oui), Sara (Non), Tariq (Non) $\rightarrow$ 2 Non vs 1 Oui $\rightarrow$ **Non**.

---
## 7. F score et matrice de confusion

![[Pasted image 20260115123827.png]]

**f-score:**
![[Pasted image 20260115123850.png|center|500]]
### AUC

![[Pasted image 20260115124013.png|center|500]]

## 8. Implementation Code

### 🐍 Python (Scikit-Learn)
```python
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

# 1. Prepare Data
X_train = [[1, 2, 0], [0, 3, 4], [1, 4, 6], [2, 0, 2]] # Features
y_train = ['Oui', 'Non', 'Oui', 'Non']                 # Labels

# Target to predict (Naji)
X_new = [[1, 3, 1]]

# 2. Initialize Model (K=3)
# metric='euclidean' (p=2) or 'manhattan' (p=1)
knn = KNeighborsClassifier(n_neighbors=3, metric='euclidean')

# 3. Train (Fit)
knn.fit(X_train, y_train)

# 4. Predict
prediction = knn.predict(X_new)
print(f"Prediction for Naji: {prediction[0]}")

# 5. Probabilities (Vote breakdown)
print(f"Probabilities: {knn.predict_proba(X_new)}")
---

### ================2nd exemple=====================###

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

X, y = load_iris(return_X_y=True)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, stratify=y, random_state=42
)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

knn = KNeighborsClassifier(n_neighbors=3, weights="distance")
knn.fit(X_train, y_train)

y_pred = knn.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
print(confusion_matrix(y_test, y_pred))
```

### R Implementation (class::knn)

```r
library(caTools)
library(class)

set.seed(255)

data <- iris

split <- sample.split(data$Species, SplitRatio = 0.75)

trainS <- subset(data, split == TRUE)
testS <- subset(data, split == FALSE)
 
trainSS <- trainS[, -5]  # Features
testSS <- testS[, -5]
# Optional: Scale data
# train_scaled <- scale(trainSS)
# test_scaled <- scale(testSS)

test_pred <- knn(train = trainSS, test = testSS, cl = trainS$Species, k = 3)

actual <- testS$Species
MC <- table(actual, test_pred)  # Confusion matrix
accuracy <- sum(diag(MC)) / length(actual)
sprintf("Accuracy: %.2f%%", accuracy * 100)
# Predict new: knn(train = trainSS, test = c(5.1, 3.5, 1.6, 0.2), cl = trainS$Species, k = 3)

###========================2nd exemple============================###
library(class)
library(caret)

data(iris)

set.seed(42)
idx <- createDataPartition(iris$Species, p = 0.75, list = FALSE)
train <- iris[idx, ]
test <- iris[-idx, ]

trainX <- scale(train[,1:4])
testX <- scale(test[,1:4],
               center = attr(trainX, "scaled:center"),
               scale = attr(trainX, "scaled:scale"))

pred <- knn(trainX, testX, train$Species, k = 3)

conf <- table(test$Species, pred)
print(conf)
print(sum(diag(conf)) / sum(conf))
```

---

## 13. Key Takeaways for Practice

- Always normalize numerical features
    
- Choose distance based on data type
    
- Use weighted voting for robustness
    
- Tune k via cross-validation
    
- Prefer Gower distance for mixed data
    

# ~={red}References=~
[[crs_Introd_DM-KNN_24_AZOUAGH.pdf]]