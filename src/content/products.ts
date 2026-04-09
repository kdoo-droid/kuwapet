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
    subtitle: "A simple topper made for dogs.",
    shortDescription:
      "Sprinkle it on. That's all it takes. Our mulberry topper is a single-ingredient daily addition designed to make your dog's regular meal feel more intentional.",
    longDescription:
      "KuwaPet started with one question: why is the pet supplement aisle so overwhelming? We wanted something simpler. One thoughtfully chosen ingredient. A format that fits any bowl. A brand you can actually trust.\n\nThe KuwaPet Daily Mulberry Topper is a fine powder you sprinkle over your dog's regular food. It's easy, it's clean, and it's a small ritual that makes feeding feel more intentional — every day.",
    price: "[PRICE_TBD]", // Replace before launch
    compareAtPrice: null,
    images: [
      {
        src: "/images/product-main.jpg",
        alt: "KuwaPet Daily Mulberry Topper — product bag on oat cream surface",
      },
      {
        src: "/images/product-in-bowl.jpg",
        alt: "Mulberry powder sprinkled over dog food in a ceramic bowl",
      },
      {
        src: "/images/product-lifestyle.jpg",
        alt: "Dog eating from bowl with KuwaPet topper added",
      },
    ],
    highlights: [
      "Single hero ingredient — mulberry powder",
      "Easy to sprinkle onto any meal",
      "No fillers, no complicated blends",
      "Made for dogs",
      "Daily ritual — simple enough to actually stick to",
    ],
    ingredients: "[Full ingredient statement — TBD before launch]",
    feedingDirections:
      "[Feeding directions by dog size — TBD before launch]",
    storageInstructions: "[Storage instructions — TBD before launch]",
    shippingNote: "Ships within the United States. Free shipping on qualifying orders.",
    faqIds: ["what-is-it", "is-it-safe", "how-to-use", "how-much", "shelf-life"],
    ctaLabel: "Add to Cart",
    inventoryStatus: "in_stock",
    netWeight: "[Net weight — TBD before launch]",
  },
];

export const heroProduct = products[0];
