// 'use client'
// import Image from "next/image";
// import AnimatedSection from "@/components/AnimatedSection";
// import Hero from "@/components/Hero";
// export default function Home() {
//   return (
//     <div className="container ">
//       <AnimatedSection title="Home">
//         <Hero />
//       </AnimatedSection>

//       <AnimatedSection
//         title="About"
//         className="bg-blue-950"
//       >
//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-4">
//             About Us
//           </h2>
//           <p className="text-gray-300">
//             Learn more about us.
//           </p>
//         </div>
//       </AnimatedSection>

//       <AnimatedSection
//         title="Services"
//         className="bg-purple-950"
//       >
//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-4">
//             Our Services
//           </h2>
//           <p className="text-gray-300">
//             Discover our services.
//           </p>
//         </div>
//       </AnimatedSection>

//       <AnimatedSection
//         title="Portfolio"
//         className="bg-emerald-950"
//       >
//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-4">
//             Our Portfolio
//           </h2>
//           <p className="text-gray-300">
//             Check out our projects.
//           </p>
//         </div>
//       </AnimatedSection>

//       <AnimatedSection
//         title="Contact"
//         className="bg-orange-950"
//       >
//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-4">
//             Contact Us
//           </h2>
//           <p className="text-gray-300">
//             Get in touch with us.
//           </p>
//         </div>
//       </AnimatedSection>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import IntroAnimation from "@/components/IntroAnimation";

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
      {/* Intro logo animation */}
      {introActive && (
        <IntroAnimation
          onLogoMoveStart={() => setLogoMoving(true)}
          onComplete={() => setIntroActive(false)}
        />
      )}

      {/* Main Hero section */}
      <Hero introActive={introActive} logoMoving={logoMoving} />
      
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
