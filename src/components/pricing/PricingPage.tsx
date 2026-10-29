"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  HelpCircle,
  Sparkles,
  Globe2,
  ShieldCheck,
  MessageCircle,
  UtensilsCrossed,
  Languages,
  BookOpen,
  Paintbrush,
} from "lucide-react";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import PricingPreview from "@/components/home/PricingPreview";

const comparisonRows = [
  {
    label: "pages",
    values: ["starterPages", "businessPages", "premiumPages"],
  },
  {
    label: "languages",
    values: [
      "starterLanguages",
      "businessLanguages",
      "premiumLanguages",
    ],
  },
  {
    label: "responsive",
    values: [true, true, true],
  },
  {
    label: "contactForm",
    values: [true, true, true],
  },
  {
    label: "seo",
    values: [true, true, true],
  },
  {
    label: "maps",
    values: [true, true, true],
  },
  {
    label: "animations",
    values: ["basic", "advanced", "custom"],
  },
  {
    label: "integrations",
    values: [false, "selected", "advanced"],
  },
  {
    label: "revisions",
    values: ["twoRounds", "threeRounds", "custom"],
  },
] as const;

const faqs = [
  "payment",
  "timeline",
  "domain",
  "languages",
  "updates",
  "changes",
  "ownership",
  "custom",
] as const;

const menuPackages = [
  {
    key: "refresh",
    price: "€50",
    icon: Paintbrush,
    featured: false,
  },
  {
    key: "custom",
    price: "€100",
    icon: UtensilsCrossed,
    featured: true,
  },
  {
    key: "multilingual",
    price: "€150",
    icon: Languages,
    featured: false,
  },
  {
    key: "catalog",
    price: null,
    icon: BookOpen,
    featured: false,
  },
] as const;

