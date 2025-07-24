"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = ({ id }: { id: string }) => {
  const repositoryName = 'WEK-Website';
  const heroImagePath = process.env.NODE_ENV === 'production' ? `/${repositoryName}/hero-background.jpg` : '/hero-background.jpg';

  return (
    <section id={id} className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full">
      <Image
        src={heroImagePath}
        alt="Construction site background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
        data-ai-hint="construction site"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 container mx-auto flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">
          Building Your Future, Today.
        </h1>
        <div className="text-lg md:text-xl mb-8 max-w-3xl animate-fade-in-up space-y-3"> {/* Increased max-width for longer slogan */}
          <p>
            A construction team with 20 years of experience, offering one-stop services from architectural drawings and house design to construction and obtaining the Certificate of Completion and Compliance (CCC).
          </p>
          <p>
            We have completed over 100 projects of various scales, with a total value exceeding RM40 million.
          </p>
        </div>
        <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-fade-in-up animation-delay-200">
          <Link href="#projects">View Projects</Link>
        </Button>
      </div>
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
