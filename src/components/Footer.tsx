
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { VisitorCount } from "./VisitorCount";

export const Footer = () => {
  const handleNewsletterSignup = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeRTcJSaN4XZxJz0LJmiVK1HM2ltPQMpO6KEpjA3gCQoJhquA/viewform?usp=dialog', '_blank');
  };

  return (
    <footer className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">GSV Freshers' Guide</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your comprehensive resource for starting your journey at Gati Shakti Vishwavidyalaya. 
              Created by students, for students.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/school/gatishaktivishwavidyalaya/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#academic-faqs" className="text-muted-foreground hover:text-foreground">Academic FAQs</a></li>
              <li><a href="#non-academic-faqs" className="text-muted-foreground hover:text-foreground">Campus Life FAQs</a></li>
              <li><a href="#internship-faqs" className="text-muted-foreground hover:text-foreground">Internship FAQs</a></li>
              <li><a href="#placements-careers" className="text-muted-foreground hover:text-foreground">Placements & Careers</a></li>
              <li><a href="#hostel" className="text-muted-foreground hover:text-foreground">Hostel Information</a></li>
              <li><a href="#city-guide" className="text-muted-foreground hover:text-foreground">Vadodara Guide</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get the latest updates and announcements for freshers.
            </p>
            <div className="space-y-2">
              <Button 
                onClick={handleNewsletterSignup}
                className="w-full" 
                size="sm"
              >
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <VisitorCount />
            <p className="text-sm text-muted-foreground text-center">
              © 2024 GSV Freshers' Guide. Created with ❤️ for new students at Gati Shakti Vishwavidyalaya.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
