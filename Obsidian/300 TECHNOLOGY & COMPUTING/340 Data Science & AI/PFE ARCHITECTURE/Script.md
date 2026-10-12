# Script de Présentation — 15 Minutes

## Système de Reconnaissance et Traduction de la Langue des Signes Américaine (ASL)

### Rayan Akioud · Debbab Boutaina | FSTM 2025–2026

---

> **Note sur le timing :** Ce script est calibré pour environ 15 minutes à un débit de présentation normal, avec des pauses. Comptez environ 1 minute par diapositive en moyenne, un peu plus pour les diapositives 5, 9 et 12 qui portent les résultats principaux. Le langage est volontairement simple — pas de jargon inutile — mais le contenu technique reste complet, parce que le jury comprend les maths et l'IA. Ne lisez jamais une phrase mot à mot sur la diapositive : reformulez avec vos propres mots, le script n'est qu'un guide.

---

## SLIDE 1 — Page de titre _(environ 45 secondes)_

> "Bonjour à tous, et merci d'être ici aujourd'hui.
> 
> Je m'appelle Rayan Akioud, et je suis accompagné de ma collègue Boutaina Debbab. Ensemble, nous allons vous présenter notre projet de fin d'études.
> 
> Le sujet, c'est un système qui reconnaît la langue des signes américaine en temps réel, directement à partir d'une webcam, et qui transforme les signes reconnus en phrases écrites en anglais. Donc concrètement, une personne fait des signes devant la caméra, et le système comprend ce qu'elle dit, et l'écrit à l'écran pour qu'une personne entendante puisse la comprendre.
> 
> Dans les prochaines quinze minutes, on va vous expliquer quatre choses. D'abord, pourquoi ce problème est important et pourquoi on a choisi de le traiter. Ensuite, comment on a construit le système, étape par étape — les données qu'on a utilisées, le modèle qu'on a entraîné, et l'application qu'on a développée. Après ça, on vous montrera les résultats qu'on a obtenus, avec des chiffres précis. Et enfin, on sera honnêtes sur les limites actuelles du système, et sur ce qu'on aimerait améliorer dans le futur.
> 
> Commençons par le commencement : pourquoi ce projet existe."

_[Transition vers Slide 2]_

---

## SLIDE 2 — Introduction et contexte _(environ 1 minute 15)_

> "Dans le monde, il y a plus de soixante-dix millions de personnes sourdes ou malentendantes. Pour beaucoup d'entre elles, la langue des signes n'est pas juste un moyen de communication parmi d'autres — c'est leur langue principale, celle dans laquelle elles pensent et s'expriment au quotidien.
> 
> Et il faut bien comprendre une chose importante : la langue des signes n'est pas simplement de l'anglais traduit geste par geste. C'est une vraie langue, complète, avec sa propre grammaire, sa propre structure de phrase, et ses propres règles. Ce n'est pas une version simplifiée de l'anglais parlé.
> 
> Le problème, c'est que la grande majorité des gens qui entendent normalement ne connaissent pas cette langue. Et ça crée une vraie barrière dans la vie de tous les jours. Imaginez une personne sourde qui doit aller chez le médecin, ou s'inscrire dans une administration, ou simplement discuter avec un voisin. Sans interprète, la communication devient très difficile, parfois impossible.
> 
> La solution qui existe aujourd'hui, c'est l'interprète humain. Et c'est une bonne solution — mais elle a des limites évidentes. Un interprète, ça coûte cher. Il faut le réserver à l'avance. Il n'est pas toujours disponible au moment où on en a besoin, par exemple en cas d'urgence.
> 
> Alors on s'est posé une question simple : est-ce qu'on peut créer un système automatique, qui tourne sur un ordinateur normal, qui comprend les signes en temps réel à partir d'une simple webcam, et qui traduit directement en anglais écrit ? Un système toujours disponible, qui ne coûte rien à utiliser une fois installé, et qui respecte la vie privée de la personne puisque tout se passe localement, sans envoyer de vidéo sur internet.
> 
> C'est exactement ce qu'on a construit, et c'est ce qu'on va vous présenter maintenant."

_[Transition vers Slide 3]_

---

