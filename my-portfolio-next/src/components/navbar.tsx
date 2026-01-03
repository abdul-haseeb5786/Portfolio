"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import LanguageSelector from "./language-selector";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: "/" },
        { name: t.nav.about, href: "/about" },
        { name: t.nav.skills, href: "/skills" },
        { name: t.nav.projects, href: "/projects" },
        { name: t.nav.contact, href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
                    AH.
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <LanguageSelector />
                    <button>
                        <ThemeToggle />
                    </button>

                </div>

                {/* Mobile Nav Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <LanguageSelector />
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="p-1">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
