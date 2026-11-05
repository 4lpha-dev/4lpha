// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ArrowUpRight, Languages, Menu, X } from "lucide-react";
// import ElectricLogo from "./ElectricLogo";
// import Highlight from "./Highlight";

// const Nav = ({ introActive }) => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   // Main navigation links.
//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="w-full bg-transparent text-white backdrop-blur-sm">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
//         {/* Brand Logo: Keep the symbol and letters inside the same target container. */}
//         <div className="flex shrink-0 items-center">
//           <div
//             id="nav-brand"
//             className={`transition-opacity duration-300 ${
//               introActive ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             <Link href="/" className="flex items-center gap-1">
//               {/* Electric symbol: Only the 4 receives the electric effect. */}
//               <div
//                 className="relative flex shrink-0 items-center justify-center"
//                 style={{ width: 60, height: 60 }}
//               >
//                 <ElectricLogo
//                   src="/Images/4lpha-logo.svg"
//                   color="#00E5FF"
//                   glowColor="#00D6D0"
//                   scale={0.7}
//                   strands={2}
//                   bend={0.6}
//                   crackle={1.2}
//                   arcs={0.25}
//                   speed={1.4}
//                   interactive
//                   intensity={1}
//                   glow={0.3}
//                   thickness={1}
//                   flicker={0.15}
//                   fill={0}
//                   cursorIntensity={0.4}
//                   cursorRadius={155}
//                 />
//               </div>

//               {/* Brand letters: Static text with no electric animation. */}
//               <span className="shrink-0 text-2xl font-bold tracking-[0.15em] text-white">
//                 LPHA
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* Desktop Navigation Links */}
//         <div className="hidden items-center gap-9 lg:flex">
//           {links.map((link) => {
//             const active =
//               pathname === link.href ||
//               (link.href !== "/" && pathname.startsWith(link.href));

//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`group relative py-2 text-sm transition-colors duration-300 ${
//                   active ? "text-[#00D6D0]" : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 {link.name}

//                 {/* Active and hover underline. */}
//                 <span
//                   className={`absolute bottom-0 left-0 h-[2px] bg-[#00D6D0] transition-all duration-300 ${
//                     active ? "w-full" : "w-0 group-hover:w-full"
//                   }`}
//                 />
//               </Link>
//             );
//           })}
//         </div>

//         {/* Desktop Actions */}
//         <div className="hidden shrink-0 items-center justify-end gap-5 lg:flex">
//           {/* Start a Project CTA. */}
//           <Link
//             href="/contact"
//             className="group relative isolate flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#00D6D0] px-5 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#00D6D0] hover:text-[#02090D]"
//           >
//             <Highlight size="medium" />

//             <span className="relative z-10">Start a Project</span>

//             <ArrowUpRight
//               size={16}
//               className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//             />
//           </Link>

//           {/* Language button. */}
//           <button
//             aria-label="Change language"
//             className="cursor-pointer text-gray-300 transition-all duration-300 hover:scale-110 hover:text-[#00D6D0]"
//           >
//             <Languages size={20} strokeWidth={1.7} />
//           </button>
//         </div>

//         {/* Mobile and Tablet Menu Toggle. */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//           aria-expanded={isOpen}
//           className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-[#00D6D0] lg:hidden"
//         >
//           {isOpen ? <X size={25} /> : <Menu size={25} />}
//         </button>
//       </div>

