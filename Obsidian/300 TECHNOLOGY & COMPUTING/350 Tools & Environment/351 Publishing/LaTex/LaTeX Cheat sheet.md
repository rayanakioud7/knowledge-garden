
**Date:** 2026-01-30  
**Last Updated:** 2026-02-07  
**Tags:** [[Mathematics]], [[LaTeX]], [[Cheat sheet]], [[Reference]]


# LaTeX Mathematical Symbols / Symboles Mathématiques LaTeX

> [!INFO] Prerequisite / Prérequis
> Most symbols are standard, but some unusual symbols require the `amssymb` package.
> La plupart des symboles sont standards, mais certains nécessitent le paquet `amssymb`.
> 
> **Essential packages / Paquets essentiels :**
> ```latex
> \usepackage{amsmath, amssymb, amsthm}  % Math extensions
> \usepackage{mathtools}                  % Enhanced math tools
> \usepackage{bm}                         % Bold math symbols
> ```

## Table of Contents / Table des Matières
- [[#Greek Letters / Lettres Grecques|Greek Letters]]
- [[#LaTeX Math Constructs / Constructions Mathématiques|Math Constructs]]
- [[#Delimiters / Délimiteurs|Delimiters]]
- [[#Variable-sized Symbols / Symboles à taille variable|Variable-sized Symbols]]
- [[#Standard Function Names / Noms de Fonctions Standards|Function Names]]
- [[#Binary Operations and Relations / Opérations Binaires et Relations|Binary Operations]]
- [[#Arrow Symbols / Symboles de Flèches|Arrow Symbols]]
- [[#Miscellaneous / Divers|Miscellaneous]]
- [[#Math Mode Accents / Accents en Mode Math|Math Accents]]
- [[#Arrays and Matrices / Tableaux et Matrices|Arrays & Matrices]]
- [[#Fonts / Polices|Fonts]]
- [[#Text Mode Accents / Accents en Mode Texte|Text Accents]]
- [[#Spacing in Math Mode / Espacement en Mode Math|Math Spacing]]
- [[#Common Environments / Environnements Courants|Environments]]
- [[#Examples and Tips / Exemples et Conseils|Examples & Tips]]

## Greek Letters / Lettres Grecques 

|        Symbol / Symbole         | Command / Commande              | Variants / Variantes                   |
| :-----------------------------: | :------------------------------ | :------------------------------------- |
|            $\alpha$             | `\alpha`                        |                                        |
|             $\beta$             | `\beta`                         |                                        |
|       $\gamma$, $\Gamma$        | `\gamma`, `\Gamma`              | $\varGamma$ (`\varGamma`)              |
|       $\delta$, $\Delta$        | `\delta`, `\Delta`              | $\varDelta$ (`\varDelta`)              |
|    $\epsilon$, $\varepsilon$    | `\epsilon`, `\varepsilon`       | $\varepsilon$                          |
|             $\zeta$             | `\zeta`                         |                                        |
|             $\eta$              | `\eta`                          |                                        |
| $\theta$, $\vartheta$, $\Theta$ | `\theta`, `\vartheta`, `\Theta` | $\vartheta$, $\varTheta$ (`\varTheta`) |
|             $\iota$             | `\iota`                         |                                        |
|      $\kappa$, $\varkappa$      | `\kappa`, `\varkappa`           |                                        |
|      $\lambda$, $\Lambda$       | `\lambda`, `\Lambda`            | $\varLambda$ (`\varLambda`)            |
|              $\mu$              | `\mu`                           |                                        |
|              $\nu$              | `\nu`                           |                                        |
|          $\xi$, $\Xi$           | `\xi`, `\Xi`                    | $\varXi$ (`\varXi`)                    |
|     $\pi$, $\varpi$, $\Pi$      | `\pi`, `\varpi`, `\Pi`          | $\varpi$, $\varPi$ (`\varPi`)          |
|        $\rho$, $\varrho$        | `\rho`, `\varrho`               |                                        |
| $\sigma$, $\varsigma$, $\Sigma$ | `\sigma`, `\varsigma`, `\Sigma` | $\varsigma$, $\varSigma$ (`\varSigma`) |
|             $\tau$              | `\tau`                          |                                        |
|     $\upsilon$, $\Upsilon$      | `\upsilon`, `\Upsilon`          | $\varUpsilon$ (`\varUpsilon`)          |
|    $\phi$, $\varphi$, $\Phi$    | `\phi`, `\varphi`, `\Phi`       | $\varphi$, $\varPhi$ (`\varPhi`)       |
|             $\chi$              | `\chi`                          |                                        |
|         $\psi$, $\Psi$          | `\psi`, `\Psi`                  | $\varPsi$ (`\varPsi`)                  |
|       $\omega$, $\Omega$        | `\omega`, `\Omega`              | $\varOmega$ (`\varOmega`)              |
|           $\digamma$            | `\digamma`                      | (requires `amssymb`)                   |
|            $\aleph$             | `\aleph`                        | Aleph symbol                           |

> [!NOTE] Uppercase Variants / Variantes Majuscules
> Some uppercase Greek letters have two forms: standard and "var" variant.
> Certaines lettres grecques majuscules ont deux formes : standard et variante "var".
> - `\Gamma` → $\Gamma$ (standard)
> - `\varGamma` → $\varGamma$ (alternative, more italic style)

## LaTeX Math Constructs / Constructions Mathématiques

| Render / Rendu | Command / Commande | Description / Description |
| :------------: | :----------------- | :------------------------ |
| $\frac{abc}{xyz}$ | `\frac{abc}{xyz}`<br>`\dfrac{abc}{xyz}` (display) | Fraction |
| $\tfrac{abc}{xyz}$ | `\tfrac{abc}{xyz}` (text) | Text-style fraction |
| $\binom{n}{k}$ | `\binom{n}{k}` | Binomial coefficient |
| $\tbinom{n}{k}$ | `\tbinom{n}{k}` | Text-size binomial |
| $\dbinom{n}{k}$ | `\dbinom{n}{k}` | Display-size binomial |
| $\overline{abc}$ | `\overline{abc}` | Overline |
| $\underline{abc}$ | `\underline{abc}` | Underline |
| $\sqrt{abc}$ | `\sqrt{abc}` | Square root |
| $\sqrt[n]{abc}$ | `\sqrt[n]{abc}` | nth root |
| $\widehat{abc}$ | `\widehat{abc}` | Wide hat |
| $\widetilde{abc}$ | `\widetilde{abc}` | Wide tilde |
| $\overrightarrow{abc}$ | `\overrightarrow{abc}` | Right arrow vector |
| $\overleftarrow{abc}$ | `\overleftarrow{abc}` | Left arrow vector |
| $\overbrace{abc}^{n}$ | `\overbrace{abc}^{n}` | Overbrace with label |
| $\underbrace{abc}_{n}$ | `\underbrace{abc}_{n}` | Underbrace with label |
| $f'$, $f''$, $f^{(n)}$ | `f'`, `f''`, `f^{(n)}` | Prime notation |
| $\dot{a}$, $\ddot{a}$, $\dddot{a}$ | `\dot{a}`, `\ddot{a}`, `\dddot{a}` | Dots (derivatives) |

> [!TIP] Display vs Text Style / Style Affiché vs Style Texte
> Use `\dfrac` and `\dbinom` in display mode (equations), `\tfrac` and `\tbinom` in inline math.
> Utilisez `\dfrac` et `\dbinom` en mode affiché (équations), `\tfrac` et `\tbinom` en mathématiques en ligne.

## Delimiters / Délimiteurs

> [!TIP] Auto-sizing / Taille automatique
> Use `\left` and `\right` to automatically resize delimiters to fit content.
> Utilisez `\left` et `\right` pour adapter automatiquement la taille des délimiteurs.
> 
> ```latex
> \left( \frac{a}{b} \right) \quad \left\langle \frac{a}{b} \right\rangle
> ```
> Renders: $\left( \frac{a}{b} \right) \quad \left\langle \frac{a}{b} \right\rangle$
> 
> Use `\big`, `\Big`, `\bigg`, `\Bigg` for manual sizing:
> Utilisez `\big`, `\Big`, `\bigg`, `\Bigg` pour un dimensionnement manuel :
> ```latex
> \big( \Big( \bigg( \Bigg(
> ```

|   Symbol / Symbole   | Command / Commande           | Name / Nom                           |
| :------------------: | :--------------------------- | :----------------------------------- |
|       $( \; )$       | `( )`                        | Parentheses / Parenthèses            |
|       $[ \; ]$       | `[ ]`                        | Brackets / Crochets                  |
|      $\{ \; \}$      | `\{ \}` or `\lbrace \rbrace` | Braces / Accolades                   |
| $\langle \; \rangle$ | `\langle \rangle`            | Angle brackets / Chevrons            |
|  $\lvert \; \rvert$  | `\lvert \rvert`              | Vertical bars / Barres verticales    |
|  $\lVert \; \rVert$  | `\lVert \rVert`              | Double vertical bars / Double barres |
| $\lfloor \; \rfloor$ | `\lfloor \rfloor`            | Floor / Partie entière inférieure    |
|  $\lceil \; \rceil$  | `\lceil \rceil`              | Ceiling / Partie entière supérieure  |
|     $\backslash$     | `/ \backslash`               | Slash and backslash                  |
|      $\uparrow$      | `\uparrow`                   | Up arrow / Flèche vers le haut       |
|      $\Uparrow$      | `\Uparrow`                   | Double up arrow                      |
|     $\downarrow$     | `\downarrow`                 | Down arrow                           |
|     $\Downarrow$     | `\Downarrow`                 | Double down arrow                    |
|    $\updownarrow$    | `\updownarrow`               | Up-down arrow                        |
|    $\Updownarrow$    | `\Updownarrow`               | Double up-down arrow                 |

## Variable-sized Symbols / Symboles à taille variable

| Symbol / Symbole | Command / Commande | Name / Nom |
| :--------------: | :----------------- | :--------- |
| $\sum$ | `\sum` | Sum / Somme |
| $\prod$ | `\prod` | Product / Produit |
| $\coprod$ | `\coprod` | Coproduct / Coproduit |
| $\int$ | `\int` | Integral / Intégrale |
| $\iint$ | `\iint` | Double integral |
| $\iiint$ | `\iiint` | Triple integral |
| $\oint$ | `\oint` | Contour integral |
| $\bigcap$ | `\bigcap` | Intersection |
| $\bigcup$ | `\bigcup` | Union |
| $\bigsqcup$ | `\bigsqcup` | Disjoint union |
| $\bigvee$ | `\bigvee` | Big logical OR |
| $\bigwedge$ | `\bigwedge` | Big logical AND |
| $\bigotimes$ | `\bigotimes` | Big tensor product |
| $\bigoplus$ | `\bigoplus` | Big direct sum |
| $\bigodot$ | `\bigodot` | Big circled dot |
| $\biguplus$ | `\biguplus` | Big multiset union |

> [!NOTE] Limits / Limites
> Use `\limits` to place limits above/below in display mode:
> Utilisez `\limits` pour placer les limites au-dessus/dessous en mode affiché :
> ```latex
> \sum\limits_{i=1}^{n} i^2 \quad \int\limits_{0}^{\infty} f(x)dx
> ```
> $$\sum\limits_{i=1}^{n} i^2 \quad \int\limits_{0}^{\infty} f(x)dx$$

## Standard Function Names / Noms de Fonctions Standards

> [!IMPORTANT] Typography / Typographie
> Functions should be in Roman (upright) type, not Italic.
> Les fonctions doivent être en romain (droit), pas en italique.
> 
> ✅ **Correct:** `\sin(x) \log(x) \lim_{x\to 0}` → $\sin(x) \log(x) \lim_{x\to 0}$
> ❌ **Incorrect:** `sin(x) log(x) lim_{x\to 0}` → $sin(x) log(x) lim_{x\to 0}$

| Function / Fonction | Command / Commande | Function / Fonction | Command / Commande |
| :-----------------: | :----------------- | :-----------------: | :----------------- |
| $\arccos$ | `\arccos` | $\exp$ | `\exp` |
| $\arcsin$ | `\arcsin` | $\gcd$ | `\gcd` |
| $\arctan$ | `\arctan` | $\hom$ | `\hom` |
| $\arg$ | `\arg` | $\inf$ | `\inf` |
| $\cos$ | `\cos` | $\ker$ | `\ker` |
| $\cosh$ | `\cosh` | $\lg$ | `\lg` |
| $\cot$ | `\cot` | $\lim$ | `\lim` |
| $\coth$ | `\coth` | $\liminf$ | `\liminf` |
| $\csc$ | `\csc` | $\limsup$ | `\limsup` |
| $\deg$ | `\deg` | $\ln$ | `\ln` |
| $\det$ | `\det` | $\log$ | `\log` |
| $\dim$ | `\dim` | $\max$ | `\max` |
| $\sec$ | `\sec` | $\min$ | `\min` |
| $\sin$ | `\sin` | $\Pr$ | `\Pr` |
| $\sinh$ | `\sinh` | $\sup$ | `\sup` |
| $\tan$ | `\tan` | $\tanh$ | `\tanh` |
| $\operatorname{spec}$ | `\operatorname{spec}` | Custom functions / Fonctions personnalisées |

> [!TIP] Custom Functions / Fonctions Personnalisées
> For functions not in the standard list, use `\operatorname{}`:
> Pour les fonctions non standards, utilisez `\operatorname{}` :
> ```latex
> \operatorname{tr}(A) \quad \operatorname{rank}(M)
> ```
> Renders: $\operatorname{tr}(A) \quad \operatorname{rank}(M)$

## Binary Operations and Relations / Opérations Binaires et Relations

### Basic Operations / Opérations de base

|  Symbol / Symbole  | Command / Commande | Symbol / Symbole | Command / Commande  |
| :----------------: | :----------------- | :--------------: | :------------------ |
|       $\pm$        | `\pm`              |      $\mp$       | `\mp`               |
|      $\times$      | `\times`           |      $\div$      | `\div`              |
|       $\ast$       | `\ast`             |     $\star$      | `\star`             |
|      $\circ$       | `\circ`            |    $\bullet$     | `\bullet`           |
|      $\cdot$       | `\cdot`            |      $\cap$      | `\cap`              |
|       $\cup$       | `\cup`             |     $\uplus$     | `\uplus`            |
|      $\sqcap$      | `\sqcap`           |     $\sqcup$     | `\sqcup`            |
|       $\vee$       | `\vee` or `\lor`   |     $\wedge$     | `\wedge` or `\land` |
|    $\setminus$     | `\setminus`        |      $\wr$       | `\wr`               |
|     $\diamond$     | `\diamond`         | $\bigtriangleup$ | `\bigtriangleup`    |
| $\bigtriangledown$ | `\bigtriangledown` | $\triangleleft$  | `\triangleleft`     |
|  $\triangleright$  | `\triangleright`   |     $\oplus$     | `\oplus`            |
|     $\ominus$      | `\ominus`          |    $\otimes$     | `\otimes`           |
|     $\oslash$      | `\oslash`          |     $\odot$      | `\odot`             |
|     $\dagger$      | `\dagger`          |    $\ddagger$    | `\ddagger`          |
|      $\amalg$      | `\amalg`           |   $\sqsubset$    | `\sqsubset`         |
|    $\sqsupset$     | `\sqsupset`        |  $\sqsubseteq$   | `\sqsubseteq`       |
|   $\sqsupseteq$    | `\sqsupseteq`      |     $\Join$      | `\Join`             |
|     $\bowtie$      | `\bowtie`          |    $\ltimes$     | `\ltimes`           |
|     $\rtimes$      | `\rtimes`          |    $\propto$     | `\propto`           |
|     $\exists$      | `\exists`          |                  |                     |

### Relations & Inequality / Relations & Inégalités

| Symbol / Symbole | Command / Commande | Symbol / Symbole | Command / Commande |
| :--------------: | :----------------- | :--------------: | :----------------- |
|       $<$        | `<`                |       $>$        | `>`                |
|      $\leq$      | `\leq` or `\le`    |      $\geq$      | `\geq` or `\ge`    |
|     $\prec$      | `\prec`            |     $\succ$      | `\succ`            |
|    $\preceq$     | `\preceq`          |    $\succeq$     | `\succeq`          |
|      $\ll$       | `\ll`              |      $\gg$       | `\gg`              |
|    $\subset$     | `\subset`          |    $\supset$     | `\supset`          |
|   $\subseteq$    | `\subseteq`        |   $\supseteq$    | `\supseteq`        |
|   $\sqsubset$    | `\sqsubset`        |   $\sqsupset$    | `\sqsupset`        |
|  $\sqsubseteq$   | `\sqsubseteq`      |  $\sqsupseteq$   | `\sqsupseteq`      |
|      $\in$       | `\in`              |      $\ni$       | `\ni` or `\owns`   |
|     $\vdash$     | `\vdash`           |     $\dashv$     | `\dashv`           |
|      $\mid$      | `\mid`             |   $\parallel$    | `\parallel`        |
|     $\perp$      | `\perp`            |     $\smile$     | `\smile`           |
|     $\frown$     | `\frown`           |     $\asymp$     | `\asymp`           |
|      $\sim$      | `\sim`             |     $\simeq$     | `\simeq`           |
|    $\approx$     | `\approx`          |     $\cong$      | `\cong`            |
|     $\equiv$     | `\equiv`           |     $\doteq$     | `\doteq`           |
|    $\models$     | `\models`          |    $\propto$     | `\propto`          |

### Negated Relations / Relations Négatives

| Symbol / Symbole | Command / Commande | Symbol / Symbole | Command / Commande |
| :--------------: | :----------------- | :--------------: | :----------------- |
|      $\neq$      | `\neq` or `\ne`    |     $\notin$     | `\notin`           |
|     $\not<$      | `\not<`            |     $\not>$      | `\not>`            |
|    $\not\leq$    | `\not\leq`         |    $\not\geq$    | `\not\geq`         |
|   $\not\prec$    | `\not\prec`        |   $\not\succ$    | `\not\succ`        |
|  $\not\preceq$   | `\not\preceq`      |  $\not\succeq$   | `\not\succeq`      |
|  $\not\subset$   | `\not\subset`      |  $\not\supset$   | `\not\supset`      |
| $\not\subseteq$  | `\not\subseteq`    | $\not\supseteq$  | `\not\supseteq`    |
|   $\not\equiv$   | `\not\equiv`       |  $\not\approx$   | `\not\approx`      |
|   $\not\cong$    | `\not\cong`        |    $\not\sim$    | `\not\sim`         |
|   $\not\simeq$   | `\not\simeq`       |   $\not\asymp$   | `\not\asymp`       |

> [!TIP] Strikethrough Notation / Notation Barrée
> Use `\cancel` from the `cancel` package:
> Utilisez `\cancel` du paquet `cancel` :
> ```latex
> \usepackage{cancel}
> \cancel{abc} \quad \bcancel{xyz} \quad \xcancel{pqr}
> ```
> Renders: $\cancel{abc} \quad \bcancel{xyz} \quad \xcancel{pqr}$

## Arrow Symbols / Symboles de Flèches

### Standard Arrows / Flèches Standards

| Symbol / Symbole | Command / Commande | Symbol / Symbole | Command / Commande |
| :--------------: | :----------------- | :--------------: | :----------------- |
| $\leftarrow$ | `\leftarrow` or `\gets` | $\rightarrow$ | `\rightarrow` or `\to` |
| $\Leftarrow$ | `\Leftarrow` | $\Rightarrow$ | `\Rightarrow` |
| $\leftrightarrow$ | `\leftrightarrow` | $\Leftrightarrow$ | `\Leftrightarrow` |
| $\mapsto$ | `\mapsto` | $\longmapsto$ | `\longmapsto` |
| $\hookleftarrow$ | `\hookleftarrow` | $\hookrightarrow$ | `\hookrightarrow` |
| $\leftharpoonup$ | `\leftharpoonup` | $\rightharpoonup$ | `\rightharpoonup` |
| $\leftharpoondown$ | `\leftharpoondown` | $\rightharpoondown$ | `\rightharpoondown` |
| $\rightleftharpoons$ | `\rightleftharpoons` | $\iff$ | `\iff` |

### Long Arrows / Flèches Longues

| Symbol / Symbole | Command / Commande | Symbol / Symbole | Command / Commande |
| :--------------: | :----------------- | :--------------: | :----------------- |
| $\longleftarrow$ | `\longleftarrow` | $\longrightarrow$ | `\longrightarrow` |
| $\Longleftarrow$ | `\Longleftarrow` | $\Longrightarrow$ | `\Longrightarrow` |
| $\longleftrightarrow$ | `\longleftrightarrow` | $\Longleftrightarrow$ | `\Longleftrightarrow` |

### Bidirectional Arrows / Flèches Bidirectionnelles

| Symbol / Symbole | Command / Commande | Symbol / Symbole | Command / Commande |
| :--------------: | :----------------- | :--------------: | :----------------- |
| $\uparrow$ | `\uparrow` | $\downarrow$ | `\downarrow` |
| $\Uparrow$ | `\Uparrow` | $\Downarrow$ | `\Downarrow` |
| $\updownarrow$ | `\updownarrow` | $\Updownarrow$ | `\Updownarrow` |
| $\nearrow$ | `\nearrow` | $\searrow$ | `\searrow` |
| $\nwarrow$ | `\nwarrow` | $\swarrow$ | `\swarrow` |

### Special Arrows / Flèches Spéciales

|  Symbol / Symbole   | Command / Commande              | Description / Description |
| :-----------------: | :------------------------------ | :------------------------ |
|     $\leadsto$      | `\leadsto` (requires `amssymb`) | Leads to / Mène à         |
| $\rightsquigarrow$  | `\rightsquigarrow`              | Squiggly arrow            |
|  $\dashrightarrow$  | `\dashrightarrow`               | Dashed arrow              |
|  $\leftleftarrows$  | `\leftleftarrows`               | Multiple left arrows      |
| $\rightrightarrows$ | `\rightrightarrows`             | Multiple right arrows     |

> [!TIP] Chemical Arrows / Flèches Chimiques
> Use `mhchem` package for chemical equations:
> Utilisez le paquet `mhchem` pour les équations chimiques :
> ```latex
> \ce{A ->[heat] B} \quad \ce{A <=> B}
> ```
> $$\ce{A ->[heat] B} \quad \ce{A <=> B}$$

## Miscellaneous / Divers

|  Symbol / Symbole  | Command / Commande              | Description / Description                               |
| :----------------: | :------------------------------ | :------------------------------------------------------ |
|      $\infty$      | `\infty`                        | Infinity / Infini                                       |
|      $\nabla$      | `\nabla`                        | Nabla (gradient)                                        |
|     $\partial$     | `\partial`                      | Partial derivative / Dérivée partielle                  |
|      $\hbar$       | `\hbar`                         | Reduced Planck constant / Constante de Planck réduite   |
| $\imath$, $\jmath$ | `\imath`, `\jmath`              | Dotless i and j / i et j sans point                     |
|       $\ell$       | `\ell`                          | Cursive l / l cursif                                    |
|       $\wp$        | `\wp`                           | Weierstrass p / p de Weierstrass                        |
|    $\Re$, $\Im$    | `\Re`, `\Im`                    | Real and imaginary parts / Parties réelle et imaginaire |
|      $\aleph$      | `\aleph`                        | Aleph (cardinal numbers)                                |
|      $\beth$       | `\beth` (requires `amssymb`)    | Beth                                                    |
|     $\daleth$      | `\daleth` (requires `amssymb`)  | Daleth                                                  |
|      $\gimel$      | `\gimel` (requires `amssymb`)   | Gimel                                                   |
|    $\emptyset$     | `\emptyset`                     | Empty set / Ensemble vide                               |
|   $\varnothing$    | `\varnothing`                   | Alternative empty set                                   |
|      $\angle$      | `\angle`                        | Angle                                                   |
|  $\measuredangle$  | `\measuredangle`                | Measured angle                                          |
| $\sphericalangle$  | `\sphericalangle`               | Spherical angle                                         |
|    $\triangle$     | `\triangle`                     | Triangle                                                |
|     $\square$      | `\square`                       | Square                                                  |
|       $\Box$       | `\Box` (requires `amssymb`)     | Square operator                                         |
|     $\Diamond$     | `\Diamond` (requires `amssymb`) | Diamond operator                                        |
|      $\odot$       | `\odot`                         | Circled dot                                             |
|     $\bigstar$     | `\bigstar`                      | Big star                                                |
|    $\clubsuit$     | `\clubsuit`                     | Club suit / Trèfle                                      |
|   $\diamondsuit$   | `\diamondsuit`                  | Diamond suit / Carreau                                  |
|    $\heartsuit$    | `\heartsuit`                    | Heart suit / Cœur                                       |
|    $\spadesuit$    | `\spadesuit`                    | Spade suit / Pique                                      |
|       $\mho$       | `\mho` (requires `amssymb`)     | Conductance / Conductance                               |
|      $\Finv$       | `\Finv` (requires `amssymb`)    | Inverted F                                              |
|      $\Game$       | `\Game` (requires `amssymb`)    | Game symbol                                             |
|        $\S$        | `\S`                            | Section symbol                                          |
|        $\P$        | `\P`                            | Pilcrow / Paragraphe                                    |
|    $\copyright$    | `\copyright`                    | Copyright                                               |
|     $\pounds$      | `\pounds`                       | Pound sterling                                          |
|       $\yen$       | `\yen`                          | Yen currency                                            |
|      $\euro$       | `\euro` (requires `eurosym`)    | Euro currency                                           |
|     $\degree$      | `\degree` or `^{\circ}`         | Degree symbol                                           |
| $\textperthousand$ | `\textperthousand`              | Per thousand / Pour mille                               |
|   $\textbullet$    | `\textbullet`                   | Bullet point                                            |
|      $\cdots$      | `\cdots`                        | Centered dots                                           |
|      $\vdots$      | `\vdots`                        | Vertical dots                                           |
|      $\ddots$      | `\ddots`                        | Diagonal dots                                           |
|      $\ldots$      | `\ldots`                        | Baseline dots                                           |
|      $\dots$       | `\dots`                         | Smart dots (auto-position)                              |

## Math Mode Accents / Accents en Mode Math

| Accent / Accent | Command / Commande | Example / Exemple |
| :-------------: | :----------------- | :---------------- |
| $\hat{a}$ | `\hat{a}` | Circumflex / Circonflexe |
| $\check{a}$ | `\check{a}` | Caron / Caron |
| $\tilde{a}$ | `\tilde{a}` | Tilde |
| $\acute{a}$ | `\acute{a}` | Acute accent / Accent aigu |
| $\grave{a}$ | `\grave{a}` | Grave accent / Accent grave |
| $\dot{a}$ | `\dot{a}` | Dot above / Point suscrit |
| $\ddot{a}$ | `\ddot{a}` | Double dot / Double point |
| $\breve{a}$ | `\breve{a}` | Breve / Brève |
| $\bar{a}$ | `\bar{a}` | Bar above / Barre suscrite |
| $\vec{a}$ | `\vec{a}` | Vector arrow / Flèche de vecteur |
| $\widehat{abc}$ | `\widehat{abc}` | Wide hat / Chapeau large |
| $\widetilde{xyz}$ | `\widetilde{xyz}` | Wide tilde / Tilde large |
| $\overbrace{abc}$ | `\overbrace{abc}` | Overbrace / Accolade supérieure |
| $\underbrace{xyz}$ | `\underbrace{xyz}` | Underbrace / Accolade inférieure |
| $\overrightarrow{AB}$ | `\overrightarrow{AB}` | Right arrow above |
| $\overleftarrow{BA}$ | `\overleftarrow{BA}` | Left arrow above |
| $\overleftrightarrow{AB}$ | `\overleftrightarrow{AB}` | Bidirectional arrow |

> [!TIP] Multiple Accents / Accents Multiples
> Use `\mathrm{i}` for imaginary unit to avoid dot collision:
> Utilisez `\mathrm{i}` pour l'unité imaginaire pour éviter la collision des points :
> ```latex
> \ddot{\mathrm{i}} \quad \dot{\vec{r}}
> ```
> $$\ddot{\mathrm{i}} \quad \dot{\vec{r}}$$

## Arrays and Matrices / Tableaux et Matrices

### Basic Array Environment / Environnement Array de base

```latex
\begin{array}{cols}
  entry_{11} & entry_{12} & \ldots & entry_{1n} \\
  entry_{21} & entry_{22} & \ldots & entry_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  entry_{m1} & entry_{m2} & \ldots & entry_{mn}
\end{array}
```

$$\begin{array}{cols}
  entry_{11} & entry_{12} & \ldots & entry_{1n} \\
  entry_{21} & entry_{22} & \ldots & entry_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  entry_{m1} & entry_{m2} & \ldots & entry_{mn}
\end{array}
$$

**Column specifications / Spécifications de colonnes :**
- `l` - left aligned / aligné à gauche
- `c` - centered / centré
- `r` - right aligned / aligné à droite
- `|` - vertical line / ligne verticale
- `@{text}` - insert custom text / insérer du texte personnalisé

### Matrix Environments / Environnements Matrice

| Environment / Environnement | Command / Commande | Description / Description |
| :-------------------------: | :----------------- | :------------------------ |
| Plain matrix / Matrice simple | `\begin{matrix} ... \end{matrix}` | No delimiters / Pas de délimiteurs |
| Parentheses / Parenthèses | `\begin{pmatrix} ... \end{pmatrix}` | $( \dots )$ |
| Brackets / Crochets | `\begin{bmatrix} ... \end{bmatrix}` | $[ \dots ]$ |
| Braces / Accolades | `\begin{Bmatrix} ... \end{Bmatrix}` | $\{ \dots \}$ |
| Bars / Barres | `\begin{vmatrix} ... \end{vmatrix}` | $\vert \dots \vert$ |
| Double bars / Double barres | `\begin{Vmatrix} ... \end{Vmatrix}` | $\Vert \dots \Vert$ |
| Small matrix / Petite matrice | `\begin{smallmatrix} ... \end{smallmatrix}` | For inline matrices / Pour matrices en ligne |

**Example / Exemple :**
```latex
A = \begin{pmatrix}
  a_{11} & a_{12} & a_{13} \\
  a_{21} & a_{22} & a_{23} \\
  a_{31} & a_{32} & a_{33}
\end{pmatrix}, \quad
I = \begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}
```
Renders:
$$A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}, \quad I = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

### Cases Environment / Environnement Cases

```latex
|x| = \begin{cases}
  x & \text{if } x \geq 0 \\
  -x & \text{if } x < 0
\end{cases}
```
Renders: $|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$

### Aligned Equations / Équations Alignées

```latex
\begin{align}
  f(x) &= (x+a)(x+b) \\
       &= x^2 + (a+b)x + ab
\end{align}
```
Renders: $$\begin{align}
  f(x) &= (x+a)(x+b) \\
       &= x^2 + (a+b)x + ab
\end{align}$$ 
## Fonts / Polices

### Math Fonts / Polices Mathématiques

| Render / Rendu | Command / Commande | Description / Description |
| :------------: | :----------------- | :------------------------ |
| $\mathrm{ABC}$ | `\mathrm{ABC}` | Roman (upright) / Romain (droit) |
| $\mathit{ABC}$ | `\mathit{ABC}` | Italic / Italique |
| $\mathbf{ABC}$ | `\mathbf{ABC}` | Boldface / Gras |
| $\mathsf{ABC}$ | `\mathsf{ABC}` | Sans serif / Sans empattement |
| $\mathtt{ABC}$ | `\mathtt{ABC}` | Typewriter / Machine à écrire |
| $\mathcal{ABC}$ | `\mathcal{ABC}` | Calligraphic / Calligraphique |
| $\mathscr{ABC}$ | `\mathscr{ABC}` (requires `mathrsfs`) | Script / Script |
| $\mathfrak{ABC}$ | `\mathfrak{ABC}` (requires `amssymb`) | Fraktur / Gothique |
| $\mathbb{ABC}$ | `\mathbb{ABC}` (requires `amssymb`) | Blackboard bold / Ajouré (ensembles) |

> [!NOTE] Bold Math Symbols / Symboles Mathématiques en Gras
> Use `\boldsymbol{}` from `amsmath` or `\bm{}` from `bm` package:
> Utilisez `\boldsymbol{}` de `amsmath` ou `\bm{}` du paquet `bm` :
> ```latex
> \boldsymbol{\alpha} \quad \bm{\sum_{i=1}^n}
> ```


### Text in Math Mode / Texte en Mode Math

| Render / Rendu | Command / Commande | Description / Description |
| :------------: | :----------------- | :------------------------ |
| $\text{text}$ | `\text{text}` | Normal text / Texte normal |
| $\textrm{text}$ | `\textrm{text}` | Roman text / Texte romain |
| $\textbf{text}$ | `\textbf{text}` | Bold text / Texte gras |
| $\textit{text}$ | `\textit{text}` | Italic text / Texte italique |
| $\texttt{text}$ | `\texttt{text}` | Typewriter text / Texte machine |

### Font Sizes / Tailles de Police

| Command / Commande | Size / Taille |
| :----------------- | :------------ |
| `\displaystyle` | Large display size |
| `\textstyle` | Text size (default in math mode) |
| `\scriptstyle` | Sub/superscript size |
| `\scriptscriptstyle` | Smaller script size |

## Text Mode Accents / Accents en Mode Texte

These work in text mode (outside math mode).
Ces accents fonctionnent en mode texte (en dehors du mode mathématique).

| Accent / Accent | Command / Commande | Example / Exemple               |
| :-------------: | :----------------- | :------------------------------ |
|     `\'{o}`     | `\'{o}`            | ó (acute / aigu)                |
|     `\`{o}`     | `\`{o}`            | ò (grave / grave)               |
|     `\^{o}`     | `\^{o}`            | ô (circumflex / circonflexe)    |
|     `\"{o}`     | `\"{o}`            | ö (umlaut / tréma)              |
|     `\~{o}`     | `\~{o}`            | õ (tilde / tilde)               |
|     `\={o}`     | `\={o}`            | ō (macron / macron)             |
|     `\.{o}`     | `\.{o}`            | ȯ (dot above / point suscrit)   |
|     `\u{o}`     | `\u{o}`            | ŏ (breve / brève)               |
|     `\v{o}`     | `\v{o}`            | ǒ (caron / caron)               |
|     `\H{o}`     | `\H{o}`            | ő (double acute / double aigu)  |
|    `\t{oo}`     | `\t{oo}`           | o͜o (tie / liaison)             |
|     `\c{o}`     | `\c{o}`            | ç (cedilla / cédille)           |
|     `\d{o}`     | `\d{o}`            | ọ (dot below / point souscrit)  |
|     `\b{o}`     | `\b{o}`            | o (bar below / barre souscrite) |
|      `\oe`      | `\oe`              | œ (OE ligature / ligature OE)   |
|      `\OE`      | `\OE`              | Œ (OE ligature capital)         |
|      `\ae`      | `\ae`              | æ (AE ligature)                 |
|      `\AE`      | `\AE`              | Æ (AE ligature capital)         |
|      `\aa`      | `\aa`              | å (A with ring / A avec rond)   |
|      `\AA`      | `\AA`              | Å (A with ring capital)         |
|      `\o`       | `\o`               | ø (O with stroke / O barré)     |
|      `\O`       | `\O`               | Ø (O with stroke capital)       |
|      `\l`       | `\l`               | ł (L with stroke / L barré)     |
|      `\L`       | `\L`               | Ł (L with stroke capital)       |
|      `\ss`      | `\ss`              | ß (sharp S / S dur)             |
|       `?`       | `?`                | ¿ (inverted question mark)      |
|       `!`       | `!`                | ¡ (inverted exclamation mark)   |

> [!TIP] Direct Input / Saisie Directe
> With UTF-8 encoding, you can often type accents directly:
> Avec l'encodage UTF-8, vous pouvez souvent taper les accents directement :
> ```latex
> café naïve naïve café
> ```

## Spacing in Math Mode / Espacement en Mode Math

| Command / Commande      | Space / Espace       | Example / Exemple |
| :---------------------- | :------------------- | :---------------- |
| `\,` or `\thinspace`    | ³∕₁₈ em              | $a\,b$            |
| `\:` or `\medspace`     | ⁴∕₁₈ em              | $a\:b$            |
| `\;` or `\thickspace`   | ⁵∕₁₈ em              | $a\;b$            |
| `\quad`                 | 1 em                 | $a\quad b$        |
| `\qquad`                | 2 em                 | $a\qquad b$       |
| `\!` or `\negthinspace` | -³∕₁₈ em             | $a\!b$            |
| `\ ` (backslash space)  | word space           | $a\ b$            |
| `\phantom{xyz}`         | Space equal to "xyz" |                   |
| `\hphantom{xyz}`        | Horizontal phantom   |                   |
| `\vphantom{xyz}`        | Vertical phantom     |                   |

**Example / Exemple :**
```latex
\int\!\!\!\int_D f(x,y)\,dx\,dy \quad
\sqrt{\,\log x} \quad
\left( \frac{a}{b} \right)
```

$$\int\!\!\!\int_D f(x,y)\,dx\,dy \quad
\sqrt{\,\log x} \quad
\left( \frac{a}{b} \right)$$
## Common Environments / Environnements Courants

### Equation Environments / Environnements d'Équation

| Environment / Environnement | Description / Description |
| :-------------------------: | :------------------------ |
| `equation` | Numbered single equation |
| `equation*` | Unnumbered single equation |
| `align` | Multiple aligned equations with numbers |
| `align*` | Multiple aligned equations without numbers |
| `gather` | Multiple centered equations |
| `gather*` | Multiple centered equations without numbers |
| `multline` | Long equation over multiple lines |
| `multline*` | Long equation without number |
| `split` | Split single equation over lines (within `equation`) |
| `cases` | Piecewise definitions |
| `array` | General array/matrix |

### Theorem-like Environments / Environnements de Type Théorème

```latex
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{corollary}[theorem]{Corollary}
\newtheorem{definition}[theorem]{Definition}
\newtheorem{example}[theorem]{Example}
```

## Examples and Tips / Exemples et Conseils

### Common Formulas / Formules Courantes

**Quadratic formula / Formule quadratique :**
```latex
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
```
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Binomial theorem / Théorème binomial :**
```latex
(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
```
$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

**Euler's formula / Formule d'Euler :**
```latex
e^{i\theta} = \cos\theta + i\sin\theta
```
$$e^{i\theta} = \cos\theta + i\sin\theta$$

### Best Practices / Bonnes Pratiques

1. **Use `\left` and `\right` for auto-sizing delimiters**
   ```latex
   \left( \frac{a}{b} \right) \quad \left\langle x \right\rangle
   ```

2. **Use `\operatorname` for custom functions**
   ```latex
   \operatorname{Var}(X) \quad \operatorname{E}[X]
   ```

3. **Use `\text` for text in math mode**
   ```latex
   f(x) = x^2 \quad \text{for all } x \in \mathbb{R}
   ```

4. **Align equations with `&`**
   ```latex
   \begin{align*}
     f(x) &= x^2 + 2x + 1 \\
          &= (x+1)^2
   \end{align*}
   ```

5. **Use `\phantom` for alignment**
   ```latex
   \begin{aligned}
     a &= b + c \\
       &= \phantom{b} + d \quad \text{(aligned with c)}
   \end{aligned}
   ```

### Common Packages / Paquets Courants

```latex
\usepackage{amsmath, amssymb, amsthm}  % Essential math
\usepackage{mathtools}                  % Enhanced math tools
\usepackage{bm}                         % Bold math symbols
\usepackage{siunitx}                    % SI units
\usepackage{physics}                    % Physics notations
\usepackage{mathrsfs}                   % Script font
\usepackage{cancel}                     % Cancel terms
\usepackage{xcolor}                     % Colored math
\usepackage{tensor}                     % Tensor notation
\usepackage{braket}                     % Bra-ket notation
```

### Troubleshooting / Dépannage

| Problem / Problème | Solution / Solution |
| :----------------- | :------------------ |
| "Undefined control sequence" | Missing package / Paquet manquant |
| Overfull hbox | Adjust spacing / Ajuster l'espacement |
| Missing `$` inserted | Check math mode boundaries / Vérifier les limites du mode math |
| Font shape errors | Use correct font commands / Utiliser les bonnes commandes de police |

# ~={red} References =~
- [[Latex cheatsheet.pdf]]
- [LaTeX Project](https://www.latex-project.org/)
- [Overleaf Documentation](https://www.overleaf.com/learn)
- [Detexify](https://detexify.kirelabs.org/) - Symbol finder / Recherche de symboles
- [LaTeX Stack Exchange](https://tex.stackexchange.com/)

> [!SUMMARY]
> This comprehensive cheat sheet covers essential LaTeX mathematical notation with bilingual annotations. Regular updates are recommended as LaTeX packages evolve.
> Cette feuille de référence complète couvre la notation mathématique LaTeX essentielle avec des annotations bilingues. Des mises à jour régulières sont recommandées car les paquets LaTeX évoluent.