## SLIDE 3 — Vue d'ensemble du système et objectifs _(environ 1 minute 15)_

> "Avant d'entrer dans les détails techniques, on voudrait vous donner une vue d'ensemble : qu'est-ce que le système fait exactement, et quelles règles on s'est fixées dès le départ.
> 
> On a posé quatre contraintes principales, et chacune a influencé une partie importante de notre travail.
> 
> Première contrainte : utiliser uniquement du matériel grand public. Pas de capteur de profondeur, pas de caméra spéciale, pas de gants connectés. Juste une webcam normale, comme celle qu'on a tous sur notre ordinateur portable. L'objectif, c'est que n'importe qui puisse utiliser ce système sans acheter du matériel supplémentaire.
> 
> Deuxième contrainte, et c'est sans doute la plus difficile : l'indépendance par rapport au signeur. Ça veut dire que le système doit reconnaître les signes faits par des personnes qu'il n'a jamais vues pendant son entraînement, sans avoir besoin d'une phase d'apprentissage spécifique pour chaque nouvel utilisateur. C'est très important, parce qu'un système qui ne marche que pour les personnes déjà vues pendant l'entraînement n'a aucune utilité pratique.
> 
> Troisième contrainte : tout doit fonctionner localement, sur l'appareil de l'utilisateur, sans dépendre d'internet ou d'un serveur distant. Ça garantit la rapidité, la disponibilité même sans connexion, et surtout la confidentialité, puisqu'aucune image de la personne n'est envoyée ailleurs.
> 
> Et quatrième contrainte : le résultat final doit être une application autonome, un simple fichier exécutable pour Windows, que n'importe qui peut installer sans avoir besoin d'installer Python ou des bibliothèques compliquées.
> 
> En bas de l'écran, vous voyez le pipeline complet, de l'entrée à la sortie. On part de l'image de la webcam, on extrait les points clés du corps, on normalise ces données, on les passe dans notre modèle de reconnaissance, et enfin on traduit la séquence de signes reconnus en une phrase en anglais. Toutes ces étapes ensemble prennent moins d'une demi-seconde. On va maintenant détailler chacune de ces étapes, en commençant par la première phase de notre travail."

_[Transition vers Slide 4]_

---

## SLIDE 4 — Phase 1 : Exploration et modèle de base _(environ 1 minute 45)_

> "Notre projet s'est déroulé en deux grandes phases. La première phase, c'était une phase d'exploration. Avant de se lancer dans un projet de grande échelle, on voulait d'abord vérifier que notre idée de base fonctionnait, avec des moyens limités.
> 
> Pour ça, on a utilisé un dataset public appelé MS-ASL, créé par Microsoft. On a sélectionné un sous-ensemble de soixante signes différents — des mots courants comme 'merci', 'eau', 'aide', 'professeur'. Ce sous-ensemble venait de cent soixante-cinq personnes différentes, et représentait environ mille cinq cents vidéos en tout.
> 
> Pour le modèle lui-même, on a combiné deux idées qui se complètent bien. La première idée, c'est une couche de convolution sur une seule dimension, le temps. Cette couche regarde des petits groupes de trois images consécutives, et apprend à détecter les mouvements rapides — par exemple, la vitesse à laquelle la main se déplace, ou la direction du mouvement à un instant précis. C'est de l'information très locale, à court terme.
> 
> La deuxième idée, c'est un Transformer. Contrairement à la convolution, le Transformer regarde toute la séquence en même temps, et peut faire le lien entre des images très éloignées dans le temps. Par exemple, il peut comprendre que l'image numéro cinq et l'image numéro vingt-huit sont liées, parce que la main revient à sa position de départ pour terminer le signe.
> 
> On a appelé cette architecture l'EnhancedConvTransformer. Elle est volontairement petite : seulement trois cent soixante-trois mille neuf cents paramètres. C'est très peu, comparé aux modèles d'intelligence artificielle qu'on voit aujourd'hui, qui ont parfois des milliards de paramètres. On a fait ce choix exprès, parce qu'on voulait pouvoir entraîner ce modèle uniquement sur un processeur normal, sans carte graphique, pour valider notre approche avec des ressources limitées.
> 
> Le résultat de cette première phase : soixante-neuf virgule un pour cent de précision sur l'ensemble de test, sur les soixante classes de signes. Pour un petit modèle entraîné sur CPU, sans aucune carte graphique, c'est un très bon résultat. Et surtout, ça nous a donné la confirmation que notre approche — combiner convolution et Transformer — était la bonne direction à suivre pour la suite du projet."

