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
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Select language"
            >
                <Globe size={18} />
                <span className="text-sm font-medium">{currentLanguage?.flag}</span>
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
                            className="absolute top-full mt-2 right-0 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-slate-200 dark:border-zinc-800 overflow-hidden z-50 min-w-[160px]"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors ${language === lang.code ? "bg-slate-50 dark:bg-zinc-800" : ""
                                        }`}
                                >
                                    <span className="text-xl">{lang.flag}</span>
                                    <span className="text-sm font-medium">{lang.name}</span>
                                    {language === lang.code && (
                                        <span className="ml-auto text-[#599692]">✓</span>
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
