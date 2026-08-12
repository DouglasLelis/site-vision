import SegmentNavbar from "@/components/SegmentNavbar";
import WebsiteCreationHero from "@/components/heroes/WebsiteCreationHero";
import WebsiteFeatures from "@/components/WebsiteFeatures";
import WebsiteBonuses from "@/components/WebsiteBonuses";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import {
  useRevealOnScroll,
  useSegmentHashScroll,
} from "@/hooks/useSegmentHashScroll";
import { useEffect } from "react";
import { trackConversion } from "@/utils/tracking";
import { ArrowRight } from "lucide-react";

const WebsiteCreation = () => {
  useRevealOnScroll();
  useSegmentHashScroll();

  useEffect(() => {
    // Registra view da landing page no Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', {
        content_name: 'Landing Page Criação de Sites',
        content_category: 'Tech'
      });
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-background">
      <SegmentNavbar segment="tech" />
      <WebsiteCreationHero />
      <WebsiteFeatures />
      <WebsiteBonuses />
      {/* Reutilizando os componentes de portfólio e depoimentos existentes */}
      <PortfolioPreview />
      <Testimonials segment="tech" />
      
      {/* CTA Final */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Pronto para transformar sua presença digital?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Fale com nossos especialistas no WhatsApp e receba um orçamento sem compromisso em poucos minutos.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento%20para%20cria%C3%A7%C3%A3o%20de%20site!%20Me%20chamo:"
            onClick={() => trackConversion('click_whatsapp_final_cta')}
            className="btn-tech inline-flex items-center justify-center gap-2 group text-lg font-bold shadow-lg shadow-vision-tech/30 hover:shadow-vision-tech/50 transition-all duration-300 px-8 py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com Especialista
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Contact segment="tech" />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default WebsiteCreation;
