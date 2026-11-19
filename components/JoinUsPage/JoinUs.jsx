"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowUpRight,
  UserRound,
  BriefcaseBusiness,
  FileText,
  UploadCloud,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function JoinUs() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  // =========================================================
  // TODO: EDIT PAGE CONTENT
  // Change the title, description, account email and questions
  // from this section without changing the page structure.
  // =========================================================

  const content = {
    en: {
      title: "Become a Part of ",
      subtitle:
        "We're excited to learn more about you. Fill out the application below and take the first step toward joining our journey.",
      email: "4lpha.digital@gmail.com",
      accountNote:
        "Please make sure your contact information is correct. Your information will only be used for the recruitment process.",
      required: "Indicates required question",
      personal: "Personal Information",
      professional: "Professional Information",
      additional: "Additional Information",
      documents: "Documents",
      name: "Full Name",
      nameHint: "First and Last Name",
      emailLabel: "Email Address",
      phone: "Phone Number",
      positions: "Which position(s) are you interested in?",
      experience: "Years of Relevant Experience",
      experienceHint: "Enter your years of experience",
      location: "Are you a Alexandria resident?",
      yes: "Yes",
      no: "No",
      other: "Other",
      otherPlaceholder: "Please specify",
      salary: "Your Expected Salary",
      salaryHint: "Enter your expected salary",
      graduation: "Graduation Year",
      graduationHint: "e.g. 2026",
      immediate: "Can you start immediately?",
      cv: "Upload Your CV",
      cvHint:
        "Upload one supported file (PDF, DOC, DOCX). Maximum size: 10 MB.",
      chooseFile: "Choose File",
      noFile: "No file selected",
      submit: "Submit Application",
      submitting: "Preparing...",
      footer: "Build. Test. Innovate",
      fileError: "File size must not exceed 10 MB.",
      positionsError: "Please select at least one position.",
      success:
        "The page design is ready, but the submission system has not been connected yet.",
    },

    ar: {
      title: "انضم إلى فريق ",
      subtitle:
        "يسعدنا التعرف عليك أكثر. أكمل نموذج التقديم وابدأ أولى خطواتك لتكون جزءًا من رحلتنا.",
      email: "4lpha.digital@gmail.com",
      accountNote:
        "تأكد من صحة بيانات التواصل الخاصة بك. سيتم استخدام بياناتك لأغراض التقديم فقط.",
      required: "تشير العلامة إلى أن السؤال مطلوب",
      personal: "المعلومات الشخصية",
      professional: "المعلومات المهنية",
      additional: "معلومات إضافية",
      documents: "المستندات",
      name: "الاسم بالكامل",
      nameHint: "الاسم الأول واسم العائلة",
      emailLabel: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      positions: "ما التخصص أو التخصصات التي ترغب في الانضمام إليها؟",
      experience: "سنوات الخبرة ذات الصلة",
      experienceHint: "أدخل عدد سنوات الخبرة",
      location: "هل أنت مقيم في الإسكندرية؟",
      yes: "نعم",
      no: "لا",
      other: "أخرى",
      otherPlaceholder: "يرجى التوضيح",
      salary: "الراتب المتوقع",
      salaryHint: "أدخل الراتب المتوقع",
      graduation: "سنة التخرج",
      graduationHint: "مثال: 2026",
      immediate: "هل يمكنك البدء فورًا؟",
      cv: "ارفع السيرة الذاتية",
      cvHint:
        "ارفع ملفًا واحدًا بصيغة PDF أو DOC أو DOCX، بحد أقصى 10 ميجابايت.",
      chooseFile: "اختر ملفًا",
      noFile: "لم يتم اختيار ملف",
      submit: "إرسال طلب التقديم",
      submitting: "جارٍ التجهيز...",
      footer: "Build. Test. Innovate",
      fileError: "يجب ألا يتجاوز حجم الملف 10 ميجابايت.",
      positionsError: "يرجى اختيار تخصص واحد على الأقل.",
      success: "تصميم النموذج جاهز، لكن نظام استقبال الطلبات لم يتم ربطه بعد.",
    },
  };

  const t = isArabic ? content.ar : content.en;

  // =========================================================
  // TODO: EDIT AVAILABLE POSITIONS
  // Add, remove or rename positions from this array.
  // =========================================================

  const positions = [
    "UI/UX Designer",
    "Graphic Designer",
    "WordPress Developer",
    "PHP Laravel Developer",
    "Flutter Developer",
    "Frontend Developer (React)",
    "Account Manager",
    "Customer Success / Support",
    "Office Assistant / Secretary",
    "Node.js Developer",
    "Full Stack Developer",
    "Tester / QA",
    "Other",
  ];

  const [selectedPositions, setSelectedPositions] = useState([]);
  const [locationChoice, setLocationChoice] = useState("");
  const [immediateChoice, setImmediateChoice] = useState("");
  const [otherPosition, setOtherPosition] = useState("");
  const [otherLocation, setOtherLocation] = useState("");
  const [cvFile, setCvFile] = useState(null);

  // =========================================================
  // TODO: CONNECT FORM SUBMISSION
  // This is currently a front-end form only.
  // Connect your backend or Google Forms entry IDs later.
  // =========================================================

  const handlePositionChange = (position) => {
    setSelectedPositions((previous) =>
      previous.includes(position)
        ? previous.filter((item) => item !== position)
        : [...previous, position],
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedPositions.length === 0) {
      alert(t.positionsError);
      return;
    }

    if (cvFile && cvFile.size > 10 * 1024 * 1024) {
      alert(t.fileError);
      return;
    }

    // TODO: Send form data to your submission service.
    alert(t.success);
  };

  // Reusable section heading
  const SectionHeading = ({ icon: Icon, title, number }) => (
    <div className="mb-7 flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00D5E8]/20 bg-[#00D5E8]/[0.07] text-[#00D5E8]">
        <Icon size={20} strokeWidth={1.7} />
      </div>

      <div>
        <span className="text-[10px] font-semibold tracking-[0.25em] text-[#00D5E8]/70">
          {number}
        </span>
        <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">
          {title}
        </h2>
      </div>
    </div>
  );

  // Reusable input field
  const InputField = ({
    label,
    hint,
    type = "text",
    required = false,
    placeholder,
    name,
  }) => (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-[#E5F1F4]">
        {label}
        {required && <span className="ms-1 text-[#00D5E8]">*</span>}
      </label>

      {hint && <p className="text-xs text-[#718891]">{hint}</p>}

      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder || ""}
        className="w-full rounded-xl border border-white/[0.09] bg-[#030D12] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-[#536A73] hover:border-white/20 focus:border-[#00D5E8]/60 focus:ring-2 focus:ring-[#00D5E8]/10"
      />
    </div>
  );

  // Reusable radio option
  const RadioOption = ({ value, checked, onChange, name }) => (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.08] bg-[#030D12] px-4 py-3 transition-all hover:border-[#00D5E8]/30">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-[#00D5E8]"
      />

      <span className="text-sm text-[#C2D1D6]">{value}</span>
    </label>
  );

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#02090D] px-4 py-16 text-white sm:px-6 md:py-24"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
          TODO: Adjust glow colors and positions here.
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-52 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#00D5E8]/[0.07] blur-[150px]" />

        <div className="absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-[#006B80]/[0.08] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* ===================================================
            FORM HEADER
            TODO: Change the title, email and description
            from the content object above.
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#071117]"
        >
          {/* Top accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#006B80] via-[#00D5E8] to-[#006B80]" />

          <div className="p-6 sm:p-9">
            <div className="mb-7 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                  {t.title}
                </h1>

                {/* Logo */}
                <Link
                  href="/"
                  aria-label="4LPHA Home"
                  dir="ltr"
                  className="inline-flex flex-row items-center gap-1"
                >
                  <Image
                    src="/Images/4lpha-logo.svg"
                    alt="4"
                    width={128}
                    height={128}
                    priority
                    className="h-auto w-10 sm:w-12"
                  />

                  <span className="text-3xl font-black tracking-tight text-[#00D5E8]">
                    LPHA
                  </span>
                </Link>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00D5E8]/20 bg-[#00D5E8]/[0.07] text-[#00D5E8]">
                <Sparkles size={18} />
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-[#91A5AE] sm:text-base">
              {t.subtitle}
            </p>

            <div className="my-7 h-px bg-white/[0.08]" />

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-[#DCE8EC]">{t.email}</span>
              <span className="rounded-full border border-[#00D5E8]/20 bg-[#00D5E8]/[0.06] px-2.5 py-1 text-[10px] text-[#00D5E8]">
                4LPHA
              </span>
            </div>

            <p className="mt-5 text-xs leading-6 text-[#718891]">
              {t.accountNote}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#A7B8BE]">
              <span className="text-[#00D5E8]">*</span>
              {t.required}
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            APPLICATION FORM
            TODO: Add or remove fields inside their sections.
        ==================================================== */}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* PERSONAL INFORMATION */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.09] bg-[#071117] p-6 sm:p-9"
          >
            <SectionHeading
              icon={UserRound}
              title={t.personal}
              number="01 / PERSONAL"
            />

            <div className="space-y-7">
              <InputField
                label={t.name}
                hint={t.nameHint}
                name="fullName"
                required
              />

              <InputField
                label={t.emailLabel}
                name="email"
                type="email"
                required
              />

              <InputField label={t.phone} name="phone" type="tel" required />
            </div>
          </motion.section>

          {/* PROFESSIONAL INFORMATION */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl border border-white/[0.09] bg-[#071117] p-6 sm:p-9"
          >
            <SectionHeading
              icon={BriefcaseBusiness}
              title={t.professional}
              number="02 / PROFESSIONAL"
            />

            <div className="space-y-8">
              {/* POSITION SELECTION */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-[#E5F1F4]">
                  {t.positions}
                  <span className="ms-1 text-[#00D5E8]">*</span>
                </label>

                {/* TODO: Edit the positions array at the top */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {positions.map((position) => {
                    const checked = selectedPositions.includes(position);

                    return (
                      <label
                        key={position}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 transition-all duration-300 ${
                          checked
                            ? "border-[#00D5E8]/50 bg-[#00D5E8]/[0.07]"
                            : "border-white/[0.08] bg-[#030D12] hover:border-white/20"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handlePositionChange(position)}
                          className="h-4 w-4 rounded accent-[#00D5E8]"
                        />

                        <span className="text-sm text-[#C2D1D6]">
                          {position}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {selectedPositions.includes("Other") && (
                  <input
                    type="text"
                    value={otherPosition}
                    onChange={(e) => setOtherPosition(e.target.value)}
                    placeholder={t.otherPlaceholder}
                    className="w-full rounded-xl border border-[#00D5E8]/30 bg-[#030D12] px-4 py-3.5 text-sm text-white outline-none focus:border-[#00D5E8]"
                  />
                )}
              </div>

              <InputField
                label={t.experience}
                hint={t.experienceHint}
                name="experience"
                type="number"
                required
              />
            </div>
          </motion.section>

          {/* ADDITIONAL INFORMATION */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl border border-white/[0.09] bg-[#071117] p-6 sm:p-9"
          >
            <SectionHeading
              icon={FileText}
              title={t.additional}
              number="03 / ADDITIONAL"
            />

            <div className="space-y-8">
              {/* ALEXANDRIA RESIDENCY */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-[#E5F1F4]">
                  {t.location}
                </label>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[t.yes, t.no, t.other].map((option) => (
                    <RadioOption
                      key={option}
                      name="location"
                      value={option}
                      checked={locationChoice === option}
                      onChange={() => setLocationChoice(option)}
                    />
                  ))}
                </div>

                {locationChoice === t.other && (
                  <input
                    value={otherLocation}
                    onChange={(e) => setOtherLocation(e.target.value)}
                    placeholder={t.otherPlaceholder}
                    className="w-full rounded-xl border border-[#00D5E8]/30 bg-[#030D12] px-4 py-3.5 text-sm text-white outline-none focus:border-[#00D5E8]"
                  />
                )}
              </div>

              <InputField
                label={t.salary}
                hint={t.salaryHint}
                name="salary"
                type="text"
              />

              <InputField
                label={t.graduation}
                hint={t.graduationHint}
                name="graduationYear"
                type="number"
              />

              {/* IMMEDIATE AVAILABILITY */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-[#E5F1F4]">
                  {t.immediate}
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[t.yes, t.no].map((option) => (
                    <RadioOption
                      key={option}
                      name="immediate"
                      value={option}
                      checked={immediateChoice === option}
                      onChange={() => setImmediateChoice(option)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* DOCUMENTS */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-2xl border border-white/[0.09] bg-[#071117] p-6 sm:p-9"
          >
            <SectionHeading
              icon={UploadCloud}
              title={t.documents}
              number="04 / DOCUMENTS"
            />

            <div className="space-y-4">
              <label className="block text-sm font-medium text-[#E5F1F4]">
                {t.cv}
                <span className="ms-1 text-[#00D5E8]">*</span>
              </label>

              <p className="text-xs leading-6 text-[#718891]">{t.cvHint}</p>

              <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#00D5E8]/30 bg-[#030D12] px-5 py-10 text-center transition-all duration-300 hover:border-[#00D5E8]/70 hover:bg-[#00D5E8]/[0.04]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00D5E8]/[0.08] text-[#00D5E8] transition-transform duration-300 group-hover:-translate-y-1">
                  <UploadCloud size={27} />
                </div>

                <span className="text-sm font-semibold text-[#DCE8EC]">
                  {t.chooseFile}
                </span>

                <span className="mt-2 max-w-full truncate text-xs text-[#718891]">
                  {cvFile ? cvFile.name : t.noFile}
                </span>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>

              {cvFile && (
                <div className="flex items-center gap-2 text-xs text-[#00D5E8]">
                  <CheckCircle2 size={15} />
                  {cvFile.name}
                </div>
              )}
            </div>
          </motion.section>

          {/* SUBMIT BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="pt-3"
          >
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#00D5E8] px-7 py-4 text-sm font-bold text-[#001116] shadow-[0_0_30px_rgba(0,213,232,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,213,232,0.3)]"
            >
              {t.submit}

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </form>

        {/* ===================================================
            FOOTER
            TODO: Edit footer text if needed.
        ==================================================== */}

        <div
          dir="ltr"
          className="mt-12 flex items-center justify-between gap-3"
        >
          <p className="text-[10px] tracking-[0.3em] text-[#607781]">
            {t.footer}
          </p>

          <p className="text-[10px] text-[#43565E]">
            © {new Date().getFullYear()} 4LPHA. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
