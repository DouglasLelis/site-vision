import { useEffect, useMemo, useState } from "react";

type PortfolioSegment = "tech" | "design";

type PortfolioProject = {
  title: string;
  year: string;
  description: string;
  technologies?: string;
  role?: string;
  image: string;
  imageAlt: string;
  thumb: string;
  thumbAlt: string;
  accent: string;
  segment: PortfolioSegment;
};

const projects: PortfolioProject[] = [
  {
    title: "Jornal O Independente",
    year: "2017",
    description:
      "Portal de notícias desenvolvido para publicação ágil de conteúdo, organização editorial e melhor experiência de leitura em desktop e mobile.",
    technologies: "Bootstrap 3, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    image: "/portfolio/mockups/jornal.png",
    imageAlt: "Projeto Jornal O Independente",
    thumb: "/portfolio/thumbs/jornal_logo.png",
    thumbAlt: "Logo Jornal O Independente",
    accent: "#1E90FF",
    segment: "tech",
  },
  {
    title: "Loja Virtual",
    year: "2018",
    description:
      "Plataforma white-label de e-commerce com gestão de catálogo, pedidos e pagamentos, criada para escalar operações de vendas online.",
    technologies: "Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    role: "Integração com PagSeguro e Mercado Pago.",
    image: "/portfolio/mockups/loja.png",
    imageAlt: "Projeto Loja Virtual",
    thumb: "/portfolio/thumbs/loja.jpg",
    thumbAlt: "Thumb Loja Virtual",
    accent: "#1E90FF",
    segment: "tech",
  },
  {
    title: "Stella Braga Turismo",
    year: "2019",
    description:
      "Site institucional focado em autoridade da marca, apresentação de serviços e geração de contatos qualificados para o segmento de turismo.",
    technologies: "Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    image: "/portfolio/mockups/stella.png",
    imageAlt: "Projeto Stella Braga Turismo",
    thumb: "/portfolio/thumbs/stella.jpg",
    thumbAlt: "Thumb Stella Braga Turismo",
    accent: "#ea580c",
    segment: "design",
  },
  {
    title: "Falexpress",
    year: "2020",
    description:
      "Guia empresarial com estrutura de busca e categorização, facilitando a descoberta de empresas, serviços e oportunidades comerciais locais.",
    technologies: "Bootstrap 3, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    image: "/portfolio/mockups/falexpress.png",
    imageAlt: "Projeto Falexpress",
    thumb: "/portfolio/thumbs/falexpress.jpg",
    thumbAlt: "Thumb Falexpress",
    accent: "#0d9488",
    segment: "tech",
  },
  {
    title: "Imoov",
    year: "2022",
    description:
      "Aplicação para gestão de elevadores com foco em controle operacional, acompanhamento de rotinas técnicas e centralização das informações.",
    technologies:
      "Ionic (Angular 12), Capacitor, Cordova, Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.",
    image: "/portfolio/mockups/imoov.png",
    imageAlt: "Projeto Imoov",
    thumb: "/portfolio/thumbs/imoov.jpg",
    thumbAlt: "Thumb Imoov",
    accent: "#0891b2",
    segment: "tech",
  },
  {
    title: "Credluz",
    year: "2022",
    description:
      "Projeto mobile voltado à evolução de produto, com reestruturação de funcionalidades e melhoria da experiência do usuário na nova versão.",
    role: "Função: Gerente de Projeto para nova versão do App.",
    image: "/portfolio/mockups/credluz.png",
    imageAlt: "Projeto Credluz",
    thumb: "/portfolio/thumbs/credluz.jpg",
    thumbAlt: "Thumb Credluz",
    accent: "#2563eb",
    segment: "tech",
  },
  {
    title: "MedicalBook",
    year: "2023",
    description:
      "Plataforma de referência para médicos e profissionais da saúde, reunindo conteúdo técnico e recursos digitais em uma experiência organizada.",
    technologies: "Flutter 3 (InAppWebView, InAppPurchase), CodeIgniter 4, PostgreSQL.",
    image: "/portfolio/mockups/medicalbook.png",
    imageAlt: "Projeto MedicalBook",
    thumb: "/portfolio/thumbs/medicalbook.jpg",
    thumbAlt: "Thumb MedicalBook",
    accent: "#7c3aed",
    segment: "tech",
  },
  {
    title: "Center Fitness",
    year: "2024",
    description:
      "Sistema web para academias com módulos de gestão administrativa, suporte à rotina operacional e otimização de processos internos.",
    technologies: "Bootstrap 4, HTML5, CSS3, JavaScript, PHP 8, MySQL.",
    image: "/portfolio/mockups/centerfitness.png",
    imageAlt: "Projeto Center Fitness",
    thumb: "/portfolio/thumbs/centerfitness.jpg",
    thumbAlt: "Thumb Center Fitness",
    accent: "#be185d",
    segment: "tech",
  },
  {
    title: "GrabTakker",
    year: "2024",
    description:
      "Bot para Telegram com automações e regras de decisão, projetado para acelerar respostas, padronizar fluxos e reduzir tarefas manuais.",
    technologies: "Python 3 (Flask, Gunicorn, Telegram Bot, Stripe API).",
    image: "/portfolio/mockups/telegram.png",
    imageAlt: "Projeto GrabTakker",
    thumb: "/portfolio/thumbs/grabtakker.jpg",
    thumbAlt: "Thumb GrabTakker",
    accent: "#059669",
    segment: "tech",
  },
];