export default function PricingPage() {
  const t = useTranslations("PricingPage");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-[#0B1018] text-white">
      {/* HERO */}
      <section className="relative px-6 pb-10 pt-40 lg:px-8 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={15} />
            {t("heroEyebrow")}
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {t("heroTitle")}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {t("heroDescription")}
          </p>
        </motion.div>
      </section>

      {/* EXISTING WEBSITE PRICING CARDS */}
      <PricingPreview />

      {/* NEW MENU DESIGN PRICING */}
      <section className="relative overflow-hidden px-6 py-28 lg:px-8">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-20 h-[400px] w-[400px] rounded-full bg-amber-500/[0.06] blur-[120px]" />

          <div className="absolute bottom-0 right-[-100px] h-[450px] w-[450px] rounded-full bg-yellow-500/[0.05] blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-5 py-2 text-sm font-medium text-amber-300">
              <Sparkles size={15} />
              {t("menuPricing.eyebrow")}
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("menuPricing.title")}
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
              {t("menuPricing.description")}
            </p>
          </motion.div>

          {/* Pricing cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {menuPackages.map((pkg, index) => {
              const Icon = pkg.icon;

              return (
                <motion.div
                  key={pkg.key}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                    pkg.featured
                      ? "border-amber-400/40 bg-gradient-to-b from-[#29251E] via-[#1C1E24] to-[#151D2B] shadow-[0_0_60px_rgba(245,158,11,0.08)]"
                      : "border-white/10 bg-[#151D2B] hover:border-amber-400/25"
                  }`}
                >
                  {/* Featured badge */}
                  {pkg.featured && (
                    <div className="absolute right-0 top-0 rounded-bl-2xl bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#171717]">
                      {t("menuPricing.popular")}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      pkg.featured
                        ? "bg-amber-400/15 text-amber-300"
                        : "bg-white/[0.05] text-amber-400"
                    }`}
                  >
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  {/* Package name */}
                  <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                    {t(`menuPricing.packages.${pkg.key}.name`)}
                  </h3>

                  {/* Description */}
                  <p className="mb-8 min-h-[96px] text-sm leading-relaxed text-slate-400">
                    {t(`menuPricing.packages.${pkg.key}.description`)}
                  </p>

                  {/* Price */}
                  <div className="mb-8 border-b border-white/10 pb-8">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                      {pkg.price
                        ? t("menuPricing.startingAt")
                        : t("menuPricing.customQuoteLabel")}
                    </p>

                    <div className="flex items-end gap-2">
                      <span
                        className={`font-bold tracking-tight ${
                          pkg.price
                            ? "text-4xl text-white"
                            : "text-2xl text-amber-300"
                        }`}
                      >
                        {pkg.price ??
                          t("menuPricing.customQuote")}
                      </span>

                      {pkg.price && (
                        <span className="mb-1 text-sm text-slate-500">
                          {t("menuPricing.perProject")}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-10 flex-1">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {t("menuPricing.includes")}
                    </p>

                    <ul className="space-y-4">
                      {([0, 1, 2, 3] as const).map(
                        (featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <Check
                              size={17}
                              strokeWidth={2}
                              className="mt-0.5 shrink-0 text-amber-400"
                            />

                            <span className="text-sm leading-relaxed text-slate-300">
                              {t(
                                `menuPricing.packages.${pkg.key}.features.${featureIndex}`,
                              )}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`group/button inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-semibold transition-all ${
                      pkg.featured
                        ? "bg-amber-400 text-[#171717] hover:bg-amber-300"
                        : "border border-amber-400/25 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20"
                    }`}
                  >
                    {t("menuPricing.button")}

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Additional note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-12 max-w-3xl text-center"
          >
            <p className="text-sm leading-relaxed text-slate-500">
              {t("menuPricing.disclaimer")}
            </p>
          </motion.div>

          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-col items-center justify-between gap-8 rounded-3xl border border-amber-400/15 bg-gradient-to-r from-amber-400/[0.07] via-[#1A202A] to-[#151D2B] p-8 md:flex-row md:p-10"
          >
            <div className="max-w-2xl">
              <h3 className="mb-3 text-2xl font-semibold">
                {t("menuPricing.ctaTitle")}
              </h3>

              <p className="leading-relaxed text-slate-400">
                {t("menuPricing.ctaDescription")}
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-amber-400 px-7 py-4 font-semibold text-[#171717] transition hover:bg-amber-300"
            >
              {t("menuPricing.ctaButton")}

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PACKAGE COMPARISON */}
      <section className="bg-[#0E1520] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("comparisonEyebrow")}
            title={t("comparisonTitle")}
            description={t("comparisonDescription")}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#151D2B]"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="w-[34%] px-6 py-7 text-sm font-semibold text-slate-400">
                      {t("comparisonFeature")}
                    </th>

                    {(["starter", "business", "premium"] as const).map(
                      (plan) => (
                        <th
                          key={plan}
                          className={`px-6 py-7 text-center text-lg font-semibold ${
                            plan === "business"
                              ? "bg-blue-500/10 text-cyan-400"
                              : "text-white"
                          }`}
                        >
                          {t(`plans.${plan}`)}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.label}
                      className={`border-b border-white/5 ${
                        index % 2 === 0 ? "bg-white/[0.015]" : ""
                      }`}
                    >
                      <th className="px-6 py-5 text-sm font-medium text-slate-300">
                        {t(`comparison.${row.label}`)}
                      </th>

                      {row.values.map((value, valueIndex) => (
                        <td
                          key={valueIndex}
                          className={`px-6 py-5 text-center text-sm ${
                            valueIndex === 1
                              ? "bg-blue-500/[0.04]"
                              : ""
                          }`}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check
                                size={19}
                                className="mx-auto text-cyan-400"
                                aria-label={t("included")}
                              />
                            ) : (
                              <span className="text-slate-600">
                                {t("notIncluded")}
                              </span>
                            )
                          ) : (
                            <span className="text-slate-300">
                              {t(`values.${value}`)}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <p className="mt-6 text-center text-sm text-slate-500">
            {t("comparisonNote")}
          </p>
        </div>
      </section>

      {/* ADDITIONAL INFORMATION */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t("detailsEyebrow")}
            title={t("detailsTitle")}
            description={t("detailsDescription")}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Globe2, key: "languages" },
              { icon: ShieldCheck, key: "transparent" },
              { icon: MessageCircle, key: "support" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#151D2B] p-8"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold">
                    {t(`details.${item.key}.title`)}
                  </h3>

                  <p className="leading-relaxed text-slate-400">
                    {t(`details.${item.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0E1520] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow={t("faqEyebrow")}
            title={t("faqTitle")}
            description={t("faqDescription")}
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-blue-400/30 bg-[#192538]"
                      : "border-white/10 bg-[#151D2B]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq}`}
                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                  >
                    <span className="text-base font-semibold text-white md:text-lg">
                      {t(`faq.${faq}.question`)}
                    </span>

                    <ChevronDown
                      size={21}
                      className={`shrink-0 text-cyan-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <p className="px-7 pb-7 leading-relaxed text-slate-400">
                          {t(`faq.${faq}.answer`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-[#172C4B] to-[#0D1625] px-8 py-20 text-center md:px-16"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative">
            <HelpCircle
              size={35}
              className="mx-auto mb-7 text-cyan-400"
            />

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              {t("ctaTitle")}
            </h2>

            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-slate-300">
              {t("ctaDescription")}
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-400"
            >
              {t("ctaButton")}

              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </span>

      <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      <p className="text-lg leading-relaxed text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}