import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ARTICLES, getArticleBySlug } from "@/data/articles";

export const Route = createFileRoute("/writing/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Ella Roli` },
          { name: "description", content: loaderData.subtitle },
          { property: "og:title", content: `${loaderData.title} — Ella Roli` },
          { property: "og:description", content: loaderData.subtitle },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const index = ARTICLES.findIndex((item) => item.slug === article.slug);
  const next = ARTICLES[(index + 1) % ARTICLES.length]!;

  return (
    <article className="mx-auto max-w-[720px] px-5 py-14 sm:px-10 sm:py-20">
      <Link
        to="/"
        hash="writing"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft aria-hidden="true" className="size-4" /> Back to my portfolio
      </Link>

      <p className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {new Date(article.publishedAt).toLocaleDateString("en-CA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        · From the journal
      </p>
      <h1 className="editorial-title mt-4 text-5xl leading-[1.02] sm:text-6xl">{article.title}</h1>
      <p className="mt-3 text-lg italic text-muted-foreground">{article.subtitle}</p>

      <div className="prose-editorial mt-10 space-y-6 text-lg leading-8 text-foreground/90">
        {article.excerpt.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 border-y border-border py-6">
        <p className="text-sm leading-6 text-muted-foreground">
          This is an excerpt, shared with my words preserved exactly as written. Read the piece in
          full — and join the conversation in the comments — on Dikaios of Abba.
        </p>
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex min-h-11 items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
        >
          Continue reading on Substack <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Next</span>
        <Link
          to="/writing/$slug"
          params={{ slug: next.slug }}
          className="editorial-title text-2xl transition-colors hover:text-primary"
        >
          {next.title} →
        </Link>
      </div>
    </article>
  );
}
