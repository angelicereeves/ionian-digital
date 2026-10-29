import type {Metadata} from "next";
import {Suspense} from "react";
import {setRequestLocale} from "next-intl/server";

import {getPageSEO} from "@/lib/seo";
import ContactPage from "@/components/contact/ContactPage";

type Props = {
  params: Promise<{locale: string}>;
};

// SEO titles and descriptions for all four languages
const contactSEO = {
  sq: {
    title: "Kontakt | Krijim Faqesh Interneti në Sarandë",
    description:
      "Kontaktoni Ionian Digital për krijim faqesh interneti, dizajn menush restorantesh dhe shërbime digjitale në Sarandë dhe Shqipëri. Kërkoni një ofertë sot.",
  },

  en: {
    title: "Contact a Web Designer in Saranda, Albania",
    description:
      "Contact Ionian Digital for professional website development, multilingual websites, restaurant menu design, and digital services in Saranda, Albania.",
  },

  it: {
    title: "Contatta un Web Designer a Saranda",
    description:
      "Contatta Ionian Digital per realizzare siti web professionali, menù per ristoranti, cataloghi di vini e progetti digitali a Saranda, Albania.",
  },

  el: {
    title: "Επικοινωνία | Σχεδιασμός Ιστοσελίδων στους Αγίους Σαράντα",
    description:
      "Επικοινωνήστε με την Ionian Digital για κατασκευή ιστοσελίδων, σχεδιασμό μενού εστιατορίων και ψηφιακές υπηρεσίες στους Αγίους Σαράντα και στην Αλβανία.",
  },
} as const;

type Locale = keyof typeof contactSEO;

// Generate language-specific SEO metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const {locale} = await params;

  if (!(locale in contactSEO)) {
    return {};
  }

  const seo = contactSEO[locale as Locale];

  return getPageSEO({
    locale: locale as Locale,
    path: "/contact",
    title: seo.title,
    description: seo.description,
  });
}

// Contact page
export default async function Contact({params}: Props) {
  const {locale} = await params;

  setRequestLocale(locale);

  return (
    <Suspense
      fallback={<div className="min-h-screen bg-[#0B1018]" />}
    >
      <ContactPage />
    </Suspense>
  );
}