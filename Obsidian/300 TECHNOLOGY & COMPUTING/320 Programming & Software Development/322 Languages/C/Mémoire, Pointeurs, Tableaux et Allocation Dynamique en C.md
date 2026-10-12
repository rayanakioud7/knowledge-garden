Tags: [[C_Programming]], [[Pointers]], [[Allocation Dynamique]], [[Mémoire]], [[Tableaux]], [[Structures]], [[Listes Chaînées]], [[ENSAM]], [[Data Structure]]


---

## 1. Organisation de la Mémoire : Stack vs Heap

> [!info] Définition : Pile (Stack) et Tas (Heap)
> - **Stack (pile)** : zone mémoire réservée automatiquement pour les variables locales et les appels de fonctions. Taille fixée à la compilation, gestion automatique (LIFO).
> - **Heap (tas)** : réserve (« storage pool ») dans laquelle les fonctions d'allocation dynamique (`malloc`, `calloc`, `realloc`) prélèvent des blocs à l'exécution. Gestion **entièrement manuelle** via `free`.
> 
> Appeler trop souvent ces fonctions — ou demander des blocs trop volumineux — peut **épuiser le tas**, auquel cas elles renvoient un pointeur nul.

| | 📦 Statique | 🔄 Dynamique |
| :--- | :--- | :--- |
| **Déclaration** | `int t[100];` | `int *t = malloc(n * sizeof(int));` |
| **Taille** | fixée à la compilation | choisie à l'exécution |
| **Zone mémoire** | pile (stack) | tas (heap) |
| **Gestion** | automatique, simple mais rigide | manuelle (`free`), flexible |

> ![[{324E6841-AD4E-49C3-B0A1-206E80345BB2}.png]]
> *(Description précise de l'illustration : organisation de la mémoire d'un processus C — segments de code, données, pile (stack) et tas (heap) avec blocs alloués/libérés)*

---

## 2. Pointeurs : Fondements

> [!info] Définition / Théorème : Pointeur et opérateurs `&` / `*`
> Un pointeur est une variable contenant l'**adresse** d'une autre variable.
> - `&x` : adresse de $x$ ;
> - `*p` : déréférencement, valeur située à l'adresse contenue dans $p$ ;
> - Passage d'un pointeur en argument : permet à la fonction de **modifier** la variable d'origine (passage par adresse).

