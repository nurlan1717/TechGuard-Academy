// app/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star, Shield, Zap, Users, Award } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"online" | "offline">("online");

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: "Sertifikatlaşdırılmış tədris" },
    { icon: <Zap className="w-6 h-6" />, text: "Praktiki laboratoriyalar" },
    { icon: <Users className="w-6 h-6" />, text: "Peşəkar mentorlar" },
    { icon: <Award className="w-6 h-6" />, text: "Beynəlxalq standartlar" },
  ];

  const coursePackages = {
    online: {
      name: "ONLINE KURS",
      price: "100 ₼",
      features: [
        "Canlı dərslər (Zoom)",
        "Qeyri-məhdud video materiallar",
        "Virtual laboratoriyalar",
        "Sertifikat (rəqəmsal)",
        "24/7 Forum dəstəyi",
        "Həftəlik tapşırıqlar",
      ],
    },
    offline: {
      name: "OFFLINE KURS",
      price: "150 ₼",
      features: [
        "Fiziki dərslər",
        "Laboratoriya avadanlıqları",
        "Praktiki workshoplar",
        "Premium sertifikat",
        "Şəxsi mentor dəstəyi",
        "Karyera konsultasiyası",
      ],
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
        <div className="absolute inset-0 bg-grid-zinc-900/10 dark:bg-grid-zinc-100/10" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Kibertəhlükəsizlik
            </span>
            <br />
            <span className="text-zinc-900 dark:text-white">Peşəkar Kursu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-3xl mx-auto"
          >
            Azərbaycanda ilk dəfə! Sıfırdan ekspert səviyyəsinə qədər praktiki təlim.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700"
              >
                <div className="text-blue-600 dark:text-blue-400">{feature.icon}</div>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#kurs-paketleri"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Kursa Qeydiyyat
              <Zap className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Course Packages */}
      <section id="kurs-paketleri" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Kurs Paketləri</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Özünüzə uyğun tədris formatını seçin
            </p>
          </motion.div>

          {/* Tab Selection */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full">
              <button
                onClick={() => setActiveTab("online")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${activeTab === "online" 
                  ? "bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg" 
                  : "text-zinc-600 dark:text-zinc-400"}`}
              >
                Online Kurs
              </button>
              <button
                onClick={() => setActiveTab("offline")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${activeTab === "offline" 
                  ? "bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg" 
                  : "text-zinc-600 dark:text-zinc-400"}`}
              >
                Offline Kurs
              </button>
            </div>
          </div>

          {/* Package Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
              {/* Popular Badge */}
              {activeTab === "online" && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                  Ən Çox Seçilən
                </div>
              )}
              
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 to-blue-50/20 dark:from-red-900/10 dark:to-blue-900/10" />
              
              <div className="relative p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{coursePackages[activeTab].name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                      {coursePackages[activeTab].price}
                    </span>
                    <span className="text-zinc-500">/ ay</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {coursePackages[activeTab].features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="text-center">
                  <Link
                    href="/qeydiyyat"
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    İndi Qeydiyyatdan Keç
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <p className="text-sm text-zinc-500 mt-4">
                    Ödənişsiz 3 günlük demo dərsə qoşulun!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "500+", label: "Məzun Tələbə" },
              { value: "98%", label: "Məmnuniyyət Dərəcəsi" },
              { value: "50+", label: "Korporativ Tərəfdaş" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-lg text-zinc-600 dark:text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}