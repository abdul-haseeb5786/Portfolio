"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();
    const navLinks = [
        { name: t.nav.home, href: "/" },
        { name: t.nav.projects, href: "/projects" },
        { name: t.nav.about, href: "/about" },
        { name: t.nav.contact, href: "/contact" },
    ];

    return (
        <footer className="border-t-4 border-border py-12 md:py-16" role="contentinfo" aria-label="Site Footer">
            <div className="editorial-shell">
                <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
                    <div>
                        <div className="editorial-eyebrow">End - Colophon</div>
                        <Link href="/" className="editorial-display mt-3 inline-block text-[clamp(52px,8vw,118px)]">
                            LET&apos;S<br />BUILD<span className="text-primary">.</span>
                        </Link>
                        <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
                            {t.footer.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="editorial-eyebrow mb-4 text-foreground">{t.footer.navigation}</h3>
                        <ul className="space-y-2 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="border-b border-dotted border-muted hover:border-primary hover:text-primary">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="editorial-eyebrow mb-4 text-foreground">{t.footer.connect}</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href={t.siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-dotted border-muted hover:border-primary hover:text-primary">
                                    <Github size={16} /> GitHub
                                </a>
                            </li>
                            <li>
                                <a href={t.siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-dotted border-muted hover:border-primary hover:text-primary">
                                    <Linkedin size={16} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${t.siteConfig.email}`} className="inline-flex items-center gap-2 border-b border-dotted border-muted hover:border-primary hover:text-primary">
                                    <Mail size={16} /> {t.siteConfig.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="editorial-eyebrow mb-4 text-foreground">Colophon</h3>
                        <ul className="space-y-2 text-sm text-muted">
                            <li>Type: Archivo Black, Space Grotesk, Fraunces, JetBrains Mono.</li>
                            <li>{t.footer.builtWith} Next.js and Tailwind CSS.</li>
                            <li>{t.siteConfig.location}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-border pt-5 text-xs uppercase tracking-[0.12em] text-muted md:flex-row md:items-center md:justify-between">
                    <p>© {currentYear} Abdul Haseeb. {t.footer.rights}</p>
                    <p>{t.siteConfig.role}</p>
                </div>
            </div>
        </footer>
    );
}