_[Transition vers Slide 5]_

---

## SLIDE 5 — Phase 2 : Passage à grande échelle et la vraie limite _(environ 2 minutes)_

> "La deuxième phase du projet, c'est là où on a appris la leçon la plus importante de tout le travail. Et je voudrais qu'on s'arrête un instant sur la phrase qui est écrite à l'écran, parce qu'elle résume tout :
> 
> _'La diversité des signeurs est le vrai plafond de précision — pas la capacité du modèle.'_
> 
> Laissez-moi vous expliquer concrètement ce que ça veut dire, parce que c'est une découverte qu'on n'avait pas prévue au début.
> 
> Au début de la phase deux, notre réflexe naturel a été de penser : 'pour avoir un meilleur modèle, il faut un modèle plus gros.' Donc on a augmenté la taille du modèle, de trois virgule huit millions de paramètres à quatorze virgule sept millions de paramètres. On a aussi augmenté la longueur des séquences qu'on traitait. Et le résultat a été une surprise : la précision a baissé, pas augmenté. Le modèle plus gros et plus complexe performait moins bien que le modèle plus simple.
> 
> Ça nous a forcés à remettre en question notre hypothèse. Le problème, ce n'était pas la taille du modèle. Le vrai problème, c'était la diversité des données d'entraînement. On entraînait notre modèle avec seulement seize personnes différentes. Et un modèle, même très sophistiqué, ne peut pas apprendre à généraliser à de nouvelles personnes s'il n'a vu que seize styles de signature différents pendant son entraînement.
> 
> Alors on a changé complètement de stratégie. Au lieu d'agrandir le modèle, on a cherché à agrandir et diversifier les données. On a combiné quatre datasets différents, chacun avec ses propres caractéristiques : Google ISLR, enregistré en studio professionnel ; ASL Citizen, une base communautaire avec des signeurs très variés ; PopSign, enregistré directement sur smartphone à la maison, dans des conditions réelles ; et nos propres enregistrements personnels, faits avec la webcam d'un ordinateur portable.
> 
> Au total, ça représente deux cent douze mille sept cent trois exemples d'entraînement, venant d'environ cent vingt personnes différentes, et de quatre environnements d'enregistrement complètement différents : studio, communauté, téléphone à la maison, et webcam d'ordinateur.
> 
> Et le résultat a confirmé exactement notre nouvelle hypothèse : ce même grand modèle de vingt et un millions de paramètres, qui échouait avec seize personnes, a atteint quatre-vingt-six virgule quatre-vingt-neuf pour cent de précision une fois entraîné sur cent vingt personnes différentes. La leçon scientifique de cette phase, c'est que pour un système de reconnaissance de la langue des signes, avoir plus de personnes différentes dans les données compte beaucoup plus que d'avoir un modèle plus gros."

_[Transition vers Slide 6]_

---

## SLIDE 6 — Préparation des données et extraction des caractéristiques _(environ 1 minute 45)_

