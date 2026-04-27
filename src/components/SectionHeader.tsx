import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) => {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-5xl text-accent leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-foreground/70 text-base md:text-lg leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
};
