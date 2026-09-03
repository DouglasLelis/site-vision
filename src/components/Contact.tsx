import { useState, useRef, useEffect } from "react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

type ContactProps = {
  segment?: "tech" | "design";
};

const designContactMethods = [
  {
    icon: Mail,
    titleKey: "contact.methods.email",
    content: "comercial@visiontaubate.com.br",
    href: "mailto:comercial@visiontaubate.com.br",
  },
  {
    icon: FaWhatsapp,
    titleKey: "contact.methods.whatsapp_design",
    content: "+55 (12) 981999857",
    href: "https://api.whatsapp.com/send/?phone=5512981999857&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:",
  },
  {
    icon: FaWhatsapp,
    titleKey: "contact.methods.whatsapp_tech",
    content: "+55 (12) 997856012",
    href: "https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:",
  },
];

const techContactMethods = [
  {
    icon: Mail,
    titleKey: "contact.methods.email",
    content: "comercial@visiontaubate.com.br",
    href: "mailto:comercial@visiontaubate.com.br",
  },
  {
    icon: FaWhatsapp,
    titleKey: "contact.methods.whatsapp",
    content: "+55 (12) 99785-6012",
    href: "https://api.whatsapp.com/send/?phone=5512997856012&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20tecnologia.",
  },
];

const Contact = ({ segment = "design" }: ContactProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isTech = segment === "tech";
  const contactMethods = isTech ? techContactMethods : designContactMethods;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error(t("contact.form.error"));
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success(
        t("contact.form.success")
      );
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    }, 1500);
  };

  const inputClass = isTech
    ? "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-vision-tech focus:border-vision-tech transition-colors"
    : "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-vision-500 focus:border-vision-500 transition-colors";

  const labelClass = "block text-sm font-medium text-foreground mb-1";

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="py-24 opacity-0 transition-opacity duration-1000 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          {isTech ? (
            <>
              <p className="uppercase tracking-[0.2em] text-sm mb-2 text-vision-tech">
                {t("contact.section")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-foreground">
                {t("contact.title")}
              </h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
                {t("contact.subtitle")}
              </p>
            </>
          ) : (
            <>
              <h2 className="section-header">{t("contact.title")}</h2>
              <p className="section-subheader text-muted-foreground">
                {t("contact.subtitle")}
              </p>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a key={index} href={method.href} className="block group">
                  <div
                    className={`rounded-xl p-6 transition-all duration-300 bg-card shadow-sm border border-border hover:shadow-md ${
                      isTech
                        ? "hover:border-vision-tech/40 hover:shadow-[0_0_30px_-12px_rgba(30,144,255,0.25)]"
                        : "hover:border-vision-200"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg transition-colors ${
                          isTech
                            ? "bg-vision-tech/10 group-hover:bg-vision-tech/20"
                            : "bg-vision-50 group-hover:bg-vision-100"
                        }`}
                      >
                        <Icon
                          className={`h-10 w-10 ${
                            isTech ? "text-vision-tech" : "text-vision-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-foreground">
                          {t(method.titleKey)}
                        </h3>
                        <p className="text-muted-foreground">
                          {method.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="lg:col-span-2 rounded-xl p-8 bg-card shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              {t("contact.form.title")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClass}>
                  {t("contact.form.nameLabel")}
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  {t("contact.form.emailLabel")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  {t("contact.form.messageLabel")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass}
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center ${
                  isTech ? "btn-tech" : "btn-primary"
                }`}
              >
                {loading ? t("contact.form.submitting") : t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