> [!info] Définition / Théorème : Pointeur générique `void*` et pointeur NULL (King §17.1)
> Les fonctions d'allocation ignorent le type des données stockées : elles renvoient un **`void*`**, pointeur « générique » (une simple adresse), convertible vers tout type de pointeur sans cast explicite.
> En cas d'échec (bloc introuvable), elles renvoient un **pointeur NULL** (« pointer to nothing »), représenté par la macro `NULL` (définie dans `<locale.h>`, `<stddef.h>`, `<stdio.h>`, `<stdlib.h>`, `<string.h>`, `<time.h>`).
> $$
> p = \texttt{malloc}(10000); \quad \text{si } p == \texttt{NULL} \Rightarrow \text{échec d'allocation}
> $$
> **Tester la valeur de retour est la responsabilité du programmeur.** Déréférencer un pointeur NULL est un **comportement indéfini** (crash ou comportement erratique).

**Vérité booléenne des pointeurs (King) :** tous les pointeurs non nuls sont vrais, seul le pointeur nul est faux.

```c
if (p == NULL) ...   /* comparaison explicite — style préféré par King */
if (!p) ...          /* équivalent */
if (p) ...           /* équivalent à p != NULL */
```

> [!warning] Piège / Cas Particulier
> Ne **jamais** déréférencer un pointeur non initialisé ou NULL. Toujours vérifier le retour de toute fonction d'allocation avant utilisation.

---

## 3. Tableaux : Opérations de Base et Limites

### 3.1 Opérations élémentaires

**Échanger deux cases** (nécessite une variable temporaire) :

```c
int tmp = t[i];
t[i] = t[j];
t[j] = tmp;
```

> [!info] Définition / Théorème : Rôle de `tmp`
> Sans variable temporaire, la première affectation **écrase** une valeur avant qu'elle ne soit copiée : `t[i] = t[j]; t[j] = t[i];` produit deux copies identiques de `t[j]`.

**Recherche séquentielle** (coût pire cas : parcours complet, $O(n)$) :

```c
for (i = 0; i < n; i++) {
    if (t[i] == val)
        return i;      /* trouvé */
}
return -1;             /* non trouvé */
```

**Maximum** (initialiser → parcourir → mettre à jour) :

```c
int max = t[0];
for (i = 1; i < n; i++) {
    if (t[i] > max)
        max = t[i];
}
```

**Insérer** (décalage des éléments suivants vers la droite) :

> [!example] Exemple d'Application : Insertion dans un tableau
> Tableau initial $[10, 20, 30, 40]$ ; insérer $15$ à l'indice $1$ :
> $$
> [10, 20, 30, 40] \xrightarrow{\text{décalage}} [10, \underline{15}, 20, 30, 40]
> $$
> ```c
> for (i = n; i > pos; i--) {
>     t[i] = t[i - 1];
> }
> t[pos] = valeur;      /* nouvelle taille : n + 1 */
> ```

**Supprimer** (décalage des éléments suivants vers la gauche pour combler le « trou ») :

> [!example] Exemple d'Application : Suppression dans un tableau
> Tableau initial $[10, 20, 30, 40]$ ; supprimer l'indice $1$ :
> $$
> [10, \cancel{20}, 30, 40] \xrightarrow{\text{décalage}} [10, 30, 40]
> $$
> ```c
> for (i = pos; i < n - 1; i++) {
>     t[i] = t[i + 1];
> }
> /* nouvelle taille : n - 1 */
> ```

### 3.2 Limites des tableaux classiques

> [!warning] Piège / Cas Particulier : Limites des tableaux statiques
> 1. **Taille fixe** : définie à la compilation ; trop petit → débordement, trop grand → gaspillage.
> 2. **Insertion/suppression coûteuses** : tout accès au milieu exige des décalages en $O(n)$.
> 3. **Zone contiguë obligatoire** : le système doit trouver un bloc contigu suffisant, ce qui peut être difficile.
> 
> $\Rightarrow$ C'est l'allocation dynamique (tas) qui dépasse ces limites.

---

## 4. Relation Tableaux – Pointeurs (Decay)

> [!info] Définition / Théorème : Propriété fondamentale et decay
> Pour `int t[5];`, le nom `t` est équivalent à `&t[0]` :
> $$
> t == \&t[0] \quad (\text{vrai})
> $$
> `t` n'est **pas** un pointeur constant : c'est un tableau qui, dans la plupart des expressions, se **convertit automatiquement (decay)** en pointeur vers son premier élément.
> **Exceptions :** la conversion n'a pas lieu dans `sizeof(t)` (taille totale du tableau) ni avec l'opérateur `&t`.
> **Conséquence :** `t++` est **interdit** ; pour parcourir, déclarer un pointeur séparé `int *p = t;`.

**Parcours par pointeur vs par indice** (formes identiques en mémoire ; `t[i]` est compilé en `*(t + i)`) :

```c
int *p;
for (p = t; p < t + n; p++) {
    printf("%d", *p);
}
/* équivalent à */
for (i = 0; i < n; i++) {
    printf("%d", t[i]);
}
```

**Passage d'un tableau à une fonction** (deux écritures équivalentes) :

```c
void afficher(int t[], int n);
/* équivalent à */
void afficher(int *t, int n);
```

> [!info] Définition / Théorème : Sémantique du passage de tableau
> En C, **tous les arguments sont passés par valeur**. Le paramètre `int t[]` est ajusté en `int *t` : la fonction reçoit une **copie du pointeur** vers le premier élément. Ce n'est pas un vrai passage par référence, mais le pointeur copié pointe vers le tableau original : toute modification de `t[i]` dans la fonction **modifie le tableau original**.

### 4.1 Tableaux 2D et ordre ligne par ligne (row-major)

```c
int mat[3][4];      /* 3 lignes, 4 colonnes */
mat[i][j];          /* ligne i, colonne j */
```

> [!info] Définition / Théorème : Stockage row-major
> Une matrice `mat[3][4]` est stockée en mémoire linéaire **ligne par ligne** : toute la ligne 0, puis la ligne 1, puis la ligne 2 (12 cellules contiguës).

> ![[Pasted image 20261008142048.png]]
> *(Description précise de l'illustration : matrice 3×4 indexée 0–2 projetée sur une rangée continue de 12 cellules en ordre row-major)*

**Matrice dynamique avec `int**` :**

> [!example] Exemple d'Application : Allocation et libération d'une matrice dynamique
> ```c
> /* 1. Allouer le tableau de pointeurs (lignes) */
> int **tab = malloc(n * sizeof(int *));
> /* 2. Allouer chaque ligne */
> for (i = 0; i < n; i++) {
>     tab[i] = malloc(m * sizeof(int));
> }
> /* ... utilisation tab[i][j] ... */
> /* 3. Libérer ligne par ligne, puis le tableau de pointeurs */
> for (i = 0; i < n; i++) {
>     free(tab[i]);
> }
> free(tab);
> ```

### 4.2 Chaînes de caractères et pointeurs

> [!info] Définition / Théorème : Chaîne en C
> Une chaîne est un tableau de `char` terminé par le caractère nul `'\0'`.
> ```c
> char s[] = "ENSAM";
> char *p = s;          /* pointeur séparé ; s++ est interdit */
> while (*p != '\0') { p++; }
> ```

> [!example] Exemple d'Application : `longueur` (comme `strlen`) et `copier` (comme `strcpy`)
> ```c
> int longueur(char *s) {
>     int n = 0;
>     while (*s != '\0') {   /* s pointe le 1er caractère, *s = caractère courant */
>         n++;               /* s++ avance au caractère suivant */
>         s++;
>     }
>     return n;              /* arrêt quand *s == '\0' */
> }
>
> void copier(char *dest, char *src) {
>     while (*src != '\0') {
>         *dest = *src;
>         dest++;
>         src++;
>     }
>     *dest = '\0';          /* ne pas oublier le terminateur */
> }
>
> /* Version compacte (idiome C classique) : copie le caractère ET avance */
> /* les deux pointeurs ; s'arrête quand '\0' est copié (valeur fausse).   */
> while (*dest++ = *src++)
>     ;
> ```

---

## 5. Allocation Dynamique : `malloc`, `calloc`, `realloc`

> [!info] Définition / Théorème : `malloc` (King §17.1–17.3)
> ```c
> void *malloc(size_t size);
> ```
> Alloue un bloc de `size` octets (**non initialisé**) et renvoie un pointeur vers celui-ci, ou `NULL` en cas d'échec. `size_t` est un type entier non signé.
> **Toujours utiliser `sizeof`** pour calculer la place nécessaire (portabilité 32/64 bits) :
> ```c
> int *a;
> a = malloc(n * sizeof(int));
> ```

> [!warning] Piège / Cas Particulier : Sous-allocation
> ```c
> a = malloc(n * 2);   /* FAUX si sizeof(int) > 2 (quasi toutes les machines) */
> ```
> Le bloc est trop petit : les accès ultérieurs provoquent crash ou comportement erratique. Échec d'allocation suffisant $\Rightarrow$ conséquences sévères.

> [!info] Définition / Théorème : `calloc` (King §17.3)
> ```c
> void *calloc(size_t nmemb, size_t size);
> ```
> Alloue un tableau de `nmemb` éléments de `size` octets et **initialise tous les bits à 0** (plus lent mais plus sûr). Utilisable pour tout type de donnée :
> ```c
> struct point { int x, y; } *p;
> p = calloc(1, sizeof(struct point));   /* x et y garantis à 0 */
> ```

> [!info] Définition / Théorème : `realloc` et règles du standard C (King §17.3)
> ```c
> void *realloc(void *ptr, size_t size);
> ```
> Redimensionne un bloc obtenu par un `malloc`/`calloc`/`realloc` antérieur (agrandir ou réduire), en préservant les données.
> **Règles du standard :**
> 1. En extension, les octets ajoutés ne sont **pas initialisés** ;
> 2. Si l'agrandissement est impossible : renvoie `NULL`, **l'ancien bloc est inchangé** ;
> 3. `realloc(NULL, size)` se comporte comme `malloc(size)` ;
> 4. `realloc(ptr, 0)` libère le bloc ;
> 5. Réduction « in place » sans déplacement ; extension « in place » si possible, sinon nouveau bloc + **copie** du contenu $\Rightarrow$ **mettre à jour tous les pointeurs** après `realloc`.

> [!warning] Piège / Cas Particulier : `realloc` exige un pointeur temporaire
> ```c
> int *temp;
> temp = realloc(tab, new_size);
> if (temp == NULL) {
>     /* tab est encore valide : ne surtout pas l'écraser */
>     return;
> }
> tab = temp;
> ```
> Écrire directement `tab = realloc(tab, ...)` perd l'ancien bloc si `realloc` échoue (fuite + pointeur NULL).
> De plus, le pointeur passé à `realloc` doit **impérativement** provenir d'un `malloc`/`calloc`/`realloc` antérieur (sinon comportement indéfini).

**Vérification systématique du retour (code sûr) :**

```c
int *p;
p = malloc(sizeof(int));
if (p == NULL) {
    printf("Erreur allocation");
    return 1;
}
/* utiliser p ici */
```

| Fonction | Rôle | Initialise ? | Syntaxe type |
| :--- | :--- | :--- | :--- |
| `malloc(t)` | allouer $t$ octets | **non** (valeurs aléatoires) | `int *p = malloc(sizeof(int));` |
| `calloc(n, t)` | allouer $n \times t$ octets | **oui** (tout à zéro) | `int *p = calloc(n, sizeof(int));` |
| `realloc(p, t)` | redimensionner le bloc `p` | non (préserve les données) | `p = realloc(p, nouvelle_taille);` |
| `free(p)` | libérer le bloc `p` | — | `free(p); p = NULL;` |

### 5.1 Chaînes allouées dynamiquement (King §17.2)

> [!info] Définition / Théorème : `malloc` pour une chaîne
> `sizeof(char) == 1` : pour $n$ caractères, allouer $n + 1$ octets (**place pour le caractère nul**) :
> ```c
> char *p = malloc(n + 1);      /* cast inutile : void* converti automatiquement */
> strcpy(p, "abc");             /* mémoire non initialisée : initialiser explicitement */
> ```

> [!warning] Piège / Cas Particulier
> Oublier le `+1` pour `'\0'` provoque un débordement d'un octet lors de `strcpy`/`strcat` : corruption mémoire silencieuse.

> [!example] Exemple d'Application : Fonction `concat` renvoyant une « nouvelle » chaîne (King §17.2)
> La bibliothèque standard n'offre pas de concaténation sans modifier ses entrées (`strcat` modifie l'une des deux). On l'écrit soi-même :
> ```c
> char *concat(const char *s1, const char *s2) {
>     char *result;
>     result = malloc(strlen(s1) + strlen(s2) + 1);
>     if (result == NULL) {
>         printf("Error: malloc failed in concat\n");
>         exit(EXIT_FAILURE);
>     }
>     strcpy(result, s1);
>     strcat(result, s2);
>     return result;
> }
> ```
> Appel : `p = concat("abc", "def");` $\Rightarrow$ `p` pointe vers `"abcdef"` (7 caractères, `'\0'` inclus), stocké dans un tableau dynamique.
> **Obligation :** appeler `free` sur la chaîne retournée dès qu'elle n'est plus utile, sinon fuite mémoire.

> [!example] Exemple d'Application : Tableau de chaînes dynamiques — `remind2.c` (King §17.2)
> Remplacer un tableau 2D `char reminders[MAX_REMIND][MSG_LEN+1]` par un tableau de pointeurs vers chaînes dynamiques apporte deux avantages : (i) allocation du **nombre exact** de caractères ; (ii) insertion sans `strcpy` de décalage — on ne déplace que des **pointeurs**.
> ```c
> char *reminders[MAX_REMIND];
> char day_str[3], msg_str[MSG_LEN + 1];
> int day, i, j, num_remind = 0;
>
> for (;;) {
>     if (num_remind == MAX_REMIND) { printf("-- No space left--\n"); break; }
>     printf("Enter day and reminder:");
>     scanf("%2d", &day);
>     if (day == 0) break;
>     sprintf(day_str, "%2d", day);
>     read_line(msg_str, MSG_LEN);
>
>     for (i = 0; i < num_remind; i++)
>         if (strcmp(day_str, reminders[i]) < 0) break;
>     for (j = num_remind; j > i; j--)
>         reminders[j] = reminders[j - 1];      /* décalage de pointeurs only */
>
>     reminders[i] = malloc(2 + strlen(msg_str) + 1);
>     if (reminders[i] == NULL) { printf("-- No space left--\n"); break; }
>     strcpy(reminders[i], day_str);
>     strcat(reminders[i], msg_str);
>     num_remind++;
> }
> ```

---

## 6. Libération : `free`, Fuites et Pointeurs Pendants

> [!info] Définition / Théorème : `free` (King §17.4)
> ```c
> void free(void *ptr);
> ```
> Rend au système le bloc pointé par `ptr`, disponible pour de futures allocations.
> **Contraintes :** l'argument doit être un pointeur **préalablement renvoyé par une fonction d'allocation** (ou `NULL`, auquel cas `free` n'a aucun effet). Passer tout autre pointeur (variable locale, élément de tableau…) est un **comportement indéfini**.

> [!warning] Piège / Cas Particulier : Fuite mémoire (memory leak / garbage)
> Un bloc alloué puis **perdu de vue** devient du « garbage » : C n'a **pas de ramasse-miettes**, chaque programme recycle lui-même sa mémoire.
> ```c
> /* Cas 1 : oubli simple de free */
> void fonction(void) {
>     int *p = malloc(sizeof(int));
>     *p = 42;
>     /* free(p) oublié : p (variable locale) est détruit, le bloc reste alloué */
> }
>
> /* Cas 2 : perte de la référence (le plus dangereux) */
> int *p = malloc(100 * sizeof(int));
> p = malloc(200 * sizeof(int));   /* le 1er bloc (100 ints) est PERDU à jamais */
>
> /* Version King : p = q rend le 1er bloc inaccessible */
> p = malloc(...);
> q = malloc(...);
> p = q;                            /* plus aucun pointeur vers le 1er bloc */
> ```
> Dans un programme long (serveur, boucle infinie), les fuites s'accumulent jusqu'à consommer toute la mémoire $\Rightarrow$ crash du programme ou du système.

> ![[Pasted image 20261008203836.png]]
> *(Description précise de l'illustration : deux blocs alloués pointés par p et q ; après p = q, le premier bloc (grisé) n'a plus aucun pointeur : garbage)*

> [!warning] Piège / Cas Particulier : Pointeur pendant (dangling pointer)
> `free(p)` libère le bloc **mais ne modifie pas `p`** :
> ```c
> char *p = malloc(4);
> ...
> free(p);
> ...
> strcpy(p, "abc");   /* *** WRONG *** : mémoire déjà rendue au système */
> ```
> Accéder ou modifier un bloc libéré = comportement indéfini, crash probable.
> **Aggravant :** plusieurs pointeurs peuvent viser le même bloc ; après `free`, **tous** pendent.

> [!warning] Piège / Cas Particulier : Double free
> Appeler `free(p)` deux fois sur le même pointeur $\Rightarrow$ crash ou corruption mémoire.
> **Règle d'or :** `free(p); p = NULL;` toujours ensemble — `NULL` neutralise dangling et double free (car `free(NULL)` est inoffensif).

> ![[Pasted image 20261008204030.png|606]]
> *(Description précise de l'illustration : avant free — bloc alloué pointé par p ; après free — mémoire rendue au système, p non modifié pointe vers un bloc invalide)*

> [!abstract] Modélisation : Cycle de vie d'un tableau dynamique
> 1. **Lire** $n$ (taille désirée) ;
> 2. **Allouer** : `tab = malloc(n * sizeof(int));`
> 3. **Vérifier** : `if (tab == NULL) ...`
> 4. **Utiliser** : `tab[i]` ;
> 5. **Libérer** : `free(tab); tab = NULL;`

> [!abstract] Bonnes Pratiques (Checklist Mémoire)
> 6. Toujours vérifier le retour != `NULL` après chaque allocation ;
> 7. Toujours utiliser `sizeof` pour la taille (portabilité) ;
> 8. Libérer toute mémoire allouée dès qu'elle n'est plus nécessaire ;
> 9. `p = NULL` après `free` ;
> 10. Pointeur **temporaire** avec `realloc` — jamais `p = realloc(p, ...)` ;
> 11. Jamais de double free, jamais d'accès après `free` ;
> 12. Préférer `calloc` pour les tableaux nécessitant une initialisation à zéro.

---

## 7. Structures et Pointeurs vers Structures

> [!info] Définition / Théorème : `struct` et `typedef`
> Une structure regroupe des champs de **types différents** sous un même nom (nouveau type composé) :
> ```c
> struct Etudiant {
>     int id;
>     float moyenne;
>     char nom[50];
> };
>
> typedef struct {
>     int id;
>     float moyenne;
> } Etudiant;                 /* alias de type : s'utilise comme int ou float */
>
> Etudiant e;
> e.id = 1;                   /* opérateur point (.) sur variable structure */
> e.moyenne = 15.5;
> ```

> [!info] Définition / Théorème : Opérateur `->`
> Avec un pointeur vers structure :
> ```c
> Etudiant e;
> Etudiant *p = &e;
> p->moyenne = 16;        /* équivalent à (*p).moyenne = 16; */
> ```
> `->` contracte `(*p).` : déréférence **et** accès au champ en une opération. C'est la notation standard.

---

## 8. Vers les Listes Chaînées (Aperçu)

> [!info] Définition / Théorème : Nœud et liste chaînée (King §17.5)
> Une liste chaînée est une **chaîne de structures (nœuds)**, chaque nœud contenant un pointeur vers le nœud suivant ; le dernier contient un pointeur **NULL**.
> ```c
> typedef struct Node {
>     int data;
>     struct Node *next;
> } Node;
> ```
> Alternative aux tableaux : insertion/suppression faciles, croissance libre ; en contrepartie, **perte de l'accès aléatoire** (tout élément d'un tableau s'accède en temps constant, pas celui d'une liste).

| | 📦 Tableau | 🔗 Liste chaînée |
| :--- | :--- | :--- |
| **Stockage** | contigu (zone unique) | dispersé, relié par pointeurs |
| **Taille** | fixe (ou `realloc`) | flexible (croît/diminue librement) |
| **Accès au $i$-ème** | $O(1)$ | $O(n)$ |
| **Insertion en tête** | $O(n)$ (décalages) | $O(1)$ |
| **Insertion après nœud connu** | $O(n)$ (décalages) | $O(1)$ |
| **Recherche du nœud précédent** | — | peut coûter $O(n)$ |

> ![[Pasted image 20261008204131.png|571]]
> *(Description précise de l'illustration : chaîne de nœuds (data + next) dont le dernier pointe vers NULL, comparée à un bloc contigu de tableau)*

---

## 9. Synthèse du Chapitre

> [!abstract] Ce que ce chapitre établit
> - **Mémoire** : stack vs heap, segments, épuisement du tas ;
> - **Pointeurs** : déclaration, `&`, `*`, `void*`, NULL, passage par adresse, arithmétique, decay (`t == &t[0]`, exceptions `sizeof(t)` et `&t`) ;
> - **Tableaux** : contiguïté, opérations de base (swap, recherche, min/max, insertion/suppression en $O(n)$), passage à une fonction, row-major 2D, matrice dynamique `int**` ;
> - **Allocation dynamique** : `malloc` / `calloc` / `realloc` / `free`, règles du standard pour `realloc`, erreurs classiques (fuite, dangling, double free) et checklist de bonnes pratiques ;
> - **Structures** : `struct`, `typedef`, opérateurs `.` et `->`, pointeurs vers struct ;
> - **Transition** : les tableaux exigent une zone contiguë et des décalages coûteux ; les listes chaînées dispersent les éléments reliés par pointeurs — tous les outils nécessaires à leur implémentation sont désormais acquis.

---
# ~={red}References=~
- *Chapitre 1 — Rappels : mémoire, pointeurs et tableaux — ENSAM Casablanca*
- *C Programming: A Modern Approach (2nd ed.), K. N. King — Ch. 17 « Advanced Uses of Pointers » (p. 413–424)*