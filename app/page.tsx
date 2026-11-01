'use client'
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="">
      <AnimatedSection title="Home">
        <Hero />
      </AnimatedSection>

      <AnimatedSection
        title="About"
        className="bg-blue-950"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-gray-300">
            Learn more about us.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection
        title="Services"
        className="bg-purple-950"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-300">
            Discover our services.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection
        title="Portfolio"
        className="bg-emerald-950"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-300">
            Check out our projects.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection
        title="Contact"
        className="bg-orange-950"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300">
            Get in touch with us.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
