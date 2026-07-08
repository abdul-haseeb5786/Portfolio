"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "en" as const, name: "English", flag: "🇬🇧" },
        { code: "ar" as const, name: "العربية", flag: "🇸🇦" },
        { code: "es" as const, name: "Español", flag: "🇪🇸" },
    ];

    const currentLanguage = languages.find((lang) => lang.code === language);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="editorial-button px-3 py-2"
                aria-label="Select language"
            >
                <Globe size={16} />
                <span>{currentLanguage?.code.toUpperCase()}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full right-0 z-50 mt-2 min-w-[180px] overflow-hidden border-2 border-border bg-background shadow-[6px_6px_0_var(--accent)]"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary ${language === lang.code ? "bg-secondary" : ""
                                        }`}
                                >
                                    <span className="text-lg">{lang.flag}</span>
                                    <span className="editorial-mono text-xs uppercase tracking-[0.1em]">
                                        {lang.name}
                                    </span>
                                    {language === lang.code && (
                                        <span className="ml-auto text-primary">✓</span>
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
