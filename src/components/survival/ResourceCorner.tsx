import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, FileText, NotebookPen, Youtube, Trophy, Copy } from "lucide-react";
import { getBranchResources } from "@/lib/branchResources";
import { branchLabel } from "@/lib/wisdomConstants";
import { toast } from "sonner";

interface Props {
  branch: string;
}

const SEARCH_TEXT = "Gati Shakti Vishwavidyalaya";

export const ResourceCorner = ({ branch }: Props) => {
  const effectiveBranch = branch === "all" ? "general" : branch;
  const { pyqs, notes, youtube } = getBranchResources(effectiveBranch);
  const isAiDs = effectiveBranch === "ai-ds";

  const sections = [
    { key: "pyqs", title: "PYQ Papers", icon: FileText, count: pyqs.length },
    { key: "notes", title: "Notes & Resources", icon: NotebookPen, count: notes.length },
    { key: "youtube", title: "YouTube Channels", icon: Youtube, count: youtube.length },
  ] as const;

  const copySearch = async () => {
    try {
      await navigator.clipboard.writeText(SEARCH_TEXT);
      toast.success("Copied — paste it in the leaderboard search box");
    } catch {
      toast.error("Couldn't copy. Please copy manually.");
    }
  };

  return (
    <section className="mb-10 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Resource Corner</h2>
        <Badge variant="secondary" className="text-xs">{branchLabel(effectiveBranch)}</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {sections.map(({ key, title, icon: Icon, count }) => (
          <Card key={key} className="hover:border-primary/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" /> {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {count > 0 ? `${count} curated link${count === 1 ? "" : "s"}` : "Coming soon"}
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to={`/branch-guides/${effectiveBranch}/${key}`}>
                  Open <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {isAiDs && (
        <Card className="border-primary/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" /> Top Competitive Programmers of GSV
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Live leaderboard from TLE Eliminators. Open it and search for{" "}
              <span className="font-medium text-foreground">"{SEARCH_TEXT}"</span> to see the GSV programmers list.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm">
                <a href="https://www.tle-eliminators.com/cp-sheet/leaderboard" target="_blank" rel="noopener noreferrer">
                  Open leaderboard <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              </Button>
              <Button variant="outline" size="sm" onClick={copySearch}>
                <Copy className="h-3.5 w-3.5 mr-1" /> Copy "{SEARCH_TEXT}"
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};
