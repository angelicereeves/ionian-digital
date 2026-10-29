"use client";

import {motion} from "motion/react";
import {
  Globe2,
  MapPin,
  Zap,
  BadgeEuro,
  HeartHandshake,
  ArrowUpRight
} from "lucide-react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

const benefits = [
  {
    icon: MapPin,
    title: "localTitle",
    description: "localDescription"
  },
  {
    icon: Globe2,
    title: "languagesTitle",
    description: "languagesDescription"
  },
  {
    icon: Zap,
    title: "technologyTitle",
    description: "technologyDescription"
  },
  {
    icon: BadgeEuro,
    title: "pricingTitle",
    description: "pricingDescription"
  },
  {
    icon: HeartHandshake,
    title: "personalTitle",
    description: "personalDescription"
  }
] as const;

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  return (
    <section className="relative overflow-hidden bg-[#0E1520] px-6 py-28 lg:px-8">
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left side */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {t("eyebrow")}
            </span>

            <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              {t("title")}
            </h2>

            <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-400">
              {t("description")}
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              {t("cta")}
              <ArrowUpRight
                size={19}
                className="text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* Right side */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{opacity: 0, x: 35}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true, amount: 0.2}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08
                  }}
                  className="group flex gap-6 rounded-2xl border border-white/10 bg-[#151D2B]/70 p-7 transition-colors hover:border-cyan-400/30 md:p-8"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-400">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {t(benefit.title)}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                      {t(benefit.description)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}