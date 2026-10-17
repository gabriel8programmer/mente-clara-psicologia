import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mente-clara-psicologia.vercel.app"
  ),
  title: "Mente Clara Psicologia | Psicoterapia e Atendimento Psicológico",
  description:
    "Atendimento psicológico acolhedor para adultos, disponível presencialmente e online.",
  keywords: [
    "psicologia clínica",
    "psicoterapia individual",
    "terapia online",
    "psicóloga para adultos",
    "orientação psicológica",
    "saúde emocional",
    "autoconhecimento",
  ],
  authors: [{ name: "Mente Clara Psicologia" }],
  openGraph: {
    title: "Mente Clara Psicologia | Psicoterapia e Atendimento Psicológico",
    description:
      "Atendimento psicológico acolhedor para adultos, disponível presencialmente e online.",
    type: "website",
    locale: "pt_BR",
    siteName: "Mente Clara Psicologia",
    images: [
      {
        url: "/images/hero-consultorio.jpg",
        width: 1200,
        height: 675,
        alt: "Consultório acolhedor da Mente Clara Psicologia com luz natural e poltronas confortáveis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mente Clara Psicologia | Psicoterapia e Atendimento Psicológico",
    description:
      "Atendimento psicológico acolhedor para adultos, disponível presencialmente e online.",
    images: ["/images/hero-consultorio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F6F1] text-[#1F2622] selection:bg-[#D7E2DA] selection:text-[#1B2B23]">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#24382E] focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg focus:outline-none"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
