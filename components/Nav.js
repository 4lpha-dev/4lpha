"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Languages, Menu, X } from "lucide-react";
import ElectricLogo from "./ElectricLogo";
import Highlight from "./Highlight";

const Nav = ({ introActive }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Main navigation links.
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-transparent text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Brand Logo: Keep the symbol and letters inside the same target container. */}
        <div className="flex shrink-0 items-center">
          <div
            id="nav-brand"
            className={`transition-opacity duration-300 ${
              introActive ? "opacity-0" : "opacity-100"
            }`}
          >
            <Link href="/" className="flex items-center gap-1">
              {/* Electric symbol: Only the 4 receives the electric effect. */}
              <div
                className="relative flex shrink-0 items-center justify-center"
                style={{ width: 60, height: 60 }}
              >
                <ElectricLogo
                  src="/Images/4lpha-logo.svg"
                  color="#00E5FF"
                  glowColor="#00D6D0"
                  scale={0.7}
                  strands={2}
                  bend={0.6}
                  crackle={1.2}
                  arcs={0.25}
                  speed={1.4}
                  interactive
                  intensity={1}
                  glow={0.3}
                  thickness={1}
                  flicker={0.15}
                  fill={0}
                  cursorIntensity={0.4}
                  cursorRadius={155}
                />
              </div>

              {/* Brand letters: Static text with no electric animation. */}
              <span className="shrink-0 text-2xl font-bold tracking-[0.15em] text-white">
                LPHA
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative py-2 text-sm transition-colors duration-300 ${
                  active ? "text-[#00D6D0]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}

                {/* Active and hover underline. */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#00D6D0] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center justify-end gap-5 lg:flex">
          {/* Start a Project CTA. */}
          <Link
            href="/contact"
            className="group relative isolate flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#00D6D0] px-5 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#00D6D0] hover:text-[#02090D]"
          >
            <Highlight size="medium" />

            <span className="relative z-10">Start a Project</span>

            <ArrowUpRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* Language button. */}
          <button
            aria-label="Change language"
            className="cursor-pointer text-gray-300 transition-all duration-300 hover:scale-110 hover:text-[#00D6D0]"
          >
            <Languages size={20} strokeWidth={1.7} />
          </button>
        </div>

        {/* Mobile and Tablet Menu Toggle. */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-[#00D6D0] lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile and Tablet Navigation Menu. */}
      {isOpen && (
        <div className="mobile-menu-animation border-t border-white/10 px-8 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative w-fit py-2 text-sm transition-colors duration-300 ${
                    active ? "text-[#00D6D0]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Mobile active and hover underline. */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#00D6D0] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Mobile Actions. */}
            <div className="mt-3 flex items-center gap-5 border-t border-white/10 pt-5">
              {/* Mobile language button. */}
              <button
                aria-label="Change language"
                className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-[#00D6D0]"
              >
                <Languages size={20} strokeWidth={1.7} />
              </button>

              {/* Mobile Start a Project CTA. */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#00D6D0] px-5 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#00D6D0] hover:text-[#02090D]"
              >
                Start a Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
