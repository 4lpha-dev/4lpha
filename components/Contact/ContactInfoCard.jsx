"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Headset, Mail, ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

// Contact information.
// Replace these placeholder values with the official 4LPHA details.
const contactDetails = {
  address: "Alexandria, Egypt",
  phone: "+201224787747",
  support: "support@4lpha.com",
  email: "4lpha.digital@gmail.com",
};

// Social media links.
// Update these links when the official 4LPHA accounts are ready.
const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/4lpha-dev",
    hoverColor: "hover:text-[#E6EDF3]",
    hoverBg: "hover:bg-gray-800/50",
    hoverBorder: "hover:border-gray-500/50",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
    hoverColor: "hover:text-[#0A66C2]",
    hoverBg: "hover:bg-blue-500/10",
    hoverBorder: "hover:border-blue-500/40",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/4lpha_digital/",
    hoverColor: "hover:text-[#E4405F]",
    hoverBg: "hover:bg-pink-500/10",
    hoverBorder: "hover:border-pink-500/40",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/4lpha.Digital/",
    hoverColor: "hover:text-[#1877F2]",
    hoverBg: "hover:bg-blue-500/10",
    hoverBorder: "hover:border-blue-500/40",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "#",
    hoverColor: "hover:text-[#5865F2]",
    hoverBg: "hover:bg-indigo-500/10",
    hoverBorder: "hover:border-indigo-500/40",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@4lpha.digital?is_from_webapp=1&sender_device=pc",
    hoverColor: "hover:text-[#25F4EE]",
    hoverBg: "hover:bg-cyan-500/10",
    hoverBorder: "hover:border-cyan-500/40",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/@4lpha.Digital",
    hoverColor: "hover:text-[#FF0000]",
    hoverBg: "hover:bg-red-500/10",
    hoverBorder: "hover:border-red-500/40",
  },
];

export default function ContactInfoCard() {
  const { language } = useLanguage();

  const isArabic = language === "ar";

  // Bilingual content.
  const content = {
    badge: isArabic ? "تواصل معنا" : "GET IN TOUCH",

    title: isArabic
      ? "جاهزون لسماع فكرتك وبدء مشروعك"
      : "Ready to Bring Your Vision to Life?",

    description: isArabic ? (
      <>
        فريق <span className="text-[#00e5ff]">`4LPHA`</span> على أتم الاستعداد
        لتحليل متطلبات نشاطك التجاري وتحويلها إلى حلول رقمية احترافية. اترك
        بياناتك أو تواصل معنا مباشرة عبر إحدى القنوات التالية:
      </>
    ) : (
      <>
        The <span className="text-[#00e5ff]">`4LPHA`</span> team is ready to
        analyze your business requirements and turn them into professional
        digital solutions. Leave your details or contact us directly through one
        of the following channels:
      </>
    ),
    location: isArabic ? "الموقع" : "Our Location",

    phone: isArabic ? "رقم الهاتف / واتساب" : "Phone / WhatsApp",

    support: isArabic ? "الدعم الفني" : "Technical Support",

    email: isArabic ? "البريد الإلكتروني" : "Email Address",

    follow: isArabic ? "تابعنا عبر" : "Follow Us",

    contactItems: [
      {
        id: "location",
        icon: MapPin,
        title: isArabic ? "الموقع" : "Our Location",
        value: contactDetails.address,
        href: null,
      },
      {
        id: "phone",
        icon: Phone,
        title: isArabic ? "رقم الهاتف / واتساب" : "Phone / WhatsApp",
        value: contactDetails.phone,
        href: `https://wa.me/${contactDetails.phone.replace("+", "")}`,
      },
      {
        id: "support",
        icon: Headset,
        title: isArabic ? "الدعم الفني" : "Technical Support",
        value: contactDetails.support,
        href: `mailto:${contactDetails.support}`,
      },
      {
        id: "email",
        icon: Mail,
        title: isArabic ? "البريد الإلكتروني" : "Email Address",
        value: contactDetails.email,
        href: `mailto:${contactDetails.email}`,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      dir={isArabic ? "rtl" : "ltr"}
      className="contact-info-card relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#23445C] bg-[#0D1830] p-6 shadow-[0_0_35px_rgba(0,229,255,0.06)] sm:p-8 lg:p-9"
    >
      {/* Subtle grid background. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* Card content. */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header badge. */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-md border border-[#00A6BD]/30 bg-[#00A6BD]/10 px-4 py-2 font-mono text-[10px] font-semibold tracking-wider text-[#00D5E8] sm:text-xs">
            <span className="h-5 w-5 animate-pulse rounded-full bg-[#00D5E8]" />
            {content.badge}
          </span>
        </div>

        {/* Heading and description. */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {content.title}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            {content.description}
          </p>
        </div>

        {/* Contact information grid. */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {content.contactItems.map((item) => {
            const Icon = item.icon;

            const ItemContent = (
              <>
                {/* Icon container. */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00A6BD]/40 bg-[#00A6BD]/10 text-[#00D5E8] transition-all duration-300 group-hover:border-[#00D5E8]/70 group-hover:bg-[#00A6BD]/20 group-hover:shadow-[0_0_18px_rgba(0,213,232,0.12)]"
                >
                  <Icon size={19} strokeWidth={1.7} />
                </motion.div>

                {/* Contact details. */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#00D5E8]">
                    {item.title}
                  </h3>

                  <p className="mt-2 break-all text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {item.value}
                  </p>
                </div>

                {/* External link indicator. */}
                {item.href && (
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00D5E8]"
                  />
                )}
              </>
            );

            const itemClassName = `
              group cursor-pointer flex min-h-[105px] items-center gap-3
              rounded-2xl border border-[#23445C]/70
              bg-[#091A2B]/70 p-4
              transition-all duration-300
              hover:-translate-y-1 hover:border-[#00A6BD]/50
              hover:bg-[#10253A]/90
              hover:shadow-[0_8px_25px_rgba(0,213,232,0.05)]
            `;

            return item.href ? (
              <a
                key={item.id}
                href={item.href}
                target={item.id === "phone" ? "_blank" : undefined}
                rel={item.id === "phone" ? "noopener noreferrer" : undefined}
                aria-label={`${item.title}: ${item.value}`}
                className={itemClassName}
              >
                {ItemContent}
              </a>
            ) : (
              <div key={item.id} className={itemClassName}>
                {ItemContent}
              </div>
            );
          })}
        </div>

        {/* Social media section. */}
        <div className="mt-8 pt-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-medium tracking-wide text-slate-400">
              {content.follow}
            </span>

            <div className="h-px flex-1 bg-gradient-to-r from-[#23445C] to-transparent" />
          </div>

          {/* Social media links. */}
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  data-social={social.name.toLowerCase()}
                  className={`
                    social-icon
                    relative items-center justify-center
                    ${["Instagram", "YouTube"].includes(social.name) ? "hidden sm:flex" : "flex"}
                    h-11 w-11
                    overflow-visible rounded-xl
                    border border-[#23445C]
                    bg-[#102238] text-slate-400
                  `}
                >
                  <span className="social-fill" />

                  <Icon
                    size={19}
                    className="relative z-10 transition-colors duration-300"
                  />

                  <span className="social-tooltip">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
