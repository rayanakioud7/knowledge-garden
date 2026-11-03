---
type: note
date: '2026-10-27'
tags:
- systemes-d-information
- merise
- modelisation
- ensam
- mcd
- database
topics:
- '[[Systèmes d''Information]]'
- '[[Merise]]'
- '[[Modélisation]]'
- '[[ENSAM]]'
- '[[MCD]]'
- '[[Database]]'
---

Date: 2026-10-27 
Tags: [[Systèmes d'Information]], [[Merise]], [[Modélisation]], [[ENSAM]], [[MCD]], [[Database]]

---
# Modèle Conceptuel de Données (MCD)

> [!abstract] Vue d'ensemble
> Le **Modèle Conceptuel de Données (MCD)** décrit la structure statique des informations d'un système d'information (SI). Il représente les objets pertinents du domaine, leurs propriétés et les associations qui les relient. Sa construction s'appuie sur l'étude du domaine, les règles de gestion, le dictionnaire de données et les dépendances fonctionnelles.

## 1. Rôle du MCD dans le système d'information

### 1.1. Univers du discours et structure statique

> [!info] Définition : Univers du discours
> L'**univers du discours** est la partie du réel que le système étudié doit représenter : personnes, produits, commandes, services, événements et relations utiles à l'activité.

Le MCD décrit les **données à mémoriser et leurs relations**, indépendamment du stockage et des traitements.

Le MCD repose sur quatre idées complémentaires :

1. **Classer les objets** qui jouent un rôle dans le système (ex. : client, commande, produit).
2. **Classer les associations** entre objets (ex. : un client passe une commande ; un étudiant participe à un concours).
3. **Décrire les propriétés des entités** (ex. : une commande possède un numéro, une date et une adresse de livraison).
4. **Décrire les propriétés des associations** (ex. : une commande contient une quantité donnée d'un produit).

> [!example] Exemple d'application : système de commandes
> Les objets métier sont notamment `Client`, `Commande` et `Produit`. Les associations expriment les faits métier qui les relient. Le numéro et la date caractérisent une commande ; la quantité caractérise le lien entre une commande et un produit.

> ![[{B933B06E-1383-4B7C-8FD5-71D89261CB08}.png]]
> 

### 1.2. Objectifs

Le MCD sert à :

- fournir une représentation conceptuelle commune du système étudié ;
- décrire les données et leur signification ;
- structurer les liens entre les données ;
- formaliser les contraintes d'organisation et de fonctionnement qui affectent les données ;
- préparer une conception cohérente de la structure d'information.

Le MCD doit être **compréhensible au niveau métier** : il modélise ce que les données signifient, pas seulement la façon dont elles seront enregistrées dans un logiciel.

## 2. Règles de gestion

### 2.1. Définition et utilité

> [!info] Définition : Règle de gestion
> Une **règle de gestion** est la traduction conceptuelle d'un objectif ou d'une contrainte acceptée par l'entreprise. Elle peut provenir d'une disposition légale, d'une exigence client, d'une observation du fonctionnement réel ou d'un règlement interne.

Les règles de gestion précisent les observations du terrain et justifient les entités, les associations et les cardinalités.

**Exemple :** « Un employé ne peut appartenir qu'à une seule division à la fois » indique une contrainte sur le lien entre `Employé` et `Division`.

### 2.2. Types de règles illustrés dans le cours

| Type | Rôle | Exemple du cours |
|---|---|---|
| **Règle d'action** | Décrit une action que l'entreprise doit accomplir. | Réaliser un inventaire du stock ; tout produit livré doit entrer en stock. |
| **Règle de calcul** | Précise comment calculer une donnée à partir d'autres données. | Calculer la valeur du stock selon une formule de prix moyen pondéré ; salaire de base = indice × valeur du point. |

> [!warning] Piège : observation vague
> Une phrase descriptive ne suffit pas toujours pour créer une contrainte formelle. Reformuler les observations sous forme de règles explicites : **quels objets sont concernés, quel fait est autorisé ou obligatoire, et dans quelles conditions ?** Ne pas inventer une règle qui n'est pas confirmée par le domaine étudié.

## 3. Dictionnaire de données

### 3.1. Rôle et construction

> [!info] Définition : Dictionnaire de données
> Le **dictionnaire de données** recense les données élémentaires du domaine, leur nom, leur signification, leur type, leur domaine de valeurs et les contraintes qui les concernent.

Il s'appuie sur les formulaires, factures, autres documents et le vocabulaire des acteurs.

Chaque donnée élémentaire doit être identifiée par au minimum :

- un **nom ou libellé** univoque ;
- une **signification ou description** ;
- un **type** ou un **domaine de valeurs**.

On peut compléter l'entrée par la taille, le format, la nature, les règles de calcul, les contraintes de gestion et la documentation associée.

### 3.2. Types de données

| Type | Description | Exemples / remarques |
|---|---|---|
| **Numérique entier** | Valeur numérique entière. | Nombre d'unités, quantité. |
| **Numérique décimal** | Valeur numérique avec partie décimale. | Montant, prix. |
| **Alphanumérique** | Chaîne de caractères. | Nom, adresse, code conservant éventuellement des zéros initiaux. |
| **Booléen** | Valeur logique à deux états. | Vrai / faux. |
| **Date** | Valeur temporelle suivant un format défini. | Jour / mois / année. |

> [!warning] Piège : codes et nombres
> Une valeur composée de chiffres n'est pas nécessairement une quantité numérique. Un code comme `001` doit pouvoir conserver ses zéros initiaux : son type doit être choisi selon sa signification et les opérations autorisées, pas uniquement selon son apparence.

### 3.3. Nature des données

| Nature | Définition | Exemple / conséquence |
|---|---|---|
| **Élémentaire** | Valeur qui n'est pas obtenue par calcul à partir d'autres données. | Un prix unitaire saisi ou un code produit. |
| **Calculée** | Valeur déduite à partir d'autres données. | Montant = prix unitaire × quantité. |
| **Calculée stable** | Sa régénération donne le même résultat lorsque les données d'entrée n'ont pas changé. | Résultat déterminé par les valeurs utilisées dans le calcul. |
| **Calculée instable** | Sa valeur peut changer avec le temps même si la donnée de référence demeure inchangée. | L'âge calculé à partir de la date de naissance. |
| **Paramétrée** | Donnée qui ne possède qu'une valeur à un moment donné dans le contexte considéré. | Le nom de l'entreprise. |
| **Composée** | Donnée décomposable en plusieurs données élémentaires selon une règle de construction. | Adresse → numéro, rue, ville. |

> [!example] Exemple d'application : adresse et montant
> - `Adresse` peut être composée de plusieurs champs élémentaires, selon le niveau de détail requis.
> - `MontantHT` peut être calculé à partir du prix unitaire et de la quantité.
> - `DateCommande` est une donnée typée comme date ; il faut préciser son format conventionnel.

> [!warning] Piège : composer ou calculer ?
> **Décomposer** une adresse consiste à distinguer ses parties ; **calculer** un montant consiste à déduire sa valeur par une formule. Ce sont deux opérations conceptuellement différentes.

> ![[{980D0D75-9C2E-45E5-BA1D-EFBE1DC2D72C}.png]]

### 3.4. Synonymie et homonymie

- **Synonymie :** une même donnée apparaît sous des libellés différents dans plusieurs documents.
- **Homonymie :** un même libellé désigne des données différentes selon le document ou le contexte.

Clarifier les significations et harmoniser les libellés avant de construire le MCD.

### 3.5. Contraintes à documenter

Le dictionnaire précise, lorsque c'est pertinent :

- les limites du domaine de valeurs ;
- les valeurs possibles et les règles de gestion ;
- le mode de calcul d'une donnée calculée ;
- le format ou le mode de codage ;
- la signification métier exacte.

> [!abstract] Modélisation / Synthèse : fiche minimale d'une donnée
> **Nom** → **signification** → **type / domaine** → **taille / format** → **nature** → **règles et contraintes**.

## 4. Qualité des données

### 4.1. Définition

La **qualité des données** vise à maintenir des données correctes et exploitables dans le temps.

### 4.2. Critères de qualité

> ![[{47388767-14B2-42BC-A3FC-9C5E3B3A2903}.png]]

| Critère | Signification | Exemple / contrôle |
|---|---|---|
| **Unicité** | Une donnée ne doit pas être confondue avec une autre ; elle correspond à un identifiant unique lorsque c'est requis. | Éviter de créer deux fiches pour une même personne, présente dans plusieurs outils du SI. |
| **Complétude** | Les informations significatives attendues pour un objet ou un attribut sont présentes. | Vérifier qu'une fiche client société contient les informations obligatoires, par exemple un numéro requis sur la facture. |
| **Exactitude** | La donnée doit être précise et valide par rapport à la réalité ou à une référence. | Un code postal doit être précis et correspondre au référentiel postal. |
| **Conformité** | Respect des contraintes réglementaires ou des conventions internes ; le cours la présente comme un sous-ensemble de l'exactitude. | Vérifier le format convenu d'un numéro de téléphone, par exemple `+212-6XX-XX-XX-XX`. |
| **Cohérence** | Absence d'informations contradictoires. | Un prix de vente ne doit pas dépasser le prix maximum autorisé ; différentes applications ne doivent pas conserver des valeurs contradictoires. |
| **Intégrité** | Les liens nécessaires entre données ou objets doivent exister pour que l'information soit exploitable. | Une facture doit être reliée à la commande correspondante. |
| **Fraîcheur** | La donnée reste pertinente au regard du temps et des changements survenus. | Une adresse peut devenir obsolète après le déménagement d'un client. |
| **Accessibilité** | La donnée doit pouvoir être retrouvée et consultée par les acteurs et applications qui en ont besoin. | Identifier le point de vérité de la donnée et organiser sa disponibilité selon les usages. |
| **Pertinence** | L'information est appropriée au besoin et réellement utile. | Éviter de traiter comme essentielle une information sans utilité pour l'objectif étudié. |
| **Compréhensibilité** | La donnée doit être interprétable de manière suffisamment claire par ses utilisateurs. | Documenter les termes, unités, codes et conventions. |

> [!warning] Piège : critères voisins mais différents
> - **Exactitude** : la valeur correspond-elle à la réalité ou à la référence ?
> - **Conformité** : la valeur respecte-t-elle le format ou la règle exigée ?
> - **Cohérence** : cette valeur entre-t-elle en conflit avec une autre ?
> - **Intégrité** : les liens indispensables sont-ils présents ?
> - **Fraîcheur** : la valeur est-elle encore à jour ?

## 5. Dépendances fonctionnelles (DF)

### 5.1. Définition et notation

> [!info] Définition : Dépendance fonctionnelle
> Une **dépendance fonctionnelle** (DF) entre deux données ou ensembles de données signifie que la connaissance de la première permet de déterminer une valeur unique de la seconde.

Notation :

$$X \rightarrow Y$$

Cela se lit : « **X détermine Y** ». `X` est la source de la dépendance et `Y` sa cible.

Une DF doit être valable pour toutes les occurrences permises par les règles métier.

### 5.2. Exemple : commande, produit et quantité

Dans le cours, les données `CodeCmd`, `DateCmd`, `CodeProduit`, `NomProduit` et `Quantité` illustrent plusieurs dépendances :

- `CodeCmd → DateCmd` : le code d'une commande détermine sa date.
- `CodeProduit → NomProduit` : le code du produit détermine son nom.
- `(CodeCmd, CodeProduit) → Quantité` : le couple commande-produit détermine la quantité de ce produit dans cette commande, si chaque couple n'apparaît qu'une fois.

> ![[{85010E3F-2CFD-4B10-9053-204FD121B5E2}.png]]
> *Description : conserver les trois tableaux de la diapositive 80 : produits (001/P1, 002/P2, 003/P3), commandes (1 datée du 29/3 ; 2 datée du 30/3) et lignes commande-produit-quantité. Montrer les lignes (1,001,300), (1,002,300), (2,001,590), puis la ligne rouge (1,001,400) comme exemple de conflit si le même couple est censé déterminer une seule quantité. La figure doit faire ressortir pourquoi la clé du fait « quantité dans une commande » porte sur les deux identifiants associés.*

| Code commande | Code produit | Quantité | Interprétation |
|---|---|---:|---|
| 1 | 001 | 300 | La commande 1 contient 300 unités de P1. |
| 1 | 002 | 300 | La commande 1 contient 300 unités de P2. |
| 2 | 001 | 590 | La commande 2 contient 590 unités de P1. |
| 1 | 001 | 400 | Contradiction avec la ligne (1, 001, 300) si un couple commande-produit ne peut définir qu'une seule quantité. |

### 5.3. Dépendance fonctionnelle complète (DFC)

> [!info] Définition : Dépendance fonctionnelle complète
> Une DF est **complète** lorsque l'attribut déterminé dépend de l'ensemble de la source : on ne peut pas retirer un élément de la source sans perdre cette dépendance.

Si une source est un identifiant composé, vérifier qu'aucune partie de cet identifiant ne détermine seule la propriété considérée.

**Exemple du cours :** si la quantité dépend du couple `(NumCmd, CodeCli, CodeArt)` dans une représentation donnée, il faut examiner quels attributs sont réellement nécessaires. Dans l'exemple commande-produit, c'est le couple `(CodeCmd, CodeProduit)` qui détermine la quantité de la ligne.

### 5.4. Dépendance directe et transitive

Une dépendance est **directe** lorsque la propriété est déterminée par l'identifiant sans passer par une autre propriété. Elle est **transitive** lorsque la détermination peut être déduite par l'intermédiaire d'une donnée déterminée elle-même par la source.

Si :

$$D_1 \rightarrow D_2 \quad \text{et} \quad D_2 \rightarrow D_3$$

alors `D3` est déterminé transitivement par `D1`. Cette dépendance indirecte doit être repérée lors de la normalisation.

> ![[{17421CA2-6B8C-4B50-A762-590341FADF1C}.png]]
> *Description : reproduire le schéma de la diapositive 81 avec trois éléments D1, D2 et D3. La flèche D1 → D2 puis D2 → D3 doit matérialiser le chemin transitif ; ajouter en parallèle l'idée d'une DF directe de D1 vers D3 uniquement si elle est explicitement établie par le domaine. Utiliser une légende différenciant dépendance directe et transitivité.*

> [!warning] Piège : corrélation ne signifie pas DF
> Une DF est une règle déterministe du domaine. Ne conclure pas que `X → Y` à partir du simple fait que deux colonnes semblent corrélées dans un tableau limité. Vérifier les règles et les occurrences possibles.

## 6. Construire un MCD : démarche générale

La progression utilisée dans le cours est :

**Dictionnaire de données → Dépendances fonctionnelles (DF) → MCD**.

Les données et leurs significations sont recensées d'abord. Les DF permettent ensuite d'identifier les identifiants et la structure de dépendance des propriétés. Le MCD formalise les entités, les associations et les contraintes entre elles.

### Étapes de travail

1. **Analyser le domaine** et ses documents ; relever les objets, les faits et le vocabulaire métier.
2. **Formuler les règles de gestion** sans ambiguïté.
3. **Établir le dictionnaire de données**, avec noms, significations, types, domaines et contraintes.
4. **Repérer les DF**, les identifiants candidats et les propriétés qui dépendent des identifiants.
5. **Créer les entités** représentant les classes d'objets.
6. **Créer les associations** traduisant les relations entre entités.
7. **Affecter les propriétés** au bon élément : entité ou association.
8. **Définir les cardinalités** d'après les règles métier.
9. **Valider le sens et la normalisation** du modèle ; corriger doublons, ambiguïtés et dépendances mal placées.

> [!abstract] Modélisation / Synthèse : logique de construction
> Le dictionnaire décrit **ce que signifient les données** ; les DF précisent **ce qui détermine quoi** ; le MCD exprime **quels objets existent, quels faits les relient et quelles contraintes gouvernent ces faits**.

## 7. Concepts fondamentaux du MCD

### 7.1. Entité et classe d'entités

> [!info] Définition : Entité
> Une **entité** représente une classe d'objets matériels ou immatériels qui jouent un rôle dans le système étudié. Chaque entité possède des propriétés qui décrivent ses occurrences.

Exemples : `Personne`, `Voiture`, `Article`, `Commande`, `Client`, `Livre`.

Une entité est représentée graphiquement par un **rectangle** portant son libellé. Les propriétés y sont énumérées. Les noms d'entité doivent désigner des objets métier clairement différenciés.

### 7.2. Propriété

> [!info] Définition : Propriété
> Une **propriété** est une information élémentaire qui décrit une entité ou une association.

Une propriété est dite :

- **simple / atomique** lorsqu'elle ne se décompose pas en propriétés plus élémentaires dans le modèle retenu ;
- **composée** lorsqu'elle peut être décomposée en plusieurs données élémentaires selon une règle de construction.

Exemple : `Adresse` peut être représentée comme une propriété composée de rue et ville ; si les besoins imposent des vérifications ou des usages distincts, ces éléments peuvent être représentés séparément.

### 7.3. Occurrence d'entité

> [!info] Définition : Occurrence
> Une **occurrence d'entité** est un objet individuel appartenant à une classe d'entités.

Par exemple, `Personne` est l'entité ; « Ali Mohamed, ville Casa » est une occurrence précise de cette entité. Plusieurs occurrences peuvent partager le même nom ou la même ville : leurs propriétés descriptives ne suffisent donc pas nécessairement à les distinguer.

![[{1847C585-E6FA-4DBA-8E32-B28E6A620851}.png]]

### 7.4. Association

> [!info] Définition : Association
> Une **association** est un lien sémantique entre des entités. Elle exprime un fait métier qui relie des occurrences d'entités. Elle est nommée par un verbe ou une expression verbale claire.

Exemples : `Lire` entre `Personne` et `Livre`, `Posséder` entre `Personne` et `Voiture`, `Acheter` entre `Personne` et `Magasin`.

Une association peut elle aussi porter des propriétés lorsqu'elles décrivent le lien lui-même, par exemple la date d'acquisition dans une association `Posséder`.

### 7.5. Occurrence d'association

Une occurrence d'association est un fait particulier qui relie des occurrences d'entités. Dans l'association `Lire` entre `Personne` et `Livre`, un fait peut être « Ali lit *Les Misérables* ». L'ensemble de ces faits constitue les occurrences de l'association.

> ![[{B411E53E-D1F1-480A-87D0-5B9B3CC719AE}.png]]

### 7.6. Types d'associations

| Type | Signification | Exemple du cours |
|---|---|---|
| **Binaire** | Relie deux entités. | `Personne` — Lire — `Livre`. |
| **Réflexive** | Relie une entité à elle-même. | Une personne peut `Épouser` une autre personne. |
| **Ternaire / n-aire** | Relie simultanément trois entités ou plus. | `Prescrire` entre `Médecin`, `Patient` et `Médicament`. |

Une association réflexive utilise deux rôles logiques distincts même si les deux extrémités pointent vers la même entité. Pour une relation n-aire, chaque participation doit être interprétée en tenant compte de toutes les autres entités impliquées.

> *![[{B292F9F4-7719-4C5C-A594-C8D8BAA95F70}.png]]

 
## 8. Identifiants

### 8.1. Définition

> [!info] Définition : Identifiant
> L'**identifiant** est une propriété, ou un ensemble de propriétés, qui permet de distinguer de manière unique chaque occurrence d'une entité.

Un identifiant doit respecter deux exigences :

1. **Unicité :** deux occurrences distinctes ne peuvent pas partager la même valeur d'identifiant.
2. **Nécessité :** la propriété, ou l'ensemble de propriétés, est choisi pour identifier les occurrences ; les autres propriétés ne doivent pas être substituées arbitrairement à l'identifiant.

Le cours marque graphiquement l'identifiant (par exemple par un soulignement ou un signe distinctif dans le rectangle d'entité). Respecter la convention graphique utilisée dans les exercices.

### 8.2. Identifiant simple et composé

- **Identifiant simple :** une propriété suffit à identifier chaque occurrence, par exemple `CIN` pour `Personne` dans l'exemple du cours.
- **Identifiant composé :** plusieurs propriétés sont nécessaires pour identifier une occurrence. Une même valeur de chaque propriété prise séparément peut apparaître dans plusieurs occurrences ; c'est leur combinaison qui est unique.

> [!example] Exemple d'application : association Personne–Livre
> L'identifiant d'une occurrence de l'association `Lit` est obtenu à partir des identifiants des entités participantes, lorsque la règle métier ne prévoit pas plusieurs occurrences distinctes pour la même combinaison. Ainsi, les couples `(E1, L1)` et `(E1, L2)` désignent deux faits différents.

> ![[{461BA1F0-2F16-49DD-82EE-D84BB0E649D0}.png]]
> 
> ![[{4CBBEC03-903A-4214-A640-DAC6674CDF6A}.png|552]]
> *Description : reproduire les exemples des diapositives 95 et 96 : une classe Personne et plusieurs occurrences E1/E2/E3 avec des noms pouvant se répéter ; puis deux entités (personnes et livres) et les occurrences d'association identifiées par les couples (E1,L1), (E2,L1) et (E1,L2). Mettre en évidence l'identifiant de l'entité et les identifiants qui composent l'occurrence d'association.*

> [!warning] Piège : nom n'est pas forcément identifiant
> Deux personnes peuvent avoir le même nom et le même prénom. Une propriété descriptive est un identifiant valide uniquement si les règles du domaine garantissent son unicité.

## 9. Cardinalités

### 9.1. Définition et notation

> [!info] Définition : Cardinalité
> La **cardinalité** d'une patte d'association exprime le nombre minimal et le nombre maximal de fois qu'une occurrence de l'entité peut participer à l'association.

La notation du cours est `(Cmin, Cmax)` :

- `Cmin` indique la participation minimale : `0` signifie facultative ; `1` signifie obligatoire.
- `Cmax` indique la participation maximale : `1` signifie au plus une participation ; `n` signifie plusieurs participations possibles.

| Cardinalité | Interprétation |
|---|---|
| `(0,1)` | Participation facultative, au plus une fois. |
| `(1,1)` | Participation obligatoire, exactement une fois. |
| `(0,n)` | Participation facultative, éventuellement plusieurs fois. |
| `(1,n)` | Participation obligatoire, une ou plusieurs fois. |

> [!warning] Piège : lire la cardinalité du bon côté
> La cardinalité inscrite près d'une entité indique combien de fois **une occurrence de cette entité** peut participer à l'association. Pour éviter l'inversion, verbaliser systématiquement le lien à partir de chaque entité.

### 9.2. Exemple : étudiant et filière

Dans le modèle `ETUDIANT — Inscrit dans — Filière` présenté en cours :

- côté `ETUDIANT` : `(1,1)` — chaque étudiant est inscrit dans une seule filière ;
- côté `Filière` : `(1,n)` — une filière regroupe un ou plusieurs étudiants.

Cette lecture vient des règles de gestion : un étudiant n'appartient ici qu'à une filière, tandis qu'une filière peut accueillir plusieurs étudiants.

> ![[{05DAD108-7A94-4447-ABC6-7D78899639F4}.png]]

### 9.3. Méthode pour déterminer les cardinalités

Pour chaque patte d'association, poser deux questions indépendantes :

1. **Minimum :** une occurrence peut-elle exister sans participer à cette association ? Si oui, `0` ; sinon, `1`.
2. **Maximum :** une occurrence peut-elle être liée à plusieurs occurrences de l'autre entité ? Si oui, `n` ; sinon, `1`.

Les cardinalités sont la traduction directe des règles de gestion. Ne les choisir ni par habitude ni parce qu'un exemple de données ne présente qu'une seule occurrence.

## 10. Construction des associations et choix du bon niveau de relation

### 10.1. Propriété portée par une association

Une propriété appartient à une association lorsque sa valeur décrit le lien ou dépend de la combinaison des occurrences participantes, plutôt que d'une entité prise isolément.

**Exemple :** la quantité d'un produit dans une commande dépend de la commande et du produit. Elle est donc portée par le lien `Commande–Produit`, et non par `Produit` seul ou `Commande` seule.

> ![[{49F5A4FD-8346-43C0-931E-63092A1D6CA6}.png]]
> *Description : schéma centré sur Commande et Produit, reliés par l'association « Contenir » ou « Concerner », avec la propriété Quantité inscrite sur l'association. Indiquer les cardinalités compatibles avec la règle métier énoncée dans l'exercice : une commande concerne un ou plusieurs produits ; un produit peut apparaître dans plusieurs commandes. Ne pas attribuer la quantité à une seule des deux entités.*

### 10.2. Associations n-aires

Une association n-aire est pertinente lorsque le fait métier dépend de la participation simultanée de toutes les entités. Les exemples du cours montrent qu'il faut évaluer si la relation peut être décomposée en plusieurs associations binaires sans perdre le sens du fait.

> [!example] Exemple d'application : prescription médicale
> Le fait « un médecin prescrit un médicament à un patient » implique ensemble `Médecin`, `Patient` et `Médicament`. Si une propriété comme la date de prescription est attachée à ce fait complet, elle doit décrire cette occurrence de prescription.

> ![[{70B9D2B1-D175-4C91-8256-13BC9D131280}.png]]
> *Description : diagramme ternaire de la diapositive 103 : les entités Médicament, Patient et Médecin sont reliées simultanément par l'association « Prescrire ». Les trois pattes doivent être visibles, avec leurs cardinalités telles qu'elles apparaissent sur la figure d'origine ; ne pas remplacer ce schéma par trois associations binaires indépendantes.*

### 10.3. Exemples supplémentaires du cours

**Garer : Personne–Bâtiment–Véhicule.** Le cours précise notamment que :

- une personne peut garer plusieurs véhicules ;
- un véhicule peut être garé par une personne ou plusieurs personnes selon les règles illustrées ;
- un véhicule peut être garé dans un bâtiment ;
- un bâtiment contient plusieurs places ou véhicules selon le contexte décrit.

Les cardinalités doivent être déduites des règles formulées dans l'exercice, et non inférées à partir des seuls noms d'entité.

> ![[{E13FDEC2-B8F5-41A6-9B82-0A53A1F16AFC}.png]]
> *Description : reproduire le MCD de la diapositive 104 avec Personne (CIN, Nom, Prénom), Bâtiment (NumBâtiment, Adresse) et Véhicule (Matricule, Marque), tous reliés à l'association « Garer ». Conserver les trois cardinalités visibles dans le support et rendre la relation ternaire facile à distinguer d'une chaîne de relations binaires.*

**Participer : Salarié–Service–Projet.** Cet exemple utilise une association n-aire pour relier les trois dimensions du fait de participation. Une occurrence décrit une participation d'un salarié, dans un service et sur un projet, en respectant les limites indiquées par les cardinalités du support.

> ![[{EAFE648D-6376-4339-8F4F-19FE4FD94691}.png]]
> *Description : reproduire la diapositive 106 avec les entités Salarié, Service et Projet et l'association Participe. Conserver les cardinalités chiffrées du support (notamment les valeurs 0,5 ; 0,1 et 1,10 telles qu'imprimées) et indiquer que leur interprétation dépend de la patte à laquelle chacune est attachée.*

> [!warning] Piège : créer une ternaire par défaut
> Utiliser une association n-aire uniquement lorsque la signification exige le lien simultané entre les entités participantes. Étudier les règles métier avant toute décomposition en liens binaires : une décomposition inadaptée peut perdre une information sur la combinaison complète.

## 11. Normalisation

La normalisation est un ensemble de règles de structuration qui aide à limiter les redondances, les dépendances mal placées et les incohérences dans le modèle.

| Règle présentée dans le cours | Exigence |
|---|---|
| **1re forme normale** | Chaque entité dispose d'un identifiant qui la caractérise de manière unique. |
| **2e forme normale** | Les propriétés dépendent de l'identifiant complet de l'entité, et non d'une partie de cet identifiant : dépendance fonctionnelle complète. |
| **3e forme normale** | Les propriétés dépendent directement de l'identifiant de l'entité, sans dépendance transitive par une autre propriété. |
| **Forme normale de Boyce-Codd** | Pour les identifiants composés, les propriétés ne doivent pas dépendre d'une autre propriété de l'entité plutôt que de l'identifiant approprié. |
| **Normalisation des relations** | Les propriétés d'une association doivent dépendre de l'ensemble des identifiants des entités associées, conformément au sens du lien. |

![[{E35A42CD-89F7-4C74-AEB2-8ACC70F70D43}.png]]

> [!warning] Piège : confondre propriété d'entité et propriété d'association
> Si une propriété dépend de plusieurs identifiants associés, elle ne doit pas être déplacée arbitrairement dans une seule entité. Vérifier les DF avant de décider où elle doit figurer.

## 12. Règles de validation sémantique

Ces règles permettent de contrôler qu'un MCD est sémantiquement cohérent, pas seulement graphiquement correct.

### Règle 1 — Une donnée ne doit pas être rattachée à plusieurs entités sous une signification ambiguë

Une propriété doit avoir une signification déterminée dans le modèle. Des libellés génériques identiques peuvent représenter des données différentes selon l'entité : par exemple `Numéro` chez `Client` et `Numéro` chez `Fournisseur`. Clarifier les noms (`Num_Client`, `Num_Fourn`) lorsque leur signification diffère.

> ![[{E7801056-6791-4AB6-A081-CF9C0F76E683}.png]]
> *Description : représenter côte à côte les entités Client et Fournisseur. Sur la version initiale, afficher des propriétés génériques Numéro et Adresse ; sur la version validée, les libellés deviennent Num_Client, Adresse_Client, Num_Fourn et Adresse_Fourn. Faire ressortir la différence entre les significations.*

### Règle 2 — Construire un dictionnaire de données cohérent

- lister les attributs par objet et par association ;
- regrouper les synonymes et clarifier les homonymes ;
- documenter la signification et le mode de codage.

### Règle 3 — Une propriété doit être définie à une seule valeur pour une occurrence

Une propriété simple ne doit pas contenir un ensemble de valeurs indépendantes pour une même occurrence. Si plusieurs valeurs sont possibles, étudier la création d'une entité ou d'une association appropriée au lieu de conserver une liste répétée dans une seule propriété.

### Règle 4 — Toutes les propriétés doivent être définies pour les occurrences auxquelles elles s'appliquent

Si les propriétés possibles diffèrent selon les catégories d'une entité, la spécialisation peut fournir une modélisation plus claire. Le support illustre ce point avec `Client`, spécialisé en `Particulier` et `Société` : certaines propriétés ne concernent que l'un des sous-types.

> ![[{178F6254-7058-406C-81A5-99E678248594}.png]]
> *Description : diagramme d'une entité Client portant l'identifiant et les propriétés communes, puis d'une spécialisation en Particulier (Nom, Prénom) et Société (Raison sociale, Nombre d'employés). Les propriétés spécifiques doivent être portées par le sous-type qui les concerne.*

