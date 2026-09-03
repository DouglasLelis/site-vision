import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
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

  const stats = t('about.stats', { returnObjects: true }) as { value: string; label: string }[];

  return (
    <div id="about" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4 md:px-6 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4">
          <div>
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="section-header lg:text-left">{t('about.title')}</h2>
              <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <p className="text-lg text-gray-600 mb-6">
                  {t('about.p1')}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  {t('about.p2')}
                </p>
                <p className="text-lg text-gray-600">
                  {t('about.p3')}
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
              <h3 className="text-xl font-semibold mb-4">{t('about.mission.title')}</h3>
              <p>
                {t('about.mission.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
