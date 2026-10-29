"use client";

import {motion} from "motion/react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Globe2,
  HeartHandshake,
  Sparkles,
  MapPin,
  CheckCircle2,
  Layers3,
  Lightbulb,
  Target,
  MonitorSmartphone
} from "lucide-react";

import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

const values = [
  {
    icon: HeartHandshake,
    key: "personal"
  },
  {
    icon: Globe2,
    key: "accessible"
  },
  {
    icon: Lightbulb,
    key: "thoughtful"
  },
  {
    icon: Target,
    key: "results"
  }
] as const;

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <main className="overflow-hidden bg-[#0B1018] text-white">

      {/* HERO */}
      <section className="relative px-6 pb-28 pt-40 lg:px-8 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
        </div>

        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          className="relative mx-auto max-w-5xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={15} />
            {t("heroEyebrow")}
          </div>

          <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {t("heroTitle")}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {t("heroDescription")}
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#0E1520] px-6 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Story */}
          <motion.div
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
          >
            <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {t("storyEyebrow")}
            </span>

            <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {t("storyTitle")}
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-400">
              <p>{t("storyParagraph1")}</p>
              <p>{t("storyParagraph2")}</p>
              <p>{t("storyParagraph3")}</p>
            </div>
          </motion.div>

          {/* Decorative Studio Visual */}
          <motion.div
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#151D2B] p-8 shadow-2xl md:p-12">

              {/* Browser header */}
              <div className="mb-10 flex items-center gap-2 border-b border-white/10 pb-6">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />

                <span className="ml-auto text-xs text-slate-500">
                  ionian.digital
                </span>
              </div>

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20">
                <Code2 size={40} className="text-white" />
              </div>

              <h3 className="mb-4 text-3xl font-bold tracking-tight">
                IONIAN
                <span className="block text-cyan-400">DIGITAL.</span>
              </h3>

              <p className="mb-10 max-w-sm leading-relaxed text-slate-400">
                {t("visualDescription")}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <Globe2 size={24} className="mb-4 text-cyan-400" />
                  <p className="text-sm font-medium text-white">
                    {t("visualMultilingual")}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <MonitorSmartphone size={24} className="mb-4 text-cyan-400" />
                  <p className="text-sm font-medium text-white">
                    {t("visualModern")}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="mb-16 max-w-3xl"
          >
            <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {t("founderEyebrow")}
            </span>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              {t("founderTitle")}
            </h2>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Founder visual */}
            <motion.div
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" />

              <div className="relative h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#151D2B] shadow-2xl sm:h-[580px] lg:h-[640px]">
                <Image
                  src="/images/angelica.jpeg"
                  alt="Angelica, founder and lead developer of Ionian Digital"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[62%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1018]/95 via-[#0B1018]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <div className="mb-5 inline-flex items-center rounded-full border border-cyan-300/30 bg-[#0B1018]/75 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md">
                    {t("founderExperienceBadge")}
                  </div>
                  <h3 className="mb-2 text-3xl font-bold text-white">Angelica</h3>
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-cyan-300">
                    {t("founderRole")}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-200">
                    <MapPin size={16} className="text-cyan-300" />
                    {t("founderLocation")}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder story */}
            <motion.div
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
            >
              <h3 className="mb-7 text-3xl font-bold leading-tight md:text-4xl">
                {t("founderHeading")}
              </h3>

              <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                <p>{t("founderParagraph1")}</p>
                <p>{t("founderParagraph2")}</p>
                <p>{t("founderParagraph3")}</p>
              </div>

              <div className="mt-8 rounded-2xl border-l-4 border-cyan-400 bg-cyan-400/5 px-6 py-5">
                <p className="text-lg font-semibold leading-relaxed text-white">
                  {t("founderQuote")}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-[#151D2B] px-4 py-2 text-sm font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                {t("founderButton")}
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#0E1520] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{opacity: 0, y: 25}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {t("valuesEyebrow")}
            </span>

            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {t("valuesTitle")}
            </h2>

            <p className="text-lg leading-relaxed text-slate-400">
              {t("valuesDescription")}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.key}
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, delay: index * 0.1}}
                  whileHover={{y: -6}}
                  className="rounded-2xl border border-white/10 bg-[#151D2B] p-8 transition-colors hover:border-cyan-400/30"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold">
                    {t(`values.${value.key}.title`)}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400">
                    {t(`values.${value.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 py-28 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.7}}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
              <Layers3 size={29} />
            </div>
          </div>

          <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {t("missionEyebrow")}
          </span>

          <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {t("missionTitle")}
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {t("missionDescription")}
          </p>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-28 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 25}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
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
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-4 font-semibold transition hover:bg-blue-400"
              >
                {t("ctaPrimary")}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                {t("ctaSecondary")}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}