### Règle 5 — Chaque propriété dépend uniquement de l'identifiant de l'entité

Exemple du cours : `CIN → Nom, Prénom`. L'identifiant doit déterminer les valeurs de toutes les propriétés de l'entité. Une propriété qui dépend seulement d'une autre propriété descriptive peut signaler une dépendance transitive ou une mauvaise répartition des données.

### Règle 6 — Les propriétés d'association doivent dépendre de toutes ses pattes

Une propriété portée par une association doit être définie par la combinaison des occurrences participantes, si le sens métier l'exige. Dans le modèle `Personne — Lit — Livre`, une date de début de lecture ou un nombre de pages lu est attaché au fait de lecture lorsqu'il dépend du couple personne-livre.

> ![[{1EC37E5C-DB70-4654-A081-D07028BB55AC}.png|559]]
> *Description : comparer deux versions du MCD Personne–Lit–Livre. Dans la première, les propriétés Date début et Nb Pages sont portées par l'association Lit ; dans la seconde, elles sont placées de manière incorrecte sur une entité. Le visuel doit montrer pourquoi la valeur caractérise le fait de lecture, plutôt que Personne ou Livre indépendamment.*

## 13. Contraintes d'intégrité fonctionnelle (CIF) et contraintes multiples (CIM)

### 13.1. CIF

