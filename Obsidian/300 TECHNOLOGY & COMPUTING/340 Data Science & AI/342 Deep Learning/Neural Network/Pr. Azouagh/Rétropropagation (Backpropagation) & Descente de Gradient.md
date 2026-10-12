Date: 2026-04-16
Tags: [[Backpropagation]], [[Deep Learning]], [[Optimization]], [[Artificial intelligence]], [[Méthodes du Gradient - SDID|Gradient descent]]


---

> see also: [[Neural Networks — Training]]

#  Rétropropagation et Détermination des Poids

##  1. Vue d'Ensemble
La rétropropagation n'est conceptuellement rien d'autre que l'application de l'algorithme de descente de gradient à l'architecture des réseaux de neurones. Son but est de déterminer de manière automatique les poids optimaux pour qu'un modèle puisse caractériser un jeu de données, le classifier, et généraliser ses prédictions sur de nouveaux points.

Un réseau de neurones $R$ est formellement défini par :
* Son architecture (nombre de couches et de neurones).
* Ses fonctions d'activation.
* L'ensemble de ses paramètres (les poids) $P=(a_1,a_2,...)$.

Pour une tâche avec une seule sortie, la fonction globale du réseau s'écrit $F:\mathbb{R}^n\rightarrow\mathbb{R}$.

---

##  2. La Fonction de Coût (Erreur)
Pour que la machine apprenne, il faut quantifier ses erreurs. À partir de données d'apprentissage $(X_i,z_i)$ où $X_i$ est l'entrée et $z_i$ la sortie cible, l'objectif est d'ajuster les poids pour que $F(X_i)\simeq z_i$.

**Erreur Quadratique Moyenne (MSE)**
L'erreur globale $E$ est définie comme la moyenne des erreurs individuelles $E_i$ calculées sur l'ensemble des $N$ données :
$$E=\frac{1}{N}\sum_{i=1}^{N}E_i$$

Avec l'erreur locale :
$$E_i=(F(X_i)-z_i)^2$$

---

## 3. Modèle Simplifié : Le Neurone Unique (Séparateur Linéaire)
Pour comprendre la mécanique, on étudie le réseau le plus simple : un seul neurone avec deux entrées $(x,y)$, trois poids à calculer $(a,b,c)$, et une fonction d'activation sigmoïde $\sigma$.

La prédiction du modèle est :
$$F(x,y)=\sigma(ax+by+c)$$

La fonction sigmoïde utilisée est :
$$\sigma(t)=\frac{1}{1+e^{-t}}$$

**Interprétation Géométrique**
Ce neurone agit comme une frontière de décision linéaire (une droite d'équation $ax+by+c=0$). 
* Si $F(x,y)\le\frac{1}{2}$, le modèle classe le point dans la première catégorie (ex: rond bleu, $z_i=0$).
* Si $F(x,y)\ge\frac{1}{2}$, le modèle le classe dans la seconde catégorie (ex: carré rouge, $z_i=1$).

![[Pasted image 20260416220915.png|center|461]]

---

## 4. L'Optimisation par Descente de Gradient
L'apprentissage consiste à minimiser la fonction d'erreur $E(P)$. En partant de poids initiaux $P_0$ (souvent choisis au hasard), on ajuste itérativement les poids en "descendant" le long de la pente du gradient.

**Règle de mise à jour (Itération $k$)**
À chaque étape, on applique la formule de récurrence :
$$P_{k+1}=P_k-\delta\nabla E(P_k)$$
Où $\delta$ est le pas d'apprentissage (learning rate).

Le gradient $\nabla E$ requiert le calcul des dérivées partielles de l'erreur par rapport à chaque poids $a_j$ :
$$\frac{\partial E_i}{\partial a_j}(X_i)=2\frac{\partial F}{\partial a_j}(X_i)(F(X_i)-z_i)$$
derive partielle de:
![[Pasted image 20260416221111.png|258]]

**Application au neurone sigmoïde :**
Sachant que la dérivée de la sigmoïde est $\sigma'(x)=\sigma(x)(1-\sigma(x))$, les composantes du gradient deviennent :
$$\frac{\partial E_i}{\partial a}=2x_i\sigma_i(1-\sigma_i)(\sigma_i-z_i)$$
$$\frac{\partial E_i}{\partial b}=2y_i\sigma_i(1-\sigma_i)(\sigma_i-z_i)$$
$$\frac{\partial E_i}{\partial c}=2\sigma_i(1-\sigma_i)(\sigma_i-z_i)$$
![[Pasted image 20260416221312.png]]

---

## 5. Évolution et Limites (Étude de Cas)
Dans l'exemple du cours, en fixant $P_0=(0,1,-2)$ et un pas $\delta=1$ :
1. On calcule le gradient initial $\nabla E(P_0)=(-0.077,0.192,0.005)$.
2. On met à jour les poids pour obtenir $P_1$.
3. Au bout de $k=1000$ itérations, le système converge vers un minimum avec les poids $P_{1000}\simeq(2.032,-3.860,3.703)$.

![[Pasted image 20260416221338.png]]

![[Pasted image 20260416221417.png]]

**La Réalité de l'Approximation**
Même à l'optimum, l'erreur $E$ devient très petite mais ne tend jamais parfaitement vers zéro. La fonction $F$ donne des probabilités (ex: $F(1,1)=0.86$ au lieu de $1$, ou $F(0,3)=0.0003$ au lieu de $0$). De plus, si l'espace n'est pas parfaitement séparable linéairement, certains points resteront mal classifiés (ex: un point attendu à $0$ qui obtient $0.56$).

---

## ~={red}References=~

[[retropagation.pdf]]