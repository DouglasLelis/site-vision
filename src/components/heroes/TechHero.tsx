import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { segmentBackgroundMedia } from "@/data/segmentBackgroundMedia";
import { segmentBranding, segmentPaths } from "@/data/segmentBranding";
import { useTranslation } from "react-i18next";

const TechHero = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const media = segmentBackgroundMedia.software;

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
        alt="Equipe de desenvolvimento trabalhando em software"
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
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-vision-tech/20" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-8">
          <div className="flex flex-wrap gap-2">
            {["Tech", "SaaS", "Software"].map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-vision-tech/20 text-vision-tech border border-vision-tech/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("techHero.title1")}{" "}
            <span className="text-vision-tech">{t("techHero.title2")}</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {t("techHero.description")}
          </p>
          <p className="text-sm font-medium uppercase tracking-[0.2em] mb-4 text-vision-tech">
            {t(segmentBranding.tech.tagline)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:"
              className="btn-tech inline-flex items-center justify-center gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("techHero.startProject")}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <Link
              to={segmentPaths.techServicos}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white border border-white/40 bg-white/10 hover:bg-white/20 transition-colors"
            >
              {t("techHero.viewServices")}
              <ArrowRight size={18} />
            </Link>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white border border-white/40 bg-white/10 hover:bg-white/20 transition-colors"
            >
              {t("techHero.meetSaaS")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechHero;
