
import { Check, Code, Smartphone, Monitor, Zap, Settings } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Criamos websites e aplicações web personalizadas, responsivas e de alto desempenho.',
      icon: <Monitor size={24} className="text-vision-600" />,
      features: ['Sites institucionais', 'E-commerce', 'Sistemas web', 'Portais']
    },
    {
      title: 'Aplicativos Mobile',
      description: 'Desenvolvemos aplicativos intuitivos e funcionais para iOS e Android.',
      icon: <Smartphone size={24} className="text-vision-600" />,
      features: ['Apps nativos', 'Apps híbridos', 'UI/UX design', 'Manutenção']
    },
    {
      title: 'Software Personalizado',
      description: 'Soluções de software sob medida para atender às necessidades específicas do seu negócio.',
      icon: <Code size={24} className="text-vision-600" />,
      features: ['Automação', 'CRM', 'ERP', 'Integração de sistemas']
    },
    {
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada em tecnologia e desenvolvimento de software.',
      icon: <Settings size={24} className="text-vision-600" />,
      features: ['Arquitetura', 'Segurança', 'Soluções cloud', 'DevOps']
    },
    {
      title: 'UI/UX Design',
      description: 'Designs modernos e experiências de usuário intuitivas que encantam seus clientes.',
      icon: <Zap size={24} className="text-vision-600" />,
      features: ['Prototipagem', 'Design system', 'User testing', 'Redesign']
    },
  ];

  return (
    <div id="services" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-header">Nossos Serviços</h2>
          <p className="section-subheader">
            Soluções completas de tecnologia para cada etapa do seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-500 opacity-0 translate-y-8 hover:shadow-lg"
            >
              <div className="h-12 w-12 rounded-lg bg-vision-50 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-vision-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <Check size={16} className="text-vision-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
