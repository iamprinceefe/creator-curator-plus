import { CATEGORIES, type CategorySlug } from "@/data/categories";
import { cn } from "@/lib/utils";

export function CategoryTabs({
  active,
  onChange,
}: {
  active: CategorySlug | "all";
  onChange: (value: CategorySlug | "all") => void;
}) {
  const tabs: { slug: CategorySlug | "all"; label: string }[] = [
    { slug: "all", label: "All work" },
    ...CATEGORIES.map((category) => ({ slug: category.slug, label: category.label })),
  ];

  return (
    <div
      role="tablist"
      aria-label="Filter selected work by category"
      className="flex flex-wrap gap-2"
    >
      {tabs.map((tab) => (
        <button
          key={tab.slug}
          type="button"
          role="tab"
          aria-selected={active === tab.slug}
          onClick={() => onChange(tab.slug)}
          className={cn(
            "min-h-10 border px-4 text-sm font-medium transition-colors",
            active === tab.slug
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
