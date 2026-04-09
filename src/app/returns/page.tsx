import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";

export const metadata: Metadata = {
  title: "Returns",
  description: "KuwaPet return and refund policy.",
};

export default function ReturnsPage() {
  return (
    <PolicyPage
      eyebrow="Returns & Refunds"
      title="Return Policy"
      intro="We want you to feel good about your purchase. If something isn't right, we'll work with you to make it right. Full return policy details will be published here before we launch."
      lastUpdated="[Date TBD]"
      sections={[
        {
          heading: "Return Window",
          body: "[Return window — TBD before launch. We are finalizing the return period and will publish it here.]",
        },
        {
          heading: "Eligibility",
          body: [
            "Products must be in original, unopened condition to be eligible for a standard return.",
            "If you received a damaged or incorrect product, please contact us and we will resolve it regardless of condition.",
            "[Additional eligibility details TBD before launch]",
          ],
        },
        {
          heading: "How to Start a Return",
          body: "Email us at hello@kuwapet.com with your order number and reason for return. We will respond with instructions within one business day.",
        },
        {
          heading: "Refund Timeline",
          body: "[Refund timeline — TBD before launch. Once a return is approved and received, we will process your refund within a reasonable timeframe.]",
        },
        {
          heading: "Damaged or Incorrect Orders",
          body: "If your order arrived damaged or contained the wrong item, contact us immediately at hello@kuwapet.com. Include a photo if possible and we will resolve it promptly.",
        },
        {
          heading: "Questions",
          body: "For anything not covered here, email us at hello@kuwapet.com. We're a small brand that cares about getting this right.",
        },
      ]}
    />
  );
}
