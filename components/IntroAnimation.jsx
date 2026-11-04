"use client";

import { useRef } from "react";
import { motion, useAnimationControls } from "motion/react";
import Image from "next/image";
import Highlight from "./Highlight";

const letters = ["L", "P", "H", "A"];

export default function IntroAnimation({ onComplete, onLogoMoveStart }) {
  const brandRef = useRef(null);
  const completedRef = useRef(false);
  const controls = useAnimationControls();

  const handleLastLetterComplete = async () => {
    // Prevent the animation from triggering multiple times.
    if (completedRef.current) return;
    completedRef.current = true;

    const brand = brandRef.current;
    const target = document.getElementById("nav-brand");

    // If the navbar logo is unavailable, finish the intro safely.
    if (!brand || !target) {
      onComplete?.();
      return;
    }

    const currentRect = brand.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    // Calculate the logo's destination inside the navbar.
    const x =
      targetRect.left +
      targetRect.width / 2 -
      (currentRect.left + currentRect.width / 2);

    const y =
      targetRect.top +
      targetRect.height / 2 -
      (currentRect.top + currentRect.height / 2);

    const scale = targetRect.width / currentRect.width;

    // Pause before starting the logo transition.
    await new Promise((resolve) => setTimeout(resolve, 700));

    // Notify Hero that the logo is moving.
    onLogoMoveStart?.();

    // Animate the logo toward the navbar.
    await controls.start({
      x,
      y,
      scale,
      transition: {
        duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
      },
    });

    // Finish the intro after the logo reaches the navbar.
    onComplete?.();
  };

  return (
    <>
      {/* Dark background overlay */}
      <motion.div
        className="fixed inset-0 z-[9998] bg-[#02090D]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: 3.5,
          duration: 1,
          ease: "easeInOut",
        }}
      />

      {/* Intro logo animation layer */}
      <div className="pointer-events-none fixed inset-0 z-[9999] isolate flex items-center justify-center">
        {/* Purple glow behind the logo */}
        <Highlight size="medium" />

        {/* Animated brand container */}
        <motion.div
          ref={brandRef}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={controls}
          className="relative z-10 flex items-center gap-2"
        >
          {/* Logo symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, x: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: -10,
            }}
            transition={{
              opacity: { duration: 0.6 },
              scale: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
              x: {
                delay: 0.8,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <Image
              src="/Images/4lpha-logo.svg"
              alt="4LPHA"
              width={128}
              height={128}
              priority
              className="h-auto w-16 sm:w-20"
            />
          </motion.div>

          {/* Animated brand letters */}
          <div className="flex overflow-hidden">
            {letters.map((letter, index) => (
              <motion.span
                key={letter}
                className="text-3xl font-bold tracking-[0.15em] text-white sm:text-4xl"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.3 + index * 0.18,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => {
                  if (index === letters.length - 1) {
                    handleLastLetterComplete();
                  }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
