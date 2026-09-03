import { useEffect } from "react";
import SegmentNavbar from "@/components/SegmentNavbar";
import { segmentPaths } from "@/data/segmentBranding";
import Footer from "@/components/Footer";
import {
  businessSolutions,
  businessSolutionsPage,
} from "@/data/businessSolutions";
import { segmentBranding } from "@/data/segmentBranding";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const techColors = {
  badge: "bg-vision-tech/10 text-vision-tech",
  accent: "text-vision-tech",
  button: "bg-vision-tech hover:bg-vision-tech/90 text-white",
  border: "border-vision-tech/20",
  gradient: "from-vision-tech/30 via-vision-tech/10 to-transparent",
};

const BusinessSolutionsPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const element = document.getElementById(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <SegmentNavbar segment="tech" />

      <main className="pt-[88px]">
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-vision-tech rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-vision-tech/50 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
            <img
              src={segmentBranding.tech.logos.dark}
              alt="VisionTaubaté Tech"
              className="h-10 md:h-12 mb-8"
            />
            <p className="text-sm font-medium uppercase tracking-[0.2em] mb-3 text-vision-tech">
              {t(segmentBranding.tech.tagline)}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              {t("businessSolutions.title")}
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-gray-400 mb-8">
              {t("businessSolutions.description")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`${segmentPaths.tech}#solucoes`}
                className="inline-flex rounded-md bg-vision-tech text-white px-5 py-2.5 font-medium hover:bg-vision-tech/90 transition-colors"
              >
                {t("businessSolutionsPage.backToTech")}
              </Link>
              <a
                href={`https://wa.me/5512997856012?text=${encodeURIComponent(t("whatsappMessages.saasIntro"))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md border border-vision-tech/50 text-vision-tech px-5 py-2.5 font-medium hover:bg-vision-tech/10 transition-colors"
              >
                {t("businessSolutionsPage.talkToSpecialist")}
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="space-y-24">
            {businessSolutions.map((solution, index) => {
              const Icon = solution.icon;
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={solution.id}
                  id={solution.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${techColors.gradient} rounded-2xl blur-lg opacity-40`}
                    />
                    <div
                      className={`relative rounded-2xl overflow-hidden shadow-xl border ${techColors.border} bg-zinc-900`}
                    >
                      <img
                        src={solution.mockupImage}
                        alt={`Interface do ${solution.name}`}
                        className="w-full aspect-[16/10] object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4 ${techColors.badge}`}
                    >
                      <Icon size={14} />
                      {t(`businessSolutions.solutions.${solution.id}.category`)}
                    </span>
                    <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${techColors.accent}`}>
                      {t(`businessSolutions.solutions.${solution.id}.name`)}
                    </h2>
                    <p className="text-lg font-medium text-gray-500 mb-4">
                      {t(`businessSolutions.solutions.${solution.id}.tagline`)}
                    </p>
                    <p className="text-gray-400 text-lg mb-8">
                      {t(`businessSolutions.solutions.${solution.id}.description`)}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {(t(`businessSolutions.solutions.${solution.id}.features`, { returnObjects: true }) as string[]).map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <Check
                            size={18}
                            className={`${techColors.accent} mt-0.5 flex-shrink-0`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      {solution.externalUrl ? (
                        <a
                          href={solution.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-semibold transition-colors ${techColors.button}`}
                        >
                          {t("businessSolutionsPage.access", { name: solution.name })}
                          <ArrowRight size={18} />
                        </a>
                      ) : null}
                      <a
                        href={`https://wa.me/5512997856012?text=${encodeURIComponent(t(`businessSolutions.solutions.${solution.id}.whatsappMessage`, solution.whatsappMessage))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          solution.externalUrl
                            ? "inline-flex items-center gap-2 rounded-md border border-vision-tech/40 text-vision-tech px-5 py-2.5 font-semibold hover:bg-vision-tech/10 transition-colors"
                            : `inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-semibold transition-colors ${techColors.button}`
                        }
                      >
                        {t("businessSolutionsPage.requestDemo")}
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-t border-zinc-800 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <img
              src={segmentBranding.tech.logos.icon}
              alt=""
              aria-hidden="true"
              className="h-10 w-10 mx-auto mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t("businessSolutionsPage.cta.title")}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              {t("businessSolutionsPage.cta.description")}
            </p>
            <a
              href={`https://wa.me/5512997856012?text=${encodeURIComponent(t("whatsappMessages.saasHelp"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-vision-tech text-white px-6 py-3 font-semibold hover:bg-vision-tech/90 transition-colors"
            >
              {t("businessSolutionsPage.cta.button")}
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessSolutionsPage;
