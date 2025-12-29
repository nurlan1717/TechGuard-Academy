// app/components/StatCard.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ icon, value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 text-center hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
        <div className="w-14 h-14 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
          <div className="text-purple-600 dark:text-purple-400">
            {icon}
          </div>
        </div>
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {label}
        </div>
      </div>
    </motion.div>
  );
}