//       {/* Mobile and Tablet Navigation Menu. */}
//       {isOpen && (
//         <div className="mobile-menu-animation border-t border-white/10 px-8 pb-6 pt-4 lg:hidden">
//           <div className="flex flex-col gap-3">
//             {links.map((link) => {
//               const active =
//                 pathname === link.href ||
//                 (link.href !== "/" && pathname.startsWith(link.href));

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`group relative w-fit py-2 text-sm transition-colors duration-300 ${
//                     active ? "text-[#00D6D0]" : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {link.name}

//                   {/* Mobile active and hover underline. */}
//                   <span
//                     className={`absolute bottom-0 left-0 h-[2px] bg-[#00D6D0] transition-all duration-300 ${
//                       active ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </Link>
//               );
//             })}

//             {/* Mobile Actions. */}
//             <div className="mt-3 flex items-center gap-5 border-t border-white/10 pt-5">
//               {/* Mobile language button. */}
//               <button
//                 aria-label="Change language"
//                 className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-[#00D6D0]"
//               >
//                 <Languages size={20} strokeWidth={1.7} />
//               </button>

//               {/* Mobile Start a Project CTA. */}
//               <Link
//                 href="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#00D6D0] px-5 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#00D6D0] hover:text-[#02090D]"
//               >
//                 Start a Project
//                 <ArrowUpRight
//                   size={16}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;
// =======================
// Aly:
//  "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useLanguage } from "@/context/LanguageContext";
// import {
//   ArrowUpRight,
//   Languages,
//   Menu,
//   X,
//   House,
//   BriefcaseBusiness,
//   FolderKanban,
//   UserRound,
//   Mail,
// } from "lucide-react";

// import ElectricLogo from "./ElectricLogo";
// import Highlight from "./Highlight";

// const Nav = ({ introActive }) => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const { language, toggleLanguage, t } = useLanguage();

//   // Navigation Links
//   const links = [
//     { name: t.nav.home, href: "/", icon: House },
//     { name: t.nav.services, href: "/services", icon: BriefcaseBusiness },
//     { name: t.nav.portfolio, href: "/portfolio", icon: FolderKanban },
//     { name: t.nav.about, href: "/about", icon: UserRound },
//     { name: t.nav.contact, href: "/contact", icon: Mail },
//   ];

//   // Active Route Detection
//   const isActive = (href) => {
//     if (!pathname) return false;

//     return href === "/"
//       ? pathname === "/"
//       : pathname === href || pathname.startsWith(`${href}/`);
//   };

//   // Close Tablet Menu After Navigation
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   return (
//     <div className="relative w-full text-white">
//       {/* ================= NAVBAR ================= */}

//       <nav
//         aria-label="Main navigation"
//         className="w-full bg-transparent backdrop-blur-sm"
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
//           {/* ================= BRAND LOGO ================= */}

//           <div
//             id="nav-brand"
//             className={`shrink-0 transition-opacity duration-500  flex flex-row content-between ${
//               introActive ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             <Link
//               href="/"
//               aria-label="4LPHA Home"
//               className="flex items-center gap-1"
//               dir="ltr"
//             >
//               {/* Electric Symbol */}
//               <div
//                 id="nav-logo-symbol"
//                 className="relative flex shrink-0 items-center justify-center"
//                 style={{ width: 60, height: 60 }}
//               >
//                 <ElectricLogo
//                   src="/Images/4lpha-logo.svg"
//                   color="#00E5FF"
//                   glowColor="#00D6D0"
//                   scale={0.7}
//                   strands={2}
//                   bend={0.6}
//                   crackle={1.2}
//                   arcs={0.25}
//                   speed={1.4}
//                   interactive
//                   intensity={1}
//                   glow={0.3}
//                   thickness={1}
//                   flicker={0.15}
//                   fill={0}
//                   cursorIntensity={0.4}
//                   cursorRadius={155}
//                 />
//               </div>

//               {/* Brand Letters - Hidden on Mobile */}
//               <span className="hidden shrink-0 text-2xl font-bold tracking-[0.15em] text-white md:inline">
//                 LPHA
//               </span>
//             </Link>
//           </div>
//             {/* <div className="flex md:hidden">
//                 <button>
//                     start project
//                 </button>
//             </div> */}

//           {/* ================= DESKTOP NAVIGATION ================= */}

//           <div className="hidden items-center gap-9 lg:flex">
//             {links.map((link) => {
//               const active = isActive(link.href);

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   aria-current={active ? "page" : undefined}
//                   className={`group relative py-2 text-sm transition-colors duration-300 ${
//                     active ? "text-[#00D6D0]" : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {link.name}

//                   {/* Active / Hover Underline */}
//                   <span
//                     className={`absolute bottom-0 left-0 h-[2px] bg-[#00D6D0] transition-all duration-300 ${
//                       active ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </Link>
//               );
//             })}
//           </div>

//           {/* ================= DESKTOP & TABLET ACTIONS ================= */}

//           <div className="hidden shrink-0 items-center justify-end gap-5 md:flex">
//             {/* Start a Project */}
//             <Link
//               href="/contact"
//               className="group relative isolate flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#00D6D0] px-5 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#00D6D0] hover:text-[#02090D]"
//             >
//               <Highlight size="medium" />

//               <span className="relative z-10">
//                 {t.hero.buttons.startProject}
//               </span>

//               <ArrowUpRight
//                 size={16}
//                 className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               />
//             </Link>

//             {/* Language */}
//             <button
//               type="button"
//               aria-label="Change language"
//               className="cursor-pointer text-gray-300 transition-all duration-300 hover:scale-110 hover:text-[#00D6D0]"
//             >
//               <Languages onClick={toggleLanguage} size={20} strokeWidth={1.7} />
//             </button>
//             {/* ================= TABLET TOGGLE ================= */}

//             <button
//               type="button"
//               onClick={() => setIsOpen((prev) => !prev)}
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//               aria-expanded={isOpen}
//               aria-controls="tablet-menu"
//               className="hidden cursor-pointer text-gray-300 transition-colors duration-300 hover:text-[#00D6D0] md:max-lg:block"
//             >
//               {isOpen ? <X size={25} /> : <Menu size={25} />}
//             </button>
//           </div>
//         </div>

//         {/* ================= TABLET DROPDOWN MENU ================= */}

//         <div
//           id="tablet-menu"
//           className={`hidden overflow-hidden border-t border-white/10 transition-all duration-300 md:max-lg:block ${
//             isOpen
//               ? "max-h-[500px] opacity-100"
//               : "pointer-events-none max-h-0 opacity-0"
//           }`}
//         >
//           <div className="flex flex-col gap-3 px-8 pb-6 pt-4">
//             {links.map((link) => {
//               const active = isActive(link.href);

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`group relative w-fit py-2 text-sm transition-colors duration-300 ${
//                     active ? "text-[#00D6D0]" : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {link.name}

//                   <span
//                     className={`absolute bottom-0 left-0 h-[2px] bg-[#00D6D0] transition-all duration-300 ${
//                       active ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </Link>
//               );
//             })}

//             {/* Tablet Menu Actions */}
//             {/* <div className="mt-3 flex items-center gap-5 border-t border-white/10 pt-5">
//               <button
//                 type="button"
//                 aria-label="Change language"
//                 className="cursor-pointer text-gray-300 transition-colors duration-300 hover:text-[#00D6D0]"
//               >
//                 <Languages size={20} strokeWidth={1.7} />
//               </button>

//               <Link
//                 href="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#00D6D0] px-5 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#00D6D0] hover:text-[#02090D]"
//               >
//                 Start a Project
//                 <ArrowUpRight
//                   size={16}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>
//             </div> */}
//           </div>
//         </div>
//       </nav>

//       {/* ================= MOBILE BOTTOM NAVIGATION ================= */}

//       {/* <nav
//         aria-label="Mobile bottom navigation"
//         className="fixed inset-x-0 bottom-0 z-[9999] md:hidden"
//       >
//         <div className="rounded-t-2xl border-t border-white/10 bg-[#07131B]/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
//         <div className="mx-auto flex max-w-lg items-center justify-around px-1 pb-2 pt-2"> */}
//       <nav
//         aria-label="Mobile navigation"
//         className="
//       fixed inset-x-0 bottom-0 left-0 z-[999999]
//       w-full
//       border-t border-white/10
//       bg-[#02090D]/95
//       backdrop-blur-xl
//       shadow-[0_-8px_30px_rgba(0,0,0,0.25)]
//       lg:hidden
//       pb-[env(safe-area-inset-bottom)]
//       "
//       >
//         <div className="rounded-t-2xl border-t border-white/10 bg-[#07131B]/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
//           <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-2">
//             {links.map((link) => {
//               const active = isActive(link.href);
//               const Icon = link.icon;

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   aria-current={active ? "page" : undefined}
//                   className={`relative flex flex-1 flex-col items-center justify-center gap-1 py-1.5 transition-all duration-300 ${
//                     active
//                       ? "text-[#00D6D0]"
//                       : "text-gray-500 hover:text-gray-200"
//                   }`}
//                 >
//                   {/* Active Indicator */}
//                   <span
//                     className={`absolute -top-2 h-[2px] w-7 rounded-full bg-[#00D6D0] transition-all duration-300 ${
//                       active ? "scale-100 opacity-100" : "scale-0 opacity-0"
//                     }`}
//                   />

//                   {/* Icon */}
//                   <Icon
//                     size={21}
//                     strokeWidth={active ? 2.3 : 1.7}
//                     className={`transition-all duration-300 ${
//                       active
//                         ? "-translate-y-0.5 drop-shadow-[0_0_8px_rgba(0,214,208,0.5)]"
//                         : ""
//                     }`}
//                   />

//                   {/* Label */}
//                   <span
//                     className={`text-[10px] font-medium tracking-wide ${
//                       active ? "text-[#00D6D0]" : "text-gray-500"
//                     }`}
//                   >
//                     {link.name}
//                   </span>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Nav;


// =========================================================

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import ElectricLogo from "./ElectricLogo";
import Highlight from "./Highlight";

const Nav = ({ introActive = false }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { language, toggleLanguage, t } = useLanguage();

  const isArabic = language === "ar";

  // Navigation links
  const links = [
    { name: t.nav.home, href: "/", icon: House },
    { name: t.nav.services, href: "/services", icon: BriefcaseBusiness },
    { name: t.nav.portfolio, href: "/portfolio", icon: FolderKanban },
    { name: t.nav.about, href: "/about", icon: UserRound },
    { name: t.nav.contact, href: "/contact", icon: Mail },
  ];

  // Active route detection
  const isActive = (href) => {
    if (!pathname) return false;

    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close menu after navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Change language and close menu
  const handleLanguageChange = () => {
    toggleLanguage();
    setIsOpen(false);
  };

  // Reusable language button
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
        hover:border-[#00D6D0] hover:bg-[#00D6D0]/10
        hover:text-[#00D6D0]
        ${compact ? "h-9 min-w-9 px-2.5" : "h-10 px-3"}
      `}
    >
      <Languages size={17} strokeWidth={1.8} />

      <span className="text-xs font-semibold">
        {isArabic ? "EN" : "AR"}
      </span>
    </button>
  );

  return (
    <div className="relative z-50 w-full text-white">
      {/* ================= MAIN NAVBAR ================= */}

      <nav
        aria-label="Main navigation"
        dir={isArabic ? "rtl" : "ltr"}
        className="w-full bg-transparent backdrop-blur-sm"
      >
        <div
          className="
            mx-auto flex w-full max-w-7xl
            items-center justify-between
            gap-3 px-4 py-3
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
              ${introActive ? "opacity-0" : "opacity-100"}
            `}
          >
            <Link
              href="/"
              aria-label="4LPHA Home"
              dir="ltr"
              className="flex items-center gap-1"
            >
              <div
                id="nav-logo-symbol"
                className="relative flex shrink-0 items-center justify-center"
                style={{ width: 55, height: 55 }}
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

              {/* Brand letters */}
              <span className="hidden text-2xl font-bold tracking-[0.15em] text-white sm:inline">
                LPHA
              </span>
            </Link>
          </div>

          {/* ================= DESKTOP LINKS ================= */}

          <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
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

                  {/* Active / Hover underline */}
                  <span
                    className={`
                      absolute bottom-0 start-0 h-[2px]
                      bg-[#00D6D0] transition-all duration-300
                      ${active ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* ================= ACTIONS ================= */}

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Language switcher - Mobile and Tablet */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Start Project */}
              <Link
                href="/contact"
                className="
                  group relative isolate inline-flex shrink-0
                  items-center gap-2 whitespace-nowrap
                  rounded-full border border-[#00D6D0]
                  px-5 py-2.5 text-xs font-medium text-white
                  transition-all duration-300
                  hover:bg-[#00D6D0] hover:text-[#02090D]
                "
              >
                <Highlight size="medium" />

                <span className="relative z-10">
                  {t.hero.buttons.startProject}
                </span>

                <ArrowUpRight
                  size={16}
                  className={`
                    relative z-10 transition-transform duration-300
                    group-hover:-translate-y-0.5
                    ${isArabic ? "rotate-[-90deg] group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}
                  `}
                />
              </Link>
              <LanguageButton compact />
            </div>

            {/* Desktop actions */}
            <div className="hidden items-center gap-4 lg:flex">
              {/* Start Project */}
              <Link
                href="/contact"
                className="
                  group relative isolate inline-flex shrink-0
                  items-center gap-2 whitespace-nowrap
                  rounded-full border border-[#00D6D0]
                  px-5 py-2.5 text-xs font-medium text-white
                  transition-all duration-300
                  hover:bg-[#00D6D0] hover:text-[#02090D]
                "
              >
                <Highlight size="medium" />

                <span className="relative z-10">
                  {t.hero.buttons.startProject}
                </span>

                <ArrowUpRight
                  size={16}
                  className={`
                    relative z-10 transition-transform duration-300
                    group-hover:-translate-y-0.5
                    ${isArabic ? "rotate-[-90deg] group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}
                  `}
                />
              </Link>

              {/* Language switcher */}
              <LanguageButton />
            </div>

            {/* Tablet menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="tablet-menu"
              className="
                hidden h-10 w-10 items-center justify-center
                rounded-full border border-white/15
                text-gray-300 transition-all duration-300
                hover:border-[#00D6D0] hover:text-[#00D6D0]
                md:flex lg:hidden
              "
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ================= TABLET DROPDOWN ================= */}

        <div
          id="tablet-menu"
          className={`
            overflow-hidden border-t border-white/10
            bg-[#02090D]/95 backdrop-blur-xl
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
            {links.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`
                    flex items-center gap-3 rounded-lg
                    px-4 py-3 text-sm transition-all duration-300
                    ${
                      active
                        ? "bg-[#00D6D0]/10 text-[#00D6D0]"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <Icon size={18} />
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* Tablet actions */}
            <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={handleLanguageChange}
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-white/15 px-4 py-2.5
                  text-sm text-gray-300 transition-all
                  hover:border-[#00D6D0] hover:text-[#00D6D0]
                "
              >
                <Languages size={17} />
                {isArabic ? "English" : "العربية"}
              </button>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  group inline-flex items-center gap-2
                  rounded-full bg-[#00D6D0] px-5 py-2.5
                  text-xs font-semibold text-[#02090D]
                  transition-all duration-300 hover:scale-105
                "
              >
                {t.hero.buttons.startProject}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM NAVIGATION ================= */}

      <nav
        aria-label="Mobile navigation"
        dir={isArabic ? "rtl" : "ltr"}
        className="
          fixed inset-x-0 bottom-0 z-[99999]
          w-full border-t border-white/10
          bg-[#02090D]/95 shadow-[0_-8px_30px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          pb-[env(safe-area-inset-bottom)]
          lg:hidden
        "
      >
        <div className="mx-auto max-w-lg px-2">
          <div className="flex items-center justify-around py-2">
            {links.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative flex min-w-0 flex-1
                    flex-col items-center justify-center
                    gap-1 py-1.5 transition-all duration-300
                    ${
                      active
                        ? "text-[#00D6D0]"
                        : "text-gray-500 hover:text-gray-200"
                    }
                  `}
                >
                  {/* Active indicator */}
                  <span
                    className={`
                      absolute -top-2 h-[2px] w-7 rounded-full
                      bg-[#00D6D0] transition-all duration-300
                      ${
                        active
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }
                    `}
                  />

                  {/* Icon */}
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

                  {/* Label */}
                  <span
                    className={`
                      max-w-full truncate text-[10px] font-medium
                      tracking-wide
                      ${
                        active ? "text-[#00D6D0]" : "text-gray-500"
                      }
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
  );
};

export default Nav;
