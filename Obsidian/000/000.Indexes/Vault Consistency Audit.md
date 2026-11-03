---
type: note
tags:
- note
---

# 🔍 Vault Consistency Audit

> [!INFO] Report — 2026-10-15
> Full health check of the Obsidian vault, produced during the MOC build pass. **Report-only:** nothing besides the MOC system files was modified, moved, or deleted. Everything below is a recommendation for you to action.
>
> Jump to: [[MOC — Vault Index]] · §1 [[#1. MOC System (built in this pass)|MOC system]] · §2 [[#2. Broken Links (≈2,300 vault-wide)|Broken links]] · §3 [[#3. Empty & Stub Notes (51 zero-byte + 13 tiny)|Stubs]] · §4 [[#4. Naming & Structural Issues|Naming]] · §5 [[#5. Frontmatter & Tags|Frontmatter]] · §6 [[#6. Duplicates & Overlaps|Duplicates]] · §7 [[#7. Misplaced Content|Misplaced]] · §8 [[#8. Content Gaps — What to Write Next|Next steps]]

---

## 1. MOC System (built in this pass)

**29 MOC files** now exist (27 new + 2 updated) and this audit note. All wiki-links inside them were verified to resolve.

| Layer | MOCs |
|---|---|
| Master | [[MOC — Vault Index]] (this folder) |
| Sections | [[MOC — Formal Sciences]] · [[MOC — Natural Sciences]] · [[MOC — Computer Science & Programming]] · [[MOC — Data Science & AI]] · [[MOC — Humanities & Society]] · [[MOC — Arts & Culture]] · [[MOC — Social Sciences & Human Behavior]] · [[MOC — Applied Sciences & Engineering]] · [[MOC — Frontier & Interdisciplinary]] |
| Divisions (100) | [[MOC — Pure Mathematics]] · [[MOC — Applied Mathematics]] · [[MOC — Statistics & Probability]] · [[MOC — Logic & Set Theory]] · [[MOC — History & Philosophy of Math]] |
| Divisions (200–500) | [[MOC — Biology]] · [[MOC — Algorithms & Data Structures]] · [[MOC — Programming & Software Development]] · [[MOC — Software Engineering]] · [[MOC — Tools & Environment]] · [[MOC — Computer Systems & Infrastructure]] · [[MOC — History]] · [[MOC — Music Theory & Practice]] · [[MOC — Film & Media]] |
| Topics | [[MOC — Linear Algebra]] · [[MOC — Trigonometry]] · [[MOC — Java]] · [[MOC — Python]] · [[MOC — PFE Architecture]] |

**Conventions fixed in the two pre-existing MOCs:**
- All `_MOC - X` wiki-links (14 total vault-wide) rewritten to the real `MOC — X` filenames. **Zero `_MOC` references remain vault-wide.**
- Stale content corrected: 311 was listed "empty" (it has 19 notes); missing 360 division added; CS MOC now delegates to division MOCs; DS MOC got correct em-dash links (e.g. [[11. Self-Attention — The Heart of the Transformer]]), updated PFE references (01–15, not 01–11), and volatile claims like "(48KB)" replaced by ⭐ markers.
- `000` stays outside the MOC system (except this folder), as agreed.

---

## 2. Broken Links (≈2,300 vault-wide)

Script count: **2,349 unresolved wiki-links** across 441 notes (case-insensitive matching). Excluding false positives (Excalidraw `.excalidraw.md` naming), ~2,100 are real. Two dominant classes:

### 2a. Missing reference PDFs — 229 occurrences
You link the source books heavily, but the PDFs are not in the vault:

| Target | Uses |
|---|:---:|
| `Precalculus - Mathematics for Calculus 8th…(Stewart).pdf` | 67 |
| `James_Stewart_Calculus_Early_Transcendentals…pdf` | 49 |
| `Data_Structures_and_Algorithms_in_Python…Goodrich.pdf` | 25 + 15 |
| `Precalculus, 9th Edition (Sullivan).pdf` | 19 |
| `How_to_Prove_It…Velleman.pdf` | 9 |

**Fix options (pick one):** (a) put the PDFs in `000/000.Source Material/` and update links; (b) create one stub note per book (e.g. "Stewart — Precalculus (8th ed.)") and link to that; (c) strip the brackets and keep plain-text citations. Option (b) keeps clean graphs with minimal effort.

### 2b. Referenced-but-never-written concept notes — top offenders
`Strang` (10×) · `ENSAM` (10×) · `Deep Learning` (9×) · `Neural Networks` (7×) · `R` (6×) · `Stewart` (6×) · `Matrix Algebra` (5×) · `UML` (4×) · `Roman Empire` (4×) · `Oracle` (4×) · `Carl Friedrich Gauss` (4×) · `Evolution` (4×) · `Linear Programming` (3×) · `Probability Theory` (3×) · `Euclid of Alexandria` (3×) · `Thales of Miletus` (3×) · `Archaebacteria`/`Monera`/`Fungi` (3× each) · `Guitar` (3×) · `Education` (3×).
**Fix:** either create small stub notes (they'd slot into the MOCs immediately) or delink. Highest value: `Deep Learning`, `Neural Networks`, `Matrix Algebra`, `UML`, `Evolution`.

### 2c. Excalidraw references
Links like `[[treilli.md]]` point at drawings now named `treilli.excalidraw.md`. Verify a few interactively in Obsidian and re-link as needed.

**Full machine-generated list:** `%TEMP%\vault_broken_links.txt` (from this session) — regenerate anytime with the link-check script in §9.

---

## 3. Empty & Stub Notes (51 zero-byte + 13 tiny)

### 3a. Misplaced zero-byte notes at the **vault root** (10)
They sit outside all folders and belong to specific divisions:

| Root file | Suggested home |
|---|---|
| `Ancient Egypt.md` | 400/410/413 Ancient History |
| `Animalia.md` | 200/220/224 Taxonomy |
| `Aristotle.md` | 400/420/421 Ancient Philosophy |
| `Artificial intelligence.md` | 300/340 Data Science & AI |
| `Australopithecus.md` | 200/220/223 Evolution (or 400/412 Pre-History) |
| `Composition.md` | 500/510/514 Composition **or** 500/530 Literature |
| `Islamic Golden Age.md` | 100/150/152 **or** 400/418 History of Science |
| `Japan.md` | 400/410/417 Contemporary World (or 413) |
| `Judaism.md` | 400/450/451 World Religions |
| `Latter Day Saint movement.md` | 400/450/451 World Religions |

### 3b. Zero-byte **hub stubs** inside structure (7)
- 🚧 [[Discrete Mathematics]] (122) · [[Machine Learning]] (341) · [[Supervised Learning]] (341) · [[Charles Darwin]] / [[Fibonacci]] / [[Pythagoras]] (419) · `Collection Interface` (000.Zettelkasten)

And one in source material: `000/000.Source Material/math/docs/Control Flow.md`.

### 3c. Tag-system stubs
`000/000.Zettelkasten/B - Tags`: **33 of 36 files are zero-byte** (only `Database.md` 7b, `Datawarehouse.md` 12b, `SQL.md` 25b have a byte or two). Either adopt this tag system or prune it — right now it's dead weight.

### 3d. Tiny content stubs (1–249 bytes, 13 total)
`Natural Selection` (96b) · `JDK, JRE and JVM` (101b) · `OOP` (101b) · `PostgreSQl` (87b) · `Hieroglyphic` (114b) · plus template/raw-note files in 000.

---

## 4. Naming & Structural Issues

1. **Typo:** `Perquisites - Review.md` → should be "**Prerequisites** - Review" (linked from [[MOC — Pure Mathematics]]).
2. **Casing:** `PostgreSQl.md` → "PostgreSQL".
3. **Folder typo:** `GIlbert Strang` → "Gilbert Strang".
4. **Inconsistent naming:** `Java Cheat Sheet` vs `Numpy Library Cheat sheet` vs `Python Cheat Sheet` vs `Pandas library Cheat Sheet` — standardize ("Cheat Sheet").
5. **Double spaces in filenames:** `13.  The Feed-Forward Block`, `Logarithmic Functions  - Limits` — harmless but error-prone in manual links.
6. **Number collision:** `122` is used twice — `122 Discrete Mathematics` and `122 Programmation Non Lineaire` (inside 121 Optimization). Renumber the latter (e.g. 126) or rename the folder without the code.
7. **Teacher name spelling:** "Pr. Azzouagh" (FSTM folders) vs "Pr. Azouagh" (342 folder) — pick one spelling.
8. **Sync-conflict files (delete after verifying):**
   - `Rotation of Axes.sync-conflict-20260621-041550-YEAPRK5.md` (vs [[Rotation of Axes]])
   - `Script.sync-conflict-20260616-212627-YEAPRK5.md` (vs [[Script.md]])
   - `Python Cheat Sheet.sync-conflict-20260104-230337-HDLN5MY.ipynb`
   - `Linear Regression.sync-conflict-20251228-001446-YEAPRK5.ipynb` and `…-20260104-230337-HDLN5MY.ipynb`
   - Plus ~60 `.obsidian/*.sync-conflict*.json` config files (safe to clean).
9. **Leftover folder:** `.stfolder.removed-20260914-224530` at the vault root (Syncthing residue) — delete.
10. ✅ **Good news:** no duplicate note basenames anywhere — a very healthy sign for a 440-note vault.

---

## 5. Frontmatter & Tags

- Only **33 / 442** pre-existing notes carry YAML frontmatter; the rest use a plain `Date:` / `Tags:` header where each tag is a wiki-link to a tag note. Two patterns coexist — pick one. If you want searchable metadata, move to YAML (`tags:`, `date:`).
- Tags are currently **wiki-links** (`Tags: [[Mathematics]]`), which don't feed Obsidian's tag pane or queries. If you want tag functionality, convert to `#tags` or frontmatter tags.
- **Dataview is not installed** — all navigation is manual. The new MOC system works without plugins, but Dataview + the frontmatter cleanup would enable automatic indexes later.
- 27–33 empty tag stubs in `B - Tags` (see §3c) — the tag system as scaffolded is unused.

---

## 6. Duplicates & Overlaps

1. **EN/FR pairs** (fine — cross-linked now in MOCs, but consider a single "canonical" per topic):
   - [[Linear Regression]] (EN) ↔ [[Régression Linéaire — Cheat Sheet]] (FR)
   - [[Business Intelligence et Data warehouse - FR]] ↔ [[Data Warehouse - Basics]] / [[Data Warehouse Architecture]]
2. **Three neural-network tracks** (intentional — documented in the [[MOC — Data Science & AI]] redundancy map): EN course notes, PFE series, Pr. Azouagh's FR course.
3. **Five+ roadmap notes in `000`:** Polymath Roadmap, 3-YEAR MASTER PLAN, THE 3-YEAR MASTER SCHEDULE, AI-ML Master Roadmap, ENSAM IAGI roadmap (plus [[the music plan]]). **Recommendation:** consolidate into one master roadmap note with sections, so goals don't contradict each other.
4. **Gradient-descent coverage** in `Méthodes du Gradient - SDID` (121), `Rétropropagation…` (342) and the PFE series — acceptable, but ensure one canonical reference (PFE 03 + Training note).

---

## 7. Misplaced Content

- 10 root-level strays — see §3a table.
- `000/z.RAW NOTES/Examen.md` — contains Java exam code that belongs in 322/JAVA (already flagged inside the old MOC).
- Language/interview prep material in `000/z.RAW NOTES` could seed the empty divisions (312, 315, 324).
- `000.Source Material/math/docs/Control Flow.md` (0 bytes) — decide: part of source material (leave) or promote to 322.

---

## 8. Content Gaps — What to Write Next

**A. Fill the hub stubs first** (cheapest, unblocks everything): [[Machine Learning]] → [[Supervised Learning]] → [[Discrete Mathematics]] → [[OOP]] → [[JDK, JRE and JVM]] → [[PostgreSQl]] → [[Natural Selection]] → [[Hieroglyphic]] → figure stubs ([[Pythagoras]], [[Fibonacci]], [[Charles Darwin]]).

**B. Empty divisions with structure ready** (recommended order of leverage):
- **300:** 312 Automata · 314 Computability · 315 Cryptography · 344 Computer Vision · 345 Data Engineering · 332–335 SWE toolbox
- **100:** 115 Number Theory · 131–134 Statistics · 143–144 Logic
- **400:** 420 Philosophy · 430 Economics · 450 Religious Studies *(your folder trees here are among the most ambitious in the vault — Aristotle.md and Judaism.md strays are seeds)*
- **500:** 520 Visual Arts · 530 Literature
- **200:** everything except 220 Biology
- **600/700/800:** all scaffolded, none started.

**C. Almost-complete areas** (one write each to "finish"): 150 (only 152–155 open), 130 (131–134 open), 510 (511/512/514/515 open), 540 (541–545 open).

**D. Formatting catch-ups:** several 000 notes use `[!ABSTRACT]` vs `[!INFO]` vs `[!NOTE]` inconsistently and `~={red}…=~` highlights (Obsidian core doesn't render these — they render only with a highlights plugin; verify). MathJax `$…$` is used consistently — good.

---

## 9. Maintenance Workflow (recommended)

1. **When adding a note:** add one line to its nearest MOC (section → division → topic), flip 🚧 → 📝 where relevant.
2. **Quarterly:** run a link check. Minimal script (PowerShell, from vault root):
   ```powershell
   $bank = @{}; Get-ChildItem -Recurse -File | ForEach-Object { $bank[$_.BaseName.ToLower()] = $true }
   Get-ChildItem -Recurse -Filter '*.md' | Where-Object { $_.Name -like 'MOC — *' } | ForEach-Object {
     $t = Get-Content $_ -Raw
     [regex]::Matches($t, '\[\[([^\]\|#]+)') | ForEach-Object {
       $b = ($_.Groups[1].Value -split '/')[-1] -replace '\.md$',''
       if (-not $bank.ContainsKey($b.ToLower())) { "$($_.Groups[1].Value)  <-  $($_.Groups[0])" ; "$($_.Name)" }
     }
   }
   ```
3. **Keep the `000` rule:** raw notes & source material stay unindexed; only promote a note into 100–800 when it's cleaned up.
4. **Delete after verifying:** sync-conflict files (§4.8), `.stfolder.removed…` folder, and decide the fate of the 33 empty tag stubs.

## 🗺️ Related

- [[MOC — Vault Index]] — the entry point this audit supports
