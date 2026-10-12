
Date: 2025-10-28
Course: Datawarehouse
Tags: [[Business Intelligence]],  [[SQL]], [[Datawarehouse]], [[Database]].

----
# ~={red}Terms=~

 - ~={purple}**System D'information (SI):**=~ un ensemble organise de resources - materiel (*hardware: disque dur, les pc, les serveurs..*.), logiciel, personnel, donnes (*DATA: information brute collecte, stocke et traite*) et procedure - qui travaillent ensemble pour collecter, traiter, stocker et distribuer l'information.

- ~={purple}**Informatique Décisionnelle (BI - business intelligence):**=~ est l'ensemble de methodologies, de processus, d'architectures et de technologies capables de ~={orange}transformer les données brutes en information pertinentes=~ (*justifie*) et utile pour la prise de decision.

- ~={purple}**Data Warehouse (entrepot de données):**=~ d'apres [[Bill Inmon]] est une collection de données ~={red}thématiques=~, ~={yellow}intégrées=~, ~={green}non volatiles=~ et ~={blue}historiées=~ pour la prise de decisions.

-----
# ~={red}Notes=~

### History of Data Warehouse:
**~={orange}1990:=~** apparition des Data Warehouse.
**~={orange}1990-2000:=~** ETL pour alimenter les entrepots de données.
~={orange}**2000:**=~ l'introduction des premieres plateformes BI qui ameliorate les technique d'analyse.
~={orange}**2000-Now:** =~BI sur cloud, intelligence artificielle et Big Data.

## Overview
Setting up a Data warehouse can be a very complex task, you should from the beginning be very clear of what your end goal is.

The dream of every company is a tool that helps to collect a large  amount of data and to organize it and finally analyze it efficiently. This is how data warehouses come in handy, but it should be treated with extreme care for how much nowadays data can be sensitive. 

### How does a Data Warehouse work

A data warehouse may contain multiple databases. within each database, data is organized into tables and columns. And within each column you can define a type of data and description of it. Tables can be organized inside of schemas, you can think of it as folders. 
Query tools use the schema to determine which data tables to access and analyze.

### Difference between a Data Warehouse and other Data terms

![[Pasted image 20251030130541.png|center]]

### Characteristics of a Data Warehouse

 ~={red}**Thématiques *(Orientees sujet)*:**=~
Data Warehouse a pour objet de répondre a une thématique  (suivi de vente, suivi de la production....) . contrairement aux bases de données opérationnelles qui sont organise par application.
So basically a Data warehouse is designed for data analytics that involves reading a large amount of data to understand relationships between it. And a database is used to capture and store Data.
![[Pasted image 20251030122013.png | center]]

~={yellow}**Intégrées:**=~
Divers et plusieurs sources de données d'apres des application et meme source externe
![[Pasted image 20251030122705.png|center]]

Plusieurs conflits et contraintes doivent être pris en compte:
![[Pasted image 20251030122838.png|center]]

~={green}**Non volatiles:**=~
Les données dans un DW ne sont ni supprime ni modifie car il sert a donne l'evolution d'un objet.
![[Pasted image 20251030123518.png|center]]

~={blue}**Historiées *(Datée)*:**=~
Le DW suivent l'evolution des données dans le temps. Il conservent l'historique des évènement *(modifications)* avec l'indiquation de moment d'évenement.
![[Pasted image 20251030123925.png|center]]


---
## Concepts
##### ~={blue}Fait=~
La table principal dans un modèle multidimensionnel. 
![[Pasted image 20251030125303.png|center]]
- **Mesure** :Valeur numérique contenue dans la table de fait et qui sert a mesurer les performances d'un business.
- **Clé** : La clé de table de fait est composée des clés étrangères relatives a ses dimensions.
![[Pasted image 20251030130908.png|center]]
##### ~={blue}Dimension=~
Les tables qui raccompagnent une table de faits et définit sa **granularité**. representant l'axe d'analyse de mesures. 

**La granularité** : est le niveau de detail de la table de fait.
	toujours opter pour un niveau de detail très bas pour prévoir les besoins futurs. 

![[Pasted image 20251030125808.png|center]]

##### Fait/Dimension
les tables de dimensions sont reliées a la table de fait a travers leurs clés primaire.
	La clé de table de fait est composée des clés étrangères relatives a ses dimensions.


### Architecture de base du Decision Support System

![[Pasted image 20251030115254.png|center]]



 - **~={purple}Hiérarchie=~** : les dimensions peuvent inclure des attributs qui forment des hierarchies. L'hierarchie permet a l'utilisateur final de parcourir les mesures agrégées selon différents niveaux de detail *(niveaux hiérarchiques)*. 
 
