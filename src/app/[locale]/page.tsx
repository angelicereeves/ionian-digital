import type {Metadata} from "next";

import {setRequestLocale} from "next-intl/server";

import {getPageSEO} from "@/lib/seo";

import Hero from "@/components/home/Hero";
import TourismBanner from "@/components/home/TourismBanner";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurProcess from "@/components/home/OurProcess";
import PricingPreview from "@/components/home/PricingPreview";
import CTA from "@/components/home/CTA";

// SEO titles and descriptions for each language

const homepageSEO = {
  sq: {
    title: "Krijim Faqesh Interneti në Sarandë",
    description:
      "Ionian Digital krijon faqe interneti moderne, menu restorantesh dhe zgjidhje digjitale për biznese në Sarandë dhe në të gjithë Shqipërinë.",
  },

  en: {
    title: "Web Design & Development in Saranda, Albania",
    description:
      "Ionian Digital creates modern websites, multilingual digital experiences, and restaurant menu designs for businesses in Saranda and throughout Albania.",
  },

  it: {
    title: "Creazione Siti Web a Saranda, Albania",
    description:
      "Ionian Digital realizza siti web moderni, esperienze digitali multilingue e menù professionali per ristoranti e aziende a Saranda e in tutta l'Albania.",
  },

  el: {
    title: "Κατασκευή Ιστοσελίδων στους Αγίους Σαράντα",
    description:
      "Η Ionian Digital δημιουργεί σύγχρονες ιστοσελίδες, πολύγλωσσες ψηφιακές εμπειρίες και επαγγελματικά μενού για επιχειρήσεις στους Αγίους Σαράντα και σε όλη την Αλβανία.",
  },
} as const;

type Locale = keyof typeof homepageSEO;

// Generate language-specific SEO metadata

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!(locale in homepageSEO)) {
    return {};
  }

  const seo = homepageSEO[locale as Locale];

  return getPageSEO({
    locale: locale as Locale,
    path: "",
    title: seo.title,
    description: seo.description,
  });
}

// Homepage

export default async function HomePage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <TourismBanner />
      <ServicesPreview />
      <WhyChooseUs />
      <OurProcess />
      <PricingPreview />
      <CTA />
    </main>
  );
}