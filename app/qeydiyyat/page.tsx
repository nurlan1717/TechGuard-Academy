// app/qeydiyyat/page.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, Building, User } from "lucide-react";

export default function RegistrationPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        courseType: "online",
        paymentMethod: "card",
    });

    const paymentMethods = [
        { id: "card", label: "Kredit Kartı", icon: <CreditCard /> },
        { id: "bank", label: "Bank Köçürməsi", icon: <Building /> },
        { id: "mobile", label: "Mobil Ödəniş", icon: <Smartphone /> },
    ];

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">Kurs Qeydiyyatı</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Aşağıdakı formu dolduraraq kursa qeydiyyatdan keçin
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-700"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Info */}
                            <div>
                                <label className="block text-sm font-medium mb-2">Tam Adınız</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-12 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Ad Soyad"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Telefon</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+994 XX XXX XX XX"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Course Type */}
                            <div>
                                <label className="block text-sm font-medium mb-3">Kurs Növü</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, courseType: "online" })}
                                        className={`p-4 rounded-lg border transition-all ${formData.courseType === "online"
                                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                            : "border-zinc-200 dark:border-zinc-700"}`}
                                    >
                                        <div className="font-semibold">Online</div>
                                        <div className="text-sm text-zinc-500">100 ₼ / ay</div>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, courseType: "offline" })}
                                        className={`p-4 rounded-lg border transition-all ${formData.courseType === "offline"
                                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                            : "border-zinc-200 dark:border-zinc-700"}`}
                                    >
                                        <div className="font-semibold">Offline</div>
                                        <div className="text-sm text-zinc-500">150 ₼ / ay</div>
                                    </button>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <label className="block text-sm font-medium mb-3">Ödəniş Metodu</label>
                                <div className="space-y-2">
                                    {paymentMethods.map((method) => (
                                        <label
                                            key={method.id}
                                            className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${formData.paymentMethod === method.id
                                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                                : "border-zinc-200 dark:border-zinc-700"}`}
                                        >
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={method.id}
                                                checked={formData.paymentMethod === method.id}
                                                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-600 dark:text-blue-400">{method.icon}</span>
                                                <span>{method.label}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                            >
                                Ödənişi Tamamla
                            </button>
                        </form>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-red-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-700"
                    >
                        <h2 className="text-2xl font-bold mb-6">Sifariş Xülasəsi</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between py-3 border-b border-zinc-200 dark:border-zinc-700">
                                <span>Kurs Adı:</span>
                                <span className="font-semibold">Kibertəhlükəsizlik Kursu</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-zinc-200 dark:border-zinc-700">
                                <span>Format:</span>
                                <span className="font-semibold">
                                    {formData.courseType === "online" ? "Online" : "Offline"}
                                </span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-zinc-200 dark:border-zinc-700">
                                <span>Müddət:</span>
                                <span className="font-semibold">3 ay (12 həftə)</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-zinc-200 dark:border-zinc-700">
                                <span>Aylıq Ödəniş:</span>
                                <span className="font-semibold">
                                    {formData.courseType === "online" ? "100 ₼" : "150 ₼"}
                                </span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-lg font-bold">Ümumi:</span>
                                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                                    {formData.courseType === "online" ? "300 ₼" : "450 ₼"}
                                </span>
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700">
                            <h3 className="font-semibold mb-4">Daxildir:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span>24/7 Dəstək</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span>Sertifikat</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span>Praktiki Tapşırıqlar</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span>Lifetime Access</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}