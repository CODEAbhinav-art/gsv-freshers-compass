
import { Button } from "@/components/ui/button";
import { GraduationCap, Linkedin } from "lucide-react";
import { VisitorCount } from "./VisitorCount";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/20 dark:bg-secondary/5 py-14">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shadow-sm">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="font-semibold text-foreground">GSV Freshers' Guide</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your comprehensive resource for starting your journey at Gati Shakti Vishwavidyalaya. Created by students, for students.
            </p>
            <Button variant="outline" size="icon" className="h-8 w-8" asChild>
              <a href="https://www.linkedin.com/school/gatishaktivishwavidyalaya/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div>
            <p className="font-medium text-foreground mb-4 text-sm">Quick Links</p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Academic FAQs", "#faqs"],
                ["Campus Life", "#clubs"],
                ["Resources", "#important-links"],
                ["Batchmates", "#batchmates"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-muted-foreground hover:text-foreground transition-colors duration-200">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-foreground mb-4 text-sm">Stay Updated</p>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get the latest updates and announcements.
            </p>
            <Button
              size="sm"
              className="w-full hover:scale-[1.02] transition-all duration-200"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeRTcJSaN4XZxJz0LJmiVK1HM2ltPQMpO6KEpjA3gCQoJhquA/viewform?usp=dialog', '_blank')}
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col items-center gap-3">
          <VisitorCount />
          <p className="text-xs text-muted-foreground">By the GSVians, For the GSVians</p>
        </div>
      </div>
    </footer>
  );
};
