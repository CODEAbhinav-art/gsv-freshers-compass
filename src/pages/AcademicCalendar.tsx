import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageMeta } from "@/components/PageMeta";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CalendarDays, Sparkles } from "lucide-react";
import {
  academicEvents,
  categoryMeta,
  EventCategory,
  formatRange,
  daysUntil,
  isOngoing,
  isToday,
  parseDate,
  getNextEvent,
} from "@/lib/academicCalendar";

const filters: { key: "all" | EventCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "holiday", label: "Holidays" },
  { key: "exam", label: "Exams" },
  { key: "fest", label: "Fests" },
  { key: "academic", label: "Academic" },
  { key: "break", label: "Breaks" },
];

const AcademicCalendar = () => {
  const [filter, setFilter] = useState<"all" | EventCategory>("all");
  const [tab, setTab] = useState<"odd" | "even">("odd");
  const nextEvent = useMemo(() => getNextEvent(), []);

  const filtered = useMemo(
    () =>
      academicEvents
        .filter((e) => e.semester === tab)
        .filter((e) => filter === "all" || e.category === filter)
        .sort((a, b) => parseDate(a.start).getTime() - parseDate(b.start).getTime()),
    [tab, filter]
  );

  return (
    <div className="min-h-screen bg-background relative">
      <PageMeta
        title="Academic Calendar 2026-27 — GSV Freshers Compass"
        description="GSV Gati Shakti Vishwavidyalaya academic calendar for 2026-27 with exams, holidays, fests, and semester breaks."
        path="/academic-calendar"
      />
      <AnimatedBackground />
      <Header />

      <main className="section-container py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6">
          <Link to="/"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
        </Button>

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
            <CalendarDays className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Academic Calendar 2026–27
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track exams, holidays, fests, and breaks for Gati Shakti Vishwavidyalaya across both semesters.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => {
            const active = filter === f.key;
            const meta = f.key !== "all" ? categoryMeta[f.key] : null;
            return (
              <Button
                key={f.key}
                size="sm"
                variant={active ? "default" : "outline"}
                onClick={() => setFilter(f.key)}
                className="gap-2"
              >
                {meta && <span className={`h-2 w-2 rounded-full ${meta.dot}`} />}
                {f.label}
              </Button>
            );
          })}
        </div>

        <Tabs value={tab} onValueChange={(v) => setTab(v as "odd" | "even")} className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 mb-8 h-auto">
            <TabsTrigger value="odd" className="py-2.5">Odd Sem (Aug–Dec 2026)</TabsTrigger>
            <TabsTrigger value="even" className="py-2.5">Even Sem (Jan–May 2027)</TabsTrigger>
          </TabsList>

          {(["odd", "even"] as const).map((sem) => (
            <TabsContent key={sem} value={sem} className="mt-0">
              {filtered.length === 0 ? (
                <p className="text-center text-muted-foreground py-12">No events match this filter.</p>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tab === sem && filtered.map((ev, idx) => {
                    const meta = categoryMeta[ev.category];
                    const d = daysUntil(ev.start);
                    const ongoing = isOngoing(ev);
                    const today = isToday(ev.start);
                    const isNext = nextEvent && nextEvent.start === ev.start && nextEvent.title === ev.title;
                    return (
                      <Card
                        key={`${ev.start}-${idx}`}
                        className={`relative p-5 border-l-4 hover:shadow-md transition-all ${meta.classes} ${
                          today ? `ring-2 ${meta.ring} ring-offset-2 ring-offset-background` : ""
                        }`}
                      >
                        {isNext && (
                          <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground shadow-md gap-1">
                            <Sparkles className="h-3 w-3" /> NEXT UP
                          </Badge>
                        )}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider`}>
                            <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                            {meta.label}
                          </span>
                          {today && <Badge variant="secondary">Today</Badge>}
                          {ongoing && !today && <Badge variant="secondary">Ongoing</Badge>}
                          {!ongoing && d > 0 && d <= 60 && (
                            <span className="text-xs font-medium text-muted-foreground">
                              in {d} {d === 1 ? "day" : "days"}
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-foreground leading-snug mb-2">{ev.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{formatRange(ev)}</p>
                      </Card>
                    );
                  })}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default AcademicCalendar;