> [!info] Définition : Contrainte d'intégrité fonctionnelle
> Une **CIF** exprime une contrainte de détermination entre deux entités : toute occurrence de l'une détermine obligatoirement une occurrence de l'autre selon la règle étudiée.

Le cours la représente par une marque spécifique sur l'association. Elle formalise une dépendance fonctionnelle dans le modèle conceptuel et doit être justifiée par les règles de gestion.

> ![[{C51A8BE3-D6D9-4528-BBB0-099BAB9F6A58}.png|534]]

### 13.2. Exemple : Client et Commande

Dans l'association `Passe`, chaque commande est liée au client qui l'a passée. La cardinalité traduit cette règle.

> ![[{6271CDA5-87D9-4A53-B56E-1B16956C75AA}.png]]
> *Description : reproduire le MCD de la diapositive 115 avec Client (Num_Client, Nom, Adresse), Commande (Num_Cmd, Date_Cmd) et l'association Passe. Placer le symbole CIF au niveau indiqué dans le support, et conserver les cardinalités imprimées sur chaque patte.*

### 13.3. CIF et CIM

Le cours précise le critère graphique pour les associations binaires :

- **CIF :** une des deux cardinalités maximales vaut `1` ;
- **CIM :** les deux cardinalités maximales valent `n`.

