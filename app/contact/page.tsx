// app/elaqe/page.tsx
"use client";

import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar, 
  Shield, 
  Zap, 
  Users, 
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
// import { metadataAz } from "../metadata.az";

// export const metadata = metadataAz;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeTab, setActiveTab] = useState<"general" | "admission" | "corporate">("general");

  const contactInfo = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email",
      value: "info@techguard.az",
      link: "mailto:info@techguard.az",
      description: "24 saat ərzində cavab alacaqsınız",
      badge: "Təcili"
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Telefon",
      value: "+994 12 345 67 89",
      link: "tel:+994123456789",
      description: "Həftə içi 09:00-18:00",
      badge: "Birbaşa"
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Ünvan",
      value: "Bakı, Azərbaycan",
      link: "https://maps.google.com/?q=Baku+Azerbaijan",
      description: "Nizami küç. 203B, Mərkəzi Ofis",
      badge: "Ziyarət"
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "İş Saatları",
      value: "09:00 - 18:00",
      link: null,
      description: "Həftə içi, bazar ertəsi - cümə",
      badge: "Müntəzəm"
    },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", link: "https://linkedin.com/company/techguard", followers: "5K+" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", link: "https://facebook.com/techguard", followers: "3K+" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", link: "https://instagram.com/techguard", followers: "8K+" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", link: "https://twitter.com/techguard", followers: "2K+" },
    { icon: <MessageSquare className="w-5 h-5" />, name: "Telegram", link: "https://t.me/techguard", followers: "1K+" },
  ];

  const contactTabs = [
    { id: "general", label: "Ümumi Sorğu", icon: <MessageSquare className="w-4 h-4" /> },
    { id: "admission", label: "Qəbul Prosesi", icon: <Users className="w-4 h-4" /> },
    { id: "corporate", label: "Korporativ", icon: <Shield className="w-4 h-4" /> },
  ];

  const faqs = [
    {
      question: "Cavab müddəti nə qədərdir?",
      answer: "İş saatları ərzində 1 saat, həftə sonları və bayram günlərində 24 saat ərzində cavab veririk."
    },
    {
      question: "Ofisə gəlməliyəm?",
      answer: "Xeyr, bütün görüşləri online həyata keçirə bilərik. Həmçinin, telefon və email vasitəsilə də əlaqə qura bilərsiniz."
    },
    {
      question: "Hansı dillərdə dəstək verirsiniz?",
      answer: "Azərbaycan, İngilis və Rus dillərində dəstək veririk. Bütün dərs materialları Azərbaycan dilindədir."
    },
    {
      question: "Təcili suallarım var?",
      answer: "Telefon nömrəmizdən birbaşa zəng edə və ya Telegram kanalımızdan mesaj yazaraq dərhal cavab ala bilərsiniz."
    }
  ];

  const departments = [
    {
      name: "Qəbul Departamenti",
      email: "qebul@techguard.az",
      phone: "+994 12 345 67 90",
      hours: "09:00-19:00",
      description: "Tədris proqramları, qəbul şərtləri"
    },
    {
      name: "Texniki Dəstək",
      email: "destek@techguard.az",
      phone: "+994 12 345 67 91",
      hours: "24/7",
      description: "Laboratoriya, platforma problemləri"
    },
    {
      name: "Karyera Mərkəzi",
      email: "karyera@techguard.az",
      phone: "+994 12 345 67 92",
      hours: "10:00-18:00",
      description: "İşə düzəlmə, praktika, mentorluq"
    },
    {
      name: "Korporativ Əlaqələr",
      email: "korporativ@techguard.az",
      phone: "+994 12 345 67 93",
      hours: "09:00-17:00",
      description: "Şirkət təlimləri, tərəfdaşlıq"
    }
  ];

  const stats = [
    { icon: <MessageSquare className="w-6 h-6" />, value: "98%", label: "Müsbət Rəy" },
    { icon: <Clock className="w-6 h-6" />, value: "<1h", label: "Orta Cavab Müddəti" },
    { icon: <Users className="w-6 h-6" />, value: "24/7", label: "Dəstək" },
    { icon: <Globe className="w-6 h-6" />, value: "3", label: "Dil Dəstəyi" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Random success/failure for demo
      const isSuccess = Math.random() > 0.2;
      
      if (isSuccess) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          interest: "general"
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-purple-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950/10">
      {/* Hero Section */}
      <PageHeader
        title="Əlaqə"
        subtitle="ƏLAQƏ"
        description="TechGuard Academy ilə əlaqə qurmaq üçün bütün kanallar. Sualınızı verin, sizinlə əlaqə saxlayacağıq."
        icon={<MessageSquare className="w-4 h-4" />}
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

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative">
                      {/* Hover glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
                      
                      <div className="relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                        {/* Badge */}
                        <div className="absolute -top-2 -right-2">
                          <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-bold rounded-full">
                            {info.badge}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {info.title}
                        </h3>

                        {/* Value */}
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 break-all block mb-1 text-lg font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300 mb-1 text-lg font-medium">{info.value}</p>
                        )}
                        
                        {/* Description */}
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Departments */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  Departamentlər
                </h3>
                
                <div className="space-y-4">
                  {departments.map((dept, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl p-4 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{dept.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{dept.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-3 h-3 text-gray-500" />
                            {dept.hours}
                          </div>
                          <a
                            href={`mailto:${dept.email}`}
                            className="text-purple-600 dark:text-purple-400 hover:underline text-sm"
                          >
                            {dept.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  Sosial Şəbəkələr
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.link}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl p-4 text-center hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                        <div className="text-purple-600 dark:text-purple-400 mb-2">
                          {social.icon}
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{social.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{social.followers} izləyici</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-6">
                <div className="relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-3xl p-8 shadow-xl">
                  {/* Tabs */}
                  <div className="flex gap-2 mb-8">
                    {contactTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex-1 px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white'
                            : 'bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 text-gray-700 dark:text-gray-300 hover:border-purple-500/50'
                        } border border-transparent`}
                      >
                        {tab.icon}
                        <span className="text-sm font-medium">{tab.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div>
                          <div className="font-medium text-green-700 dark:text-green-300">
                            Mesajınız uğurla göndərildi!
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                            24 saat ərzində sizinlə əlaqə saxlayacağıq.
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        <div>
                          <div className="font-medium text-red-700 dark:text-red-300">
                            Göndərilmə zamanı xəta baş verdi
                          </div>
                          <div className="text-sm text-red-600 dark:text-red-400 mt-1">
                            Zəhmət olmasa yenidən cəhd edin və ya birbaşa email göndərin.
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Adınız *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ad və soyad"
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+994 __ ___ __ __"
                          className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Mövzu *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Sualınızın mövzusu"
                          required
                          className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Mesaj *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Sual və ya təklifləriniz..."
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Göndərilir...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Mesaj Göndər
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      Göndər düyməsinə klikləməklə siz 
                      <a href="/mexfilik" className="text-purple-600 dark:text-purple-400 hover:underline mx-1">
                        Məxfilik Siyasətimiz
                      </a>
                      ilə razılaşırsınız.
                    </p>
                  </form>
                </div>

                {/* Quick Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6 text-center"
                >
                  <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 rounded-2xl p-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Təcili sualınız var?</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <a
                        href="tel:+994123456789"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-[0_10px_25px_rgba(147,51,234,0.3)] transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 inline mr-2" />
                        Birbaşa Zəng
                      </a>
                      <a
                        href="https://calendly.com/techguard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                      >
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Görüş Təyin Et
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Tez-tez Verilən Suallar
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Əlaqə prosesi ilə bağlı ən çox verilən suallar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Bizi Ziyarət Edin
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mərkəzi ofisimizə gəlmək istəsəniz
            </p>
          </motion.div>

          <div className="relative rounded-3xl overflow-hidden border border-gray-200/50 dark:border-purple-900/30 shadow-2xl">
            {/* Map Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-4 opacity-60" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Bakı, Azərbaycan</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Nizami küç. 203B, Mərkəzi Ofis</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Metro</div>
                    <div className="font-medium text-gray-900 dark:text-white">28 May</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">5 dəqiqə piyada</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Avtobus</div>
                    <div className="font-medium text-gray-900 dark:text-white">5, 88, 125</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Dayanacaq qarşıda</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Parking</div>
                    <div className="font-medium text-gray-900 dark:text-white">Mövcuddur</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Pulsuz</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Overlay Info */}
            <div className="absolute bottom-6 right-6">
              <a
                href="https://maps.google.com/?q=Baku+Azerbaijan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium rounded-lg hover:shadow-[0_10px_25px_rgba(147,51,234,0.3)] transition-all duration-300 inline-flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                Google Maps-də Aç
              </a>
            </div>
          </div>

          {/* Transportation Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Metro ilə",
                description: "28 May metrostansiyasından çıxıb sağa dönün. 5 dəqiqə piyada məsafə.",
                icon: "🚇"
              },
              {
                title: "Avtomobil ilə",
                description: "Nizami küçəsində, 203B ünvanı. Binanın qarşısında pulsuz parkinq.",
                icon: "🚗"
              },
              {
                title: "Avtobus ilə",
                description: "5, 88, 125 nömrəli avtobuslar dayanacaq qarşısında dayanır.",
                icon: "🚌"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-xl p-6"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Həllini Tapmadınız?
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Əlaqə qurmaq üçün ən sürətli yol birbaşa zəng etməkdir. Və ya ofisimizə gəlib şəxsi görüş təyin edə bilərsiniz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+994123456789"
                className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +994 12 345 67 89
              </a>
              
              <a
                href="mailto:info@techguard.az"
                className="px-8 py-3.5 border-2 border-purple-500/30 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 font-bold rounded-xl hover:border-purple-500 hover:bg-purple-500/10 dark:hover:bg-purple-500/5 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                info@techguard.az
              </a>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              * İş saatları: Bazar ertəsi - Cümə, 09:00 - 18:00
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}