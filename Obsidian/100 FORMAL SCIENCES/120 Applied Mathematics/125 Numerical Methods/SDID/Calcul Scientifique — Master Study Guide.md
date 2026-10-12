
Date: 2026-03-20
Tags: [[EDP]], [[Matlab]], [[Calcul Scientifique]], [[Mathematics]]

---

> [!NOTE] Summary
> This **Master Study Guide** covers the full course on Scientific Computing and Numerical Resolution of Partial Differential Equations (PDEs). It unifies all handwritten notes and typed summaries into a single reference covering: PDE Classification, the Finite Difference Method (1D and 2D, explicit/implicit, stability), Matlab programming, and the Finite Element Method (weak formulation, Galerkin, hat functions).
>
> **Exam Tip:** Focus on Taylor series derivations, stability conditions (Von Neumann), the tridiagonal matrix assembly, and the weak formulation steps for FEM.

---

## I. Introduction au Calcul Scientifique et aux EDP

Le calcul scientifique a pour objectif d'utiliser des **méthodes numériques** pour la résolution de problèmes généralement issus de la physique, chimie, ou biologie. Ces phénomènes continus sont modélisés par des **Équations aux Dérivées Partielles (EDP)**.

Les deux grandes méthodes numériques étudiées sont :

1. La méthode des **Différences Finies** (DF)
2. La méthode des **Éléments Finis** (EF)

---

## II. Classification des EDP

### II.1 Rappel Général sur les EDP

On distingue deux grandes catégories :

- Les **EDP linéaires** (e.g., équation d'onde d'ordre 2)
- Les **EDP non linéaires** (e.g., équation de Burgers)

Les lois de la nature sont souvent gouvernées par des EDP.

### II.2 Classification Mathématique (EDP d'ordre 2)

Une EDP linéaire d'ordre 2 à deux variables indépendantes $(x, y)$ s'écrit :

$$a\phi_{xx} + b\phi_{xy} + c\phi_{yy} + d\phi_x + e\phi_y + f\phi = g(x,y)$$

On suppose que $\phi$ est assez régulière ($\phi$ de classe $C^2$ au moins). La classification repose sur le **discriminant** $\Delta = b^2 - 4ac$ (analogue aux coniques) :

| **Type d'EDP** | **Condition** | **Modèle Physique** | **Exemple Classique** |
|---|---|---|---|
| ***Hyperbolique*** | $\Delta = b^2 - 4ac > 0$ (valeurs propres réelles distinctes) | *Problèmes de propagation, ondes* | $\dfrac{\partial^2 u}{\partial t^2} = c^2 \dfrac{\partial^2 u}{\partial x^2}$ |
| ***Parabolique*** | $\Delta = b^2 - 4ac = 0$ (valeurs propres réelles) | *Phénomènes dissipatifs, diffusion* | $\dfrac{\partial u}{\partial t} = D \dfrac{\partial^2 u}{\partial x^2}$ |
| ***Elliptique*** | $\Delta = b^2 - 4ac < 0$ (valeurs propres complexes) | *Problèmes stationnaires* | $\dfrac{\partial^2 \phi}{\partial x^2} + \dfrac{\partial^2 \phi}{\partial y^2} = f(x,y)$ |

### II.3 Classification des EDP d'ordre 2 par Système

#### Système d'EDP d'ordre 1

Des phénomènes physiques peuvent être gouvernés par un **système d'équations** pour décrire le comportement d'une variable. Exemple — équation d'onde d'ordre 2 :

$$\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$$

En introduisant deux variables $v = \dfrac{\partial u}{\partial t}$ et $w = c\dfrac{\partial u}{\partial x}$, et on pose $\overrightarrow{u}=\dbinom{v}{w}$
on obtient le système :

$$\frac{\partial \vec{u}}{\partial t} + A\frac{\partial \vec{u}}{\partial x} = 0 \quad \text{avec} \quad A = \begin{pmatrix} 0 & -c \\ -c & 0 \end{pmatrix}$$

On vérifie : $\det(A - \lambda I) = \lambda^2 - c^2$, d'où les valeurs propres $\lambda = \pm c$ (réelles et distinctes) → *système hyperbolique*.

- Si les **valeurs propres de $[A]$ sont réelles et distinctes** → système *hyperbolique* dans la direction $(x)$
- Si les **valeurs propres de $[A]$ sont complexes** → système *elliptique* dans la direction $(x)$
- Même analyse pour $[B]$ (dans la direction de $y$)

#### Système d'EDP d'ordre 2

Le cas le plus simple est :

$$\frac{\partial \vec{u}}{\partial t} = A\frac{\partial^2 \vec{u}}{\partial x^2}$$

_Cas parabolique_ si les valeurs propres de $A$ sont réelles.

### II.4 Exemples d'EDP Importantes

| **Équation**                            | **Forme**                                                                                                     | **Description**                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Équation de Poisson**                 | $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} = f(x,y)$                            | *Conduction thermique dans un solide avec source* $f(x,y)$                                        |
| **Équation d'advection-diffusion**      | $\dfrac{\partial u}{\partial t} + c\dfrac{\partial u}{\partial x} = \alpha\dfrac{\partial^2 u}{\partial x^2}$ | *Transport avec diffusion*                                                                        |
| **Équation de Burgers**                 | $\dfrac{\partial u}{\partial t} + u\dfrac{\partial u}{\partial x} = \nu\dfrac{\partial^2 u}{\partial x^2}$    | *Modèle non linéaire d'advection-diffusion*                                                       |
| **Équation de Korteweg-de Vries (KdV)** | $\dfrac{\partial u}{\partial t} + u\dfrac{\partial u}{\partial x} + \dfrac{\partial^3 u}{\partial x^3} = 0$   | *Ondes non linéaires dispersives*                                                                 |
| **Équation de Helmholtz**               | $\dfrac{\partial^2 u}{\partial x^2} + \dfrac{\partial^2 u}{\partial y^2} + k^2 u = 0$                         | *Ondes harmoniques* — propagation d'ondes acoustiques en milieu 2D, $k$ le paramètre de fréquence |

### II.5 Exemple d'EDP parabolique — Équation de la chaleur

$$\begin{cases} \dfrac{\partial u}{\partial t} = \dfrac{\partial^2 u}{\partial x^2}, & (x,t) \in\, ]0,1[\times\mathbb{R}^+ \\ u_0 = \sin(\pi x) & \text{(condition initiale)} \\ u(0,t) = u(1,t) = 0 & \text{(conditions aux limites)} \end{cases}$$

**Solution exacte :** $u(x,t) = \sin(\pi x)\, e^{-\pi^2 t}$

> **Exercice (TP) :** Tracer la solution exacte et la solution approchée, et comparer les deux.

### II.6 Exemple d'EDP elliptique — Équation de Laplace

$$\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} = 0$$

Cette équation gouverne les *flux incompressibles à potentiel*. Pour le domaine $x \in [0,1]$, $y \in [0,1]$ avec conditions aux limites :

$$\begin{cases} \phi(x,0) = \sin(\pi x) \\ \phi(x,1) = \sin(\pi x)\, e^{-\pi} \\ \phi(0,y) = \phi(1,y) = 0 \end{cases}$$

**Solution :** $\phi(x,y) = \sin(\pi x)\, e^{-\pi y}$

---

## III. Méthode des Différences Finies (DF)

### III.1 Introduction

Les **Différences Finies (DF)** constituent une méthode de résolution numérique des EDP. Pour résoudre une EDP de dimension $n+1$ (espace + temps), on introduit :

- Un **maillage de l'espace** $\mathbb{R}^n$ de pas $\Delta x$
- Un **maillage du temps** de pas $\Delta t$

