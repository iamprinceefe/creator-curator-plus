export const CATEGORIES = [
  {
    slug: "content-storytelling",
    label: "Content & Storytelling",
    description: "Video, narrative and digital content — YouTube, TikTok and Instagram.",
  },
  {
    slug: "arts-writings",
    label: "Arts & Writings",
    description: "Illustration and published writing.",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
