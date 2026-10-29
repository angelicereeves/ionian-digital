import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {getPageSEO} from "@/lib/seo";
import AboutPage from "@/components/about/AboutPage";

type Props = {
  params: Promise<{locale: string}>;
};

// SEO titles and descriptions for all four languages
const aboutSEO = {
  sq: {
    title: "Rreth Nesh | Ionian Digital Sarandë",
    description:
      "Njihuni me Ionian Digital, studio për krijimin e faqeve të internetit në Sarandë. Mbi 10 vite përvojë në hoteleri dhe ekspertizë në zhvillimin e websitesh.",
  },

  en: {
    title: "About Us | Web Design Studio in Saranda",
    description:
      "Meet the founder of Ionian Digital. Combining software engineering expertise with over 10 years of hospitality experience to help businesses grow online.",
  },

  it: {
    title: "Chi Siamo | Studio Web Design a Saranda",
    description:
      "Scopri Ionian Digital, uno studio di web design a Saranda che unisce competenze nello sviluppo web e oltre 10 anni di esperienza nel settore alberghiero e della ristorazione.",
  },

  el: {
    title: "Σχετικά με Εμάς | Ionian Digital Άγιοι Σαράντα",
    description:
      "Γνωρίστε την Ionian Digital, ένα στούντιο σχεδιασμού ιστοσελίδων στους Αγίους Σαράντα, με τεχνογνωσία στην ανάπτυξη ιστοσελίδων και πάνω από 10 χρόνια εμπειρίας στη φιλοξενία.",
  },
} as const;

type Locale = keyof typeof aboutSEO;

// Generate language-specific SEO metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const {locale} = await params;

  if (!(locale in aboutSEO)) {
    return {};
  }

  const seo = aboutSEO[locale as Locale];

  return getPageSEO({
    locale: locale as Locale,
    path: "/about",
    title: seo.title,
    description: seo.description,
  });
}

// About page
export default async function About({params}: Props) {
  const {locale} = await params;

  setRequestLocale(locale);

  return <AboutPage />;
}