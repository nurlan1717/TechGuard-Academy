"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Snowfall from "@/components/Snowfall";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = theme === 'dark' || (!theme && prefersDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-mode', 'dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-mode', 'light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TechGuard Academy | Blue Team Professional SOC Kursu</title>
        <meta name="description" content="SOC, SIEM, EDR, Incident Response və Threat Hunting üzrə peşəkar Blue Team kursu. Real təcrübə, mentor dəstəyi və karyera imkanları." />
        <meta name="keywords" content="SOC, Blue Team, SIEM, EDR, Cybersecurity, Təhlükəsizlik, Kurs, TechGuard, Incident Response, Threat Hunting, Təlim, Karyera" />
        <meta name="author" content="TechGuard Academy" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techguard.az/" />
        <meta property="og:title" content="TechGuard Academy | Blue Team Professional SOC Kursu" />
        <meta property="og:description" content="SOC, SIEM, EDR, Incident Response və Threat Hunting üzrə peşəkar Blue Team kursu. Real təcrübə, mentor dəstəyi və karyera imkanları." />
        <meta property="og:image" content="/TechGuard.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://techguard.az/" />
        <meta name="twitter:title" content="TechGuard Academy | Blue Team Professional SOC Kursu" />
        <meta name="twitter:description" content="SOC, SIEM, EDR, Incident Response və Threat Hunting üzrə peşəkar Blue Team kursu. Real təcrübə, mentor dəstəyi və karyera imkanları." />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Snowfall />
          <Navbar />
          <main className="flex-1 w-full max-w-full mx-auto">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}