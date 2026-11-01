
const steps = [
  {
    number: "01",
    title: "Develop",
    description: "Build powerful digital products.",
  },
  {
    number: "02",
    title: "Test",
    description: "Ensure quality and reliability.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Launch and deliver your product.",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div key={step.number} className="flex gap-5">

          {/* Timeline line and point */}
          <div className="flex flex-col items-center">
            <div className="titleContentSection w-4 h-4 rounded-full text-(color:--text) ring-4 ring-(color:--text) hover:bg-(color:--text)" />

            {index !== steps.length - 1 && (
              <div className="w-[2px] h-20 text-black" />
            )}
          </div>

          {/* Content */}
          <div className="pb-12">
            <span className="text-(color:--text) text-sm font-semibold">
              {step.number}
            </span>

            <h3 className="text-2xl font-bold text-white transitionTitle">
              {step.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {step.description}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}
