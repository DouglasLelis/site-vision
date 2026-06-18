import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  techPortfolioTypeLabels,
  type TechPortfolioProject,
} from "@/data/techPortfolio";
import { PortfolioBrowserFrame } from "./PortfolioBrowserFrame";

type PortfolioProjectCardProps = {
  project: TechPortfolioProject;
  index?: number;
};

export function PortfolioProjectCard({
  project,
  index = 0,
}: PortfolioProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-vision-tech/40 hover:shadow-[0_0_40px_-12px_rgba(30,144,255,0.35)] transition-all duration-300"
    >
      <div className="p-4 md:p-5">
        <PortfolioBrowserFrame url={project.url}>
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </PortfolioBrowserFrame>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 md:px-6 md:pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex rounded-full bg-vision-tech/10 border border-vision-tech/25 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-vision-tech">
            {techPortfolioTypeLabels[project.type]}
          </span>
          <span className="text-xs text-zinc-500">{project.year}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {project.technologies && (
          <p className="text-xs text-zinc-500 mb-4 line-clamp-2">
            <span className="text-zinc-400 font-medium">Stack: </span>
            {project.technologies}
          </p>
        )}

        {project.role && (
          <p className="text-xs text-zinc-500 mb-4">{project.role}</p>
        )}

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-vision-tech hover:text-vision-tech/80 transition-colors mt-auto"
          >
            Visitar projeto
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
