import {setRequestLocale} from "next-intl/server";
import ServicesPage from "@/components/services/ServicesPage";

export default async function Services({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  setRequestLocale(locale);

  return <ServicesPage />;
}