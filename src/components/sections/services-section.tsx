
"use client";

import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, Wrench, ClipboardList, DraftingCompass, Shovel, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Residential Construction",
    description: "Custom homes, multi-family units, and renovations tailored to your vision and lifestyle.",
    imageName: "service-1.jpg",
    imageHint: "residential construction"
  },
  {
    title: "Commercial Building",
    description: "State-of-the-art commercial spaces, office buildings, and retail outlets designed for functionality.",
    imageName: "service-2.jpg",
    imageHint: "commercial building"
  },
  {
    title: "Remodeling & Renovations",
    description: "Transforming existing structures with quality craftsmanship, modernizing spaces while preserving character.",
    imageName: "service-3.jpg",
    imageHint: "house renovation"
  },
  {
    title: "Project Management",
    description: "Comprehensive oversight of every project detail, ensuring on-time and on-budget completion.",
    imageName: "service-4.jpg",
    imageHint: "construction management"
  },
  {
    title: "Design & Build",
    description: "Integrated design and construction services for a seamless project delivery from concept to creation.",
    imageName: "service-5.jpg",
    imageHint: "architectural design"
  },
  {
    title: "Site Development",
    description: "Expert site preparation, excavation, and infrastructure development for a solid foundation.",
    imageName: "service-6.jpg",
    imageHint: "construction site"
  },
];

const ServicesSection = ({ id }: { id: string }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkForScrollPosition = () => {
    const { current } = scrollContainerRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth -1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const { current } = scrollContainerRef;
    if (current) {
      checkForScrollPosition();
      current.addEventListener('scroll', checkForScrollPosition);
      window.addEventListener('resize', checkForScrollPosition);

      return () => {
        current.removeEventListener('scroll', checkForScrollPosition);
        window.removeEventListener('resize', checkForScrollPosition);
      };
    }
  }, []);

  const repositoryName = 'WEK-Website';
  const getImageUrl = (imageName: string) => {
    return process.env.NODE_ENV === 'production' ? `/${repositoryName}/${imageName}` : `/${imageName}`;
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-8 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions to meet all your project needs.
          </p>
        </div>
        <div className="relative group">
          <Button 
            variant="outline" 
            size="icon" 
            className={`absolute top-1/2 left-0 -translate-y-1/2 z-10 rounded-full h-12 w-12 bg-card/80 hover:bg-card transition-opacity duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed ${!canScrollLeft && 'opacity-0'}`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-8 pb-4 -mx-4 px-4 py-8">
            {services.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                 <Card 
                  className="shadow-lg hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300 rounded-2xl h-full flex flex-col justify-end relative bg-cover bg-center overflow-hidden"
                  style={{backgroundImage: `url('${getImageUrl(service.imageName)}')`}}
                  data-ai-hint={service.imageHint}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="relative p-6 text-white text-left">
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="font-headline text-2xl text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-white/80">{service.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            className={`absolute top-1/2 right-0 -translate-y-1/2 z-10 rounded-full h-12 w-12 bg-card/80 hover:bg-card transition-opacity duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed ${!canScrollRight && 'opacity-0'}`}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <style jsx>{`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
          .overflow-x-auto {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServicesSection;
