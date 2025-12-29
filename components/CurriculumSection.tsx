"use client";

import { motion } from "framer-motion";
import { BookOpen, Network, Terminal, Lock, Globe, Shield, Database, Cloud, Cpu, Key, Code2, Bug } from "lucide-react";

export default function CurriculumSection() {
  const modules = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Kibertəhlükəsizlik Əsasları",
      description: "Kibertəhlükəsizlik prinsipləri, CIA üçlüyü, təhlükə landşaftı və təhlükəsizlik çərçivələrinə giriş.",
      duration: "1-2 Həftə",
      topics: ["Təhlükəsizlik anlayışları", "Təhlükə aktorları", "Təhlükəsizlik çərçivələri", "Risk idarəetməsi"],
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Şəbəkə Təhlükəsizliyi",
      description: "Şəbəkə protokolları, TCP/IP, marşrutlaşdırma, kommutasiya və şəbəkə təhlükəsizliyi əsasları.",
      duration: "3-4 Həftə",
      topics: ["OSI Modeli", "TCP/IP Protokol Paketi", "Şəbəkə cihazları", "Paket analizi"],
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Linux & Əmrlər Sətiri",
      description: "Linux əmrlər sətirini mənimsəyin, skriptləşdirmə, sistem administrasiyası və təhlükəsizliyin möhkəmləndirilməsi.",
      duration: "5-6 Həftə",
      topics: ["Əmrlər sətiri əsasları", "Bash skriptləşdirmə", "İstifadəçi idarəetməsi", "Təhlükəsizlik konfiqurasiyası"],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Ethical Hacking",
      description: "Penetrasiya testləri metodologiyası, kəşfiyyat, zəiflik qiymətləndirməsi və istismar texnikaları.",
      duration: "7-8 Həftə",
      topics: ["Penetrasiya test mərhələləri", "Kəşfiyyat texnikaları", "Skanner alətləri", "İstismar əsasları"],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Veb Təhlükəsizliyi",
      description: "Veb proqram təminatı zəiflikləri, ümumi hücumlar və müdafiə mexanizmlərinə dərin nəzər.",
      duration: "9-10 Həftə",
      topics: ["SQL Injection", "XSS hücumları", "CSRF", "Autentifikasiya səhvləri", "OWASP Top 10"],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "SOC & Incident Response",
      description: "Təhlükəsizlik əməliyyatları, monitorinq, incident cavabı, təhlükə aşkarlanması və müdafiə strategiyaları.",
      duration: "11-12 Həftə",
      topics: ["SIEM alətləri", "Log analizi", "İncident cavabı", "Təhlükə kəşfiyyatı", "Təhdid intellekti"],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Security",
      description: "Bulud mühitində təhlükəsizlik, IAM, məlumat qorunması, şəbəkə təhlükəsizliyi və compliance.",
      duration: "13-14 Həftə",
      topics: ["AWS Security", "Azure Security", "Container Security", "Cloud Compliance", "DevSecOps"],
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IoT & Mobil Təhlükəsizlik",
      description: "Nə şeylər interneti və mobil qurğuların təhlükəsizliyi, əməliyyat sistemləri təhlükəsizliyi.",
      duration: "15-16 Həftə",
      topics: ["IoT təhlükəsizliyi", "Android/iOS Security", "Firmware analizi", "Radio Protocol Security"],
    },
  ];

  return (
    <section id="tedris" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            TƏDRİS PROQRAMI
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              16 Həftəlik
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Hərtərəfli Tədris
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kibertəhlükəsizliyin bütün əsas sahələrini əhatə edən tam proqram. Teorik biliklərlə praktik bacarıqları birləşdiririk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
              
              <div className="relative bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon and duration */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {module.icon}
                  </div>
                  <span className="text-xs font-medium bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full border border-purple-500/20 dark:border-purple-500/30">
                    {module.duration}
                  </span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
                  {module.description}
                </p>

                {/* Topics */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    Əsas Mövzular:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.slice(0, 4).map((topic, topicIdx) => (
                      <span
                        key={topicIdx}
                        className="text-xs bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-purple-500/10 dark:border-purple-500/20"
                      >
                        {topic}
                      </span>
                    ))}
                    {module.topics.length > 4 && (
                      <span className="text-xs bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-md">
                        +{module.topics.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 rounded-2xl">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Canlı dərslər, praktik laboratoriyalar və real dünya layihələri daxildir
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full animate-pulse" />
          </div>
        </motion.div>

        {/* Course Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Code2 className="w-6 h-6" />,
              title: "200+ Saat",
              description: "Praktik Dərs"
            },
            {
              icon: <Bug className="w-6 h-6" />,
              title: "50+ Lab",
              description: "Real Ssenari"
            },
            {
              icon: <Key className="w-6 h-6" />,
              title: "10 Sertifikat",
              description: "Rəsmi Sənəd"
            }
          ].map((highlight, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200 dark:border-purple-900/30 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-purple-600 dark:text-purple-400">
                  {highlight.icon}
                </div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                {highlight.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {highlight.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}