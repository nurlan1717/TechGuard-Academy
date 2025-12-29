"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Lock, Target, Users, Award } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950/30">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white dark:via-gray-900/30 dark:to-gray-900" />
      
      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-purple-300/20 dark:text-purple-500/20"
        >
          <Shield size={100} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -12, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-40 right-10 text-purple-300/20 dark:text-purple-500/20"
        >
          <Terminal size={80} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/4 text-purple-300/20 dark:text-purple-500/20"
        >
          <Lock size={90} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-20 left-1/3 text-purple-300/20 dark:text-purple-500/20"
        >
          <Target size={70} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8 shadow-lg"
          >
            <Award className="w-4 h-4" />
            <span>Peşəkar Kibertəhlükəsizlik Tədrisi</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent block">
              TechGuard
            </span>
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent block mt-2">
              Academy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Sıfırdan peşəkar səviyyəyə. Kibertəhlükəsizlik sənətini praktik təlim, real vəziyyətlər və mütəxəssis mentorluğu ilə mənimsəyin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("tedris")}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                <Target className="w-5 h-5" />
                Tədris Proqramına Bax
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("elaqe")}
              className="px-8 py-4 border-2 border-purple-500/30 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 font-semibold rounded-xl hover:border-purple-500 hover:bg-purple-500/10 dark:hover:bg-purple-500/5 transition-all duration-300"
            >
              <span className="flex items-center gap-2 cursor-pointer">
                <Users className="w-5 h-5" />
                Qeydiyyatdan Keç
              </span>
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "1000+", label: "Məzun", icon: Users },
              { value: "98%", label: "Uğur Nisbəti", icon: Award },
              { value: "16 Həftə", label: "Tədris Müddəti", icon: Target },
              { value: "50+", label: "Müəllim", icon: Shield },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400"></span>
            <div className="w-6 h-10 border-2 border-purple-500/30 dark:border-purple-500/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-purple-500 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}