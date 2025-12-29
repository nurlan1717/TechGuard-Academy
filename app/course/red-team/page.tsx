// app/course/red-team/page.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Shield, 
  BookOpen, 
  Zap, 
  Lock, 
  Search, 
  AlertTriangle,
  Code,
  Network,
  Database,
  Activity,
  Cloud,
  BarChart,
  FileText,
  CheckCircle,
  Calendar,
  Clock,
  Award,
  GraduationCap,
  Bug,
  Terminal,
  Globe,
  Key,
  ServerCog
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";

export default function RedTeamCoursePage() {
  const [activeModule, setActiveModule] = useState(1);

  const courseModules = [
    {
      id: 1,
      title: "Red Team Mentality və Attack Workflow",
      description: "Bu modul Red Team düşüncə tərzinin formalaşdığı əsas mərhələdir. Burada məqsəd: tələbəyə “attacker necə düşünür və niyə belə hərəkət edir?” sualının cavabını vermək",
      topics: [
        "Cyber security ekosistemi",
        "Red / Blue / Purple Team fərqləri",
        "Pentest və Red Team yanaşmasının fərqi",
        "Kill Chain və real attack lifecycle",
        "Legal və ethical çərçivə (Rules of Engagement)",
        "Recon → Initial Access → Exploitation → Persistence → Lateral Movement → Impact"
      ],
      duration: "2 həftə",
      level: "Başlanğıc",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Linux Operating System – Red Team Perspective",
      description: "Bu modul Linux-u sadəcə əməliyyat sistemi kimi yox, hücum platforması kimi öyrədir.",
      topics: [
        "Linux filesystem məntiqi",
        "User, group və permission anlayışları",
        "Process və service-lərin işləmə prinsipi",
        "Network komandalarının hücum məqsədli istifadəsi",
        "Log fayllarının strukturu və izlərin idarə edilməsi",
        "Bash scripting ilə sadə automation"
      ],
      duration: "3 həftə",
      level: "Orta",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Server Pentest",
      description: "Bu modul server mühitlərində zəif nöqtələrin tapılmasını öyrədir.",
      topics: [
        "Server arxitekturası (Web / App / DB)",
        "Open ports və çalışan services-in analizi",
        "Version və configuration zəiflikləri",
        "Weak credentials və brute force məntiqi",
        "Privilege Escalation anlayışı (Linux / Windows)",
        "Persistence üçün ilkin yanaşmalar"
      ],
      duration: "3 həftə",
      level: "Orta",
      icon: <ServerCog className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Web Pentest",
      description: "Bu modul web application hücumlarının arxasındakı məntiqi izah edir.",
      topics: [
        "HTTP və HTTPS protokollarının hücumçu baxışı",
        "Authentication və Authorization problemləri",
        "OWASP Top 10 zəiflikləri",
        "XSS, SQLi və Command Injection məntiqi",
        "File upload və deserialization riskləri",
        "API pentest-ə giriş"
      ],
      duration: "4 həftə",
      level: "Qabaqcıl",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Active Directory (AD) Fundamentals",
      description: "Bu modul enterprise mühitlərin əsas hədəfi olan AD-ni izah edir.",
      topics: [
        "AD arxitekturası",
        "Domain, Forest və Trust anlayışları",
        "User, Computer və Group Policy məntiqi",
        "Kerberos və NTLM əsasları",
        "Zəif dizayn edilmiş AD mühitləri"
      ],
      duration: "3 həftə",
      level: "Qabaqcıl",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Active Directory Pentest – Lateral Movement",
      description: "Bu modul Red Team bacarıqlarını real təhlükə səviyyəsinə çıxarır.",
      topics: [
        "Initial access-dən domain foothold-a keçid",
        "Credential harvesting məntiqi",
        "Lateral movement anlayışı",
        "Privilege Escalation yolları",
        "Domain Admin-ə gedən attack chain",
        "Persistence və izlərin təmizlənməsi"
      ],
      duration: "4 həftə",
      level: "Expert",
      icon: <Network className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Network Pentest – Network Attacks",
      description: "Bu modul daxili şəbəkələrdə hücum ssenarilərini izah edir.",
      topics: [
        "Layer 2–3 hücum yanaşması",
        "ARP Spoofing və MITM məntiqi",
        "Internal network reconnaissance",
        "Network segmentation bypass üsulları",
        "Firewall evasion əsasları"
      ],
      duration: "3 həftə",
      level: "Qabaqcıl",
      icon: <Activity className="w-6 h-6" />
    },
    {
      id: 8,
      title: "Exploitation Logic",
      description: "Bu modul exploit anlayışının dərin məntiqini formalaşdırır.",
      topics: [
        "Exploit nədir və nə deyil",
        "Public exploit-lərin riskləri",
        "Exploit chain qurma məntiqi",
        "CVE-lərin real həyatda dəyəri",
        "Manual exploitation yanaşması"
      ],
      duration: "3 həftə",
      level: "Qabaqcıl",
      icon: <Bug className="w-6 h-6" />
    },
    {
      id: 9,
      title: "Post‑Exploitation və Persistence",
      description: "Bu modul sistem ələ keçirildikdən sonra görülən işləri izah edir.",
      topics: [
        "Data access və məlumatın dəyəri",
        "Persistence üsullarının konsepti",
        "Log izlərinin idarə edilməsi",
        "Red Team OPSEC anlayışı",
        "Detection-dan yayınma məntiqi"
      ],
      duration: "3 həftə",
      level: "Expert",
      icon: <Lock className="w-6 h-6" />
    },
    {
      id: 10,
      title: "Red Team vs Blue Team – Detection Awareness",
      description: "Bu modul müdafiə tərəfin necə işlədiyini başa düşməyə kömək edir.",
      topics: [
        "SOC nə görür və nəyi görmür",
        "SIEM və EDR-in Red Team baxışı",
        "Noisy və stealth hücumların fərqi",
        "Detection avoidance strategiyaları"
      ],
      duration: "3 həftə",
      level: "Expert",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 11,
      title: "Reporting və Documentation",
      description: "Bu modul tapılan zəifliklərin düzgün təqdim edilməsini öyrədir.",
      topics: [
        "Texniki tapıntıların sənədləşdirilməsi",
        "Risk səviyyəsinin izahı",
        "Business impact dili",
        "Remediation tövsiyələri",
        "Executive summary hazırlanması"
      ],
      duration: "2 həftə",
      level: "Orta",
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 12,
      title: "Final Red Team Simulation",
      description: "Bu modul bütün biliklərin real ssenari üzərində tətbiqidir.",
      topics: [
        "Real Red Team ssenarisi",
        "End‑to‑end attack chain",
        "Infrastructure, application və AD üzərindən hücumlar",
        "Blue Team detection nöqtələrinin analizi",
        "Red Team əməliyyatının yekun qiymətləndirilməsi",
        "Beynəlxalq sertifikatlara hazırlıq"
      ],
      duration: "3 həftə",
      level: "Expert",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const stats = [
    { icon: <Calendar className="w-6 h-6" />, value: "32 Həftə", label: "Tədris Müddəti" },
    { icon: <BookOpen className="w-6 h-6" />, value: "11 Modul", label: "Hərtərəfli Tədris" },
    { icon: <Award className="w-6 h-6" />, value: "4 Sertifikat", label: "Rəsmi Sənəd" },
    { icon: <Users className="w-6 h-6" />, value: "95%", label: "İşə Düzəlmə" },
  ];

  const toolsTechnologies = [
    { name: "Kali Linux", category: "OS", description: "Penetration testing distribution" },
    { name: "Metasploit", category: "Framework", description: "Exploitation framework" },
    { name: "Burp Suite", category: "Web", description: "Web application testing" },
    { name: "Nmap", category: "Recon", description: "Network discovery and security auditing" },
    { name: "Wireshark", category: "Analysis", description: "Network protocol analyzer" },
    { name: "John the Ripper", category: "Password", description: "Password cracking tool" },
    { name: "Hashcat", category: "Password", description: "Advanced password recovery" },
    { name: "Mimikatz", category: "Windows", description: "Windows credential extraction" },
    { name: "BloodHound", category: "AD", description: "Active Directory analysis" },
    { name: "Cobalt Strike", category: "Red Team", description: "Adversary simulation" },
  ];

  const careerPaths = [
    { title: "Penetration Tester", salary: "2000-3500 AZN", demand: "Çox Yüksək" },
    { title: "Red Team Specialist", salary: "3000-5000 AZN", demand: "Yüksək" },
    { title: "Security Consultant", salary: "3500-6000 AZN", demand: "Yüksək" },
    { title: "Vulnerability Researcher", salary: "4000-7000 AZN", demand: "Orta" },
    { title: "Security Architect", salary: "4500-8000 AZN", demand: "Yüksək" },
  ];

  const activeModuleData = courseModules.find(module => module.id === activeModule) || courseModules[0];

  // Server icon komponenti əlavə edirik
  const Server = (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <circle cx="5" cy="6" r="1" />
      <circle cx="5" cy="18" r="1" />
      <line x1="9" y1="6" x2="21" y2="6" />
      <line x1="9" y1="18" x2="21" y2="18" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-red-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-red-950/10">
      {/* Hero Section */}
      <PageHeader
        title="Red Team Professional"
        subtitle="OFFENSIVE SECURITY"
        description="Real penetration testing, Active Directory exploitation, Web app security və Red Team operations. Hücum tərəfində peşəkar karyera."
        icon={<Target className="w-4 h-4" />}
      />

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <StatCard
                key={idx}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Course Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Kurs Haqqında
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Red Team Professional kursu sizi real dünya penetration testing və adversary simulation 
                  əməliyyatlarına hazırlayır. Kurs boyu Active Directory exploitation, web app security, 
                  network pentesting və advanced persistence techniques kimi əsas hücum texnikalarını 
                  praktiki olaraq öyrənəcəksiniz.
                </p>
                
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 border border-red-500/20 dark:border-red-500/30 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    🎯 Hücumçu Düşüncə Tərzi
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bu kurs sizə yalnız alət işlətməyi deyil, attacker kimi düşünməyi öyrədir. 
                    Hər zəifliyi attack surface kimi görüb exploit chain qurmağı mənimsəyəcəksiniz.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: <Target className="w-5 h-5" />, text: "Real penetration testing" },
                    { icon: <Users className="w-5 h-5" />, text: "CTF yarışmaları" },
                    { icon: <Zap className="w-5 h-5" />, text: "Active Directory lablar" },
                    { icon: <Award className="w-5 h-5" />, text: "OSCP hazırlığı" },
                    { icon: <Bug className="w-5 h-5" />, text: "Zero-day research" },
                    { icon: <Lock className="w-5 h-5" />, text: "OPSEC və stealth" }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-red-600 dark:text-red-400">
                          {feature.icon}
                        </div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Öyrənəcəyiniz Alətlər
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {toolsTechnologies.map((tool, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-red-900/30 rounded-xl p-4 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-900 dark:text-white">{tool.name}</div>
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 text-red-700 dark:text-red-300 rounded">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enrollment Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="sticky top-6"
            >
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-red-900/30 rounded-3xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Red Team Professional
                  </h3>
                  <div className="text-red-600 dark:text-red-400 font-medium">
                    Offensive Security Specialist
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Müddət</span>
                    <span className="font-medium text-gray-900 dark:text-white">32 həftə</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Format</span>
                    <span className="font-medium text-gray-900 dark:text-white">Online/Offline</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Növbəti qrup</span>
                    <span className="font-medium text-gray-900 dark:text-white">20 Fevral</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Yer</span>
                    <span className="font-medium text-gray-900 dark:text-white">10/20</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    3200 AZN
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Hissə-hissə ödəniş imkanı
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-red-600 cursor-pointer to-orange-600 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(239,68,68,0.3)] transition-all duration-300"
                    >
                      Qeydiyyatdan Keç
                    </motion.button>
                  </Link>
                  
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 border-2 border-red-500/30 mt-2 cursor-pointer dark:border-red-500/50 text-red-700 dark:text-red-300 font-bold rounded-xl hover:border-red-500 hover:bg-red-500/10 transition-all duration-300"
                    >
                      Məlumat Üçün Əlaqə
                    </motion.button>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-red-900/30">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    Qeydiyyat 15 Fevraladək
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
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
                Tədris
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Proqramı
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              11 modul, 32 həftə. Hər modul real dünya penetration testing ssenariləri əsasında qurulub.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Module List */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-2">
                {courseModules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeModule === module.id
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-red-500/5 to-orange-500/5 dark:from-red-500/10 dark:to-orange-500/10 text-gray-700 dark:text-gray-300 hover:border-red-500/50'
                    } border border-transparent`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeModule === module.id 
                          ? 'bg-white/20' 
                          : 'bg-gradient-to-r from-red-500/10 to-orange-500/10'
                      }`}>
                        {module.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Modul {module.id}</div>
                        <div className="text-xs opacity-75">{module.duration}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Module Details */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-red-900/30 rounded-3xl p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                        {activeModuleData.level}
                      </div>
                      <div className="px-3 py-1 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                        {activeModuleData.duration}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {activeModuleData.title}
                    </h3>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white opacity-20">
                    {String(activeModule).padStart(2, '0')}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                  {activeModuleData.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Öyrəniləcək Mövzular:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {activeModuleData.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-gradient-to-r from-red-500/5 to-orange-500/5 dark:from-red-500/10 dark:to-orange-500/10 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-red-900/30">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Modul {activeModule} / {courseModules.length}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveModule(Math.max(1, activeModule - 1))}
                      className="px-4 py-2 border border-red-500/30 text-red-700 dark:text-red-300 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300"
                    >
                      Əvvəlki
                    </button>
                    <button
                      onClick={() => setActiveModule(Math.min(courseModules.length, activeModule + 1))}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:shadow-[0_10px_25px_rgba(239,68,68,0.3)] transition-all duration-300"
                    >
                      Növbəti
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
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
                Karyera
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                İmkanları
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Red Team mütəxəssislərinə olan tələbat hər il artır. Aşağıdakı vəzifələrdə karyera qurmaq imkanınız var:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((career, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {career.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      career.demand === 'Çox Yüksək' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : career.demand === 'Yüksək'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {career.demand}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      {career.salary}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      orta aylıq maaş
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {[
                      "Penetration testing",
                      "Vulnerability assessment",
                      "Red Team operations",
                      "Security consulting",
                      "Threat modeling"
                    ].map((skill, skillIdx) => (
                      <li key={skillIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Career Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 border border-red-500/20 dark:border-red-500/30 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🎓 Sertifikasiyalar
                </h3>
                <ul className="space-y-3">
                  {[
                    "TechGuard Red Team Professional",
                    "OSCP (Offensive Security Certified Professional)",
                    "CRTP (Certified Red Team Professional)",
                    "GPEN (GIAC Penetration Tester)",
                    "CEH (Certified Ethical Hacker)"
                  ].map((cert, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  💼 Karyera Dəstəyi
                </h3>
                <ul className="space-y-3">
                  {[
                    "Bug bounty program hazırlığı",
                    "CTF competition training",
                    "Industry networking events",
                    "Resume & portfolio review",
                    "Interview preparation"
                  ].map((support, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      <span className="text-gray-700 dark:text-gray-300">{support}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 dark:from-red-500/20 dark:via-orange-500/20 dark:to-red-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Red Team Mütəxəssisi
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Olmağa Hazırsınız?
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              32 həftəlik intensiv təlimlə real dünya penetration testing bacarıqları qazanın. 
              Növbəti qrupda cəmi 10 yer mövcuddur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 cursor-pointer bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(239,68,68,0.3)] transition-all duration-300"
                >
                  İndi Qeydiyyatdan Keç
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 border-2 cursor-pointer border-red-500/30 dark:border-red-500/50 text-red-700 dark:text-red-300 font-bold rounded-xl hover:border-red-500 hover:bg-red-500/10 transition-all duration-300"
                >
                  Pulsuz Demo Dərs
                </motion.button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              * Demo dərs üçün əvvəlcədən qeydiyyat tələb olunur
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}