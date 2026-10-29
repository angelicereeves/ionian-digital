import { setRequestLocale } from "next-intl/server";

import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurProcess from "@/components/home/OurProcess";
import PricingPreview from "@/components/home/PricingPreview";
import CTA from "@/components/home/CTA";

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <OurProcess />
      <PricingPreview />
      <CTA />
    </main>
  );
}