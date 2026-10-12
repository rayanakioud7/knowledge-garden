Date: 2026-02-07
Tags: [[Mathematics]], [[Discrete Mathematics]]

# Algèbre de Boole

## 1. Introduction & Définition

### Définition
Soit $(B, \leq)$ un ensemble ordonné ayant au moins 2 éléments.
On note $\sigma = \inf(B)$ (le plus petit élément) et $\Gamma = \sup(B)$ (le plus grand élément)

Si $(B,\leq)$ est un treillis :
1.  ~={blue}Distributif=~
2.  ~={cyan}Complémenté=~

Alors on dira que $(B,\leq)$ est une **Algèbre de Boole**.

![[Pasted image 20260207175103.png|center|500]]
### Exemple Fondamental
Si $E$ est un ensemble non vide quelconque, alors $\mathcal{P}(E)$ (l’ensemble de ses parties), ordonné par l'inclusion $\subseteq$, est une algèbre de Boole.

---

## 2. Les Trois Opérations
Dans une algèbre de Boole, on définit les opérations suivantes :

$$
\begin{aligned}
\bullet \ \textbf{Intersection (ET)} : \ & \wedge : B\times B \rightarrow B \\
&(x,y) \rightarrow x\wedge y \quad (\inf\{x,y\})\\
\\
\bullet \ \textbf{Union (OU)} : \ & \vee : B\times B \rightarrow B \\
&(x,y) \rightarrow x\vee y \quad (\sup\{x,y\})\\
\\
\bullet \ \textbf{Complément (NON)} : \ & - : B \rightarrow B \\
&x \rightarrow \bar{x}
\end{aligned}
$$

**Condition de complémentarité :**
$$y=\bar{x} \iff \begin{cases}
x\wedge y=\sigma \\
x\vee y=\Gamma
\end{cases}$$

---

## 3. Exemples Classiques

