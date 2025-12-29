// app/layout.tsx
"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <html lang="az" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          <main className="flex-1 w-full max-w-full mx-auto">{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
