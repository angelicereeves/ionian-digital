"use client";

import {motion} from "motion/react";
import {
  MessageSquareText,
  Palette,
  Code2,
  Rocket,
  ArrowUpRight
} from "lucide-react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "discoveryTitle",
    description: "discoveryDescription"
  },
  {
    number: "02",
    icon: Palette,
    title: "designTitle",
    description: "designDescription"
  },
  {
    number: "03",
    icon: Code2,
    title: "developmentTitle",
    description: "developmentDescription"
  },
  {
    number: "04",
    icon: Rocket,
    title: "launchTitle",
    description: "launchDescription"
  }
] as const;

export default function OurProcess() {
  const t = useTranslations("OurProcess");

  return (
    <section className="relative overflow-hidden bg-[#0B1018] px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">

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

        {/* Timeline */}
        <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Connecting line on large screens */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[46px] hidden h-px bg-gradient-to-r from-blue-500/10 via-cyan-400/50 to-blue-500/10 xl:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{opacity: 0, y: 35}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12
                }}
                className="group relative"
              >
                {/* Number + Icon */}
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <div className="flex h-[92px] w-[92px] items-center justify-center rounded-2xl border border-blue-400/20 bg-[#151D2B] text-cyan-400 shadow-xl shadow-black/10 transition-colors group-hover:border-cyan-400/50">
                    <Icon size={34} strokeWidth={1.5} />
                  </div>

                  <span className="text-5xl font-bold tracking-tight text-white/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {t(step.title)}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                  {t(step.description)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{opacity: 0, y: 25}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="mt-20 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            {t("cta")}
            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}