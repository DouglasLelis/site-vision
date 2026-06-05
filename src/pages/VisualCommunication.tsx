import SegmentNavbar from "@/components/SegmentNavbar";
import Footer from "@/components/Footer";
import { serviceSegments } from "@/data/serviceSegments";
import { segmentBackgroundMedia } from "@/data/segmentBackgroundMedia";
import { segmentPaths } from "@/data/segmentBranding";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const VisualCommunication = () => {
  const segment = serviceSegments.design;

  return (
    <div className="min-h-screen bg-gray-50">
      <SegmentNavbar segment="design" />

      <main className="pt-[88px]">
        <section className="relative overflow-hidden text-white">
          <img
            src={segmentBackgroundMedia.design.poster}
            alt="Tinta colorida em agua representando comunicacao visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={segmentBackgroundMedia.design.poster}
          >
            {segmentBackgroundMedia.design.sources.map((s) => (
              <source key={s.src} src={s.src} type={s.type} />
            ))}
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-vision-pink/20" />
          <div className="relative z-10 container mx-auto px-4 py-20">
            <p className="text-sm font-medium uppercase tracking-wide mb-3 text-vision-pink">
              Comunicação Visual
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {segment.title}
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-white/90">
              {segment.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to={segmentPaths.design}
                className="inline-flex w-fit rounded-md bg-vision-pink text-white px-4 py-2 font-medium hover:bg-vision-pink/90 transition-colors"
              >
                Voltar para Design
              </Link>
              <Link
                to={segmentPaths.tech}
                className="inline-flex w-fit rounded-md border border-white/70 text-white px-4 py-2 font-medium hover:bg-white/10 transition-colors"
              >
                Ver Tech
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segment.services.map((service, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-vision-pink/20"
              >
                <div className="h-12 w-12 rounded-lg bg-vision-pink/10 flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-vision-pink" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <Check size={16} className="text-vision-pink" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisualCommunication;
