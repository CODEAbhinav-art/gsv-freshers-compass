
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToQuickLinks = () => {
    const quickLinksSection = document.querySelector('#quick-links');
    quickLinksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-500/10 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-500/10 rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 animate-pulse-soft">
              <Sparkles className="h-4 w-4 text-primary animate-spin-slow" />
              <span className="text-sm font-medium text-primary">Freshers 2025</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Welcome to{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-gradient">
                Gati Shakti Vishwavidyalaya!
              </span>
              <br />
              <span className="text-2xl lg:text-3xl font-medium text-muted-foreground animate-fade-in-delayed">
                Your Journey Begins Here
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-delayed-2">
              Your comprehensive guide to starting your academic journey at GSV, Vadodara. 
              Find everything you need to know about admissions, campus life, academics, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed-3">
              <Button 
                size="lg" 
                className="text-lg px-8 group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={scrollToQuickLinks}
              >
                Explore the Fresher's Guide
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Welcome Message */}
            <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-delayed-4 hover:scale-[1.02]">
              <p className="text-sm text-muted-foreground mb-2">Message from Current Students</p>
              <blockquote className="text-base text-foreground italic">
                "Starting college can feel overwhelming, but you're not alone! We've created this guide 
                to help you settle in smoothly. Welcome to the GSV family – you're going to love it here!"
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">- Student Representatives, GSV</p>
            </div>
          </div>

          {/* Image/Video */}
          <div className="relative animate-slide-up-delayed">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img 
                src="https://i.ytimg.com/vi/O9JHRjcw1kE/maxresdefault.jpg"
                alt="GSV Campus View"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white animate-fade-in-delayed-5">
                <h3 className="text-xl font-semibold">GSV Campus</h3>
                <p className="text-sm opacity-90">Your new home away from home</p>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
