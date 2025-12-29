// components/Footer.jsx
"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: "+994 12 345 67 89" },
    { icon: <Mail className="w-5 h-5" />, text: "info@techguard.az" },
    { icon: <MapPin className="w-5 h-5" />, text: "Baku, Azerbaijan" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border-t border-zinc-200 dark:border-zinc-800 mt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">
              TechGuard <span className="text-blue-600 dark:text-blue-400">Academy</span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Azərbaycanın ən yaxşı kibertəhlükəsizlik tədris mərkəzi. Biz sizə təhlükəsiz gələcək qurmağa kömək edirik.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Əlaqə</h4>
            <div className="space-y-3">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                  <div className="text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Sürətli Keçidlər</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Ana Səhifə" },
                { href: "/haqqinda", label: "Haqqımızda" },
                { href: "/kurs", label: "Kurs Proqramı" },
                { href: "/qeydiyyat", label: "Qeydiyyat" },
                { href: "/elaqe", label: "Əlaqə" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center"
        >
          <p className="text-zinc-600 dark:text-zinc-400">
            © {currentYear} TechGuard Academy. Bütün hüquqlar qorunur.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
            Developed with ❤️ for cybersecurity education in Azerbaijan
          </p>
        </motion.div>
      </div>
    </footer>
  );
}