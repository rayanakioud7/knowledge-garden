Date: 2026-02-24

Tags: [[Probability Theory]], [[Data Science]], [[Processus Stochastiques]], [[Markov Chain]], [[Mathematics]]

# CH1: Définitions Fondamentales

> [!NOTE] Propriété de Markov
> 
> Un processus stochastique $\{X_n, n \in \mathbb{N}\}$ à temps discret et espace d'états $S$ dénombrable vérifie la **propriété de Markov** si l'état futur ne dépend que de l'état présent, et non du passé.
> 
> $$P(X_{n+1} = j \mid X_n = i, X_{n-1} = i_{n-1}, \dots, X_0 = i_0) = P(X_{n+1} = j \mid X_n = i)$$

## Chaîne Homogène

Une chaîne est dite **homogène** si les probabilités de transition ne dépendent pas du temps $n$ :

$$P(X_{n+1}=j \mid X_n=i) = P(X_1=j \mid X_0=i) = p_{ij}$$

---

# CH2: Matrices de Transition

La matrice de transition $P = (p_{ij})$ rassemble les probabilités de passer de l'état $i$ à l'état $j$ en une étape.

## Propriétés

~={red}1. =~ $p_{ij} \geq 0$ pour tout $(i,j)$.

~={red}2. =~ $\sum_{j \in S} p_{ij} = 1$ (La somme de chaque ligne vaut 1).

~={red}3. =~ **Chapman-Kolmogorov** : La probabilité de passer de $i$ à $j$ en $n$ étapes est donnée par l'élément $(i,j)$ de la matrice $P$ élevée à la puissance $n$.

$$P^{(n)} = P^n$$

$$p_{ij}^{(n+m)} = \sum_{k \in S} p_{ik}^{(n)} p_{kj}^{(m)}$$

---

# CH3: Classification des États

On associe à la chaîne un **Graphe Représentatif** $G=(V,E)$ où les sommets sont les états et les arcs représentent les transitions possibles ($p_{ij} > 0$).

> [!NOTE] Relation de Communication
> 
> - **Accessible :** $j$ est accessible depuis $i$ ($i \to j$) s'il existe un chemin de $i$ à $j$ (il existe $n$ tel que $p_{ij}^{(n)} > 0$).
>     
> - **Communiquent :** $i$ et $j$ communiquent ($i \leftrightarrow j$) si $i \to j$ et $j \to i$.
>     
> - **Classe :** L'ensemble des états qui communiquent entre eux forme une **classe** (composante fortement connexe).
>     

## Types d'États

~={red}1. =~ **État Transitoire :** Un état est transitoire s'il existe une probabilité non nulle de quitter cet état pour ne jamais y revenir (le système peut "fuir" la classe).

~={red}2. =~ **État Récurrent (Persistant) :** Un état est récurrent si, partant de cet état, la probabilité d'y revenir un jour est de 1. Une classe fermée (sans sortie vers l'extérieur) est récurrente.

