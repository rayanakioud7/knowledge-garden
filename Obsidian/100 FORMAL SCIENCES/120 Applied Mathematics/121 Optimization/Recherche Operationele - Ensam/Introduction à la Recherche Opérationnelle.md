
Date: 2026-09-27
Tags: [[Recherche Opérationnelle]], [[Optimization]], [[Mathematical Modeling]], [[ENSAM]], [[Algorithms]]



---

# Introduction à la Recherche Opérationnelle (R.O.)

> [!info] Définition de la Recherche Opérationnelle
> La Recherche Opérationnelle (R.O.) est une approche scientifique et une discipline qui utilise des méthodes mathématiques, statistiques et algorithmiques pour résoudre des problèmes de gestion de systèmes complexes.
> Son but est d'aider les organisations à prendre des décisions efficaces en modélisant des situations réelles pour minimiser ou maximiser des critères spécifiques (coût, temps, ressources).
> 
> 

---

## 1. Modélisation Mathématique : Le Voyageur de Commerce (TSP)

Pour comprendre la R.O., il faut comprendre comment traduire un problème physique en équations mathématiques.

**Le Problème :** Un étudiant doit visiter 3 campus universitaires (A, B, C) en partant d'un aéroport P, sans visiter la même ville deux fois, et en minimisant la distance totale.

| Ville (Départ/Arrivée) | P | A | B | C |
| --- | --- | --- | --- | --- |
| **P (1)** | - | 30 | 38 | 73 |
| **A (2)** | 35 | - | 18 | 53 |
| **B (3)** | 32 | 19 | - | 51 |
| **C (4)** | 79 | 50 | 59 | - |
| *(Tableau des distances de vol inter-aéroports $a_{i,j}$)*<br> |  |  |  |  |

### Définition des Variables de Décision Binaire

Nous définissons une variable binaire $x_{i,j}$ qui indique si le trajet direct entre la ville $i$ et la ville $j$ est emprunté :

$$x_{i,j} \in \{0, 1\}, \quad \forall i, j \in \{1, 2, 3, 4\}$$

### Construction du Modèle

La modélisation exige de traduire les contraintes physiques en contraintes algébriques.

> [!abstract] Le Modèle Mathématique
> **1. Fonction Objectif (Ce que l'on veut minimiser) :**
> La distance totale du parcours.
> 
> 
$$\min \sum_{i=1}^{4} \sum_{j=1}^{4} x_{i,j} a_{i,j}$$
> **2. Contrainte d'anti-boucle locale :**
> On ne peut pas voyager d'une ville vers elle-même.
> 
> 
$$x_{i,i} = 0, \quad \forall i \in \{1, \dots, 4\}$$
> **3. Contrainte d'unicité d'arrivée :**
> Chaque ville ne doit être visitée qu'une seule fois comme point d'arrivée.
> 
> 
$$\sum_{i=1}^{4} x_{i,j} = 1, \quad \forall j \in \{1, \dots, 4\}$$
> **4. Contrainte d'unicité de départ :**
> La même ville ne peut être la source d'un trajet qu'une seule fois.
> 
> 
$$\sum_{j=1}^{4} x_{i,j} = 1, \quad \forall i \in \{1, \dots, 4\}$$
> **5. Élimination des sous-tours (Déplacements déconnectés) :**
> On interdit les allers-retours directs entre deux villes (ex: $x_{1,2} = 1$ et $x_{2,1} = 1$) pour forcer un circuit global unique.
> 
> 
$$x_{i,j} + x_{j,i} \le 1, \quad \forall i, j \in \{1, \dots, 4\}$$

---

## 2. Domaines d'Application en Ingénierie

La R.O. s'applique partout où les ressources sont limitées et les combinaisons de décisions sont trop vastes pour être calculées manuellement.

### A. Planification et Ordonnancement

* **Emplois du temps :** Planifier $n$ cours en un minimum de temps. On utilise des *graphes d'exclusion mutuelle* où une arête relie deux cours (nœuds) qui partagent un prof ou une classe, signifiant qu'ils ne peuvent avoir lieu en parallèle.


* **Centres d'appels :** Optimiser l'affectation des jours de congé pour 2500 téléconseillers en respectant la courbe de demande d'appels et les contraintes légales des contrats (minimisation des coûts salariaux).


* **Ordonnancement :** Gérer les tâches d'un chantier (Gantt) ou les passages de pièces sur les machines dans un atelier de production.



> ![[Pasted image 20260927230652.png]]
> *(Graphe d'exclusion mutuelle pour la modélisation des conflits d'emploi du temps)*
> 

### B. Transport et Logistique (Router et Relier)

* **Réseaux et Télécoms :** Acheminement des paquets de données, architecture des réseaux mobiles, et câblage.


* **Calcul d'itinéraires GPS :** Calculer le plus court chemin en temps réel (ex: $1/10^{\text{ème}}$ de seconde de temps de calcul disponible, avec des données de trafic actualisées toutes les 5 minutes).


* **Distribution :** Optimisation des tournées de véhicules (VRP - Vehicle Routing Problem), distribution depuis les entrepôts, et ramassage scolaire.



### C. Emballage et Rangement (Bin Packing)

* **Problème de Bin Packing :** Déterminer la disposition idéale pour placer un ensemble d'objets de tailles différentes dans un minimum de boîtes de taille fixe, afin de minimiser l'espace perdu.


* **Application industrielle :** Chargement optimal de conteneurs sur des bateaux de fret (optimisation 2D et 3D).



> ![[Pasted image 20260927230726.png]]
> *(Exemple visuel d'optimisation d'emballage : placer plusieurs objets dans des "boîtes" pour minimiser l'espace vide)*
> 

### D. Problèmes d'Affectation (Mariages Stables)

* **Le problème des Mariages Stables :** Étant donné $n$ entités d'un type A et $n$ entités d'un type B avec des listes de préférences croisées, trouver une association où aucune paire ne préférerait se mettre ensemble plutôt que de rester avec leur affectation actuelle.


* **Applications concrètes :** Affectation des élèves aux écoles d'ingénieurs, attribution des médecins internes aux hôpitaux, dons d'organes.



---

## Conclusion

> [!abstract] Le Principe Fondamental de la R.O.
> La Recherche Opérationnelle consiste à **faire le mieux possible** (minimiser le coût, maximiser le profit, trouver le chemin le plus rapide) **sous la contrainte de ressources limitées** (temps machine, budget, personnel, mémoire).
> 
> 

---

# ~={red}References=~

*01-Introduction.pdf, Pr. Abdessamad Kamouss, ENSAM Casablanca* (p. 1-32)
