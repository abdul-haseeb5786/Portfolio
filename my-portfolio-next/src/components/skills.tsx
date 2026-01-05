"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Cpu, Cloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


const iconMap: Record<string, any> = {
    "Programming Languages": <Terminal className="text-primary" />,
    "Lenguajes de Programación": <Terminal className="text-primary" />,
    "لغات البرمجة": <Terminal className="text-primary" />,

    "Frontend Development": <Layout className="text-primary" />,
    "Desarrollo Frontend": <Layout className="text-primary" />,
    "تطوير الواجهة الأمامية": <Layout className="text-primary" />,

    "Backend Development": <Database className="text-primary" />,
    "Desarrollo Backend": <Database className="text-primary" />,
    "تطوير الخلفية": <Database className="text-primary" />,

    "DevOps & Tools": <Cloud className="text-primary" />,
    "DevOps y Herramientas": <Cloud className="text-primary" />,
    "DevOps والأدوات": <Cloud className="text-primary" />,

    "AI & Automation": <Cpu className="text-primary" />,
    "IA y Automatización": <Cpu className="text-primary" />,
    "الذكاء الاصطناعي والأتمتة": <Cpu className="text-primary" />,

    "AI & Data Science": <Code2 className="text-primary" />,
    "IA y Ciencia de Datos": <Code2 className="text-primary" />,
    "الذكاء الاصطناعي وعلوم البيانات": <Code2 className="text-primary" />,
};

export default function Skills() {
    const { t } = useLanguage();
    const categories = t.skills.categories;

    return (
        <section id="skills" className="py-24 bg-card">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
                        {t.skills.title} <span className="text-primary">{t.skills.subtitle}</span>
                    </h2>
                    <p className="text-muted max-w-xl mx-auto text-lg">
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
                            className="p-8 rounded-2xl bg-secondary border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {iconMap[category.title] || <Code2 className="text-primary" />}
                            </div>
                            <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill: string) => (
                                    <li key={skill} className="flex items-center gap-2 text-muted">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
