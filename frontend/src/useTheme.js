import { useCallback, useSyncExternalStore } from "react";

// Module-level theme store so every consumer (sidebar toggle, command palette,
// …) stays in sync: one source of truth, persisted in localStorage.

const STORAGE_KEY = "garden-theme";
const listeners = new Set();

function getStored() {
  if (typeof window === "undefined") return "light";
  // Default to LIGHT. Only a previous explicit toggle switches to dark, so the
  // OS dark-mode preference does not force the page dark on first visit.
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

let current = getStored();

// Apply the initial class on load; keeps localStorage untouched.
if (typeof document !== "undefined") {
  document.documentElement.classList.toggle("dark", current === "dark");
}

function apply(theme) {
  current = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore storage errors (private mode, etc.) */
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getTheme() {
  return current;
}

export function setTheme(theme) {
  apply(theme === "dark" ? "dark" : "light");
}

export function toggleTheme() {
  apply(current === "dark" ? "light" : "dark");
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    () => current,
    () => "light"
  );
  const toggle = useCallback(() => toggleTheme(), []);
  return { theme, toggle };
}
