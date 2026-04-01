
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const InternshipHighlights = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20" id="gallery">
      <div className="section-container">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              GSV Gallery
            </h2>
            <Badge>Student Life</Badge>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore the vibrant life at GSV through our gallery showcasing student experiences and achievements
          </p>
          <Button onClick={() => navigate("/internship-gallery")} size="lg" className="mt-4">
            View Complete Gallery
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
