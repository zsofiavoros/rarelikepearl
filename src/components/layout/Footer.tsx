import { Link } from "react-router-dom";
import { Instagram, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-32 border-t border-border bg-gradient-blush">
      <div className="container py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-9 w-9 rounded-full bg-gradient-shimmer shadow-pearl flex items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-pearl-glow" />
            </span>
            <span className="font-serif text-xl text-accent">Rare Like Pearl</span>
          </div>
          <p className="text-foreground/70 max-w-md leading-relaxed">
            A community space for women, by women. Every woman is unique — just like a
            true pearl in the ocean.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg text-accent mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-foreground/70">
            <li><Link to="/archive" className="hover:text-accent transition-smooth">The Archive</Link></li>
            <li><Link to="/events" className="hover:text-accent transition-smooth">Events</Link></li>
            <li><Link to="/support" className="hover:text-accent transition-smooth">Support</Link></li>
            <li><Link to="/shop" className="hover:text-accent transition-smooth">Shop</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-accent mb-4">Get involved</h4>
          <ul className="space-y-2.5 text-sm text-foreground/70">
            <li><Link to="/donate" className="hover:text-accent transition-smooth">Donate</Link></li>
            <li><a href="#" className="hover:text-accent transition-smooth">Volunteer</a></li>
            <li><a href="#" className="hover:text-accent transition-smooth">Newsletter</a></li>
            <li className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-smooth"><Instagram className="h-4 w-4" /></a>
              <a href="mailto:hello@rarelikepearl.org" aria-label="Email" className="hover:text-accent transition-smooth"><Mail className="h-4 w-4" /></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} Rare Like Pearl. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Made with <Heart className="h-3 w-3 fill-current text-primary" /> for every pearl.</p>
        </div>
      </div>
    </footer>
  );
};
