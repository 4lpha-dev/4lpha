"use client";

import { useEffect, useState } from "react";
import ProcessTimeline from "@/components/ProcessTimeline";
import { ArrowUpRight, Play } from "lucide-react";
import Highlight from "./Highlight";
import SocialDock from "@/components/SocialDock";
import { useLanguage } from "@/context/LanguageContext";
// Words displayed in the rotating headline.

export default function Hero({ introActive, logoMoving }) {
  // Tracks the current word in the headline animation.
  const [wordIndex, setWordIndex] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();
  // const words = ["Build", "Test", "Deploy"];
  const words = t.hero.headline.words;
  // Automatically changes the headline word every 2.5 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    // Clean up the interval when the component unmounts.
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full flex-1 flex-col">
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
            <p className="hero-fade-up hero-delay-1 mb-4 text-xs font-light text-gray-400">
              {/* Web Development */}
              {t.hero.categories.webDevelopment}
              <span className="mx-2 text-white">X</span>
              {t.hero.categories.softwareTesting}
              {/* Software Testing */}
            </p>

            {/* Main headline with a rotating keyword. */}
            <h1 dir={language === "ar" ? "rtl" : "ltr"} className="text-4xl md:text-6xl font-bold leading-tight text-white">
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
          <div className="hero-fade-left hero-delay-2 flex justify-start md:justify-end">
            <ProcessTimeline />
          </div>
        </div>

        {/* CTA buttons appear as the intro logo moves toward the navbar. */}
        <div
          className={`mt-4 flex flex-col w-full flex-nowrap items-start justify-center gap-3 sm:gap-5 md:mt-5 md:justify-start ${logoMoving ? "hero-pull-up" : "hero-pull-initial"
            }`}
        >
          <div className="flex flex-row items-start justify-start">


            {/* Primary CTA: Start Project. */}
            <button
              type="button"
              aria-label="Start a project"
              className="
              group relative isolate inline-flex shrink-0 items-center justify-center
              gap-2 whitespace-nowrap rounded-full
              bg-[#00E5FF] px-6 py-3.5
              text-sm font-semibold text-black sm:px-7 sm:py-3 sm:text-base
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(0,229,255,0.25)]
              me-2
            "
            >
              <Highlight size="medium" />
              <span className="relative z-10">
                {/* Start Project */}
                {t.hero.buttons.startProject}
              </span>

              <ArrowUpRight
                size={16}
                className=" relative z-10
                shrink-0 transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
              />
            </button>

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
              {/* Circular play icon. */}
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
                {/* Watch Our Story */}
                {t.hero.buttons.watchStory}
              </span>
            </button>
          </div>
          {/* Trust line follows the CTA entrance with a slight delay. */}
          <div>

            <p
              className={`mt-4 w-full text-center text-xs tracking-wide text-gray-400 
              ${logoMoving ? "hero-pull-up hero-pull-up-delay" : "hero-pull-initial"
                }`}
            >
              {/* Development • Quality Assurance • Reliable Delivery */}
              {t.hero.trustLine.development} • {t.hero.trustLine.qualityAssurance} • {t.hero.trustLine.reliableDelivery}

            </p>
          </div>
        </div>

        {/* Social media dock */}
        <div
          className="
            mt-6 flex w-full justify-center
            md:absolute md:bottom-6 md:right-12
            md:mt-0 md:w-auto
          "
        >
          <SocialDock />
        </div>
      </main>
    </div>
  );
}
