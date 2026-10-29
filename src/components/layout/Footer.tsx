"use client";

import {ArrowUpRight, Mail, MapPin} from "lucide-react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Navigation");

  return (
    <footer className="border-t border-white/10 bg-[#080D14]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400">
                <span className="text-xl font-black text-white">ID</span>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">IONIAN</span>
                <span className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-cyan-400">
                  DIGITAL
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Modern Websites. Local Expertise. Global Reach.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={16} className="text-cyan-400" />
              Albania
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
              Explore
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                {key: "home", href: "/"},
                {key: "services", href: "/services"},
                {key: "portfolio", href: "/portfolio"},
                {key: "pricing", href: "/pricing"},
                {key: "about", href: "/about"},
                {key: "contact", href: "/contact"}
              ].map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
              Let's Build Something
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Ready to bring your business online? Let's create something extraordinary.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              {t("getStarted")}
              <ArrowUpRight size={17} />
            </Link>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
              <Mail size={16} />
              <span>Contact us through our inquiry form</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Ionian Digital. All rights reserved.</p>

          <p>Designed & Developed in Albania.</p>
        </div>
      </div>
    </footer>
  );
}