"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Quote } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Reviews() {
    const [index, setIndex] = useState(0);
    const { t } = useLanguage();
    const reviews = t.reviews.items;

    useEffect(() => {
        if (!reviews || reviews.length === 0) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [reviews]);

    if (!reviews || reviews.length === 0) return null;

    const current = reviews[index];

    return (
        <section id="reviews" className="py-24 bg-white dark:bg-zinc-900/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-slate-900 dark:text-white">
                        {t.reviews.title} <span className="text-[#599692]">{t.reviews.subtitle}</span>
                    </h2>
                    <p className="text-slate-600 dark:text-zinc-400 text-lg">
                        {t.reviews.description}
                    </p>
                </div>

                <div className="relative h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center text-center p-8 bg-slate-100 dark:bg-zinc-900/50 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-xl dark:shadow-none"
                        >
                            <div className="mb-8 p-4 bg-[#599692]/10 rounded-full">
                                <Quote className="text-[#599692] w-8 h-8" />
                            </div>

                            <p className="text-xl md:text-2xl font-medium mb-10 italic leading-relaxed text-slate-700 dark:text-zinc-200">
                                &quot;{current?.review}&quot;
                            </p>

                            <div className="flex items-center gap-4 text-left">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#599692]">
                                    <Image
                                        src={current?.image}
                                        alt={current?.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-700 dark:text-white">{current?.name}</h4>
                                    <p className="text-sm text-slate-500 dark:text-zinc-400">{current?.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {reviews.map((_: any, i: number) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-[#599692]" : "w-2.5 bg-slate-300 dark:bg-zinc-700"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
