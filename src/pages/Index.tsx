
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { MainNavigation } from "@/components/MainNavigation";
import { FeaturedSections } from "@/components/FeaturedSections";
import { FAQSections } from "@/components/FAQSections";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <Hero />
      <QuickLinks />
      <FeaturedSections />
      <FAQSections />
      <Footer />
    </div>
  );
};

export default Index;
