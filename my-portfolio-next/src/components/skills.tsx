"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Cpu, Cloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


const iconMap: Record<string, any> = {
    "Programming Languages": <Terminal className="text-[#599692]" />,
    "Lenguajes de Programación": <Terminal className="text-[#599692]" />,
    "لغات البرمجة": <Terminal className="text-[#599692]" />,

    "Frontend Development": <Layout className="text-[#599692]" />,
    "Desarrollo Frontend": <Layout className="text-[#599692]" />,
    "تطوير الواجهة الأمامية": <Layout className="text-[#599692]" />,

    "Backend Development": <Database className="text-[#599692]" />,
    "Desarrollo Backend": <Database className="text-[#599692]" />,
    "تطوير الخلفية": <Database className="text-[#599692]" />,

    "DevOps & Tools": <Cloud className="text-[#599692]" />,
    "DevOps y Herramientas": <Cloud className="text-[#599692]" />,
    "DevOps والأدوات": <Cloud className="text-[#599692]" />,

    "AI & Automation": <Cpu className="text-[#599692]" />,
    "IA y Automatización": <Cpu className="text-[#599692]" />,
    "الذكاء الاصطناعي والأتمتة": <Cpu className="text-[#599692]" />,

    "AI & Data Science": <Code2 className="text-[#599692]" />,
    "IA y Ciencia de Datos": <Code2 className="text-[#599692]" />,
    "الذكاء الاصطناعي وعلوم البيانات": <Code2 className="text-[#599692]" />,
};

export default function Skills() {
    const { t } = useLanguage();
    const categories = t.skills.categories;

    return (
        <section id="skills" className="py-24 bg-white dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-slate-900 dark:text-white">
                        {t.skills.title} <span className="text-[#599692]">{t.skills.subtitle}</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto text-lg">
                        {t.skills.description}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {categories?.map((category: any, idx: number) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-[#599692]/50 hover:shadow-md transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#599692]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {iconMap[category.title] || <Code2 className="text-[#599692]" />}
                            </div>
                            <h3 className="text-xl font-bold mb-6 text-slate-700 dark:text-white">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill: string) => (
                                    <li key={skill} className="flex items-center gap-2 text-slate-600 dark:text-zinc-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#599692]" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
