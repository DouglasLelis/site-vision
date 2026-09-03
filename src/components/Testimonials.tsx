import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

type TestimonialsProps = {
  segment?: "tech" | "design";
};

const testimonials = [
  {
    name: "Artur Pinheiro",
    role: "Cliente, Gráfica",
    image: "/lovable-uploads/cliente.jpg",
    text: "Excelente atendimento, sempre faço meus cartões e panfletos. melhor preço de Taubaté.!",
    stars: 5,
  },
  {
    name: "Patricia Braga",
    role: "Cliente, Stella Braga Turismo",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUiTVXZHS3WFAf3twgcVWm20NcvyaPWAdlYz2RL4GH9ymqBf0Uk=w60-h60-p-rp-mo-ba3-br100",
    text: "Adorei o serviço prestado. Estão de parabéns!! Agilidade, qualidade e ótimo valor.",
    stars: 5,
  },
  {
    name: "Margareth de Faria",
    role: "Cliente, Gráfica",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXgQcfAVvln8Rq0K4Y8SD_cl682K7vA5K-8Iq7s4D80YKgpmrnluA=w60-h60-p-rp-mo-ba3-br100",
    text: "O atendimento é maravilhoso. Preço muito bom,  e a qualidade do serviço superou minhas expectativas. ",
    stars: 5,
  },
];

const Testimonials = ({ segment = "design" }: TestimonialsProps) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isTech = segment === "tech";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
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

  return (
    <div
      id="testimonials"
      ref={sectionRef}
      className="py-24 opacity-0 transition-opacity duration-1000 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          {isTech ? (
            <>
              <p className="uppercase tracking-[0.2em] text-sm mb-2 text-vision-tech">
                {t("testimonials.section")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-foreground">
                {t("testimonials.title")}
              </h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
                {t("testimonials.subtitle")}
              </p>
            </>
          ) : (
            <>
              <h2 className="section-header text-foreground">{t("testimonials.title")}</h2>
              <p className="section-subheader text-muted-foreground">
                {t("testimonials.subtitle")}
              </p>
            </>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="rounded-2xl p-8 bg-card border border-border shadow-md">
                      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-vision-tech/30"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "/lovable-uploads/cliente.jpg";
                          }}
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {t(`testimonials.list.${index}.name`)}
                          </h3>
                          <p className="text-muted-foreground">
                            {t(`testimonials.list.${index}.role`)}
                          </p>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < testimonial.stars
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-muted"
                                }
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="italic text-muted-foreground">
                        "{t(`testimonials.list.${index}.text`)}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-vision-tech"
                      : "w-2 bg-muted hover:bg-vision-tech/50"
                  }`}
                  aria-label={t("testimonials.goTo", { index: index + 1 })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
