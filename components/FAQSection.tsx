"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Kibertəhlükəsizlikdə əvvəlki təcrübə lazımdır?",
      answer: "Əvvəlki təcrübə tələb olunmur. Əsaslardan başlayaraq qabaqcəl mövzulara qədər tədricən irəliləyirik. Lakin əsas kompüter savadlılığı və əməliyyat sistemləri ilə tanışlıq tövsiyə olunur.",
    },
    {
      question: "Kursun müddəti nə qədərdir?",
      answer: "Kurs 16 həftə davam edir və strukturlaşdırılmış tədris proqramına malikdir. İşləyən peşəkarlara uyğunlaşmaq üçün axşam və həftəsonu dərslər də daxil olmaqla çevik öyrənmə cədvəlləri təklif edirik.",
    },
    {
      question: "Sertifikat alacağam?",
      answer: "Bəli, bütün modulları və tapşırıqları uğurla başa vurduqdan sonra siz kibertəhlükəsizlik bacarıqlarınızı və biliklərinizi təsdiqləyən rəsmi Təhsil Sertifikatı alacaqsınız.",
    },
    {
      question: "Hansı alətlər və proqram təminatından istifadə edəcəyəm?",
      answer: "Sənaye standartı alətlərlə, o cümlədən Kali Linux, Wireshark, Metasploit, Burp Suite, Nmap və müxtəlif SIEM platformaları ilə işləyəcəksiniz. Bütün alətlər virtual laboratoriya mühitimizdə təmin olunur.",
    },
    {
      question: "Praktik təcrübə var?",
      answer: "Əlbəttə! Kurs 70% praktikdir. Təhlükəsiz, nəzarətli mühitdə hücum və müdafiələri məşq edə biləcəyiniz xüsusi laboratoriya mühitimizə 24/7 girişiniz olacaq.",
    },
    {
      question: "Bu kurs məni hansı karyera imkanlarına hazırlayır?",
      answer: "Bu kurs sizni müxtəlif sənayələrdə Təhlükəsizlik Analiti, Penetrasiya Testeri, SOC Analiti, Təhlükəsizlik Mühəndisi, Incident Responder və Təhlükəsizlik Məsləhətçisi kimi rollara hazırlayır.",
    },
    {
      question: "Kurs zamanı suallar verə bilərəm?",
      answer: "Bəli! Həftəlik canlı sessiyalar, mentorlarla ofis saatları və aktiv kommunitas forumumuz var. İstənilən vaxt suallar verə və təlimatçılardan və həmyaşıdlarından cavab ala bilərsiniz.",
    },
    {
      question: "Sinif sayı neçədir?",
      answer: "Şəxsi diqqət və təlimatçılarla mənalı qarşılıqlı əlaqəni təmin etmək üçün kiçik sinif sayını (maksimum 25 tələbə) saxlayırıq. Bu daha yaxşı mentorluq və öyrənmə təcrübəsi üçün imkan yaradır.",
    },
    {
      question: "Kursdan sonra dəstək alacağam?",
      answer: "Bəli, kurs bitdikdən sonra da alumni şəbəkəmizə qoşulacaqsınız, yeniləmə dərslərinə və workshoplara daxil ola biləcəksiniz, həmçinin karyera dəstəyi xidmətlərimizdən faydalanacaqsınız.",
    },
    {
      question: "Ödəniş imkanları var?",
      answer: "Bəli, hissə-hissə ödəniş planları təklif edirik. Həmçinin təhsil kreditləri və korporativ qrup endirimlərimiz mövcuddur. Ətraflı məlumat üçün bizimlə əlaqə saxlayın.",
    },
  ];

  const categories = [
    { label: "Ümumi", count: 5 },
    { label: "Tədris", count: 3 },
    { label: "Karyera", count: 2 },
    { label: "Maliyyə", count: 2 },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            TEZ-TEZ VERİLƏN SUALLAR
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Suallarınız
            </span>
            <br />
            <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-normal mt-4 block">
              Kurs haqqında bilmək istədiyiniz hər şey
            </span>
          </h2>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-full text-gray-700 dark:text-gray-300 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 text-sm font-medium flex items-center gap-2"
            >
              {category.label}
              <span className="bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 text-purple-700 dark:text-purple-400 px-2 py-0.5 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                {/* Glow effect on active */}
                {openIndex === idx && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl opacity-20 blur" />
                )}
                
                <div className={`relative bg-white dark:bg-gray-900 backdrop-blur-sm border rounded-xl transition-all duration-300 ${
                  openIndex === idx ? 'border-purple-500/50' : 'border-gray-200/50 dark:border-purple-900/30 hover:border-purple-500/30'
                }`}>
                  {/* Question button */}
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full cursor-pointer px-6 py-5 flex items-center justify-between gap-4 text-left group-hover:bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 transition-all duration-300"
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className={`w-5 h-5 transition-colors ${
                        openIndex === idx ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'
                      }`} />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === idx ? "auto" : 0,
                      opacity: openIndex === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="border-t border-gray-200 dark:border-purple-900/30 pt-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">Hələ də suallarınız var?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("elaqe");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
            className="px-8 py-3.5 cursor-pointer bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300 inline-flex items-center gap-2"
          >
            Bizimlə Əlaqə Saxlayın
          </motion.button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            24 saat ərzində cavab alacaqsınız
          </p>
        </motion.div>
      </div>
    </section>
  );
}