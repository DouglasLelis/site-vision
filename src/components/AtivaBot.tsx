import { MessageSquare, Users, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Message {
  text: string;
  sender: 'bot' | 'user';
  timestamp: string;
}

const AtivaBot = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Olá! Como posso ajudar você hoje?',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const mockResponses: Record<string, string> = {
    'ola': 'Olá! Como posso ajudar você hoje?',
    'oi': 'Oi! Em que posso ser útil?',
    'ativabot': 'O AtivaBot é um sistema completo para atendimento ao cliente que integra WhatsApp, IA e gestão de equipes. Posso te enviar mais informações?',
    'preco': 'O AtivaBot tem planos a partir de R$ 99/mês. Quer saber mais detalhes sobre os planos?',
    'planos': 'Temos planos para todos os tamanhos de empresa. O plano básico inclui integração com WhatsApp e respostas automáticas. O plano premium inclui IA avançada e relatórios detalhados.',
    'whatsapp': 'Sim! O AtivaBot se integra perfeitamente com o WhatsApp da sua empresa, permitindo atendimento unificado e eficiente.',
    'ia': 'Nossa IA é treinada para entender o contexto das conversas e fornecer respostas precisas. Ela aprende com cada interação para melhorar continuamente.',
    'equipe': 'O AtivaBot permite gerenciar sua equipe de atendimento, distribuir demandas automaticamente e acompanhar o desempenho de cada atendente.',
    'ajuda': 'Posso te ajudar com informações sobre: preços, planos, integração com WhatsApp, IA, gestão de equipes e muito mais! O que você gostaria de saber?',
    'obrigado': 'Por nada! Estou à disposição para ajudar com mais alguma coisa?',
    'tchau': 'Até logo! Se precisar de mais alguma coisa, estou aqui!'
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(mockResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    return 'Desculpe, não entendi. Você poderia reformular sua pergunta? Posso te ajudar com informações sobre preços, planos, integração com WhatsApp, IA e gestão de equipes.';
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Efeito para scroll automático quando as mensagens mudam
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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

  const features: Array<{
    title: string;
    description: string;
    icon: JSX.Element;
    label?: string;
  }> = [
    {
      title: "Centralize o Atendimento",
      description: "Centralize o atendimento em um único canal, seja WhatsApp, Facebook, Instagram, Telegram e outros, tudo em um único lugar.",
      icon: <MessageSquare size={24} className="text-vision-teal" />
    },
    {
      title: "Gestão de Equipes",
      description: "Organize sua equipe de atendimento com distribuição inteligente de demandas.",
      icon: <Users size={24} className="text-vision-teal" />
    },
    {
      title: "Respostas Automáticas com IA",
      description: "Automatize respostas para as perguntas mais frequentes com inteligência artificial.",
      icon: <Zap size={24} className="text-vision-teal" />,
      label: "Em Breve"

    },
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
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                        {feature.label && (
                          <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full">
                            {feature.label}
                          </span>
                        )}
                      </div>
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
                style={{ marginTop: '16px' }}
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
                
                <div 
                  ref={chatContainerRef}
                  className="space-y-4 h-[300px] overflow-y-auto"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(16, 185, 129, 0.2) transparent',
                  }}
                >
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        message.sender === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg max-w-[80%] ${
                          message.sender === 'user'
                            ? 'bg-vision-teal/10 rounded-tr-none'
                            : 'bg-gray-100 rounded-tl-none'
                        }`}
                      >
                        <p className="text-sm text-gray-700">{message.text}</p>
                        <span className="text-xs text-gray-500 mt-1 block">{message.timestamp}</span>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                
                <div className="relative pt-4 border-t border-gray-100">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="w-full py-2 px-4 bg-gray-100 rounded-full focus:outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-vision-teal rounded-full flex items-center justify-center hover:bg-vision-teal/90 transition-colors"
                  >
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
