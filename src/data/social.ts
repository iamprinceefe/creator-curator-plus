export const SOCIAL_LINKS = {
  instagram: {
    label: "Instagram",
    handle: "@ellaroli_",
    url: "https://www.instagram.com/ellaroli_/",
  },
  tiktok: {
    label: "TikTok",
    handle: "@tmerolique",
    url: "https://www.tiktok.com/@tmerolique",
  },
  substack: {
    label: "Substack",
    handle: "Dikaios of Abba",
    url: "https://dikaiosofabba.substack.com/",
  },
  contra: {
    label: "Contra",
    handle: "Book a project",
    url: "https://contra.com/roli_amori_qt0rz00i",
  },
  email: {
    label: "Email",
    handle: "ellaroli@icloud.com",
    url: "mailto:ellaroli@icloud.com",
  },
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;
