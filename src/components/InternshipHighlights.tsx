import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InternshipHighlights = () => {
  const navigate = useNavigate();

  const internshipImages = [
    {
      src: "/lovable-uploads/b79b4825-f392-4aee-a3b3-1fbc66e8114a.png",
      alt: "GSV students at Container Corporation internship",
      title: "Corporate Internships",
      description: "Students gaining real-world experience at leading companies"
    },
    {
      src: "/lovable-uploads/610c4917-176a-40b6-ad03-4f6947297627.png",
      alt: "GSV students at educational visit",
      title: "Educational Visits",
      description: "Learning through field visits and practical exposure"
    },
    {
      src: "/lovable-uploads/63d365f7-0af5-49aa-84f5-e2b1b19b35ef.png",
      alt: "GSV students in institutional meeting",
      title: "Institutional Partnerships",
      description: "Building connections with industry and academic institutions"
    },
    {
      src: "/lovable-uploads/2f7f226d-0534-4a28-9bfd-d531fa6c3195.png",
      alt: "GSV students at Railway Manager office",
      title: "Government Sector Exposure",
      description: "Exploring opportunities in public sector organizations"
    },
    {
      src: "/lovable-uploads/4514667e-36a7-4bdf-81fa-a22cb2bc26d3.png",
      alt: "GSV students in professional setting",
      title: "Professional Development",
      description: "Developing industry-ready skills and professional etiquette"
    },
    {
      src: "/lovable-uploads/8afc2dda-6153-40b1-85e3-61f3ad35ac4a.png",
      alt: "GSV student operating train controls",
      title: "Hands-on Training",
      description: "Practical experience with real-world equipment and systems"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200/20 rounded-full animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-gray-900">
              1st Year GSV Internship Highlights
            </h2>
            <Badge className="bg-green-100 text-green-800 border-green-200 animate-pulse-soft">
              Success Stories
            </Badge>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover how GSV students excel in internships and build successful careers
          </p>
          
          {/* View Gallery Button */}
          <div className="mt-6">
            <Button 
              onClick={() => navigate("/internship-gallery")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <Eye className="h-4 w-4 mr-2" />
              View Complete Gallery
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipImages.map((image, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-staggered overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {image.title}
                </CardTitle>
                <CardDescription className="text-sm group-hover:text-gray-800 transition-colors duration-300">
                  {image.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-delayed-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join GSV and be part of the next generation of successful tech professionals
            </p>
            <div className="flex justify-center">
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                Admissions open for 2025-2026
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
