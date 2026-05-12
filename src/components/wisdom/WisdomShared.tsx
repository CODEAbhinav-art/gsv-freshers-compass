import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Lightbulb, Plus, ArrowUp, Sparkles, Clock } from "lucide-react";
import { BRANCHES, WISDOM_CATEGORIES, branchLabel } from "@/lib/wisdomConstants";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";

export type WisdomPost = {
  id: string;
  title: string;
  preview: string;
  content: string;
  branch: string;
  category: string;
  author_name: string | null;
  is_anonymous: boolean;
  upvotes_count: number;
  created_at: string;
};

const FRESH_DAYS = 14;

export const WisdomCard = ({ post, onUpvote, hasUpvoted }: {
  post: WisdomPost;
  onUpvote?: (id: string) => void;
  hasUpvoted?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const isFresh = (Date.now() - new Date(post.created_at).getTime()) / 86400000 < FRESH_DAYS;
  const author = post.is_anonymous ? "Anonymous Senior" : (post.author_name || "GSV Senior");

  return (
    <Card className="hover:shadow-md transition-all duration-300 border-border/60 hover:border-primary/30">
      <CardContent className="p-5 space-y-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="secondary" className="text-xs">{branchLabel(post.branch)}</Badge>
          <Badge variant="outline" className="text-xs">{post.category}</Badge>
          {isFresh && (
            <Badge className="text-xs bg-primary/10 text-primary hover:bg-primary/15 border-0">
              <Sparkles className="h-3 w-3 mr-1" /> Fresh
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground leading-snug">{post.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{post.preview}</p>

        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 px-2 -ml-2 text-primary hover:text-primary">
              {open ? <>Show less <ChevronUp className="h-4 w-4 ml-1" /></> : <>Read more <ChevronDown className="h-4 w-4 ml-1" /></>}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed pt-2 border-t mt-2">
              {post.content}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="flex items-center justify-between pt-2 border-t border-border/60">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">{author}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</span>
          </div>
          {onUpvote && (
            <Button
              variant={hasUpvoted ? "default" : "outline"}
              size="sm"
              className="h-8 gap-1.5"
              onClick={() => onUpvote(post.id)}
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">{post.upvotes_count}</span>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const SubmitWisdomDialog = ({ onSubmitted }: { onSubmitted?: () => void }) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: "",
    preview: "",
    content: "",
    branch: "",
    category: "",
    author_name: "",
    is_anonymous: true,
  });

  const reset = () => setForm({ title: "", preview: "", content: "", branch: "", category: "", author_name: "", is_anonymous: true });

  const submit = async () => {
    if (!form.title.trim() || form.title.length > 120) return toast.error("Title is required (max 120 chars)");
    if (!form.preview.trim() || form.preview.length > 200) return toast.error("Preview is required (max 200 chars)");
    if (!form.content.trim() || form.content.length > 5000) return toast.error("Content is required (max 5000 chars)");
    if (!form.branch) return toast.error("Pick a branch");
    if (!form.category) return toast.error("Pick a category");
    if (!form.is_anonymous && !form.author_name.trim()) return toast.error("Add your name or post anonymously");

    setSubmitting(true);
    const { data: userData } = await supabase.auth.getUser();
    const { error } = await supabase.from("senior_wisdom").insert({
      title: form.title.trim(),
      preview: form.preview.trim(),
      content: form.content.trim(),
      branch: form.branch,
      category: form.category,
      is_anonymous: form.is_anonymous,
      author_name: form.is_anonymous ? null : form.author_name.trim(),
      author_user_id: userData.user?.id ?? null,
      status: "pending",
    });
    setSubmitting(false);

    if (error) return toast.error(error.message);
    toast.success("Submitted! Your tips will appear after a quick review.");
    reset();
    setOpen(false);
    onSubmitted?.();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> Share an insight
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Share your experiences</DialogTitle>
          <DialogDescription>
            Help juniors by sharing what you wish you knew. Posts go through a quick review.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <div className="space-y-1.5">
            <Label>Title</Label>
            <Input maxLength={120} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. How to survive your first DSA course" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Branch</Label>
              <Select value={form.branch} onValueChange={(v) => setForm({ ...form, branch: v })}>
                <SelectTrigger><SelectValue placeholder="Branch" /></SelectTrigger>
                <SelectContent>
                  {BRANCHES.map((b) => <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Category</Label>
              <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
                <SelectContent>
                  {WISDOM_CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Short preview</Label>
            <Input maxLength={200} value={form.preview} onChange={(e) => setForm({ ...form, preview: e.target.value })} placeholder="One sentence that hooks the reader" />
          </div>
          <div className="space-y-1.5">
            <Label>Detailed advice</Label>
            <Textarea maxLength={5000} rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Share the full story, tips, or warnings…" />
            <p className="text-xs text-muted-foreground">{form.content.length}/5000</p>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <Checkbox id="anon" checked={form.is_anonymous} onCheckedChange={(v) => setForm({ ...form, is_anonymous: !!v })} />
            <Label htmlFor="anon" className="cursor-pointer">Post anonymously</Label>
          </div>
          {!form.is_anonymous && (
            <div className="space-y-1.5">
              <Label>Your name (shown publicly)</Label>
              <Input maxLength={60} value={form.author_name} onChange={(e) => setForm({ ...form, author_name: e.target.value })} placeholder="e.g. Riya, ECE '26" />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={submitting}>Cancel</Button>
          <Button onClick={submit} disabled={submitting}>{submitting ? "Submitting…" : "Submit for review"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const useApprovedWisdom = (opts?: { branch?: string; category?: string; limit?: number; sort?: "recent" | "popular" }) => {
  const [posts, setPosts] = useState<WisdomPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let ignore = false;
    (async () => {
      setLoading(true);
      let q = supabase.from("senior_wisdom").select("id,title,preview,content,branch,category,author_name,is_anonymous,upvotes_count,created_at").eq("status", "approved");
      if (opts?.branch && opts.branch !== "all") q = q.eq("branch", opts.branch);
      if (opts?.category && opts.category !== "all") q = q.eq("category", opts.category);
      q = opts?.sort === "popular"
        ? q.order("upvotes_count", { ascending: false }).order("created_at", { ascending: false })
        : q.order("created_at", { ascending: false });
      if (opts?.limit) q = q.limit(opts.limit);
      const { data, error } = await q;
      if (!ignore) {
        if (error) toast.error(error.message);
        setPosts((data as WisdomPost[]) ?? []);
        setLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, [opts?.branch, opts?.category, opts?.limit, opts?.sort, reloadKey]);

  return { posts, loading, reload: () => setReloadKey((k) => k + 1) };
};
