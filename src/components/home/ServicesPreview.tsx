"use client";

import { motion } from "motion/react";

import {
  MonitorSmartphone,
  Globe2,
  Rocket,
  Settings2,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const services = [
  {
    icon: MonitorSmartphone,
    title: "webDesign",
    description: "webDesignDescription",
    accent: "blue",
  },
  {
    icon: Globe2,
    title: "multilingual",
    description: "multilingualDescription",
    accent: "blue",
  },
  {
    icon: BookOpen,
    title: "menuDesign",
    description: "menuDesignDescription",
    accent: "gold",
  },
  {
    icon: Rocket,
    title: "performance",
    description: "performanceDescription",
    accent: "blue",
  },
  {
    icon: Settings2,
    title: "maintenance",
    description: "maintenanceDescription",
    accent: "blue",
  },
] as const;

export default function ServicesPreview() {
  const t = useTranslations("Services");

  return (
    <section className="relative overflow-hidden bg-[#0B1018] px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isGold = service.accent === "gold";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  isGold
                    ? "border-amber-400/30 bg-gradient-to-br from-[#24231F] to-[#151D2B] hover:border-amber-400/60"
                    : "border-white/10 bg-[#151D2B] hover:border-blue-400/40"
                }`}
              >
                {/* HOVER GLOW */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl transition-all duration-500 ${
                    isGold
                      ? "bg-amber-400/10 group-hover:bg-amber-400/20"
                      : "bg-blue-500/0 group-hover:bg-blue-500/15"
                  }`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  {/* ICON */}
                  <div
                    className={`mb-8 flex h-14 w-14 items-center justify-center rounded-xl border ${
                      isGold
                        ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                        : "border-blue-400/20 bg-blue-500/10 text-cyan-400"
                    }`}
                  >
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {t(service.title)}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mb-8 flex-1 text-sm leading-relaxed text-slate-400">
                    {t(service.description)}
                  </p>

                  {/* LINK */}
                  <Link
                    href="/services"
                    className={`inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors ${
                      isGold
                        ? "text-amber-300 hover:text-amber-200"
                        : "text-cyan-400 hover:text-cyan-300"
                    }`}
                  >
                    {t("learnMore")}

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition-all hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            {t("viewAllServices")}

            <ArrowUpRight
              size={17}
              className="text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}