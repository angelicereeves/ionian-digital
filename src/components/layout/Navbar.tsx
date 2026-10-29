"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";
import {Menu, X, ArrowUpRight, Globe2} from "lucide-react";
import {useTranslations, useLocale} from "next-intl";
import {Link, usePathname, useRouter} from "@/i18n/navigation";

const navigation = [
  {key: "home", href: "/"},
  {key: "services", href: "/services"},
  {key: "portfolio", href: "/portfolio"},
  {key: "pricing", href: "/pricing"},
  {key: "about", href: "/about"},
  {key: "contact", href: "/contact"}
] as const;

const languages = [
  {code: "sq", label: "Shqip"},
  {code: "en", label: "English"},
  {code: "it", label: "Italiano"},
  {code: "el", label: "Ελληνικά"}
] as const;

export default function Navbar() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  function changeLanguage(nextLocale: string) {
    router.replace(pathname, {locale: nextLocale});
    setLanguageOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1018]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20">
            <span className="text-xl font-black tracking-tighter text-white">
              ID
            </span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-white">
              IONIAN
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-cyan-400">
              DIGITAL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t(item.key)}

                {active && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-400"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              aria-label="Select language"
              aria-expanded={languageOpen}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <Globe2 size={17} />
              {locale.toUpperCase()}
            </button>

            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{opacity: 0, y: -8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -8}}
                  transition={{duration: 0.2}}
                  className="absolute right-0 top-full mt-3 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#151D2B] p-2 shadow-2xl"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`block w-full rounded-lg px-4 py-3 text-left text-sm transition ${
                        locale === language.code
                          ? "bg-blue-500/20 text-cyan-400"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {language.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            {t("getStarted")}
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.25}}
            className="overflow-hidden border-t border-white/10 bg-[#0B1018] lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition ${
                    pathname === item.href
                      ? "bg-blue-500/10 text-cyan-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}

              <div className="my-4 border-t border-white/10" />

              <p className="px-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Language
              </p>

              <div className="grid grid-cols-4 gap-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`rounded-lg border px-2 py-3 text-sm font-semibold transition ${
                      locale === language.code
                        ? "border-blue-500 bg-blue-500/20 text-cyan-400"
                        : "border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    {language.code.toUpperCase()}
                  </button>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-4 font-semibold text-white"
              >
                {t("getStarted")}
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}