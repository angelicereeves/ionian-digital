"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Globe2,
  CheckCircle2
} from "lucide-react";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CTA() {
  const t = useTranslations("CTA");

  return (
    <section className="relative overflow-hidden bg-[#0B1018] px-6 py-28 lg:px-8">

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-[#172C4B] via-[#101D31] to-[#0D1625] px-8 py-20 text-center shadow-[0_0_100px_rgba(59,130,246,0.08)] md:px-16 md:py-28">

        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, -70, 0],
              y: [0, 60, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-40 -right-32 h-[550px] w-[550px] rounded-full bg-cyan-400/15 blur-[130px]"
          />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />

        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300"
          >
            <Sparkles size={16} />
            {t("eyebrow")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            {t("description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:bg-blue-400"
            >
              {t("primaryButton")}

              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/pricing"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              {t("secondaryButton")}

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8"
          >
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={18} className="text-cyan-400" />
              {t("trustOne")}
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Globe2 size={18} className="text-cyan-400" />
              {t("trustTwo")}
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={18} className="text-cyan-400" />
              {t("trustThree")}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}