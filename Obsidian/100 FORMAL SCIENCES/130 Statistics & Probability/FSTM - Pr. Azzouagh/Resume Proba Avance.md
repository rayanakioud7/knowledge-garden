Date: 2026-02-21

Tags: [[Measure Theory]], [[Mathematics]], [[Probability Theory]]

# CH1: Tribu

> [!NOTE]
> 
> une famille $\tau$ de partie d'un ensemble $X$ ne tribu ou $\sigma$-algebre s'il verifier les proprietes suivant:
> 
> 1. $X \in \tau$
>     
> 2. si $A \in \tau$ alors $A^c \in \tau$
>     
> 3. $\cup_{n \in \mathbb{N}} A_n \in \tau$ pour toute suite $(A_n) \subset \tau$
>     

## Proposition

1. $\emptyset$ est un ensemble mesurable
2. $\cup^N_{n \geq 0} A_n$ et $\cap^N_{n \geq 0} A_n$ sont des ensembles mesurable
3. si $A$ et $B$ sont mesurable, $A\setminus B$ et aussi mesurable

# Mesure positive

une mesure positive sur $(X,\tau)$ toute application $\mu$

$$\mu : \tau \longrightarrow [0, +\infty[$$

qui vérifie les propriétés suivantes

1. $\mu(\emptyset)=0$
    
2. $\mu$ est $\sigma$-additive:
    
    $A_i \cap A_j=\emptyset$ (disjoint 2 a 2), On a $\mu(\cup_{n\in \mathbb{N}} A_n)= \sum^{+\infty}_{i=0}\mu(A_i)$
    

## Proposition

Soit $(X,\tau, \mu)$ un espace mesure

~={red}1. =~Si $A_1,A_2,...,A_n$ sont des ensembles mesurable disjoint 2 a 2 alors $\mu(\cup^{n}_{k=1} A_n)= \sum^{n}_{k=1}\mu(A_i)$

**Preuve** : on pose $A_p=\emptyset, p > n$

~={red}2.=~ $\forall A,B \in \tau$ avec $A \subset B$, on a $\mu(A \setminus B)=\mu(B)-\mu(A)$ (**Preuve** : $B= A\cup (B\setminus A)$)

et $\mu(A) \leq \mu(B)$ (**Preuve** : $\mu(A \setminus B)=\mu(B)-\mu(A)$ et $\mu(A \setminus B) \geq 0$)

~={red}3.=~ $\forall A,B \in \tau, \mu(A \cap B) < +\infty$, On a : $\mu(A \cup B) = \mu(A) +\mu(B) -\mu(A\cap B)$

**Preuve** : ![[Excalidraw/Drawing 2026-02-21 13.23.21.excalidraw.md#^frame=trbiuebbprop 3]]

~={red}4.=~ $\forall A,B \in \tau$

$\mu(A\cup B) \leq \mu(A)+\mu(B)$ (**Preuve** : $\mu(A\cap B)\geq 0$, donc $\mu(A)+\mu(B)-\mu(A\cup B) \geq 0$)

$\mu(A\cap B) \leq \min(\mu(A),\mu(B))$ (**Preuve** : $A\cap B \subset A$ et $A\cap B \subset B$)

$\mu(A \cup B) \geq \max(\mu(A),\mu(B))$ (**Preuve** : $A \subset A\cup B$ et $B \subset A\cup B$)

~={red}5. =~ Pour toute suite $(A_n)_{n \in \mathbb{N}}$ d'element de $\tau$, $(A_n)_{n \in \mathbb{N}} \subset \tau$

$$\cup^{+\infty}_{i=1} A_i \in \tau, \text{ On a, } \quad \mu(\cup^{+\infty}_{i=1} A_i) \leq \sum^{+ \infty}_{i=1} \mu(A_i)$$


**Demonstration:** On pose $B_1 = A_1$, $\forall n \geq 2$  $B_n = A_n \setminus \cup^{n-1}_{k=1} B_k$ 
On vérifie une $B_j \cap B_i =\emptyset$ 
	montrons par récurrence $B_1=A_1$ , $B_2 =A_2 \setminus A_1$ donc $B_1 \cap B_2 =\emptyset$
	donc c'est claire que $B_n \subset A_n$
Montrer par récurrence $\cup^n_{k=1} B_k = \cup^n_{k=1} A_k$ 
	alors $\cup^{+ \infty}_{k=1} B_k = \cup^{+ \infty}_{k=1} A_k$ 
Finalement:
$$\mu(\cup^{+\infty}_{k=1} A_k)=\mu(\cup^{+\infty}_{k=1} B_k)= \sum^{+ \infty}_{k=1} \mu(B_k)\leq \sum^{+ \infty}_{k=1} \mu(A_k)$$

~={red}6. =~ Si $(A_n)$ est une suite croissante la suite $\mu(A_i)$ est croissante et converge vers $\mu(A)=\mu(\cup^{+\infty}_{n=0})$

$$\lim_{n \rightarrow +\infty} \mu(A_n)=\mu(\cup^{+\infty}_{n=0} A_n)=\mu(A)$$

**Demonstration:** On pose: $B_0=A_0$ et $B_n=A_n \setminus A_{n-1}$

On m.q: $\forall i \not = j, B_i \cap B_j = \emptyset$

$$\begin{align} i < j &\Rightarrow i \leq j-1\\ B_i&=A_i \setminus A_{i-1}\\ B_j&=A_j \setminus A_{j-1}\\ A_i \subset A_{j-1} &\text{ donc sont disjoint 2 a 2} \end{align}$$


On m.q: $\forall n \in \mathbb{N}, A_n=\cup^{n}_{k=0} B_k$

$$\begin{align} \cup^{n}_{k=0} B_k &= A_0 \cup (A_1 \setminus A_0) \cup ... \cup (A_n \setminus A_{n-1})\\ & = A_0 \cup A_1 ... \cup A_n \\ &=A_n \end{align}$$
Alors  $\cup^{+ \infty}_{k=1} B_k = \cup^{+ \infty}_{k=1} A_k$
Finalement:
	$$\mu(\cup^{+ \infty}_{k=0} A_k) = \mu(\cup^{+ \infty}_{k=0} B_k)=\sum^{+ \infty}_{k=0} \mu(B_k)= \lim_{n \rightarrow + \infty} \sum^{n}_{k=0} \mu(B_k)=\lim_{n\rightarrow +\infty} \mu(\cup^n_{k=0}B_k)=\lim_{n \rightarrow + \infty} \mu(A_n)$$

~={red}7. =~ Si $(A_n)$ est une suite décroissante la suite $\mu(A_i)$ est décroissante et converge vers $\mu(A)=\mu(\cap^{+\infty}_{n=0} A_n)$

$$\lim_{n \rightarrow +\infty} \mu(A_n)=\mu(\cap^{+\infty}_{n=0} A_n)=\mu(A)$$

**Demonstration:** On pose $B_0=\emptyset$, $B_n= A_0 \setminus A_n$

On m.q: Si $A_n$ décroissante donc $B_n$ croissante

On m.q : Si $A_n$ est décroissante donc $\mu(A_n)$ est décroissante

$A_{n+1} \subset A_n$ donc $\mu(A_{n+1}) \leq \mu(A_n)$ donc $\mu(A_n)$ est décroissante

On m.q: $\cup^{+ \infty}_{n=0}(A_0 \setminus A_n)=A_0 \setminus (\cap^{+ \infty}_{n=0} A_n)$

Finalement $B_n$ croissante donc $\lim_{n \rightarrow +\infty} \mu(B_n)=\mu(\cup^{+\infty}_{n=0} B_n)$

a. $\lim_{n \rightarrow +\infty} \mu(B_n)=\lim_{n \rightarrow +\infty} \mu(A_0 \setminus A_n)$

b. $\mu(\cup^{+\infty}_{n=0} B_n)=\mu(A_0 \setminus (\cap^{+ \infty}_{n=0} A_n))$

Alors:

$$\lim_{n \rightarrow +\infty} \mu(A_n)=\mu(\cap^{+\infty}_{n=0} A_n)$$

---

# CH 2: Calcul de Probabilité

- $\overline{\lim} A_n=\cap_{k \in \mathbb{N}}(\cup_{n \geq k} A_n)$
    
- $\underline{\lim} A_n=\cup_{k \in \mathbb{N}}(\cap_{n \geq k} A_n)$
    

$$P(A)=\frac{Card(A)}{Card(\Omega)}$$

## Probabilité conditionné par un évènement

$$P(A / B)=\frac{P(A \cap B)}{P(B)}$$

### Formule de Bayes

$$P(A_n / B)=\frac{P(B / A_n)P(A_n)}{\sum^{+\infty}_{k=1}P(B / A_k)\times P(A_k)}$$

### Evènement indépendant

$$P(A/B)=P(A) \quad \text{ et } \quad P(B/A)=P(B)$$

$$P(A \cap B)= P(A) \times P(B)$$

### Lemme de Borel-Cantelli

1. Si $\sum_{n \geq 1} P(A_n) < +\infty$ donc $P(\overline{\lim}A_n)=0$
    
2. Si les $(A_n)_{n \geq 1}$ sont indépendants et $\sum_{n \geq 1} P(A_n) = +\infty$ donc $P(\overline{\lim}A_n)=1$
    

---

# CH 3: Variables Aléatoires Réelles

On appelle variable aléatoire réelle (v.a.r) toute application mesurable de $(\Omega,F)$ dans $(\mathbb{R},B(\mathbb{R}))$.


$$\forall A \in B(\mathbb{R}), \quad X^{-1}(A) \in F$$

## Variable Aléatoire Discrète (v.a.d)

$$X:(\Omega , F)\rightarrow (\mathbb{R},B(\mathbb{R})) \quad \text{ est v.a.d si:}$$

- $X(\Omega)=S$ est au plus dénombrable, $S=\{x_1,.....x_k,....\}$
    
- $\forall x_k \in S, X^{-1}(\{x_k\}) \in F$
    

### Notation

$$X^{-1} (\{x_k\})=\{\omega \in \Omega / X(\omega)=x_k\}=(X=x_k)$$

### Loi de Proba d'une v.a.d

On appelle fonction de répartition de $X$ la fonction réelle définie par:

$$\forall x \in \mathbb{R},\quad F_X(x)=\sum_{x_k \leq x} P(X=x_k)$$

$F_X$ est une fonction croissante, continue à droite en tout point.

- $\lim_{x \rightarrow + \infty} F(x)=1$
    
- $\lim_{x \rightarrow - \infty} F(x)=0$
    

### Loi de probabilité usuelle 
Soit $(\Omega , F, P)$ un espace probabilise
#### Loi de Bernouille
Une experience aléatoire a deux issues possible (succès ou échec)
$$
\begin{align}
X \sim &\mathcal{B(p)} \\
P(X=1)=p \quad\text{ et }& \quad P(X=0)=1-p \\
\text{Esperence: }\quad & E(X)=p\\
\text{Variance: }\quad & V(X)=p \cdot (1-p)
\end{align}
$$
#### Loi Binomiale
Une répétition n fois d'une experience de **Bernouille** d'une façons indépendant
*Compter le nombre de success parmi n essais*
$$
\begin{align}
X &\sim \mathcal{B}(n,p) \\
P(X=k)=&\binom{n}{k}\cdot p^k \cdot (1-p)^{n-k}\\
\text{Esperence: }\quad & E(X)=np\\
\text{Variance: }\quad & V(X)=np \cdot (1-p)
\end{align}
$$
#### Loi Uniforme Discrete
Chaque issue possible a la meme probabilité de se produire
*Equiprobabilité parfaite*
$$
\begin{align}
X \sim &U({x_1,....,x_n})\\
\forall x_k \in S \Rightarrow &P(X=x_k)=\frac{1}{n} \\
n=&Card(S)\\
\text{Esperence: }\quad & E(X)=\frac{n +1}{2}\\
\text{Variance: }\quad & V(X)=\frac{n^2 -1}{12}
\end{align}
$$
#### Loi Géométrique
Modélise le temps d'attente de premier success
*Nombre d'essais necessaire pour obtenir le premiere succès*
$$
\begin{align}
X \sim &\mathcal{G}(p)\\
P(X=k)=&(1-p)^{k-1}\cdot p \\
\text{Esperence: }\quad & E(X)=\frac{1}{p}\\
\text{Variance: }\quad & V(X)=\frac{1-p}{p}
\end{align}
$$
#### Loi de Poisson
Montre un évènement qui se produisent dans un lapse de temps
$$
\begin{align}
X \sim &\mathcal{P}(\lambda)\\
P(X=k)=&\frac{e^{-\lambda}\lambda^k}{k!}\\
\text{Esperence: }\quad & E(X)=\lambda\\
\text{Variance: }\quad & V(X)=\lambda
\end{align}
$$

#### Loi Hypergéométrique

 On dispose de N objet dont n sont défectueuse, On prélevé un échantillon de taille k (sans remise), k objet pour N
*$X$ : nombre de piece défectueuse parmi k pieces*
 $$
\begin{align}
X \sim &\mathcal{H}(N,n,k)\\
P(X=x)=&\frac{C^x_n \cdot C^{k-x}_{N-n}}{C^k_N} \\
\text{Esperence: }\quad & E(X)=n\frac{k}{N}\\
\text{Variance: }\quad & V(X)=n\frac{k}{N}(1-\frac{k}{N})\frac{N-n}{N-1}
\end{align}
$$
 
### Espérance d'une v.a.d

Si $\sum_{x \in S} |x| \cdot P(X=x) < + \infty$, alors l'espérance mathématique de $X$ est :

$$E(X)=\sum_{x \in S} \; x \cdot P(X=x)$$

#### Proposition (Espérance)

1. Si $X=a$ (constante), donc $E(X)=a$
    
2. Soit $Y=aX+b$ alors $E(Y)=aE(X)+b$
    
3. $E(aX+bY)=aE(X)+bE(Y)$
    
4. Si $X \leq Y$ P.p.s, alors $E(X) \leq E(Y)$
    

### Variance et Ecart-type d'une v.a.d

Soit $E(X)=m < +\infty$.

Si $\sum_{x \in S} (x-m)^2 \cdot P(X=x) < + \infty$, on appelle variance de $X$ (notée $V(X)$ ou $\sigma^2_X$) la quantité :

$$V(X)=\sum_{x \in S} (x-m)^2 \cdot P(X=x)$$


**Remarques :**

- L'écart-type est défini par : $\sigma_X = \sqrt{V(X)}$
    
- Moment centré d'ordre 2 : $V(X)=E(X^2)-(E(X))^2$
    

#### Propriétés de la Variance

1. $V(X) \geq 0$
    
2. Pour $Y=aX+b$, on a : $V(Y)= a^2 V(X)$
    
3. **Centrage et Réduction** : Soit $X$ avec $E(X)=m$.
    
    $E\left(\frac{X-m}{\sigma}\right)=0$ $V\left(\frac{X-m}{\sigma}\right)=1$ On dit qu'on a centré et réduit $X$.
    

---

## Variable Aléatoire Continue (v.a.c)

Soit $X$ une variable aléatoire définie sur $(\Omega, \mathcal{F}, P)$. $X$ est une variable aléatoire continue si sa loi $P_X$ admet une densité $f$ par rapport à la mesure de Lebesgue $\lambda$ sur $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$.


### Fonction de Répartition (f.d.r) d'une v.a.c

![probability density function area under curve, généré par IA](https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQzfK_pyNTxLkGC5G84EPmiOE1WOz8WWnyw2dKKDs7pooWIn4qPg91Oq_aYdTnU3_DDkozrhCoOnMH91KrWfujX-ibAS9ONqys-NaOHGrFpXZ48reo)

La fonction de répartition $F_X(x)$ de $X$ est donnée par :

$$F_X(x) = P_X(]-\infty, x]) = P(X \le x) = \int_{-\infty}^{x} f(t) d\lambda(t)$$

**Propriétés de la fonction de repartition:**

- $F_X$ est croissante ($x \le y \Rightarrow F_X(x) \le F_X(y)$).
    
- $F_X$ est continue à droite en tout point de $\mathbb{R}$.
    
- $\lim_{x \to -\infty} F_X(x) = 0$ et $\lim_{x \to +\infty} F_X(x) = l$.
    
- $F_X$ est absolument continue par rapport à $\lambda$ ($P_X \ll \lambda$).
    
- $F'_X(x) = f(x)$ presque partout.
    

### Espérance et Intégration (v.a.c)

Si $P_X$ admet une densité $f$ par rapport à la mesure de Lebesgue :

$$E(X) = \int_{\mathbb{R}} x \cdot f(x) d\lambda(x)$$

**Théorème de transfert :** Pour une fonction mesurable $g$ :

$$E(g(X)) = \int_{\mathbb{R}} g(x) \cdot f(x) d\lambda(x)$$

### Lois de Probabilités Continues Usuelles

#### 1. Loi Uniforme

$X$ suit la loi uniforme sur l'intervalle $[a, b]$ si sa densité $f_X$ est :

$$\begin{align} X \sim &\mathcal{U}_{[a,b]}\\ f_X(x) =& \frac{1}{b-a} \cdot \mathcal{I}_{[a,b]}(x) \end{align}$$

- **Espérance :** $E(X) = \frac{a+b}{2}$
    
- **Variance :** $V(X) = \frac{(b-a)^2}{12}$
    

#### 2. Loi Normale (Gaussienne)

![Normal distribution curve with standard deviations, généré par IA](https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQqa0MK7gJRSPlSLngA9VyoOQSgyp2uIeGC0JEQKZ13GQ7Ei-WJFug9SiyzwcghQlj9TtJXdFizzGzge2MEJGG0nmYCChz-Dyxb9VdwAynAuNwJMPk)


$X$ suit une loi normale d'espérance $m$ et de variance $\sigma^2$ si sa densité est :

$$\begin{align} X \sim &\mathcal{N}(m, \sigma^2)\\ f_X(x) =& \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{1}{2}\left(\frac{x-m}{\sigma}\right)^2} \end{align}$$

> [!NOTE]
>  Si $m=0$ et $\sigma^2=1$, on dit que $X$ est **centrée réduite**, notée $\mathcal{N}(0, 1)$.
> 


#### 3. Loi Exponentielle

$X$ suit une loi exponentielle de paramètre $\lambda > 0$ si sa densité est :

$$\begin{align} X \sim &\mathcal{E}(\lambda)\\ f_X(x) =& \lambda e^{-\lambda x} \quad \text{pour } x \ge 0 \end{align}$$

- **Fonction de répartition :** $F_X(x) = (1 - e^{-\lambda x})\mathcal{I}_{x \ge 0}$
    

#### 4. Loi de Cauchy

$X$ suit une loi de Cauchy de paramètres $a$ et $b$ si sa densité est :

$$\begin{align} X \sim &\mathcal{C}(a,b)\\ f_X(x) =& \frac{1}{\pi} \frac{a}{a^2 + (x-b)^2} \end{align}$$

- L'espérance $E(X)$ **n'existe pas** (elle vaut $+\infty$).
    

### Moments et Paramètres de Position

- **Moment d'ordre $n$ :** $E(X^n) = \int_{-\infty}^{+\infty} x^n f(x) dx$
    
- **Moment centré d'ordre $n$ :** $\mu_n = E((X - E(X))^n)$
    
- **Médiane :** Un réel $\alpha$ tel que $P(X \ge \alpha) \ge \frac{1}{2}$ et $P(X \le \alpha) \ge \frac{1}{2}$. Si $F$ est continue, on résout $F(\alpha) = \frac{1}{2}$.
    
- **Quantile d'ordre $\alpha$ :** Un réel $q_\alpha$ tel que $P(X \ge q_\alpha) \ge 1 - \alpha$ et $P(X \le q_\alpha) \ge \alpha$.
    
- **Mode :** C'est la valeur pour laquelle la fonction de densité $f(x)$ est maximale (quand elle existe).
    


### Inégalités Fondamentales

**Inégalité de Markov :** Pour une v.a. $X$ positive et $\epsilon > 0$ :

$$P(X \ge \epsilon) \le \frac{E(X)}{\epsilon}$$


**Inégalité de Bienaymé-Tchebychev :** Si $X$ possède une variance finie $\sigma_X^2$, pour tout $\epsilon > 0$ :

$$P(|X - E(X)| > \epsilon) \le \frac{V(X)}{\epsilon^2}$$


---

# CH 4: Couples Aléatoires (Rappels)

Soit un couple aléatoire $(X, Y)$.

## I. Variable Aléatoire Bivariée Discrète

Distribution conjointe : $P(X=x, Y=y)$.

1. **Distribution marginale de X :**
    
    $$P(X=x) = \sum_y P(X=x, Y=y)$$
    
2. **Espérance marginale de g(X) :**
    
    $$E(g(X)) = \sum_x g(x) P(X=x)$$
    
    $$E(X) = \sum_x x P(X=x)$$
    
3. **Distribution conditionnelle de Y sachant X=x :**
    
    $$P(Y=y / X=x) = \frac{P(X=x, Y=y)}{P(X=x)} \quad \text{avec } P(X=x) \neq 0$$
    
4. **Espérance conditionnelle de g(Y) sachant X=x :**
    
    $$E(g(Y)/X=x) = \sum_y g(y) P(Y=y/X=x)$$
    
5. **Espérance de g(X,Y) :**
    
    $$E(g(X,Y)) = \sum_x \sum_y g(x,y) P(X=x, Y=y)$$
    

## II. Variable Aléatoire Bivariée Continue

Densité conjointe : $f(x,y)$.

1. **Densité marginale de X :**
    
    $$f_X(x) = \int_{-\infty}^{+\infty} f(x,y) dy$$
    
2. **Espérance marginale de g(X) :**
    
    $$E(g(X)) = \int_{-\infty}^{+\infty} g(x) f_X(x) dx$$
    
3. **Densité conditionnelle de Y sachant X=x :**
    
    $$f_{Y/X=x}(y) = \frac{f(x,y)}{f_X(x)} \quad \text{avec } f_X(x) \neq 0$$
    
4. **Espérance conditionnelle de g(Y) sachant X=x :**
    
    $$E(g(Y)/Y=x) = \int_{-\infty}^{+\infty} g(y) f_{Y/X=x}(y) dy$$
    
5. **Espérance de g(X,Y) :**
    
    $$E(g(X,Y)) = \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} g(x,y) f(x,y) dx dy$$
    

