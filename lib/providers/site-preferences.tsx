"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Dictionary, dictionaries, Language } from "@/lib/i18n";

type Theme = "dark" | "light";

type SitePreferencesContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  dict: Dictionary;
};

const SitePreferencesContext = createContext<SitePreferencesContextType | null>(null);

export function SitePreferencesProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("aethos-language") as Language | null;
    const savedTheme = localStorage.getItem("aethos-theme") as Theme | null;
    if (savedLanguage && Object.keys(dictionaries).includes(savedLanguage)) setLanguageState(savedLanguage);
    if (savedTheme === "light" || savedTheme === "dark") setThemeState(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = language;
    localStorage.setItem("aethos-theme", theme);
  }, [theme, language]);

  useEffect(() => {
    localStorage.setItem("aethos-language", language);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage: setLanguageState, theme, setTheme: setThemeState, dict: dictionaries[language] }),
    [language, theme]
  );

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);
  if (!context) throw new Error("useSitePreferences must be used inside SitePreferencesProvider");
  return context;
}
