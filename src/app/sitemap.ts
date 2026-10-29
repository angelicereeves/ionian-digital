import type { MetadataRoute } from "next";

const BASE_URL = "https://www.ionian-digital.com";

const locales = ["sq", "en", "it", "el"] as const;

const pages = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => {
      const path = `/${locale}${page}`;

      return {
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: page === "" ? 1 : 0.7,

        alternates: {
          languages: Object.fromEntries(
            locales.map((language) => [
              language,
              `${BASE_URL}/${language}${page}`,
            ])
          ),
        },
      };
    })
  );
}