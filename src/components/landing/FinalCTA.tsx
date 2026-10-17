import { finalCtaData, getWhatsAppUrl } from "@/data/landing";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function FinalCTA() {
  return (
    <section
      id="contato"
      aria-labelledby="final-cta-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#24382E] px-6 py-16 text-center text-[#F8F6F1] shadow-[0_24px_60px_-24px_rgba(36,56,46,0.45)] sm:px-14 sm:py-20">
          {/* Subtle decorative organic circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#314A3D]/60 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#B87B62]/15 blur-2xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-block rounded-full border border-[#415C4E] bg-[#2D4539] px-4 py-1 text-xs font-medium tracking-wider uppercase text-[#D5E2D9]">
              Acolhimento e escuta
            </span>

            <h2
              id="final-cta-heading"
              className="mt-6 font-serif text-3xl leading-[1.2] font-normal tracking-tight text-[#F8F6F1] sm:text-4xl lg:text-[2.65rem]"
            >
              {finalCtaData.headline}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#D0DDD4] sm:text-lg">
              {finalCtaData.subtext}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F8F6F1] px-8 py-4 text-base font-semibold text-[#1F2622] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8F6F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#24382E]"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#24382E]" />
                <span>{finalCtaData.buttonText}</span>
              </a>

              <p className="mt-4 text-xs text-[#A8BCB0]">
                {finalCtaData.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
