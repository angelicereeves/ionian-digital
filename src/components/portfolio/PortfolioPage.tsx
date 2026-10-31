"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Globe2,
  Sparkles,
  Monitor,
  BookOpen,
  Wine,
  UtensilsCrossed,
  Martini,
  Languages,
  Eye,
  Layers3,
  FileText,
} from "lucide-react";

import MenuGallery from "./MenuGallery";

/* =========================================
   WEBSITE PROJECTS
========================================= */

const websiteProjects = [
  {
    id: "vatra",
    image: "/portfolio/vatra.png",
    url: "https://vatra-restaurant-five.vercel.app/",
    number: "01",
    accent: "amber",
  },
  {
    id: "hotelmire",
    image: "/portfolio/hotelmire.png",
    url: "https://hotel-mire.vercel.app/",
    number: "02",
    accent: "cyan",
  },
  {
    id: "bistrica",
    image: "/portfolio/bistricapaddle.png",
    url: "https://bistricapaddleboard.com/",
    number: "03",
    accent: "blue",
  },
  {
    id: "crave",
    image: "/portfolio/crave.png",
    url: "",
    number: "04",
    accent: "amber",
  },
] as const;

const accentStyles = {
  cyan: {
    glow: "bg-cyan-400/15",
    border: "hover:border-cyan-400/30",
    text: "text-cyan-300",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  },
  blue: {
    glow: "bg-blue-400/15",
    border: "hover:border-blue-400/30",
    text: "text-blue-300",
    badge: "border-blue-400/20 bg-blue-400/10 text-blue-300",
  },
  violet: {
    glow: "bg-violet-400/15",
    border: "hover:border-violet-400/30",
    text: "text-violet-300",
    badge: "border-violet-400/20 bg-violet-400/10 text-violet-300",
  },
  amber: {
    glow: "bg-amber-400/15",
    border: "hover:border-amber-400/30",
    text: "text-amber-300",
    badge: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  },
};

/* =========================================
   MENU PROJECTS

   Each project uses ONE PDF file.
========================================= */

const menuProjects = [
  {
    id: "veraria",
    pdf: "/menus/veraria-musej.pdf",
    cover: "/menus/veraria-musej.png",
    pages: 34,
    number: "05",
    icon: Wine,
    featured: true,
    color: "from-amber-500/20 via-[#29251D] to-[#111A2A]",
  },
  {
    id: "food",
    pdf: "/menus/centrali-food.pdf",
    cover: "/menus/centrali-food.png",
    pages: 8,
    number: "06",
    icon: UtensilsCrossed,
    featured: false,
    color: "from-cyan-500/15 via-[#192C39] to-[#111A2A]",
  },
  {
    id: "cocktails",
    pdf: "/menus/centrali-cocktails.pdf",
    cover: "/menus/centrali-cocktails.png",
    pages: 8,
    number: "07",
    icon: Martini,
    featured: false,
    color: "from-violet-500/15 via-[#252038] to-[#111A2A]",
  },
  {
    id: "main",
    pdf: "/menus/centrali-main.pdf",
    cover: "/menus/centrali-main.png",
    pages: 12,
    number: "08",
    icon: Languages,
    featured: false,
    color: "from-orange-500/15 via-[#30251E] to-[#111A2A]",
  },
] as const;

export type MenuProject = (typeof menuProjects)[number];

type PortfolioFilter = "all" | "websites" | "menus";

/* =========================================
   PORTFOLIO PAGE
========================================= */

