import {
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Globe,
  Clock,
} from "lucide-react";
import { benefitsData, type BenefitItem } from "@/data/landing";

function BenefitIcon({ name }: { name: BenefitItem["iconName"] }) {
  const iconProps = {
    className: "h-5 w-5 text-[#24382E]",
    strokeWidth: 1.65,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "heart-handshake":
      return <HeartHandshake {...iconProps} />;
    case "sparkles":
      return <Sparkles {...iconProps} />;
    case "shield-check":
      return <ShieldCheck {...iconProps} />;
    case "globe":
      return <Globe {...iconProps} />;
    case "clock":
      return <Clock {...iconProps} />;
  }
}

export function Benefits() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="border-t border-[#E4DFD5] bg-[#E7EDE8]/45 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Section Title Column */}
          <div className="lg:col-span-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#5D7464]">
              {benefitsData.eyebrow}
            </span>
            <h2
              id="benefits-heading"
              className="mt-3 font-serif text-3xl leading-[1.2] font-normal tracking-tight text-[#1F2622] sm:text-4xl"
            >
              {benefitsData.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#525B55]">
              {benefitsData.description}
            </p>
          </div>

          {/* 5 Pillars Editorial Grid */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-[#D7E0D9] rounded-3xl border border-[#D4DFD7] bg-[#FCFBF9] px-6 py-2 sm:px-9">
              {benefitsData.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E7EDE8]">
                    <BenefitIcon name={item.iconName} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#1F2622]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#525B55]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
