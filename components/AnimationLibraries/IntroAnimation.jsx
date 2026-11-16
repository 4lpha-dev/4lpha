"use client";

import { useRef, useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import Image from "next/image";
import Highlight from "./Highlight";

const letters = ["L", "P", "H", "A"];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function IntroAnimation({
  onComplete,
  onLogoMoveStart,
  onLogoArrive,
}) {
  const brandRef = useRef(null);
  const logoRef = useRef(null);
  const completedRef = useRef(false);

  const controls = useAnimationControls();
  const highlightControls = useAnimationControls();

  const [logoArrived, setLogoArrived] = useState(false);
  const [lettersLeaving, setLettersLeaving] = useState(false);

  const handleLastLetterComplete = async () => {
    if (completedRef.current) return;
    completedRef.current = true;

    const isMobile = window.innerWidth < 768;

    const brand = brandRef.current;
    const logo = logoRef.current;

    const targetId = isMobile ? "nav-logo-symbol" : "nav-brand";
    const target = document.getElementById(targetId);

    if (!brand || !logo || !target) {
      onComplete?.();
      return;
    }

    const currentRect = brand.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    let x;
    let y;
    let scale;

    if (isMobile) {
      // Scale according to the logo symbol only,
      // not the complete brand width.
      scale = targetRect.width / logoRect.width;

      // Calculate the logo's final position
      // while scaling the complete brand.
      const brandCenterX = currentRect.left + currentRect.width / 2;

      const brandCenterY = currentRect.top + currentRect.height / 2;

      const logoCenterX = logoRect.left + logoRect.width / 2;

      const logoCenterY = logoRect.top + logoRect.height / 2;

      const scaledLogoCenterX =
        brandCenterX + (logoCenterX - brandCenterX) * scale;

      const scaledLogoCenterY =
        brandCenterY + (logoCenterY - brandCenterY) * scale;

      x = targetRect.left + targetRect.width / 2 - scaledLogoCenterX;

      y = targetRect.top + targetRect.height / 2 - scaledLogoCenterY;
    } else {
      // Preserve the original Desktop behavior.
      x =
        targetRect.left +
        targetRect.width / 2 -
        (currentRect.left + currentRect.width / 2);

      y =
        targetRect.top +
        targetRect.height / 2 -
        (currentRect.top + currentRect.height / 2);

      scale = targetRect.width / currentRect.width;
    }

    await wait(600);

    onLogoMoveStart?.();

    // Start moving the complete brand.
    const movement = controls.start({
      x,
      y,
      scale,
      transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      },
    });

    if (isMobile) {
      // Start hiding LPHA during the movement.
      await wait(600);
      setLettersLeaving(true);

      // Start the Electric logo transition
      // shortly before reaching the navbar.
      await wait(250);

      setLogoArrived(true);
      onLogoArrive?.();

      await movement;

      // Let the final transition settle.
      await wait(300);
    } else {
      // Keep the original Desktop sequence.
      await movement;

      setLogoArrived(true);
      onLogoArrive?.();

      await wait(700);
    }
    // Move the Highlight behind the Start a Project button.
    const highlightTarget = document.getElementById(
      "start-project-highlight-target",
    );

    if (highlightTarget) {
      const targetRect = highlightTarget.getBoundingClientRect();

      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;

      await highlightControls.start({
        x: targetCenterX - window.innerWidth / 2,
        y: targetCenterY - window.innerHeight / 2,
        transition: {
          duration: 1.3,
          ease: [0.16, 1, 0.3, 1],
        },
      });
    }

    onComplete?.();
  };

  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 z-[9998] bg-[#02090D]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: 4.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
      />

      {/* Intro Animation Layer */}
      <div className="pointer-events-none fixed inset-0 z-[9999] isolate flex items-center justify-center">
        <motion.div
          className="pointer-events-none fixed inset-0 z-[1]"
          initial={{ x: 0, y: 0 }}
          animate={highlightControls}
        >
          <div className="absolute left-1/2 top-1/2">
            <Highlight size="medium" />
          </div>
        </motion.div>

        {/* Complete Brand Movement */}
        <motion.div
          ref={brandRef}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={controls}
          className="relative z-10 flex items-center gap-1"
        >
          {/* Original Logo */}
          <motion.div
            ref={logoRef}
            initial={{ opacity: 0, scale: 0.7, x: 0 }}
            animate={{
              opacity: logoArrived ? 0 : 1,
              scale: 1,
              x: -10,
            }}
            transition={{
              opacity: {
                duration: 0.6,
                ease: "easeInOut",
              },
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

          {/* Brand Letters */}
          <motion.div
            className="flex overflow-hidden"
            animate={
              lettersLeaving
                ? {
                    opacity: 0,
                    scale: 0.75,
                    y: -8,
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={letter}
                className="text-2xl font-bold leading-8 tracking-[0.15em] text-white sm:text-4xl"
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
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
