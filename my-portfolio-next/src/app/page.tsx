"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import About from "@/components/about";
import Projects from "@/components/projects-grid";
import Reviews from "@/components/reviews";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col overflow-hidden relative bg-background text-foreground">
      <section className="flex flex-col items-center justify-center p-6 md:p-24 min-h-screen relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10 text-center max-w-4xl space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold text-lg md:text-xl tracking-wide"
            >
              {t.hero.greeting}
            </motion.p>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              {t.hero.name}
              <span className="block text-2xl md:text-4xl mt-4 text-muted font-normal">
                <Typewriter
                  options={{
                    strings: t.hero.typewriterStrings,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.contactMe} <Mail size={18} />
              </span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:brightness-90 opacity-20 bg-black" />
            </Link>

            <Link
              href="/projects"
              className="group px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              {t.hero.viewProjects} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <About summary={true} />
      <Projects limit={3} />
      <Reviews />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{t.contact?.title || "Ready to Start a Project?"}</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            {t.contact?.subtitle || "Let's collaborate to bring your ideas to life with high-quality web solutions."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            {t.hero.contactMe} <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