### A. Ensemble des Parties $(\mathcal{P}(E), \subseteq)$
* **Structure :** $(\mathcal{P}(E), \subseteq, \emptyset, E)$
* **Complément :** Le complément d'une partie $A$ est $A^c = E \setminus A$.
* ![[algebre de boole#^clippedframe=ensemble des parties|center|500]]

### B. Les Mots Binaires $(\mathbb{B}^n, \leq)$
* $\mathbb{B}^n$ désigne l’ensemble des mots binaires de longueur $n$.
* Il contient $2^n$ éléments.
* **Ordre :** On ordonne $\mathbb{B}^n$ par la relation bit-à-bit :
    $$a_1...a_n \preceq b_1...b_n \iff \forall i, a_i \leq b_i$$
* **Diagramme :** Le diagramme de Hasse de $\mathbb{B}^n$ est un **Hypercube** (n-cube).

![[Pasted image 20260207174603.png|center|400]]

### C. Les Diviseurs $(D(N), |)$

Pour que $(D(N), |, 1, N)$ soit une Algèbre de Boole, il faut une condition stricte sur $N$ :

> [!WARNING] Condition Importante
> $(D(N), |)$ est une algèbre de Boole **SI ET SEULEMENT SI** $N$ est **sans facteur carré** (square-free).
> C'est-à-dire que $N$ n'est divisible par aucun carré de nombre premier ($p^2$).

* *Exemple Oui :* $N=30$ ($2 \times 3 \times 5$). Pas de carrés. C'est une algèbre de Boole.
* *Exemple Non :* $N=12$ ($2^2 \times 3$). Ce n'est **pas** une algèbre de Boole (le 2 n'a pas de complément).

![[algebre de boole#^clippedframe=deviseur de 30|center|500]]

---

## 4. Propriétés de Calcul

> [!NOTE] Théorème d'unicité
> Dans toute algèbre de Boole, chaque élément possède un **unique** complément.

### Propriétés de base ($\vee$ et $\wedge$)
| Loi                   | Union ($\vee$)                          | Intersection ($\wedge$)                         |
| :-------------------- | :-------------------------------------- | :---------------------------------------------- |
| **Commutativité**     | $x\vee y = y \vee x$                    | $x\wedge y = y \wedge x$                        |
| **Associativité**     | $x \vee (y \vee z) = (x \vee y) \vee z$ | $x \wedge (y \wedge z) = (x \wedge y) \wedge z$ |
| **Élément neutre**    | $x \vee \sigma = x$                     | $x \wedge \Gamma = x$                           |
| **Élément absorbant** | $x \vee \Gamma = \Gamma$                | $x \wedge \sigma = \sigma$                      |
| **Idempotence**       | $x \vee x = x$                          | $x \wedge x = x$                                |

### Distributivité et Absorption
$$
\begin{align}
\text{Distributivité :} \quad & x \wedge (y\ \vee z)=(x \wedge y)\vee(x \wedge z) \\
& x \vee (y\ \wedge z)=(x \vee y)\wedge(x \vee z) \\
\\
\text{Absorption :} \quad & x\wedge(x\vee y)=x \\
& x\vee(x\wedge y)=x
\end{align}
$$
### Propriétés de la complémentarité
$$
\begin{align}
x\vee \bar{x}&=\Gamma\\
x\wedge \bar{x}&=\sigma\\
\overline{\left( \bar{x} \right)} &=x \\
\bar{\sigma} &=\Gamma\\
\bar{\Gamma} &=\sigma
\end{align}
$$
### Liens entre ∧,∨ et ⪯
$$
\begin{align}
x \wedge y &= x \Leftrightarrow x \leq y \\
x \vee y &= y \Leftrightarrow x \leq y
\end{align}
$$

### Lois de De Morgan
$$
\begin{align}
\text{De Morgan :} \quad & \overline{x \wedge y} = \bar{x} \vee \bar{y} \\
& \overline{x \vee y} = \bar{x} \wedge \bar{y} \\
\end{align}
$$

### Liens entre Opérations et Ordre
> [!important] Proposition Fondamentale
> $$x \leq y \iff x \wedge \bar{y} = \sigma$$

**Démonstration :**
* ($\Rightarrow$) Si $x \leq y$, alors $x \wedge y = x$. Donc $x \wedge \bar{y} = (x \wedge y) \wedge \bar{y} = x \wedge (y \wedge \bar{y}) = x \wedge \sigma = \sigma$.
* ($\Leftarrow$) Supposons que $x \wedge \bar{y} = \sigma$, alors $x = x \wedge \Gamma = x \wedge (y \vee \bar{y}) = (x \wedge y) \vee (x \wedge \bar{y}) = (x \wedge y) \vee \sigma = x \wedge y$. Donc $x \leq y$.

---

## 5. Structure et Atomes

### Définition : Atome
Un élément $a \in B$ est un **atome** s'il est un **successeur immédiat** de $\sigma$ (le plus petit élément).
* C-à-d : $\sigma < a$ et il n'existe pas de $z$ tel que $\sigma < z < a$.

### Exemples d'atomes
1.  **Dans $\mathcal{P}(\{a,b,c\})$ :** Les singletons $\{a\}, \{b\}, \{c\}$.
2.  **Dans $\mathbb{B}^3$ :** Les mots de poids 1 : $100, 010, 001$.
3.  **Dans $D(30)$ :** Les nombres premiers diviseurs : $2, 3, 5$.

### Théorème de Représentation (Stone fini)

> [!thm] Théorème de la base atomique
> Soit $B$ une algèbre de Boole finie. Tout élément $x \in B \setminus \{\sigma\}$ s'écrit de manière **unique** comme la borne supérieure (le $\vee$) d'un ensemble d'atomes.
> 
> $$x = a_1 \vee a_2 \vee \dots \vee a_k$$
> 
> où $\{a_1, \dots, a_k\}$ est l'ensemble des atomes inférieurs ou égaux à $x$.

---

> [!NOTE] Theoreme
> 
> Soit $x \in \mathbb{b} \setminus \{\sigma\}$ est une algèbre de Boole finie 
> 1. il existe au moins un atome $a$ tel que $a \leq x$
> 2. Soit $b_1, b_2, . . .,b_p$ les atomes $\leq x$, alors $x = b_1 ∨ b_2 ∨ · · · ∨ b_p$
> 3. A l'ordre de facteur près, cette étudiant est unique. Si $b_1, b_2, . . .,b_p$ ; $c_1...c_p$ sont alors $\leq x$
> 	tel que $x = b_1 ∨ b_2 ∨ · · · ∨ b_p=x = c_1 ∨ c_2 ∨ · · · ∨ c_p$
> 	alors, $\{b_1,...,b_p\}=\{c_1,...,c_p\}$
> 
> ![[algebre de boole#^clippedframe=theormmm|center|500]]
> 

---
## 6. Isomorphisme

### Rappel: Bijection

![[Excalidraw/algebre de boole.md#^clippedframe=bijectiv|center|500]]
$$
\forall x,y \in \mathbb{B}_1, \ x\leq y \Rightarrow \varphi(x) \leq \varphi(y)
$$

### Définition
Deux algèbres de Boole $(B_1, \leq_1)$ et $(B_2, \leq_2)$ sont isomorphes s'il existe une bijection $\varphi : B_1 \rightarrow B_2$ qui **respecte** l'ordre (et donc les opérations).
$$x \leq_1 y \iff \varphi(x) \leq_2 \varphi(y)$$

### Exemple d'Isomorphisme
$(D(30), |)$ est **isomorphe** à $\mathcal{P}(\{a,b,c\})$.

![[Excalidraw/algebre de boole.md#^clippedframe=isomorphe|center|500]]

On associe chaque nombre premier à un singleton :
$$
\begin{align}
\varphi : \ D(30)& \rightarrow \mathcal{P}(\{a,b,c\})\\
& 1 \rightarrow \emptyset \\
& 30 \rightarrow \{a,b,c\} \\
\text{Atomes : } \quad & 2 \xrightarrow{\varphi} \{a\} \\
& 3 \xrightarrow{\varphi} \{b\} \\
& 5 \xrightarrow{\varphi} \{c\}
\end{align}
$$
Par extension : $6 = 2 \times 3 \xrightarrow{\varphi} \{a, b\}$, etc.

---
### Théorème de Stone

> [!NOTE] **Théorème de Stone**
> 1. Le cardinal (nombre d'éléments) d’une algèbre de Boole finie est toujours une **puissance de 2** ($2^n$).
> 2. Toutes les algèbres de Boole ayant $2^n$ éléments sont **isomorphes** entre elles (elles ont la même structure).
> 3. Une algèbre de Boole à $2^n$ éléments possède $n$ atomes et son diagramme de Hasse est un **Hypercube** ($n$-cube).

### Exemple Comparatif : $N=40$

Soit $N = 40$. La décomposition en facteurs premiers est $40 = 2^3 \times 5$.

**1. Avec la divisibilité standard $(D(40), |)$ :**
Ce n'est **PAS** une algèbre de Boole.
* **Raison :** $40$ est divisible par un carré ($2^2 = 4$).
* **Conséquence :** Le treillis n'est pas complémenté (ex: 2 n'a pas de complément).
* **Visuel :** Le diagramme est une "échelle" (ou grille), pas un cube.

![[Excalidraw/algebre de boole.md#^clippedframe=P8Y8qQJf|center|500]]

---

**2. Avec une relation artificielle $(D(40), \mathfrak{R})$ :**
Puisque l'ensemble $D(40)$ contient $8$ éléments et que $8 = 2^3$, le Théorème de Stone nous dit qu'il **existe** une relation d'ordre $\mathfrak{R}$ qui peut transformer cet ensemble en Algèbre de Boole.

> [!WARNING] Attention
> Pour faire cela, on doit abandonner la divisibilité et "forcer" les nombres dans une structure de Cube (isomorphe à $\mathbb{B}^3$).

**Exemple de structure forcée en Cube :**
![[Excalidraw/algebre de boole.md#^clippedframe=rajm|center|400]]
*(Notez que dans ce diagramme, les flèches ne suivent plus la divisibilité stricte, c'est une nouvelle structure).*

---
## ~={red}References=~
[[Boole-25_251108_181440.pdf]]