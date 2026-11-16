"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactFormCard() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    message: "",
  });

  const [countryCode, setCountryCode] = useState("+20");
  const [status, setStatus] = useState("");

  const content = {
    badge: isArabic ? "ابدأ مشروعك" : "START A PROJECT",

    title: isArabic ? "أخبرنا عن فكرتك" : "Let's Talk About Your Project",

    description: isArabic
      ? "املأ النموذج وسنتواصل معك لمناقشة التفاصيل والخطوات القادمة. مع مراعاة السرية التامة لأفكارك وبياناتك التجارية، ولن نكشف أو نشارك تفاصيل مشروعك مع أي طرف ثالث."
      : "Fill out the form and tell us what you have in mind. Let's build something great together. Your ideas and business information will remain strictly confidential, and we will never disclose or share your project details with any third party.",

    namePlaceholder: isArabic ? "الاسم بالكامل" : "Your full name",

    emailPlaceholder: isArabic ? "البريد الإلكتروني" : "you@example.com",

    phonePlaceholder: isArabic ? "رقم الهاتف" : "Phone number",

    servicePlaceholder: isArabic ? "اختر الخدمة" : "Select a service",

    projectTypePlaceholder: isArabic
      ? "اختر نوع المشروع"
      : "Select project type",

    messagePlaceholder: isArabic
      ? "أخبرنا المزيد عن فكرتك أو مشروعك..."
      : "Tell us more about your idea or project...",

    countries: [
      { value: "+20", label: "🇪🇬 مصر (+20)" },
      { value: "+966", label: "🇸🇦 السعودية (+966)" },
      { value: "+971", label: "🇦🇪 الإمارات (+971)" },
      { value: "+965", label: "🇰🇼 الكويت (+965)" },
      { value: "+974", label: "🇶🇦 قطر (+974)" },
      { value: "+973", label: "🇧🇭 البحرين (+973)" },
      { value: "+968", label: "🇴🇲 عُمان (+968)" },
      { value: "+962", label: "🇯🇴 الأردن (+962)" },
      { value: "+961", label: "🇱🇧 لبنان (+961)" },
      { value: "+963", label: "🇸🇾 سوريا (+963)" },
      { value: "+964", label: "🇮🇶 العراق (+964)" },
      { value: "+970", label: "🇵🇸 فلسطين (+970)" },
      { value: "+967", label: "🇾🇪 اليمن (+967)" },
      { value: "+218", label: "🇱🇾 ليبيا (+218)" },
      { value: "+249", label: "🇸🇩 السودان (+249)" },
      { value: "+216", label: "🇹🇳 تونس (+216)" },
      { value: "+213", label: "🇩🇿 الجزائر (+213)" },
      { value: "+212", label: "🇲🇦 المغرب (+212)" },
      { value: "+222", label: "🇲🇷 موريتانيا (+222)" },
      { value: "+252", label: "🇸🇴 الصومال (+252)" },
      { value: "+253", label: "🇩🇯 جيبوتي (+253)" },
      { value: "+269", label: "🇰🇲 جزر القمر (+269)" },
      { value: "+90", label: "🇹🇷 تركيا (+90)" },
      { value: "+1", label: "🇺🇸 الولايات المتحدة (+1)" },
      { value: "+1", label: "🇨🇦 كندا (+1)" },
      { value: "+44", label: "🇬🇧 المملكة المتحدة (+44)" },
      { value: "+49", label: "🇩🇪 ألمانيا (+49)" },
      { value: "+33", label: "🇫🇷 فرنسا (+33)" },
      { value: "+39", label: "🇮🇹 إيطاليا (+39)" },
      { value: "+34", label: "🇪🇸 إسبانيا (+34)" },
      { value: "+31", label: "🇳🇱 هولندا (+31)" },
      { value: "+32", label: "🇧🇪 بلجيكا (+32)" },
      { value: "+41", label: "🇨🇭 سويسرا (+41)" },
      { value: "+46", label: "🇸🇪 السويد (+46)" },
      { value: "+47", label: "🇳🇴 النرويج (+47)" },
      { value: "+45", label: "🇩🇰 الدنمارك (+45)" },
      { value: "+43", label: "🇦🇹 النمسا (+43)" },
      { value: "+351", label: "🇵🇹 البرتغال (+351)" },
      { value: "+30", label: "🇬🇷 اليونان (+30)" },
      { value: "+48", label: "🇵🇱 بولندا (+48)" },
      { value: "+7", label: "🇷🇺 روسيا (+7)" },
      { value: "+380", label: "🇺🇦 أوكرانيا (+380)" },
      { value: "+86", label: "🇨🇳 الصين (+86)" },
      { value: "+81", label: "🇯🇵 اليابان (+81)" },
      { value: "+82", label: "🇰🇷 كوريا الجنوبية (+82)" },
      { value: "+91", label: "🇮🇳 الهند (+91)" },
      { value: "+92", label: "🇵🇰 باكستان (+92)" },
      { value: "+880", label: "🇧🇩 بنغلاديش (+880)" },
      { value: "+62", label: "🇮🇩 إندونيسيا (+62)" },
      { value: "+60", label: "🇲🇾 ماليزيا (+60)" },
      { value: "+63", label: "🇵🇭 الفلبين (+63)" },
      { value: "+65", label: "🇸🇬 سنغافورة (+65)" },
      { value: "+66", label: "🇹🇭 تايلاند (+66)" },
      { value: "+84", label: "🇻🇳 فيتنام (+84)" },
      { value: "+61", label: "🇦🇺 أستراليا (+61)" },
      { value: "+64", label: "🇳🇿 نيوزيلندا (+64)" },
      { value: "+27", label: "🇿🇦 جنوب أفريقيا (+27)" },
      { value: "+234", label: "🇳🇬 نيجيريا (+234)" },
      { value: "+254", label: "🇰🇪 كينيا (+254)" },
      { value: "+251", label: "🇪🇹 إثيوبيا (+251)" },
      { value: "+233", label: "🇬🇭 غانا (+233)" },
      { value: "+55", label: "🇧🇷 البرازيل (+55)" },
      { value: "+52", label: "🇲🇽 المكسيك (+52)" },
      { value: "+54", label: "🇦🇷 الأرجنتين (+54)" },
      { value: "+56", label: "🇨🇱 تشيلي (+56)" },
      { value: "+57", label: "🇨🇴 كولومبيا (+57)" },
    ],

    services: [
      {
        value: "web-design",
        label: isArabic ? "تصميم المواقع الإلكترونية" : "Website Design",
      },
      {
        value: "mobile-apps",
        label: isArabic
          ? "برمجة تطبيقات الهاتف الجوال"
          : "Mobile App Development",
      },
      {
        value: "digital-marketing",
        label: isArabic
          ? "خدمات التسويق الإلكتروني"
          : "Digital Marketing Services",
      },
      {
        value: "seo",
        label: isArabic
          ? "تهيئة الموقع في محركات البحث"
          : "Search Engine Optimization (SEO)",
      },
      {
        value: "ecommerce",
        label: isArabic
          ? "تصميم وتطوير المتاجر الإلكترونية"
          : "E-commerce Design & Development",
      },
      {
        value: "hosting",
        label: isArabic ? "استضافة المواقع الإلكترونية" : "Website Hosting",
      },
      {
        value: "crm",
        label: "CRM",
      },
      {
        value: "odoo",
        label: "ODOO ERP",
      },
      {
        value: "branding",
        label: isArabic
          ? "تصميم الهوية التجارية للشركات"
          : "Corporate Branding & Identity",
      },
      {
        value: "custom-web",
        label: isArabic ? "برمجة خاصة لمواقع الويب" : "Custom Web Development",
      },
      {
        value: "content-writing",
        label: isArabic
          ? "كتابة المحتوى والمقالات"
          : "Content & Article Writing",
      },
      {
        value: "technical-support",
        label: isArabic ? "الدعم الفني" : "Technical Support",
      },
    ],

    projectTypes: [
      {
        value: "website",
        label: isArabic ? "موقع إلكتروني" : "Website",
      },
      {
        value: "mobile-app",
        label: isArabic ? "تطبيق موبايل" : "Mobile Application",
      },
      {
        value: "online-store",
        label: isArabic ? "متجر إلكتروني" : "Online Store",
      },
      {
        value: "custom-software",
        label: isArabic ? "برمجة خاصة" : "Custom Software",
      },
      {
        value: "crm-erp",
        label: "CRM / ERP",
      },
      {
        value: "other",
        label: isArabic ? "أخرى" : "Other",
      },
    ],

    submit: isArabic ? "إرسال الرسالة" : "Send Your Message",

    note: isArabic
      ? "سيتم تفعيل إرسال الرسائل بعد ربط النموذج بخدمة استقبال."
      : "Message delivery will be enabled once the form is connected to a submission service.",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Full phone number ready for future backend integration.
    const fullPhone = `${countryCode}${formData.phone}`;

    console.log({
      ...formData,
      phone: fullPhone,
    });

    // Form UI is ready. Backend integration will be added later.
    setStatus(
      isArabic
        ? "النموذج جاهز، وسيتم تفعيل الإرسال بعد ربط خدمة استقبال الرسائل."
        : "The form is ready. Message delivery will be enabled after connecting a submission service.",
    );
  };

  const inputClass =
    "w-full rounded-xl border border-[#23445C]/80 bg-[#091A2B]/80 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-[#00A6BD] focus:bg-[#102238] focus:shadow-[0_0_15px_rgba(0,213,232,0.07)]";

  const selectClass = (value) =>
    `${inputClass} appearance-none ${value ? "text-white" : "text-slate-500"}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      dir={isArabic ? "rtl" : "ltr"}
      className="contact-info-card relative h-full overflow-hidden rounded-[24px] border border-[#23445C] bg-[#0D1830] p-6 shadow-[0_0_35px_rgba(0,229,255,0.06)] sm:p-8 lg:p-9"
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

      <div className="relative z-10">
        {/* Header badge. */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 rounded-md border border-[#00A6BD]/30 bg-[#00A6BD]/10 px-4 py-2 font-mono text-[10px] font-semibold tracking-wider text-[#00D5E8] sm:text-xs">
            <span className="h-5 w-5 animate-pulse rounded-full bg-[#00D5E8]" />
            {content.badge}
          </span>
        </div>

        {/* Heading. */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {content.title}
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            {content.description}
          </p>
        </div>

        {/* Contact form. */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name and Email. */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                {content.namePlaceholder}
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={content.namePlaceholder}
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="sr-only">
                {content.emailPlaceholder}
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={content.emailPlaceholder}
                required
                autoComplete="email"
                className={inputClass}
                dir="ltr"
              />
            </div>
          </div>

          {/* Phone and Service. */}

          {/* Phone with country code. */}
          <div>
            <label htmlFor="contact-phone" className="sr-only">
              {content.phonePlaceholder}
            </label>

            <div className="flex flex-col gap-2 sm:flex-row" dir="ltr">
              {/* Country Code */}
              <select
                aria-label={
                  isArabic ? "اختر كود الدولة" : "Select country code"
                }
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className={`
        ${inputClass}
        w-full shrink-0 cursor-pointer px-3 text-sm
        sm:w-[45%]
      `}
              >
                {content.countries.map((country, index) => (
                  <option
                    key={`${country.label}-${index}`}
                    value={country.value}
                    className="bg-[#0D1830] text-white"
                  >
                    {country.label}
                  </option>
                ))}
              </select>

              {/* Phone Number */}
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={content.phonePlaceholder}
                autoComplete="tel-national"
                className={`${inputClass} min-w-0 flex-1`}
                dir="ltr"
              />
            </div>
          </div>

          {/* Service - Full Width. */}
          <div>
            <label htmlFor="contact-service" className="sr-only">
              {content.servicePlaceholder}
            </label>

            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className={selectClass(formData.service)}
            >
              <option value="" disabled className="bg-[#0D1830]">
                {content.servicePlaceholder}
              </option>

              {content.services.map((service) => (
                <option
                  key={service.value}
                  value={service.value}
                  className="bg-[#0D1830] text-white"
                >
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          {/* Project Type. */}
          <div>
            <label htmlFor="contact-project-type" className="sr-only">
              {content.projectTypePlaceholder}
            </label>

            <select
              id="contact-project-type"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={selectClass(formData.projectType)}
            >
              <option value="" disabled className="bg-[#0D1830]">
                {content.projectTypePlaceholder}
              </option>

              {content.projectTypes.map((type) => (
                <option
                  key={type.value}
                  value={type.value}
                  className="bg-[#0D1830] text-white"
                >
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Project description. */}
          <div>
            <label htmlFor="contact-message" className="sr-only">
              {content.messagePlaceholder}
            </label>

            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={content.messagePlaceholder}
              required
              rows={4}
              className={`${inputClass} min-h-[120px] resize-y leading-relaxed`}
            />
          </div>

          {/* Submission status. */}
          {status && (
            <p
              role="status"
              aria-live="polite"
              className="rounded-xl border border-[#00A6BD]/30 bg-[#00A6BD]/10 p-3 text-xs leading-relaxed text-[#00D5E8]"
            >
              {status}
            </p>
          )}

          {/* Submit button. */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#00D5E8] px-6 py-4 text-sm font-bold text-[#02090D] transition-all duration-300 hover:bg-[#00A6BD] hover:shadow-[0_0_25px_rgba(0,213,232,0.18)]"
          >
            {content.submit}

            <Send
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.button>

          <p className="text-center text-[11px] leading-relaxed text-slate-500">
            {content.note}
          </p>
        </form>
      </div>
    </motion.div>
  );
}
