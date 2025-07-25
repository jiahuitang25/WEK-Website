
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const projects = [
  {
    name: "Modern Villa Retreat",
    description: "A luxurious residential villa featuring contemporary design, smart home technology, and breathtaking panoramic views.",
    location: "Hillcrest Estates, CA",
    imageName: "project-1.jpg",
    imageHint: "modern villa"
  },
  {
    name: "Downtown Office Complex",
    description: "A multi-story office building incorporating sustainable materials and energy-efficient systems for a modern workspace.",
    location: "Metro Business District, NY",
    imageName: "project-2.jpg",
    imageHint: "office complex"
  },
  {
    name: "Historic Landmark Restoration",
    description: "Meticulous restoration of a 19th-century landmark, preserving its historical integrity while upgrading structural elements.",
    location: "Old Town Heritage Site, MA",
    imageName: "project-3.jpg",
    imageHint: "historic building"
  },
  {
    name: "Community Sports Center",
    description: "A versatile and accessible sports facility designed for local community engagement, featuring multiple courts and amenities.",
    location: "Greenfield Community Park, TX",
    imageName: "project-4.jpg",
    imageHint: "sports center"
  },
];

const ProjectPortfolioSection = ({ id }: { id: string }) => {
  const repositoryName = 'WEK-Website';
  const getImageUrl = (imageName: string) => {
    return process.env.NODE_ENV === 'production' ? `/${repositoryName}/${imageName}` : `/${imageName}`;
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300 flex flex-col rounded-2xl relative">
              <div className="relative w-full h-64">
                <Image
                  src={getImageUrl(project.imageName)}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  {project.location}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolioSection;
