export type EventCategory = "holiday" | "exam" | "fest" | "academic" | "break";

export interface AcademicEvent {
  start: string; // YYYY-MM-DD
  end?: string; // YYYY-MM-DD for ranges
  title: string;
  category: EventCategory;
  semester: "odd" | "even";
}

export const categoryMeta: Record<EventCategory, { label: string; emoji: string; classes: string; dot: string; ring: string }> = {
  holiday: {
    label: "Holiday",
    emoji: "🔴",
    classes: "bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/30",
    dot: "bg-red-500",
    ring: "ring-red-500/40",
  },
  exam: {
    label: "Exam",
    emoji: "🟡",
    classes: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30",
    dot: "bg-amber-500",
    ring: "ring-amber-500/40",
  },
  fest: {
    label: "Festival / Fest",
    emoji: "🟢",
    classes: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
    dot: "bg-emerald-500",
    ring: "ring-emerald-500/40",
  },
  academic: {
    label: "Academic",
    emoji: "🔵",
    classes: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30",
    dot: "bg-blue-500",
    ring: "ring-blue-500/40",
  },
  break: {
    label: "Break",
    emoji: "⚫",
    classes: "bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border-zinc-500/30",
    dot: "bg-zinc-500",
    ring: "ring-zinc-500/40",
  },
};

export const academicEvents: AcademicEvent[] = [
  // Odd Semester
  { start: "2026-08-03", title: "Orientation & Registration", category: "academic", semester: "odd" },
  { start: "2026-08-04", title: "Classes begin: B.Tech Sem III, V, VII / MBA / M.Tech", category: "academic", semester: "odd" },
  { start: "2026-08-10", title: "Induction: PG-MBA, M.Tech WP, PhD WP", category: "academic", semester: "odd" },
  { start: "2026-08-11", title: "Classes begin: PG-MBA, M.Tech WP, PhD WP", category: "academic", semester: "odd" },
  { start: "2026-08-15", title: "Independence Day", category: "holiday", semester: "odd" },
  { start: "2026-08-26", title: "Milad-un-Nabi", category: "holiday", semester: "odd" },
  { start: "2026-08-31", title: "Registration & Docs Verification — B.Tech 2026 batch", category: "academic", semester: "odd" },
  { start: "2026-09-01", title: "Induction: B.Tech 2026 batch", category: "academic", semester: "odd" },
  { start: "2026-09-02", title: "Classes begin: B.Tech Sem I, 2026 batch", category: "academic", semester: "odd" },
  { start: "2026-09-14", title: "Ganesh Chaturthi", category: "holiday", semester: "odd" },
  { start: "2026-09-28", end: "2026-10-01", title: "Mid Semester Exams: Sem III, V, VII", category: "exam", semester: "odd" },
  { start: "2026-10-02", title: "Gandhi Jayanti", category: "holiday", semester: "odd" },
  { start: "2026-10-13", end: "2026-10-16", title: "Mid Semester Exams: Sem I", category: "exam", semester: "odd" },
  { start: "2026-10-19", end: "2026-10-23", title: "Mid Semester Break", category: "break", semester: "odd" },
  { start: "2026-10-20", title: "Dussehra", category: "holiday", semester: "odd" },
  { start: "2026-10-31", title: "Annual Cultural Festival AGNEE 2026", category: "fest", semester: "odd" },
  { start: "2026-11-08", title: "Diwali", category: "holiday", semester: "odd" },
  { start: "2026-11-24", title: "Guru Nanak's Birthday", category: "holiday", semester: "odd" },
  { start: "2026-11-30", end: "2026-12-11", title: "End Semester Exams: Sem III, V, VII", category: "exam", semester: "odd" },
  { start: "2026-12-09", end: "2026-12-18", title: "End Semester Exams: Sem I", category: "exam", semester: "odd" },
  { start: "2026-12-17", title: "Last date to show evaluated scripts: Sem III, V, VII", category: "academic", semester: "odd" },
  { start: "2026-12-18", end: "2027-01-03", title: "Semester Break / Winter Vacation: Sem III, V, VII", category: "break", semester: "odd" },
  { start: "2026-12-21", title: "Last date grade submission by faculty: Sem III, V, VII", category: "academic", semester: "odd" },
  { start: "2026-12-25", title: "Christmas", category: "holiday", semester: "odd" },
  { start: "2026-12-28", title: "Last date to show evaluated scripts: Sem I", category: "academic", semester: "odd" },
  { start: "2026-12-29", title: "Last date grade submission by faculty: Sem I", category: "academic", semester: "odd" },
  { start: "2026-12-29", end: "2027-01-03", title: "Semester Break / Winter Vacation: Sem I", category: "break", semester: "odd" },

  // Even Semester
  { start: "2027-01-04", title: "Commencement of Sem II, IV, VI, VIII", category: "academic", semester: "even" },
  { start: "2027-01-14", title: "Makarsankranti", category: "holiday", semester: "even" },
  { start: "2027-01-22", end: "2027-01-23", title: "Annual Sports Festival AUJASYA 2027", category: "fest", semester: "even" },
  { start: "2027-01-26", title: "Republic Day", category: "holiday", semester: "even" },
  { start: "2027-02-22", end: "2027-02-25", title: "Mid Semester Exams: Sem II, IV, VI, VIII", category: "exam", semester: "even" },
  { start: "2027-03-10", title: "Idu'l Fitr", category: "holiday", semester: "even" },
  { start: "2027-03-13", end: "2027-03-14", title: "Annual TechFest EPITOME 2027", category: "fest", semester: "even" },
  { start: "2027-03-22", title: "Holi", category: "holiday", semester: "even" },
  { start: "2027-03-22", end: "2027-03-26", title: "Mid-Semester Break", category: "break", semester: "even" },
  { start: "2027-03-26", title: "Good Friday", category: "holiday", semester: "even" },
  { start: "2027-04-14", title: "Dr. Ambedkar Jayanti", category: "holiday", semester: "even" },
  { start: "2027-04-19", title: "Mahavir Jayanti", category: "holiday", semester: "even" },
  { start: "2027-04-26", end: "2027-05-07", title: "End Semester Exams: Sem II, IV, VI, VIII", category: "exam", semester: "even" },
  { start: "2027-05-12", title: "Last date to show evaluated scripts", category: "academic", semester: "even" },
  { start: "2027-05-14", title: "Last date grade submission by faculty", category: "academic", semester: "even" },
  { start: "2027-05-20", title: "Buddha Purnima", category: "holiday", semester: "even" },
  { start: "2027-05-15", end: "2027-08-01", title: "Summer Break / Industry Internship", category: "break", semester: "even" },
  { start: "2027-08-02", title: "Commencement of AY 2027-28 (tentative)", category: "academic", semester: "even" },
];

