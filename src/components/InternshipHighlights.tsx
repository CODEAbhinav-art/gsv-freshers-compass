
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const InternshipHighlights = () => {
  const navigate = useNavigate();
  const ref = useScrollReveal();

  return (
    <section className="py-24" id="gallery" ref={ref}>
      <div className="section-container">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              GSV Gallery
            </h2>
            <Badge>Student Life</Badge>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Explore the vibrant life at GSV through our gallery showcasing student experiences and achievements
          </p>
          <Button 
            onClick={() => navigate("/internship-gallery")} 
            size="lg" 
            className="mt-4 hover:scale-[1.02] transition-all duration-200"
          >
            View Complete Gallery
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
