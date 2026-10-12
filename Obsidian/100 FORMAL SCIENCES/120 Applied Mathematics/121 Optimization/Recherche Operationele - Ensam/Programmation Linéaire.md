Date: 2026-10-08
Tags: [[Recherche Opérationnelle]], [[Optimization]], [[Mathematical Modeling]], [[Linear Programming]], [[Algorithms]], [[Post-Optimisation]],  [[Simplexe]], [[Dualité]], [[ENSAM]]

---
# Programmation Linéaire (P.L.)

## 1. Définitions et Modélisation

### 1.1 La Programmation Linéaire

> [!info] Définition : Programmation Linéaire
> La programmation linéaire est une branche de la recherche opérationnelle dont l'objectif est de minimiser ou maximiser une fonction numérique multilinéaire (dite **fonction objectif** ou **fonction économique**) à plusieurs variables, sachant que ces dernières sont liées moyennant des équations ou des inéquations linéaires dites **contraintes**.

> [!info] Définition / Théorème : Programme Linéaire (PL)
> Un programme linéaire est une modélisation mathématique en R.O. dans lequel les variables sont des réels qui doivent satisfaire :
> 1. un ensemble d'équations et/ou d'inéquations linéaires (dites **contraintes**) ;
> 2. la valeur d'une fonction linéaire de ces variables (appelée **fonction objectif**) qu'on souhaite rendre minimum ou maximum.
> 
> **Ingrédients principaux :**
> - **Alternatives** → variables de décision (inconnues du problème, variables d'activité) ;
> - **Restrictions** → contraintes ;
> - **Fonction à optimiser** → fonction objectif (fonction économique).

### 1.2 Forme Générale d'un Programme Linéaire

$$
\begin{aligned}
\text{Maximiser ou Minimiser} \quad & z(x_1, x_2, \dots, x_n) = \sum_{j=1}^{n} c_j x_j \\
\text{s.c.} \quad & \sum_{j=1}^{n} a_{1j} x_j \;\; \le, =, \ge \;\; b_1 \\
& \sum_{j=1}^{n} a_{2j} x_j \;\; \le, =, \ge \;\; b_2 \\
& \hspace{1.4cm} \vdots \\
& \sum_{j=1}^{n} a_{mj} x_j \;\; \le, =, \ge \;\; b_m \\
& x_1, x_2, \dots, x_n \in \mathbb{R}
\end{aligned}
$$

### 1.3 Forme Canonique

> [!info] Définition / Théorème : Forme Canonique
> Un programme linéaire est dit **canonique** s'il est écrit sous la forme :
> $$
> (PC) \quad \begin{cases} [\max]\ z = c^{\top} x \\ A x \le b \\ x \ge 0 \end{cases}
> $$
> avec $A \in \mathbb{R}^{m \times n}$, $c \in \mathbb{R}^{n}$, $b \in \mathbb{R}^{m}$.
> 
> **Remarques (deux propriétés caractéristiques) :**
> 1. Toutes les variables sont astreintes à être positives ou nulles (non négatives) ;
> 2. Toutes les contraintes sont des **inéquations**.

### 1.4 Forme Standard

> [!info] Définition / Théorème : Forme Standard
> Un programme linéaire est dit **standard** s'il est écrit sous la forme :
> $$
> (PS) \quad \begin{cases} [\max]\ z = c^{\top} x \\ A x = b \\ x \ge 0 \end{cases}
> $$
> 
> **Remarques (deux propriétés caractéristiques) :**
> 1. Toutes les variables sont astreintes à être positives ou nulles ;
> 2. Toutes les autres contraintes sont des **équations**.

### 1.5 Passage entre les Formes

> [!info] Définition / Théorème : Équivalence Canonique $\leftrightarrow$ Standard
> Tout programme linéaire sous forme standard peut être écrit sous forme canonique, et tout programme linéaire sous forme canonique peut être écrit sous forme standard.

**Transformations élémentaires :**

$$
a x = b \iff \begin{cases} a x \le b \\ a x \ge b \end{cases}
$$

$$
a x \le b \iff a x + e = b, \quad e \ge 0 \quad \text{(variable d'écart)}
$$

$$
a x \ge b \iff a x - e = b, \quad e \ge 0 \quad \text{(variable d'excédent)}
$$

$$
x \gtrless 0 \iff \begin{cases} x = e_1 - e_2 \\ e_1, e_2 \ge 0 \end{cases}
$$

$$
\min f(x) = -\max\left(-f(x)\right)
$$

> [!warning] Piège / Cas Particulier
> Une variable d'écart $e$ s'ajoute à une contrainte $\le$ ; une variable d'excédent se soustrait d'une contrainte $\ge$. Dans les deux cas, la nouvelle variable doit satisfaire $e \ge 0$. Confondre les signes inverse le sens de la contrainte et fausse tout le modèle.

### 1.6 Algorithme de Construction d'un Programme Linéaire

> [!info] Définition / Théorème : Algorithme de Modélisation
> Afin de transformer un problème réel en un programme linéaire, on suit l'algorithme suivant :
> 1. Identifier les **variables de décision** nécessaires ;
> 2. Identifier les **contraintes** du problème et les exprimer en fonction des variables d'activité ;
> 3. Identifier la **fonction objectif** ;
> 4. Écrire le programme linéaire et spécifier si le critère de sélection est à **maximiser** ou à **minimiser**.

---

## 2. Exemples de Modélisation

### 2.1 Problème de Production de Voitures

> [!example] Exemple d'Application : Production de voitures
> **Énoncé :** Un fabricant de voitures propose 2 modèles : grosses voitures vendues à $16000\,€$ et petites voitures à $10000\,€$. L'approvisionnement est limité en deux matières premières :
> 
> | Matière | Caoutchouc | Acier |
> | :--- | :--- | :--- |
> | **Disponibilités** | 400 unités | 600 unités |
> 
> Une petite voiture nécessite 1 unité de caoutchouc et 1 unité d'acier ; une grosse voiture nécessite 1 unité de caoutchouc et 2 unités d'acier.
> **Question :** combien de petites et de grosses voitures produire pour maximiser le chiffre d'affaires ?
> 
> **Résolution :**
> 
> > [!abstract] Modélisation Mathématique : Production de voitures
> > **Variables de décision :** $x$ = nombre de grosses voitures produites ; $y$ = nombre de petites voitures produites.
> > **Fonction Objectif :** $[\max]\ z = 16000\,x + 10000\,y$
> > **Contraintes :**
> > $$
> > \begin{aligned}
> > x + y &\le 400 && \text{(caoutchouc)} \\
> > 2x + y &\le 600 && \text{(acier)} \\
> > x, y &\ge 0
> > \end{aligned}
> > $$
> 
> **Calcul de l'optimum :** les deux contraintes sont saturées à l'optimum. Soustraction des deux équations :
> $$
> (2x + y) - (x + y) = 600 - 400 \implies x = 200
> $$
> $$
> y = 400 - x = 400 - 200 = 200
> $$
> $$
> z^{*} = 16000(200) + 10000(200) = 3\,200\,000 + 2\,000\,000 = 5\,200\,000\,€
> $$
> 
> **Interprétation numérique :** Solution optimale $x^{*} = 200$, $y^{*} = 200$, $z^{*} = 5\,200\,000\,€$.

> ![[{5E9C851B-ED98-44E4-BA4B-1DF236AF86DD}.png|540]]
> *(Description précise de l'illustration : Domaine des Solutions Admissibles (DSA) délimité par $x+y \le 400$, $2x+y \le 600$ et $x,y \ge 0$, avec le gradient de la fonction objectif $z$ pointant vers le sommet optimal $(200, 200)$)*

### 2.2 Problème de Production (Produits $P_1$, $P_2$ sur 5 machines)

> [!example] Exemple d'Application : Optimisation de production (machines A–E)
> **Énoncé :** Une usine fabrique deux produits $P_1$ et $P_2$. Heures de fabrication unitaires sur les machines $A, B, C, D, E$ :
> 
> | | A | B | C | D | E |
> | :--- | :--- | :--- | :--- | :--- | :--- |
> | $P_1$ | 0 | 1,5 | 2 | 3 | 3 |
> | $P_2$ | 3 | 4 | 3 | 2 | 0 |
> | **Disponibilité** | 39 h | 60 h | 57 h | 70 h | 57 h |
> 
> Marges brutes : $M_1 = 1700$ UM, $M_2 = 3200$ UM.
> **Question :** écrire le PL déterminant les quantités à fabriquer pour maximiser la marge brute.
> 
> **Résolution :**
> 
> > [!abstract] Modélisation Mathématique : Production $P_1$/$P_2$
> > **Variables de décision :** $x_1$ = quantité à fabriquer de $P_1$ ; $x_2$ = quantité à fabriquer de $P_2$.
> > **Fonction Objectif :** $[\max]\ z = 1700\,x_1 + 3200\,x_2$
> > **Contraintes :**
> > $$
> > \begin{aligned}
> > 3x_2 &\le 39 && \text{(machine A)} \\
> > 1{,}5\,x_1 + 4x_2 &\le 60 && \text{(machine B)} \\
> > 2x_1 + 3x_2 &\le 57 && \text{(machine C)} \\
> > 3x_1 + 2x_2 &\le 70 && \text{(machine D)} \\
> > 3x_1 &\le 57 && \text{(machine E)} \\
> > x_1, x_2 &\ge 0
> > \end{aligned}
> > $$

### 2.3 Problème de Transport

> [!example] Exemple d'Application : Transport de métal (Casa / El Jadida $\to$ Tanger / Kénitra / Agadir)
> **Énoncé :** Une entreprise possède trois usines (Tanger, Kénitra, Agadir) nécessitant respectivement $400$, $300$, $200$ tonnes de métal par semaine. Les stocks disponibles sont $550$ tonnes (Casa) et $350$ tonnes (El Jadida). Coûts unitaires de transport :
> 
> | | Tanger | Kénitra | Agadir |
> | :--- | :--- | :--- | :--- |
> | **Casa** | 5 | 6 | 3 |
> | **El Jadida** | 3 | 5 | 4 |
> 
> Envoyer $x$ tonnes de Casa à Kénitra coûte $6x$ UM. Conditions : (i) demandes satisfaites ; (ii) quantités demandées à chaque stock $\le$ disponibilités ; (iii) quantités positives ou nulles ; (iv) coût total minimal.
> 
> **Résolution :**
> 
> > [!abstract] Modélisation Mathématique : Problème de transport
> > **Variables de décision :** $x_{i,j}$ = nombre de tonnes acheminées chaque semaine depuis le stock d'indice $i$ ($1$ = Casa, $2$ = El Jadida) vers l'usine d'indice $j$ ($1$ = Tanger, $2$ = Kénitra, $3$ = Agadir), avec $x_{i,j} \ge 0$.
> > **Fonction Objectif :**
> > $$
> > [\min]\ z = 5x_{11} + 6x_{12} + 3x_{13} + 3x_{21} + 5x_{22} + 4x_{23}
> > $$
> > **Contraintes :**
> > $$
> > \begin{aligned}
> > x_{11} + x_{21} &\ge 400 && \text{(demande Tanger)} \\
> > x_{12} + x_{22} &\ge 300 && \text{(demande Kénitra)} \\
> > x_{13} + x_{23} &\ge 200 && \text{(demande Agadir)} \\
> > x_{11} + x_{12} + x_{13} &\le 550 && \text{(disponibilité Casa)} \\
> > x_{21} + x_{22} + x_{23} &\le 350 && \text{(disponibilité El Jadida)} \\
> > x_{11}, x_{12}, x_{13}, x_{21}, x_{22}, x_{23} &\ge 0
> > \end{aligned}
> > $$

---

## 3. Résolution d'un Programme Linéaire

### 3.1 Méthodes de Résolution

> [!info] Définition / Théorème : Méthodes de résolution
> Les méthodes suivantes sont les plus utilisées :
> 1. **Méthode graphique** ;
> 2. **Méthode algébrique** ;
> 3. **Méthode Simplexe** ;
> 4. **Fonction Solveur Python** en utilisant **PuLP**.

### 3.2 Solutions Admissibles et Optimales

> [!info] Définition / Théorème : Solution admissible
> Une **solution admissible** est un ensemble de valeurs données aux variables qui satisfait toutes les contraintes.

> [!info] Définition / Théorème : Solution optimale
> Une **solution optimale** est une solution admissible qui optimise la fonction objectif.

### 3.3 Méthode Graphique

> [!info] Définition / Théorème : Description de la méthode graphique
> 1. On trace les droites représentant les contraintes. Chaque inéquation est satisfaite dans un **demi-plan** limité par la droite d'équation correspondante.
> 2. Après avoir hachuré les parties du plan ne respectant pas les contraintes, il reste une zone non hachurée qui représente l'ensemble des solutions possibles (**ensemble admissible**).
> 3. Une solution optimale du programme linéaire est située en un **sommet** du domaine de l'ensemble des solutions possibles.

> [!example] Exemple d'Application : Résolution graphique du PL de production
> **Programme à résoudre :**
> $$
> \begin{aligned}
> [\max]\ z = 1700\,x_1 + 3200\,x_2 \\
> \text{s.c.} \quad
> \begin{cases}
> 3x_2 \le 39 \\
> 1{,}5\,x_1 + 4x_2 \le 60 \\
> 2x_1 + 3x_2 \le 57 \\
> 3x_1 + 2x_2 \le 70 \\
> 3x_1 \le 57 \\
> x_1, x_2 \ge 0
> \end{cases}
> \end{aligned}
> $$
> **Résolution :** le domaine admissible est le polygone de sommets $A, B, C, D, E, F$. L'optimum se trouve au sommet $C$, intersection des droites saturées :
> $$
> \begin{cases} 1{,}5\,x_1 + 4x_2 = 60 \\ 2x_1 + 3x_2 = 57 \end{cases}
> $$
> Élimination : $(\times 3)$ sur la première et $(\times 4)$ sur la seconde :
> $$
> \begin{cases} 4{,}5\,x_1 + 12x_2 = 180 \\ 8x_1 + 12x_2 = 228 \end{cases}
> \implies 3{,}5\,x_1 = 48 \implies x_1 = \frac{96}{7}
> $$
> $$
> 4x_2 = 60 - 1{,}5 \cdot \frac{96}{7} = \frac{420 - 144}{7} = \frac{276}{7} \implies x_2 = \frac{69}{7}
> $$
> $$
> z_{\max} = 1700 \cdot \frac{96}{7} + 3200 \cdot \frac{69}{7} = \frac{163\,200 + 220\,800}{7} = \frac{384\,000}{7} \approx 54\,857{,}14
> $$
> **Interprétation numérique :** l'optimum est atteint au point $C\left(x_1 = \frac{96}{7},\ x_2 = \frac{69}{7}\right)$ avec $z_{\max} = \frac{384\,000}{7}$.

> ![[{81FDE1F4-60A2-4AED-8935-1E27C73FE81A}.png]]
> *(Description précise de l'illustration : Représentation du Domaine des Solutions Acceptables (DSA) du PL de production : polyèdre à sommets $A, B, C, D, E, F$, droites des cinq contraintes, et droite de niveau $\{z = \text{constante}\}$ translant jusqu'au sommet optimal $C$)*

> [!info] Définition / Théorème : Optimum atteint au bord
> - L'ensemble des solutions réalisables est toujours un **polyèdre** (intersection de demi-espaces).
> - Les lignes de niveau $\{f = \text{constante}\}$ de la fonction objectif $z = f(x_1, \dots, x_n)$ sont des **hyperplans affines** ($n = 2 \Rightarrow$ droite, $n = 3 \Rightarrow$ plan…).
> - **L'optimum de la fonction objectif, s'il existe, est atteint en un ou plusieurs sommets du polyèdre.**
> 
> **Justification mathématique :** les dérivées partielles de $f(X) = c \cdot X$ ne s'annulent jamais (le gradient est $\nabla f = c \ne 0$), et le domaine $\left\{ X \ \middle|\ \sum_{j=1}^{n} a_{ij} x_j \le b_i,\ i \in \{1, \dots, m\} \right\}$ est un **compact**. Donc l'optimum est atteint au bord.

### 3.4 Méthode du Simplexe

#### 3.4.1 Forme Standard et Solutions de Base

Considérons un PL sous sa forme standard, noté $(PLS)$ :

$$
\begin{aligned}
\text{Maximiser} \quad & z(x_1, \dots, x_n) = \sum_{j=1}^{n} c_j x_j \\
\text{s.c.} \quad &
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n \pm e_1 = b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n \pm e_2 = b_2 \\
\hspace{2.6cm} \vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n \pm e_m = b_m \\
x_1, \dots, x_n \in \mathbb{R}_{+}
\end{cases}
\end{aligned}
$$

où $n$ désigne le nombre de variables de décision $x_1, \dots, x_n$ et $m$ le nombre de contraintes (= le nombre de variables d'écart ou d'excédent $e_1, \dots, e_m$). On obtient un système de $m$ équations linéaires à $n' = n + m$ inconnues ($m < n'$) : **infinité de solutions possibles**.

> [!info] Définition / Théorème : Solution de base
> Une solution $(x_1, \dots, x_n, e_1, \dots, e_m)$ vérifiant les $m$ contraintes de $(PLS)$ est dite **solution de base** de $(PLS)$ si au moins $(n' - m)$ de ses variables sont égales à $0$.
> - Les variables fixées à zéro sont appelées **variables hors base** ;
> - Les autres variables sont dites **variables en base**.

> [!warning] Piège / Cas Particulier : Dégénérescence
> Une solution de base est dite **dégénérée** lorsque certaines variables **de base** sont nulles. La dégénérescence peut ralentir le simplexe (itérations à gain nul) et, dans les cas pathologiques, provoquer des cycles.

> [!info] Définition / Théorème : Solution de base admissible
> Une solution de base dont **toutes les coordonnées sont non négatives** est dite **solution de base admissible** de $(PLS)$.

#### 3.4.2 Bases et Points Extrêmes

> [!example] Exemple d'Application : Énumération des bases d'un petit PLS
> **Programme :**
> $$
> (PL)\ \begin{cases} 2x + y \le 8 \\ x + 2y \le 7 \\ y \le 3 \\ x, y \ge 0 \end{cases}
> \implies
> (PLS)\ \begin{cases} 2x + y + e_1 = 8 \\ x + 2y + e_2 = 7 \\ y + e_3 = 3 \\ x, y, e_1, e_2, e_3 \ge 0 \end{cases}
> $$
> Forme matricielle $A X = b$ :
> $$
> \begin{bmatrix} 2 & 1 & 1 & 0 & 0 \\ 1 & 2 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 & 1 \end{bmatrix}
> \begin{bmatrix} x \\ y \\ e_1 \\ e_2 \\ e_3 \end{bmatrix}
> =
> \begin{bmatrix} 8 \\ 7 \\ 3 \end{bmatrix}
> $$
> **Énumération complète des $\binom{5}{2} = 10$ combinaisons** (2 variables hors base mises à zéro) :
> 
> | $x$ | $y$ | $e_1$ | $e_2$ | $e_3$ | Sol. de base | Admissible | Point extrême |
> | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :--- |
> | 0 | 0 | 8 | 7 | 3 | ✓ | ✓ | $(0, 0)$ |
> | 0 | 8 | 0 | $-9$ | $-5$ | ✓ | × | — |
> | 0 | 3,5 | 4,5 | 0 | $-0{,}5$ | ✓ | × | — |
> | 0 | 3 | 5 | 1 | 0 | ✓ | ✓ | $(0, 3)$ |
> | 4 | 0 | 0 | 3 | 3 | ✓ | ✓ | $(4, 0)$ |
> | 7 | 0 | $-6$ | 0 | 3 | ✓ | × | — |
> | — | 0 | — | — | 0 | × | × | — (système incompatible : $y = 0, e_3 = 0 \Rightarrow 0 = 3$) |
> | 3 | 2 | 0 | 0 | 1 | ✓ | ✓ | $(3, 2)$ |
> | 2,5 | 3 | 0 | $-1{,}5$ | 0 | ✓ | × | — |
> | 1 | 3 | 3 | 0 | 0 | ✓ | ✓ | $(1, 3)$ |
> 
> **Interprétation :** seules les solutions de base **admissibles** correspondent aux **points extrêmes** (sommets) du polyèdre : $(0,0)$, $(0,3)$, $(4,0)$, $(3,2)$, $(1,3)$.

> ![[{1FC48CE1-09B5-4FBA-B7AD-ABBED995E6A4}.png]]
> *(Description précise de l'illustration : Polyèdre du PLS d'exemple dans le plan $(x, y)$ avec ses cinq sommets admissibles $(0,0)$, $(0,3)$, $(4,0)$, $(3,2)$, $(1,3)$ reliés par les arêtes correspondant aux bases voisines)*

#### 3.4.3 Bases Voisines et Pivotage

> [!info] Définition / Théorème : Bases voisines
> Deux sommets voisins correspondent à deux bases $B$ et $B'$ telles qu'on **remplace une variable** de $B$ pour obtenir $B'$.
> $$
> \text{Passer à un sommet voisin} = \text{changer de base (base voisine)}
> $$
> C'est le principe du **pivotage**.

#### 3.4.4 Algorithme du Simplexe (Dantzig, 1947)

> [!info] Définition / Théorème : Algorithme du simplexe
> Algorithme itératif de résolution de problème de programmation linéaire (Dantzig, 1947).
> **Principe :** à partir d'un sommet, chercher un sommet voisin qui **améliore** la fonction objectif.
> 
> **Propriété du problème :** soit $X_0$ un sommet non optimum. Alors il existe $X$, un sommet voisin de $X_0$, tel que $f(X) > f(X_0)$.
> $$
> \implies \text{On peut procéder d'une manière itérative jusqu'à l'obtention d'une solution optimale.}
> $$

> [!warning] Piège / Cas Particulier : Critère d'arrêt et cas non borné
> Pour un $[\max]$, on s'arrête lorsque **tous les coefficients** des variables hors base dans l'expression de $z$ (coûts réduits) sont $\le 0$. Si une variable entrante a un coefficient strictement positif mais qu'**aucune** contrainte ne borne sa croissance (ratios tous absents), le problème est **non borné** : l'optimum est infini (cas 2 des trois cas possibles d'un PL).

#### 3.4.5 Exemple Complet du Simplexe, Pas à Pas

> [!example] Exemple d'Application : Simplexe sur $\max z = 4x + 5y$
> **Étape 0 — Mise sous forme standard et base initiale :**
> $$
> \begin{cases} \max\ z = 4x + 5y \\ 2x + y \le 8 \\ x + 2y \le 7 \\ y \le 3 \\ x, y \ge 0 \end{cases}
> \iff
> \begin{cases} \max\ z = 4x + 5y \\ 2x + y + e_1 = 8 \\ x + 2y + e_2 = 7 \\ y + e_3 = 3 \\ x, y, e_1, e_2, e_3 \ge 0 \end{cases}
> $$
> Base initiale admissible : $\{e_1, e_2, e_3\}$ :
> $$
> \begin{cases} e_1 = 8 - 2x - y \\ e_2 = 7 - x - 2y \\ e_3 = 3 - y \end{cases}
> $$
> On obtient $x = y = 0$ et $(e_1, e_2, e_3) = (8, 7, 3)$. Donc $\{e_1, e_2, e_3\}$ : variables **de base** ; $\{x, y\}$ : variables **hors base**. La valeur de la fonction objectif est $z = 0$.
> 
> **Itération 1 — Variable entrante : $y$ ; variable sortante : $e_3$.**
> $z = 4x + 5y$ : on peut augmenter $z$ en faisant entrer $x$ ou $y$ ; on prend $y$ (plus grand coefficient positif, $5 > 4$). Valeur maximale de $y$ :
> $$
> \begin{cases} e_1 = 8 - 2x - y \ge 0 \implies y \le 8 \\ e_2 = 7 - x - 2y \ge 0 \implies y \le 3{,}5 \\ e_3 = 3 - y \ge 0 \implies y \le 3 \end{cases}
> $$
> Le max de $y$ est $3$ (ratio minimal). Pour $y = 3$ : $e_1 = 5 - x$, $e_2 = 1 - x$, $e_3 = 0$. Nouvelle base candidate : $\{e_1, e_2, e_3\} \cup \{y\} \setminus \{e_3\} = \{e_1, e_2, y\}$.
> Réécriture du dictionnaire :
> $$
> \begin{cases} e_1 = 8 - 2x - y \\ e_2 = 7 - x - 2y \\ e_3 = 3 - y \end{cases}
> \iff
> \begin{cases} e_1 = 5 - 2x + e_3 \\ e_2 = 1 - x + 2e_3 \\ y = 3 - e_3 \end{cases}
> $$
> Expression de $z$ en fonction des variables hors base :
> $$
> z = 4x + 5y = 4x + 5(3 - e_3) = 15 + 4x - 5e_3
> $$
> Solution de base associée ($x = e_3 = 0$) : $e_1 = 5$, $e_2 = 1$, $y = 3$, donc $(e_1, e_2, y) = (5, 1, 3)$ et $z = 15$.
> 
> **Itération 2 — Variable entrante : $x$ ; variable sortante : $e_2$.**
> $z = 15 + 4x - 5e_3$ : faire entrer $x$ (coefficient $+4$). Valeur maximale de $x$ :
> $$
> \begin{cases} e_1 = 5 - 2x + e_3 \ge 0 \implies x \le 2{,}5 \\ e_2 = 1 - x + 2e_3 \ge 0 \implies x \le 1 \\ y = 3 - e_3 \ge 0 \implies \text{pas de contrainte} \end{cases}
> $$
> Le max de $x$ est $1$ ; $e_2$ sort de la base. Nouvelle base candidate : $\{e_1, x, y\}$ :
> $$
> \begin{cases} e_1 = 3 + 2e_2 - 3e_3 \\ x = 1 - e_2 + 2e_3 \\ y = 3 - e_3 \end{cases}
> \qquad z = 19 - 4e_2 + 3e_3
> $$
> 
> **Itération 3 — Variable entrante : $e_3$ ; variable sortante : $e_1$.**
> $z = 19 - 4e_2 + 3e_3$ : faire entrer $e_3$ (coefficient $+3$). Valeur maximale de $e_3$ :
> $$
> \begin{cases} e_1 = 3 + 2e_2 - 3e_3 \ge 0 \implies e_3 \le 1 \\ x = 1 - e_2 + 2e_3 \ge 0 \implies \text{pas de contrainte} \\ y = 3 - e_3 \ge 0 \implies e_3 \le 3 \end{cases}
> $$
> Le max de $e_3$ est $1$ ; $e_1$ sort de la base. Nouvelle base candidate : $\{e_3, x, y\}$ :
> $$
> \begin{cases} e_3 = 1 + \frac{2}{3}e_2 - \frac{1}{3}e_1 \\ x = 3 + \frac{1}{3}e_2 + \frac{2}{3}e_1 \\ y = 2 - \frac{2}{3}e_2 + \frac{1}{3}e_1 \end{cases}
> \qquad z = 22 - 2e_2 - e_1
> $$
> 
> **Critère d'arrêt :** $z = 22 - 2e_2 - e_1$ : tous les coefficients des variables hors base sont $\le 0$, donc $z^{*} \le 22$. Or la solution de base $x = 3$, $y = 2$, $e_3 = 1$ (avec $e_1 = e_2 = 0$) atteint $z = 22$.
> $$
> \boxed{x^{*} = 3,\quad y^{*} = 2,\quad e_3^{*} = 1,\quad z^{*} = 22}
> $$
> 
> **Tableau récapitulatif des itérations :**
> 
> | Itération | Base | Variable entrante | Variable sortante | Ratio limitant | $z$ |
> | :---: | :--- | :---: | :---: | :---: | :---: |
> | 0 | $\{e_1, e_2, e_3\}$ | — | — | — | 0 |
> | 1 | $\{e_1, e_2, y\}$ | $y$ (coef. $5$) | $e_3$ | $y \le 3$ | 15 |
> | 2 | $\{e_1, x, y\}$ | $x$ (coef. $4$) | $e_2$ | $x \le 1$ | 19 |
> | 3 | $\{e_3, x, y\}$ | $e_3$ (coef. $3$) | $e_1$ | $e_3 \le 1$ | 22 (optimum) |

---

## 4. Dualité

### 4.1 Introduction et Vision Économique

> [!info] Définition / Théorème : Dualité
> La dualité fait référence à la relation entre un problème d'optimisation appelé **« problème primal »** et un autre problème associé appelé **« problème dual »**. Chaque problème est formulé de manière complémentaire, et les solutions des deux problèmes sont liées.
> **Cela permet :**
> - d'obtenir des informations supplémentaires ;
> - de simplifier la résolution du problème primal ;
> - d'avoir une autre vision du problème ;
> - de réaliser un équilibre sur un marché.

> [!example] Exemple d'Application : Vision économique Primal / Dual (META vs VISION)
> **Vision du Primal (fabricant META) :** META fabrique deux articles $P_1$, $P_2$ vendus aux prix respectifs $320$ et $550$ UM, utilisant trois machines :
> 
> | | $M_1$ | $M_2$ | $M_3$ | Prix |
> | :--- | :--- | :--- | :--- | :--- |
> | $P_1$ | 50 | 30 | 20 | 320 |
> | $P_2$ | 10 | 20 | 15 | 550 |
> | **Disponibilités** | 600 | 500 | 300 | — |
> 
> **But :** maximiser le profit de fabrication et de vente.
> 
> > [!abstract] Modélisation Mathématique : Problème PRIMAL (META)
> > **Variables de décision :** $x_1$ = quantité produite de $P_1$ ; $x_2$ = quantité produite de $P_2$.
> > **Fonction Objectif :** $[\max]\ z = 320\,x_1 + 550\,x_2$
> > **Contraintes :**
> > $$
> > \begin{aligned}
> > 50x_1 + 10x_2 &\le 600 && (M_1) \\
> > 30x_1 + 20x_2 &\le 500 && (M_2) \\
> > 20x_1 + 15x_2 &\le 300 && (M_3) \\
> > x_1, x_2 &\ge 0
> > \end{aligned}
> > $$
> 
> **Vision du Dual (fabricant VISION) :** VISION souhaite produire les mêmes produits mais ne dispose pas des disponibilités. Il veut **acheter l'utilisation** des $600$ h, $500$ h et $300$ h des machines $M_1, M_2, M_3$. Il cherche le prix unitaire d'achat de chaque heure afin de faire une proposition **minimale** mais convaincante à META.
> **But :** minimiser le coût d'acquisition des ressources tout en restant concurrentiel.
> 
> > [!abstract] Modélisation Mathématique : Problème DUAL (VISION)
> > **Variables de décision :** $y_1$ = coût d'achat d'une heure de $M_1$ ; $y_2$ = coût d'achat d'une heure de $M_2$ ; $y_3$ = coût d'achat d'une heure de $M_3$.
> > **Fonction Objectif :** $[\min]\ w = 600\,y_1 + 500\,y_2 + 300\,y_3$
> > **Contraintes :**
> > $$
> > \begin{aligned}
> > 50y_1 + 30y_2 + 20y_3 &\ge 320 && \text{(rentabilité de } P_1) \\
> > 10y_1 + 20y_2 + 15y_3 &\ge 550 && \text{(rentabilité de } P_2) \\
> > y_1, y_2, y_3 &\ge 0
> > \end{aligned}
> > $$
> 
> **Interprétation :** pour META, on détermine le plan de fabrication maximisant le profit ; pour VISION, on détermine l'offre d'achat minimisant le coût de production. Les deux programmes sont duaux l'un de l'autre.

> [!info] Définition / Théorème : Propriétés générales de la dualité
> - Tout programme linéaire admet un programme dual : le premier est appelé **PRIMAL**, le second son **DUAL**.
> - Le DUAL a une **interprétation économique différente** du PRIMAL.
> - Le DUAL et le PRIMAL sont **liés** : on peut trouver la solution de l'un dès que la solution de l'autre est bien connue.
> - La recherche du DUAL peut s'imposer si le PRIMAL paraît difficile à résoudre.

### 4.2 Définition Formelle du Problème Dual

> [!info] Définition / Théorème : Problème dual
> Soient une matrice $A$ de taille $m \times n$, des vecteurs $c \in \mathbb{R}^{n}$ et $b \in \mathbb{R}^{m}$. Au programme linéaire primal
> $$
> (PL)\ \begin{cases} \max_{x \in \mathbb{R}^{n}} \left[ F(x) = c^{\top} x \right] \\ A x \le b \\ x \ge 0 \end{cases}
> $$
> on associe le programme linéaire dual
> $$
> (PLD)\ \begin{cases} \min_{y \in \mathbb{R}^{m}} \left[ G(y) = b^{\top} y \right] \\ A^{\top} y \ge c \\ y \ge 0 \end{cases}
> $$

**Comparaison primal / dual :**

| Primal | Dual |
| :--- | :--- |
| $\max\ (F)$ | $\min\ (G)$ |
| coefficient $c$ de $F$ | second membre $c$ |
| second membre $b$ | coefficient $b$ de $G$ |
| $m$ contraintes inégalités ($Ax \le b$) | $m$ contraintes de positivité ($y \ge 0$) |
| $n$ contraintes de positivité ($x \ge 0$) | $n$ contraintes inégalités ($A^{\top} y \ge c$) |

### 4.3 Règles de Passage Primal $\leftrightarrow$ Dual

| Primal ($\max$) | Dual ($\min$) |
| :--- | :--- |
| Contrainte $i$ : $\le$ | Variable $y_i \ge 0$ |
| Contrainte $i$ : $=$ | Variable $y_i \gtrless 0$ (libre) |
| Contrainte $i$ : $\ge$ | Variable $y_i \le 0$ |
| Variable $x_j \ge 0$ | Contrainte $j$ : $\ge$ |
| Variable $x_j \le 0$ | Contrainte $j$ : $\le$ |
| Variable $x_j \gtrless 0$ | Contrainte $j$ : $=$ |

*(Pour un primal en $\min$, les correspondances s'inversent symétriquement : le dual d'un $\min$ est un $\max$ et les sens des inégalités se renvoient.)*

> [!example] Exemple d'Application : Construction du dual d'un primal mixte
> **Primal donné :**
> $$
> (PL):\ \begin{cases} [\max]\ z = 4x_1 + 5x_2 + 2x_3 \\ \text{s.c.} \begin{cases} 2x_1 + 4x_2 = 3 \\ x_1 + x_3 \ge 2 \\ 3x_1 + x_2 + x_3 \le 10 \\ x_2 + x_3 \le 1 \end{cases} \\ x_1 \ge 0,\ x_2 \le 0,\ x_3 \ge 0 \end{cases}
> $$
> **Application des règles de passage :**
> - Contrainte 1 ($=$) $\Rightarrow y_1 \gtrless 0$ ; contrainte 2 ($\ge$) $\Rightarrow y_2 \le 0$ ; contraintes 3 et 4 ($\le$) $\Rightarrow y_3, y_4 \ge 0$.
> - Variable $x_1 \ge 0$ $\Rightarrow$ contrainte duale 1 ($\ge 4$) ; variable $x_2 \le 0$ $\Rightarrow$ contrainte duale 2 ($\le 5$) ; variable $x_3 \ge 0$ $\Rightarrow$ contrainte duale 3 ($\ge 2$).
> 
> **Dual obtenu :**
> $$
> (PLD):\ \begin{cases} [\min]\ w = 3y_1 + 2y_2 + 10y_3 + y_4 \\ \text{s.c.} \begin{cases} 2y_1 + y_2 + 3y_3 \ge 4 \\ 4y_1 + y_3 + y_4 \le 5 \\ y_2 + y_3 + y_4 \ge 2 \end{cases} \\ y_1 \gtrless 0,\ y_2 \le 0,\ y_3 \ge 0,\ y_4 \ge 0 \end{cases}
> $$

### 4.4 Théorèmes de Dualité

> [!info] Définition / Théorème : Le dual du dual est le primal
> **Preuve.** On considère un programme linéaire $(PL)$ sous forme canonique. Alors son dual $(PLD)$ est :
> $$
> (PLD)\ \begin{cases} \min_{y} \left[ G(y) = b^{\top} y \right] \\ A^{\top} y \ge c \\ y \ge 0 \end{cases}
> \iff
> (PLD)\ \begin{cases} \max_{y} \left[ -G(y) = (-b)^{\top} y \right] \\ -A^{\top} y \le -c \\ y \ge 0 \end{cases}
> $$
> On prend le dual du dual :
> $$
> (PLDD)\ \begin{cases} \min_{x} \left[ (-c)^{\top} x \right] \\ (-A^{\top})^{\top} x \ge -b \\ x \ge 0 \end{cases}
> \iff
> (PL)\ \begin{cases} \max_{x} \left[ c^{\top} x \right] \\ A x \le b \\ x \ge 0 \end{cases}
> $$

> [!info] Définition / Théorème : Théorème faible de dualité
> Soit $x$ une solution réalisable d'un $(PL)$ sous forme canonique et $y$ une solution réalisable du problème dual $(PLD)$. Alors :
> 1. $F(x) \le G(y)$ ;
> 2. Si $F(x) = G(y)$, alors $x$ et $y$ sont des solutions optimales de $(PL)$ et $(PLD)$ respectivement.
> 
> **Preuve.**
> 1. On a $Ax \le b,\ x \ge 0$ et $A^{\top} y \ge c,\ y \ge 0$. Donc :
> $$
> F(x) = c^{\top} x \le (A^{\top} y)^{\top} x = y^{\top} (A x) \le y^{\top} b = G(y)
> $$
> (la première inégalité utilise $c \le A^{\top}y$ et $x \ge 0$ ; la seconde utilise $Ax \le b$ et $y \ge 0$).
> 2. Soient $x^{*}$ et $y^{*}$ des solutions réalisables de $(PL)$ et $(PLD)$ telles que $F(x^{*}) = G(y^{*})$. D'après 1., pour toute solution réalisable $x$ de $(PL)$ : $F(x) \le G(y^{*}) = F(x^{*})$, donc $x^{*}$ est une solution réalisable optimale. Idem pour $y^{*}$.

> [!info] Définition / Théorème : Théorème fort de dualité
> Si le problème primal $(PL)$ admet une solution réalisable optimale $x^{*}$, alors le problème dual $(PLD)$ admet lui aussi une solution réalisable optimale $y^{*}$ avec :
> $$
> F(x^{*}) = G(y^{*})
> $$
> **Preuve (esquisse).** On suppose $(PL)$ mis sous forme standard. S'il existe une solution réalisable optimale, alors il existe une solution de base réalisable optimale $x_{B}^{*} = A_{B^{*}}^{-1} b$. On choisit alors :
> $$
> y^{*} = \left( A_{B^{*}}^{-1} \right)^{\top} c_{B^{*}}
> $$
> On montre que $y^{*}$ est une solution réalisable optimale pour le dual $(PLD)$.

> [!info] Définition / Théorème : Relations entre solutions de $(PL)$ et $(PLD)$
> **Rappel :** il y a 3 cas possibles (et seulement 3) pour le problème primal $(PL)$ :
> 1. il existe (au moins) une solution optimale ;
> 2. l'ensemble $D_R$ des solutions réalisables n'est pas borné et l'optimum est infini ;
> 3. pas de solution réalisable ($D_R = \emptyset$).
> 
> **Théorème.** Étant donnés un problème primal $(PL)$ et son dual $(PLD)$, **une et une seule** des trois situations suivantes a lieu :
> - **(a)** les deux problèmes possèdent chacun des solutions optimales (à l'optimum, les coûts sont égaux) ;
> - **(b)** un des problèmes possède une solution réalisable avec un optimum infini, l'autre n'a pas de solution ;
> - **(c)** aucun des deux problèmes ne possède de solution réalisable.

### 4.5 Conditions d'Optimalité Primal–Dual (COPD)

> [!info] Définition / Théorème : COPD
> On se place dans le cas (a) où les problèmes primal et dual possèdent chacun des solutions optimales (optimum fini).
> Soient $x$ et $y$ des solutions réalisables respectivement du problème primal $(PL)$ et du problème dual $(PLD)$. Alors $x$ et $y$ sont des solutions réalisables optimales **si et seulement si** les conditions d'optimalité primal-dual (COPD) suivantes sont vérifiées :
> - Si une contrainte est satisfaite en tant qu'**inégalité stricte** dans $(PL)$ ou $(PLD)$, alors la variable correspondante de l'autre programme est **nulle**.
> - Si la valeur d'une variable dans $(PL)$ ou $(PLD)$ est **strictement positive**, alors la contrainte correspondante de l'autre programme est une **égalité**.
> 
> Formellement, avec $x^{*}$ et $y^{*}$ solutions réalisables optimales de $(PL)$ et $(PLD)$ :
> $$
> \begin{cases}
> \displaystyle \sum_{j=1}^{n} a_{ij} \, x^{*}_j < b_i \ \Rightarrow\ y_i^{*} = 0 \\[2mm]
> \displaystyle \sum_{i=1}^{m} a_{ij} \, y^{*}_i < c_j \ \Rightarrow\ x^{*}_j = 0
> \end{cases}
> \qquad
> \begin{cases}
> y_i^{*} > 0 \ \Rightarrow\ \displaystyle \sum_{j=1}^{n} a_{ij} x^{*}_j = b_i \\[2mm]
> x^{*}_j > 0 \ \Rightarrow\ \displaystyle \sum_{i=1}^{m} a_{ij} y^{*}_i = c_j
> \end{cases}
> $$

> [!example] Exemple d'Application : Résolution du dual via le primal (COPD)
> **Primal et dual :**
> $$
> (PL)\ \begin{cases} [\max]\ z = 4x_1 + 5x_2 \\ 2x_1 + x_2 \le 8 \\ x_1 + 2x_2 \le 7 \\ x_2 \le 3 \\ x_1, x_2 \ge 0 \end{cases}
> \qquad
> (PLD)\ \begin{cases} [\min]\ w = 8y_1 + 7y_2 + 3y_3 \\ 2y_1 + y_2 \ge 4 \\ y_1 + 2y_2 + y_3 \ge 5 \\ y_1, y_2, y_3 \ge 0 \end{cases}
> $$
> La solution optimale de $(PL)$ est $x_1^{*} = 3$, $x_2^{*} = 2$, $z^{*} = 22$.
> **Application des COPD :**
> 1. La 3ème contrainte du $(PL)$ n'est **pas saturée** ($x_2^{*} = 2 < 3$) $\Rightarrow y_3^{*} = 0$.
> 2. $x_1^{*} > 0$ et $x_2^{*} > 0$ $\Rightarrow$ les contraintes duales correspondantes sont des **égalités** :
> $$
> \begin{cases} 2y_1 + y_2 = 4 \\ y_1 + 2y_2 + y_3 = 5 \end{cases}
> \xrightarrow{y_3 = 0}
> \begin{cases} 2y_1 + y_2 = 4 \\ y_1 + 2y_2 = 5 \end{cases}
> $$
> Résolution : $(\times 2)$ sur la première : $4y_1 + 2y_2 = 8$ ; soustraction de la seconde : $3y_1 = 3 \Rightarrow y_1 = 1$ ; puis $y_2 = 4 - 2(1) = 2$.
> $$
> y_1^{*} = 1,\quad y_2^{*} = 2,\quad y_3^{*} = 0,\quad w^{*} = 8(1) + 7(2) + 3(0) = 22 = z^{*}
> $$
> **Interprétation numérique :** l'égalité $w^{*} = z^{*} = 22$ confirme le théorème fort de dualité.

---

## 5. Post-Optimisation (Analyse de Sensibilité)

### 5.1 Motivation et Objectifs

> [!info] Définition / Théorème : Analyse post-optimale
> Après l'obtention de la solution optimale d'un programme linéaire, il est judicieux de se poser la question de la **sensibilité** de cette solution aux paramètres du PL.
> **Motivation :** les paramètres utilisés dans la formulation d'un PL ne sont en général que des **estimations**, donc ils peuvent subir des variations ; d'autre part, dans un environnement dynamique évolutif, plusieurs facteurs peuvent changer régulièrement.
> L'analyse de sensibilité post-optimale permet de déterminer la sensibilité d'un PL par rapport aux données : *une variation des données entraîne-t-elle un changement important de la solution optimale ?* Elle permet de déterminer des **intervalles de variations des données** pour lesquels la **base optimale n'est pas modifiée**.

> [!info] Définition / Théorème : Intervalle d'optimalité et intervalle de réalisabilité
> 1. **Coefficients $c_i$ de la fonction objectif :** on cherche l'intervalle dans lequel peut varier $c_i$ sans que la solution de base optimale $(x_i^{*})$ change, et à mesurer la variation de $z^{*}$. On parle d'**intervalle d'optimalité**.
> 2. **Coefficients $b_i$ du membre de droite des contraintes :** on cherche l'intervalle toléré de changement de $b_i$ afin de ne pas modifier la solution de base optimale $(x_i^{*})$, et quelle sera la variation de $z^{*}$. On parle d'**intervalle de réalisabilité**.

### 5.2 Exemple de Base : Production de $A$ et $B$ sur 3 Machines

> [!example] Exemple d'Application : Solution optimale de référence
> **Énoncé :** une société fabrique deux produits $A$ et $B$ en utilisant 3 machines :
> 
> | | A | B | Disponibilité (h) |
> | :--- | :--- | :--- | :--- |
> | Machine 1 | 1 | 2 | 20 |
> | Machine 2 | 2 | 1 | 22 |
> | Machine 3 | 1 | 1 | 12 |
> | **Prix moyen (UM)** | 300 | 200 | |
> 
> **Modélisation :** $[\max]\ z = 300x_1 + 200x_2$ s.c. $x_1 + 2x_2 \le 20$ ; $2x_1 + x_2 \le 22$ ; $x_1 + x_2 \le 12$ ; $x_1, x_2 \ge 0$.
> **Résolution (forme standard + simplexe) :** dictionnaire optimal obtenu :
> $$
> \begin{cases}
> x_1 = 10 - e_2 + e_3 \\
> x_2 = 2 + e_2 - 2e_3 \\
> e_1 = 6 - e_2 + 3e_3
> \end{cases}
> $$
> **Solution optimale :** $(x_1^{*}, x_2^{*}, e_1^{*}, e_2^{*}, e_3^{*}) = (10, 2, 6, 0, 0)$ et $z^{*} = 300(10) + 200(2) = 3400$.
> **Vérification :** $x_1 + 2x_2 = 14 \le 20$ (contrainte 1 non saturée, $e_1^{*} = 6$) ; $2x_1 + x_2 = 22$ (saturée, $e_2^{*} = 0$) ; $x_1 + x_2 = 12$ (saturée, $e_3^{*} = 0$).

### 5.3 Sensibilité par Rapport aux Coefficients $c_i$ (Intervalle d'Optimalité)

> [!example] Exemple d'Application : Sensibilité par rapport à $c_1 = 300$
> Le prix de vente $c_1 = 300$ du produit $A$ fluctue : on pose $c_1' = c_1 + \delta$ et on cherche l'intervalle d'optimalité maintenant $(x_1^{*}, x_2^{*}) = (10, 2)$.
> $$
> \begin{aligned}
> [\max]\ z &= (300 + \delta)x_1 + 200x_2 \\
> &= (300 + \delta)(10 - e_2 + e_3) + 200(2 + e_2 - 2e_3) \\
> &= (3400 + 10\delta) + (-100 - \delta)e_2 + (\delta - 100)e_3
> \end{aligned}
> $$
> Afin de garder la même solution optimale, il faut que les coefficients des variables hors base restent $\le 0$ :
> $$
> -100 - \delta \le 0 \quad \text{et} \quad \delta - 100 \le 0 \implies -100 \le \delta \le 100
> $$
> $$
> \boxed{c_1' \in [200;\ 400] \quad \text{et} \quad z^{*} \in [2400;\ 4400]}
> $$
> **Interprétation :** $z^{*}(\delta) = 3400 + 10\delta$ ; pour $\delta = -100$ : $z^{*} = 2400$ ; pour $\delta = +100$ : $z^{*} = 4400$.

> [!example] Exemple d'Application : Sensibilité par rapport à $c_2 = 200$
> Le prix de vente $c_2 = 200$ du produit $B$ fluctue : on pose $c_2' = c_2 + \delta$.
> $$
> \begin{aligned}
> [\max]\ z &= 300x_1 + (200 + \delta)x_2 \\
> &= 300(10 - e_2 + e_3) + (200 + \delta)(2 + e_2 - 2e_3) \\
> &= (3400 + 2\delta) + (-100 + \delta)e_2 + (-100 - 2\delta)e_3
> \end{aligned}
> $$
> Conditions de maintien de la base optimale :
> $$
> -100 + \delta \le 0 \quad \text{et} \quad -100 - 2\delta \le 0 \implies -50 \le \delta \le 100
> $$
> $$
> \boxed{c_2' \in [150;\ 300] \quad \text{et} \quad z^{*} \in [3300;\ 3600]}
> $$
> **Interprétation :** $z^{*}(\delta) = 3400 + 2\delta$ ; pour $\delta = -50$ : $z^{*} = 3300$ ; pour $\delta = +100$ : $z^{*} = 3600$.

### 5.4 Sensibilité par Rapport au Second Membre $b_i$ (Intervalle de Réalisabilité)

> [!example] Exemple d'Application : Sensibilité par rapport à $b_2 = 22$ (contrainte saturée)
> La disponibilité $b_2 = 22$ de la 2ème machine évolue : on pose $b_2' = b_2 + \Delta$. On obtient :
> $$
> \begin{cases}
> [\max]\ z = 3400 + 100\Delta - 100e_2 - 100e_3 \\
> x_1 = 10 + \Delta - e_2 + e_3 \\
> x_2 = 2 - \Delta + e_2 - 2e_3 \\
> e_1 = 6 + \Delta - e_2 + 3e_3
> \end{cases}
> $$
> Pour $e_2^{*} = e_3^{*} = 0$, on doit avoir :
> $$
> 10 + \Delta \ge 0, \quad 2 - \Delta \ge 0, \quad 6 + \Delta \ge 0 \implies -6 \le \Delta \le 2
> $$
> $$
> \boxed{b_2' \in [16;\ 24] \quad \text{et} \quad z^{*} \in [2800;\ 3600]}
> $$
> **Interprétation :** $z^{*}(\Delta) = 3400 + 100\Delta$ ; le coefficient $100$ est la **valeur marginale** (prix caché) de la machine 2.

> [!example] Exemple d'Application : Sensibilité par rapport à $b_3 = 12$ (contrainte saturée)
> La disponibilité $b_3 = 12$ de la 3ème machine évolue : on pose $b_3' = b_3 + \Delta$. On obtient :
> $$
> \begin{cases}
> [\max]\ z = 3400 + 100\Delta - 100e_2 - 100e_3 \\
> x_1 = 10 - \Delta - e_2 + e_3 \\
> x_2 = 2 + 2\Delta + e_2 - 2e_3 \\
> e_1 = 6 - 3\Delta - e_2 + 3e_3
> \end{cases}
> $$
> Pour $e_2^{*} = e_3^{*} = 0$, on doit avoir :
> $$
> 10 - \Delta \ge 0, \quad 2 + 2\Delta \ge 0, \quad 6 - 3\Delta \ge 0 \implies -1 \le \Delta \le 2
> $$
> $$
> \boxed{b_3' \in [11;\ 14] \quad \text{et} \quad z^{*} \in [3300;\ 3600]}
> $$

> [!example] Exemple d'Application : Sensibilité par rapport à $b_1 = 20$ (contrainte marginale)
> La disponibilité $b_1 = 20$ de la 1ère machine évolue : on pose $b_1' = b_1 + \Delta$. On obtient :
> $$
> \begin{cases}
> [\max]\ z = 3400 - 100e_2 - 100e_3 \\
> x_1 = 10 - e_2 + e_3 \\
> x_2 = 2 + e_2 - 2e_3 \\
> e_1 = 6 + \Delta - e_2 + 3e_3
> \end{cases}
> $$
> Pour $e_2^{*} = e_3^{*} = 0$, on doit avoir :
> $$
> 6 + \Delta \ge 0 \implies \Delta \ge -6
> $$
> $$
> \boxed{b_1' \in [14;\ +\infty[ \quad \text{et} \quad z^{*} = 3400 \ \text{(inchangé)}}
> $$

> [!warning] Piège / Cas Particulier : Contrainte marginale et variable duale nulle
> La contrainte 1 est **marginale** (non saturée : $e_1^{*} = 6 > 0$). Par les COPD, sa variable duale est nulle ($y_1^{*} = 0$) : augmenter $b_1$ n'apporte **aucun gain** sur $z^{*}$, et $z^{*}$ reste égal à $3400$ tant que $\Delta \ge -6$. Inversement, seules les contraintes **saturées** ($b_2$, $b_3$, avec valeurs marginales $100$) influencent $z^{*}$.

---

## 6. Conclusion

> [!abstract] Le Principe Fondamental : Programmation Linéaire
> - La programmation linéaire constitue un élément très répandu dans la modélisation en Recherche Opérationnelle.
> - Elle permet de résoudre plusieurs problèmes réels, de réaliser des gains considérables et d'assurer des optimisations importantes.
> - Il reste très important d'accorder à **l'interprétation économique du dual** et à la **phase post-optimisation** une attention particulière afin de tirer profit au maximum de cet outil de R.O. incontournable.
> - L'étude de cette partie ouvre la voie vers l'étude de certains programmes linéaires particuliers et vers la problématique de détermination de la **solution de base admissible initiale** dans l'algorithme Simplexe.
> - Perspectives : explorer la **programmation linéaire entière** et la **programmation non linéaire**.

---
# ~={red}References=~
*Recherche Opérationnelle — Pr. Abdessamad Kamouss, ENSAM Casablanca*


