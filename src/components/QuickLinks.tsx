
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, Users, MapPin, Phone, Calendar } from "lucide-react";

export const QuickLinks = () => {
  const quickLinks = [
    {
      title: "Academic FAQs",
      description: "Course structure, syllabus, and academic queries",
      icon: BookOpen,
      href: "#academic-faqs",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Hostel Information",
      description: "Accommodation, mess, and living arrangements",
      icon: Home,
      href: "#hostel",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Campus Life",
      description: "Clubs, events, and student activities",
      icon: Users,
      href: "#campus-life",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Vadodara Guide",
      description: "City exploration and local amenities",
      icon: MapPin,
      href: "#city-guide",
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Important Contacts",
      description: "Emergency numbers and key departments",
      icon: Phone,
      href: "#contact",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Important Dates",
      description: "Academic calendar and deadlines",
      icon: Calendar,
      href: "#dates",
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Quick Access to Popular Sections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jump directly to the information you need most as a new student at GSV
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <Card key={link.title} className={`${link.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm">
                  {link.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={link.href}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
