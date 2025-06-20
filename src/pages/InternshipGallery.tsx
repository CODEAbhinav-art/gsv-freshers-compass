
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InternshipGallery = () => {
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
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold text-gray-900">
                1st Year GSV Internship Gallery
              </h1>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                Success Stories
              </Badge>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore the complete collection of GSV student internship experiences and achievements
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipImages.map((image, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {image.title}
                </CardTitle>
                <CardDescription className="text-base group-hover:text-gray-800 transition-colors duration-300">
                  {image.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipGallery;
