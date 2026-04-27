export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  era: string;
  readTime: string;
  image: string;
}

import a1 from "@/assets/article-1.jpg";
import a2 from "@/assets/article-2.jpg";
import a3 from "@/assets/article-3.jpg";

export const articles: Article[] = [
  {
    slug: "yanar-mohammed",
    title: "Yanar Mohammed: The Voice Iraqi Women Could Not Silence",
    excerpt: "Founder of the Organization of Women's Freedom in Iraq, she risked everything to shelter survivors of violence and fight for gender equality under threat.",
    category: "Human Rights",
    era: "Active 1990s – Present",
    readTime: "9 min read",
    image: a1,
  },
  {
    slug: "ada-lovelace",
    title: "Ada Lovelace: The Enchantress of Numbers",
    excerpt: "The daughter of Lord Byron who wrote the world's first computer algorithm a century before the machine that could run it.",
    category: "Innovation",
    era: "1815 – 1852",
    readTime: "7 min read",
    image: a2,
  },
  {
    slug: "mary-seacole",
    title: "Mary Seacole: The Nurse the Crimea Tried to Forget",
    excerpt: "She funded her own passage to the Crimean War to care for soldiers — and was overshadowed by history for a century.",
    category: "Medicine",
    era: "1805 – 1881",
    readTime: "7 min read",
    image: a3,
  },
  {
    slug: "rosalind-franklin",
    title: "Rosalind Franklin and the DNA That History Almost Forgot",
    excerpt: "The chemist whose Photo 51 unlocked the double helix — and whose name was nearly erased from the discovery.",
    category: "Science",
    era: "1920 – 1958",
    readTime: "8 min read",
    image: a1,
  },
  {
    slug: "sappho-of-lesbos",
    title: "Sappho: The Tenth Muse Whose Verses Were Burned",
    excerpt: "An ancient Greek poet whose lyric voice shaped Western literature, even as much of her work was destroyed.",
    category: "Poetry",
    era: "c. 630 – 570 BC",
    readTime: "6 min read",
    image: a2,
  },
  {
    slug: "hedy-lamarr",
    title: "Hedy Lamarr: The Inventor Hollywood Wanted to Hide",
    excerpt: "Beyond the silver screen, she co-invented the frequency-hopping technology behind modern Wi-Fi and Bluetooth.",
    category: "Innovation",
    era: "1914 – 2000",
    readTime: "9 min read",
    image: a3,
  },
];

export interface EventItem {
  id: string;
  date: Date;
  title: string;
  category: "Health" | "Finance" | "Hunger" | "Community";
  location: string;
  time: string;
  price: string;
  description: string;
}

const today = new Date();
const d = (offset: number, hour = 18) => {
  const date = new Date(today);
  date.setDate(today.getDate() + offset);
  date.setHours(hour, 0, 0, 0);
  return date;
};

export const events: EventItem[] = [
  { id: "1", date: d(3), title: "Flow & Canvas: Menstrual Awareness Painting Workshop", category: "Health", location: "The Studio, Brooklyn", time: "2:00 – 5:00 PM", price: "$25", description: "A creative workshop combining art therapy and menstrual education. Paint your cycle, learn about period health, and break the silence around menstruation through creativity." },
  { id: "2", date: d(7, 14), title: "Milk & Solidarity: Breastfeeding Banks Roundtable", category: "Community", location: "Community Center, Queens", time: "6:00 – 8:00 PM", price: "Free", description: "A community discussion on milk sharing, breastfeeding support, and mutual aid networks for nursing mothers. Featuring lactation consultants and mutual aid organizers." },
  { id: "3", date: d(10), title: "Nourishing Ourselves: Ways Through Hunger", category: "Hunger", location: "Westside Community Kitchen", time: "5:00 – 7:30 PM", price: "Donation", description: "Practical strategies for navigating food insecurity with dignity. Learn about food banks, community fridges, meal prep on a budget, and building mutual aid networks." },
];

import bracelet from "@/assets/product-bracelet.jpg";
import necklace from "@/assets/product-necklace.jpg";
import tshirt from "@/assets/product-tshirt.jpg";
import scarf from "@/assets/product-scarf.jpg";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  { id: "bracelet", name: "Pink Pearl Bracelet", tagline: "Hand-knotted freshwater pearls on silk thread", price: 68, image: bracelet, category: "Jewelry" },
  { id: "necklace", name: "Pink Pearl Necklace", tagline: "Delicate pearls on a fine sterling chain", price: 124, image: necklace, category: "Jewelry" },
  { id: "tshirt", name: "Pearl Graphic Tee", tagline: "Organic cotton with our signature illustration", price: 42, image: tshirt, category: "Apparel" },
  { id: "scarf", name: "Soft Summer Scarf", tagline: "Lightweight modal in blush rose", price: 56, image: scarf, category: "Apparel" },
];
