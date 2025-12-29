// app/tedbirler/page.tsx
"use client";

import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  Ticket, 
  Star, 
  TrendingUp, 
  Mic, 
  Video, 
  Award,
  ExternalLink,
  Filter,
  Search,
  BookOpen,
  Shield,
  Zap,
  Globe,
  Building,
  Mail,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

  const events = [
    {
      id: 1,
      title: "Kibertəhlükəsizlik Günü",
      description: "İllik kibertəhlükəsizlik konfransı. Sənaye liderləri, praktiki workshoplar və networking.",
      date: "2024-02-15",
      time: "10:00 - 18:00",
      location: "Bakı, TechGuard Academy",
      type: "konfrans",
      category: "professional",
      status: "upcoming",
      capacity: 200,
      registered: 180,
      price: "Pulsuz",
      featured: true,
      speakers: [
        { name: "Dr. Əli Məmmədov", role: "Baş Mentor" },
        { name: "Leyla Əliyeva", role: "Cloud Expert" },
        { name: "Orxan Hüseynov", role: "Pentester" }
      ],
      tags: ["Konfrans", "Workshop", "Networking"]
    },
    {
      id: 2,
      title: "Ethical Hacking Workshop",
      description: "Praktiki Ethical Hacking workshop. Real ssenarilər, Capture The Flag yarışı.",
      date: "2024-02-22",
      time: "14:00 - 17:00",
      location: "Online - Zoom",
      type: "workshop",
      category: "hands-on",
      status: "upcoming",
      capacity: 50,
      registered: 45,
      price: "30 AZN",
      featured: true,
      speakers: [
        { name: "Orxan Hüseynov", role: "Senior Pentester" },
        { name: "Aysel Rəhimova", role: "SOC Specialist" }
      ],
      tags: ["Workshop", "CTF", "Practical"]
    },
    {
      id: 3,
      title: "Cloud Security Summit",
      description: "Bulud təhlükəsizliyində son trendlər. AWS, Azure və Google Cloud təhlükəsizliyi.",
      date: "2024-03-05",
      time: "09:00 - 16:00",
      location: "Bakı, Hilton Hotel",
      type: "summit",
      category: "professional",
      status: "upcoming",
      capacity: 150,
      registered: 120,
      price: "50 AZN",
      featured: false,
      speakers: [
        { name: "Leyla Əliyeva", role: "Cloud Security Director" },
        { name: "Microsoft Expert", role: "Azure Security" },
        { name: "AWS Specialist", role: "AWS Security" }
      ],
      tags: ["Cloud", "AWS", "Azure", "Summit"]
    },
    {
      id: 4,
      title: "Karyera Günü",
      description: "Kibertəhlükəsizlik sahəsində karyera imkanları. İşə düzəlmə seminarı, CV review.",
      date: "2024-03-15",
      time: "11:00 - 15:00",
      location: "TechGuard Academy",
      type: "career",
      category: "education",
      status: "upcoming",
      capacity: 100,
      registered: 75,
      price: "Pulsuz",
      featured: false,
      speakers: [
        { name: "HR Specialists", role: "IT Recruitment" },
        { name: "Industry Partners", role: "Şirkət Nümayəndələri" }
      ],
      tags: ["Karyera", "CV", "İşə Düzəlmə"]
    },
    {
      id: 5,
      title: "CTF Championship",
      description: "İllik Capture The Flag yarışması. Komandalar halında iştirak, əd və mükafatlar.",
      date: "2024-03-25",
      time: "10:00 - 22:00",
      location: "Online",
      type: "competition",
      category: "hands-on",
      status: "upcoming",
      capacity: 300,
      registered: 250,
      price: "Komanda: 100 AZN",
      featured: true,
      speakers: [
        { name: "CTF Judges", role: "Beynalxalq Hakimlər" },
        { name: "Security Experts", role: "Yarışma Təşkilatçıları" }
      ],
      tags: ["CTF", "Yarışma", "Komanda"]
    },
    {
      id: 6,
      title: "AI & Cybersecurity Forum",
      description: "Süni intellektin kibertəhlükəsizlikdə tətbiqi. AI ilə təhlükə aşkarlama.",
      date: "2024-04-10",
      time: "13:00 - 17:00",
      location: "Online",
      type: "forum",
      category: "innovation",
      status: "upcoming",
      capacity: 200,
      registered: 60,
      price: "20 AZN",
      featured: false,
      speakers: [
        { name: "AI Researchers", role: "Machine Learning" },
        { name: "Cybersecurity Experts", role: "Threat Detection" }
      ],
      tags: ["AI", "Machine Learning", "Forum"]
    },
    {
      id: 7,
      title: "SOC Workshop",
      description: "Security Operations Center praktiki workshop. Real log analizi, incident response.",
      date: "2024-04-18",
      time: "09:00 - 13:00",
      location: "TechGuard Lab",
      type: "workshop",
      category: "hands-on",
      status: "upcoming",
      capacity: 30,
      registered: 25,
      price: "40 AZN",
      featured: false,
      speakers: [
        { name: "Aysel Rəhimova", role: "SOC Specialist" },
        { name: "Dr. Əli Məmmədov", role: "Incident Response" }
      ],
      tags: ["SOC", "SIEM", "Workshop"]
    },
    {
      id: 8,
      title: "Kibertəhlükəsizlik Məzunları Toplantısı",
      description: "TechGuard Academy məzunlarının illik toplantısı. Networking, uğur hekayələri.",
      date: "2024-01-20",
      time: "18:00 - 21:00",
      location: "Bakı, Four Seasons",
      type: "networking",
      category: "community",
      status: "past",
      capacity: 150,
      registered: 150,
      price: "Pulsuz",
      featured: true,
      speakers: [
        { name: "Successful Graduates", role: "Alumni Speakers" },
        { name: "Industry Leaders", role: "Qonaq Çıxışlar" }
      ],
      tags: ["Alumni", "Networking", "Uğur Hekayələri"]
    },
  ];

  const eventTypes = [
    { id: "all", label: "Hamısı", icon: <Calendar className="w-4 h-4" />, count: events.length },
    { id: "konfrans", label: "Konfrans", icon: <Mic className="w-4 h-4" />, count: events.filter(e => e.type === "konfrans").length },
    { id: "workshop", label: "Workshop", icon: <BookOpen className="w-4 h-4" />, count: events.filter(e => e.type === "workshop").length },
    { id: "competition", label: "Yarışma", icon: <Award className="w-4 h-4" />, count: events.filter(e => e.type === "competition").length },
    { id: "summit", label: "Summit", icon: <TrendingUp className="w-4 h-4" />, count: events.filter(e => e.type === "summit").length },
    { id: "career", label: "Karyera", icon: <Users className="w-4 h-4" />, count: events.filter(e => e.type === "career").length },
  ];

  const categories = [
    { id: "all", label: "Bütün Kateqoriyalar", color: "purple" },
    { id: "professional", label: "Professional", color: "blue" },
    { id: "hands-on", label: "Praktik", color: "green" },
    { id: "education", label: "Təhsil", color: "yellow" },
    { id: "innovation", label: "İnnovasiya", color: "pink" },
    { id: "community", label: "Kommunitas", color: "indigo" },
  ];

  const months = [
    { id: "all", label: "Bütün Aylar" },
    { id: "01", label: "Yanvar" },
    { id: "02", label: "Fevral" },
    { id: "03", label: "Mart" },
    { id: "04", label: "Aprel" },
    { id: "05", label: "May" },
    { id: "06", label: "İyun" },
  ];

  const stats = [
    { icon: <Calendar className="w-6 h-6" />, value: "50+", label: "Keçirilən Tədbir" },
    { icon: <Users className="w-6 h-6" />, value: "5000+", label: "İştirakçı" },
    { icon: <Award className="w-6 h-6" />, value: "20+", label: "Beynəlxalq Konfrans" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "95%", label: "Məmnuniyyət" },
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = activeFilter === "all" || event.type === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesMonth = selectedMonth === "all" || event.date.split("-")[1] === selectedMonth;
    
    return matchesFilter && matchesSearch && matchesMonth;
  });

  const upcomingEvents = events.filter(event => event.status === "upcoming");
  const pastEvents = events.filter(event => event.status === "past");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      weekday: 'long'
    };
    return date.toLocaleDateString('az-AZ', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-purple-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950/10">
      {/* Hero Section */}
      <PageHeader
        title="Tədbirlər"
        subtitle="TƏDBİRLƏR"
        description="Kibertəhlükəsizlik sahəsində ən son tədbirlər, konfranslar, workshoplar və yarışmalar."
        icon={<Calendar className="w-4 h-4" />}
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

      {/* Featured Events */}
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
                Seçilmiş
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Tədbirlər
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ən çox gözlənilən və seçilmiş tədbirlərimiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.filter(event => event.featured && event.status === "upcoming").slice(0, 3).map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                
                <div className="relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-3xl overflow-hidden hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 h-full">
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Seçilmiş
                    </div>
                  </div>

                  {/* Event Image/Header */}
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-purple-500/20 dark:from-purple-500/30 dark:to-purple-500/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/api/placeholder/400/200')] bg-cover bg-center opacity-10" />
                    <div className="text-center relative z-10">
                      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        {new Date(event.date).toLocaleDateString('az-AZ', { month: 'long' })}
                      </div>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            event.type === 'konfrans' 
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                              : event.type === 'workshop'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                              : event.type === 'competition'
                              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                          }`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            event.category === 'professional' 
                              ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300'
                              : event.category === 'hands-on'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                          }`}>
                            {event.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        {event.registered}/{event.capacity} iştirakçı
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {event.price}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {Math.round((event.registered / event.capacity) * 100)}% dolub
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-[0_10px_25px_rgba(147,51,234,0.3)] transition-all duration-300">
                        Qeydiyyat
                      </button>
                      <button className="px-4 py-2 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                        Ətraflı
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="sticky top-6"
              >
                {/* Search */}
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Tədbir axtar..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Event Types */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    Tədbir Növü
                  </h3>
                  <div className="space-y-2">
                    {eventTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setActiveFilter(type.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 ${
                          activeFilter === type.id
                            ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white'
                            : 'bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 text-gray-700 dark:text-gray-300 hover:border-purple-500/50'
                        } border border-transparent`}
                      >
                        <div className="flex items-center gap-2">
                          {type.icon}
                          <span className="text-sm font-medium">{type.label}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activeFilter === type.id
                            ? 'bg-white/20'
                            : 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300'
                        }`}>
                          {type.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Kateqoriyalar
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveFilter(category.id)}
                        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                          activeFilter === category.id
                            ? `bg-${category.color}-600 text-white`
                            : `bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-800 dark:text-${category.color}-300 hover:bg-${category.color}-200 dark:hover:bg-${category.color}-800/50`
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Months */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Tarix
                  </h3>
                  <div className="space-y-2">
                    {months.map((month) => (
                      <button
                        key={month.id}
                        onClick={() => setSelectedMonth(month.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                          selectedMonth === month.id
                            ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white'
                            : 'bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 text-gray-700 dark:text-gray-300 hover:border-purple-500/50'
                        } border border-transparent`}
                      >
                        <span className="text-sm font-medium">{month.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Tədbirlərdən Xəbərdar Olun
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Yeni tədbirlər haqqında ilk siz xəbərdar olun.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email ünvanınız"
                      className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    />
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-[0_10px_25px_rgba(147,51,234,0.3)] transition-all duration-300">
                      Abunə Ol
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Events List */}
            <div className="lg:w-3/4">
              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Gözlənilən Tədbirlər
                  </h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {upcomingEvents.length} tədbir
                  </div>
                </div>

                <div className="space-y-6">
                  {filteredEvents
                    .filter(event => event.status === "upcoming")
                    .map((event, idx) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl overflow-hidden hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                        <div className="grid md:grid-cols-5 gap-0">
                          {/* Date Column */}
                          <div className="md:col-span-1 bg-gradient-to-b from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 p-6 flex flex-col items-center justify-center border-r border-gray-200/50 dark:border-purple-900/30">
                            <div className="text-4xl font-bold text-gray-900 dark:text-white">
                              {new Date(event.date).getDate()}
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                              {new Date(event.date).toLocaleDateString('az-AZ', { month: 'short' })}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                              {new Date(event.date).toLocaleDateString('az-AZ', { weekday: 'short' })}
                            </div>
                          </div>

                          {/* Content Column */}
                          <div className="md:col-span-4 p-6">
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    event.type === 'konfrans' 
                                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                      : event.type === 'workshop'
                                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                      : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                                  }`}>
                                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                  </span>
                                  {event.featured && (
                                    <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full flex items-center gap-1">
                                      <Star className="w-3 h-3" />
                                      Seçilmiş
                                    </span>
                                  )}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                  {event.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                  {event.description}
                                </p>

                                {/* Event Details */}
                                <div className="flex flex-wrap gap-4 mb-4">
                                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <Clock className="w-4 h-4" />
                                    {event.time}
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-4 h-4" />
                                    {event.location}
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <Users className="w-4 h-4" />
                                    {event.registered}/{event.capacity}
                                  </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {event.tags.map((tag, tagIdx) => (
                                    <span
                                      key={tagIdx}
                                      className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 text-gray-700 dark:text-gray-300 rounded-md"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                {/* Speakers */}
                                <div className="flex items-center gap-2">
                                  <div className="flex -space-x-2">
                                    {event.speakers.slice(0, 3).map((speaker, speakerIdx) => (
                                      <div
                                        key={speakerIdx}
                                        className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center text-white text-xs font-bold"
                                      >
                                        {speaker.name.charAt(0)}
                                      </div>
                                    ))}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {event.speakers.length} çıxışçı
                                  </div>
                                </div>
                              </div>

                              {/* Action Column */}
                              <div className="flex flex-col gap-3 min-w-[160px]">
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                    {event.price}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Qiymət
                                  </div>
                                </div>
                                
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-purple-600 to-purple-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                                  />
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 text-right">
                                  {Math.round((event.registered / event.capacity) * 100)}% dolub
                                </div>

                                <div className="flex gap-2">
                                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-[0_10px_25px_rgba(147,51,234,0.3)] transition-all duration-300">
                                    Qeydiyyat
                                  </button>
                                  <button className="px-3 py-2 border border-purple-500/30 text-purple-700 dark:text-purple-300 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                                    <ExternalLink className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Past Events */}
              {pastEvents.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      Keçmiş Tədbirlər
                    </h2>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {pastEvents.length} tədbir
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {pastEvents.slice(0, 4).map((event, idx) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex flex-col items-center justify-center">
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {new Date(event.date).getDate()}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">
                                {new Date(event.date).toLocaleDateString('az-AZ', { month: 'short' })}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                {event.title}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <Clock className="w-3 h-3" />
                                {event.time} • {event.location}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                            {event.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {event.registered} iştirakçı
                            </div>
                            <button className="px-3 py-1.5 text-sm border border-purple-500/30 text-purple-700 dark:text-purple-300 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                              Fotolar
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Organize Event */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-500/10 via-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:via-purple-500/20 dark:to-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Tədbir
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                    Təşkil Edin
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Sizin şirkətiniz və ya təşkilatınız üçün xüsusi tədbir təşkil etmək istəyirsiniz? 
                  TechGuard Academy ilə əməkdaşlıq edin və uğurlu tədbir keçirin.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Xüsusi workshop və təlimlər",
                    "Korporativ tədbirlər",
                    "Sənaye konfransları",
                    "Networking etkinlikləri",
                    "Karyera günləri"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300">
                    Təklif Göndərin
                  </button>
                  <button className="px-6 py-3 border-2 border-purple-500/30 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 font-bold rounded-xl hover:border-purple-500 hover:bg-purple-500/10 dark:hover:bg-purple-500/5 transition-all duration-300">
                    Nümunə Tədbirlər
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Shield className="w-8 h-8" />, label: "Sənaye Təcrübəsi", value: "15+ il" },
                    { icon: <Users className="w-8 h-8" />, label: "İştirakçı", value: "5000+" },
                    { icon: <Globe className="w-8 h-8" />, label: "Beynəlxalq", value: "20+ ölkə" },
                    { icon: <Award className="w-8 h-8" />, label: "Mükafat", value: "10+" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-purple-900/30 rounded-2xl p-6 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <div className="text-purple-600 dark:text-purple-400">
                          {item.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                        {item.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Tədbirlərdən
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Xəbərdar Olun
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Yeni tədbirlər, workshoplar və konfranslar haqqında ilk siz xəbərdar olun. 
              Kibertəhlükəsizlik sahəsində ən son yenilikləri qaçırmayın.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email ünvanınız"
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-500/10 dark:to-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                />
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300">
                <Mail className="w-5 h-5 inline mr-2" />
                Abunə Ol
              </button>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Spam göndərmirik. İstənilən vaxt abunəni dayandıra bilərsiniz.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}