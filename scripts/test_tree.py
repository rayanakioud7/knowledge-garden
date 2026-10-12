"""Smoke test for the folder tree + /api/tree payload."""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "backend"))

INDEX = Path(__file__).resolve().parents[1] / "backend" / "garden-index.json"


def main() -> None:
    data = json.loads(INDEX.read_text(encoding="utf-8"))
    tree = data["tree"]
    print("root noteCount:", tree["noteCount"])
    print("top-level children:", [c["name"] for c in tree["children"]])

    fs = next((c for c in tree["children"] if c["code"] == "100"), None)
    if fs:
        print("100 children:", [c["name"] for c in fs["children"]])
        pm = next((c for c in fs["children"] if c["code"] == "110"), None)
        if pm:
            print("110 children:", [c["name"] for c in pm["children"]])
            alg = next((c for c in pm["children"] if "Algebra" in c["name"]), None)
            if alg:
                print(
                    "Algebra subtree noteCount:", alg["noteCount"],
                    "| direct notes:", len(alg["notes"]),
                )
                # Descend to find the deepest path.
                node, depth, chain = alg, 0, [alg["name"]]
                while node["children"]:
                    node = node["children"][0]
                    depth += 1
                    chain.append(node["name"])
                print("deepest under Algebra:", " > ".join(chain))

    # Verify every note is represented somewhere in the tree.
    def count(n):
        return len(n["notes"]) + sum(count(c) for c in n["children"])

    print("notes represented in tree:", count(tree))
    print("total notes in index:", len(data["notes"]))


if __name__ == "__main__":
    main()
