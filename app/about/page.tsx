// app/haqqimizda/page.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Target, 
  Users, 
  Award, 
  Globe, 
  TrendingUp, 
  Zap, 
  Heart, 
  Star, 
  CheckCircle,
  Building,
  Trophy,
  Calendar,
  BarChart3,
  Lightbulb
} from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
// import { metadataAz } from "../metadata.az";

// export const metadata = metadataAz;

export default function AboutPage() {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "1000+", label: "Məzun" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "İşə Düzəlmə" },
    { icon: <Calendar className="w-6 h-6" />, value: "5+", label: "İllik Təcrübə" },
    { icon: <Trophy className="w-6 h-6" />, value: "20+", label: "Sənaye Tərəfdaş" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Missiyamız",
      description: "Azərbaycanda kibertəhlükəsizlik sahəsində peşəkar mütəxəssislər yetişdirmək və sənayenin inkişafına töhfə vermək.",
      color: "purple"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Vizyonumuz",
      description: "Regionda kibertəhlükəsizlik təhsilində aparıcı mərkəz olmaq və innovativ təhsil metodları ilə fərq yaratmaq.",
      color: "pink"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Dəyərlərimiz",
      description: "Şəffaflıq, peşəkarlıq, innovasiya və davamlı inkişaf. Hər tələbənin uğurunu öz uğurumuz kimi qəbul edirik.",
      color: "purple"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Yanaşmamız",
      description: "Teorik biliklə praktik təcrübəni birləşdirərək real dünya ssenariləri əsasında təhsil vermək.",
      color: "pink"
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Əli Məmmədov",
      role: "Qurucu & Baş Mentor",
      experience: "15+ il",
      expertise: ["Penetrasiya Testləri", "Təhdid Kəşfiyyatı"],
      image: "AM"
    },
    {
      name: "Leyla Əliyeva",
      role: "Cloud Security Direktoru",
      experience: "8+ il",
      expertise: ["Cloud Security", "DevSecOps"],
      image: "LA"
    },
    {
      name: "Orxan Hüseynov",
      role: "Penetration Testing Lideri",
      experience: "10+ il",
      expertise: ["Red Team", "Vulnerability Research"],
      image: "OH"
    },
    {
      name: "Aysel Rəhimova",
      role: "SOC & Incident Response Mütəxəssisi",
      experience: "6+ il",
      expertise: ["SOC Operations", "Threat Hunting"],
      image: "AR"
    },
  ];

  const milestones = [
    { year: "2019", title: "Quruluş", description: "TechGuard Academy-nin təməli qoyuldu" },
    { year: "2020", title: "İlk Məzunlar", description: "İlk məzunlarımızı təhsil verdik" },
    { year: "2021", title: "Korporativ Partnyorluq", description: "İlk beynəlxalq sertifikasiya" },
    { year: "2022", title: "Genişlənmə", description: "Yeni tədris laboratoriyaları" },
    { year: "2023", title: "Mükafatlar", description: "İlin Təhsil Mərkəzi mükafatı" },
    { year: "2024", title: "İnovasiya", description: "AI asistanlı tədris sistemi" },
  ];

  const certifications = [
    { name: "ISC²", description: "CISSP, CCSP Sertifikasiya", icon: <Shield /> },
    { name: "EC-Council", description: "CEH, CHFI Sertifikasiya", icon: <Award /> },
    { name: "Offensive Security", description: "OSCP, OSWP Sertifikasiya", icon: <Target /> },
    { name: "CompTIA", description: "Security+, CySA+ Sertifikasiya", icon: <Star /> },
    { name: "Microsoft", description: "Azure Security Sertifikasiya", icon: <Building /> },
    { name: "AWS", description: "Security Specialty Sertifikasiya", icon: <Globe /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-purple-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950/10">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-purple-500/10" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
                <Building className="w-4 h-4" />
                HAQQIMIZDA
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  TechGuard Academy
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Gələcəyi Qururuq
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                2019-cu ildən etibarən Azərbaycanda kibertəhlükəsizlik təhsilində yeni standartlar yaradırıq. 
                Peşəkar mentorlar, müasir tədris metodları və real dünya təcrübəsi ilə sənayenin ehtiyac duyduğu 
                mütəxəssisləri yetişdiririk.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/course/red-team">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300"
                  >
                    Tədris Proqramı
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-purple-500/30 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 font-bold rounded-xl hover:border-purple-500 hover:bg-purple-500/10 dark:hover:bg-purple-500/5 transition-all duration-300"
                  >
                    Əlaqə
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-3xl opacity-10 blur-3xl" />
              <div className="relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-3xl p-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
                      <Shield className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">TechGuard Academy</h3>
                    <p className="text-gray-600 dark:text-gray-300">Kibertəhlükəsizlik Tədris Mərkəzi</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 text-center hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-purple-600 dark:text-purple-400">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Missiyamız & Dəyərlərimiz
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Gələcəyin kibertəhlükəsizlik mütəxəssislərini yetişdirmək üçün hər gün səylə işləyirik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.color === 'purple' ? 'from-purple-600 to-purple-500' : 'from-purple-500 to-purple-600'} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                
                <div className="relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color === 'purple' ? 'from-purple-500/10 to-purple-500/10' : 'from-purple-500/10 to-purple-500/10'} dark:${value.color === 'purple' ? 'from-purple-500/20 to-purple-500/20' : 'from-purple-500/20 to-purple-500/20'} rounded-2xl flex items-center justify-center mb-6 text-${value.color}-600 dark:text-${value.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                BİZİM HEKAYƏMİZ
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Hekayəmiz
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                2019-cu ildə bir qrup kibertəhlükəsizlik peşəkarları tərəfindən qurulan TechGuard Academy, 
                Azərbaycanda bu sahədəki təhsil boşluğunu doldurmaq məqsədi ilə yola çıxdı.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                İlk gündən etibarən innovativ tədris metodları, real dünya ssenariləri və peşəkar mentorluq 
                sistemi ilə fərqləndik. Bugün regionda kibertəhlükəsizlik təhsilində lider mövqedəyik.
              </p>
              
              <div className="space-y-4">
                {[
                  "İnnovativ tədris metodologiyası",
                  "Sənaye tərəfdaşlıqları",
                  "Beynəlxalq sertifikasiyalar",
                  "Davamlı inkişaf proqramları"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500 to-purple-500" />
                
                <div className="space-y-8 pl-12">
                  {milestones.map((milestone, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {milestone.year}
                      </div>
                      
                      <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-xl p-4 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Komandamız
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sənayedə ən yaxşılarından olan təcrübəli peşəkarlar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
                
                <div className="relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                    {member.image}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                    {member.role}
                  </p>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {member.experience} təcrübə
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="text-xs bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/mentorlar">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-purple-500/30 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 font-bold rounded-xl hover:border-purple-500 hover:bg-purple-500/10 dark:hover:bg-purple-500/5 transition-all duration-300"
              >
                Bütün Mentorları Görün
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Sertifikasiyalar
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beynəlxalq tanınan sertifikasiyalarla təhsil veririk
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                    {cert.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-purple-500/10 via-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:via-purple-500/20 dark:to-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Bizimlə
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Karyeranızı Qurun
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Kibertəhlükəsizlik sahəsində uğurlu karyera qurmağa hazırsınız? TechGuard Academy sizə lazım olan 
              bütün bilik və bacarıqları təmin edəcək.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300"
                >
                  İndi Qeydiyyatdan Keç
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 border-2 border-purple-500/30 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 font-bold rounded-xl hover:border-purple-500 hover:bg-purple-500/10 dark:hover:bg-purple-500/5 transition-all duration-300"
                >
                  Bizimlə Əlaqə
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}