Vérifier la cohérence de ces contraintes avec les règles métier.

L'exemple `ÉLÈVE — Appartenir — CLASSE` présente les cardinalités `(1,1)` côté élève et `(1,n)` côté classe : chaque élève appartient à une classe, tandis qu'une classe regroupe plusieurs élèves.

> ![[{33C16DC6-98E2-48DB-9CAD-E60B30B1FBEE}.png]]
> *Description : représenter ÉLÈVE (NumEleve, NomEleve, PrenomEleve) et CLASSE (NumClasse, NomClasse), reliées par « Appartenir », avec les cardinalités (1,1) côté élève et (1,n) côté classe. Ajouter sous le schéma une légende reprenant les définitions CIF et CIM du cours.*

## 14. Spécialisation, généralisation et héritage

### 14.1. Spécialisation

> [!info] Définition : Spécialisation
> La **spécialisation** consiste à partitionner ou organiser une entité en sous-populations dont les occurrences partagent les propriétés de l'entité générale et possèdent éventuellement des propriétés spécifiques.

L'entité générale est le **super-type** ; les entités spécialisées sont les **sous-types**. Les propriétés communes demeurent au niveau du super-type ; les propriétés propres sont définies au niveau du sous-type correspondant.

### 14.2. Contraintes de spécialisation

