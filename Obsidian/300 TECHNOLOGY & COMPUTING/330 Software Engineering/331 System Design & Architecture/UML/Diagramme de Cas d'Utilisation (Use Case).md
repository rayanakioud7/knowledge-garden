Date: 2026-03-05
Tags: [[UML]]


# Diagramme de Cas d'Utilisation (Use Case)

> [!abstract] Définition
> Le **Diagramme de Cas d'Utilisation** représente la **vue fonctionnelle** du système depuis l'extérieur. Il décrit **ce que** le système doit faire (les fonctionnalités) et **qui** interagit avec lui (les acteurs), sans se soucier de *comment* c'est implémenté techniquement.

## 1. Composants Principaux

* **Le Système (Frontière)** : Définit le périmètre du projet. Représenté par un cadre. Ce qui est à l'intérieur est le système, ce qui est à l'extérieur est son environnement.
* **L'Acteur** : Une entité externe (humain, matériel ou un autre système) qui interagit directement avec le système. Représenté par un "bonhomme allumette" (stickman).
    * *Acteur Principal* : Initie le cas d'utilisation pour atteindre un but direct.
    * *Acteur Secondaire* : Sollicité par le système pour l'aider à accomplir le cas d'utilisation (ex: API bancaire, base de données externe).
* **Le Cas d'Utilisation (Use Case)** : Une fonctionnalité spécifique offerte par le système, qui produit un résultat observable et utile pour l'acteur. Représenté par un ovale contenant un verbe à l'infinitif (ex: "S'authentifier", "Passer une commande").

![[Pasted image 20260305234202.png|center|600]]

## 2. Les Relations

### Entre Acteurs et Cas d'Utilisation
* **Association (Communication)** : Ligne simple qui relie un acteur à un cas d'utilisation auquel il participe directement.

### Entre Cas d'Utilisation
* **Inclusion (`<<include>>`)** : Le cas d'utilisation de base a **obligatoirement** besoin du cas inclus pour s'exécuter. Le flux est systématique.
    * *Exemple* : "Retirer de l'argent" `---<<include>>--->` "S'authentifier".
    * ![[Pasted image 20260305234236.png|center|600]]
* **Extension (`<<extend>>`)** : Le cas d'utilisation de base peut **optionnellement** être enrichi par le cas étendu, souvent sous une certaine condition (via un point d'extension).
    * *Exemple* : "Payer commande" `<---<<extend>>---` "Payer avec un code promo".
	* ![[Pasted image 20260305234305.png]]
* **Généralisation (Spécialisation)** : Un cas d'utilisation "enfant" hérite du comportement du cas "parent" et le modifie ou le précise.
    * *Exemple* : "Payer par Carte" est une generalization de "Payer".
    * ![[Pasted image 20260305234914.png]]

### Entre Acteurs
* **Généralisation** : Un acteur enfant hérite des droits et des cas d'utilisation de l'acteur parent.
    * *Exemple* : L'acteur "Administrateur" hérite des droits de l'acteur "Utilisateur" classique, plus les siens.
    * ![[Pasted image 20260305234959.png]]

## ~={red}References=~
