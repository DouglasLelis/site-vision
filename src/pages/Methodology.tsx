import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowDown, CheckCircle2, Search, FileText, Handshake, Rocket, Users, Target, Layout, Smartphone, Code, Bug } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

const Methodology = () => {
  const { t } = useTranslation();
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <div className="fixed top-0 left-0 right-0 bg-white z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center mt-[88px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-meeting.jpg" 
            alt="Reunião de equipe VisionTaubaté" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-vision-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-vision-900 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center pb-24 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6 text-white">
              {t("methodology.hero.badge")}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              {t("methodology.hero.titlePart1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-200">
                {t("methodology.hero.titlePart2")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("methodology.hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => window.open('http://wa.me/5512997856012?text=Olá!%20Gostaria%20de%20conversar%20sobre%20meu%20projeto', '_blank')}
                size="lg" 
                className="bg-vision-pink hover:bg-vision-pink/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-none"
              >
                {t("methodology.hero.talkToSpecialist")}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
                onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("methodology.hero.understandHowItWorks")}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vision-900 mb-6">
              {t("methodology.overview.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("methodology.overview.description")}
            </p>
          </motion.div>

          {/* Timeline - Simplificada para Desktop, Vertical para Mobile */}
          <div className="relative">
            {/* Linha conectora (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-vision-purple/20 via-vision-pink/20 to-vision-orange/20 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {(t("methodology.overview.steps", { returnObjects: true }) as {title: string, desc: string}[]).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vision-purple to-vision-pink text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto md:mx-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {`0${index + 1}`}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vision-900 mb-6">{t("methodology.detailedSteps.title")}</h2>
            <p className="text-lg text-gray-600">{t("methodology.detailedSteps.description")}</p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-100 rounded-xl px-4 shadow-sm bg-gray-50/50">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{t("methodology.detailedSteps.step1.title")}</h3>
                    <p className="text-sm text-gray-500 font-normal mt-1">{t("methodology.detailedSteps.step1.subtitle")}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-[4.5rem]">
                <p className="mb-4">{t("methodology.detailedSteps.step1.text")}</p>
                <ul className="space-y-2">
                  {(t("methodology.detailedSteps.step1.list", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {item}</li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-100">
                  <Trans i18nKey="methodology.detailedSteps.step1.note">
                    <strong>Nota:</strong> Esta etapa é estratégica e serve como base para a proposta comercial.
                  </Trans>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-100 rounded-xl px-4 shadow-sm bg-gray-50/50">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{t("methodology.detailedSteps.step2.title")}</h3>
                    <p className="text-sm text-gray-500 font-normal mt-1">{t("methodology.detailedSteps.step2.subtitle")}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-[4.5rem]">
                <p className="mb-4">{t("methodology.detailedSteps.step2.text")}</p>
                <ul className="grid md:grid-cols-2 gap-2">
                  {(t("methodology.detailedSteps.step2.list", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><div className="w-2 h-2 bg-vision-purple rounded-full" /> {item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-100 rounded-xl px-4 shadow-sm bg-gray-50/50">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{t("methodology.detailedSteps.step3.title")}</h3>
                    <p className="text-sm text-gray-500 font-normal mt-1">{t("methodology.detailedSteps.step3.subtitle")}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-[4.5rem]">
                <p>{t("methodology.detailedSteps.step3.text")}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Product Discovery Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-vision-purple to-vision-pink rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Rocket className="w-4 h-4" /> {t("methodology.discovery.badge")}
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("methodology.discovery.title")}</h3>
                <p className="text-white/90 mb-4">
                  {t("methodology.discovery.description")}
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  {(t("methodology.discovery.list", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-2">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0">
                <img src="/lovable-uploads/discovery-icon.png" alt="Discovery" className="w-48 hidden md:block opacity-80 mix-blend-overlay" /> 
                {/* Fallback visual element if image not present, keeping structure sound */}
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm md:hidden">
                  <Search className="w-12 h-12" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Squad & Planning */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vision-900 mb-6">{t("methodology.squad.title")}</h2>
            <p className="text-lg text-gray-600">{t("methodology.squad.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Target },
              { icon: Layout },
              { icon: Code },
              { icon: Bug },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 text-vision-purple">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{t(`methodology.squad.roles.${idx}.role`)}</h3>
                <p className="text-sm text-gray-500">{t(`methodology.squad.roles.${idx}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-vision-900 mb-6">{t("methodology.management.title")}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t("methodology.management.description")}
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t("methodology.management.features.0.title")}</h4>
                    <p className="text-gray-500">{t("methodology.management.features.0.desc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t("methodology.management.features.1.title")}</h4>
                    <p className="text-gray-500">{t("methodology.management.features.1.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 relative">
              {/* Abstract Visual Representation of Kanban Board */}
              <div className="grid grid-cols-3 gap-4 opacity-80">
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="bg-white p-3 rounded shadow-sm h-20"></div>
                  <div className="bg-white p-3 rounded shadow-sm h-24"></div>
                </div>
                <div className="space-y-3 pt-8">
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="bg-white p-3 rounded shadow-sm h-32 border-l-4 border-yellow-400"></div>
                </div>
                <div className="space-y-3 pt-4">
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="bg-white p-3 rounded shadow-sm h-24 border-l-4 border-green-500"></div>
                  <div className="bg-white p-3 rounded shadow-sm h-20 border-l-4 border-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-24 bg-vision-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("methodology.commitments.title")}</h2>
            <p className="text-lg text-gray-300">
              <Trans i18nKey="methodology.commitments.subtitle">
                O que você pode esperar ao fechar com a <span className="text-vision-pink font-bold">VisionTaubaté</span>.
              </Trans>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Array.from({ length: 6 }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{t(`methodology.commitments.items.${idx}.title`)}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{t(`methodology.commitments.items.${idx}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-vision-purple to-vision-pink text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">{t("methodology.cta.title")}</h2>
          <p className="text-xl opacity-90 mb-12">
            {t("methodology.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => window.open('http://wa.me/5512997856012?text=Olá!%20Gostaria%20de%20conversar%20sobre%20meu%20projeto', '_blank')}
              size="lg" 
              className="bg-white text-vision-purple hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg"
            >
              {t("methodology.cta.button1")}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
              onClick={() => window.open('http://wa.me/5512997856012?text=Olá!%20Gostaria%20de%20conversar%20sobre%20meu%20projeto', '_blank')}
            >
              {t("methodology.cta.button2")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methodology;
