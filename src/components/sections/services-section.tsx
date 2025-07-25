
"use client";

import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, Wrench, ClipboardList, DraftingCompass, Shovel, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-10 w-10 text-primary mb-4" />,
    title: "Residential Construction",
    description: "Custom homes, multi-family units, and renovations tailored to your vision and lifestyle.",
  },
  {
    icon: <Building className="h-10 w-10 text-primary mb-4" />,
    title: "Commercial Building",
    description: "State-of-the-art commercial spaces, office buildings, and retail outlets designed for functionality.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary mb-4" />,
    title: "Remodeling & Renovations",
    description: "Transforming existing structures with quality craftsmanship, modernizing spaces while preserving character.",
  },
  {
    icon: <ClipboardList className="h-10 w-10 text-primary mb-4" />,
    title: "Project Management",
    description: "Comprehensive oversight of every project detail, ensuring on-time and on-budget completion.",
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary mb-4" />,
    title: "Design & Build",
    description: "Integrated design and construction services for a seamless project delivery from concept to creation.",
  },
  {
    icon: <Shovel className="h-10 w-10 text-primary mb-4" />,
    title: "Site Development",
    description: "Expert site preparation, excavation, and infrastructure development for a solid foundation.",
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
                <Card className="text-center shadow-lg hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300 rounded-2xl h-full flex flex-col relative">
                  <CardHeader>
                    <div className="flex justify-center">{service.icon}</div>
                    <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
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