> "Maintenant qu'on a expliqué les données et le modèle au niveau général, entrons un peu plus dans le détail technique. Comment est-ce qu'on transforme exactement une vidéo brute en quelque chose que le modèle peut comprendre ?
> 
> La première chose à dire, c'est qu'on n'utilise jamais l'image vidéo directement. Pourquoi ? Parce qu'une seule image vidéo contient des millions de valeurs de pixels, et la grande majorité de ces valeurs ne servent à rien pour reconnaître un signe. Ça décrit le fond de la pièce, l'éclairage, la couleur des vêtements de la personne. Si on donnait ça directement au modèle, il perdrait énormément de capacité juste à essayer d'ignorer ce bruit inutile.
> 
> Donc à la place, on utilise un outil appelé MediaPipe, développé par Google, qui détecte automatiquement les points clés du corps sur chaque image — les articulations des mains, les points du visage, les points du corps. C'est notre première étape, qu'on appelle l'extraction des points de repère.
> 
> On garde cent quinze points précis : les deux mains en entier, les points principaux du squelette, et seulement les points du visage qui portent une information grammaticale, comme les expressions faciales qui changent le sens d'un signe. Cette réduction est énorme : on passe d'environ dix millions de valeurs par séquence vidéo à seulement quarante-quatre mille valeurs. C'est environ deux cents fois moins de données, sans perdre l'information utile pour reconnaître le signe.
> 
> La deuxième étape, c'est la normalisation géométrique. On recentre toutes les coordonnées par rapport au milieu des deux épaules, et on les met à l'échelle en utilisant la largeur des épaules comme unité de mesure. Pourquoi c'est important ? Parce qu'après cette transformation, deux personnes de tailles complètement différentes, à des distances différentes de la caméra, qui font exactement le même signe, donnent des valeurs numériques identiques. Le modèle n'a donc pas besoin d'apprendre à gérer ces différences entre personnes — c'est déjà résolu avant même que les données arrivent dans le modèle.
> 
> La troisième étape, c'est l'ajout de la vitesse. On calcule le déplacement entre deux images consécutives, et on l'ajoute comme information supplémentaire. Ça double la taille du vecteur de caractéristiques, qui passe à six cent quatre-vingt-dix valeurs par image. On a testé l'impact de cette étape dans une expérience spécifique, et ça a amélioré la précision de un virgule trente-trois pour cent, en particulier pour les signes très courts, où l'information de vitesse fait une vraie différence."

_[Transition vers Slide 7]_

---

## SLIDE 7 — Architecture du modèle de production _(environ 1 minute 45)_

> "Passons maintenant à l'architecture finale du modèle, celle qu'on a vraiment utilisée pour le système de production. On l'a appelée ASLTransformerV11.
> 
> L'idée générale reste la même que dans la première phase — combiner convolution et Transformer — mais on l'a fait passer à une échelle beaucoup plus grande, avec environ vingt et un millions de paramètres, pour pouvoir gérer deux cent cinquante classes de signes différentes au lieu de soixante.
> 
> Voici comment les données circulent à travers le modèle, étape par étape. D'abord, la séquence d'entrée, qui contient soixante-quatre images avec six cent quatre-vingt-dix valeurs chacune, passe par une couche linéaire qui la projette dans un espace de cinq cent douze dimensions, suivie d'une normalisation.
> 
> Ensuite, deux blocs de convolution avec des connexions résiduelles encodent les motifs temporels locaux, exactement comme dans la première phase, mais en plus grand.
> 
> On ajoute ensuite un encodage positionnel, qui donne au modèle une notion de l'ordre temporel des images. Puis la séquence passe à travers six couches de Transformer, chacune avec huit têtes d'attention, ce qui permet au modèle de capturer des relations à très longue distance dans la séquence.
> 
> Il y a un détail technique important qu'on voudrait souligner. Les signes n'ont pas tous la même durée : certains durent vingt images, d'autres soixante. Pour uniformiser, on complète toujours la séquence jusqu'à soixante-quatre images avec des images vides. Le problème, c'est que sans précaution, un signe court de vingt et une images, complété jusqu'à soixante-quatre, aurait soixante-sept pour cent de son vecteur de classification composé de silence inutile. Pour éviter ça, on utilise ce qu'on appelle un 'pooling moyen masqué' : le modèle calcule sa moyenne uniquement sur les vraies images du signe, et ignore complètement les images vides ajoutées pour le remplissage.
> 
> Enfin, une couche de classification finale transforme cette représentation en deux cent cinquante scores, un par classe de signe possible, et le signe avec le score le plus élevé est, en théorie, la prédiction du modèle — même si en pratique, comme on le verra plus tard, on n'utilise jamais juste le score le plus élevé sans réflexion supplémentaire."

_[Transition vers Slide 8]_

---

## SLIDE 8 — Outils et technologies _(environ 50 secondes)_