export const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

export const parseDate = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const formatRange = (ev: AcademicEvent) => {
  const opts: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
  const s = parseDate(ev.start);
  if (!ev.end) return s.toLocaleDateString("en-IN", opts);
  const e = parseDate(ev.end);
  const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
  if (sameMonth) {
    return `${s.getDate().toString().padStart(2, "0")}–${e.toLocaleDateString("en-IN", opts)}`;
  }
  return `${s.toLocaleDateString("en-IN", { day: "2-digit", month: "short" })} – ${e.toLocaleDateString("en-IN", opts)}`;
};

export const daysUntil = (dateStr: string) => {
  const today = startOfToday();
  const target = parseDate(dateStr);
  return Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};

export const isOngoing = (ev: AcademicEvent) => {
  const today = startOfToday();
  const s = parseDate(ev.start);
  const e = ev.end ? parseDate(ev.end) : s;
  return today >= s && today <= e;
};

export const isToday = (dateStr: string) => daysUntil(dateStr) === 0;

export const getUpcomingEvents = (count = 3) => {
  const today = startOfToday();
  return [...academicEvents]
    .filter((ev) => {
      const e = ev.end ? parseDate(ev.end) : parseDate(ev.start);
      return e >= today;
    })
    .sort((a, b) => parseDate(a.start).getTime() - parseDate(b.start).getTime())
    .slice(0, count);
};

export const getNextEvent = () => {
  const today = startOfToday();
  return [...academicEvents]
    .filter((ev) => parseDate(ev.start).getTime() >= today.getTime())
    .sort((a, b) => parseDate(a.start).getTime() - parseDate(b.start).getTime())[0];
};
