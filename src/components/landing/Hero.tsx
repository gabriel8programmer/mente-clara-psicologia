import Image from "next/image";
import { ArrowDownRight, ShieldCheck, Video } from "lucide-react";
import { heroData, getWhatsAppUrl } from "@/data/landing";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32"
    >
      {/* Subtle ambient background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-[#E7EDE8]/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#F1EDE4]/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Text & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 animate-fade-up">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#DCE4DE] bg-[#E7EDE8]/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#24382E]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#5D7464]"
                aria-hidden="true"
              />
              <span>{heroData.badge}</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-6 font-serif text-4xl leading-[1.14] font-normal tracking-tight text-[#1F2622] sm:text-5xl lg:text-[3.35rem]"
            >
              Um espaço seguro para{" "}
              <span className="italic font-normal text-[#24382E]">
                você se ouvir, se compreender
              </span>{" "}
              e seguir em frente.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#525B55] sm:text-lg sm:leading-relaxed">
              {heroData.subheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex max-w-[260px] flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#24382E] px-5 py-3 text-sm font-medium text-[#F8F6F1] shadow-[0_8px_24px_-8px_rgba(36,56,46,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B2B23] hover:shadow-[0_12px_28px_-6px_rgba(36,56,46,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24382E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F1]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#C6D8CC]" />
                <span>{heroData.primaryCta}</span>
              </a>

              <a
                href="#atendimentos"
                className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#D5CFC3] bg-[#FCFBF9] px-5 py-3 text-sm font-medium text-[#1F2622] transition-all duration-200 hover:border-[#5D7464] hover:bg-[#F1EDE4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F1]"
              >
                <span>{heroData.secondaryCta}</span>
                <ArrowDownRight
                  className="h-4 w-4 shrink-0 text-[#5D7464]"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Availability note near CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#E4DFD5] pt-5 text-sm text-[#525B55]">
              <div className="inline-flex items-center gap-2 font-medium text-[#24382E]">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5D7464] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5D7464]" />
                </span>
                <span>{heroData.availabilityNote}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#6C756F]">
                <ShieldCheck
                  className="h-4 w-4 text-[#B87B62]"
                  aria-hidden="true"
                />
                <span>Escuta ética, sigilosa e individualizada</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-6 xl:col-span-6 animate-fade-up-delay-1">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Decorative architectural frame offset */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] border border-[#E4DFD5] bg-[#F1EDE4]/60 sm:-inset-4"
              />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#E4DFD5] bg-[#EAE4D8] shadow-[0_20px_50px_-20px_rgba(31,38,34,0.16)]">
                <div className="aspect-[16/11] sm:aspect-[16/10] lg:aspect-[15/11] relative w-full">
                  <Image
                    src="/images/hero-consultorio.jpg"
                    alt="Ambiente acolhedor de consultório de psicologia na Mente Clara, com luz natural, poltronas confortáveis em tom bege e plantas naturais"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

                {/* Subtle editorial caption bar inside image container */}
                <div className="flex flex-col justify-between gap-3 border-t border-[#E4DFD5]/80 bg-[#FCFBF9]/95 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:px-6">
                  <div>
                    <p className="font-serif text-sm font-medium text-[#1F2622]">
                      Um espaço pensado para o seu acolhimento
                    </p>
                    <p className="text-xs text-[#6C756F]">
                      Dra. Mariana Alves • Psicologia Clínica (CRP 00/00000)
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-[#E7EDE8] px-3 py-1 text-xs font-medium text-[#24382E] sm:self-auto">
                    <Video className="h-3.5 w-3.5 text-[#5D7464]" aria-hidden="true" />
                    <span>Presencial & Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
