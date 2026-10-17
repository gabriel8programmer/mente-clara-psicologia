import { howItWorksData } from "@/data/landing";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-heading"
      className="border-t border-[#E4DFD5] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#5D7464]">
            {howItWorksData.eyebrow}
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#1F2622] sm:text-4xl"
          >
            {howItWorksData.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#525B55]">
            {howItWorksData.description}
          </p>
        </div>

        {/* 3-Step Numbered Timeline */}
        <div className="relative mt-16">
          {/* Desktop horizontal connector line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-[#D8D1C4]"
          />

          <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {howItWorksData.steps.map((step) => (
              <li
                key={step.number}
                className="relative flex flex-col items-start md:items-center md:text-center"
              >
                {/* Step Number Badge */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4CEC2] bg-[#FCFBF9] shadow-[0_4px_16px_-4px_rgba(31,38,34,0.08)]">
                  <span className="font-serif text-xl font-medium text-[#24382E]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl font-medium text-[#1F2622]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#525B55]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
