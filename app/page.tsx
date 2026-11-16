"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimationLibraries/AnimatedSection";
import IntroAnimation from "@/components/AnimationLibraries/IntroAnimation";
import Hero from "@/components/Home/Hero";
import Nav from "@/components/Home/Nav";
import ServicesPage from "@/components/Services/ServicesPage";
import ContactPage from "@/components/Contact/ContactPage";
import Footer from "@/components/Footer/Footer";
// import Highlight from "@/components/Highlight";

export default function Home() {
  // Controls whether the intro animation is still active.
  const [introActive, setIntroActive] = useState(true);

  // Tracks when the intro logo starts moving toward the navbar.
  const [logoMoving, setLogoMoving] = useState(false);

  const [logoArrived, setLogoArrived] = useState(false);

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
        id="home"
        className={`herobg  relative flex min-h-screen w-full flex-col ${
          !introActive ? "hero-entrance" : ""
        }`}
      >
        {/* Background overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#02090D]/95 via-[#02090D]/65 to-[#02090D]/30" />

        {/* Navbar */}
        <Nav introActive={introActive} logoArrived={logoArrived} />

        {/* Hero content */}
        <section>
          <Hero introActive={introActive} logoMoving={logoMoving} />
        </section>
      </div>

      {/* Intro animation */}
      {introActive && (
        <IntroAnimation
          onLogoMoveStart={() => setLogoMoving(true)}
          onLogoArrive={() => setLogoArrived(true)}
          onComplete={() => setIntroActive(false)}
        />
      )}

      {/* Remaining sections */}

      {/* Services section */}
      {/* <AnimatedSection title="Services" className="bg-purple-950"> */}
      <section id="services">
        <ServicesPage />
      </section>
      {/* </AnimatedSection> */}

      {/* Portfolio section */}
      <AnimatedSection
        id="portfolio"
        title="Portfolio"
        className="bg-emerald-950"
      >
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Our Portfolio</h2>
        </div>
      </AnimatedSection>

      {/* About section */}
      <AnimatedSection id="about" title="About" className="bg-blue-950">
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">About Us</h2>
        </div>
      </AnimatedSection>

      {/* Contact section */}
      {/* <AnimatedSection id="contact" title="Contact" className="bg-orange-950 ">
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Contact Us</h2>
        </div>
      </AnimatedSection> */}
      <section id="contact">
        <ContactPage />
      </section>

      {/* Footer section */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