Les DF consistent à **approcher les opérateurs de dérivation** par des opérations discrètes (taux d'accroissements).

**Notations standards :**

$$\begin{cases} x_{j} = j\Delta x, & j \in \mathbb{Z} \\ t^k = k\Delta t, & k \in \mathbb{N} \end{cases}$$

L'approximation $u(t^k, x_j)$ est notée $u_j^k$.

### III.2 Construction des Schémas — Formule de Taylor

#### III.2.1 Idée fondamentale

Soit $u$ une fonction d'une variable de classe $C^4$. Si $h \to 0$, on a les développements de Taylor :

$$u(x+h) = u(x) + hu'(x) + \frac{h^2}{2}u''(x) + \frac{h^3}{6}u'''(x) + O(h^4) \tag{i}$$

$$u(x-h) = u(x) - hu'(x) + \frac{h^2}{2}u''(x) - \frac{h^3}{6}u'''(x) + O(h^4) \tag{ii}$$

En combinant (i) et (ii), on obtient naturellement :

#### III.2.2 Approximations des Dérivées Premières

| **Schéma** | **Formule** | **Ordre d'erreur** |
|---|---|---|
| **Décentré à droite** (progressif) | $u'(x) \approx \dfrac{u(x+h) - u(x)}{h}$ | $O(h)$ |
| **Décentré à gauche** (rétrograde) | $u'(x) \approx \dfrac{u(x) - u(x-h)}{h}$ | $O(h)$ |
| **Centré** | $u'(x) \approx \dfrac{u(x+h) - u(x-h)}{2h}$ | $O(h^2)$ |

En notation indicielle : $u'(x_i) \approx \dfrac{u_{i+1} - u_{i-1}}{2h}$ — centré, $O(h^2)$.

#### III.2.3 Approximation de la Dérivée Seconde

De (i) + (ii) :

$$\boxed{u''(x) \approx \frac{u(x+h) - 2u(x) + u(x-h)}{h^2} + O(h^2)}$$

**~={red}Remarque=~ :** En passant en dimension 2, on a les approximations :

$$\frac{\partial u}{\partial x}(x,y) \approx \frac{u(x+\Delta x, y) - u(x-\Delta x, y)}{2\Delta x} + O(\Delta x^2)$$

$$\frac{\partial^2 u}{\partial x^2}(x,y) \approx \frac{u(x+\Delta x, y) - 2u(x,y) + u(x-\Delta x, y)}{\Delta x^2} + O(\Delta x^2)$$

Et de même pour la variable $y$ :

$$\frac{\partial u}{\partial y}(x,y) \approx \frac{u(x, y+\Delta y) - u(x, y-\Delta y)}{2\Delta y} + O(\Delta y^2)$$

#### III.2.4 Schéma à pas plus larges (ordre supérieur)

En utilisant $f(x+2h)$ et $f(x-2h)$, on obtient des approximations à **ordre supérieur** :

- Progressif (ordre $O(h)$, points plus loin) : $f'(x) \approx \dfrac{f(x+2h) - f(x)}{2h}$
- Rétrograde (à gauche) : $f'(x) \approx \dfrac{f(x) - f(x-2h)}{2h}$
- Centré d'ordre $O(h^2)$ : $f'(x) \approx \dfrac{f(x+2h) - f(x-2h)}{4h}$
- Dérivée seconde : $f''(x) \approx \dfrac{f(x+2h) - 2f(x) + f(x-2h)}{(2h)^2}$

### III.3 Application — Exemple d'EDP Différentielle en 1D

#### Problème modèle :

$$\begin{cases} -\dfrac{d^2}{dx^2}u(x) + p(x)\dfrac{d}{dx}u(x) + q(x)u(x) = g(x), & x \in\, ]0,1[ \\ u(0) = \alpha, \quad u(1) = \beta \end{cases}$$

On suppose $p$, $q$ et $g$ suffisamment régulières avec $q(x) > 0$.

**Discrétisation :** On subdivise $[0,1]$ en $N+1$ points. Le pas du maillage est $h = \dfrac{1}{N}$. Les nœuds sont $x_i = ih = \dfrac{i}{N}$, pour $i = 0, \ldots, N$.

**Équation discrète :**

$$\begin{cases} -\dfrac{d^2}{dx^2}(u(x_i)) + p(x_i)\dfrac{d}{dx}u(x_i) + q(x_i)u(x_i) = g(x_i) \\ u(x_0) = \alpha \\ u(x_N) = \beta \end{cases}$$

En notant $g(x_i) = g_i$ et en substituant les approximations centrées :

$$-\frac{u_{i+1} - 2u_i + u_{i-1}}{h^2} + p_i\frac{u_{i+1} - u_{i-1}}{2h} + q_i u_i = g_i$$

Ce qui donne :

$$\left(-\frac{1}{h^2} - \frac{p_i}{2h}\right)u_{i-1} + \left(\frac{2}{h^2} + q_i\right)u_i + \left(-\frac{1}{h^2} + \frac{p_i}{2h}\right)u_{i+1} = g_i$$

En notant $a_i = \left(-\dfrac{1}{h^2} - \dfrac{p_i}{2h}\right)$, $b_i = \left(\dfrac{2}{h^2} + q_i\right)$, $c_i = \left(-\dfrac{1}{h^2} + \dfrac{p_i}{2h}\right)$, on obtient l'**écriture matricielle tridiagonale** :

$$\begin{pmatrix} b_1 & c_1 & 0 & \cdots & 0 \\ a_2 & b_2 & c_2 & \cdots & 0 \\ 0 & a_3 & b_3 & \ddots & \vdots \\ \vdots & & \ddots & \ddots & c_{N-2} \\ 0 & \cdots & 0 & a_{N-1} & b_{N-1} \end{pmatrix} \begin{pmatrix} u_1 \\ u_2 \\ u_3 \\ \vdots \\ u_{N-1} \end{pmatrix} = \begin{pmatrix} g_1 - a_1\alpha \\ g_2 \\ g_3 \\ \vdots \\ g_{N-1} - c_{N-1}\beta \end{pmatrix}$$

**Solution :** $U = A^{-1}B$

> [!tip] Remarque :
>  Il y a plusieurs algorithmes pour inverser une matrice (Gauss, LU, Cholesky, …). Le système est ici **tridiagonal**, on peut le résoudre facilement par l'**algorithme de Thomas**, spécialement adapté aux **matrices bandes**.

### III.4 Application — Équation de la Chaleur 1D

#### Problème modèle :

$$\begin{cases} \dfrac{\partial u}{\partial t} = D\dfrac{\partial^2 u}{\partial x^2}, & (x,t) \in\, ]0,1[\times\,]0,T[ \\ u(x,0) = \phi(x) & \text{(condition initiale)} \\ u(0,t) = u(1,t) = 0 & \text{(conditions limites)} \end{cases}$$

> _On peut considérer qu'il s'agit de l'évolution de la température dans une barre soumise à une température nulle aux extrémités._

**Maillage régulier :** $x_j = j\Delta x$ avec $j = 0, \ldots, N$ et $t_n = n\Delta t$.

On note $u_j^n$ l'approximation de $u(x_j, t_n)$.

#### III.4.A Schéma Explicite (FTCS — Forward Time, Centered Space)

On utilise une **différence finie progressive pour le temps** et **centrée pour l'espace** :

$$\frac{\partial u}{\partial t}(x_j, t_n) \approx \frac{u_j^{n+1} - u_j^n}{\Delta t}$$
$$\frac{\partial^2 u}{\partial x^2}(x_j, t_n) \approx \frac{u_{j+1}^n - 2u_j^n + u_{j-1}^n}{\Delta x^2}$$

Le schéma s'écrit :

$$\boxed{\frac{u_j^{n+1} - u_j^n}{\Delta t} = D\frac{u_{j+1}^n - 2u_j^n + u_{j-1}^n}{\Delta x^2}} \quad j = 1, \ldots, N-1$$

Avec conditions initiales et limites :

$$u_j^0 = \phi(x_j), \quad u_0^n = u_N^n = 0 \quad \forall n \in \mathbb{N}$$

**Avantage :** Calcul direct — on connaît $u_j^n$, on calcule $u_j^{n+1}$ directement. **Aucune inversion de matrice.**

**Inconvénient :** **Conditionnellement stable.** Si le critère n'est pas respecté, la solution _explose_.

**Condition de stabilité (Von Neumann) :**

$$\boxed{\frac{D\,\Delta t}{\Delta x^2} \le \frac{1}{2}}$$

#### III.4.B Schéma Implicite (BTCS — Backward Time, Centered Space)

On utilise une **différence finie rétrograde pour le temps** et on évalue la dérivée spatiale à l'instant **courant** $n$ (inconnu) :

$$\frac{\partial u}{\partial t}(x_j, t_n) \approx \frac{u_j^n - u_j^{n-1}}{\Delta t}$$
$$\frac{\partial^2 u}{\partial x^2}(x_j, t_n) \approx \frac{u_{j+1}^n - 2u_j^n + u_{j-1}^n}{\Delta x^2}$$

Le schéma s'écrit :

$$\boxed{\frac{u_j^n - u_j^{n-1}}{\Delta t} = D\frac{u_{j+1}^n - 2u_j^n + u_{j-1}^n}{\Delta x^2}} \quad j = 1, \ldots, N-1$$
$$\frac{u_j^n}{\Delta t} - \frac{u_j^{n-1}}{\Delta t} = D\frac{u_{j+1}^n}{\Delta x^2} - 2D\frac{u_j^n}{\Delta x^2} + D\frac{u_{j-1}^n}{\Delta x^2}$$
$$-\frac{D}{\Delta x^2}u_{j-1}^n + \left(\frac{1}{\Delta t} + \frac{2D}{\Delta x^2}\right)u_j^n - \frac{D}{\Delta x^2}u_{j+1}^n = \frac{u_j^{n-1}}{\Delta t}$$

En posant $\alpha = \dfrac{D}{\Delta x^2}$ et $\beta = \left(-\dfrac{2D}{\Delta x^2} - \dfrac{1}{\Delta t}\right)$, on obtient l'**écriture matricielle** :

$$\begin{pmatrix} \beta & \alpha & 0 & \cdots & 0 \\
\alpha & \beta & \alpha & \cdots & 0 \\
0 & \ddots & \ddots & \ddots & \vdots \\
\vdots & & \alpha & \beta & \alpha \\
0 & \cdots & 0 & \alpha & \beta \end{pmatrix}
\begin{pmatrix} u_1^n \\ u_2^n \\ \vdots \\ u_{N-2}^n \\ u_{N-1}^n \end{pmatrix} = \begin{pmatrix} -\alpha u_0^n - \dfrac{u_1^{n-1}}{\Delta t} \\[6pt] -\dfrac{u_2^{n-1}}{\Delta t} \\[6pt] \vdots \\[6pt] -\dfrac{u_{N-2}^{n-1}}{\Delta t} \\[6pt] -\alpha u_N^n - \dfrac{u_{N-1}^{n-1}}{\Delta t} \end{pmatrix}$$
Puisque les conditions aux limites stipulent que la température est maintenue à $0$ aux deux extrémités de la barre pour tout temps $t$, nous avons logiquement : $u_0^n = 0 \quad \text{et} \quad u_N^n = 0$
$$\begin{pmatrix} \beta & \alpha & 0 & \cdots & 0 \\ \alpha & \beta & \alpha & \cdots & 0 \\ 0 & \ddots & \ddots & \ddots & \vdots \\ \vdots & & \alpha & \beta & \alpha \\ 0 & \cdots & 0 & \alpha & \beta \end{pmatrix} \begin{pmatrix} u_1^n \\ u_2^n \\ \vdots \\ u_{N-2}^n \\ u_{N-1}^n \end{pmatrix} = -\frac{1}{\Delta t} \begin{pmatrix} u_1^{n-1} \\ u_2^{n-1} \\ \vdots \\ u_{N-2}^{n-1} \\ u_{N-1}^{n-1} \end{pmatrix}$$

**Avantage :** **Inconditionnellement stable** — aucune condition sur $\Delta t$ et $\Delta x$.

**Inconvénient :** Il faut résoudre un **système d'équations linéaires** (**matrice tridiagonale**) à chaque pas de temps. On obtient les $u_j^n$ à partir des $u_j^{n-1}$ en résolvant le système. Le système étant **tridiagonal**, on peut le résoudre facilement par l'**algorithme de Thomas**, spécialement adapté aux matrices bandes.

#### III.4.C Méthode de Crank-Nicolson et Schéma $\theta$-Méthode

**Crank-Nicolson spécifique :** Moyenne des dérivées spatiales aux instants $n$ et $n+1$ :

$$\frac{u_j^{n+1} - u_j^n}{\Delta t} = \frac{D}{2\Delta x^2}\left[\left(u_{j+1}^n - 2u_j^n + u_{j-1}^n\right) + \left(u_{j+1}^{n+1} - 2u_j^{n+1} + u_{j-1}^{n+1}\right)\right]$$

**$\theta$-Méthode généralisée** pour l'équation de la chaleur :

$$\frac{u_j^{n+1} - u_j^n}{\Delta t} = \frac{D}{\Delta x^2}\left[\theta\left(u_{j+1}^n - 2u_j^n + u_{j-1}^n\right) + (1-\theta)\left(u_{j+1}^{n+1} - 2u_j^{n+1} + u_{j-1}^{n+1}\right)\right]$$

Avec $0 \le \theta \le 1$ :

| **Valeur de $\theta$** | **Schéma correspondant** | **Stabilité** | **Ordre** |
|---|---|---|---|
| $\theta = 0$ | Schéma **implicite** | Inconditionnellement stable | $O(\Delta t, \Delta x^2)$ |
| $\theta = 1$ | Schéma **explicite** | Conditionnellement stable | $O(\Delta t, \Delta x^2)$ |
| $\theta = \dfrac{1}{2}$ | **Crank-Nicolson** | Inconditionnellement stable | $O(\Delta t^2, \Delta x^2)$ |

> **Remarque :** Crank-Nicolson ($\theta = 1/2$) est d'ordre 2 en temps **et** en espace, ce qui en fait le schéma le plus précis à coût comparable.

### III.5 Propriétés Fondamentales d'un Schéma Numérique

#### III.5.1 Erreur de Troncature (E.T.)

L'**Erreur de Troncature** est l'erreur commise en remplaçant l'équation continue par le schéma discret — elle est issue des _restes de Taylor_.

Exemple : Pour l'équation de la chaleur $\dfrac{\partial u}{\partial t} - D\dfrac{\partial^2 u}{\partial x^2} = 0$ avec le schéma explicite centré en espace :

$$\frac{u_j^{n+1} - u_j^n}{\Delta t} - \frac{D}{\Delta x^2}(u_{j+1}^n - 2u_j^n + u_{j-1}^n) = \text{E.T.}$$

L'ordre de l'erreur de troncature est $O\left(\Delta t, \Delta x^2\right)$.

#### III.5.2 Consistance

Un schéma aux différences finies est **consistant** si :

$$\lim_{(\Delta t, \Delta x) \to 0} \text{E.T.} = 0$$

Des problèmes peuvent se poser si l'E.T. varie comme $\dfrac{\Delta t}{\Delta x}$ — dans ce cas, il faut s'assurer que $\dfrac{\Delta t}{\Delta x} \to 0$.

#### III.5.3 Stabilité

Ce concept s'applique aux problèmes d'évolution. Un schéma numérique est **stable** si les erreurs (arrondi, troncature) ne peuvent pas croître pendant la procédure numérique d'un pas de temps au suivant.

Un schéma peut être :

- **Inconditionnellement stable :** quelles que soient $\Delta t$ et $\Delta x$, les erreurs causées par le schéma numérique n'explosent pas au fil des itérations.
- **Conditionnellement stable :** on doit imposer une condition sur $\Delta t$ et $\Delta x$ pour que la solution n'explose pas.
- **Inconditionnellement instable :** quelles que soient $\Delta t$ et $\Delta x$, les erreurs s'amplifient. Ceci cause des résultats complètement faux.

> **Analyse de stabilité de Von Neumann :** Méthode standard pour étudier la stabilité des schémas linéaires. On injecte une perturbation de Fourier $\varepsilon_j^n = G^n e^{i k j \Delta x}$ dans le schéma et on étudie le **facteur d'amplification** $G$. Le schéma est **stable** si $|G| \le 1$ pour toute fréquence $k$.

#### III.5.4 Convergence

Un schéma convergent est un schéma _numériquement sain_. Une condition nécessaire à la convergence d'un schéma est :

$$\textbf{Stabilité} + \textbf{Consistance} \implies \textbf{Convergence}$$

> _Théorème de Lax :_ Pour un problème linéaire bien posé, un schéma consistant est convergent **si et seulement si** il est stable.

---

## IV. Différences Finies pour Équations Modèles

### IV.1 Équation d'Onde d'Ordre 1

Sous la forme :

$$\frac{\partial u}{\partial t} + c\frac{\partial u}{\partial x} = 0, \quad c > 0$$

_Cette équation est un modèle pour un écoulement instationnaire non visqueux (isentropique)._ La condition initiale est $u(x,0) = F(x)$. La solution exacte est $u(x,t) = F(x - ct)$ — l'information initiale se propage le long des caractéristiques.

#### IV.1.1 Schéma de Lax — Ordre $O\!\left(\Delta t, \dfrac{\Delta x^2}{\Delta t}\right)$

$$\frac{u_j^{n+1} - \dfrac{u_{j+1}^n + u_{j-1}^n}{2}}{\Delta t} + c\frac{u_{j+1}^n - u_{j-1}^n}{2\Delta x} = 0$$

Ici, $n$ est l'indice de temps et $j$ l'indice d'espace. L'erreur de troncature est d'ordre $O\!\left(\Delta t, \dfrac{\Delta x^2}{\Delta t}\right)$ — **non convergent** sans condition liant $\Delta t$ et $\Delta x$.

#### IV.1.2 Schéma explicite décentré progressif — Ordre $O(\Delta t, \Delta x^2)$

$$\frac{u_j^{n+1} - u_j^n}{\Delta t} + c\frac{u_{j+1}^n - u_j^n}{\Delta x} = 0$$

Ce schéma est d'ordre $O(\Delta t, \Delta x^2)$ en temps et espace.

#### IV.1.3 Schéma centré en espace — Ordre $O(\Delta t, \Delta x^2)$

$$\frac{u_j^{n+1} - u_j^n}{\Delta t} + c\frac{u_{j+1}^n - u_{j-1}^n}{2\Delta x} = 0$$

Ce schéma est **inconditionnellement instable** si $c > 0$. Cela se vérifie par l'analyse de Von Neumann. Ces schémas ne peuvent donc pas être utilisés.

#### IV.1.4 Schéma décentré upwind (régressif) — **Stable**

Pour $c > 0$, le schéma qui marche est dit *upwind* (décentré dans le sens amont de la propagation) :

$$\frac{u_j^{n+1} - u_j^n}{\Delta t} + c\frac{u_j^n - u_{j-1}^n}{\Delta x} = 0$$

Son erreur de troncature est $O(\Delta t, \Delta x)$. Une analyse de stabilité de Von Neumann montre que **le schéma est stable** sous la condition **CFL** (Courant-Friedrichs-Lewy) :

$$\boxed{\nu = \frac{c\,\Delta t}{\Delta x} \le 1} \quad \text{(nombre de Courant)}$$

#### IV.1.5 Schéma d'Euler implicite pour l'équation d'onde

$$\frac{u_j^{n+1} - u_j^n}{\Delta t} + c\frac{u_{j+1}^{n+1} - u_{j-1}^{n+1}}{2\Delta x} = 0$$

L'erreur de troncature est d'ordre $O(\Delta t, \Delta x^2)$. Le schéma est **inconditionnellement stable**. En posant $\nu = \dfrac{c\,\Delta t}{2\Delta x}$, on peut le réécrire sous la forme :

$$-\frac{\nu}{2}\,u_{j-1}^{n+1} + u_j^{n+1} + \frac{\nu}{2}\,u_{j+1}^{n+1} = u_j^n$$

Ce qui donne le système matriciel $[A]\,U^{n+1} = U^n - [A]^{-1}[B]$ avec :

$$A = \begin{pmatrix} 1 & \nu/2 & 0 & \cdots & 0 \\ -\nu/2 & 1 & \nu/2 & \cdots & 0 \\ 0 & \ddots & \ddots & \ddots & \vdots \\ & & -\nu/2 & 1 & \nu/2 \\ 0 & \cdots & 0 & -\nu/2 & 1 \end{pmatrix}$$

---

### IV.2 Différences Finies 2D — Équation de la Chaleur 2D

$$\frac{\partial u}{\partial t} = \alpha\,\Delta u = \alpha\left(\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2}\right)$$

