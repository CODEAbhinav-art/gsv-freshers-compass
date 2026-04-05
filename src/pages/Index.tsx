
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { Header } from "@/components/Header";
import { FAQSections } from "@/components/FAQSections";
import { ImportantLinks } from "@/components/ImportantLinks";
import { InternshipHighlights } from "@/components/InternshipHighlights";
import { BranchwiseMentors } from "@/components/BranchwiseMentors";
import { ClubsAtGSV } from "@/components/ClubsAtGSV";
import { BatchmatesConnect } from "@/components/BatchmatesConnect";
import { EntrepreneurSection } from "@/components/EntrepreneurSection";
import { Footer } from "@/components/Footer";
import { Watermark } from "@/components/Watermark";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background/90 relative" style={{ zIndex: 1 }}>
      <AnimatedBackground />
      <Header />
      <Hero />
      <QuickLinks />
      <ImportantLinks />
      <BatchmatesConnect />
      <EntrepreneurSection />
      <InternshipHighlights />
      <BranchwiseMentors />
      <ClubsAtGSV />
      <FAQSections />

      {/* About */}
      <section className="py-24">
        <div className="section-container text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/about")}
            className="hover:scale-[1.02] transition-all duration-200"
          >
            <Info className="h-4 w-4 mr-2" />
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
