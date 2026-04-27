import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "@/components/SectionHeader";
import { articles } from "@/data/content";
import { cn } from "@/lib/utils";

const categories = ["All", "Science", "Poetry", "Medicine", "Innovation", "Human Rights", "Art"];

const Archive = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const inCat = active === "All" || a.category === active;
      const inQuery = !query || (a.title + a.excerpt).toLowerCase().includes(query.toLowerCase());
      return inCat && inQuery;
    });
  }, [query, active]);

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-pearl">
        <div className="container">
          <SectionHeader
            eyebrow="The Archive"
            title="The women history left in the margins."
            description="A growing library of essays on the artists, scientists, healers, and activists whose names deserve to be spoken aloud."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search stories…"
                className="pl-11 h-12 bg-card border-border/60 rounded-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm transition-smooth border",
                    active === c
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card text-foreground/70 border-border/60 hover:border-primary"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <article
                key={a.slug}
                className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-card hover:shadow-pearl transition-elegant cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-elegant"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                    <span>{a.category}</span>
                    <span className="text-foreground/30">•</span>
                    <span className="text-foreground/50">{a.era}</span>
                  </div>
                  <h3 className="font-serif text-xl text-accent leading-snug mb-2 group-hover:text-primary transition-smooth">
                    {a.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-4">{a.excerpt}</p>
                  <p className="text-xs text-foreground/50">{a.readTime}</p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-foreground/60 py-16">No stories found. Try another search.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Archive;
