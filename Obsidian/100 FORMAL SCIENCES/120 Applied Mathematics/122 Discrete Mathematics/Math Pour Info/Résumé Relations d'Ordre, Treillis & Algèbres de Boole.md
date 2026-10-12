

**Tags :** [[Mathematics]] [[Algebra]] [[Cheat sheet]]

---

## 1. Relation d'Ordre : Les Formules
Une relation binaire (matrice $M$) est un ordre si :
* **Réflexive :** $Id_E \subset \mathcal{R}$ (Diagonale complète : $\forall i, M_{ii}=1$).
* **Antisymétrique :** $M_{ij}=1 \implies M_{ji}=0$ (pour $i \neq j$).
* **Transitive :** $M^2 \le M$ (Produit matriciel booléen inclus dans $M$).

---

## 2. Identifier la Nature du Treillis (Au coup d'œil)

| Forme du Diagramme                                            | Distributif ? | Complémenté ? | Type                  |                                      |
| :------------------------------------------------------------ | :-----------: | :-----------: | :-------------------- | ------------------------------------ |
| **Chaîne (Ligne)**<br>*(Ordre Total)*                         |   ✅ **OUI**   |   ❌ **NON**   | Treillis simple       |                                      |
| **Diamant ($M_3$)**<br>*(3 chemins distincts)*                |   ❌ **NON**   |   ✅ **OUI**   | Non-Distributif       | ![[Pasted image 20260209215650.png]] |
| **Pentagone ($N_5$)**<br>*(Détour asymétrique)*               |   ❌ **NON**   |   ❌ **NON**   | Non-Distributif       | ![[Pasted image 20260209215712.png]] |
| **Diviseurs avec Puissances**<br>*($N = p^2 q$, $p^3$, etc.)* |   ✅ **OUI**   |   ❌ **NON**   | Treillis de Diviseurs |                                      |
| **Hypercube / Carré**<br>*($N = p \times q \times r$)*        |   ✅ **OUI**   |   ✅ **OUI**   | **Algèbre de Boole**  |                                      |

> **Astuce "Grille" :** Si le diagramme ressemble à une grille ou un volume (diviseurs) mais qu'il y a des "étages" dus aux puissances (ex: $p^2$), ce n'est **pas** complémenté.

---

## 3. Algèbre de Boole (La Règle d'Or)
Un treillis est une Algèbre de Boole s'il est **Distributif + Complémenté**.

### ⚡ Théorème de Stone (Joker Examen)
Pour construire une Algèbre de Boole sur un ensemble fini $E$, il faut impérativement :
$$|E| = 2^n$$
*(Cardinal = 1, 2, 4, 8, 16, 32...)*

**Exemple type :**
* Question : *"Peut-on faire une Algèbre de Boole avec 9 éléments ?"*
* Réponse : **NON**. Car $9$ n'est pas une puissance de $2$.
* Question : *"Avec 8 éléments ?"*
* Réponse : **OUI**. Car $8 = 2^3$. (C'est un cube).

---

## 4. Vocabulaire Flash
* **Atomes :** Les points juste au-dessus du minimum (Base).
* **Incomparables :** Pas de chemin entre eux (ni montant, ni descendant).
* **Sup ($x \vee y$) :** Le plus petit point qui est au-dessus des deux.
* **Inf ($x \wedge y$) :** Le plus grand point qui est en-dessous des deux.