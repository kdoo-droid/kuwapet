import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "KuwaPet privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="KuwaPet respects your privacy. This policy describes how we collect, use, and protect your personal information when you visit or shop at kuwapet.com."
      lastUpdated="[Date TBD — update before launch]"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "Contact information you provide, such as name and email address.",
            "Order and transaction information when you make a purchase.",
            "Usage data such as pages visited, time on site, and referring URLs.",
            "Device and browser information for analytics and security purposes.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "To process and fulfill your orders.",
            "To communicate with you about your order or questions.",
            "To send email updates if you have opted in.",
            "To improve our website and product offering.",
            "To comply with legal obligations.",
          ],
        },
        {
          heading: "Email Marketing",
          body: "If you opt into our email list, you may receive updates about new products, promotions, and brand news. You can unsubscribe at any time via the link at the bottom of any email.",
        },
        {
          heading: "Sharing Your Information",
          body: "We do not sell your personal information. We may share it with trusted service providers who assist us in operating the website, processing payments, and fulfilling orders — only to the extent necessary for those purposes.",
        },
        {
          heading: "Cookies",
          body: "We use cookies and similar tracking technologies to understand how visitors use our site. You can disable cookies in your browser settings, though some site features may not function correctly.",
        },
        {
          heading: "Data Retention",
          body: "We retain your personal data for as long as necessary to provide our services and comply with applicable law. You may request deletion of your data by contacting us at hello@kuwapet.com.",
        },
        {
          heading: "Your Rights",
          body: "Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. Contact us at hello@kuwapet.com to make a request.",
        },
        {
          heading: "Third-Party Links",
          body: "Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.",
        },
        {
          heading: "Changes to This Policy",
          body: "We may update this policy from time to time. When we do, we will update the date above. Continued use of our site after changes constitutes acceptance of the revised policy.",
        },
        {
          heading: "Contact",
          body: "If you have questions about this policy, email us at hello@kuwapet.com.",
        },
      ]}
    />
  );
}
