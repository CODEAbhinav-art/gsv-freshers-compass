
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { Header } from "@/components/Header";
import { FAQSections } from "@/components/FAQSections";
import { ImportantLinks } from "@/components/ImportantLinks";
import { InternshipHighlights } from "@/components/InternshipHighlights";
import { BranchwiseMentors } from "@/components/BranchwiseMentors";
import { ClubsAtGSV } from "@/components/ClubsAtGSV";
import { BatchmatesConnect } from "@/components/BatchmatesConnect";
import { SeniorWisdomPreview } from "@/components/SeniorWisdomPreview";
import { BranchSurvivalPreview } from "@/components/BranchSurvivalPreview";
import { EntrepreneurSection } from "@/components/EntrepreneurSection";
import { Footer } from "@/components/Footer";
import { Watermark } from "@/components/Watermark";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SiteSearch } from "@/components/SiteSearch";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <SiteSearch />
      <QuickLinks />
      <ImportantLinks />
      <SeniorWisdomPreview />
      <BranchSurvivalPreview />
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
