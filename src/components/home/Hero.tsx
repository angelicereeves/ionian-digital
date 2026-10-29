"use client";

import { motion } from "motion/react";

import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Code2,
  Globe2,
  BookOpen,
} from "lucide-react";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0B1018] px-6 pb-24 pt-40 lg:px-8">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]"
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300"
          >
            <Sparkles size={16} />
            {t("badge")}
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl xl:text-7xl"
          >
            {t("title")}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {t("description")}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              {t("primaryButton")}

              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              {t("secondaryButton")}

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* TRUST INDICATORS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8"
          >
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Code2 size={19} className="text-cyan-400" />
              {t("trust.technology")}
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Globe2 size={19} className="text-cyan-400" />
              {t("trust.multilingual")}
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400">
              <BookOpen size={19} className="text-amber-300" />
              {t("trust.menuDesign")}
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-[100px]" />

          {/* BROWSER MOCKUP */}
          <div className="relative rotate-[-3deg] overflow-hidden rounded-2xl border border-white/10 bg-[#151D2B] shadow-2xl shadow-black/50">
            {/* BROWSER BAR */}
            <div className="flex h-12 items-center gap-2 border-b border-white/10 bg-[#1B2535] px-5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <div className="ml-6 flex-1 rounded-md bg-white/5 px-4 py-1 text-center text-xs text-slate-500">
                ionian-digital.com
              </div>
            </div>

            {/* MOCK WEBSITE */}
            <div className="flex h-[420px] flex-col items-center justify-center bg-gradient-to-br from-[#101A2B] to-[#1C3452] p-10 text-center">
              <div className="mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs tracking-widest text-cyan-300">
                {t("mockup.eyebrow")}
              </div>

              <h2 className="mb-5 text-4xl font-bold text-white">
                {t("mockup.titleLine1")}
                <br />
                {t("mockup.titleLine2")}
              </h2>

              <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                {t("mockup.description")}
              </p>

              <div className="mt-8 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white">
                {t("mockup.button")}
              </div>
            </div>
          </div>

          {/* FLOATING MULTILINGUAL BADGE */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-8 -left-8 rounded-xl border border-white/10 bg-[#151D2B]/90 px-6 py-4 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Globe2 className="text-cyan-400" size={24} />

              <div>
                <p className="text-sm font-semibold text-white">
                  {t("floatingBadge.title")}
                </p>

                <p className="text-xs text-slate-400">
                  {t("floatingBadge.description")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* FLOATING MENU DESIGN BADGE */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-5 top-16 rounded-xl border border-amber-400/20 bg-[#1D2028]/95 px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                <BookOpen size={22} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {t("menuBadge.title")}
                </p>

                <p className="text-xs text-slate-400">
                  {t("menuBadge.description")}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}