---

# CH 5: Indépendance et Moments

## 1. Matrice de Covariance

Soit $X=(X_1, X_2)$ défini sur $(\Omega, \mathcal{F}, P)$ à valeurs dans $\mathbb{R}^2$ tel que $E(X_1) < +\infty$ et $E(X_2) < +\infty$.

La matrice de covariance $C_X$ est définie par :

$$C_X = \begin{pmatrix} V(X_1) & Cov(X_1, X_2) \\ Cov(X_2, X_1) & V(X_2) \end{pmatrix}$$

**Définition de la covariance :**

$$Cov(X_1, X_2) = E[(X-E(X))(Y-E(Y))] = E(XY) - E(X)E(Y)$$

> [!NOTE] Propriété de la Matrice
> 
> $C_X$ est une matrice symétrique définie positive (ou semi-définie positive), c'est-à-dire :
> 
> $\forall \alpha \in \mathbb{R}^2, \quad \alpha^T C_X \alpha \geq 0$.

## 2. Corrélation entre X et Y

Le coefficient de corrélation linéaire est :

$$\rho_{XY} = \frac{Cov(X,Y)}{\sigma_X \sigma_Y} \quad \text{et on a } |\rho_{XY}| \leq 1$$

**Remarque :** $Cov(X,Y) = 0 \iff X$ et $Y$ sont non corrélés.

