"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock, MessageSquare, Calendar, Zap, Shield } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@techguard.az",
      link: "mailto:info@techguard.az",
      description: "24 saat ərzində cavab alacaqsınız"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "+994 12 345 67 89",
      link: "tel:+994123456789",
      description: "Həftə içi 09:00-18:00"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ünvan",
      value: "Bakı, Azərbaycan",
      link: "https://maps.google.com/?q=Baku+Azerbaijan",
      description: "Nizami küç. 203B"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "İş Saatları",
      value: "09:00 - 18:00",
      link: null,
      description: "Həftə içi, bazar ertəsi - cümə"
    },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", link: "https://linkedin.com/company/techguard" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", link: "https://facebook.com/techguard" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", link: "https://instagram.com/techguard" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", link: "https://twitter.com/techguard" },
    { icon: <MessageSquare className="w-5 h-5" />, name: "Telegram", link: "https://t.me/techguard" },
  ];

  const interests = [
    { value: "general", label: "Ümumi Məlumat" },
    { value: "admission", label: "Qəbul Prosesi" },
    { value: "curriculum", label: "Tədris Proqramı" },
    { value: "payment", label: "Ödəniş Planları" },
    { value: "corporate", label: "Korporativ Təlim" },
    { value: "partnership", label: "Tərəfdaşlıq" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "", interest: "general" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="elaqe" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-purple-500/10 dark:from-purple-700/20 dark:via-transparent dark:to-purple-900/20" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl" />
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
            <MessageSquare className="w-4 h-4" />
            ƏLAQƏ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Bizimlə
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Əlaqə Saxlayın
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Suallarınız var? Kibertəhlükəsizlik səfərinizi başlatmağınıza kömək etmək üçün buradayıq
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-8 mb-14">
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
                    
                    <div className="relative bg-white/90 dark:bg-gray-900/90 shadow-xl backdrop-blur-md border border-gray-200/60 dark:border-purple-900/40 rounded-2xl p-7 hover:border-purple-500/70 dark:hover:border-purple-500/60 hover:shadow-2xl transition-all duration-300">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
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
                          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 break-all block mb-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 dark:text-gray-300 mb-1">{info.value}</p>
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

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Sosial Şəbəkələrdə Bizi İzləyin
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative w-12 h-12 bg-gradient-to-r from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 border border-purple-500/30 dark:border-purple-500/40 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 hover:border-purple-500/70 dark:hover:border-purple-500/60 shadow-md hover:shadow-xl transition-all duration-300"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
                    <div className="relative">{social.icon}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/30 dark:border-purple-500/40 rounded-2xl p-4 aspect-video flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-3 opacity-60" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Bakı, Azərbaycan</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ətraflı xəritə üçün klikləyin</p>
                </div>
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
            <div className="relative bg-white/95 dark:bg-gray-900/95 shadow-2xl backdrop-blur-md border border-gray-200/60 dark:border-purple-900/40 rounded-3xl p-10">
              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl text-green-700 dark:text-green-300"
                >
                  Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.
                </motion.div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                Məktub Göndərin
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Interest Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Maraqlanıram:
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 border border-purple-500/30 dark:border-purple-500/40 rounded-xl text-gray-700 dark:text-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all shadow-sm"
                  >
                    {interests.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınız *"
                      required
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 border border-purple-500/30 dark:border-purple-500/40 rounded-xl text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email ünvanınız *"
                      required
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 border border-purple-500/30 dark:border-purple-500/40 rounded-xl text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon nömrəniz"
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 border border-purple-500/30 dark:border-purple-500/40 rounded-xl text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all shadow-sm"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınız *"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 border border-purple-500/30 dark:border-purple-500/40 rounded-xl text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all shadow-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Göndərilir...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Məktub Göndər
                    </>
                  )}
                </motion.button>
              </form>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 text-center">
                Məlumatlarınız məxfi saxlanılacaq. Göndər düyməsinə klikləməklə siz 
                <a href="/mexfilik" className="text-purple-600 dark:text-purple-400 hover:underline"> Məxfilik Siyasətimiz</a> ilə razılaşırsınız.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-r from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70 shadow-xl backdrop-blur-md border border-gray-200/60 dark:border-purple-900/40 rounded-3xl p-10 md:p-14 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-500/10 to-purple-500/5" />
            <div className="relative text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Karyeranızı Dəyişməyə Hazırsınız?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Növbəti qrupda məhdud sayda yer mövcuddur. İndi qeydiyyatdan keçin və bonus materiallar əldə edin!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+994123456789"
                  className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Zəng Edin
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://calendly.com/techguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border-2 border-purple-500/30 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 font-bold rounded-xl hover:border-purple-500 hover:bg-purple-500/10 dark:hover:bg-purple-500/5 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Təqvimə Yazılın
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Response Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 border border-purple-500/30 dark:border-purple-500/40 rounded-2xl px-7 py-4 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 text-sm flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="font-semibold">Cavab müddəti:</span> İş saatları ərzində 1 saat, digər vaxtlarda 24 saat
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}