#### IV.2.1 Schéma Explicite Simple

$$\frac{u_{i,j}^{n+1} - u_{i,j}^n}{\Delta t} = \alpha\left[\frac{u_{i+1,j}^n - 2u_{i,j}^n + u_{i-1,j}^n}{\Delta x^2} + \frac{u_{i,j+1}^n - 2u_{i,j}^n + u_{i,j-1}^n}{\Delta y^2}\right]$$

Pour résoudre l'évolution du système, on pose le schéma sous la forme :

$$u_{i,j}^{n+1} = Au_{i,j}^n + Bu_{i+1,j}^n + Cu_{i-1,j}^n + Du_{i,j+1}^n + Eu_{i,j-1}^n$$

Avec :

- $A = 1 - 2\alpha\dfrac{\Delta t}{\Delta x^2} - 2\alpha\dfrac{\Delta t}{\Delta y^2}$
- $B = C = \alpha\dfrac{\Delta t}{\Delta x^2}$
- $D = E = \alpha\dfrac{\Delta t}{\Delta y^2}$

pour $i \in [1, I]$, $j \in [1, J]$.

> On constate que $B = C$ et $D = E$.

**Écriture matricielle :** On considère $i = \{1, 2, \ldots, I\}$ et $j = \{1, 2, \ldots, J\}$. Les conditions limites sont $u_{0,j}$, $u_{I+1,j}$, $u_{i,0}$, $u_{i,J+1}$ considérées comme constantes (conditions de **Dirichlet**).

