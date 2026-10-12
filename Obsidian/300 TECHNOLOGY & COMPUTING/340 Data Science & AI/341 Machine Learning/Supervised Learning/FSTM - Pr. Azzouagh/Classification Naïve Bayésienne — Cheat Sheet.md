Date: 2026-04-21
Tags: [[Mathematics]], [[Data Science]], [[Machine Learning]], [[Supervised Learning]]

---

## 1) Concepts Théoriques

> La classification naïve bayésienne est un type de classification **probabiliste simple** basée sur le **théorème de Bayes** avec une **indépendance forte (dite naïve)** des hypothèses.

**Hypothèse clé :** L'existence d'une caractéristique pour une classe est **indépendante** de l'existence des autres caractéristiques — même si en réalité elles sont liées.

> **Exemple :** Un classifieur bayésien naïf déterminera qu'un fruit est une pomme en considérant **indépendamment** la couleur, la forme et la taille.

Selon la nature du modèle probabiliste, les classifieurs bayésiens naïfs peuvent être entraînés efficacement dans un contexte d'**apprentissage supervisé**.

---

## 2) Fondements Mathématiques

### Théorème de Bayes

$$P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)}$$

### 2ème Formule de Bayes (Probabilité Totale)

$$P(A_i \mid B) = \frac{P(B \mid A_i) \cdot P(A_i)}{\sum_{j=1}^{n} P(B \mid A_j) \cdot P(A_j)}$$

---

## 3) Modèle Probabiliste du Classifieur

Le modèle probabiliste pour un classifieur est le **modèle conditionnel** :

$$P(C = c_k \mid x_1, x_2, \ldots, x_p), \quad k \in \{1, \ldots, d\}$$

Où :
- $C$ est la **variable de classe dépendante** (à prédire)
- Ses instances ou classes sont $(c_1, \ldots, c_d)$
- Conditionnée par plusieurs variables **"explicatives"** $x_1, \ldots, x_p$

### Formule du modèle conditionnel

$$P(C = c_k \mid X_1=x_1, X_2=x_2, \ldots, X_p=x_p) = \frac{P(C = c_k) \cdot \prod_{i=1}^{p} P(X_i=x_i \mid C = c_k)}{P(X_1=x_1, X_2=x_2, \ldots, X_p=x_p)}$$

> ⚠️ On ne considère que le **numérateur**, car le dénominateur est une constante (évidence) qui ne change pas la comparaison entre classes.

---

## 4) Dérivation de l'Hypothèse d'Indépendance Naïve (Démonstration)

En appliquant le théorème de Bayes :

$$\begin{align}
P(C=c_k \mid X_1=x_1, &X_2=x_2, \ldots, X_p=x_p) =\\
&\frac{P(X_1=x_1, X_2=x_2, \ldots, X_p=x_p \mid C=c_k) \cdot P(C=c_k)}{P(X_1=x_1, X_2=x_2, \ldots, X_p=x_p)}
\end{align}$$

On va considérer le **numérateur** puisque le dénominateur vérifie déjà la formule (constante). On développe :

$$P(C=c_k) \cdot P(X_1=x_1, X_2=x_2, \ldots, X_p=x_p \mid C=c_k)$$

Par la **règle de la chaîne** (probabilité conditionnelle successive) :

$$= P(C=c_k) \cdot P(X_1=x_1 \mid C=c_k) \cdot P(X_2=x_2, \ldots, X_p=x_p \mid X_1=x_1, C=c_k)$$

On développe encore le deuxième facteur :

$$\begin{align}= &P(C=c_k) \cdot P(X_1=x_1 \mid C=c_k) \cdot \\&P(X_2=x_2 \mid X_1=x_1, C=c_k) \cdot P(X_3=x_3, \ldots, X_p=x_p \mid X_1=x_1, X_2=x_2, C=c_k)\end{align}$$

On continue le développement jusqu'au dernier terme :

$$\begin{align}= &P(C=c_k) \cdot P(X_1=x_1 \mid C=c_k) \cdot P(X_2=x_2 \mid X_1=x_1, C=c_k) \cdot \\&P(X_3=x_3 \mid X_1=x_1, X_2=x_2, C=c_k) \cdots P(X_p=x_p \mid X_1=x_1, \ldots, X_{p-1}=x_{p-1}, C=c_k)\end{align}$$

Grâce à l'**hypothèse d'indépendance naïve** : chaque variable $X_i$ est conditionnellement indépendante de toutes les autres variables $X_j$ ($j \neq i$) sachant la classe $C = c_k$ :

