Date: 2026-01-14
Tags:  [[Mathematics]], [[Data Science]], [[Machine Learning]], [[Python]], [[Unsupervised Learning]], [[R]]

# ~={red} Notes=~
## 1. Introduction: What is Classification?

**Classification** (often called _Clustering_ or _Segmentation_) is a descriptive, unsupervised method. Its primary goal is to group objects (individuals or variables) into classes (clusters) such that the structure of the data is revealed.

The Two Fundamental Principles 

1. **Homogeneity (Intra-class):** Two objects in the _same_ group should resemble each other as much as possible.
    
2. **Heterogeneity (Inter-class):** Two objects in _distinct_ groups should differ as much as possible.
    

> [!NOTE] Key Concept
> 
> Unlike supervised learning, there is no privileged target variable (no $Y$). We are describing a complex reality by summarizing it into groups.

---

## 2. The CAH Algorithm (Bottom-Up)

The method is "Ascendant" (Agglomerative) because it starts from the bottom (leaves) and builds up to the root.

Step-by-Step Process 

1. **Initialization:** Every individual $x_i$ forms its own class. If you have $n$ individuals, you start with $n$ classes.
    
2. **Distance Calculation:** Calculate the distance (dissimilarity) between every pair of classes.
    
3. **Agglomeration:** Merge the two classes that are closest to each other (minimum distance).
    
4. **Update Distances:** Calculate the distances between this new merged class and all remaining classes using an **Aggregation Criterion**.
    
5. **Iteration:** Repeat steps 3 and 4 until all individuals are grouped into a single class (the root).
    

---

## 3. Mathematical Foundations

### A. Data Preparation

Before calculating distances, it is crucial to **standardize** (centrer et réduire) variables if they are not measured in the same units or have different variances. This prevents variables with large scales from dominating the calculation.

### B. Distances Between Individuals

To define similarity, we need a metric. Let $x_i$ and $x_j$ be two individuals defined by $p$ variables ($q=1 \dots p$).

1. Euclidean Distance (Most Common):
    
    $$d(x_i, x_j) = \sqrt{\sum_{q=1}^{p} (x_i^q - x_j^q)^2}$$
    
2. Manhattan Distance ($L_1$):
    
    $$l_{manh}(x_i, x_j) = \sum_{q=1}^{p} |x_i^q - x_j^q|$$
    

---

## 4. Aggregation Strategies (Linkage Criteria)

When we merge two individuals $x$ and $y$ into a new group $h = \{x, y\}$, how do we calculate the distance between this new group $h$ and another existing group $z$?

This choice defines the "shape" of your clusters.

1. Simple Linkage (Saut Minimum)

We take the distance between the two closest elements.

$$d(z, h) = \min \{ d(z, x), d(z, y) \}$$

- **Effect:** Can create the "chain effect" (long, stringy clusters).
    

2. Complete Linkage (Saut Maximum)

We take the distance between the two farthest elements.

$$d(z, h) = \max \{ d(z, x), d(z, y) \}$$

- **Effect:** Tends to produce compact, spherical clusters.
    

3. Average Linkage (Moyen)

We take the average of the distances.

$$d(z, h) = \frac{d(z, x) + d(z, y)}{2}$$

~={blue}4. **Ward's Method (Critère de Ward)=~**

This is the most statistically robust method. It is based on the concept of **Inertia**.

- **Goal:** At each step, merge the two classes that result in the **minimum loss of Inter-class Inertia** (which is equivalent to the minimum increase in Intra-class Inertia).
    
- **Ward's Distance Formula:**
    
    $$D(G_i, G_j) = \frac{n_i n_j}{n_i + n_j} d^2(g_i, g_j)$$
    
    - $n_i, n_j$: Number of individuals (effectif) in class $G_i$ and $G_j$.
        
    - $g_i, g_j$: Centers of gravity (barycentres) of class $G_i$ and $G_j$.
        
    - $d^2(g_i, g_j)$: Squared Euclidean distance between the centers.
        
- **Interpretation:** It penalizes merging large groups ($n$ is large) and groups that are far apart. It groups objects of low weight and avoids the chain effect.
    

---

## 5. Inertia Decomposition (Huygens Theorem)

This theorem is the "engine" behind Ward's method and quality assessment.

$$\text{Inertia}_{\text{Total}} = \text{Inertia}_{\text{Inter}} + \text{Inertia}_{\text{Intra}}$$

Definitions:
![[Pasted image 20260114222622.png|center|500]]

1. Total Inertia ($I_T$): Constant. It represents the total variability of the dataset.
    $$I_T = \frac{1}{n} \sum_{i=1}^{n} d^2(x_i, g)$$
    
    (Where $g$ is the global center of gravity)
    
