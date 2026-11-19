"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import GhostCursor from "../AnimationLibraries/GhostCursor";
import Image from "next/image";

export default function ServiceCard({ service, index, isArabic }) {
  const cardRef = useRef(null);

  // Track the card's scroll position.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Animate vertical movement.
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  // Animate opacity during scrolling.
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Animate card scale.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  return (
    <section
      ref={cardRef}
      className="relative flex min-h-[80svh] items-center justify-center px-5"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="relative isolate w-full max-w-6xl overflow-hidden rounded-[24px] border border-[#23445C] bg-[#0D1830] shadow-[0_0_35px_rgba(0,229,255,0.06)]"
      >
        {/* Ghost Cursor background effect. */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px] opacity-40">
          <GhostCursor
            color="#00D5E8"
            size={80}
            trailLength={50}
            inertia={0.5}
            turbulence={0.5}
            drift={0.3}
            bloomStrength={0.6}
            grainIntensity={0.05}
            detail={1}
            brightness={1}
            bloomRadius={1}
            edgeIntensity={0}
            fadeDelayMs={1000}
            fadeDurationMs={1500}
            clickPuff
            intro
          />
        </div>

        {/* Subtle grid background. */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,229,255,0.09) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,255,0.09) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Main card layout. */}
        <div className="relative z-10 grid min-h-[65svh] grid-cols-1 gap-8 p-6 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-6 md:p-8 lg:gap-10 lg:p-10">
          {/* Left: Service information. */}
          <div className="flex flex-col items-start">
            <span className="font-mono text-sm font-semibold tracking-wider text-[#00A6BD]">
              {service.number} / {service.category}
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.title}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {service.description}
            </p>

            {/* Service tags. */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-500/70 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors duration-300 hover:border-[#00A6BD] hover:bg-[#00A6BD]/10 sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Service features. */}
            <ul className="mt-7 space-y-2.5 text-sm leading-relaxed text-slate-300 sm:text-base">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A6BD]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Service call-to-action. */}
            <a
              href="#contact"
              className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-[#00D5E8] px-7 py-4 text-sm font-semibold text-[#02090D] transition-all duration-300 hover:bg-[#00A6BD] hover:shadow-[0_0_25px_rgba(0,213,232,0.2)]"
            >
              {service.cta}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Right: Featured image placeholder. */}
          <div className="hidden min-h-[320px] items-center justify-center md:flex lg:min-h-[400px]">
            <div className="relative min-h-[320px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#091A26]/80">
              <div className="flex min-h-[320px] h-full items-center justify-center">
                <span className="font-mono text-xs tracking-widest text-white/25">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 50vw"
                    className="object-cover"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card index indicator. */}
        <span
          className={`absolute bottom-5 z-10 font-mono text-xs text-white/40 ${
            isArabic ? "left-6" : "right-6"
          }`}
        >
          0{index + 1} / 04
        </span>
      </motion.div>
    </section>
  );
}
