import { MessageSquare, Users, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";

interface Message {
  text: string;
  sender: 'bot' | 'user';
  timestamp: string;
}

const AtivaBot = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: t("ativaBot.chat.initialMessage"),
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const mockResponses: Record<string, string> = t("ativaBot.chat.mockResponses", { returnObjects: true }) as Record<string, string>;

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(mockResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    return t("ativaBot.chat.fallbackResponse");
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

  const featuresData = [
    <MessageSquare size={24} className="text-vision-teal" />,
    <Users size={24} className="text-vision-teal" />,
    <Zap size={24} className="text-vision-teal" />
  ];

  return (
    <div id="ativabot" ref={sectionRef} className="py-20 bg-gradient-to-br from-vision-teal/5 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-block px-3 py-1 bg-vision-teal/10 text-vision-teal rounded-full text-sm font-medium mb-4">
                {t("ativaBot.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("ativaBot.title")} <span className="text-vision-teal">{t("ativaBot.titleHighlight")}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t("ativaBot.description")}
              </p>
              
              <div className="space-y-6 mb-8">
                {featuresData.map((icon, index) => {
                  const featureLabel = t(`ativaBot.features.${index}.label`);
                  return (
                    <div 
                      key={index} 
                      className="reveal-item opacity-0 translate-y-8 transition-all duration-700 flex gap-4"
                      style={{ transitionDelay: `${index * 100 + 200}ms` }}
                    >
                      <div className="h-12 w-12 rounded-lg bg-vision-teal/10 flex items-center justify-center flex-shrink-0">
                        {icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">{t(`ativaBot.features.${index}.title`)}</h3>
                          {featureLabel && featureLabel !== `ativaBot.features.${index}.label` && (
                            <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full">
                              {featureLabel}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">{t(`ativaBot.features.${index}.description`)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <a 
                href="https://ativabot.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center justify-center gap-2 group bg-vision-teal hover:bg-vision-teal/90"
                style={{ marginTop: '16px' }}
              >
                {t("ativaBot.visitSite")}
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
                  <span className="text-xs font-medium text-vision-teal bg-vision-teal/10 px-2 py-1 rounded-full">{t("ativaBot.chat.status")}</span>
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
                    placeholder={t("ativaBot.chat.inputPlaceholder")}
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
