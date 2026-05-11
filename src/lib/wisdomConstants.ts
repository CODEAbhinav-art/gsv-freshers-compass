export const BRANCHES = [
  { value: "ai-ds", label: "AI & Data Science" },
  { value: "aviation", label: "Aviation Engineering" },
  { value: "civil-rail", label: "Civil (Rail)" },
  { value: "ece-rail", label: "ECE (Rail)" },
  { value: "ee-rail", label: "EE (Rail)" },
  { value: "mech-rail", label: "Mechanical (Rail)" },
  { value: "maritime", label: "Maritime Engineering" },
  { value: "general", label: "General / All Branches" },
] as const;

export const WISDOM_CATEGORIES = [
  "Before Joining",
  "First Semester",
  "Academics",
  "Hostel Life",
  "Campus Life",
  "Clubs & Activities",
  "Coding / Skills",
  "Internships",
  "Projects",
  "General Advice",
] as const;

export type BranchValue = (typeof BRANCHES)[number]["value"];
export type WisdomCategory = (typeof WISDOM_CATEGORIES)[number];

export const branchLabel = (value: string) =>
  BRANCHES.find((b) => b.value === value)?.label ?? value;
