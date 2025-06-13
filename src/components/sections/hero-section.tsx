"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Construction site background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
        data-ai-hint="construction work"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 container mx-auto flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">
          Building Your Future, Today.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-up">
          WEK Build delivers exceptional construction services, combining innovative solutions with unwavering commitment to quality and client satisfaction.
        </p>
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
