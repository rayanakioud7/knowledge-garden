Date: 2026-01-29
Tags: [[Mathematics]], [[Discrete Mathematics]]

# ~={red} Notes=~

## Introduction
La Théorie des **Graphes** est la discipline mathématique et informatique qui étudie les graphes, lesquels sont des modèles abstraits de dessins de réseaux reliant des objets. Ces modèles sont constitués par la donnée de _sommets_ et d'*arêtes* entre ces sommets.
Ces arêtes sont parfois non symétriques ; les graphes sont alors dits _[orientés](https://fr.wikipedia.org/wiki/Graphe_orient%C3%A9 "Graphe orienté")_ et les arêtes sont appelées des _flèches_ ou des _arcs_.

![[Pasted image 20260129205202.png|center]]

Généralement, elle s'intéresse à la façon dont sont liés les objets. Qu'il s'agisse de plans de métro, de cartes routières, de schémas de circuits électriques ou d'organigrammes, on utilise toujours les graphes.

![[Pasted image 20260129210014.png|center]]

---

## Types de Graphes

> [!INFO] Classification
> Il existe deux grandes sortes de Graphes : les Graphes **Orientés** et les Graphes **Non-Orientés**.

### Les Graphes Orientés
#### Définition
Un graphe **Orienté** est un quadruplet ~={red}($S$, $A$, $\alpha$, $\beta$) =~ où :
- ~={red}$S$=~ : est l'ensemble des ~={purple}sommets=~.
- $A$ : est l'ensemble des ~={purple}arêtes=~ (ou arcs).
- $\alpha$ et $\beta$ sont des applications de $A$ dans $S$ qui, à chaque arête $a$, associent :
	- un sommet origine $\alpha(a)$
	- un sommet but $\beta(a)$

#### Exemple
![[Graphes exemples#^frame=Graphe Oriente|center]]

$$
\begin{align} 
G &= (S, A, \alpha, \beta) \\ 
S &= \{1, 2, 3, 4\} \\ 
A &= \{a_1, a_2, a_3, a_4, a_5\} 
\\ \alpha(a_1) &= 1 ~;~ \beta(a_1) = 2 
\\ \alpha(a_5) &= 3 ~;~ \beta(a_5) = 1 
\end{align}
$$

### Les Graphes Non-Orientés
#### Définition
Un graphe **Non-Orienté** est un triplet ~={red}($S,A,\delta)$ =~ où :
- $\delta$ associe à chaque arête une paire de sommets (les extrémités).

#### Exemple 1
![[Graphes exemples#^frame=Graphe non-oriente|center]]

$$
\begin{align} 
G &= (S, A, \delta) \\ 
S &= \{1, 2, 3, 4\} \\ 
A &= \{a_1, a_2, a_3, a_4, a_5, a_6\} 
\\ \delta(a_1) &= \{1,2\} ~;~ \delta(a_3) = \{2\} ~;~ \delta(a_5) = \{2,4\} 
\end{align}
$$

#### Exemple 2
![[Graphes exemples#^frame=Graphe non-oriente2|center]]

$$
\begin{align} 
G &= (S, A, \delta) \\ 
S &= \{x, y\} \\ 
A &= \{a\} 
\\ \delta(a) &= \{x,y\} 
\end{align}
$$

---

## Graphes Isomorphes

### Définition
Deux graphes $G = (S,A,\alpha, \beta)$ et $G^{\prime} = (S^{\prime},A^{\prime},\alpha^{\prime}, \beta^{\prime})$ sont dits **Isomorphes** s'il existe une paire de **bijections** :

$$
\begin{align}
h_{\text{sommet}} &: S \to S' \quad \text{(bijection)} \\
h_{\text{arête}} &: A \to A' \quad \text{(bijection)} \\
\text{tels que } &: \\
\forall a \in A &: \alpha'(h_{\text{arête}}(a)) = h_{\text{sommet}}(\alpha(a)) \\
\text{et } \forall a \in A &: \beta'(h_{\text{arête}}(a)) = h_{\text{sommet}}(\beta(a))
\end{align}
$$

![[Graphes exemples#^frame=isomorphe|center]]

### Exemple
![[Graphes exemples#^frame=isomo|center]]

$$
\begin{align}
h(1) = b \\ 
h(2) = a \\
h(3) = c \\
(1,2)  \to (h(1),h(2))& = (b,a) \quad \text{donc $G$ et $G^{\prime}$ sont isomorphes}
\end{align}
$$

---

## Propriétés des Arêtes

### Boucle
Dans un graphe, orienté ou non, on appelle **Boucle** une arête $a$ dont les deux extrémités coïncident.
- Pour les graphes **orientés** ceci s'énonce formellement : $\alpha(a)=\beta(a)$.
- Pour les graphes **non-orientés** : $\delta(a)$ est un *singleton* $\{s\}$.

![[Graphes exemples#^frame=boucle|center]]
> [!NOTE] Remarque
> Dans l'image ci-dessus, $a_2$ est une boucle.

### Arête double (ou multiple)
On dira qu'un graphe (orienté ou non) contient des arêtes doubles s'il a plusieurs arêtes de mêmes extrémités :
- Pour les graphes orientés : $\alpha(a) = \alpha(a^{\prime})$ et  $\beta(a) = \beta(a^{\prime})$ ~={yellow}(même sens)=~.
- Pour les graphes non-orientés : $\delta(a)=\delta(a^{\prime})$.

![[Graphes exemples#^frame=86YXK15o|center]]

> [!NOTE]
> Si un graphe orienté n'a pas d'*arêtes doubles*, on peut supposer que $A \subseteq S \times S$ (application *injective*).

---

## Graphe Simple

> [!NOTE] Définition
> Un graphe (orienté ou non) est dit **simple** s'il ne contient **ni boucle ni arêtes doubles**.

Si un graphe non-orienté $G = (S,A,\delta)$ est simple, on peut identifier l'ensemble de ses arêtes à $\mathcal{P}_2(S)$, l'ensemble des parties de $S$ à 2 éléments.

$$
\text{L'application}\quad \delta : A \to \mathcal{P}_2(S) \quad \text{est injective.}
$$

---

## Sous-Structures

### Graphe Partiel vs Sous-Graphe

| Type               | Définition                                                     | Action               |
| :----------------- | :------------------------------------------------------------- | :------------------- |
| **Graphe Partiel** | On garde tous les sommets, on supprime des arêtes.             | Suppression d'arcs   |
| **Sous-Graphe**    | On garde un sous-ensemble de sommets et leurs arêtes internes. | Sélection de sommets |

### Graphe Partiel
![[Graphes exemples#^frame=graphe partielle|center]]

> [!NOTE]
> Le graphe partiel engendré par les arcs $a_3, a_4, a_5$.

### Sous-Graphe
![[Graphes exemples#^frame=eIH49Ryw|center]]

> [!NOTE]
> $G_1$ est un sous-graphe de $G_2$ engendré par les sommets 1, 2 et 3.

---

## Degré d'un sommet

### Définition
Soit $G=(S,A,\delta)$ un graphe **non-orienté**.
Le **degré** $d(s)$ d'un sommet est égal au nombre d'arêtes $a$ telles que $s \in \delta(a)$.
*Note : Si $\delta(a) = \{s\}$ (boucle), l'arête $a$ sera comptée deux fois dans le degré de $s$.*

Soit $G=(S,A,\alpha,\beta)$ un graphe **orienté** :
- ~={purple}Le degré entrant=~ $d^-(s)$ = nombre d'arêtes $a$ t.q $\beta(a)=s$.
- ~={purple}Le degré sortant=~ $d^+(s)$ = nombre d'arêtes $a$ t.q $\alpha(a)=s$.

$$
d(s)=d^-(s) + d^+(s)
$$

### Exemple : Graphe non-orienté
![[Graphes exemples#^frame=3TWbyNP3|center]]

| S   | $d(s)$ |
| --- | ------ |
| 1   | 3      |
| 2   | 3      |
| 3   | 5      |
| 4   | 4      |
| 5   | 4      |
| 6   | 3      |

### Exemple : Graphe orienté
![[Graphes exemples#^frame=f9w0nxNe|center]]

| S | $d^+(s)$ | $d^-(s)$ | $d(s)$ |
| --- | -------- | -------- | ------ |
| 1 | 2 | 2 | 4 |
| 2 | 2 | 3 | 5 |
| 3 | 1 | 1 | 2 |
| 4 | 1 | 1 | 2 |
| 5 | 1 | 1 | 2 |
| 6 | 3 | 2 | 5 |

### Proposition (Lemme de la poignée de main - Handshake Lemma)
La somme des degrés de tous les sommets d'un graphe **Non-Orienté** fini est égale à 2 fois le nombre de ses arêtes.
$$
\sum_{s \in S} d(s) = 2 \cdot |A|
$$

---

## Graphe Complet

> [!Definition] Concepts
> **Adjacent** : deux sommets $x$ et $y$ sont adjacents s'il existe $a \in A$ t.q $\delta(a)=\{x,y\}$.
> **Ordre** : L'ordre d'un graphe $G= (S,A)$ est le nombre de ses *sommets*, c-à-d le cardinal de $S(|S|)$.

> [!NOTE]
> Un graphe est dit **complet** ($K_n$) si chaque sommet est adjacent avec **tous** les autres sommets.

![[Graphes exemples#^frame=Graphe complet|center]]

### Nombre d'arêtes de $K_n$
Dans $K_n$, chaque sommet est adjacent avec $n-1$ autres sommets.
Soit $s \in K_n$ :
- on a : $d(s) = n-1$
- Donc $\sum_{s \in K_n} d(s) = n(n-1) = 2|A|$

$$
|A_n| = \frac{n(n-1)}{2} = \binom{n}{2}
$$
> le maximum nombre des aretes 

---
## Chemins et Cycles

### Définition
Dans un graphe orienté, un chemin est une suite $c=(a_1,...,a_n)$ d'arêtes telle que :
$$
\forall i \in \{1,...,n-1\}, \quad \beta(a_i) = \alpha(a_{i+1})
$$
- Le sommet $\alpha(a_1)$ est l'**origine** du chemin.
- Le sommet $\beta(a_n)$ est le **but** du chemin.

### Exemple
![[Graphes exemples#^frame=chemin simple|center]]

> [!NOTE] Circuit
> Un **circuit** est un chemin tel que l'origine coïncide avec le but : $\beta(a_n)=\alpha(a_1)$.

![[Graphes exemples#^frame=Circuit|center]]

### Classification des Chemins

> [!TIP] Chemin Simple
> Un chemin (ou un circuit) est **simple** s'il ne contient pas deux fois la même **arête**.

**Contre-Exemple (Chemin non simple) :**
![[Graphes exemples#^frame=chemin non simple|center|500]]

Si on effectue le trajet suivant :
$$3 \xrightarrow{a_3} 4 \xrightarrow{a_4} 5 \xrightarrow{a_6} 3 \xrightarrow{a_3} 4 \dots$$
1. On passe une première fois par $a_3$.
2. On fait la boucle (le circuit).
3. On repasse une deuxième fois par $a_3$.
*Conclusion : Ce chemin n'est pas simple car l'arête $a_3$ est répétée.*

> [!TIP] Chemin Élémentaire
> Un chemin est **élémentaire** s'il ne contient pas deux sommets identiques (sauf peut-être le départ et l'arrivée pour un circuit). On ne répète *jamais le même sommet*.

![[Graphes exemples#^frame=chemin elementaire|center]]
**Explication :** J'ai visité les sommets $\{1, 2, 3\}$. Aucun sommet n'apparaît deux fois.


> [!TIP] Chemin Eulérien
> Un chemin (ou circuit) est **Eulérien** s'il est simple et s'il emprunte **toutes les arêtes** du graphe une seule fois.

C'est les dessins qu'on peut faire "sans lever le stylo" et sans repasser sur un trait.
![[Graphes exemples#^frame=chemin eulerienne|center]]

1 -> 2 -> 3 -> 4 -> 5 -> 3 -> 1 
**Explication :**
1. Je suis passé par **toutes** les arêtes (les 6 traits du dessin).
2. Je ne suis jamais repassé sur le même trait.
3. _Par contre_, je suis passé 3 fois par le sommet central $3$, mais c'est autorisé pour un chemin Eulérien !


> [!TIP] Chemin Hamiltonien
> Un chemin est **Hamiltonien** s'il est élémentaire et passe par **tous les sommets** du graphe une seule fois.
> $$\forall s \in S, \exists! i \quad \text{t.q. } s= \alpha(a_i) \text{ ou } s=\beta(a_n)$$

![[Pasted image 20260130020129.png|center]]
#### Comparaison des Chemins

| Type            | Cible   | Contrainte                                | Analogie                        |
| :-------------- | :------ | :---------------------------------------- | :------------------------------ |
| **Simple**      | Arêtes  | Ne répète jamais la même **arête**.       | "Sens interdit"                 |
| **Élémentaire** | Sommets | Ne répète jamais le même **sommet**.      | "Le Touriste"                   |
| **Eulérien**    | Arêtes  | Utilise **TOUTES** les arêtes (une fois). | "Le Dessin sans lever le stylo" |
| **Hamiltonien** | Sommets | Visite **TOUS** les sommets (une fois).   | "Le Livreur Amazon"             |




---
## Chaine

### Definition
Pour les graphes non-oriente un **chaine** est une suite $c = s_0a_1,s_1 a_2,...,s_{n-1}a_n,s_n$ de sommets et d'aretes tels que  $\delta(a_i)=\{s_{i-1},s_i\}$.
On dira que cette chaine *Joint* le sommet $s_0$ et $s_n$.

> [!NOTE] Cycle
> Un **cycle** est une chaine tel que : $s_0=s_n$.

### Classification des Chaines

> [!TIP] Chaine Simple
> Une chaine (ou un cycle) est **simple** si elle ne contient pas deux fois la même **arête**.

> [!TIP] Chaine Élémentaire
> Une chaine est **élémentaire** s'il ne contient pas deux sommets identique. On ne répète *jamais le même sommet*. la seule exception que $s_0$ et $s_n$ peuvent être égaux.

> [!TIP] Chaine Eulérien
> Une chaine (ou cycle) est **Eulérien** s'il est simple et contient toutes les aretes.

> [!TIP] Chaine Hamiltonien
> Une chaine est **Hamiltonien** s'il est élémentaire et contient **tous les sommets**.

#### Exemple

![[Graphes exemples#^frame=chaine|center]]

- 1, $a_2$ , 1 est un cycle *élémentaire*
- 1, $a_2$ , 1, $a_1$, 2 est une chaine *simple*, non-*élémentaire* et *Eulérien*
- 2, $a_1$ , 1, $a_2$ , 1, $a_1$, 2 est une chaine  non-*simple*
- 1, $a_1$, 2 chaine **Hamiltonien**

---

## Distance

Dans un graphe **non-orienté** $G=(S,A)$, la distance $d(s,s')$ entre deux sommets $s$ et $s'$ est définie par :

$$
d(s,s') = 
\begin{cases} 
0 & \text{si } s = s' \\
k & \text{longueur de la plus courte chaîne joignant } s \text{ à } s' \\
+\infty & \text{s'il n'existe aucun chemin entre } s \text{ et } s'
\end{cases}
$$

![[Excalidraw/Graphes exemples.md#^frame=Distance de graphe non oriente|center|600]]

**Exemple sur le graphe ci-dessus :**
$$
\begin{align}
&d(1,5)=3 \quad ; \quad d(1,4)=2 \\
&d(5,11) = +\infty \quad ; \quad d(3,4)=1 \\
&d(8,8)=0 
\end{align}
$$

### Propriétés métriques

> [!important] Inégalité Triangulaire
> Pour tout triplet de sommets $(s, s', s'') \in S^3$ :
> $$d(s,s'') \leq d(s,s') + d(s',s'')$$

### Diamètre d'un graphe
Le diamètre d'un graphe est la plus grande distance possible entre deux sommets quelconques du graphe.
$$
\text{Diam}(G) = \max \{ d(s,s') \mid (s,s') \in S^2, d(s,s') \neq +\infty \}
$$

---

## Le Graphe de Petersen

### Définition
Le **Graphe de Petersen** est un graphe non-orienté particulier. 
Soit $S = \{1, 2, 3, 4, 5\}$. Les sommets du graphe sont les **sous-ensembles de 2 éléments** de $S$ (les paires).

Deux sommets $\{i,j\}$ et $\{k,l\}$ sont reliés par une arête si et seulement si ils sont **disjoints** :
$$
\{i,j\} \sim \{k,l\} \iff \{i,j\} \cap \{k,l\} = \varnothing
$$

### Propriétés Clés
![[Excalidraw/Graphes exemples.md#^frame=GRaphe de Peterson|center|700]]

- **Sommets adjacents** : Distance = 1 (par définition).
- **Sommets non-adjacents** : Ont exactement un voisin en commun $\implies$ Distance = 2.
- **Diamètre** : Le graphe de Petersen a un diamètre de **2**.

> [!tip]
> Le nombre chromatique $\chi(G)$ est le nombre minimum de couleurs nécessaires pour colorier le graphe sans que deux sommets adjacents aient la même couleur.
> 
> 1. Le graphe contient des cycles de longueur 5 (pentagone). Un cycle impair nécessite au moins 3 couleurs. Donc $\chi(G) \ge 3$.
>     
> 2. Il est possible de le colorier avec 3 couleurs (c'est une propriété connue du graphe de Petersen).
> 
>**Connexité :** Oui, le graphe est **connexe**. On peut atteindre n'importe quel sommet à partir de n'importe quel autre.

---

## Connexité

### Définitions

> [!summary] Graphe Non-Orienté (Connexe)
> Un graphe est dit **connexe** si pour toute paire de sommets distincts $\{s, s'\}$, il existe une **chaîne** joignant $s$ et $s'$.

> [!summary] Graphe Orienté (Fortement Connexe)
> Un graphe orienté est **fortement connexe** si pour tout couple de sommets distincts $(s, s')$, il existe un **chemin** allant de $s$ à $s'$ (et inversement).

### Composante Connexe (CC)
La composante connexe d'un sommet $s$ dans un graphe non-orienté $G$ est l'ensemble :
$$
CC_G(s) = \{ s' \in S \mid \exists \text{ une chaîne entre } s \text{ et } s' \}
$$

> [!NOTE]
> La composante connexe inclut toujours le sommet lui-même (chaîne de longueur 0).

**Exemple Visuel :**
![[Excalidraw/Graphes exemples.md#^frame=Connexite|center|600]]

**Calcul des composantes :**
$$
\begin{align}
CC_G(1) &= \{1, 2, 3, 4\} \\
CC_G(5) &= \{5, 6, 7\} \\
CC_G(8) &= \{8, 9\}
\end{align}
$$

### Relation d'équivalence
La connexité définit une relation binaire $\mathcal{R}$ sur l'ensemble des sommets $S$ :

$$
s \mathcal{R} s' \iff \exists \text{ une chaîne joignant } s \text{ à } s'
$$

Cette relation est une **relation d'équivalence** car elle est :
1.  **Réflexive** ($s$ est relié à lui-même).
2.  **Symétrique** (si $s$ est relié à $s'$, alors $s'$ est relié à $s$).
3.  **Transitive** (si $s \to x$ et $x \to s'$, alors $s \to s'$).

Les **classes d'équivalence** de cette relation sont exactement les composantes connexes :
$$
[s]_\mathcal{R} = CC_G(s)
$$
Propriété fondamentale :
$$
s' \in CC_G(s) \implies CC_G(s') = CC_G(s)
$$

**Exemple :**
![[Excalidraw/Graphes exemples.md#^clippedframe=Connexite graphe|center]]
Puisque 1, 2 et 3 sont dans la même composante :
$$
CC_G(1) = CC_G(2) = CC_G(3) = \{1, 2, 3, 4\}
$$

> [!Connexe]
> Un graphe est connexe $\Longleftrightarrow$  possède une **seule** Composante Connexe, c'est l'ensemble des sommet

> [!Sommet Isole]
> Un sommet $s\in S$ $(G=(S,A,\delta))$ est **isole** ssi $d(s)=0$

---
## Théorème d'Euler

### Definition
Un graphe non oriente possède une chaine eulérienne si et seulement si:
1. il est connexe
2. il a 0 ou 2 sommet de degré impaire
### Exemple
![[Excalidraw/Graphes exemples.md#^frame=thoreme d'euler|center|300]]

| sommet | degré |
| ------ | ----- |
| 1      | 3     |
| 2      | 3     |
| 3      | 2     |
| 4      | 2     |
| 5      | 2     |
Donc ce graphe possède une chaine eulérienne

### Chaîne ou Cycle Eulérien ?

> [!tip]
> - **Cycle eulérien :** Un graphe connexe admet un cycle eulérien si et seulement si **tous ses sommets sont de degré pair**.
>     
>         
> - **Chaîne eulérienne :** Un graphe connexe admet une chaîne eulérienne si et seulement si le nombre de sommets de degré impair est **exactement 0 ou 2**.
> 	- La chaîne doit obligatoirement commencer par un sommet impair et finir par l'autre
>     

---
## Coloration d'un Graphe

### Definition 
Une **Coloration** d'un graphe non-oriente sans boucle est une application $\gamma : s \longrightarrow C$ 
or $C$ est un ensemble fini de couleur tels que:
$$
\forall a, \quad f(a) = \{s,s^{\prime}\} \Rightarrow \gamma(s) \not = \gamma(s^{\prime})
$$
C-a-d: deux sommet different adjacent ne peuvent pas être de la mem couleur

> [!Nombre chromatique]
> Le **Nombre Chromatique** d'un graphe est le nombre minimal de couleur qui permettant de le colorer
> On note $\gamma(G)$ le nombre chromatique de $G$

> [!coloration d'un graphe complet]
> $K_n$ est le graphe **complet** d'ordre $s$ $\Rightarrow \gamma(G)=s$

### Exemple 
4 Couleurs suffisent pour colorer le graphe.
Nombre Chromatique $\gamma(G) \leq 4$

![[Excalidraw/Graphes exemples.md#^frame=Coloration des graphes|center]]


### Théorème d'encadrement de notre chromatique

Si $p$ est maximal parmi les ordres des sous-graphess complet de $G$, alors:
$$
p \leq \gamma(G) \leq Max\{deg(s)/s\in S\}+1
$$

# ~={red}References =~
https://fr.wikipedia.org/wiki/Th%C3%A9orie_des_graphes
![[Méthodes mathématiques pour linformatique - 5e éd. - Cours et exercices corrigés Cours et exercices corrigés (Jacques Vélu) (Z-Library).djvu]]