## 3. Indépendance Stochastique

$X$ et $Y$ sont indépendants si et seulement si l'une des conditions suivantes est vérifiée :

1. $P(X \leq x \cap Y \leq y) = P(X \leq x) \cdot P(Y \leq y)$
    
2. $F_{(X,Y)}(x,y) = F_X(x) \cdot F_Y(y)$
    
3. $f_{(X,Y)}(x,y) = f_X(x) \cdot f_Y(y)$ (Cas continu)
    
4. $E(XY) = E(X)E(Y)$
    
5. $\forall g$ réelle mesurable bornée ou positive, $E(g(X)g(Y)) = E(g(X)) \cdot E(g(Y))$
    

**Implications :**

- $X$ et $Y$ indépendants $\implies Cov(X,Y) = 0$.
    
- Si $X$ et $Y$ suivent la **loi Normale**, alors :
    
    $X$ et $Y$ indépendants $\iff Cov(X,Y) = 0$.
    

---

# CH 6: Opérations et Théorèmes Limites

## Propriétés des opérateurs Espérances et Variances

Soient $X$ et $Y$ deux v.a. et $a, b$ deux réels.

1. **Linéarité :** $E(aX + bY) = aE(X) + bE(Y)$
    
2. **Variance :** $Var(aX + bY) = a^2 Var(X) + b^2 Var(Y) + 2ab Cov(X,Y)$
    
