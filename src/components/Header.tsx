
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/a13a77c8-c50f-4faa-9999-41f81deb1e39.png" 
              alt="GSV Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                GSV Freshers' Guide 2025
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeRTcJSaN4XZxJz0LJmiVK1HM2ltPQMpO6KEpjA3gCQoJhquA/viewform?usp=dialog', '_blank')}
            >
              Ask Question
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
