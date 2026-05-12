export const SURVIVAL_SECTIONS = [
  "Semester Plan",
  "Core Courses",
  "Electives",
  "Professors",
  "Labs & Projects",
  "Books & Resources",
  "Grading & GPA Tips",
  "Internships & Placements",
  "Common Mistakes",
  "General Tips",
] as const;

export type SurvivalSection = (typeof SURVIVAL_SECTIONS)[number];
