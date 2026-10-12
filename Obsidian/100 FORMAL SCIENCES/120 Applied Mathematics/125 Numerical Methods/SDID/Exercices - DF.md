# Exercice 1

On cherche $u : [0,1]^2 \times \mathbb{R}^+ \to \mathbb{R}$ telle que

$$\frac{\partial u}{\partial t}(x,y,t)-d\,\Delta u(x,y,t)=f(x,y,t), \qquad (x,y)\in ]0,1[^2,\quad t>0$$

avec

$$u(x,y,t)=0 \quad \text{sur la frontière de } [0,1]^2,\quad t>0$$

et

$$u(x,y,0)=\omega(x,y)$$

où

$$\Delta u(x,y,t)=\frac{\partial^2 u}{\partial x^2}(x,y,t)+\frac{\partial^2 u}{\partial y^2}(x,y,t).$$

![[Screenshot 2026-03-27 214535.png]]

---

# 1) Que peut décrire ce problème ?

## a) Nature de l’équation

L’équation

$$\frac{\partial u}{\partial t}-d\Delta u=f$$

est une **équation de la chaleur en dimension 2**, avec un **terme source** $f(x,y,t)$.

D’après vos notes, c’est une **EDP parabolique**, car :

- elle est du **premier ordre en temps** ;
    
- elle est du **second ordre en espace** ;
    
- elle modélise un phénomène de **diffusion**.
    

---

## b) Interprétation physique

Ce problème peut décrire :

- la **température** dans une plaque carrée $[0,1]\times[0,1]$,
    
- avec **diffusion thermique** de coefficient $d>0$,
    
- avec une **source interne** $f(x,y,t)$ (chauffage, production de chaleur, etc.),
    
- avec **température nulle sur le bord** de la plaque,
    
- et une **température initiale** donnée par $\omega(x,y)$.
    

> [!info] Interprétation des données
> 
> - $u(x,y,t)$ : température au point $(x,y)$ à l’instant $t$,
>     
> - $d$ : coefficient de diffusion thermique,
>     
> - $f(x,y,t)$ : source volumique de chaleur,
>     
> - $u=0$ sur le bord : bord maintenu à température nulle,
>     
> - $\omega(x,y)$ : température initiale.
>     

---

# 2) Discrétisation du domaine

Nous allons maintenant écrire les schémas aux différences finies.

---

## a) Maillage en espace

On discrétise l’intervalle $[0,1]$ en $I+1$ sous-intervalles selon $x$, et en $J+1$ sous-intervalles selon $y$.

On pose :

$$\Delta x=\frac{1}{I+1},\qquad \Delta y=\frac{1}{J+1}$$

Les nœuds spatiaux sont :

$$x_i=i\Delta x,\qquad i=0,\dots,I+1$$

$$y_j=j\Delta y,\qquad j=0,\dots,J+1$$

Les inconnues intérieures correspondent à :

$$i=1,\dots,I,\qquad j=1,\dots,J$$

---

## b) Maillage en temps

On discrétise le temps avec un pas $\Delta t>0$ :

$$t^n=n\Delta t,\qquad n=0,1,2,\dots$$

---

## c) Notation discrète

On note :

$$u_{i,j}^n \approx u(x_i,y_j,t^n)$$

$$f_{i,j}^n=f(x_i,y_j,t^n)$$

$$\omega_{i,j}=\omega(x_i,y_j)$$

---

## d) Conditions initiale et aux limites

**Condition initiale :**

$$u_{i,j}^0=\omega(x_i,y_j),\qquad 1\le i\le I,\; 1\le j\le J$$

**Conditions aux limites :**

Comme $u=0$ sur le bord, on a pour tout $n\ge 0$ :

$$u_{0,j}^n=0,\qquad u_{I+1,j}^n=0,\qquad j=0,\dots,J+1$$

$$u_{i,0}^n=0,\qquad u_{i,J+1}^n=0,\qquad i=0,\dots,I+1$$

---

# 3) Approximation des dérivées

D’après les formules de Taylor rappelées dans vos notes :

## a) Dérivée en temps

**Schéma explicite (progressif) :**

$$\frac{\partial u}{\partial t}(x_i,y_j,t^n)\approx \frac{u_{i,j}^{n+1}-u_{i,j}^n}{\Delta t}$$

**Schéma implicite (rétrograde) :**

on l’utilisera sous la forme

$$\frac{\partial u}{\partial t}(x_i,y_j,t^{n+1})\approx \frac{u_{i,j}^{n+1}-u_{i,j}^n}{\Delta t}$$

---

## b) Dérivées secondes en espace

$$\frac{\partial^2 u}{\partial x^2}(x_i,y_j,t^n)\approx \frac{u_{i+1,j}^n-2u_{i,j}^n+u_{i-1,j}^n}{\Delta x^2}$$

$$\frac{\partial^2 u}{\partial y^2}(x_i,y_j,t^n)\approx \frac{u_{i,j+1}^n-2u_{i,j}^n+u_{i,j-1}^n}{\Delta y^2}$$

Donc le Laplacien est approché par :

$$\Delta u(x_i,y_j,t^n)\approx \frac{u_{i+1,j}^n-2u_{i,j}^n+u_{i-1,j}^n}{\Delta x^2} + \frac{u_{i,j+1}^n-2u_{i,j}^n+u_{i,j-1}^n}{\Delta y^2}$$

---

# 4) Schéma explicite

Nous utilisons :

- différence progressive en temps ;
    
- différences centrées en espace.
    

---

## a) Écriture du schéma

On remplace dans l’équation :

$$\frac{u_{i,j}^{n+1}-u_{i,j}^n}{\Delta t} - d\left[ \frac{u_{i+1,j}^n-2u_{i,j}^n+u_{i-1,j}^n}{\Delta x^2} + \frac{u_{i,j+1}^n-2u_{i,j}^n+u_{i,j-1}^n}{\Delta y^2} \right] = f_{i,j}^n$$

pour $1\le i\le I$, $1\le j\le J$.

---

## b) Mise sous forme explicite

On pose

$$r_x=\frac{d\Delta t}{\Delta x^2},\qquad r_y=\frac{d\Delta t}{\Delta y^2}$$

Alors :

$$u_{i,j}^{n+1} = u_{i,j}^n +r_x\bigl(u_{i+1,j}^n-2u_{i,j}^n+u_{i-1,j}^n\bigr) +r_y\bigl(u_{i,j+1}^n-2u_{i,j}^n+u_{i,j-1}^n\bigr) +\Delta t\,f_{i,j}^n$$

soit encore

$$\boxed{ u_{i,j}^{n+1} = (1-2r_x-2r_y)u_{i,j}^n +r_xu_{i+1,j}^n+r_xu_{i-1,j}^n +r_yu_{i,j+1}^n+r_yu_{i,j-1}^n +\Delta t\,f_{i,j}^n }$$

C’est le **schéma explicite 2D**.

---

## c) Forme matricielle du schéma explicite

On regroupe les inconnues intérieures dans le vecteur :

$$U^n= \begin{pmatrix} u_{1,1}^n\\ u_{1,2}^n\\ \vdots\\ u_{1,J}^n\\ u_{2,1}^n\\ \vdots\\ u_{I,J}^n \end{pmatrix} \in \mathbb{R}^{IJ}$$

et le vecteur source :

$$F^n= \begin{pmatrix} f_{1,1}^n\\ f_{1,2}^n\\ \vdots\\ f_{1,J}^n\\ f_{2,1}^n\\ \vdots\\ f_{I,J}^n \end{pmatrix}$$

Alors le schéma s’écrit :

$$\boxed{ U^{n+1}=M_{\text{exp}}\,U^n+\Delta t\,F^n }$$

Comme les conditions aux limites sont homogènes, il n’y a **pas de vecteur de bord** supplémentaire.

---

## d) Matrice $M_{\text{exp}}$

La matrice $M_{\text{exp}}$ est de taille $(IJ)\times(IJ)$, et a une structure **par blocs tridiagonale** :

$$M_{\text{exp}}= \begin{pmatrix} C_{\text{exp}} & D_{\text{exp}} & 0 & \cdots & 0\\ D_{\text{exp}} & C_{\text{exp}} & D_{\text{exp}} & \ddots & \vdots\\ 0 & \ddots & \ddots & \ddots & 0\\ \vdots & \ddots & D_{\text{exp}} & C_{\text{exp}} & D_{\text{exp}}\\ 0 & \cdots & 0 & D_{\text{exp}} & C_{\text{exp}} \end{pmatrix}$$

avec :

$$C_{\text{exp}}= \begin{pmatrix} 1-2r_x-2r_y & r_y & 0 & \cdots & 0\\ r_y & 1-2r_x-2r_y & r_y & \ddots & \vdots\\ 0 & \ddots & \ddots & \ddots & 0\\ \vdots & \ddots & r_y & 1-2r_x-2r_y & r_y\\ 0 & \cdots & 0 & r_y & 1-2r_x-2r_y \end{pmatrix}$$

et

$$D_{\text{exp}}=r_x I_J$$

où $I_J$ désigne la matrice identité de taille $J\times J$.

---

## e) Remarque sur la stabilité

D’après la théorie des schémas explicites pour l’équation de la chaleur, ce schéma est **conditionnellement stable**.

La condition classique est :

$$\boxed{ r_x+r_y\le \frac12 }$$

c’est-à-dire

$$\boxed{ d\Delta t\left(\frac1{\Delta x^2}+\frac1{\Delta y^2}\right)\le \frac12 }$$

Dans le cas particulier $\Delta x=\Delta y=h$, cela devient :

$$\boxed{ \frac{d\Delta t}{h^2}\le \frac14 }$$

---

# 5) Schéma implicite

Nous utilisons maintenant :

- différence rétrograde en temps ;
    
- différences centrées en espace au temps $n+1$.
    

---

## a) Écriture du schéma implicite

On approxime par :

$$\frac{u_{i,j}^{n+1}-u_{i,j}^n}{\Delta t} - d\left[ \frac{u_{i+1,j}^{n+1}-2u_{i,j}^{n+1}+u_{i-1,j}^{n+1}}{\Delta x^2} + \frac{u_{i,j+1}^{n+1}-2u_{i,j}^{n+1}+u_{i,j-1}^{n+1}}{\Delta y^2} \right] = f_{i,j}^{n+1}$$

pour $1\le i\le I$, $1\le j\le J$.

---

## b) Mise sous forme algébrique

Avec

$$r_x=\frac{d\Delta t}{\Delta x^2},\qquad r_y=\frac{d\Delta t}{\Delta y^2}$$

on obtient :

$$u_{i,j}^{n+1} -r_x\bigl(u_{i+1,j}^{n+1}-2u_{i,j}^{n+1}+u_{i-1,j}^{n+1}\bigr) -r_y\bigl(u_{i,j+1}^{n+1}-2u_{i,j}^{n+1}+u_{i,j-1}^{n+1}\bigr) = u_{i,j}^n+\Delta t\,f_{i,j}^{n+1}$$

d’où :

$$\boxed{ -r_xu_{i-1,j}^{n+1} -r_xu_{i+1,j}^{n+1} -r_yu_{i,j-1}^{n+1} -r_yu_{i,j+1}^{n+1} +(1+2r_x+2r_y)u_{i,j}^{n+1} = u_{i,j}^n+\Delta t\,f_{i,j}^{n+1} }$$

C’est le **schéma implicite 2D**.

---

# 6) Forme matricielle du schéma implicite

On garde le même vecteur inconnu $U^n$.

Le schéma implicite s’écrit :

$$\boxed{ A_{\text{imp}}\,U^{n+1}=U^n+\Delta t\,F^{n+1} }$$

Ici, cette fois, il faut **résoudre un système linéaire** à chaque pas de temps.

---

## a) Matrice $A_{\text{imp}}$

La matrice $A_{\text{imp}}$ est une matrice par blocs tridiagonale :

$$A_{\text{imp}}= \begin{pmatrix} C_{\text{imp}} & D_{\text{imp}} & 0 & \cdots & 0\\ D_{\text{imp}} & C_{\text{imp}} & D_{\text{imp}} & \ddots & \vdots\\ 0 & \ddots & \ddots & \ddots & 0\\ \vdots & \ddots & D_{\text{imp}} & C_{\text{imp}} & D_{\text{imp}}\\ 0 & \cdots & 0 & D_{\text{imp}} & C_{\text{imp}} \end{pmatrix}$$

avec

$$C_{\text{imp}}= \begin{pmatrix} 1+2r_x+2r_y & -r_y & 0 & \cdots & 0\\ -r_y & 1+2r_x+2r_y & -r_y & \ddots & \vdots\\ 0 & \ddots & \ddots & \ddots & 0\\ \vdots & \ddots & -r_y & 1+2r_x+2r_y & -r_y\\ 0 & \cdots & 0 & -r_y & 1+2r_x+2r_y \end{pmatrix}$$

et

$$D_{\text{imp}}=-r_x I_J$$

---

## b) Second membre

Le second membre est :

$$\boxed{ B^n=U^n+\Delta t\,F^{n+1} }$$

c’est-à-dire, composante par composante,

$$b_{i,j}^n=u_{i,j}^n+\Delta t\,f_{i,j}^{n+1}$$

Comme les conditions aux limites sont nulles, il n’y a pas de termes supplémentaires dus au bord.

---

## c) Remarque de stabilité

> [!success] Avantage
> 
> Le schéma implicite de type Euler arrière est **inconditionnellement stable**.
> 
> C’est un grand avantage, mais il faut résoudre un système linéaire à chaque pas de temps.

---

# 7) Cas particulier fréquent : $\Delta x=\Delta y=h$

Très souvent, on prend le même pas en $x$ et en $y$ :

$$\Delta x=\Delta y=h$$

Alors

$$r_x=r_y=r=\frac{d\Delta t}{h^2}$$

---

## a) Schéma explicite simplifié

$$\boxed{ u_{i,j}^{n+1} = (1-4r)u_{i,j}^n +r(u_{i+1,j}^n+u_{i-1,j}^n+u_{i,j+1}^n+u_{i,j-1}^n) +\Delta t\,f_{i,j}^n }$$

Condition de stabilité :

$$\boxed{r\le \frac14}$$

---

## b) Schéma implicite simplifié

$$\boxed{ -r u_{i-1,j}^{n+1} -r u_{i+1,j}^{n+1} -r u_{i,j-1}^{n+1} -r u_{i,j+1}^{n+1} +(1+4r)u_{i,j}^{n+1} = u_{i,j}^n+\Delta t\,f_{i,j}^{n+1} }$$

---

# 8) Réponse finale rédigée comme à l’examen

## 1. Que décrit ce problème ?

Le problème

$$u_t-d\Delta u=f$$

est une **EDP parabolique** de type **équation de la chaleur 2D avec source**.

Il peut décrire la **diffusion de la température dans une plaque carrée** $[0,1]^2$, avec :

- $d>0$ : coefficient de diffusion,
    
- $f(x,y,t)$ : source de chaleur,
    
- $u=0$ sur le bord : température imposée nulle sur la frontière,
    
- $u(x,y,0)=\omega(x,y)$ : température initiale.
    

---

## 2. Schéma explicite

Avec

$$x_i=i\Delta x,\quad y_j=j\Delta y,\quad t^n=n\Delta t,$$

$$u_{i,j}^n\approx u(x_i,y_j,t^n),\qquad r_x=\frac{d\Delta t}{\Delta x^2},\qquad r_y=\frac{d\Delta t}{\Delta y^2},$$

le schéma explicite est :

$$\boxed{ u_{i,j}^{n+1} = (1-2r_x-2r_y)u_{i,j}^n +r_xu_{i+1,j}^n+r_xu_{i-1,j}^n +r_yu_{i,j+1}^n+r_yu_{i,j-1}^n +\Delta t\,f_{i,j}^n }$$

avec

$$u_{0,j}^n=u_{I+1,j}^n=u_{i,0}^n=u_{i,J+1}^n=0, \qquad u_{i,j}^0=\omega(x_i,y_j).$$

Sous forme matricielle :

$$\boxed{ U^{n+1}=M_{\text{exp}}U^n+\Delta t\,F^n }$$

où $M_{\text{exp}}$ est la matrice par blocs donnée ci-dessus.

---

## 3. Schéma implicite

Le schéma implicite est :

$$\boxed{ -r_xu_{i-1,j}^{n+1} -r_xu_{i+1,j}^{n+1} -r_yu_{i,j-1}^{n+1} -r_yu_{i,j+1}^{n+1} +(1+2r_x+2r_y)u_{i,j}^{n+1} = u_{i,j}^n+\Delta t\,f_{i,j}^{n+1} }$$

Sous forme matricielle :

$$\boxed{ A_{\text{imp}}U^{n+1}=U^n+\Delta t\,F^{n+1} }$$

où $A_{\text{imp}}$ est la matrice bloc tridiagonale :

- blocs diagonaux $C_{\text{imp}}$,
    
- blocs hors diagonale $D_{\text{imp}}=-r_x I_J$,
    

avec

$$C_{\text{imp}}= \begin{pmatrix} 1+2r_x+2r_y & -r_y & \cdots & 0\\ -r_y & 1+2r_x+2r_y & \ddots & \vdots\\ \vdots & \ddots & \ddots & -r_y\\ 0 & \cdots & -r_y & 1+2r_x+2r_y \end{pmatrix}$$

Le second membre est :

$$\boxed{ B^n=U^n+\Delta t\,F^{n+1} }$$


---

# Exercice 2

On considère le problème :

$$\begin{cases} \dfrac{\partial u}{\partial t}(x,t)-d\,\dfrac{\partial^2 u}{\partial x^2}(x,t)=f(x,t), & x\in ]0,1[,\ t>0,\\[6pt] u(0,t)=u(1,t)=0, & t>0,\\[4pt] u(x,0)=w(x), & x\in[0,1]. \end{cases}$$

où :

- $f:[0,1]\times \mathbb{R}^+\to\mathbb{R}$ est donnée ;
    
- $w:[0,1]\to\mathbb{R}$ est la condition initiale ;
    
- $d>0$ est le coefficient de diffusion.

![[Pasted image 20260327224100.png]]

---

# 1) Que peut décrire ce problème ?

## Étape 1 : nature de l’EDP

L’équation

$$u_t-d\,u_{xx}=f(x,t)$$

est une **équation de la chaleur 1D avec terme source**.

D’après le cours, c’est une **EDP parabolique**, car :

- elle est du **premier ordre en temps** ;
    
- elle est du **second ordre en espace** ;
    
- elle modélise un phénomène de **diffusion**.
    

---

## Étape 2 : interprétation physique

Ce problème peut décrire la **température dans une barre** de longueur $1$, au cours du temps.

- $u(x,t)$ : température au point $x$ à l’instant $t$ ;
    
- $d$ : coefficient de diffusion thermique ;
    
- $f(x,t)$ : source de chaleur interne ;
    
- $u(0,t)=u(1,t)=0$ : les deux extrémités de la barre sont maintenues à température nulle ;
    
- $u(x,0)=w(x)$ : température initiale de la barre.
    

---

# 2) Écrire les schémas des différences finies explicite et implicite, ainsi que la matrice associée et le second membre

---

## 2.1 Discrétisation du domaine

### Maillage en espace

On découpe l’intervalle $[0,1]$ en $N$ sous-intervalles égaux.

On pose :

$$\Delta x=\frac{1}{N}$$

et les nœuds :

$$x_i=i\Delta x,\qquad i=0,1,\dots,N$$

Les inconnues spatiales intérieures sont :

$$i=1,\dots,N-1$$

---

### Maillage en temps

On pose :

$$t^n=n\Delta t,\qquad n=0,1,2,\dots$$

et on note :

$$u_i^n \approx u(x_i,t^n),\qquad f_i^n=f(x_i,t^n)$$

---

### Conditions discrètes

- **condition initiale** :
    

$$u_i^0=w(x_i),\qquad i=0,\dots,N$$

- **conditions aux limites** :
    

$$u_0^n=0,\qquad u_N^n=0,\qquad \forall n\ge 0$$

---

## 2.2 Approximation des dérivées

D’après les formules de Taylor du cours :

### Dérivée en temps

$$u_t(x_i,t^n)\approx \frac{u_i^{n+1}-u_i^n}{\Delta t}$$

### Dérivée seconde en espace

$$u_{xx}(x_i,t^n)\approx \frac{u_{i+1}^n-2u_i^n+u_{i-1}^n}{\Delta x^2}$$

---

# 2.3 Schéma explicite

On utilise :

- différence **progressive** en temps ;
    
- différence **centrée** en espace.
    

---

## Étape 1 : écriture du schéma

On remplace dans l’équation :

$$\frac{u_i^{n+1}-u_i^n}{\Delta t} - d\frac{u_{i+1}^n-2u_i^n+u_{i-1}^n}{\Delta x^2} = f_i^n \qquad i=1,\dots,N-1$$

---

## Étape 2 : mise sous forme explicite

On pose

$$r=\frac{d\,\Delta t}{\Delta x^2}$$

Alors :

$$u_i^{n+1} = u_i^n+r(u_{i+1}^n-2u_i^n+u_{i-1}^n)+\Delta t\,f_i^n$$

donc

$$\boxed{ u_i^{n+1}=r\,u_{i-1}^n+(1-2r)u_i^n+r\,u_{i+1}^n+\Delta t\,f_i^n } \qquad i=1,\dots,N-1$$

C’est le **schéma explicite**.

---

## Étape 3 : forme matricielle

On introduit le vecteur inconnu :

$$U^n= \begin{pmatrix} u_1^n\\ u_2^n\\ \vdots\\ u_{N-2}^n\\ u_{N-1}^n \end{pmatrix}$$

et le vecteur source :

$$F^n= \begin{pmatrix} f_1^n\\ f_2^n\\ \vdots\\ f_{N-2}^n\\ f_{N-1}^n \end{pmatrix}$$

Alors le schéma explicite s’écrit :

$$\boxed{ U^{n+1}=M_{\text{exp}}\,U^n+\Delta t\,F^n }$$

avec la matrice d’évolution

$$\boxed{ M_{\text{exp}}= \begin{pmatrix} 1-2r & r & 0 & \cdots & 0\\ r & 1-2r & r & \ddots & \vdots\\ 0 & r & 1-2r & \ddots & 0\\ \vdots & \ddots & \ddots & \ddots & r\\ 0 & \cdots & 0 & r & 1-2r \end{pmatrix} }$$

> [!note] Remarque
> 
> Comme les conditions aux limites sont nulles $(u_0^n=u_N^n=0)$, il n’y a pas de termes supplémentaires dans le second membre.

---

## Étape 4 : stabilité du schéma explicite

D’après le cours, le schéma explicite pour l’équation de la chaleur est **conditionnellement stable** sous la condition :

$$\boxed{ r=\frac{d\,\Delta t}{\Delta x^2}\le \frac12 }$$

---

# 2.4 Schéma implicite

On utilise maintenant :

- différence en temps au niveau $n+1$ ;
    
- différence centrée en espace au niveau $n+1$.
    

---

## Étape 1 : écriture du schéma

$$\frac{u_i^{n+1}-u_i^n}{\Delta t} - d\frac{u_{i+1}^{n+1}-2u_i^{n+1}+u_{i-1}^{n+1}}{\Delta x^2} = f_i^{n+1} \qquad i=1,\dots,N-1$$

---

## Étape 2 : mise sous forme algébrique

Avec

$$r=\frac{d\,\Delta t}{\Delta x^2},$$

on obtient :

$$u_i^{n+1}-u_i^n-r\left(u_{i+1}^{n+1}-2u_i^{n+1}+u_{i-1}^{n+1}\right)=\Delta t\,f_i^{n+1}$$

soit

$$-r\,u_{i-1}^{n+1}+(1+2r)u_i^{n+1}-r\,u_{i+1}^{n+1} = u_i^n+\Delta t\,f_i^{n+1}$$

Donc :

$$\boxed{ -r\,u_{i-1}^{n+1}+(1+2r)u_i^{n+1}-r\,u_{i+1}^{n+1} = u_i^n+\Delta t\,f_i^{n+1} }$$

---

## Étape 3 : forme matricielle

On écrit :

$$\boxed{ A_{\text{imp}}\,U^{n+1}=B^n }$$

avec
$$\boxed{ A_{\text{imp}}= \begin{pmatrix} 1+2r & -r & 0 & \cdots & 0\\ -r & 1+2r & -r & \ddots & \vdots\\ 0 & -r & 1+2r & \ddots & 0\\ \vdots & \ddots & \ddots & \ddots & -r\\ 0 & \cdots & 0 & -r & 1+2r \end{pmatrix} }$$

et le second membre

$$\boxed{ B^n= U^n+\Delta t\,F^{n+1} }$$

c’est-à-dire

$$B^n= \begin{pmatrix} u_1^n\\ u_2^n\\ \vdots\\ u_{N-2}^n\\ u_{N-1}^n \end{pmatrix} + \Delta t \begin{pmatrix} f_1^{n+1}\\ f_2^{n+1}\\ \vdots\\ f_{N-2}^{n+1}\\ f_{N-1}^{n+1} \end{pmatrix}$$

Comme $u_0^n=u_N^n=0$, les conditions aux limites ne rajoutent aucun terme.

---

## Étape 4 : stabilité du schéma implicite

> [!success] Stabilité
> 
> Le schéma implicite est **inconditionnellement stable**.
> 
> Son avantage est la stabilité, mais il faut résoudre un **système linéaire tridiagonal** à chaque pas de temps.

---

# 3) Écrire l’équivalent du problème en 2D en espace, puis le schéma implicite, la matrice associée et le second membre

---

# 3.1 Problème équivalent en 2D

L’équivalent 2D du problème est :

$$\begin{cases} \dfrac{\partial u}{\partial t}(x,y,t)-d\left(\dfrac{\partial^2 u}{\partial x^2}(x,y,t)+\dfrac{\partial^2 u}{\partial y^2}(x,y,t)\right)=f(x,y,t), & (x,y)\in ]0,1[^2,\ t>0,\\[8pt] u(x,y,t)=0, & (x,y)\in \partial([0,1]^2),\ t>0,\\[4pt] u(x,y,0)=w(x,y), & (x,y)\in [0,1]^2. \end{cases}$$

> [!info] Précision
> 
> En 2D, la condition initiale devient naturellement $w=w(x,y)$.

C’est encore une **équation de la chaleur**, mais en **dimension 2**, donc toujours une **EDP parabolique**.

---

# 3.2 Discrétisation 2D

## Maillage de l’espace

On pose :

$$x_i=i\Delta x,\qquad i=0,\dots,N$$

$$y_j=j\Delta y,\qquad j=0,\dots,M$$

avec

$$\Delta x=\frac{1}{N},\qquad \Delta y=\frac{1}{M}$$

Les nœuds intérieurs sont :

$$i=1,\dots,N-1,\qquad j=1,\dots,M-1$$

---

## Maillage du temps

$$t^n=n\Delta t,\qquad n=0,1,2,\dots$$

et

$$u_{i,j}^n\approx u(x_i,y_j,t^n),\qquad f_{i,j}^n=f(x_i,y_j,t^n)$$

---

## Conditions discrètes

- condition initiale :
    

$$u_{i,j}^0=w(x_i,y_j)$$

- conditions aux limites :
    

$$u_{0,j}^n=u_{N,j}^n=u_{i,0}^n=u_{i,M}^n=0$$

---

# 3.3 Schéma implicite 2D

D’après les différences finies centrées :

$$u_{xx}(x_i,y_j,t^{n+1})\approx \frac{u_{i+1,j}^{n+1}-2u_{i,j}^{n+1}+u_{i-1,j}^{n+1}}{\Delta x^2}$$

$$u_{yy}(x_i,y_j,t^{n+1})\approx \frac{u_{i,j+1}^{n+1}-2u_{i,j}^{n+1}+u_{i,j-1}^{n+1}}{\Delta y^2}$$

et

$$u_t(x_i,y_j,t^{n+1})\approx \frac{u_{i,j}^{n+1}-u_{i,j}^n}{\Delta t}$$

---

## Étape 1 : écriture du schéma

On remplace dans l’équation :

$$\frac{u_{i,j}^{n+1}-u_{i,j}^n}{\Delta t} -d\left[ \frac{u_{i+1,j}^{n+1}-2u_{i,j}^{n+1}+u_{i-1,j}^{n+1}}{\Delta x^2} + \frac{u_{i,j+1}^{n+1}-2u_{i,j}^{n+1}+u_{i,j-1}^{n+1}}{\Delta y^2} \right] = f_{i,j}^{n+1}$$

---

## Étape 2 : simplification

On pose

$$r_x=\frac{d\,\Delta t}{\Delta x^2}, \qquad r_y=\frac{d\,\Delta t}{\Delta y^2}$$

Alors on obtient :

$$-r_xu_{i-1,j}^{n+1} -r_xu_{i+1,j}^{n+1} -r_yu_{i,j-1}^{n+1} -r_yu_{i,j+1}^{n+1} + (1+2r_x+2r_y)u_{i,j}^{n+1} = u_{i,j}^n+\Delta t\,f_{i,j}^{n+1}$$

Donc le schéma implicite 2D est :

$$\boxed{ -r_xu_{i-1,j}^{n+1} -r_xu_{i+1,j}^{n+1} -r_yu_{i,j-1}^{n+1} -r_yu_{i,j+1}^{n+1} + (1+2r_x+2r_y)u_{i,j}^{n+1} = u_{i,j}^n+\Delta t\,f_{i,j}^{n+1} }$$

pour tout nœud intérieur $(i,j)$.

---

# 3.4 Forme matricielle du schéma implicite 2D

## Étape 1 : vecteur des inconnues

On ordonne les inconnues sous la forme :

$$U^n= \begin{pmatrix} U_1^n\\ U_2^n\\ \vdots\\ U_{N-1}^n \end{pmatrix}, \qquad U_i^n= \begin{pmatrix} u_{i,1}^n\\ u_{i,2}^n\\ \vdots\\ u_{i,M-1}^n \end{pmatrix}$$

Ainsi, $U^n$ est un vecteur de taille $(N-1)(M-1)$.

De même, on définit :

$$F^{n+1}= \begin{pmatrix} F_1^{n+1}\\ F_2^{n+1}\\ \vdots\\ F_{N-1}^{n+1} \end{pmatrix}, \qquad F_i^{n+1}= \begin{pmatrix} f_{i,1}^{n+1}\\ f_{i,2}^{n+1}\\ \vdots\\ f_{i,M-1}^{n+1} \end{pmatrix}$$

---

## Étape 2 : écriture matricielle

Le schéma s’écrit :

$$\boxed{ A_{2D}\,U^{n+1}=B^n }$$

avec

$$\boxed{ B^n=U^n+\Delta t\,F^{n+1} }$$

---

## Étape 3 : matrice associée

La matrice $A_{2D}$ est une matrice **par blocs tridiagonale** :

$$\boxed{ A_{2D}= \begin{pmatrix} C & -r_x I & 0 & \cdots & 0\\ -r_x I & C & -r_x I & \ddots & \vdots\\ 0 & \ddots & \ddots & \ddots & 0\\ \vdots & \ddots & -r_x I & C & -r_x I\\ 0 & \cdots & 0 & -r_x I & C \end{pmatrix} }$$

où $I$ est la matrice identité de taille $(M-1)\times(M-1)$, et

$$\boxed{ C= \begin{pmatrix} 1+2r_x+2r_y & -r_y & 0 & \cdots & 0\\ -r_y & 1+2r_x+2r_y & -r_y & \ddots & \vdots\\ 0 & -r_y & 1+2r_x+2r_y & \ddots & 0\\ \vdots & \ddots & \ddots & \ddots & -r_y\\ 0 & \cdots & 0 & -r_y & 1+2r_x+2r_y \end{pmatrix} }$$

Comme les conditions aux limites sont nulles, il n’y a pas de termes supplémentaires dans le second membre.

---

# 3.5 Cas particulier $\Delta x=\Delta y=h$

Si on choisit le même pas dans les deux directions :

$$\Delta x=\Delta y=h$$

alors

$$r_x=r_y=r=\frac{d\,\Delta t}{h^2}$$

et le schéma implicite devient :

$$\boxed{ -r\,u_{i-1,j}^{n+1} -r\,u_{i+1,j}^{n+1} -r\,u_{i,j-1}^{n+1} -r\,u_{i,j+1}^{n+1} + (1+4r)\,u_{i,j}^{n+1} = u_{i,j}^n+\Delta t\,f_{i,j}^{n+1} }$$

La matrice associée a alors :

- $1+4r$ sur la diagonale principale ;
    
- $-r$ pour les voisins en $x$ ;
    
- $-r$ pour les voisins en $y$.
    

---

# Réponse finale condensée

## 1) Description du problème

Le problème

$$u_t-d\,u_{xx}=f(x,t),\quad u(0,t)=u(1,t)=0,\quad u(x,0)=w(x)$$

décrit la **diffusion de la chaleur dans une barre 1D** avec :

- source interne $f$,
    
- température nulle aux extrémités,
    
- condition initiale $w$.
    

C’est une **EDP parabolique**.

---

## 2) Schémas 1D

### Schéma explicite

$$\frac{u_i^{n+1}-u_i^n}{\Delta t} -d\frac{u_{i+1}^n-2u_i^n+u_{i-1}^n}{\Delta x^2} =f_i^n$$

soit

$$\boxed{ u_i^{n+1}=r\,u_{i-1}^n+(1-2r)u_i^n+r\,u_{i+1}^n+\Delta t\,f_i^n, \qquad r=\frac{d\Delta t}{\Delta x^2} }$$

forme matricielle :

$$\boxed{ U^{n+1}=M_{\text{exp}}U^n+\Delta t\,F^n }$$

avec

$$M_{\text{exp}}=\operatorname{tridiag}(r,\,1-2r,\,r)$$

Stabilité :

$$\boxed{r\le \frac12}$$

---

### Schéma implicite

$$\frac{u_i^{n+1}-u_i^n}{\Delta t} -d\frac{u_{i+1}^{n+1}-2u_i^{n+1}+u_{i-1}^{n+1}}{\Delta x^2} =f_i^{n+1}$$

soit

$$\boxed{ -r\,u_{i-1}^{n+1}+(1+2r)u_i^{n+1}-r\,u_{i+1}^{n+1} = u_i^n+\Delta t\,f_i^{n+1} }$$

forme matricielle :

$$\boxed{ A_{\text{imp}}U^{n+1}=U^n+\Delta t\,F^{n+1} }$$

avec

$$A_{\text{imp}}=\operatorname{tridiag}(-r,\,1+2r,\,-r)$$

Le schéma implicite est **inconditionnellement stable**.

---

## 3) Équivalent 2D en espace

$$u_t-d(u_{xx}+u_{yy})=f(x,y,t), \quad u=0 \text{ sur } \partial([0,1]^2), \quad u(x,y,0)=w(x,y)$$

Schéma implicite 2D :

$$\boxed{ -r_xu_{i-1,j}^{n+1} -r_xu_{i+1,j}^{n+1} -r_yu_{i,j-1}^{n+1} -r_yu_{i,j+1}^{n+1} + (1+2r_x+2r_y)u_{i,j}^{n+1} = u_{i,j}^n+\Delta t\,f_{i,j}^{n+1} }$$

avec

$$r_x=\frac{d\Delta t}{\Delta x^2},\qquad r_y=\frac{d\Delta t}{\Delta y^2}$$

forme matricielle :

$$\boxed{ A_{2D}U^{n+1}=U^n+\Delta t\,F^{n+1} }$$

où $A_{2D}$ est une matrice **par blocs tridiagonale** :

$$A_{2D}= \begin{pmatrix} C & -r_x I & 0 & \cdots & 0\\ -r_x I & C & -r_x I & \ddots & \vdots\\ 0 & \ddots & \ddots & \ddots & 0\\ \vdots & \ddots & -r_x I & C & -r_x I\\ 0 & \cdots & 0 & -r_x I & C \end{pmatrix}$$

avec

$$C=\operatorname{tridiag}(-r_y,\;1+2r_x+2r_y,\;-r_y)$$

---


# Exercice 3

On considère l’équation de la chaleur 1D :

$$\frac{\partial u}{\partial t}=\alpha \frac{\partial^2 u}{\partial x^2}, \qquad x\in[0,1],\ t\ge 0$$

avec les conditions aux bords :

$$u(0,t)=0,\qquad u(1,t)=0,\qquad \forall t\ge 0$$

et la condition initiale :

$$u(x,0)=\sin(\pi x)$$

On suppose ici que :

$$\alpha=1$$

et on prend une discrétisation spatiale avec $N=5$.

![[Pasted image 20260327234228.png]]

---

# 1) Nature du problème

C’est une **équation de la chaleur**, donc une **EDP parabolique**.

Elle décrit par exemple la **température dans une barre** de longueur 1, avec température nulle aux deux extrémités.

---

# 2) Solution exacte

Comme la condition initiale est

$$u(x,0)=\sin(\pi x),$$

la solution exacte connue est :

$$\boxed{ u(x,t)=\sin(\pi x)\,e^{-\pi^2 t} }$$

En particulier :

- à $t=0$ :
    
    $$u(x,0)=\sin(\pi x)$$
    
- après un pas de temps $\Delta t$ :
    
    $$\boxed{ u(x,\Delta t)=\sin(\pi x)\,e^{-\pi^2 \Delta t} }$$
    

---

# 3) Discrétisation de l’espace et du temps

Je reprends **exactement la convention du cours** :

$$x_j=j\Delta x,\qquad j=0,1,\dots,N$$

avec $N=5$. Donc

$$\Delta x=\frac{1}{5}$$

Les nœuds sont :

$$x_0=0,\quad x_1=0.2,\quad x_2=0.4,\quad x_3=0.6,\quad x_4=0.8,\quad x_5=1$$

On discrétise aussi le temps :

$$t_n=n\Delta t,\qquad n=0,1,2,\dots$$

et on note

$$u_j^n\approx u(x_j,t_n)$$

Les conditions aux limites deviennent :

$$u_0^n=0,\qquad u_5^n=0,\qquad \forall n$$

Les inconnues intérieures sont donc :

$$u_1^n,\ u_2^n,\ u_3^n,\ u_4^n$$

---

# 4) Partie I — Schéma d’Euler implicite

Vous avez demandé d’utiliser la notation :

$$\frac{\partial u}{\partial t}(x_j,t_n)\approx \frac{u_j^n-u_j^{n-1}}{\Delta t}$$

C’est exactement celle que j’utilise ici.

---

## 4.1 Approximation des dérivées

### Dérivée en temps

$$\frac{\partial u}{\partial t}(x_j,t_n)\approx \frac{u_j^n-u_j^{n-1}}{\Delta t}$$

### Dérivée seconde en espace

$$\frac{\partial^2 u}{\partial x^2}(x_j,t_n)\approx \frac{u_{j+1}^n-2u_j^n+u_{j-1}^n}{\Delta x^2}$$

---

## 4.2 Discrétisation de l’équation

Comme $\alpha=1$, l’équation devient :

$$\frac{\partial u}{\partial t}=\frac{\partial^2 u}{\partial x^2}$$

En remplaçant par les approximations précédentes :

$$\frac{u_j^n-u_j^{n-1}}{\Delta t} = \frac{u_{j+1}^n-2u_j^n+u_{j-1}^n}{\Delta x^2}, \qquad j=1,2,3,4$$

C’est le **schéma implicite** demandé.

---

## 4.3 Mise sous forme algébrique

On multiplie par $\Delta t$ :

$$u_j^n-u_j^{n-1} = \frac{\Delta t}{\Delta x^2} \left(u_{j+1}^n-2u_j^n+u_{j-1}^n\right)$$

On pose

$$r=\frac{\Delta t}{\Delta x^2}$$

Comme $\Delta x=\frac15$, on a

$$\Delta x^2=\frac{1}{25} \qquad\Longrightarrow\qquad r=\frac{\Delta t}{1/25}=25\Delta t$$

Donc :

$$u_j^n-u_j^{n-1}=r(u_{j+1}^n-2u_j^n+u_{j-1}^n)$$

On regroupe les termes en $n$ :

$$-r\,u_{j-1}^n+(1+2r)u_j^n-r\,u_{j+1}^n=u_j^{n-1}$$

Ainsi, pour $j=1,2,3,4$,

$$\boxed{ -r\,u_{j-1}^n+(1+2r)u_j^n-r\,u_{j+1}^n=u_j^{n-1} }$$

avec

$$u_0^n=0,\qquad u_5^n=0$$

---

## 4.4 Système matriciel à chaque pas de temps

On pose :

$$U^n= \begin{pmatrix} u_1^n\\ u_2^n\\ u_3^n\\ u_4^n \end{pmatrix}$$

Alors le système s’écrit :

$$\boxed{ A\,U^n=U^{n-1} }$$

avec la matrice

$$\boxed{ A= \begin{pmatrix} 1+2r & -r & 0 & 0\\ -r & 1+2r & -r & 0\\ 0 & -r & 1+2r & -r\\ 0 & 0 & -r & 1+2r \end{pmatrix} }$$

et ici

$$\boxed{r=25\Delta t}$$

Donc la matrice vaut aussi :

$$\boxed{ A= \begin{pmatrix} 1+50\Delta t & -25\Delta t & 0 & 0\\ -25\Delta t & 1+50\Delta t & -25\Delta t & 0\\ 0 & -25\Delta t & 1+50\Delta t & -25\Delta t\\ 0 & 0 & -25\Delta t & 1+50\Delta t \end{pmatrix} }$$

---

## 4.5 Condition initiale discrète

À $t=0$, on a :

$$u(x,0)=\sin(\pi x)$$

Donc aux points intérieurs :

$$u_1^0=\sin\left(\frac{\pi}{5}\right),\quad u_2^0=\sin\left(\frac{2\pi}{5}\right),\quad u_3^0=\sin\left(\frac{3\pi}{5}\right),\quad u_4^0=\sin\left(\frac{4\pi}{5}\right)$$

Ainsi :

$$\boxed{ U^0= \begin{pmatrix} \sin(\pi/5)\\ \sin(2\pi/5)\\ \sin(3\pi/5)\\ \sin(4\pi/5) \end{pmatrix} \approx \begin{pmatrix} 0.5878\\ 0.9511\\ 0.9511\\ 0.5878 \end{pmatrix} }$$

---

## 4.6 Après une itération

Au premier pas de temps $n=1$, on doit résoudre :

$$\boxed{ A\,U^1=U^0 }$$

Donc :

$$\begin{pmatrix} 1+2r & -r & 0 & 0\\ -r & 1+2r & -r & 0\\ 0 & -r & 1+2r & -r\\ 0 & 0 & -r & 1+2r \end{pmatrix} \begin{pmatrix} u_1^1\\ u_2^1\\ u_3^1\\ u_4^1 \end{pmatrix} = \begin{pmatrix} \sin(\pi/5)\\ \sin(2\pi/5)\\ \sin(3\pi/5)\\ \sin(4\pi/5) \end{pmatrix}$$

---

## 4.7 Comparaison avec la solution exacte

La solution exacte aux nœuds, au temps $t=\Delta t$, est :

$$u(x_j,\Delta t)=\sin(\pi x_j)e^{-\pi^2\Delta t}$$

donc

$$\boxed{ U_{\text{exact}}^1=e^{-\pi^2\Delta t}U^0 }$$

Autrement dit :

$$U_{\text{exact}}^1= e^{-\pi^2\Delta t} \begin{pmatrix} \sin(\pi/5)\\ \sin(2\pi/5)\\ \sin(3\pi/5)\\ \sin(4\pi/5) \end{pmatrix}$$

---

## 4.8 Observation importante

> [!warning] Comportement des modes propres
> 
> Comme le vecteur initial est du type $\sin(\pi x_j)$, il correspond au **premier mode propre** discret.
> 
> Donc le vecteur numérique implicite après un pas reste proportionnel à $U^0$ :

$$\boxed{ U^1=\frac{1}{1+r\mu_1}\,U^0 }$$

où

$$\mu_1=2-2\cos\left(\frac{\pi}{5}\right)$$

Ainsi :

$$\boxed{ U^1= \frac{1}{1+25\Delta t\left(2-2\cos(\pi/5)\right)}\,U^0 }$$

alors que la solution exacte donne :

$$\boxed{ U_{\text{exact}}^1=e^{-\pi^2\Delta t}U^0 }$$

Donc la comparaison se fait entre les deux facteurs :

- **facteur numérique implicite** :
    
    $$\frac{1}{1+25\Delta t\left(2-2\cos(\pi/5)\right)}$$
    
- **facteur exact** :
    
    $$e^{-\pi^2\Delta t}$$
    

---

## 4.9 Si on prend $\Delta t=0.1$

Si l’annotation manuscrite sur la feuille signifie $\Delta t=0.1$, alors :

$$r=25\times 0.1=2.5$$

La matrice devient :

$$\boxed{ A= \begin{pmatrix} 6 & -2.5 & 0 & 0\\ -2.5 & 6 & -2.5 & 0\\ 0 & -2.5 & 6 & -2.5\\ 0 & 0 & -2.5 & 6 \end{pmatrix} }$$

Le facteur numérique implicite vaut :

$$\frac{1}{1+2.5\left(2-2\cos(\pi/5)\right)} \approx 0.5115$$

Donc :

$$U^1_{\text{imp}} \approx 0.5115\,U^0 \approx \begin{pmatrix} 0.3007\\ 0.4865\\ 0.4865\\ 0.3007 \end{pmatrix}$$

La solution exacte au temps $t=0.1$ est :

$$e^{-\pi^2(0.1)}\approx 0.3727$$

donc

$$U^1_{\text{exact}} \approx 0.3727\,U^0 \approx \begin{pmatrix} 0.2191\\ 0.3545\\ 0.3545\\ 0.2191 \end{pmatrix}$$

### Comparaison

Le schéma implicite donne ici une solution plus grande que la solution exacte après un pas, mais il reste **stable**.

---

# 5) Partie II — Schéma d’Euler explicite

Même si vous avez surtout demandé la notation implicite, je résous aussi la deuxième partie de l’exercice.

---

## 5.1 Discrétisation explicite

On prend :

$$\frac{\partial u}{\partial t}(x_j,t_n)\approx \frac{u_j^{n+1}-u_j^n}{\Delta t}$$

et

$$\frac{\partial^2 u}{\partial x^2}(x_j,t_n)\approx \frac{u_{j+1}^n-2u_j^n+u_{j-1}^n}{\Delta x^2}$$

Donc :

$$\frac{u_j^{n+1}-u_j^n}{\Delta t} = \frac{u_{j+1}^n-2u_j^n+u_{j-1}^n}{\Delta x^2}$$

soit

$$u_j^{n+1}=r\,u_{j-1}^n+(1-2r)u_j^n+r\,u_{j+1}^n$$

avec

$$r=\frac{\Delta t}{\Delta x^2}=25\Delta t$$

---

## 5.2 Forme matricielle

$$\boxed{ U^{n+1}=B\,U^n }$$

avec

$$\boxed{ B= \begin{pmatrix} 1-2r & r & 0 & 0\\ r & 1-2r & r & 0\\ 0 & r & 1-2r & r\\ 0 & 0 & r & 1-2r \end{pmatrix} }$$

---

## 5.3 Après une itération

Au premier pas :

$$\boxed{ U^1=B\,U^0 }$$

Comme précédemment, le vecteur initial est un mode propre, donc :

$$\boxed{ U^1= \left[1-25\Delta t\left(2-2\cos(\pi/5)\right)\right]U^0 }$$

La solution exacte reste :

$$U_{\text{exact}}^1=e^{-\pi^2\Delta t}U^0$$

---

## 5.4 Si $\Delta t=0.1$

Alors $r=2.5$, donc

$$B= \begin{pmatrix} -4 & 2.5 & 0 & 0\\ 2.5 & -4 & 2.5 & 0\\ 0 & 2.5 & -4 & 2.5\\ 0 & 0 & 2.5 & -4 \end{pmatrix}$$

Le facteur numérique explicite vaut :

$$1-2.5\left(2-2\cos(\pi/5)\right)\approx 0.0451$$

donc

$$U^1_{\text{exp}} \approx 0.0451\,U^0 \approx \begin{pmatrix} 0.0265\\ 0.0429\\ 0.0429\\ 0.0265 \end{pmatrix}$$

alors que la solution exacte vaut toujours :

$$U^1_{\text{exact}} \approx \begin{pmatrix} 0.2191\\ 0.3545\\ 0.3545\\ 0.2191 \end{pmatrix}$$

> [!danger] Instabilité
> 
> En plus, la condition de stabilité explicite est :
> 
> $$r\le \frac12$$
> 
> or ici :
> 
> $$r=2.5>\frac12$$
> 
> Donc le schéma explicite est **instable** pour $\Delta t=0.1$.

---

# 6) Réponse finale compacte

## Schéma implicite demandé avec votre notation

$$\boxed{ \frac{u_j^n-u_j^{n-1}}{\Delta t} = \frac{u_{j+1}^n-2u_j^n+u_{j-1}^n}{\Delta x^2}, \qquad j=1,\dots,4 }$$

avec $\Delta x=1/5$, donc $r=25\Delta t$, et

$$\boxed{ -r\,u_{j-1}^n+(1+2r)u_j^n-r\,u_{j+1}^n=u_j^{n-1} }$$

sous forme matricielle :

$$\boxed{ \begin{pmatrix} 1+2r & -r & 0 & 0\\ -r & 1+2r & -r & 0\\ 0 & -r & 1+2r & -r\\ 0 & 0 & -r & 1+2r \end{pmatrix} \begin{pmatrix} u_1^n\\u_2^n\\u_3^n\\u_4^n \end{pmatrix} = \begin{pmatrix} u_1^{n-1}\\u_2^{n-1}\\u_3^{n-1}\\u_4^{n-1} \end{pmatrix} }$$

avec

$$U^0= \begin{pmatrix} \sin(\pi/5)\\ \sin(2\pi/5)\\ \sin(3\pi/5)\\ \sin(4\pi/5) \end{pmatrix}$$

et la solution exacte :

$$\boxed{ u(x,t)=\sin(\pi x)e^{-\pi^2 t} }$$