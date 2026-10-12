import { useTheme } from "../useTheme.js";

// Monochrome toggle with strict hard corners and architectural precision.
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex w-full items-center justify-between gap-2 border border-paper-line2 px-3 py-2 text-xs text-ink-soft transition-colors hover:border-ink hover:text-ink"
    >
      <span className="font-mono uppercase tracking-[0.14em]">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
      <span
        className={`relative inline-flex h-4 w-7 items-center border border-paper-line2 transition-colors ${
          isDark ? "bg-ink" : "bg-paper-shade"
        }`}
      >
        <span
          className={`absolute h-2.5 w-2.5 transition-all ${
            isDark ? "left-3.5 bg-paper" : "left-0.5 bg-ink"
          }`}
        />
      </span>
    </button>
  );
}