Le cours présente plusieurs contraintes de spécialisation :

| Contrainte | Interprétation à vérifier dans le schéma |
|---|---|
| **Sans contrainte additionnelle** | Le schéma ne formule pas de contrainte supplémentaire d'exclusivité ou de totalité. |
| **Exclusivité** | Une occurrence ne peut appartenir qu'à un sous-type de la spécialisation concernée. |
| **Totalité** | Toute occurrence du super-type doit appartenir à l'un des sous-types. |
| **Partition** | La spécialisation est à la fois totale et exclusive : chaque occurrence appartient à exactement un sous-type. |
![[{ADEA108B-9E04-4E4C-A347-2517286E91F2}.png]]

> ![[{735799A3-BA17-4E00-8DB7-FB41B4AA2DBF}.png]]
> *Description : reprendre le tableau illustré de la diapositive 119 avec les quatre lignes « Pas de contrainte », « Exclusivité », « Totalité » et « Partition », accompagnées des symboles exacts du support. Utiliser l'exemple Client spécialisé en Particulier et Société pour illustrer les contraintes possibles : un client est soit particulier soit société, selon la règle retenue.*

### 14.3. Spécialisations multiples et héritage

L'entité `Étudiant salarié` illustre une spécialisation multiple associant `Étudiant` et `Salarié`.

