import { useEffect, useState } from "react";

// Deterministic grey shade per Dewey domain so graphs and atlas plates read at
// a glance. Two palettes: one for light mode (darker nodes) and one for dark
// mode (lighter nodes) so visuals stay legible when the theme flips.
export const LIGHT_SHADES = {
  "000": "#a1a1aa", "100": "#27272a", "200": "#3f3f46", "300": "#111113",
  "400": "#52525b", "500": "#71717a", "600": "#3f3f46", "700": "#52525b",
  "800": "#18181b",
};
export const DARK_SHADES = {
  "000": "#52525b", "100": "#a1a1aa", "200": "#d4d4d8", "300": "#f4f4f5",
  "400": "#71717a", "500": "#a1a1aa", "600": "#d4d4d8", "700": "#71717a",
  "800": "#52525b",
};

// Tracks the `.dark` class on <html> so SVG/canvas colours can swap live.
export function useIsDark() {
  const [dark, setDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() =>
      setDark(el.classList.contains("dark"))
    );
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

export function domainShade(code, isDark) {
  const shades = isDark ? DARK_SHADES : LIGHT_SHADES;
  return shades[code] || (isDark ? "#a1a1aa" : "#52525b");
}