2. Intra-Class Inertia ($I_{Intra}$): The sum of inertias inside each cluster. Measures compactness.
    
    $$I_{Intra} = \frac{1}{n} \sum_{k=1}^{J} \sum_{i \in G_k} d^2(x_i, g_k)$$
    
3. Inter-Class Inertia ($I_{Inter}$): The inertia of the cluster centers weighted by their size. Measures separation.
    
    $$I_{Inter} = \frac{1}{n} \sum_{k=1}^{J} n_k d^2(g_k, g)$$
    avec:
$$g_k = \frac{1}{n_k} \sum_{x \in G_k} x$$
### The Trade-off

- At the start ($n$ classes): $I_{Intra} = 0$, $I_{Inter} = I_{Total}$.
    
- As we merge: $I_{Intra}$ **increases**, $I_{Inter}$ **decreases**.
    
- **Objective:** We want to stop merging before $I_{Intra}$ becomes too large. We look for a partition that maximizes the ratio $\frac{I_{Inter}}{I_{Total}}$.
    

---

## 6. The Dendrogram & Choosing the Number of Classes ($k$)

The **Dendrogram** is the visual history of every merge performed by the algorithm.

### How to cut the tree?

We need to choose a "Cutting Level" (Niveau de coupure) to define the final partition.

1. **Visual Heuristic:** Cut the tree where the branches are long (vertical lines). A long branch indicates that the two groups being merged are very different (large distance).
    
2. **Inertia Gain (Saut d'inertie):** Look at the loss of inter-class inertia at each step.
    
    - If merging two groups causes a **small jump**, they were similar (good merge).
        
    - If merging causes a **huge jump** (large loss of Inter-Inertia), we should stop before that merge.
        
    - _Example from Course:_ In the cities example, passing from 2 classes to 1 class caused a massive loss (7.88), suggesting 2 classes is a natural partition.

![[Pasted image 20260114191823.png|center]]

---

## 7. Pros & Cons of CAH

| **Avantages (Pros)**                                                    | **Limites (Cons)**                                                                                                        |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **No fixed $k$:** It suggests the number of classes via the dendrogram. | **Computational Cost:** Very heavy for large datasets ($n$ large).                                                        |
| **Hierarchy:** Reveals the structure of sub-groups within groups.       | **Static:** Once an individual is assigned to a group in an early step, it cannot be moved later (non-optimal structure). |
| **Visual:** The dendrogram is a powerful explanatory tool.              | **Subjectivity:** Choosing the cutting level can be difficult.                                                            |

---

## 8. Implementation Code

### R Implementation (Exam Standard)

_Based on the specific commands found in slides 24-25 & 42._

```r
# 1. Import and Prepare Data
# data(iris) # Using built-in dataset
# summary(iris)

# 2. Distance Matrix Calculation
# We use columns 1 to 4 (quantitative variables)
d_euc <- dist(iris[, 1:4], method = 'euclidean')

# 3. Hierarchical Clustering (Hclust)
# method = 'ward.D2' is the R standard for Ward's method. 
# Slide 25 uses 'ave' (Average Linkage) as an example.
hc <- hclust(d_euc, method = 'ave') 

# 4. Plot Dendrogram
plot(hc, main = "Dendrogramme CAH", xlab = "Individus", sub = "")

# 5. Cut the Tree (Partitioning)
# We choose k=3 based on the dendrogram analysis
class_cah <- cutree(hc, k = 3)

# 6. Analyze Results
# Compare our clusters with the real species
table(class_cah, iris$Species)

# Visualizing the clusters on a 2D plot (Sepal.Length vs Petal.Width)
plot(iris[, 3:4], col = c('red','blue','green')[class_cah], 
     main = "Projection des classes CAH")
```

### Python Implementation (Bonus)

```python
import pandas as pd
import matplotlib.pyplot as plt
from scipy.cluster.hierarchy import dendrogram, linkage, fcluster
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_iris

# 1. Load & Scale Data
iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df)

# 2. Hierarchical Clustering (Linkage Matrix)
# method='ward' corresponds to Ward's criterion
Z = linkage(X_scaled, method='ward', metric='euclidean')

# 3. Plot Dendrogram
plt.figure(figsize=(10, 5))
plt.title("Dendrogramme CAH (Ward)")
dendrogram(Z)
plt.axhline(y=10, c='k', ls='--', label='Cut Level') # Example cut line
plt.show()

# 4. Cut the Tree
# t=3 for 3 clusters
clusters = fcluster(Z, t=3, criterion='maxclust')

# 5. Visualization
plt.scatter(df.iloc[:, 2], df.iloc[:, 3], c=clusters, cmap='viridis')
plt.xlabel('Petal Length')
plt.ylabel('Petal Width')
plt.title('Partition CAH (k=3)')
plt.show()
```

# ~={red}References=~
[[Crs_SDID_CAH_K-Means.pdf]]