> "Avant de passer aux résultats, un mot rapide sur les outils techniques qu'on a utilisés pour construire tout ce système.
> 
> Pour l'entraînement du modèle, on a utilisé PyTorch, avec l'accélération ROCm sur notre carte graphique AMD, dans un environnement Linux sous Windows via WSL2. Pour l'extraction des points clés du corps, on a utilisé MediaPipe, comme on l'a expliqué. Pour construire l'application de bureau elle-même, on a utilisé PySide6, qui est une bibliothèque pour créer des interfaces graphiques. Et pour transformer tout le projet Python en un seul fichier exécutable Windows, on a utilisé PyInstaller.
> 
> Tout cet ensemble d'outils nous a permis de respecter notre contrainte de départ : un système entièrement local, sans aucune dépendance à un service en ligne pendant le fonctionnement de l'application.
> 
> Maintenant, passons à ce que vous attendez sûrement le plus : les résultats."

_[Transition vers Slide 9]_

---

## SLIDE 9 — Résultats et adaptation personnalisée _(environ 2 minutes)_

> "On va vous présenter trois chiffres principaux, et pour chacun, on va prendre le temps d'expliquer exactement dans quelles conditions il a été mesuré, parce que le contexte est aussi important que le chiffre lui-même.
> 
> Premier chiffre : quatre-vingt-six virgule quatre-vingt-neuf pour cent de précision sur l'ensemble de test PopSign. Ce test a été fait avec six personnes complètement différentes de celles utilisées pendant l'entraînement, sur deux cent cinquante classes de signes, avec plus de vingt mille exemples de test. C'est notre résultat principal de généralisation, et il a été mesuré de manière très stricte : on a vérifié programmatiquement qu'aucune des six personnes du test n'apparaissait dans les données d'entraînement.
> 
> Deuxième chiffre : quatre-vingt-sept virgule deux pour cent de précision moyenne sur notre vocabulaire final de déploiement. Ce vocabulaire contient deux cent trente-sept signes, pas les deux cent cinquante d'origine. Pourquoi cette différence ? Parce qu'on a fait une analyse détaillée des erreurs du modèle, signe par signe, et on a trouvé trois signes que le modèle confondait beaucoup trop souvent pour être fiables — on les a simplement retirés du vocabulaire final. On a aussi trouvé des paires de signes que le modèle confondait régulièrement entre eux, par exemple les signes pour 'réveillé' et 'se réveiller', qui se ressemblent beaucoup visuellement. Pour ces paires, on a décidé de fusionner les deux sorties en une seule au moment de l'utilisation du système, ce qui élimine cette confusion sans avoir besoin de réentraîner le modèle.
> 
> Troisième chiffre, et c'est sans doute le plus impressionnant : cent pour cent de précision, après une adaptation personnalisée. Voici ce que ça veut dire concrètement. On a pris notre modèle déjà entraîné sur les cent vingt personnes, et on l'a réentraîné un peu plus, mais cette fois uniquement sur six cent soixante et onze enregistrements faits par une seule personne, notre utilisateur cible. Cette adaptation supplémentaire permet au modèle d'apprendre les particularités de cette personne précise : sa vitesse de mouvement, la forme exacte de ses mains, l'amplitude de ses gestes. Et le résultat, c'est une précision parfaite pour cette personne.
> 
> Il faut bien préciser une chose importante : ce dernier résultat de cent pour cent n'est plus valable pour n'importe qui. C'est un résultat spécifique à une seule personne, donc ce n'est plus un test d'indépendance par rapport au signeur. C'est pour ça qu'on le présente toujours séparément des deux autres chiffres. Mais ce résultat montre quelque chose de très utile : si on veut déployer ce système pour une personne précise, lui faire enregistrer simplement quelques centaines d'exemples et adapter le modèle est extrêmement efficace, et ça devrait toujours faire partie d'un déploiement réel."

_[Transition vers Slide 10]_

---

## SLIDE 10 — Application réelle et traduction _(environ 1 minute 45)_

