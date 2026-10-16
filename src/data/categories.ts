export const CATEGORIES = [
  {
    slug: "illustration",
    label: "Illustration & Artwork",
    description: "Original drawings and hand-made visual ideas.",
  },
  {
    slug: "reels",
    label: "Reels & Mobile Videography",
    description: "Short-form video — memories, moments and mobile-shot stories.",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
