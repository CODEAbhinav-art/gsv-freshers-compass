
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { Header } from "@/components/Header";
import { FAQSections } from "@/components/FAQSections";
import { ImportantLinks } from "@/components/ImportantLinks";
import { InternshipHighlights } from "@/components/InternshipHighlights";
import { BranchwiseMentors } from "@/components/BranchwiseMentors";
import { AskQuestion } from "@/components/AskQuestion";
import { CommunityForum } from "@/components/CommunityForum";
import { Footer } from "@/components/Footer";
import { Watermark } from "@/components/Watermark";
import { SpaceBackground } from "@/components/SpaceBackground";
import { LastUpdated } from "@/components/LastUpdated";
import { FeaturedSections } from "@/components/FeaturedSections";
import { UpdateSummary } from "@/components/UpdateSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SpaceBackground />
      <LastUpdated />
      <Header />
      <Hero />
      <QuickLinks />
      <FeaturedSections />
      <ImportantLinks />
      <InternshipHighlights />
      <BranchwiseMentors />
      <FAQSections />
      <CommunityForum />
      <AskQuestion />
      <UpdateSummary />
      <Footer />
      <Watermark />
    </div>
  );
};

export default Index;
