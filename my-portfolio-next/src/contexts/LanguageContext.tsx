"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";
import esTranslations from "@/locales/es.json";

type Language = "en" | "ar" | "es";
type Direction = "ltr" | "rtl";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: any;
    dir: Direction;
}

const translations = {
    en: enTranslations,
    ar: arTranslations,
    es: esTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load language from localStorage
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage && ["en", "ar", "es"].includes(savedLanguage)) {
            setLanguageState(savedLanguage);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            // Update HTML attributes
            document.documentElement.lang = language;
            document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        }
    }, [language, mounted]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    };

    const dir: Direction = language === "ar" ? "rtl" : "ltr";

    const value = {
        language,
        setLanguage,
        t: translations[language],
        dir,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
