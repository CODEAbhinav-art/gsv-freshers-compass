
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Welcome to{" "}
              <span className="text-primary">Gati Shakti Vishwavidyalaya!</span>
              <br />
              <span className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                Your Journey Begins Here
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Your comprehensive guide to starting your academic journey at GSV, Vadodara. 
              Find everything you need to know about admissions, campus life, academics, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Explore the Fresher's Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Virtual Campus Tour
              </Button>
            </div>

            {/* Welcome Message */}
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">Message from Current Students</p>
              <blockquote className="text-base text-foreground italic">
                "Starting college can feel overwhelming, but you're not alone! We've created this guide 
                to help you settle in smoothly. Welcome to the GSV family – you're going to love it here!"
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">- Student Representatives, GSV</p>
            </div>
          </div>

          {/* Image/Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="GSV Campus View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">GSV Campus</h3>
                <p className="text-sm opacity-90">Your new home away from home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
