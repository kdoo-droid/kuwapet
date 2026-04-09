import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";

export const metadata: Metadata = {
  title: "Shipping",
  description: "KuwaPet shipping information — processing times, delivery areas, and order tracking.",
};

export default function ShippingPage() {
  return (
    <PolicyPage
      eyebrow="Shipping Policy"
      title="Shipping Information"
      intro="We ship within the United States. Full shipping details — including rates, processing times, and carriers — will be confirmed before launch and published here."
      lastUpdated="[Date TBD]"
      sections={[
        {
          heading: "Shipping Region",
          body: "KuwaPet currently ships within the United States only. International shipping is not available at this time.",
        },
        {
          heading: "Processing Time",
          body: "[Processing time — TBD before launch. Orders are typically processed within 1–3 business days of purchase.]",
        },
        {
          heading: "Shipping Methods & Rates",
          body: "[Shipping rates and carrier details — TBD before launch. We will publish standard and expedited options here.]",
        },
        {
          heading: "Free Shipping",
          body: "[Free shipping threshold — TBD before launch. Check back here or sign up for our email list to be notified when we launch.]",
        },
        {
          heading: "Order Tracking",
          body: "Once your order ships, you will receive a shipping confirmation email with a tracking number. If you have not received tracking information within the expected processing window, please contact us at hello@kuwapet.com.",
        },
        {
          heading: "Delivery Issues",
          body: "If your package is lost or arrives damaged, contact us right away at hello@kuwapet.com. We will do our best to make it right.",
        },
      ]}
    />
  );
}
