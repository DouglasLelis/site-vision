import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { segmentBackgroundMedia } from "@/data/segmentBackgroundMedia";
import { segmentPaths } from "@/data/segmentBranding";

const DesignHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const media = segmentBackgroundMedia.design;

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

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center transition-opacity duration-1000 opacity-0 pt-16 overflow-hidden"
    >
      <img
        src={media.poster}
        alt="Designer criando material de comunicação visual"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={media.poster}
      >
        {media.sources.map((s) => (
          <source key={s.src} src={s.src} type={s.type} />
        ))}
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-vision-pink/20" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-8">
          <div className="flex flex-wrap gap-2">
            {["Comunicação Visual", "Branding", "Design"].map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Marcas que se destacam com{" "}
            <span className="text-vision-pink">Comunicação Visual</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Criamos identidades e materiais visuais estratégicos para fortalecer
            seu posicionamento e conectar sua marca ao público certo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5512981999857&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inicie seu projeto
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <Link
              to={segmentPaths.designServicos}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white border border-white/40 bg-white/10 hover:bg-white/20 transition-colors"
            >
              Ver serviços de comunicação visual
              <ArrowRight size={18} />
            </Link>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white border border-white/40 bg-white/10 hover:bg-white/20 transition-colors"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignHero;