~={red}3. =~ **État Absorbant :** Un état $i$ est absorbant si $p_{ii} = 1$ (une fois entré, on n'en sort plus). Il forme une classe récurrente à lui seul.

## Périodicité

La **période** $d(i)$ d'un état $i$ est le PGCD des longueurs de tous les cycles revenant à $i$.

$$d(i) = PGCD \{ n \geq 1 \mid p_{ii}^{(n)} > 0 \}$$

- Si $d(i) = 1$, l'état est **apériodique**. 
- Si $p_{ii} > 0$ (boucle sur lui-même), l'état est forcément **apériodique**.
- Tous les états d'une même classe ont la même période.


---

# CH4: Comportement Asymptotique

On s'intéresse à la distribution de probabilité $\pi^{(n)}$ après un grand nombre d'étapes.

$$
\pi^{(n)}=\pi^{(n-1)}P
$$
$$\pi^{(n)} = \pi^{(0)} P^n$$

## Distribution Stationnaire (Invariante / Régime permanent) 

Une distribution $\pi$ est stationnaire si elle ne change pas après application de la matrice de transition :

on résoudre: $\pi^* \cdot M = \pi^*$

$$\pi^* = \pi^* P \quad \text{et} \quad \sum_i \pi^*_i = 1$$
$$
\pi^* \cdot M = \pi^* \Leftrightarrow (\pi^*_0 ... \pi^*_n)\cdot \begin{pmatrix} a_{11} & a_{12} & ...&a_{1n} \\ a_{21} & a_{22} &... &a_{2n}\\ \vdots & \vdots & \ddots &\vdots \\ a_{n1} & a_{n2} & ...&a_{nn} \end{pmatrix} = \begin{pmatrix} \pi^*_0 \\ \vdots \\ \pi^*_n \end{pmatrix}
$$
$$
\begin{cases}
  a_{11}\pi^*_0+ \ldots +a_{n1}\pi^*_n=\pi^*_0 \\
  \vdots\\
    a_{1n}\pi^*_0+ \ldots +a_{nn}\pi^*_n=\pi^*_n \\
\end{cases}
$$
## Théorème Ergodique

Si une chaîne est **Irréductible** (une seule classe) et **Apériodique**, alors elle est **Ergodique**.

~={red}1. =~ Elle admet une **unique** distribution stationnaire $\pi^*$.

~={red}2. =~ La chaîne converge vers cette distribution quel que soit l'état initial :

$$P^*=\lim_{n \to \infty} P^n = \begin{pmatrix} \pi^* \\ \vdots \\ \pi^* \end{pmatrix}$$

~={red}3. =~ $\pi^*_i = \frac{1}{\mu_i}$ où $\mu_i$ est le temps moyen de retour en $i$.


> [!NOTE]
> 
> 1. "La chaîne est irréductible"
> 2. "La chaîne est apériodique"
> 3. **Conclusion :** "Donc il existe un régime permanent unique $\pi^*$".
> 
> Gardez bien ce schéma en tête pour demain :
> 
> `Irréductible + Apériodique` $\implies$ `Ergodique` $\implies$ `Régime permanent UNIQUE et indépendant du départ`.

---

# CH5: Chaînes Réductibles et Absorbantes

Une chaîne est réductible si elle contient plusieurs classes (mélange d'états transitoires et récurrents/absorbants).

## Forme Canonique

On réorganise les états de la matrice $P$ en plaçant d'abord les états transitoires ($Q$), puis les états récurrents/absorbants ($R$).

$$P = \left( \begin{array}{c|c} I & 0 \\ \hline R & Q \end{array} \right)$$

_(Note: Dans votre PDF page 60/65, l'ordre est parfois inversé ou noté différemment, mais la structure bloc est standard : $Q$ correspond aux transitions entre transitoires, $R$ des transitoires vers les absorbants)._

Si la chaîne est absorbante (tous les états récurrents sont absorbants), la matrice s'écrit :

- $Q$ : Matrice de transition entre états transitoires.
    
- $R$ : Matrice de transition des transitoires vers les absorbants.
    
- $I$ : Matrice identité (pour les états absorbants).
    

## Matrice Fondamentale

![[Pasted image 20260226224953.png]]

La matrice fondamentale $N$ capture la dynamique dans la partie transitoire avant absorption.

$$N = (I - Q)^{-1}$$

**Interprétation :** L'élément $n_{ij}$ de $N$ représente le **nombre moyen de passages** par l'état transitoire $j$ avant absorption, en partant de l'état $i$.

## Calculs Clés (Absorption)

~={red}1. =~ **Temps moyen avant absorption :**

Si on part d'un état transitoire $i$, le nombre total de pas avant d'être absorbé est la somme de la $i$-ème ligne de $N$.

$$t = N \times \mathbf{1}$$

_(où $\mathbf{1}$ est un vecteur colonne de 1)_

~={red}2. =~ **Probabilités d'absorption :**

La probabilité $b_{ij}$ de finir absorbé par l'état absorbant $j$, sachant qu'on part de l'état transitoire $i$, est donnée par la matrice $B$ :

$$B = N \times R$$

## Exemple Complet : Roulette Française (Reconstruit du PDF p.67-70)

> [!EXAMPLE] Exemple
> 
> Vous misez 1 jeton sur une chance simple (Rouge/Noir). Vous arrêtez si vous arrivez à 0 (Ruine) ou 6 jetons (Gain cible). Vous commencez avec 3 jetons.
> 
> **États :** $\{0, 1, 2, 3, 4, 5, 6\}$.
> 
> **Absorbants :** $\{0, 6\}$.
> 
> **Transitoires :** $\{1, 2, 3, 4, 5\}$.
> 
> **Matrice Fondamentale Calculée ($N$) :**
> 
> $$N = (I-Q)^{-1} \approx \begin{pmatrix}
> 
> 1.67 & 1.30 & 0.91 & 0.61 & 0.69 \
> 
> 1.37 & 2.66 & 1.91 & 1.26 & 0.61 \
> 
> 1.05 & 2.05 & 2.99 & 1.94 & 0.94 \
> 
> 0.72 & 1.40 & 2.05 & 2.66 & 1.37 \
> 
> 0.36 & 0.68 & 0.97 & 1.29 & 1.63
> 
> \end{pmatrix}$$
> 
> _(Valeurs approximatives extraites du PDF)_
> 
> **Probabilités d'Absorption ($B = NR$) :**
> 
> Partant de 3 jetons (ligne centrale) :
> 
> - Probabilité de Ruine (vers 0) : $0.54$
>     
> - Probabilité de Gain (vers 6) : $0.46$

---
# CH 6: Processus Décisionnel de Markov (MDP)

L'incertitude dans le monde réel (robotique, allocation de ressources, agriculture) rend l'hypothèse d'un successeur déterministe irréaliste. Une action peut conduire à plusieurs états possibles de manière stochastique.


> [!NOTE] Définition d'un MDP
> 
> Un Processus de Décision Markovien (MDP) modélise un environnement stochastique où un agent prend des décisions. Il est défini par :
> 
> 1. Un ensemble d'états $S$ (incluant un état initial $s_0$). 2. Un ensemble d'actions possibles $Actions(s)$ pour chaque état $s$. 3. Un modèle de transition stochastique $P(s' \mid s, a)$, représentant la probabilité d'atteindre l'état $s'$ en effectuant l'action $a$ depuis $s$. 4. Une fonction de récompense $R(s)$ indiquant l'utilité d'être dans l'état $s$.
> 

## Politique (Plan) et Valeur

Une décision dans un MDP ne consiste pas à trouver un chemin unique, mais à définir une stratégie globale.


- Une **politique** (ou plan) $\pi$ est un ensemble de règles du type _« if state then action »_.
    
- L'application d'un plan $\pi$ dans un MDP génère une Chaîne de Markov dont le modèle de transition est $P(s' \mid s, \pi(s))$.
    
- La **valeur d'un plan** $V(\pi, s)$ est l'espérance des récompenses accumulées en suivant le plan $\pi$ depuis l'état $s$.
    

L'équation récursive de la valeur d'un plan s'écrit:

$$V(\pi, s) = R(s) + \gamma \sum_{s' \in S} P(s' \mid s, \pi(s)) V(\pi, s')$$

- Le facteur d'escompte $\gamma \in [0, 1[$ détermine l'importance relative des récompenses futures.
    
    
- Un $\gamma$ proche de 0 conduit à une évaluation "myope", tandis qu'un $\gamma$ proche de 1 est "prévoyant".
    

---

# CH 7: Résolution d'un MDP (Offline)

Un plan optimal $\pi^*$ est un plan qui n'est dominé par aucun autre. Pour le trouver, on s'appuie sur les équations de Bellman.


> [!IMPORTANT] Équation d'Optimalité de Bellman
> 
> La valeur optimale $V^*(s)$ vérifie l'équation:
> 
> $$V^*(s) = R(s) +\gamma \max_a  \sum_{s' \in S} P(s' \mid s, a) V^*(s')$$

## Algorithmes de Résolution

~={red}1. =~ **Itération par Valeurs (Value Iteration)** Cet algorithme met à jour itérativement la valeur de chaque état jusqu'à convergence.


- Initialisation : $V(s) \leftarrow 0$ pour tout $s$.
    
- Mise à jour : $V^{(i)}(S) \leftarrow R(S) + \gamma \max_a \left( \sum_{S'} P(S'|S, a) \cdot V^{(i-1)}(S') \right)$.
    
- plan d'action (Politique/policy) finale : $\pi(s) = \arg\max_a \sum_{s'} P(s' \mid s, a) V(s')$.
    

~={red}2. =~ **Itération par Politiques (Policy Iteration)** On alterne entre l'évaluation d'une politique et son amélioration.


- Évaluation : Résoudre le système linéaire $V(\pi, s) = R(s) + \gamma \sum_{s'} P(s' \mid s, \pi(s)) V(\pi, s')$ pour la politique courante.
    
- Amélioration : Mettre à jour $\pi'(s)$ si une action donne une meilleure espérance de valeur.
    

---

# CH 8: Apprentissage par Renforcement (RL)

Contrairement aux MDP (résolution offline avec un modèle connu), l'apprentissage par renforcement est online. L'agent ne connaît ni $P(s' \mid s, a)$ ni $R(s)$ et doit apprendre en expérimentant dans l'environnement (essais/erreurs).


## I. RL Passif

L'agent suit une politique fixe $\pi$ et cherche uniquement à estimer la fonction de valeur $V(s)$.

~={red}1. =~ **Estimation Directe**

- L'agent calcule la moyenne empirique des récompenses observées à partir d'un état lors des essais.
    
- Inconvénient : Cette méthode ignore la relation récursive (équations de Bellman) entre les états voisins.
    

~={red}2. =~ **Programmation Dynamique Adaptative (ADP)**

- L'agent apprend le modèle de transition empirique $P(s' \mid s, \pi(s))$ en comptant les fréquences des transitions observées.
    
    
- Formule : $P(s' \mid s, \pi(s)) = \frac{\text{Nb transitions } s \to s'}{\text{Nb visites de } s}$.
    
- Il résout ensuite le MDP avec ce modèle estimé.
    

~={red}3. =~ **Apprentissage par Différence Temporelle (TD Learning)**

- Mise à jour incrémentale de $V(s)$ à chaque transition observée, sans attendre la fin de l'essai.
    
    
- Règle de mise à jour avec taux d'apprentissage $\alpha$:
    
    
    $$V(s) \leftarrow V(s) + \alpha \left( R(s) + \gamma V(s') - V(s) \right)$$
    

## II. RL Actif

L'agent ne connaît pas la politique optimale et doit simultanément l'explorer et l'apprendre.

~={red}1. =~ **ADP Actif**

- L'agent estime $P(s' \mid s, a)$ pour toutes les actions à l'aide des fréquences.
    
- Il utilise _Value Iteration_ sur ce modèle empirique pour extraire la meilleure politique courante.
    

---

# CH 9: Q-Learning et MRP

## 1. Q-Learning (RL Actif sans modèle)

Le Q-learning évite d'avoir à apprendre la matrice de probabilités $P(s' \mid s, a)$ en apprenant directement une fonction action-valeur $Q(s,a)$.


- $Q(s,a)$ représente l'espérance de la somme des récompenses en partant de $s$, en exécutant $a$, puis en suivant la politique optimale.
    
- Le lien fondamental est : $V(s) = \max_a Q(s,a)$.
    
- La politique optimale est directement extraite par : $\pi(s) = \arg\max_a Q(s,a)$.
    

> [!NOTE] Mise à jour Q-Learning
> 
> À chaque transition $(s, a, s', R(s))$ observée, on met à jour la valeur $Q$:
> 
> $$Q(s,a) \leftarrow Q(s,a) + \alpha \left( R(s) + \gamma \max_{a'} Q(s', a') - Q(s,a) \right)$$

## 2. Processus de Récompense de Markov (MRP)

Un MRP est une chaîne de Markov avec des récompenses, sans prise de décision (équivalent à un MDP où la politique est fixe).

- La récompense totale actualisée $G_t$ est : $G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$.
    
- L'équation de Bellman matricielle s'écrit : $v = \mathcal{R} + \gamma \mathcal{P} v$.
    
    

**Résolution directe d'un MRP :** Puisque l'équation est linéaire, elle peut être résolue algébriquement:

$$v = (I - \gamma \mathcal{P})^{-1} \mathcal{R}$$

- La complexité de l'inversion de matrice est de $O(n^3)$.
    
- Cette approche analytique n'est réalisable que pour des espaces d'états de petite taille. Pour de grands systèmes, on privilégie les méthodes itératives (Monte-Carlo, Différence Temporelle).