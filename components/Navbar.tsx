'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, GraduationCap, ChevronDown, Users, Briefcase, Calendar, Phone, Mail } from "lucide-react";

// Azərbaycan dilində nav linkləri
const navLinks = [
  { href: "/about", label: "Haqqımızda", icon: Shield },
  // { href: "/education", label: "Tədris Proqramı", icon: GraduationCap },
  // { href: "/mentorlar", label: "Mentorlar", icon: Users },
  // { href: "/career", label: "Karyera Dəstəyi", icon: Briefcase },
  { href: "/event", label: "Tədbirlər", icon: Calendar },
  { href: "/contact", label: "Əlaqə", icon: Phone },
];

// Kurslar dropdown üçün
const courses = [
  { href: "/course/red-team", label: "Red Team" },
  { href: "/course/blue-team", label: "Blue Team" },
  // { href: "/kurslar/ethical-hacking", label: "Ethical Hacking" },
  // { href: "/kurslar/cloud-security", label: "Cloud Security" },
  // { href: "/kurslar/digital-forensic", label: "Digital Forensic" },
  // { href: "/kurslar/cyber-law", label: "Kiber Hüquq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 80; // Navbar yüksəkliyi
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-2xl backdrop-blur-xl border-b border-gray-200/70 dark:border-purple-900/60' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.08 }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/30 bg-gradient-to-br from-purple-600/10 to-purple-400/10"
              >
                <img src="TechGuard.jpeg" alt="TechGuard Logo" className="w-12 h-12 text-white rounded-xl" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent drop-shadow-md">
                  TechGuard
                </span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Academy
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Kurslar Dropdown */}
            <motion.div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm cursor-pointer font-semibold rounded-lg text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 flex items-center gap-1 group"
              >
                <GraduationCap className="w-4 h-4 cursor-pointer group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                Kurslar
                <ChevronDown className={`w-4 h-4 cursor-pointer transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              <AnimatePresence>
                {coursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-purple-900/50 overflow-hidden"
                  >
                    <div className="p-2">
                      {courses.map((course, index) => (
                        <motion.a
                          key={course.href}
                          href={course.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors border-l-2 border-transparent hover:border-purple-500"
                        >
                          {course.label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Digər linklər */}
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 text-sm font-semibold rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100/60 dark:hover:bg-purple-900/30 transition-all duration-200 flex items-center gap-2 group shadow-none hover:shadow-md"
                >
                  <Icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                  {link.label}
                </motion.a>
              );
            })}

            {/* Tema dəyişdirici */}
            <div className="ml-2 cursor-pointer">
              <ThemeToggle />
            </div>

            {/* Qeydiyyat button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-7 py-2.5 bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden group border-2 border-purple-600/0 hover:border-purple-600/60"
            >
              <span className="relative z-10">Qeydiyyat</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-3 lg:hidden cursor-pointer">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menyunu aç/bağla"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 border-t border-gray-200/70 dark:border-purple-900/60 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {/* Mobile Kurslar Dropdown */}
              <div className="mb-2">
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-2 cursor-pointer">
                    <GraduationCap className="w-4 h-4" />
                    Kurslar
                  </div>
                  <ChevronDown className={`w-4 h-4 cursor-pointer transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileCoursesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 mt-1 space-y-1 overflow-hidden"
                    >
                      {courses.map((course) => (
                        <a
                          key={course.href}
                          href={course.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100/60 dark:hover:bg-purple-900/30 rounded-xl transition-colors"
                        >
                          {course.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Digər mobile linklər */}
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100/60 dark:hover:bg-purple-900/30 transition-colors"
                  >
                    <Icon className="w-4 h-4 opacity-60" />
                    {link.label}
                  </motion.a>
                );
              })}
              
              {/* Mobile Qeydiyyat button */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full mt-4 px-4 py-3.5 text-center bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-purple-500/40 transition-all duration-300 border-2 border-purple-600/0 hover:border-purple-600/60"
              >
                Qeydiyyatdan Keç
              </motion.a>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 mt-4 border-t border-gray-200 dark:border-purple-900/50"
              >
                <div className="text-xs text-gray-500 dark:text-gray-400 space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    +994 12 345 67 89
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    info@techguard.az
                  </p>
                  <p>📍 Bakı, Azərbaycan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Mail ikonu için ekleme (import etmeyi unutmuşsunuz)