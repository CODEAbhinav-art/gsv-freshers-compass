
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Home, Users, MapPin, Phone, Calendar } from "lucide-react";

export const QuickLinks = () => {
  const quickLinks = [
    {
      title: "Academic FAQs",
      description: "Course structure, syllabus, and academic queries",
      icon: BookOpen,
      href: "#academic-faqs",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Hostel Information",
      description: "Accommodation, mess, and living arrangements",
      icon: Home,
      href: "#hostel",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Campus Life",
      description: "Clubs, events, and student activities",
      icon: Users,
      href: "#campus-life",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Vadodara Guide",
      description: "City exploration and local amenities",
      icon: MapPin,
      href: "#city-guide",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Important Contacts",
      description: "Emergency numbers and key departments",
      icon: Phone,
      href: "#contact",
      color: "from-red-400 to-red-600"
    },
    {
      title: "Important Dates",
      description: "Academic calendar and deadlines",
      icon: Calendar,
      href: "#dates",
      color: "from-yellow-400 to-yellow-600"
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
    <section id="quick-links" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Quick Access to Popular Sections
            </h2>
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 animate-pulse-soft">
              Upcoming
            </Badge>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Jump directly to the information you need most as a new student at GSV
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Card 
              key={link.title} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 bg-white/80 backdrop-blur-sm animate-fade-in-staggered"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => scrollToSection(link.href)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 bg-gradient-to-r ${link.color} rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {link.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {link.description}
                </CardDescription>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
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
