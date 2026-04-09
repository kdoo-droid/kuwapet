export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "product" | "usage" | "shipping" | "returns" | "brand";
}

export const faqs: FAQ[] = [
  {
    id: "what-is-it",
    question: "What exactly is KuwaPet Mulberry Topper?",
    answer:
      "It's a fine powder you sprinkle directly onto your dog's regular meal. The hero ingredient is mulberry — chosen for its clean profile and simple story. Think of it as a thoughtful daily addition, not a complicated supplement routine.",
    category: "product",
  },
  {
    id: "is-it-safe",
    question: "Is mulberry safe for dogs?",
    answer:
      "Yes — mulberry is a dog-safe fruit. KuwaPet is formulated for dogs and the topper is intended as a food-style addition to your dog's regular diet. As with any new addition, we recommend introducing it gradually and consulting your veterinarian if you have specific health concerns about your dog.",
    category: "product",
  },
  {
    id: "how-to-use",
    question: "How do I use it?",
    answer:
      "Simple: sprinkle the recommended amount over your dog's regular food and mix gently. That's it. No soaking, no preparation, no complicated steps. It fits into your existing feeding routine without changing a thing.",
    category: "usage",
  },
  {
    id: "how-much",
    question: "How much should I use per serving?",
    answer:
      "[Feeding directions by dog size — TBD before launch. We will update this with exact serving guidelines once finalized.]",
    category: "usage",
  },
  {
    id: "shelf-life",
    question: "What's the shelf life?",
    answer:
      "[Storage and shelf life details — TBD before launch. Store in a cool, dry place and seal the bag after each use.]",
    category: "product",
  },
  {
    id: "ingredients-full",
    question: "What's in it — full ingredient list?",
    answer:
      "[Full ingredient statement — TBD before launch. The product is currently in formulation finalization. We'll publish the complete ingredient list before we ship.]",
    category: "product",
  },
  {
    id: "all-dogs",
    question: "Can all dogs use this?",
    answer:
      "KuwaPet is designed as a general-use daily topper for adult dogs. If your dog has specific dietary restrictions, food sensitivities, or medical conditions, check with your veterinarian before introducing any new food addition.",
    category: "usage",
  },
  {
    id: "shipping-time",
    question: "How long does shipping take?",
    answer:
      "We ship within the United States. Processing time and transit details will be confirmed before launch. You'll receive tracking info as soon as your order ships.",
    category: "shipping",
  },
  {
    id: "return-policy",
    question: "What's your return policy?",
    answer:
      "Our return policy details are being finalized. Please visit the Returns page or contact us directly at hello@kuwapet.com and we'll take care of you.",
    category: "returns",
  },
  {
    id: "why-mulberry",
    question: "Why mulberry specifically?",
    answer:
      "Mulberry is a fruit with a clean, simple story. We chose it because it's a genuine ingredient — not a long list of extracts and powders. It's recognizable, dog-safe, and lets us build a brand around restraint and honesty rather than ingredient inflation. Visit our Why Mulberry page to learn more.",
    category: "brand",
  },
  {
    id: "subscription",
    question: "Do you offer a subscription?",
    answer:
      "Subscription options are in planning. Check back soon — or join our email list to be the first to know when it launches.",
    category: "product",
  },
];

export const productFaqs = faqs.filter((f) =>
  ["what-is-it", "is-it-safe", "how-to-use", "how-much", "shelf-life"].includes(f.id)
);
