import { useState } from "react";
import { Heart, Scale, Sparkles, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const presets = [25, 50, 100, 250];

const allocations = [
  { icon: Scale, label: "Pro-bono legal aid", pct: 40, desc: "Lawyer hours for women navigating family, immigration, and labor law." },
  { icon: HeartHandshake, label: "Psychological support", pct: 35, desc: "Free therapy sessions with trauma-informed practitioners." },
  { icon: Sparkles, label: "Workshops & education", pct: 15, desc: "Health, finance, and storytelling programming open to all." },
  { icon: Heart, label: "Operations", pct: 10, desc: "A small team of women keeping the lights on with care." },
];

const Donate = () => {
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const final = custom ? Number(custom) : amount;
    if (!final || final < 1) {
      toast.error("Please choose a valid amount.");
      return;
    }
    toast.success(`Thank you for your $${final} ${frequency === "monthly" ? "monthly" : ""} gift 🤍`, {
      description: "This is a demo — no payment was processed.",
    });
  };

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-pearl">
        <div className="container">
          <SectionHeader
            eyebrow="Donate"
            title="Every gift becomes another woman's safety net."
            description="We're a small, women-led nonprofit. 90¢ of every dollar goes directly to legal aid, therapy, and education. Here's exactly where your gift travels."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          {/* Allocation */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-accent">Where your gift goes</h3>
            {allocations.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.label} className="bg-card rounded-2xl border border-border/60 p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-shimmer flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3 mb-1">
                        <h4 className="font-serif text-lg text-accent">{a.label}</h4>
                        <span className="font-serif text-xl text-primary">{a.pct}%</span>
                      </div>
                      <p className="text-sm text-foreground/65 leading-relaxed mb-3">{a.desc}</p>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full bg-gradient-gold" style={{ width: `${a.pct}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Donation form */}
          <form onSubmit={handleDonate} className="bg-card rounded-3xl border border-border/60 shadow-pearl p-8 md:p-10 sticky top-28">
            <h3 className="font-serif text-2xl text-accent mb-6">Make your gift</h3>

            <div className="grid grid-cols-2 gap-2 p-1 bg-secondary rounded-full mb-6">
              {(["once", "monthly"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFrequency(f)}
                  className={cn(
                    "py-2.5 rounded-full text-sm font-medium transition-smooth capitalize",
                    frequency === f ? "bg-card text-accent shadow-card" : "text-foreground/60"
                  )}
                >
                  {f === "once" ? "One time" : "Monthly"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => { setAmount(p); setCustom(""); }}
                  className={cn(
                    "py-4 rounded-xl border-2 font-serif text-xl transition-smooth",
                    !custom && amount === p
                      ? "border-primary bg-secondary/60 text-accent"
                      : "border-border bg-card text-foreground/70 hover:border-primary/50"
                  )}
                >
                  ${p}
                </button>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="custom">Custom amount</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50">$</span>
                <Input
                  id="custom"
                  type="number"
                  min="1"
                  inputMode="decimal"
                  placeholder="Other"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className="pl-8 h-12 text-lg font-serif"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <Input placeholder="First name" required maxLength={50} />
              <Input placeholder="Last name" required maxLength={50} />
            </div>
            <Input type="email" placeholder="Email" required maxLength={120} className="mb-6" />

            <Button type="submit" variant="pearl" size="xl" className="w-full">
              <Heart className="h-4 w-4" /> Donate ${custom || amount}{frequency === "monthly" && "/month"}
            </Button>

            <p className="text-xs text-foreground/55 text-center mt-4">
              Demo form — no payment is taken. Your real donation would be tax-deductible.
            </p>
          </form>
        </div>
      </section>

      {/* Trust band */}
      <section className="py-16 bg-gradient-blush">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "90%", label: "of every dollar funds programs" },
              { stat: "501(c)(3)", label: "registered nonprofit" },
              { stat: "12,400+", label: "women supported to date" },
            ].map((i) => (
              <div key={i.label}>
                <p className="font-serif text-4xl text-accent mb-2">{i.stat}</p>
                <p className="text-sm text-foreground/65 uppercase tracking-wider">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
