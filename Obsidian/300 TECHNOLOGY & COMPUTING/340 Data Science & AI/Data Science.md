---
tags: [data-science, statistics, computer-science, formal-sciences]
source: https://virgili0.github.io/Virgilio/, https://en.wikipedia.org/wiki/Data_science
---

# Data Science

> [!abstract] Definition
> An **interdisciplinary field** that combines statistics, scientific computing, algorithms, and domain knowledge to extract or extrapolate knowledge from data — structured, unstructured, or noisy. It is multifaceted enough to be described simultaneously as a science, a research paradigm, a research method, a discipline, a workflow, and a profession.

---

## 1. History

| Year      | Milestone                                                                                                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1947      | John Tukey coined the term "bit" while at Bell Labs, building statistical methods for early computers — early seed of computational statistics                                                              |
| 1962      | John Tukey described a field he called "data analysis" in *The Future of Data Analysis*, arguing his real interest had shifted from classical mathematical statistics toward analyzing data itself          |
| 1962      | The US Air Force in Cambridge created a "Data Science Laboratory" to organize post-WWII advances in computation and data collection/usage — an early, independent use of the exact term                     |
| 1974      | Peter Naur proposed "data science" as an alternative name to "computer science" in his book *Concise Survey of Computer Methods*, to reflect the growing emphasis on data-driven methods                    |
| 1977      | International Association for Statistical Computing founded, aiming to link traditional statistical methodology with computing                                                                              |
| 1985      | C. F. Jeff Wu used "data science" as an alternative name for statistics in a lecture at the Chinese Academy of Sciences                                                                                     |
| 1992      | Attendees at a statistics symposium at the University of Montpellier II acknowledged the emergence of a new discipline combining statistics and data analysis with computing                                |
| 1996      | The International Federation of Classification Societies became the first conference to explicitly feature data science as a topic                                                                          |
| 2001      | William S. Cleveland published an action plan proposing to expand the technical scope of statistics under the "data science" banner — often cited as the root of the field's modern, independent conception |
| 2008      | The professional title "data scientist" is attributed to DJ Patil and Jeff Hammerbacher (at LinkedIn and Facebook respectively)                                                                             |
| 2012      | Davenport and Patil declared "Data Scientist: The Sexiest Job of the 21st Century" in Harvard Business Review, sparking mainstream adoption of the title                                                    |
| 2014      | The American Statistical Association renamed its Section on Statistical Learning and Data Mining to Statistical Learning and Data Science                                                                   |
| 2010s–now | Explosion driven by big data infrastructure (Hadoop, Spark), cheap cloud compute, and the deep learning wave; data science formalizes into standalone university degree programs                            |

**Framing note:** the field's identity has always been contested — David Donoho argues data science isn't distinguished from statistics by dataset size or the use of computing, and describes it instead as an applied field growing out of traditional statistics, while Vasant Dhar frames the distinction as statistics emphasizing quantitative description, whereas data science works with both quantitative and qualitative data and emphasizes prediction and action.

---

## 2. What It Actually Involves

Typical activities span the full pipeline: data collection and integration; cleaning and preparation (missing values, outliers, encoding, normalization); feature engineering and selection; visualization and descriptive statistics; fitting and evaluating statistical/ML models; and communicating results reproducibly via reports, notebooks, and dashboards.

| Concept | Meaning |
|---|---|
| **EDA (Exploratory Data Analysis)** | Uses graphics and descriptive statistics to explore patterns and generate hypotheses |
| **Confirmatory analysis** | Applies statistical inference to test hypotheses and quantify uncertainty |
| **CRISP-DM** | Lifecycle framework describing these steps from business understanding through deployment and monitoring |
| **Data-centric AI** | A recent shift in emphasis toward the quality of datasets — cleaning, refining, labeling — rather than only improving models |

---

## 3. Core Fields It Draws On

| Field | Contribution |
|---|---|
| **Mathematics** | Linear algebra, calculus, optimization — the machinery under every model |
| **Statistics** | Inference, hypothesis testing, uncertainty quantification, experimental design |
| **Computer Science** | Algorithms, data structures, systems, databases, distributed computing |
| **Information Science** | Information retrieval, data management, metadata, citation practices |
| **Domain knowledge** | Integration of the underlying application domain — e.g. natural sciences, IT, medicine — is what turns raw modeling into a usable answer |
| **Communication / Visualization** | Skills from graphic design and communication are explicitly part of the discipline, not an afterthought |

---

## 4. Virgilio's Map of the Field
*(from the reference you linked — a useful mental model of the learning path itself, structured Dante-style: increasing technical depth, decreasing abstraction)*

| Level | Scope | Content |
|---|---|---|
| **Paradiso** | High-level, for everyone, zero code/math | Demystifying AI/ML, when you actually need ML, use-cases, teaching strategy |
| **Purgatorio** | Entry-level technical, structured around the end-to-end DS process | Math & stats fundamentals, Python, the data science process, framing problems, data collection/prep/visualization, model selection & training, deployment & monitoring |
| **Inferno** | Advanced, hands-on, sub-field deep-dives | Time series, computer vision, (NLP), tools (LaTeX, Regex, GeoGebra), research skills (Zotero, reading papers), soft skills |

This mirrors the natural progression: **concept → math/stats/code fundamentals → end-to-end pipeline → specialized sub-field mastery.**

---

## 5. How Central / How Good Is It?

- It sits at the intersection of three mature disciplines (math, stats, CS) rather than being a wholly new one — Jim Gray described it as a "fourth paradigm" of science, alongside empirical, theoretical, and computational research, driven by the data deluge.
- Its value is directly tied to **decision-making under uncertainty at scale** — data analysis in this context means inspecting, cleaning, transforming, and modeling data to discover useful information and support decisions, which is why it has penetrated nearly every industry rather than staying academic.
- It is not without real critiques: contested boundaries with statistics (above), and real ethical exposure — privacy violations, bias amplification, and negative societal impacts are inherent risks when working with personal/sensitive data. Machine learning models specifically can amplify biases already present in training data, producing discriminatory outcomes — this isn't a footnote, it's load-bearing for responsible practice.
- Practically: it's less a "field" with settled theory (like linear algebra) and more a **workflow discipline** — its rigor comes from the math/stats it borrows, its relevance comes from domain context, and its impact comes from engineering execution at scale.

---

## 6. Where It Works (Applications)

| Domain | Use |
|---|---|
| **Business** | Customer analytics, forecasting, recommendation systems, pricing |
| **Healthcare / Bioinformatics** | Diagnostics, genomics, epidemiological modeling |
| **Finance** | Risk modeling, fraud detection, algorithmic trading |
| **Astronomy (Astroinformatics)** | Large-survey data processing, anomaly detection in sky surveys |
| **Tech / Web** | Search ranking, ad targeting, A/B testing infrastructure, LLM training pipelines |
| **Government / Policy** | Census analysis, resource allocation, public health surveillance |
| **Manufacturing / IoT** | Predictive maintenance, sensor-driven quality control |

---

## 7. Notes for Your Own Track

- Your SDID background already covers the Virgilio "Purgatorio" layer end-to-end (math/stats fundamentals → process → modeling → deployment) — your PFE (ASL system) is essentially a completed "Inferno" deep-dive in computer vision.
- The tension between "data science as rebranded statistics" vs. "data science as applied ML/engineering" is worth keeping in mind as you position yourself toward *research* specifically — research leans harder on the statistics/math rigor side than the industry "data scientist" role does.

---

## See Also
- [[Linear Algebra]]
- [[Statistics Fundamentals]]
- [[Machine Learning Theory]]
- [[The Data Science Process]]