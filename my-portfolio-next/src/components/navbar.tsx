"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import LanguageSelector from "./language-selector";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: "/", match: (value: string) => value === "/" },
        { name: t.nav.projects, href: "/projects", match: (value: string) => value.startsWith("/projects") || value.startsWith("/casestudy") },
        { name: t.nav.about, href: "/about", match: (value: string) => value.startsWith("/about") || value.startsWith("/skills") },
        { name: t.nav.contact, href: "/contact", match: (value: string) => value.startsWith("/contact") },
    ];

    return (
        <nav
            className={`fixed top-0 z-50 w-full border-b-4 border-border transition-all duration-300 ${scrolled
                ? "bg-background/95 py-3 backdrop-blur-sm"
                : "bg-background py-4"
                }`}
            aria-label="Main Navigation"
        >
            <div className="editorial-shell flex items-center justify-between gap-4">
                <Link href="/" className="editorial-display text-3xl leading-none tracking-[-0.05em]">
                    AH<span className="text-primary">*</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    {navLinks.map((link, index) => {
                        const active = link.match(pathname);

                        return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`editorial-mono relative text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-primary ${active ? "text-foreground" : "text-muted"
                                }`}
                        >
                            <span className="mr-1 text-primary">{String(index + 1).padStart(2, "0")}</span>
                            {link.name}
                            {active ? <span className="absolute -bottom-5 left-0 h-1 w-full bg-primary" /> : null}
                        </Link>
                        );
                    })}
                    <LanguageSelector />
                    <ThemeToggle />
                </div>

                {/* Mobile Nav Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="editorial-button px-3 py-2"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={16} /> : <Menu size={16} />}
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
                        className="border-t-2 border-border bg-background md:hidden"
                    >
                        <div className="editorial-shell flex flex-col gap-4 py-6">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="editorial-display text-2xl"
                                >
                                    <span className="mr-2 text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-3 border-t border-border pt-4">
                                <LanguageSelector />
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
