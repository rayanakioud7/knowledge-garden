Date: 2025-12-21

Tags:

# Terms

**~={purple}L'analyse en composante principale:=~** est une méthode exploratoire appliqué a des donnes multidimensionnelle.
Elle sert a visualiser les ressemblances entre les individus et les correlations entre les variables  en cherchant le sous-espace factorielle qui projette le nuage de données en perdant le moins possible d'information et d'inertie.
# Notes

## Les étapes d'un ACP norme:
1. Preparation des donnes:
	Matrice X a n ligne (individus) et p colonne (variables).
2. Centrage-reduction:
	matrice Z, rendre les variables comparable
	chaque variable a un moyenne nulle et moyenne = 1
3. Matrice de corrélation:
	matrice R: Corrélation linéaire des Variables
4. diagonalisation:
	cherchant les valeur $\lambda$ et les vecteur propres $u$ 
5. Choix des axes factorielle:
	on retient les $k$ premier axes d'apres le cumul d'inertie avec les plus grand valeur propres afin de conserver le maximum d'information et une bonne visualisation
6. Calcul des composante principale $Y^k$ :
	Projetons ls individus sur chaque  nouveaux axes factorielle retenus, les coordonnés des individus constitues les composantes principales
7. Interprétation:
	- Correlation des variables entre eux
	- Correlation entre les variables et les composantes des axes factorielles
	- ressemblance entre les individus (a oppose b)
	- nommage des axes factorielle

## Propriétés des composantes principales $Y^k$:

-  Centrage : les moyenne de chaque composante est nulle,  
- Reduction des variables : Chaque composante principale est une combinaison linéaire des variables
- Conservation d'information: V(Y) = $\lambda$
- Separation d'information Cov(Y, Y) = 0, chaque composante est indépendante par rapport a l'autre qui montre l'orthogonalite.
- Correlation maximale : r(Y, Z) = $\sqrt\lambda \times u$  , chaque composante est corrélé maximalement a chaque variable

## les formules

- Moyenne : $x_ = \div1 n \sum x_i$ 
- variance 
# References

