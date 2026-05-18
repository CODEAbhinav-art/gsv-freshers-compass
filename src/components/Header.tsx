
import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Moon, Sun, Bot, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

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
  const { theme, toggleTheme } = useTheme();

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground shadow-sm">
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
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                  ${activeSection === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              className="ml-1 h-9 w-9"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button asChild size="sm" variant="outline" className="ml-2">
              <Link to="/chat">
                <Bot className="h-4 w-4" />
                GSV Chat Bot
              </Link>
            </Button>
            <Button
              size="sm"
              className="ml-2 shadow-sm"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeRTcJSaN4XZxJz0LJmiVK1HM2ltPQMpO6KEpjA3gCQoJhquA/viewform?usp=dialog",
                  "_blank"
                )
              }
            >
              Ask Question
            </Button>
            <Button asChild size="sm" variant="ghost" className="ml-1 text-muted-foreground hover:text-foreground" title="Admin Dashboard">
              <Link to="/admin">
                <Shield className="h-4 w-4" />
                Admin
              </Link>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-1 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-fade-up">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors
                  ${activeSection === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
              >
                {link.label}
              </button>
            ))}
            <Button asChild size="sm" variant="outline" className="w-full mt-2">
              <Link to="/chat" onClick={() => setMobileOpen(false)}>
                <Bot className="h-4 w-4" />
                GSV Chat Bot
              </Link>
            </Button>
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
            <Button asChild size="sm" variant="ghost" className="w-full mt-2 text-muted-foreground">
              <Link to="/admin" onClick={() => setMobileOpen(false)}>
                <Shield className="h-4 w-4" />
                Admin Dashboard
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
