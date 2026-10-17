import { Mail, MapPin } from "lucide-react";
import { footerData, getWhatsAppUrl } from "@/data/landing";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/WhatsAppIcon";

export function Footer() {
  return (
    <footer
      aria-label="Rodapé da página"
      className="border-t border-[#DFD9CE] bg-[#F1EDE4] text-[#525B55]"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="inline-flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464] rounded-sm"
            >
              <span className="font-serif text-2xl font-medium text-[#1F2622]">
                {footerData.brandName}
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#B87B62]"
                aria-hidden="true"
              />
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#525B55]">
              {footerData.tagline}
            </p>
            <p className="mt-3 text-xs font-medium text-[#24382E]">
              {footerData.professionalInfo}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F2622]">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerData.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[#1F2622] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464] rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fictional Contact Info Column */}
          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F2622]">
              Canais de Contato (Fictícios)
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#1F2622] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464] rounded-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#5D7464]" />
                  <span>WhatsApp: {footerData.contact.whatsappDisplay}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon
                  className="h-4 w-4 shrink-0 text-[#5D7464]"
                />
                <span>Instagram: {footerData.contact.instagramDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="h-4 w-4 shrink-0 text-[#5D7464]"
                  aria-hidden="true"
                />
                <span>E-mail: {footerData.contact.emailDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-[#6C756F]">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#5D7464]"
                  aria-hidden="true"
                />
                <span>{footerData.contact.addressDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Portfolio Disclaimer */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#DFD9CE] pt-8 text-xs text-[#6C756F] sm:flex-row sm:items-center">
          <p className="font-medium text-[#1F2622]">
            {footerData.portfolioNotice}
          </p>
          <p>
            Em caso de emergência emocional, ligue 188 (CVV — Centro de
            Valorização da Vida).
          </p>
        </div>
      </div>
    </footer>
  );
}
