import { useLanguage } from "@/context/LanguageContext";


export default function ProcessTimeline() {
  const { language, toggleLanguage, t } = useLanguage();
  const steps = [
    {
      number: t.steps.step1.number,
      title: t.steps.step1.title,
      description: t.steps.step1.description,
    },
    {
      number: t.steps.step2.number,
      title: t.steps.step2.title,
      description: t.steps.step2.description,
    },
    {
      number: t.steps.step3.number,
      title: t.steps.step3.title,
      description: t.steps.step3.description,
    },
  
  ];

  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="hero-fade-left flex gap-5"
          style={{ animationDelay: `${0.4 + index * 0.2}s` }}
        >
          {/* Timeline line and point */}
          <div className="flex flex-col items-center">
            <div
              className="
                relative
                w-4 h-4 rounded-full
                border-2 border-[var(--text)]
                bg-gray-400
                shadow-[0_0_12px_rgba(0,229,255,0.35)]
                transition-all duration-300
                hover:bg-[var(--text)]
                hover:shadow-[0_0_20px_rgba(0,229,255,0.7)]
              "
            />

            {index !== steps.length - 1 && (
              <div className="w-[2px] h-20 bg-gradient-to-b from-[var(--text)]/70 to-[var(--text)]/10" />
            )}
          </div>

          {/* Content */}
          <div className="pb-12">
            <span className="text-[var(--text)] text-sm font-semibold tracking-wider">
              {step.number}
            </span>

            <h3 className="text-2xl font-bold text-white transition-all duration-300 hover:text-[var(--text)] hover:translate-x-1">
              {step.title}
            </h3>

            <p className="text-gray-400 mt-2 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
