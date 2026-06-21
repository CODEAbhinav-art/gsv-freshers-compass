
import { Helmet } from "react-helmet-async";
import { PageMeta } from "@/components/PageMeta";
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How many subjects are there in the first year?", acceptedAnswer: { "@type": "Answer", text: "First year typically has 8-10 subjects per semester including Mathematics, Physics, Chemistry, Basic Electrical Engineering, Engineering Drawing, and Communication Skills along with practical/lab sessions." } },
      { "@type": "Question", name: "What is the attendance requirement at GSV?", acceptedAnswer: { "@type": "Answer", text: "Minimum 75% attendance is mandatory for each subject; students below 75% may not be allowed to appear for end-semester exams. Medical leaves are considered separately with documentation." } },
      { "@type": "Question", name: "Can we change our branch after first year?", acceptedAnswer: { "@type": "Answer", text: "Branch change depends on vacant seats in the target branch and a 9+ CGPA, plus consistent attendance, notes, and PYQ practice from the start." } },
      { "@type": "Question", name: "What are the hostel facilities like?", acceptedAnswer: { "@type": "Answer", text: "Double-sharing AC rooms in Stanza hostels for males; for females, hostels are inside campus (Pahune)." } },
      { "@type": "Question", name: "What happens if a student fails an exam?", acceptedAnswer: { "@type": "Answer", text: "Step 1 is a supplementary exam the following month; failing again leads to a semester back. The course must be cleared within a maximum number of attempts as per UGC guidelines." } },
    ],
  };

  return (
    <div className="min-h-screen bg-background relative">
      <PageMeta
        title="GSV Freshers Compass — Guide for Gati Shakti Vishwavidyalaya Students"
        description="Student-built guide for GSV freshers: mentors, exam prep, branch guides, clubs, scholarships and senior insights."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
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
