"use client";

import {motion} from "motion/react";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {useLocale} from "next-intl";
import {ArrowUpRight, Globe2} from "lucide-react";

export default function TourismBanner() {
  const t = useTranslations("TourismBanner");
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#071a24] py-20 sm:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Small label */}
        <motion.div
          initial={{opacity: 0, y: 15}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
          className="mb-8 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400"
        >
          <Globe2 size={18} />
          {t("eyebrow")}
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{opacity: 0, y: 25}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.65}}
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {t("headline1")}
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
            {t("headline2")}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.65, delay: 0.1}}
          className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          {t("description")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.65, delay: 0.2}}
          className="mt-10"
        >
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-[#071a24] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            {t("button")}
            <ArrowUpRight size={19} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}