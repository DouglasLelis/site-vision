import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  getFeaturedTechProjects,
  techPortfolioTypeLabels,
} from "@/data/techPortfolio";
import { segmentPaths } from "@/data/segmentBranding";
import { PortfolioBrowserFrame } from "@/components/portfolio/PortfolioBrowserFrame";

const PortfolioPreview = () => {
  const projects = getFeaturedTechProjects().slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || projects.length === 0) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [isPaused, projects.length]);

  const active = projects[activeIndex];

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-sm mb-2 text-vision-tech">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 text-white">
            Projetos em destaque
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-400">
            Uma amostra do que desenvolvemos — explore o portfólio completo por
            categoria.
          </p>
        </div>

        {active && (
          <div
            className="max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
              <PortfolioBrowserFrame url={active.url}>
                <img
                  src={active.image}
                  alt={active.imageAlt}
                  className="h-full w-full object-cover object-top"
                />
              </PortfolioBrowserFrame>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex rounded-full bg-vision-tech/10 border border-vision-tech/25 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-vision-tech">
                    {techPortfolioTypeLabels[active.type]}
                  </span>
                  <span className="text-sm text-zinc-500">{active.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {active.title}
                </h3>
                <p className="text-gray-400 mb-4">{active.description}</p>
                {active.technologies && (
                  <p className="text-sm text-zinc-500">
                    <span className="text-zinc-400">Stack: </span>
                    {active.technologies}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (prev) => (prev - 1 + projects.length) % projects.length
                  )
                }
                className="h-10 w-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-vision-tech transition-colors"
                aria-label="Projeto anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index
                        ? "w-8 bg-vision-tech"
                        : "w-2 bg-zinc-600 hover:bg-vision-tech/50"
                    }`}
                    aria-label={`Ver ${project.title}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % projects.length)
                }
                className="h-10 w-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-vision-tech transition-colors"
                aria-label="Próximo projeto"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to={segmentPaths.techPortfolio}
            className="btn-tech inline-flex items-center gap-2 group"
          >
            Ver portfólio completo
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
