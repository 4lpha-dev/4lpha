"use client";

import ContactInfoCard from "./ContactInfoCard";
import ContactFormCard from "./ContactFormCard";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="relative services-page w-full overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background decoration. */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[#00A6BD]/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section heading. */}
        <div className="mb-12 text-center">
          {/* <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#00A6BD]">
            CONTACT / 04
          </span> */}

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Something{" "}
            <span className="text-[#00D5E8]">Together.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project in mind? Get in touch with our team and let's turn
            your ideas into reliable digital solutions.
          </p>
        </div>

        {/* Contact cards layout. */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-7">
          <ContactFormCard />
          <ContactInfoCard />
        </div>
      </div>
    </section>
  );
}
