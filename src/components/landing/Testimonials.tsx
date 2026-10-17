import { Quote } from "lucide-react";
import { testimonialsData } from "@/data/landing";

/**
 * NOTA IMPORTANTE:
 * Dados fictícios para projeto demonstrativo.
 * Os depoimentos renderizados abaixo são ilustrativos e foram criados
 * exclusivamente para fins de demonstração visual de portfólio.
 */
export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-[#E4DFD5] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#B87B62]">
            {testimonialsData.eyebrow}
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#1F2622] sm:text-4xl"
          >
            {testimonialsData.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#525B55]">
            {testimonialsData.description}
          </p>
        </div>

        {/* 3 Fictional Testimonials Grid (dados fictícios para projeto demonstrativo) */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonialsData.items.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-[#E4DFD5] bg-[#FCFBF9] p-7 sm:p-8"
            >
              <div>
                <Quote
                  className="h-6 w-6 text-[#B87B62]/65"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <blockquote className="mt-5 font-serif text-base italic leading-relaxed text-[#24382E]">
                  “{item.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center justify-between border-t border-[#ECE8DF] pt-4 text-xs text-[#6C756F]">
                <span className="font-medium text-[#1F2622]">
                  — {item.author}, {item.age}
                </span>
                <span>{item.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#6C756F]">
          * {testimonialsData.portfolioDisclaimer}.
        </p>
      </div>
    </section>
  );
}
