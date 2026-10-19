import { BookOpenText, Briefcase, Instagram, Linkedin, Mail, Music2, Youtube } from "lucide-react";

import { SOCIAL_LINKS } from "@/data/social";
import { cn } from "@/lib/utils";

const ICONS = {
  instagram: Instagram,
  tiktok: Music2,
  substack: BookOpenText,
  contra: Briefcase,
  email: Mail,
  youtube: Youtube,
  linkedin: Linkedin,
} as const;

export function SocialLinks({
  include,
  className,
  iconOnly = false,
}: {
  include: (keyof typeof SOCIAL_LINKS)[];
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-6 gap-y-3", className)}>
      {include.map((key) => {
        const link = SOCIAL_LINKS[key];
        const Icon = ICONS[key];
        return (
          <a
            key={key}
            href={link.url}
            target={key === "email" ? undefined : "_blank"}
            rel={key === "email" ? undefined : "noreferrer"}
            aria-label={`${link.label}: ${link.handle}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon aria-hidden="true" className="size-4 shrink-0" />
            {!iconOnly && <span>{link.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
