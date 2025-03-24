
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
    <div ref={heroRef} className="min-h-screen flex items-center transition-opacity duration-1000 opacity-0 bg-gradient-to-br from-white via-vision-50 to-white pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-vision-100 text-vision-700 rounded-full text-sm font-medium mb-4 reveal reveal-delay-1">
                Software House
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vision-900 leading-tight reveal reveal-delay-2">
                Transformando ideias em <span className="text-vision-600">soluções digitais</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-xl reveal reveal-delay-3">
                Desenvolvemos softwares personalizados e soluções tecnológicas inovadoras para impulsionar seu negócio.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                Inicie seu projeto
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center">
                Conheça nossos serviços
              </a>
            </div>
          </div>
          <div className="relative reveal reveal-delay-5">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-vision-300 to-vision-600 rounded-2xl blur opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-6 lg:p-8">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vision-400 to-vision-600"></div>
              <div className="grid gap-6">
                <div className="h-12 w-12 rounded-xl bg-vision-100 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-md bg-vision-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-gray-100 rounded-lg p-3 flex flex-col justify-between">
                      <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                      <div className="h-6 w-8 bg-vision-200 rounded-md"></div>
                    </div>
                  ))}
                </div>
                <div className="bg-vision-50 p-4 rounded-lg flex gap-3 items-center">
                  <div className="h-8 w-8 rounded-full bg-vision-200 flex-shrink-0"></div>
                  <div className="space-y-1 flex-grow">
                    <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                  </div>
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
