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
  background: string;
};

const projects: PortfolioProject[] = [
  {
    title: 'Jornal O Independente',
    year: '2017',
    description: 'Portal de notícias.',
    technologies: 'Bootstrap 3, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    image: '/portfolio/mockups/jornal.png',
    imageAlt: 'Projeto Jornal O Independente',
    thumb: '/portfolio/thumbs/jornal_logo.png',
    thumbAlt: 'Logo Jornal O Independente',
    background: 'linear-gradient(45deg, #198754 0%, #198754 10%, #193e87 90%, #193e87 100%)',
  },
  {
    title: 'Loja Virtual',
    year: '2018',
    description: 'Sistema white-label para e-commerce.',
    technologies: 'Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    role: 'Integração com PagSeguro e Mercado Pago.',
    image: '/portfolio/mockups/loja.png',
    imageAlt: 'Projeto Loja Virtual',
    thumb: '/portfolio/thumbs/loja.jpg',
    thumbAlt: 'Thumb Loja Virtual',
    background: 'linear-gradient(45deg, #193e87 0%, #193e87 10%, #bca71e 90%, #bca71e 100%)',
  },
  {
    title: 'Stella Braga Turismo',
    year: '2019',
    description: 'Site institucional.',
    technologies: 'Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    image: '/portfolio/mockups/stella.png',
    imageAlt: 'Projeto Stella Braga Turismo',
    thumb: '/portfolio/thumbs/stella.jpg',
    thumbAlt: 'Thumb Stella Braga Turismo',
    background: 'linear-gradient(45deg, #bca71e 0%, #bca71e 10%, #87193c 90%, #87193c 100%)',
  },
  {
    title: 'Falexpress',
    year: '2020',
    description: 'Guia empresarial.',
    technologies: 'Bootstrap 3, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    image: '/portfolio/mockups/falexpress.png',
    imageAlt: 'Projeto Falexpress',
    thumb: '/portfolio/thumbs/falexpress.jpg',
    thumbAlt: 'Thumb Falexpress',
    background: 'linear-gradient(45deg, #87193c 0%, #87193c 10%, #6d8719 90%, #6d8719 100%)',
  },
  {
    title: 'Imoov',
    year: '2022',
    description: 'Aplicação para gerenciamento de elevadores.',
    technologies: 'Ionic (Angular 12), Capacitor, Cordova, Bootstrap 4, HTML5, CSS3, JavaScript, PHP 7.4, MySQL.',
    image: '/portfolio/mockups/imoov.png',
    imageAlt: 'Projeto Imoov',
    thumb: '/portfolio/thumbs/imoov.jpg',
    thumbAlt: 'Thumb Imoov',
    background: 'linear-gradient(45deg, #6d8719 0%, #6d8719 10%, #ffc107 90%, #ffc107 100%)',
  },
  {
    title: 'Credluz',
    year: '2022',
    description: 'Projeto mobile.',
    role: 'Função: Gerente de Projeto para nova versão do App.',
    image: '/portfolio/mockups/credluz.png',
    imageAlt: 'Projeto Credluz',
    thumb: '/portfolio/thumbs/credluz.jpg',
    thumbAlt: 'Thumb Credluz',
    background: 'linear-gradient(45deg, #ffc107 0%, #ffc107 10%, #0777ff 90%, #0777ff 100%)',
  },
  {
    title: 'MedicalBook',
    year: '2023',
    description: 'Guia para médicos e profissionais da saúde.',
    technologies: 'Flutter 3 (InAppWebView, InAppPurchase), CodeIgniter 4, PostgreSQL.',
    image: '/portfolio/mockups/medicalbook.png',
    imageAlt: 'Projeto MedicalBook',
    thumb: '/portfolio/thumbs/medicalbook.jpg',
    thumbAlt: 'Thumb MedicalBook',
    background: 'linear-gradient(45deg, #0777ff 0%, #0777ff 10%, #193e87 90%, #193e87 100%)',
  },
  {
    title: 'Center Fitness',
    year: '2024',
    description: 'Sistema web de gerenciamento para academias.',
    technologies: 'Bootstrap 4, HTML5, CSS3, JavaScript, PHP 8, MySQL.',
    image: '/portfolio/mockups/centerfitness.png',
    imageAlt: 'Projeto Center Fitness',
    thumb: '/portfolio/thumbs/centerfitness.jpg',
    thumbAlt: 'Thumb Center Fitness',
    background: 'linear-gradient(45deg, #193e87 0%, #193e87 10%, #87197a 90%, #87197a 100%)',
  },
  {
    title: 'GrabTakker',
    year: '2024',
    description: 'Bot para Telegram com automação de tomada de decisão.',
    technologies: 'Python 3 (Flask, Gunicorn, Telegram Bot, Stripe API).',
    image: '/portfolio/mockups/telegram.png',
    imageAlt: 'Projeto GrabTakker',
    thumb: '/portfolio/thumbs/grabtakker.jpg',
    thumbAlt: 'Thumb GrabTakker',
    background: 'linear-gradient(45deg, #87197a 0%, #87197a 10%, #198754 90%, #198754 100%)',
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

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

        <div className="overflow-hidden glass-card border border-vision-purple/10">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.title} className="w-full shrink-0 p-6 md:p-8" style={{ background: project.background }}>
                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-1 text-white">
                      {project.title} ({project.year})
                    </h3>
                    <p className="text-white/90 mb-3">{project.description}</p>
                    {project.technologies && (
                      <p className="text-white/90 mb-2">
                        <span className="font-medium text-white">Tecnologias:</span> {project.technologies}
                      </p>
                    )}
                    {project.role && (
                      <p className="text-white/90">
                        <span className="font-medium text-white">Detalhe:</span> {project.role}
                      </p>
                    )}
                  </div>

                  <div className="order-1 lg:order-2 overflow-hidden bg-transparent">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                  : 'border-gray-200 hover:border-vision-purple/60'
              }`}
              aria-label={`Abrir projeto ${project.title}`}
            >
              <img src={project.thumb} alt={project.thumbAlt} className="w-full h-14 object-cover" />
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
