import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, NotebookPen, Youtube, Trophy } from "lucide-react";
import { getBranchResources, type ResourceLink } from "@/lib/branchResources";
import { branchLabel } from "@/lib/wisdomConstants";

const LinkList = ({ items, emptyHint }: { items: ResourceLink[]; emptyHint: string }) => {
  if (!items.length) {
    return (
      <p className="text-sm text-muted-foreground italic">
        {emptyHint} — share via the “Share a tip” button above to help juniors.
      </p>
    );
  }
  return (
    <ul className="space-y-2">
      {items.map((r, i) => (
        <li key={i} className="flex items-start justify-between gap-3 rounded-md border border-border/60 bg-background/40 px-3 py-2">
          <div className="min-w-0">
            <div className="text-sm font-medium text-foreground truncate">{r.label}</div>
            {r.note && <div className="text-xs text-muted-foreground">{r.note}</div>}
          </div>
          <Button asChild size="sm" variant="outline" className="h-8 shrink-0">
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              Open <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
};

interface Props {
  branch: string;
}

export const ResourceCorner = ({ branch }: Props) => {
  // Show "general" bundle when "all" is selected.
  const effectiveBranch = branch === "all" ? "general" : branch;
  const { pyqs, notes, youtube } = getBranchResources(effectiveBranch);
  const isAiDs = effectiveBranch === "ai-ds";

  return (
    <section className="mb-10 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Resource Corner</h2>
        <Badge variant="secondary" className="text-xs">{branchLabel(effectiveBranch)}</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" /> PYQ Papers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LinkList items={pyqs} emptyHint="No PYQ papers curated yet" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <NotebookPen className="h-4 w-4 text-primary" /> Notes &amp; Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LinkList items={notes} emptyHint="No notes shared yet" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Youtube className="h-4 w-4 text-primary" /> YouTube Channels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LinkList items={youtube} emptyHint="No channels recommended yet" />
          </CardContent>
        </Card>
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
              Live leaderboard from TLE Eliminators tracking GSV's top competitive programmers.
            </p>
            <div className="rounded-lg overflow-hidden border bg-background">
              <iframe
                src="https://www.tle-eliminators.com/cp-sheet/leaderboard"
                title="GSV CP Leaderboard"
                loading="lazy"
                className="w-full h-[600px]"
              />
            </div>
            <Button asChild variant="outline" size="sm">
              <a
                href="https://www.tle-eliminators.com/cp-sheet/leaderboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open full leaderboard <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  );
};