![[Pasted image 20251115005956.png|center]]

- **~={purple}Fonction d'agreation=~** : c'est l'operation associe a une mesure qui sera utilise pour agreger la mesure par dimension *(Sum, Min, Max ,Count, Distinct Count...)*.

![[Pasted image 20251115173437.png|center]]

- **~={purple}Agrégation=~** : c'est la mesure agrégée par une ou plusieurs dimensions.

---

## Modélisation multidimensionnelle 
### Star schema
 - **~={purple}Modèle en etoile *(Star schema)*=~** : la table de fait est reliée directement aux table dimensions.
 
![[Pasted image 20251115174021.png|center]]

![[Pasted image 20251115174934.png|center]]
##### Avantages :
- Facile à comprendre pour les utilisateurs du DW.
- Rapide et performant : Le temps de réponse des requêtes est rapide. 
	1. Il ne fait pas appel à plusieurs jointures mais une seul reliant la table de fait à la dimension.
	2. Il benefice aussi de techniques d'optimisation comme l'indexation.

##### Inconvénients :
- peu flexible par rapport aux changements.
- Difficile à maintenir.
- Redondance.


### Snowflake
- **~={purple}Modèle en flocon de neige *(Snowflake)*=~** : est une méthode de normalisation des tables de dimension. La table de fait est alors reliée à des dimensions via d'autres.

![[Pasted image 20251115175552.png|center]]

![[Pasted image 20251115175630.png|center]]


~={green}**Exemple**=~ :
Ce modèle est de type snowflake paracerque la table de fait c'est la table *~={red}Frais=~* qui est relies aux autre table de dimension *(Catégorie, date, Fournisseur)*, mais il est aussi relies a  la table *~={red}Region=~* via une autre table de dimension qui est ~={yellow}*Fournisseur*.=~
![[Pasted image 20251115185659.png|center]]

##### Avantages :
- Optimisation de l'espace de stockage.
- Facile à maintenir et à mettre à jour.
##### Inconvénients :
- Schema complexe pour les utilisateur finaux.
- Plus difficile à parcourir que le schema en etoile.
- Peu performant

### Starflake
- ~={purple}**Modèle en étoile-flocon de neige *(Starflake)***=~ : est une mixte des deux méthodes star et snowflake, où dans le meme modèle on retrouve des tables normalise et d'autres non.

![[Pasted image 20251115181920.png|center]]

### Constellation
**~={purple}Schéma en constellation=~** : schéma contenant plusieurs tables de fait qui partagent des dimensions. Il peut contenir à la fois un schéma normalisé et un schéma dénormalisé.

![[Pasted image 20251115182624.png|center]]

![[Pasted image 20251115182711.png|center]]

---
## Clé de substitution

- ~={purple}**Clé naturelle** *(Clé business)* =~: est la clé primaire utilisé dans la ~={yellow}source de données=~. 
Sometimes there are even no natural keys available
![[Pasted image 20251115200746.png|center]]

- **~={purple}Clé de substitution (artificielle, non naturelle, Surrogate key)=~** : est un clé de type entier séquentiel *(Integer)*, utilisée au niveau du Data Warehouse pour identifier les données des tables de dimensions au lieu d'utiliser la clé source (naturelle). *~={red}Elle est utilisée pour relier la table de dimension à la table de fait.=~*
		1. Permet de gérer les données de différentes sources
		2. Permet de gérer l'heterogeneite au niveau des sources : clés différentes (ID, Matricule).
	 Évite au DW d’être lié aux règles de gestion des identifiants utilisées par le système de production (suppression, mise à jour, recyclage etc.) .

![[Pasted image 20251115201832.png|center]]

---
## Types de dimension
### Dimension Date
**~={purple}Dimension Date=~** : est une dimension present dans tous entrepot de données car :
 - Un Data Warehouse contient des données historiées.
 - La majorité des analyses de données se font sur un intervalle de temps.
	Elle peut être Cree manuellement ou automatiquement via les outils BI
	 Elle est crée une seuls fois et réutilisée dans plusieurs data marts.
```sql
CREATE TABLE [D_Date]( [Date] [date] NOT NULL as primary key,
[Year] AS (datepart(year,[Date])),
[Semester] AS (CONVERT([varchar](4),datepart(year,[Date]),(0))+case when datepart(month,[Date])>(6) then '2' else '1' end),
[Quarter] AS (CONVERT([varchar](4),datepart(year,[Date])(0))+datename(quarter,[Date])),
[Month] AS (datepart(month,[Date])),
[Month_Name] AS (upper(substring(datename(month,[Date]),(1),(1)))+substring(datename(month,[Date]),(2),len(datename(month,[Date])))),
[Week] AS ((CONVERT([varchar](4),datepart(year,[Date]),(0))+replicate('0',(2)- len(datepart(week,[Date]))))+CONVERT([nvarchar](2),datepart(week,[Date]),(0))), [Day] AS (datepart(day,[Date])), [Day_of_Week] AS (datename(weekday,[Date])), [Day_of_Year] AS (datename(dayofyear,[Date])), [Jour_Ferie] [char](3) NULL, [FiscalWeek] [int] NULL )
```

