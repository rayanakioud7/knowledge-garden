Date: 2026-02-06
Tags: [[Mathematics]], [[Discrete Mathematics]]

# 1. Rappel : Ordre

## Maximal et Minimal

### Maximal
#### Définition
Un élément $M$ d'un ensemble ordonné $(E, \leq)$ est **maximal** s'il ne possède pas d'autre majorant que lui-même.
$$
\forall x \in E, \quad M \leq x \quad \Rightarrow M = x
$$
#### Exemple
![[Excalidraw/treilli.md#^clippedframe=maximal|center|500]]

### Minimal
#### Définition
Un élément $m$ d'un ensemble ordonné $(E, \leq)$ est **minimal** s'il ne possède pas d'autre minorant que lui-même.
$$
\forall x \in E, \quad m \geq x \quad \Rightarrow m = x
$$

#### Exemple
![[Excalidraw/treilli.md#^frame=minimal|center|500]]

---

## Plus grand et Plus petit élément

### Plus grand élément (Maximum)
L'élément $x$ est le **plus grand élément** d'un ensemble ordonné $A$ s'il **majore** tous les éléments de $A$.
$$\forall a \in A, \quad a \leq x$$

### Plus petit élément (Minimum)
L'élément $x$ est le **plus petit élément** d'un ensemble ordonné $A$ s'il **minore** tous les éléments de $A$.
$$\forall a \in A, \quad x \leq a$$

> [!abstract] Théorème : Unicité
> Soit $A$ un ensemble ordonné.
> 1. S'il possède un **plus grand élément**, celui-ci est unique. C'est l'unique élément maximal de $A$.
>    On le note $\max(A)$ ou $\top$ (Top).
> 2. S'il possède un **plus petit élément**, celui-ci est unique. C'est l'unique élément minimal de $A$.
>    On le note $\min(A)$ ou $\bot$ (Bottom).

> [!info] Théorème : Existence (Cas fini)
> Soit $A$ un ensemble ordonné **fini**.
> 1. Tout élément de $A$ est majoré par au moins un élément maximal et minoré par au moins un élément minimal.
> 2. Si $A$ possède un **seul** élément maximal, c'est le plus grand élément ($\max A$).
> 3. Si $A$ possède un **seul** élément minimal, c'est le plus petit élément ($\min A$).

---

# 2. Treillis (Lattice)

Soit $(T,\leq)$ un ensemble ordonné.
$(T,\leq)$ est un treillis si **toute paire** d'éléments $\{x,y\}$ admet une borne supérieure et une borne inférieure.

![[Excalidraw/treilli.md#^frame=treillissss|center|500]]

### Borne Inférieure (Meet / $\wedge$)
Si l'ensemble des minorants communs $\downarrow x \cap \downarrow y$ admet un plus grand élément, on le note :
$$x \wedge y = \inf\{x,y\}$$

**Définition formelle :**
$$
\alpha = x \wedge y \iff \begin{cases}
 \alpha \leq x \text{ et } \alpha \leq y \quad (\text{Minorant}) \\
 \forall \beta, (\beta \leq x \text{ et } \beta \leq y) \Rightarrow \beta \leq \alpha \quad (\text{Le plus grand})
\end{cases}
$$

### Borne Supérieure (Join / $\vee$)
Si l'ensemble des majorants communs $\uparrow x \cap \uparrow y$ admet un plus petit élément, on le note :
$$x \vee y = \sup\{x,y\}$$

**Définition formelle :**
$$
\gamma = x \vee y \iff \begin{cases}
 x \leq \gamma \text{ et } y \leq \gamma \quad (\text{Majorant}) \\
 \forall \delta, (x \leq \delta \text{ et } y \leq \delta) \Rightarrow \gamma \leq \delta \quad (\text{Le plus petit})
\end{cases}
$$

### Exemple Classique : $(\mathbb{N}, |)$
Pour la relation de divisibilité :
$$
\begin{align}
n \vee m &= \text{PPCM}(n,m) \\
n \wedge m &= \text{PGCD}(n,m)
\end{align}
$$
Les bornes globales (si on inclut 0) :
* $\inf(\mathbb{N}) = 1$ (car $1$ divise tout le monde).
* $\sup(\mathbb{N}) = 0$ (car tout le monde divise $0$, au sens où $n \times 0 = 0$).

---

## Exemples graphiques (Diagrammes de Hasse)

### 1. C'est un Treillis
![[Excalidraw/treilli.md#^frame=griddd|center|500]]
Vérification visuelle :
$$
\begin{align}
c \vee f &= g & c \wedge f &= b \\
e \vee d &= h & e \wedge d &= a \\
a \vee h &= h & a \wedge h &= a
\end{align}
$$
Chaque paire possède un $\sup$ et un $\inf$, c'est un treillis.

### 2. Ce n'est pas un Treillis
![[Excalidraw/treilli.md#^frame=non borne|center|500]]
*Raison : Les bornes $\sup$ et $\inf$ n'existent pas toujours pour toutes les paires (ex: deux majorants incomparables sans minimum).*

## 3. Contre-exemple détaillé

L'ensemble ordonné $A=\{a,b,c,d,e,f\}$ ci-dessous n'est **pas un treillis**.
**Raison :** La paire $\{b,c\}$ possède des majorants $\{d,e,f\}$, mais cet ensemble de majorants n'admet **pas de plus petit élément** (ni $d$, ni $e$ ne sont plus petits l'un que l'autre). Donc $b \vee c$ n'existe pas.

![[Excalidraw/treilli.md#^clippedframe=treilliisss|center|400]]

> [!tip] Remarque
> Les ensembles **totalement ordonnés** (chaînes) sont toujours des treillis.
> Pour tout couple, $\sup(x,y) = \max(x,y)$ et $\inf(x,y) = \min(x,y)$.

---

## Treillis distributif

Un treillis $(T, \leq)$ est **distributif** si et seulement si pour tout $x,y,z \in T$ :

$$
\begin{align}
(D_1) \quad & x \wedge (y \vee z) = (x \wedge y) \vee (x \wedge z) \\
(D_2) \quad & x \vee (y \wedge z) = (x \vee y) \wedge (x \vee z)
\end{align}
$$
*(Note : La propriété $D_1$ implique $D_2$ et inversement. Il suffit d'en vérifier une seule).*

### Exemple (Treillis distributif)
Le treillis des diviseurs de 30 est distributif.

![[Excalidraw/treilli.md#^clippedframe=cubtreili|center|500]]

Vérification pour $x=2, y=6, z=10$ :
$$
\begin{align}
\text{LHS : } & 2 \wedge (6 \vee 10) = 2 \wedge 30 = 2 \\
\text{RHS : } & (2 \wedge 6) \vee (2 \wedge 10) = 2 \vee 2 = 2
\end{align}
$$
On a bien l'égalité.

### Contre-Exemple (Non distributif)
Exemple avec le **Diamond Lattice** (ou structure similaire non distributive).

![[Excalidraw/treilli.md#^clippedframe=contretrill|center|400]]

Vérification de la non-distributivité :
$$
\begin{align}
\text{Calcul de } d \wedge (b \vee c) : \\
\quad & b \vee c = e \\
\quad & \Rightarrow d \wedge e = d \quad \mathbf{(1)} \\
\\
\text{Calcul de } (d \wedge b) \vee (d \wedge c) : \\
\quad & d \wedge b = a \quad \text{et} \quad d \wedge c = a \\
\quad & \Rightarrow a \vee a = a \quad \mathbf{(2)}
\end{align}
$$
Puisque $d \neq a$, alors **$d \wedge (b \vee c) \neq (d \wedge b) \vee (d \wedge c)$**.
Ce n'est pas un treillis distributif.

---

## 4. Treillis Complémenté

### Définition
Soit $(T,\leq)$ un treillis **borné** (ayant un plus petit élément $\sigma$ et un plus grand élément $M$).
*(On note souvent $\sigma = \bot$ et $M = \top$)*

Un élément $x \in T$ est **complémenté** s'il existe un $y \in T$ tel que :
$$
\begin{cases}
x \vee y = M \quad (\sup = \text{Top}) \\
x \wedge y = \sigma \quad (\inf = \text{Bottom})
\end{cases}
$$
Dans ce cas, $y$ est un **complément** de $x$.

> [!NOTE]
> **Définition du Treillis Complémenté :**
> Un treillis $T$ est dit **complémenté** si **chaque** élément de $T$ admet au moins un complément.
> 

*Remarque : $\sigma$ et $M$ sont toujours compléments l'un de l'autre.*

#### Exemple 1 : Compléments multiples

Ici, $d$ et $c$ sont tous les deux des compléments de $b$.

![[Excalidraw/treilli.md#^clippedframe=dfgd|center]]

---

> [!example] Exemple Important : L'ensemble des Parties
> Le treillis $(\mathcal{P}(E),\subseteq)$ est un treillis **distributif et complémenté** (Algèbre de Boole).
>
> Pour toute partie $A \subset E$, son complément est $A^c = E \setminus A$.
> On vérifie les bornes (ici $\sigma = \emptyset$ et $M = E$) :
> $$
> \begin{align}
> & A \wedge A^c = A \cap A^c = \emptyset \\
> & A \vee A^c = A \cup A^c = E
> \end{align}
> $$
> Tout élément $A$ possède un complément **unique** $A^c$.

---

### Proposition : Treillis des Diviseurs $D(N)$

Soit $N \in \mathbb{N}^*$. Le treillis $(D(N), |)$ est toujours **distributif**.
Cependant, il n'est **complémenté** que si $N$ est **sans facteur carré** (produit de nombres premiers distincts).

#### Cas 1 : Exemple Complémenté (Algèbre de Boole)
Soit $N = 30 = 2 \times 3 \times 5$.
Le diagramme de Hasse est un hypercube. Chaque élément a un complément unique.
*(Ex: Le complément de 6 est 5)*.

![[Excalidraw/treilli.md#^clippedframe=cubtreili|center|500]]

#### Cas 2 : Attention (Non Complémenté)
Si $N = 2^3 \times 3^5$.
Ce treillis est une grille, mais **il n'est pas complémenté**.
*Raison :* L'élément $2$ n'a pas de complément $y$.
- Pour que $2 \wedge y = 1$, $y$ ne doit pas être divisible par 2.
- Si $y$ n'est pas divisible par 2, alors $2 \vee y = \text{PPCM}(2, y) = 2 \times y$.
- On ne pourra jamais atteindre le maximum $N$ (qui contient $2^3$).

![[Excalidraw/treilli.md#^clippedframe=jesuuss|center|500]]

#### Exemple : L'Algèbre de Boole $\mathbb{B}^n$

$\mathbb{B}^n$ : l'ensemble des mots binaires de longueur $n$.

![[Excalidraw/treilli.md#^clippedframe=cccc|center|500]]

> [!warning] Attention
> Pour $n \ge 2$, la structure réelle est un **hypercube**, pas une chaîne linéaire.
> Les opérations sont bit-à-bit.

Le complément d'un mot $A = a_1 \dots a_n$ est noté $\overline{A}$ où $e_i = 1 - a_i$.
Exemple : $\overline{0110} = 1001$.

---

> [!tldr] Résumé : Distributivité
> **Pourquoi $(D(N),|)$ est-il distributif ?**
> Car c'est un sous-treillis de $(\mathbb{N},|)$, qui est lui-même distributif.
>
> **Condition de Complémentarité :**
>  Un élément $x \in D(N)$ est dit **complémenté** si et seulement si :
> $$
> x \wedge \frac{N}{x} = 1
> $$
> Autrement dit : $\text{pgcd}(x, \frac{N}{x}) = 1$.

#### Exemple : Le Treillis $(D(64), |)$

Ici $N = 64 = 2^6$. Les diviseurs sont $\{2^0, 2^1, \dots, 2^6\}$.
Comme 64 est une puissance d'un nombre premier, ce treillis est une **chaîne** (ordre total).

![[Excalidraw/treilli.md#^clippedframe=chaineee|center|600]]

**Vérification des compléments :**
- $1 \wedge \frac{64}{1} = \text{pgcd}(1, 64) = 1$
  $\Rightarrow$ **$1$ est complémenté** (son complément est 64).

- $2 \wedge \frac{64}{2} = \text{pgcd}(2, 32) = 2 \neq 1$
  $\Rightarrow$ **$2$ n'est pas complémenté**
  *(En effet, $\{2, 32\}$ ne sont pas premiers entre eux).*

- $4 \wedge \frac{64}{4} = \text{pgcd}(4, 16) = 4 \neq 1$
  $\Rightarrow$ **$4$ n'est pas complémenté**.
  *(En effet, $\{4, 16\}$ ne sont pas premiers entre eux).*


> [!failure] Théorème (Critère de non-complémentarité)
> Le Treillis $(D(N),|)$ est complémenté (c'est une Algèbre de Boole)
> $$\iff N \text{ est sans facteur carré}$$
> (C'est-à-dire que $N$ n'est pas divisible par le carré d'un nombre premier).