import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import {
  businessSolutions,
  businessSolutionsPage,
} from "@/data/businessSolutions";
import { segmentBranding } from "@/data/segmentBranding";
import { useTranslation } from "react-i18next";

const techColors = {
  badge: "bg-vision-tech/10 text-vision-tech",
  accent: "text-vision-tech",
  button: "bg-vision-tech hover:bg-vision-tech/90 text-white",
  border: "border-vision-tech/20 hover:border-vision-tech/40",
  icon: "bg-vision-tech/10 text-vision-tech",
};

const BusinessSolutions = () => {
  const { t } = useTranslation();
  return (
    <section id="solucoes" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <img
            src={segmentBranding.tech.logos.icon}
            alt=""
            aria-hidden="true"
            className="h-12 w-12 mx-auto mb-6"
          />
          <p className="text-sm font-medium uppercase tracking-[0.2em] mb-4 text-vision-tech">
            {t(segmentBranding.tech.tagline)}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-white opacity-100 animate-fade-in">
            {t("businessSolutions.pageTitle")}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 opacity-100 animate-fade-in">
            {t("businessSolutions.pageDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {businessSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.id}
                className={`reveal reveal-delay-${index + 1} group bg-zinc-900 rounded-2xl border shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-vision-tech/10 ${techColors.border}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                  <img
                    src={solution.mockupImage}
                    alt={`Mockup do ${solution.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${techColors.badge}`}
                    >
                      <Icon size={14} />
                      {t(`businessSolutions.solutions.${solution.id}.category`)}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className={`text-2xl font-bold mb-1 ${techColors.accent}`}>
                    {t(`businessSolutions.solutions.${solution.id}.name`)}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                    {t(`businessSolutions.solutions.${solution.id}.tagline`)}
                  </p>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {t(`businessSolutions.solutions.${solution.id}.description`)}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {(t(`businessSolutions.solutions.${solution.id}.highlights`, { returnObjects: true }) as string[]).map((highlight: string) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check size={16} className={techColors.accent} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {solution.externalUrl ? (
                      <a
                        href={solution.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${techColors.button}`}
                      >
                        {t(`businessSolutions.solutions.${solution.id}.platform`)}
                        <ArrowRight size={16} />
                      </a>
                    ) : (
                      <a
                        href={`https://wa.me/5512997856012?text=${encodeURIComponent(t(`businessSolutions.solutions.${solution.id}.whatsappMessage`, solution.whatsappMessage))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${techColors.button}`}
                      >
                        {t(`businessSolutions.solutions.${solution.id}.demo`)}
                        <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12 reveal">
          <Link
            to={businessSolutionsPage.route}
            className="btn-tech inline-flex items-center gap-2 group"
          >
            {t("businessSolutions.seeAll")}
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

export default BusinessSolutions;
