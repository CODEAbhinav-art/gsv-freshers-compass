// Curated resource corner for each branch. Extend freely.
// Keep links to trusted sources only. Empty arrays render as "Coming soon".

export type ResourceLink = { label: string; url: string; note?: string };

export type BranchResourceBundle = {
  pyqs: ResourceLink[];
  notes: ResourceLink[];
  youtube: ResourceLink[];
};

// Generic channels useful across most engineering branches (1st/2nd year core).
const COMMON_YT: ResourceLink[] = [
  { label: "Gate Smashers", url: "https://youtube.com/@GateSmashers", note: "Core CS / engineering basics" },
  { label: "Neso Academy", url: "https://youtube.com/@nesoacademy", note: "Maths, electronics, programming" },
  { label: "Gajendra Purohit", url: "https://youtube.com/@gajendrapurohit", note: "Engineering Maths" },
  { label: "Khan Academy", url: "https://youtube.com/@khanacademy", note: "Foundational concepts" },
];

export const BRANCH_RESOURCES: Record<string, BranchResourceBundle> = {
  "ai-ds": {
    pyqs: [],
    notes: [],
    youtube: [
      { label: "CodeWithHarry", url: "https://youtube.com/@CodeWithHarry", note: "Python / web dev" },
      { label: "StatQuest with Josh Starmer", url: "https://youtube.com/@statquest", note: "ML & statistics intuition" },
      { label: "Krish Naik", url: "https://youtube.com/@krishnaik06", note: "Data Science / ML" },
      { label: "3Blue1Brown", url: "https://youtube.com/@3blue1brown", note: "Linear algebra, neural nets" },
      ...COMMON_YT,
    ],
  },
  "aviation": {
    pyqs: [],
    notes: [],
    youtube: [
      { label: "Mentour Pilot", url: "https://youtube.com/@MentourPilot" },
      { label: "Captain Joe", url: "https://youtube.com/@CaptainJoe" },
      ...COMMON_YT,
    ],
  },
  "civil-rail": {
    pyqs: [],
    notes: [],
    youtube: [
      { label: "Civil Engineering Forum", url: "https://youtube.com/@CivilEngineeringForum" },
      { label: "Practical Engineering", url: "https://youtube.com/@PracticalEngineeringChannel" },
      ...COMMON_YT,
    ],
  },
  "ece-rail": {
    pyqs: [],
    notes: [],
    youtube: [
      { label: "ALL ABOUT ELECTRONICS", url: "https://youtube.com/@ALLABOUTELECTRONICS" },
      { label: "Neso Academy — Digital Electronics", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm" },
      ...COMMON_YT,
    ],
  },
  "ee-rail": {
    pyqs: [],
    notes: [],
    youtube: [
      { label: "Electrical Engineering — Tutorials Point", url: "https://youtube.com/@TutorialsPoint_" },
      { label: "Zen Murali — BEE", url: "https://youtube.com/@zenmuralisachithanandam8189" },
      ...COMMON_YT,
    ],
  },
  "mech-rail": {
    pyqs: [],
    notes: [],
    youtube: [
      { label: "Lesics", url: "https://youtube.com/@Lesics" },
      { label: "The Efficient Engineer", url: "https://youtube.com/@TheEfficientEngineer" },
      ...COMMON_YT,
    ],
  },
  "maritime": {
    pyqs: [],
    notes: [],
    youtube: [
      { label: "Marine Insight", url: "https://youtube.com/@MarineInsight" },
      { label: "Casual Navigation", url: "https://youtube.com/@CasualNavigation" },
      ...COMMON_YT,
    ],
  },
  "general": {
    pyqs: [],
    notes: [],
    youtube: COMMON_YT,
  },
};

export const getBranchResources = (branch: string): BranchResourceBundle =>
  BRANCH_RESOURCES[branch] ?? { pyqs: [], notes: [], youtube: COMMON_YT };
