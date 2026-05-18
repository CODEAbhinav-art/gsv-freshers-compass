import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Lightbulb, Check, X, Trash2, ShieldAlert, Search, RefreshCw,
  ChevronDown, ChevronUp, Clock, CheckCircle2, XCircle, ArrowUp,
  RotateCcw, Filter, AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";
import { branchLabel, BRANCHES, WISDOM_CATEGORIES } from "@/lib/wisdomConstants";
import { formatDistanceToNow } from "date-fns";

type Status = "pending" | "approved" | "rejected";

type Row = {
  id: string;
  title: string;
  preview: string;
  content: string;
  branch: string;
  category: string;
  author_name: string | null;
  is_anonymous: boolean;
  status: Status;
  upvotes_count: number;
  created_at: string;
};

type Counts = Record<Status, number>;

const STATUS_META: Record<Status, { label: string; color: string; icon: React.ReactNode; badge: string }> = {
  pending: {
    label: "Pending",
    color: "text-amber-500",
    icon: <Clock className="h-4 w-4" />,
    badge: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400",
  },
  approved: {
    label: "Approved",
    color: "text-emerald-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  rejected: {
    label: "Rejected",
    color: "text-rose-500",
    icon: <XCircle className="h-4 w-4" />,
    badge: "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400",
  },
};

