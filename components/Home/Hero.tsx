"use client";

import { useEffect, useState } from "react";
import ProcessTimeline from "@/components/Home/ProcessTimeline";
import { ArrowUpRight, Play } from "lucide-react";
import Highlight from "../AnimationLibraries/Highlight";
import SocialDock from "@/components/AnimationLibraries/SocialDock";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
// Words displayed in the rotating headline.

export default function Hero({ introActive, logoMoving }) {
  // Tracks the current word in the headline animation.
  const [wordIndex, setWordIndex] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();
  // const words = ["Build", "Test", "Deploy"];
  const words = t.hero.headline.words;
  // Automatically changes the headline word every 2.5 seconds.
  useEffect(() => {
    if (!words.length) return;

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [language, words.length]);

  return (
    <div id="home" className="relative flex w-full flex-1 flex-col">
      {/* Main hero content fills the remaining space below the navbar. */}
      <main
        className=" 
        mx-auto flex w-full max-w-7xl flex-1 flex-col
        items-center justify-center
        px-6 py-6 md:px-12
      "
      >
        {/* Two-column layout: headline on the left and timeline on the right. */}
        <div
          className="
            grid w-full grid-cols-1
            items-start gap-[3.75rem] md:grid-cols-2
          "
        >
          {/* Left side: brand message and headline. */}
          <div className="w-full">
            {/* Service categories. */}
            <p className="hero-fade-up hero-content-shadow hero-delay-1 mb-4 text-xs font-light text-gray-400 ">
              {/* Web Development */}
              {t.hero.categories.webDevelopment}
              <span className="mx-2 text-white">X</span>
              {t.hero.categories.softwareTesting}
              {/* Software Testing */}
            </p>

            {/* Main headline with a rotating keyword. */}
            <h1
              dir={language === "ar" ? "rtl" : "ltr"}
              className="text-4xl md:text-6xl font-bold leading-tight text-white"
            >
              {t.hero.headline.prefix}{" "}
              <span
                key={`${language}-${wordIndex}`}
                className="
      inline-block min-w-[6ch]
      text-[var(--text)]
      animate-[wordIn_0.5s_ease-out]
    "
              >
                {words[wordIndex]}
              </span>
              <br />
              {/* Digital Products */}
              {t.hero.headline.digitalProducts}
              <br />
              <span className="text-[var(--text)]">
                {/* That Last */}
                {t.hero.headline.ending}
              </span>
            </h1>

            {/* Supporting description. */}
            <p className="hero-fade-up hero-delay-3 mt-4 max-w-xl leading-relaxed text-gray-300 md:mt-6">
              {/* We turn ideas into dependable digital experiences — built with
              precision, tested for quality, and ready to scale. */}
              {t.hero.description}
            </p>
          </div>

          {/* Right side: visual process timeline. */}
          <div className="hero-fade-left hero-content-shadow hero-delay-2 flex justify-start md:justify-end">
            <ProcessTimeline />
          </div>
        </div>

        {/* CTA buttons appear as the intro logo moves toward the navbar. */}
        <div
          className={`mt-4 flex w-full flex-col flex-nowrap items-center justify-center gap-3 sm:gap-5 md:mt-5 md:items-start md:justify-start ${
            logoMoving ? "hero-pull-up" : "hero-pull-initial"
          }`}
        >
          <div className="flex w-full flex-row items-center justify-center gap-6 md:justify-start md:gap-4">
            {" "}
            {/* Primary CTA: Start Project */}
            <Link
              href="/#contact"
              id="start-project-highlight-target"
              onClick={(e) => {
                e.preventDefault();

                const contactSection = document.getElementById("contact");

                contactSection?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="relative isolate overflow-visible"
            >
              <div className="pointer-events-none absolute inset-0 -z-10">
                <Highlight size="medium" />
              </div>

              <button
                type="button"
                aria-label="Start a project"
                className="animated-button relative z-10"
              >
                {/* Arrow visible before hover */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>

                <span className="text">{t.hero.buttons.startProject}</span>

                <span className="circle"></span>

                {/* Arrow appears on hover */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
            </Link>
            {/* Secondary CTA: Watch Our Story. */}
            <button
              type="button"
              aria-label="Watch our story"
              className="
      group inline-flex shrink-0 items-center justify-center
      gap-2 whitespace-nowrap sm:gap-3
      text-white transition-colors duration-300
      hover:text-[#00E5FF]
    "
            >
              <span
                className="
        flex h-10 w-10 shrink-0 items-center justify-center
        rounded-full border border-[#00E5FF]
        text-[#00E5FF]
        transition-all duration-300
        sm:h-11 sm:w-11
        group-hover:bg-[#00E5FF]
        group-hover:text-[#02090D]
      "
              >
                <Play size={13} fill="currentColor" />
              </span>

              <span className="whitespace-nowrap text-sm sm:text-base">
                {t.hero.buttons.watchStory}
              </span>
            </button>
          </div>
          {/* Trust line follows the CTA entrance with a slight delay. */}
          <div>
            <p
              className={`mt-4 w-full text-center text-xs tracking-wide text-gray-400 
              ${
                logoMoving
                  ? "hero-pull-up hero-pull-up-delay"
                  : "hero-pull-initial"
              }`}
            >
              {/* Development • Quality Assurance • Reliable Delivery */}
              {t.hero.trustLine.development} •{" "}
              {t.hero.trustLine.qualityAssurance} •{" "}
              {t.hero.trustLine.reliableDelivery}
            </p>
          </div>
        </div>
        {/* Social media dock */}
        <div className="hero-content-shadow mt-6 flex w-full justify-center md:mt-6 md:justify-end">
          <SocialDock />
        </div>
      </main>
    </div>
  );
}
