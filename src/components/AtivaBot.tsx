
import { MessageSquare, Users, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const AtivaBot = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100');
                el.classList.add('translate-y-0');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "Integração WhatsApp",
      description: "Conecte o WhatsApp da sua empresa para atendimento unificado e eficiente.",
      icon: <MessageSquare size={24} className="text-vision-teal" />
    },
    {
      title: "Respostas Automáticas com IA",
      description: "Automatize respostas para as perguntas mais frequentes com inteligência artificial.",
      icon: <Zap size={24} className="text-vision-teal" />
    },
    {
      title: "Gestão de Equipes",
      description: "Organize sua equipe de atendimento com distribuição inteligente de demandas.",
      icon: <Users size={24} className="text-vision-teal" />
    }
  ];

  return (
    <div id="ativabot" ref={sectionRef} className="py-20 bg-gradient-to-br from-vision-teal/5 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-block px-3 py-1 bg-vision-teal/10 text-vision-teal rounded-full text-sm font-medium mb-4">
                SaaS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conheça o <span className="text-vision-teal">AtivaBot</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Um sistema completo de atendimento que integra ferramentas como WhatsApp, respostas automáticas com IA, gestão de equipes e relatórios detalhados, tudo para otimizar o atendimento da sua empresa.
              </p>
              
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="reveal-item opacity-0 translate-y-8 transition-all duration-700 flex gap-4"
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="h-12 w-12 rounded-lg bg-vision-teal/10 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://ativabot.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center justify-center gap-2 group bg-vision-teal hover:bg-vision-teal/90"
              >
                Visite o site do AtivaBot
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="relative reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-vision-teal/30 to-vision-purple/30 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-6 border border-vision-teal/20">
              <div className="absolute top-0 left-0 w-full h-2 bg-vision-teal"></div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-vision-teal/20 flex items-center justify-center">
                      <MessageSquare size={20} className="text-vision-teal" />
                    </div>
                    <span className="font-medium text-gray-800">AtivaBot</span>
                  </div>
                  <span className="text-xs font-medium text-vision-teal bg-vision-teal/10 px-2 py-1 rounded-full">Online</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm text-gray-700">Olá! Como posso ajudar você hoje?</p>
                    <span className="text-xs text-gray-500 mt-1 block">09:30</span>
                  </div>
                  
                  <div className="bg-vision-teal/10 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                    <p className="text-sm text-gray-700">Gostaria de saber mais sobre o AtivaBot.</p>
                    <span className="text-xs text-gray-500 mt-1 block">09:31</span>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm text-gray-700">O AtivaBot é um sistema completo para atendimento ao cliente que integra WhatsApp, IA e gestão de equipes. Posso te enviar mais informações?</p>
                    <span className="text-xs text-gray-500 mt-1 block">09:32</span>
                  </div>
                </div>
                
                <div className="relative pt-4 border-t border-gray-100">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="w-full py-2 px-4 bg-gray-100 rounded-full focus:outline-none"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-vision-teal rounded-full flex items-center justify-center">
                    <ArrowRight size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtivaBot;
