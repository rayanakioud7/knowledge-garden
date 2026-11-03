---
type: note
date: '2026-10-27'
tags:
- complexite-algorithmique
- notation-de-landau
- algorithmes-de-tri
- ensam
- c_programming
- algorithm
- data-structure
topics:
- '[[Complexité Algorithmique]]'
- '[[Notation de Landau]]'
- '[[Algorithmes de Tri]]'
- '[[ENSAM]]'
- '[[C_Programming]]'
- '[[Algorithm]]'
- '[[Data Structure]]'
---

Date: 2026-10-27
Tags: [[Complexité Algorithmique]], [[Notation de Landau]], [[Algorithmes de Tri]], [[ENSAM]], [[C_Programming]], [[Algorithm]], [[Data Structure]]

---

# Complexité Algorithmique et Algorithmes de Tri

## 1. Fondamentaux de la Complexité

> [!info] Définition : Complexité algorithmique
> La complexité (ou coût) d'un algorithme est le nombre d'opérations fondamentales (arithmétiques, comparaisons, affectations) qu'il effectue sur un ensemble de données de taille $n$. Elle est exprimée comme une fonction de la taille des données : $T(n)$.

> [!abstract] Modélisation : Les trois cas d'analyse
> Soit $D_n$ un ensemble de données de taille $n$ et $C(d)$ le coût sur la donnée $d$.
> - **Pire des cas ($T_{max}$)** : $\max_{d \in D_n} C(d)$. Donne une **garantie** que l'algorithme ne dépassera jamais ce temps. (Le plus utilisé en ingénierie).
> - **Meilleur des cas ($T_{min}$)** : $\min_{d \in D_n} C(d)$. Souvent trompeur car rare en pratique.
> - **Cas moyen ($T_{moy}$)** : Moyenne sur toutes les données. Reflète le comportement général, mais peut masquer des cas extrêmes coûteux.

---

## 2. Notation Asymptotique (Landau)

Pour $n \to \infty$, on cherche l'ordre de grandeur (comportement asymptotique) plutôt que le nombre exact d'opérations.

> [!info] Définition : Les notations O, Ω, Θ
> Soient $f$ et $g$ deux fonctions de $\mathbb{N}$ vers $\mathbb{R}^+$.
> - **Grand O ($O$)** : Borne supérieure asymptotique (Pire cas).
>   $$f(n) = O(g(n)) \iff \exists c \in \mathbb{R}^+, \exists n_0 \in \mathbb{N} \mid \forall n \ge n_0, f(n) \le c \cdot g(n)$$
> - **Omega ($\Omega$)** : Borne inférieure asymptotique (Meilleur cas).
>   $$f(n) = \Omega(g(n)) \iff \exists c \in \mathbb{R}^+, \exists n_0 \in \mathbb{N} \mid \forall n \ge n_0, f(n) \ge c \cdot g(n)$$
> - **Theta ($\Theta$)** : Borne exacte (Cas précis).
>   $$f(n) = \Theta(g(n)) \iff \exists c_1, c_2 \in \mathbb{R}^+, \exists n_0 \in \mathbb{N} \mid \forall n \ge n_0, c_1 g(n) \le f(n) \le c_2 g(n)$$

> [!abstract] Règles d'Or du Big O
> 1. Les constantes multiplicatives sont omises : $O(3n) = O(n)$.
> 2. L'addition prend le maximum : $O(n^2 + n) = O(n^2)$.
> 3. **Règle d'Or :** Pour $n$ très grand, on ne garde que le **terme dominant** et on ignore les constantes.
>    *Exemple :* $f(n) = 4n^3 + 2n^2 + 100 \implies O(n^3)$.

---

## 3. Hiérarchie des Classes de Complexité

> [!warning] Piège / Cas Particulier : La frontière de l'efficacité
> La frontière entre un algorithme utilisable et un algorithme intraitable se situe généralement à la complexité polynomiale $O(n^k)$. Dès que l'on passe à l'exponentiel $O(2^n)$ ou factoriel $O(n!)$, le problème devient **intraitable** pour des valeurs de $n$ modestes.

