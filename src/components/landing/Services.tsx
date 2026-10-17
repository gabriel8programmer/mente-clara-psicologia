import { UserCheck, Video, Lightbulb, ArrowUpRight, Check } from "lucide-react";
import { servicesData, getWhatsAppUrl, type ServiceItem } from "@/data/landing";

function ServiceIcon({ name }: { name: ServiceItem["iconName"] }) {
  const iconProps = {
    className: "h-5 w-5 text-[#24382E]",
    strokeWidth: 1.7,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "user-check":
      return <UserCheck {...iconProps} />;
    case "video":
      return <Video {...iconProps} />;
    case "lightbulb":
      return <Lightbulb {...iconProps} />;
  }
}

export function Services() {
  return (
    <section
      id="atendimentos"
      aria-labelledby="services-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#5D7464]">
            {servicesData.eyebrow}
          </span>
          <h2
            id="services-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#1F2622] sm:text-4xl"
          >
            {servicesData.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#525B55]">
            {servicesData.description}
          </p>
        </div>

        {/* 3 Services Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {servicesData.items.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#E4DFD5] bg-[#FCFBF9] p-7 transition-all duration-300 hover:border-[#C5D1C8] hover:shadow-[0_14px_34px_-18px_rgba(31,38,34,0.12)]"
            >
              <div>
                {/* Top row: Icon & Modality tag */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7EDE8] transition-colors group-hover:bg-[#D7E2DA]">
                    <ServiceIcon name={service.iconName} />
                  </div>
                  <span className="rounded-full border border-[#E4DFD5] bg-[#F8F6F1] px-3 py-1 text-xs font-medium text-[#525B55]">
                    {service.modality}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 font-serif text-2xl font-normal text-[#1F2622]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525B55]">
                  {service.description}
                </p>

                {/* Subtle highlights list */}
                <ul className="mt-5 space-y-2 border-t border-[#ECE8DF] pt-4">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-[#6C756F]"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-[#5D7464]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Discreet CTA */}
              <div className="mt-7 pt-2">
                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#24382E] transition-colors hover:text-[#B87B62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FCFBF9] rounded-sm"
                >
                  <span>{service.ctaText}</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
