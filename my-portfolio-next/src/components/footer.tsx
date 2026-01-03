"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary mb-4 inline-block">
                            AH.
                        </Link>
                        <p className="text-muted max-w-sm">
                            Crafting digital experiences with modern web technologies. Specialized in the MERN stack and AI automation.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-muted hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-muted hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/projects" className="text-muted hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="/contact" className="text-muted hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-foreground mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/abdul-haseeb5786" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/abdul-haseeb200" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:abdulhaseebsohail115@gmail.com" className="text-muted hover:text-primary transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                    <p>© {currentYear} Abdul Haseeb. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with <span className="font-semibold text-foreground">Next.js</span> & <span className="font-semibold text-foreground">Tailwind</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
