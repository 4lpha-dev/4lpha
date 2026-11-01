"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { ArrowUpRight, Languages, Menu, X } from "lucide-react";
import Image from "next/image";
const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-transparent backdrop-blur-sm text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo Placeholder */}
        <div className="flex w-40 shrink-0 items-center">
          {/* Logo will be added here */}
          <Link href="/">
            <Image
              src="/Images/4lpha-logo.svg"
              alt="4LPHA"
              width={120}
              height={80}
              priority
              className="w-10 h-auto"
            />
          </Link>
          <span className="text-2xl font-bold tracking-[0.15em] text-white">
            LPHA
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative py-2 text-sm transition-colors duration-300 ${
                  active ? "text-[#00D6D0]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#00D6D0] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden shrink-0 items-center justify-end gap-5 lg:flex">
          <Link
            href="/contact"
            className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#00D6D0] px-5 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#00D6D0] hover:text-[#02090D]"
          >
            Start a Project
            {/* <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            /> */}
          </Link>

          {/* Language */}
          <button
            aria-label="Change language"
            className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-[#00D6D0]"
          >
            {/* <Languages size={20} strokeWidth={1.7} /> */}
          </button>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-[#00D6D0] lg:hidden"
        >
          {isOpen ? <X size={25} /> : <h1 >open</h1> }
          {/* //  <Menu size={25} /> */}
        </button>
      </div>

      {/* Mobile & Tablet Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 px-8 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => {
              const active = pathname === link.href;

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

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#00D6D0] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Mobile Actions */}
            <div className="mt-3 flex items-center gap-5 border-t border-white/10 pt-5">
              <button
                aria-label="Change language"
                className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-[#00D6D0]"
              >
                {/* <Languages size={20} strokeWidth={1.7} /> */}
              </button>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#00D6D0] px-5 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#00D6D0] hover:text-[#02090D]"
              >
                Start a Project
                {/* <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                /> */}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;