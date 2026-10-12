Date: 2026-01-14
Tags:  [[Mathematics]], [[Data Science]], [[Machine Learning]], [[Python]], [[Unsupervised Learning]], [[R]]

# ~={red} Notes=~
## 1. Concept & The Partitioning Problem

Unlike hierarchical methods (CAH) that build a tree structure, partitioning methods aim to directly divide $N$ objects into $K$ distinct clusters.

### The Objective

To find, among all possible partitions, the one that optimizes a predefined criterion (usually minimizing **Intra-class Inertia**).

The Combinatorial Problem:

It is impossible to test every single possible partition to find the "perfect" one. For $N$ objects and $K$ classes, the number of possible partitions is roughly $K^N / K!$.

- _Implication:_ We need heuristic algorithms (like K-Means) that find a "good" solution (local optimum) efficiently, even if it's not mathematically guaranteed to be the absolute best.
    

---

## 2. K-Means vs. Nuées Dynamiques

The course distinguishes between two very similar approaches 2:

- **K-Means (Centres Mobiles):** Each class is represented by its **barycentre** (mean). The center is updated iteratively.
    
- **Nuées Dynamiques:** Each class is represented by a **kernel** (noyau)—a subset of actual individuals (e.g., the most central ones), rather than an abstract geometric mean.
    

---

## 3. The K-Means Algorithm

The algorithm alternates between assigning points to clusters and moving the cluster centers.

The Steps:

1. **Initialization:**
    
    - Fix the number of classes $k$ (a priori).
        
    - Choose $k$ individuals (or random points) as the **initial centers**.
        
2. **Assignment (Affectation):**
    
    - Assign every individual $x_i$ to the class whose center is closest (usually Euclidean distance).
        $$x_i \in C_k \iff d(x_i, c_k) \le d(x_i, c_j), \forall j \neq k$$
        
3. **Update (Représentation):**
    
    - Recalculate the **barycentre** (center of gravity) of each class based on the new members.
        $$c_k^{new} = \frac{1}{n_k} \sum_{x \in C_k} x$$
        
4. **Iteration:**
    
    - Repeat steps 2 and 3.
        
    - **Stopping Criterion:** Stop when the centers no longer move (stability) or when a maximum number of iterations is reached.
        

> [!TIP] Convergence
> 
> Convergence is usually fast (often around 10 iterations).

---

## 4. Concrete Example: Medicines

_Based on the detailed walkthrough in slides._

**Scenario:** Classify 4 medicines (A, B, C, D) into $K=2$ classes based on "Concentration" and "Efficiency".

|**Medicine**|**Concentration (X)**|**Efficiency (Y)**|
|---|---|---|
|**A**|1|1|
|**B**|2|1|
|**C**|4|3|
|**D**|5|4|
![[Pasted image 20260114212541.png|center|500]]
### Iteration 1

1. **Initialization:** Randomly select **A** and **B** as centers.
![[Pasted image 20260114212634.png|center|350]]
     $c_1 = (1, 1)$
        
     $c_2 = (2, 1)$
        
2. **Assignment:** Calculate distance of remaining points (C, D) to centers.
    
    - For **D(5,4)**:
        
        - $d(D, c_1) = \sqrt{(5-1)^2 + (4-1)^2} = 5$ 6
            
        - $d(D, c_2) = \sqrt{(5-2)^2 + (4-1)^2} = 4.24$
            
        - $\rightarrow$ D is closer to $c_2$. Assign D to Class 2.
            
    - (Similarly, C is found to be closer to $c_2$).
        
    - **Result:** Class 1 = $\{A\}$, Class 2 = $\{B, C, D\}$.
        
3. **Update Centers:**
    
    - $c_1^{new} = A = (1, 1)$
        
    - $c_2^{new} = \text{Mean}(B, C, D) = (\frac{2+4+5}{3}, \frac{1+3+4}{3}) = (3.67, 2.67)$.
        
