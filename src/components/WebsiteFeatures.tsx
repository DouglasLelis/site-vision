import { ArrowRight, Code, Layout, Rocket, Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { trackConversion } from "@/utils/tracking";
import { useTranslation } from "react-i18next";

const features = [
  {
    icon: <Layout className="w-6 h-6 text-vision-tech" />
  },
  {
    icon: <Search className="w-6 h-6 text-vision-tech" />
  },
  {
    icon: <Code className="w-6 h-6 text-vision-tech" />
  },
  {
    icon: <Rocket className="w-6 h-6 text-vision-tech" />
  }
];

const WebsiteFeatures = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vision-tech/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("websiteFeatures.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("websiteFeatures.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-vision-tech/50 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="mb-6 p-4 rounded-xl bg-secondary inline-block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t(`websiteFeatures.list.${index}.title`)}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`websiteFeatures.list.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteFeatures;