On ordonne les inconnues en un vecteur :

$$U^n = \begin{pmatrix} u_{1,1}^n \\ u_{1,2}^n \\ \vdots \\ u_{1,J}^n \\ u_{2,1}^n \\ \vdots \\ u_{I,J}^n \end{pmatrix}$$

La forme matricielle du problème est :

$$U^{n+1} = MU^n + V$$

où $M$ est une matrice $(I \times J,\; I \times J)$ de la forme **par blocs** :

$$M = \begin{pmatrix} M_c & M_d & & 0 \\
M_g & M_c & M_d & \\
& \ddots & \ddots & \ddots \\
0 & & M_g & M_c \end{pmatrix}$$

Chaque bloc est de taille $(J \times J)$ avec :

$$M_c = \begin{pmatrix} A & D & 0 \\ E & A & D \\ 0 & \ddots & \ddots & \ddots \\ & & E & A \end{pmatrix}, \quad M_g = \begin{pmatrix} C & 0 \\ 0 & C \\ & \ddots \\ & & C \end{pmatrix}, \quad M_d = \begin{pmatrix} B & 0 \\ 0 & B \\ & \ddots \\ & & B \end{pmatrix}$$

Comme dans le cas 1D, le vecteur $V$ de taille $(I \times J)$ contient les **conditions aux limites**.

