Date: 2026-01-20
Tags: [[Mathematics]], [[Data Science]], [[Optimization]]

# ~={red} Notes=~
## 1. Problème avec Contraintes d'Égalité

**Problème :** Minimiser $f(x)$ sous la contrainte $h(x) = 0$.

> [!INFO] Hypothèse Fondamentale : Point Régulier
> Pour appliquer ces théorèmes, le point candidat $x^*$ doit être **régulier** (ou critique).
> Cela signifie que les gradients des contraintes actives sont linéairement indépendants au point $x^*$.

---

### A. Définitions Préliminaires

#### 1. Fonction de Lagrange
C'est la fonction qui combine l'objectif et les contraintes via les multiplicateurs $\lambda$.
$$L(x, \lambda) = f(x) + \sum_{i=1}^{n} \lambda_i h_i(x)$$


#### 2. Matrice Hessienne du Lagrangien
C'est la courbure combinée de la fonction et des contraintes.
$$H(x, \lambda) = \nabla^2_{xx} L(x, \lambda) = H_f(x) + \sum_{i=1}^{n} \lambda_i H_{h_i}(x)$$
*Où $H_f$ est le Hessien de $f$ et $H_{h_i}$ le Hessien de la contrainte $h_i$.*

---

### B. Conditions d'Optimalité (KKT)

![[Pasted image 20260202235232.png|center]]
#### 1. Condition Nécessaire du 1er Ordre (Stationnarité)
Si $x^*$ est un extremum local (min ou max) et régulier, alors il existe un vecteur de multiplicateurs $\lambda^*$ tel que le gradient du Lagrangien soit nul.

$$
\begin{cases}
\nabla f(x^*) + \sum_{i=1}^n \lambda_i^* \nabla h_i(x^*) = 0 & \text{(Stationnarité)} \\
h(x^*) = 0 & \text{(Admissibilité)}
\end{cases}
$$


---

#### 2. Conditions du 2nd Ordre (Courbure)

Ces conditions portent sur le comportement de la fonction dans l'**Espace Tangent** aux contraintes.

> [!Def] Vecteur Tangent $V$
> Soit $V$ un vecteur non nul ($V \neq 0$) appartenant au plan tangent, c'est-à-dire orthogonal au gradient de la contrainte :
> $$\nabla h(x^*)^T V = 0$$

##### a. Condition Nécessaire (Candidat)
Si $x^*$ est un **minimum local**, alors la courbure dans la direction tangente doit être positive ou nulle :
$$V^T H(x^*, \lambda^*) V \geq 0$$
*(Si c'était un maximum, l'inégalité serait $\leq 0$)*.

##### b. Condition Suffisante (Confirmation)
C'est le test qui confirme la nature du point.

> [!SUCCESS] Test de Minimum Strict
> Si pour tout vecteur tangent $V \neq 0$, on a :
> $$V^T H(x^*, \lambda^*) V > 0$$
> Alors $x^*$ est un **Minimum Local Strict**.

> [!FAILURE] Test de Maximum Strict
> Si pour tout vecteur tangent $V \neq 0$, on a :
> $$V^T H(x^*, \lambda^*) V < 0$$
> Alors $x^*$ est un **Maximum Local Strict**.
---

---
## 2. Problème avec Contraintes d'Inégalité (KKT Général)

**Problème :** $\min f(x)$ sous les contraintes :

- $h(x) = 0$ (Égalité)
    
- $C(x) \leq 0$ (Inégalité)
    

### Définitions Clés

- Lagrangien Généralisé :
    
    $$L(x, \lambda, \mu) = f(x) + \lambda^T h(x) + \mu^T C(x)$$
    
- Hessien Complet :
    
    $$H(x, \lambda, \mu) = H_f(x) + \sum \lambda_i H_{h_i}(x) + \sum \mu_j H_{C_j}(x)$$
    
- **Statut de la contrainte d'inégalité :**
    
    - **Active :** Si $C(x^*) = 0$. (La contrainte sature).
        
    - **Inactive :** Si $C(x^*) < 0$. (La contrainte n'est pas saturée).
        

### Conditions de Karush-Kuhn-Tucker (KKT) - 1er Ordre

Si $x^*$ est un minimum local et un point régulier, il existe des vecteurs $\lambda^*$ et $\mu^*$ tels que :

1. Stationnarité du Lagrangien :
    
    $$\nabla f(x^*) + \nabla h(x^*) \lambda^* + \nabla C(x^*) \mu^* = 0$$
    
2. Admissibilité Primale (Respect des contraintes) :
    
    $$h(x^*) = 0 \quad \text{et} \quad C(x^*) \leq 0$$
    
3. Admissibilité Duale (Signe des multiplicateurs) :
    
    $$\mu^* \geq 0$$
    (Note : $\mu^*$ doit être positif pour un problème de minimisation sous contrainte $\leq$).*
1. Écart de Complémentarité (Exclusion) :
    
    $$\mu^{*T} C(x^*) = 0$$
    
    (Cela implique que soit $\mu^ = 0$, soit $C(x^*) = 0$).*
    


### Conditions Suffisantes du 2nd Ordre (Inégalités)

Pour confirmer la nature du point (Min ou Max), on analyse le Hessien $H(x^*, \lambda^*, \mu^*)$ avec un vecteur $Y$ non nul.

#### Pour un Minimum Strict

Les conditions suivantes doivent être réunies :

1. Les conditions KKT du 1er ordre sont satisfaites avec $\mu^* \geq 0$.
    
2. Complémentarité stricte : $\mu^{*T} C(x^*) = 0$.
    
3. Condition de courbure (Définie Positive) :
    
    Pour tout vecteur $Y \neq 0$ admissible :
    
    $$Y^T H(x^*, \lambda^*, \mu^*) Y > 0$$
    

#### Pour un Maximum Strict

Les conditions suivantes doivent être réunies :

1. Les conditions KKT du 1er ordre sont satisfaites (attention aux signes de $\mu$).
    
2. Complémentarité stricte.
    
3. Condition de courbure (Définie Négative) :
    
    Pour tout vecteur $Y \neq 0$ admissible :
    
    $$Y^T H(x^*, \lambda^*, \mu^*) Y < 0$$

# ~={red}References=~
