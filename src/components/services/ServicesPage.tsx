"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  MonitorSmartphone,
  Languages,
  UtensilsCrossed,
  Palmtree,
  RefreshCw,
  Wrench,
  Check,
  Sparkles,
  Globe2,
  Zap,
  Search,
  Smartphone,
  ShieldCheck,
  Building2,
  Hotel,
  Coffee,
  Wine,
  BookOpen,
  FileText,
  Printer,
} from "lucide-react";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// EXISTING WEBSITE SERVICES
const services = [
  {
    icon: MonitorSmartphone,
    title: "webDesignTitle",
    description: "webDesignDescription",
    features: [
      "webDesignFeature1",
      "webDesignFeature2",
      "webDesignFeature3",
    ],
  },
  {
    icon: Languages,
    title: "multilingualTitle",
    description: "multilingualDescription",
    features: [
      "multilingualFeature1",
      "multilingualFeature2",
      "multilingualFeature3",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "restaurantTitle",
    description: "restaurantDescription",
    features: [
      "restaurantFeature1",
      "restaurantFeature2",
      "restaurantFeature3",
    ],
  },
  {
    icon: Palmtree,
    title: "tourismTitle",
    description: "tourismDescription",
    features: [
      "tourismFeature1",
      "tourismFeature2",
      "tourismFeature3",
    ],
  },
  {
    icon: RefreshCw,
    title: "redesignTitle",
    description: "redesignDescription",
    features: [
      "redesignFeature1",
      "redesignFeature2",
      "redesignFeature3",
    ],
  },
  {
    icon: Wrench,
    title: "maintenanceTitle",
    description: "maintenanceDescription",
    features: [
      "maintenanceFeature1",
      "maintenanceFeature2",
      "maintenanceFeature3",
    ],
  },
] as const;

// WEBSITE FEATURES
const essentials = [
  { icon: Smartphone, key: "responsive" },
  { icon: Zap, key: "performance" },
  { icon: Search, key: "seo" },
  { icon: Globe2, key: "multilingual" },
  { icon: ShieldCheck, key: "reliable" },
  { icon: Check, key: "support" },
] as const;

// INDUSTRIES
const industries = [
  { icon: UtensilsCrossed, key: "restaurants" },
  { icon: Hotel, key: "hospitality" },
  { icon: Palmtree, key: "tourism" },
  { icon: Coffee, key: "cafes" },
  { icon: Building2, key: "local" },
] as const;

// NEW MENU DESIGN SERVICES
const menuServices = [
  {
    icon: UtensilsCrossed,
    key: "food",
  },
  {
    icon: Wine,
    key: "drinks",
  },
  {
    icon: Languages,
    key: "multilingual",
  },
] as const;

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  return (
    <main className="overflow-hidden bg-[#0B1018] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={15} />
            {t("heroEyebrow")}
          </div>

          <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {t("heroTitle")}
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {t("heroDescription")}
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            {t("heroButton")}

            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </section>

      {/* =====================================================
          EXISTING WEBSITE SERVICES
      ===================================================== */}

      <section className="relative bg-[#0E1520] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow={t("servicesEyebrow")}
            title={t("servicesTitle")}
            description={t("servicesDescription")}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#151D2B] p-8 transition-colors hover:border-cyan-400/30"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {t(service.title)}
                  </h3>

                  <p className="mb-8 leading-relaxed text-slate-400">
                    {t(service.description)}
                  </p>

                  <div className="mt-auto space-y-4 border-t border-white/10 pt-7">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <Check
                          size={17}
                          className="mt-1 shrink-0 text-cyan-400"
                        />

                        <span className="text-sm text-slate-300">
                          {t(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEW — RESTAURANT MENU DESIGN
      ===================================================== */}

      <section className="relative overflow-hidden px-6 py-28 lg:px-8 lg:py-36">

        {/* BACKGROUND EFFECTS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]" />

          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-sm font-medium text-amber-300">
              <Sparkles size={15} />

              {t("menuDesign.eyebrow")}
            </div>

            <h2 className="mb-7 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("menuDesign.title")}
            </h2>

            <p className="text-lg leading-relaxed text-slate-400 md:text-xl">
              {t("menuDesign.description")}
            </p>
          </motion.div>

          {/* MENU SERVICE CARDS */}
          <div className="grid gap-6 md:grid-cols-3">

            {menuServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.key}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#151D2B] p-8 transition-all duration-300 hover:border-amber-400/30"
                >

                  {/* SUBTLE CARD GLOW */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/5 blur-3xl transition group-hover:bg-amber-400/10" />

                  <div className="relative">

                    {/* ICON */}
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    {/* TITLE */}
                    <h3 className="mb-5 text-2xl font-semibold">
                      {t(`menuDesign.types.${service.key}.title`)}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="leading-relaxed text-slate-400">
                      {t(`menuDesign.types.${service.key}.description`)}
                    </p>

                  </div>
                </motion.article>
              );
            })}

          </div>

          {/* PRINT & DIGITAL FEATURE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-8 overflow-hidden rounded-3xl border border-amber-400/15 bg-gradient-to-r from-amber-400/10 via-[#151D2B] to-[#151D2B] p-8 md:p-10"
          >
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">

              {/* ICONS */}
              <div className="flex shrink-0 items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                  <Printer size={25} />
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                  <FileText size={25} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-semibold">
                  {t("menuDesign.formatsLabel")}
                </h3>

                <p className="max-w-3xl leading-relaxed text-slate-400">
                  {t("menuDesign.formatsDescription")}
                </p>
              </div>

              <BookOpen
                size={34}
                className="hidden shrink-0 text-amber-300/40 lg:block"
              />

            </div>
          </motion.div>

          {/* MENU DESIGN CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >

            {/* PORTFOLIO */}
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 rounded-xl border border-amber-400/30 bg-amber-400/10 px-7 py-4 font-semibold text-amber-200 transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-400/15"
            >
              {t("menuDesign.portfolioButton")}

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-7 py-4 font-semibold text-[#17120A] shadow-lg shadow-amber-500/10 transition-all duration-300 hover:shadow-amber-500/20"
            >
              {t("menuDesign.contactButton")}

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="bg-[#0E1520] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {t("industriesEyebrow")}
              </span>

              <h2 className="mb-7 text-4xl font-bold tracking-tight md:text-5xl">
                {t("industriesTitle")}
              </h2>

              <p className="mb-9 max-w-xl text-lg leading-relaxed text-slate-400">
                {t("industriesDescription")}
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                {t("industriesButton")}

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry, index) => {
                const Icon = industry.icon;

                return (
                  <motion.div
                    key={industry.key}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151D2B] p-6"
                  >
                    <Icon
                      size={23}
                      className="shrink-0 text-cyan-400"
                    />

                    <span className="font-medium text-white">
                      {t(`industry.${industry.key}`)}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT'S INCLUDED WITH WEBSITES
      ===================================================== */}

      <section className="bg-[#0B1018] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow={t("includedEyebrow")}
            title={t("includedTitle")}
            description={t("includedDescription")}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {essentials.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.08,
                  }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-[#151D2B] p-7"
                >
                  <Icon
                    size={24}
                    className="shrink-0 text-cyan-400"
                  />

                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {t(`included.${item.key}.title`)}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-400">
                      {t(`included.${item.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            {t("includedNote")}
          </p>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

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

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              {t("ctaTitle")}
            </h2>

            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-slate-300">
              {t("ctaDescription")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-4 font-semibold transition hover:bg-blue-400"
              >
                {t("ctaPrimary")}

                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                {t("ctaSecondary")}

                <ArrowRight size={18} />
              </Link>

            </div>
          </div>
        </motion.div>

      </section>
    </main>
  );
}

// =====================================================
// REUSABLE SECTION HEADING
// =====================================================

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