#### IV.2.2 Équation de Laplace — Formule à Cinq Points

$$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$$

Le schéma centré à **cinq points** est :

$$\frac{u_{i+1,j} - 2u_{i,j} + u_{i-1,j}}{\Delta x^2} + \frac{u_{i,j+1} - 2u_{i,j} + u_{i,j-1}}{\Delta y^2} = 0$$

**Exercice type :** Pour $\Delta u = g$, $u \in \Omega = [0,1] \times [0,1]$ :

1. Écrire le schéma numérique à cinq points
2. Transformer le schéma en forme matricielle
3. À l'aide de Matlab, trouver la solution

En notant $\mathcal{A} = \dfrac{1}{\Delta x^2}$, $\mathcal{B} = \dfrac{1}{\Delta y^2}$, $\lambda = -\dfrac{2}{\Delta x^2} - \dfrac{2}{\Delta y^2}$, le schéma s'écrit :

$$\mathcal{A}\,u_{i+1,j} + \lambda\, u_{i,j} + \mathcal{A}\,u_{i-1,j} + \mathcal{B}\,u_{i,j+1} + \mathcal{B}\,u_{i,j-1} = g_{i,j}$$

avec $x_i = \dfrac{i}{n}$, $y_j = \dfrac{j}{m}$, $i = 0,\ldots,n$, $j = 0,\ldots,m$.

La **forme matricielle finale** est $MU + V = F$, avec $M$ de taille $(n-1)(m-1) \times (n-1)(m-1)$, structurée par blocs :

$$M = \begin{pmatrix} M_\lambda & M_\mathcal{A} & & 0 \\
M_\mathcal{A} & M_\lambda & M_\mathcal{A} & \\
& \ddots & \ddots & \ddots \\
0 & & M_\mathcal{A} & M_\lambda \end{pmatrix}$$

avec :

$$M_\lambda = \begin{pmatrix} \lambda & \mathcal{B} & 0 & \cdots \\ \mathcal{B} & \lambda & \mathcal{B} & \\ & \ddots & \ddots & \ddots \\ 0 & & \mathcal{B} & \lambda \end{pmatrix}, \quad M_\mathcal{A} = \begin{pmatrix} \mathcal{A} & 0 & \cdots \\ 0 & \mathcal{A} & \\ & \ddots & \ddots \\ & & 0 & \mathcal{A} \end{pmatrix}$$

### IV.3 Méthode ADI (Alternating Direction Implicit)

Pour les EDP 2D, les schémas implicites génèrent des matrices par blocs massives, coûteuses à inverser. La méthode **ADI** (ou méthode du **pas fractionnel** / *split*) résout ce problème.

**Idée :** Découper l'intervalle de temps en deux et résoudre le problème en deux itérations (type _prédiction-correction_) :

$$\text{Pas 1 (prédiction) : } \frac{u_{i,j}^{n+1/2} - u_{i,j}^n}{\Delta t/2} = \alpha\left[S_x^2\, u_{i,j}^{n+1/2} + S_y^2\, u_{i,j}^n\right]$$

$$\text{Pas 2 (correction) : } \frac{u_{i,j}^{n+1} - u_{i,j}^{n+1/2}}{\Delta t/2} = \alpha\left[S_x^2\, u_{i,j}^{n+1/2} + S_y^2\, u_{i,j}^{n+1}\right]$$

Où les opérateurs discrets sont :

$$S_x^2\, u_{i,j}^n = \frac{u_{i+1,j}^n - 2u_{i,j}^n + u_{i-1,j}^n}{\Delta x^2}, \qquad S_y^2\, u_{i,j}^n = \frac{u_{i,j+1}^n - 2u_{i,j}^n + u_{i,j-1}^n}{\Delta y^2}$$

> **Avantage :** Au pas 1, le schéma est **implicite en $x$** et explicite en $y$ → on résout des systèmes tridiagonaux ligne par ligne. Au pas 2, c'est l'inverse. Cela permet de ne résoudre que des **systèmes tridiagonaux simples**, très efficaces algorithmiquement.

---

## V. Rappels Matlab pour le Calcul Scientifique

### V.1 Introduction

**Matlab** (MATrix LABoratory) est un logiciel pour le calcul scientifique, orienté vers les **vecteurs** et les **listes de données**.

- Toutes les variables sont des **matrices** (pas de déclaration de type nécessaire)

### V.2 Syntaxe de Base

```matlab
% Déclaration de variables
a = 5           % scalaire (1×1)
b = [4, 6]      % vecteur ligne (1×2) — séparateur virgule ou espace
c = [-5; 2]     % vecteur colonne (2×1) — séparateur point-virgule
d = [2 3; -1 7] % matrice (2×2)

% Génération de vecteurs réguliers
x = [debut : pas : fin]  % vecteur ligne de points équidistribués
% Exemple :
t = [0 : 0.2 : 2]        % t allant de 0 à 2 avec pas 0.2
```

### V.3 Opérations Matricielles

- **Séparateur de ligne :** point-virgule `;`
- **Séparateur de colonne :** virgule `,` ou espace

### V.4 Graphiques — Commande `plot`

Pour tracer le graphe de $f(x) = x^3 - 2\sin(x) + 1$ :

```matlab
% Méthode 1 : point par point
>> g = 'x.^3 - 2*sin(x) + 1';   % définir la fonction (avec .^ pour opération élément par élément)
>> x = [-1 : 0.1 : 1];           % définir les points dans [-1, 1]
>> y = eval(g);                   % évaluer la fonction
>> plot(x, y); grid;              % tracer avec grille
```

Ou de façon directe avec `fplot` :

```matlab
% Méthode 2 : fplot (automatique)
>> g = 'x.^3 - 2*sin(x) + 1';
>> fplot(g, [-1, 1]); grid;
```

### V.5 Boucles et Structures de Contrôle

#### Boucle `for`

```matlab
% Calcule le produit scalaire ps = x·y
ps = 0;
for i = 1:n
    ps = ps + x(i) * y(i);
end
% Résultat : ps = x̄·ȳ
```

#### Boucle `while`

```matlab
% Même calcul avec while — Attention à l'indice !
ps = 0;
i = 0;
while (i < n)           % ou while (i <= (n-1))
    i = i + 1;          % incrémenter AVANT pour respecter l'indexation Matlab (1-indexé)
    ps = ps + x(i) * y(i);
end
```

> ⚠️ **Attention :** Dans la boucle `while`, il faut incrémenter **manuellement** le compteur pour éviter les boucles infinies. L'ordre de l'incrémentation (début ou fin de boucle) change l'initialisation nécessaire de `i`.

#### Instruction conditionnelle `if`

```matlab
% Syntaxe de base — exemple : calcul de √n
if (n > 0)
    racine = sqrt(n);   % Cette instruction calcule √n
end
```

### V.6 Exemple Complet — Résolution Numérique d'une EDO (Schéma d'Euler)

**Problème :** $\begin{cases} y' = -ty^2 \\ y(0) = 1 \end{cases}$, $t \in [0, 2]$

**Solution exacte :** $y(t) = \dfrac{2}{t^2 + 2}$

```matlab
% Paramètres
a = 0; b = 2; n = 10;
h = (b - a) / n;

% Discrétisation du temps
for i = 1:(n+1)
    t(i) = a + (i-1) * h;
end

% Schéma d'Euler explicite : y_{i+1} = y_i + h*f(t_i, y_i)
y(1) = 1;                          % condition initiale y(0) = 1
for i = 1:n
    y(i+1) = y(i) - h * t(i) * y(i)^2;   % f(t,y) = -t*y^2
end

% Tracé de la solution approchée
plot(t, y);
hold on;

% Tracé de la solution exacte
g = '2./(x.^2 + 2)';
fplot(g, [0, 2], 'r');             % solution exacte en rouge
```

