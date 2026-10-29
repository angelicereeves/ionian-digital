import {Suspense} from "react";
import {setRequestLocale} from "next-intl/server";
import ContactPage from "@/components/contact/ContactPage";

export default async function Contact({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  setRequestLocale(locale);

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B1018]" />}>
      <ContactPage />
    </Suspense>
  );
}