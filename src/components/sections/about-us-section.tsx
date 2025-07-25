
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, ShieldCheck, Award, Users } from 'lucide-react';

const aboutData = [
  {
    icon: <Target className="h-10 w-10 text-primary mb-4" />,
    title: "Our Mission",
    description: "To deliver high-quality construction projects with integrity, innovation, and a commitment to client satisfaction, ensuring lasting value for our communities.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary mb-4" />,
    title: "Our Values",
    description: "We operate on principles of Safety, Quality, Teamwork, and Transparency, fostering trust and collaboration in every project we undertake.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary mb-4" />,
    title: "Our Experience",
    description: "With over 20 years of industry excellence, WEK Build has a proven track record of successfully completing diverse and complex construction projects.",
  },
];

const AboutUsSection = ({ id }: { id: string }) => {
  return (
    <section 
      id={id} 
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-8 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">About WEK Build</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our dedication to excellence and the principles that guide our work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {aboutData.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300 rounded-2xl relative">
              <CardHeader>
                <div className="flex justify-center">{item.icon}</div>
                <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl">
             <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-4">Our Team</h3>
            <p className="text-muted-foreground">
              Our strength lies in our experienced and dedicated team of professionals. From skilled craftsmen to expert project managers, every member of WEK Build is committed to upholding the highest standards of workmanship and customer service. We believe in continuous learning and development, ensuring our team is equipped with the latest industry knowledge and techniques to tackle any challenge.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
