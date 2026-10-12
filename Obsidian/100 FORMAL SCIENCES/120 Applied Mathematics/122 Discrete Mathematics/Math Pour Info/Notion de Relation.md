Date: 2026-02-03
Tags: [[Mathematics]], [[Discrete Mathematics]]

# Relations et Ensembles

## 1. Rappels et Logique

### Définitions Préliminaires

> [!INFO] Concepts de base
> **Ensemble :** Collection d'objets (éléments) distincts, complètement déterminée par ces éléments.
>
> **Théorème d'Alembert-Gauss :** L'ensemble $\mathbb{C}$ est algébriquement clos : tout polynôme non constant, à coefficients complexes, admet au moins une racine dans $\mathbb{C}$.

### Logique Propositionnelle

**Implication** ($P \Rightarrow Q$) :
« Si $P$, alors $Q$ ».
*Note :* Si $P$ est fausse, l'implication est toujours vraie (principe de "Ex falso quodlibet").

| $P$ | $Q$ | $P \Rightarrow Q$ |
| :-: | :-: | :---------------: |
|  V  |  V  |       **V** |
|  V  |  F  |       **F** |
|  F  |  V  |       **V** |
|  F  |  F  |       **V** |

---

## 2. Généralités sur les Relations

**Définition :** Une relation est un lien entre deux ensembles.