La généralisation regroupe les propriétés communes dans un super-type. Le MCD précise l'organisation des identifiants et de l'héritage.

> ![[{97D7710B-D595-4155-806A-2E986084C90F}.png]]
> *Description : reproduire le schéma de la diapositive 120 : deux entités Étudiant et Salarié reliées à une entité commune Étudiant-Salarié. Montrer le mécanisme de spécialisation multiple et conserver les identifiants alternatifs indiqués dans le support : numéro d'inscription pour Étudiant et matricule pour Salarié.*

> ![[{E06CCB99-5356-43A0-98A5-322EE4E3DD5D}.png]]

> [!warning] Piège : dupliquer les propriétés communes
> Quand plusieurs sous-types partagent des propriétés, les répéter dans chaque sous-type rend le modèle redondant. Identifier les propriétés communes au super-type et conserver dans les sous-types uniquement ce qui leur est propre, selon les contraintes métier.

## 15. Entité forte et entité faible

### 15.1. Définitions

> [!info] Définition : Entité forte
> Une **entité forte** dispose d'une existence propre dans le modèle et peut être identifiée de manière unique par son propre identifiant.

> [!info] Définition : Entité faible
> Une **entité faible** dépend d'une entité forte pour son identification. Son identifiant ne peut pas être établi correctement sans tenir compte de l'identité de l'entité dont elle dépend.

