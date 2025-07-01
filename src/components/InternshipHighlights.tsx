
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InternshipHighlights = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Camera className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">
              GSV Gallery
            </h2>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Student Life
            </Badge>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Explore the vibrant life at GSV through our comprehensive gallery showcasing student experiences, events, and achievements
          </p>
          
          <Button 
            onClick={() => navigate("/internship-gallery")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Complete Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
