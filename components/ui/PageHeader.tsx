// app/components/PageHeader.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
}

export default function PageHeader({ title, subtitle, description, icon }: PageHeaderProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-purple-500/10" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {icon && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              {icon}
              {subtitle}
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}