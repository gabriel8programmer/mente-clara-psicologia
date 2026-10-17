"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navigationLinks, getWhatsAppUrl } from "@/data/landing";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#E4DFD5] shadow-[0_2px_20px_-10px_rgba(31,38,34,0.06)]"
          : "bg-[#F8F6F1]/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <a
          href="#inicio"
          className="group inline-flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F6F1] rounded-sm"
          aria-label="Mente Clara Psicologia — Voltar ao início"
        >
          <span className="font-serif text-2xl font-medium tracking-tight text-[#1F2622] transition-colors group-hover:text-[#24382E]">
            Mente Clara
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#B87B62]" aria-hidden="true" />
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-[#5D7464] sm:inline">
            Psicologia
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex md:items-center md:gap-7 lg:gap-9"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#525B55] transition-colors hover:text-[#1F2622] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F6F1] rounded-sm py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:items-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#24382E] px-5 py-2.5 text-sm font-medium text-[#F8F6F1] transition-all duration-200 hover:bg-[#1B2B23] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24382E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F1]"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#C6D8CC]" />
            <span>Agendar conversa</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E4DFD5] bg-[#FCFBF9] text-[#1F2622] transition-colors hover:bg-[#F1EDE4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464] md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="border-t border-[#E4DFD5] bg-[#FCFBF9] px-5 pt-4 pb-6 shadow-lg md:hidden"
        >
          <ul className="flex flex-col space-y-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-[#1F2622] transition-colors hover:bg-[#F1EDE4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 border-t border-[#E4DFD5] pt-5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#24382E] px-6 py-3.5 text-base font-medium text-[#F8F6F1] transition-colors hover:bg-[#1B2B23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24382E] focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#C6D8CC]" />
              <span>Agendar conversa</span>
            </a>
            <p className="mt-3 text-center text-xs text-[#6C756F]">
              Atendimento online e presencial • Adultos
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
