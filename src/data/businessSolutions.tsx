import {
  BarChart3,
  Bot,
  Building2,
  Car,
  MessageSquare,
  PawPrint,
  Receipt,
  ShoppingCart,
  Smartphone,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type BusinessSolutionColor = "vision-tech";

export type BusinessSolution = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  color: BusinessSolutionColor;
  mockupImage: string;
  features: string[];
  highlights: string[];
  icon: LucideIcon;
  externalUrl?: string;
  whatsappMessage: string;
};

export const businessSolutionsPage = {
  title: "Soluções para seu negócio",
  description:
    "Sistemas proprietários da VisionTaubaté, desenvolvidos em nuvem para escalar sua operação com tecnologia de ponta — do atendimento ao financeiro, do ERP geral ao mercado pet.",
  route: "/solucoes",
};

export const businessSolutions: BusinessSolution[] = [
  {
    id: "ativabot",
    name: "Ativabot",
    tagline: "CRM e atendimento multicanal",
    category: "CRM",
    description:
      "Centralize WhatsApp, Instagram e outros canais em um único painel. Gerencie tickets, contatos, funil Kanban, chatbot visual e campanhas com relatórios de produtividade da equipe.",
    color: "vision-tech",
    mockupImage: "/mockups/ativabot-mockup.svg",
    icon: MessageSquare,
    externalUrl: "https://ativabot.com.br/",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Ativabot (CRM) da VisionTaubaté.",
    features: [
      "Painel de tickets com filas e distribuição inteligente",
      "CRM de contatos com importação e exportação CSV",
      "Kanban para acompanhar o funil comercial",
      "Chatbot com construtor visual de fluxos",
      "Campanhas agendadas com acompanhamento de envios",
      "Relatórios e dashboard de produtividade",
    ],
    highlights: [
      "Multicanal unificado",
      "Automação com chatbot",
      "Gestão de equipes e filas",
    ],
  },
  {
    id: "ativaerp",
    name: "AtivaERP",
    tagline: "ERP modular em nuvem",
    category: "ERP",
    description:
      "Gestão empresarial completa e flexível para PMEs. Monte o plano com os módulos que precisa — financeiro, vendas, estoque, contábil e fiscal — com integração nativa entre todas as áreas.",
    color: "vision-tech",
    mockupImage: "/mockups/ativaerp-mockup.svg",
    icon: Building2,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o AtivaERP da VisionTaubaté.",
    features: [
      "Financeiro com fluxo de caixa, conciliação e recorrências",
      "Vendas e compras com fluxos personalizáveis",
      "Estoque com rastreabilidade e visão contábil",
      "Emissão fiscal eletrônica integrada ao pedido",
      "Dashboard executivo com KPIs por área",
      "Multi-empresa com matriz e filiais",
    ],
    highlights: [
      "Módulos sob medida",
      "7 dias de trial gratuito",
      "Fiscal embutido no fluxo",
    ],
  },
  {
    id: "petverse",
    name: "PetVerse",
    tagline: "ERP para o mercado pet",
    category: "ERP Pet",
    description:
      "Plataforma completa para petshops, hotéis pet, clínicas e operações com transporte. Une atendimento, hospedagem, logística e financeiro — com apps dedicados para tutores e motoristas.",
    color: "vision-tech",
    mockupImage: "/mockups/petverse-mockup.svg",
    icon: PawPrint,
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o PetVerse (ERP Pet) da VisionTaubaté.",
    features: [
      "Cadastro de tutores, pets, serviços e fornecedores",
      "Agenda e histórico unificado do pet",
      "Gestão de hospedagem com reservas e pagamentos",
      "App do tutor para acompanhamento e pagamentos",
      "App do motorista para rotas e coleta/entrega",
      "Financeiro orientado a receita e cobranças",
    ],
    highlights: [
      "Ecossistema pet integrado",
      "Apps Tutor e Motorista",
      "Pronto para redes e franquias",
    ],
  },
];

export const businessSolutionIcons = {
  ativabot: [MessageSquare, Users, Bot, BarChart3],
  ativaerp: [Receipt, ShoppingCart, Workflow, Building2],
  petverse: [PawPrint, Smartphone, Car, Users],
} as const;
