
import { Link } from "react-router-dom";
import { serviceSegments } from "@/data/serviceSegments";

const Services = () => {
  const softwareSegment = serviceSegments.software;
  const designSegment = serviceSegments.design;

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-header">Nossos Serviços</h2>
          <p className="section-subheader">
            Escolha o segmento ideal para o momento da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article
            id="software"
            className="relative overflow-hidden rounded-2xl min-h-[420px] shadow-xl"
          >
            <img
              src="/hero-meeting.jpg"
              alt="Equipe de tecnologia em reunião"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-vision-purple/90 via-vision-purple/80 to-vision-pink/70" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 text-white">
              <span className="inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
                Tecnologia
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{softwareSegment.title}</h3>
              <p className="text-white/90 mb-7 max-w-xl">
                {softwareSegment.description}
              </p>
              <Link
                to={softwareSegment.route}
                className="inline-flex w-fit items-center justify-center rounded-md px-5 py-2.5 font-semibold transition-colors bg-white text-vision-purple hover:bg-white/90"
              >
                Ver Serviços de Tecnologia
              </Link>
            </div>
          </article>

          <article
            id="design"
            className="relative overflow-hidden rounded-2xl min-h-[420px] shadow-xl"
          >
            <img
              src="/portfolio/mockups/stella.png"
              alt="Peça de comunicação visual desenvolvida pela VisionTaubaté"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-vision-pink/90 via-vision-pink/80 to-vision-orange/70" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 text-white">
              <span className="inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
                Comunicação Visual
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{designSegment.title}</h3>
              <p className="text-white/90 mb-7 max-w-xl">
                {designSegment.description}
              </p>
              <Link
                to={designSegment.route}
                className="inline-flex w-fit items-center justify-center rounded-md px-5 py-2.5 font-semibold transition-colors bg-white text-vision-pink hover:bg-white/90"
              >
                Ver Serviços de Comunicação Visual
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Services;
