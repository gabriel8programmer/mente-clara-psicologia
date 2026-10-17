# Mente Clara Psicologia — Landing Page

Landing page institucional e focada em conversão para a clínica fictícia **Mente Clara Psicologia**, desenvolvida como peça de portfólio de Web Design e Desenvolvimento Frontend.

> **Nota:** Este é um projeto fictício desenvolvido exclusivamente para fins de demonstração em portfólio. Nomes, registros profissionais (CRP 00/00000), relatos e dados de contato são ilustrativos.

## Stack Tecnológica

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Tipografia (`next/font/google`):** `Playfair Display` (títulos editoriais) + `Manrope` (leitura limpa e contemporânea)
- **Ícones:** `lucide-react` + SVG customizado acessível

## Direção Visual

- **Conceito:** Acolhimento, serenidade, confiança e proximidade humana, fugindo da estética hospitalar fria.
- **Paleta de Cores:**
  - Fundo principal: Off-white / Linho suave (`#F8F6F1`)
  - Superfícies secundárias: Areia suave (`#F1EDE4`) e Alabastro (`#FCFBF9`)
  - Verde Sálvia (`#5D7464` / `#E7EDE8`) e Verde Floresta Escuro (`#24382E`)
  - Detalhes pontuais em Terracota suave (`#B87B62`)
  - Texto principal em Carvão suave (`#1F2622`)

## Estrutura de Componentes

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    icons/
      WhatsAppIcon.tsx
    landing/
      Header.tsx
      Hero.tsx
      Problems.tsx
      Services.tsx
      About.tsx
      HowItWorks.tsx
      Benefits.tsx
      Testimonials.tsx
      FAQ.tsx
      FinalCTA.tsx
      Footer.tsx
  data/
    landing.ts
```

## Executando Localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Executar checagem de lint
npm run lint

# Gerar build de produção
npm run build
```
