import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import katex from "katex";
import { API_BASE } from "../api";

// Render the sanitized HTML produced by the backend, then (a) run KaTeX over
// any math spans and (b) intercept internal wikilink clicks so they route
// through the SPA instead of doing a full page load.
export default function Markdown({ html }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  const processedHtml = useMemo(() => {
    if (!html) return "";
    if (API_BASE && API_BASE !== "/api") {
      return html.replace(/src="\/api\/attachments\//g, `src="${API_BASE}/attachments/`);
    }
    return html;
  }, [html]);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // KaTeX auto-render over text nodes (handles the $...$ we preserved).
    try {
      renderMath(root);
    } catch (err) {
      console.error("KaTeX render error", err);
    }

    // Open external links in a new tab.
    root.querySelectorAll('a[href^="http"]').forEach((a) => {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noreferrer");
    });

    // Intercept in-app note links.
    const onClick = (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("/garden/note/")) {
        e.preventDefault();
        navigate(href);
        const hash = href.split("#")[1];
        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 60);
        } else {
          window.scrollTo({ top: 0 });
        }
      }
    };
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, [processedHtml, navigate]);

  return (
    <div
      ref={ref}
      className="prose-note"
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
}

// Minimal KaTeX auto-render: scan text nodes for $...$ and $$...$$.
function renderMath(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.includes("$")) {
        return NodeFilter.FILTER_REJECT;
      }
      const parent = node.parentElement;
      if (!parent || parent.closest(".katex") || parent.tagName === "SCRIPT") {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const targets = [];
  while (walker.nextNode()) targets.push(walker.currentNode);

  for (const node of targets) {
    const text = node.nodeValue;
    // Match block ($$...$$) first, then inline ($...$).
    const parts = text.split(/(\$\$[^$]+\$\$|\$[^$\n]+\$)/g);
    if (parts.length === 1) continue;
    const frag = document.createDocumentFragment();
    for (const part of parts) {
      if (!part) continue;
      const isBlock = part.startsWith("$$") && part.endsWith("$$");
      const isInline = !isBlock && part.startsWith("$") && part.endsWith("$");
      if (isBlock || isInline) {
        const tex = isBlock ? part.slice(2, -2) : part.slice(1, -1);
        try {
          const span = document.createElement("span");
          span.innerHTML = katex.renderToString(tex, {
            displayMode: isBlock,
            throwOnError: false,
          });
          frag.appendChild(span);
          continue;
        } catch {
          /* fall through to plain text */
        }
      }
      frag.appendChild(document.createTextNode(part));
    }
    node.parentNode.replaceChild(frag, node);
  }
}
