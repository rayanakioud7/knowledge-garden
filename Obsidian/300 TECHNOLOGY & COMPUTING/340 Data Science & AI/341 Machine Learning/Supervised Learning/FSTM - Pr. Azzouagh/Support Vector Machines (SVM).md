
Date: 2026-04-21
Tags: [[Mathematics]], [[Data Science]], [[Machine Learning]], [[Supervised Learning]]

**Cours : Machine Learning (SDID) — Pr. N. Azouagh 2024-2025**

---

## Table des matières

1. [[#Introduction]]
2. [[#Notations et Définitions]]
3. [[#SVM Linéaire — Cas Séparable]]
    - [[#Données linéairement séparables]]
    - [[#Hyperplan séparateur et marge]]
    - [[#Normalisation et reformulation]]
    - [[#Formulation Primale]]
4. [[#Dualité de Lagrange — Rappel Général]]
5. [[#Formulation Duale — Dérivation complète]]
    - [[#Construction du Lagrangien]]
    - [[#Conditions de stationnarité]]
    - [[#Développement de θ(α)]]
    - [[#Conditions KKT]]
    - [[#Vecteurs supports]]
6. [[#Règle de Décision]]
7. [[#SVM Linéaire — Cas Non Séparable (Marge Souple)]]
8. [[#SVM Non Linéaire — Noyaux (Kernels)]]
9. [[#SVM Multiclasses]]
10. [[#Avantages et Inconvénients]]

---

## 1. Introduction

Les SVM (_Support Vector Machines_, ou **Séparateur à Vaste Marge**) sont une classe d'algorithmes d'apprentissage supervisé initialement développés pour la **discrimination binaire**, puis généralisés à la régression et au multiclasse.

![[Pasted image 20260421030258.png]]

**Idée clé :** parmi tous les hyperplans séparateurs possibles, choisir celui qui **maximise la marge** entre les deux classes → meilleure généralisation.

**Deux idées fondamentales :**

1. **Marge optimale** : hyperplan le plus éloigné possible de toutes les observations.
2. **Noyaux (kernels)** : transformation implicite vers un espace de grande dimension pour traiter les cas non linéaires.

---

## 2. Notations et Définitions

|Symbole|Signification|
|---|---|
|$\mathcal{D}_n = {(x_i, y_i)}_{i=1}^n$|Ensemble d'apprentissage|
|$x_i \in \mathbb{R}^p$|Vecteur de features de l'observation $i$|
|$y_i \in {-1, +1}$|Étiquette de classe|
|$w \in \mathbb{R}^p$|Vecteur normal à l'hyperplan|
|$b \in \mathbb{R}$|Biais (décalage par rapport à l'origine)|
|$\langle w, x \rangle = w^T x$|Produit scalaire usuel dans $\mathbb{R}^p$|
|$\|w\|$|Norme euclidienne de $w$|
|$\alpha_i \geq 0$|Multiplicateurs de Lagrange (variables duales)|
|$\gamma$|Marge maximale|
|$\xi_i \geq 0$|Variables d'écart (slack variables, cas non séparable)|
|$C > 0$|Paramètre de régularisation/pénalisation|

---

## 3. SVM Linéaire — Cas Séparable

![[Pasted image 20260421030336.png]]
### 3.1 Données linéairement séparables

> **Définition.** Les données $\mathcal{D}_n = {(x_i, y_i)}_{i=1}^n$ sont dites **linéairement séparables** s'il existe $(w, b) \in \mathbb{R}^p \times \mathbb{R}$ tel que :

$$\forall, i = 1, \ldots, n \quad y_i \cdot (\langle w, x_i \rangle + b) > 0$$

Ce qui équivaut à :

$$\begin{cases} y_i = +1 & \text{si } \langle w, x_i \rangle + b > 0 \ y_i = -1 & \text{si } \langle w, x_i \rangle + b < 0 \end{cases}$$

**Problèmes intrinsèques :**

- Il existe une **infinité** d'hyperplans séparateurs.
- Les paramètres $(w, b)$ ne sont **pas uniques** : $(kw, kb)$ donne la même surface pour tout $k > 0$.

### 3.2 Hyperplan séparateur et marge

La **fonction de décision** est :

$$f(x) = \langle w, x \rangle + b$$

L'hyperplan central $H$ et les hyperplans marginaux $H^+, H^-$ :

$$H : \langle w, x \rangle + b = 0 \qquad H^+ : \langle w, x \rangle + b = +1 \qquad H^- : \langle w, x \rangle + b = -1$$

La **distance** d'un point $x_i$ à l'hyperplan $H$ est :

$$d(x_i, H) = \frac{|\langle w, x_i \rangle + b|}{|w|}$$

La **marge géométrique** est donc :

$$m = \min_{i \in {1,\ldots,n}} d(x_i, H) = \min_{i \in {1,\ldots,n}} \frac{|w^T x_i + b|}{|w|}$$

La marge **totale** (entre $H^+$ et $H^-$) vaut $\dfrac{2}{|w|}$.

**Problème d'optimisation initial :**

$$\max_{w,, b}; m = \max_{w,, b}; \min_{i \in {1,\ldots,n}} \frac{|w^T x_i + b|}{|w|}$$

sous les contraintes que les observations au-dessus de $H^+$ ont $y_i = +1$ et celles en-dessous de $H^-$ ont $y_i = -1$.

### 3.3 Normalisation et reformulation

**Ce problème est mal posé** : si $(w, b)$ est solution, $(kw, kb)$ l'est aussi $\forall k > 0$.

**Changement de variables :** on fixe la normalisation canonique :

$$\min_{i \in {1,\ldots,n}} y_i(\langle w, x_i \rangle + b) = 1$$

Ceci revient à poser $w' = \dfrac{w}{m|w|}$ et $b' = \dfrac{b}{m|w|}$, ce qui donne :

$$|w'| = \frac{1}{m} \quad \Longleftrightarrow \quad m = \frac{1}{|w'|}$$

Les contraintes deviennent alors :

$$\begin{cases} y_i = +1 & \Rightarrow \langle w, x_i \rangle + b \geq +1 \ y_i = -1 & \Rightarrow \langle w, x_i \rangle + b \leq -1 \end{cases} \quad \Longleftrightarrow \quad \forall, i,; y_i(\langle w, x_i \rangle + b) \geq 1$$

**Conséquence :** Au lieu de maximiser $m = \dfrac{1}{|w|}$, on **minimise** $|w|$, ou de façon équivalente :

$$\min_{w, b}; \frac{1}{2}|w|^2$$

_(le facteur $\frac{1}{2}$ facilite les calculs de dérivées)_

### 3.4 Formulation Primale (SVM à marge rigide)

$$\boxed{\min_{w,, b}; \frac{1}{2}|w|^2 \quad \text{s.c.} \quad y_i(\langle w, x_i \rangle + b) \geq 1, \quad \forall, i = 1,\ldots,n}$$

**Propriétés :**

- Programme quadratique convexe ($\frac{1}{2}|w|^2$ est quadratique, les contraintes sont linéaires).
- Solution unique.
- Complexité en $p + 1$ dimensions (dimension de $w$ + biais).

---

## 4. Dualité de Lagrange — Rappel Général

> **Problème Primal général :**

$$\min_{u \in \mathbb{R}^p}; h(u) \quad \text{s.c.} \quad g_i(u) \leq 0, \quad \forall, i \in {1, \ldots, m}$$

> **Définition : Lagrangien.** La fonction de Lagrange est définie sur $\mathbb{R}^p \times \mathbb{R}^m$ par :

$$\mathcal{L}(u, \alpha) = h(u) + \sum_{i=1}^{m} \alpha_i, g_i(u)$$

Les $\alpha_i$ sont appelés **multiplicateurs de Lagrange** ou **variables duales**.

**Construction de la fonction duale :**

Pour $\alpha \in \mathbb{R}^m_+$ :

$$u_\alpha = \arg\min_{u \in \mathbb{R}^p} \mathcal{L}(u, \alpha)$$

$$\theta(\alpha) = \mathcal{L}(u_\alpha, \alpha) = \min_{u \in \mathbb{R}^p} \mathcal{L}(u, \alpha) \quad \longrightarrow \text{fonction duale}$$

**Problème Dual :**

$$\alpha^* = \arg\max_{\alpha \in \mathbb{R}^m} \theta(\alpha) \quad \text{s.c.} \quad \alpha_i \geq 0, \quad \forall, i \in {1,\ldots,m}$$

 **Théorème (dualité forte, conditions de Slater).** Si le problème primal est convexe et satisfait les conditions de qualification de contraintes (Slater), alors la solution du problème dual $\alpha^{-}$ donne la solution primale via $u^- = u_{\alpha^*}$.

---

## 5. Formulation Duale — Dérivation Complète

### 5.1 Construction du Lagrangien SVM

Les contraintes du primal s'écrivent $g_i(w,b) = 1 - y_i(\langle w, x_i \rangle + b) \leq 0$.

Le **Lagrangien** associé au problème primal est :

$$\mathcal{L}(w, b, \alpha) = \frac{1}{2}|w|^2 - \sum_{i=1}^{n} \alpha_i \Big(y_i\big(\langle w, x_i \rangle + b\big) - 1\Big)$$

avec $\alpha_i \geq 0$.

### 5.2 Conditions de stationnarité (conditions nécessaires)

On annule les dérivées partielles par rapport à $w$ et $b$ :

**Dérivée par rapport à $b$ :**

$$\frac{\partial \mathcal{L}}{\partial b}(w, b, \alpha) = -\sum_{i=1}^{n} \alpha_i y_i = 0 \quad \Longrightarrow \quad \boxed{\sum_{i=1}^{n} \alpha_i y_i = 0}$$

**Dérivée par rapport à $w$ :**

$$\frac{\partial \mathcal{L}}{\partial w}(w, b, \alpha) = w - \sum_{i=1}^{n} \alpha_i y_i x_i = 0 \quad \Longrightarrow \quad \boxed{w = \sum_{i=1}^{n} \alpha_i y_i x_i}$$

### 5.3 Développement de la fonction duale θ(α)

On substitue $w^* = \sum_{i=1}^{n} \alpha_i y_i x_i$ et la condition $\sum_i \alpha_i y_i = 0$ dans le Lagrangien :

**Terme $\frac{1}{2}|w|^2$ :**

$$\frac{1}{2}|w|^2 = \frac{1}{2}\left\langle \sum_{i=1}^{n} \alpha_i y_i x_i,; \sum_{j=1}^{n} \alpha_j y_j x_j \right\rangle = \frac{1}{2}\sum_{i=1}^{n}\sum_{j=1}^{n} \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle$$

**Terme $-\sum_i \alpha_i y_i \langle w, x_i \rangle$ :**

$$-\sum_{i=1}^{n} \alpha_i y_i \langle w, x_i \rangle = -\sum_{i=1}^{n} \alpha_i y_i \left\langle \sum_{j=1}^{n} \alpha_j y_j x_j, x_i \right\rangle = -\sum_{i=1}^{n}\sum_{j=1}^{n} \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle$$

**Terme $-b\sum_i \alpha_i y_i$ :**

$$-b\sum_{i=1}^{n} \alpha_i y_i = 0 \quad \text{(car } \sum_i \alpha_i y_i = 0 \text{)}$$

**Terme $+\sum_i \alpha_i$ :** reste tel quel.

**Assemblage :**

$$\theta(\alpha) = \frac{1}{2}\sum_{i,j} \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle - \sum_{i,j} \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle + \sum_{i} \alpha_i$$

$$\boxed{\theta(\alpha) = \sum_{i=1}^{n} \alpha_i - \frac{1}{2}\sum_{i=1}^{n}\sum_{j=1}^{n} \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle}$$

### 5.4 Problème Dual (SVM à marge rigide)

$$\boxed{\alpha^* = \arg\max_{\alpha}; \theta(\alpha) = \arg\max_{\alpha}; \left[\sum_{i=1}^{n} \alpha_i - \frac{1}{2}\sum_{i,j=1}^{n} \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle\right]}$$

$$\text{s.c.} \quad \sum_{i=1}^{n} \alpha_i y_i = 0 \quad \text{et} \quad \alpha_i \geq 0,; \forall, i \in [![1, n]!]$$

**Avantages de la formulation duale :**

- Problème quadratique en $n$ dimensions (nombre d'observations) vs $p+1$ dimensions pour le primal.
- Si peu de données et beaucoup de variables → préférer le dual.
- Fait apparaître la **matrice de Gram** $K_{ij} = \langle x_i, x_j \rangle$ → extension aux noyaux.

### 5.5 Conditions KKT (Karush-Kuhn-Tucker)

Les conditions KKT sont **nécessaires et suffisantes** (problème convexe, qualifié) :

|Condition|Expression|Nom|
|---|---|---|
|Primal|$y_i(\langle w^_, x_i \rangle + b^_) \geq 1,; \forall i$|Admissibilité primale|
|Dual|$\alpha_i^* \geq 0,; \forall i$|Admissibilité duale|
|Complémentarité|$\alpha_i^_\big(y_i(\langle w^_, x_i \rangle + b^*) - 1\big) = 0,; \forall i$|Complémentarité|
|Stationnarité|$w^* = \sum_i \alpha_i^* y_i x_i$ et $\sum_i \alpha_i^* y_i = 0$|Stationnarité|

**Conséquence de la complémentarité :**

$$\alpha_i^* > 0 \quad \Longrightarrow \quad y_i(\langle w^_, x_i \rangle + b^_) = 1 \quad \text{(point sur la frontière de marge)}$$

$$y_i(\langle w^_, x_i \rangle + b^_) > 1 \quad \Longrightarrow \quad \alpha_i^* = 0 \quad \text{(point hors marge → n'influence pas $w^*$)}$$

### 5.6 Vecteurs Supports

> **Définition.** Les **vecteurs supports** sont les observations $x_i$ telles que $\alpha_i^* > 0$, c'est-à-dire les points situés exactement sur les hyperplans marginaux $H^+$ ou $H^-$.

$$\text{V.S.} = {x_i \mid \alpha_i^* > 0} \quad \Longleftrightarrow \quad y_i(\langle w^_, x_i \rangle + b^_) = 1$$

**Le nombre de vecteurs supports peut être faible** → $w^*$ ne dépend que d'eux.

---

## 6. Règle de Décision (Cas Séparable)

**Solution primale reconstruite à partir du dual :**

$$w^* = \sum_{i=1}^{n} \alpha_i^* y_i x_i = \sum_{x_i \in \text{V.S.}} \alpha_i^* y_i x_i$$

$$b^* : \text{résoudre pour } i \text{ t.q. } 0 < \alpha_i^* \leq C, \quad y_i(\langle w^_, x_i \rangle + b^_) = 1$$

**Marge maximale :**

$$\gamma^* = \frac{1}{|w^*|}$$

**Classifieur (règle de décision) :**

$$\phi_{w^_, b^_}(x) = \mathbb{1}_{\langle w^_, x \rangle + b^_ \geq 0} - \mathbb{1}_{\langle w^_, x \rangle + b^_ < 0}$$

$$\text{ou équivalemment :} \quad \phi(x) = \begin{cases} +1 & \text{si } \displaystyle\sum_{x_i \in \text{V.S.}} \alpha_i^* y_i \langle x_i, x \rangle + b^* \geq 0 \ -1 & \text{si } \displaystyle\sum_{x_i \in \text{V.S.}} \alpha_i^* y_i \langle x_i, x \rangle + b^* < 0 \end{cases}$$

---

## 7. SVM Linéaire — Cas Non Séparable (Marge Souple)

Quand les données ne sont pas linéairement séparables, on introduit des **variables d'écart** $\xi_i \geq 0$ (_slack variables_ / variables ressort) pour tolérer des erreurs de classification.

![[Pasted image 20260421030453.png| center|422]]

**Interprétation géométrique de $\xi_i$ :**

|Condition|Valeur de $\xi_i$|Situation|
|---|---|---|
|$y_i(\langle w, x_i \rangle + b) \geq 1$|$\xi_i = 0$|Bien classé, dans la marge ou au-delà|
|$0 < y_i(\langle w, x_i \rangle + b) < 1$|$\xi_i \in (0,1)$|Bien classé mais dans la marge|
|$y_i(\langle w, x_i \rangle + b) \leq 0$|$\xi_i \geq 1$|Mal classé|

On a toujours : $\xi_i = \max\big(0,; 1 - y_i(\langle w, x_i \rangle + b)\big)$

### 7.1 Formulation Primale (Marge Souple)

$$\boxed{\min_{w,, b,, \xi}; \frac{1}{2}|w|^2 + C\sum_{i=1}^{n} \xi_i}$$

$$\text{s.c.} \quad \begin{cases} y_i(\langle w, x_i \rangle + b) \geq 1 - \xi_i, & \forall, i = 1,\ldots,n \ \xi_i \geq 0, & \forall, i = 1,\ldots,n \end{cases}$$

- $C > 0$ est le **paramètre de régularisation** (compromis marge large ↔ peu d'erreurs).
- $C$ grand → peu d'erreurs tolérées → risque de sur-apprentissage.
- $C$ petit → grande marge tolérée → risque de sous-apprentissage.

**Solution du problème primal :**

$$w^* = \sum_{i=1}^{n} \alpha_i^* y_i x_i, \qquad b^* \text{ t.q. } y_i(\langle w^_, x_i \rangle + b^_) = 1 - \xi_i,; \forall, x_i \text{ avec } 0 < \alpha_i^* < C$$

### 7.2 Problème Dual (Marge Souple)

$$\max_{\alpha}; \sum_{i=1}^{n} \alpha_i - \frac{1}{2}\sum_{i,j=1}^{n} \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle$$

$$\text{s.c.} \quad \sum_{i=1}^{n} \alpha_i y_i = 0 \quad \text{et} \quad 0 \leq \alpha_i \leq C, \quad \forall, i \in [![1, n]!]$$

**Différence avec le cas séparable :** les $\alpha_i$ sont bornés supérieurement par $C$.

### 7.3 Conditions KKT (Marge Souple)

$$0 \leq \alpha_i^* \leq C, \quad \forall, i \in [![1, n]!] \qquad \text{(admissibilité duale)}$$

$$y_i(\langle w^_, x_i \rangle + b^_) \geq 1 - \xi_i^*, \quad \forall, i \in [![1, n]!] \qquad \text{(admissibilité primale)}$$

$$\alpha_i^_\big(y_i(\langle w^_, x_i \rangle + b^_) + \xi_i^_ - 1\big) = 0, \quad \forall, i \in [![1, n]!] \qquad \text{(complémentarité 1)}$$

$$\xi_i^_(\alpha_i^_ - C) = 0, \quad \forall, i \in [![1, n]!] \qquad \text{(complémentarité 2)}$$

### 7.4 Classification des observations (3 cas)

|Condition sur $\alpha_i^*$|Condition sur $\xi_i^*$|Type de point|
|---|---|---|
|$\alpha_i^* = 0$|$\xi_i^* = 0$|Bien classé, hors marge (non vecteur support)|
|$0 < \alpha_i^* < C$|$\xi_i^* = 0$|Sur la frontière de marge (**Vecteur Support**)|
|$\alpha_i^* = C$|$\xi_i^* > 0$|Dans la marge ou mal classé|

**Fonction de décision :**

$$f(x) = \sum_{x_i \in \text{V.S.}} \alpha_i^* y_i \langle x_i, x \rangle + b^*$$

---

## 8. SVM Non Linéaire — Noyaux (Kernels)

**Idée :** transformer les données vers un espace de grande dimension où elles sont linéairement séparables, **sans calculer explicitement la transformation**.

### 8.1 Astuce du noyau (Kernel Trick)

Soit $\varphi : \mathcal{X} \to \mathcal{H}$ une fonction de redescription vers un espace de Hilbert $\mathcal{H}$.

La formulation duale ne dépend de $\varphi$ qu'au travers des **produits scalaires** :

$$\langle \varphi(x_i), \varphi(x_j) \rangle_{\mathcal{H}} \quad \text{et} \quad \langle \varphi(x_i), \varphi(x) \rangle_{\mathcal{H}}$$

> **Définition.** Une fonction $k : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ telle que $$k(x, x') = \langle \varphi(x), \varphi(x') \rangle_{\mathcal{H}}$$ pour une fonction $\varphi : \mathcal{X} \to \mathcal{H}$ est appelée un **noyau**.

_Remarque : un noyau est souvent bien plus simple à calculer que $\varphi$ elle-même._

### 8.2 Problème Dual Non Linéaire

On remplace $\langle x_i, x_j \rangle$ par $k(x_i, x_j)$ :

$$\max_{\alpha}; \sum_{i=1}^{n} \alpha_i - \frac{1}{2}\sum_{i,j=1}^{n} \alpha_i \alpha_j y_i y_j, k(x_i, x_j)$$

$$\text{s.c.} \quad \sum_{i=1}^{n} \alpha_i y_i = 0 \quad \text{et} \quad 0 \leq \alpha_i \leq C$$

**Règle de décision non linéaire :**

$$\phi(x) = \mathbb{1}_{\sum_i y_i \alpha_i^* k(x_i,, x) + b^* ,\geq, 0} - \mathbb{1}_{\sum_i y_i \alpha_i^* k(x_i,, x) + b^* ,<, 0}$$

### 8.3 Exemples de noyaux courants

|Type|Nom|$k(s, t)$|
|---|---|---|
|Radial|**Gaussien (RBF)**|$\exp!\left(-\dfrac{\|s-t\|^2}{\sigma}\right)$|
|Radial|Laplacien|$\exp(-\|s-t\|/\sigma)$|
|Radial|Rationnel|$1 - \dfrac{\|s-t\|^2}{\|s-t\|^2 + \sigma}$|
|Projectif|**Polynomial**|$(s^\top t)^p$|
|Projectif|Polynomial affine|$(s^\top t + \sigma)^p$|
|Projectif|Cosinus|$\dfrac{s^\top t}{\|s\|t\|}$|

**Condition de Mercer :** un noyau $k$ est valide si et seulement si la matrice de Gram $K_{ij} = k(x_i, x_j)$ est **symétrique semi-définie positive**.

---

## 9. SVM Multiclasses

L'approche SVM est formellement définie pour $y \in {-1, +1}$. Deux stratégies d'extension :

### 9.1 One-Against-Rest (OAR)

- Construire $K$ classifieurs SVM : classe $k$ contre toutes les autres.
- Classifieur $k$ : $y_k = +1$ vs $y_{j \neq k} = -1$ → $K$ fonctions $f_k(x)$.
- **Règle de décision :**

$$\hat{y} = \arg\max_{k}; f_k(x)$$

### 9.2 One-Against-One (OAO / Pairwise)

- Construire $\dfrac{K(K-1)}{2}$ classifieurs SVM pour chaque paire de classes.
- Classifieur $(k, j)$ : $y_k = +1$ vs $y_j = -1$ → fonctions $f_{k,j}(x)$.
- **Règle de décision :** vote majoritaire (classe avec le plus grand nombre de victoires).

---

## 10. Avantages et Inconvénients

### ✅ Avantages

- Efficace en **grande dimension** ($p \gg n$ possible).
- Robuste car seuls les **vecteurs supports** influencent le classifieur.
- Traitement des **problèmes non linéaires** via les noyaux.
- **Non paramétrique** (pas d'hypothèse sur la distribution des données).
- Robuste aux **points aberrants** (contrôlé par $C$).
- Souvent **très performant** en comparaison avec d'autres méthodes.

### ❌ Inconvénients

- **Sélection des hyperparamètres** difficile ($C$, $\sigma$ pour le RBF, etc.) → validation croisée.
- Difficile avec **grandes bases** ($n$ très élevé) → matrice de Gram $n \times n$ coûteuse en mémoire.
- Problèmes si classes **bruitées** (multiplication des vecteurs supports).
- **Pas de modèle explicite** pour les noyaux non linéaires.
- **Difficulté d'interprétation** (pertinence des variables).
- Extension **multiclasses** reste une question ouverte.

---

## 🔑 Récapitulatif — Formules Clés pour l'Examen

$$\boxed{m = \frac{2}{|w|} \quad \Longleftrightarrow \quad \text{maximiser la marge} \equiv \min_{w,b}; \frac{1}{2}|w|^2}$$

$$\boxed{w^* = \sum_{i=1}^{n} \alpha_i^* y_i x_i \qquad \text{(combinaison linéaire des vecteurs supports)}}$$

$$\boxed{\theta(\alpha) = \sum_{i=1}^{n} \alpha_i - \frac{1}{2}\sum_{i,j=1}^{n} \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle}$$

$$\boxed{\text{KKT}: \alpha_i^_\big(y_i(\langle w^_, x_i\rangle + b^_) - 1\big) = 0 \quad \Rightarrow \quad \alpha_i^_ > 0 \Leftrightarrow x_i \in \text{V.S.}}$$

$$\boxed{k(x, x') = \langle \varphi(x), \varphi(x') \rangle_{\mathcal{H}} \quad \text{(kernel trick : remplace } \langle x_i, x_j\rangle \text{ dans le dual)}}$$

$$\boxed{\gamma^* = \frac{1}{|w^_|} \qquad b^_ : y_i(\langle w^_, x_i\rangle + b^_) = 1 \text{ pour tout V.S. avec } 0 < \alpha_i^* < C}$$

---

_Notes extraites du cours Pr. N. Azouagh, tableau (photos 1–6) et du fichier `Cours_SVM_2025_AZOUAGH.pdf`._![[Cours_SVM_2025_AZOUAGH.pdf]]