export default function PortfolioPage() {
  const t = useTranslations("PortfolioPage");

  const [activeFilter, setActiveFilter] =
    useState<PortfolioFilter>("all");

  const [activeMenu, setActiveMenu] =
    useState<MenuProject | null>(null);

  const showWebsites =
    activeFilter === "all" || activeFilter === "websites";

  const showMenus =
    activeFilter === "all" || activeFilter === "menus";

  const filters = [
    {
      id: "all" as const,
      label: t("filters.all"),
      icon: Layers3,
    },
    {
      id: "websites" as const,
      label: t("filters.websites"),
      icon: Monitor,
    },
    {
      id: "menus" as const,
      label: t("filters.menus"),
      icon: BookOpen,
    },
  ];

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#0B1120] text-white">
        {/* BACKGROUND EFFECTS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute -right-40 top-[700px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

          <div className="absolute -left-40 bottom-96 h-[500px] w-[500px] rounded-full bg-amber-400/[0.06] blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-32 md:px-10 md:pt-40">
          {/* =====================================
              HERO
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-14 max-w-4xl text-center"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-medium text-cyan-300">
              <Sparkles size={15} />

              {t("heroEyebrow")}
            </div>

            <h1 className="mb-8 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              {t("heroTitle")}
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              {t("heroDescription")}
            </p>
          </motion.div>

          {/* =====================================
              PORTFOLIO FILTERS
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24 flex flex-wrap items-center justify-center gap-3"
          >
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-200 shadow-lg shadow-cyan-500/5"
                      : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={17} />
                  {filter.label}
                </button>
              );
            })}
          </motion.div>

          {/* =====================================
              WEBSITE PROJECTS
          ===================================== */}

          {showWebsites && (
            <section className="mb-28">
              {/* SECTION HEADING */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  <Monitor size={19} />
                  {t("sections.websitesEyebrow")}
                </div>

                <h2 className="mb-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  {t("sections.websitesTitle")}
                </h2>

                <p className="max-w-2xl leading-relaxed text-slate-400">
                  {t("sections.websitesDescription")}
                </p>
              </motion.div>

              {/* WEBSITE PROJECT LIST */}
              <div className="space-y-28">
                {websiteProjects.map((project, index) => {
                  const accent = accentStyles[project.accent];
                  const reverse = index % 2 !== 0;

                  return (
                    <motion.article
                      key={project.id}
                      initial={{ opacity: 0, y: 45 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.7 }}
                      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                        reverse
                          ? "lg:[&>*:first-child]:order-2"
                          : ""
                      }`}
                    >
                      {/* WEBSITE PREVIEW */}
                      <div
                        className={`group relative rounded-[32px] border border-white/10 bg-[#111A2A] p-5 transition-all duration-500 ${accent.border} md:p-7`}
                      >
                        <div
                          className={`pointer-events-none absolute inset-10 rounded-full ${accent.glow} blur-[90px]`}
                        />

                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080D17] shadow-2xl shadow-black/30">
                          {/* BROWSER BAR */}
                          <div className="flex items-center gap-3 border-b border-white/10 bg-[#172033] px-4 py-3">
                            <div className="flex gap-1.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                            </div>

                            <div className="mx-auto flex max-w-[65%] items-center gap-2 truncate rounded-md border border-white/5 bg-[#0B1120] px-4 py-1.5 text-xs text-slate-400">
                              <Globe2
                                size={12}
                                className="shrink-0"
                              />

                              <span className="truncate">
                                {project.url
                                  ? project.url.replace(
                                      /^https?:\/\//,
                                      "",
                                    )
                                  : t("previewLabel")}
                              </span>
                            </div>

                            <ExternalLink
                              size={14}
                              className="text-slate-500"
                            />
                          </div>

                          {/* WEBSITE SCREENSHOT */}
                          <div className="relative aspect-[4/3] overflow-hidden bg-[#0B1120]">
                            <Image
                              src={project.image}
                              alt={t(
                                `projects.${project.id}.imageAlt`,
                              )}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                            />
                          </div>
                        </div>

                        {/* PROJECT NUMBER */}
                        <span className="absolute -bottom-5 right-8 text-6xl font-bold tracking-tighter text-white/10 md:text-7xl">
                          {project.number}
                        </span>
                      </div>

                      {/* WEBSITE DETAILS */}
                      <div>
                        <div
                          className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] ${accent.badge}`}
                        >
                          <Monitor size={14} />

                          {t(
                            `projects.${project.id}.industry`,
                          )}
                        </div>

                        <h3 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
                          {t(`projects.${project.id}.title`)}
                        </h3>

                        <p className="mb-8 text-lg leading-relaxed text-slate-400">
                          {t(
                            `projects.${project.id}.description`,
                          )}
                        </p>

                        {/* TECHNOLOGY TAGS */}
                        <div className="mb-9 flex flex-wrap gap-2">
                          {[
                            "React",
                            "Next.js",
                            "Tailwind CSS",
                            "Responsive Design",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* WEBSITE LINK */}
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group/link inline-flex items-center gap-3 font-semibold ${accent.text}`}
                          >
                            {t("viewWebsite")}

                            <ArrowUpRight
                              size={19}
                              className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                            />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                            {t("previewLabel")}
                          </span>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </section>
          )}

          {/* =====================================
              MENU & CATALOG DESIGN
          ===================================== */}

          {showMenus && (
            <section>
              {/* SECTION HEADING */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14"
              >
                <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                  <BookOpen size={19} />
                  {t("sections.menusEyebrow")}
                </div>

                <h2 className="mb-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  {t("sections.menusTitle")}
                </h2>

                <p className="max-w-2xl leading-relaxed text-slate-400">
                  {t("sections.menusDescription")}
                </p>
              </motion.div>

              {/* MENU PROJECT CARDS */}
              <div className="grid gap-7 lg:grid-cols-2">
                {menuProjects.map((project, index) => {
                  const Icon = project.icon;

                  return (
                    <motion.button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveMenu(project)}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                      }}
                      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111A2A] text-left transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/35"
                    >
                      {/* DECORATIVE HEADER */}
                      <div
                        className={`relative flex h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.color} sm:h-[300px]`}
                      >
                        {/* DECORATIVE CIRCLES */}
                        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/5" />

                        <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full border border-white/5" />

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06),transparent_65%)]" />

                        {/* FEATURED LABEL */}
                        {project.featured && (
                          <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-[#0B1120]/85 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
                            <Sparkles size={13} />

                            {t("featuredProject")}
                          </div>
                        )}

                        {/* ACTUAL MENU COVER IMAGE */}
                        <div className="relative h-[215px] w-[160px] rotate-[-6deg] overflow-hidden rounded-lg border border-amber-300/20 bg-[#101827] shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:rotate-[-2deg] group-hover:scale-105 sm:h-[250px] sm:w-[185px]">
                          <Image
                            src={project.cover}
                            alt={t(`menuProjects.${project.id}.imageAlt`)}
                            fill
                            sizes="(max-width: 640px) 160px, 185px"
                            className="object-contain"
                          />
                        </div>

                        {/* PDF BADGE */}
                        <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-lg border border-amber-400/20 bg-[#0B1120]/90 px-3 py-2 text-xs font-bold tracking-wider text-amber-300 shadow-xl backdrop-blur-md">
                          <FileText size={14} />
                          PDF
                        </div>

                        {/* VIEW ICON */}
                        <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-[#0B1120]/70 text-white backdrop-blur-md transition-colors group-hover:border-amber-400/30 group-hover:text-amber-300">
                          <Eye size={20} />
                        </div>
                      </div>

                      {/* PROJECT DETAILS */}
                      <div className="p-7 md:p-9">
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                            <Icon size={16} />

                            {t(
                              `menuProjects.${project.id}.category`,
                            )}
                          </div>

                          <span className="text-xs text-slate-500">
                            {t("pageCount", {
                              count: project.pages,
                            })}
                          </span>
                        </div>

                        <h3 className="mb-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                          {t(
                            `menuProjects.${project.id}.title`,
                          )}
                        </h3>

                        <p className="mb-7 leading-relaxed text-slate-400">
                          {t(
                            `menuProjects.${project.id}.description`,
                          )}
                        </p>

                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                          {t("exploreMenu")}

                          <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </section>
          )}

          {/* =====================================
              FINAL CTA
          ===================================== */}

          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-36 overflow-hidden rounded-[36px] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-[#111A2A] px-8 py-16 text-center md:px-16 md:py-24"
          >
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

            <div className="relative">
              <Sparkles
                size={30}
                className="mx-auto mb-7 text-cyan-300"
              />

              <h2 className="mx-auto mb-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                {t("ctaTitle")}
              </h2>

              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
                {t("ctaDescription")}
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-[#07111D] shadow-lg shadow-cyan-500/15 transition hover:shadow-cyan-500/30"
              >
                {t("ctaButton")}

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.section>
        </div>
      </main>

      {/* FULLSCREEN PDF VIEWER */}
      <AnimatePresence>
        {activeMenu && (
          <MenuGallery
            project={activeMenu}
            onClose={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}