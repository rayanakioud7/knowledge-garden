
**Tags:** [[NLP]], [[Artificial intelligence]], [[Machine Learning]], [[Transformers]], [[Text Mining]]

---

## 1. Introduction et Applications du NLP

Le NLP (Natural Language Processing) est un domaine de l'IA permettant aux machines de **comprendre, interpréter, manipuler et générer** du texte en langage naturel.

> [!info] Applications concrètes
> - **Assistants vocaux :** Siri, Alexa (Reconnaissance vocale $\rightarrow$ Texte $\rightarrow$ Compréhension NLP).
> - **Chatbots :** Réponse automatique (ex: GPT).
> - **Analyse de sentiments :** Surveiller l'opinion publique sur les réseaux sociaux.
> - **Traduction automatique :** Google Translate.
> - **Reconnaissance d'entités nommées :** Extraction d'informations dans des CV ou des articles.

> [!warning] Les 3 Défis Majeurs du NLP
> 1. **Ambiguïté linguistique :** "Je vais à la banque" (Institution financière vs bord de rivière).
> 2. **Variabilité du langage :** Slang, expressions idiomatiques, fautes d'orthographe.
> 3. **Dépendance au contexte :** "Ce film est sick !" (Négatif en contexte médical, positif en argot).

---

## 2. Modèles de NLP : Statistiques vs Transformers

### A. Modèles de langage statistique
Modèles historiques qui prédisent la probabilité d'une séquence de mots basée sur des statistiques d'occurrence (ex: N-grams, probabilités conditionnelles).

> [!example] Fonctionnement par les statistiques
> **Phrase :** "Le chat est sur le….."
> **Résultat :** Le modèle va chercher dans de vastes corpus de textes et calculer statistiquement que le mot le plus probable qui suit "sur le" est "toit" ou "tapis". Il n'y a aucune "compréhension" sémantique, juste du calcul de fréquences.

### B. Les Transformers (Révolution de 2017)
Introduits par Vaswani et al. (*"Attention is All You Need"*). Ils remplacent les RNN/LSTM qui oubliaient le début des longues phrases. Leur clé de voûte est le **mécanisme d'attention** : le modèle pondère l'importance de chaque mot par rapport aux autres, peu importe leur distance dans la phrase.

> [!example] Résolution du contexte avec l'Attention
> **Phrase :** *"Le chat mange la souris parce qu'il a faim."*
> - **Le cerveau humain** sait que "il" = "chat" car l'action de manger et la faim sont liées au prédateur.
> - **Le Transformer** fait de même : il attribue un "poids d'attention" élevé entre le mot "il" et le mot "chat", et un poids faible avec "souris". Il comprend ainsi le lien contextuel sans avoir besoin de traiter les mots un par un séquentiellement.

**Variantes architecturales :**
- **BERT :** Bidirectionnel. Lit la phrase dans les deux sens $\rightarrow$ Parfait pour la **compréhension** (classification, recherche).
- **GPT :** Unidirectionnel (de gauche à droite). Prédit le mot suivant $\rightarrow$ Parfait pour la **génération** (Chatbots).

---

## 3. Le Pipeline de Prétraitement du Texte

Le texte brut doit être normalisé avant d'être modélisé. Voici les étapes clés :

### Étape 1 : La Tokenisation
Découpage du texte en unités élémentaires (tokens).

> [!example] Tokenisation (avec ponctuation)
> **Texte :** `He obtained his Ph.D., and then said: I am happy!`
> **Résultat :** `['He', 'obtained', 'his', 'Ph.D.', ',', 'and', 'then', 'said', ':', 'I', 'am', 'happy', '!']`

### Étape 2 : Normalisation (Stemming vs Lemmatisation)
Objectif : Réduire la taille du vocabulaire. On met tout en minuscules  (Ex.: He -> he) et on supprime les *stop words* (and, the, a...).

| Technique | Principe | Qualité du résultat | Exemple |
| :--- | :--- | :--- | :--- |
| **Stemmatisation** | Coupe brute des suffixes selon des règles fixes (ex: Porter Stemmer). | Racine non réelle ("pseudo-mot") | "obtained" $\rightarrow$ "obtain" |
| **Lemmatisation** | Cherche la forme canonique (lemme) via un dictionnaire. | Vrai mot du dictionnaire | "am", "is", "was" $\rightarrow$ "be" |

