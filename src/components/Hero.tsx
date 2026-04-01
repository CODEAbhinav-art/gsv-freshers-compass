
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToResources = () => {
    document.querySelector("#important-links")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToQuickLinks = () => {
    document.querySelector("#quick-links")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-secondary/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Freshers 2025 — Your onboarding starts here
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Welcome to{" "}
            <span className="text-primary">
              Gati Shakti Vishwavidyalaya
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about admissions, campus life, academics, and more — 
            curated by current students to help you settle in smoothly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-md hover:shadow-lg transition-shadow"
              onClick={scrollToResources}
            >
              Start Here
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12"
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
