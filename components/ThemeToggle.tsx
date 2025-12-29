// components/ThemeToggle.jsx
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  const springConfig: import("framer-motion").Spring = {
    stiffness: 500,
    damping: 30
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-14 h-7 flex items-center rounded-full bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 p-1 shadow-inner border border-zinc-300 dark:border-zinc-600"
      aria-label="Tema dəyişdir"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={theme === 'light' ? { x: 0 } : { x: 28 }}
          animate={theme === 'light' ? { x: 0 } : { x: 28 }}
          transition={springConfig}
          className="absolute w-5 h-5 flex items-center justify-center"
        >
          <motion.div
            className="w-5 h-5 rounded-full bg-white dark:bg-zinc-900 shadow-lg flex items-center justify-center"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'light' ? (
              <Sun className="w-3 h-3 text-yellow-500" />
            ) : (
              <Moon className="w-3 h-3 text-blue-400" />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Background Icons */}
      <div className="absolute left-1.5 opacity-40">
        <Sun className="w-3 h-3 text-yellow-500" />
      </div>
      <div className="absolute right-1.5 opacity-40">
        <Moon className="w-3 h-3 text-blue-400" />
      </div>
    </motion.button>
  );
}