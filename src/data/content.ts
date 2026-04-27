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
    slug: "mary-seacole",
    title: "Mary Seacole: The Nurse the Crimea Tried to Forget",
    excerpt: "She funded her own passage to the Crimean War to care for soldiers — and was overshadowed by history for a century.",
    category: "Medicine",
    era: "1805 – 1881",
    readTime: "7 min read",
    image: a3,
  },
  {
    slug: "hedy-lamarr",
    title: "Hedy Lamarr: The Inventor Hollywood Wanted to Hide",
    excerpt: "Beyond the silver screen, she co-invented the frequency-hopping technology behind modern Wi-Fi and Bluetooth.",
    category: "Innovation",
    era: "1914 – 2000",
    readTime: "9 min read",
    image: a1,
  },
  {
    slug: "ida-b-wells",
    title: "Ida B. Wells: The Journalist Who Refused to Be Silenced",
    excerpt: "A founding civil rights activist whose investigative reporting changed America — and was long left out of textbooks.",
    category: "Human Rights",
    era: "1862 – 1931",
    readTime: "10 min read",
    image: a3,
  },
  {
    slug: "artemisia-gentileschi",
    title: "Artemisia Gentileschi: Painting Her Own Justice",
    excerpt: "A Baroque master whose canvases of strength and survival were credited to men for nearly four hundred years.",
    category: "Art",
    era: "1593 – 1656",
    readTime: "8 min read",
    image: a2,
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
  { id: "1", date: d(3), title: "Reproductive Health Roundtable", category: "Health", location: "Online", time: "6:00 – 7:30 PM", price: "Free", description: "An open conversation with women's health practitioners covering reproductive autonomy, menstrual care, and access to clinics." },
  { id: "2", date: d(7, 14), title: "Money, Power & Independence", category: "Finance", location: "Brooklyn, NY", time: "2:00 – 4:00 PM", price: "$15", description: "A practical workshop on building credit, negotiating salary, and investing for long-term financial freedom." },
  { id: "3", date: d(10), title: "Feeding the Block: Mutual Aid Night", category: "Hunger", location: "Community Hall", time: "6:00 – 9:00 PM", price: "Donation", description: "Cook, pack, and distribute meals with our mutual aid kitchen serving women and families experiencing food insecurity." },
  { id: "4", date: d(14, 11), title: "Mental Health & Motherhood", category: "Health", location: "Online", time: "11:00 AM – 12:30 PM", price: "Free", description: "A safe-space discussion with licensed therapists on postpartum care, identity, and the invisible labor of mothering." },
  { id: "5", date: d(18, 19), title: "Pearls in Conversation: Storytelling Salon", category: "Community", location: "The Archive Room", time: "7:00 – 9:00 PM", price: "$10", description: "An evening of readings, song, and shared stories from the women in our community." },
  { id: "6", date: d(22, 13), title: "Investing 101 for Beginners", category: "Finance", location: "Online", time: "1:00 – 2:30 PM", price: "$20", description: "Demystify the stock market, retirement accounts, and ethical investing in a judgement-free classroom." },
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
