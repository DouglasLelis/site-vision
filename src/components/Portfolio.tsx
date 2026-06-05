import { useEffect, useState } from 'react';

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
};

const projects: PortfolioProject[] = [
  {
    title: 'Jornal O Independente',
    year: '2017',
    description: 'Portal de notícias desenvolvido para publicação ágil de conteúdo, organização editorial e melhor experiência de leitura em desktop e mobile.',
    technologies: 'Bootstrap 3, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    image: '/portfolio/mockups/jornal.png',
    imageAlt: 'Projeto Jornal O Independente',
    thumb: '/portfolio/thumbs/jornal_logo.png',
    thumbAlt: 'Logo Jornal O Independente',
    accent: '#6d28d9',
  },
  {
    title: 'Loja Virtual',
    year: '2018',
    description: 'Plataforma white-label de e-commerce com gestão de catálogo, pedidos e pagamentos, criada para escalar operações de vendas online.',
    technologies: 'Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    role: 'Integração com PagSeguro e Mercado Pago.',
    image: '/portfolio/mockups/loja.png',
    imageAlt: 'Projeto Loja Virtual',
    thumb: '/portfolio/thumbs/loja.jpg',
    thumbAlt: 'Thumb Loja Virtual',
    accent: '#db2777',
  },
  {
    title: 'Stella Braga Turismo',
    year: '2019',
    description: 'Site institucional focado em autoridade da marca, apresentação de serviços e geração de contatos qualificados para o segmento de turismo.',
    technologies: 'Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    image: '/portfolio/mockups/stella.png',
    imageAlt: 'Projeto Stella Braga Turismo',
    thumb: '/portfolio/thumbs/stella.jpg',
    thumbAlt: 'Thumb Stella Braga Turismo',
    accent: '#ea580c',
  },
  {
    title: 'Falexpress',
    year: '2020',
    description: 'Guia empresarial com estrutura de busca e categorização, facilitando a descoberta de empresas, serviços e oportunidades comerciais locais.',
    technologies: 'Bootstrap 3, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    image: '/portfolio/mockups/falexpress.png',
    imageAlt: 'Projeto Falexpress',
    thumb: '/portfolio/thumbs/falexpress.jpg',
    thumbAlt: 'Thumb Falexpress',
    accent: '#0d9488',
  },
  {
    title: 'Imoov',
    year: '2022',
    description: 'Aplicação para gestão de elevadores com foco em controle operacional, acompanhamento de rotinas técnicas e centralização das informações.',
    technologies: 'Ionic (Angular 12), Capacitor, Cordova, Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    image: '/portfolio/mockups/imoov.png',
    imageAlt: 'Projeto Imoov',
    thumb: '/portfolio/thumbs/imoov.jpg',
    thumbAlt: 'Thumb Imoov',
    accent: '#0891b2',
  },
  {
    title: 'Credluz',
    year: '2022',
    description: 'Projeto mobile voltado à evolução de produto, com reestruturação de funcionalidades e melhoria da experiência do usuário na nova versão.',
    role: 'Função: Gerente de Projeto para nova versão do App.',
    image: '/portfolio/mockups/credluz.png',
    imageAlt: 'Projeto Credluz',
    thumb: '/portfolio/thumbs/credluz.jpg',
    thumbAlt: 'Thumb Credluz',
    accent: '#2563eb',
  },
  {
    title: 'MedicalBook',
    year: '2023',
    description: 'Plataforma de referência para médicos e profissionais da saúde, reunindo conteúdo técnico e recursos digitais em uma experiência organizada.',
    technologies: 'Flutter 3 (InAppWebView, InAppPurchase), CodeIgniter 4, PostgreSQL.',
    image: '/portfolio/mockups/medicalbook.png',
    imageAlt: 'Projeto MedicalBook',
    thumb: '/portfolio/thumbs/medicalbook.jpg',
    thumbAlt: 'Thumb MedicalBook',
    accent: '#7c3aed',
  },
  {
    title: 'Center Fitness',
    year: '2024',
    description: 'Sistema web para academias com módulos de gestão administrativa, suporte à rotina operacional e otimização de processos internos.',
    technologies: 'Bootstrap 4, HTML5, CSS3, JavaScript, PHP 8, MySQL.',
    image: '/portfolio/mockups/centerfitness.png',
    imageAlt: 'Projeto Center Fitness',
    thumb: '/portfolio/thumbs/centerfitness.jpg',
    thumbAlt: 'Thumb Center Fitness',
    accent: '#be185d',
  },
  {
    title: 'GrabTakker',
    year: '2024',
    description: 'Bot para Telegram com automações e regras de decisão, projetado para acelerar respostas, padronizar fluxos e reduzir tarefas manuais.',
    technologies: 'Python 3 (Flask, Gunicorn, Telegram Bot, Stripe API).',
    image: '/portfolio/mockups/telegram.png',
    imageAlt: 'Projeto GrabTakker',
    thumb: '/portfolio/thumbs/grabtakker.jpg',
    thumbAlt: 'Thumb GrabTakker',
    accent: '#059669',
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-sm text-vision-purple mb-2">Portfólio</p>
          <h2 className="section-header !opacity-100 !animate-none !mb-3">Projetos Realizados</h2>
          <p className="section-subheader !opacity-100 !animate-none !mb-0">
            Conheça alguns trabalhos que desenvolvemos com foco em resultado.
          </p>
        </div>

        <div
          className="overflow-hidden border border-gray-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.title} className="relative w-full shrink-0 p-7 md:p-10 bg-[linear-gradient(145deg,#0f172a_0%,#111827_45%,#1f2937_100%)]">
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
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">Projeto</p>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-1 text-white">
                      {project.title} ({project.year})
                    </h3>
                    <p className="text-white/90 mb-3 max-w-xl">{project.description}</p>
                    {project.technologies && (
                      <p className="text-white/80 mb-2 leading-relaxed max-w-xl">
                        <span className="font-medium text-white">Tecnologias:</span> {project.technologies}
                      </p>
                    )}
                    {project.role && (
                      <p className="text-white/80 max-w-xl">
                        <span className="font-medium text-white">Detalhe:</span> {project.role}
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

        <div className="mt-8 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden border transition-all duration-300 ${
                activeIndex === index
                  ? 'border-vision-purple shadow-md scale-[1.02]'
                  : 'border-gray-300 hover:border-vision-purple/60'
              }`}
              aria-label={`Abrir projeto ${project.title}`}
            >
              <img src={project.thumb} alt={project.thumbAlt} className="w-full h-14 object-cover" />
              {activeIndex === index && (
                <span
                  className="absolute left-0 bottom-0 h-[3px] w-full"
                  style={{ backgroundColor: projects[index].accent }}
                />
              )}
              <span
                className={`absolute inset-0 transition-colors duration-300 ${
                  activeIndex === index ? 'bg-transparent' : 'bg-black/20 hover:bg-black/5'
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
