import { Code, FileText, Layout, MessageSquare, Monitor, Palette, PenTool, Settings, Smartphone, Zap, type LucideIcon } from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export type ServiceSegment = {
  title: string;
  description: string;
  color: "vision-purple" | "vision-pink";
  route: string;
  services: ServiceItem[];
};

export const serviceSegments: Record<"software" | "design", ServiceSegment> = {
  software: {
    title: "Desenvolvimento de Software",
    description:
      "Criamos soluções tecnológicas personalizadas para impulsionar seu negócio no ambiente digital.",
    color: "vision-purple",
    route: "/segmentos/desenvolvimento-de-software",
    services: [
      {
        title: "Desenvolvimento Web",
        description: "Criamos websites e aplicações web personalizadas, responsivas e de alto desempenho.",
        icon: Monitor,
        features: ["Sites institucionais", "E-commerce", "Sistemas web", "Portais corporativos", "Integrações API"],
      },
      {
        title: "Aplicativos Mobile",
        description: "Desenvolvemos aplicativos intuitivos e funcionais para iOS e Android.",
        icon: Smartphone,
        features: ["Apps nativos", "Apps híbridos", "UI/UX design", "Manutenção", "Notificações push"],
      },
      {
        title: "Software Personalizado",
        description: "Soluções de software sob medida para atender às necessidades específicas do seu negócio.",
        icon: Code,
        features: ["Automação", "CRM", "ERP", "Integração de sistemas", "Business Intelligence"],
      },
      {
        title: "Consultoria Técnica",
        description: "Assessoria especializada em tecnologia e desenvolvimento de software.",
        icon: Settings,
        features: ["Arquitetura", "Segurança", "Soluções cloud", "DevOps", "Migração de sistemas"],
      },
      {
        title: "AtivaBot",
        description: "Sistema completo de atendimento que integra WhatsApp, IA e gestão de equipes.",
        icon: MessageSquare,
        features: ["Respostas automáticas IA", "Integração WhatsApp", "Gestão de equipes", "Relatórios detalhados", "Fluxos personalizados"],
      },
    ],
  },
  design: {
    title: "Comunicação Visual",
    description: "Criamos sua identidade visual e materiais gráficos que transmitem os valores da sua marca.",
    color: "vision-pink",
    route: "/segmentos/comunicacao-visual",
    services: [
      {
        title: "Identidade Visual",
        description: "Criação de logos e elementos visuais que representam a essência da sua marca.",
        icon: Zap,
        features: ["Criação de logo", "Paleta de cores", "Tipografia", "Diretrizes da marca", "Manual de identidade"],
      },
      {
        title: "Criação de Fachadas",
        description: "Desenvolvemos fachadas empresariais impactantes que destacam sua marca e atraem clientes.",
        icon: Layout,
        features: ["Letreiros personalizados", "Placas de identificação", "Sinalização externa", "Revestimentos visuais"],
      },
      {
        title: "Design Gráfico",
        description: "Desenvolvimento de materiais gráficos para impressão e mídias digitais.",
        icon: PenTool,
        features: ["Folders", "Cartões de visita", "Banners", "Papelaria", "Catálogos"],
      },
      {
        title: "UI/UX Design",
        description: "Designs modernos e experiências de usuário intuitivas que encantam seus clientes.",
        icon: Layout,
        features: ["Prototipagem", "Design system", "User testing", "Redesign", "Wireframes"],
      },
      {
        title: "Materiais Impressos",
        description: "Produção de materiais impressos de alta qualidade com acabamento profissional.",
        icon: FileText,
        features: ["Revistas", "Livros", "Embalagens", "Displays", "Adesivos personalizados"],
      },
      {
        title: "Design para Redes Sociais",
        description: "Criação de artes específicas para cada plataforma de mídia social.",
        icon: Palette,
        features: ["Posts", "Stories", "Capas", "Destaques", "Templates personalizados"],
      },
    ],
  },
};
