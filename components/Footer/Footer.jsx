"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Phone, Mail, ArrowUp, Link2, Headset } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaDiscord, FaYoutube } from "react-icons/fa";
import GhostCursor from "../AnimationLibraries/GhostCursor";

// import React, { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/4lpha-dev",
    color: "text-[#E6EDF3]",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
    color: "text-[#0A66C2]",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "#",
    color: "text-[#5865F2]",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "#",
    color: "text-[#FF0000]",
  },
];

export default function Footer() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const currentYear = 2026;

  // const [currentYear, setCurrentYear] = useState(2026);

  // useEffect(() => {
  //   setCurrentYear(new Date().getFullYear());
  // }, []);

  const content = {
    en: {
      description:
        "We build digital experiences that combine modern development with reliable software quality. From concept to delivery, we turn ideas into solutions that work.",
      tagline: "Build with purpose. Test with precision.",

      linksTitle: "Important Links",
      servicesTitle: "Our Services",
      contactTitle: "Contact Information",

      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About Us",
      joinUs: "Join Us",
      contact: "Contact",
      startProject: "Start a Project",

      web: "Web Development",
      testing: "Software Testing & QA",
      ecommerce: "E-commerce Solutions",
      custom: "Custom Software Solutions",

      email: "4lpha.digital@gmail.com",
      phone: "+20 122 478 7747",
      location: "Alexandria, Egypt",

      rights: "All rights reserved.",
      backToTop: "Back to top",
    },

    ar: {
      description:
        "نبني تجارب رقمية تجمع بين التطوير الحديث وجودة البرمجيات الموثوقة. من الفكرة حتى التسليم، نحول أفكارك إلى حلول رقمية حقيقية.",
      tagline: "نبني بهدف. ونختبر بدقة.",

      linksTitle: "أهم الروابط",
      servicesTitle: "خدماتنا",
      contactTitle: "بيانات التواصل",

      home: "الرئيسية",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      about: "من نحن",
      joinUs: "انضم إلينا",
      contact: "تواصل معنا",
      startProject: "ابدأ مشروعك",

      web: "تطوير المواقع الإلكترونية",
      testing: "اختبار البرمجيات وضمان الجودة",
      ecommerce: "تطوير المتاجر الإلكترونية",
      custom: "الحلول البرمجية المخصصة",

      email: "4lpha.digital@gmail.com",
      phone: "+20 122 478 7747",
      location: "الإسكندرية، مصر",

      rights: "جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى",
    },
  };

  const t = content[isArabic ? "ar" : "en"];

  const navigationLinks = [
    { label: t.home, href: "#home" },
    { label: t.services, href: "#services" },
    { label: t.portfolio, href: "#portfolio" },
    { label: t.about, href: "#about" },

    // Join Us - Opens in a new tab
    { label: t.joinUs, href: "/join-us", external: true },

    { label: t.contact, href: "#contact" },
    { label: t.startProject, href: "#contact" },
  ];

  const serviceLinks = [
    { label: t.web, href: "#services" },
    { label: t.testing, href: "#services" },
    { label: t.ecommerce, href: "#services" },
    { label: t.custom, href: "#services" },
  ];

  const cardClass =
    "group relative h-full overflow-hidden rounded-[26px] border border-[#20364A]/70 bg-[#081426]/85 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-500 hover:border-[#00A6BD]/40 hover:bg-[#0A1B2E]/95 sm:p-7";

  const headingClass =
    "mb-7 flex items-center gap-3 text-base font-bold text-white";

  const accentLine =
    "h-[3px] w-10 rounded-full bg-gradient-to-r from-[#00D5E8] to-[#7957FF]";

  const linkClass =
    "group/link flex items-center gap-3 text-sm text-slate-400 transition-all duration-300 hover:text-[#00D5E8]";

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-[#163247]/70 bg-[#02090D] text-white"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-[#00D5E8]/[0.045] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#006B80]/[0.06] blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.018)_1px,transparent_1px)] bg-[size:55px_55px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 pb-0 pt-14 sm:px-7 sm:pt-16 lg:px-10">
        {/* Main Footer Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-[1.2fr_1.35fr_1fr_1.2fr]">
          {/* Brand Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className={cardClass}
          >
            {/* Ghost Cursor background effect. */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px] opacity-40">
              <GhostCursor
                color="#00D5E8"
                size={60}
                trailLength={50}
                inertia={0.5}
                turbulence={0.5}
                drift={0.3}
                bloomStrength={0.6}
                grainIntensity={0.05}
                detail={1}
                brightness={0.5}
                bloomRadius={1}
                edgeIntensity={0}
                fadeDelayMs={250}
                fadeDurationMs={500}
                clickPuff
                intro
              />
            </div>

            {/* Top Gradient Line */}
            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#00A6BD] via-[#7957FF] to-transparent opacity-80" />

            {/* Logo */}
            <Link
              href="#home"
              aria-label="4LPHA Home"
              dir="ltr"
              className=" inline-flex flex-row items-center gap-1"
            >
              <Image
                src="/Images/4lpha-logo.svg"
                alt="4"
                width={128}
                height={128}
                priority
                className="h-auto w-10 sm:w-12"
              />

              <span className="text-3xl font-black tracking-tight text-[#00D5E8]">
                LPHA
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              {t.description}
            </p>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-[#23445C]/80 to-transparent" />

            <p className="mt-5 text-xs font-medium tracking-wide text-slate-500">
              {t.tagline}
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
          flex h-10 w-10 items-center justify-center
          rounded-xl border border-[#23445C]/70
          bg-[#0D1830]/60
          ${social.color}
          transition-all duration-300
          hover:border-[#00D5E8]/40
          hover:bg-[#102238]
        `}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Important Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className={`${cardClass} border-[#00A6BD]/40`}
          >
            {/* Ghost Cursor background effect. */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px] opacity-40">
              <GhostCursor
                color="#00D5E8"
                size={60}
                trailLength={50}
                inertia={0.5}
                turbulence={0.5}
                drift={0.3}
                bloomStrength={0.6}
                grainIntensity={0.05}
                detail={1}
                brightness={0.5}
                bloomRadius={1}
                edgeIntensity={0}
                fadeDelayMs={250}
                fadeDurationMs={500}
                clickPuff
                intro
              />
            </div>

            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#00D5E8] via-[#7957FF] to-transparent" />

            <h3 className="mb-6 flex items-center gap-2.5 text-sm font-bold text-white">
              <Link2 size={17} className="text-[#00D5E8]" />
              {isArabic ? "روابط مهمة" : "Important Links"}
            </h3>

            <div className={accentLine} />

            {/* Two-column Links */}
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  // Join Us Blank
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={linkClass}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A6BD]/70 transition-all duration-300 group-hover/link:scale-125 group-hover/link:bg-[#00D5E8] group-hover/link:shadow-[0_0_8px_#00D5E8]" />

                  <span className="leading-6">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className={cardClass}
          >
            {/* Ghost Cursor background effect. */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px] opacity-40">
              <GhostCursor
                color="#00D5E8"
                size={60}
                trailLength={50}
                inertia={0.5}
                turbulence={0.5}
                drift={0.3}
                bloomStrength={0.6}
                grainIntensity={0.05}
                detail={1}
                brightness={0.5}
                bloomRadius={1}
                edgeIntensity={0}
                fadeDelayMs={250}
                fadeDurationMs={500}
                clickPuff
                intro
              />
            </div>

            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#00A6BD] via-[#7957FF] to-transparent opacity-80" />

            <h3 className="mb-6 flex items-center gap-2.5 text-sm font-bold text-white">
              <Headset size={17} className="text-[#00D5E8]" />
              {t.contactTitle}
            </h3>

            <div className={accentLine} />

            <div className="mt-7 space-y-6">
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className={linkClass}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A6BD]/70 transition-all duration-300 group-hover/link:scale-125 group-hover/link:bg-[#00D5E8] group-hover/link:shadow-[0_0_8px_#00D5E8]" />

                  <span className="leading-6">{service.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className={cardClass}
          >
            {/* Ghost Cursor background effect. */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px] opacity-40">
              <GhostCursor
                color="#00D5E8"
                size={60}
                trailLength={50}
                inertia={0.5}
                turbulence={0.5}
                drift={0.3}
                bloomStrength={0.6}
                grainIntensity={0.05}
                detail={1}
                brightness={0.5}
                bloomRadius={1}
                edgeIntensity={0}
                fadeDelayMs={250}
                fadeDurationMs={500}
                clickPuff
                intro
              />
            </div>

            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#00A6BD] via-[#7957FF] to-transparent opacity-80" />

            <h3 className={headingClass}>
              <Mail size={19} className="text-[#00D5E8]" />
              {t.contactTitle}
            </h3>

            <div className={accentLine} />

            <div className="mt-7 space-y-6">
              <a
                href="tel:+201224787747"
                dir="ltr"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#00D5E8]"
              >
                <Phone
                  size={17}
                  className="shrink-0 text-[#00A6BD] transition-all duration-300 group-hover:text-[#00D5E8] group-hover:drop-shadow-[0_0_6px_#00D5E8]"
                />

                <span>{t.phone}</span>
              </a>

              <a
                href="mailto:4lpha.digital@gmail.com"
                dir="ltr"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#00D5E8]"
              >
                <Mail
                  size={17}
                  className="shrink-0 text-[#00A6BD] transition-all duration-300 group-hover:text-[#00D5E8] group-hover:drop-shadow-[0_0_6px_#00D5E8]"
                />

                <span className="break-all">{t.email}</span>
              </a>

              <a
                href="mailto:support@4lpha.com"
                className="group flex items-start gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#00D5E8]"
                dir="ltr"
              >
                <Headset
                  size={17}
                  className="shrink-0 text-[#00A6BD] transition-all duration-300 group-hover:text-[#00D5E8] group-hover:drop-shadow-[0_0_6px_#00D5E8]"
                />
                <span>support@4lpha.com</span>
              </a>

              {/* <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={17} className="shrink-0 text-[#00A6BD]" />

                <span>{t.location}</span>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[#20364A]/70 py-6 pb-25 sm:flex-row sm:text-start sm:pb-6">
          {" "}
          {/* Mobile Copyright + Back to Top */}
          <div className="flex w-full items-center justify-center gap-4 sm:hidden">
            <p className="text-xs leading-relaxed text-slate-500">
              © {currentYear}{" "}
              <span className="font-bold text-[#00D5E8]">4LPHA</span>.{" "}
              {t.rights}
            </p>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              aria-label={t.backToTop}
              title={t.backToTop}
              className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#00A6BD]/40 bg-[#00A6BD]/[0.08] text-[#00D5E8] transition-all duration-300 hover:-translate-y-1 hover:border-[#00D5E8] hover:bg-[#00D5E8]/15 hover:shadow-[0_0_15px_rgba(0,213,232,0.15)]"
            >
              <ArrowUp size={17} />
            </button>
          </div>
          {/* Desktop Copyright */}
          <p className="hidden text-xs leading-relaxed text-slate-500 sm:block">
            © {currentYear}{" "}
            <span className="font-bold text-[#00D5E8]">4LPHA</span>. {t.rights}
          </p>
          {/* Desktop Back to Top */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label={t.backToTop}
            title={t.backToTop}
            className="group hidden items-center gap-2 text-xs text-slate-400 transition-colors duration-300 hover:text-[#00D5E8] sm:flex"
          >
            <span>{t.backToTop}</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00A6BD]/40 bg-[#00A6BD]/[0.08] text-[#00D5E8] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#00D5E8] group-hover:bg-[#00D5E8]/15 group-hover:shadow-[0_0_15px_rgba(0,213,232,0.15)]">
              <ArrowUp size={17} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
