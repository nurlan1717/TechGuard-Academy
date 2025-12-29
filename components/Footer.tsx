"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
  Clock,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Kurslar": [
      { label: "Siber Təhlükəsizlik", href: "/kurslar/siber-tehlukesizlik" },
      { label: "Ethical Hacking", href: "/kurslar/ethical-hacking" },
      { label: "Network Engineering", href: "/kurslar/network" },
      { label: "Cloud Security", href: "/kurslar/cloud-security" },
    ],
    "Səhifələr": [
      { label: "Haqqımızda", href: "/haqqimizda" },
      { label: "Mentorlar", href: "/mentorlar" },
      { label: "Karyera Dəstəyi", href: "/karyera" },
      { label: "Tədbirlər", href: "/tedbirler" },
      { label: "FAQ", href: "/faq" },
    ],
    "Dəstək": [
      { label: "Əlaqə", href: "/elaqe" },
      { label: "Kömək Mərkəzi", href: "/yardim" },
      { label: "Şərtlər və Qaydalar", href: "/serhler" },
      { label: "Məxfilik Siyasəti", href: "/mexfilik" },
      { label: "GERİ QAYTARMA", href: "/geri-qaytar" },
    ]
  };

  const contactInfo = [
    { icon: MapPin, text: "Bakı, Azərbaycan", detail: "Nizami küç. 203B" },
    { icon: Phone, text: "+994 12 345 67 89", detail: "Həftə içi 09:00-18:00" },
    { icon: Mail, text: "info@techguard.az", detail: "24/7 dəstək" },
    { icon: Clock, text: "İş saatları", detail: "09:00 - 18:00" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/techguard", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/techguard", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/techguard", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/techguard", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-purple-900/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20"
              >
                <Shield className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                  TechGuard Academy
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Kibertəhlükəsizlik Tədris Mərkəzi
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Azərbaycanda kibertəhlükəsizlik sahəsində peşəkar mütəxəssislər yetişdirmək məqsədi ilə yaradılmış 
              qabaqcıl tədris mərkəzi. Teorik biliklə praktik bacarıqları birləşdirərək gələcəyin mütəxəssislərini hazırlayırıq.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-purple-900/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-500" />
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          href={link.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 rounded-full bg-purple-500 dark:bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 pt-8 border-t border-gray-200 dark:border-purple-900/30"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 flex items-center justify-center">
                      <info.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{info.text}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{info.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-8"
        />

        {/* Copyright and Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-700 dark:text-gray-300">
              © {currentYear} <span className="font-bold text-purple-600 dark:text-purple-400">TechGuard Academy</span>. Bütün hüquqlar qorunur.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center justify-center md:justify-start gap-1">
              <Globe className="w-3 h-3" />
              Azərbaycan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <Link href="/mexfilik" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Məxfilik Siyasəti
            </Link>
            <Link href="/serhler" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Şərtlər və Qaydalar
            </Link>
            <Link href="/cookie" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Cookie Siyasəti
            </Link>
            <Link href="/site-xerite" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Sayt Xəritəsi
            </Link>
          </motion.div>
        </div>

        {/* Accreditation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-200 dark:border-purple-900/30 text-center"
        >
          <div className="inline-flex items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
            <span>ISO 27001:2022 Certified</span>
            <span>•</span>
            <span>Ministry of Education Licensed</span>
            <span>•</span>
            <span>Industry Partners: Cisco, Microsoft, AWS</span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            TechGuard Academy Azərbaycan Respublikasının Təhsil Nazirliyi tərəfindən lisenziya almışdır. 
            Lisenziya №: T-1234/2023
          </p>
        </motion.div>
      </div>
    </footer>
  );
}