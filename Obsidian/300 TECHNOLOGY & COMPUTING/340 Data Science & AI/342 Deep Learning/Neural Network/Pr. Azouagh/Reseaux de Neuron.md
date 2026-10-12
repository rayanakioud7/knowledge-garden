Date: 2026-04-01
Tags: [[Mathematics]], [[Machine Learning]], [[Python]], [[Neural Networks]], [[Deep Learning]], [[Theory]]

> [!info] 
> - Neurone, Perceptron
> - Plusieurs mesures
> - Théorème d'approximation universelle

> see also : [[Neural Networks - Foundations]]

# Introduction

Le cerveau humain est composé de plus de ~={purple}86 milliards=~ de neurones.
Chaque neurons reçois des signaux électrique d'autres et réagit en envoyant un nouveau signal à ses neurones voisins

![[Pasted image 20260401211033.png]]

---
 **Maintenant on va construit un neuron artificiel**
# C'est quoi un neuron artificiel?
C'est le compose de deux fonctions, c-a-d un neuron artificiel est une fonction définit par deux parties 

![[reseau de neuron#^clippedframe=percepton|center|600]]
$$
F(x_1,x_2,...,x_n)=\phi(f(x_1,x_2,...,x_n))=\phi(\sum\limits_{i=1}^n a_i x_i)
$$
- $a_i$ indique les poids (weights)
- $f$ depend des coefficient $a_i$ et de fonction d'activation


On va choisir une fonction d'activation: 
	la marche de `Heaviside`

$$
H=\begin{cases} 1 \quad \text{si} \quad x\geq 0 \\
0 \quad \text{si} \quad x<0
\end{cases}
$$
![[Pasted image 20260401202844.png|center]]

---

![[reseau de neuron#^clippedframe=hevuside|center|600]]

**On a:**

$$
F(x_1,x_2,...,x_n)=H(a_1x_1+a_2x_2+...+a_nx_n)=\begin{cases}
1 \quad \text{si} \quad a_1x_1+a_2x_2+...+a_nx_n \geq0 \\
0 \quad \text{si} \quad a_1x_1+a_2x_2+...+a_nx_n <0
\end{cases}
$$
## Exemple

![[reseau de neuron#^clippedframe=exemple|center|600]]

$$
F(x,y)=H(2x+3y)=\begin{cases} 1 \quad \text{si} \quad 2x+3y \geq 0 \\
0\quad \text{si} \quad 2x+3y < 0
\end{cases}
$$
$$
\begin{align}
F(4,-1)=H(2\times4+3\times(-1))=H(5)=1 \\
F(-3,1)=H(2\times3+3\times1)=H(-3)=0
\end{align}
$$
**Representation Graphique:**
![[Excalidraw/reseau de neuron.md#^clippedframe=exemple function|center|500]]

![[Pasted image 20260414212912.png]]


Cette separation prend de faire des predictions. en effet (~={green}partie vert=~) appartient a la classe 1, et un point situe a (~={red}partie rouge=~) appartient a la classe 0.

---

# Neurone avec biais 

Le perceptron linéaire ou neurone artificiel, a un biais qui vaut 0, à la différence du perceptron affine pour lequel le biais est un réel quelconque

![[Pasted image 20260414204220.png]]


## Exemple 

![[Excalidraw/reseau de neuron.md#^clippedframe=exooo|center|500]]

$$
F(x,y)=H(4x-y+2)=\begin{cases}
1 \quad \text{si} \quad 4x-y+2 \geq 0 \\
0 \quad \text{sinon}
\end{cases}
$$

![[Pasted image 20260414205019.png|center|500]]


---
# Fonctions d'activation

Une fonction d'activation est une fonction $f : \mathbb{R} → \mathbb{R}$ associée à un neurone.

# Fonction marche de Heaviside
Utiliser dans la premier section de cours
La fonction a l'avantage d'être très simple et de séparer clairement les résultats en deux catégories (0 et 1)

![[Pasted image 20260414205437.png]]

## Fonction affine

![[Pasted image 20260414205604.png]]

## D'autres fonctions d'activation notables

![[Pasted image 20260401175443.png]]

---
# Théorie du perceptron

| x   | y   | x et y | x ou y |
| --- | --- | ------ | ------ |
| 1   | 0   | 0      | 1      |
| 1   | 1   | 1      | 1      |
| 0   | 0   | 0      | 0      |
| 0   | 1   | 0      | 1      |

## Neurone `OU`


![[Pasted image 20260414210202.png]]

$$
F(x,y)=H(x+y-1)=\begin{cases}
1 \quad \text{si} \quad x+y-1 \geq 0 \\
0 \quad \text{sinon}
\end{cases}
$$

![[Pasted image 20260414210430.png]]


| x   | y   | x ou y | H(x+y-1) |
| --- | --- | ------ | -------- |
| 1   | 0   | 1      | 1        |
| 1   | 1   | 1      | 1        |
| 0   | 0   | 0      | 0        |
| 0   | 1   | 1      | 1        |

## Neurone `ET`

On peut également réaliser l'opération "x ET y" (qui renvoie "vrai" uniquement si x et y sont vrais) en choisissant les poids a = 1, b = 1, c = −2.

![[Pasted image 20260414210808.png]]

$$
F(x,y)=H(x+y-2)=\begin{cases}
1 \quad \text{si} \quad x+y-2 \geq 0 \\
0 \quad \text{sinon}
\end{cases}
$$
![[Pasted image 20260414210931.png]]

| x   | y   | x et y | H(x+y-2) |
| --- | --- | ------ | -------- |
| 1   | 0   | 0      | 0        |
| 1   | 1   | 1      | 1        |
| 0   | 0   | 0      | 0        |
| 0   | 1   | 0      | 0        |

## Neurone `OU exclusif`?

![[Pasted image 20260414211217.png|center|500]]

Il n'existe pas de perceptron (affine, à deux entrées et de fonction d'activation la fonction marche de Heaviside) qui réalise le "ou exclusif". Nous sommes convaincus géométriquement qu'il n'existe pas de droite qui sépare les ronds bleus des carrés rouges. 

> C'est un résultat important qui montre la limitation d'un seul neuron

## Demonstration 

| x   | y   | x OUex y |
| --- | --- | -------- |
| 1   | 0   | 1        |
| 1   | 1   | 0        |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
Supposons par l'absurde qu'il existe un neurone qui réalise "OU exclusif"
a et b sont des poids et c est le biais
$$
\begin{align}
F(1,0)=&H(a\cdot1+b\cdot 0+c)=H(a+c)=1 \Rightarrow a+c \geq 0 \\
F(0,1)=&H(a\cdot0+b\cdot 1+c)=H(b+c)=1 \Rightarrow b+c \geq 0 \\
F(0,0)=&H(a\cdot0+b\cdot 0+c)=H(c)=0 \Rightarrow c < 0 \\
F(1,1)=&H(a\cdot1+b\cdot 1+c)=H(a+b+c)=0 \Rightarrow a+b+c < 0 \\
\end{align}
$$
D'une part:
$$
a+b+2c \geq 0
$$
d'autre part:
$$
a+b+2c <0
$$

> **CONTRADICTION** 
>ainsi il n'existe pas 1 seul neurone qui peut réalisé le "ou exclusif"

---
# Reseaux de Neurones

Un neurone permet de séparer l'espace en deux parties, la frontière étant linéaire (avec deux entrées c'est une droite, avec trois entrées c'est un plan. . .). Un neurone est trop élémentaire pour résoudre nos problèmes, par exemple il ne peut réaliser le "ou exclusif". Comment faire mieux ? En connectant plusieurs neurones !

## Couches de Neurones

Si à la dernière couche la fonction ne contient qu'un seul neurone, alors:
$$
F: \mathbb{R}^n \rightarrow \mathbb{R}
$$

![[Pasted image 20260414221854.png]]

Sinon : 
$$F: \mathbb{R}^n \rightarrow \mathbb{R}^p$$
$(y_1, . . . , y_p) = F (x_1, . . . , x_n)$ où $(x_1, . . . , x_n) ∈ R^n$ est l'entrée et $(y_1, . . . , y_p)$ est la sortie.

![[Pasted image 20260414222021.png|center]]


### Exemple

![[Pasted image 20260414222304.png|center|600]]

On pose $x=3$ et $y=2$

$$
F(3,2)=H(4\cdot ReLU(3\cdot2+2 \cdot-1)+ 5 \cdot Relu(3\cdot-3 +2\cdot 2) - 1)=1
$$
Plus simplement, on calcule les neurones indépendamment de haut en bas,
$$1. \quad ReLU(3\cdot2+2 \cdot-1)=ReLU(4)=4$$
$$2. \quad ReLU(3\cdot-3+2 \cdot2)=ReLU(-5)=0$$
enfin, la dernière couche
$$3. \quad H(4\cdot4+5 \cdot0 -1)=H(15)=1$$
donc $F(3,2)=1$ est le résultat de ce reseau de neurone pour les inputs $x=3$ et $y=2$


### Remarque 

On peut relier un neurone à tous les neurones de la couche suivante, On dit que la seconde couche est **dense** ou **complètement connectée**.
Mais on peut aussi choisir de ne relier que certains neurones entre eux.

![[Pasted image 20260414223633.png|center]]


## Théorie des réseaux de neurones

### `OU`

![[Pasted image 20260414230612.png]]

![[Pasted image 20260414224124.png]]

### `ET`

![[Pasted image 20260414230654.png]]

![[Pasted image 20260414224257.png]]

### OU Exclusif
Nous avons vu qu'un seul neurone ne permet pas de réaliser la fonction associée au "OU exclusif" . Avec plusieurs neurones c'est facile !

L'idée de ce réseau vient du fait que l'opération "OU exclusif" est une combinaison de "OU" et de "ET" : 
$$x \text{ OUex } y = (x \text{ ET non } y) \text{ OU }(\text{non } x \text{ ET } y)$$

Le neurone du haut réalise "x ET non y", le neurone du bas  "non x ET y" et celui de sortie l'opération "OU".

![[Pasted image 20260414230817.png]]

Ce réseau permet d'obtenir une valeur $F (x, y) = 1$ en $(1, 0)$ et $(0, 1)$ et une valeur $F (x, y) = 0$ en $(0, 0)$ et $(1, 1)$.

![[Pasted image 20260414230940.png|center|400]]

| x   | y   | x OUex y |
| --- | --- | -------- |
| 1   | 0   | 1        |
| 1   | 1   | 0        |
| 0   | 0   | 0        |
| 0   | 1   | 1        |

---
# Ensemble Réalisable
 
 On rappelle qu'un ensemble $A ⊂ \mathbb{R}^2$ découpe le plan en trois parties disjointes : l'intérieur, la frontière et l'extérieur :
 $$int(A) \quad Fr(A) \quad Ext(A)$$

![[Pasted image 20260414231630.png|center|500]]

## Définition

Un ensemble $A$ est dit **réalisable par un réseau de neurones** s'il existe un réseau de neurones $R$ (d'unique fonction d'activation la fonction marche de *Heaviside*) tel que la fonction $F : \mathbb{R}^2 → \mathbb{R}$ associée à R vérifie :

$$\begin{align} F(x,y)=1 \quad &\text{pour tout } (x,y) \in Int(A) \\ F(x,y)=0 \quad &\text{pour tout } (x,y) \in Ext(A) \end{align}$$

![[Pasted image 20260414232244.png|center|500]]

### Remarque 
On n'exige rien sur la frontière $Fr(A)$. F peut  prendre la valeur 0 ou la valeur 1 

![[Excalidraw/reseau de neuron.md#^clippedframe=rmrq frontiere|center|600]]

## Proposition
Toute zone polygonale convexe à $n$ côtés est réalisable par un réseau de $n + 1$ neurones.

![[Pasted image 20260415145953.png|center|500]]

### Preuve

 Un polygone convexe à $n$ côtés est l'intersection de $n$ demi-plans. Chaque demi-plan, bordé par une droite d'équation : $a_i x +b_i y +c_i=0\quad i=1,...,n$  dans la premiere couche.  et en plaçant en 2eme couche un neurone qui réalise un `ET`

## Proposition

Si $A$ et $B$ sont deux ensembles du plan réalisables par des réseaux de neurones, alors:
$$A \cup B \quad A\cap B \quad A^c \quad A \backslash B$$
sont aussi réalisables

![[Pasted image 20260415150856.png]]

### Preuve 
Si $A$ est réalisé par un réseau $R_A$ et $B$ par un réseau $R_B$, alors on crée un nouveau réseau $R$ en superposant $R_A$ et $R_B$ et en ajoutant un neurone `OU`, `ET` ou `NON`

1. $A \cup B$ : réaliser en ajoutant un neurone `OU` dans la sortie

![[Pasted image 20260415150947.png]]

2. $A \cap B$ on met un neurone `ET` au lieu de `OU`

![[Pasted image 20260415151329.png]]

3. our réaliser le complément d'un ensemble $A$ : $A^c$, on utilise un neurone `NON` dans la sortie

![[Pasted image 20260415151658.png]]

4. $A \backslash B = A\cap B^c$ 

tout d'abord on réalise $B^c$ avec neurone `NON`
![[Pasted image 20260415151930.png]]

après on réalise $A \cap B^c$ avec neurone `ET`

![[Pasted image 20260415152109.png]]


## Proposition

Tout polygone (convexe ou non) est réalisable par un réseau de neurones.
### Preuve
Un polygone peut être découpé en triangles. Chaque triangle est réalisable, donc l'union des triangles l'est aussi.

![[Pasted image 20260415154244.png]]

## Théorème

>On rappelle qu'une courbe de Jordan C est une courbe fermée simple

Un ensemble $A$ délimité par une courbe de Jordan peut être approché par un ensemble $A'$ réalisable par un réseau de neurones.

![[Pasted image 20260415154652.png]]

Une courbe de Jordan peut être approchée arbitrairement- ment bien par un polygone

# Théorème d'approximation universelle

Soit $f: [a,b] \rightarrow \mathbb{R}$ continue, alors $\exists$ une fonction $F$ provenant d'un reseau de neurones, t.q:
$$F(x) \simeq f(x) \quad \forall x \in [a,b]$$
#### Remarque 
>Autrement dit, un réseau de neurones n'a pas de limite théorique et peut approximer n'importe quelle forme, à condition que la fonction soit continue sur un intervalle fermé borné.

**Voici différents neurones et les fonctions qu'ils réalisent**
La fonction marche de *Heaviside*. Avec $a>0$

![[Excalidraw/reseau de neuron.md#^clippedframe=fonction marche|center|700]]

La fonction marche à l'envers décalée vers la droite, avec $b > 0$.

![[Excalidraw/reseau de neuron.md#^clippedframe=fsgas|center|5000]]

Selon les cas, la valeur au niveau de la marche est 0 ou 1. On peut obtenir l'autre situation en rajoutant un neurone de type `NON`.

![[Pasted image 20260415162718.png]]

## Fonctions Créneaux
 Pour réaliser un "créneau", l'idée est d'additionner une marche à l'endroit et une marche à l'envers.
![[Excalidraw/reseau de neuron.md#^clippedframe=QlM93ixu|center|600]]

## Conclusion 
Si on veut une marche plus haute il suffit de changer les poids du neurone de sortie d'un facteur k.

![[Pasted image 20260415165439.png|center|700]]

## Fonctions en escalier
On réalise des doubles créneaux

![[Pasted image 20260415170045.png]]

Toute fonction en escalier est réalisable par un réseau de neurones

![[Pasted image 20260416014705.png]]


 ---
## ~={red}References=~

[[Réseau_Neurons.pdf]]

[[Neural Networks from Scratch in Python (Harrison Kinsley, Daniel Kukieła) (z-library.sk, 1lib.sk, z-lib.sk).pdf]]