![[Relation#^frame=relation|center]]

### Graphe d'une relation
Soit $\mathfrak{R}$ une relation entre un ensemble $E$ et un ensemble $F$. Le graphe de $\mathfrak{R}$, noté $G_R$, est le sous-ensemble de $E \times F$ défini par :
$$
G_R := \{(x,y) \in E \times F \mid x\mathfrak{R}y\}
$$

> [!SUMMARY] En résumé
> Une relation $\mathfrak{R}$ entre les éléments d'un ensemble $E$ et d'un ensemble $F$ est définie par une **partie du produit cartésien** $E \times F$.
>
> **Notation :** On écrit $x\mathfrak{R}y$ pour signifier $(x,y) \in G_R$.
> * Si $E=F$, la relation est dite **Relation Binaire** (ou relation interne).

---

## 3. Relation Binaire

> [!DEF] Définition
> Une relation **binaire** $\mathfrak{R}$ sur un ensemble $E$ est une partie de $E \times E$ (un sous-ensemble du produit cartésien de $E$ par lui-même).



### Cardinalité (Dénombrement)

Si le cardinal de $E$ est $|E|=n$ :
1.  La taille du produit cartésien est : $|E \times E| = n^2$.
2.  Le nombre de relations binaires possibles est le nombre de sous-ensembles de $E \times E$.

$$
|\mathcal{P}(E \times E)| = 2^{n^2}
$$

> [!TIP] Cas général ($A$ vers $B$)
> Si $|A|=n$ et $|B|=m$, alors $|A \times B| = n \times m$.
> Il y a donc **$2^{nm}$** relations possibles entre $A$ et $B$.

### Exemples

1.  **Ensemble fini simple :**
    Soit $E=\{a,b\}$. $|E|=2 \Rightarrow$ il y a $2^{2^2} = 16$ relations binaires possibles.
    $\mathcal{P}(E) = \{\emptyset, \{a\}, \{b\}, \{a,b\}\}$ (Attention: ceci est l'ensemble des parties de E, pas les relations).

2.  **Relation d'ordre (Inégalités) :**
    La relation "$\leq$" est une relation binaire sur $\mathbb{N}$.

3.  **Divisibilité :**
    La relation de divisibilité ("$a$ divise $b$") est une relation d'ordre (partiel) sur $\mathbb{N}$.

4.  **L'Inclusion ($\subseteq$) :**
    Relation sur l'ensemble des parties $\mathcal{P}(E)$.
    ![[Excalidraw/Relation.md#^frame=relation binaire|center|600]]
    
    Exemple pour $E=\{a\}$ (donc $\mathcal{P}(E)=\{\emptyset, \{a\}\}$) :
    $$\subseteq \ = \{(\emptyset, \emptyset), (\emptyset, \{a\}), (\{a\}, \{a\})\}$$

### Relation Complémentaire
C'est la négation de la relation.
* **Définition :** $x \bar{\mathfrak{R}} y \iff (x,y) \notin \mathfrak{R}$.
* **Logique :** Le couple existe dans $\bar{\mathfrak{R}}$ ssi il n'existe pas dans $\mathfrak{R}$.

---

## 4. Représentations

Exemple : La relation de **divisibilité** sur $A=\{1,2,3,4\}$.
$R = \{(1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4)\}$

### A. Diagramme Sagittal
*(Un graphe avec des flèches entre les points)*
![[Excalidraw/Relation.md#^frame=sagital|center|600]]

### B. Diagramme Cartésien (Tableau)
On colore la case si $x\mathfrak{R}y$.

| $\mathfrak{R}$ | 1   | 2   | 3   | 4   |
| -------------- | --- | --- | --- | --- |
| **1**          | ✅  | ✅  | ✅  | ✅  |
| **2**          | .   | ✅  | .   | ✅  |
| **3**          | .   | .   | ✅  | .   |
| **4**          | .   | .   | .   | ✅  |

### C. Matrice de la Relation (Matrice d'Adjacence)

On transforme le diagramme cartésien en matrice $M$ où $m_{ij} = 1$ si $(i, j) \in \mathfrak{R}$, et $0$ sinon.

$$
M_R = \begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & 0 & 1 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$
#### Matrice de L'inverse (Transpose)
La relation inverse note $\mathfrak{R}^{-1}$ est définie par 
$$
x\mathfrak{R}^{-1}y \Leftrightarrow y\mathfrak{R}x
$$
$$
\mathfrak{R}=\{(a,a),(b,b),(c,a)\}
$$
$$
\mathfrak{R}^{-1} =\{(a,a),(b,b)(a,c)\}
$$
$$
\mathfrak{R} = \begin{pmatrix}
1 & 0 & 0  \\
0 & 1 & 0  \\
1 & 0 & 0  
\end{pmatrix}
$$
$$
\mathfrak{R}^{-1} = \begin{pmatrix}
1 & 0 & 1  \\
0 & 1 & 0  \\
0 & 0 & 0  
\end{pmatrix}
$$

$$
\mathfrak{R}^{-1}=\mathfrak{R}^{t}
$$

---
## 5. Produit de Relations (Composition)

### Définition

Soient $\mathfrak{R}$ et $\mathfrak{S}$ deux relations binaires sur un ensemble $E$.
La **composée** (ou le produit) de $\mathfrak{R}$ par $\mathfrak{S}$, notée $\mathfrak{S} \circ \mathfrak{R}$ (se lit "R suivie de S"), est définie par :

> [!NOTE] Définition Formelle
> Le couple $(x, z)$ appartient à la relation composée si et seulement s'il existe un élément intermédiaire $y$ qui fait le "pont".
>
> $$
> x (\mathfrak{S} \circ \mathfrak{R}) z \iff \exists y \in E : (x \mathfrak{R} y \text{ et } y \mathfrak{S} z)
> $$
### Produit Matriciel (Calcul Pratique)

Pour trouver la matrice de la relation composée, on effectue le **produit matriciel booléen** des matrices de chaque relation.

$$
M_{\mathfrak{S} \circ \mathfrak{R}} = M_{\mathfrak{R}} \times M_{\mathfrak{S}}
$$

> [!WARNING] Attention à l'ordre
> Si on veut appliquer $\mathfrak{R}$ **puis** $\mathfrak{S}$, on multiplie la matrice de $\mathfrak{R}$ par celle de $\mathfrak{S}$ (dans cet ordre : $M_R \times M_S$).
> *Note : Dans le calcul booléen : $1+1=1$.*
> 

| +   | 1   | 0   |
| --- | --- | --- |
| 1   | 1   | 1   |
| 0   | 1   | 0   |

| .   | 1   | 0   |
| --- | --- | --- |
| 1   | 1   | 0   |
| 0   | 0   | 0   |

### Exemple Concret

Soit $E = \{1, 2, 3\}$.
* $\mathfrak{R}$ : $1\to 2$ et $2\to 3$
* $\mathfrak{S}$ : $2\to 1$ et $3\to 2$
![[Excalidraw/Relation.md#^frame=vraiii|center|300]]
**Matrices :**
$$
M_{\mathfrak{R}} = 
\begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
\quad
M_{\mathfrak{S}} = 
\begin{pmatrix} 
0 & 0 & 0 \\ 
1 & 0 & 0 \\ 
0 & 1 & 0 
\end{pmatrix}
$$

**Calcul du produit $M_{\mathfrak{S} \circ \mathfrak{R}} = M_{\mathfrak{R}} \times M_{\mathfrak{S}}$ :**
On fait le produit "Ligne par Colonne".

$$
\begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
\times
\begin{pmatrix} 
0 & 0 & 0 \\ 
1 & 0 & 0 \\ 
0 & 1 & 0 
\end{pmatrix}
=
\begin{pmatrix} 
1 & 0 & 0 \\ 
0 & 1 & 0 \\ 
0 & 0 & 0 
\end{pmatrix}
$$

> [!success] Interprétation
> Le résultat montre que :
> * $1 (\mathfrak{S} \circ \mathfrak{R}) 1$ (car $1 \xrightarrow{R} 2 \xrightarrow{S} 1$)
> * $2 (\mathfrak{S} \circ \mathfrak{R}) 2$ (car $2 \xrightarrow{R} 3 \xrightarrow{S} 2$)
> 
> La relation composée "fait une boucle" sur 1 et 2.

### Propriétés du produit
1.  **Associativité :** $(\mathfrak{T} \circ \mathfrak{S}) \circ \mathfrak{R} = \mathfrak{T} \circ (\mathfrak{S} \circ \mathfrak{R})$.
2.  **Non-commutativité :** En général, $\mathfrak{S} \circ \mathfrak{R} \neq \mathfrak{R} \circ \mathfrak{S}$.
3.  **Puissance d'une relation :** On note $\mathfrak{R}^2 = \mathfrak{R} \circ \mathfrak{R}$, et par récurrence $\mathfrak{R}^n$. Cela représente les chemins de longueur $n$ dans le graphe.


### Notation Important!
1. 
$$
\mathfrak{R}^+=R \cup R^2 \cup R^3...\cup R^n..
$$
$$
\mathfrak{R}^+=\bigcup_{i>0} \mathfrak{R}^i
$$
2. 
$$
\mathfrak{R}^*= \mathrm{Id_E}\cup \mathfrak{R}^+
$$

#### Exemple de Calcul Matriciel

Prenons un ensemble $E=\{1, 2, 3\}$ et une relation $\mathfrak{R}$ définie par le graphe suivant :
$1 \to 2$ et $2 \to 3$.

##### Étape 1 : Matrice de $\mathfrak{R}$ 
$$
M_{\mathfrak{R}} = 
\begin{pmatrix} 
0 & \mathbf{1} & 0 \\ 
0 & 0 & \mathbf{1} \\ 
0 & 0 & 0 
\end{pmatrix}
$$


##### Étape 2 : Calcul de $\mathfrak{R}^2$ 
On calcule le produit $M_{\mathfrak{R}} \times M_{\mathfrak{R}}$ (booléen).
$$
M_{\mathfrak{R}^2} = 
\begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
\times
\begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
=
\begin{pmatrix} 
0 & 0 & \mathbf{1} \\ 
0 & 0 & 0 \\ 
0 & 0 & 0 
\end{pmatrix}
$$


##### Étape 3 : Calcul de $\mathfrak{R}^3$ 
Ici, $M_{\mathfrak{R}^3}$ sera une matrice nulle (que des 0), car le graphe n'a pas de chemin de longueur 3.

##### Étape 4 : Calcul de la Fermeture Transitive $\mathfrak{R}^+$
C'est la somme booléenne (OU logique) des matrices : $M_{\mathfrak{R}^+} = M_{\mathfrak{R}} + M_{\mathfrak{R}^2} (+ \dots)$

$$
M_{\mathfrak{R}^+} = 
\begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
+
\begin{pmatrix} 
0 & 0 & 1 \\ 
0 & 0 & 0 \\ 
0 & 0 & 0 
\end{pmatrix}+0+0+...
=
\begin{pmatrix} 
0 & \mathbf{1} & \mathbf{1} \\ 
0 & 0 & \mathbf{1} \\ 
0 & 0 & 0 
\end{pmatrix}
$$

##### Étape 5 : Calcul de $\mathfrak{R}^*$
On ajoute l'identité (la diagonale de 1) à $\mathfrak{R}^+$.

$$
M_{\mathfrak{R}^*} = M_{\mathfrak{R}^+} + I_3 = 
\begin{pmatrix} 
0 & 1 & 1 \\ 
0 & 0 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
+
\begin{pmatrix} 
\mathbf{1} & 0 & 0 \\ 
0 & \mathbf{1} & 0 \\ 
0 & 0 & \mathbf{1} 
\end{pmatrix}
= 
\begin{pmatrix} 
\mathbf{1} & 1 & 1 \\ 
0 & \mathbf{1} & 1 \\ 
0 & 0 & \mathbf{1} 
\end{pmatrix}
$$
---

## 6. Propriétés des relations binaires

Soit $E$ un ensemble quelconque et $\mathfrak{R}$ une relation sur $E$.
On note $\mathrm{Id}_E = \{(x,x) \mid x \in E\}$ la diagonale (identité).

### Réflexivité
Une relation est **réflexive** si tout élément est en relation avec lui-même :
$$\forall x \in E, \quad x\mathfrak{R}x$$

> [!NOTE] Identification Visuelle
> * **Graphe :** Chaque point a une boucle sur lui-même.
> * **Matrice :** La diagonale principale ne contient que des $1$.

#### Irréflexivité
Une relation est **irréflexive** si aucun élément n'est en relation avec lui-même :
$$\forall x \in E, \quad x\bar{\mathfrak{R}}x \quad (\text{ou } (x,x) \notin \mathfrak{R})$$
*Note : Une relation peut n'être ni réflexive ni irréflexive.*

#### Exemples Matriciels

**1. Relation Réflexive :**
$$
\begin{pmatrix}
\mathbf{1} & 1 & 1 & 1 \\
0 & \mathbf{1} & 0 & 1 \\
0 & 0 & \mathbf{1} & 0 \\
0 & 0 & 0 & \mathbf{1}
\end{pmatrix}
$$
$\Rightarrow$ Diagonale remplie de 1. Ce n'est pas irréflexive. $\mathrm{Id_E} \subseteq \mathfrak{R}$   

**2. Relation Irréflexive :**
$$
\begin{pmatrix}
\mathbf{0} & 1 & 1 & 1 \\
0 & \mathbf{0} & 0 & 1 \\
0 & 0 & \mathbf{0} & 0 \\
0 & 0 & 0 & \mathbf{0}
\end{pmatrix}
$$
$\Rightarrow$ Diagonale remplie de 0.

**3. Ni l'un ni l'autre :**
$$
\begin{pmatrix}
\mathbf{1} & 1 \\
0 & \mathbf{0}
\end{pmatrix}
$$
$\Rightarrow$ La diagonale contient un mélange de 0 et 1.

### Symétrique 

> [!NOTE]
> Une relation est **symétrique** si $a\mathfrak{R}b$ on a: $b\mathfrak{R}b$ $\Rightarrow \mathfrak{R}^{-1} =\mathfrak{R}$    

> [!abstract] Règle Matricielle
> La matrice doit être égale à sa transposée ($M = M^T$).
> Visuellement : La diagonale agit comme un **miroir**.
#### Proposition
$$
(R\cup R^{-1})^{-1}=R^{-1}\cup(R^{-1})^{-1}=R^{-1}\cup R
$$
$$
(R\cup R^{-1})^{-1}=R\cup R^{-1}
$$

#### 1. Exemple
$$
\begin{align}
\mathfrak{R}=\{(1,2),(2,1)\}\\
\mathfrak{R}^{-1}=\{(2,1),(1,2)\}
\end{align}
$$
#### 2. Exemple Simple
Regardons cette matrice $M$. Les couleurs montrent les paires qui se "reflètent" par rapport à la diagonale.

$$
M = \begin{pmatrix} 
1 & \color{orange}\mathbf{1} & \color{cyan}\mathbf{0} \\ 
\color{orange}\mathbf{1} & 0 & \color{magenta}\mathbf{1} \\ 
\color{cyan}\mathbf{0} & \color{magenta}\mathbf{1} & 1 
\end{pmatrix}
$$

**Vérification :**
1.  **Case (1,2)** est $\color{orange}1$ $\longleftrightarrow$ **Case (2,1)** est $\color{orange}1$. (OK)
2.  **Case (2,3)** est $\color{magenta}1$ $\longleftrightarrow$ **Case (3,2)** est $\color{magenta}1$. (OK)
3.  **Case (1,3)** est $\color{cyan}0$ $\longleftrightarrow$ **Case (3,1)** est $\color{cyan}0$. (OK)

C'est une **Relation Symétrique**.

### Transitivité 
Une relation est **transitive** si:
$$
\forall a,b,c \in E, \quad ((a\mathfrak{R}b)\text{ et }(b\mathfrak{R}c)) \Longrightarrow a\mathfrak{R}c
$$

![[Excalidraw/Relation.md#^frame=transitive|center|500]]

> [!tip]
> $\mathfrak{R}$ est transitive $\Longrightarrow \mathfrak{R}^2 \subseteq \mathfrak{R}$ 
> - $\mathfrak{R}^2 \leq \mathfrak{R}$
> - $\mathfrak{R}^2 \not \geq \mathfrak{R}$ (c'est pas le meme!)
> 


Pour vérifier si une relation $\mathfrak{R}$ est transitive, on calcule le carré de sa matrice $M_R^2$.
> [!abstract] Règle d'or
> $\mathfrak{R}$ est transitive $\iff$ Tous les $1$ de $M_R^2$ sont aussi des $1$ dans $M_R$.
> $$M_R^2 \leq M_R$$

#### 1. Exemple : Relation Transitive
Soit la relation définie par la matrice $M_R$ suivante :
$$
M_R = \begin{pmatrix} 
1 & 1 & 1 \\ 
0 & 1 & 1 \\ 
0 & 0 & 1 
\end{pmatrix}
$$
**Calculons $M_R^2 = M_R \times M_R$ :**
$$
\begin{pmatrix} 
1 & 1 & 1 \\ 
0 & 1 & 1 \\ 
0 & 0 & 1 
\end{pmatrix}
\times
\begin{pmatrix} 
1 & 1 & 1 \\ 
0 & 1 & 1 \\ 
0 & 0 & 1 
\end{pmatrix}
=
\begin{pmatrix} 
1 & 1 & 1 \\ 
0 & 1 & 1 \\ 
0 & 0 & 1 
\end{pmatrix}
$$
*(Rappel : en booléen $1+1=1$)*

**Vérification :**
On compare case par case :
* $M_R^2$ a des $1$ partout dans le triangle supérieur.
* $M_R$ a exactement les mêmes $1$ aux mêmes endroits.
* **Conclusion :** $M_R^2 \subseteq M_R$ $\Longrightarrow$ La relation est **TRANSITIVE**.

#### 2. Contre-exemple : Relation Non Transitive
Soit une autre relation $N$ (le chemin $1 \to 2 \to 3$) :
$$
N = \begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
$$

**Calculons $N^2 = N \times N$ :**
$$
\begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
\times
\begin{pmatrix} 
0 & 1 & 0 \\ 
0 & 0 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
=
\begin{pmatrix} 
0 & 0 & \color{red}\mathbf{1} \\ 
0 & 0 & 0 \\ 
0 & 0 & 0 
\end{pmatrix}
$$
*(Le $1$ rouge apparaît car on peut aller de 1 à 3 en deux étapes)*

**Vérification :**
* Dans $N^2$, il y a un **1** à la position $(1,3)$.
* Dans la matrice originale $N$, à la position $(1,3)$, il y a un **0**.
* **Conclusion :** $N^2 \not\subseteq N$ car on a trouvé un élément dans le carré qui n'est pas dans l'original. La relation n'est **PAS TRANSITIVE**.

### Antisymétrie
Une relation est **antisymétrique** si l'on ne peut jamais faire d'aller-retour entre deux éléments distincts.
$$
\forall x,y \in E, \quad ((x\mathfrak{R}y)\text{ et }(y\mathfrak{R}x)) \quad \Rightarrow \quad x=y
$$

> [!abstract] Règle Matricielle
> Dans la matrice $M$, hors de la diagonale, on ne doit jamais trouver deux **1** en face l'un de l'autre.
> Si $r_{ij} = 1$ (avec $i \neq j$), alors obligatoirement $r_{ji} = 0$.

#### 1. Exemples
**A. Cas Diagonal**
$$
M = \begin{pmatrix} 
1 & 0 & 0 \\ 
0 & 1 & 0 \\ 
0 & 0 & 0 
\end{pmatrix}
$$
**C'est antisymétrique.**
*Explication :* Il n'y a aucun **1** en dehors de la diagonale, donc aucun risque de conflit. (La diagonale ne compte pas).

**B. Cas Mixte**
$$
M = \begin{pmatrix} 
0 & 0 & 1 \\ 
1 & 1 & 0 \\ 
0 & 1 & 0 
\end{pmatrix}
$$
**C'est antisymétrique.**
*Explication :* Regardons les **1** hors diagonale :
* $r_{21}=1 \Rightarrow r_{12}=0$ (OK)
* $r_{32}=1 \Rightarrow r_{23}=0$ (OK)
* $r_{13}=1 \Rightarrow r_{31}=0$ (OK)
Chaque 1 fait face à un 0.

#### 2. Contre-Exemple
$$
M = \begin{pmatrix} 
1 & \color{red}\mathbf{1} & 0 \\ 
\color{red}\mathbf{1} & 1 & 1 \\ 
0 & 0 & 0 
\end{pmatrix}
\quad \text{n'est PAS antisymétrique}
$$
*Explication :* On a une symétrie interdite : $r_{12}=1$ **ET** $r_{21}=1$.
Cela signifie que $1\mathfrak{R}2$ et $2\mathfrak{R}1$, mais $1 \neq 2$.

> [!TIP] Astuce Visuelle (Le Pliage)
> Si tu plies la matrice le long de la diagonale :
> * **Symétrique :** Les 1 tombent sur des 1.
> * **Antisymétrique :** Les 1 doivent obligatoirement tomber sur des 0.

---
## Relation d'equivalence
Une relation qui est a la fois **~={purple}reflexive=~**, **~={pink}symétrique=~** et **~={blue}transitive=~** s'appelle une relation d'**equivalence**
Soit $\mathfrak{R}$ une relation d'equivalence sur $E$. La **Classe** d'equivalence d'un element $x\in E$ est définie par: 
$$
[x]_R =\{ y \in E / x\mathfrak{R}y\}
$$
- $[x]_R \not = \emptyset$
- $E=\bigcup_{x\in E} [x]_R$
- $x\bar{\mathfrak{R}}y \Leftrightarrow [x]_R \cap [y]_R=\emptyset \Leftrightarrow [x]_R\not =[y]_R$  
	- OU: $x\mathfrak{R}y \Leftrightarrow [x]_R \cap [y]_R \not =\emptyset \Leftrightarrow [x]_R =[y]_R$


## Relation d'ordre

> [!tip]
> Une relation $\mathfrak{R}$ sur un ensemble $E$ est une relation d'ordre si:
> - Reflexive ($\mathrm{Id_E}\in \mathfrak{R}$)
> - Antisymétrique (Si $r_{ij} = 1$, alors  $r_{ji} = 0$)
> - Transitive ($\mathfrak{R}^2 \leq \mathfrak{R}$)

### Ensemble Ordonne
Un ensemble muni d'une relation d'ordre est un **ensemble ordonne**
#### Exemple
1. L'ensemble $\mathbb{N}$ peut être ordonne par:
	- l'ordre naturelle "$\leq$"
	- l'ordre de divisibilité "$|$"
2. L'ensemble des parties d'un ensemble E peut être ordonne par inclusion
	- $(\mathcal{P}(E), \subseteq)$ est un ensemble ordonne

### Successeurs immédiat
Soit $(E,\leq)$ un ensemble ordonne et $x,y \in E$ 
On dit que $y$ est un **successeur immédiat** de $x$ ssi:
1. $x \leq y$
2. $x \not = y$ 
3. $\forall z \in E, \quad x \leq z \leq y \Rightarrow x=z \text{ ou } y=z$

## Diagramme de Hasse

### Principe
Le diagramme de Hasse est une simplification visuelle du graphe d'une relation d'ordre. Il permet de visualiser la hiérarchie sans surcharger le dessin avec des flèches inutiles.

> [!important] Conditions
> Pour dessiner un diagramme de Hasse, la relation $\mathfrak{R}$ doit être une **Relation d'Ordre** (Réflexive, Antisymétrique, Transitive).

### Construction (Successeur Immédiat)
Pour passer du graphe complet au diagramme de Hasse, on effectue une "réduction transitive" :

1.  **Suppression des boucles :** On enlève toutes les flèches $(x,x)$ (la réflexivité est implicite).
2.  **Suppression de la transitivité :** Si on a $x \to y$ et $y \to z$, on efface la flèche directe $x \to z$. On ne garde que les chemins "directs".
3.  **Orientation spatiale :** On dessine $y$ **au-dessus** de $x$ si $x \mathfrak{R} y$. On supprime les pointes des flèches (le sens est toujours vers le haut).

Ce qui reste, ce sont les liens de **Couverture** (ou successeurs immédiats).

> [!NOTE] Définition : Successeur Immédiat (Couverture)
> On dit que $y$ couvre $x$ (ou est un successeur immédiat de $x$) si :
> 1.  $x < y$ (strictement)
> 2.  Il n'existe aucun élément $z$ intermédiaire tel que $x < z < y$.
>
> **Notation :** On ne trace un trait entre $x$ et $y$ que si $y$ couvre $x$.

### Exemple
$$\begin{align}
&E=\{a,b,c\}\\
&(\mathcal{P}(E), \subseteq) \text{ est un ensemble ordonne}
\end{align}
$$
![[Pasted image 20260204170022.png|center]]



### Exemple complet : Le Treillis $\mathcal{B}_3$ (Le Cube)

Soit $E=\{a,b,c,d,e,f,g,h\}$ et la matrice $R$ suivante :

$$
R = \begin{pmatrix} 
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1\\ 
0 & 1 & 0 & 0 & 1 & 1 & 0 & 1\\ 
0 & 0 & 1 & 0 & 1 & 0 & 1 & 1 \\ 
0 & 0 & 0 & 1 & 0 & 1 & 1 & 1\\ 
0 & 0 & 0 & 0 & 1 & 0 & 0 & 1\\ 
0 & 0 & 0 & 0 & 0 & 1 & 0 & 1\\ 
0 & 0 & 0 & 0 & 0 & 0 & 1 & 1\\ 
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{pmatrix}
$$

> [!question] Objectifs
> 1. Montrer que $\mathfrak{R}$ est une relation d'ordre.
> 2. Déterminer les successeurs immédiats.
> 3. Tracer le diagramme de Hasse.

#### 1. Preuve : Relation d'Ordre

On note $R = (r_{ij})$ avec $1 \leq i,j \leq 8$.

* **Réflexive :**
    $\forall i \in \{1..8\}, r_{ii} = 1$.
    Tous les éléments de la diagonale valent 1. $\mathfrak{R}$ est réflexive. ✅
* **Antisymétrique :**
    $\forall i \neq j$, si $r_{ij}=1$ alors $r_{ji}=0$.
    On observe que le triangle inférieur est rempli de 0. Il n'y a aucun "1" symétrique par rapport à la diagonale. $\mathfrak{R}$ est antisymétrique. ✅
* **Transitive :**
    On a vérifié que $R^2 = R$ (le produit matriciel redonne la même matrice).
    Puisque $R^2 \subseteq R$, alors $\mathfrak{R}$ est transitive. ✅

> [!check] Conclusion
> $\mathfrak{R}$ est Réflexive, Antisymétrique et Transitive, c'est donc une **Relation d'Ordre**.

#### 2. Les Successeurs Immédiats

Pour trouver les successeurs immédiats de $x$, on liste tous les éléments strictement plus grands, et on élimine ceux qui sont accessibles via un autre chemin.

* **Pour a (Ligne 1) :**
    * Successeurs stricts : $\{b, c, d, \cancel e, \cancel f, \cancel g, \cancel h\}$
    * Élimination : $e$ est atteint via $b$ ($a \to b \to e$), $f$ via $b$, $h$ via $e$...
    * **$SI(a) = \{b, c, d\}$**
* **Pour b (Ligne 2) :**
    * Successeurs stricts : $\{e, f, \cancel h\}$
    * Élimination : $h$ est atteint via $e$ ($b \to e \to h$).
    * **$SI(b) = \{e, f\}$**
* **Pour c (Ligne 3) :**
    * Successeurs stricts : $\{e, g, \cancel h\}$
    * Élimination : $h$ est atteint via $e$.
    * **$SI(c) = \{e, g\}$**
* **Pour d (Ligne 4) :**
    * Successeurs stricts : $\{f, g, \cancel h\}$
    * Élimination : $h$ est atteint via $f$.
    * **$SI(d) = \{f, g\}$**
* **Pour e, f, g (Lignes 5, 6, 7) :**
    * Successeurs stricts : $\{h\}$
    * Pas d'intermédiaire possible.
    * **$SI(e)=\{h\}, SI(f)=\{h\}, SI(g)=\{h\}$**
- $SI(h)=\emptyset$
#### 3. Diagramme de Hasse

**Analyse des Extrêmas (via la Matrice) :**
* **Minimum :** Ligne 1 ($a$) contient **8** fois le chiffre 1 $\Rightarrow$ $a$ est en bas.
* **Maximum :** Ligne 8 ($h$) contient **1** seul chiffre 1 $\Rightarrow$ $h$ est en haut.

**Représentation (Le Cube) :**
On connecte chaque élément à ses successeurs immédiats ($SI$).

![[Excalidraw/Relation.md#^frame=hasse|center]]
#### Cas Particulier : Le Cube (Treillis Booléen $\mathcal{B}_3$)
Le cardinal est $2^3 = 8$ éléments (donc une matrice $8\times 8$).

> [!success] Structure de la Matrice
> Si on ordonne les éléments par cardinalité (0, 1, 2, 3), la matrice a une forme triangulaire par blocs très spécifique correspondant à  : **8, 4, 4, 4, 2, 2, 2, 1**.

---
## Lien entre Matrices positives et Matrices booléennes

Pour un **ensemble ordonné** (muni d'une relation d'ordre), on peut trouver les successeurs immédiats facilement par le calcul de $R^2$. Pour cela, on considère la matrice booléenne comme une **matrice à coefficients entiers** (arithmétique usuelle).

On transforme la matrice booléenne $R$ en une **matrice d'entiers** (où $1+1=2$) et on calcule son carré $S = R^2$.

Cela permet d'obtenir la matrice $H$ de la relation de couverture $\mathfrak{H}$ définie par :
$$x\mathfrak{H}y \iff y \text{ est un successeur immédiat de } x$$

> [!Theoreme] Theoreme
> Soit $R$ la matrice d'une relation d'ordre (réflexive). Soit $S = R \times R$ le produit matriciel classique (entier).
>
> Un élément $y$ est un **successeur immédiat** de $x$ si et seulement si :
> $$S_{xy} = 2 \quad (\text{avec } x \neq y)$$
>
>Si $S$ designe le carre de $R$
> Comme si $R$ etait un matrice positive a coefficient centiere, on a:
> $$
> H_{ij} = \begin{cases}    
> 1 &\text{si } S_{ij}=2 \\    
> 0 &\text{si } S_{ij}\not = 2
> \end{cases}
> $$

### Exemple de Calcul

Soit $E=\{a,b,c,d,e,f\}$ et la matrice $R$ suivante :

$$
R = \begin{pmatrix} 
1 & 0 & 0 & 0 & 0 & 1 \\ 
0 & 1 & 0 & 0 & 0 & 1 \\ 
1 & 1 & 1 & 1 & 1 & 1 \\ 
0 & 0 & 0 & 1 & 0 & 1 \\ 
0 & 0 & 0 & 0 & 1 & 1 \\ 
0 & 0 & 0 & 0 & 0 & 1 
\end{pmatrix}
$$
*(Note : On voit que la ligne $c$ est pleine de 1, c'est donc le minimum. La colonne $f$ est pleine de 1, c'est le maximum.)*

**Étape 1 : Calcul de $S = R \times R$ (Matrice à coefficients entiers)**
On effectue le produit ligne par colonne.
*Exemple pour la ligne c (ligne 3) et colonne a (col 1) :* $1\times1 + 1\times0 + 1\times1 + \dots = 2$.

$$
S = \begin{pmatrix} 
1 & 0 & 0 & 0 & 0 & \mathbf{2} \\ 
0 & 1 & 0 & 0 & 0 & \mathbf{2} \\ 
\mathbf{2} & \mathbf{2} & 1 & \mathbf{2} & \mathbf{2} & 6 \\ 
0 & 0 & 0 & 1 & 0 & \mathbf{2} \\ 
0 & 0 & 0 & 0 & 1 & \mathbf{2} \\ 
0 & 0 & 0 & 0 & 0 & 1 
\end{pmatrix}
$$

**Étape 2 : Extraction de la Matrice de Hasse $H$**
On garde uniquement les coefficients égaux à **2** (en ignorant la diagonale).
$$H_{ij} = 1 \iff S_{ij}=2 \text{ et } i \neq j$$

$$
H = \begin{pmatrix} 
0 & 0 & 0 & 0 & 0 & 1 \\ 
0 & 0 & 0 & 0 & 0 & 1 \\ 
1 & 1 & 0 & 1 & 1 & 0 \\ 
0 & 0 & 0 & 0 & 0 & 1 \\ 
0 & 0 & 0 & 0 & 0 & 1 \\ 
0 & 0 & 0 & 0 & 0 & 0 
\end{pmatrix}
$$

**Étape 3 : Liste des Successeurs Immédiats (SI)**
On lit simplement les lignes de la matrice $H$ :
* $SI(a) = \{f\}$ (Car $S_{af}=2$)
* $SI(b) = \{f\}$
* $SI(c) = \{a, b, d, e\}$ (Car $S_{ca}=2, S_{cb}=2, \dots$)
* $SI(d) = \{f\}$
* $SI(e) = \{f\}$
* $SI(f) = \emptyset$

**Diagramme de Hasse Résultant :**
L'élément $c$ est tout en bas. Il éclate vers 4 branches ($a,b,d,e$) qui se rejoignent toutes vers $f$.

![[Excalidraw/Relation.md#^frame=diagramme|center]]

---
# Références
![[Relations-25_251001_103911.pdf]]