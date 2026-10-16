export type Article = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string[];
  topics: string[];
  publishedAt: string;
  sourceUrl: string;
};

export const ARTICLES: Article[] = [
  {
    id: "the-7th-year",
    slug: "the-7th-year",
    title: "The 7th Year",
    subtitle: "It is a miracle!!",
    topics: ["Creative journey", "Fear", "Faith"],
    publishedAt: "2025-11-07",
    sourceUrl: "https://dikaiosofabba.substack.com/p/the-7th-year",
    excerpt: [
      "I keep telling myself I am getting old, but in hindsight, I'm just a girl figuring out life through the eyes of her inner child. I thought of this concept pretty recently; being 7 years old again, but this time on the second floor.",
      "What was I feeling, you might ask? FEAR. Fear of this new age that made me feel older. Fear of the past catching up. Fear of not doing enough in the years I've lived on earth. Fear of newness. Fear of being seen (crazy, I know).",
      "If you don't process your feelings, my dear readers, your feelings will process you. So this is me waking up at 4 a.m. from a terrible dream. The only person I could run to for help was my Father — God.",
      "I grew up in a creative home. My dad loved watching movies and playing music while dancing. My mom enjoyed arts and crafts. So imagine those two combined. As a child, I enjoyed storytelling — oral, written, or visual. When I was bored, all I did was tell stories.",
    ],
  },
  {
    id: "the-journey",
    slug: "the-journey",
    title: "The Journey",
    subtitle: "How does one start a journey?",
    topics: ["Parable", "Faith", "Reflection"],
    publishedAt: "2026-01-03",
    sourceUrl: "https://dikaiosofabba.substack.com/p/the-journey",
    excerpt: [
      "Have you ever embarked on a journey of no return? Have you ever started a journey and stopped halfway? Have you ever journeyed all the way to the final destination?",
      "So there was a man who embarked on a journey. Like any sensible person, he calculated the cost, packed his backpack, and began to move. But as he journeyed, his steps grew slower and slower.",
      "He didn't realize that the backpack he carried was what weighed him down. For the destination he was heading toward had a strange rule: what you carry physically reflects what you carry within.",
      "He walked, and walked, and walked until he could move no further. He fell to the ground, and his sweat traced its way from his face into the earth. In that moment, he realized two things: he was sweating intensely and he was in the desert.",
    ],
  },
  {
    id: "i-am",
    slug: "i-am",
    title: "I AM",
    subtitle: "I am becoming....",
    topics: ["Identity", "Healing", "Faith"],
    publishedAt: "2025-11-28",
    sourceUrl: "https://dikaiosofabba.substack.com/p/i-am",
    excerpt: [
      "When God called me out of darkness, He began transforming me from what I was into what I would become. I was once in darkness. I carried labels like: I am not good enough. I am not worthy. I am not qualified.",
      "The list was long. And I carried those words like my life depended on it. Like that was my name. Like there was no way out. And honestly? I hated the box I put myself in.",
      "The Holy Spirit told me to write down the things I believed about myself (darkness), then write the things I am in Christ (light). So I wrote: I am Loved. I am cherished. I am becoming. I am His Child. I am favoured. I am beautiful. I am intelligent. I am extraordinary.",
      "Those words became my anchor. Anytime darkness tried to drag me back, I reminded myself of truth. I am becoming because I am in Christ!!!",
    ],
  },
];

export const getArticleBySlug = (slug: string) => ARTICLES.find((article) => article.slug === slug);
