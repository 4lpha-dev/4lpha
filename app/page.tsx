"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import IntroAnimation from "@/components/IntroAnimation";
import Highlight from "@/components/Highlight";
import Nav from "@/components/Nav";

export default function Home() {
  // Controls whether the intro animation is still active.
  const [introActive, setIntroActive] = useState(true);

  // Tracks when the intro logo starts moving toward the navbar.
  const [logoMoving, setLogoMoving] = useState(false);

  // Prevent scrolling on small screens during the intro.
  useEffect(() => {
    if (window.innerWidth >= 768 || !introActive) return;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    window.scrollTo(0, 0);

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    // Restore the original scrolling behavior after the intro.
    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [introActive]);

  return (
    <main className="w-full">
      {/* Shared Hero background and layout */}
      <div
        className={`herobg relative isolate flex min-h-screen w-full flex-col ${
          !introActive ? "hero-entrance" : ""
        }`}
      >
        {/* Background overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#02090D]/95 via-[#02090D]/65 to-[#02090D]/30" />

        {/* Navbar */}
        <Nav introActive={introActive} />

        {/* Hero content */}
        <Hero introActive={introActive} logoMoving={logoMoving} />
      </div>

      {/* Intro animation */}
      {introActive && (
        <IntroAnimation
          onLogoMoveStart={() => setLogoMoving(true)}
          onComplete={() => setIntroActive(false)}
        />
      )}

      {/* Remaining sections */}
      {/* About section */}
      <AnimatedSection title="About" className="bg-blue-950">
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">About Us</h2>
        </div>
      </AnimatedSection>

      {/* Services section */}
      <AnimatedSection title="Services" className="bg-purple-950">
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Our Services</h2>
        </div>
      </AnimatedSection>

      {/* Portfolio section */}
      <AnimatedSection title="Portfolio" className="bg-emerald-950">
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Our Portfolio</h2>
        </div>
      </AnimatedSection>

      {/* Contact section */}
      <AnimatedSection title="Contact" className="bg-orange-950">
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Contact Us</h2>
        </div>
      </AnimatedSection>
    </main>
  );
}
