
import { useEffect, useRef, useState } from 'react';
import { Check, Code, Smartphone, Monitor, Zap, Settings, Globe, Users, MessageSquare, Layout, Palette, PenTool, FileText, BarChart, TrendingUp, Mail, Instagram, Facebook } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSegment, setActiveSegment] = useState<string>('software');

  // This useEffect handles the initial animation when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards for the currently active segment
            animateServiceCards();
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

  // This function animates the service cards for the active segment
  const animateServiceCards = () => {
    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove('opacity-0');
        el.classList.remove('translate-y-8');
      }, index * 100);
    });
  };

  // Handle segment change
  useEffect(() => {
    // Reset animation classes first
    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      el.classList.add('translate-y-8');
    });

    // Then trigger animation with a slight delay
    setTimeout(() => {
      animateServiceCards();
    }, 50);
  }, [activeSegment]);

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
          features: ['Sites institucionais', 'E-commerce', 'Sistemas web', 'Portais corporativos', 'Integrações API']
        },
        {
          title: 'Aplicativos Mobile',
          description: 'Desenvolvemos aplicativos intuitivos e funcionais para iOS e Android.',
          icon: <Smartphone size={24} className="text-vision-purple" />,
          features: ['Apps nativos', 'Apps híbridos', 'UI/UX design', 'Manutenção', 'Notificações push']
        },
        {
          title: 'Software Personalizado',
          description: 'Soluções de software sob medida para atender às necessidades específicas do seu negócio.',
          icon: <Code size={24} className="text-vision-purple" />,
          features: ['Automação', 'CRM', 'ERP', 'Integração de sistemas', 'Business Intelligence']
        },
        {
          title: 'Consultoria Técnica',
          description: 'Assessoria especializada em tecnologia e desenvolvimento de software.',
          icon: <Settings size={24} className="text-vision-purple" />,
          features: ['Arquitetura', 'Segurança', 'Soluções cloud', 'DevOps', 'Migração de sistemas']
        },
        {
          title: 'AtivaBot',
          description: 'Sistema completo de atendimento que integra WhatsApp, IA e gestão de equipes.',
          icon: <MessageSquare size={24} className="text-vision-purple" />,
          features: ['Respostas automáticas IA', 'Integração WhatsApp', 'Gestão de equipes', 'Relatórios detalhados', 'Fluxos personalizados']
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
          features: ['Criação de logo', 'Paleta de cores', 'Tipografia', 'Diretrizes da marca', 'Manual de identidade']
        },
        {
          title: 'Design Gráfico',
          description: 'Desenvolvimento de materiais gráficos para impressão e mídias digitais.',
          icon: <PenTool size={24} className="text-vision-pink" />,
          features: ['Folders', 'Cartões de visita', 'Banners', 'Papelaria', 'Catálogos']
        },
        {
          title: 'UI/UX Design',
          description: 'Designs modernos e experiências de usuário intuitivas que encantam seus clientes.',
          icon: <Layout size={24} className="text-vision-pink" />,
          features: ['Prototipagem', 'Design system', 'User testing', 'Redesign', 'Wireframes']
        },
        {
          title: 'Materiais Impressos',
          description: 'Produção de materiais impressos de alta qualidade com acabamento profissional.',
          icon: <FileText size={24} className="text-vision-pink" />,
          features: ['Revistas', 'Livros', 'Embalagens', 'Displays', 'Adesivos personalizados']
        },
        {
          title: 'Design para Redes Sociais',
          description: 'Criação de artes específicas para cada plataforma de mídia social.',
          icon: <Palette size={24} className="text-vision-pink" />,
          features: ['Posts', 'Stories', 'Capas', 'Destaques', 'Templates personalizados']
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
          features: ['Pesquisa', 'Display', 'Shopping', 'YouTube', 'Remarketing']
        },
        {
          title: 'Meta Ads',
          description: 'Campanhas de publicidade no Facebook, Instagram e WhatsApp.',
          icon: <Facebook size={24} className="text-vision-orange" />,
          features: ['Facebook Ads', 'Instagram Ads', 'Retargeting', 'Conversões', 'Catálogo de produtos']
        },
        {
          title: 'SEO',
          description: 'Otimização para mecanismos de busca, aumentando sua visibilidade orgânica.',
          icon: <TrendingUp size={24} className="text-vision-orange" />,
          features: ['Otimização on-page', 'Link building', 'SEO técnico', 'Análise de concorrência', 'Conteúdo estratégico']
        },
        {
          title: 'Email Marketing',
          description: 'Estratégias de comunicação direta e personalizada com seu público via email.',
          icon: <Mail size={24} className="text-vision-orange" />,
          features: ['Newsletters', 'Automações', 'Segmentação', 'A/B testing', 'Relatórios de performance']
        },
        {
          title: 'Analytics e Relatórios',
          description: 'Análise detalhada de dados para tomadas de decisão baseadas em evidências.',
          icon: <BarChart size={24} className="text-vision-orange" />,
          features: ['GA4', 'Pixels de conversão', 'Dashboards personalizados', 'KPIs', 'Recomendações estratégicas']
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
          features: ['Calendário editorial', 'Criação de conteúdo', 'Programação de posts', 'Engajamento', 'Relatórios mensais']
        },
        {
          title: 'Criação de Conteúdo',
          description: 'Desenvolvimento de conteúdo relevante para sua marca e público-alvo.',
          icon: <Zap size={24} className="text-vision-teal" />,
          features: ['Posts', 'Stories', 'Reels/TikTok', 'Copywriting', 'Curadoria de conteúdo']
        },
        {
          title: 'Gestão de Comunidade',
          description: 'Interação com seus seguidores e gerenciamento de comentários e mensagens.',
          icon: <MessageSquare size={24} className="text-vision-teal" />,
          features: ['Respostas', 'Moderação', 'Análise de feedback', 'SAC 2.0', 'Engajamento']
        },
        {
          title: 'Instagram Especializado',
          description: 'Estratégias exclusivas para crescimento e engajamento no Instagram.',
          icon: <Instagram size={24} className="text-vision-teal" />,
          features: ['Feed planejado', 'Stories estratégicos', 'Reels', 'IGTV', 'Hashtags otimizadas']
        },
        {
          title: 'Análise de Performance',
          description: 'Relatórios detalhados sobre o desempenho das suas redes sociais.',
          icon: <BarChart size={24} className="text-vision-teal" />,
          features: ['Métricas de engajamento', 'Alcance', 'Taxa de conversão', 'Público-alvo', 'Recomendações']
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
  const colorClass = `text-${activeSegmentData.color}`;

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
              <Card key={key} className={`w-full overflow-hidden ${activeSegment === key ? `border-${segment.color}/30` : 'border-gray-200'}`}>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-between p-4 rounded-lg ${activeSegment === key ? `bg-${segment.color}/10 text-${segment.color}` : 'bg-white text-gray-800'}`}
                  onClick={() => setActiveSegment(key)}
                >
                  <span className="font-medium">{segment.title}</span>
                  <span>{activeSegment === key ? '−' : '+'}</span>
                </Button>
                {activeSegment === key && (
                  <CardContent className="pt-2 pb-4">
                    <p className="text-gray-600">{segment.description}</p>
                  </CardContent>
                )}
              </Card>
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
                      <Check size={16} className={colorClass} />
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
