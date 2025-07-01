
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InternshipGallery = () => {
  const navigate = useNavigate();

  const galleryImages = [
    {
      src: "/lovable-uploads/b79b4825-f392-4aee-a3b3-1fbc66e8114a.png",
      alt: "GSV students at Container Corporation internship",
      title: "Corporate Internships"
    },
    {
      src: "/lovable-uploads/610c4917-176a-40b6-ad03-4f6947297627.png",
      alt: "GSV students at educational visit",
      title: "Educational Visits"
    },
    {
      src: "/lovable-uploads/63d365f7-0af5-49aa-84f5-e2b1b19b35ef.png",
      alt: "GSV students in institutional meeting",
      title: "Institutional Partnerships"
    },
    {
      src: "/lovable-uploads/2f7f226d-0534-4a28-9bfd-d531fa6c3195.png",
      alt: "GSV students at Railway Manager office",
      title: "Government Sector Exposure"
    },
    {
      src: "/lovable-uploads/4514667e-36a7-4bdf-81fa-a22cb2bc26d3.png",
      alt: "GSV students in professional setting",
      title: "Professional Development"
    },
    {
      src: "/lovable-uploads/8afc2dda-6153-40b1-85e3-61f3ad35ac4a.png",
      alt: "GSV student operating train controls",
      title: "Hands-on Training"
    },
    {
      src: "/lovable-uploads/111a24c2-1a22-4c39-a577-a518ae04f0cb.png",
      alt: "GSV Gallery Image 7",
      title: "GSV Campus Life"
    },
    {
      src: "/lovable-uploads/a13a77c8-c50f-4faa-9999-41f81deb1e39.png",
      alt: "GSV Gallery Image 8",
      title: "GSV Activities"
    },
    {
      src: "/lovable-uploads/1341f937-b14d-4ce8-8756-0256f09bdb62.png",
      alt: "GSV Hostel Room",
      title: "Hostel Facilities"
    },
    {
      src: "/lovable-uploads/d35a5ebb-07c0-40a3-be4a-d573c69cea1e.png",
      alt: "GSV Student Room",
      title: "Student Accommodation"
    },
    {
      src: "/lovable-uploads/cdf2a544-c449-4754-83be-c88723d756cd.png",
      alt: "GSV Hostel Room Interior",
      title: "Room Interior"
    },
    {
      src: "/lovable-uploads/b0d634ca-0614-4476-93be-6574db19f1a7.png",
      alt: "GSV Classroom",
      title: "Academic Facilities"
    },
    {
      src: "/lovable-uploads/a8e2cc43-4eac-4b75-b58e-8b4e8148cac1.png",
      alt: "GSV Campus Building",
      title: "Campus Infrastructure"
    },
    {
      src: "/lovable-uploads/f315d192-34ef-4c9b-b8bb-9eac5d126f64.png",
      alt: "GSV Building at Night",
      title: "Campus Night View"
    },
    {
      src: "/lovable-uploads/34a026ad-682d-45ce-8c20-508ab9361cef.png",
      alt: "GSV Dining Hall",
      title: "Dining Facilities"
    },
    {
      src: "/lovable-uploads/38d45a2b-c01d-433a-ab30-21b59ec3fcb2.png",
      alt: "GSV Study Hall",
      title: "Study Areas"
    },
    {
      src: "/lovable-uploads/fa3c41d4-2b24-47b9-b47f-05d33653dddc.png",
      alt: "GSV Main Building Interior",
      title: "Main Building"
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
                GSV Gallery
              </h1>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                Student Life
              </Badge>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore the complete collection of GSV student experiences and campus life
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
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
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipGallery;
