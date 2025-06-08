
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { MainNavigation } from "@/components/MainNavigation";
import { FeaturedSections } from "@/components/FeaturedSections";
import { FAQSections } from "@/components/FAQSections";
import { AskQuestion } from "@/components/AskQuestion";
import { CommunityForum } from "@/components/CommunityForum";
import { Footer } from "@/components/Footer";
import { SpaceBackground } from "@/components/SpaceBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SpaceBackground />
      <MainNavigation />
      <Hero />
      <QuickLinks />
      <FeaturedSections />
      <FAQSections />
      <CommunityForum />
      <AskQuestion />
      <Footer />
    </div>
  );
};

export default Index;
