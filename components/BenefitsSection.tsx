"use client";

import { motion } from "framer-motion";
import { Code, FileText, Award, Users, Briefcase, Clock, Globe, Zap } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Praktik Təcrübə",
      description: "Real alətlər və ssenarilərlə məşq edin. İnteraktiv tapşırıqlar və çağırışlar vasitəsilə praktik bacarıqlar qazanın.",
      features: [
        "Virtual lab 24/7",
        "Real hücum simulyasiyaları",
        "Capture the Flag yarışları",
        "Rəhbərli praktik dərslər"
      ],
      color: "purple",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Real Vəziyyətlər",
      description: "Faktiki təhlükəsizlik hadisələrindən və pozuntularından öyrənin. Hücumların necə baş verdiyini və onların necə qarşısının alınacağını başa düşün.",
      features: [
        "Böyük pozuntuların analizi",
        "Təhlükəsizlik hadisəsi hesabatları",
        "Sənaye best practices",
        "Post-mortem müzakirələr"
      ],
      color: "purple",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Sertifikat",
      description: "Uğurlu başa vurduqdan sonra sənayedə tanınan sertifikat əldə edin. Bacarıqlarınızı təsdiqləyin və peşəkar profilinizi inkişaf etdirin.",
      features: [
        "Rəsmi sertifikat",
        "LinkedIn üçün digital badge",
        "Bacarıq təsdiqi",
        "Portfolio layihələri"
      ],
      color: "purple",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentor Dəstəyi",
      description: "Təcrübəli kibertəhlükəsizlik peşəkarlarından rəhbərlik əldə edin. Suallarınız, karyera məsləhətləri və texniki dəstək üçün mentora birbaşa giriş.",
      features: [
        "Həftəlik ofis saatları",
        "1-ə-1 mentorluq sessiyaları",
        "Kommunitas forumu",
        "Karyera yol xəritəsi"
      ],
      color: "purple",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Karyera Dəstəyi",
      description: "Karyera planlaşdırılması, CV hazırlanması və müsahibə hazırlığında kömək. Sənaye tərəfdaşlarımızla əlaqələr.",
      features: [
        "CV optimallaşdırılması",
        "Müsahibə hazırlığı",
        "İşə düzəlmə köməyi",
        "Sənaye əlaqələri"
      ],
      color: "purple",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Davamlı Təhsil",
      description: "Kurs başa vurduqdan sonra da davamlı təhsil imkanları. Yeni materiallar, workshoplar və qrup dəstəyi.",
      features: [
        "Materiallara ömürlük giriş",
        "Həftəlik workshoplar",
        "Alumni şəbəkəsi",
        "Yeniləmə dərsləri"
      ],
      color: "purple",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-purple-500/10" />
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
            <Globe className="w-4 h-4" />
            ÜSTÜNLÜKLƏR
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              TechGuard Academy
            </span>
            <br />
            <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-normal mt-4 block">
              Kibertəhlükəsizlik Karyeranızda Uğur Üçün Hər Şey
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.color === 'purple' ? 'from-purple-600 to-purple-500' : 'from-purple-500 to-purple-600'} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
              
              <div className="relative bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-8 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color === 'purple' ? 'from-purple-500/10 to-purple-500/10' : 'from-purple-500/10 to-purple-500/10'} dark:${benefit.color === 'purple' ? 'from-purple-500/20 to-purple-500/20' : 'from-purple-500/20 to-purple-500/20'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`${benefit.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : 'text-purple-600 dark:text-purple-400'}`}>
                    {benefit.icon}
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                  {benefit.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${benefit.color === 'purple' ? 'bg-purple-500' : 'bg-purple-500'} mt-2 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative bg-gradient-to-r from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-800/60 backdrop-blur-sm border border-white/50 dark:border-purple-500/30 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-purple-500/5 to-purple-500/5" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Karyeranızı Dəyişməyə Hazırsınız?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Yüzlərlə məzunumuzun karyerasını dəyişdiyimiz hərtərəfli kibertəhlükəsizlik təliminə qoşulun.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById("elaqe");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
                className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300 inline-flex items-center gap-2"
              >
                <Award className="w-5 h-5" />
                İndi Qeydiyyatdan Keç
              </motion.button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Növbəti qrupda məhdud sayda yer mövcuddur
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}