type PortfolioProps = {
  segment?: PortfolioSegment;
};

const Portfolio = ({ segment }: PortfolioProps) => {
  const filteredProjects = useMemo(
    () =>
      segment ? projects.filter((p) => p.segment === segment) : projects,
    [segment]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const accentColor = segment === "tech" ? "vision-tech" : "vision-pink";
  const accentClass =
    segment === "tech" ? "text-vision-tech" : "text-vision-pink";
  const borderActive =
    segment === "tech"
      ? "border-vision-tech shadow-md scale-[1.02]"
      : "border-vision-pink shadow-md scale-[1.02]";

  useEffect(() => {
    setActiveIndex(0);
  }, [segment]);

  useEffect(() => {
    if (isPaused || filteredProjects.length === 0) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) =>
        prev === filteredProjects.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, filteredProjects.length]);

  if (filteredProjects.length === 0) return null;

  return (
    <section
      id="portfolio"
      className={`py-24 ${segment === "tech" ? "bg-zinc-950" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p
            className={`uppercase tracking-[0.2em] text-sm mb-2 ${accentClass}`}
          >
            Portfólio
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-3 ${
              segment === "tech" ? "text-white" : "text-vision-900"
            }`}
          >
            Projetos Realizados
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              segment === "tech" ? "text-gray-400" : "text-vision-700"
            }`}
          >
            Conheça alguns trabalhos que desenvolvemos com foco em resultado.
          </p>
        </div>

        <div
          className={`overflow-hidden border shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] ${
            segment === "tech"
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="relative w-full shrink-0 p-7 md:p-10 bg-[linear-gradient(145deg,#0f172a_0%,#111827_45%,#1f2937_100%)]"
              >
                <div
                  className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 blur-3xl opacity-30"
                  style={{ backgroundColor: project.accent }}
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 blur-3xl opacity-20"
                  style={{ backgroundColor: project.accent }}
                />
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="order-2 lg:order-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
                      Projeto
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-1 text-white">
                      {project.title} ({project.year})
                    </h3>
                    <p className="text-white/90 mb-3 max-w-xl">
                      {project.description}
                    </p>
                    {project.technologies && (
                      <p className="text-white/80 mb-2 leading-relaxed max-w-xl">
                        <span className="font-medium text-white">
                          Tecnologias:
                        </span>{" "}
                        {project.technologies}
                      </p>
                    )}
                    {project.role && (
                      <p className="text-white/80 max-w-xl">
                        <span className="font-medium text-white">Detalhe:</span>{" "}
                        {project.role}
                      </p>
                    )}
                  </div>

                  <div className="order-1 lg:order-2 overflow-hidden bg-transparent p-2 lg:p-3">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.015]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 grid gap-3 ${
            filteredProjects.length <= 4
              ? "grid-cols-2 md:grid-cols-4"
              : filteredProjects.length <= 6
                ? "grid-cols-3 md:grid-cols-6"
                : "grid-cols-3 md:grid-cols-5 lg:grid-cols-9"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden border transition-all duration-300 border-gray-300 ${
                activeIndex === index
                  ? borderActive
                  : segment === "tech"
                    ? "hover:border-vision-tech/60"
                    : segment === "design"
                      ? "hover:border-vision-pink/60"
                      : "hover:border-vision-purple/60"
              }`}
              aria-label={`Abrir projeto ${project.title}`}
            >
              <img
                src={project.thumb}
                alt={project.thumbAlt}
                className="w-full h-14 object-cover"
              />
              {activeIndex === index && (
                <span
                  className="absolute left-0 bottom-0 h-[3px] w-full"
                  style={{
                    backgroundColor: filteredProjects[index].accent,
                  }}
                />
              )}
              <span
                className={`absolute inset-0 transition-colors duration-300 ${
                  activeIndex === index
                    ? "bg-transparent"
                    : "bg-black/20 hover:bg-black/5"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
