import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ExperienceSection from "@/components/portfolio/experience-section";


export default function page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
