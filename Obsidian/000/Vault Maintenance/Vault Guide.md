---
type: guide
tags:
  - vault-maintenance
---

# Vault Guide

## Metadata

| Property | Purpose | Example |
| --- | --- | --- |
| `type` | Structural role | `note`, `moc`, `topic`, `raw-note`, `template` |
| `date` | Original date when explicitly recorded | `2026-08-26` |
| `tags` | Searchable Obsidian tags; lowercase words joined by hyphens | `linear-algebra` |
| `topics` | Links to your existing topic notes | `"[[Mathematics]]"` |
| `source` | Source reference, when already known | Book, section, or URL |

**Tags and links serve different purposes.** Use `tags` to filter notes; use `topics` for links to topic pages and the graph. Wiki-links in YAML must be quoted. Your old linked Tags headers remain intact so existing reading habits and graph connections continue to work. A future manual edit may remove a redundant header after checking its topic links are in `topics`.

Dates were copied only from explicit note headers. Notes without recorded dates were left undated. A fallback `note`, `moc`, `topic`, `raw-note`, or `template` tag marks structural role where no explicit subject metadata was available; it does not claim subject classification.

## Creating notes

Use the existing Templates folder and choose **General Note** or **Academic Note**. Insert the template with Obsidian's Templates command so the date and title placeholders resolve. Fill in subject tags, quoted topic links, and sources. Match the language of your study source.

Start navigation at [[Vault Home]] and use the existing MOCs. Keep attachments in their current locations. Empty topic pages may still be intentional graph nodes and should not be deleted just because they are empty.

## Recovery

The cleanup backup and manifest are in the hidden `.vault-maintenance` folder at the vault root. Each timestamped backup contains `before.zip`, `manifest.json`, and `restore.py`.

Close Obsidian before restoring. Run `python3 restore.py` from the timestamped backup folder. The restore checks the current content against the recorded post-cleanup hash: files edited since cleanup are skipped rather than overwritten. Existing files are restored from the backup; newly created cleanup pages are removed only if still unchanged. The backup remains available.

The archive includes all original visible Markdown and the Obsidian settings folder. Original attachments were not changed. It is a cleanup recovery snapshot, not a full backup of every attachment in the vault.
