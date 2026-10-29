import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {getPageSEO} from "@/lib/seo";
import ServicesPage from "@/components/services/ServicesPage";

// SEO content for all four languages
const servicesSEO = {
  sq: {
    title: "Krijim Websitesh & Dizajn Menush në Sarandë",
    description:
      "Krijim faqesh interneti profesionale, dizajn menush restorantesh, katalogë verërash dhe shërbime digjitale për biznese në Sarandë dhe Shqipëri.",
  },

  en: {
    title: "Website Development & Restaurant Menu Design",
    description:
      "Explore professional website development, multilingual websites, restaurant menu design, wine catalogs, and digital services from Ionian Digital in Albania.",
  },

  it: {
    title: "Sviluppo Siti Web e Design Menù a Saranda",
    description:
      "Creazione di siti web professionali, menù per ristoranti, cataloghi di vini e servizi digitali per aziende a Saranda e in tutta l'Albania.",
  },

  el: {
    title: "Κατασκευή Ιστοσελίδων & Σχεδιασμός Μενού",
    description:
      "Επαγγελματικές ιστοσελίδες, σχεδιασμός μενού εστιατορίων, κατάλογοι κρασιών και ψηφιακές υπηρεσίες για επιχειρήσεις στους Αγίους Σαράντα και στην Αλβανία.",
  },
} as const;

type Locale = keyof typeof servicesSEO;

// Generate language-specific SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!(locale in servicesSEO)) {
    return {};
  }

  const seo = servicesSEO[locale as Locale];

  return getPageSEO({
    locale: locale as Locale,
    path: "/services",
    title: seo.title,
    description: seo.description,
  });
}

// Services page
export default async function Services({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  setRequestLocale(locale);

  return <ServicesPage />;
}