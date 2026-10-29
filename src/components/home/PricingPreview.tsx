"use client";

import {motion} from "motion/react";
import {ArrowRight, ArrowUpRight, Check, Sparkles} from "lucide-react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

const packages = [
  {
    id: "starter",
    price: 200,
    pages: "starterPages",
    languages: "starterLanguages",
    revisions: "starterRevisions",
    featured: false,
    features: [
      "responsive",
      "contactForm",
      "seo",
      "googleMaps",
      "basicAnimations"
    ]
  },
  {
    id: "business",
    price: 450,
    pages: "businessPages",
    languages: "businessLanguages",
    revisions: "businessRevisions",
    featured: true,
    features: [
      "responsive",
      "contactForm",
      "seo",
      "googleMaps",
      "advancedAnimations",
      "basicIntegrations"
    ]
  },
  {
    id: "premium",
    price: 900,
    pages: "premiumPages",
    languages: "premiumLanguages",
    revisions: "premiumRevisions",
    featured: false,
    features: [
      "responsive",
      "contactForm",
      "seo",
      "googleMaps",
      "customAnimations",
      "advancedIntegrations"
    ]
  }
] as const;

export default function PricingPreview() {
  const t = useTranslations("Pricing");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0B1018] px-6 py-28 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{opacity: 0, y: 25}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {t("eyebrow")}
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {t("title")}
          </h2>

          <p className="text-lg leading-relaxed text-slate-400">
            {t("description")}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid items-stretch gap-8 lg:grid-cols-3">

          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 0.6,
                delay: index * 0.12
              }}
              whileHover={{y: -8}}
              className={`group relative flex flex-col rounded-3xl border p-8 transition-colors duration-300 md:p-10 ${
                pkg.featured
                  ? "border-blue-400/60 bg-gradient-to-b from-[#192B49] to-[#111B2B] shadow-[0_0_70px_rgba(59,130,246,0.12)]"
                  : "border-white/10 bg-[#151D2B] hover:border-blue-400/30"
              }`}
            >

              {/* Most Popular Badge */}
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/20">
                    <Sparkles size={14} />
                    {t("mostPopular")}
                  </div>
                </div>
              )}

              {/* Package Heading */}
              <div className="mb-8">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {t(`${pkg.id}.name`)}
                </h3>

                <p className="min-h-[48px] text-sm leading-relaxed text-slate-400">
                  {t(`${pkg.id}.description`)}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 border-b border-white/10 pb-8">
                <p className="mb-2 text-sm font-medium text-slate-400">
                  {t("startingAt")}
                </p>

                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    €{pkg.price}
                  </span>

                  <span className="text-sm text-slate-400">
                    {t("oneTime")}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-10 flex-1 space-y-5">

                <Feature text={t(pkg.pages)} />
                <Feature text={t(pkg.languages)} />
                <Feature text={t(pkg.revisions)} />

                {pkg.features.map((feature) => (
                  <Feature
                    key={feature}
                    text={t(feature)}
                  />
                ))}
              </div>

              {/* CTA */}
              <Link
                href={{
                  pathname: "/contact",
                  query: {package: pkg.id}
                }}
                className={`group/button flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold transition-all ${
                  pkg.featured
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
                    : "border border-white/15 bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                {t("choosePlan")}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                />
              </Link>

            </motion.div>
          ))}
        </div>

        {/* Maintenance */}
        <motion.div
          initial={{opacity: 0, y: 25}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#151D2B]/70 p-8 md:flex-row md:items-center"
        >
          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {t("maintenanceTitle")}
            </h3>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
              {t("maintenanceDescription")}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-5">
            <div>
              <p className="text-2xl font-bold text-white">
                €29
                <span className="text-sm font-normal text-slate-400">
                  {t("perMonth")}
                </span>
              </p>

              <p className="text-xs text-slate-500">
                {t("optional")}
              </p>
            </div>

            <Link
              href="/contact"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-400 transition hover:bg-white/10"
              aria-label={t("learnMore")}
            >
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
          {t("disclaimer")}
        </p>

      </div>
    </section>
  );
}

function Feature({text}: {text: string}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
        <Check size={13} strokeWidth={3} />
      </div>

      <span className="text-sm leading-relaxed text-slate-300">
        {text}
      </span>
    </div>
  );
}