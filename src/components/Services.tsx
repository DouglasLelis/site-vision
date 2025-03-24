
import { useEffect, useRef, useState } from 'react';
import { Check, Code, Smartphone, Monitor, Zap, Settings, Globe, Users, MessageSquare } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSegment, setActiveSegment] = useState<string>('software');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.service-card');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove('opacity-0');
                el.classList.remove('translate-y-8');
              }, index * 100);
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

  // Handle hash change to show the relevant segment
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (['software', 'design', 'marketing', 'social'].includes(hash)) {
        setActiveSegment(hash);
      }
    };

    // Check hash on mount
    handleHashChange();

    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const segments = {
    software: {
      title: 'Desenvolvimento de Software',
      description: 'Criamos soluções tecnológicas personalizadas para impulsionar seu negócio no ambiente digital.',
      color: 'vision-purple',
      services: [
        {
          title: 'Desenvolvimento Web',
          description: 'Criamos websites e aplicações web personalizadas, responsivas e de alto desempenho.',
          icon: <Monitor size={24} className="text-vision-purple" />,
          features: ['Sites institucionais', 'E-commerce', 'Sistemas web', 'Portais']
        },
        {
          title: 'Aplicativos Mobile',
          description: 'Desenvolvemos aplicativos intuitivos e funcionais para iOS e Android.',
          icon: <Smartphone size={24} className="text-vision-purple" />,
          features: ['Apps nativos', 'Apps híbridos', 'UI/UX design', 'Manutenção']
        },
        {
          title: 'Software Personalizado',
          description: 'Soluções de software sob medida para atender às necessidades específicas do seu negócio.',
          icon: <Code size={24} className="text-vision-purple" />,
          features: ['Automação', 'CRM', 'ERP', 'Integração de sistemas']
        },
        {
          title: 'Consultoria Técnica',
          description: 'Assessoria especializada em tecnologia e desenvolvimento de software.',
          icon: <Settings size={24} className="text-vision-purple" />,
          features: ['Arquitetura', 'Segurança', 'Soluções cloud', 'DevOps']
        }
      ]
    },
    design: {
      title: 'Comunicação Visual',
      description: 'Criamos sua identidade visual e materiais gráficos que transmitem os valores da sua marca.',
      color: 'vision-pink',
      services: [
        {
          title: 'Identidade Visual',
          description: 'Criação de logos e elementos visuais que representam a essência da sua marca.',
          icon: <Zap size={24} className="text-vision-pink" />,
          features: ['Criação de logo', 'Paleta de cores', 'Tipografia', 'Diretrizes da marca']
        },
        {
          title: 'Design Gráfico',
          description: 'Desenvolvimento de materiais gráficos para impressão e mídias digitais.',
          icon: <Monitor size={24} className="text-vision-pink" />,
          features: ['Folders', 'Cartões de visita', 'Banners', 'Papelaria']
        },
        {
          title: 'UI/UX Design',
          description: 'Designs modernos e experiências de usuário intuitivas que encantam seus clientes.',
          icon: <Smartphone size={24} className="text-vision-pink" />,
          features: ['Prototipagem', 'Design system', 'User testing', 'Redesign']
        }
      ]
    },
    marketing: {
      title: 'Marketing Digital',
      description: 'Gerenciamos campanhas de tráfego pago para maximizar seu alcance e conversões.',
      color: 'vision-orange',
      services: [
        {
          title: 'Google Ads',
          description: 'Campanhas otimizadas para buscas e display na rede Google.',
          icon: <Globe size={24} className="text-vision-orange" />,
          features: ['Pesquisa', 'Display', 'Shopping', 'Youtube']
        },
        {
          title: 'Meta Ads',
          description: 'Campanhas de publicidade no Facebook, Instagram e WhatsApp.',
          icon: <Users size={24} className="text-vision-orange" />,
          features: ['Facebook Ads', 'Instagram Ads', 'Retargeting', 'Conversões']
        },
        {
          title: 'SEO',
          description: 'Otimização para mecanismos de busca, aumentando sua visibilidade orgânica.',
          icon: <Zap size={24} className="text-vision-orange" />,
          features: ['Otimização on-page', 'Link building', 'SEO técnico', 'Análise de concorrência']
        }
      ]
    },
    social: {
      title: 'Redes Sociais',
      description: 'Gerenciamos suas redes sociais com conteúdo estratégico para engajar seu público-alvo.',
      color: 'vision-teal',
      services: [
        {
          title: 'Gestão de Redes Sociais',
          description: 'Administração completa das suas redes sociais com planejamento estratégico.',
          icon: <Users size={24} className="text-vision-teal" />,
          features: ['Calendário editorial', 'Criação de conteúdo', 'Programação de posts', 'Engajamento']
        },
        {
          title: 'Criação de Conteúdo',
          description: 'Desenvolvimento de conteúdo relevante para sua marca e público-alvo.',
          icon: <Zap size={24} className="text-vision-teal" />,
          features: ['Posts', 'Stories', 'Reels/TikTok', 'Copywriting']
        },
        {
          title: 'Gestão de Comunidade',
          description: 'Interação com seus seguidores e gerenciamento de comentários e mensagens.',
          icon: <MessageSquare size={24} className="text-vision-teal" />,
          features: ['Respostas', 'Moderação', 'Análise de feedback', 'SAC 2.0']
        }
      ]
    }
  };

  const renderSegmentButton = (segmentKey: string, segment: any) => {
    const isActive = activeSegment === segmentKey;
    const baseClasses = `text-lg font-medium px-5 py-3 rounded-lg transition-all duration-300 flex-1 text-center border`;
    
    const activeClasses = {
      software: `bg-vision-purple/10 text-vision-purple border-vision-purple/30`,
      design: `bg-vision-pink/10 text-vision-pink border-vision-pink/30`,
      marketing: `bg-vision-orange/10 text-vision-orange border-vision-orange/30`,
      social: `bg-vision-teal/10 text-vision-teal border-vision-teal/30`
    };
    
    return (
      <button
        key={segmentKey}
        className={`${baseClasses} ${isActive ? activeClasses[segmentKey as keyof typeof activeClasses] : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}`}
        onClick={() => {
          setActiveSegment(segmentKey);
          window.history.pushState(null, '', `#${segmentKey}`);
        }}
      >
        {segment.title}
      </button>
    );
  };

  const activeSegmentData = segments[activeSegment as keyof typeof segments];

  return (
    <>
      <div id="services" ref={sectionRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-header">Nossos Serviços</h2>
            <p className="section-subheader">
              Soluções completas de tecnologia, design e marketing para cada etapa do seu projeto
            </p>
          </div>

          {/* Segment Navigation - Desktop */}
          <div className="hidden md:flex space-x-4 mb-12">
            {Object.entries(segments).map(([key, segment]) => 
              renderSegmentButton(key, segment)
            )}
          </div>

          {/* Segment Navigation - Mobile */}
          <div className="md:hidden space-y-2 mb-8">
            {Object.entries(segments).map(([key, segment]) => (
              <Collapsible
                key={key}
                open={activeSegment === key}
                onOpenChange={() => setActiveSegment(key)}
                className="w-full"
              >
                <CollapsibleTrigger className={`w-full text-left p-4 rounded-lg ${activeSegment === key ? `bg-${segment.color}/10 text-${segment.color}` : 'bg-white'} border mb-1`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{segment.title}</span>
                    <span>{activeSegment === key ? '−' : '+'}</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden transition-all duration-300">
                  <div className="p-4 bg-white rounded-lg border border-t-0 -mt-1 mb-2">
                    <p className="text-gray-600">{segment.description}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          {/* Active Segment Description - Desktop */}
          <div className="hidden md:block mb-12">
            <div className={`p-6 rounded-xl bg-${activeSegmentData.color}/10 border border-${activeSegmentData.color}/20`}>
              <p className="text-lg text-center text-gray-700">{activeSegmentData.description}</p>
            </div>
          </div>

          <div id={activeSegment} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeSegmentData.services.map((service: any, index: number) => (
              <div 
                key={index}
                className={`service-card bg-white rounded-xl p-6 shadow-md border border-${activeSegmentData.color}/20 transition-all duration-500 opacity-0 translate-y-8 hover:shadow-lg`}
              >
                <div className={`h-12 w-12 rounded-lg bg-${activeSegmentData.color}/10 flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check size={16} className={`text-${activeSegmentData.color}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show AtivaBot section when Software segment is active */}
      {activeSegment === 'software' && <div id="ativabot-anchor"></div>}
    </>
  );
};

export default Services;
