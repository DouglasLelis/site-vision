
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={heroRef} className="min-h-screen flex items-center transition-opacity duration-1000 opacity-0 bg-gradient-to-br from-white via-gray-50 to-white pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="flex space-x-2 mb-4">
                <span className="inline-block px-3 py-1 bg-vision-purple/10 text-vision-purple rounded-full text-sm font-medium reveal reveal-delay-1">
                  Software
                </span>
                <span className="inline-block px-3 py-1 bg-vision-pink/10 text-vision-pink rounded-full text-sm font-medium reveal reveal-delay-2">
                  Design
                </span>
                <span className="inline-block px-3 py-1 bg-vision-orange/10 text-vision-orange rounded-full text-sm font-medium reveal reveal-delay-3">
                  Marketing
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight reveal reveal-delay-2">
                Transformando ideias em <span className="text-vision-purple">soluções digitais</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-xl reveal reveal-delay-3">
                Somos uma empresa completa de tecnologia e comunicação, desenvolvendo projetos personalizados para impulsionar sua presença digital.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                Inicie seu projeto
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#software" className="btn-secondary flex items-center justify-center">
                Conheça nossos serviços
              </a>
            </div>
          </div>
          <div className="relative reveal reveal-delay-5">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-vision-pink to-vision-purple rounded-2xl blur opacity-20 animate-pulse"></div>
            <div className="relative glass-card rounded-2xl shadow-xl overflow-hidden p-6 lg:p-8">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vision-pink to-vision-purple"></div>
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/7108e1bc-214b-405f-9473-d17e028c6b97.png" 
                  alt="VisionTaubaté Logo" 
                  className="h-16"
                />
              </div>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {color: "bg-vision-purple/20", border: "border-vision-purple/30"},
                    {color: "bg-vision-pink/20", border: "border-vision-pink/30"},
                    {color: "bg-vision-orange/20", border: "border-vision-orange/30"}
                  ].map((style, i) => (
                    <div key={i} className={`h-24 ${style.color} rounded-lg p-3 flex flex-col justify-between border ${style.border}`}>
                      <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                      <div className={`h-6 w-8 ${style.color} rounded-md border ${style.border}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