Le support donne comme exemples généraux les entités `Client` et `Produit` pour illustrer une entité forte, puis `Commande` dépendant d'un client comme exemple d'entité dépendante. L'exemple détaillé est celui de `Chambre`, dépendante de `Étage`.

### 15.2. Exemple : Chambre et Étage

Le numéro `63` signifie « la sixième chambre du troisième étage » dans l'exemple du cours. Le numéro de chambre seul n'est donc pas l'identifiant global : il faut aussi le numéro d'étage.

L'identifiant d'une chambre est composé du numéro de l'étage et du numéro de la chambre dans cet étage. Une chambre se situe dans un étage ; un étage contient plusieurs chambres.

> ![[{CA470189-74BA-4B6A-85F4-22F5C6C1DC97}.png]]

> [!warning] Piège : identifier une entité faible sans son propriétaire
> Si le numéro d'une occurrence n'est unique qu'à l'intérieur d'une entité parente, il ne suffit pas comme identifiant global. Inclure l'identifiant du parent selon le modèle enseigné.

## 16. Exercice de synthèse du cours

Le dernier exercice demande de proposer un MCD à partir des règles de gestion suivantes :

1. Une voiture est possédée par une seule personne ; une personne peut posséder une ou plusieurs voitures.
2. Une personne a une adresse ou, si elle est sans domicile, une adresse peut être absente ; une adresse peut correspondre à plusieurs personnes qui y habitent.
3. Un salarié est affecté à un seul service ; un service contient plusieurs salariés.

