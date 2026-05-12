import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Compass, Check, X, Trash2, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { branchLabel } from "@/lib/wisdomConstants";
import { formatDistanceToNow } from "date-fns";

type Status = "pending" | "approved" | "rejected";
type Row = {
  id: string;
  branch: string;
  section: string;
  title: string;
  content: string;
  author_name: string | null;
  is_anonymous: boolean;
  status: Status;
  created_at: string;
};

export const SurvivalModeration = () => {
  const [tab, setTab] = useState<Status>("pending");
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      const uid = data.user?.id ?? null;
      if (!uid) return setAllowed(false);
      const [{ data: a }, { data: m }] = await Promise.all([
        supabase.rpc("has_role", { _user_id: uid, _role: "admin" }),
        supabase.rpc("has_role", { _user_id: uid, _role: "moderator" }),
      ]);
      setAllowed(Boolean(a) || Boolean(m));
    });
  }, []);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("branch_survival_entries")
      .select("id,branch,section,title,content,author_name,is_anonymous,status,created_at")
      .eq("status", tab)
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    setRows((data as Row[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    if (allowed) load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowed, tab]);

  const updateStatus = async (id: string, status: Status) => {
    const { error } = await supabase.from("branch_survival_entries").update({ status }).eq("id", id);
    if (error) return toast.error(error.message);
    toast.success(`Marked ${status}`);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this submission permanently?")) return;
    const { error } = await supabase.from("branch_survival_entries").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    load();
  };

  if (allowed === null) return <p className="text-center text-muted-foreground py-8">Checking permissions…</p>;
  if (!allowed) {
    return (
      <Card>
        <CardContent className="py-10 text-center space-y-2">
          <ShieldAlert className="h-8 w-8 text-muted-foreground mx-auto" />
          <h3 className="font-semibold">Moderator access required</h3>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Compass className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Branch Survival Maps — Moderation</h2>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as Status)}>
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
      </Tabs>

      {loading ? (
        <p className="text-center text-muted-foreground py-8">Loading…</p>
      ) : rows.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">Nothing here.</p>
      ) : (
        <div className="space-y-3">
          {rows.map((r) => (
            <Card key={r.id}>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs">{branchLabel(r.branch)}</Badge>
                  <Badge variant="outline" className="text-xs">{r.section}</Badge>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {formatDistanceToNow(new Date(r.created_at), { addSuffix: true })}
                  </span>
                </div>
                <CardTitle className="text-base mt-2">{r.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm whitespace-pre-wrap text-foreground/90 bg-muted/40 rounded-md p-3">{r.content}</p>
                <p className="text-xs text-muted-foreground">
                  By {r.is_anonymous ? "Anonymous" : (r.author_name || "Unknown")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {r.status !== "approved" && (
                    <Button size="sm" onClick={() => updateStatus(r.id, "approved")}>
                      <Check className="h-4 w-4 mr-1" /> Approve
                    </Button>
                  )}
                  {r.status !== "rejected" && (
                    <Button size="sm" variant="outline" onClick={() => updateStatus(r.id, "rejected")}>
                      <X className="h-4 w-4 mr-1" /> Reject
                    </Button>
                  )}
                  {r.status !== "pending" && (
                    <Button size="sm" variant="ghost" onClick={() => updateStatus(r.id, "pending")}>
                      Move to pending
                    </Button>
                  )}
                  <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive ml-auto" onClick={() => remove(r.id)}>
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
