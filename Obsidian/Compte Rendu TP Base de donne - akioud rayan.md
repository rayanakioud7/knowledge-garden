---
type: note
tags:
- note
---

#### 1. Afficher le nom de l’utilisateur connecté.

```sql
show user
```
output:
![[{D34E9C37-CD72-4CDE-95AF-E670B465730F}.png]]
#### 2. Afficher la date courante
```sql
SELECT SYSDATE FROM dual;
```
output:![[{0C195E56-A587-429E-977A-EF520B4ED6E1}.png]]
#### 3. Affichez la liste de toutes les tables de votre base de données ?
```sql
SELECT table_name FROM user_tables;
```
output:
![[{DA27F0C8-8FFC-426B-9AD1-1C96A203B314}.png]]
#### Créez la table Service d'après le tableau suivant, puis vérifiez la création de la table.
```sql
CREATE TABLE service (
id NUMBER(2),
nom VARCHAR2(25)
);

DESC service;
```

output:
![[{6E491C4F-E1AF-45F5-A399-60B0D097867A}.png]]
#### 5. Créez la table Employe d'après le tableau suivant, par la suite, vérifiez la création de la table.
```sql
CREATE TABLE employe (
id NUMBER(7) CONSTRAINT pk_employe PRIMARY KEY (id),
nom VARCHAR2(25) NOT NULL,
salaire NUMBER(4),
id_service NUMBER(2) CONSTRAINT fk_service REFERENCES service(id)
);

DESC employe;
```

output:
![[{2C983D09-9760-43ED-91E6-2B6CFAAC7D21}.png]]

#### Modifiez la table Employe pour pouvoir allonger la taille des noms des employés. Vérifiez votre modification : Nom VARCHAR2 (30)

```sql
alter table employe modify (nom varchar(30))
```

output:
![[{075F0127-802F-4CE2-A3D9-D0D54D272A0B}.png]]

#### Vérifiez que les tables SERVICE et EMPLOYE sont bien enregistrées dans la base de données
```sql
SELECT table_name
FROM user_tables
WHERE table_name IN ('SERVICE', 'EMPLOYE');
```
output:
![[{DDBD8F77-43D1-4156-A9AC-EFF5962D8D1A}.png]]

#### Modifiez la table EMPLOYE. Ajoutez une colonne Fonction dont le type de donnée est VARCHAR2(25).
```sql
alter table employe add (fonction varchar2(25));
```
output:
![[{C8911D29-799A-4887-93F5-016CA64471A9}.png]]

####  Supprimez la colonne salaire de la table Employe et vérifiez le résultat.
```sql
alter table employe drop column salaire;
```
output:
![[{78740B0E-6157-45E1-B6CE-7F681B642870}.png]]

#### Créez la table EMPLOYE2 sur la base de la structure et des données de la table EMP mais n'incluez que les colonnes EMPNO, ENAME et DEPTNO. Nommez les colonnes de votre nouvelle table respectivement id_emp, nom et id_service ?
```sql
create table employe2
  (id_emp, nom, id_service) as
  select empno, ename, deptno from emp;
```

output:
![[{6C9C0555-F227-433D-B541-78FB7112F06A}.png]]

#### Supprimez la table EMPLOYE.
```sql
drop table employe;
```
output:
![[{AF3A6BA0-B354-4A3E-9CC3-662A2AD9D724}.png]]

#### Renommez la table EMPLOYE2 en EMPLOYE.
```sql
rename employe2 to employe;
```
output:
![[{B8B0758A-3157-4972-93DF-78F7367187AA}.png]]
