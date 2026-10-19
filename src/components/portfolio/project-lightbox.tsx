import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Music2,
  Play,
  Youtube,
} from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { TikTokEmbed } from "@/components/portfolio/tiktok-embed";
import { YouTubeEmbed } from "@/components/portfolio/youtube-embed";
import { type Project, getProjectsByCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const SOURCE_ICON = { instagram: Instagram, tiktok: Music2, youtube: Youtube } as const;
const SOURCE_LABEL = {
  instagram: "View on Instagram",
  tiktok: "View on TikTok",
  youtube: "Watch on YouTube",
} as const;

function VideoPoster({
  project,
  aspect,
  onPlay,
}: {
  project: Project;
  aspect: string;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className={cn("group relative block max-h-[60vh] w-full", aspect)}
      aria-label={`Play ${project.title}`}
    >
      <img src={project.image} alt={project.alt} className="size-full object-cover" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35"
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background/90 backdrop-blur-sm transition-transform group-hover:scale-105"
      >
        <Play className="ml-0.5 size-6 fill-forest text-forest" />
      </span>
    </button>
  );
}

export function ProjectLightbox({
  project,
  onClose,
  onNavigate,
}: {
  project: Project | undefined;
  onClose: () => void;
  onNavigate: (slug: string) => void;
}) {
  const open = Boolean(project);
  const [playing, setPlaying] = useState(false);

  // Reset to the poster frame whenever a different project is opened, so the
  // embed only loads again when the visitor explicitly asks to play it.
  useEffect(() => setPlaying(false), [project?.slug]);

  const siblings = project ? getProjectsByCategory(project.category) : [];
  const index = project ? siblings.findIndex((item) => item.slug === project.slug) : -1;
  const prev = index > 0 ? siblings[index - 1] : undefined;
  const next = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : undefined;
  const SourceIcon = project ? SOURCE_ICON[project.sourcePlatform] : undefined;

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      {project && (
        <DialogContent
          className="max-h-[92vh] w-[calc(100vw-2rem)] max-w-3xl overflow-y-auto rounded-none border-border bg-background p-0 sm:rounded-sm"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogTitle className="sr-only">{project.title}</DialogTitle>

          {(project.mediaType === "image" || project.mediaType === "instagram") && (
            <div className="bg-muted">
              <img
                src={project.image}
                alt={project.alt}
                className="max-h-[60vh] w-full object-contain"
              />
            </div>
          )}

          {project.mediaType === "tiktok" && project.tiktokUrl && (
            <div className="bg-muted">
              {playing ? (
                <div className="py-6">
                  <TikTokEmbed url={project.tiktokUrl} />
                </div>
              ) : (
                <VideoPoster
                  project={project}
                  aspect="aspect-[9/16]"
                  onPlay={() => setPlaying(true)}
                />
              )}
            </div>
          )}

          {project.mediaType === "youtube" && project.youtubeId && (
            <div className="bg-muted">
              {playing ? (
                <YouTubeEmbed videoId={project.youtubeId} title={project.title} />
              ) : (
                <VideoPoster
                  project={project}
                  aspect="aspect-video"
                  onPlay={() => setPlaying(true)}
                />
              )}
            </div>
          )}

          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {project.location ? `${project.location} · ` : ""}
              {new Date(project.publishedAt).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
              })}
            </p>
            <h3 className="editorial-title mt-3 text-3xl leading-tight sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              {project.description}
            </p>

            {SourceIcon && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <SourceIcon aria-hidden="true" className="size-4" />
                {SOURCE_LABEL[project.sourcePlatform]}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            )}
          </div>

          {(prev || next) && (
            <div className="flex items-center justify-between border-t border-border px-6 py-4 sm:px-8">
              <button
                type="button"
                disabled={!prev}
                onClick={() => prev && onNavigate(prev.slug)}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowLeft aria-hidden="true" className="size-4" /> Previous
              </button>
              <button
                type="button"
                disabled={!next}
                onClick={() => next && onNavigate(next.slug)}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
              >
                Next <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}
