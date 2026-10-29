"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import {
  X,
  BookOpen,
  ExternalLink,
  Download,
  FileText,
} from "lucide-react";

import type { MenuProject } from "./PortfolioPage";

/* =========================================
   TYPES
========================================= */

interface MenuGalleryProps {
  project: MenuProject;
  onClose: () => void;
}

/* =========================================
   PDF VIEWER
========================================= */

export default function MenuGallery({
  project,
  onClose,
}: MenuGalleryProps) {
  const t = useTranslations("PortfolioPage");

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const title = t(`menuProjects.${project.id}.title`);

  const pdfUrl = project.pdf;

  /* =========================================
     LOCK SCROLL + KEYBOARD SUPPORT
  ========================================= */

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex flex-col bg-[#05080D]/98 text-white backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      {/* =====================================
          HEADER
      ===================================== */}

      <div
        className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0B1120] px-4 py-4 md:px-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* PROJECT TITLE */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300 sm:flex">
            <BookOpen size={21} />
          </div>

          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300 md:text-xs">
              {t(`menuProjects.${project.id}.category`)}
            </p>

            <h2 className="truncate text-sm font-semibold text-white md:text-lg">
              {title}
            </h2>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex shrink-0 items-center gap-2">
          {/* OPEN PDF IN NEW TAB */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10 md:px-4 md:text-sm"
          >
            <ExternalLink size={16} />

            <span className="hidden sm:inline">
              {t("gallery.openPdf")}
            </span>
          </a>

          {/* DOWNLOAD PDF */}
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/25 bg-amber-400/10 px-3 py-2.5 text-xs font-semibold text-amber-300 transition hover:bg-amber-400/20 md:px-4 md:text-sm"
          >
            <Download size={16} />

            <span className="hidden sm:inline">
              {t("gallery.downloadPdf")}
            </span>
          </a>

          {/* CLOSE */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t("gallery.close")}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/15"
          >
            <X size={21} />
          </button>
        </div>
      </div>

      {/* =====================================
          PDF VIEWER
      ===================================== */}

      <div
        className="flex min-h-0 flex-1 flex-col bg-[#111827] p-2 md:p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-[#202938] shadow-2xl shadow-black/30">
          <iframe
            key={pdfUrl}
            src={`${pdfUrl}#view=FitH`}
            title={title}
            className="h-full w-full border-0 bg-white"
          />
        </div>
      </div>

      {/* =====================================
          FOOTER
      ===================================== */}

      <div
        className="flex shrink-0 items-center justify-between gap-4 border-t border-white/10 bg-[#0B1120] px-4 py-3 md:px-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex min-w-0 items-center gap-2 text-xs text-slate-400 md:text-sm">
          <FileText
            size={17}
            className="shrink-0 text-amber-300"
          />

          <span className="truncate">{title}</span>
        </div>

        <span className="shrink-0 text-xs text-slate-500 md:text-sm">
          {t("pageCount", {
            count: project.pages,
          })}
        </span>
      </div>
    </motion.div>
  );
}