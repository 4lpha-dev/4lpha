"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    category: "BUILD",
    title: "Web Development",
    description: "Responsive, user-friendly websites built to convert.",
    tags: [
      "Landing Pages",
      "Business Websites",
      "Portfolio Websites",
      "Custom Web Solutions",
      "Responsive Design",
    ],
    features: [
      "Fast, accessible, mobile-first",
      "Clean code you can maintain",
      "Launch-ready, tested delivery",
    ],
    cta: "Discuss this service",
  },
  {
    number: "02",
    category: "QUALITY",
    title: "Software Testing & QA",
    description: "Find bugs before your users do, with clear documentation.",
    tags: [
      "Manual Testing",
      "Business Websites",
      "Functional Testing",
      "Custom Web Solutions",
      "Responsive Design",
    ],
    features: [],
    cta: "Explore service",
  },
  {
    number: "03",
    category: "SOLUTIONS",
    title: "Service 03",
    description: "Content coming soon.",
    tags: [],
    features: [],
    cta: "Explore service",
  },
  {
    number: "04",
    category: "PARTNERSHIP",
    title: "Service 04",
    description: "Content coming soon.",
    tags: [],
    features: [],
    cta: "Explore service",
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="services-page relative text-white">
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 top-0 z-50 h-[5px] w-full origin-left bg-gradient-to-r from-[#006B80] via-[#00A6BD] to-[#00D5E8] shadow-[0_0_10px_rgba(0,229,255,0.25)]"
      />

      {/* Services */}
      {services.map((service, index) => (
        <ServiceCard key={service.number} service={service} index={index} />
      ))}
    </section>
  );
}
