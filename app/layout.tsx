import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechGuard Academy | Kibertəhlükəsizlik Kursu",
  description: "TechGuard Academy - Azərbaycanda kibertəhlükəsizlik üzrə peşəkar kurslar.",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-1 w-full max-w-5xl mx-auto px-4">
          {/* <div className="flex justify-end pt-4"><ThemeToggle /></div> */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
