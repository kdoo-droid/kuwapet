import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "KuwaPet terms of use — the rules and conditions governing your use of kuwapet.com.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="By using kuwapet.com, you agree to the following terms. Please read them carefully. These terms apply to all visitors, users, and customers."
      lastUpdated="[Date TBD — update before launch]"
      sections={[
        {
          heading: "Use of This Website",
          body: "You may use kuwapet.com for lawful purposes only. You agree not to use this site in any way that violates applicable laws, infringes on the rights of others, or interferes with the site's normal operation.",
        },
        {
          heading: "Product Information",
          body: "We make reasonable efforts to display accurate product information. However, product descriptions, images, and pricing are subject to change without notice. KuwaPet products are sold as food-style toppers and are not intended to diagnose, treat, cure, or prevent any disease.",
        },
        {
          heading: "Purchases",
          body: "All purchases are subject to product availability and our shipping and return policies. We reserve the right to refuse or cancel orders at our discretion. Prices are listed in USD.",
        },
        {
          heading: "Intellectual Property",
          body: "All content on this website — including text, images, design, and branding — is the property of KuwaPet and may not be reproduced without written permission.",
        },
        {
          heading: "Disclaimer of Warranties",
          body: "This website and its contents are provided 'as is' without warranties of any kind, express or implied. KuwaPet makes no warranties about the accuracy, reliability, or completeness of any content on this site.",
        },
        {
          heading: "Limitation of Liability",
          body: "To the fullest extent permitted by law, KuwaPet shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of this site or our products.",
        },
        {
          heading: "Changes to These Terms",
          body: "We may update these terms at any time. The updated date will reflect when the most recent revision was made. Your continued use of the site constitutes acceptance.",
        },
        {
          heading: "Governing Law",
          body: "[Governing law jurisdiction — TBD. This will reflect the business's state of incorporation and legal counsel recommendation.]",
        },
        {
          heading: "Contact",
          body: "For questions about these terms, email us at hello@kuwapet.com.",
        },
      ]}
    />
  );
}
