
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { segmentBackgroundMedia } from '@/data/segmentBackgroundMedia';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const autoSlideDelay = 12000;

  const slides = [
    {
      tags: [
        { label: 'Tech', className: 'bg-vision-tech/20 text-vision-tech' },
        { label: 'Design', className: 'bg-vision-pink/10 text-vision-pink' },
        { label: 'Marketing', className: 'bg-vision-orange/10 text-vision-orange' },
      ],
      title: (
        <>
          Transformando ideias em <span className="text-vision-tech">Soluções Digitais</span>
        </>
      ),
      description:
        'Somos uma empresa completa de tecnologia e comunicação, desenvolvendo projetos personalizados para impulsionar sua presença digital.',
      segmentPath: '/segmentos/desenvolvimento-de-software',
      segmentButtonLabel: 'Conhecer Desenvolvimento de Software',
      accentColor: 'vision-tech',
      cardGradient: 'from-vision-tech to-black',
      ...segmentBackgroundMedia.software,
      mediaAlt: 'Equipe de desenvolvimento trabalhando em software',
    },
    {
      tags: [
        { label: 'Comunicação Visual', className: 'bg-vision-pink/10 text-vision-pink' },
        { label: 'Branding', className: 'bg-vision-orange/10 text-vision-orange' },
        { label: 'Conteúdo', className: 'bg-vision-purple/10 text-vision-purple' },
      ],
      title: (
        <>
          Marcas que se destacam com <span className="text-vision-pink">Comunicação Visual</span>
        </>
      ),
      description:
        'Criamos identidades e materiais visuais estratégicos para fortalecer seu posicionamento e conectar sua marca ao público certo.',
      segmentPath: '/segmentos/comunicacao-visual',
      segmentButtonLabel: 'Conhecer Comunicação Visual',
      accentColor: 'vision-pink',
      cardGradient: 'from-vision-orange to-vision-pink',
      ...segmentBackgroundMedia.design,
      mediaAlt: 'Designer criando material de comunicacao visual',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, autoSlideDelay);

    return () => clearTimeout(timeout);
  }, [activeSlide, slides.length, autoSlideDelay]);

  const currentSlide = slides[activeSlide];

  const goToPreviousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center transition-opacity duration-1000 opacity-0 pt-16 overflow-hidden">
      <img
        src={currentSlide.poster}
        alt={currentSlide.mediaAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        key={currentSlide.sources.map((s) => s.src).join('|')}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={currentSlide.poster}
      >
        {currentSlide.sources.map((s) => (
          <source key={s.src} src={s.src} type={s.type} />
        ))}
      </video>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

      <div className="relative z-10 container mx-auto xs:my-4 px-4 md:px-6">
        <div className="max-w-4xl space-y-8">
          <div>
            <div className="flex space-x-2 mb-4">
              {currentSlide.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight reveal reveal-delay-2">
              {currentSlide.title}
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl reveal reveal-delay-3">
              {currentSlide.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-4">
            <a href="https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:" className="btn-primary flex items-center justify-center gap-2 group"
            target="_blank">
              Inicie seu projeto
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link to={currentSlide.segmentPath} className="btn-secondary flex items-center justify-center gap-2 bg-white/15 text-white border border-white/40 hover:bg-white/25">
              {currentSlide.segmentButtonLabel}
              <ArrowRight size={18} />
            </Link>
            <a href="#services" className="btn-secondary flex items-center justify-center bg-white/15 text-white border border-white/40 hover:bg-white/25">
              Conheça nossos serviços
            </a>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={goToPreviousSlide}
              className="h-10 w-10 rounded-full border border-white/40 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Slide anterior"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goToNextSlide}
              className="h-10 w-10 rounded-full border border-white/40 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Proximo slide"
            >
              <ArrowRight size={18} />
            </button>
            <div className="flex items-center gap-2 ml-2">
              {slides.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index
                      ? `w-8 ${currentSlide.accentColor === 'vision-pink' ? 'bg-vision-pink' : 'bg-vision-tech'}`
                      : 'w-2.5 bg-white/60'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