3. **Si X et Y sont indépendants :**
    
    - $V(X+Y) = V(X) + V(Y)$
        
    - $V(X-Y) = V(X) + V(Y)$
        

## Théorème d'Addition (Stabilité)

Soient $X$ et $Y$ deux v.a. **indépendantes**.

1. **Loi Binomiale :**
    
    Si $X \sim \mathcal{B}(n_1, p)$ et $Y \sim \mathcal{B}(n_2, p) \implies X+Y \sim \mathcal{B}(n_1+n_2, p)$
    
2. **Loi de Poisson :**
    
    Si $X \sim \mathcal{P}(\lambda_1)$ et $Y \sim \mathcal{P}(\lambda_2) \implies X+Y \sim \mathcal{P}(\lambda_1+\lambda_2)$
    
3. **Loi Normale :**
    
    Si $X \sim \mathcal{N}(\mu_1, \sigma_1^2)$ et $Y \sim \mathcal{N}(\mu_2, \sigma_2^2)$, alors :
    
    $$aX + bY \sim \mathcal{N}(a\mu_1 + b\mu_2, a^2\sigma_1^2 + b^2\sigma_2^2)$$
    

## Vecteurs Gaussiens

On dit que $X = (X_1, ..., X_n)$ (dans $\mathbb{R}^n$) est un vecteur aléatoire gaussien ssi :

