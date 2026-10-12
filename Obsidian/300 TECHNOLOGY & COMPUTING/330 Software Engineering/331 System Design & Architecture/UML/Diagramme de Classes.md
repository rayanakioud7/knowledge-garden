Date: 2026-03-05
Tags: [[UML]]


# Diagramme de Classes

> [!abstract] Rôle Central
> Le diagramme de classes est le **cœur de l'analyse UML**. Il s'agit d'un diagramme **structurel** (et non comportemental) qui modélise la structure statique, stable et durable du système orienté objet. Il sert de fondation à tous les autres diagrammes et permet la transition directe vers l'écriture du code (Java, Python, etc.).

## 1. Structure d'une Classe
Une classe est représentée par un rectangle divisé en 3 compartiments :
1. **Nom de la classe** (Majuscule, sans verbe. Ex: `Etudiant`)
2. **Attributs** (Données membres / propriétés)
3. **Opérations** (Méthodes / comportements)

![[Pasted image 20260306013320.png|center]]

### Visibilité (Droits d'accès)
En Programmation Orientée Objet (POO), l'encapsulation est primordiale. L'UML utilise ces symboles pour définir la visibilité :

| Symbole | Signification | Rôle en POO |
| :---: | :--- | :--- |
| **`+`** | **Public** | Accessible de partout. |
| **`-`** | **Private** | Accessible uniquement dans la classe. |
| **`#`** | **Protected** | Accessible par la classe et ses sous-classes (héritage). |
| **`~`** (ou `*`) | **Package** | Accessible dans le même package (dossier). |

### Syntaxe
* **Attribut** : `Visibilité Nom : Type [= Valeur par défaut]` *(Ex: `- dateNaissance : Date`)*
* **Opération** : `Visibilité Nom (Paramètres) : Type de retour` *(Ex: `+ calculerSalaire() : double`)*
* *Stéréotypes fréquents* : `<<Constructor>>` (initialise l'objet), `<<Getter>>`, `<<Setter>>`.

---

## 2. Les Relations entre Classes

Les relations expriment comment les classes interagissent et dépendent les unes des autres.


### A. Dépendance (`<<use>>`)
* **Définition** : La forme la plus faible. Une classe utilise une autre de manière transitoire/ponctuelle.
* **Représentation** : Flèche en pointillés (`----->`).
* ![[Pasted image 20260306013513.png]]

### B. Associations et Cardinalités (Multiplicités)
Relation sémantique durable entre classes.
* **Représentation** : Trait plein. Peut comporter des **Rôles** aux extrémités.
* **Cardinalités** (combien d'objets sont liés) :

| Notation      | Signification                             |
| :------------ | :---------------------------------------- |
| `1` ou `1..1` | Un et un seul (Exactement 1)              |
| `0..1`        | Zéro ou un (Optionnel)                    |
| `0..*` ou `*` | Zéro, un ou plusieurs (Liste, Collection) |
| `1..*`        | Au moins un (Un ou plusieurs)             |

![[Pasted image 20260306013600.png]]

> [!note] Traduction en Code (Ex: Java)
> Une cardinalité de `*` (plusieurs) du côté d'une classe `Commande` se traduit par un attribut de type `List<Commande>` ou `Commande[]` dans le code de la classe opposée.

### C. Types d'Associations Spécifiques

#### 1. Association Réflexive
Une classe est liée à elle-même (Ex: un `Employe` a pour responsable un autre `Employe`).
![[Pasted image 20260306013739.png|center|500]]

#### 2. Classe d'Association
Quand une association possède ses propres attributs (Ex: une relation entre `Personne` et `Livre` génère un `Emprunt` avec une `DateEmprunt`).
* **Représentation** : Reliée au trait de l'association par des pointillés.

![[Pasted image 20260306013829.png|center|500]]
#### 3. Agrégation (Losange Blanc / Vide `◇`)
* **Définition** : Relation "Conteneur / Contenu" faible. **L'élément contenu peut exister sans le conteneur**.
* *Exemple* : Une `Equipe` ──◇ `Employe`. Si l'équipe est dissoute, l'employé existe toujours.
* ![[Pasted image 20260306013916.png]]

#### 4. Composition (Losange Noir / Plein `◆`)
* **Définition** : Relation "Partie-Tout" très forte. **La destruction du composite entraîne la destruction des composants**.
* *Exemple* : Un `Cheval` ──◆ `Tete`. Si le cheval meurt, la tête aussi. Un composant n'appartient qu'à un seul composite.
* ![[Pasted image 20260306014008.png]]

> [!danger] Association N-aire (Losange)
> Relie plus de deux classes simultanément. **À éviter en architecture !** Mieux vaut la remplacer par plusieurs associations binaires autour d'une classe centrale.

---

## 3. Héritage et Abstraction (Concepts POO)

### Héritage (Généralisation / Spécialisation)
* **Définition** : Relation "EST-UN". Une classe fille hérite de tous les attributs et méthodes de la classe mère.
* **Représentation** : Flèche avec un triangle blanc/vide (`─▷`).
* *Exemple* : `Professeur` hérite de `Personne`.
* ![[Pasted image 20260306014103.png]]

### Classes Abstraites
* **Définition** : Classe qui **ne peut pas être instanciée**. Sert de modèle.
* **Représentation** : Nom de la classe en *italique* ou avec le stéréotype `{abstract}`.
* **Méthodes Abstraites** : Méthodes déclarées sans implémentation. Les classes filles *doivent* fournir le code de cette méthode.
* ![[Pasted image 20260306014137.png]]

### Interfaces
* **Définition** : Forme particulière où **toutes les méthodes sont abstraites**.
* **Représentation** : Ligne pointillée avec triangle blanc (`- - ▷`).
* *Atout* : Permet le polymorphisme. Une classe peut implémenter plusieurs interfaces.
* ![[Pasted image 20260306014222.png]]
![[Pasted image 20260306014306.png]]
## ~={red}References=~
