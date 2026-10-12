Date: 2026-03-05
Tags: [[UML]], [[Genie Logiciel]]

# 📘 Introduction au Génie Logiciel et UML

> [!abstract] Définition
> Le **Génie Logiciel (GL)** regroupe l'ensemble des théories, méthodes, outils et compétences pour concevoir, développer, maintenir et faire évoluer des logiciels. Il gère **tout le cycle de vie** d'un logiciel, pas seulement l'écriture du code.

## 1. Génie Logiciel vs Programmation
* **Programmation** : Activité individuelle centrée sur l'utilisation d'un langage pour produire un résultat technique.
* **Génie Logiciel** : Activité collective et structurée autour d'un projet, suivant une méthodologie rigoureuse pour garantir la qualité, la robustesse et le respect des délais.

### Pourquoi le GL est indispensable ?
* Le coût du logiciel dépasse aujourd'hui celui du matériel.
* La maintenance est la phase la plus coûteuse (60% à 80% du coût total).
* Les logiciels sont intégrés dans des systèmes critiques (aviation, médical) exigeant une fiabilité absolue.
* **Historique** : La fin des années 60 a connu la "crise du logiciel" (dépassement des coûts, retards, bugs) à cause de méthodes informelles. Le GL est né pour structurer cela.

---

## 2. Qualité et Sûreté de Fonctionnement

### Dimensions de la Qualité 
| Dimension | Description |
| :--- | :--- |
| **Fonctionnalité** | Répond aux besoins pour lesquels il a été conçu. |
| **Fiabilité** | Fonctionne correctement et de manière stable. |
| **Efficacité** | Utilisation optimale des ressources (temps, mémoire). |
| **Maintenabilité** | Facilité de correction, modification ou amélioration. |
| **Portabilité** | Capacité à fonctionner sur différents environnements. |
| **Sécurité** | Protection contre les accès non autorisés et failles. |
| **Utilisabilité** | Facilité d'utilisation et d'apprentissage. |
| **Compatibilité** | Interaction avec d'autres systèmes. |

> [!info] Modèles de Qualité
> Les modèles reconnus incluent : **McCall** (11 caractéristiques), **ISO/IEC 9126** (6 caractéristiques), **Dromey**, **CMMI** (maturité des processus de 1 à 5), et **Boehm**.

### Sûreté de Fonctionnement (Systèmes Critiques) 
* **Disponibilité** : Opérationnel quand requis.
* **Tolérance aux pannes** : Continue de fonctionner même en cas de défaillance partielle.
* **Intégrité** : Données non altérées de manière non autorisée.

---

## 3. Gestion de Projet & Cycle de Vie

### Acteurs Principaux 
* **Client** : Demande le projet et a des attentes.
* **MOA (Maître d'Ouvrage)** : Définit les besoins fonctionnels et représente le client.
* **MOE (Maître d'Œuvre)** : Responsable de la réalisation technique du projet.
* **Chef de Projet** : Coordonne délais, coûts et qualité.

### Processus de Développement (Étapes) 
1. Spécification $\rightarrow$ 2. Analyse $\rightarrow$ 3. Conception $\rightarrow$ 4. Implémentation $\rightarrow$ 5. Test $\rightarrow$ 6. Installation $\rightarrow$ 7. Maintenance.

### Les Modèles de Cycle de Vie
1.  **Cascade** : Séquence linéaire et rigide. Idéal pour les projets stables avec exigences très claires (ex: gouvernement, industriel).
2.  **En "V"** : Cascade avec validation rétrograde et tests rigoureux. Idéal pour les systèmes critiques.
3.  **Prototypage Jetable** : Test de concepts pour valider les besoins flous avant le vrai développement. *Inconvénient* : Coûteux.
4.  **Incrémental** : Construction progressive par versions fonctionnelles. Réduit la complexité et intègre le client à chaque livraison.
5.  **Spirale** : Itératif, fortement orienté sur la **gestion des risques**.

> [!note] Planifié vs Agile 
> **Planifié** : Exigences fixes, communication formelle, peu flexible.
> **Agile** : Exigences évolutives, livraisons fréquentes, très adaptable.

---

## 4. Modélisation et UML

> [!abstract] Modélisation Orientée Objet (OO)
> Repose sur la notion d'objet (attributs + comportements) pour relier le modèle au monde réel. Elle favorise la modularité et la réutilisabilité.

### UML (Unified Modeling Language)
* **Ce que c'est** : Un langage de modélisation orienté objet et un standard international (OMG).
* **Ce que ce n'est pas** : Ce n'est **pas** une méthode (il ne prescrit aucune démarche de développement).
* **Rôle** : Visualiser, Spécifier, Construire, Documenter.

### Architecture : Le Modèle des « 4 + 1 Vues » de Kruchten 
UML met à disposition 13 diagrammes répartis en 5 vues pour couvrir tous les aspects d'un système :

#### 1. Vue des Cas d'Utilisation (Vue Centrale) 
Exprime les besoins fonctionnels des utilisateurs.
* **Diagramme des cas d'utilisation** : Acteurs, fonctionnalités et limites du système.

#### 2. Vue Logique (Aspects Fonctionnels / Statiques) 
Représente la structure conceptuelle.
* **Diagramme de classes** : Le plus important. Montre les classes, attributs, méthodes et relations.
* **Diagramme d'objets** : Instancie les classes à un moment donné.

#### 3. Vue des Processus (Aspects Dynamiques) 
Comportement du système à l'exécution.
* **Diagramme de séquence** : Ordre chronologique des messages entre objets.
* **Diagramme de communication** : Interactions simplifiées centrées sur les liens entre objets.
* **Diagramme d'activités** : Flux de travail (workflows) et processus métiers.
* **Diagramme d'états-transitions** : Cycle de vie d'un objet selon des événements.
* **Diagramme global d'interaction** : Combinaison chronologique de plusieurs interactions.
* **Diagramme de temps** : Évolution temporelle stricte suite à des événements.

#### 4. Vue des Composants (Architecture Logicielle) 
Structure du code source pour les développeurs.
* **Diagramme de composants** : Éléments logiciels (fichiers, DLLs, BDD).
* **Diagramme de paquetages** : Regroupement logique pour systèmes complexes.
* **Diagramme de structure composite** : Structure interne d'une classe complexe.

#### 5. Vue de Déploiement (Architecture Physique) 
Structure matérielle.
* **Diagramme de déploiement** : Serveurs, réseaux, et comment les composants y sont installés (Destiné aux DevOps/Architectes).