// ─── Stats Card ───────────────────────────────────────────────────────────────
const StatCard = ({
  status,
  count,
  active,
  onClick,
}: {
  status: Status;
  count: number;
  active: boolean;
  onClick: () => void;
}) => {
  const meta = STATUS_META[status];
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-xl border p-4 text-left transition-all duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        active
          ? "border-primary/50 bg-primary/5 shadow-sm"
          : "border-border/60 bg-card hover:border-border"
      }`}
    >
      <div className={`flex items-center gap-2 mb-1 ${meta.color}`}>
        {meta.icon}
        <span className="text-xs font-semibold uppercase tracking-wide">{meta.label}</span>
      </div>
      <p className="text-3xl font-bold text-foreground tabular-nums">{count}</p>
      <p className="text-xs text-muted-foreground mt-0.5">submissions</p>
    </button>
  );
};

// ─── Submission Card ──────────────────────────────────────────────────────────
const SubmissionCard = ({
  row,
  selected,
  onSelect,
  onApprove,
  onReject,
  onPending,
  onDelete,
}: {
  row: Row;
  selected: boolean;
  onSelect: (id: string, checked: boolean) => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onPending: (id: string) => void;
  onDelete: (id: string) => void;
}) => {
  const [expanded, setExpanded] = useState(false);
  const meta = STATUS_META[row.status];

  return (
    <Card
      className={`transition-all duration-200 ${
        selected ? "ring-2 ring-primary/50 bg-primary/5" : "hover:shadow-sm hover:border-border/80"
      }`}
    >
      <CardHeader className="pb-2 pt-4 px-5">
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <Checkbox
            id={`sel-${row.id}`}
            checked={selected}
            onCheckedChange={(v) => onSelect(row.id, !!v)}
            className="mt-0.5 shrink-0"
            aria-label={`Select submission: ${row.title}`}
          />

          <div className="flex-1 min-w-0">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              <Badge variant="secondary" className="text-xs">{branchLabel(row.branch)}</Badge>
              <Badge variant="outline" className="text-xs">{row.category}</Badge>
              <Badge variant="outline" className={`text-xs border ${meta.badge}`}>
                <span className="flex items-center gap-1">{meta.icon}{meta.label}</span>
              </Badge>
              <span className="ml-auto text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {formatDistanceToNow(new Date(row.created_at), { addSuffix: true })}
              </span>
            </div>

            <CardTitle className="text-base leading-snug">{row.title}</CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-5 pb-4 space-y-3">
        {/* Author & upvotes */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>
            By <span className="font-medium text-foreground/80">
              {row.is_anonymous ? "Anonymous" : (row.author_name || "Unknown")}
            </span>
          </span>
          {row.upvotes_count > 0 && (
            <span className="flex items-center gap-1 text-primary/80">
              <ArrowUp className="h-3 w-3" /> {row.upvotes_count}
            </span>
          )}
        </div>

        {/* Preview */}
        <p className="text-sm text-muted-foreground italic border-l-2 border-border pl-3">
          {row.preview}
        </p>

        {/* Expandable full content */}
        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 -ml-2 text-primary/80 hover:text-primary text-xs"
              aria-expanded={expanded}
            >
              {expanded ? (
                <><ChevronUp className="h-3.5 w-3.5 mr-1" /> Hide full content</>
              ) : (
                <><ChevronDown className="h-3.5 w-3.5 mr-1" /> Read full content</>
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-2 rounded-md bg-muted/40 border border-border/60 p-3 text-sm whitespace-pre-wrap leading-relaxed text-foreground/90">
              {row.content}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-border/40">
          {row.status !== "approved" && (
            <Button
              id={`approve-${row.id}`}
              size="sm"
              className="h-8 gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => onApprove(row.id)}
            >
              <Check className="h-3.5 w-3.5" /> Approve
            </Button>
          )}
          {row.status !== "rejected" && (
            <Button
              id={`reject-${row.id}`}
              size="sm"
              variant="outline"
              className="h-8 gap-1.5 border-rose-300 text-rose-600 hover:bg-rose-50 hover:border-rose-400 dark:border-rose-800 dark:text-rose-400 dark:hover:bg-rose-950"
              onClick={() => onReject(row.id)}
            >
              <X className="h-3.5 w-3.5" /> Reject
            </Button>
          )}
          {row.status !== "pending" && (
            <Button
              id={`pending-${row.id}`}
              size="sm"
              variant="ghost"
              className="h-8 gap-1.5 text-muted-foreground"
              onClick={() => onPending(row.id)}
            >
              <RotateCcw className="h-3.5 w-3.5" /> Move to pending
            </Button>
          )}
          <Button
            id={`delete-${row.id}`}
            size="sm"
            variant="ghost"
            className="h-8 gap-1.5 text-destructive hover:text-destructive ml-auto"
            onClick={() => onDelete(row.id)}
          >
            <Trash2 className="h-3.5 w-3.5" /> Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const WisdomModeration = () => {
  const [tab, setTab] = useState<Status>("pending");
  const [rows, setRows] = useState<Row[]>([]);
  const [counts, setCounts] = useState<Counts>({ pending: 0, approved: 0, rejected: 0 });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // Filters
  const [search, setSearch] = useState("");
  const [filterBranch, setFilterBranch] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  // Bulk selection
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // ── Auth check ────────────────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      const uid = data.user?.id ?? null;
      setUserId(uid);
      if (!uid) return setAllowed(false);
      const [{ data: a }, { data: m }] = await Promise.all([
        supabase.rpc("has_role", { _user_id: uid, _role: "admin" }),
        supabase.rpc("has_role", { _user_id: uid, _role: "moderator" }),
      ]);
      setAllowed(Boolean(a) || Boolean(m));
    });
  }, []);

  // ── Load rows ─────────────────────────────────────────────────────────────
  const load = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    else setRefreshing(true);

    // Load current-tab rows
    const { data, error } = await supabase
      .from("senior_wisdom")
      .select("id,title,preview,content,branch,category,author_name,is_anonymous,status,upvotes_count,created_at")
      .eq("status", tab)
      .order("created_at", { ascending: false });

    if (error) toast.error(error.message);
    setRows((data as Row[]) ?? []);
    setSelected(new Set());

    // Load counts for all statuses in parallel
    const [{ count: pCount }, { count: aCount }, { count: rCount }] = await Promise.all([
      supabase.from("senior_wisdom").select("id", { count: "exact", head: true }).eq("status", "pending"),
      supabase.from("senior_wisdom").select("id", { count: "exact", head: true }).eq("status", "approved"),
      supabase.from("senior_wisdom").select("id", { count: "exact", head: true }).eq("status", "rejected"),
    ]);
    setCounts({ pending: pCount ?? 0, approved: aCount ?? 0, rejected: rCount ?? 0 });

    if (!silent) setLoading(false);
    else setRefreshing(false);
  }, [tab]);

  useEffect(() => {
    if (allowed) load();
  }, [allowed, load]);

  // ── Actions ───────────────────────────────────────────────────────────────
  const updateStatus = async (id: string, status: Status) => {
    const { error } = await supabase.from("senior_wisdom").update({ status }).eq("id", id);
    if (error) return toast.error(error.message);
    toast.success(`Marked as ${status}`);
    load(true);
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this submission permanently? This cannot be undone.")) return;
    const { error } = await supabase.from("senior_wisdom").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Submission deleted");
    load(true);
  };

  // Bulk actions
  const bulkUpdate = async (status: Status) => {
    if (selected.size === 0) return;
    const ids = Array.from(selected);
    const { error } = await supabase
      .from("senior_wisdom")
      .update({ status })
      .in("id", ids);
    if (error) return toast.error(error.message);
    toast.success(`${ids.length} submission${ids.length > 1 ? "s" : ""} marked as ${status}`);
    load(true);
  };

  const bulkDelete = async () => {
    if (selected.size === 0) return;
    if (!confirm(`Delete ${selected.size} submission(s) permanently?`)) return;
    const ids = Array.from(selected);
    const { error } = await supabase.from("senior_wisdom").delete().in("id", ids);
    if (error) return toast.error(error.message);
    toast.success(`${ids.length} submission${ids.length > 1 ? "s" : ""} deleted`);
    load(true);
  };

  const toggleSelect = (id: string, checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      checked ? next.add(id) : next.delete(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selected.size === filtered.length && filtered.length > 0) {
      setSelected(new Set());
    } else {
      setSelected(new Set(filtered.map((r) => r.id)));
    }
  };

  // ── Filtering (client-side) ───────────────────────────────────────────────
  const filtered = rows.filter((r) => {
    const q = search.trim().toLowerCase();
    const matchSearch = !q || [r.title, r.preview, r.content, r.author_name ?? ""].some((f) =>
      f.toLowerCase().includes(q)
    );
    const matchBranch = filterBranch === "all" || r.branch === filterBranch;
    const matchCat = filterCategory === "all" || r.category === filterCategory;
    return matchSearch && matchBranch && matchCat;
  });

  const allSelected = filtered.length > 0 && selected.size === filtered.length;
  const someSelected = selected.size > 0 && !allSelected;

  // ── Access Denied ─────────────────────────────────────────────────────────
  if (allowed === null) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="flex items-center gap-3 text-muted-foreground">
          <RefreshCw className="h-5 w-5 animate-spin" />
          <span>Checking permissions…</span>
        </div>
      </div>
    );
  }

  if (!allowed) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="py-12 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
            <ShieldAlert className="h-7 w-7 text-destructive" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Moderator access required</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {userId
                ? "Your account doesn't have admin or moderator privileges."
                : "Sign in with a moderator account to review submissions."}
            </p>
          </div>
          {userId && (
            <div className="rounded-md bg-muted p-3 text-xs text-left">
              <p className="text-muted-foreground mb-1">Your user ID (share with admin to get access):</p>
              <code className="text-foreground break-all select-all">{userId}</code>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold leading-none">Senior Insights</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Moderation Dashboard</p>
          </div>
        </div>
        <Button
          id="wisdom-refresh"
          variant="outline"
          size="sm"
          onClick={() => load(true)}
          disabled={refreshing}
          className="gap-1.5"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`} />
          {refreshing ? "Refreshing…" : "Refresh"}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="flex gap-3">
        {(["pending", "approved", "rejected"] as Status[]).map((s) => (
          <StatCard
            key={s}
            status={s}
            count={counts[s]}
            active={tab === s}
            onClick={() => setTab(s)}
          />
        ))}
      </div>

      {/* Pending alert banner */}
      {counts.pending > 0 && tab !== "pending" && (
        <div
          className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300 cursor-pointer"
          onClick={() => setTab("pending")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setTab("pending")}
        >
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span>
            <strong>{counts.pending}</strong> submission{counts.pending > 1 ? "s" : ""} awaiting review.{" "}
            <span className="underline underline-offset-2">Review now →</span>
          </span>
        </div>
      )}

      {/* Tab Bar */}
      <Tabs value={tab} onValueChange={(v) => setTab(v as Status)}>
        <TabsList className="h-10">
          {(["pending", "approved", "rejected"] as Status[]).map((s) => (
            <TabsTrigger key={s} value={s} className="gap-2" id={`tab-${s}`}>
              {STATUS_META[s].label}
              {counts[s] > 0 && (
                <span className={`text-xs rounded-full px-1.5 py-0.5 font-medium ${STATUS_META[s].badge} border`}>
                  {counts[s]}
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Search & Filter Bar */}
      <div className="rounded-lg border bg-card p-3 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="wisdom-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, content, or author…"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          <Select value={filterBranch} onValueChange={setFilterBranch}>
            <SelectTrigger id="filter-branch" className="w-[180px] h-8 text-xs">
              <SelectValue placeholder="All branches" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All branches</SelectItem>
              {BRANCHES.map((b) => (
                <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger id="filter-category" className="w-[180px] h-8 text-xs">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {WISDOM_CATEGORIES.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {(search || filterBranch !== "all" || filterCategory !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs text-muted-foreground"
              onClick={() => { setSearch(""); setFilterBranch("all"); setFilterCategory("all"); }}
            >
              Clear filters
            </Button>
          )}
          <span className="ml-auto text-xs text-muted-foreground">
            {filtered.length} of {rows.length} shown
          </span>
        </div>
      </div>

      {/* Bulk Actions Toolbar */}
      {filtered.length > 0 && (
        <div className="flex items-center gap-3 rounded-lg border bg-card px-4 py-2.5">
          <Checkbox
            id="select-all"
            checked={allSelected}
            data-state={someSelected ? "indeterminate" : allSelected ? "checked" : "unchecked"}
            onCheckedChange={toggleSelectAll}
            aria-label="Select all visible submissions"
          />
          <label htmlFor="select-all" className="text-sm cursor-pointer select-none">
            {selected.size > 0
              ? `${selected.size} selected`
              : `Select all (${filtered.length})`}
          </label>

          {selected.size > 0 && (
            <div className="flex items-center gap-2 ml-auto">
              {tab !== "approved" && (
                <Button
                  id="bulk-approve"
                  size="sm"
                  className="h-7 text-xs gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => bulkUpdate("approved")}
                >
                  <Check className="h-3.5 w-3.5" /> Approve {selected.size}
                </Button>
              )}
              {tab !== "rejected" && (
                <Button
                  id="bulk-reject"
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs gap-1.5 border-rose-300 text-rose-600 hover:bg-rose-50 dark:border-rose-800 dark:text-rose-400 dark:hover:bg-rose-950"
                  onClick={() => bulkUpdate("rejected")}
                >
                  <X className="h-3.5 w-3.5" /> Reject {selected.size}
                </Button>
              )}
              <Button
                id="bulk-delete"
                size="sm"
                variant="ghost"
                className="h-7 text-xs gap-1.5 text-destructive hover:text-destructive"
                onClick={bulkDelete}
              >
                <Trash2 className="h-3.5 w-3.5" /> Delete {selected.size}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Content Area */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-3">
          <RefreshCw className="h-6 w-6 animate-spin" />
          <span className="text-sm">Loading submissions…</span>
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-border p-12 text-center">
          <Lightbulb className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <h3 className="font-semibold text-foreground mb-1">
            {rows.length === 0
              ? `No ${STATUS_META[tab].label.toLowerCase()} submissions`
              : "No results match your filters"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {rows.length === 0
              ? tab === "pending"
                ? "All caught up! No submissions waiting for review."
                : `Nothing has been ${tab} yet.`
              : "Try adjusting the search or filters above."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((r) => (
            <SubmissionCard
              key={r.id}
              row={r}
              selected={selected.has(r.id)}
              onSelect={toggleSelect}
              onApprove={(id) => updateStatus(id, "approved")}
              onReject={(id) => updateStatus(id, "rejected")}
              onPending={(id) => updateStatus(id, "pending")}
              onDelete={remove}
            />
          ))}
        </div>
      )}
    </div>
  );
};