$\forall (\alpha_1, ..., \alpha_n) \in \mathbb{R}^n$, la combinaison linéaire $\sum_{i=1}^n \alpha_i X_i$ est une variable aléatoire gaussienne dans $\mathbb{R}$.

## Fonction Caractéristique

Soit $X$ une v.a. sur $(\Omega, \mathcal{F}, P)$. La fonction caractéristique de $X$ est :

$$\phi_X(t) = E(e^{itX})$$

- **Cas continu :** $\int_{-\infty}^{+\infty} e^{itx} f_X(x) dx$
    
- **Cas discret :** $\sum_{k} e^{itk} P(X=k)$
    

**Remarque :** La fonction caractéristique détermine d'une façon unique la loi de probabilité.

---

# Annexe : Quelques Approximations Usuelles

Conditions et schémas d'approximation des lois :

1. **Binomiale vers Poisson :** $\mathcal{B}(n, p) \to \mathcal{P}(\lambda)$
    
    - **Conditions :** $n \ge 30$, $p \le 0.1$, $np < 15$.
        
    - **Paramètre :** $\lambda = np$
        
2. **Binomiale vers Normale :** $\mathcal{B}(n, p) \to \mathcal{N}(\mu, \sigma^2)$
    
    - **Conditions :** $np \ge 5$ et $n(1-p) \ge 5$ (ou $n$ grand et $p$ pas trop proche de 0 ou 1).
        
    - **Paramètres :** Approximée par $\mathcal{N}(np, np(1-p))$
        
