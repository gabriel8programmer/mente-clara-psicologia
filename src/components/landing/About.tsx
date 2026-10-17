import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutData, getWhatsAppUrl } from "@/data/landing";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="border-t border-[#E4DFD5] bg-[#F1EDE4]/45 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait Image Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Subtle warm terracotta / sage architectural accent */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.75rem] border border-[#D8D1C4] bg-[#E7EDE8]/70"
              />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#E4DFD5] bg-[#E9E3D8] shadow-[0_18px_40px_-20px_rgba(31,38,34,0.16)]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/dra-mariana-alves.jpg"
                    alt="Retrato da Dra. Mariana Alves, psicóloga clínica da Mente Clara Psicologia, vestindo blazer verde sálvia em seu consultório"
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 440px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Professional badge overlay */}
                <div className="border-t border-[#E4DFD5] bg-[#FCFBF9] px-5 py-3.5">
                  <p className="font-serif text-base font-medium text-[#1F2622]">
                    {aboutData.name}
                  </p>
                  <p className="text-xs font-medium text-[#5D7464]">
                    {aboutData.credentials}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Credentials Column */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#B87B62]">
              {aboutData.eyebrow}
            </span>

            <h2
              id="about-heading"
              className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#1F2622] sm:text-4xl"
            >
              {aboutData.name}
            </h2>

            <p className="mt-2 text-sm font-medium tracking-wide text-[#5D7464]">
              {aboutData.credentials}
            </p>

            <p className="mt-6 font-serif text-lg leading-relaxed text-[#24382E] sm:text-xl">
              {aboutData.summary}
            </p>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#525B55]">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Key Credentials Grid */}
            <ul
              aria-label="Informações de atuação profissional"
              className="mt-8 grid grid-cols-1 gap-3 border-y border-[#DFD9CE] py-6 sm:grid-cols-2"
            >
              {aboutData.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-[#1F2622]"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#5D7464]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={getWhatsAppUrl(
                  "Olá, Dra. Mariana! Gostaria de conversar sobre agendamento de sessão."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-[#24382E] px-6 py-3.5 text-sm font-medium text-[#F8F6F1] transition-all duration-200 hover:bg-[#1B2B23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24382E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F1]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#C6D8CC]" />
                <span>Agendar uma conversa</span>
              </a>

              <p className="text-xs text-[#6C756F]">
                Escuta pautada pelo Código de Ética Profissional do Psicólogo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
