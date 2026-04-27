import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SectionHeader } from "@/components/SectionHeader";
import { events, EventItem } from "@/data/content";
import { Clock, MapPin, Ticket } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const categoryColor: Record<EventItem["category"], string> = {
  Health: "bg-pearl text-accent",
  Finance: "bg-secondary text-accent",
  Hunger: "bg-primary/30 text-accent",
  Community: "bg-muted text-accent",
};

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selected, setSelected] = useState<EventItem | null>(null);

  const eventDates = events.map((e) => e.date);
  const sameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const visibleEvents = date
    ? events.filter((e) => sameDay(e.date, date))
    : events;

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-pearl">
        <div className="container">
          <SectionHeader
            eyebrow="Events & Workshops"
            title="Gather. Learn. Heal together."
            description="Workshops on women's health, financial freedom, hunger relief, and community storytelling — open to all who identify as women."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-[auto_1fr] gap-10 items-start">
          {/* Calendar */}
          <div className="bg-card rounded-2xl border border-border/60 shadow-card p-2 md:p-4 mx-auto">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              modifiers={{ event: eventDates }}
              modifiersClassNames={{
                event: "relative font-bold text-accent after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-primary",
              }}
              className={cn("p-3 pointer-events-auto rounded-xl")}
            />
            <div className="px-4 pb-4 pt-2 text-xs text-foreground/60 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Days with events
            </div>
          </div>

          {/* Event list */}
          <div>
            <h3 className="font-serif text-2xl text-accent mb-6">
              {date ? date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "All upcoming"}
            </h3>

            {visibleEvents.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
                <p className="text-foreground/60">No events scheduled for this day.</p>
                <Button variant="ghost" className="text-primary mt-3" onClick={() => setDate(undefined)}>
                  View all events
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {visibleEvents.map((e) => (
                  <div
                    key={e.id}
                    className="rounded-2xl border border-border/60 bg-card p-6 shadow-card hover:shadow-pearl transition-elegant"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <span className={cn("text-xs px-3 py-1 rounded-full font-medium", categoryColor[e.category])}>
                        {e.category}
                      </span>
                      <span className="text-sm text-foreground/60">{e.date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</span>
                    </div>
                    <h4 className="font-serif text-2xl text-accent mb-2 leading-snug">{e.title}</h4>
                    <p className="text-foreground/70 leading-relaxed mb-4">{e.description}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/65 mb-5">
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {e.time}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {e.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Ticket className="h-3.5 w-3.5" /> {e.price}</span>
                    </div>
                    <Button variant="cocoa" onClick={() => setSelected(e)}>
                      Register
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {date && (
              <Button variant="ghost" className="mt-6 text-primary" onClick={() => setDate(undefined)}>
                Show all upcoming events
              </Button>
            )}
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-accent">{selected?.title}</DialogTitle>
            <DialogDescription className="text-foreground/70">
              {selected?.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} · {selected?.time}
            </DialogDescription>
          </DialogHeader>
          <p className="text-foreground/75 leading-relaxed">{selected?.description}</p>
          <div className="flex items-center justify-between border-t border-border pt-4 mt-2">
            <span className="text-sm text-foreground/60">{selected?.location}</span>
            <span className="font-serif text-xl text-accent">{selected?.price}</span>
          </div>
          <Button
            variant="pearl"
            size="lg"
            onClick={() => {
              toast.success("You're registered ✨", { description: `We'll email you details for ${selected?.title}.` });
              setSelected(null);
            }}
          >
            Confirm registration
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;