![[Pasted image 20260114212804.png|center|350]]
### Iteration 2:

1. **Assignment:** Re-measure distances of all points to new centers $(1,1)$ and $(3.67, 2.67)$.
    
    - Result: A and B are now closest to $c_1$. C and D are closest to $c_2$.
        
    - **New Partition:** Class 1 = $\{A, B\}$, Class 2 = $\{C, D\}$.
        
2. **Update Centers:**
    
    - $c_1 = \text{Mean}(A, B) = (1.5, 1)$.
        
    - $c_2 = \text{Mean}(C, D) = (4.5, 3.5)$.
        
![[Pasted image 20260114213036.png|center|350]]
**Convergence:** If we run another iteration, the assignments won't change. The algorithm stops.

---

## 5. Pros & Cons (Avantages et Limites)

Essential for theoretical questions on the exam 11.

|**Avantages (Pros)**|**Limites (Cons)**|
|---|---|
|**Speed:** Low algorithmic complexity. Can handle large datasets efficiently.|**Fixed $k$:** Number of classes must be chosen _a priori_.|
|**Simplicity:** Easy to implement and interpret.|**Initialization Bias:** The final result depends on the initial centers (random seed). It can get stuck in local optima.|
|**Sequential:** Can process data as it arrives (streaming potential).|**Sensitivity:** Sensitive to outliers (they pull the mean) and assumes spherical clusters.|

---

## 6. The "Mixed" Approach

How to solve the problem of choosing $k$ and initialization? Combining methods is the best practice.

1. **Step 1: CAH:** Run CAH on a sample or aggregated dataset.
    
2. **Step 2: Cut:** Analyze the dendrogram to find the optimal number of classes $k$.
    
3. **Step 3: Centers:** Use the barycenters of the CAH classes as the **initial centers** for K-Means.
    
4. **Step 4: K-Means:** Run K-Means on the full dataset to refine the partition.
    

---

## 7. Implementation Code

### R Implementation (Exam Standard)

_Based on commands in Slide 42._

```R
# 1. Load Data
data(iris)

# 2. Run K-Means
# We use only numerical columns (1 to 4)
# centers = 3 : We fix k=3
# nstart = 20 : Runs the algorithm 20 times with different random seeds 
# and keeps the best result (lowest Intra-class inertia). Crucial for stability!
km <- kmeans(iris[, 1:4], centers = 3, nstart = 20)

# 3. Analyze Results
print(km)

# View the coordinates of the final centroids
print(km$centers) 

# 4. Evaluation (Croisement)
# Compare the cluster results with the actual species
table(km$cluster, iris$Species)

# Compare K-Means results with CAH results (if 'class_cah' exists)
# table(class_cah, km$cluster) [cite: 610]

# 5. Visualization
# Plot variables (e.g., Sepal.Length vs Sepal.Width) colored by cluster
plot(iris[, 1:2], col = c('red','blue','green')[km$cluster], 
     main = "Résultats K-Means", pch = 19)
```

### Python Implementation (Bonus)

```python
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import load_iris

# 1. Load Data
iris = load_iris()
X = iris.data

# 2. Run K-Means
# n_init=20 is equivalent to nstart=20 in R
kmeans = KMeans(n_clusters=3, init='k-means++', n_init=20, random_state=42)
kmeans.fit(X)

# 3. Get Results
labels = kmeans.labels_
centroids = kmeans.cluster_centers_

# 4. Inertia (Elbow Method potential)
print(f"Intra-class Inertia: {kmeans.inertia_}")

# 5. Visualization
# Plotting first two dimensions
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.scatter(centroids[:, 0], centroids[:, 1], s=200, c='red', marker='X', label='Centroids')
plt.xlabel('Sepal Length')
plt.ylabel('Sepal Width')
plt.title('K-Means Partition (k=3)')
plt.legend()
plt.show()
```

# ~={red}References=~
![[Crs_SDID_CAH_K-Means.pdf]]