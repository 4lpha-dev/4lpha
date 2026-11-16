"use client";

import { FaGithub, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/4lpha-dev",
    icon: FaGithub,
    hoverColor: "hover:text-[#E6EDF3]",
    hoverBg: "hover:bg-gray-800/50",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
    hoverColor: "hover:text-[#0A66C2]",
    hoverBg: "hover:bg-blue-500/10",
  },

  {
    name: "Facebook",
    href: "https://www.facebook.com/4lpha.Digital/",
    icon: FaFacebookF,
    hoverColor: "hover:text-[#1877F2]",
    hoverBg: "hover:bg-blue-500/10",
  },

  {
    name: "YouTube",
    href: "https://www.youtube.com/@4lpha.Digital",
    icon: FaYoutube,
    hoverColor: "hover:text-[#FF0000]",
    hoverBg: "hover:bg-red-500/10",
  },
];

export default function SocialDock() {
  return (
    <div className="inline-flex">
      <div className="flex items-center justify-center gap-3 sm:gap-3.5">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className={`
                group flex h-8 w-8 sm:h-9 sm:w-9
                items-center justify-center
                rounded-lg
                text-[#00E5FF]
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:scale-110
                ${social.hoverColor}
                ${social.hoverBg}
              `}
            >
              <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px] transition-colors duration-300" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
