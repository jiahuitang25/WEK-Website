"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full">
      <Image
        src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494396191285-b1a1a6b0b543%3Fixlib%3Drb-4.0.3%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1920%26h%3D1080%26fit%3Dcrop&w=3840&q=75"
        alt="A person working with wood and power tools."
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
        data-ai-hint="construction wood"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" /> {/* Increased overlay opacity slightly for better text readability */}
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
