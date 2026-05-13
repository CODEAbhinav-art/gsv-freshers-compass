import { Link } from "react-router-dom";
import { Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BRANCHES } from "@/lib/wisdomConstants";

export const BranchSurvivalPreview = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20" id="branch-survival" ref={ref}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Branch Guides</h2>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link to="/branch-survival">Open guides <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BRANCHES.filter((b) => b.value !== "general").slice(0, 8).map((b) => (
            <Link
              key={b.value}
              to={`/branch-survival?branch=${b.value}`}
              className="rounded-lg border border-border/60 bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-medium text-foreground">{b.label}</p>
              <p className="text-xs text-muted-foreground mt-1">Sem plan · electives · profs · tips</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
