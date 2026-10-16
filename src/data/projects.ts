import illustrationArtwork from "@/assets/ella-instagram-artwork.jpg";
import thumbADayOut from "@/assets/tiktok/a-day-out.jpg";
import thumbBirthdayRecap from "@/assets/tiktok/birthday-recap.jpg";
import thumbBridalTeam from "@/assets/tiktok/bridal-team.jpg";
import thumbBridalTransition from "@/assets/tiktok/bridal-transition.jpg";
import thumbCulture from "@/assets/tiktok/culture.jpg";
import thumbLove from "@/assets/tiktok/love.jpg";
import thumbPovBirthday from "@/assets/tiktok/pov-birthday-dinner.jpg";

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "illustration" | "reels";
  mediaType: "image" | "tiktok";
  image: string;
  alt: string;
  tiktokUrl?: string;
  sourcePlatform: "instagram" | "tiktok";
  sourceUrl: string;
  featured: boolean;
  publishedAt: string;
  location?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "a-return-to-drawing",
    slug: "a-return-to-drawing",
    title: "A Return to Drawing",
    description:
      "I've been drawing since I was three. Somewhere along the way I stopped — then in 2024, I picked the pencil back up and haven't stopped since. These are pieces made between August and October: sketches that are less about being perfect, and more about being felt.",
    category: "illustration",
    mediaType: "image",
    image: illustrationArtwork,
    alt: "A colorful hand-drawn illustrated page from Ella's daily sketch series.",
    sourcePlatform: "instagram",
    sourceUrl: "https://www.instagram.com/ellaroli_/p/Deh3u82lniA/",
    featured: true,
    publishedAt: "2026-10-15",
  },
  {
    id: "culture",
    slug: "culture",
    title: "Culture",
    description:
      "A West African traditional ceremony, captured in full color and sound — her most-watched video, resonating with a wide community of viewers who saw their own culture reflected in it.",
    category: "reels",
    mediaType: "tiktok",
    image: thumbCulture,
    alt: "A still from Ella's TikTok video of a West African traditional ceremony.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7348102848556715269",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7348102848556715269",
    featured: true,
    publishedAt: "2024-03-19",
    location: "Oakville, Canada",
  },
  {
    id: "bridal-transition",
    slug: "bridal-transition",
    title: "Bridal Transition",
    description:
      "A playful transition edit made for a bride's big day — mobile videography with a CapCut-powered creative flourish.",
    category: "reels",
    mediaType: "tiktok",
    image: thumbBridalTransition,
    alt: "A still from Ella's bridal transition TikTok video.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7406331100345289990",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7406331100345289990",
    featured: true,
    publishedAt: "2024-08-23",
  },
  {
    id: "a-day-out",
    slug: "a-day-out",
    title: "A Day Out",
    description:
      "An afternoon with friends at a board game café in downtown Toronto — the kind of everyday memory-making that defines her mobile videography style.",
    category: "reels",
    mediaType: "tiktok",
    image: thumbADayOut,
    alt: "A still from Ella's TikTok video of a day out in downtown Toronto.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7383546973619522821",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7383546973619522821",
    featured: true,
    publishedAt: "2024-06-23",
    location: "Downtown Toronto",
  },
  {
    id: "bridal-team",
    slug: "bridal-team",
    title: "Bridal Team",
    description:
      "Behind-the-scenes moments from a bridal shower, celebrating a close circle of friends.",
    category: "reels",
    mediaType: "tiktok",
    image: thumbBridalTeam,
    alt: "A still from Ella's TikTok video of a bridal shower.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7364632104237337862",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7364632104237337862",
    featured: false,
    publishedAt: "2024-05-03",
    location: "Mississauga, Canada",
  },
  {
    id: "love",
    slug: "love",
    title: "Love",
    description: "A quiet, golden-hour moment from a backyard wedding.",
    category: "reels",
    mediaType: "tiktok",
    image: thumbLove,
    alt: "A still from Ella's TikTok video of a backyard wedding.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7364526595949776133",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7364526595949776133",
    featured: false,
    publishedAt: "2024-05-02",
    location: "Barrie, Canada",
  },
  {
    id: "birthday-recap",
    slug: "birthday-recap",
    title: "Birthday Recap",
    description: "A celebration dinner recap, complete with a champagne tower.",
    category: "reels",
    mediaType: "tiktok",
    image: thumbBirthdayRecap,
    alt: "A still from Ella's TikTok video of a birthday dinner celebration.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7357179228703460613",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7357179228703460613",
    featured: false,
    publishedAt: "2024-04-13",
    location: "Toronto, Canada",
  },
  {
    id: "pov-birthday-dinner",
    slug: "pov-birthday-dinner",
    title: "POV: Birthday Dinner",
    description: "A second birthday dinner recap — a different celebration, a different crew.",
    category: "reels",
    mediaType: "tiktok",
    image: thumbPovBirthday,
    alt: "A still from Ella's TikTok video of another birthday dinner celebration.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7384178887288311046",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7384178887288311046",
    featured: false,
    publishedAt: "2024-06-24",
  },
];

export const getProjectBySlug = (slug: string) => PROJECTS.find((project) => project.slug === slug);
export const getProjectsByCategory = (category: Project["category"]) =>
  PROJECTS.filter((project) => project.category === category);
export const getFeaturedProjects = () => PROJECTS.filter((project) => project.featured);
