"use client";


import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return <div className="w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-900 animate-pulse" />;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-14 h-7 cursor-pointer flex items-center rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-purple-900/30 dark:to-gray-800 p-1 shadow-inner border border-gray-300 dark:border-purple-900/50"
      aria-label="Tema dəyişdir"
      title="Tema dəyişdir"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme}
          initial={currentTheme === "light" ? { x: 0 } : { x: 28 }}
          animate={currentTheme === "light" ? { x: 0 } : { x: 28 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute w-5 h-5 flex items-center justify-center"
        >
          <motion.div
            className="w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center border border-gray-200 dark:border-purple-900"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {currentTheme === "light" ? (
              <Sun className="w-3 h-3 text-amber-500" />
            ) : (
              <Moon className="w-3 h-3 text-purple-400" />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
      {/* Background Icons */}
      <div className="absolute left-1.5 opacity-40">
        <Sun className="w-3 h-3 text-amber-500" />
      </div>
      <div className="absolute right-1.5 opacity-40">
        <Moon className="w-3 h-3 text-purple-400" />
      </div>
    </motion.button>
  );
}
