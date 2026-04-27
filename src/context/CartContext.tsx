import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/content";

interface CartItem extends Product {
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  update: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const Ctx = createContext<CartCtx | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = (p: Product) => {
    setItems((curr) => {
      const existing = curr.find((i) => i.id === p.id);
      if (existing) return curr.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...curr, { ...p, qty: 1 }];
    });
    setOpen(true);
  };
  const remove = (id: string) => setItems((curr) => curr.filter((i) => i.id !== id));
  const update = (id: string, qty: number) =>
    setItems((curr) => curr.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const clear = () => setItems([]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, update, clear, total, count, open, setOpen }}>
      {children}
    </Ctx.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
