import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "garden-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  // Default to LIGHT. Only a previous explicit toggle switches to dark, so the
  // OS dark-mode preference does not force the page dark on first visit.
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "dark" ? "dark" : "light";
}

// Applies/removes the `.dark` class on <html> and persists the choice.
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggle };
}
