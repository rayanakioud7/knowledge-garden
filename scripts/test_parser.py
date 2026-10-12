"""Ad-hoc smoke test for the parser + vault scanner.

Run with the ``garden`` micromamba env:
    python scripts/test_parser.py
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "backend"))

from parser.vault import scan_vault  # noqa: E402
from parser.renderer import render_note  # noqa: E402

VAULT = Path(__file__).resolve().parents[1] / "Obsidian"


def _resolver(target, heading):
    return (f"/garden/note/{target}", True)


def _attachment(filename):
    return f"/api/attachments/{filename}"


def main() -> None:
    notes = scan_vault(VAULT)
    print("NOTES SCANNED:", len(notes))

    def find(substr):
        return next((k for k in notes if substr.lower() in k), None)

    for needle in ["mesopotamia", "discovering-errors", "algebra-essentials"]:
        key = find(needle)
        if not key:
            print(f"\n### {needle}: NOT FOUND")
            continue
        n = notes[key]
        print(f"\n### {n.title}")
        print("  domain:", n.domain_code, n.domain_name, "| section:", n.section_code, n.section_name)
        print("  tags:", n.tags)
        print("  outgoing:", n.outgoing_links, "| backlinks:", len(n.backlinks))
        print("  callouts:", n.callouts[:4])
        print("  latex:", n.has_latex, "| embeds:", n.has_embeds, "| words:", n.word_count)
        html = render_note(n.body_md, _resolver, _attachment)
        print("  html length:", len(html))
        checks = {
            "wikilink": 'class="wikilink"' in html,
            "callout": 'class="callout' in html,
            "callout-title": "callout-title" in html,
            "color": "color:" in html,
            "mark": "<mark>" in html,
            "img": 'class="embed' in html,
            "math($)": "$" in html,
            "code": "<code>" in html or "<pre>" in html,
        }
        print("  transforms:", {k: v for k, v in checks.items() if v})

    print("\n--- TOTALS ---")
    print("edges:", sum(len(x.outgoing_links) for x in notes.values()))
    print("unique tags:", len({t for x in notes.values() for t in x.tags}))
    print("latex notes:", sum(1 for x in notes.values() if x.has_latex))


if __name__ == "__main__":
    main()
