"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative p-2 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "light" ? 1 : 0,
                    rotate: theme === "light" ? 0 : 90,
                    opacity: theme === "light" ? 1 : 0,
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <Sun className="h-5 w-5 text-yellow-500" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : -90,
                    opacity: theme === "dark" ? 1 : 0,
                }}
                className="flex items-center justify-center p-0.5"
            >
                <Moon className="h-5 w-5 text-blue-400" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