3. **Poisson vers Normale :** $\mathcal{P}(\lambda) \to \mathcal{N}(\mu, \sigma^2)$
    
    - **Condition :** $\lambda \ge 15$ (grandes valeurs de $\lambda$).
        
    - **Paramètres :** Approximée par $\mathcal{N}(\lambda, \lambda)$


---
# CH 7: Convergence Stochastique

Soit $(X_n)_{n \ge 1}$ une suite de variables aléatoires et $X$ une variable aléatoire définies sur $(\Omega, \mathcal{F}, P)$.


### 1. Convergence en Probabilité

$X_n$ converge en probabilité vers $X$ lorsque $n \to +\infty$ si, pour tout $\epsilon > 0$ :

$$\lim_{n \to +\infty} P(|X_n - X| > \epsilon) = 0$$

### 2. Convergence Presque Sûre (p.s.)

$X_n$ converge presque sûrement vers $X$ si la probabilité de l'ensemble des éventualités $\omega$ pour lesquelles $X_n(\omega)$ converge vers $X(\omega)$ est égale à 1.


$$P(\{\omega / X_n(\omega) \to X(\omega)\}) = 1$$

- **Condition suffisante de cv p.s :** Si $\sum_{n \ge 1} P(|X_n - X| > \epsilon) < +\infty$, alors $X_n \xrightarrow{p.s} X$.
    

