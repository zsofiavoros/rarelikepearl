import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/archive", label: "The Archive" },
  { to: "/events", label: "Events" },
  { to: "/support", label: "Support" },
  { to: "/shop", label: "Shop" },
  { to: "/donate", label: "Donate" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-elegant",
        scrolled ? "bg-background/85 backdrop-blur-md shadow-card" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative h-9 w-9 rounded-full bg-gradient-shimmer shadow-pearl flex items-center justify-center">
            <span className="h-3 w-3 rounded-full bg-pearl-glow shadow-glow" />
          </span>
          <span className="font-serif text-xl tracking-tight text-accent">
            Rare Like Pearl
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3.5 py-2 text-sm tracking-wide rounded-md transition-smooth",
                  isActive
                    ? "text-accent font-semibold"
                    : "text-foreground/70 hover:text-accent"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="ml-3 inline-flex items-center h-10 px-5 rounded-md bg-gradient-gold text-primary-foreground text-sm font-medium tracking-wide shadow-pearl hover:shadow-glow transition-elegant"
          >
            Donate
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-md text-accent hover:bg-secondary/50"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-3 rounded-md text-base transition-smooth",
                    isActive ? "bg-secondary/60 text-accent font-semibold" : "text-foreground/80"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
