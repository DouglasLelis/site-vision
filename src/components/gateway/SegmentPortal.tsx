import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { segmentBranding } from "@/data/segmentBranding";
import { segmentBackgroundMedia } from "@/data/segmentBackgroundMedia";

type SegmentPortalProps = {
  segment: "tech" | "design";
  delay?: number;
};

const portalConfig = {
  tech: {
    title: "VisionTaubaté Tech",
    subtitle: "Software, SaaS e consultoria técnica",
    description:
      "Desenvolvimento sob medida e soluções próprias para escalar seu negócio.",
    tagline: segmentBranding.tech.tagline,
    to: segmentBranding.tech.homePath,
    media: segmentBackgroundMedia.software,
    tags: ["Ativabot", "AtivaERP", "PetVerse"],
    borderHover: "hover:border-vision-tech/60 hover:shadow-vision-tech/20",
    overlay: "from-black/85 via-black/65 to-vision-tech/35",
    tagStyle: "bg-vision-tech/20 text-vision-tech border-vision-tech/30",
    textAccent: "text-vision-tech",
    bgAccent: "bg-vision-tech",
  },
  design: {
    title: "Comunicação Visual",
    subtitle: "Gráfica, branding e identidade de marca",
    description:
      "Identidade visual estratégica e materiais gráficos que fortalecem sua marca.",
    tagline: segmentBranding.design.tagline,
    to: segmentBranding.design.homePath,
    media: segmentBackgroundMedia.design,
    tags: ["Branding", "Design gráfico", "Identidade visual"],
    borderHover: "hover:border-vision-pink/60 hover:shadow-vision-pink/20",
    overlay: "from-black/85 via-black/65 to-vision-pink/35",
    tagStyle: "bg-vision-pink/20 text-vision-pink border-vision-pink/30",
    textAccent: "text-vision-pink",
    bgAccent: "bg-vision-pink",
  },
};

const SegmentPortal = ({ segment, delay = 0 }: SegmentPortalProps) => {
  const config = portalConfig[segment];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="h-full"
    >
      <Link
        to={config.to}
        aria-label={`Entrar no segmento ${config.title}`}
        className={`group relative flex flex-col justify-between overflow-hidden h-full min-h-[220px] md:min-h-[320px] p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/10 transition-all duration-500 md:hover:scale-[1.02] hover:shadow-2xl ${config.borderHover}`}
      >
        <img
          src={config.media.poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={config.media.poster}
        >
          {config.media.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${config.overlay} transition-opacity duration-500 group-hover:opacity-95`}
        />

        <div className="relative z-10">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">
            {config.title}
          </h2>
          <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium mb-1 md:mb-2">
            {config.subtitle}
          </p>
          <p className="text-white/70 text-md md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
            {config.description}
          </p>
          {config.tagline && (
            <p
              className={`mt-2 md:mt-3 text-[10px] sm:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] ${config.textAccent}`}
            >
              {config.tagline}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
            {config.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex rounded-full border px-2.5 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-medium ${config.tagStyle}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 mt-3 md:mt-6 text-white font-medium text-sm">
          <span>Explorar segmento</span>
          <ArrowRight
            size={18}
            className={`transition-transform group-hover:translate-x-1 ${config.textAccent}`}
          />
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${config.bgAccent} z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
        />
      </Link>
    </motion.div>
  );
};

export default SegmentPortal;
