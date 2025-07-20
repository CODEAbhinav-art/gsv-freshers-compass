
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Library } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InternshipGallery = () => {
  const navigate = useNavigate();

  const galleryImages = [
    {
      src: "/lovable-uploads/b79b4825-f392-4aee-a3b3-1fbc66e8114a.png",
      alt: "GSV Gallery Image 1"
    },
    {
      src: "/lovable-uploads/610c4917-176a-40b6-ad03-4f6947297627.png",
      alt: "GSV Gallery Image 2"
    },
    {
      src: "/lovable-uploads/63d365f7-0af5-49aa-84f5-e2b1b19b35ef.png",
      alt: "GSV Gallery Image 3"
    },
    {
      src: "/lovable-uploads/2f7f226d-0534-4a28-9bfd-d531fa6c3195.png",
      alt: "GSV Gallery Image 4"
    },
    {
      src: "/lovable-uploads/4514667e-36a7-4bdf-81fa-a22cb2bc26d3.png",
      alt: "GSV Gallery Image 5"
    },
    {
      src: "/lovable-uploads/8afc2dda-6153-40b1-85e3-61f3ad35ac4a.png",
      alt: "GSV Gallery Image 6"
    },
    {
      src: "/lovable-uploads/111a24c2-1a22-4c39-a577-a518ae04f0cb.png",
      alt: "GSV Gallery Image 7"
    },
    {
      src: "/lovable-uploads/a13a77c8-c50f-4faa-9999-41f81deb1e39.png",
      alt: "GSV Gallery Image 8"
    },
    {
      src: "/lovable-uploads/1341f937-b14d-4ce8-8756-0256f09bdb62.png",
      alt: "GSV Gallery Image 9"
    },
    {
      src: "/lovable-uploads/d35a5ebb-07c0-40a3-be4a-d573c69cea1e.png",
      alt: "GSV Gallery Image 10"
    },
    {
      src: "/lovable-uploads/cdf2a544-c449-4754-83be-c88723d756cd.png",
      alt: "GSV Gallery Image 11"
    },
    {
      src: "/lovable-uploads/b0d634ca-0614-4476-93be-6574db19f1a7.png",
      alt: "GSV Gallery Image 12"
    },
    {
      src: "/lovable-uploads/a8e2cc43-4eac-4b75-b58e-8b4e8148cac1.png",
      alt: "GSV Gallery Image 13"
    },
    {
      src: "/lovable-uploads/f315d192-34ef-4c9b-b8bb-9eac5d126f64.png",
      alt: "GSV Gallery Image 14"
    },
    {
      src: "/lovable-uploads/34a026ad-682d-45ce-8c20-508ab9361cef.png",
      alt: "GSV Gallery Image 15"
    },
    {
      src: "/lovable-uploads/38d45a2b-c01d-433a-ab30-21b59ec3fcb2.png",
      alt: "GSV Gallery Image 16"
    },
    {
      src: "/lovable-uploads/fa3c41d4-2b24-47b9-b47f-05d33653dddc.png",
      alt: "GSV Gallery Image 17"
    },
    {
      src: "/lovable-uploads/4c6a1dd5-e537-43a4-9239-0a37fea300d4.png",
      alt: "GSV Gallery Image 18"
    },
    {
      src: "/lovable-uploads/247604b7-8bf9-42be-8675-29969faa2494.png",
      alt: "GSV Gallery Image 19"
    },
    {
      src: "/lovable-uploads/484ceef2-1703-4dca-885e-9257f00995ab.png",
      alt: "GSV Gallery Image 20"
    },
    {
      src: "/lovable-uploads/55651ea7-c292-4933-9a8b-c191d77a7c8d.png",
      alt: "GSV Gallery Image 21"
    },
    {
      src: "/lovable-uploads/800ef7a3-5807-4aad-b670-d2ea73736642.png",
      alt: "GSV Campus Building - NAIR"
    },
    {
      src: "/lovable-uploads/139e1092-be98-43ad-aeff-8de2fe5618e8.png",
      alt: "GSV Students Team Building Activity"
    },
    {
      src: "/lovable-uploads/e8098d54-8324-41ae-9fb1-79137c78f3e6.png",
      alt: "GSV Students Yoga Session"
    },
    {
      src: "/lovable-uploads/3c3ef71f-1dab-4c7f-89ff-b3c7e3aab67e.png",
      alt: "GSV Palace Night View with Reflection"
    },
    {
      src: "/lovable-uploads/9c6315b7-b364-494a-9708-ce80c883cf5e.png",
      alt: "GSV Indoor Sports - Badminton Court"
    },
    {
      src: "/lovable-uploads/653e28bd-5874-4f35-8686-e5b0b06ef471.png",
      alt: "GSV Campus Night View with Fireworks"
    },
    {
      src: "/lovable-uploads/2af31233-846b-451f-8ea6-ce1856583d3e.png",
      alt: "GSV Indoor Facilities - Staircase"
    },
    {
      src: "/lovable-uploads/b7aebffa-9f91-4f9d-b476-777564f3aa12.png",
      alt: "GSV Campus Main Building Evening View"
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
              <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                Updated
              </Badge>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
              Explore the complete collection of GSV student experiences and campus life
            </p>
            <p className="text-sm text-gray-600 mb-8">
              Credits: Pratik Ranjan, Harivarun Bandi
            </p>
            
            <Button 
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-2 border-blue-300"
            >
              <a 
                href="https://drive.google.com/file/d/14cBowpc0CfHL_9b01fNgqZhl4RYbLiWp/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Library className="mr-2 h-5 w-5" />
                GSV Library
              </a>
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              Credits: Harivarun Bandi (ECE-II)
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipGallery;
