import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceSegments } from "@/data/serviceSegments";
import { segmentPaths } from "@/data/segmentBranding";

type SegmentServicesCtaProps = {
  segment: "tech" | "design";
};

const SegmentServicesCta = ({ segment }: SegmentServicesCtaProps) => {
  const isTech = segment === "tech";
  const data = isTech ? serviceSegments.software : serviceSegments.design;
  const route = isTech ? segmentPaths.techServicos : segmentPaths.designServicos;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const services = data.services;

  useEffect(() => {
    if (isTech || isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isTech, isPaused, services.length]);

  const goTo = (index: number) => {
    setActiveIndex((index + services.length) % services.length);
  };

  if (isTech) {
    return (
      <section id="servicos" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 bg-vision-tech/10 text-vision-tech">
              Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {data.title}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
              {data.description}
            </p>
            <p className="text-sm mb-8 text-gray-500">
              {data.services.length} serviços especializados disponíveis
            </p>
            <Link
              to={route}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors bg-vision-tech text-white hover:bg-vision-tech/90"
            >
              Ver todos os serviços
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 bg-vision-pink/10 text-vision-pink">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            {data.description}
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg border border-vision-pink/15">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {services.map((service) => (
                <article
                  key={service.title}
                  className="w-full shrink-0 bg-white p-6 md:p-8"
                >
                  <div className="h-12 w-12 rounded-lg bg-vision-pink/10 flex items-center justify-center mb-5">
                    <service.icon size={24} className="text-vision-pink" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-gray-700 text-sm"
                      >
                        <Check size={16} className="text-vision-pink shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 h-10 w-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-vision-pink transition-colors"
            aria-label="Serviço anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 h-10 w-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-vision-pink transition-colors"
            aria-label="Próximo serviço"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-vision-pink"
                    : "w-2 bg-gray-300 hover:bg-vision-pink/50"
                }`}
                aria-label={`Ir para ${service.title}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to={route}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors bg-vision-pink text-white hover:bg-vision-pink/90"
          >
            Ver todos os serviços
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SegmentServicesCta;
