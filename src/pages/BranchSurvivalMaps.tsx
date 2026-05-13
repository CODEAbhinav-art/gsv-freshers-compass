import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowUp, Compass, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { BRANCHES, branchLabel } from "@/lib/wisdomConstants";
import { SURVIVAL_SECTIONS } from "@/lib/survivalConstants";
import { useApprovedSurvival, type SurvivalEntry } from "@/components/survival/SurvivalShared";
import { ResourceCorner } from "@/components/survival/ResourceCorner";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";

const BranchSurvivalMaps = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [branch, setBranch] = useState<string>(params.get("branch") || "all");
  const [userId, setUserId] = useState<string | null>(null);
  const [upvoted, setUpvoted] = useState<Set<string>>(new Set());

  const { entries, loading, reload } = useApprovedSurvival({ branch });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setUserId(s?.user?.id ?? null));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return setUpvoted(new Set());
    supabase.from("survival_upvotes").select("entry_id").eq("user_id", userId).then(({ data }) => {
      setUpvoted(new Set((data ?? []).map((r: any) => r.entry_id)));
    });
  }, [userId, entries]);

  const grouped = useMemo(() => {
    const map = new Map<string, SurvivalEntry[]>();
    for (const s of SURVIVAL_SECTIONS) map.set(s, []);
    for (const e of entries) {
      if (!map.has(e.section)) map.set(e.section, []);
      map.get(e.section)!.push(e);
    }
    return map;
  }, [entries]);

  const handleUpvote = async (id: string) => {
    if (!userId) {
      toast.info("Sign in to upvote.");
      navigate("/auth");
      return;
    }
    if (upvoted.has(id)) {
      const { error } = await supabase.from("survival_upvotes").delete().eq("entry_id", id).eq("user_id", userId);
      if (error) return toast.error(error.message);
      setUpvoted((s) => { const n = new Set(s); n.delete(id); return n; });
    } else {
      const { error } = await supabase.from("survival_upvotes").insert({ entry_id: id, user_id: userId });
      if (error) return toast.error(error.message);
      setUpvoted((s) => new Set(s).add(id));
    }
    reload();
  };

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />

      <main className="section-container py-10">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to home
        </Link>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <Compass className="h-5 w-5" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Branch Guides</h1>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4 mb-6 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium">Branch:</span>
          <Select value={branch} onValueChange={setBranch}>
            <SelectTrigger className="w-[260px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All branches</SelectItem>
              {BRANCHES.map((b) => <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <ResourceCorner branch={branch} />

        {loading ? (
          <p className="text-center text-muted-foreground py-12">Loading map…</p>
        ) : entries.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-border p-12 text-center">
            <Compass className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">No tips yet for this branch</h3>
            <p className="text-sm text-muted-foreground mb-4">Be the first to map it out for juniors.</p>
            <SubmitSurvivalDialog defaultBranch={branch} onSubmitted={reload} />
          </div>
        ) : (
          <Accordion type="multiple" defaultValue={SURVIVAL_SECTIONS.filter((s) => (grouped.get(s)?.length ?? 0) > 0).slice(0, 3) as unknown as string[]} className="space-y-2">
            {SURVIVAL_SECTIONS.map((section) => {
              const list = grouped.get(section) ?? [];
              if (list.length === 0) return null;
              return (
                <AccordionItem key={section} value={section} className="border rounded-lg bg-card px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-foreground">{section}</span>
                      <Badge variant="secondary" className="text-xs">{list.length}</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pb-2">
                      {list.map((e) => (
                        <Card key={e.id} className="border-border/60">
                          <CardContent className="p-4 space-y-2">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <Badge variant="outline" className="text-xs">{branchLabel(e.branch)}</Badge>
                            </div>
                            <h4 className="font-semibold text-foreground leading-snug">{e.title}</h4>
                            <p className="text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">{e.content}</p>
                            <div className="flex items-center justify-between pt-2 border-t border-border/60">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="font-medium text-foreground/80">
                                  {e.is_anonymous ? "Anonymous Senior" : (e.author_name || "GSV Senior")}
                                </span>
                                <span>·</span>
                                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{formatDistanceToNow(new Date(e.created_at), { addSuffix: true })}</span>
                              </div>
                              <Button
                                variant={upvoted.has(e.id) ? "default" : "outline"}
                                size="sm"
                                className="h-8 gap-1.5"
                                onClick={() => handleUpvote(e.id)}
                              >
                                <ArrowUp className="h-3.5 w-3.5" />
                                <span className="text-xs font-medium">{e.upvotes_count}</span>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        )}

        <p className="text-xs text-muted-foreground text-center mt-10 max-w-xl mx-auto">
          Community-contributed. Cross-verify anything academic with your branch coordinator.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default BranchSurvivalMaps;
