import HeroSection from '@/components/sections/hero-section';
import ProjectPortfolioSection from '@/components/sections/project-portfolio-section';

export default function Home() {
  return (
    <>
      <HeroSection id="hero" />
      <ProjectPortfolioSection id="projects" />
    </>
  );
}
