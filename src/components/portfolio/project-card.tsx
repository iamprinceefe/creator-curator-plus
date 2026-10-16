import { ArrowUpRight, Play } from "lucide-react";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (slug: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project.slug)}
      className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <div
        className={cn(
          "relative overflow-hidden bg-muted",
          project.mediaType === "tiktok" ? "aspect-[9/16]" : "aspect-[4/5]",
        )}
      >
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />

        {project.mediaType === "tiktok" && (
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-4 grid size-9 place-items-center rounded-full bg-background/90 backdrop-blur-sm"
            >
              <Play className="size-3.5 fill-forest text-forest" />
            </span>
          </>
        )}

        <span
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-background text-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-display text-2xl leading-tight">{project.title}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {project.mediaType === "tiktok" ? "Reel" : "Illustration"} ·{" "}
            {project.location ?? new Date(project.publishedAt).getFullYear()}
          </p>
        </div>
      </div>
    </button>
  );
}