> [!example] Comparaison sur une phrase complète
> **Texte :** `He obtained his Ph.D., and then said: I am happy!`
> **Lemmatisation :** `['He', 'obtain', 'his', 'Ph.D.', ',', 'and', 'then', 'say', ':', 'I', 'be', 'happy', '!']`
> *(Remarque : la lemmatisation est plus coûteuse mais bien plus précise).*

> [!tip] Implémentation en Python
> - **NLTK (Lemmatisation) :** Utilise le dictionnaire statique *WordNet*. Il faut souvent fournir le tag grammatical (POS) manuellement pour qu'il fonctionne bien.
> 
> - **spaCy (Lemmatisation) :** Utilise un modèle de Deep Learning (CNN). Il lit la phrase entière, devine le POS tag automatiquement grâce au contexte, puis trouve le lemme. *(Plus précis, >97% de précision).*

### Étape 3 : Part-of-Speech (POS) Tagging
Attribution de la nature grammaticale (Nom, Verbe, Adjectif...) à chaque token. C'est une tâche de *Sequence Labeling*.

> [!example] Annotation POS
> **Texte :** `He obtained his Ph.D., and then said: I am happy!`
> **Résultat :** `['PRON', 'VERB', 'PRON', 'NOUN', 'PUNCT', 'CCONJ', 'ADV', 'VERB', 'PUNCT', 'PRON', 'AUX', 'ADJ', 'PUNCT']`

> [!note] Comment fonctionne le modèle de NLTK (Averaged Perceptron) ?
> Il s'entraîne sur des phrases étiquetées. Pour un mot inconnu, il regarde le mot précédent/suivant et les suffixes.
> **Pourquoi "Averaged" (Moyenné) ?** Pendant l'entraînement, les poids du modèle changent à chaque erreur et peuvent devenir instables (overfitting sur les derniers exemples). La technique consiste à faire la **moyenne de tous les poids** générés durant tout l'entraînement pour obtenir un modèle final ultra-stable.

### Étape 4 : Reconnaissance d'Entités Nommées (NER)
Extraction et classification des entités spécifiques (Personnes, Organisations, Lieux).

> [!example] Extraction NER
> **Texte :** `Elon Musk secretly acquired Twitter stock before buying company, Morgan Stanley hid detail, says shareholder lawsuit`
> **Résultat :**
> - `Elon Musk` $\rightarrow$ **PERSON**
> - `Twitter` $\rightarrow$ **PRODUCT**
> - `Morgan Stanley` $\rightarrow$ **ORG**

### Étape 5 : Parsing (Analyse syntaxique)
Comprendre "qui fait quoi à qui" en créant un arbre ou un graphe de dépendances.

> [!example] Parsing de "The cat eats a fish"
> 1. **Token + POS :** The(DET) + cat(NOUN) + eats(VERB) + a(DET) + fish(NOUN)
> 2. **Graphe de dépendance :**
>    ```text
>         eats (Racine/ROOT)
>        /     \
>      cat     fish
>      /         \
>    The          a
>    (nsubj)      (obj)
>     ```
> **Comment le parser sait-il que "cat" est le sujet ?**
> 3. Règle universelle : En anglais, le sujet précède souvent le verbe.
> 4. Le modèle (ex: spaCy) a été entraîné sur des millions de phrases annotées par des linguistes. Il a appris statistiquement que la séquence `DET + NOUN + VERB` signifie que le `NOUN` est le sujet (`nsubj`).

---

## 4. Analyse de Sentiments : Approches Lexicales

Ces méthodes basent leur analyse sur des dictionnaires de mots pré-classés. **Limites majeures :** Elles ne comprennent pas le contexte global ni la négation (ex: "Pas mauvais" sera noté négatif).

### En R : Bibliothèque `syuzhet` (Fonction `get_sentiment`)
> [!example] Analyse pas-à-pas de : *"I love this phone. It's amazing but a bit expensive."*

