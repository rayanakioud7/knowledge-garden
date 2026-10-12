Date: 2026-01-20
Tags: [[Mathematics]], [[Data Science]], [[Optimization]]

# ~={red} Notes=~

## 1. Principe Général
La méthode du gradient est un algorithme itératif pour trouver le minimum local d'une fonction différentiable $f(X)$. L'idée est de se déplacer dans la direction opposée au gradient (la pente la plus raide).

![[Pasted image 20260202235407.png|center]]

**Formule de récurrence :**
$$X^{(k+1)} = X^{(k)} - \alpha_k \nabla f(X^{(k)})$$

* $X^{(k)}$ : Position actuelle.
* $\nabla f(X^{(k)})$ : Vecteur gradient (direction de la plus forte pente).
* $\alpha_k$ : Le **pas** (learning rate). C'est la *longueur* du déplacement.

---

## 2. Gradient à Pas Fixe

> [!SUMMARY] Concept
> On choisit une valeur $\alpha$ constante dès le début (ex: $\alpha = 0.1$) et on ne la change jamais.

![[Pasted image 20260202235342.png|center]]
### Algorithme
1.  Choisir un point de départ $X^{(0)}$.
2.  Choisir un pas $\alpha$ (ex: 0.01).
3.  Tant que $||\nabla f|| > \epsilon$ (seuil de tolérance) :
    * Calculer le gradient $g_k = \nabla f(X^{(k)})$.
    * Mettre à jour : $X^{(k+1)} = X^{(k)} - \alpha \cdot g_k$.

### Avantages et Inconvénients
* ✅ **Simple** à coder.
* ✅ Peu coûteux en calcul par itération.
* ❌ **Risqué :**
    * Si $\alpha$ trop petit : convergence très lente.
    * Si $\alpha$ trop grand : risque de divergence (l'algorithme "saute" par-dessus le minimum).

---

## 3. Gradient à Pas Optimal (Steepest Descent)

> [!SUMMARY] Concept
> À chaque itération, on calcule le "meilleur" $\alpha_k$ possible. On cherche à minimiser la fonction le long de la direction du gradient avant de changer de direction.

![[Pasted image 20260202235309.png|center]]
### Calcul du Pas Optimal (Cas Quadratique)
Pour une fonction quadratique de forme $f(X) = \frac{1}{2}X^T H X + B^T X + C$ (où $H$ est la matrice Hessienne), le pas optimal se calcule analytiquement :

$$\alpha_k = \frac{g_k^T g_k}{g_k^T H g_k}$$

* $g_k$ : le gradient à l'étape $k$.
* $H$ : la matrice Hessienne (dérivées secondes).

### Algorithme
1.  Calculer le gradient $g_k$.
2.  Calculer $\alpha_k$ via la formule ci-dessus.
3.  Mettre à jour : $X^{(k+1)} = X^{(k)} - \alpha_k \cdot g_k$.

### Propriété Géométrique
Les directions successives sont **orthogonales** entre elles ($g_{k+1} \perp g_k$). Cela crée une trajectoire en "zig-zag" vers le minimum.

---

## 4. Exemple Comparatif

Soit la fonction simple : $f(x) = x^2$. (Minimum en $x=0$, Gradient $f'(x) = 2x$).
Départ $x_0 = 2$.

| Méthode         | Paramètre      | Itération 1                                                                                                        | Itération 2                     | Observation                           |
| :-------------- | :------------- | :----------------------------------------------------------------------------------------------------------------- | :------------------------------ | :------------------------------------ |
| **Pas Fixe**    | $\alpha = 0.1$ | $x_1 = 2 - 0.1(4) = 1.6$                                                                                           | $x_2 = 1.6 - 0.1(3.2) = 1.28$   | Approche doucement de 0.              |
| **Pas Fixe**    | $\alpha = 1.1$ | $x_1 = 2 - 1.1(4) = -2.4$                                                                                          | $x_2 = -2.4 - 1.1(-4.8) = 2.88$ | **Diverge** (s'éloigne de 0).         |
| **Pas Optimal** | Calculé        | Le calcul donnerait directement le saut parfait vers le fond de la parabole en 1 étape pour une parabole parfaite. |                                 | Convergence immédiate (cas idéal 1D). |

---

## 5. Code Matlab (Snippet)

```matlab
% Pas Fixe
X = X - alpha * grad;

% Pas Optimal (Quadratique)
g = grad(X);
alpha_opt = (g' * g) / (g' * H * g);
X = X - alpha_opt * g;
```
# ~={red}References=~
