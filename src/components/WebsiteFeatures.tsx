import { ArrowRight, Code, Layout, Rocket, Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { trackConversion } from "@/utils/tracking";

const features = [
  {
    icon: <Layout className="w-6 h-6 text-vision-tech" />,
    title: "100% Responsivo",
    description: "Seu site perfeitamente adaptado para celulares, tablets e computadores, garantindo a melhor experiência (UX)."
  },
  {
    icon: <Search className="w-6 h-6 text-vision-tech" />,
    title: "Otimização SEO",
    description: "Estrutura avançada preparada para indexação no Google, aumentando suas chances de ser encontrado organicamente."
  },
  {
    icon: <Code className="w-6 h-6 text-vision-tech" />,
    title: "Qualquer tipo de Site",
    description: "Desenvolvemos Landing Pages, Sites Institucionais, E-commerces, Portfólios e Blogs com design exclusivo."
  },
  {
    icon: <Rocket className="w-6 h-6 text-vision-tech" />,
    title: "Alta Performance",
    description: "Sites ultrarrápidos, garantindo pontuação máxima no Google e menos desistências por lentidão."
  }
];

const WebsiteFeatures = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vision-tech/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Por que escolher a VisionTaubaté?
          </h2>
          <p className="text-muted-foreground text-lg">
            Muito além da estética, entregamos soluções focadas em resultados e crescimento digital para sua empresa.
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
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteFeatures;