> "Maintenant qu'on a parlé des chiffres, voyons comment tout ça se traduit concrètement dans une application que quelqu'un peut vraiment utiliser au quotidien.
> 
> L'application a trois écrans différents. L'écran principal, qu'on appelle l'écran de traduction, montre le flux vidéo de la caméra en direct, avec les points clés du corps superposés en temps réel, pour que l'utilisateur voie exactement ce que le système détecte. Quand un signe est reconnu, il s'affiche immédiatement en grand sous-titre en bas de l'écran. Les signes reconnus s'accumulent les uns après les autres, formant une séquence. Et après une pause de deux virgule cinq secondes sans nouveau signe, le système considère que la personne a fini sa phrase, et il traduit toute la séquence en une phrase complète en anglais, qui apparaît dans une zone de conversation à côté. La personne entendante peut ensuite taper sa réponse directement dans un champ de texte sur le même écran.
> 
> Le deuxième écran, l'enregistreur, permet de collecter des exemples d'entraînement pour les deux cent cinquante signes, avec un suivi de progression visible. C'est exactement cet écran qu'on a utilisé pour enregistrer les six cent soixante et onze exemples personnels dont on a parlé juste avant.
> 
> Le troisième écran, les paramètres, permet de modifier tous les réglages du système d'inférence pendant que l'application tourne, sans avoir besoin de la redémarrer.
> 
> Maintenant, parlons d'un détail important : comment le système décide-t-il exactement quand un signe a vraiment été reconnu ? On ne prend jamais simplement le score le plus élevé du modèle sans réfléchir, parce que ça créerait beaucoup d'erreurs et d'affichages instables. À la place, on utilise ce qu'on appelle une machine à états à deux niveaux de confiance. Si la confiance du modèle est trop basse, le système n'affiche rien du tout, par sécurité. Si la confiance est moyenne, le système attend que le même signe reste stable pendant plusieurs images consécutives avant de l'afficher, pour éviter les faux positifs. Et si la confiance est haute, le système utilise ce qu'on appelle une détection de pic : il attend que la confiance commence à redescendre après avoir atteint son maximum, ce qui évite d'afficher plusieurs fois le même signe si la personne le maintient un peu trop longtemps.
> 
> Et tout ce processus, de la capture de l'image jusqu'à l'affichage du signe reconnu, prend moins de cinq cents millisecondes au total. C'est suffisamment rapide pour que l'utilisateur ait vraiment l'impression d'une conversation fluide, en temps réel."

_[Transition vers Slide 11]_

---

## SLIDE 11 — Limites actuelles et pistes d'amélioration _(environ 1 minute 30)_

> "Maintenant, on voudrait être complètement honnêtes avec vous sur ce que notre système sait faire aujourd'hui, et sur ce qu'il ne sait pas encore faire. On pense que c'est important de présenter les limites aussi clairement que les résultats positifs.
> 
> Première limite : notre système reconnaît uniquement des signes isolés, c'est-à-dire avec une petite pause entre chaque signe. Il ne gère pas encore le signage continu, où les signes s'enchaînent naturellement les uns dans les autres sans pause, comme dans une vraie conversation rapide. C'est un problème beaucoup plus difficile, parce qu'il faut d'abord détecter où un signe se termine et où le suivant commence, avant même de pouvoir le reconnaître.
> 
> Deuxième limite : notre vocabulaire est limité à deux cent trente-sept signes. Les noms propres, les noms de personnes, les termes techniques très spécifiques ne sont simplement pas reconnus, parce qu'ils n'existent pas dans notre dictionnaire de signes.
> 
> Maintenant, voici les trois directions qu'on aimerait explorer pour résoudre ces limites dans le futur.
> 
> Premièrement, un module d'épellation manuelle, c'est-à-dire la reconnaissance lettre par lettre de l'alphabet manuel. Avec une technique appelée CTC, et en utilisant un dataset spécialisé appelé ChicagoFSWild, on pourrait reconnaître n'importe quel mot inconnu, lettre par lettre, comme un nom propre.
> 
> Deuxièmement, gérer le signage continu, en ajoutant une étape de segmentation temporelle en amont du système actuel, entraînée sur un dataset appelé How2Sign, qui contient trente-cinq heures de vidéos de langue des signes continue, avec des annotations détaillées.
> 
> Et troisièmement, une direction qu'on trouve particulièrement intéressante : faire l'inverse de ce qu'on a fait. C'est-à-dire prendre un texte écrit en anglais, et générer une animation du squelette qui représente les signes correspondants. En utilisant les cent quinze points du corps qu'on utilise déjà dans ce projet, on pourrait construire un système de communication complet, dans les deux sens, entre une personne sourde et une personne entendante."

