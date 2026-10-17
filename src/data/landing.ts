export interface NavItem {
  label: string;
  href: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  iconName: "wind" | "compass" | "users" | "milestone";
}

export interface ServiceItem {
  id: string;
  title: string;
  modality: string;
  description: string;
  highlights: string[];
  ctaText: string;
  whatsappMessage: string;
  iconName: "user-check" | "video" | "lightbulb";
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: "heart-handshake" | "sparkles" | "shield-check" | "globe" | "clock";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  age: string;
  context: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Número fictício para demonstração de portfólio
const WHATSAPP_NUMBER = "5511999990000";

export function getWhatsAppUrl(
  customMessage = "Olá! Gostaria de agendar uma conversa inicial na Mente Clara Psicologia."
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
}

export const navigationLinks: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const heroData = {
  badge: "Psicologia Clínica para Adultos",
  headline:
    "Um espaço seguro para você se ouvir, se compreender e seguir em frente.",
  subheadline:
    "Um espaço seguro para compreender suas emoções, enfrentar desafios e construir relações mais saudáveis consigo e com os outros.",
  primaryCta: "Agendar uma conversa",
  secondaryCta: "Conhecer os atendimentos",
  availabilityNote: "Atendimento online e presencial",
  locationNote: "Consultório em ambiente reservado e sessões por videochamada",
};

export const problemsData = {
  eyebrow: "Quando buscar apoio",
  title: "Nem sempre precisamos enfrentar tudo sozinhos.",
  description:
    "Momentos de sobrecarga, mudanças inesperadas e questionamentos internos fazem parte da trajetória humana. O acompanhamento psicológico oferece um espaço de escuta qualificada e livre de julgamentos para que você possa organizar sentimentos, elaborar vivências e encontrar caminhos mais conscientes.",
  items: [
    {
      id: "ansiedade-sobrecarga",
      title: "Ansiedade e sobrecarga",
      description:
        "Quando a mente parece não desacelerar, o cansaço se acumula e as exigências da rotina começam a pesar mais do que deveriam.",
      iconName: "wind",
    },
    {
      id: "autoconhecimento",
      title: "Autoconhecimento",
      description:
        "Compreender seus próprios padrões, limites, valores e necessidades emocionais para viver com mais autenticidade e clareza.",
      iconName: "compass",
    },
    {
      id: "relacionamentos",
      title: "Relacionamentos",
      description:
        "Espaço para refletir sobre vínculos afetivos, familiares ou profissionais, fortalecendo o diálogo e a construção de limites saudáveis.",
      iconName: "users",
    },
    {
      id: "mudancas-decisoes",
      title: "Mudanças e decisões importantes",
      description:
        "Acolhimento em fases de transição de carreira, recomeços, perdas ou escolhas que despertam insegurança e dúvidas.",
      iconName: "milestone",
    },
  ] satisfies ProblemItem[],
};

export const servicesData = {
  eyebrow: "Modalidades de cuidado",
  title: "Como podemos ajudar",
  description:
    "Cada pessoa possui uma história única. Por isso, os atendimentos são conduzidos de forma personalizada, respeitando o seu momento e o seu ritmo.",
  items: [
    {
      id: "psicoterapia-individual",
      title: "Psicoterapia individual",
      modality: "Presencial ou Online",
      description:
        "Acompanhamento psicológico contínuo voltado à compreensão aprofundada das suas emoções, história de vida e desafios atuais em um ambiente seguro.",
      highlights: [
        "Sessões semanais de 50 minutos",
        "Escuta acolhedora e individualizada",
      ],
      ctaText: "Conversar sobre psicoterapia",
      whatsappMessage:
        "Olá! Gostaria de saber mais sobre o acompanhamento em Psicoterapia Individual.",
      iconName: "user-check",
    },
    {
      id: "terapia-online",
      title: "Terapia online",
      modality: "Videochamada segura",
      description:
        "Atendimento por videochamada com a mesma qualidade, ética e proximidade do encontro presencial, oferecendo praticidade e privacidade onde você estiver.",
      highlights: [
        "Para brasileiros no Brasil ou exterior",
        "Flexibilidade sem tempo de deslocamento",
      ],
      ctaText: "Saber mais sobre o online",
      whatsappMessage:
        "Olá! Gostaria de saber como funciona o atendimento na modalidade de Terapia Online.",
      iconName: "video",
    },
    {
      id: "orientacao-psicologica",
      title: "Orientação psicológica",
      modality: "Acompanhamento focado",
      description:
        "Encontros voltados para situações pontuais, momentos de transição profissional ou tomadas de decisão que pedem maior clareza emocional.",
      highlights: [
        "Foco em demandas específicas",
        "Construção de repertório e reflexão",
      ],
      ctaText: "Agendar orientação",
      whatsappMessage:
        "Olá! Gostaria de conversar sobre a modalidade de Orientação Psicológica.",
      iconName: "lightbulb",
    },
  ] satisfies ServiceItem[],
};

export const aboutData = {
  eyebrow: "Quem conduz o atendimento",
  name: "Dra. Mariana Alves",
  credentials: "Psicóloga — CRP 00/00000",
  summary:
    "Psicóloga clínica com atuação voltada ao atendimento de adultos, utilizando uma abordagem acolhedora e baseada na compreensão individual de cada paciente.",
  paragraphs: [
    "Acredito que a psicoterapia não é um lugar de respostas prontas, mas um espaço de construção conjunta. Meu trabalho consiste em caminhar ao seu lado para que você possa olhar para a própria história com mais gentileza, clareza e autonomia.",
    "Ao longo da prática clínica, dedico-me a oferecer uma escuta atenta, ética e humana — livre de pressa ou fórmulas genéricas — para pessoas que desejam lidar melhor com suas inquietações emocionais e construir uma rotina com mais sentido.",
  ],
  highlights: [
    "Psicóloga — CRP 00/00000",
    "Atendimento de adultos",
    "Psicoterapia individual",
    "Atendimento online e presencial",
  ],
};

export const howItWorksData = {
  eyebrow: "Primeiros passos",
  title: "Como funciona o início do acompanhamento",
  description:
    "Iniciar a terapia deve ser um processo simples e tranquilo. Veja como damos os primeiros passos:",
  steps: [
    {
      number: "01",
      title: "1. Entre em contato",
      description:
        "Você envia uma mensagem pelo WhatsApp no momento em que se sentir confortável, sem burocracia.",
    },
    {
      number: "02",
      title: "2. Conversamos inicialmente",
      description:
        "Esclarecemos suas dúvidas sobre o funcionamento das sessões, disponibilidade de horários, valores e formato (online ou presencial).",
    },
    {
      number: "03",
      title: "3. Iniciamos o acompanhamento",
      description:
        "Após a definição do melhor dia e horário para a sua rotina, realizamos a primeira sessão e iniciamos o processo.",
    },
  ] satisfies StepItem[],
};

export const benefitsData = {
  eyebrow: "Nossos pilares",
  title: "Um espaço pensado para que você se sinta à vontade",
  description:
    "Mais do que técnica, o vínculo terapêutico se constrói com presença, respeito ao seu tempo e cuidado em cada detalhe.",
  items: [
    {
      id: "individualizado",
      title: "Atendimento individualizado",
      description:
        "Cada processo é único. As sessões respeitam sua singularidade, seu ritmo e sua história de vida.",
      iconName: "heart-handshake",
    },
    {
      id: "ambiente-acolhedor",
      title: "Ambiente acolhedor",
      description:
        "Consultório silencioso e confortável, planejado para transmitir calma, privacidade e bem-estar.",
      iconName: "sparkles",
    },
    {
      id: "sigilo-etica",
      title: "Sigilo e ética profissional",
      description:
        "Absoluta confidencialidade em todas as etapas, seguindo rigorosamente o Código de Ética Profissional.",
      iconName: "shield-check",
    },
    {
      id: "atendimento-online",
      title: "Atendimento online",
      description:
        "Sessões por videochamada em ambiente digital seguro para quem busca comodidade ou mora em outra cidade.",
      iconName: "globe",
    },
    {
      id: "horarios-flexiveis",
      title: "Horários flexíveis",
      description:
        "Opções de agenda pensadas para conciliar o cuidado com a saúde emocional e a rotina de trabalho.",
      iconName: "clock",
    },
  ] satisfies BenefitItem[],
};

/**
 * IMPORTANTE:
 * Dados fictícios para projeto demonstrativo de portfólio.
 * Estes relatos foram criados exclusivamente para compor o layout demonstrativo.
 */
export const testimonialsData = {
  eyebrow: "Relatos da jornada",
  title: "Experiências de quem escolheu olhar para si",
  description:
    "Depoimentos ilustrativos sobre a importância de contar com um espaço seguro de escuta e reflexão.",
  portfolioDisclaimer: "Relatos fictícios para demonstração de portfólio",
  items: [
    {
      id: "depoimento-1",
      quote:
        "O processo me ajudou a entender melhor algumas situações que eu vinha enfrentando há bastante tempo. Ter um espaço semanal onde posso falar sem receio fez muita diferença na minha rotina.",
      author: "Ana",
      age: "34 anos",
      context: "Atendimento online",
    },
    {
      id: "depoimento-2",
      quote:
        "Eu tinha receio de começar terapia por achar que não saberia o que dizer. Desde a primeira conversa me senti muito acolhido e respeitado no meu próprio tempo.",
      author: "Lucas",
      age: "41 anos",
      context: "Atendimento presencial",
    },
    {
      id: "depoimento-3",
      quote:
        "Buscar acompanhamento durante um momento de transição profissional me trouxe mais clareza para organizar meus pensamentos e estabelecer limites mais saudáveis no dia a dia.",
      author: "Helena",
      age: "29 anos",
      context: "Atendimento online",
    },
  ] satisfies TestimonialItem[],
};

export const faqData = {
  eyebrow: "Tire suas dúvidas",
  title: "Perguntas frequentes",
  description:
    "Reunimos as principais informações para quem está pensando em dar o primeiro passo.",
  items: [
    {
      id: "primeira-sessao",
      question: "Como funciona a primeira sessão?",
      answer:
        "A primeira sessão é um momento de acolhimento e conhecimento mútuo. Conversaremos sobre o que motivou sua busca pela terapia, suas expectativas e como o acompanhamento pode caminhar, sem pressa ou roteiros engessados.",
    },
    {
      id: "atendimento-online",
      question: "O atendimento pode ser online?",
      answer:
        "Sim. Os atendimentos online acontecem por videochamada em plataforma segura e seguem os mesmos princípios éticos, de sigilo e qualidade do atendimento presencial. Basta estar em um local reservado com boa conexão à internet.",
    },
    {
      id: "duracao-sessao",
      question: "Quanto tempo dura uma sessão?",
      answer:
        "Cada sessão tem duração aproximada de 50 minutos, tempo pensado para que possamos trabalhar os temas do encontro com calma e profundidade.",
    },
    {
      id: "frequencia-encontros",
      question: "Com que frequência acontecem os encontros?",
      answer:
        "Geralmente as sessões são realizadas uma vez por semana, em dia e horário fixos combinados previamente. Essa regularidade é fundamental para a construção do vínculo e continuidade do processo.",
    },
    {
      id: "como-agendar",
      question: "Como faço para agendar?",
      answer:
        "Basta clicar em qualquer botão de 'Agendar uma conversa' nesta página para enviar uma mensagem pelo WhatsApp. Por lá, verificamos os horários disponíveis e esclarecemos eventuais dúvidas.",
    },
    {
      id: "sigilo",
      question: "O atendimento é sigiloso?",
      answer:
        "Sim, totalmente. O sigilo é um dever ético fundamental da Psicologia. Tudo o que é compartilhado durante as sessões permanece estritamente confidencial.",
    },
  ] satisfies FAQItem[],
};

export const finalCtaData = {
  headline: "Você não precisa ter todas as respostas para começar.",
  subtext: "O primeiro passo pode ser simplesmente conversar.",
  buttonText: "Agendar uma conversa",
  note: "Resposta rápida em horário comercial • Sem compromisso inicial",
};

export const footerData = {
  brandName: "Mente Clara Psicologia",
  tagline:
    "Atendimento psicológico humano, acolhedor e individualizado para adultos.",
  professionalInfo: "Dra. Mariana Alves • Psicóloga Clínica • CRP 00/00000",
  contact: {
    whatsappDisplay: "(11) 99999-0000",
    instagramDisplay: "@menteclarapsi.ficticio",
    emailDisplay: "contato@menteclarapsicologia.com.br",
    addressDisplay: "Av. Paulista, 0000 — Sala 82, Bela Vista • São Paulo, SP (Endereço fictício)",
  },
  links: [
    { label: "Início", href: "#inicio" },
    { label: "Atendimentos", href: "#atendimentos" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ] satisfies NavItem[],
  portfolioNotice: "Projeto fictício desenvolvido para fins de portfólio.",
};