### Normal
**~={purple}Normal=~** : la dimension est directement reliée a la table de fait. *(all of star schema)*

![[Pasted image 20251116005233.png|center]]

### Référencée
**~={purple}Référencée=~** : la dimension n'est pas directement reliée au table de fait mais a travers une autre dimension. *(Snowflake schema)* 

![[Pasted image 20251116005439.png|center]]

___
## Visualisation des données 

 > 		Une image vaut mille mots

- Les chiffres ont tendance a submerger et ennuyer les gens.
- La visualisation des données c'est raconter une histoire a propos des données, a propos du business.
- Une bonne visualisation (choix des graphiques, des couleurs, emplacement des graphiques, ergonomie etc.) :
	1. offre une image claire et comprehensible sur la sante de l'entreprise.
	2. capte l'attention de l'audience jusqu'à la fin de la presentation.
	3. permet d'orienter la reunion comme on le souhaite.
	4. permet de mettre l'accent sur des element en particulier.

- La visualisation est l’un des composants essentiels dans un système décisionnel car elle représente la **vitrine du système** vis-à-vis de l’utilisateur final.
- Les reportings et tableaux de bord doivent être conçus de manière intelligente permettant une meilleure visibilité pour l’utilisateur:
	1. Etudier l’emplacement et l’organisation des éléments dans le TB pour faciliter la navigation dans la page.
	2. Paramétrer des filtres dans le TB/rapport pour permettre à l’utilisateur de faire différentes analyses via le même Reporting ainsi qu’accéder à différents niveaux de détails.
	3. Utiliser des indicateurs graphiques permettant de repérer les informations clés. 
	4. Prendre en considération la nature de l’utilisateur du TB dans la conception
	5. Permettre aux utilisateurs de faire des analyses comparatives.
	6. Choisir le bon type de représentation: tableaux, matrices, graphiques, gauges, map etc.

**Les différents graphes:**

![[Pasted image 20251117225846.png|center]]

1. Courbes (~={yellow}Line chart=~) : Servent à montrer comment une mesure évolue par rapport à une variable continue ![[Pasted image 20251117230605.png|center|250]]
2. Camembert ou circulaire (~={yellow}Pie chart=~): Sert à montrer la répartition d’une entité en sous-parties.
![[Pasted image 20251117230658.png|center|250]]
3. Graphique à barres (~={yellow}bar chat=~): Sert à comparer des catégories ou jeux de données associés
![[Pasted image 20251117230738.png|center|250]]
4. Graphique à colonnes (~={yellow}Histogramme=~): Sert à monter les changements à travers le temps et à comparer deux valeurs côte-à-côte.
5. ![[Pasted image 20251117230806.png|center|250]]
6. Carte d’arborescence (~={yellow}Treemap=~) : Utile pour afficher des hiérarchies complexes sous forme de rectangles imbriqués.
![[Pasted image 20251117230834.png|center|350]]
7. Graphique en entonnoir (~={yellow}Funnel chart=~): Pour afficher différentes étapes d’un processus continu. 
![[Pasted image 20251117230917.png|center|300]]
8. Nuage de points (~={yellow}Scatter chart=~): Idéal pour déduire des modèles ou corrélation entre les points de données.(2D)
![[Pasted image 20251117231106.png|center|360]]
9. Graphique à bulle (~={yellow}bubble chart=~): une variante du nuage de points. Utile pour comparer un petit ensemble de catégorie entre elles.
![[Pasted image 20251117231125.png|center|370]]
Et beaucoup d’autres…


---
### Tools:
- [[SQL]] management studio
- [[Power BI]]
- [[PostgreSQL]]
- [[Excel]]
- Amazon Redshift
- Visual studio
- Microsoft Azure
- Google BigQuery
---
# ~={red} References=~
[[Business intelligence concepts - MDSI SDID.pdf]]
[[Business intelligence  concepts - MDSI SDID PARTIE 1 1.pdf]]
[[datawarehousing cours.pdf]]
[ByteByteGo](https://bytebytego.com/guides/database-and-storage/)
[KaaS](https://publish.obsidian.md/kaas-published/0-Slipbox/Data+Warehouse)
[[4 - Course-slides-Data-Warehouse-The-Ultimate-Guide.pdf]]