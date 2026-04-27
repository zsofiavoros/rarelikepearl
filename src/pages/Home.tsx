import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { articles, events } from "@/data/content";
import heroImage from "@/assets/hero-pearl.jpg";

const Home = () => {
  const featuredArticles = articles.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-pearl" />
        <div className="absolute inset-0 bg-gradient-shimmer opacity-30" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-6">
              For women, by women
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-accent leading-[1.05] text-balance">
              Every woman is unique — just like a true{" "}
              <span className="italic text-primary">pearl</span> in the ocean.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-xl text-balance">
              A community space honoring the women history forgot, building care
              networks for the women still here, and shaping a kinder, fairer future
              together.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="pearl" size="xl">
                <Link to="/donate">
                  <Heart className="h-4 w-4" /> Donate
                </Link>
              </Button>
              <Button asChild variant="outlineGold" size="xl">
                <Link to="/archive">
                  Read the Archive <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-foreground/60">
              <div>
                <p className="font-serif text-2xl text-accent">200+</p>
                <p className="text-xs uppercase tracking-wider mt-1">Stories archived</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-serif text-2xl text-accent">12k</p>
                <p className="text-xs uppercase tracking-wider mt-1">Women supported</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-serif text-2xl text-accent">48</p>
                <p className="text-xs uppercase tracking-wider mt-1">Cities</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-pearl">
              <img
                src={heroImage}
                alt="A luminous pink pearl resting on cream silk"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-soft border border-border/60 animate-float">
              <Sparkles className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wider text-foreground/60">Today</p>
                <p className="text-sm font-semibold text-accent">A new story is shared</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission band */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="Our mission"
            title="Reclaiming the names history left in the margins."
            description="From poets whose verses were burned to scientists whose discoveries were taken — we gather the stories, honor the lives, and build the safety nets women deserve today."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { title: "Remember", desc: "An archive for the brilliant women whose contributions were minimized, stolen, or erased." },
              { title: "Resource", desc: "Free legal and psychological support for women who need a safe, confidential first step." },
              { title: "Rise", desc: "Workshops, salons, and community events on health, finance, and mutual care." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-card p-8 border border-border/60 shadow-card hover:shadow-pearl transition-elegant">
                <div className="h-12 w-12 rounded-full bg-gradient-shimmer flex items-center justify-center mb-5">
                  <span className="h-3 w-3 rounded-full bg-pearl-glow shadow-glow" />
                </div>
                <h3 className="font-serif text-2xl text-accent mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-20 md:py-28 bg-gradient-blush">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeader
              eyebrow="The Archive"
              title="Stories worth re-telling."
              align="left"
              className="md:max-w-xl mx-0"
            />
            <Button asChild variant="ghost" className="text-accent w-fit">
              <Link to="/archive">View all stories <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((a) => (
              <Link
                to="/archive"
                key={a.slug}
                className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-card hover:shadow-pearl transition-elegant"
              >
                <div className="aspect-[4/3] overflow-hidden">
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
                  <p className="text-sm text-foreground/65 leading-relaxed line-clamp-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeader
              eyebrow="Gather"
              title="Upcoming events & workshops."
              align="left"
              className="md:max-w-xl mx-0"
            />
            <Button asChild variant="ghost" className="text-accent w-fit">
              <Link to="/events">See full calendar <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((e) => (
              <div key={e.id} className="rounded-2xl border border-border/60 bg-card p-6 shadow-card hover:shadow-pearl transition-elegant">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-center bg-secondary rounded-xl px-4 py-3">
                    <p className="text-xs uppercase tracking-wider text-accent">
                      {e.date.toLocaleString("en-US", { month: "short" })}
                    </p>
                    <p className="font-serif text-2xl text-accent leading-none mt-0.5">{e.date.getDate()}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-pearl text-accent font-medium">{e.category}</span>
                </div>
                <h3 className="font-serif text-xl text-accent mb-2 leading-snug">{e.title}</h3>
                <p className="text-sm text-foreground/60 mb-4">{e.location} · {e.time}</p>
                <Link to="/events" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-smooth">
                  Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-cocoa text-primary-foreground p-10 md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-shimmer opacity-20 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Calendar className="h-6 w-6 text-primary mb-5" />
                <h2 className="font-serif text-3xl md:text-5xl leading-tight text-balance">
                  Your gift becomes another woman's safety net.
                </h2>
              </div>
              <div>
                <p className="text-primary-foreground/85 leading-relaxed text-lg mb-8">
                  Every dollar funds free legal aid, therapy hours, and emergency
                  resources for women who reach out to us in their hardest moments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="pearl" size="xl">
                    <Link to="/donate">Donate now <Heart className="h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="xl" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <Link to="/support">Get support</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
