
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin } from "lucide-react";

export const QuickLinks = () => {
  const quickLinks = [
    {
      title: "Campus Life",
      description: "Clubs, events, and student activities",
      icon: Users,
      href: "#campus-life",
      color: "from-purple-400 to-purple-600",
      details: [
        "GSV has 9 different clubs providing opportunities for all types of interests",
        "NCC is 'expected' to start from this academic year",
        "Almost every week an event is organised by one of the clubs making college life more fun and interactive",
        "Competitive environment in a productive way",
        "A lot of greenery can be found in the college with rich flora and fauna"
      ]
    },
    {
      title: "Vadodara Guide",
      description: "City exploration and local amenities",
      icon: MapPin,
      href: "#city-guide",
      color: "from-orange-400 to-orange-600",
      details: [
        "Historical Facts: Vadodara was the capital of the former Baroda State and ruled by the Gaekwad dynasty",
        "Laxmi Vilas Palace - One of the most magnificent palaces in India, four times the size of Buckingham Palace",
        "Sayaji Baug - A beautiful garden with zoo, museum, and planetarium perfect for weekend visits",
        "EME Temple (Dakshinamurty Temple) - A unique temple entirely made of aluminum",
        "Kirti Mandir - Memorial dedicated to the Gaekwad family with beautiful architecture",
        "Vadodara Museum & Picture Gallery - Rich collection of art, sculptures, and artifacts"
      ]
    }
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const section = document.querySelector(`[data-section="${sectionId}"]`) || 
                   document.querySelector(href) ||
                   document.querySelector('#faq-sections');
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quick-links" className="py-16 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-foreground">
              Quick Access to Popular Sections
            </h2>
            <Badge className="bg-primary/20 text-primary border-primary/30 animate-pulse-soft">
              Upcoming
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jump directly to the information you need most as a new student at GSV
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {quickLinks.map((link, index) => (
            <Card 
              key={link.title} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 border-border bg-card/90 backdrop-blur-sm animate-fade-in-staggered"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => scrollToSection(link.href)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 bg-gradient-to-r ${link.color} rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {link.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {link.description}
                </CardDescription>
                
                <div className="space-y-2 mb-6">
                  {link.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex}
                      className="flex items-start space-x-2 text-sm text-foreground/80 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${detailIndex * 50}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${link.color} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
