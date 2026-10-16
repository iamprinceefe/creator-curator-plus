import { Link } from "@tanstack/react-router";

import type { Article } from "@/data/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to="/writing/$slug"
      params={{ slug: article.slug }}
      className="group block border-t border-border py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring first:border-t-0 lg:py-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="editorial-title text-3xl leading-tight transition-colors group-hover:text-primary sm:text-4xl">
          {article.title}
        </h3>
        <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {new Date(article.publishedAt).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
          })}
        </span>
      </div>
      <p className="mt-2 text-sm italic text-muted-foreground">{article.subtitle}</p>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
        {article.excerpt[0]}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.topics.map((topic) => (
          <span
            key={topic}
            className="border border-border px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
          >
            {topic}
          </span>
        ))}
      </div>
    </Link>
  );
}
