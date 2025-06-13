import HeroSection from '@/components/sections/hero-section';
import AboutUsSection from '@/components/sections/about-us-section';
import ServicesSection from '@/components/sections/services-section';
import ProjectPortfolioSection from '@/components/sections/project-portfolio-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection id="hero" />
      <AboutUsSection id="about-us" />
      <ServicesSection id="services" />
      <ProjectPortfolioSection id="projects" />
      <ContactSection id="contact" />
    </>
  );
}
