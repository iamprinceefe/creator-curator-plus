import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

import portrait from "@/assets/ella-portrait.jpg.asset.json";
import storyboard from "@/assets/ella-storyboard.jpg.asset.json";
import artwork from "@/assets/ella-instagram-artwork.jpg.asset.json";
import { Button } from "@/components/ui/button";

const instagram = "https://www.instagram.com/ellaroli_/";
const contra = "https://contra.com/roli_amori_qt0rz00i";

export const Route = createFileRoute("/")({
  component: CreatorPortfolio,
  head: () => ({
    meta: [
      { title: "Ella Roli — Visual Storyteller & Creative Director" },
      { name: "description", content: "Ella Roli is a visual storyteller, illustrator and creative director making cinematic content and thoughtful stories for brands and creators." },
      { property: "og:title", content: "Ella Roli — Visual Storyteller & Creative Director" },
      { property: "og:description", content: "Cinematic content, thoughtful words and illustration-led ideas by Ella Roli." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const portfolioItems = [
  {
    number: "01",
    title: "A return to drawing",
    kind: "Illustration · Carousel",
    image: artwork.url,
    alt: "Colorful hand-drawn artwork and a playful illustrated page from Ella's Instagram post.",
    link: "https://www.instagram.com/p/Deh3u82lniA/",
    shape: "portrait",
  },
  {
    number: "02",
    title: "The story behind the story",
    kind: "Personal storytelling · Portrait",
    image: portrait.url,
    alt: "Ella smiling in front of a vivid chartreuse green wall.",
    link: instagram,
    shape: "landscape",
  },
  {
    number: "03",
    title: "Making ideas visible",
    kind: "Creative process · Editorial portrait",
    image: storyboard.url,
    alt: "Ella presenting her illustrated idea board in a white shirt.",
    link: instagram,
    shape: "portrait",
  },
];

function CreatorPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <a href="#content" className="sr-only z-50 rounded-sm bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header className="relative z-40 border-b border-border/70 bg-background">
        <div className="mx-auto grid min-h-[76px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:px-16">
          <Link to="/" aria-label="Ella Roli, home" className="font-display text-[1.7rem] leading-none sm:text-3xl">ella roli<span className="text-primary">.</span></Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 text-sm text-muted-foreground lg:flex">
            <a className="transition-colors hover:text-foreground" href="#work">Selected work</a>
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
            <a className="transition-colors hover:text-foreground" href="#services">What I do</a>
          </nav>
          <div className="hidden justify-self-end lg:block">
            <Button asChild variant="default" className="min-h-11 rounded-none px-5 font-medium">
              <a href="#contact">Let’s collaborate <ArrowUpRight aria-hidden="true" className="size-4" /></a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11 justify-self-end lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-5 shadow-sm lg:hidden">
            <div className="mx-auto grid max-w-[1440px] gap-1">
              <a onClick={closeMenu} className="min-h-12 content-center border-b border-border/70 text-base" href="#work">Selected work</a>
              <a onClick={closeMenu} className="min-h-12 content-center border-b border-border/70 text-base" href="#about">About</a>
              <a onClick={closeMenu} className="min-h-12 content-center border-b border-border/70 text-base" href="#services">What I do</a>
              <a onClick={closeMenu} className="min-h-12 content-center text-base text-primary" href="#contact">Let’s collaborate <ArrowUpRight aria-hidden="true" className="inline size-4" /></a>
            </div>
          </nav>
        )}
      </header>

      <div id="content">
        <section aria-labelledby="intro-title" className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-16 lg:min-h-[700px] lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-16 lg:py-20">
          <div className="relative z-10 max-w-[620px] reveal-up">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <span className="inline-block size-2 rounded-full bg-primary" /> Visual storyteller · Illustrator · Creative director
            </p>
            <h1 id="intro-title" className="editorial-title max-w-[590px] text-[3.8rem] leading-[0.96] sm:text-7xl lg:text-[6.5rem]">
              Ideas, given <span className="italic text-primary">feeling.</span>
            </h1>
            <p className="mt-7 max-w-[470px] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I’m Ella Roli — a storyteller and illustrator making thoughtful ideas visible through cinematic content, poetic words and playful visuals.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild className="min-h-12 rounded-none px-6">
                <a href="#contact">Let’s make something <ArrowUpRight aria-hidden="true" className="size-4" /></a>
              </Button>
              <Button asChild variant="outline" className="min-h-12 rounded-none border-foreground/20 bg-transparent px-6 text-foreground hover:bg-secondary">
                <a href="#work">Explore the work <ArrowDown aria-hidden="true" className="size-4" /></a>
              </Button>
            </div>
            <p className="mt-9 text-xs font-medium uppercase tracking-[0.13em] text-muted-foreground">Independent creative · Hamilton, Canada</p>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-0">
            <div className="relative aspect-[0.91] overflow-hidden bg-accent">
              <img src={portrait.url} alt="Ella Roli, smiling in a white shirt against a chartreuse green backdrop." fetchPriority="high" className="size-full object-cover object-center" />
            </div>
            <div className="paper-grain absolute -bottom-5 -left-3 flex max-w-[195px] items-center gap-3 border border-foreground/15 bg-background px-4 py-3 shadow-sm sm:-left-7 sm:bottom-8 sm:max-w-[220px]">
              <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-petal font-display text-xl">✳</span>
              <span className="text-xs leading-5">Visual ideas,<br />with a human heart.</span>
            </div>
            <span className="editorial-title absolute -right-1 top-4 text-5xl text-background mix-blend-difference sm:-right-6 sm:top-7 sm:text-6xl" aria-hidden="true">E.</span>
          </div>
          <a className="absolute bottom-8 right-16 hidden items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted-foreground lg:flex" href="#work">Scroll to explore <ArrowDownRight aria-hidden="true" className="size-4" /></a>
        </section>

        <section id="work" aria-labelledby="work-title" className="border-y border-border/70 bg-secondary/50">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">A few things I’ve made</p>
                <h2 id="work-title" className="editorial-title text-5xl leading-none sm:text-6xl">Selected work<span className="text-primary">.</span></h2>
              </div>
              <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-primary">More on Instagram <ArrowUpRight aria-hidden="true" className="size-4" /></a>
            </div>

            <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <a key={item.number} href={item.link} target="_blank" rel="noreferrer" className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background">
                  <div className={`relative overflow-hidden bg-muted ${item.shape === "landscape" ? "aspect-[1.03] sm:mt-16" : "aspect-[0.82]"}`}>
                    <img src={item.image} alt={item.alt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                    <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-background text-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true"><ArrowUpRight className="size-5" /></span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-display text-2xl leading-tight">{item.title}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{item.kind}</p>
                    </div>
                    <span className="shrink-0 pt-1 text-xs tabular-nums text-muted-foreground">{item.number}</span>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-9 max-w-2xl border-l-2 border-accent pl-4 text-sm leading-6 text-muted-foreground">A selection of personal, independently created work. No featured piece is presented as a commissioned brand campaign.</p>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-16 lg:py-28">
          <div className="relative mx-auto w-full max-w-[470px] lg:mx-0">
            <div className="aspect-[0.9] overflow-hidden bg-muted">
              <img src={storyboard.url} alt="Ella standing beside her playful illustrated collage and presenting its ideas." loading="lazy" className="size-full object-cover object-[left_center]" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">A little bit of the thinking behind the making.</p>
          </div>
          <div className="max-w-[590px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">The person behind the pictures</p>
            <h2 id="about-title" className="editorial-title text-5xl leading-[1.04] sm:text-6xl">I think in stories.<br /><span className="italic text-primary">And sometimes, in sketches.</span></h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-muted-foreground">
              <p>I’m Ella — a visual storyteller, creative director and illustrator. Before I made videos and built stories for the screen, I was drawing. In 2026, I found my way back to that part of myself, and it helped me see how I’ve always approached an idea: picture it first, then bring it to life.</p>
              <p>My work moves between cinematic visuals, poetic narration, playful illustration and strategy. I’m drawn to the little human truths that make a story stay with you — and to finding the clearest, most considered way to share them.</p>
              <p>Based in Hamilton, Canada; open to thoughtful collaborations with brands and fellow creatives.</p>
            </div>
            <a href={contra} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary">A little more about my work <ArrowUpRight aria-hidden="true" className="size-4" /></a>
          </div>
        </section>

        <section id="services" aria-labelledby="services-title" className="bg-forest text-primary-foreground">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid grid-cols-1 gap-6 border-b border-primary-foreground/20 pb-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">Good ideas, made tangible</p>
                <h2 id="services-title" className="editorial-title max-w-[650px] text-5xl leading-[1.02] sm:text-6xl">A creative partner from first thought to final frame.</h2>
              </div>
              <span className="editorial-title text-6xl text-citron sm:text-7xl" aria-hidden="true">✳</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Visual storytelling", "A clear creative idea, shaped into cinematic short-form content."],
                ["02", "Creative direction", "A thoughtful point of view to make the story feel distinct and cohesive."],
                ["03", "Illustration-led ideas", "Original drawings and visual concepts that bring a little more personality."],
                ["04", "Words with feeling", "Poetic narration and considered writing that give an idea its voice."],
              ].map(([number, title, description]) => (
                <article key={number} className="min-h-[215px] border-b border-primary-foreground/20 py-7 sm:border-r sm:px-5 sm:first:pl-0 lg:border-b-0 lg:py-9 lg:first:pl-0 lg:last:border-r-0">
                  <span className="text-xs tabular-nums text-citron">{number}</span>
                  <h3 className="mt-8 font-display text-2xl">{title}</h3>
                  <p className="mt-3 max-w-[250px] text-sm leading-6 text-primary-foreground/75">{description}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-primary-foreground/65">Potential collaboration formats, based on publicly listed creative capabilities. Scope and deliverables are agreed together.</p>
          </div>
        </section>

        <section aria-labelledby="fit-title" className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24 lg:px-16 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Where the story might go</p>
            <h2 id="fit-title" className="editorial-title text-5xl leading-[1.04] sm:text-6xl">A good fit for<br /><span className="italic text-primary">ideas with heart.</span></h2>
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
              <div key={number} className="flex min-h-28 flex-col justify-between border-b border-r border-border p-4 sm:min-h-36 sm:p-5">
                <span className="text-[11px] tabular-nums text-muted-foreground">{number}</span>
                <span className="max-w-[150px] text-sm font-medium leading-5 sm:text-base">{category}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground lg:col-start-2">Creative directions to explore — not a list of past brand partnerships.</p>
        </section>

        <section aria-labelledby="process-title" className="border-y border-border/70 bg-secondary/50">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-10 max-w-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">From conversation to creation</p>
              <h2 id="process-title" className="editorial-title text-5xl leading-none sm:text-6xl">A thoughtful process.</h2>
            </div>
            <ol className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Listen", "We start with your brief, audience and what you want the story to do."],
                ["02", "Imagine", "We find a concept and creative direction that feel right for your brand."],
                ["03", "Make", "I bring the agreed idea to life with care, craft and a clear point of view."],
                ["04", "Share", "You receive the agreed creative deliverables, ready for their next chapter."],
              ].map(([number, title, description]) => (
                <li key={number} className="border-t border-border py-6 sm:mr-5 sm:pr-3 lg:mr-6 lg:py-7">
                  <p className="flex items-center justify-between text-xs tabular-nums text-muted-foreground"><span>{number}</span><span aria-hidden="true" className="h-px w-12 bg-border lg:w-16" /></p>
                  <h3 className="mt-7 font-display text-3xl">{title}</h3>
                  <p className="mt-3 max-w-[250px] text-sm leading-6 text-muted-foreground">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="relative mx-auto max-w-[1440px] overflow-hidden px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
          <span className="editorial-title pointer-events-none absolute -right-5 top-2 text-[180px] leading-none text-accent/40 sm:right-10 sm:top-4 sm:text-[250px]" aria-hidden="true">✳</span>
          <div className="relative max-w-[780px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">For the stories we haven’t told yet</p>
            <h2 id="contact-title" className="editorial-title text-6xl leading-[0.98] sm:text-7xl lg:text-8xl">Have a good<br />one in mind<span className="text-primary">?</span></h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">Tell me what you’re dreaming up. I’d love to hear about your brand, your brief and the story you want to bring to life.</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button asChild className="min-h-12 rounded-none px-6">
                <a href={contra} target="_blank" rel="noreferrer">Message me on Contra <ArrowUpRight aria-hidden="true" className="size-4" /></a>
              </Button>
              <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-primary">Instagram <ArrowUpRight aria-hidden="true" className="size-4" /></a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-5 text-muted-foreground">A direct business email was not publicly verifiable, so I’ve linked to Ella’s public collaboration and social profiles instead.</p>
          </div>
        </section>
      </div>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-5 py-7 sm:grid-cols-[1fr_auto] sm:items-center sm:px-10 lg:px-16">
          <div>
            <Link to="/" className="font-display text-2xl leading-none">ella roli<span className="text-primary">.</span></Link>
            <p className="mt-2 text-xs text-muted-foreground">Stories told with a little more feeling.</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <a className="min-h-11 content-center hover:text-foreground" href="#work">Work</a>
            <a className="min-h-11 content-center hover:text-foreground" href="#about">About</a>
            <a className="min-h-11 content-center hover:text-foreground" href="#services">What I do</a>
            <a className="min-h-11 content-center hover:text-foreground" href={instagram} target="_blank" rel="noreferrer">Instagram</a>
            <span>© {new Date().getFullYear()} Ella Roli</span>
          </div>
        </div>
      </footer>
    </div>
  );
}