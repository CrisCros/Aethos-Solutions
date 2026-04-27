"use client";

import { useSitePreferences } from "@/lib/providers/site-preferences";

export function ThemeToggle() {
  const { theme, setTheme } = useSitePreferences();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:shadow-glow dark:text-slate-100"
      aria-label="Toggle theme"
    >
      {isDark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