_[Transition vers Slide 12 — Démonstration]_

---

## SLIDE 12 — Démonstration en direct _(environ 2 minutes, selon la fluidité)_

> "Maintenant, plutôt que de continuer à vous décrire le système avec des mots, on préfère vous le montrer directement, en fonctionnement réel.
> 
> Ce que vous allez voir maintenant n'est pas une vidéo préenregistrée. C'est l'application qui tourne en direct, devant vous, sur cet ordinateur.
> 
> Sur la partie gauche de l'écran, vous voyez le flux de la caméra avec les points clés du corps détectés en temps réel par MediaPipe. En bas, vous verrez s'afficher chaque signe reconnu, l'un après l'autre. Et sur la partie droite, vous verrez apparaître la traduction complète en anglais, une fois que la séquence de signes sera terminée.
> 
> [Faire les signes préparés à l'avance. Laisser le système afficher la reconnaissance, puis la traduction. Marquer une pause après la traduction pour laisser le jury observer.]
> 
> Comme vous venez de le voir, tout ce processus s'est déroulé en temps réel, sur un ordinateur portable tout à fait standard, sans connexion internet, et en moins d'une seconde entre le moment où le signe est fait et le moment où il apparaît à l'écran."

_[Transition vers Slide 13]_

---

## SLIDE 13 — Conclusion et questions _(environ 1 minute 30)_

> "Pour conclure, on voudrait reprendre les points essentiels de cette présentation.
> 
> On est partis d'un vrai problème de société : la barrière de communication entre les personnes sourdes et les personnes entendantes, qui touche des dizaines de millions de personnes dans le monde. À partir de ce problème, on a construit un système complet, de bout en bout : depuis l'extraction des points clés du corps à partir d'une simple webcam, jusqu'à une application Windows autonome que n'importe qui peut installer et utiliser.
> 
> Ce travail nous a appris quelque chose qu'on n'avait pas anticipé au départ : la diversité des personnes dans les données d'entraînement compte beaucoup plus que la taille ou la complexité du modèle. On a confirmé cette conclusion à travers douze expériences contrôlées, en combinant quatre datasets différents.
> 
> Le système final qu'on présente aujourd'hui atteint quatre-vingt-six virgule quatre-vingt-neuf pour cent de précision sur des personnes que le modèle n'a jamais vues, sur deux cent cinquante signes différents. Et après une adaptation personnalisée simple, il atteint une précision parfaite pour un utilisateur spécifique.
> 
> C'est un système qui fonctionne réellement, qu'on a testé en conditions réelles, qui tourne entièrement en local sur un ordinateur standard, sans aucune connexion internet nécessaire.
> 
> On vous remercie beaucoup pour votre attention, et on est maintenant à votre disposition pour répondre à toutes vos questions."

_[Rester calme, debout, ne pas combler le silence après cette phrase. Laisser le jury prendre la parole.]_

---

## QUESTIONS PROBABLES DU JURY — Réponses préparées en langage simple

### "Pourquoi utiliser une convolution ET un Transformer, et pas seulement l'un des deux ?"

> "Parce que les deux apportent une information différente et complémentaire. La convolution est très bonne pour capturer les mouvements rapides entre deux ou trois images très proches dans le temps — c'est de l'information locale, à court terme. Le Transformer, lui, est capable de regarder toute la séquence en une fois, et de faire le lien entre des images très éloignées dans le temps, par exemple le début et la fin du signe. Si on enlevait la convolution, le modèle perdrait en précision, parce qu'il manquerait l'information sur les mouvements très courts et rapides."

---

### "Pourquoi ne pas simplement utiliser la vidéo brute, sans passer par les points clés du corps ?"

> "Parce qu'une vidéo brute contient énormément d'informations inutiles. La couleur des vêtements, l'éclairage de la pièce, le décor en arrière-plan, tout ça n'a aucun lien avec le signe lui-même, mais le modèle devrait quand même apprendre à les ignorer, ce qui demande beaucoup de capacité et de données supplémentaires. En extrayant seulement les points clés du corps, on garde uniquement l'information utile, et en plus, après normalisation, deux personnes différentes qui font le même signe donnent exactement les mêmes valeurs numériques. Cette propriété est très précieuse, et elle vient directement de notre choix de représentation, pas d'un apprentissage du modèle."

---

### "Comment pouvez-vous être sûrs que c'est vraiment la diversité des données, et pas autre chose, qui explique l'amélioration ?"

> "On a fait une expérience contrôlée précisément pour vérifier ça. On a agrandi notre modèle de trois virgule huit millions à quatorze virgule sept millions de paramètres, en gardant le même nombre de personnes dans les données — et la précision a baissé, pas augmenté. Ensuite, en gardant un modèle de taille comparable, mais en passant de seize à cent vingt personnes différentes dans les données, la précision a augmenté de presque trente points de pourcentage. Le seul facteur qui a changé entre ces deux expériences, c'est la diversité des personnes. C'est ce qui nous permet d'affirmer que c'est bien la cause principale de l'amélioration."

---

### "Le résultat de cent pour cent en personnalisation, n'est-ce pas simplement du sur-apprentissage ?"

> "Non, et c'est une question importante à clarifier. Le sur-apprentissage, ça voudrait dire que le modèle a juste mémorisé les exemples d'entraînement, sans vraiment apprendre à généraliser. Mais ici, on teste le modèle sur des enregistrements de cette même personne qui n'ont jamais été utilisés pendant l'entraînement — c'est un vrai ensemble de test séparé. Et c'est précisément parce que ce résultat est spécifique à une seule personne, et plus valable pour n'importe qui d'autre, qu'on le présente toujours séparément des résultats généraux d'indépendance par rapport au signeur. La conclusion utile ici, c'est que peu d'enregistrements d'une personne suffisent pour adapter complètement le modèle à son style."

---

### "Pouvez-vous réexpliquer le système de confiance à deux niveaux ?"

> "Bien sûr. En réalité, il y a trois seuils de confiance différents, mais seulement deux comportements différents du système, c'est pour ça qu'on l'appelle à deux niveaux. Premier seuil, confiance basse : le système n'affiche absolument rien, par précaution, pour éviter les fausses détections. Deuxième seuil, confiance moyenne : le système attend que le signe reste stable pendant plusieurs images consécutives avant de décider de l'afficher. Troisième seuil, confiance haute : le système utilise une détection du pic de confiance, c'est-à-dire qu'il attend que la confiance commence à redescendre après avoir atteint son maximum, avant d'afficher le signe. Ça évite d'afficher le même signe plusieurs fois de suite si la personne le maintient un peu trop longtemps devant la caméra."

---

### "Pourquoi le dataset MS-ASL n'a pas fonctionné quand vous avez essayé de l'ajouter à la phase de production ?"

> "MS-ASL est construit à partir de vidéos YouTube, et ça pose deux problèmes. D'abord, beaucoup de liens vidéo ne fonctionnaient plus au moment où on a voulu les télécharger. Ensuite, et c'est plus important, les horodatages indiqués dans les métadonnées du dataset, qui sont censés indiquer exactement le début et la fin du signe dans la vidéo, n'étaient pas toujours parfaitement précis. Quand on a essayé d'intégrer ces données dans notre pipeline de production, la précision a baissé au lieu d'augmenter. Le bruit introduit par ces imprécisions était plus important que le bénéfice apporté par la diversité supplémentaire de signeurs."

---

### "Pourquoi il y a un tel écart entre vos résultats sur PopSign et sur ISLR ?"

> "C'est un écart d'environ vingt-huit points de pourcentage, et il s'explique par la différence d'environnement d'enregistrement entre les deux datasets. Notre modèle a été entraîné majoritairement sur des données PopSign, qui sont enregistrées à la maison, sur smartphone, dans des conditions assez proches de la vraie utilisation réelle du système. Le dataset ISLR, lui, est enregistré en studio professionnel, avec un éclairage et un angle de caméra très contrôlés et différents. Ce n'est donc pas un échec du modèle, mais plutôt un écart entre deux types d'environnements d'enregistrement assez différents l'un de l'autre."

---

_Fin du script._