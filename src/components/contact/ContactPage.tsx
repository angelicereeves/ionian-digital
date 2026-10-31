"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Loader2,
  Globe2,
  MessageSquareText,
  MessageCircle,
  Languages,
} from "lucide-react";

type PackageType =
  | "starter" | "business" | "premium" | "custom"
  | "menuRefresh" | "menuCustom" | "menuMultilingual" | "menuQuote";
type ServiceType = "website" | "menu";
type MenuKind = "food" | "cocktails" | "wine" | "other";
type MenuPages = "1-2" | "3-5" | "6-10" | "10+";
type MenuFormat = "print" | "digital" | "both";

type ContactForm = {
  name: string;
  email: string;
  business: string;
  package: PackageType;
  service: ServiceType;
  menuKind: MenuKind;
  menuPages: MenuPages;
  menuLanguages: string;
  menuExisting: "new" | "redesign";
  menuFormat: MenuFormat;
  message: string;
  website: string;
};

const WHATSAPP_NUMBER = "355696041547";
const CONTACT_EMAIL = "ioniandigital@gmail.com";

const validPackages: PackageType[] = [
  "starter",
  "business",
  "premium",
  "custom",
  "menuRefresh", "menuCustom", "menuMultilingual", "menuQuote",
];

const menuPackages: PackageType[] = ["menuRefresh", "menuCustom", "menuMultilingual", "menuQuote"];

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const searchParams = useSearchParams();

  const initialPackage = searchParams.get("package");
  const initialService = searchParams.get("service");

  const selectedPackage: PackageType = validPackages.includes(
    initialPackage as PackageType
  )
    ? (initialPackage as PackageType)
    : "business";

  const defaultService: ServiceType = initialService === "menu" || menuPackages.includes(selectedPackage)
    ? "menu" : "website";

  const emptyForm = (): ContactForm => ({
    name: "", email: "", business: "", package: defaultService === "menu" && !menuPackages.includes(selectedPackage) ? "menuCustom" : selectedPackage,
    service: defaultService, menuKind: "food", menuPages: "1-2",
    menuLanguages: "", menuExisting: "new", menuFormat: "both",
    message: "", website: "",
  });

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    business: "",
    package: defaultService === "menu" && !menuPackages.includes(selectedPackage) ? "menuCustom" : selectedPackage,
    service: defaultService,
    menuKind: "food",
    menuPages: "1-2",
    menuLanguages: "",
    menuExisting: "new",
    menuFormat: "both",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  // WhatsApp message is automatically translated based on the page language.
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t("whatsappMessage")
  )}`;

  const updateField = <K extends keyof ContactForm>(
    field: K,
    value: ContactForm[K]
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const resetForm = () => {
    setForm(emptyForm());
    setStatus("idle");
    setErrorMessage("");
  };

  const chooseService = (service: ServiceType) => {
    setForm((previous) => ({
      ...previous,
      service,
      package: service === "menu" ? "menuCustom" : "business",
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") return;

    // Honeypot spam protection.
    if (form.website) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Web3Forms access key is not configured.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Ionian Digital ${form.service === "menu" ? "Menu Design" : "Website"} Inquiry — ${form.package}`,
          from_name: "Ionian Digital Website",
          name: form.name,
          email: form.email,
          replyto: form.email,
          business: form.business || "Not provided",
          service: form.service === "menu" ? "Menu & Catalog Design" : "Website Development",
          package: t(`packages.${form.package}`),
          ...(form.service === "menu" ? {
            menu_type: t(`menuKinds.${form.menuKind}`),
            estimated_pages: form.menuPages,
            menu_languages: form.menuLanguages || "Not specified",
            existing_menu: t(`existingMenu.${form.menuExisting}`),
            delivery_format: t(`menuFormats.${form.menuFormat}`),
          } : {}),
          message: form.message,
          botcheck: form.website,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send inquiry.");
      }

      setStatus("success");

      setForm(emptyForm());
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };

  const packages: { value: PackageType; label: string }[] = [
    {
      value: "starter",
      label: t("packages.starter"),
    },
    {
      value: "business",
      label: t("packages.business"),
    },
    {
      value: "premium",
      label: t("packages.premium"),
    },
    {
      value: "custom",
      label: t("packages.custom"),
    },
    { value: "menuRefresh", label: t("packages.menuRefresh") },
    { value: "menuCustom", label: t("packages.menuCustom") },
    { value: "menuMultilingual", label: t("packages.menuMultilingual") },
    { value: "menuQuote", label: t("packages.menuQuote") },
  ];

  const visiblePackages = packages.filter((item) =>
    form.service === "menu" ? menuPackages.includes(item.value) : !menuPackages.includes(item.value)
  );

  const selectClass = "w-full rounded-xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B1120] text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute -right-48 top-[450px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-32 md:px-10 md:pt-40">
        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={15} />
            {t("heroEyebrow")}
          </div>

          <h1 className="mb-7 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {t("heroTitle")}
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {t("heroDescription")}
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.45fr_0.85fr]">
          {/* CONTACT FORM */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111A2A]/95 p-7 shadow-2xl shadow-black/20 md:p-10"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-500/5 blur-3xl" />

            <div className="relative">
              {/* FORM HEADER */}
              <div className="mb-9 flex items-start gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <MessageSquareText size={25} />
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-semibold">
                    {t("formTitle")}
                  </h2>

                  <p className="leading-relaxed text-slate-400">
                    {t("formDescription")}
                  </p>
                </div>
              </div>

              {/* SUCCESS MESSAGE */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center"
                  role="status"
                >
                  <CheckCircle2
                    size={44}
                    className="mx-auto mb-5 text-emerald-400"
                  />

                  <p className="mb-7 text-lg leading-relaxed text-emerald-100">
                    {t("successMessage")}
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-xl border border-white/15 px-6 py-3 font-medium transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {t("formTitle")}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* NAME + EMAIL */}
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-3 block text-sm font-medium text-slate-200"
                      >
                        {t("nameLabel")}
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(event) =>
                          updateField("name", event.target.value)
                        }
                        placeholder={t("namePlaceholder")}
                        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-3 block text-sm font-medium text-slate-200"
                      >
                        {t("emailLabel")}
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        placeholder={t("emailPlaceholder")}
                        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                      />
                    </div>
                  </div>

                  {/* BUSINESS NAME */}
                  <div>
                    <label
                      htmlFor="contact-business"
                      className="mb-3 block text-sm font-medium text-slate-200"
                    >
                      {t("businessLabel")}
                    </label>

                    <input
                      id="contact-business"
                      type="text"
                      name="business"
                      autoComplete="organization"
                      value={form.business}
                      onChange={(event) =>
                        updateField("business", event.target.value)
                      }
                      placeholder={t("businessPlaceholder")}
                      className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                    />
                  </div>

                  {/* SERVICE SELECTION */}
                  <div>
                    <p className="mb-3 text-sm font-medium text-slate-200">{t("serviceLabel")}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(["website", "menu"] as const).map((service) => (
                        <button key={service} type="button" aria-pressed={form.service === service}
                          onClick={() => chooseService(service)}
                          className={`rounded-xl border px-5 py-4 text-left font-medium transition-all ${form.service === service
                            ? "border-cyan-400/50 bg-cyan-400/10 text-white"
                            : "border-white/10 bg-[#0B1120] text-slate-400 hover:border-white/25 hover:text-white"}`}>
                          {t(`services.${service}`)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* PACKAGE SELECTION */}
                  <div>
                    <p className="mb-3 text-sm font-medium text-slate-200">
                      {t("packageLabel")}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {visiblePackages.map((item) => {
                        const active = form.package === item.value;

                        return (
                          <button
                            key={item.value}
                            type="button"
                            onClick={() =>
                              updateField("package", item.value)
                            }
                            aria-pressed={active}
                            className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                              active
                                ? "border-cyan-400/50 bg-cyan-400/10 text-white shadow-lg shadow-cyan-500/5"
                                : "border-white/10 bg-[#0B1120] text-slate-400 hover:border-white/25 hover:text-white"
                            }`}
                          >
                            <span className="font-medium">{item.label}</span>

                            {active && (
                              <CheckCircle2
                                size={18}
                                className="ml-3 shrink-0 text-cyan-300"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* OPTIONAL MENU DESIGN DETAILS */}
                  {form.service === "menu" && (
                    <div className="space-y-6 rounded-2xl border border-amber-400/15 bg-amber-400/[0.04] p-5 md:p-6">
                      <div>
                        <h3 className="text-lg font-semibold text-amber-200">{t("menuDetailsTitle")}</h3>
                        <p className="mt-1 text-sm text-slate-400">{t("menuDetailsDescription")}</p>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="menu-kind" className="mb-2 block text-sm text-slate-200">{t("menuKindLabel")}</label>
                          <select id="menu-kind" className={selectClass} value={form.menuKind}
                            onChange={(e) => updateField("menuKind", e.target.value as MenuKind)}>
                            {(["food", "cocktails", "wine", "other"] as const).map((kind) =>
                              <option key={kind} value={kind}>{t(`menuKinds.${kind}`)}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="menu-pages" className="mb-2 block text-sm text-slate-200">{t("menuPagesLabel")}</label>
                          <select id="menu-pages" className={selectClass} value={form.menuPages}
                            onChange={(e) => updateField("menuPages", e.target.value as MenuPages)}>
                            {(["1-2", "3-5", "6-10", "10+"] as const).map((pages) =>
                              <option key={pages} value={pages}>{pages}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="menu-existing" className="mb-2 block text-sm text-slate-200">{t("existingMenuLabel")}</label>
                          <select id="menu-existing" className={selectClass} value={form.menuExisting}
                            onChange={(e) => updateField("menuExisting", e.target.value as "new" | "redesign")}>
                            {(["new", "redesign"] as const).map((option) =>
                              <option key={option} value={option}>{t(`existingMenu.${option}`)}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="menu-format" className="mb-2 block text-sm text-slate-200">{t("menuFormatLabel")}</label>
                          <select id="menu-format" className={selectClass} value={form.menuFormat}
                            onChange={(e) => updateField("menuFormat", e.target.value as MenuFormat)}>
                            {(["print", "digital", "both"] as const).map((format) =>
                              <option key={format} value={format}>{t(`menuFormats.${format}`)}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="menu-languages" className="mb-2 block text-sm text-slate-200">{t("menuLanguagesLabel")}</label>
                        <input id="menu-languages" type="text" className={selectClass}
                          placeholder={t("menuLanguagesPlaceholder")} value={form.menuLanguages}
                          onChange={(e) => updateField("menuLanguages", e.target.value)} />
                      </div>
                    </div>
                  )}

                  {/* PROJECT DETAILS */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-3 block text-sm font-medium text-slate-200"
                    >
                      {t("messageLabel")}
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(event) =>
                        updateField("message", event.target.value)
                      }
                      placeholder={t("messagePlaceholder")}
                      className="w-full resize-y rounded-xl border border-white/10 bg-[#0B1120] px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                    />
                  </div>

                  {/* HONEYPOT FIELD */}
                  <div
                    className="absolute -left-[9999px]"
                    aria-hidden="true"
                  >
                    <label htmlFor="contact-website">
                      Leave this field empty
                    </label>

                    <input
                      id="contact-website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(event) =>
                        updateField("website", event.target.value)
                      }
                    />
                  </div>

                  {/* ERROR MESSAGE */}
                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-300"
                    >
                      <AlertCircle size={20} className="shrink-0" />

                      <div>
                        <p className="font-medium">
                          {t("errorMessage")}
                        </p>

                        {errorMessage && (
                          <p className="mt-2 text-xs text-red-300/70">
                            {errorMessage}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-base font-semibold text-[#07111D] shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        {t("sending")}
                      </>
                    ) : (
                      <>
                        <Send size={19} />
                        {t("submitButton")}

                        <ArrowUpRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </>
                    )}
                  </button>

                  {/* PRIVACY NOTE */}
                  <p className="text-center text-xs leading-relaxed text-slate-500">
                    {t("privacyNote")}
                  </p>
                </form>
              )}
            </div>
          </motion.section>

          {/* CONTACT SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* EMAIL CARD */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151D2B] p-8 transition-all duration-300 hover:border-cyan-400/30">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Mail size={27} />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {t("emailCardTitle")}
                </h3>

                <p className="mb-6 leading-relaxed text-slate-400">
                  {t("emailCardDescription")}
                </p>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group/link inline-flex items-center gap-2 break-all font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                  {CONTACT_EMAIL}

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </a>
              </div>
            </div>

            {/* WHATSAPP CARD */}
            <div className="group relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-[#151D2B] p-8 transition-all duration-300 hover:border-emerald-400/40">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-300 group-hover:bg-emerald-500/20" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <MessageCircle size={27} />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {t("whatsappCardTitle")}
                </h3>

                <p className="mb-6 leading-relaxed text-slate-400">
                  {t("whatsappCardDescription")}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("whatsappButton")}
                  className="group/button inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-[#081810] transition-all duration-300 hover:bg-[#3BE47A] hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <MessageCircle size={20} />

                  {t("whatsappButton")}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                  />
                </a>

                <p className="mt-4 text-center text-sm text-slate-500">
                  +355 69 604 1547
                </p>
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151D2B] p-8 transition-all duration-300 hover:border-cyan-400/30">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                  <MapPin size={27} />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {t("locationCardTitle")}
                </h3>

                <p className="mb-5 leading-relaxed text-slate-400">
                  {t("locationDescription")}
                </p>

                <div className="flex items-center gap-3 text-slate-200">
                  <Globe2 size={19} className="text-cyan-300" />

                  <span>{t("location")}</span>
                </div>
              </div>
            </div>

            {/* MULTILINGUAL WEBSITES CARD */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151D2B] p-8 transition-all duration-300 hover:border-cyan-400/30">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <Languages size={27} />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {t("languageCardTitle")}
                </h3>

                <p className="leading-relaxed text-slate-400">
                  {t("languageCardDescription")}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Shqip", "English", "Italiano", "Ελληνικά"].map(
                    (language) => (
                      <span
                        key={language}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {language}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* FINAL NOTE */}
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent p-8">
              <Sparkles
                className="mb-5 text-cyan-300"
                size={25}
              />

              <h3 className="mb-3 text-xl font-semibold">
                {t("noteTitle")}
              </h3>

              <p className="leading-relaxed text-slate-400">
                {t("noteDescription")}
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}