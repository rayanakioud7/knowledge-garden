Date: 2026-04-16
Tags: [[CNN]], [[Deep Learning]], [[Convolution]], [[Neural Networks]]

---

## 1. L'Idée : Convolution 1D
La convolution est une opération mathématique qui produit une nouvelle liste de nombres (sortie) à partir d'une liste d'entrée et d'un **motif** (ou noyau/kernel).

### Algorithme de Calcul (Produit Tronqué)
La sortie est de **même taille** que l'entrée. Le calcul se fait en 3 étapes :
1. **Renverser le motif** (miroir).
2. **Centrer** le motif renversé sous la position à calculer dans la liste d'entrée.
3. **Multiplier** terme à terme et faire la **somme**.
*(Note : On ajoute des "zéros virtuels" aux bords de la liste d'entrée pour calculer les coefficients extrêmes).*

> [!example]+ Exemple de Calcul : $[1, 0, 3, 5, 1] * [1, 2, 3]$
> Motif initial : $[1, 2, 3]$ $\rightarrow$ Motif renversé : $[3, 2, 1]$
> - Position 1 : $(0 \times 3) + (1 \times 2) + (0 \times 1) = 2$
> - Position 2 : $(1 \times 3) + (0 \times 2) + (3 \times 1) = 6$
> - Position 3 : $(0 \times 3) + (3 \times 2) + (5 \times 1) = 11$
> - Position 4 : $(3 \times 3) + (5 \times 2) + (1 \times 1) = 20$
> - Position 5 : $(5 \times 3) + (1 \times 2) + (0 \times 1) = 17$
> **Résultat :** $[2, 6, 11, 20, 17]$

> [!image] Schéma visuel 1D
> ![[Pasted image 20260416174219.png]]
>  des "zéros virtuels" aux bords:
> ![[Pasted image 20260416174347.png]]



> [!warning] Règle des Motifs de Longueur Paire
> Si le motif a une longueur paire (ex: $[4, 5]$), on **ajoute un 0 au début** avant de le renverser.
> $[4, 5] \rightarrow [0, 4, 5] \rightarrow$ Motif renversé utilisé : $[5, 4, 0]$.
> *Le zéro ajouté se retrouve à droite après le renversement !*
> ![[Pasted image 20260416174512.png]]

### Exemples d'Effets de Motifs (1D)
- **Lissage (Moyenne mobile) :** $\frac{1}{n} [1, 1, \dots, 1]$. Supprime le bruit d'un signal.
	- ![[Pasted image 20260416174550.png]]
	
- **Homothétie :** $[k]$. Multiplie toute la liste par $k$.
		![[Pasted image 20260416174648.png]]

- **Translation :** $[0, 0, 1]$. Décale la liste d'un cran à droite.
		![[Pasted image 20260416174705.png]]

- **Dérivée discrète :** $[0, 1, -1]$. Calcule $f(n+1) - f(n)$ (taux d'accroissement).
	- ![[Pasted image 20260416174618.png]]

---

## 2. Convolution et Réseaux de Neurones
Pourquoi utiliser la convolution dans l'IA ? **Pour réduire drastiquement le nombre de paramètres.**

### Le Neurone de Convolution
Un neurone de convolution pour un motif $[a, b, c]$ possède 3 entrées et 3 poids. La sortie est : $s = xc + yb + za$ (auquel on peut ajouter une fonction d'activation $\phi$).

![[Pasted image 20260416174839.png]]
### Avantage : Partage des Poids (Weight Sharing)
Dans une **couche complètement connectée** de $n$ neurones avec $n$ entrées : il y a $n^2$ poids à calculer.
Dans une **couche de convolution** de taille 3 sur une entrée de taille $n$ : il y a seulement **3 poids** à calculer, partagés par tous les $n$ neurones de la couche.

> [!image] Comparaison des couches
> ![[Pasted image 20260416174805.png]]

---

## 3. Définition Mathématique Formelle
Pour deux suites $f(n)$ et $g(n)$, le produit de convolution est :
$$ f * g(n) = \sum_{k=-\infty}^{+\infty} f(n-k) \cdot g(k) $$

Si $g(k)$ est non nul uniquement pour $k \in [-K, +K]$, la formule se réduit à :
$$ f * g(n) = \sum_{k=-K}^{+K} f(n-k) \cdot g(k) $$

### Exemple $f * g(1)$ avec $k \in [-1,0,1]$
![[Pasted image 20260416175003.png]]

> [!tip] Propriété de Symétrie
> Le produit de convolution est symétrique : $f * g(n) = g * f(n)$.
> *(C'est pour cette cohérence mathématique et historique du traitement du signal que l'on "retourne" le motif).*

**Vocabulaire :** Le motif s'appelle aussi **Noyau** (Kernel), **Masque** (Mask) ou **Filtre** (Filter).

---

## 4. Opérations sur les Matrices (2D)
Avant de passer à la 2D, rappels matriciels basiques (somme terme à terme, multiplication par scalaire). La multiplication matricielle classique *n'est pas* terme à terme.

### Le Pooling (Sous-échantillonnage)
Le pooling de taille $k$ transforme une matrice $n \times p$ en une matrice $(n//k) \times (p//k)$ en découpant la matrice en blocs $k \times k$.

| Type de Pooling | Action sur un bloc $k \times k$ | Utilité |
| :--- | :--- | :--- |
| **Max-Pooling** | Garde la valeur maximale | Détecte la *présence* d'une caractéristique (ex: pixel blanc). |
| **Average-Pooling** | Garde la moyenne des valeurs | Prend en compte *tous* les termes (ex: couleur moyenne du ciel). |

> [!image] Exemples de Pooling
> ![[Pasted image 20260416175543.png]]
> ![[Pasted image 20260416175554.png]]

---

## 5. Convolution 2D
Même principe qu'en 1D, mais appliqué à une matrice d'entrée $A$ et un motif (matrice) $M$.

![[Pasted image 20260416175714.png|center|400]]

### Algorithme 2D
1. **Retourner la matrice $M$** (Rotation de 180°, *ce n'est pas une transposition*).
2. **Centrer** $M$ retournée sur le coefficient à calculer de $A$.
3. **Multiplier** les coefficients superposés et **additionner**.
4. Ajouter des **zéros virtuels** sur les bords de $A$.

> [!warning] Motif 2D de dimension paire
> Si $M$ est de taille paire (ex: $2 \times 2$), on ajoute des zéros virtuels à gauche et en haut de $M$ **avant** de le retourner.

> [!example]+ Exemple de Calcul 2D Complet
> $$ \begin{bmatrix} 2 & 1 & 3 & 0 \\ 1 & 1 & 0 & 5 \\ 3 & 3 & 1 & 0 \\ 2 & 0 & 0 & 2 \end{bmatrix} * \begin{bmatrix} 1 & 0 & 2 \\ 2 & 1 & 0 \\ 1 & 0 & 3 \end{bmatrix} $$
> *Étape 1 : On retourne $M \rightarrow \begin{bmatrix} 3 & 0 & 1 \\ 0 & 1 & 2 \\ 2 & 0 & 1 \end{bmatrix}$*
> *Étape 2 : Calcul du coeff [0,0] avec zéros virtuels : $(0\times3 + 0\times0 + 0\times1 + 0\times0 + 2\times1 + 1\times2 + 0\times2 + 1\times0 + 1\times1) = \mathbf{5}$*
> 
> ![[Pasted image 20260416175814.png]]
> 
> ![[Pasted image 20260416175854.png]]
> ![[Pasted image 20260416175931.png]]
> **Résultat final :**
> $$ \begin{bmatrix} 5 & 9 & 10 & 0 \\ 7 & 17 & 19 & 16 \\ 10 & 12 & 11 & 0 \\ 5 & 10 & 13 & 5 \end{bmatrix} $$

***

### Exemples de Motifs 2D Fondamentaux

Pour bien comprendre l'impact de la convolution 2D, voici deux motifs classiques illustrant des transformations géométriques et statistiques basiques.

#### 1. Translation (Décalage)
La convolution permet de décaler les coefficients d'une matrice selon la position du "1" dans le motif. 
- **Translation vers le bas :** Utilise le motif $M = \begin{pmatrix} 0&0&0\\ 0&0&0\\ 0&1&0\end{pmatrix}$
- **Translation vers la droite :** Utilise le motif $M = \begin{pmatrix} 0&0&0\\ 0&0&1\\ 0&0&0\end{pmatrix}$

> [!example]+ Exemple de Translation vers le bas
> $$ \begin{pmatrix} 1&2&3&4\\ 5&6&7&8\\ 9&10&11&12\\ 13&14&15&16 \end{pmatrix} * \begin{pmatrix} 0&0&0\\ 0&0&0\\ 0&1&0\end{pmatrix} = \begin{pmatrix} 0&0&0&0\\ 1&2&3&4\\ 5&6&7&8\\ 9&10&11&12\end{pmatrix} $$
> *La dernier ligne $(13\:14\:15\:16)$ disparaît, tandis que des zéros apparaissent sur la première ligne (effet des zéros virtuels).*

#### 2. Moyenne (Lissage / Flou)
Le motif de moyenne effectue une moyenne locale des coefficients voisins. C'est le principe de base du **flou** (blur), qui sert principalement à réduire le bruit d'une image.

Le motif standard pour un voisinage de taille $3 \times 3$ est :
$$ M = \frac{1}{9} \begin{pmatrix} 1&1&1\\ 1&1&1\\ 1&1&1\end{pmatrix} $$

> [!example]+ Exemple de calcul de Moyenne
> En appliquant ce filtre, la valeur d'un pixel est remplacée par la moyenne des 9 pixels qui l'entourent (lui inclus).
> $$ \begin{pmatrix} 1&2&3&4&5\\ 6&7&8&9&10\\ 11&12&13&14&15\\ 16&17&18&19&20\\ 21&22&23&24&25 \end{pmatrix} * \frac{1}{9}\begin{pmatrix} 1&1&1\\ 1&1&1\\ 1&1&1\end{pmatrix} \approx \begin{pmatrix} 1.77&3&3.66&4.33&3.11\\ 4.33&7&8&9&6.33\\ 7.66&12&13&14&9.66\\ 11&17&18&19&13\\ 8.44&13&13.66&14.33&9.77 \end{pmatrix} $$

---

## 6. Architecture d'un Réseau de Neurones Convolutif (CNN)

### Neurone et Couche de Convolution 2D
- **Neurone :** Possède $p \times q$ entrées (les poids sont les coeffs du motif $M$). Calcule la somme des produits avec la sous-matrice correspondante de $A$.
- **Couche :** Pour une entrée $n \times p$, il y a $np$ neurones. **Mais il n'y a que 9 poids différents** (si motif $3\times3$), car les poids sont partagés !

![[Pasted image 20260416181400.png|center|400]]

![[Pasted image 20260416181413.png|center|400]]
### Gestion de la Profondeur (Canaux)
Pour traiter des images couleur (RVB = 3 canaux) ou les sorties de couches précédentes :
- **Entrée :** $A = (A_1, A_2, \dots, A_k)$ de taille $(n, p, k)$.
- **Motif :** N'est plus une matrice, mais un **3-Tenseur** de taille $(3, 3, k)$.
- **Sortie :** Une matrice de taille $(n, p)$.
![[Pasted image 20260416181529.png]]
### Filtres Multiples
En pratique, une couche utilise $\ell$ motifs différents $(M_1, M_2, \dots, M_\ell)$.
- Si l'entrée est de taille $(n, p, k)$ et qu'on a $\ell$ filtres de taille $(3, 3, k)$.
- **La sortie sera un 3-Tenseur de taille $(n, p, \ell)$**.

> [!image] Schémas CNN Architecture
> 
> 1. **Plusieurs filtres** (Une entrée A vers plusieurs sorties $A*M_i$)
> 	![[Pasted image 20260416181733.png]]
> 2. **Plusieurs canaux** (Les matrices $A_1 \dots A_k$ convergeant vers une seule sortie $A*M$)
>![[Pasted image 20260416181952.png]]
> 3. **Le cas général** (Plusieurs canaux + Plusieurs filtres = Tenseur final)
>  ![[Pasted image 20260416181701.png]]

### Autres Couches Essentielles
- **Couche d'Activation :** Applique $\phi$ (ReLU, $\sigma$) à *chaque coefficient* individuellement de la matrice de sortie.
- **Dropout :** Technique anti-surapprentissage. Désactive aléatoirement des neurones (et leurs arêtes) lors de l'entraînement (ex: probabilité $1/2$).

---

## 7. Application : Traitement d'Images (Niveaux de gris)
Une image = Matrice (0 à 255). Le choix du motif $M$ (filtre) détermine la transformation de l'image.

> [!image] Exemples Visuels de Filtres
> ![[Pasted image 20260416182046.png]]
> ![[Pasted image 20260416182109.png]]
> ![[Pasted image 20260416182147.png]]

| Effet désiré | Matrice du Motif $M$ | Explication |
| :--- | :--- | :--- |
| **Flou (Blur)** | $$ \frac{1}{9} \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix} $$ | Remplace le pixel par la moyenne de ses voisins. Réduit le bruit. *(Variantes : Flou Gaussien $\frac{1}{16}\begin{bmatrix}1&2&1\\2&4&2\\1&2&1\end{bmatrix}$)* |
| **Piqué (Sharpen)** | $$ \begin{bmatrix} 0 & -1 & 0 \\ -1 & 5 & -1 \\ 0 & -1 & 0 \end{bmatrix} $$ | Accentue les différences entre un pixel et ses voisins. |
| **Contours (Bords)** | $$ \begin{bmatrix} -1 & -1 & -1 \\ -1 & 8 & -1 \\ -1 & -1 & -1 \end{bmatrix} $$ | Le centre est très positif, le pourtour négatif $\rightarrow$ isole les ruptures. |
| **Lignes Verticales** | $$ \begin{bmatrix} -1 & 2 & -1 \\ -1 & 2 & -1 \\ -1 & 2 & -1 \end{bmatrix} $$ | Détecte des variations verticales fortes. |
| **Relief** | $$ \begin{bmatrix} -2 & -1 & 0 \\ -1 & 1 & 1 \\ 0 & 1 & 2 \end{bmatrix}$$ | Joue sur les ombres (pixels à gauche négatifs, à droite positifs). |

==**FIN**==

***

**~={red}References=~** : [[CNN_plus_explication.pdf]]
## 8. Compréhension Intuitive : La "Physique" des Filtres 2D

Au-delà de la formule mathématique, il est crucial de comprendre **pourquoi** les coefficients des noyaux sont choisis ainsi. Tout repose sur le concept de **moyenne pondérée** et de **variation**.

### A. Le Filtre de Flou (Blur)
**Noyau :** $$ K = \frac{1}{9} \begin{pmatrix} 1&1&1\\ 1&1&1\\ 1&1&1\end{pmatrix} $$
- **Logique :** Tous les pixels (centre + 8 voisins) ont le même poids (1). On somme et on divise par 9.
- **Effet :** On effectue une moyenne locale. Les variations brutales (le bruit) sont lissées, d'où l'image floue.

### B. Le Filtre de Renforcement (Piqué / Sharpen)
**Noyau :** $$ K = \begin{pmatrix} 0&-1&0\\ -1&5&-1\\ 0&-1&0\end{pmatrix} $$
- **Logique mathématique :** Le résultat pour un pixel correspond à $5 \times \text{centre} - 4 \times \text{moyenne\_des\_voisins}$. Autrement dit : $\text{Image} + \text{Différences\_locales}$.

> [!warning] Piège classique d'interprétation (Très important !)
> **Cas uniforme (tous les pixels = $c$) :** $5c - 4c = c$.
> *Conclusion incorrecte :* "Les valeurs s'annulent".
> *Correction du prof :* **Ce n'est pas la valeur qui s'annule, c'est la variation qui disparaît !** Le filtre conserve parfaitement les zones uniformes.

> [!example]+ Cas non uniforme
> Si le pixel central vaut $150$ et que ses 4 voisins valent $100$ :
> $5(150) - 4(100) = 750 - 400 = \mathbf{350}$
> Le contraste est énormément amplifié (on passe de 150 à 350), d'où l'effet "piqué".

### C. Filtres de Contours Directionnels
Ces filtres ne comparent que deux côtés opposés d'un pixel.

| Direction | Noyau $K$ | Logique |
| :--- | :--- | :--- |
| **Vertical** | $$ \begin{pmatrix} -1&0&1\\ -1&0&1\\ -1&0&1\end{pmatrix} $$ | Compare la **Gauche** (-1) à la **Droite** (+1). Si Gauche = Droite $\rightarrow$ Résultat = 0. |
| **Horizontal** | $$ \begin{pmatrix} -1&-1&-1\\ 0&0&0\\ 1&1&1\end{pmatrix} $$ | Compare le **Haut** (-1) au **Bas** (+1). |

### D. Détection des Bords (Cas Général - Isotrope)
Contrairement aux filtres précédents, celui-ci détecte les bords **dans toutes les directions** en même temps.

**Noyau :** $$ K = \begin{pmatrix} -1&-1&-1\\ -1&8&-1\\ -1&-1&-1\end{pmatrix} $$

- **Pourquoi un 8 au centre ?** Parce qu'un pixel a exactement 8 voisins ! L'opération effectuée est : $8 \times \text{centre} - \sum\text{voisins}$. On vérifie bien que la somme des coefficients $= 8 - 8 = 0$.
- **Cas uniforme ($c$) :** $8c - 8c = 0$ (Aucun bord détecté).
- **Cas non uniforme :** Centre = 200, Voisins = 100 $\rightarrow 8(200) - 8(100) = \mathbf{800}$ (Très forte réponse $\rightarrow$ Bord détecté).

> [!info] Lien mathématique (Lien avec le cours de Maths)
> Ce filtre n'est pas choisi au hasard : c'est l'approximation discrète du **Laplacien** ($\Delta I(x,y)$).
> - En maths : $\Delta I = 0$ caractérise les zones uniformes.
> - En maths : $\Delta I \neq 0$ caractérise les variations.
> *(Note : Il existe une variante à 4 voisins $\begin{pmatrix} 0&-1&0\\ -1&4&-1\\ 0&-1&0\end{pmatrix}$ qui est moins sensible aux diagonales).*


---

###  Résumé des Filtres pour l'Examen

| Type d'effet | Formule conceptuelle | Comportement sur zone uniforme |
| :--- | :--- | :--- |
| **Flou** | Moyenne des pixels | Conserve la valeur (lisse) |
| **Piqué** | Image + Différences locales | Conserve la valeur (variation = 0) |
| **Contours (Dir.)** | Différences directionnelles | Donne $0$ |
| **Bords (Laplacien)** | Différences globales ($8c - \sum v$) | Donne $0$ |
