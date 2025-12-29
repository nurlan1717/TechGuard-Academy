"use client";

import { motion } from "framer-motion";
import { Award, Shield, Users, Briefcase, Globe, Target, Zap, Star } from "lucide-react";

export default function InstructorSection() {
  const achievements = [
    { icon: <Award className="w-5 h-5" />, label: "CISSP, CEH, OSCP Sertifikatlı" },
    { icon: <Briefcase className="w-5 h-5" />, label: "15+ İllik Təcrübə" },
    { icon: <Users className="w-5 h-5" />, label: "1000+ Tələbə Yetişdirmiş" },
    { icon: <Shield className="w-5 h-5" />, label: "Kəçmiş SOC Lideri" },
    { icon: <Globe className="w-5 h-5" />, label: "Beynəlxalq Təcrübə" },
    { icon: <Star className="w-5 h-5" />, label: "İlin Mentoru Mükafatı" },
  ];

  const expertise = [
    "Penetrasiya Testləri",
    "Təhdid Kəşfiyyatı",
    "İncident Cavabı",
    "Təhlükəsizlik Arxitekturası",
    "SOC Əməliyyatları",
    "Zəiflik Qiymətləndirməsi",
    "Bulud Təhlükəsizliyi",
    "Red Team/Blue Team",
  ];

  const stats = [
    { value: "98%", label: "Tələbə Məmnuniyyəti" },
    { value: "50+", label: "Sənaye Layihəsi" },
    { value: "20+", label: "Mükafat" },
    { value: "5000+", label: "Tədris Saatı" },
  ];

  return (
    <section id="mentorlar" className="py-20 lg:py-28 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/20 relative overflow-hidden">
      {/* Background effects */}
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
            <Users className="w-4 h-4" />
            MENTORLAR
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Sənaye
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Ekspertlərimizlə Tanış Olun
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real dünya təcrübəsi olan peşəkar mentorlardan öyrənin. Hər dərs real həyat ssenariləri ilə zəngindir.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-3xl opacity-20 blur-xl" />
            
            <div className="relative bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Profile Image Section */}
                <div className="lg:col-span-2 bg-gradient-to-br from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 p-8 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent" />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-48 h-48 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl"
                    >
                      AZ
                    </motion.div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
                    
                    {/* Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      BAŞ MENTOR
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="lg:col-span-3 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Aysu Zulfigarlı
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Baş Kibertəhlükəsizlik Eksperti & Mentor
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    15 ildən çox praktik kibertəhlükəsizlik təcrübəsi olan Aysu Zulfigarlı Fortune 500 şirkətləri, dövlət qurumları və beynəlxalq təşkilatlarla işləyib. Penetrasiya testləri, təhdid kəşfiyyatı və təhlükəsizlik əməliyyatları ixtisasına malikdir, hər dərsə real dünya ekspertizasını gətirir.
                  </p>

                  {/* Achievements */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-lg p-3"
                      >
                        <div className="text-purple-600 dark:text-purple-400 flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {achievement.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Expertise tags */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      İxtisas Sahələri:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full border border-purple-500/20 dark:border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom quote section */}
              <div className="border-t border-gray-200 dark:border-purple-900/30 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 px-8 py-6">
                <div className="flex items-start gap-4">
                  <div className="text-purple-600 dark:text-purple-400 text-4xl leading-none">"</div>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      Məqsədim sadəcə nəzəriyyə öyrətmək deyil, sizi real dünya çağırışlarına hazırlamaqdır. Hər dərs karyeranızda qarşılaşacağınız praktik ssenarilər ətrafında qurulub. Hər tələbənin uğur qazanmasına kömək etməyə sadiqəm.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex items-center gap-2">
                      <span className="text-purple-600 dark:text-purple-400">— Aysu Zulfigarlı</span>
                      <span className="text-gray-500">• 15+ İllik Təcrübə</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 rounded-2xl">
              <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                ISC², EC-Council və Offensive Security tərəfindən sertifikatlı
              </span>
              <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
          </motion.div>

          {/* Other Instructors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              { name: "Leyla Əliyeva", role: "Cloud Security Expert", experience: "8+ il", color: "purple" },
              { name: "Orxan Hüseynov", role: "Penetration Tester", experience: "10+ il", color: "pink" },
              { name: "Aysel Rəhimova", role: "SOC Specialist", experience: "6+ il", color: "purple" },
            ].map((instructor, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200 dark:border-purple-900/30 rounded-xl p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${instructor.color === 'purple' ? 'from-purple-600 to-purple-500' : 'from-purple-500 to-purple-600'} text-white text-2xl font-bold flex items-center justify-center`}>
                  {instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="font-bold text-gray-900 dark:text-white">{instructor.name}</div>
                <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">{instructor.role}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{instructor.experience} təcrübə</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}