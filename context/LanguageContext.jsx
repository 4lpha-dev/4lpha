"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import en from "@/translations/en";
import ar from "@/translations/ar"
const LanguageContext = createContext(null);

const translations = { en, ar };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.lang = language;
    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";

    localStorage.setItem("language", language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}