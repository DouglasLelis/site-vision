export type TechPortfolioCategory =
  | "sites"
  | "web-systems"
  | "apps-platforms"
  | "automations";

export type TechPortfolioProjectType =
  | "site"
  | "landing-page"
  | "web-app"
  | "mobile-app"
  | "automation";

export type TechPortfolioProject = {
  id: string;
  title: string;
  year: string;
  category: TechPortfolioCategory;
  description: string;
  technologies?: string;
  role?: string;
  url?: string;
  type: TechPortfolioProjectType;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const techPortfolioCategories: {
  id: TechPortfolioCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "Todos" },
  { id: "sites", label: "Sites & Landing Pages" },
  { id: "web-systems", label: "Sistemas Web" },
  { id: "apps-platforms", label: "Apps & Plataformas" },
  { id: "automations", label: "Automações" },
];

export const techPortfolioTypeLabels: Record<TechPortfolioProjectType, string> = {
  site: "Site",
  "landing-page": "Landing page",
  "web-app": "Sistema web",
  "mobile-app": "App mobile",
  automation: "Automação",
};

const screenshot = (slug: string) =>
  `/portfolio/screenshots/sites/${slug}.jpg`;

export const techPortfolioProjects: TechPortfolioProject[] = [
  // Sites & Landing Pages
  {
    id: "pousada-marina-paraty",
    title: "Pousada Marina Paraty",
    year: "2025",
    category: "sites",
    type: "landing-page",
    url: "https://pousadamarinaparaty.com.br/",
    description:
      "Landing page para hospedagem em Paraty, com foco em conversão, apresentação da pousada e contato direto com o visitante.",
    technologies: "HTML, CSS, JavaScript, design responsivo.",
    image: screenshot("pousada-marina-paraty"),
    imageAlt: "Screenshot do site Pousada Marina Paraty",
    featured: true,
  },
  {
    id: "brexecutive",
    title: "BRExecutive",
    year: "2025",
    category: "sites",
    type: "site",
    url: "https://brexecutive.com.br/",
    description:
      "Site institucional com posicionamento executivo, apresentação de serviços e geração de leads qualificados.",
    technologies: "HTML, CSS, JavaScript, design responsivo.",
    image: screenshot("brexecutive"),
    imageAlt: "Screenshot do site BRExecutive",
    featured: true,
  },
  {
    id: "gestcacambas",
    title: "Gest Caçambas",
    year: "2025",
    category: "sites",
    type: "landing-page",
    url: "https://www.gestcacambas.com.br/",
    description:
      "Landing page para operação de locação de caçambas, com proposta de valor clara e canais de contato rápido.",
    technologies: "HTML, CSS, JavaScript, design responsivo.",
    image: screenshot("gestcacambas"),
    imageAlt: "Screenshot do site Gest Caçambas",
    featured: true,
  },
  {
    id: "stellaturismo",
    title: "Stella Turismo",
    year: "2019",
    category: "sites",
    type: "site",
    url: "https://stellaturismo.com.br/",
    description:
      "Site institucional focado em autoridade da marca, apresentação de serviços e geração de contatos qualificados para o segmento de turismo.",
    technologies: "Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    image: screenshot("stellaturismo"),
    imageAlt: "Screenshot do site Stella Turismo",
    featured: true,
  },
  {
    id: "jfcursoanimal",
    title: "JF Curso Animal",
    year: "2025",
    category: "sites",
    type: "site",
    url: "https://jfcursoanimal.com.br/",
    description:
      "Site para curso e formação no segmento pet, com apresentação de conteúdo, credibilidade e captação de alunos.",
    technologies: "HTML, CSS, JavaScript, design responsivo.",
    image: screenshot("jfcursoanimal"),
    imageAlt: "Screenshot do site JF Curso Animal",
  },
  {
    id: "spartanvale",
    title: "Spartan Vale",
    year: "2025",
    category: "sites",
    type: "site",
    url: "https://spartanvale.com.br/",
    description:
      "Presença digital para marca com foco em impacto visual, informações institucionais e contato comercial.",
    technologies: "HTML, CSS, JavaScript, design responsivo.",
    image: screenshot("spartanvale"),
    imageAlt: "Screenshot do site Spartan Vale",
  },
  {
    id: "bcelv",
    title: "BCELV",
    year: "2025",
    category: "sites",
    type: "landing-page",
    url: "https://bcelv.com.br/",
    description:
      "Landing page objetiva para apresentação de serviços e conversão de visitantes em contatos comerciais.",
    technologies: "HTML, CSS, JavaScript, design responsivo.",
    image: screenshot("bcelv"),
    imageAlt: "Screenshot do site BCELV",
  },
  {
    id: "jornal-o-independente",
    title: "Jornal O Independente",
    year: "2017",
    category: "sites",
    type: "site",
    description:
      "Portal de notícias desenvolvido para publicação ágil de conteúdo, organização editorial e melhor experiência de leitura em desktop e mobile.",
    technologies: "Bootstrap 3, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    image: "/portfolio/mockups/jornal.png",
    imageAlt: "Projeto Jornal O Independente",
    url: "https://jornaloindependente.com.br/",
  },
  {
    id: "falexpress",
    title: "Falexpress",
    year: "2020",
    category: "sites",
    type: "web-app",
    description:
      "Guia empresarial com estrutura de busca e categorização, facilitando a descoberta de empresas, serviços e oportunidades comerciais locais.",
    technologies: "Bootstrap 3, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    image: "/portfolio/mockups/falexpress.png",
    imageAlt: "Projeto Falexpress",
    url: "https://falexpress.com.br/",
  },

  // Sistemas Web
  {
    id: "loja-virtual",
    title: "Loja Virtual",
    year: "2018",
    category: "web-systems",
    type: "web-app",
    description:
      "Plataforma white-label de e-commerce com gestão de catálogo, pedidos e pagamentos, criada para escalar operações de vendas online.",
    technologies: "Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    role: "Integração com PagSeguro e Mercado Pago.",
    image: "/portfolio/mockups/loja.png",
    imageAlt: "Projeto Loja Virtual",
    featured: true,
  },
  {
    id: "center-fitness",
    title: "Center Fitness",
    year: "2024",
    category: "web-systems",
    type: "web-app",
    description:
      "Sistema web para academias com módulos de gestão administrativa, suporte à rotina operacional e otimização de processos internos.",
    technologies: "Bootstrap 4, HTML5, CSS3, JavaScript, PHP 8, MySQL.",
    image: "/portfolio/mockups/centerfitness.png",
    imageAlt: "Projeto Center Fitness",
  },

  // Apps & Plataformas
  {
    id: "imoov",
    title: "Imoov",
    year: "2022",
    category: "apps-platforms",
    type: "mobile-app",
    description:
      "Aplicação para gestão de elevadores com foco em controle operacional, acompanhamento de rotinas técnicas e centralização das informações.",
    technologies:
      "Ionic (Angular 12), Capacitor, Cordova, Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    image: "/portfolio/mockups/imoov.png",
    imageAlt: "Projeto Imoov",
    featured: true,
  },
  {
    id: "credluz",
    title: "Credluz",
    year: "2022",
    category: "apps-platforms",
    type: "mobile-app",
    description:
      "Projeto mobile voltado à evolução de produto, com reestruturação de funcionalidades e melhoria da experiência do usuário na nova versão.",
    role: "Função: Gerente de Projeto para nova versão do App.",
    technologies: "Mobile, gestão de produto.",
    image: "/portfolio/mockups/credluz.png",
    imageAlt: "Projeto Credluz",
  },
  {
    id: "medicalbook",
    title: "MedicalBook",
    year: "2023",
    category: "apps-platforms",
    type: "mobile-app",
    description:
      "Plataforma de referência para médicos e profissionais da saúde, reunindo conteúdo técnico e recursos digitais em uma experiência organizada.",
    technologies: "Flutter 3 (InAppWebView, InAppPurchase), CodeIgniter 4, PostgreSQL.",
    image: "/portfolio/mockups/medicalbook.png",
    imageAlt: "Projeto MedicalBook",
  },

  // Automações
  {
    id: "grabtakker",
    title: "GrabTakker",
    year: "2024",
    category: "automations",
    type: "automation",
    description:
      "Bot para Telegram com automações e regras de decisão, projetado para acelerar respostas, padronizar fluxos e reduzir tarefas manuais.",
    technologies: "Python 3 (Flask, Gunicorn, Telegram Bot, Stripe API).",
    image: "/portfolio/mockups/telegram.png",
    imageAlt: "Projeto GrabTakker",
  },
];

export function getFeaturedTechProjects() {
  return techPortfolioProjects.filter((p) => p.featured);
}

export function getTechProjectsByCategory(category: TechPortfolioCategory | "all") {
  if (category === "all") return techPortfolioProjects;
  return techPortfolioProjects.filter((p) => p.category === category);
}

export function getTechCategoryLabel(category: TechPortfolioCategory) {
  return techPortfolioCategories.find((c) => c.id === category)?.label ?? category;
}