$$P(X_i = x_i \mid X_1=x_1, \ldots, X_{i-1}=x_{i-1}, C=c_k) = P(X_i=x_i \mid C=c_k)$$

Ce qui simplifie chaque terme de la chaîne :

$$P(X_2=x_2 \mid X_1=x_1, C=c_k) = P(X_2=x_2 \mid C=c_k)$$
$$P(X_3=x_3 \mid X_1=x_1, X_2=x_2, C=c_k) = P(X_3=x_3 \mid C=c_k)$$
$$\vdots$$
$$P(X_p=x_p \mid X_1=x_1, \ldots, X_{p-1}=x_{p-1}, C=c_k) = P(X_p=x_p \mid C=c_k)$$

On substitue toutes ces simplifications :

$$\begin{align}=& P(C=c_k) \cdot P(X_1=x_1 \mid C=c_k) \cdot P(X_2=x_2 \mid C=c_k) \cdot \\&P(X_3=x_3 \mid C=c_k) \cdots P(X_p=x_p \mid C=c_k)\end{align}$$

Ce qui s'écrit de manière compacte :

$$= P(C=c_k) \cdot \prod_{i=1}^{p} P(X_i=x_i \mid C=c_k)$$

Le dénominateur $P(X_1=x_1, \ldots, X_p=x_p)$ étant une **constante** (évidence) identique pour toutes les classes, il ne change pas le $\arg\max$, donc on obtient le résultat final :

$$\boxed{P(C = c_k \mid X_1=x_1, \ldots, X_p=x_p) = P(C = c_k) \cdot \prod_{i=1}^{p} P(X_i=x_i \mid C = c_k)}$$

---

## 5) Règle de Décision

On choisit la classe correspondant à la **valeur la plus élevée** de $P(C = c_k \mid x_1, \ldots, x_p)$.

$$\hat{C} = \underset{k}{\arg\max} \; P(C = c_k) \cdot \prod_{i=1}^{p} P(x_i \mid C = c_k)$$

---

## 6) Cas des Variables Quantitatives

> On cherche à classifier chaque personne en tant qu'individu du sexe **Masculin** ou **Féminin**, selon les caractéristiques mesurées : **Taille, Poids, Pointure**.

### Données d'entraînement

| Sexe | Taille | Poids | Pointure |
|------|--------|-------|----------|
| M    | 182    | 81,6  | 30       |
| M    | 180    | 86,2  | 28       |
| M    | 170    | 77,1  | 30       |
| M    | 180    | 74,8  | 25       |
| F    | 152    | 45,4  | 15       |
| F    | 168    | 68    | 20       |
| F    | 165    | 59    | 18       |
| F    | 175    | 68    | 23       |

### Statistiques calculées par classe

| Statistique       | M       | F       |
|-------------------|---------|---------|
| $E(\text{Taille})$ | 178     | 165     |
| $V(\text{Taille})$ | 29,333  | 92,666  |
| $E(\text{Poids})$  | 79,925  | 60,1    |
| $V(\text{Poids})$  | 25,476  | 114,04  |
| $E(\text{Pointure})$ | 28,25 | 19      |
| $V(\text{Pointure})$ | 5,5833 | 11,333 |

### Distribution Gaussienne utilisée

Le classifieur utilise une **distribution gaussienne** pour modéliser les probabilités des variables continues :

$$f_{k,i}(x) = \frac{1}{\sqrt{2\pi \cdot V_{k,i}}} \cdot \exp\left(-\frac{(x - \mu_{k,i})^2}{2 \cdot V_{k,i}}\right)$$

Où :
- $\mu_{k,i}$ = moyenne de la variable $i$ dans la classe $k$
- $V_{k,i}$ = variance de la variable $i$ dans la classe $k$

---

## 7) Exemple Numérique — Variables Quantitatives

**Test :** Classifier l'individu $(T = 183,\ Pd = 59,\ Pt = 20)$

**Probabilités a priori :**
$$P(F) = 0{,}5 \qquad P(M) = 0{,}5$$

### Calcul des vraisemblances pour la classe M

$$P(T = 183 \mid M) = \frac{1}{\sqrt{2\pi \cdot 29{,}333}} \cdot \exp\!\left(\frac{-(183 - 178)^2}{2 \times 29{,}333}\right) \approx 4{,}840 \times 10^{-2}$$

