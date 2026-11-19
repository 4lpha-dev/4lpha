"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

import {
  ArrowUpRight,
  Languages,
  Menu,
  X,
  House,
  BriefcaseBusiness,
  FolderKanban,
  UserRound,
  Mail,
  Users,
} from "lucide-react";

import ElectricLogo from "../AnimationLibraries/ElectricLogo";
import Highlight from "../AnimationLibraries/Highlight";

const Nav = ({ introActive = false, logoArrived = false }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { language, toggleLanguage, t } = useLanguage();

  const isArabic = language === "ar";

  // Navigation Links
  const links = [
    { name: t.nav.home, href: "#home", icon: House },
    { name: t.nav.services, href: "#services", icon: BriefcaseBusiness },
    { name: t.nav.portfolio, href: "#portfolio", icon: FolderKanban },
    { name: t.nav.about, href: "#about", icon: UserRound },

    // Join Us Page
    {
      name: isArabic ? "انضم إلينا" : "Join Us",
      href: "/join-us",
      icon: Users,
    },

    { name: t.nav.contact, href: "#contact", icon: Mail },
  ];

  // Active Section Detection

  useEffect(() => {
    if (pathname !== "/" || introActive) return;

    const sectionIds = ["home", "services", "portfolio", "about", "contact"];

    let animationFrameId = null;

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const activationPoint = 150;
      let currentSection = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationPoint) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (isAtPageBottom) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection,
      );
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      animationFrameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
        animationFrameId = null;
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [pathname, introActive]);

  // Active Link Detection
  const isActive = (href) => {
    if (href.startsWith("#")) {
      return pathname === "/" && activeSection === href.slice(1);
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close Menu After Route Navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle Language Change
  const handleLanguageChange = () => {
    toggleLanguage();
    setIsOpen(false);
  };

  // Handle Section Navigation
  const handleSectionNavigation = (href) => {
    if (href.startsWith("#") && pathname === "/") {
      setActiveSection(href.slice(1));
    }

    setIsOpen(false);
  };

  // Reusable Language Button
  const LanguageButton = ({ compact = false }) => (
    <button
      type="button"
      onClick={handleLanguageChange}
      aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
      title={isArabic ? "Switch to English" : "Switch to Arabic"}
      className={`
        group inline-flex shrink-0 items-center justify-center gap-2
        rounded-full border border-white/15
        text-gray-300 transition-all duration-300
        hover:border-[#00D6D0]
        hover:bg-[#00D6D0]/10
        hover:text-[#00D6D0]
        ${compact ? "h-9 min-w-9 px-2.5" : "h-10 px-3"}
      `}
    >
      <Languages size={17} strokeWidth={1.8} />

      <span className="text-xs font-semibold">{isArabic ? "EN" : "AR"}</span>
    </button>
  );

  // Reusable Start Project Button
  const StartProjectButton = ({ onClick, compact = false }) => (
    <Link
      href="/#contact"
      onClick={(e) => {
        e.preventDefault();

        const contactSection = document.getElementById("contact");

        contactSection?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      // onClick={onClick}
      className={`
        group relative isolate inline-flex shrink-0
        items-center gap-2 whitespace-nowrap
        rounded-full border border-[#00D6D0]
        font-medium text-white
        transition-all duration-300
        hover:bg-[#00D6D0]
        hover:text-[#02090D]
        ${
          compact
            ? "px-4 py-2 text-[11px] sm:px-5 sm:py-2.5 sm:text-xs"
            : "px-5 py-2.5 text-xs"
        }
      `}
    >
      <Highlight size="medium" />

      <span className="relative z-10">{t.hero.buttons.startProject}</span>

      <ArrowUpRight
        size={16}
        className={`
          relative z-10 transition-transform duration-300
          group-hover:-translate-y-0.5
          ${
            isArabic
              ? "rotate-[-90deg] group-hover:-translate-x-0.5"
              : "group-hover:translate-x-0.5"
          }
        `}
      />
    </Link>
  );

  return (
    <div>
      {/* Navbar placeholder - preserves original layout space */}
      <div aria-hidden="true" className="h-0 md:h-[92px] lg:h-[100px]" />
      <div className="relative z-50 w-full text-white md:fixed md:top-0 md:left-0 md:z-[1000]">
        {/* ================= MAIN NAVBAR ================= */}

        <nav
          aria-label="Main navigation"
          dir="ltr"
          className="w-full bg-transparent backdrop-blur-sm"
        >
          <div
            className="
            mx-auto flex w-full max-w-7xl
            items-center justify-between gap-3
            px-4 py-3
            sm:px-8 sm:py-4
            lg:px-8 lg:py-5
          "
          >
            {/* ================= BRAND LOGO ================= */}

            <div
              id="nav-brand"
              className={`
              flex shrink-0 items-center
              transition-opacity duration-500
              ${introActive && !logoArrived ? "opacity-0" : "opacity-100"}
            `}
            >
              <Link
                href="/"
                aria-label="4LPHA Home"
                dir="ltr"
                className="flex items-center gap-1"
                onClick={() => setActiveSection("home")}
              >
                {/* Electric Symbol */}
                <div
                  id="nav-logo-symbol"
                  className="relative flex shrink-0 items-center justify-center"
                  style={{
                    width: 60,
                    height: 60,
                  }}
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

                {/* Brand Letters */}
                <span
                  className={`
                  hidden shrink-0 text-2xl font-bold tracking-[0.15em]
                  text-white md:inline
                  ${introActive ? "invisible" : "visible"}
                `}
                >
                  LPHA
                </span>
              </Link>
            </div>

            {/* ================= DESKTOP NAVIGATION ================= */}

            <div className="hidden items-center gap-6 lg:flex xl:gap-9">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    // Join Us Blank
                    target={link.href === "/join-us" ? "_blank" : undefined}
                    rel={
                      link.href === "/join-us"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={() => handleSectionNavigation(link.href)}
                    aria-current={active ? "page" : undefined}
                    className={`
                    group relative whitespace-nowrap py-2
                    text-sm transition-colors duration-300
                    ${
                      active
                        ? "text-[#00D6D0]"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                  >
                    {link.name}

                    {/* Active / Hover Underline */}
                    <span
                      className={`
                      absolute bottom-0 start-0
                      h-[2px] bg-[#00D6D0]
                      transition-all duration-300
                      ${active ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* ================= HEADER ACTIONS ================= */}

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              {/* Mobile & Tablet Actions */}
              <div className="flex items-center gap-2 lg:hidden">
                <StartProjectButton compact />

                <LanguageButton compact />
              </div>

              {/* Desktop Actions */}
              <div className="hidden items-center gap-4 lg:flex">
                <StartProjectButton />

                <LanguageButton />
              </div>

              {/* ================= TABLET MENU TOGGLE ================= */}

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="tablet-menu"
                className="
                hidden h-10 w-10
                items-center justify-center
                rounded-full border border-white/15
                text-gray-300
                transition-all duration-300
                hover:border-[#00D6D0]
                hover:text-[#00D6D0]
                md:flex lg:hidden
              "
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* ================= TABLET DROPDOWN MENU ================= */}

          <div
            id="tablet-menu"
            className={`
            overflow-hidden border-t border-white/10
            backdrop-blur-xl
            transition-all duration-300
            lg:hidden
            ${
              isOpen
                ? "max-h-[600px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 sm:px-10">
              {/* Tablet Navigation Links */}
              {links.map((link) => {
                const active = isActive(link.href);
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    // Join Us Blank
                    target={link.href === "/join-us" ? "_blank" : undefined}
                    rel={
                      link.href === "/join-us"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={() => handleSectionNavigation(link.href)}
                    aria-current={active ? "page" : undefined}
                    className={`
                    flex items-center gap-3
                    rounded-lg px-4 py-3
                    text-sm transition-all duration-300
                    ${
                      active
                        ? "bg-[#00D6D0]/10 text-[#00D6D0]"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                  >
                    <Icon size={18} strokeWidth={1.8} />

                    <span>{link.name}</span>
                  </Link>
                );
              })}

              {/* Tablet Menu Actions */}

              {/* <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={handleLanguageChange}
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-white/15
                  px-4 py-2.5 text-sm text-gray-300
                  transition-all duration-300
                  hover:border-[#00D6D0]
                  hover:text-[#00D6D0]
                "
              >
                <Languages size={17} />

                {isArabic ? "English" : "العربية"}
              </button>

              <StartProjectButton compact onClick={() => setIsOpen(false)} />
            </div> */}
            </div>
          </div>
        </nav>

        {/* ================= MOBILE BOTTOM NAVIGATION ================= */}

        <nav
          aria-label="Mobile navigation"
          dir={isArabic ? "rtl" : "ltr"}
          className="
    fixed inset-x-0 bottom-0
    z-[1000000]
    isolate
    box-border
    w-full
    overflow-hidden
    border-t border-white/10
    bg-[#02090D]/95
    shadow-[0_-8px_30px_rgba(0,0,0,0.25)]
    backdrop-blur-xl
    pb-[env(safe-area-inset-bottom)]
    md:hidden
  "
        >
          <div className="mx-auto w-full max-w-lg box-border px-1">
            <div className="flex w-full items-center justify-around py-2">
              {links.map((link) => {
                const active = isActive(link.href);
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    // Join Us Blank
                    target={link.href === "/join-us" ? "_blank" : undefined}
                    rel={
                      link.href === "/join-us"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={() => handleSectionNavigation(link.href)}
                    aria-current={active ? "page" : undefined}
                    className={`
                    relative flex min-w-0 flex-1
                    flex-col items-center justify-center
                    gap-1 py-1.5
                    transition-all duration-300
                    ${
                      active
                        ? "text-[#00D6D0]"
                        : "text-gray-500 hover:text-gray-200"
                    }
                  `}
                  >
                    <span
                      className={`
                      absolute -top-2
                      h-[2px] w-7 rounded-full
                      bg-[#00D6D0]
                      transition-all duration-300
                      ${active ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                    `}
                    />

                    <Icon
                      size={21}
                      strokeWidth={active ? 2.3 : 1.7}
                      className={`
                      transition-all duration-300
                      ${
                        active
                          ? "-translate-y-0.5 drop-shadow-[0_0_8px_rgba(0,214,208,0.5)]"
                          : ""
                      }
                    `}
                    />

                    <span
                      className={`
                      max-w-full truncate
                      text-[10px] font-medium tracking-wide
                      ${active ? "text-[#00D6D0]" : "text-gray-500"}
                    `}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