**Vérification pour $n = 10$ :**

| $i$ | 0 | 1 | 2 | 3 | 4 | … |
|---|---|---|---|---|---|---|
| $t_i$ | 0 | 0.2 | 0.4 | 0.6 | 0.8 | … |
| $y_i$ (approché) | 1 | 1 | 0.96 | 0.89 | … | … |
| $y_i^E$ (exact) | 1 | 0.98 | 0.925 | 0.847 | … | … |

Pour $n = 10$ et $n = 20$, les résultats montrent la convergence vers la solution exacte.

---

## VI. Méthode des Éléments Finis (EF) en 1D

### VI.1 Introduction et Problème Modèle

La méthode des éléments finis est particulièrement puissante pour les **géométries complexes** et repose sur une base mathématique solide (espaces de Sobolev, formulation variationnelle).

**Problème :** Soit le problème aux conditions limites :

$$\begin{cases} -u''(x) = g(x), & x \in\, ]0,1[ \\ u(0) = u(1) = 0 \end{cases}$$

Ce problème est équivalent au problème de **minimisation** :

$$J(u) = \min_{v \in H_0^1(]0,1[)} J(v)$$

avec $J(v) = \dfrac{1}{2}\displaystyle\int_0^1 (v'(t))^2\, dt - \int_0^1 g(t)\,v(t)\, dt$

c'est-à-dire qu'il faut résoudre $J'(u) = 0$.

### VI.2 Espaces de Sobolev (Rappel)

L'espace $H^1(]0,1[)$ est constitué des fonctions $v$ de $L^2(]0,1[)$ pour lesquelles il existe un nombre réel $p$ et une fonction $w$ de $L^2(]0,1[)$ tels que :

$$v(x) = p + \int_0^x w(t)\, dt$$

On munit $H^1(]0,1[)$ de la norme :

$$\|v\|_{H^1(]0,1[)}^2 = \|v\|_{L^2(]0,1[)}^2 + \|v'\|_{L^2(]0,1[)}^2$$

Le sous-espace $H_0^1(]0,1[) \subset H^1(]0,1[)$ est défini par :

$$v \in H_0^1(]0,1[) \iff \begin{cases} v \in H^1(]0,1[) \\ v(0) = v(1) = 0 \end{cases}$$

### VI.3 Formulation Faible (Variationnelle)

**Étape 1 :** Multiplier l'équation $-u'' = g$ par une **fonction test** $v \in H_0^1$ (respectant $v(0) = v(1) = 0$)

$$\int_0^1 -u''(t)\, v(t)\, dt = \int_0^1 g(t)\, v(t)\, dt$$

**Étape 2 :** Appliquer une **intégration par parties** pour réduire l'ordre de la dérivée sur $u$ :

$$\int_0^1 u'(t)\,v'(t)\,dt - \underbrace{[u'v]_0^1}_{= 0 \text{ car } v(0) = v(1) = 0} = \int_0^1 g(t)\,v(t)\,dt$$

D'où la **formulation faible** :

$$\int_0^1 u'(t)\,v'(t)\,dt - \int_0^1 g(t)\,v(t)\,dt = 0, \quad \forall v \in H_0^1 \tag{$\star$}$$

Le problème variationnel s'écrit formellement : **Trouver $u \in V$ tel que pour tout $v \in V$ :**

$$\boxed{a(u,v) = L(v)}$$

avec :

- $a(u,v) = \displaystyle\int_0^1 u'(t)\,v'(t)\, dt$ — **forme bilinéaire**
- $L(v) = \displaystyle\int_0^1 g(t)\,v(t)\, dt$ — **forme linéaire**

### VI.4 Théorème de Lax-Milgram

**Garantit l'existence et l'unicité** de la solution si $a$ est une forme bilinéaire symétrique, continue et **coercive**, et $L$ est une fonctionnelle linéaire continue :

- **Continue :** $a(u,v) \le M\,\|u\|\,\|v\|$
- ***Coercive* :** $a(u,u) \ge \alpha\,\|u\|^2$ avec $\alpha > 0$

Alors :

$$\exists!\, u \in V \quad \text{tel que} \quad a(u,v) = L(v), \quad \forall v \in V$$

### VI.5 Méthode de Galerkin et Discrétisation

Pour approcher numériquement la solution $u \in V$, on cherche une approximation $u_h$ dans un **sous-espace de dimension finie** $V_h \subset V$ de dimension $N$.

Soit $(w_1, \ldots, w_N)$ une base de $V_h$. La solution approchée s'écrit :

$$u_h(x) = \sum_{j=1}^N u_j^h\, w_j(x)$$

En remplaçant dans $(\star)$ et en choisissant $v = w_i$ pour $i = 1, \ldots, N$ :

$$a\!\left(\sum_{j=1}^N u_j^h\, w_j,\; w_i\right) = L(w_i)$$

Comme $a$ est bilinéaire (linéaire par rapport à la 1ère variable et linéaire par rapport à la 2ème variable) :

$$\sum_{j=1}^N u_j^h\, a(w_j, w_i) = L(w_i)$$

Ce qui donne le **système matriciel** :

$$\boxed{A\, U_h = b}$$

avec :

- **Matrice de rigidité** $A$ : $A_{ij} = a(w_j, w_i)$
- **Vecteur second membre** $b$ : $b_i = L(w_i)$
- **Vecteur des inconnues** $U_h = (u_1^h, \ldots, u_N^h)^T$

**Consistance :** La convergence de la méthode est garantie si $\displaystyle\lim_{h \to 0} d(u, V_h) = 0$. Pour des éléments finis d'ordre $k$, on a :

$$d(u, V_h) = \inf_{v_h \in V_h}\|u - v_h\| \le c\,h^k$$

### VI.6 Éléments Finis de Lagrange 1D — Fonctions "Chapeau"

#### VI.6.1 Construction de l'espace $V_h$

On discrétise le domaine $\Omega = ]0,1[$ en $N+1$ segments de taille $h = \Delta x = \dfrac{1}{N+1}$. Les nœuds sont $x_j = j\,\Delta x = \dfrac{j}{N+1}$, pour $0 \le j \le N+1$.

Pour $1 \le j \le N$, on introduit les **fonctions de base** $\varphi_j^h$ (Lagrange d'ordre 1, affines par morceaux) définies par :

1. $\varphi_j^h(x_j) = 1$ — vaut **1** sur son nœud
2. $\varphi_j^h(x_i) = 0$, $\forall i \neq j$ — vaut **0** sur tous les autres nœuds
3. $\varphi_j^h$ est **affine** sur chaque $[x_i, x_{i+1}]$, $i = 0, \ldots, N$

Ces fonctions $\varphi_j^h$ sont appelées **fonctions chapeau** (_hat functions_).

#### VI.6.2 Expression Analytique

$$\varphi_j(x) = \begin{cases} \dfrac{x - x_{j-1}}{x_j - x_{j-1}} & \text{si } x \in [x_{j-1}, x_j] \\[10pt] \dfrac{x_{j+1} - x}{x_{j+1} - x_j} & \text{si } x \in [x_j, x_{j+1}] \\[10pt] 0 & \text{sinon} \end{cases}$$

**Dérivation détaillée :** Sur $[x_j, x_{j+1}]$, $\varphi_j$ est affine : $\varphi_j(x) = ax + b$ avec $\varphi_j(x_j) = 1$ et $\varphi_j(x_{j+1}) = 0$. Résolvant :

$$a = \frac{1}{x_j - x_{j+1}} = -\frac{1}{h}, \quad b = \frac{x_{j+1}}{x_{j+1} - x_j} = \frac{x_{j+1}}{h}$$

D'où $\varphi_j(x) = \dfrac{x_{j+1} - x}{h}$ sur $[x_j, x_{j+1}]$. De même sur $[x_{j-1}, x_j]$ : $\varphi_j(x) = \dfrac{x - x_{j-1}}{h}$.

**Dérivée de la fonction chapeau :**

$$\varphi_j'(x) = \begin{cases} \dfrac{1}{h} & \text{si } x \in [x_{j-1}, x_j] \\[6pt] -\dfrac{1}{h} & \text{si } x \in [x_j, x_{j+1}] \\[6pt] 0 & \text{sinon} \end{cases}$$

### VI.7 Calcul de la Matrice de Rigidité

Pour le problème $-u''(x) = g(x)$, on calcule $a_{ij} = a(\varphi_j, \varphi_i) = \displaystyle\int_0^1 (\varphi_j)'(\varphi_i)'\, dt$.

**Cas $|i - j| > 1$ :** Les supports des fonctions ne se chevauchent pas → $a_{ij} = 0$

**Cas $i = j$ (diagonale) :** Les intégrales portent sur $[x_{i-1}, x_i]$ et $[x_i, x_{i+1}]$ :

$$a_{ii} = \int_{x_{i-1}}^{x_i}\left(\frac{1}{h}\right)^2 dt + \int_{x_i}^{x_{i+1}}\left(-\frac{1}{h}\right)^2 dt = \frac{h}{h^2} + \frac{h}{h^2} = \frac{2}{h}$$

**Cas $j = i + 1$ (sous-diagonale/sur-diagonale) :** Sur l'intervalle $[x_i, x_{i+1}]$ :

$$a_{i,i+1} = \int_{x_i}^{x_{i+1}} \underbrace{(\varphi_i')}_{ -1/h}\,\underbrace{(\varphi_{i+1}')}_{ 1/h}\, dt = \int_{x_i}^{x_{i+1}} \left(-\frac{1}{h}\right)\left(\frac{1}{h}\right)dt = -\frac{1}{h}$$

De même $a_{i,i-1} = -\dfrac{1}{h}$.

Donc la **matrice de rigidité tridiagonale** est :

$$A = \frac{1}{h}\begin{pmatrix} 2 & -1 & 0 & \cdots \\ -1 & 2 & -1 & \\ 0 & -1 & \ddots & \ddots \\ & & \ddots & 2 \end{pmatrix}$$

### VI.8 Calcul du Vecteur Second Membre

$$b_i = L(\varphi_i) = \int_0^1 g(t)\,\varphi_i(t)\, dt = \int_{x_{i-1}}^{x_{i+1}} g(t)\,\varphi_i(t)\, dt$$

Par la **formule des rectangles** (approximation) :

$$b_i \approx g(x_i) \int_{x_{i-1}}^{x_{i+1}} \varphi_i(t)\, dt = g(x_i) \cdot h$$

> L'aire sous la fonction chapeau $\varphi_i$ sur $[x_{i-1}, x_{i+1}]$ est celle d'un triangle de base $2h$ et de hauteur $1$ : aire $= \dfrac{1}{2} \times 2h \times 1 = h$.

D'où le **système final** :

$$\boxed{A\,U^h = b} \quad \text{avec} \quad A = \frac{1}{h}\begin{pmatrix} 2 & -1 & \\ -1 & 2 & -1 \\ & \ddots & \ddots & \ddots \end{pmatrix}, \quad b = h\begin{pmatrix} g_1 \\ g_2 \\ \vdots \\ g_N \end{pmatrix}, \quad U^h = \begin{pmatrix} u_1^h \\ u_2^h \\ \vdots \\ u_N^h \end{pmatrix}$$

> **Remarque importante :** La matrice obtenue par EF reproduit _exactement_ la matrice du Laplacien discret obtenu par Différences Finies ($\frac{1}{h^2}$ fois la matrice tridiagonale $\{-1, 2, -1\}$, multipliée par $h$), ce qui confirme la cohérence des deux méthodes pour ce problème simple en 1D.

### VI.9 Éléments Finis en Dimension Supérieure (Aperçu)

En dimension supérieure, on utilise des **éléments géométriques simples** (triangles, rectangles en 2D ; tétraèdres, hexaèdres en 3D). Un *ensemble géométrique* qui se réduit, en dimension 1, à un intervalle (triangle, rectangle, N-simplexe).

Les fonctions de base sont alors des polynômes sur chaque élément, et la matrice de rigidité est assemblée élément par élément.

---

## VII. Exercices Types et Corrigés

### VII.1 Exercice — Résolution d'une EDO par le Schéma d'Euler

**Problème :** $\begin{cases} y' = -ty^2 \\ y(0) = 1 \end{cases}$, $t \in [0, 2]$

**1. Est-ce que $y(t) \ge 0$ ? Est-elle décroissante ?**

On a $y^2(t) \ge 0$ et $t \ge 0$, donc $ty^2 \ge 0$. D'où $y' = -ty^2 \le 0$ pour $t \in [0,2]$, ce qui montre que $y$ est **décroissante**. Comme $y(0) = 1 > 0$ et $y$ est continue et décroissante, $y(t) \ge 0$ sur $[0,2]$.

**2. Solution exacte :**

$$y' = -ty^2 \implies \frac{dy}{y^2} = -t\,dt \implies \frac{-1}{y} = -\frac{t^2}{2} + C_1 \implies \frac{1}{y} = \frac{t^2}{2} + C_1$$

Avec $y(0) = 1$ : $C_1 = 1$. Donc :

$$\boxed{y(t) = \frac{2}{t^2 + 2}}$$

**3. Schéma d'Euler (explicite, à droite) :**

$$y_{i+1} = y_i + h \cdot f(t_i, y_i) = y_i - h\,t_i\, y_i^2$$

avec $h = \dfrac{2}{n}$ et $t_i = \dfrac{2i}{n}$.

**4. Algorithme (pseudo-code / Matlab) :**

```matlab
a = 0; b = 2; m = 10;
h = (b - a) / m;
for i = 1:(m+1)
    t(i) = a + (i-1) * h;
end
y(1) = 1;
for i = 1:m
    y(i+1) = y(i) - h * t(i) * y(i)^2;
end
plot(t, y);
hold on;
g = '2./(x.^2 + 2)';
fplot(g, [0, 2], 'r');
```

### VII.2 Exercice — Approximations d'ordre supérieur

**Rappel des formules de base :**

$$u'(x) \approx \frac{u(x+h) - u(x)}{h} \quad \text{à droite} \quad \implies u'(x_i) \approx \frac{u_{i+1} - u_i}{h}$$

$$u'(x) \approx \frac{u(x) - u(x-h)}{h} \quad \text{à gauche} \quad \implies u'(x_i) \approx \frac{u_i - u_{i-1}}{h}$$

$$u'(x) \approx \frac{u(x+h) - u(x-h)}{2h} \quad \text{centré} \quad \implies u'(x_i) \approx \frac{u_{i+1} - u_{i-1}}{2h}$$

**En utilisant des points plus loin** (développements avec $2h$) :

On a :
$$f(x+2h) = f(x) + 2hf'(x) + \frac{(2h)^2}{2}f''(x) + \frac{(2h)^3}{6}f'''(x) + O((2h)^4)$$
$$f(x-2h) = f(x) - 2hf'(x) + \frac{(2h)^2}{2}f''(x) - \frac{(2h)^3}{6}f'''(x) + O((2h)^4)$$

D'où :

$$f'(x) \approx \frac{f(x+2h) - f(x)}{2h} \quad \text{à droite}$$

$$f'(x) \approx \frac{f(x) - f(x-2h)}{2h} \quad \text{à gauche}$$

$$f'(x) \approx \frac{f(x+2h) - f(x-2h)}{4h} \quad \text{centré}$$

$$f''(x) \approx \frac{f(x+2h) - 2f(x) + f(x-2h)}{(2h)^2}$$

### VII.3 Application — Modèle SIR en Biologie (Calcul Scientifique appliqué)

On considère le système du **modèle SIR** de Kermack-McKendrick décrivant l'évolution d'une population touchée par une maladie infectieuse :

$$\begin{cases} \dfrac{dS}{dt} = -r\,S\,I \\[6pt] \dfrac{dI}{dt} = r\,S\,I - a\,I \\[6pt] \dfrac{dR}{dt} = a\,I \end{cases}$$

avec $S(0) = S_0$, $I(0) = I_0$, $R(0) = R_0$, où :
- $S$ : nombre de personnes *susceptibles* (saines)
- $I$ : nombre de personnes *infectées*
- $R$ : nombre de personnes *retirées* (immunisées/guéries)
- $r$ : **taux d'infection**
- $a$ : **taux de retrait** (guérison)

**Propriété :** $\dfrac{d}{dt}(S + I + R) = 0$, donc la population totale $N = S + I + R$ est constante.

**Situation épidémique :** Une épidémie suppose une augmentation du nombre d'infectés : $I'(t) > 0$, soit $r\,S(t) > a$, c'est-à-dire :

$$R_0 = \frac{r \cdot N}{a} > 1 \quad \text{(taux de reproduction de base)}$$

**Schéma d'Euler explicite :**

$$\begin{cases} x(t+1) = x(t) - \alpha\, x(t)\, y(t) \\ y(t+1) = y(t) + \alpha\, x(t)\, y(t) - \beta\, y(t) \\ z(t+1) = z(t) + \beta\, y(t) \end{cases}$$

---

## VIII. Key Takeaways — Fiches de Révision pour l'Examen

### 📌 Classification des EDP

> **Retenir :** Le discriminant $\Delta = b^2 - 4ac$ classe l'EDP en **Hyperbolique** ($\Delta > 0$), **Parabolique** ($\Delta = 0$), **Elliptique** ($\Delta < 0$). Associer chaque type à son équation modèle et à son phénomène physique.

| Type           | $\Delta$ | Phénomène              | Équation modèle                 |
| -------------- | -------- | ---------------------- | ------------------------------- |
| *Hyperbolique* | $> 0$    | Propagation d'ondes    | Onde : $u_{tt} = c^2 u_{xx}$    |
| *Parabolique*  | $= 0$    | Diffusion (dissipatif) | Chaleur : $u_t = D\,u_{xx}$     |
| *Elliptique*   | $< 0$    | Stationnaire           | Laplace : $u_{xx} + u_{yy} = 0$ |


### 📌 Formules de Taylor — Le Cœur des DF

> **Retenir par cœur :**
>
> - $u'(x) \approx \dfrac{u(x+h) - u(x-h)}{2h}$, erreur $O(h^2)$ ← **toujours préférer le centré**
> - $u''(x) \approx \dfrac{u(x+h) - 2u(x) + u(x-h)}{h^2}$, erreur $O(h^2)$ ← **incontournable**

### 📌 Schéma Explicite vs Implicite

|                          | **Explicite**                                                                                           | **Implicite**                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Approximation temporelle | Progressive ($t_n \to t_{n+1}$)                                                                         | Rétrograde ($t_{n+1} \to t_n$)                                                                          |
| Calcul                   | Direct, pas de système à résoudre                                                                       | Système linéaire à résoudre ($AU^{n+1} = BU^n$)                                                         |
| Stabilité                | **Conditionnelle** (condition sur $\Delta t/\Delta x^2$) $r\leq0,5$                                     | **Inconditionnelle** (pour l'équation de la chaleur)                                                    |
| Matrice                  | Aucune                                                                                                  | **Tridiagonale** (algorithme de Thomas)                                                                 |
|                          | $\frac{\partial u}{\partial t}(x_j, t_n) \approx \frac{u_j^{n+1} - u_j^n}{\Delta t}$                    | $\frac{\partial u}{\partial t}(x_j, t_n) \approx \frac{u_j^n - u_j^{n-1}}{\Delta t}$                    |
|                          | $\frac{\partial^2 u}{\partial x^2}(x_j, t_n) \approx \frac{u_{j+1}^n - 2u_j^n + u_{j-1}^n}{\Delta x^2}$ | $\frac{\partial^2 u}{\partial x^2}(x_j, t_n) \approx \frac{u_{j+1}^n - 2u_j^n + u_{j-1}^n}{\Delta x^2}$ |

### 📌 Stabilité — Ce qu'il faut dire à l'examen

> Un schéma est **stable** si les erreurs ne s'amplifient pas au fil des itérations.
>
> - **Méthode d'analyse :** Analyse de stabilité de **Von Neumann** (injection d'un mode de Fourier, étude du facteur d'amplification $|G| \le 1$)
> - **Condition typique** (schéma explicite chaleur 1D) : $\dfrac{D\,\Delta t}{\Delta x^2} \le \dfrac{1}{2}$
> - **Condition CFL** (schéma upwind onde 1D) : $\dfrac{c\,\Delta t}{\Delta x} \le 1$
> - Le schéma **implicite** est **inconditionnellement stable**
> - Le schéma **centré en espace** pour l'équation d'onde est **inconditionnellement instable** (ne jamais l'utiliser)

### 📌 Propriétés d'un schéma numérique

$$\textbf{Consistance} + \textbf{Stabilité} \iff \textbf{Convergence} \quad \text{(Théorème de Lax)}$$

### 📌 Méthode ADI — Idée clé

> Pour les EDP 2D, diviser le pas de temps en deux sous-étapes : **implicite selon $x$** (et explicite en $y$) puis **implicite selon $y$** (et explicite en $x$). Cela réduit le problème à des **systèmes tridiagonaux** au lieu d'une matrice par blocs massive. C'est un schéma de type **prédiction-correction**.

### 📌 EF — Les 4 étapes à ne jamais oublier

1. **Multiplier** par une **fonction test** $v \in H_0^1$
2. **Intégrer** sur le domaine $\Omega$
3. **Intégrer par parties** → **formulation faible** $a(u,v) = L(v)$
4. **Discrétiser** avec les **fonctions chapeau** $\varphi_j^h$ → système matriciel $A\,U_h = b$

> **Théorème de Lax-Milgram :** $a$ bilinéaire, symétrique, continue et ***coercive*** + $L$ linéaire continue $\implies \exists!\, u$ solution.

### 📌 Matrice de Rigidité EF 1D

$$A = \frac{1}{h}\begin{pmatrix} 2 & -1 & & \\ -1 & 2 & -1 & \\ & \ddots & \ddots & \ddots \end{pmatrix} \leftarrow \textbf{Tridiagonale — identique aux DF !}$$

### 📌 Crank-Nicolson ($\theta = 1/2$)

> Schéma d'ordre $O(\Delta t^2, \Delta x^2)$, **inconditionnellement stable**, et _plus précis_ que les schémas purement explicite ou implicite d'ordre 1 en temps. C'est le meilleur compromis de la $\theta$-méthode.

### 📌 Matlab — Aide-mémoire

```matlab
% Vecteur régulier
x = [a : h : b];
% Boucle for
for i = 1:n ... end
% Boucle while
while (cond) ... end
% Tracé
plot(x, y); grid;
% Tracé de fonction symbolique
fplot('expression', [a, b]); grid;
% Superposer
hold on;
```

### 📌 Formule mnémotechnique — Laplacien discret 2D (5 points)

> Stencil en croix : le nœud central a le coefficient $\lambda = -\frac{2}{\Delta x^2} - \frac{2}{\Delta y^2}$, les voisins horizontaux $\frac{1}{\Delta x^2}$, les voisins verticaux $\frac{1}{\Delta y^2}$.

---

_Fin du Guide — Bonne révision !_
![[Pasted image 20260324010415.png]]