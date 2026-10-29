import "../globals.css";

import type {Metadata} from "next";
import {NextIntlClientProvider, hasLocale} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";

import {routing} from "@/i18n/routing";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://www.ionian-digital.com";

const seoContent = {
  sq: {
    title: "Ionian Digital | Krijim Websitesh & Dizajn në Shqipëri",
    description:
      "Ionian Digital ofron krijim faqesh interneti, dizajn menush dhe katalogësh për restorante, hotele dhe biznese në Sarandë dhe në të gjithë Shqipërinë.",
  },
  en: {
    title: "Ionian Digital | Web Design & Development in Albania",
    description:
      "Professional website development, restaurant menu design, and digital solutions for businesses in Saranda and throughout Albania. Discover Ionian Digital.",
  },
  it: {
    title: "Ionian Digital | Creazione Siti Web in Albania",
    description:
      "Realizzazione di siti web professionali, design di menù e cataloghi per ristoranti, hotel e aziende a Saranda e in tutta l'Albania.",
  },
  el: {
    title: "Ionian Digital | Κατασκευή Ιστοσελίδων στην Αλβανία",
    description:
      "Κατασκευή επαγγελματικών ιστοσελίδων, σχεδιασμός μενού και καταλόγων για εστιατόρια, ξενοδοχεία και επιχειρήσεις στους Αγίους Σαράντα και σε όλη την Αλβανία.",
  },
} as const;

type Locale = keyof typeof seoContent;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const seo = seoContent[locale as Locale];

  return {
    metadataBase: new URL(BASE_URL),

    title: {
      default: seo.title,
      template: "%s | Ionian Digital",
    },

    description: seo.description,

    applicationName: "Ionian Digital",

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      siteName: "Ionian Digital",
      locale:
        locale === "sq"
          ? "sq_AL"
          : locale === "en"
            ? "en_US"
            : locale === "it"
              ? "it_IT"
              : "el_GR",
      title: seo.title,
      description: seo.description,
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#business`,
    name: "Ionian Digital",
    url: BASE_URL,
    description:
      "Web development, multilingual website design, restaurant menu design, and digital solutions for businesses.",
    email: "ioniandigital@gmail.com",
    areaServed: {
      "@type": "Country",
      name: "Albania",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sarandë",
      addressCountry: "AL",
    },
    availableLanguage: [
      "Albanian",
      "English",
      "Italian",
      "Greek",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Website Design and Development",
        },
        {
          "@type": "OfferCatalog",
          name: "Restaurant Menu Design",
        },
        {
          "@type": "OfferCatalog",
          name: "Multilingual Website Development",
        },
      ],
    },
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}