Selon la méthode choisie, le calcul change :
- **Méthode `bing` (Binaire) :** Chaque mot est +1 ou -1.
  - *love (+1) + amazing (+1) + expensive (-1) = **+1*** (Positif, sans nuance d'intensité).
  
- **Méthode `afinn` (Pondéré -5 à +5) :** Tient compte de l'intensité.
  - *love (+3) + amazing (+4) + expensive (-2) = **+5*** (Positif fort).
  
- **Méthode `syuzhet` (Flottant) :** Dictionnaire optimisé pour la fiction (165 000 phrases).
  - *love (+0.9) + amazing (+0.8) + expensive (-0.3) = **+1.4*** (Positif modéré).
  
- **Méthode `nrc` (Pluri-émotionnel) :** Associe les mots à 8 émotions (Joie (joy), Colère (anger), Peur (fear), Tristesse (sadness), Dégoût (disgust), Surprise (surprise), Anticipation, Confiance (trust)) + polarité.
  - *love $\rightarrow$ joie/confiance, amazing $\rightarrow$ surprise/joie, expensive $\rightarrow$ négatif.* (Ne donne pas de score unique, mais une carte émotionnelle).

### En Python : Bibliothèque `TextBlob` / `TextBlobFR`
Retourne un tuple : `(Polarité [-1 à 1], Subjectivité [0 à 1])`.

> [!example] Calcul avec modificateurs d'intensité (Anglais)
> **Phrase :** *"I am very happy but a little sad."*
> 1. **Identification des mots porteurs :** happy (+0.8), sad (-0.6).
> 2. **Application des modificateurs (Adverbes) :**
>    - "very" intensifie ($\times 1.3$) $\rightarrow$ happy devient $+0.8 \times 1.3 = \mathbf{+1.04}$
>    - "little" diminue ($\times 0.5$) $\rightarrow$ sad devient $-0.6 \times 0.5 = \mathbf{-0.30}$
> 3. **Moyenne des scores :**
>    - Polarité = $(+1.04 - 0.30) / 2 = \mathbf{0.37}$
>    - Subjectivité = $(1.0 + 1.0) / 2 = \mathbf{1.0}$

> [!example] Calcul avec TextBlobFR (Français)
> **Phrase :** *"Ce produit est mauvais et inutile."*
> Le lexique français (Pattern.fr) donne : mauvais $\approx -0.8$, inutile $\approx -0.7$.
> - Polarité = $(-0.8 - 0.7) / 2 = \mathbf{-0.75}$ (Fortement négatif)
> - Subjectivité = $(0.7 + 0.9) / 2 = \mathbf{0.8}$ (Très subjectif)

> [!warning] Limites de ces méthodes
> Face à l'ironie ou au contexte, il faut utiliser des modèles basés sur les Transformers (ex: **CamemBERT** pour le français via Hugging Face), qui comprennent la sémantique globale de la phrase.

---

## 5. Vectorisation : Transformer le texte en nombres

Les algorithmes de Machine Learning ne lisent pas de lettres, ils lisent des matrices.

### A. Bag of Words (BoW - Sac de mots)
On compte la fréquence de chaque mot sans se soucier de l'ordre ni de la grammaire.

> [!example] Exercice BoW
> Phrase 1 : "Le chat est bon"
> Phrase 2 : "Le chat est mauvais"
> **Vocabulaire global :** [le, chat, est, bon, mauvais]
> **Vecteurs :**
> - P1 = `[1, 1, 1, 1, 0]`
> - P2 = `[1, 1, 1, 0, 1]`
> *(Inconvénient : "bon" et "mauvais" sont vus comme des mots totalement indépendants, pas d'antonymie comprise).*

### B. TF-IDF (Term Frequency - Inverse Document Frequency)
Améliore le BoW en donnant beaucoup de poids aux mots **rares et caractéristiques** d'un document, et en pénalisant les mots présents partout (ex: "le", "est").

**Formule exacte utilisée par Scikit-Learn en Python :**
$$TF\text{-}IDF(t, d) = TF(t, d) \times \left( \log\left(\frac{1 + N}{1 + df(t)}\right) + 1 \right)$$
* $N$ = Nombre total de documents.
* $df(t)$ = Nombre de documents contenant le mot $t$.
utiliser le logarithme népérien $(ln)$ pour obtenir les résultats de tableau (page 88 dans le cour)

> [!example]+ Exercice Résolu : Le Piège de la Normalisation L2
> **Phrase de base :** *"I eat the food and drink the water. What do I do now ?"*
> On la sépare en 2 documents (Corpus) :
> - **Doc 1 :** "I eat the food and drink the water" *(8 mots)*
> - **Doc 2 :** "What do I do now" *(5 mots)*
> Donc $N = 2$.
>
> **Étape 1 : Calcul de la Fréquence (TF)**
> Scikit-learn calcule le TF comme : $\frac{\text{Nombre d'occurrences du mot dans le document}}{\text{Nombre total de mots du document}}$
> - Pour "i" dans Doc 1 : $1 / 8 = \mathbf{0.125}$
> - Pour "the" dans Doc 1 : $2 / 8 = \mathbf{0.25}$
> - Pour "do" dans Doc 2 : $2 / 5 = \mathbf{0.4}$
>
> **Étape 2 : Calcul de l'IDF**
> - Le mot "i" est dans les 2 documents : $df(t) = 2$.
>   $IDF = \ln(\frac{1+2}{1+2}) + 1 = \ln(1) + 1 = 0 + 1 = \mathbf{1}$
> - Les autres mots sont dans 1 seul document : $df(t) = 1$.
>   $IDF = \ln(\frac{1+2}{1+1}) + 1 = \ln(1.5) + 1 \approx 0.585 + 1 = \mathbf{1.405}$
>
> **Étape 3 : Le calcul BRUT (Multiplication TF $\times$ IDF)**
> *(C'est le tableau que vous obtenez en faisant le calcul à la main sur votre brouillon)*
>
> | Mot | df(t) | IDF(t) | TF Doc 1 | TF Doc 2 | **TF-IDF BRUT Doc 1** | **TF-IDF BRUT Doc 2** |
> |---|---|---|---|---|---|---|
> | i | 2 | 1 | 0.125 | 0.2 | **0.125** | **0.2** |
> | the | 1 | 1.405 | 0.25 | 0 | **0.35125** | **0** |
> | eat | 1 | 1.405 | 0.125 | 0 | **0.175625** | **0** |
> | do | 1 | 1.405 | 0 | 0.4 | **0** | **0.562** |
> | *(...autres mots...)* | 1 | 1.405 | 0.125 | 0.2 | **0.175625** | **0.281** |
>
> **Étape 4 : LE PIÈGE DE L'EXAMEN (Normalisation L2)**
> Si vous lancez `TfidfVectorizer` en Python, pour le mot "i" dans le Doc 1, vous n'obtiendrez pas `0.125`, mais **`0.23`**. Pourquoi ?
> Parce que Scikit-learn applique par défaut une **Normalisation Euclidienne (L2)** sur chaque vecteur de document. 
> La formule de la norme L2 est : $||V||_2 = \sqrt{\sum_{t} (TF\text{-}IDF_{brut})^2}$
> Le score final de chaque mot est divisé par cette norme : $Score_{final} = \frac{TF\text{-}IDF_{brut}}{||V||_2}$
>
> **Résolution manuelle pour trouver 0.23 :**
> 1. Somme des carrés des TF-IDF bruts du Doc 1 :
>    $0.125^2 + 0.35125^2 + (5 \times 0.175625^2) + 0^2 + 0^2$
>    $= 0.0156 + 0.1233 + 0.1850 \approx \mathbf{0.293}$
> 2. Racine carrée (Norme L2 du Doc 1) :
>    $\sqrt{0.293} \approx \mathbf{0.541}$
> 3. Score final normalisé pour le mot "i" :
>    $0.125 / 0.541 \approx \mathbf{0.23}$ 
> 

**Tableau Final (Résultat Python) :**

| Mot                          | Doc 1 (Normalisé L2) | Doc 2 (Normalisé L2) |
| ---------------------------- | -------------------- | -------------------- |
| i                            | **0.23**             | 0.28                 |
| the                          | **0.65**             | 0                    |
| do                           | 0                    | **0.72**             |
| eat, food, and, drink, water | **0.32**             | 0                    |
| what, now                    | 0                    | **0.39**             |



> [!tip] Pourquoi utiliser TF-IDF plutôt que BoW ?
> - **Si $df(t) \approx N$** (le mot est partout) : $\log(1) = 0$. Le poids du mot s'effondre (ex: les articles "le", "the" deviennent inutiles).
> - **Si $df(t) \ll N$** (le mot est rare) : Le log est grand. Le mot est considéré comme très informatif.
> - **Conseil ML :** Utilisez **BoW** avec Naive Bayes. Utilisez **TF-IDF** avec Régression Logistique ou SVM.


> [!tip] Conseil pour l'examen (Quand utiliser quoi ?)
> - **BoW** est un excellent point de départ si vous utilisez le modèle **Naive Bayes Multinomial**.
> - **TF-IDF** est à privilégier avec la **Régression Logistique**, **SVM** ou les **Réseaux de Neurones**, car il élimine le "bruit" des mots vides.



# References

[[Cours_IA_NLP 1.pdf]]