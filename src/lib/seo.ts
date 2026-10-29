import type {Metadata} from "next";

const BASE_URL = "https://www.ionian-digital.com";

const locales = ["sq", "en", "it", "el"] as const;

type Locale = (typeof locales)[number];

export function getPageSEO({
  locale,
  path = "",
  title,
  description,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const normalizedPath =
    path === "" || path === "/"
      ? ""
      : `/${path.replace(/^\/|\/$/g, "")}`;

  const pageUrl = `${BASE_URL}/${locale}${normalizedPath}`;

  const languages = Object.fromEntries(
    locales.map((language) => [
      language,
      `${BASE_URL}/${language}${normalizedPath}`,
    ])
  );

  return {
    title,
    description,

    alternates: {
      canonical: pageUrl,
      languages: {
        ...languages,
        "x-default": `${BASE_URL}/sq${normalizedPath}`,
      },
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      siteName: "Ionian Digital",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}