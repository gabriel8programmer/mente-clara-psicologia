import { Wind, Compass, Users, Milestone } from "lucide-react";
import { problemsData, type ProblemItem } from "@/data/landing";

function ProblemIcon({ name }: { name: ProblemItem["iconName"] }) {
  const iconProps = {
    className: "h-5 w-5 text-[#5D7464]",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "wind":
      return <Wind {...iconProps} />;
    case "compass":
      return <Compass {...iconProps} />;
    case "users":
      return <Users {...iconProps} />;
    case "milestone":
      return <Milestone {...iconProps} />;
  }
}

export function Problems() {
  return (
    <section
      aria-labelledby="problems-heading"
      className="border-y border-[#E4DFD5] bg-[#F1EDE4]/55 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#B87B62]">
                {problemsData.eyebrow}
              </span>
              <h2
                id="problems-heading"
                className="mt-3 font-serif text-3xl leading-[1.2] font-normal tracking-tight text-[#1F2622] sm:text-4xl"
              >
                {problemsData.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#525B55]">
                {problemsData.description}
              </p>
            </div>

            <div className="mt-8 hidden border-l-2 border-[#B87B62]/60 pl-5 lg:block">
              <p className="font-serif text-base italic leading-relaxed text-[#24382E]">
                “Buscar terapia não é sinal de fraqueza, mas uma escolha de cuidado e presença com a sua própria história.”
              </p>
            </div>
          </div>

          {/* Right 4-Point Architectural Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#DFD9CE] bg-[#FCFBF9] sm:grid-cols-2">
              {problemsData.items.map((item, index) => {
                const borderClasses = [
                  index === 0
                    ? "border-b border-[#E4DFD5] sm:border-r"
                    : "",
                  index === 1 ? "border-b border-[#E4DFD5]" : "",
                  index === 2
                    ? "border-b border-[#E4DFD5] sm:border-b-0 sm:border-r"
                    : "",
                ].join(" ");

                return (
                  <div
                    key={item.id}
                    className={`group p-7 sm:p-8 transition-colors duration-300 hover:bg-[#F8F6F1] ${borderClasses}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E7EDE8] transition-colors duration-300 group-hover:bg-[#DCE6DE]">
                        <ProblemIcon name={item.iconName} />
                      </div>
                      <span
                        className="font-serif text-xs italic text-[#9A9488]"
                        aria-hidden="true"
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-xl font-medium text-[#1F2622]">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#525B55]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
