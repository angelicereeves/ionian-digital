import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sq", "en", "it", "el"],
  defaultLocale: "sq",
  localePrefix: "always"
});