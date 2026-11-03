# Knowledge Garden engineering review — 2026-10-31

## Purpose and scope

Personal Obsidian reader and engineering portfolio: React/Vite frontend, Django
API, generated JSON index, wikilink graph, Dewey folder taxonomy, math rendering,
and Maps of Content. Reviewed the documentation, deployment configuration, parser,
index service, REST views, sync modules, main frontend routes, navigation, rendering,
shared data and reading utilities. Scanned all eligible Markdown notes with the
parser. This is not an editorial fact-check of every note or visual inspection of
every attachment. Existing uncommitted user changes were retained.

## Changes made

- Atlas: topic/domain filters persisted in URL, recent-note links, all-notes shortcut.
- Graph and canvas tree: separate lazy-loaded bundles.
- Search and note pages: ignore late responses; search errors are handled visibly.
- About/CV: failures no longer leave an endless loading message.
- Navigation: active Garden section on child routes, skip link, accessible filter
  labels and folder expanded state.
- Shared data: one-minute cache lifetime on subsequent requests; palette reloads
  its corpus on opening through that shared cache.
- Markdown: modifier-click retains native browser behavior; math skips code blocks.
- Theme: blocked local storage no longer prevents startup.
- Index: detect changed file sets and mtimes; persist build time; atomic JSON replacement;
  remove server vault path from public status.
- Webhook: GitHub HMAC signature verification and production fail-closed behavior.
- Attachments: restrict to media extensions and reject paths outside the vault.
- Mirror: initial sync compares timestamps and size; fix Excalidraw case matching.
- Declare the watchdog dependency used by both sync modules.

## Prioritized follow-up

1. **Publishing automation:** establish one authoritative deployment process. Current
   Vercel proxy points to PythonAnywhere. Webhook alone does not pull notes, and
   hourly script assumes a separate vault repository. Prefer a reviewed deployment
   job that builds and publishes a versioned index, then reloads the API.
2. **Public-content boundary:** raw HTML is trusted and rendered directly. There is
   no HTML sanitizer despite wording in some comments. Introduce an allowlist
   sanitizer with math/callout fixtures before accepting third-party note content.
   Attachments currently have a broader publication policy than the Markdown scanner.
3. **Link fidelity:** graph resolution uses bare filenames while rendered-link
   lookup also uses titles. Add one shared resolver for aliases, folder-qualified
   targets, duplicate names, and relative links. Invalidate cached HTML when the
   target inventory changes, so old ghost links can become real links.
4. **Mirror events:** handle rename/move destinations and directory deletions;
   reconcile deleted files after offline edits. Initial sync does not remove
   destination-only notes. Avoid automatic deletion until the copy policy is explicit.
5. **Navigation density:** prefer a compact topic list with optional constellation
   previews. Large square maps consume substantial vertical space. Keep the canvas
   tree as an exploration view; retain accessible lists as the reliable path.
6. **Accessibility:** mobile drawer and palette need complete focus containment,
   Escape/return-focus behavior, and keyboard coverage. Constellation dot navigation
   needs a keyboard equivalent. Chapter shortcuts should pause while dialogs are open.
7. **Search:** body text is not indexed beyond the excerpt. Add full-body ranking,
   accent folding and URL-backed notes-index queries before adding an external service.
8. **Operations:** tighten host/CORS settings for the selected host, explicitly load
   environment variables, use reproducible dependency locks, run dependency audits,
   and add CI for builds and regression checks. Docker builds should use `npm ci`.
9. **Rendering:** protect fenced code from regex transforms; support note/PDF embeds,
   heading-only links, and hash scrolling after async note load. Improve CV print
   styling so the mobile header/footer cannot appear on printouts.
10. **Freshness:** mounted Atlas/tree views still need subscriptions or polling for
    live updates. Throttled backend scans currently check Markdown, not attachment-only
    changes. Atomic replacement avoids partial reads but does not serialize rebuilds
    across multiple server workers; add a process lock or single build worker.

## Validation

- Production frontend build completed successfully; graph/tree chunks load separately.
- Django system check passed.
- Three regression tests passed: add/delete freshness with stable timestamp,
  signed/unsigned webhook behavior, and unconfigured production webhook rejection.
- Parser smoke test: 449 notes, 1,839 links, 322 tags, 295 notes containing math.
- Tree smoke test: all 449 indexed notes represented.
- Current vault rebuilt with `build_index --force`.
- No production publish, remote hosting-account inspection, or browser visual QA
  was performed. Repository configuration identifies the intended hosting topology;
  it does not establish the deployed server's current settings or revision.

## Second pass: portfolio + navigation overhaul

Replaced the Atlas landing with a Library directory; Atlas remains at `/garden/atlas`.
Redesigned the homepage, sidebar and Projects page with the existing fonts, colors,
hairline borders and editorial styling. Added topic drill-down, scoped search,
30-note pages, URL state, note outline, reading times, route scroll reset, mobile
focus handling, visible focus styles and reduced-motion support.

Read the current public GitHub repository listing and repository READMEs. All 11
repositories are represented once, with CminiTorch, signlang and Foundations Toolkit
featured. SDID project collaboration is credited. Independent projects have no
invented repository links. Public metadata snapshot supports network failure;
failed refresh attempts are throttled. Curated descriptions remain locally editable.

Validation: production build, Django system check, 3 index/webhook tests and 2 new
portfolio tests pass. Browser checks covered project category filtering, a subject
route, scoped vector search, note outline, desktop layout and the mobile menu with
Escape dismissal. Homepage checked at 390px without horizontal overflow. This pass
does not resolve every item in the earlier follow-up list (notably deployment
sync automation, parser fidelity, and sanitization).
