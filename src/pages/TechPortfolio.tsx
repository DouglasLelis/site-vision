import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SegmentNavbar from "@/components/SegmentNavbar";
import Footer from "@/components/Footer";
import { PortfolioCategoryFilter } from "@/components/portfolio/PortfolioCategoryFilter";
import { PortfolioProjectCard } from "@/components/portfolio/PortfolioProjectCard";
import {
  getTechCategoryLabel,
  getTechProjectsByCategory,
  techPortfolioCategories,
  techPortfolioProjects,
  type TechPortfolioCategory,
} from "@/data/techPortfolio";
import { segmentBranding, segmentPaths } from "@/data/segmentBranding";
import { useTranslation } from "react-i18next";

const validCategories = techPortfolioCategories
  .map((c) => c.id)
  .filter((id) => id !== "all") as TechPortfolioCategory[];

const TechPortfolio = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<
    TechPortfolioCategory | "all"
  >("all");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (validCategories.includes(hash as TechPortfolioCategory)) {
      setActiveCategory(hash as TechPortfolioCategory);
    }
  }, []);

  const counts = useMemo(() => {
    const result: Record<TechPortfolioCategory | "all", number> = {
      all: techPortfolioProjects.length,
      sites: 0,
      "web-systems": 0,
      "apps-platforms": 0,
      automations: 0,
    };
    for (const project of techPortfolioProjects) {
      result[project.category] += 1;
    }
    return result;
  }, []);

  const filteredProjects = useMemo(
    () => getTechProjectsByCategory(activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = (category: TechPortfolioCategory | "all") => {
    setActiveCategory(category);
    if (category === "all") {
      window.history.replaceState(null, "", segmentPaths.techPortfolio);
    } else {
      window.history.replaceState(
        null,
        "",
        `${segmentPaths.techPortfolio}#${category}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SegmentNavbar segment="tech" />

      <main className="pt-[88px]">
        <section className="relative overflow-hidden text-white border-b border-zinc-800">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-vision-tech rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <p className="text-sm font-medium uppercase tracking-[0.2em] mb-3 text-vision-tech">
              {t(segmentBranding.tech.tagline)}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("techPortfolioPage.hero.title")}</h1>
            <p className="max-w-2xl text-lg text-gray-400 mb-6">
              {t("techPortfolioPage.hero.description")}
            </p>
            <p className="text-sm text-zinc-500">
              {t("techPortfolioPage.hero.stats", { projects: techPortfolioProjects.length, categories: techPortfolioCategories.length - 1 })}
            </p>
            <div className="mt-8">
              <Link
                to={segmentPaths.tech}
                className="inline-flex rounded-md border border-vision-tech/50 text-vision-tech px-5 py-2.5 font-medium hover:bg-vision-tech/10 transition-colors"
              >
                {t("techPortfolioPage.hero.backToTech")}
              </Link>
            </div>
          </div>
        </section>

        <section className="sticky top-[72px] z-40 border-b border-zinc-800 bg-black/90 backdrop-blur-md py-4">
          <div className="container mx-auto px-4 md:px-6">
            <PortfolioCategoryFilter
              active={activeCategory}
              onChange={handleCategoryChange}
              counts={counts}
            />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            {activeCategory !== "all" && (
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {t(`techPortfolioCategories.${activeCategory}`, getTechCategoryLabel(activeCategory))}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <PortfolioProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("techPortfolioPage.cta.title")}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              {t("techPortfolioPage.cta.description")}
            </p>
            <a
              href={`https://wa.me/5512997856012?text=${encodeURIComponent(t("whatsappMessages.techPortfolio"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-vision-tech text-white px-6 py-3 font-semibold hover:bg-vision-tech/90 transition-colors"
            >
              {t("techPortfolioPage.cta.button")}
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechPortfolio;
