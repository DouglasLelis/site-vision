
import { useEffect, useRef } from 'react';

const About = () => {
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

  const stats = [
    { value: '+100', label: 'Projetos entregues' },
    { value: '+50', label: 'Clientes satisfeitos' },
    { value: '+10', label: 'Anos de experiência' },
    { value: '+20', label: 'Especialistas' },
  ];

  return (
    <div id="about" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="section-header lg:text-left">Sobre a VisionTaubaté</h2>
              <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <p className="text-lg text-gray-600 mb-6">
                  Há mais de uma década, a VisionTaubaté vem transformando o cenário tecnológico com soluções inovadoras e personalizadas. Somos uma software house comprometida com a excelência e a satisfação dos nossos clientes.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Nossa equipe é formada por especialistas apaixonados por tecnologia, dedicados a criar soluções que não apenas atendem, mas superam as expectativas dos nossos clientes.
                </p>
                <p className="text-lg text-gray-600">
                  Trabalhamos com metodologias ágeis e as mais recentes tecnologias do mercado para garantir produtos de alta qualidade e com o melhor desempenho.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-10 space-y-10">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="reveal-item opacity-0 translate-y-8 transition-all duration-700 bg-vision-50 rounded-xl p-6 text-center"
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-vision-700 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-700 bg-vision-900 rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Nossa Missão</h3>
              <p>
                Desenvolver soluções tecnológicas inovadoras que impulsionem o crescimento dos nossos clientes e contribuam para a transformação digital dos negócios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
