export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  price: string; // TBD — update before launch
  compareAtPrice: string | null;
  images: { src: string; alt: string }[];
  highlights: string[];
  ingredients: string;
  feedingDirections: string;
  storageInstructions: string;
  shippingNote: string;
  faqIds: string[];
  ctaLabel: string;
  inventoryStatus: "in_stock" | "out_of_stock" | "pre_order";
  netWeight: string;
}

export const products: Product[] = [
  {
    id: "kuwapet-mulberry-topper",
    slug: "kuwapet-mulberry-topper",
    name: "KuwaPet Daily Mulberry Topper",
    subtitle: "Japanese Premium Mulberry Leaf — Daily Support at Every Meal",
    shortDescription:
      "A premium mulberry leaf topper made for dogs. Sprinkle before or during meals as part of your dog's daily feeding routine. One clean ingredient — 100% Food-Grade Japanese Mulberry Leaf Powder.",
    longDescription:
      "KuwaPet starts with one question: why is the pet supplement aisle so overwhelming? We went the other direction — one thoughtfully chosen ingredient, kept simple.\n\nThe KuwaPet Daily Mulberry Topper is 100% Food-Grade Japanese Mulberry Leaf Powder, naturally containing DNJ (1-Deoxynojirimycin), polyphenols, flavonoids, and dietary fiber. Add it before or during your dog's regular meal. That's the whole routine.\n\nMatcha-grade quality. No additives, no fillers. Made in the USA.",
    price: "[PRICE_TBD]", // Replace before launch
    compareAtPrice: null,
    images: [
      {
        src: "/images/product-main.png",
        alt: "KuwaPet Daily Mulberry Topper — 200g tub of Japanese Premium Mulberry Leaf Powder",
      },
      {
        src: "/images/powder-bowl.jpg",
        alt: "Mulberry powder in a ceramic bowl",
      },
      {
        src: "/images/leaf-harvest.jpg",
        alt: "Fresh mulberry leaves from the farm",
      },
    ],
    highlights: [
      "100% Food-Grade Japanese Mulberry Leaf Powder",
      "Naturally contains DNJ, polyphenols, flavonoids & dietary fiber",
      "Easy to sprinkle before or during meals — no prep needed",
      "No additives, no fillers — matcha-grade quality",
      "Made in USA · 200g · 90-day supply",
    ],
    ingredients:
      "100% Food-Grade Japanese Mulberry Leaf Powder. Key components: 1-Deoxynojirimycin (DNJ), polyphenols, flavonoids, dietary fiber. No additives. No fillers.",
    feedingDirections:
      "Administer before or during meals. Small Dogs (11–25 lb): 10–15 lb — 1 scoop (250 mg); 15–25 lb — 2 scoops (500 mg). Medium Dogs (26–50 lb): 26–35 lb — 2–3 scoops (500–750 mg); 36–50 lb — 3–4 scoops (750–1,000 mg). Large Dogs (51–75 lb): 4–5 scoops (1,000–1,250 mg). XL Dogs (76+ lb): 5–6 scoops (1,250–1,500 mg). Consistent daily use is recommended.",
    storageInstructions: "Store in a cool, dry place. Keep container tightly closed.",
    shippingNote: "Ships within the United States. Free shipping on qualifying orders.",
    faqIds: ["what-is-it", "is-it-safe", "how-to-use", "how-much", "shelf-life"],
    ctaLabel: "Add to Cart",
    inventoryStatus: "in_stock",
    netWeight: "200g (7.05 oz) — 90-day supply",
  },
];

export const heroProduct = products[0];
