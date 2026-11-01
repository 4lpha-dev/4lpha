'use client'

import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav"
export default function AnimatedSection({
  title,
  children,
  className = "",
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Run animation only once
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative  overflow-hidden bg-gray-900 text-white ${className}`}
    >
      {/* Overlay */}
      <div
        className={`
          absolute inset-0 z-20
          flex items-center justify-center
          bg-black/75 backdrop-blur-md
          transition-all duration-1000 delay-1000
          ${
            isVisible
              ? "opacity-0 invisible"
              : "opacity-100 visible"
          }
        `}
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          {title}
        </h1>
      </div>

      {/* Main Content */}
      <div
        className={`
          relative z-10
          transition-all duration-1000 delay-[2000ms]
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >
        {children}
      </div>
    </section>
  );
}
