import { Link } from "react-router-dom";
import { Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WisdomCard, useApprovedWisdom } from "@/components/wisdom/WisdomShared";

export const SeniorWisdomPreview = () => {
  const ref = useScrollReveal();
  const { posts, loading } = useApprovedWisdom({ limit: 3, sort: "recent" });

  return (
    <section className="py-20" id="senior-wisdom" ref={ref}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Senior Insights</h2>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link to="/senior-wisdom">Explore all <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground py-8">Loading…</p>
        ) : posts.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-border p-10 text-center">
            <Lightbulb className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <h3 className="font-semibold text-foreground mb-1">No information shared yet</h3>
            <p className="text-sm text-muted-foreground mb-4">Be the first senior to drop a tip for the juniors.</p>
            <Button asChild>
              <Link to="/senior-wisdom">Share info</Link>
            </Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((p) => <WisdomCard key={p.id} post={p} />)}
          </div>
        )}
      </div>
    </section>
  );
};
