import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { trackConversion } from "@/utils/tracking";

const WebsiteCreationHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) observer.observe(heroElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
    };
  }, []);

  const handleCTAClick = () => {
    // Registra o evento de conversão
    trackConversion('click_whatsapp_criacao_sites');
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center transition-opacity duration-1000 opacity-0 pt-16 overflow-hidden bg-background"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-vision-tech/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-vision-tech/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl space-y-8">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-vision-tech/10 text-vision-tech border border-vision-tech/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vision-tech opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-vision-tech"></span>
                </span>
                Alta Conversão
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Tenha um site que <span className="text-vision-tech">vende 24h</span> por dia.
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Desenvolvemos sites profissionais, rápidos e otimizados para o Google. Transforme visitantes em clientes reais para o seu negócio.
            </p>
            
            <ul className="space-y-3 text-muted-foreground">
              {['Design Moderno e Exclusivo', 'Otimizado para Celular', 'Pronto para Campanhas (Google/Meta)', 'Suporte Técnico Humanizado'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-vision-tech w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento%20para%20cria%C3%A7%C3%A3o%20de%20site!%20Me%20chamo:"
                onClick={handleCTAClick}
                className="btn-tech inline-flex items-center justify-center gap-2 group text-lg font-bold shadow-[0_0_20px_rgba(45,190,204,0.3)] hover:shadow-[0_0_30px_rgba(45,190,204,0.5)] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento Agora
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative perspective-1000">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Website Mockup" 
                className="w-full h-auto object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCreationHero;
