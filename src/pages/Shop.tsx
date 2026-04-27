import { useState } from "react";
import { Plus, Minus, ShoppingBag, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SectionHeader } from "@/components/SectionHeader";
import { products } from "@/data/content";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Shop = () => {
  const cart = useCart();
  const [checkingOut, setCheckingOut] = useState(false);

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      cart.clear();
      cart.setOpen(false);
      setCheckingOut(false);
      toast.success("Thank you for supporting our pearls ✨", {
        description: "This is a demo checkout — no payment was taken.",
      });
    }, 1200);
  };

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-pearl">
        <div className="container relative">
          <SectionHeader
            eyebrow="The Shop"
            title="Wear the mission. Fund the work."
            description="Every purchase from our small clothing line directly funds free legal and psychological support for women in need."
          />
          <button
            onClick={() => cart.setOpen(true)}
            className="absolute right-6 top-0 inline-flex items-center gap-2 bg-card border border-border/60 rounded-full px-5 py-3 shadow-card hover:shadow-pearl transition-elegant"
          >
            <ShoppingBag className="h-4 w-4 text-accent" />
            <span className="text-sm text-accent font-medium">Cart</span>
            {cart.count > 0 && (
              <span className="h-5 min-w-5 px-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                {cart.count}
              </span>
            )}
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary mb-4 shadow-card group-hover:shadow-pearl transition-elegant">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover group-hover:scale-105 transition-elegant"
                />
              </div>
              <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">{p.category}</p>
              <h3 className="font-serif text-xl text-accent mb-1">{p.name}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed mb-3 min-h-[2.5rem]">{p.tagline}</p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-accent">${p.price}</span>
                <Button variant="soft" size="sm" onClick={() => { cart.add(p); toast.success(`${p.name} added to cart`); }}>
                  <Plus className="h-3.5 w-3.5" /> Add
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Sheet open={cart.open} onOpenChange={cart.setOpen}>
        <SheetContent className="bg-background flex flex-col w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-serif text-2xl text-accent">Your cart</SheetTitle>
          </SheetHeader>

          {cart.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
              <ShoppingBag className="h-10 w-10 text-foreground/30" />
              <p className="text-foreground/60">Your cart is empty.</p>
              <Button variant="ghost" onClick={() => cart.setOpen(false)} className="text-primary">
                Continue shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 my-6 pr-1">
                {cart.items.map((i) => (
                  <div key={i.id} className="flex gap-4 bg-card rounded-xl p-3 border border-border/60">
                    <img src={i.image} alt={i.name} className="h-20 w-20 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-base text-accent leading-snug">{i.name}</h4>
                        <button onClick={() => cart.remove(i.id)} aria-label="Remove" className="text-foreground/40 hover:text-destructive">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm text-foreground/60 mt-1">${i.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => cart.update(i.id, i.qty - 1)} className="h-7 w-7 rounded-md border border-border flex items-center justify-center hover:bg-secondary">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm">{i.qty}</span>
                        <button onClick={() => cart.update(i.id, i.qty + 1)} className="h-7 w-7 rounded-md border border-border flex items-center justify-center hover:bg-secondary">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-foreground/70">
                  <span>Subtotal</span>
                  <span>${cart.total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-foreground/70">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex items-center justify-between font-serif text-xl text-accent border-t border-border pt-3">
                  <span>Total</span>
                  <span>${cart.total.toFixed(2)}</span>
                </div>
                <Button variant="pearl" size="lg" className="w-full" onClick={handleCheckout} disabled={checkingOut}>
                  {checkingOut ? "Processing…" : "Checkout"}
                </Button>
                <p className="text-xs text-foreground/50 text-center">Demo checkout — no real payment is taken.</p>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Shop;
