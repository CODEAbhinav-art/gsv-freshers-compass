import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, FileText, NotebookPen, Youtube } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getBranchResources, type ResourceLink } from "@/lib/branchResources";
import { branchLabel } from "@/lib/wisdomConstants";

const SECTION_META: Record<string, { title: string; icon: typeof FileText; key: "pyqs" | "notes" | "youtube" }> = {
  pyqs: { title: "PYQ Papers", icon: FileText, key: "pyqs" },
  notes: { title: "Notes & Resources", icon: NotebookPen, key: "notes" },
  youtube: { title: "YouTube Channels", icon: Youtube, key: "youtube" },
};

const BranchResourceSection = () => {
  const { branch = "general", section = "pyqs" } = useParams();
  const meta = SECTION_META[section];
  if (!meta) return <Navigate to="/branch-survival" replace />;

  const bundle = getBranchResources(branch);
  const items: ResourceLink[] = bundle[meta.key];
  const Icon = meta.icon;

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />
      <main className="section-container py-10">
        <Link to={`/branch-survival?branch=${branch}`} className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to {branchLabel(branch)} guide
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{meta.title}</h1>
            <Badge variant="secondary" className="text-xs mt-1">{branchLabel(branch)}</Badge>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-border p-12 text-center">
            <p className="text-sm text-muted-foreground">
              No links curated yet for this section. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {items.map((r, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-medium text-foreground">{r.label}</div>
                    {r.note && <div className="text-xs text-muted-foreground mt-0.5">{r.note}</div>}
                  </div>
                  <Button asChild size="sm" variant="outline" className="shrink-0">
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      Open <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BranchResourceSection;
