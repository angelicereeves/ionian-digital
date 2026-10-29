import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {getPageSEO} from "@/lib/seo";
import PortfolioPage from "@/components/portfolio/PortfolioPage";

type Props = {
  params: Promise<{locale: string}>;
};

// SEO content for all four languages
const portfolioSEO = {
  sq: {
    title: "Portfolio | Projekte Websitesh & Dizajni në Shqipëri",
    description:
      "Shikoni projektet e Ionian Digital: faqe interneti për restorante dhe biznese, dizajn menush, katalogë verërash dhe projekte digjitale në Sarandë.",
  },

  en: {
    title: "Portfolio | Web Design & Digital Projects in Albania",
    description:
      "Explore Ionian Digital's portfolio of restaurant websites, business websites, menu designs, wine catalogs, and digital projects created in Saranda, Albania.",
  },

  it: {
    title: "Portfolio | Progetti Web e Design in Albania",
    description:
      "Scopri i progetti di Ionian Digital: siti web per ristoranti e aziende, design di menù, cataloghi di vini e progetti digitali realizzati a Saranda.",
  },

  el: {
    title: "Portfolio | Έργα Ιστοσελίδων & Σχεδιασμού",
    description:
      "Ανακαλύψτε τα έργα της Ionian Digital: ιστοσελίδες εστιατορίων και επιχειρήσεων, σχεδιασμό μενού, καταλόγους κρασιών και ψηφιακά έργα στους Αγίους Σαράντα.",
  },
} as const;

type Locale = keyof typeof portfolioSEO;

// Generate language-specific SEO metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const {locale} = await params;

  if (!(locale in portfolioSEO)) {
    return {};
  }

  const seo = portfolioSEO[locale as Locale];

  return getPageSEO({
    locale: locale as Locale,
    path: "/portfolio",
    title: seo.title,
    description: seo.description,
  });
}

// Portfolio page
export default async function Page({params}: Props) {
  const {locale} = await params;

  setRequestLocale(locale);

  return <PortfolioPage />;
}