Date: 2025-11-01
Tags: [[Mathematics]]

# ~={red} Notes=~

LaTeX *(pronounced Latek)* is a a software system for typesetting documents based on TeX. Created by Leslie Lamport.
you can either use is online or offline.
And you can save your document either as a .tex file or a .pdf which can be very handy
### Online LaTeX
To use LaTeX online you can go the [OverLeaf](https://www.overleaf.com/project) websites to start documenting and writing.

LaTeX relies on the \ a lot so dont confuse it with /
Start by creating a document by writing `\documentclass[]{article}` 


### Diagramme de hass
#### Chaine
\section*{Diagramme de Hasse}
puisque la decomposition et constitue d'un seul nombre le diagramme de hasse va être une chaine.


\begin{center}
\begin{tikzpicture}[node distance=1cm]
\node[circle,draw] (1) {1};
\node[circle,draw] (2) [right=of 1] {2};
\node[circle,draw] (4) [right=of 2] {4};
\node[circle,draw] (8) [right=of 4] {8};
\node[circle,draw] (16) [right=of 8] {16};
\node[circle,draw] (32) [right=of 16] {32};
\node[circle,draw] (64) [right=of 32] {64};

\draw (1) -- (2);
\draw (2) -- (4);
\draw (4) -- (8);
\draw (8) -- (16);
\draw (16) -- (32);
\draw (32) -- (64);
\end{tikzpicture}
\end{center}

#### grille
\begin{center}
\begin{tikzpicture}[scale=1.5]
\node[circle,draw] (1) at (0,0) {1};
\node[circle,draw] (2) at (1,0) {2};
\node[circle,draw] (4) at (2,0) {4};
\node[circle,draw] (8) at (3,0) {8};
\node[circle,draw] (16) at (4,0) {16};
\node[circle,draw] (32) at (5,0) {32};

\node[circle,draw] (3) at (0,2) {3};
\node[circle,draw] (6) at (1,2) {6};
\node[circle,draw] (12) at (2,2) {12};
\node[circle,draw] (24) at (3,2) {24};
\node[circle,draw] (48) at (4,2) {48};
\node[circle,draw] (96) at (5,2) {96};

\draw (1) -- (3);
\draw (2) -- (6);
\draw (4) -- (12);
\draw (8) -- (24);
\draw (16) -- (48);
\draw (32) -- (96);

\draw (1) -- (2);
\draw (2) -- (4);
\draw (4) -- (8);
\draw (8) -- (16);
\draw (16) -- (32);

\draw (3) -- (6);
\draw (6) -- (12);
\draw (12) -- (24);
\draw (24) -- (48);
\draw (48) -- (96);
\end{tikzpicture}
\end{center}
# ~={red}References=~
