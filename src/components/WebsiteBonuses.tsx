import { Gift, Server, Globe, Shield, Mail } from "lucide-react";
import { trackConversion } from "@/utils/tracking";
import { useTranslation, Trans } from "react-i18next";

const WebsiteBonuses = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-background relative border-t border-border">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vision-tech/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <Gift className="w-10 h-10 text-vision-tech animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center">
              {t("websiteBonuses.title")}
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground text-center mb-12">
            <Trans i18nKey="websiteBonuses.subtitle">
              Fechando o seu projeto conosco, você ganha <strong className="text-foreground">1 ANO INTEIRO</strong> de domínio e hospedagem premium por nossa conta.
            </Trans>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-vision-tech/50 transition-colors shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-vision-tech/10 text-vision-tech">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t("websiteBonuses.domain.title")}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("websiteBonuses.domain.text")}
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {(t("websiteBonuses.domain.features", { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-vision-tech/50 transition-colors shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-vision-tech/10 blur-3xl rounded-full pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-lg bg-vision-tech/10 text-vision-tech">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t("websiteBonuses.hosting.title")}</h3>
              </div>
              
              <ul className="space-y-4 text-muted-foreground relative z-10">
                <li className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-vision-tech mt-1 shrink-0" />
                  <span>
                    <Trans i18nKey="websiteBonuses.hosting.performance">
                      <strong className="text-foreground">Servidor de Alta Performance:</strong> 99,9% de Uptime (tempo no ar garantido).
                    </Trans>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-vision-tech mt-1 shrink-0" />
                  <span>
                    <Trans i18nKey="websiteBonuses.hosting.security">
                      <strong className="text-foreground">Segurança:</strong> Certificado SSL (Let's Encrypt) totalmente gratuito.
                    </Trans>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-vision-tech mt-1 shrink-0" />
                  <span>
                    <Trans i18nKey="websiteBonuses.hosting.emails">
                      <strong className="text-foreground">E-mails Profissionais:</strong> 3 contas de e-mail corporativo com 10GB de espaço cada.
                    </Trans>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center p-6 rounded-xl bg-card border border-border shadow-sm">
            <p className="text-muted-foreground">
              <Trans i18nKey="websiteBonuses.disclaimer">
                * Após o período de 1 ano de gratuidade, o custo anual de renovação do servidor + contas de e-mail + certificado SSL é de apenas <strong className="text-vision-tech text-xl">R$ 150,00</strong> por ano.
              </Trans>
            </p>
          </div>

          <div className="mt-12 flex justify-center">
             <a
                href="https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20aproveitar%20o%20b%C3%B4nus%20de%20hospedagem%20gr%C3%A1tis!%20Me%20chamo:"
                onClick={() => trackConversion('click_whatsapp_bonus')}
                className="btn-tech inline-flex items-center justify-center gap-2 group text-lg font-bold shadow-[0_0_20px_rgba(45,190,204,0.3)] hover:shadow-[0_0_30px_rgba(45,190,204,0.5)] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("websiteBonuses.cta")}
              </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebsiteBonuses;
