Date: 2026-03-06
Tags: [[UML]]

# Diagramme de Séquence

> [!abstract] Définition & Rôle
> Le **Diagramme de Séquence** est un diagramme *comportemental*. Contrairement au diagramme de classes (statique), il décrit la **dynamique** du système : l'enchaînement chronologique des interactions (messages) entre les objets et les acteurs pour réaliser un scénario précis d'un *Use Case* (nominal, alternatif ou d'exception). 
> **Règle d'or :** Le temps s'écoule toujours de haut en bas.

## 1. Éléments Visuels Fondamentaux

![[Pasted image 20260306014447.png]]
### A. Ligne de vie (Lifeline)
* **Représentation** : Un rectangle (en haut) contenant le nom du participant (`nomObjet : nomClasse` ou Acteur) prolongé d'une ligne verticale en pointillés.
* **Rôle** : Montre l'existence et la durée de vie du participant pendant le scénario.
* **Bonne pratique** : Placer les acteurs à gauche, et ordonner les objets du système de gauche à droite selon la logique du flux pour éviter que les flèches ne se croisent.
* ![[Pasted image 20260306014531.png]]

### B. Barre d'Activation (Focus de contrôle)
* **Représentation** : Un fin rectangle vertical superposé sur la ligne de vie.
* **Rôle** : Indique la période précise pendant laquelle l'objet est actif (il exécute une opération ou traite un message).
* **Imbrication** : Une barre peut en contenir d'autres (ex: appels récursifs ou appels successifs à d'autres méthodes en attendant une réponse).
* ![[Pasted image 20260306014548.png]]

---

## 2. Typologie des Messages

Les messages matérialisent les appels de méthodes, les retours de valeurs ou les signaux. 

| Type de Message | Flèche | Comportement | Cas d'usage typique |
| :--- | :---: | :--- | :--- |
| **Synchrone** | ➔ (Pleine) | **Bloquant**. L'émetteur attend la fin de l'exécution du récepteur pour continuer. | Appel classique de méthode orientée objet. |
| **Asynchrone** | 🡪 (Ouverte) | **Non-bloquant**. L'émetteur continue son exécution sans attendre la réponse. | Traitements parallèles, événements, microservices. |
| **Retour** | ⇠ (Pointillée) | Restitution du contrôle ou d'une valeur à l'appelant. | Fin d'un traitement synchrone (souvent implicite). |
| **Création** | ➔ (Pleine) | Pointe directement sur la boîte d'en-tête d'une nouvelle ligne de vie. | Instanciation dynamique (`new Objet()`). |
| **Destruction** | ➔ (Pleine) | Se termine par une croix (`X`) sur la ligne de vie. | Fin de vie de l'objet, libération mémoire. |
| **Réflexif** | ⮎ (Boucle) | L'objet s'envoie un message à lui-même. | Appel d'une méthode interne (`this.methode()`). |
![[Pasted image 20260306014704.png]]

---

## 3. Les Fragments Combinés (Structures de contrôle)

Pour éviter d'avoir des diagrammes purement linéaires, UML utilise des **Fragments Combinés** (des cadres rectangulaires) pour introduire de la logique algorithmique (conditions, boucles) directement dans la séquence.


### A. Alternatives et Conditions
* **`alt` (Alternative)** : L'équivalent du **`if / else`**. Le cadre est divisé en plusieurs zones (opérandes) séparées par des pointillés. Chaque zone possède une condition (garde) entre crochets `[condition]`. Une seule branche est exécutée.
* **`opt` (Optionnel)** : L'équivalent d'un **`if` seul**. Le cadre ne contient qu'une seule zone. L'interaction ne s'exécute que si la condition est vraie.
* ![[Pasted image 20260306014858.png]]

### B. Boucles et Interruptions
* **`loop` (Boucle)** : L'équivalent d'un **`while` ou `for`**. Répète les messages contenus tant que la condition `[garde]` est vraie ou pour un nombre d'itérations défini (ex: `[Pour chaque article]`).
* **`break` (Interruption)** : Provoque une sortie anticipée (sortie de boucle ou abandon de scénario). Si la condition du `break` est remplie, son contenu est exécuté, puis le reste du diagramme global est ignoré. Idéal pour modéliser les exceptions et erreurs critiques.
* ![[Pasted image 20260306014830.png]]


## ~={red}References=~