| Classe | Notation | Description | Exemple Typique |
| :--- | :---: | :--- | :--- |
| **Constante** | $O(1)$ | Indépendant de $n$. Idéal. | Accès tableau `val = t[i]` |
| **Logarithmique** | $O(\log n)$ | Le problème est divisé par une constante à chaque étape. | Recherche Dichotomique |
| **Linéaire** | $O(n)$ | Croissance proportionnelle à $n$. | Parcours séquentiel |
| **Linéarithmique** | $O(n \log n)$ | "Diviser pour régner". Excellent compromis. | Tri Fusion, Tri Rapide (moy.) |
| **Quadratique** | $O(n^2)$ | Deux boucles imbriquées. Lent pour grand $n$. | Tri à bulles, Tri par sélection |
| **Exponentielle** | $O(2^n)$ | Double à chaque ajout de donnée. Inutilisable. | Force brute sur sous-ensembles |

---

## 4. Algorithmes de Tri Classiques

Le tri est une opération fondamentale. La différence entre $O(n^2)$ et $O(n \log n)$ peut transformer un calcul de plusieurs jours en quelques secondes.

### 4.1 Tri par Sélection (Selection Sort)
> [!info] Définition : Principe
> À chaque itération $i$, on recherche l'indice du plus petit élément dans le sous-tableau $[i, n-1]$, puis on l'échange avec l'élément à l'indice $i$.

```c
void tri_selection(int t[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int i_min = minimum(t, i, n - 1); // Recherche du min
        if (i_min != i) echanger(t, i, i_min); // Échange
    }
}
```
> [!abstract] Analyse : Tri par Sélection
> - **Comparaisons :** $\sum_{i=1}^{n-1} (n-i) = \frac{n(n-1)}{2} \implies O(n^2)$
> - **Échanges :** $O(n)$ (au maximum $n-1$ échanges).
> - **Stabilité :** Non stable (l'échange peut changer l'ordre relatif des éléments égaux).

### 4.2 Tri à Bulles (Bubble Sort)
> [!info] Définition : Principe
> On parcourt le tableau en comparant les couples d'éléments successifs. Si deux éléments ne sont pas dans l'ordre croissant, on les échange. Le plus grand élément "remonte" à sa place définitive à chaque passage.

```c
void tri_a_bulle(int t[], int n) {
    for (int i = n - 1; i > 0; i--) {
        for (int j = 0; j < i; j++) {
            if (t[j] > t[j + 1]) echanger(t, j, j + 1);
        }
    }
}
```
> [!abstract] Analyse : Tri à Bulles
> - **Pire cas (tableau trié à l'envers) :** $\frac{n(n-1)}{2}$ comparaisons et échanges $\implies O(n^2)$.
> - **Meilleur cas (tableau déjà trié) :** Si optimisé avec un drapeau (flag) d'arrêt, $O(n)$.
> - **Stabilité :** Stable.

### 4.3 Tableau Comparatif des Tris

> [!example] Synthèse : Comparaison des algorithmes de tri
> | Algorithme | Complexité Moyenne | Pire Cas | Mémoire Auxiliaire | Stable ? |
> | :--- | :---: | :---: | :---: | :---: |
> | **Tri à Bulles** | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Oui |
> | **Tri par Insertion** | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Oui |
> | **Tri Fusion (Merge)** | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ | Oui |
> | **Tri Rapide (Quick)** | $O(n \log n)$ | $O(n^2)$ | $O(\log n)$ | Non |

> [!warning] Piège / Cas Particulier : Choix du tri
> - **Tri Rapide (QuickSort)** est généralement le plus rapide en pratique (cache-friendly, constantes faibles), mais son pire cas $O(n^2)$ existe (tableau déjà trié sans pivot aléatoire).
> - **Tri Fusion (MergeSort)** garantit $O(n \log n)$ dans tous les cas mais nécessite $O(n)$ mémoire supplémentaire.
> - **Tri par Sélection/Insertion** ne doit être utilisé que pour de très petits tableaux ($n < 50$) ou des tableaux presque triés (Insertion).

---
# ~={red}References=~
*Structure de données — Complexité informatique et Algorithmes de Tri — Pr. Yassir MATRANE, Département génie Informatique, ENSAM (2025-2026)*