import { Link } from "react-router-dom";
import { CalendarDays, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getUpcomingEvents, categoryMeta, daysUntil, formatRange } from "@/lib/academicCalendar";

export const UpcomingEventsWidget = () => {
  const [open, setOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const events = getUpcomingEvents(3);

  useEffect(() => setMounted(true), []);
  if (!mounted || events.length === 0) return null;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-40 flex items-center justify-center h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform"
        aria-label="Show upcoming events"
      >
        <CalendarDays className="h-5 w-5" />
      </button>
    );
  }

  return (
    <Card className="fixed bottom-4 left-4 z-40 w-72 p-4 shadow-xl border-primary/20 bg-background/95 backdrop-blur-md hidden md:block">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold">Upcoming Events</h3>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <ul className="space-y-2.5 mb-3">
        {events.map((ev, i) => {
          const meta = categoryMeta[ev.category];
          const d = daysUntil(ev.start);
          return (
            <li key={i} className="flex gap-2.5 items-start text-xs">
              <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${meta.dot}`} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground truncate">{ev.title}</p>
                <p className="text-muted-foreground">
                  {formatRange(ev)}
                  {d > 0 && <span className="ml-1">· in {d}d</span>}
                  {d === 0 && <span className="ml-1">· today</span>}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <Button asChild size="sm" variant="outline" className="w-full">
        <Link to="/academic-calendar">
          View full calendar <ChevronRight className="h-3 w-3" />
        </Link>
      </Button>
    </Card>
  );
};
