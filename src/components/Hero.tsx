
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import campusBg from "@/assets/gsv-campus.jpg";

export const Hero = () => {
  const scrollToResources = () => {
    document.querySelector("#important-links")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToQuickLinks = () => {
    document.querySelector("#quick-links")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${campusBg})` }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/70" />

      {/* Subtle animated glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 animate-pulse opacity-40" style={{ animationDuration: '8s' }} />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white/90 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Freshers 2025 — Your onboarding starts here
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white drop-shadow-lg">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
              Gati Shakti Vishwavidyalaya
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Everything you need to know about admissions, campus life, academics, and more — 
            curated by current students to help you settle in smoothly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
              onClick={scrollToResources}
            >
              Start Here
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 hover:scale-[1.02] transition-all duration-200 border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={scrollToQuickLinks}
            >
              Explore Sections
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
