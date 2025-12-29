// app/course/blue-team/page.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Users, 
  Target, 
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
  GraduationCap
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";

export default function BlueTeamCoursePage() {
  const [activeModule, setActiveModule] = useState(1);

  const courseModules = [
    {
      id: 1,
      title: "Blue Team Mentality və SOC Workflow",
      description: "Bu modul Blue Team düşüncə tərzini formalaşdırır və SOC-un gündəlik iş modelini izah edir. Burada məqsəd: tələbəyə “SOC necə düşünür?” sualının cavabını vermək.",
      topics: [
        "Blue Team-in əsas vəzifələri və məsuliyyəti",
        "SOC-un daxili strukturu və iş axını",
        "Red / Blue / Purple Team arasında əlaqə",
        "Prevent → Detect → Respond → Recover yanaşması",
        "Alert-dən başlayıb report-la bitən SOC prosesi"
      ],
      duration: "2 həftə",
      level: "Başlanğıc",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Network (Layer 2–3) – SOC üçün Əsas Təhlükə Səthi",
      description: "Bu modul bütün təhlükələrin haradan yarandığını anlamaq üçün təməl yaradır. Qeyd: Şəbəkəni bilməyən SOC analyst təhlükəni vaxtında görə bilməz.",
      topics: [
        "OSI və TCP/IP modellərinin Layer 2 və Layer 3 hissəsi",
        "MAC, ARP və switch-lərin işləmə məntiqi",
        "VLAN, Trunk və STP ilə bağlı risklər",
        "ARP Spoofing və VLAN Hopping-in SOC tərəfindən görünməsi",
        "IP, Subnetting və Routing əsasları",
        "Layer 2/3 firewall-ların SOC baxımından rolu"
      ],
      duration: "3 həftə",
      level: "Orta",
      icon: <Network className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Systems və Endpoint Behavior",
      description: "Bu modul şəbəkədə görünən activity-nin sistem daxilində nə baş verdiyini izah edir.",
      topics: [
        "Windows və Linux sistemlərinin davranışı",
        "Process, service və user activity anlayışları",
        "Normal və şübhəli davranışın fərqləndirilməsi",
        "Endpoint üzərindən çıxan network traffic-in analizi"
      ],
      duration: "2 həftə",
      level: "Orta",
      icon: <Activity className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Logging və Monitoring",
      description: "Bu modul bütün təhlükəsizlik məlumatlarının necə toplandığını və oxunduğunu öyrədir. Log = sübut = qərar.",
      topics: [
        "Log anlayışı və SOC üçün əhəmiyyəti",
        "Windows Event Logs və əsas Event ID-lər",
        "Linux log fayllarının strukturu",
        "Firewall, IDS/IPS və EDR loglarının oxunması",
        "Müxtəlif log-lar arasında əlaqə qurmaq"
      ],
      duration: "3 həftə",
      level: "Qabaqcıl",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 5,
      title: "SIEM – SOC-un Mərkəzi Beyni",
      description: "Bu modul SOC-un əsas idarəetmə platformasını izah edir.",
      topics: [
        "SIEM-in SOC-da hansı rolu oynadığı",
        "Splunk, QRadar, Wazuh, ELK haqqında ümumi anlayış",
        "Log-ların yığılması, emalı və alert yaranması",
        "Incident detection və ilkin analiz",
        "False Positive-lərin azaldılması",
        "MITRE ATT&CK ilə əlaqələndirmə"
      ],
      duration: "4 həftə",
      level: "Qabaqcıl",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Endpoint Security (AV → EDR → XDR)",
      description: "Bu modul endpoint-lərdə baş verən təhlükələrin necə aşkar edildiyini izah edir.",
      topics: [
        "Antivirus-dan EDR və XDR-ə keçid səbəbləri",
        "Davranışa əsaslanan aşkarlama",
        "EDR/XDR sistemlərinin ümumi arxitekturası",
        "Endpoint məlumatlarının SIEM ilə əlaqəsi"
      ],
      duration: "2 həftə",
      level: "Orta",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Network Security Technologies – Detection Perspective",
      description: "Bu modul təhlükəsizlik alətlərinin SOC tərəfindən necə görüldüyünü göstərir.",
      topics: [
        "Firewall, IDS/IPS və WAF-in əsas məntiqi",
        "Layer 2–3 hücumların bu alətlərdə görünməsi",
        "Alert-lərin SIEM-ə ötürülmə prosesi"
      ],
      duration: "2 həftə",
      level: "Orta",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      id: 8,
      title: "Threat Intelligence",
      description: "Bu modul alert-ə kontekst əlavə edərək real risk dəyərini müəyyənləşdirir.",
      topics: [
        "Cyber Threat Intelligence anlayışı",
        "IOC və IOA-ların istifadəsi",
        "Threat Actor yanaşması",
        "MISP və OpenCTI-nin SOC-da tətbiqi",
        "Fraud və XTI anlayışlarına giriş"
      ],
      duration: "2 həftə",
      level: "Qabaqcıl",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 9,
      title: "Advanced Threat Analysis (SOC Practice)",
      description: "Bu modul real dünyada ən çox rast gəlinən hadisələr üzərində praktika yaradır.",
      topics: [
        "Phishing email-lərin analizi",
        "Malware davranışının sandbox üzərində yoxlanması",
        "Honeypot-ların SOC üçün faydası",
        "Web3, Blockchain və crypto risklərinə baxış",
        "Kriptoqrafiyanın SOC üçün praktik istifadəsi"
      ],
      duration: "3 həftə",
      level: "Qabaqcıl",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 10,
      title: "SOAR və Automated Response",
      description: "Bu modul SOC proseslərinin avtomatlaşdırılmasını izah edir.",
      topics: [
        "SOAR nədir və niyə istifadə olunur",
        "SIEM və SOAR inteqrasiyası",
        "Shuffle və Suricata üzərindən nümunələr",
        "Incident Response playbook-lar"
      ],
      duration: "2 həftə",
      level: "Qabaqcıl",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 11,
      title: "Incident Response",
      description: "Bu modul real hadisə zamanı atılmalı addımları öyrədir.",
      topics: [
        "Incident Response mərhələləri",
        "Sübutların qorunması",
        "Containment və recovery qərarları",
        "Texniki və idarəetmə üçün hesabatlar"
      ],
      duration: "3 həftə",
      level: "Expert",
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 12,
      title: "Final SOC Simulation və Certification Preparation",
      description: "Bu modul bütün biliklərin real ssenari üzərində tətbiqidir.",
      topics: [
        "Real SOC ssenarisi",
        "Alert-dən report-a qədər tam proses",
        "Build → Protect → Detect → Respond yanaşması",
        "Beynəlxalq sertifikatlara hazırlıq"
      ],
      duration: "4 həftə",
      level: "Expert",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const stats = [
    { icon: <Calendar className="w-6 h-6" />, value: "28 Həftə", label: "Tədris Müddəti" },
    { icon: <BookOpen className="w-6 h-6" />, value: "12 Modul", label: "Hərtərəfli Tədris" },
    { icon: <Award className="w-6 h-6" />, value: "3 Sertifikat", label: "Rəsmi Sənəd" },
    { icon: <Users className="w-6 h-6" />, value: "100%", label: "İşə Düzəlmə" },
  ];

  const toolsTechnologies = [
    { name: "Splunk", category: "SIEM", description: "Real-time monitoring və log management" },
    { name: "QRadar", category: "SIEM", description: "IBM security intelligence platform" },
    { name: "ELK Stack", category: "SIEM", description: "Open-source log analytics" },
    { name: "Wazuh", category: "SIEM", description: "Open-source security monitoring" },
    { name: "Cortex XDR", category: "EDR/XDR", description: "Endpoint detection and response" },
    { name: "CrowdStrike", category: "EDR", description: "Next-gen antivirus platform" },
    { name: "FireEye", category: "Threat Intel", description: "Advanced threat detection" },
    { name: "MISP", category: "Threat Intel", description: "Open-source threat sharing" },
    { name: "Shuffle", category: "SOAR", description: "Security orchestration platform" },
    { name: "Suricata", category: "IDS/IPS", description: "Network threat detection" },
  ];

  const careerPaths = [
    { title: "Security Analyst", salary: "1500-2500 AZN", demand: "Yüksək" },
    { title: "SOC Analyst", salary: "2000-3500 AZN", demand: "Çox Yüksək" },
    { title: "Incident Responder", salary: "2500-4000 AZN", demand: "Yüksək" },
    { title: "Threat Hunter", salary: "3000-5000 AZN", demand: "Orta" },
    { title: "Security Engineer", salary: "3500-6000 AZN", demand: "Yüksək" },
  ];

  const activeModuleData = courseModules.find(module => module.id === activeModule) || courseModules[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950/10">
      {/* Hero Section */}
      <PageHeader
        title="Blue Team Professional"
        subtitle="SOC & DEFENSE"
        description="Real SOC təcrübəsi, SIEM/EDR analizi, Incident Response və Threat Hunting. Müdafiə tərəfində peşəkar karyera."
        icon={<Shield className="w-4 h-4" />}
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
                  Blue Team Professional kursu sizi Security Operations Center (SOC) mühitində işləməyə hazırlayır. 
                  Kurs boyu SIEM sistemləri, EDR/XDR platformaları, log analizi, incident response və threat hunting 
                  kimi əsas müdafiə texnologiyalarını praktiki olaraq öyrənəcəksiniz.
                </p>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    🎯 Yekun Nəticə
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bu sillabusdan keçən şəxs: System-i anlayır, Alert-i oxuyur, Hadisəni düzgün analiz edir, 
                    Panikasız qərar verir, Evidence ilə danışır.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: <Shield className="w-5 h-5" />, text: "Real SOC simulyasiyaları" },
                    { icon: <Users className="w-5 h-5" />, text: "Mentor dəstəyi 24/7" },
                    { icon: <Zap className="w-5 h-5" />, text: "Praktik laboratoriyalar" },
                    { icon: <Award className="w-5 h-5" />, text: "Beynəlxalq sertifikasiya" },
                    { icon: <Target className="w-5 h-5" />, text: "Karyera dəstəyi" },
                    { icon: <Cloud className="w-5 h-5" />, text: "Virtual lab 24/7" }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-blue-600 dark:text-blue-400">
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
                      className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-blue-900/30 rounded-xl p-4 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-900 dark:text-white">{tool.name}</div>
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-700 dark:text-blue-300 rounded">
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
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-blue-900/30 rounded-3xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Blue Team Professional
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    SOC & Defense Specialist
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Müddət</span>
                    <span className="font-medium text-gray-900 dark:text-white">28 həftə</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Format</span>
                    <span className="font-medium text-gray-900 dark:text-white">Online/Offline</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Növbəti qrup</span>
                    <span className="font-medium text-gray-900 dark:text-white">15 Fevral</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Yer</span>
                    <span className="font-medium text-gray-900 dark:text-white">15/25</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    2800 AZN
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
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all duration-300"
                    >
                      Qeydiyyatdan Keç
                    </motion.button>
                  </Link>
                  
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 border-2 border-blue-500/30 dark:border-blue-500/50 text-blue-700 mt-2 dark:text-blue-300 font-bold rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                    >
                      Məlumat Üçün Əlaqə
                    </motion.button>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-blue-900/30">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    Qeydiyyat 10 Fevraladək
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
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Proqramı
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              12 modul, 28 həftə. Hər modul real SOC mühitində tətbiq olunan praktiki biliklər əsasında qurulub.
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
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 text-gray-700 dark:text-gray-300 hover:border-blue-500/50'
                    } border border-transparent`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeModule === module.id 
                          ? 'bg-white/20' 
                          : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
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
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-blue-900/30 rounded-3xl p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {activeModuleData.level}
                      </div>
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
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
                        className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-blue-900/30">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Modul {activeModule} / {courseModules.length}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveModule(Math.max(1, activeModule - 1))}
                      className="px-4 py-2 border border-blue-500/30 text-blue-700 dark:text-blue-300 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                    >
                      Əvvəlki
                    </button>
                    <button
                      onClick={() => setActiveModule(Math.min(courseModules.length, activeModule + 1))}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-[0_10px_25px_rgba(37,99,235,0.3)] transition-all duration-300"
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
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                İmkanları
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Blue Team mütəxəssislərinə olan tələbat hər il artır. Aşağıdakı vəzifələrdə karyera qurmaq imkanınız var:
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
                <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-blue-900/30 rounded-2xl p-6 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {career.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      career.demand === 'Çox Yüksək' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : career.demand === 'Yüksək'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {career.demand}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {career.salary}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      orta aylıq maaş
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {[
                      "SIEM/EDR monitoring",
                      "Incident investigation",
                      "Threat analysis",
                      "Security reporting",
                      "Team collaboration"
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
            className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🎓 Sertifikasiyalar
                </h3>
                <ul className="space-y-3">
                  {[
                    "TechGuard Blue Team Professional",
                    "CompTIA Security+",
                    "EC-Council Certified SOC Analyst",
                    "GIAC Certified Incident Handler",
                    "Splunk Certified Admin"
                  ].map((cert, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
                    "CV hazırlama workshopu",
                    "Müsahibə təcrübəsi",
                    "Şirkət görüşləri",
                    "Mentor dəstəyi",
                    "Alumni şəbəkəsi"
                  ].map((support, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
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
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-blue-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                SOC Mütəxəssisi
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Olmağa Hazırsınız?
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              28 həftəlik intensiv təlimlə real SOC mühitində işləmək bacarıqları qazanın. 
              Növbəti qrupda məhdud sayda yer mövcuddur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all duration-300"
                >
                  İndi Qeydiyyatdan Keç
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 border-2 border-blue-500/30 dark:border-blue-500/50 text-blue-700 dark:text-blue-300 font-bold rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                >
                  Pulsuz Konsultasiya
                </motion.button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              * 24 saat ərzində sizinlə əlaqə saxlayacağıq
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}