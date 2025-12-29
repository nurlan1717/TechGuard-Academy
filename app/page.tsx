// app/page.tsx
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import BenefitsSection from "@/components/BenefitsSection";
import InstructorSection from "@/components/InstructorSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Professional Cybersecurity Course | From Zero to Expert",
  description: "Master cybersecurity from fundamentals to advanced techniques. Learn ethical hacking, network security, SOC operations, and more with hands-on training.",
  keywords: "cybersecurity course, ethical hacking, network security, SOC training, penetration testing, OWASP",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <BenefitsSection />
      <InstructorSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}