
import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Resources", href: "#important-links" },
  { label: "Batchmates", href: "#batchmates" },
  { label: "Clubs", href: "#clubs" },
  { label: "FAQs", href: "#faqs" },
  { label: "Gallery", href: "#gallery" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              GSV Freshers' Guide
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors
                  ${activeSection === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="ml-2"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeRTcJSaN4XZxJz0LJmiVK1HM2ltPQMpO6KEpjA3gCQoJhquA/viewform?usp=dialog",
                  "_blank"
                )
              }
            >
              Ask Question
            </Button>
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors
                  ${activeSection === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="w-full mt-2"
              onClick={() => {
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeRTcJSaN4XZxJz0LJmiVK1HM2ltPQMpO6KEpjA3gCQoJhquA/viewform?usp=dialog",
                  "_blank"
                );
                setMobileOpen(false);
              }}
            >
              Ask Question
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
