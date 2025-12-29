"use client";

import { motion } from "framer-motion";
import { Shield, Users, Target, TrendingUp, GraduationCap, Briefcase, Globe, Award } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Kibertəhlükəsizlik nədir?",
      description: "Kibertəhlükəsizlik sistemləri, şəbəkələri və proqramları rəqəmsal hücumlardan qorumaq təcrübəsidir. Məlumatların tamlığını, gizliliyini və əlçatanlığını qorumaq üçün nəzərdə tutulmuş texnologiyalar, proseslər və təcrübələri əhatə edir.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Bu kurs kimlər üçündür?",
      description: "IT peşəkarı, proqramçı, sistem administratoru və təhlükəsizliyə həvəsi olan hər kəs üçün idealdır. Əvvəlki təcrübə tələb olunmur - əsaslardan başlayaraq qabaqcıl konsepsiyalara qədər irəliləyirik.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Missiyamız",
      description: "Təşkilatları təkamül edən təhlükələrdən qoruya biləcək bacarıqlı kibertəhlükəsizlik mütəxəssisləri yetişdirmək. Real dünya ssenarilərində dərhal tətbiq edə biləcəyiniz praktik bacarıqlara diqqət yetiririk.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Karyera İmkanları",
      description: "Kibertəhlükəsizlik yüksək tələbat və əla maaşlarla ən sürətli böyüyən sahələrdən biridir. Məzunlarımız Təhlükəsizlik Analitiyi, Pentester, SOC Analiti və Təhlükəsizlik Məsləhətçisi kimi çalışırlar.",
    },
  ];

  const stats = [
    { value: "24/7", label: "Dəstək", icon: Globe },
    { value: "100+", label: "Praktik Dərs", icon: GraduationCap },
    { value: "90%", label: "İşə Düzəlmə", icon: Briefcase },
    { value: "10+", label: "Sertifikat", icon: Award },
  ];

  return (
    <section id="haqqimizda" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-purple-500/10" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            HAQQIMIZDA
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              TechGuard Academy
            </span>
            <br />
            <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-normal mt-4 block">
              Gələcəyin Kibertəhlükəsizlik Mütəxəssislərini Yetişdiririk
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Azərbaycanda kibertəhlükəsizlik təhsilində yeni standartlar yaradırıq. Təcrübəli mentorlar, praktik dərslər və real dünya ssenariləri ilə sizə uğurlu karyera qurmağınızda kömək edirik.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-3xl p-8 hover:border-purple-500/30 dark:hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/20 to-purple-600/20 dark:from-purple-600/30 dark:via-purple-500/30 dark:to-purple-600/30" />
          <div className="relative bg-gradient-to-r from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-800/60 backdrop-blur-sm border border-white/50 dark:border-purple-500/30 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Niyə Kibertəhlükəsizlik?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Rəqəmsal dövrdə kiber təhlükələr daim təkamül edir. Təşkilatlar aktivlərini qoruya biləcək, zəiflikləri aşkara çıxara biləcək və hadisələrə cavab verə biləcək bacarıqlı peşəkarlara ehtiyac duyur. Bu kurs sizə etibarlı təhlükəsizlik mütəxəssisi olmaq üçün lazım olan bilik və praktik təcrübəni təmin edir.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}