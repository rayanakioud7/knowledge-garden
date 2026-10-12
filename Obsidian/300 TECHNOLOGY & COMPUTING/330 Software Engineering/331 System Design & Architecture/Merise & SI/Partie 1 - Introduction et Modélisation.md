Date: 2026-10-08
Tags: [[Systèmes d'Information]], [[Merise]], [[Modélisation]], [[ACSI]], [[SI vs Informatique]], [[ENSAM]]


---
# Système d'Information (SI) - Partie 1 : Introduction et Modélisation

## 1. De la Donnée à la Connaissance

### 1.1 Historique de la Donnée
> [!info] Concept : Évolution historique de la donnée
> - **Les années 1640** : Premières conceptualisations statistiques et démographiques.
> - **Les années 1880** : L'ère du traitement des données (mécanisation, cartes perforées).
> - **Les années 1928** : Le concept de stockage (magnétique, début de la mémorisation de masse).
> - **L'ère actuelle (Internet)** : Explosion du volume, vélocité et variété des données (Big Data).

![[Pasted image 20261008204513.png]]

### 1.2 La Hiérarchie : Donnée $\to$ Information $\to$ Connaissance
> [!info] Définition : Donnée vs Information vs Connaissance
> - **Donnée (Data)** : Un fait brut, non structuré, sans contexte (ex: `25`, `Casablanca`, `2025-09-23`).
> - **Information** : Une donnée structurée et contextualisée qui lui donne un sens.
> - **Connaissance** : L'interprétation de l'information via l'expérience, le contexte ou des règles métier.

> [!example] Exemple d'Application : Transformation Donnée $\to$ Connaissance
> | Niveau | Exemple |
> | :--- | :--- |
> | **Données brutes** | `25`, `2025-09-23`, `Casablanca`, `T-shirt` |
> | **Information** | *"Il fait 25°C à Casablanca le 23 septembre 2025."* (Les données sont structurées pour donner un sens : température d'un lieu et moment précis). |
> | **Connaissance** | *"À 25°C, il fait assez chaud pour sortir en t-shirt sans veste."* (Interprétation de l'information avec une expérience vécue / niveau de confort humain). |
> 
> ![[Pasted image 20261008204552.png]]

### 1.3 Analyse des Données (Data Analysis)

> [!abstract] Processus : Analyse des données
> L'analyse des données consiste à examiner, nettoyer, transformer et modéliser des données dans le but de découvrir des informations utiles, d'informer des conclusions et de soutenir la prise de décision.

---

## 2. Théorie des Systèmes

### 2.1 Définitions Fondamentales
> [!info] Définition : Système et Processus
> - **Système** : Un ensemble d'éléments en interaction dynamique, organisés en fonction d'un but.
> - **Processus** : Un ensemble d'activités corrélées qui transforment des éléments d'entrée en éléments de sortie (avec valeur ajoutée).

### 2.2 Typologie des Systèmes
> [!info] Classification : Types de systèmes
> Les systèmes peuvent être classés selon leur nature (concrets/abstraits), leur interaction avec l'environnement (ouverts/fermés), et leur déterminisme.

> [!example] Exemple d'Application : Système de Transport Ferroviaire
> | Composante | Exemple dans le domaine ferroviaire |
> | :--- | :--- |
> | **Système de décision** | Grille tarifaire, définition des trajets, ouverture de nouvelles lignes, achat d'équipements. |
> | **Système d'information** | N° de trajet, ville départ/arrivée, N° de billet, N° de réservation, chiffre d'affaires d'une ligne, fréquentation. |
> | **Système opérant (physique)** | Les trains, les wagons, les voyageurs, les billets physiques. |
> 
![[Pasted image 20261008204740.png]]

---

## 3. Types de Données dans le SI

> [!warning] Distinction Importante : Données Structurées vs Non Structurées
> | Critère | Données Structurées | Données Non Structurées |
> | :--- | :--- | :--- |
> | **Qui ?** | Accès en libre-service (utilisateur métier) | Expertise en *data science* nécessaire |
> | **Quoi ?** | Types de données sélectionnés et définis | Nombreux types différents en conglomérats (hétérogènes) |
> | **Quand ?** | Schéma défini à l'écriture (*Schema-on-Write*) | Schéma défini à la lecture (*Schema-on-Read*) |
> | **Où ?** | Généralement stockées dans les **Data Warehouses** | Généralement stockées dans les **Data Lakes** |
> | **Comment ?** | Format prédéfini (tables relationnelles, CSV) | Format natif (texte, image, audio, JSON brut) |

![[Pasted image 20261008204915.png]]

---

## 4. Le Système d'Information (SI)

### 4.1 Fonctions Majeures du SI

> [!info] Définition : Les 4 fonctions du SI
> 1. **Vocabulaire spécifique** : Définir le référentiel sémantique de chaque domaine métier.
> 2. **Référentiel des données** : Assurer l'unicité, la cohérence et la pérennité des données maîtres.
> 3. **Transfert des informations** : Router la donnée dans la forme adéquate vers les bons processus.
> 4. **Acquisition, restitution et diffusion** : Capter la donnée à la source, la stocker, et la redistribuer aux acteurs.

### 4.2 SI vs Système Informatique
> [!warning] Piège / Distinction Cruciale
> - **Système d'Information (SI)** : Ensemble organisé de ressources (matériels, logiciels, personnel, données, procédures) qui permet de recueillir, stocker, traiter et diffuser l'information. **Le SI existe même sans ordinateur** (ex: un registre papier, une procédure orale).
> - **Système Informatique** : La partie technologique et automatisée du SI (hardware, software, réseaux). C'est un *sous-ensemble* ou un *outil* au service du SI.

![[Pasted image 20261008205116.png]]

### 4.3 Cycles de Développement du SI
> [!abstract] Processus : Phases et Cycles de développement
> Le développement d'un SI suit des méthodologies structurées pour passer du besoin métier à la solution technique.
> 
> **Les Cycles Classiques :**
> - **Cycle en Cascade (Waterfall)** : Linéaire, séquentiel (Analyse $\to$ Conception $\to$ Développement $\to$ Test $\to$ Déploiement). Rigide, peu adapté au changement.
> - **Cycle en V** : Chaque phase de conception est associée à une phase de test correspondante (Tests unitaires, intégration, validation).
> - **Cycle Cyclique / Itératif (Agile)** : Développement par itérations courtes, permettant une adaptation continue aux retours utilisateurs.

> ![[Pasted image 20261008205237.png]]
> *(Description précise de l'illustration : Diagrammes comparatifs des cycles en Cascade, en V avec leurs phases respectives)*

**Cycle Agile:**
![[Pasted image 20261008205313.png]]

---

## 5. Analyse et Conception des Systèmes d'Information (ACSI)

### 5.1 Pourquoi Analyser et Modéliser ?
> [!info] Concept : L'importance de la modélisation
> Modéliser permet de représenter la réalité de manière simplifiée et abstraite pour :
> - Comprendre le système existant ;
> - Communiquer entre les acteurs (métier et technique) ;
> - Concevoir le système cible sans les contraintes techniques immédiates ;
> - Capitaliser la connaissance de l'entreprise.

### 5.2 Historique de l'ACSI
> [!abstract] Évolution : Les grandes époques de la modélisation
> - **Années 70** : Approches fonctionnelles et structurées (**SADT**, langages comme **Cobol**).
> - **Années 80** : Approches données et relationnelles (**Merise**, avènement des **SGBDR**).
> - **Années 90** : Approches objet et composants (**UML**, design patterns).
> - **Années 2000+** : Approches orientées services et architecture (**MDA** - *Model Driven Architecture*, SOA, Microservices).

![[Pasted image 20261008205417.png]]

### 5.3 Notions Fondamentales de l'ACSI
> [!info] Définition : Le triptyque de l'ACSI
> 1. **Modèle** : Une représentation simplifiée et partielle de la réalité, construite dans un but précis (ex: MCD, Diagramme de classes).
> 2. **Langage** : La syntaxe et la sémantique utilisées pour exprimer le modèle (ex: SQL, OCL, notation UML).
> 3. **Méthode** : L'ensemble des règles, démarches et outils qui guident le processus de modélisation (ex: Merise, UML/RUP).

---

## 6. La Méthode MERISE

### 6.1 Principes Fondamentaux
> [!info] Définition : MERISE
> MERISE est une méthode de modélisation et de développement de systèmes d'information née en France à la fin des années 70. Elle repose sur des principes rigoureux de séparation des préoccupations.

> [!warning] Principe Crucial : Séparation des Données et des Traitements
> MERISE postule que les **données** (ce qui est mémorisé) et les **traitements** (ce qui est fait) sont deux dimensions orthogonales et indépendantes qui doivent être modélisées séparément avant d'être réconciliées.

### 6.2 Le Cycle d'Abstraction
> [!abstract] Modélisation : Les 3 niveaux d'abstraction
> MERISE structure la modélisation selon trois niveaux de préoccupation, du plus abstrait au plus concret :
> 1. **Niveau Conceptuel** : Le *QUOI* ? (Quelles sont les règles de gestion ? Quelles sont les données et les processus métier, indépendamment de toute technologie ou organisation).
> 2. **Niveau Organisationnel / Logique** : Le *QUI, OÙ, QUAND* ? (Comment les traitements sont-ils répartis entre les acteurs ? Comment les données sont-elles structurées logiquement).
> 3. **Niveau Physique** : Le *COMMENT* ? (Quel SGBDR ? Quel langage de programmation ? Quels indices, quels réseaux ?).

> ![[Pasted image 20261008205525.png]]
> *(Description précise de l'illustration : Pyramide ou schéma à 3 niveaux de MERISE : Conceptuel, Logique/Organisationnel, Physique, montrant le passage de l'abstraction métier à l'implémentation technique)*

### 6.3 Les Modèles MERISE (Résumé)
> [!info] Synthèse : La grille des modèles MERISE
> En croisant le cycle d'abstraction et la séparation Données/Traitements, on obtient la matrice complète des modèles MERISE :

| Niveau d'Abstraction | Modèles de DONNÉES (Statique) | Modèles de TRAITEMENTS (Dynamique) |
| :--- | :--- | :--- |
| **Conceptuel** | **MCD** (Modèle Conceptuel de Données) | **MCT** (Modèle Conceptuel de Traitement) |
| **Organisationnel** | **MOD** (Modèle Organisationnel de Données) | **MOT** (Modèle Organisationnel de Traitement) |
| **Logique** | **MLD** (Modèle Logique de Données) | **MLT** (Modèle Logique de Traitement) |
| **Physique** | **MPD** (Modèle Physique de Données) | **MPT / MOPT** (Modèle Physique / Opérationnel de Traitement) |

> [!example] Exemple d'Application : Focus sur le parcours des Données
> - **MCD** : Entités (ex: `Étudiant`, `Cours`), Associations (ex: `S'inscrire`), Propriétés. Représenté par un schéma entité-association.
> - **MLD** : Traduction du MCD en relations (tables) avec clés primaires et clés étrangères.
> - **MPD** : Traduction du MLD en script SQL spécifique au SGBDR choisi (ex: Oracle, PostgreSQL) avec les types de données précis, les index et les contraintes d'intégrité.

---
# ~={red}References=~
*Systèmes d'Information (Partie 1) — ENSAM Casablanca (IAGI)*