### Méthode de résolution

1. Relever les entités candidates : `Personne`, `Voiture`, `Adresse`, `Salarié`, `Service`.
2. Distinguer les objets des faits métier : `Posséder`, `Habiter` / `Avoir pour adresse`, `Être affecté à`.
3. Définir les propriétés et les identifiants à partir des règles et des documents disponibles. Le support ne donne pas ici une liste complète de propriétés pour toutes les entités : elles ne doivent donc pas être inventées comme si elles étaient imposées par l'énoncé.
4. Déduire les cardinalités en examinant séparément la participation minimale et maximale de chaque entité.
5. Vérifier qu'aucune propriété de relation n'a été attribuée à une entité par erreur et qu'aucune règle de gestion n'est perdue.

> [!example] Trace de détermination des cardinalités

| Règle | Entité de départ | Min. | Max. | Justification |
|---|---|---:|---:|---|
| Une voiture a un seul propriétaire. | Voiture | 1 | 1 | La possession est obligatoire et il n'y a qu'une personne propriétaire. |
| Une personne possède une ou plusieurs voitures. | Personne | 1 | n | Dans la règle telle qu'énoncée, la possession est obligatoire ; une personne peut posséder plusieurs voitures. |
| Une adresse peut être partagée par plusieurs personnes. | Adresse | dépend de la règle retenue | n | Plusieurs personnes peuvent être rattachées à une même adresse. |
| Un salarié est affecté à un seul service. | Salarié | 1 | 1 | L'affectation est obligatoire et unique. |
| Un service contient plusieurs salariés. | Service | selon l'obligation retenue | n | Plusieurs salariés peuvent être affectés au même service. |

> [!warning] À propos de la deuxième règle
> La formulation « une personne a une adresse ou, si elle est sans domicile, une adresse peut être absente » doit être clarifiée avant de fixer la cardinalité minimale exacte sur la patte Personne–Adresse. La règle exprime l'existence possible d'une absence d'adresse ; la cardinalité doit représenter fidèlement ce cas.


## 17. Tableau de synthèse pour la révision

| Concept | Question à se poser | Erreur fréquente à éviter |
|---|---|---|
| Règle de gestion | Quel fait ou quelle contrainte est imposé par le métier ? | Modéliser une hypothèse non confirmée. |
| Dictionnaire de données | Que signifie chaque donnée, et quel est son type ? | Confondre synonymes ou homonymes ; oublier le domaine de valeurs. |
| Qualité des données | La donnée est-elle unique, complète, exacte, cohérente et à jour ? | Assimiler exactitude, conformité et cohérence. |
| Dépendance fonctionnelle | La valeur de X détermine-t-elle une valeur unique de Y ? | Déduire une DF seulement à partir de quelques lignes observées. |
| Dépendance complète | Toute la source est-elle nécessaire pour déterminer la cible ? | Laisser une propriété dépendre d'une partie d'un identifiant composé. |
| Entité | Quelle classe d'objets métier est représentée ? | Créer une entité pour une propriété ou un simple événement sans analyser le domaine. |
| Occurrence | Quel objet individuel appartient à cette classe ? | Confondre définition d'entité et exemple particulier. |
| Association | Quel fait relie les entités ? | Utiliser une association dont le nom ne décrit pas clairement le fait métier. |
| Propriété d'association | La donnée dépend-elle du lien complet ? | Placer Quantité sur Produit ou Commande au lieu de la ligne commande-produit. |
| Identifiant | Qu'est-ce qui distingue chaque occurrence ? | Utiliser un nom ou un libellé supposé unique sans règle garantissant cette unicité. |
| Cardinalité | Combien de participations minimales et maximales ? | Lire la cardinalité depuis le mauvais côté. |
| Association n-aire | Le fait dépend-il simultanément de toutes les entités ? | Décomposer une relation et perdre le sens du fait complet. |
| Normalisation | Les propriétés dépendent-elles du bon identifiant, complètement et directement ? | Conserver des dépendances partielles ou transitives dans une entité. |
| CIF / CIM | Quelle contrainte fonctionnelle ou multiple est indiquée ? | Ajouter un symbole sans justification métier. |
| Spécialisation | Quelles propriétés sont communes et lesquelles sont spécifiques ? | Dupliquer les propriétés communes ou oublier les contraintes de totalité/exclusivité. |
| Entité faible | L'identifiant est-il suffisant sans l'entité parente ? | Utiliser un numéro local comme identifiant global. |

## 18. Checklist avant de rendre un MCD

- [ ] Règles métier et dictionnaire clairs, avec types, domaines et contraintes.
- [ ] Identifiants uniques et propriétés rattachées au bon déterminant.
- [ ] Associations et cardinalités justifiées par les règles métier.
- [ ] Validation sémantique et cas particuliers vérifiés selon le domaine.

---
# ~={red}References=~
*[MCD — Modèle Conceptuel de Données, diapositives 62–126], L. El Faquih — ENSAM Casablanca / année non indiquée.*
