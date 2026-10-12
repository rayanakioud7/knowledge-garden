

# Résolution de l'Exercice — Méthode des Éléments Finis 1D

## Données du problème

On considère le problème :
$$-u''(x) = g(x), \quad x \in\, ]0,1[, \qquad u(0) = u(1) = 0$$

On discrétise $[0,1]$ avec $N+1$ sous-intervalles :
$$\Delta x = h = \frac{1}{N+1}, \qquad x_j = j\,h, \quad j = 0, 1, \ldots, N+1$$

Les fonctions de base $\varphi_j^h$ ($1 \leq j \leq N$) vérifient :
- $\varphi_j^h(x_j) = 1$
- $\varphi_j^h(x_i) = 0, \quad \forall\, i \neq j$
- $\varphi_j^h$ est **affine** sur chaque $[x_i, x_{i+1}]$

![[Screenshot 2026-03-27 170754.png]]

---

## Question 1 : Tracer l'allure de $\varphi_j^h$

La fonction $\varphi_j^h$ est une **fonction chapeau** (hat function) centrée sur le nœud $x_j$ :

```
        1 ·
           /\
          /  \
         /    \
        /      \
  ─────·────────·────────·─────── x
     x_{j-1}   x_j    x_{j+1}
       0        1        0
```

**Description :**
- Elle est **nulle** en dehors de $[x_{j-1},\, x_{j+1}]$
- Elle **croît linéairement** de $0$ à $1$ sur $[x_{j-1},\, x_j]$
- Elle **décroît linéairement** de $1$ à $0$ sur $[x_j,\, x_{j+1}]$
- Elle forme un **triangle** de base $2h$ et de hauteur $1$

---

## Question 2 : Expression analytique de $\varphi_j^h(x)$

### Calcul sur $[x_{j-1},\, x_j]$ (branche montante)

On cherche $\varphi_j^h(x) = ax + b$ avec les conditions :
$$\varphi_j^h(x_{j-1}) = 0 \quad \text{et} \quad \varphi_j^h(x_j) = 1$$

La pente vaut :
$$a = \frac{1 - 0}{x_j - x_{j-1}} = \frac{1}{h}$$

D'où :
$$\varphi_j^h(x) = \frac{x - x_{j-1}}{h}$$

### Calcul sur $[x_j,\, x_{j+1}]$ (branche descendante)

On cherche $\varphi_j^h(x) = ax + b$ avec les conditions :
$$\varphi_j^h(x_j) = 1 \quad \text{et} \quad \varphi_j^h(x_{j+1}) = 0$$

La pente vaut :
$$a = \frac{0 - 1}{x_{j+1} - x_j} = -\frac{1}{h}$$

D'où :
$$\varphi_j^h(x) = \frac{x_{j+1} - x}{h}$$

### Résultat final

$$\boxed{\varphi_j^h(x) = \begin{cases} \dfrac{x - x_{j-1}}{h} & \text{si } x \in [x_{j-1},\, x_j] \\[10pt] \dfrac{x_{j+1} - x}{h} & \text{si } x \in [x_j,\, x_{j+1}] \\[10pt] 0 & \text{sinon} \end{cases}}$$

**Dérivée :**

$$(\varphi_j^h)'(x) = \begin{cases} +\dfrac{1}{h} & \text{si } x \in [x_{j-1},\, x_j] \\[6pt] -\dfrac{1}{h} & \text{si } x \in [x_j,\, x_{j+1}] \\[6pt] 0 & \text{sinon} \end{cases}$$

---

## Question 3 : Trouver la matrice $A$ et le vecteur $b$

### Formulation variationnelle

On multiplie $-u'' = g$ par une fonction test $v \in H_0^1$ et on intègre par parties :

$$\underbrace{\int_0^1 u'(t)\,v'(t)\,dt}_{a(u,v)} = \underbrace{\int_0^1 g(t)\,v(t)\,dt}_{L(v)}$$

On cherche $u_h = \displaystyle\sum_{j=1}^N u_j^h\, \varphi_j^h$ et on prend $v = \varphi_i^h$, ce qui donne :

$$\sum_{j=1}^N u_j^h \underbrace{\int_0^1 (\varphi_j^h)'\,(\varphi_i^h)'\, dt}_{a_{ij}} = \underbrace{\int_0^1 g(t)\,\varphi_i^h(t)\, dt}_{b_i}$$

---

### Calcul de la matrice de rigidité $A$

Les coefficients sont $a_{ij} = \displaystyle\int_0^1 (\varphi_j^h)'(t)\,(\varphi_i^h)'(t)\, dt$.

#### **Cas $|i - j| > 1$ :** $a_{ij} = 0$

Les supports $[x_{j-1}, x_{j+1}]$ et $[x_{i-1}, x_{i+1}]$ ne se chevauchent pas.

#### **Cas $i = j$ (terme diagonal) :**

$$a_{ii} = \int_{x_{i-1}}^{x_i} \left(\frac{1}{h}\right)\left(\frac{1}{h}\right) dt + \int_{x_i}^{x_{i+1}} \left(-\frac{1}{h}\right)\left(-\frac{1}{h}\right) dt$$

$$a_{ii} = \frac{1}{h^2} \cdot h + \frac{1}{h^2} \cdot h = \boxed{\frac{2}{h}}$$

#### **Cas $j = i+1$ (sur-diagonale) :**

Le seul intervalle commun est $[x_i, x_{i+1}]$, où $(\varphi_i^h)' = -\frac{1}{h}$ et $(\varphi_{i+1}^h)' = +\frac{1}{h}$ :

$$a_{i,i+1} = \int_{x_i}^{x_{i+1}} \left(-\frac{1}{h}\right)\left(\frac{1}{h}\right) dt = -\frac{1}{h^2} \cdot h = \boxed{-\frac{1}{h}}$$

#### **Cas $j = i-1$ (sous-diagonale) :**

Par symétrie : $a_{i,i-1} = -\dfrac{1}{h}$

#### **Matrice de rigidité finale :**

$$\boxed{A = \frac{1}{h}\begin{pmatrix} 2 & -1 & 0 & \cdots & 0 \\ -1 & 2 & -1 & \ddots & \vdots \\ 0 & -1 & 2 & \ddots & 0 \\ \vdots & \ddots & \ddots & \ddots & -1 \\ 0 & \cdots & 0 & -1 & 2 \end{pmatrix}_{N \times N}}$$

---

### Calcul du vecteur second membre $b$

$$b_i = \int_0^1 g(t)\,\varphi_i^h(t)\, dt = \int_{x_{i-1}}^{x_{i+1}} g(t)\,\varphi_i^h(t)\, dt$$

En utilisant la **formule des rectangles** (on approxime $g(t) \approx g(x_i)$ sur le support) :

$$b_i \approx g(x_i) \int_{x_{i-1}}^{x_{i+1}} \varphi_i^h(t)\, dt$$

L'intégrale de la fonction chapeau est l'aire d'un **triangle** de base $2h$ et de hauteur $1$ :

$$\int_{x_{i-1}}^{x_{i+1}} \varphi_i^h(t)\, dt = \frac{1}{2} \times 2h \times 1 = h$$

Donc :

$$b_i \approx h \cdot g(x_i)$$

#### **Vecteur second membre final :**

$$\boxed{b = h\begin{pmatrix} g(x_1) \\ g(x_2) \\ \vdots \\ g(x_N) \end{pmatrix}}$$

---

### Système final à résoudre

$$\boxed{\frac{1}{h}\begin{pmatrix} 2 & -1 & & \\ -1 & 2 & -1 & \\ & \ddots & \ddots & \ddots \\ & & -1 & 2 \end{pmatrix} \begin{pmatrix} u_1^h \\ u_2^h \\ \vdots \\ u_N^h \end{pmatrix} = h\begin{pmatrix} g_1 \\ g_2 \\ \vdots \\ g_N \end{pmatrix}}$$

> **Remarque :** En divisant les deux côtés par $h$, on retrouve exactement le schéma de **différences finies** classique : $\frac{1}{h^2}(2u_i - u_{i-1} - u_{i+1}) = g_i$, ce qui confirme la cohérence des deux méthodes pour ce problème 1D.

---


# Exercice 2 — Éléments Finis 1D

## Problème

$$\begin{cases} -ku''(x) + \alpha u(x) = f & \text{sur } [0,1] \\ u(0) = u(1) = 0 \end{cases} \tag{1}$$

![[Pasted image 20260327195915.png]]

---

## Question 1 : Formulation variationnelle

### Étape 1 — Multiplication par une fonction test

On multiplie l'équation $-ku'' + \alpha u = f$ par $v \in H_0^1(]0,1[)$ et on intègre sur $[0,1]$ :

$$\int_0^1 (-ku'')\,v\,dx + \int_0^1 \alpha\, u\,v\,dx = \int_0^1 f\,v\,dx$$

### Étape 2 — Intégration par parties

Pour le premier terme :

$$\int_0^1 (-ku'')\,v\,dx = \int_0^1 k\,u'\,v'\,dx - \underbrace{\Big[k\,u'\,v\Big]_0^1}_{= 0 \text{ car } v(0)=v(1)=0}$$

### Étape 3 — Formulation variationnelle

$$\boxed{\text{Trouver } u \in H_0^1(]0,1[) \text{ tel que } a(u,v) = L(v), \quad \forall v \in H_0^1(]0,1[)} \tag{2}$$

avec :

$$a(u,v) = \int_0^1 k\,u'(t)\,v'(t)\,dt + \int_0^1 \alpha\,u(t)\,v(t)\,dt$$

$$L(v) = \int_0^1 f(t)\,v(t)\,dt$$

---

## Question 2 : Existence et unicité (Théorème de Lax-Milgram)

On vérifie les hypothèses du théorème de Lax-Milgram :

### (a) $a$ est bilinéaire

C'est évident car $a$ est la somme de deux intégrales, chacune linéaire en $u$ et en $v$.

### (b) $a$ est continue

$$|a(u,v)| \leq k\|u'\|_{L^2}\|v'\|_{L^2} + \alpha\|u\|_{L^2}\|v\|_{L^2} \leq \max(k,\alpha)\,\|u\|_{H^1}\,\|v\|_{H^1}$$

Donc $a$ est continue avec $M = \max(k,\alpha)$.

### (c) $a$ est coercive

Pour $k > 0$ et $\alpha > 0$ :

$$a(u,u) = k\int_0^1 (u')^2\,dt + \alpha\int_0^1 u^2\,dt \geq \min(k,\alpha)\left(\|u'\|_{L^2}^2 + \|u\|_{L^2}^2\right) = \min(k,\alpha)\,\|u\|_{H^1}^2$$

Donc $a$ est coercive avec $\alpha_0 = \min(k,\alpha) > 0$.

### (d) $L$ est continue

$$|L(v)| = \left|\int_0^1 f\,v\,dt\right| \leq \|f\|_{L^2}\,\|v\|_{L^2} \leq \|f\|_{L^2}\,\|v\|_{H^1}$$

### Conclusion

Par le **théorème de Lax-Milgram**, toutes les conditions étant vérifiées :

$$\boxed{\exists!\, u \in H_0^1(]0,1[) \text{ solution de } (2)}$$

---

## Question 3 : Solution exacte pour $k=1$, $\alpha=1$, $f=1$

### Équation à résoudre

$$-u'' + u = 1, \quad u(0) = u(1) = 0$$

### Solution homogène

L'équation $u'' - u = 0$ a pour équation caractéristique $r^2 - 1 = 0$, d'où $r = \pm 1$ :

$$u_h(x) = Ae^x + Be^{-x}$$

### Solution particulière

On cherche $u_p = C$ constante : $-0 + C = 1 \Rightarrow u_p = 1$

### Solution générale

$$u(x) = u_h(x) + u_p(x) = Ae^x + Be^{-x} + 1$$

### Conditions aux limites

**$u(0) = 0$ :**
$$u(0)=A+B+1=0⟹B=−A−1$$

**$u(1) = 0$ :**
$$u(1)=Ae+Be^{−1}+1=0$$
En remplaçant $B$ dans la deuxième équation :

$$A e + (-1 - A) e^{-1} + 1 = 0 \implies A(e - e^{-1}) - e^{-1} + 1 = 0 \implies A = \frac{e^{-1} - 1}{e - e^{-1}} = -\frac{1}{e+1}$$

En déduisant $B$ :

$$B = -1 - \left(-\frac{1}{e+1}\right) = \frac{-e-1+1}{e+1} = -\frac{e}{e+1}$$

**La solution exacte est donc :**

$$\boxed{u(x) = 1 - \frac{e^x}{e+1} - \frac{e^{1-x}}{e+1}}$$

> **Forme équivalente** (en utilisant $\sinh(a)\cosh(b) - \cosh(a)\sinh(b) = \sinh(a-b)$) :
> $$u(x) = 1 - \frac{\sinh(x) + \sinh(1-x)}{\sinh(1)}$$

**Vérification :**
- $u(0) = 1 - \frac{0 + \sinh(1)}{\sinh(1)} = 0$ ✓
- $u(1) = 1 - \frac{\sinh(1) + 0}{\sinh(1)} = 0$ ✓
- $u(x) = u(1-x)$ (symétrie) ✓

---

## Question 4 : Méthode des éléments finis à 3 éléments

### Étape 1 — Maillage

Avec **3 éléments** et **4 nœuds** :

$$h = \frac{1}{3}, \qquad x_1 = 0, \quad x_2 = \frac{1}{3}, \quad x_3 = \frac{2}{3}, \quad x_4 = 1$$

```
  x₁=0      x₂=1/3     x₃=2/3     x₄=1
   |————————|————————|————————|
     Elem 1    Elem 2   Elem 3
```

**Inconnues :** $u_2 = u_h(x_2)$ et $u_3 = u_h(x_3)$ (les nœuds aux bords sont fixés : $u_1 = u_4 = 0$).

### Étape 2 — Matrices élémentaires

La forme bilinéaire $a(u,v) = \int_0^1 u'v'\,dx + \int_0^1 uv\,dx$ donne deux contributions :

#### Matrice de rigidité élémentaire ($-ku''$ avec $k=1$)

$$K^{(e)} = \frac{1}{h}\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} = 3\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$$

#### Matrice de masse élémentaire ($\alpha u$ avec $\alpha=1$)

Pour l'élément $[x_i, x_{i+1}]$, on calcule $\int_{x_i}^{x_{i+1}} \varphi_a \varphi_b\,dx$ :

- **Terme diagonal** : $\displaystyle\int_{x_i}^{x_{i+1}} \varphi_i^2\,dx = \frac{1}{h^2}\int_0^h t^2\,dt = \frac{h}{3}$

- **Terme extra-diagonal** : $\displaystyle\int_{x_i}^{x_{i+1}} \varphi_i\,\varphi_{i+1}\,dx = \frac{1}{h^2}\int_0^h t(h-t)\,dt = \frac{h}{6}$

$$M^{(e)} = \frac{h}{6}\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} = \frac{1}{18}\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$$

### Étape 3 — Assemblage

#### Matrice de rigidité globale $K$ (pour les nœuds intérieurs 2 et 3)

| Contribution | $K_{22}$ | $K_{23}$ | $K_{33}$ |
|:---:|:---:|:---:|:---:|
| Élément 1 $[x_1,x_2]$ | $3$ | $0$ | $0$ |
| Élément 2 $[x_2,x_3]$ | $3$ | $-3$ | $3$ |
| Élément 3 $[x_3,x_4]$ | $0$ | $0$ | $3$ |
| **Total** | **6** | **−3** | **6** |

$$K = \begin{pmatrix} 6 & -3 \\ -3 & 6 \end{pmatrix}$$

#### Matrice de masse globale $M$

| Contribution | $M_{22}$ | $M_{23}$ | $M_{33}$ |
|:---:|:---:|:---:|:---:|
| Élément 1 | $\frac{1}{9}$ | $0$ | $0$ |
| Élément 2 | $\frac{1}{9}$ | $\frac{1}{18}$ | $\frac{1}{9}$ |
| Élément 3 | $0$ | $0$ | $\frac{1}{9}$ |
| **Total** | $\frac{2}{9}$ | $\frac{1}{18}$ | $\frac{2}{9}$ |

$$M = \begin{pmatrix} \frac{2}{9} & \frac{1}{18} \\[4pt] \frac{1}{18} & \frac{2}{9} \end{pmatrix}$$

#### Matrice totale $A = K + M$

$$A = \begin{pmatrix} 6 + \frac{2}{9} & -3 + \frac{1}{18} \\[6pt] -3 + \frac{1}{18} & 6 + \frac{2}{9} \end{pmatrix} = \begin{pmatrix} \frac{56}{9} & -\frac{53}{18} \\[6pt] -\frac{53}{18} & \frac{56}{9} \end{pmatrix}$$

### Étape 4 — Vecteur second membre

$$b_i = \int_0^1 f\,\varphi_i\,dx = \int_{x_{i-1}}^{x_{i+1}} \varphi_i\,dx = \frac{h}{2} + \frac{h}{2} = h = \frac{1}{3}$$

$$b = \begin{pmatrix} 1/3 \\ 1/3 \end{pmatrix}$$

### Étape 5 — Résolution du système $AU = b$

$$\frac{1}{18}\begin{pmatrix} 112 & -53 \\ -53 & 112 \end{pmatrix}\begin{pmatrix} u_2 \\ u_3 \end{pmatrix} = \begin{pmatrix} 1/3 \\ 1/3 \end{pmatrix}$$

En multipliant par 18 :

$$\begin{pmatrix} 112 & -53 \\ -53 & 112 \end{pmatrix}\begin{pmatrix} u_2 \\ u_3 \end{pmatrix} = \begin{pmatrix} 6 \\ 6 \end{pmatrix}$$

**Addition des deux lignes :** $59(u_2 + u_3) = 12$

**Soustraction :** $165(u_2 - u_3) = 0 \implies u_2 = u_3$

Donc : $2u_2 = \frac{12}{59} \implies u_2 = \frac{6}{59}$

$$\boxed{u_2 = u_3 = \frac{6}{59} \approx 0.10169}$$

### Étape 6 — Comparaison avec la solution exacte

On calcule la solution exacte aux nœuds intérieurs :

| | $x_2 = 1/3$ | $x_3 = 2/3$ |
|:---|:---:|:---:|
| **Solution exacte** $u(x)$ | $0.10085$ | $0.10085$ |
| **Solution EF** $u_h(x)$ | $0.10169$ | $0.10169$ |
| **Erreur absolue** | $8.4 \times 10^{-4}$ | $8.4 \times 10^{-4}$ |
| **Erreur relative** | $\approx 0.83\%$ | $\approx 0.83\%$ |

> **Calcul détaillé** de $u(1/3)$ :
> $$u\!\left(\tfrac{1}{3}\right) = 1 - \frac{\sinh(1/3) + \sinh(2/3)}{\sinh(1)} = 1 - \frac{0.33954 + 0.71716}{1.17520} \approx 0.10085$$

### Conclusion

La méthode des éléments finis avec seulement **3 éléments** donne une approximation très satisfaisante avec une **erreur relative inférieure à 1%**. La symétrie de la solution numérique ($u_2 = u_3$) est cohérente avec la symétrie du problème continu autour de $x = 1/2$.


---


Bien sûr. Voici une **résolution complète, en français, étape par étape**, en suivant exactement l’esprit de vos notes sur les **éléments finis 1D**.

---

# Exercice 3 : Résolution par la méthode des éléments finis

On veut approcher la solution du problème aux limites :
$$

\begin{cases}
-k\,u''(x)+c\,u(x)=g(x), & x\in ]0,1[ \\
u(0)=u(1)=0
\end{cases}
$$

où $(k>0), (c>0), et (g:[0,1]\to\mathbb{R})$ est continue.

![[Screenshot 2026-03-27 203451.png]]

---

# 1) Formulation faible du problème

## Étape 1 : Choix de l’espace fonctionnel

Comme dans vos notes, les conditions aux limites sont homogènes \(u(0)=u(1)=0\), donc on travaille dans :

$$
V=H_0^1(]0,1[)
$$

C’est l’espace des fonctions de \(H^1(]0,1[)\) nulles aux extrémités.

---

## Étape 2 : Multiplier par une fonction test

On prend une fonction test \(v\in H_0^1(]0,1[)\), puis on multiplie l’équation par \(v(x)\) et on intègre sur \([0,1]\) :

$$
\int_0^1 \bigl(-k\,u''(x)+c\,u(x)\bigr)v(x)\,dx
=
\int_0^1 g(x)v(x)\,dx
$$

soit

$$
-k\int_0^1 u''(x)v(x)\,dx
+
c\int_0^1 u(x)v(x)\,dx
=
\int_0^1 g(x)v(x)\,dx
\
$$

---

## Étape 3 : Intégration par parties

On intègre par parties le terme contenant \(u''\) :

$$
\int_0^1 u''(x)v(x)\,dx
=
\bigl[u'(x)v(x)\bigr]_0^1-\int_0^1 u'(x)v'(x)\,dx
$$

Donc :

$$
-k\int_0^1 u''(x)v(x)\,dx
=
-k\bigl[u'(x)v(x)\bigr]_0^1
+
k\int_0^1 u'(x)v'(x)\,dx
$$

Or \(v(0)=v(1)=0\), donc le terme de bord est nul :

$$
\bigl[u'(x)v(x)\bigr]_0^1=0
$$

Il reste donc :

$$
k\int_0^1 u'(x)v'(x)\,dx
+
c\int_0^1 u(x)v(x)\,dx
=
\int_0^1 g(x)v(x)\,dx
$$

---

## Formulation faible finale

On obtient la formulation variationnelle :

$$
\boxed{
\text{Trouver }u\in H_0^1(]0,1[)\text{ tel que }
a(u,v)=L(v),\quad \forall v\in H_0^1(]0,1[)
}
$$

avec

$$
a(u,v)=k\int_0^1 u'(x)v'(x)\,dx+c\int_0^1 u(x)v(x)\,dx
$$

et

$$
L(v)=\int_0^1 g(x)v(x)\,dx
$$

---

## Remarque théorique

Comme \(k>0\) et \(c>0\), la forme bilinéaire \(a(u,v)\) est :

- bilinéaire,
- symétrique,
- continue,
- coercive sur $(H_0^1(]0,1[)$.

Donc, par le théorème de **Lax-Milgram**, le problème admet une **solution unique**.

---

# 2) Fonctions “chapeau” des éléments finis

Nous allons maintenant construire l’espace discret \(V_h\).

---

## Étape 1 : Maillage de l’intervalle

On découpe $([0,1])$ en $(N+1)$ sous-intervalles égaux de longueur :

$$
h=\frac{1}{N+1}
$$

Les nœuds sont :

$$
x_i=ih,\qquad i=0,1,\dots,N+1
$$

avec :

- $(x_0=0)$,
- $(x_{N+1}=1)$.

Les inconnues seront les valeurs aux **nœuds intérieurs** \(x_1,\dots,x_N\).

---

## Étape 2 : Définition de l’espace \(V_h\)

On prend l’espace des fonctions continues, affines par morceaux, nulles aux bords :

$$
V_h=\left\{v_h\in C([0,1]) \; ; \; v_h|_{[x_i,x_{i+1}]}\in\mathbb{P}_1,\; v_h(0)=v_h(1)=0\right\}
$$

Sa dimension est \(N\).

---

## Étape 3 : Base de Lagrange “chapeau”

Pour chaque nœud intérieur \(x_j\), \(j=1,\dots,N\), on définit la fonction \(\varphi_j\) par :

- $(\varphi_j(x_j)=1)$,
- $(\varphi_j(x_i)=0) pour (i\neq j)$,
- $(\varphi_j)$ est affine sur chaque intervalle.

Sa forme explicite est :

$$
\varphi_j(x)=
\begin{cases}
\dfrac{x-x_{j-1}}{h}, & x\in[x_{j-1},x_j] \\[8pt]
\dfrac{x_{j+1}-x}{h}, & x\in[x_j,x_{j+1}] \\[8pt]
0, & \text{sinon}
\end{cases}
$$

C’est exactement une **fonction chapeau**.

---

## Étape 4 : Dérivée des fonctions chapeau

Comme dans vos notes :

$$
\varphi_j'(x)=
\begin{cases}
\dfrac{1}{h}, & x\in[x_{j-1},x_j] \\[6pt]
-\dfrac{1}{h}, & x\in[x_j,x_{j+1}] \\[6pt]
0, & \text{sinon}
\end{cases}
$$

---

## Étape 5 : Approximation de la solution

On cherche $(u_h\in V_h$) sous la forme :

$$
u_h(x)=\sum_{j=1}^N U_j\,\varphi_j(x)
$$

où les $(U_j)$ sont les inconnues à déterminer.

---

# 3) Formulation discrète de Galerkin

On impose :

$$
a(u_h,\varphi_i)=L(\varphi_i),\qquad i=1,\dots,N
$$

En remplaçant $(u_h=\sum_{j=1}^N U_j\varphi_j)$, on obtient :

$$
a\left(\sum_{j=1}^N U_j\varphi_j,\varphi_i\right)=L(\varphi_i)
$$

Par bilinéarité :

$$
\sum_{j=1}^N U_j\,a(\varphi_j,\varphi_i)=L(\varphi_i)
$$

Donc on obtient le système linéaire :

$$
\boxed{A\,U=b}
$$

avec :

$$
A_{ij}=a(\varphi_j,\varphi_i)
=
k\int_0^1 \varphi_j'(x)\varphi_i'(x)\,dx
+
c\int_0^1 \varphi_j(x)\varphi_i(x)\,dx
$$

et

$$
b_i=\int_0^1 g(x)\varphi_i(x)\,dx
$$

---

# 4) Calcul de la matrice associée

La matrice se décompose naturellement en :

$$
A = kK + cM
$$

où :

- \(K\) = matrice de rigidité,
- \(M\) = matrice de masse.

---

# 4.1 Calcul de la partie rigidité \(K\)

On pose :

$$
K_{ij}=\int_0^1 \varphi_j'(x)\varphi_i'(x)\,dx
$$

D’après vos notes :

### Cas 1 : \(|i-j|>1\)

Les supports ne se recouvrent pas, donc

$$
K_{ij}=0
$$

### Cas 2 : \(i=j\)

$$
K_{ii}
=
\int_{x_{i-1}}^{x_i}\left(\frac1h\right)^2dx
+
\int_{x_i}^{x_{i+1}}\left(-\frac1h\right)^2dx
=
\frac{h}{h^2}+\frac{h}{h^2}
=
\frac{2}{h}
$$

### Cas 3 : \(j=i+1\) ou \(j=i-1\)

Par exemple :

$$
K_{i,i+1}
=
\int_{x_i}^{x_{i+1}}
\left(-\frac1h\right)\left(\frac1h\right)\,dx
=
-\frac{h}{h^2}
=
-\frac1h
$$

Donc :

$$
K=
\frac1h
\begin{pmatrix}
2 & -1 & 0 & \cdots & 0\\
-1 & 2 & -1 & \ddots & \vdots\\
0 & -1 & 2 & \ddots & 0\\
\vdots & \ddots & \ddots & \ddots & -1\\
0 & \cdots & 0 & -1 & 2
\end{pmatrix}
$$

et donc la contribution de \(-k u''\) est :

$$
kK=\frac{k}{h}
\begin{pmatrix}
2 & -1 & 0 & \cdots & 0\\
-1 & 2 & -1 & \ddots & \vdots\\
0 & -1 & 2 & \ddots & 0\\
\vdots & \ddots & \ddots & \ddots & -1\\
0 & \cdots & 0 & -1 & 2
\end{pmatrix}
$$

---

# 4.2 Calcul de la partie masse \(M\)

On pose :

$$
M_{ij}=\int_0^1 \varphi_j(x)\varphi_i(x)\,dx
$$

Là encore, si \(|i-j|>1\), les supports ne se recouvrent pas :

$$
M_{ij}=0
$$

---

## Cas diagonal : \(i=j\)

$$
M_{ii}
=
\int_{x_{i-1}}^{x_i}\left(\frac{x-x_{i-1}}{h}\right)^2dx
+
\int_{x_i}^{x_{i+1}}\left(\frac{x_{i+1}-x}{h}\right)^2dx
$$

Calcul du premier terme :

$$
\int_{x_{i-1}}^{x_i}\left(\frac{x-x_{i-1}}{h}\right)^2dx
=
\frac1{h^2}\int_{x_{i-1}}^{x_i}(x-x_{i-1})^2dx
=
\frac1{h^2}\cdot \frac{h^3}{3}
=
\frac{h}{3}
$$

De même pour le second terme :

$$
\frac{h}{3}
$$

Donc :

$$
M_{ii}=\frac{2h}{3}
$$

---

## Cas hors diagonale proche : \(j=i+1\) ou \(j=i-1\)

Par exemple :

$$
M_{i,i+1}
=
\int_{x_i}^{x_{i+1}}
\varphi_i(x)\varphi_{i+1}(x)\,dx
$$

Or sur \([x_i,x_{i+1}]\),

$$
\varphi_i(x)=\frac{x_{i+1}-x}{h},
\qquad
\varphi_{i+1}(x)=\frac{x-x_i}{h}
$$

Donc :

$$
M_{i,i+1}
=
\int_{x_i}^{x_{i+1}}
\frac{(x_{i+1}-x)(x-x_i)}{h^2}\,dx
$$

En posant $(s=x-x_i)$, on a $(x_{i+1}-x=h-s)$, donc :

$$
M_{i,i+1}
=
\frac1{h^2}\int_0^h (h-s)s\,ds
=
\frac1{h^2}\int_0^h (hs-s^2)\,ds
$$

$$
=
\frac1{h^2}\left[\frac{hs^2}{2}-\frac{s^3}{3}\right]_0^h
=
\frac1{h^2}\left(\frac{h^3}{2}-\frac{h^3}{3}\right)
=
\frac1{h^2}\cdot \frac{h^3}{6}
=
\frac{h}{6}
$$

Donc :

$$
M_{i,i+1}=M_{i+1,i}=\frac{h}{6}
$$

---

## Matrice de masse finale

On obtient :

$$
M=
\frac{h}{6}
\begin{pmatrix}
4 & 1 & 0 & \cdots & 0\\
1 & 4 & 1 & \ddots & \vdots\\
0 & 1 & 4 & \ddots & 0\\
\vdots & \ddots & \ddots & \ddots & 1\\
0 & \cdots & 0 & 1 & 4
\end{pmatrix}
$$

La contribution du terme \(c\,u\) est donc :

$$
cM=
\frac{ch}{6}
\begin{pmatrix}
4 & 1 & 0 & \cdots & 0\\
1 & 4 & 1 & \ddots & \vdots\\
0 & 1 & 4 & \ddots & 0\\
\vdots & \ddots & \ddots & \ddots & 1\\
0 & \cdots & 0 & 1 & 4
\end{pmatrix}
$$

---

# 4.3 Matrice globale du système

Finalement,

$$
\boxed{
A=kK+cM
}
$$

c’est-à-dire

$$
\boxed{
A=
\frac{k}{h}
\begin{pmatrix}
2 & -1 & 0 & \cdots & 0\\
-1 & 2 & -1 & \ddots & \vdots\\
0 & -1 & 2 & \ddots & 0\\
\vdots & \ddots & \ddots & \ddots & -1\\
0 & \cdots & 0 & -1 & 2
\end{pmatrix}
+
\frac{ch}{6}
\begin{pmatrix}
4 & 1 & 0 & \cdots & 0\\
1 & 4 & 1 & \ddots & \vdots\\
0 & 1 & 4 & \ddots & 0\\
\vdots & \ddots & \ddots & \ddots & 1\\
0 & \cdots & 0 & 1 & 4
\end{pmatrix}
}
$$

ou encore, coefficient par coefficient :

$$
A_{ii}=\frac{2k}{h}+\frac{2ch}{3}
$$

$$
A_{i,i+1}=A_{i+1,i}=-\frac{k}{h}+\frac{ch}{6}
$$

$$
A_{ij}=0 \quad \text{si } |i-j|>1
$$

---

# 5) Calcul du second membre

Le second membre est donné par :

$$
b_i=L(\varphi_i)=\int_0^1 g(x)\varphi_i(x)\,dx
$$

Comme $(\varphi_i)$ est nulle hors de $([x_{i-1},x_{i+1}])$, on a :

$$
\boxed{
b_i=\int_{x_{i-1}}^{x_{i+1}} g(x)\varphi_i(x)\,dx
}
$$

C’est l’expression **exacte**.

---

## Approximation du second membre (comme dans vos notes)

Dans vos notes, on utilise la **formule des rectangles** :

$$
g(x)\approx g(x_i)\quad \text{sur le support de }\varphi_i
$$

Donc :

$$
b_i \approx g(x_i)\int_{x_{i-1}}^{x_{i+1}} \varphi_i(x)\,dx
$$

Or l’aire sous la fonction chapeau vaut \(h\), donc :

$$
\boxed{
b_i \approx h\,g(x_i)
}
$$

Ainsi :

$$
\boxed{
b \approx h
\begin{pmatrix}
g(x_1)\\
g(x_2)\\
\vdots\\
g(x_N)
\end{pmatrix}
}
$$

---

# 6) Système final à résoudre

On cherche le vecteur des inconnues

$$
U=
\begin{pmatrix}
U_1\\
U_2\\
\vdots\\
U_N
\end{pmatrix}
$$

tel que

$$
\boxed{A\,U=b}
$$

avec

$$
A=
\frac{k}{h}
\begin{pmatrix}
2 & -1 & 0 & \cdots & 0\\
-1 & 2 & -1 & \ddots & \vdots\\
0 & -1 & 2 & \ddots & 0\\
\vdots & \ddots & \ddots & \ddots & -1\\
0 & \cdots & 0 & -1 & 2
\end{pmatrix}
+
\frac{ch}{6}
\begin{pmatrix}
4 & 1 & 0 & \cdots & 0\\
1 & 4 & 1 & \ddots & \vdots\\
0 & 1 & 4 & \ddots & 0\\
\vdots & \ddots & \ddots & \ddots & 1\\
0 & \cdots & 0 & 1 & 4
\end{pmatrix}
$$

et

$$
b_i=\int_{x_{i-1}}^{x_{i+1}} g(x)\varphi_i(x)\,dx
$$

ou, en approximation simple :

$$
b \approx h
\begin{pmatrix}
g(x_1)\\
g(x_2)\\
\vdots\\
g(x_N)
\end{pmatrix}
$$

---

# 7) Forme finale de la solution approchée

Une fois le système résolu, on obtient les coefficients \(U_1,\dots,U_N\), et la solution éléments finis est :

$$
\boxed{
u_h(x)=\sum_{j=1}^N U_j\,\varphi_j(x)
}
$$

---

# 8) Remarque importante

- Si $(c=0)$, on retrouve exactement le cas de vos notes :
  $$
  -k u''=g
  $$
  avec la matrice de rigidité seule.

- Ici, le terme $(c,u)$ ajoute une **matrice de masse** $(\displaystyle \frac{ch}{6})$ tridiagonale.

---


# Exercice 4

On considère le problème aux limites :

$$\begin{cases} -u''(x)=h(x), & x\in ]1,2[ \\ u(1)=u(2)=0 \end{cases}$$

où $h:[1,2]\to\mathbb{R}$ est une fonction donnée.

> [!warning] Attention
> 
> Dans l’énoncé, $h(x)$ désigne le second membre.
> 
> Pour éviter toute confusion avec le **pas du maillage**, je noterai ce dernier par $\Delta x$.

![[Pasted image 20260327212644.png]]

---

# 1) Formulation faible du problème

## Étape 1 : espace fonctionnel

Comme les conditions aux limites sont homogènes $u(1)=u(2)=0$, on travaille dans l’espace :

$$V=H_0^1(]1,2[)$$

---

## Étape 2 : multiplication par une fonction test

On prend une fonction test $v\in H_0^1(]1,2[)$.

On multiplie l’équation par $v(x)$ et on intègre sur $[1,2]$ :

$$\int_1^2 -u''(x)\,v(x)\,dx=\int_1^2 h(x)\,v(x)\,dx$$

---

## Étape 3 : intégration par parties

On intègre par parties le terme de gauche :

$$\int_1^2 -u''(x)\,v(x)\,dx=-\Big[u'(x)v(x)\Big]_1^2+\int_1^2 u'(x)v'(x)\,dx$$

Or $v(1)=v(2)=0$, donc le terme de bord s’annule :

$$\Big[u'(x)v(x)\Big]_1^2=0$$

Il reste alors :

$$\int_1^2 u'(x)v'(x)\,dx=\int_1^2 h(x)v(x)\,dx$$

---

## Formulation faible finale

On obtient donc :

$$\boxed{\text{Trouver }u\in H_0^1(]1,2[)\text{ tel que } \int_1^2 u'(x)v'(x)\,dx=\int_1^2 h(x)v(x)\,dx, \quad \forall v\in H_0^1(]1,2[)}$$

On pose :

$$a(u,v)=\int_1^2 u'(x)v'(x)\,dx, \qquad L(v)=\int_1^2 h(x)v(x)\,dx$$

Donc le problème s’écrit :

$$\boxed{a(u,v)=L(v),\qquad \forall v\in V}$$

---

# 2) Schéma des éléments finis

## Étape 1 : maillage de l’intervalle $[1,2]$

On découpe l’intervalle $[1,2]$ en $N+1$ sous-intervalles égaux.

Comme la longueur de $[1,2]$ vaut 1, on a :

$$\Delta x=\frac{2-1}{N+1}=\frac{1}{N+1}$$

Les nœuds du maillage sont :

$$x_i=1+i\Delta x,\qquad i=0,1,\dots,N+1$$

avec :

- $x_0=1$,
    
- $x_{N+1}=2$.
    

---

## Étape 2 : espace discret $V_{\Delta x}$

On choisit l’espace des fonctions continues, affines par morceaux, nulles aux bords :

$$V_{\Delta x}=\left\{v_{\Delta x}\in C([1,2])\; ;\; v_{\Delta x}|_{[x_i,x_{i+1}]}\in \mathbb{P}_1,\; v_{\Delta x}(1)=v_{\Delta x}(2)=0\right\}$$

Cet espace est de dimension $N$.

---

## Étape 3 : fonctions de base “chapeau”

Pour chaque nœud intérieur $x_j$, $j=1,\dots,N$, on définit la fonction $\varphi_j$ par :

- $\varphi_j(x_j)=1$,
    
- $\varphi_j(x_i)=0$ pour $i\neq j$,
    
- $\varphi_j$ est affine sur chaque intervalle du maillage.
    

Son expression est :

$$\varphi_j(x)=\begin{cases} \dfrac{x-x_{j-1}}{\Delta x}, & x\in[x_{j-1},x_j] \\[8pt] \dfrac{x_{j+1}-x}{\Delta x}, & x\in[x_j,x_{j+1}] \\[8pt] 0, & \text{sinon} \end{cases}$$

Ce sont les **fonctions chapeau**.

---

## Étape 4 : dérivée des fonctions chapeau

On a :

$$\varphi_j'(x)=\begin{cases} \dfrac{1}{\Delta x}, & x\in[x_{j-1},x_j] \\[6pt] -\dfrac{1}{\Delta x}, & x\in[x_j,x_{j+1}] \\[6pt] 0, & \text{sinon} \end{cases}$$

---

## Étape 5 : approximation de la solution

On cherche une solution approchée $u_{\Delta x}\in V_{\Delta x}$ sous la forme :

$$u_{\Delta x}(x)=\sum_{j=1}^N U_j\,\varphi_j(x)$$

où $U_1,\dots,U_N$ sont les inconnues.

---

## Étape 6 : schéma de Galerkin

Le schéma des éléments finis consiste à imposer :

$$a(u_{\Delta x},v_{\Delta x})=L(v_{\Delta x}), \qquad \forall v_{\Delta x}\in V_{\Delta x}$$

En particulier, en prenant $v_{\Delta x}=\varphi_i$, $i=1,\dots,N$, on obtient :

$$\int_1^2 u'_{\Delta x}(x)\varphi_i'(x)\,dx=\int_1^2 h(x)\varphi_i(x)\,dx$$

Comme

$$u_{\Delta x}(x)=\sum_{j=1}^N U_j\varphi_j(x),$$

on a :

$$\sum_{j=1}^N U_j\int_1^2 \varphi_j'(x)\varphi_i'(x)\,dx=\int_1^2 h(x)\varphi_i(x)\,dx$$

Donc le **schéma EF** est :

$$\boxed{\sum_{j=1}^N A_{ij}U_j=b_i, \qquad i=1,\dots,N}$$

avec

$$A_{ij}=\int_1^2 \varphi_j'(x)\varphi_i'(x)\,dx, \qquad b_i=\int_1^2 h(x)\varphi_i(x)\,dx$$

---

# 3) Calcul de la matrice associée

Nous allons calculer les coefficients :

$$A_{ij}=\int_1^2 \varphi_j'(x)\varphi_i'(x)\,dx$$

---

## Cas 1 : $|i-j|>1$

Les supports de $\varphi_i$ et $\varphi_j$ ne se recouvrent pas. Donc :

$$A_{ij}=0$$

---

## Cas 2 : $i=j$

La fonction $\varphi_i$ est non nulle sur $[x_{i-1},x_i]$ et $[x_i,x_{i+1}]$. Donc :

$$A_{ii}=\int_{x_{i-1}}^{x_i}\left(\frac{1}{\Delta x}\right)^2dx+\int_{x_i}^{x_{i+1}}\left(-\frac{1}{\Delta x}\right)^2dx$$

$$A_{ii}=\frac{\Delta x}{(\Delta x)^2}+\frac{\Delta x}{(\Delta x)^2}=\frac{2}{\Delta x}$$

---

## Cas 3 : $j=i+1$ ou $j=i-1$

Par exemple, pour $j=i+1$, les deux fonctions se recouvrent seulement sur $[x_i,x_{i+1}]$ :

$$A_{i,i+1}=\int_{x_i}^{x_{i+1}}\left(-\frac{1}{\Delta x}\right)\left(\frac{1}{\Delta x}\right)dx$$

$$A_{i,i+1}=-\frac{\Delta x}{(\Delta x)^2}=-\frac{1}{\Delta x}$$

De même :

$$A_{i,i-1}=-\frac{1}{\Delta x}$$

---

## Matrice globale

On obtient la matrice tridiagonale :

$$\boxed{A=\frac{1}{\Delta x}\begin{pmatrix} 2 & -1 & 0 & \cdots & 0\\ -1 & 2 & -1 & \ddots & \vdots\\ 0 & -1 & 2 & \ddots & 0\\ \vdots & \ddots & \ddots & \ddots & -1\\ 0 & \cdots & 0 & -1 & 2 \end{pmatrix}}$$

---

# 4) Calcul du second membre

Le second membre est donné par :

$$b_i=\int_1^2 h(x)\varphi_i(x)\,dx$$

Comme $\varphi_i(x)=0$ hors de $[x_{i-1},x_{i+1}]$, on peut écrire :

$$\boxed{b_i=\int_{x_{i-1}}^{x_{i+1}} h(x)\varphi_i(x)\,dx}$$

C’est l’expression **exacte**.

---

## Approximation simple du second membre

Comme dans vos notes, si on utilise la **formule des rectangles** sur le support de $\varphi_i$, on prend :

$$h(x)\approx h(x_i)$$

alors

$$b_i \approx h(x_i)\int_{x_{i-1}}^{x_{i+1}}\varphi_i(x)\,dx$$

Or l’aire sous $\varphi_i$ est celle d’un triangle de base $2\Delta x$ et de hauteur 1, donc :

$$\int_{x_{i-1}}^{x_{i+1}}\varphi_i(x)\,dx=\Delta x$$

Ainsi :

$$\boxed{b_i\approx \Delta x\,h(x_i)}$$

Donc :

$$\boxed{b\approx \Delta x\begin{pmatrix} h(x_1)\\ h(x_2)\\ \vdots\\ h(x_N) \end{pmatrix}}$$

---

# 5) Système final à résoudre

Le système linéaire des éléments finis est donc :

$$\boxed{A\,U=b}$$

avec :

$$U=\begin{pmatrix} U_1\\ U_2\\ \vdots\\ U_N \end{pmatrix}$$

$$A=\frac{1}{\Delta x}\begin{pmatrix} 2 & -1 & 0 & \cdots & 0\\ -1 & 2 & -1 & \ddots & \vdots\\ 0 & -1 & 2 & \ddots & 0\\ \vdots & \ddots & \ddots & \ddots & -1\\ 0 & \cdots & 0 & -1 & 2 \end{pmatrix}$$

et

$$b_i=\int_{x_{i-1}}^{x_{i+1}} h(x)\varphi_i(x)\,dx$$

ou, en approximation simple,

$$b\approx \Delta x\begin{pmatrix} h(x_1)\\ h(x_2)\\ \vdots\\ h(x_N) \end{pmatrix}$$

---

# 6) Écriture nodale du schéma

Le système matriciel précédent est équivalent, pour $i=1,\dots,N$, à :

$$\boxed{\frac{1}{\Delta x}\left(-U_{i-1}+2U_i-U_{i+1}\right)=b_i}$$

avec les conditions aux bords :

$$U_0=0,\qquad U_{N+1}=0$$

Si on utilise l’approximation $b_i\approx \Delta x\,h(x_i)$, alors :

$$\boxed{-U_{i-1}+2U_i-U_{i+1}\approx (\Delta x)^2 h(x_i)}$$

---

# 7) Solution approchée finale

Une fois le système résolu, la solution approchée est :

$$\boxed{u_{\Delta x}(x)=\sum_{j=1}^N U_j\,\varphi_j(x)}$$