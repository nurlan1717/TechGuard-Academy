// app/page.tsx

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import BenefitsSection from "@/components/BenefitsSection";
import InstructorSection from "@/components/InstructorSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { metadataAz } from "./metadata.az";

export const metadata = metadataAz;

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