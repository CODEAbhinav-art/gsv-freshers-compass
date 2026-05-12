import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { BRANCHES } from "@/lib/wisdomConstants";
import { SURVIVAL_SECTIONS } from "@/lib/survivalConstants";
import { toast } from "sonner";

export type SurvivalEntry = {
  id: string;
  branch: string;
  section: string;
  title: string;
  content: string;
  author_name: string | null;
  is_anonymous: boolean;
  upvotes_count: number;
  created_at: string;
};

export const useApprovedSurvival = (opts?: { branch?: string }) => {
  const [entries, setEntries] = useState<SurvivalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let ignore = false;
    (async () => {
      setLoading(true);
      let q = supabase
        .from("branch_survival_entries")
        .select("id,branch,section,title,content,author_name,is_anonymous,upvotes_count,created_at")
        .eq("status", "approved")
        .order("upvotes_count", { ascending: false })
        .order("created_at", { ascending: false });
      if (opts?.branch && opts.branch !== "all") q = q.eq("branch", opts.branch);
      const { data, error } = await q;
      if (!ignore) {
        if (error) toast.error(error.message);
        setEntries((data as SurvivalEntry[]) ?? []);
        setLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, [opts?.branch, reloadKey]);

  return { entries, loading, reload: () => setReloadKey((k) => k + 1) };
};

export const SubmitSurvivalDialog = ({ defaultBranch, onSubmitted }: { defaultBranch?: string; onSubmitted?: () => void }) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    branch: defaultBranch && defaultBranch !== "all" ? defaultBranch : "",
    section: "",
    title: "",
    content: "",
    author_name: "",
    is_anonymous: true,
  });

  useEffect(() => {
    if (defaultBranch && defaultBranch !== "all") setForm((f) => ({ ...f, branch: defaultBranch }));
  }, [defaultBranch]);

  const submit = async () => {
    if (!form.branch) return toast.error("Pick a branch");
    if (!form.section) return toast.error("Pick a section");
    if (!form.title.trim() || form.title.length > 140) return toast.error("Title is required (max 140 chars)");
    if (!form.content.trim() || form.content.length > 5000) return toast.error("Content is required (max 5000 chars)");
    if (!form.is_anonymous && !form.author_name.trim()) return toast.error("Add your name or post anonymously");

    setSubmitting(true);
    const { data: userData } = await supabase.auth.getUser();
    const { error } = await supabase.from("branch_survival_entries").insert({
      branch: form.branch,
      section: form.section,
      title: form.title.trim(),
      content: form.content.trim(),
      is_anonymous: form.is_anonymous,
      author_name: form.is_anonymous ? null : form.author_name.trim(),
      author_user_id: userData.user?.id ?? null,
      status: "pending",
    });
    setSubmitting(false);
    if (error) return toast.error(error.message);
    toast.success("Submitted! It'll appear after a quick review.");
    setForm({ branch: form.branch, section: "", title: "", content: "", author_name: "", is_anonymous: true });
    setOpen(false);
    onSubmitted?.();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> Add a tip
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add to the survival map</DialogTitle>
          <DialogDescription>Help juniors navigate your branch. Posts go through a quick review.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
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
              <Label>Section</Label>
              <Select value={form.section} onValueChange={(v) => setForm({ ...form, section: v })}>
                <SelectTrigger><SelectValue placeholder="Section" /></SelectTrigger>
                <SelectContent>
                  {SURVIVAL_SECTIONS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Title</Label>
            <Input maxLength={140} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Sem 3 elective combo that worked for me" />
          </div>
          <div className="space-y-1.5">
            <Label>Details</Label>
            <Textarea maxLength={5000} rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Share specifics — courses, professors, study tips, what to avoid…" />
            <p className="text-xs text-muted-foreground">{form.content.length}/5000</p>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <Checkbox id="surv-anon" checked={form.is_anonymous} onCheckedChange={(v) => setForm({ ...form, is_anonymous: !!v })} />
            <Label htmlFor="surv-anon" className="cursor-pointer">Post anonymously</Label>
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
