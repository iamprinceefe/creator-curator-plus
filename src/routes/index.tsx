import { useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

import portrait from "@/assets/ella-portrait.jpg";
import storyboard from "@/assets/ella-storyboard.jpg";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/portfolio/article-card";
import { CategoryTabs } from "@/components/portfolio/category-tabs";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectLightbox } from "@/components/portfolio/project-lightbox";
import { SocialLinks } from "@/components/portfolio/social-links";
import { ARTICLES } from "@/data/articles";
import type { CategorySlug } from "@/data/categories";
import { getFeaturedYouTube, getProjectBySlug, PROJECTS } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/social";

const FEATURED_YOUTUBE = getFeaturedYouTube();

export const Route = createFileRoute("/")({
  component: CreatorPortfolio,
  validateSearch: (search: Record<string, unknown>): { project?: string } => {
    const value = search["project"];
    return typeof value === "string" ? { project: value } : {};
  },
  head: () => ({
    meta: [
      { title: "Ella Roli — Visual Storyteller & Creative Director" },
      {
        name: "description",
        content:
          "Ella Roli is a visual storyteller, illustrator and creative director making cinematic content and thoughtful stories for brands and creators.",
      },
      { property: "og:title", content: "Ella Roli — Visual Storyteller & Creative Director" },
      {
        property: "og:description",
        content: "Cinematic content, thoughtful words and illustration-led ideas by Ella Roli.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function CreatorPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<CategorySlug | "all">("all");
  const { project: activeSlug } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const closeMenu = () => setMenuOpen(false);
  const openProject = (slug: string) => navigate({ search: { project: slug } });
  const closeProject = () => navigate({ search: {} });

  const visibleProjects = useMemo(() => {
    const scoped = category === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === category);
    // Featured YouTube videos get their own prominent block above, so they're
    // excluded here to avoid showing the same three videos twice.
    return scoped.filter((p) => p.mediaType !== "youtube");
  }, [category]);
  const showYouTube = category === "all" || category === "content-storytelling";
  const activeProject = activeSlug ? getProjectBySlug(activeSlug) : undefined;

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <a
        href="#content"
        className="sr-only z-50 rounded-sm bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div id="content">
        <section
          id="hero"
          aria-labelledby="intro-title"
          className="relative isolate flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden"
        >
          <img
            src={portrait}
            alt="Ella Roli, laughing in a white shirt against a chartreuse green backdrop."
            fetchPriority="high"
            className="absolute inset-0 -z-10 size-full object-cover object-[center_58%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/10 to-black/75"
          />

          <header className="absolute inset-x-0 top-0 z-40">
            <div className="mx-auto grid min-h-[76px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:px-16">
              <Link
                to="/"
                aria-label="Ella Roli, home"
                className="font-display text-[1.7rem] leading-none text-background sm:text-3xl"
              >
                ella roli<span className="text-citron">.</span>
              </Link>
              <nav
                aria-label="Main navigation"
                className="hidden items-center gap-9 text-sm text-background/80 lg:flex"
              >
                <a className="transition-colors hover:text-background" href="#work">
                  Selected work
                </a>
                <a className="transition-colors hover:text-background" href="#about">
                  About
                </a>
                <a className="transition-colors hover:text-background" href="#services">
                  What I do
                </a>
              </nav>
              <div className="hidden justify-self-end lg:block">
                <Button
                  asChild
                  variant="default"
                  className="min-h-11 rounded-none px-5 font-medium"
                >
                  <a href="#contact">
                    Let’s collaborate <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="min-h-11 min-w-11 justify-self-end text-background hover:bg-background/10 hover:text-background lg:hidden"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </Button>
            </div>
            {menuOpen && (
              <nav
                aria-label="Mobile navigation"
                className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-5 shadow-sm lg:hidden"
              >
                <div className="mx-auto grid max-w-[1440px] gap-1">
                  <a
                    onClick={closeMenu}
                    className="min-h-12 content-center border-b border-border/70 text-base"
                    href="#work"
                  >
                    Selected work
                  </a>
                  <a
                    onClick={closeMenu}
                    className="min-h-12 content-center border-b border-border/70 text-base"
                    href="#about"
                  >
                    About
                  </a>
                  <a
                    onClick={closeMenu}
                    className="min-h-12 content-center border-b border-border/70 text-base"
                    href="#services"
                  >
                    What I do
                  </a>
                  <a
                    onClick={closeMenu}
                    className="min-h-12 content-center text-base text-primary"
                    href="#contact"
                  >
                    Let’s collaborate <ArrowUpRight aria-hidden="true" className="inline size-4" />
                  </a>
                </div>
              </nav>
            )}
          </header>

          {/* Mobile-only composition (< sm): headline up top in the clear space above her
              hair, paragraph/CTAs anchored to the bottom over her shoulders/shirt — her face
              in between stays uncovered. Desktop below is untouched. */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between px-5 pb-8 pt-24 sm:hidden">
            <div className="reveal-up max-w-[290px]">
              <h1 className="editorial-title text-[1.9rem] leading-[1.08] text-background">
                Creative Director, Content Strategist,{" "}
                <span className="italic text-citron">Visual Storyteller</span>
              </h1>
            </div>

            <div className="max-w-[300px]">
              <p className="text-sm leading-6 text-background/85">
                I’m Ella Roli — a storyteller and illustrator making thoughtful ideas visible
                through cinematic content, poetic words and playful visuals.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <Button asChild size="sm" className="min-h-11 rounded-none px-5 text-sm">
                  <a href="#contact">
                    Let’s make something <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="min-h-11 rounded-none border-background/40 bg-transparent px-5 text-sm text-background hover:bg-background/10"
                >
                  <a href="#work">
                    Explore the work <ArrowDown aria-hidden="true" className="size-4" />
                  </a>
                </Button>
              </div>
              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.12em] text-background/70">
                Hamilton, Canada
              </p>
            </div>
          </div>

          {/* Desktop/tablet composition (>= sm) — unchanged from before. */}
          <div className="relative z-10 mx-auto mt-auto hidden w-full max-w-[1440px] px-5 pb-14 pt-24 sm:block sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
            <div className="reveal-up max-w-[680px]">
              <h1
                id="intro-title"
                className="editorial-title text-5xl leading-[1.08] text-background sm:text-6xl lg:text-7xl"
              >
                Creative Director, Content Strategist,{" "}
                <span className="italic text-citron">Visual Storyteller</span>
              </h1>
              <p className="mt-7 max-w-[470px] text-lg leading-8 text-background/85">
                I’m Ella Roli — a storyteller and illustrator making thoughtful ideas visible
                through cinematic content, poetic words and playful visuals.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild className="min-h-12 rounded-none px-6">
                  <a href="#contact">
                    Let’s make something <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="min-h-12 rounded-none border-background/40 bg-transparent px-6 text-background hover:bg-background/10"
                >
                  <a href="#work">
                    Explore the work <ArrowDown aria-hidden="true" className="size-4" />
                  </a>
                </Button>
              </div>
              <p className="mt-9 text-xs font-medium uppercase tracking-[0.13em] text-background/70">
                Hamilton, Canada
              </p>
            </div>
          </div>

          <a
            className="absolute bottom-8 right-16 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.12em] text-background/75 transition-colors hover:text-background lg:flex"
            href="#work"
          >
            Scroll to explore <ArrowDownRight aria-hidden="true" className="size-4" />
          </a>
        </section>

        <section
          id="work"
          aria-labelledby="work-title"
          className="border-y border-border/70 bg-secondary/50"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                A few things I’ve made
              </p>
              <h2 id="work-title" className="editorial-title text-5xl leading-none sm:text-6xl">
                Selected work<span className="text-primary">.</span>
              </h2>
            </div>

            <div className="mb-12">
              <CategoryTabs active={category} onChange={setCategory} />
            </div>

            {showYouTube && (
              <div className="mb-14 border-b border-border pb-14">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Featured on YouTube
                </p>
                <div className="grid grid-cols-1 items-start gap-x-7 gap-y-10 sm:grid-cols-3">
                  {FEATURED_YOUTUBE.map((item) => (
                    <ProjectCard key={item.id} project={item} onOpen={openProject} />
                  ))}
                </div>
                <a
                  href={SOCIAL_LINKS.youtube.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-primary"
                >
                  See more on my YouTube <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            )}

            {visibleProjects.length === 0 ? (
              <p className="py-16 text-center text-sm text-muted-foreground">
                Nothing in this category yet — check back soon.
              </p>
            ) : (
              <div className="grid grid-cols-1 items-start gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((item) => (
                  <ProjectCard key={item.id} project={item} onOpen={openProject} />
                ))}
              </div>
            )}

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-l-2 border-accent pl-4">
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                A selection of personal, independently created work. No featured piece is presented
                as a commissioned brand campaign.
              </p>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <a
                  href={SOCIAL_LINKS.tiktok.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-primary"
                >
                  See more on TikTok <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-primary"
                >
                  See more on Instagram <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-title"
          className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-16 lg:py-28"
        >
          <div className="relative mx-auto w-full max-w-[470px] lg:mx-0">
            <div className="aspect-[0.9] overflow-hidden bg-muted">
              <img
                src={storyboard}
                alt="Ella standing beside her playful illustrated collage and presenting its ideas."
                loading="lazy"
                className="size-full object-cover object-[left_center]"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              A little bit of the thinking behind the making.
            </p>
          </div>
          <div className="max-w-[590px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              The person behind the pictures
            </p>
            <h2 id="about-title" className="editorial-title text-5xl leading-[1.04] sm:text-6xl">
              I think in stories.
              <br />
              <span className="italic text-primary">And sometimes, in sketches.</span>
            </h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-muted-foreground">
              <p>
                Ella is a visual storyteller, creative director and illustrator working between
                cinematic video, poetic narration and hand-drawn illustration. Her work finds the
                human truths that make a story stay with you — pictured first, then brought to life.
              </p>
              <p>
                Based in Hamilton, Canada; open to thoughtful collaborations with brands and fellow
                creatives.
              </p>
            </div>
            <a
              href={SOCIAL_LINKS.contra.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              A little more about my work <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </section>

        <section
          id="writing"
          aria-labelledby="writing-title"
          className="border-y border-border/70 bg-secondary/50"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Dikaios of Abba
                </p>
                <h2
                  id="writing-title"
                  className="editorial-title text-5xl leading-none sm:text-6xl"
                >
                  Writing<span className="text-primary">.</span>
                </h2>
              </div>
              <a
                href={SOCIAL_LINKS.substack.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-primary"
              >
                See more on Substack <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>

            <div>
              {ARTICLES.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          aria-labelledby="services-title"
          className="bg-forest text-primary-foreground"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid grid-cols-1 gap-6 border-b border-primary-foreground/20 pb-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
                  Good ideas, made tangible
                </p>
                <h2
                  id="services-title"
                  className="editorial-title max-w-[650px] text-5xl leading-[1.02] sm:text-6xl"
                >
                  A creative partner from first thought to final frame.
                </h2>
              </div>
              <span className="editorial-title text-6xl text-citron sm:text-7xl" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "01",
                  "Visual storytelling",
                  "A clear creative idea, shaped into cinematic short-form content.",
                ],
                [
                  "02",
                  "Creative direction",
                  "A thoughtful point of view to make the story feel distinct and cohesive.",
                ],
                [
                  "03",
                  "Illustration-led ideas",
                  "Original drawings and visual concepts that bring a little more personality.",
                ],
                [
                  "04",
                  "Words with feeling",
                  "Poetic narration and considered writing that give an idea its voice.",
                ],
              ].map(([number, title, description]) => (
                <article
                  key={number}
                  className="min-h-[215px] border-b border-primary-foreground/20 py-7 sm:border-r sm:px-5 sm:first:pl-0 lg:border-b-0 lg:py-9 lg:first:pl-0 lg:last:border-r-0"
                >
                  <span className="text-xs tabular-nums text-citron">{number}</span>
                  <h3 className="mt-8 font-display text-2xl">{title}</h3>
                  <p className="mt-3 max-w-[250px] text-sm leading-6 text-primary-foreground/75">
                    {description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-primary-foreground/65">
              Potential collaboration formats, based on publicly listed creative capabilities. Scope
              and deliverables are agreed together.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="fit-title"
          className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24 lg:px-16 lg:py-24"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Where the story might go
            </p>
            <h2 id="fit-title" className="editorial-title text-5xl leading-[1.04] sm:text-6xl">
              A good fit for
              <br />
              <span className="italic text-primary">ideas with heart.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3">
            {[
              ["Culture & community", "01"],
              ["Lifestyle & everyday rituals", "02"],
              ["Creative tools & learning", "03"],
              ["Arts & illustration", "04"],
              ["Purpose-led projects", "05"],
              ["Story-first brands", "06"],
            ].map(([category, number]) => (
              <div
                key={number}
                className="flex min-h-28 flex-col justify-between border-b border-r border-border p-4 sm:min-h-36 sm:p-5"
              >
                <span className="text-[11px] tabular-nums text-muted-foreground">{number}</span>
                <span className="max-w-[150px] text-sm font-medium leading-5 sm:text-base">
                  {category}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground lg:col-start-2">
            Creative directions to explore — not a list of past brand partnerships.
          </p>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="relative mx-auto max-w-[1440px] overflow-hidden px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
        >
          <span
            className="editorial-title pointer-events-none absolute -right-5 top-2 text-[180px] leading-none text-accent/40 sm:right-10 sm:top-4 sm:text-[250px]"
            aria-hidden="true"
          >
            ✳
          </span>
          <div className="relative max-w-[780px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              For the stories we haven’t told yet
            </p>
            <h2
              id="contact-title"
              className="editorial-title text-6xl leading-[0.98] sm:text-7xl lg:text-8xl"
            >
              Have a good
              <br />
              one in mind<span className="text-primary">?</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Tell me what you’re dreaming up. I’d love to hear about your brand, your brief and the
              story you want to bring to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button asChild className="min-h-12 rounded-none px-6">
                <a href={SOCIAL_LINKS.email.url}>
                  Email me <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-12 rounded-none border-foreground/20 bg-transparent px-6 text-foreground hover:bg-secondary"
              >
                <a href={SOCIAL_LINKS.contra.url} target="_blank" rel="noreferrer">
                  Message me on Contra <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <SocialLinks include={["instagram", "tiktok", "substack", "youtube", "linkedin"]} />
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-5 py-7 sm:grid-cols-[1fr_auto] sm:items-center sm:px-10 lg:px-16">
          <div>
            <Link to="/" className="font-display text-2xl leading-none">
              ella roli<span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-xs text-muted-foreground">
              Stories told with a little more feeling.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <a className="min-h-11 content-center hover:text-foreground" href="#work">
              Work
            </a>
            <a className="min-h-11 content-center hover:text-foreground" href="#about">
              About
            </a>
            <SocialLinks
              include={["instagram", "tiktok", "substack", "youtube", "linkedin"]}
              className="min-h-11"
            />
            <span>© {new Date().getFullYear()} Ella Roli</span>
          </div>
        </div>
      </footer>

      <ProjectLightbox project={activeProject} onClose={closeProject} onNavigate={openProject} />
    </div>
  );
}
