import thumbADayOut from "@/assets/tiktok/a-day-out.jpg";
import thumbBirthdayRecap from "@/assets/tiktok/birthday-recap.jpg";
import thumbBridalTeam from "@/assets/tiktok/bridal-team.jpg";
import thumbBridalTransition from "@/assets/tiktok/bridal-transition.jpg";
import thumbCulture from "@/assets/tiktok/culture.jpg";
import thumbLove from "@/assets/tiktok/love.jpg";
import thumbPovBirthday from "@/assets/tiktok/pov-birthday-dinner.jpg";
import thumbAnointed from "@/assets/youtube/anointed.jpg";
import thumbGodWhoFathers from "@/assets/youtube/god-who-fathers.jpg";
import thumbWhoAmI from "@/assets/youtube/who-am-i.jpg";

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "content-storytelling" | "arts-writings";
  mediaType: "image" | "tiktok" | "youtube" | "text";
  image?: string;
  alt?: string;
  tiktokUrl?: string;
  youtubeId?: string;
  sourcePlatform: "instagram" | "tiktok" | "youtube";
  sourceUrl: string;
  featured: boolean;
  publishedAt: string;
  location?: string;
};

export const PROJECTS: Project[] = [
  // --- Arts & Writings: Show n' Tell (The Cray) ---
  {
    id: "show-n-tell-june-6",
    slug: "show-n-tell-june-6",
    title: "Show n' Tell",
    description:
      "A community showcase hosted by The Cray — Hamilton's hub for Christian creatives — where members share their work and the story behind it. Ella is part of the creative community behind it.",
    category: "arts-writings",
    mediaType: "text",
    sourcePlatform: "instagram",
    sourceUrl: "https://www.instagram.com/thecrayhub/reel/DZPoJvltB92/",
    featured: true,
    publishedAt: "2026-06-06",
  },
  {
    id: "show-n-tell-june-26",
    slug: "show-n-tell-june-26",
    title: "Show n' Tell — June 26",
    description:
      "The next edition of The Cray's Show n' Tell — an ongoing series bringing Hamilton's Christian creative community together to showcase their work.",
    category: "arts-writings",
    mediaType: "text",
    sourcePlatform: "instagram",
    sourceUrl: "https://www.instagram.com/thecrayhub/reel/DZu7FLQtlPB/",
    featured: true,
    publishedAt: "2026-06-18",
  },

  // --- Content & Storytelling: featured YouTube ---
  {
    id: "the-god-who-fathers",
    slug: "the-god-who-fathers",
    title: "The God Who Fathers",
    description:
      "A guest conversation on the Creatively Curious podcast by Saphar Co. — Ella talks candidly about her childhood, faith, and the relationships that shape who she's become.",
    category: "content-storytelling",
    mediaType: "youtube",
    image: thumbGodWhoFathers,
    alt: "Thumbnail for the podcast episode The God Who Fathers, featuring Ella Roli.",
    youtubeId: "XWQbNoMCf6k",
    sourcePlatform: "youtube",
    sourceUrl: "https://www.youtube.com/watch?v=XWQbNoMCf6k",
    featured: true,
    publishedAt: "2026-02-19",
  },
  {
    id: "anointed-short-film",
    slug: "anointed",
    title: "Anointed",
    description:
      "A Christian short film — a quiet, carefully shot piece built around Isaiah 61:1, made with Chisom Micheal and the Holy Spirit.",
    category: "content-storytelling",
    mediaType: "youtube",
    image: thumbAnointed,
    alt: "Title card for the short film Anointed, featuring Ella Roli.",
    youtubeId: "dzuZp4q7pW8",
    sourcePlatform: "youtube",
    sourceUrl: "https://www.youtube.com/watch?v=dzuZp4q7pW8",
    featured: true,
    publishedAt: "2025-11-19",
  },
  {
    id: "who-am-i",
    slug: "who-am-i",
    title: "Who Am I?",
    description:
      "Episode one of a personal video series on finding purpose and direction — part reflection, part visual essay, shot and edited by Ella.",
    category: "content-storytelling",
    mediaType: "youtube",
    image: thumbWhoAmI,
    alt: "Title card for the video Who Am I? How to Find Purpose and Direction in Life.",
    youtubeId: "qeSO80FZfo8",
    sourcePlatform: "youtube",
    sourceUrl: "https://www.youtube.com/watch?v=qeSO80FZfo8",
    featured: true,
    publishedAt: "2025-09-05",
  },

  // --- Content & Storytelling: Instagram ---
  {
    id: "how-a-nike-ad-inspired-a-campaign",
    slug: "how-a-nike-ad-inspired-a-campaign",
    title: "Studying a Nike Ad",
    description:
      "“Creative inspiration doesn't have to start with a blank page.” A behind-the-scenes look at how a Nike ad's sound and storytelling structure shaped one of her own campaign concepts — without copying it.",
    category: "content-storytelling",
    mediaType: "text",
    sourcePlatform: "instagram",
    sourceUrl: "https://www.instagram.com/ellaroli_/reel/DekQc44xHfs/",
    featured: true,
    publishedAt: "2026-10-17",
  },

  // --- Content & Storytelling: TikTok ---
  {
    id: "culture",
    slug: "culture",
    title: "Culture",
    description:
      "A West African traditional ceremony, captured in full color and sound — her most-watched video, resonating with a wide community of viewers who saw their own culture reflected in it.",
    category: "content-storytelling",
    mediaType: "tiktok",
    image: thumbCulture,
    alt: "A still from Ella's TikTok video of a West African traditional ceremony.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7348102848556715269",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7348102848556715269",
    featured: false,
    publishedAt: "2024-03-19",
    location: "Oakville, Canada",
  },
  {
    id: "bridal-transition",
    slug: "bridal-transition",
    title: "Bridal Transition",
    description:
      "A playful transition edit made for a bride's big day — mobile videography with a CapCut-powered creative flourish.",
    category: "content-storytelling",
    mediaType: "tiktok",
    image: thumbBridalTransition,
    alt: "A still from Ella's bridal transition TikTok video.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7406331100345289990",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7406331100345289990",
    featured: false,
    publishedAt: "2024-08-23",
  },
  {
    id: "a-day-out",
    slug: "a-day-out",
    title: "A Day Out",
    description:
      "An afternoon with friends at a board game café in downtown Toronto — the kind of everyday memory-making that defines her mobile videography style.",
    category: "content-storytelling",
    mediaType: "tiktok",
    image: thumbADayOut,
    alt: "A still from Ella's TikTok video of a day out in downtown Toronto.",
    tiktokUrl: "https://www.tiktok.com/@tmerolique/video/7383546973619522821",
    sourcePlatform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@tmerolique/video/7383546973619522821",
    featured: false,
    publishedAt: "2024-06-23",
    location: "Downtown Toronto",
  },
  {
    id: "bridal-team",
    slug: "bridal-team",
    title: "Bridal Team",
    description:
      "Behind-the-scenes moments from a bridal shower, celebrating a close circle of friends.",
    category: "content-storytelling",
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
    category: "content-storytelling",
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
    category: "content-storytelling",
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
    category: "content-storytelling",
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
export const getFeaturedYouTube = () =>
  PROJECTS.filter((project) => project.mediaType === "youtube" && project.featured);
