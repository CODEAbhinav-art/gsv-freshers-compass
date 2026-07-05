import { useMemo, useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type SearchItem = {
  title: string;
  description: string;
  keywords: string[];
  action: { type: "scroll"; target: string } | { type: "navigate"; to: string };
};

const INDEX: SearchItem[] = [
  { title: "Hostel (Stanza) Location", description: "Find hostel location on maps", keywords: ["hostel", "stanza", "stay", "accommodation", "room", "pg"], action: { type: "scroll", target: "#important-links" } },
  { title: "Mess Menu Samples", description: "Sample mess menus", keywords: ["mess", "food", "menu", "dinner", "meal"], action: { type: "scroll", target: "#important-links" } },
  { title: "1st Year Exam Papers", description: "Previous year question papers", keywords: ["exam", "papers", "syllabus", "question", "pyq", "previous year"], action: { type: "scroll", target: "#important-links" } },
  { title: "Exam Preparation Guide", description: "Study tips and strategies", keywords: ["exam", "prep", "study", "syllabus", "preparation"], action: { type: "navigate", to: "/exam-preparation" } },
  { title: "Mechanical Engineering", description: "Branch resources and labs", keywords: ["mechanical", "mech", "labs", "branch", "engineering"], action: { type: "navigate", to: "/mechanical-engineering" } },
  { title: "Learning Resources", description: "Pre-college learning material", keywords: ["learning", "resources", "python", "java", "c++", "dsa", "coding", "web development"], action: { type: "navigate", to: "/learning-resources" } },
  { title: "Scholarship Documents", description: "Financial aid information", keywords: ["scholarship", "financial aid", "itr", "income", "fees", "money"], action: { type: "scroll", target: "#important-links" } },
  { title: "Hackathon Postings", description: "Coding competitions", keywords: ["hackathon", "competition", "coding", "devfolio", "hack2skill"], action: { type: "scroll", target: "#important-links" } },
  { title: "Jobs & Internships", description: "Latest opportunities", keywords: ["jobs", "internships", "intern", "career", "placement"], action: { type: "scroll", target: "#important-links" } },
  { title: "CGPA Calculator", description: "Calculate your CGPA", keywords: ["cgpa", "calculator", "grade", "marks", "gpa"], action: { type: "scroll", target: "#important-links" } },
  { title: "GSV Campus Tour", description: "Virtual campus tour", keywords: ["campus", "tour", "video", "labs", "buildings"], action: { type: "scroll", target: "#important-links" } },
  { title: "Future GSV Campus", description: "Upcoming campus vision", keywords: ["campus", "future", "construction", "new campus"], action: { type: "scroll", target: "#important-links" } },
  { title: "Branchwise Mentors", description: "Connect with senior mentors", keywords: ["mentors", "seniors", "branch", "guidance", "help"], action: { type: "navigate", to: "/branchwise-mentors" } },
  { title: "Clubs at GSV", description: "Student clubs and organizations", keywords: ["clubs", "societies", "activities", "campus life"], action: { type: "scroll", target: "#clubs" } },
  
  { title: "Aspiring Entrepreneurs", description: "Entrepreneurship resources & Hult Prize", keywords: ["entrepreneur", "startup", "hult", "business", "founder"], action: { type: "scroll", target: "#entrepreneur-section" } },
  { title: "GSV Gallery", description: "Student life photos", keywords: ["gallery", "photos", "images", "internship", "student life"], action: { type: "scroll", target: "#gallery" } },
  { title: "FAQs", description: "Frequently asked questions", keywords: ["faq", "questions", "help", "vadodara", "city"], action: { type: "scroll", target: "#faqs" } },
  { title: "About GSV Freshers Compass", description: "About this project", keywords: ["about", "team", "credits", "contributors"], action: { type: "navigate", to: "/about" } },
];

export const SiteSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return INDEX.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.keywords.some((k) => k.includes(q) || q.includes(k))
    );
  }, [query]);

  const handleSelect = (item: SearchItem) => {
    if (item.action.type === "navigate") {
      navigate(item.action.to);
    } else {
      document.querySelector(item.action.target)?.scrollIntoView({ behavior: "smooth" });
    }
    setQuery("");
  };

  return (
    <section className="pt-12 pb-4" id="site-search">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder='Search "Hostel", "Syllabus", "Labs"...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-12 h-14 text-base shadow-sm focus-visible:ring-primary/40 bg-background/80 backdrop-blur-sm"
              aria-label="Search the site"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {query.trim() && (
            <div className="mt-3 rounded-lg border bg-card shadow-md overflow-hidden">
              {results.length === 0 ? (
                <div className="px-5 py-8 text-center">
                  <p className="text-sm font-medium text-foreground">No results found</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Try keywords like "hostel", "syllabus", "labs", or "mentors".
                  </p>
                </div>
              ) : (
                <ul className="max-h-80 overflow-y-auto divide-y">
                  {results.map((item) => (
                    <li key={item.title}>
                      <Button
                        variant="ghost"
                        onClick={() => handleSelect(item)}
                        className="w-full h-auto justify-start rounded-none px-5 py-3 text-left"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                          <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 ml-3 shrink-0 text-muted-foreground" />
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