$$P(Pd = 59 \mid M) = \frac{1}{\sqrt{2\pi \cdot 25{,}476}} \cdot \exp\!\left(\frac{-(59 - 79{,}925)^2}{2 \times 25{,}476}\right) \approx 1{,}4646 \times 10^{-5}$$

$$P(Pt = 20 \mid M) \approx 3{,}8032 \times 10^{-4}$$

$$P(\text{Sexe} = M \mid T=183, Pd=59, Pt=20) = P(M) \cdot P(T|M) \cdot P(Pd|M) \cdot P(Pt|M)$$
$$\approx 0{,}5 \times 4{,}840\times10^{-2} \times 1{,}4646\times10^{-5} \times 3{,}8032\times10^{-4}$$
$$\approx 3{,}34041 \times 10^{-10}$$

### Calcul des vraisemblances pour la classe F

$$P(\text{Sexe} = F \mid T=183, Pd=59, Pt=20) \approx 1{,}58 \times 10^{-5}$$

### Conclusion

$$P(\text{Sexe} = F \mid \cdot) \gg P(\text{Sexe} = M \mid \cdot)$$

> ✅ Comme la proba-postérieure féminine est supérieure à celle masculine, l'échantillon $(183, 59, 20)$ est classifié **Féminin**.

---

## 8) Cas des Variables Qualitatives

### Données d'entraînement

| A | B | C |
|---|---|---|
| m | b | t |
| m | o | t |
| g | q | t |
| g | q | t |
| g | q | p |
| g | b | p |
| k | q | p |
| m | b | p |

**Classes :** $C \in \{t, p\}$ avec $P(C=t) = 0{,}5$ et $P(C=p) = 0{,}5$

### Test : Classifier l'individu $(A=m,\ B=q)$

$$P(C = t \mid A=m, B=q) \propto P(C=t) \cdot P(A=m \mid C=t) \cdot P(B=q \mid C=t)$$

$$P(A = m \mid C = t) = \frac{2}{4} = \frac{1}{2}$$

$$P(B = q \mid C = t) = \frac{2}{4} = \frac{1}{2}$$

$$P(C=t \mid A=m, B=q) \propto \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$$

$$P(C = p \mid A=m, B=q) \propto P(C=p) \cdot P(A=m \mid C=p) \cdot P(B=q \mid C=p)$$

$$P(A = m \mid C = p) = \frac{1}{4}$$

$$P(B = q \mid C = p) = \frac{2}{4} = \frac{1}{2}$$

$$P(C=p \mid A=m, B=q) \propto \frac{1}{2} \times \frac{1}{4} \times \frac{2}{4} = \frac{1}{16} \quad \text{(évidence)}$$

### Conclusion

$$P(C = t \mid A=m, B=q) > P(C = p \mid A=m, B=q)$$

> ✅ La proba-postérieure de $C = t$ est plus élevée que celle de $C = p$ → l'individu est classifié **$C = t$** pour $(A=m,\ B=q)$.

---

## 9) Cas des Variables Mixtes / Mélangées $(x_1, \ldots, x_p)$

> On se ramène au cas des variables qualitatives (précédent) en **discrétisant** les prédicteurs quantitatifs (les variables) en intervalles.

- Plusieurs études montrent que cette approche est la **plus intéressante**.
- **Solution simple :** utiliser les **arbres de décision** pour gérer les intervalles des variables quantitatives.

---

## Résumé — Formules Clés à Retenir

| Concept | Formule |
|---|---|
| Théorème de Bayes | $P(A\|B) = \frac{P(B\|A)\cdot P(A)}{P(B)}$ |
| Règle de décision | $\hat{C} = \arg\max_k\; P(C_k)\prod_{i=1}^p P(x_i\|C_k)$ |
| Vraisemblance Gaussienne | $f(x) = \frac{1}{\sqrt{2\pi V}}\exp\!\left(-\frac{(x-\mu)^2}{2V}\right)$ |
| Indépendance naïve | $P(x_1,\ldots,x_p\|C_k) = \prod_{i=1}^p P(x_i\|C_k)$ |
| Variables qualitatives | $P(x_i\|C_k) = \frac{\text{nb occurrences de }x_i\text{ dans }C_k}{\text{nb total dans }C_k}$ |

> ⚠️ **Rappel important :** On compare toujours les numérateurs — le dénominateur $P(x_1,\ldots,x_p)$ est identique pour toutes les classes et s'annule dans le $\arg\max$.