### 3. Loi des Grands Nombres (LGN)

Soit $(X_n)_{n \ge 1}$ une suite de variables aléatoires indépendantes et de même loi (i.i.d 'Independent and identically distributed') avec une espérance $E(X_i) = m$. On définit la moyenne arithmétique (empirique) $\overline{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$.



- **Loi Faible des Grands Nombres :** $\overline{X}_n$ converge en _probabilité_ vers la vraie moyenne $m$.

    
- **Loi Forte des Grands Nombres :** $\overline{X}_n$ converge _presque sûrement_ (p.s.) vers $m$.
    


> [!TIP] Intérêt Pratique des LGN 
> Dans la pratique, la moyenne théorique (l'espérance) d'une v.a. est inconnue. Prendre plusieurs observations indépendantes $X_i$ permet d'estimer cette moyenne avec certitude via la moyenne arithmétique, car celle-ci converge vers la vraie espérance.
> 


### 4. Théorème Central Limite (TCL)

Soit $(X_n)$ une suite de v.a. i.i.d avec $E(X_n) = m$ et de variance $V(X_n) = \sigma^2$. La variable centrée et réduite approchée $Z_n$ converge vers la loi normale standard $\mathcal{N}(0,1)$ quand $n \to +\infty$.


$$Z_n = \frac{\overline{X}_n - m}{\frac{\sigma}{\sqrt{n}}} \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)$$
