/** @type {import('tailwindcss').Config} */
//
// Theming strategy: colors are bound to CSS custom properties (defined in
// index.css). A `.dark` class on <html> swaps those variables, so EVERY
// utility (bg-paper, text-ink, border-paper-line, text-accent, ...) inverts
// automatically with no per-component `dark:` classes. This keeps the palette
// identical in spirit (pure monochrome + one navy accent) in both modes.
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          mute: "var(--ink-mute)",
          faint: "var(--ink-faint)",
        },
        paper: {
          DEFAULT: "var(--paper)",
          shade: "var(--paper-shade)",
          line: "var(--paper-line)",
          line2: "var(--paper-line2)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          dark: "var(--accent)",
        },
      },
      maxWidth: {
        prose: "46rem",
      },
      typography: {},
    },
  },
  plugins: [],
};
