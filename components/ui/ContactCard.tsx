// app/components/ContactCard.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  link?: string;
  description?: string;
  badge?: string;
  delay?: number;
}

export default function ContactCard({ 
  icon, 
  title, 
  value, 
  link, 
  description, 
  badge,
  delay = 0 
}: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      {badge && (
        <div className="absolute -top-2 -right-2 z-10">
          <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
            {badge}
          </span>
        </div>
      )}
      
      <div className="relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 h-full">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        {link ? (
          <a
            href={link}
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 break-all block mb-1 text-lg font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 mb-1 text-lg font-medium">{value}</p>
        )}
        
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}