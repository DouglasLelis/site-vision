export const SITE_NAME = "VisionTaubaté";
export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? "https://visiontaubate.com.br";
export const DEFAULT_OG_IMAGE = "/lovable-uploads/logodeitada.png";
export const TECH_OG_IMAGE = "/brand/tech/logo_visiontaubate_tech.png";
export const CONTACT_EMAIL = "comercial@visiontaubate.com.br";

export type SeoEntry = {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  priority: number;
  changefreq: "weekly" | "monthly";
};

export const seoPages: SeoEntry[] = [
  {
    path: "/",
    title: "VisionTaubaté – Tecnologia e Comunicação Visual",
    description:
      "Tecnologia e comunicação visual em Taubaté. Escolha entre soluções digitais (Tech) ou identidade visual (Design).",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    path: "/tech",
    title: "VisionTaubaté Tech – Soluções Digitais",
    description:
      "Desenvolvimento de software, plataformas SaaS e consultoria técnica para impulsionar seu negócio no ambiente digital.",
    ogImage: TECH_OG_IMAGE,
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: "/tech/servicos",
    title: "Desenvolvimento de Software",
    description:
      "Criamos soluções tecnológicas personalizadas para impulsionar seu negócio no ambiente digital.",
    ogImage: TECH_OG_IMAGE,
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/tech/solucoes",
    title: "Soluções para seu negócio",
    description:
      "Sistemas proprietários da VisionTaubaté, desenvolvidos em nuvem para escalar sua operação com tecnologia de ponta.",
    ogImage: TECH_OG_IMAGE,
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/tech/portfolio",
    title: "Portfólio Tech – VisionTaubaté",
    description:
      "Sites, sistemas web, apps e automações desenvolvidos pela VisionTaubaté. Conheça nossos projetos de tecnologia.",
    ogImage: TECH_OG_IMAGE,
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/design",
    title: "Comunicação Visual – VisionTaubaté",
    description:
      "Criamos identidades e materiais visuais estratégicos para fortalecer seu posicionamento e conectar sua marca ao público certo.",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: "/design/servicos",
    title: "Comunicação Visual",
    description:
      "Criamos sua identidade visual e materiais gráficos que transmitem os valores da sua marca.",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/sobre",
    title: "Sobre a VisionTaubaté",
    description:
      "Tecnologia com Visão, Inovação com Propósito. Conheça nossa história, valores e equipe em Taubaté.",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/metodologia",
    title: "Metodologia VisionTaubaté",
    description:
      "Trabalhamos com um processo estruturado, transparente e focado em reduzir riscos e maximizar resultados para o seu negócio.",
    priority: 0.7,
    changefreq: "monthly",
  },
];

export const notFoundSeo = {
  title: "Página não encontrada",
  description: "A página que você procura não existe ou foi movida.",
  noindex: true,
};

export function getPageSeo(pathname: string): SeoEntry | null {
  return seoPages.find((page) => page.path === pathname) ?? null;
}

export function formatDocumentTitle(title: string, path: string): string {
  if (path === "/") return title;
  return `${title} | ${SITE_NAME}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function absoluteImageUrl(imagePath: string): string {
  return `${SITE_URL}${imagePath}`;
}
