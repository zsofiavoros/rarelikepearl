import { useState } from "react";
import { Scale, HeartHandshake, Lock, ShieldCheck, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { SectionHeader } from "@/components/SectionHeader";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Please share a name (or alias).").max(80),
  contact: z.string().trim().min(3, "How can we reach you?").max(120),
  message: z.string().trim().min(10, "Please share a little more so we can help.").max(2000),
});

const Support = () => {
  const [tab, setTab] = useState("legal");
  const [urgency, setUrgency] = useState("standard");
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      contact: fd.get("contact"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    toast.success("Your message is safely with us 🤍", {
      description: "A trained counselor will reach out within 24 hours through your chosen channel.",
    });
    e.currentTarget.reset();
    setAnonymous(false);
  };

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-pearl">
        <div className="container">
          <SectionHeader
            eyebrow="Support & Resources"
            title="You are not alone. Reach out — confidentially."
            description="Free, judgement-free legal counsel and psychological support, offered by women who believe you."
          />
          <div className="mt-10 mx-auto max-w-2xl flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/70">
            <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-primary" /> Encrypted submissions</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Pro-bono advocates</span>
            <span className="inline-flex items-center gap-2"><PhoneCall className="h-4 w-4 text-primary" /> 24-hour response</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="bg-card rounded-3xl border border-border/60 shadow-card p-6 md:p-10">
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList className="grid grid-cols-2 w-full bg-secondary mb-8">
                <TabsTrigger value="legal" className="data-[state=active]:bg-card data-[state=active]:text-accent">
                  <Scale className="h-4 w-4 mr-2" /> Legal help
                </TabsTrigger>
                <TabsTrigger value="psych" className="data-[state=active]:bg-card data-[state=active]:text-accent">
                  <HeartHandshake className="h-4 w-4 mr-2" /> Psychological support
                </TabsTrigger>
              </TabsList>

              <TabsContent value="legal" className="space-y-6 mt-0">
                <div>
                  <h3 className="font-serif text-2xl text-accent mb-2">Speak with an advocate</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Our network of pro-bono lawyers can help with domestic violence, family law,
                    workplace discrimination, immigration, and tenant rights. Everything you share
                    is held in confidence.
                  </p>
                </div>
                <ContactForm onSubmit={handleSubmit} urgency={urgency} setUrgency={setUrgency} anonymous={anonymous} setAnonymous={setAnonymous} />
              </TabsContent>

              <TabsContent value="psych" className="space-y-6 mt-0">
                <div>
                  <h3 className="font-serif text-2xl text-accent mb-2">Talk to a therapist</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Free, sliding-scale sessions with licensed therapists trained in trauma-informed
                    care. We'll match you with someone who fits — and your first conversation is
                    always free.
                  </p>
                </div>
                <ContactForm onSubmit={handleSubmit} urgency={urgency} setUrgency={setUrgency} anonymous={anonymous} setAnonymous={setAnonymous} />
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-gradient-cocoa text-primary-foreground p-8 shadow-soft">
              <PhoneCall className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-serif text-2xl mb-2">In immediate danger?</h3>
              <p className="text-primary-foreground/85 leading-relaxed mb-5">
                If you are in crisis right now, please call your local emergency number first.
                Then, when it's safe, we are here.
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="text-primary-foreground/60">Crisis hotline:</span> <span className="font-semibold">1-800-PEARLS</span></p>
                <p><span className="text-primary-foreground/60">SMS line:</span> <span className="font-semibold">Text HELP to 7777</span></p>
              </div>
            </div>

            <div className="rounded-2xl bg-card border border-border/60 p-8 shadow-card">
              <h3 className="font-serif text-xl text-accent mb-4">What to expect</h3>
              <ol className="space-y-4 text-sm text-foreground/75">
                {[
                  "You submit the form (anonymously if you'd like).",
                  "A trained advocate reads it within 24 hours.",
                  "We reach out through your preferred channel only.",
                  "We listen — and connect you with the right help.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary text-accent text-xs font-bold flex items-center justify-center">{i + 1}</span>
                    <span className="leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactForm = ({
  onSubmit,
  urgency,
  setUrgency,
  anonymous,
  setAnonymous,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  urgency: string;
  setUrgency: (v: string) => void;
  anonymous: boolean;
  setAnonymous: (v: boolean) => void;
}) => (
  <form onSubmit={onSubmit} className="space-y-5">
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name or alias</Label>
        <Input id="name" name="name" placeholder={anonymous ? "Anonymous Pearl" : "Your name"} required maxLength={80} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact">How can we reach you?</Label>
        <Input id="contact" name="contact" placeholder="Email or phone (whichever you trust)" required maxLength={120} />
      </div>
    </div>

    <div className="space-y-3">
      <Label>How urgent is this?</Label>
      <RadioGroup value={urgency} onValueChange={setUrgency} className="grid sm:grid-cols-3 gap-3">
        {[
          { v: "standard", label: "Within a week" },
          { v: "soon", label: "Within 48 hours" },
          { v: "urgent", label: "As soon as possible" },
        ].map((o) => (
          <label
            key={o.v}
            htmlFor={`u-${o.v}`}
            className={`cursor-pointer rounded-lg border px-4 py-3 text-sm transition-smooth ${
              urgency === o.v ? "border-primary bg-secondary/60 text-accent" : "border-border bg-card text-foreground/70"
            }`}
          >
            <RadioGroupItem id={`u-${o.v}`} value={o.v} className="sr-only" />
            {o.label}
          </label>
        ))}
      </RadioGroup>
    </div>

    <div className="space-y-2">
      <Label htmlFor="message">What's on your heart?</Label>
      <Textarea id="message" name="message" rows={5} placeholder="Share as much or as little as you'd like." required maxLength={2000} />
    </div>

    <div className="flex items-start gap-3 rounded-lg bg-secondary/40 p-4">
      <Checkbox id="anon" checked={anonymous} onCheckedChange={(v) => setAnonymous(!!v)} />
      <Label htmlFor="anon" className="text-sm font-normal text-foreground/75 leading-relaxed cursor-pointer">
        Reach out anonymously. We'll only use the contact you provide and won't store identifying info.
      </Label>
    </div>

    <Button type="submit" variant="pearl" size="lg" className="w-full">
      Send safely
    </Button>
    <p className="text-xs text-foreground/55 text-center">
      Your submission is encrypted and read only by trained counselors.
    </p>
  </form>
);

export default Support;
