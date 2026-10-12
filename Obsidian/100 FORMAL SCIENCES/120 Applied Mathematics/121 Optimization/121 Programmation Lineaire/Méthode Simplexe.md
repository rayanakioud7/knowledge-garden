Date: 2026-01-20
Tags: [[Mathematics]], [[Data Science]], [[Optimization]], [[Linear Programming]]

---
# ~={red} Notes=~

## Formalisation Mathématique (Forme Canonique)
Avant de définir le DSA, tout programme linéaire doit être posé sous forme canonique. Il se compose de trois parties distinctes :

$$
\begin{cases}
\text{Maximiser } Z = c_1x_1 + c_2x_2 + ... + c_nx_n & (\text{Fonction Économique}) \\
\text{Sous contraintes :} \\
a_{11}x_1 + ... + a_{1n}x_n \leq b_1 \\
... & (\text{Contraintes Techniques}) \\
a_{m1}x_1 + ... + a_{mn}x_n \leq b_m \\
x_1, ..., x_n \geq 0 & (\text{Contraintes de Non-négativité})
\end{cases}
$$

* **Fonction Économique (Objectif) :** C'est la fonction $Z$ que l'on cherche à optimiser (Maximiser pour simplexe).
* **Contraintes Techniques :** Les limites de ressources (temps, matière première) exprimées par des inéquations ($\leq$ pour simplex).
* **Non-négativité :** Essentiel pour que les variables aient un sens physique (on ne produit pas de quantités négatives).
## 1. Principe Fondamental
Le Simplexe est une méthode itérative qui explore les **sommets** du DSA.
* **Départ :** On commence généralement à l'origine ($0,0$).
* **Itération :** On se déplace vers un sommet adjacent qui améliore la fonction objectif $Z$.
* **Arrêt :** On s'arrête quand aucun voisin n'offre de meilleur profit.

---

## 2. Préparation : La Forme Standard

Avant de construire le tableau, il faut transformer les inégalités en égalités.

> [!IMPORTANT] Règle de transformation
> Pour chaque contrainte de type $\leq$, on ajoute une **variable d'écart** ($e_i \geq 0$).
> $$\sum a_{ij}x_j \leq b_i \iff \sum a_{ij}x_j + e_i = b_i$$

* **Fonction Objectif :** $Max(Z) \iff Z - \sum c_j x_j = 0$
* **Base Initiale :** Elle est constituée uniquement des variables d'écart.

---

## 3. L'Algorithme (Pas à Pas)

### Étape A : Test d'Optimalité (Ligne $C_j - Z_j$)
Regarder la ligne de la fonction objectif.
* **Cas Maximisation :** Si tous les coefficients sont $\leq 0$, la solution actuelle est **OPTIMALE**. Arrêt.
* Sinon, on continue.

### Étape B : Choix de la Variable Entrante (Colonne Pivot)
Quelle variable va entrer dans la base pour augmenter $Z$ ?
* **Règle :** Choisir la variable avec le **coefficient positif le plus grand** dans la ligne du $Z$.
* *Intuition :* C'est celle qui rapporte le plus par unité produite.

### Étape C : Choix de la Variable Sortante (Ligne Pivot)
Quelle variable (ressource) va atteindre sa limite en premier ?
* Calculer le **Ratio** pour chaque ligne $i$ : $R_i = \frac{\text{RHS}_i}{\text{Coef de la colonne pivot}}$.
* **Règle :** Choisir la ligne avec le **Ratio positif le plus petit**.
* *Attention :* Ne jamais choisir un ratio négatif ou une division par zéro.
### Étape D : Le Pivotage (Pivot de [[Carl Friedrich Gauss|Gauss]])
L'intersection de la Colonne Entrante et de la Ligne Sortante donne le **Pivot** ($P$).

1.  **Normaliser la Ligne Pivot :**
$$L_{pivot}^{new} = L_{pivot}^{old} / P$$
2.  **Annuler les autres coefficients de la colonne :**
    Pour toutes les autres lignes $L_i$ (y compris la ligne $Z$) :
$$L_i^{new} = L_i^{old} - (C \times L_{pivot}^{new})$$
    *Où $C$ est le coefficient qui se trouve dans la colonne pivot de la ligne $L_i$.*

![[Pasted image 20260202235109.png|center]]

---

## 4. Structure du Tableau

| Base    | $x_1$  | $x_2$  | $.$ | $.$ | RHS (Valeur) |
| :------ | :----: | :----: | :-: | :-: | :----------: |
| $e_1$   |  ...   |  ...   |  1  |  0  |    $b_1$     |
| $e_2$   |  ...   |  ...   |  0  |  1  |    $b_2$     |
| **$Z$** | $-c_1$ | $-c_2$ |  0  |  0  |      0       |


| Base    |  $.$   |  $.$   | $e_1$ | $e_2$ | RHS (Valeur) |
| :------ | :----: | :----: | :---: | :---: | :----------: |
| $x_2$   |  ...   |  ...   |   1   |   0   |    $b_1$     |
| $x_1$   |  ...   |  ...   |   0   |   1   |    $b_2$     |
| **$Z$** | $-c_1$ | $-c_2$ |   0   |   0   |      0       |


## 5. Cas Particuliers à surveiller

> [!WARNING] Pièges Fréquents
> 1.  **Minimisation :** Transformer le problème en $Max(-Z)$. À la fin, ne pas oublier que $Z_{min} = -Z_{max}$.
> 2.  **Dégénérescence :** Si on a une égalité de Ratios minimums. On choisit arbitrairement, mais cela peut ralentir la convergence.
> 3.  **Non Borné :** Si dans la colonne pivot, tous les coefficients sont $\leq 0$, on ne peut pas calculer de ratio positif. La solution est infinie (le problème est mal posé).

---

## 6. Variables Duales (Shadow Prices)
Une fois le tableau optimal atteint, les valeurs qui se trouvent dans la ligne $Z$ sous les colonnes des **variables d'écart initiales** ($e_i$) correspondent aux variables du problème Dual ($y_i$).
* Cela représente la **valeur marginale** de la ressource : combien je gagnerais en plus si j'avais 1 unité de plus de cette ressource.

# ~={red}References=~
