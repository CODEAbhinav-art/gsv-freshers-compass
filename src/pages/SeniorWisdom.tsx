import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lightbulb, LogIn, LogOut, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { BRANCHES, WISDOM_CATEGORIES } from "@/lib/wisdomConstants";
import { SubmitWisdomDialog, WisdomCard, useApprovedWisdom } from "@/components/wisdom/WisdomShared";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SeniorWisdom = () => {
  const navigate = useNavigate();
  const [branch, setBranch] = useState("all");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<"recent" | "popular">("recent");
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [upvoted, setUpvoted] = useState<Set<string>>(new Set());

  const { posts, loading, reload } = useApprovedWisdom({ branch, category, sort });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUserId(session?.user?.id ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return setUpvoted(new Set());
    supabase.from("wisdom_upvotes").select("post_id").eq("user_id", userId).then(({ data }) => {
      setUpvoted(new Set((data ?? []).map((r: any) => r.post_id)));
    });
  }, [userId, posts]);

  const handleUpvote = async (postId: string) => {
    if (!userId) {
      toast.info("Sign in to upvote insights.");
      navigate("/auth");
      return;
    }
    if (upvoted.has(postId)) {
      const { error } = await supabase.from("wisdom_upvotes").delete().eq("post_id", postId).eq("user_id", userId);
      if (error) return toast.error(error.message);
      setUpvoted((s) => { const n = new Set(s); n.delete(postId); return n; });
    } else {
      const { error } = await supabase.from("wisdom_upvotes").insert({ post_id: postId, user_id: userId });
      if (error) return toast.error(error.message);
      setUpvoted((s) => new Set(s).add(postId));
    }
    reload();
  };

  const filtered = search.trim()
    ? posts.filter((p) => (p.title + " " + p.preview + " " + p.content).toLowerCase().includes(search.toLowerCase()))
    : posts;

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
                <Lightbulb className="h-5 w-5" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Senior Insights</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {userId ? (
              <Button variant="outline" size="sm" onClick={async () => { await supabase.auth.signOut(); toast.success("Signed out"); }}>
                <LogOut className="h-4 w-4 mr-1.5" /> Sign out
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
                <LogIn className="h-4 w-4 mr-1.5" /> Sign in
              </Button>
            )}
            <SubmitWisdomDialog onSubmitted={reload} />
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4 mb-6 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search insights…" className="pl-9" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Select value={branch} onValueChange={setBranch}>
              <SelectTrigger className="w-[200px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All branches</SelectItem>
                {BRANCHES.map((b) => <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[200px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {WISDOM_CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
            <Tabs value={sort} onValueChange={(v) => setSort(v as any)} className="ml-auto">
              <TabsList>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground py-12">Loading wisdom…</p>
        ) : filtered.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-border p-12 text-center">
            <Lightbulb className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">No insights here yet</h3>
            <p className="text-sm text-muted-foreground mb-4">Be the first to share something useful with juniors.</p>
            <SubmitWisdomDialog onSubmitted={reload} />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <WisdomCard key={p.id} post={p} onUpvote={handleUpvote} hasUpvoted={upvoted.has(p.id)} />
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center mt-10 max-w-xl mx-auto">
          This platform is community-driven. Information may evolve over time and should be cross-verified where necessary.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default SeniorWisdom;
