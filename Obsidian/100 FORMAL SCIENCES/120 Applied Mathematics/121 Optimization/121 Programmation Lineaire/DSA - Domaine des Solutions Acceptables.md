Date: 2026-01-20
Tags: [[Mathematics]], [[Data Science]], [[Geometry]], [[Optimization]], [[Linear Programming]]

---
# ~={red} Notes=~


## 1. Formalisation Mathématique (Forme Canonique)
Avant de définir le DSA, tout programme linéaire doit être posé sous forme canonique. Il se compose de trois parties distinctes :

$$
\begin{cases}
\text{Maximiser (ou Min) } Z = c_1x_1 + c_2x_2 & (\text{Fonction Économique}) \\
\text{Sous contraintes :} \\
a_{11}x_1 + a_{12}x_2 \leq b_1 \\
... & (\text{Contraintes Techniques}) \\
x_1, x_2 \geq 0 & (\text{Non-négativité})
\end{cases}
$$

* **Fonction Économique :** La fonction $Z$ à optimiser.
* **Contraintes Techniques :** Les limites de ressources.
* **Non-négativité :** $x \geq 0$ (On travaille dans le premier quadrant).

---

## 2. Définition du DSA
Le **DSA** (Domaine des Solutions Acceptables) est l'ensemble géométrique des points qui respectent **toutes** les contraintes simultanément.

> [!INFO] Géométrie
> C'est un **polygone convexe** intersection de plusieurs demi-plans.

![[Pasted image 20260202234839.png|center]]

---

## 3. Construction Graphique (Méthode)

> [!WARNING] Limitation
> Cette méthode est strictement réservée aux problèmes à **2 variables**.

1.  **Tracer les axes :** $x_1$ (abscisse) et $x_2$ (ordonnée).
2.  **Tracer les droites :** Transformer chaque inéquation ($ax_1+bx_2 \leq c$) en équation de droite ($ax_1+bx_2 = c$). Trouver 2 points pour tracer.
3.  **Hachurer la zone interdite :** Utiliser un point test (ex: $0,0$) pour savoir quel côté de la droite éliminer.
4.  **Résultat :** La zone blanche restante est le DSA.

![[Pasted image 20260120190738.png|center]]

---

## 4. Théorème Fondamental des Sommets
> [!TIP] Théorème
> Si une solution optimale existe, elle se trouve obligatoirement sur l'un des **sommets** (les coins) du polygone DSA.

---

## 5. Résolution Finale : Deux Approches

Une fois le DSA tracé, il existe deux méthodes pour trouver l'optimum.

### A. Méthode Enumérative (Calculatoire)
C'est la méthode la plus fiable pour éviter les erreurs de lecture graphique.
1.  **Lister** tous les sommets du DSA (A, B, C, D...).
2.  **Calculer** leurs coordonnées exactes (en résolvant les systèmes d'équations si nécessaire).
3.  **Évaluer $Z$** pour chaque sommet.
4.  Choisir le meilleur.

| Sommet | Coordonnées $(x_1, x_2)$ | Valeur de $Z$ | Décision |
| :--- | :--- | :--- | :--- |
| A | $(0, 5)$ | $10$ | |
| B | $(2, 4)$ | $25$ | **Max ?** |
| C | $(0, 0)$ | $0$ | |

### B. Méthode Analytique (Visuelle / Droites de niveau)
On utilise la pente de la fonction économique.
1.  Tracer une droite arbitraire de la fonction objectif (ex: $Z = 0 \Rightarrow c_1x_1 + c_2x_2 = 0$).
2.  Déplacer cette droite parallèlement (translation).

> [!SUCCESS] Règle de Décision
> * **Pour la MAXIMISATION :** On déplace la droite le plus loin possible dans le sens du gradient. Le **dernier point** touché avant de sortir du DSA est l'optimum (la droite la plus **éloignée** de l'origine).
> * **Pour la MINIMISATION :** On déplace la droite vers l'origine. Le **premier point** touché en entrant dans le DSA est l'optimum (la droite la plus **proche** de l'origine).

---

## 6. Cas Particuliers

| Cas | Conséquence |
| :--- | :--- |
| **DSA Vide** | Pas de solution (contraintes incompatibles). |
| **DSA Non Borné** | Solution infinie possible. |
| **Solutions Multiples** | Si la droite de la fonction économique est **parallèle** à un côté du DSA, alors tout le segment entre deux sommets est optimal. |

# ~={red}References=~