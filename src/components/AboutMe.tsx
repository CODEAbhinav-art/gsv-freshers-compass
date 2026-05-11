
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Heart, Users, Target, Code2, Camera, Star, User, Crown, Sparkles } from "lucide-react";

interface ContributorProps {
  name: string;
  subtitle: string;
  placeholder?: boolean;
}

const ContributorPill = ({ name, subtitle, placeholder = false }: ContributorProps) => (
  <div
    className={`group relative px-4 py-3 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
      placeholder
        ? "border-dashed border-amber-400/40 bg-amber-50/30 dark:bg-amber-900/10 hover:border-amber-400/60 hover:shadow-amber-200/20 dark:hover:shadow-amber-800/20"
        : "border-amber-400/50 bg-card hover:border-amber-400/80 hover:shadow-amber-200/30 dark:hover:shadow-amber-800/20"
    }`}
  >
    <p className={`font-medium text-sm ${placeholder ? "text-muted-foreground italic" : "text-foreground"}`}>
      {name}
    </p>
    <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
  </div>
);

const foundingBatch = [
  { name: "Abhinav Mishra", subtitle: "AI-DS'2028 · Creator" },
  { name: "Pratik Ranjan", subtitle: "ECE'2028 · UI-UX" },
  { name: "Ved Vyas", subtitle: "ME'2028 · Exam Papers" },
  { name: "Harivarun Bandi", subtitle: "ECE'2028 · Media" }
];

const presentContributors = [
  { name: "Rudransh Mishra", subtitle: "AI-DS'2029 · Chatbot/Clubs", placeholder: false },
  { name: "Your Name Here", subtitle: "Contribute to get featured", placeholder: true },
  { name: "Earn Your Place", subtitle: "Join the hall of contributors", placeholder: true },
];

export const AboutMe = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20" id="about-me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Hall of Contributors */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 dark:bg-amber-900/30 border border-amber-300/50 dark:border-amber-700/50 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Crown className="h-3.5 w-3.5" />
              Thanks!
            </div>
            <h2 className="text-3xl font-bold text-foreground">Hall of Contributors</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The people who built and maintain this platform for every fresher at GSV.
            </p>
          </div>

          {/* Founding Batch */}
          <Card className="relative overflow-hidden border-amber-400/50 dark:border-amber-600/40 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card">
            <div className="absolute inset-0 rounded-lg pointer-events-none animate-gold-shimmer" style={{
              background: "linear-gradient(120deg, transparent 30%, hsl(45 93% 60% / 0.06) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
            }} />
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40">
                  <Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Batch (2024–28)</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">Creators of GSV Freshers Compass</p>
                </div>
                <Badge className="ml-auto bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border border-amber-300/60 dark:border-amber-700/50 hover:bg-amber-100">
                  Starts
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {foundingBatch.map((c) => (
                  <ContributorPill key={c.name} name={c.name} subtitle={c.subtitle} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rising Contributors */}
          <Card className="border-amber-300/40 dark:border-amber-700/30 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                  <Sparkles className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">present Contributors (2025–29)</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">The current active seniors</p>
                </div>
                <Badge variant="outline" className="ml-auto border-amber-300/60 dark:border-amber-700/50 text-amber-600 dark:text-amber-400">
                  Contd.
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {presentContributors.map((c, i) => (
                  <ContributorPill key={i} name={c.name} subtitle={c.subtitle} placeholder={c.placeholder} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission & GitHub - 2 col */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <Card className="border-border/60 hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Purpose</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>• Centralized, one-stop resource platform for all first-year students.</p>
              <p>• Increase awareness of campus events, deadlines, and essential info.</p>
              <p>• Connect freshers with senior students for information and support.</p>
              <p>• Foster collaboration—this platform is a legacy passed between batches.</p>
              <div className="mt-4 p-3 bg-muted/40 rounded-lg text-xs text-muted-foreground">
                <strong className="text-foreground">Note:</strong> New Contributors for incoming batches begins in the second semester. Details will be announced in due course.
              </div>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card className="border-border/60 hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Open Source</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This project is open source. Contribute, report issues, or suggest improvements on GitHub.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✨ Open Source Project</p>
                <p>🔧 React & TypeScript</p>
                <p>🎨 Tailwind CSS</p>
              </div>
              <Button variant="default" className="w-full font-semibold" asChild>
                <a href="https://github.com/CODEAbhinav-art/gsv-freshers-compass.git" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
