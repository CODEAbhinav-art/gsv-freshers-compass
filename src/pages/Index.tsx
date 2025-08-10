
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { Header } from "@/components/Header";
import { FAQSections } from "@/components/FAQSections";
import { ImportantLinks } from "@/components/ImportantLinks";
import { InternshipHighlights } from "@/components/InternshipHighlights";
import { BranchwiseMentors } from "@/components/BranchwiseMentors";
import { BatchmatesConnect } from "@/components/BatchmatesConnect";
import { AskQuestion } from "@/components/AskQuestion";
import { EntrepreneurSection } from "@/components/EntrepreneurSection";
import { Footer } from "@/components/Footer";
import { Watermark } from "@/components/Watermark";
import { SpaceBackground } from "@/components/SpaceBackground";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative">
      <SpaceBackground />
      <Header />
      <Hero />
      <QuickLinks />
      <ImportantLinks />
      <BatchmatesConnect />
      <EntrepreneurSection />
      <InternshipHighlights />
      <BranchwiseMentors />
      <FAQSections />
      <AskQuestion />
      
      {/* About GSV Freshers Compass Button */}
      <section className="py-8 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button
            onClick={() => navigate("/about")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/30"
            size="lg"
          >
            <Info className="h-5 w-5 mr-2" />
            About GSV Freshers Compass
          </Button>
        </div>
      </section>
      
      <Footer />
      <Watermark />
    </div>
  );
};

export default Index;
