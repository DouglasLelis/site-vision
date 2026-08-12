import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowDown, CheckCircle2, Search, FileText, Handshake, Rocket, Users, Target, Layout, Smartphone, Code, Bug } from "lucide-react";

const Methodology = () => {
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
              Metodologia VisionTaubaté
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              Do Planejamento à <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-200">
                Excelência na Entrega
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Trabalhamos com um processo estruturado, transparente e focado em reduzir riscos e maximizar resultados para o seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => window.open('http://wa.me/5512997856012?text=Olá!%20Gostaria%20de%20conversar%20sobre%20meu%20projeto', '_blank')}
                size="lg" 
                className="bg-vision-pink hover:bg-vision-pink/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-none"
              >
                Falar com um especialista
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
                onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entender como funciona
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
              Nossa Jornada de Construção
            </h2>
            <p className="text-lg text-gray-600">
              Transformamos ideias em realidade através de etapas claras e bem definidas, garantindo que cada passo seja dado com segurança e propósito.
            </p>
          </motion.div>

          {/* Timeline - Simplificada para Desktop, Vertical para Mobile */}
          <div className="relative">
            {/* Linha conectora (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-vision-purple/20 via-vision-pink/20 to-vision-orange/20 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Análise Inicial", desc: "Entendimento macro do desafio." },
                { step: "02", title: "Proposta", desc: "Alinhamento de escopo e investimento." },
                { step: "03", title: "Discovery & Planejamento", desc: "Aprofundamento técnico e visual." },
                { step: "04", title: "Desenvolvimento", desc: "Execução ágil e entrega contínua." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vision-purple to-vision-pink text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto md:mx-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
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
            <h2 className="text-3xl md:text-4xl font-bold text-vision-900 mb-6">Etapas do Processo</h2>
            <p className="text-lg text-gray-600">Um mergulho profundo em como construímos soluções de valor.</p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-100 rounded-xl px-4 shadow-sm bg-gray-50/50">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">1. Análise Inicial (Overview)</h3>
                    <p className="text-sm text-gray-500 font-normal mt-1">Entendimento estratégico antes da proposta.</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-[4.5rem]">
                <p className="mb-4">Realizamos uma análise inicial sem compromisso para:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Entender o objetivo do seu negócio.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Avaliar a maturidade da ideia e desafios técnicos.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Mapear restrições e preferências tecnológicas.</li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-100">
                  <strong>Nota:</strong> Esta etapa é estratégica e serve como base para a proposta comercial.
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
                    <h3 className="text-xl font-bold text-gray-800">2. Proposta Comercial</h3>
                    <p className="text-sm text-gray-500 font-normal mt-1">Transparência em escopo e investimento.</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-[4.5rem]">
                <p className="mb-4">Com base no overview, apresentamos uma proposta detalhada contendo:</p>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-vision-purple rounded-full" /> Escopo inicial sugerido</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-vision-purple rounded-full" /> Estratégia de execução</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-vision-purple rounded-full" /> Estimativa de prazos</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-vision-purple rounded-full" /> Modelo de investimento</li>
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
                    <h3 className="text-xl font-bold text-gray-800">3. Alinhamento e Decisão</h3>
                    <p className="text-sm text-gray-500 font-normal mt-1">Validação de expectativas.</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-[4.5rem]">
                <p>Nesta fase, ajustamos os ponteiros para garantir que estamos na mesma página. A decisão de seguir é tomada de forma consciente por ambas as partes, com total clareza sobre o que será entregue.</p>
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
                  <Rocket className="w-4 h-4" /> Serviço Estratégico
                </div>
                <h3 className="text-2xl font-bold mb-4">Product Discovery (Opcional)</h3>
                <p className="text-white/90 mb-4">
                  Para projetos complexos, recomendamos o Discovery. Uma fase dedicada a prototipação, validação de hipóteses e definição profunda do MVP antes de escrever uma linha de código.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">✓ Reduz riscos de negócio</li>
                  <li className="flex items-center gap-2">✓ Evita retrabalho no desenvolvimento</li>
                  <li className="flex items-center gap-2">✓ Valida soluções com usuários reais</li>
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
            <h2 className="text-3xl md:text-4xl font-bold text-vision-900 mb-6">Sua Squad Sob Medida</h2>
            <p className="text-lg text-gray-600">Montamos o time ideal para a necessidade do seu projeto.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { role: "Product Manager", icon: Target, desc: "Visão de negócio e priorização." },
              { role: "UX/UI Designer", icon: Layout, desc: "Experiência e interface do usuário." },
              { role: "Desenvolvedores", icon: Code, desc: "Frontend, Backend e Mobile." },
              { role: "QA / Testes", icon: Bug, desc: "Garantia de qualidade e estabilidade." },
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
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.role}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-vision-900 mb-6">Gerenciamento Ágil e Transparente</h2>
              <p className="text-lg text-gray-600 mb-8">
                Utilizamos metodologias ágeis (Scrum/Kanban) para garantir entregas frequentes, visibilidade total e capacidade de adaptação.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Entregas Incrementais</h4>
                    <p className="text-gray-500">Você vê o projeto evoluindo a cada sprint, nada de "caixa preta".</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Comunicação Constante</h4>
                    <p className="text-gray-500">Canais abertos e reportes periódicos para manter todos alinhados.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Compromissos</h2>
            <p className="text-lg text-gray-300">O que você pode esperar ao fechar com a <span className="text-vision-pink font-bold">VisionTaubaté</span>.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Clareza Total", desc: "Você saberá exatamente o que, quando e como será entregue." },
              { title: "Redução de Riscos", desc: "Processos validados para evitar desperdício de tempo e dinheiro." },
              { title: "Decisões via Dados", desc: "Nada de 'achismo'. Estratégia baseada em fatos e métricas." },
              { title: "Foco em Resultado", desc: "Não entregamos apenas código, entregamos solução de negócio." },
              { title: "Visão de Longo Prazo", desc: "Queremos ser parceiros da sua evolução contínua." },
              { title: "Excelência Técnica", desc: "Padrões de qualidade elevados em cada linha de código." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-vision-purple to-vision-pink text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Pronto para tirar sua ideia do papel?</h2>
          <p className="text-xl opacity-90 mb-12">
            Vamos construir algo incrível juntos, com processo, segurança e foco em resultado.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => window.open('http://wa.me/5512997856012?text=Olá!%20Gostaria%20de%20conversar%20sobre%20meu%20projeto', '_blank')}
              size="lg" 
              className="bg-white text-vision-purple hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg"
            >
              Solicitar Contato Comercial
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
              onClick={() => window.open('http://wa.me/5512997856012?text=Olá!%20Gostaria%20de%20conversar%20sobre%20meu%20projeto', '_blank')}
            >
              Dúvidas? Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methodology;
